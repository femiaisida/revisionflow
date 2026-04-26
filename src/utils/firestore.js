// src/utils/firestore.js
import {
  doc, collection, addDoc, updateDoc, deleteDoc,
  getDoc, getDocs, query, where, orderBy, limit,
  serverTimestamp, arrayUnion, arrayRemove, increment,
  writeBatch, onSnapshot, setDoc
} from 'firebase/firestore'
import { db } from '../firebase'
import { XP_REWARDS, BADGES } from '../data/subjects'
import { BADGE_MAP } from '../data/badges'

// ── Infinite level system ─────────────────────────────────────────────────────
// Level n requires: floor(100 * 1.15^(n-1)) XP total (exponential curve)
// This is computed on-the-fly so there is NO level cap.
export function xpForLevel(n) {
  return Math.floor(100 * Math.pow(1.15, n - 1))
}

// Given total XP, return what level the user should be
export function levelFromXP(totalXP) {
  if (totalXP < 0) return 1
  let level = 1
  let cumulative = 0
  while (true) {
    const needed = xpForLevel(level)
    if (cumulative + needed > totalXP) break
    cumulative += needed
    level++
    if (level > 9999) break // safety
  }
  return level
}

// XP needed to reach the NEXT level from current level
export function xpToNextLevel(currentLevel) {
  return xpForLevel(currentLevel)
}

// Title for any level (cycles through tiers)
export function titleForLevel(level) {
  const TIERS = [
    { min: 1,   title: 'Beginner' },
    { min: 5,   title: 'Learner' },
    { min: 10,  title: 'Student' },
    { min: 15,  title: 'Scholar' },
    { min: 20,  title: 'Achiever' },
    { min: 25,  title: 'Expert' },
    { min: 30,  title: 'Master' },
    { min: 40,  title: 'Elite' },
    { min: 50,  title: 'Champion' },
    { min: 60,  title: 'Legend' },
    { min: 75,  title: 'Grandmaster' },
    { min: 100, title: 'Mythic' },
  ]
  const tier = [...TIERS].reverse().find(t => level >= t.min)
  return tier ? tier.title : 'Beginner'
}

// ── USER ─────────────────────────────────────────────────────────────────────
export async function updateUserProfile(uid, data) {
  await updateDoc(doc(db, 'users', uid), { ...data, updatedAt: serverTimestamp() })
}

export async function getUserByUsername(username) {
  const q = query(collection(db, 'users'), where('username', '==', username.toLowerCase()))
  const snap = await getDocs(q)
  return snap.empty ? null : { id: snap.docs[0].id, ...snap.docs[0].data() }
}

export async function searchUsersByName(name) {
  const snap = await getDocs(collection(db, 'users'))
  const lower = name.toLowerCase()
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(u =>
      (u.displayName && u.displayName.toLowerCase().includes(lower)) ||
      (u.username    && u.username.toLowerCase().includes(lower))
    )
    .slice(0, 10)
}

// ── XP & LEVELS ──────────────────────────────────────────────────────────────
export async function awardXP(uid, amount, reason) {
  if (!amount || amount <= 0) return
  const ref  = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return

  const current = snap.data()
  const newXP   = (current.xp || 0) + amount

  // FIXED: compute level from total XP using formula, not a fixed array
  const newLevel = levelFromXP(newXP)

  await updateDoc(ref, {
    xp:    increment(amount),
    level: newLevel,
  })
}

export async function checkAndAwardBadge(uid, badgeId) {
  if (!BADGE_MAP[badgeId]) return false
  const userRef = doc(db, 'users', uid)
  const snap    = await getDoc(userRef)
  const current = snap.data()?.badges || []
  if (current.includes(badgeId)) return false
  const badge = BADGE_MAP[badgeId]
  await updateDoc(userRef, {
    badges:    arrayUnion(badgeId),
    xp:        increment(badge.xp || 0),
    updatedAt: serverTimestamp(),
  })
  // Recompute level after badge XP
  const afterSnap = await getDoc(userRef)
  const newLevel  = levelFromXP(afterSnap.data()?.xp || 0)
  await updateDoc(userRef, { level: newLevel })
  return true
}

export async function updateStreak(uid) {
  const ref  = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return
  const data    = snap.data()
  const today   = new Date().toISOString().substring(0, 10)
  const last    = data.lastSessionDate

  if (last === today) return data.streak

  const yesterday  = new Date(Date.now() - 86400000).toISOString().substring(0, 10)
  const newStreak  = last === yesterday ? (data.streak || 0) + 1 : 1

  await updateDoc(ref, {
    streak:          newStreak,
    lastSessionDate: today,
    updatedAt:       serverTimestamp(),
  })

  await awardXP(uid, XP_REWARDS.streakDay || 10, 'Daily streak')
  if (newStreak === 3)   await checkAndAwardBadge(uid, 'streak_3')
  if (newStreak === 7)   await checkAndAwardBadge(uid, 'streak_7')
  if (newStreak === 14)  await checkAndAwardBadge(uid, 'streak_14')
  if (newStreak === 30)  await checkAndAwardBadge(uid, 'streak_30')
  if (newStreak === 100) await checkAndAwardBadge(uid, 'streak_100')
  return newStreak
}

// ── SESSIONS ─────────────────────────────────────────────────────────────────
export async function addSession(uid, session) {
  const ref = await addDoc(collection(db, 'users', uid, 'sessions'), {
    ...session,
    completed: false,
    createdAt: serverTimestamp(),
  })
  return ref.id
}

export async function updateSession(uid, sessionId, data) {
  await updateDoc(doc(db, 'users', uid, 'sessions', sessionId), {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteSession(uid, sessionId) {
  const sessionRef = doc(db, 'users', uid, 'sessions', sessionId)
  const snap = await getDoc(sessionRef)
  await deleteDoc(sessionRef)
  if (snap.exists() && snap.data().completed) {
    const userRef  = doc(db, 'users', uid)
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) {
      const newXP    = Math.max(0, (userSnap.data().xp || 0) - (XP_REWARDS.sessionCompleted || 25))
      const newLevel = levelFromXP(newXP)
      await updateDoc(userRef, { xp: newXP, level: newLevel })
    }
  }
}

export async function completeSession(uid, sessionId, notes = '', durationMinutes = 0) {
  await updateDoc(doc(db, 'users', uid, 'sessions', sessionId), {
    completed:   true,
    completedAt: serverTimestamp(),
    notes,
  })

  // Base XP for completing a session
  const baseXP = XP_REWARDS.sessionCompleted || 25
  // Bonus XP for longer sessions: +5 XP per 15 minutes beyond the first 25
  const bonusXP = durationMinutes >= 25 ? Math.floor((durationMinutes - 25) / 15) * 5 : 0
  const totalXP = baseXP + bonusXP

  await awardXP(uid, totalXP, `Session completed (${durationMinutes} min)`)
  await updateStreak(uid)

  const snap           = await getDocs(collection(db, 'users', uid, 'sessions'))
  const completedCount = snap.docs.filter(d => d.data().completed).length
  if (completedCount === 1)   await checkAndAwardBadge(uid, 'first_session')
  if (completedCount === 100) await checkAndAwardBadge(uid, 'session_100')
}

// ── TIMER XP ─────────────────────────────────────────────────────────────────
// Call this from Timer.jsx when a countdown timer finishes
export async function awardTimerXP(uid, durationMinutes) {
  if (!uid || durationMinutes < 1) return 0
  // 5 XP per 5 minutes, capped at 100 XP per session
  const xp = Math.min(100, Math.floor(durationMinutes / 5) * 5)
  if (xp > 0) {
    await awardXP(uid, xp, `Timer session (${durationMinutes} min)`)
    // Award marathon badge for 120-min sessions
    if (durationMinutes >= 120) await checkAndAwardBadge(uid, 'marathon_session')
  }
  return xp
}

export async function getSessions(uid, options = {}) {
  let q = collection(db, 'users', uid, 'sessions')
  if (options.subject) q = query(q, where('subject', '==', options.subject))
  if (options.limit)   q = query(q, limit(options.limit))
  const snap = await getDocs(q)
  const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }))
  return docs.sort((a, b) => {
    const ta = a.startTime ? new Date(a.startTime).getTime() : (a.createdAt?.seconds || 0) * 1000
    const tb = b.startTime ? new Date(b.startTime).getTime() : (b.createdAt?.seconds || 0) * 1000
    return tb - ta
  })
}

// ── PAST PAPERS ───────────────────────────────────────────────────────────────
export async function savePaperAttempt(uid, attempt) {
  const ref = await addDoc(collection(db, 'users', uid, 'paperAttempts'), {
    ...attempt,
    createdAt: serverTimestamp(),
  })
  await awardXP(uid, XP_REWARDS.paperCompleted || 50, 'Paper completed')
  const snap = await getDocs(collection(db, 'users', uid, 'paperAttempts'))
  if (snap.size === 1)  await checkAndAwardBadge(uid, 'first_paper')
  if (snap.size === 10) await checkAndAwardBadge(uid, 'ten_papers')
  if (snap.size === 50) await checkAndAwardBadge(uid, 'fifty_papers')
  if (attempt.percentage >= 90) await checkAndAwardBadge(uid, 'full_marks')
  return ref.id
}

export async function deletePaperAttempt(uid, attemptId) {
  await deleteDoc(doc(db, 'users', uid, 'paperAttempts', attemptId))
  const ref  = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (snap.exists()) {
    const newXP    = Math.max(0, (snap.data().xp || 0) - (XP_REWARDS.paperCompleted || 50))
    const newLevel = levelFromXP(newXP)
    await updateDoc(ref, { xp: newXP, level: newLevel })
  }
}

export async function updatePaperAttempt(uid, attemptId, data) {
  await updateDoc(doc(db, 'users', uid, 'paperAttempts', attemptId), {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function getPaperAttempts(uid, subject) {
  let q = collection(db, 'users', uid, 'paperAttempts')
  if (subject) q = query(q, where('subject', '==', subject), orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// ── TOPICS ─────────────────────────────────────────────────────────────────
export async function saveTopicData(uid, subjectId, topic) {
  const ref = doc(db, 'users', uid, 'topics', `${subjectId}_${topic.name.replace(/\s/g, '_').replace(/[^a-zA-Z0-9_]/g, '')}`)
  try {
    await updateDoc(ref, { ...topic, updatedAt: serverTimestamp() })
  } catch {
    await setDoc(ref, { ...topic, createdAt: serverTimestamp(), updatedAt: serverTimestamp() })
  }
  await awardXP(uid, XP_REWARDS.topicConfidenceUpdated || 5, 'Topic confidence updated')
}

export async function getTopics(uid, subjectId) {
  const q    = query(collection(db, 'users', uid, 'topics'), where('subjectId', '==', subjectId))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// ── MISTAKES ──────────────────────────────────────────────────────────────────
export async function addMistake(uid, mistake) {
  const ref = await addDoc(collection(db, 'users', uid, 'mistakes'), {
    ...mistake, resolved: false, createdAt: serverTimestamp(),
  })
  await awardXP(uid, XP_REWARDS.mistakeLogged || 10, 'Mistake logged')
  return ref.id
}

export async function getMistakes(uid, subject) {
  let q = collection(db, 'users', uid, 'mistakes')
  if (subject) q = query(q, where('subject', '==', subject))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function resolveMistake(uid, mistakeId) {
  await updateDoc(doc(db, 'users', uid, 'mistakes', mistakeId), { resolved: true })
  await awardXP(uid, 15, 'Mistake resolved')
  await checkAndAwardBadge(uid, 'resolve_mistake')
}

// ── NOTES ─────────────────────────────────────────────────────────────────
export async function saveNote(uid, note) {
  if (note.id) {
    await updateDoc(doc(db, 'users', uid, 'notes', note.id), { ...note, updatedAt: serverTimestamp() })
    return note.id
  }
  const ref = await addDoc(collection(db, 'users', uid, 'notes'), {
    ...note, createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
  })
  await awardXP(uid, XP_REWARDS.noteAdded || 10, 'Note added')
  await checkAndAwardBadge(uid, 'add_note')
  return ref.id
}

export async function getNotes(uid, subject) {
  let q = collection(db, 'users', uid, 'notes')
  if (subject) q = query(q, where('subject', '==', subject))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function deleteNote(uid, noteId) {
  await deleteDoc(doc(db, 'users', uid, 'notes', noteId))
}

// ── TASKS ─────────────────────────────────────────────────────────────────
export async function addTask(uid, task) {
  const ref = await addDoc(collection(db, 'users', uid, 'tasks'), {
    ...task, completed: false, createdAt: serverTimestamp(),
  })
  return ref.id
}

export async function getTasks(uid) {
  const snap = await getDocs(query(collection(db, 'users', uid, 'tasks'), orderBy('dueDate', 'asc')))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function completeTask(uid, taskId, done) {
  await updateDoc(doc(db, 'users', uid, 'tasks', taskId), {
    completed: done, completedAt: done ? serverTimestamp() : null,
  })
  if (done) await awardXP(uid, 20, 'Task completed')
}

export async function deleteTask(uid, taskId) {
  await deleteDoc(doc(db, 'users', uid, 'tasks', taskId))
}

// ── DAILY QUESTS ──────────────────────────────────────────────────────────────
export async function completeQuestInFirestore(uid, questId, xp) {
  const today = new Date().toISOString().substring(0, 10)
  const ref   = doc(db, 'users', uid, 'quests', today)
  await setDoc(ref, { [questId]: true, updatedAt: serverTimestamp() }, { merge: true })
  await awardXP(uid, xp, `Daily quest: ${questId}`)
}

export async function getTodayQuestProgress(uid) {
  const today = new Date().toISOString().substring(0, 10)
  const snap  = await getDoc(doc(db, 'users', uid, 'quests', today))
  return snap.exists() ? snap.data() : {}
}

// Auto-complete a specific quest when the relevant action is performed
// Call this from the relevant pages (Papers, Topics, Timer, AI, etc.)
export async function autoCompleteQuest(uid, questId) {
  const today    = new Date().toISOString().substring(0, 10)
  const ref      = doc(db, 'users', uid, 'quests', today)
  const snap     = await getDoc(ref)
  const progress = snap.exists() ? snap.data() : {}

  if (progress[questId]) return false // already done today

  const QUEST_XP = {
    log_session:     30,
    rate_topics:     20,
    log_paper:       40,
    use_ai:          15,
    timer_25:        25,
    resolve_mistake: 20,
    add_note:        15,
    check_topics:    10,
  }

  const xp = QUEST_XP[questId] || 15
  await setDoc(ref, { [questId]: true, updatedAt: serverTimestamp() }, { merge: true })
  await awardXP(uid, xp, `Auto quest: ${questId}`)

  // Check if all 3 daily quests complete for bonus
  // (This is approximate - checks if 3+ quest keys are true)
  const updated  = await getDoc(ref)
  const done     = Object.entries(updated.data() || {})
    .filter(([k, v]) => k !== 'updatedAt' && v === true).length
  if (done === 3) {
    await awardXP(uid, 50, 'All daily quests complete')
    await checkAndAwardBadge(uid, 'quests_complete')
  }
  return true
}

// ── FRIENDS ──────────────────────────────────────────────────────────────────
export async function sendFriendRequest(fromUid, toUid) {
  await updateDoc(doc(db, 'users', fromUid), {
    sentFriendRequests: arrayUnion(toUid),
    updatedAt:          serverTimestamp(),
  })
}

export async function acceptFriendRequest(uid, fromUid) {
  await updateDoc(doc(db, 'users', uid), {
    friends:        arrayUnion(fromUid),
    friendRequests: arrayRemove(fromUid),
    updatedAt:      serverTimestamp(),
  })
  await awardXP(uid, XP_REWARDS.friendAdded || 25, 'Friend added')
  const snap       = await getDoc(doc(db, 'users', uid))
  const friendCount = (snap.data()?.friends || []).length
  if (friendCount >= 1) await checkAndAwardBadge(uid, 'first_friend')
  if (friendCount >= 3) await checkAndAwardBadge(uid, 'three_friends')
}

export async function declineFriendRequest(uid, fromUid) {
  await updateDoc(doc(db, 'users', uid), {
    declinedFriendRequests: arrayUnion(fromUid),
    updatedAt:              serverTimestamp(),
  })
}

export async function removeFriend(uid, friendUid) {
  await updateDoc(doc(db, 'users', uid), {
    friends:   arrayRemove(friendUid),
    updatedAt: serverTimestamp(),
  })
}

export async function getReceivedRequests(uid) {
  const q    = query(collection(db, 'users'), where('sentFriendRequests', 'array-contains', uid))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function getFriendProfiles(friendUids) {
  if (!friendUids.length) return []
  const profiles = await Promise.all(friendUids.map(uid => getDoc(doc(db, 'users', uid))))
  return profiles.filter(s => s.exists()).map(s => ({ id: s.id, ...s.data() }))
}

// ── LEADERBOARD ───────────────────────────────────────────────────────────────
export async function getGlobalLeaderboard(maxResults = 50) {
  const snap = await getDocs(collection(db, 'users'))
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(u => u.showOnGlobalLeaderboard !== false)
    .sort((a, b) => (b.xp || 0) - (a.xp || 0))
    .slice(0, maxResults)
    .map(u => ({
      id:          u.id,
      displayName: u.hideNameFromLeaderboard ? 'Anonymous' : (u.displayName || 'Student'),
      level:       u.level || 1,
      xp:          u.xp || 0,
      streak:      u.streak || 0,
      badges:      (u.badges || []).length,
      profileIcon: u.profileIcon || 'lightning',
    }))
}

export async function getLeaderboard(friendUids, currentUid) {
  const uids     = [...new Set([...friendUids, currentUid])]
  const profiles = await Promise.all(uids.map(uid => getDoc(doc(db, 'users', uid))))
  return profiles
    .filter(s => s.exists())
    .map(s => ({ id: s.id, ...s.data() }))
    .sort((a, b) => (b.xp || 0) - (a.xp || 0))
}

// ── REFERRAL ──────────────────────────────────────────────────────────────────
export async function ensureReferralCodeOnLogin(uid) {
  try {
    const ref  = doc(db, 'users', uid)
    const snap = await getDoc(ref)
    if (!snap.data()?.referralCode) {
      await setDoc(ref, { referralCode: uid.slice(0, 8).toUpperCase() }, { merge: true })
    }
  } catch (e) { /* silent */ }
}

// ── PAPER DATABASE (community) ────────────────────────────────────────────────
export async function submitPaperStructure(uid, paperData) {
  await addDoc(collection(db, 'paperStructures'), {
    ...paperData, submittedBy: uid, approved: false, createdAt: serverTimestamp(),
  })
}

export async function getPaperStructures(filters = {}) {
  let q = collection(db, 'paperStructures')
  if (filters.board)   q = query(q, where('board',   '==', filters.board))
  if (filters.subject) q = query(q, where('subject', '==', filters.subject))
  if (filters.year)    q = query(q, where('year',    '==', filters.year))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}
