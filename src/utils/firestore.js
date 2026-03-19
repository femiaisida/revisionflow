// src/utils/firestore.js
import {
  doc, collection, addDoc, updateDoc, deleteDoc,
  getDoc, getDocs, query, where, orderBy, limit,
  serverTimestamp, arrayUnion, arrayRemove, increment,
  writeBatch, onSnapshot
} from 'firebase/firestore'
import { db } from '../firebase'
import { XP_REWARDS, LEVELS, BADGES } from '../data/subjects'

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
  // Firestore doesn't support full-text search natively.
  // We fetch all users and filter client-side (works for small user bases).
  // For scale, use Algolia or Typesense.
  const snap = await getDocs(collection(db, 'users'))
  const lower = name.toLowerCase()
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(u =>
      (u.displayName && u.displayName.toLowerCase().includes(lower)) ||
      (u.username    && u.username.toLowerCase().includes(lower))
    )
    .slice(0, 10)  // limit results
}

// ── XP & GAMIFICATION ────────────────────────────────────────────────────────
export async function awardXP(uid, amount, reason) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return
  const current = snap.data()
  const newXP = (current.xp || 0) + amount
  const newLevel = LEVELS.findIndex(l => l.xpRequired > newXP) || LEVELS.length
  await updateDoc(ref, {
    xp: increment(amount),
    level: Math.max(1, newLevel),
    xpLog: arrayUnion({ amount, reason, ts: new Date().toISOString() })
  })
}

export async function checkAndAwardBadge(uid, badgeId) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return
  const badges = snap.data().badges || []
  if (badges.includes(badgeId)) return
  const badge = BADGES.find(b => b.id === badgeId)
  if (!badge) return
  await updateDoc(ref, { badges: arrayUnion(badgeId) })
  await awardXP(uid, badge.xp, `Badge: ${badge.name}`)
}

export async function updateStreak(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return
  const data = snap.data()
  const today = new Date().toDateString()
  const last = data.lastSessionDate
  if (last === today) return data.streak
  const yesterday = new Date(Date.now() - 86400000).toDateString()
  const newStreak = last === yesterday ? (data.streak || 0) + 1 : 1
  await updateDoc(ref, { streak: newStreak, lastSessionDate: today })
  await awardXP(uid, XP_REWARDS.streakDay, 'Daily streak')
  if (newStreak === 3)  await checkAndAwardBadge(uid, 'streak_3')
  if (newStreak === 7)  await checkAndAwardBadge(uid, 'streak_7')
  if (newStreak === 30) await checkAndAwardBadge(uid, 'streak_30')
  return newStreak
}

// ── SESSIONS ─────────────────────────────────────────────────────────────────
export async function addSession(uid, session) {
  const ref = await addDoc(collection(db, 'users', uid, 'sessions'), {
    ...session,
    completed: false,
    createdAt: serverTimestamp(),
  })
  if (session.source === 'import') {
    await checkAndAwardBadge(uid, 'calendar_import')
  }
  return ref.id
}

export async function updateSession(uid, sessionId, data) {
  await updateDoc(doc(db, 'users', uid, 'sessions', sessionId), {
    ...data,
    updatedAt: serverTimestamp()
  })
}

export async function completeSession(uid, sessionId, notes = '') {
  await updateDoc(doc(db, 'users', uid, 'sessions', sessionId), {
    completed: true,
    completedAt: serverTimestamp(),
    notes,
  })
  await awardXP(uid, XP_REWARDS.sessionCompleted, 'Session completed')
  await updateStreak(uid)
  const snap = await getDocs(collection(db, 'users', uid, 'sessions'))
  const completedCount = snap.docs.filter(d => d.data().completed).length
  if (completedCount === 1)   await checkAndAwardBadge(uid, 'first_session')
  if (completedCount === 100) await checkAndAwardBadge(uid, 'session_100')
  // Check all_subjects badge: all subjects revised in the last 7 days
  const userSnap = await getDoc(doc(db, 'users', uid))
  const userSubjects = (userSnap.data()?.subjects || []).map(s => s.name)
  if (userSubjects.length > 0) {
    const sevenDaysAgo = new Date(Date.now() - 7*24*60*60*1000)
    const recentSnap = await getDocs(collection(db, 'users', uid, 'sessions'))
    const recentSubjects = new Set(
      recentSnap.docs
        .filter(d => {
          const t = d.data().createdAt?.toDate?.() || new Date(d.data().startTime || 0)
          return t > sevenDaysAgo && d.data().completed
        })
        .map(d => d.data().subject)
    )
    const allCovered = userSubjects.every(s => recentSubjects.has(s))
    if (allCovered) await checkAndAwardBadge(uid, 'all_subjects')
  }
}

export async function getSessions(uid, options = {}) {
  let q = collection(db, 'users', uid, 'sessions')
  if (options.subject) {
    q = query(q, where('subject', '==', options.subject), orderBy('startTime', 'desc'))
  } else {
    q = query(q, orderBy('startTime', 'desc'))
  }
  if (options.limit) q = query(q, limit(options.limit))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// ── PAST PAPERS ───────────────────────────────────────────────────────────────
export async function savePaperAttempt(uid, attempt) {
  const ref = await addDoc(collection(db, 'users', uid, 'paperAttempts'), {
    ...attempt,
    createdAt: serverTimestamp(),
  })
  await awardXP(uid, XP_REWARDS.paperCompleted, 'Paper completed')
  const snap = await getDocs(collection(db, 'users', uid, 'paperAttempts'))
  if (snap.size === 10) await checkAndAwardBadge(uid, 'paper_10')
  if (snap.size === 50) await checkAndAwardBadge(uid, 'paper_50')
  if (attempt.grade === '9' || attempt.grade === 9) await checkAndAwardBadge(uid, 'grade_9')
  if (attempt.percentage >= 100) await checkAndAwardBadge(uid, 'perfect_paper')
  return ref.id
}

export async function deletePaperAttempt(uid, attemptId) {
  await deleteDoc(doc(db, 'users', uid, 'paperAttempts', attemptId))
  // Deduct XP for the deleted paper
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (snap.exists()) {
    const newXP = Math.max(0, (snap.data().xp || 0) - XP_REWARDS.paperCompleted)
    await updateDoc(ref, { xp: newXP })
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
  const ref = doc(db, 'users', uid, 'topics', `${subjectId}_${topic.name.replace(/\s/g,'_')}`)
  await updateDoc(ref, { ...topic, updatedAt: serverTimestamp() }).catch(async () => {
    await ref.set({ ...topic, createdAt: serverTimestamp(), updatedAt: serverTimestamp() })
  })
  await awardXP(uid, XP_REWARDS.topicConfidenceUpdated, 'Topic confidence updated')
}

export async function getTopics(uid, subjectId) {
  const q = query(collection(db, 'users', uid, 'topics'),
    where('subjectId', '==', subjectId))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// ── MISTAKES ──────────────────────────────────────────────────────────────────
export async function addMistake(uid, mistake) {
  const ref = await addDoc(collection(db, 'users', uid, 'mistakes'), {
    ...mistake, resolved: false, createdAt: serverTimestamp(),
  })
  await awardXP(uid, XP_REWARDS.mistakeLogged, 'Mistake logged')
  const snap = await getDocs(collection(db, 'users', uid, 'mistakes'))
  if (snap.size === 20) await checkAndAwardBadge(uid, 'mistake_log_20')
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
  await awardXP(uid, XP_REWARDS.noteAdded, 'Note added')
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
    completed: done, completedAt: done ? serverTimestamp() : null
  })
}

export async function deleteTask(uid, taskId) {
  await deleteDoc(doc(db, 'users', uid, 'tasks', taskId))
}

// ── FRIENDS ──────────────────────────────────────────────────────────────────
export async function sendFriendRequest(fromUid, toUid) {
  await updateDoc(doc(db, 'users', toUid), { friendRequests: arrayUnion(fromUid) })
}

export async function acceptFriendRequest(uid, fromUid) {
  const batch = writeBatch(db)
  batch.update(doc(db, 'users', uid), {
    friends: arrayUnion(fromUid),
    friendRequests: arrayRemove(fromUid),
  })
  batch.update(doc(db, 'users', fromUid), { friends: arrayUnion(uid) })
  await batch.commit()
  await awardXP(uid, XP_REWARDS.friendAdded, 'Friend added')
  // Check friend_5 badge
  const snap = await getDoc(doc(db, 'users', uid))
  const friendCount = (snap.data()?.friends || []).length
  if (friendCount >= 5) await checkAndAwardBadge(uid, 'friend_5')
}

export async function declineFriendRequest(uid, fromUid) {
  await updateDoc(doc(db, 'users', uid), { friendRequests: arrayRemove(fromUid) })
}

export async function removeFriend(uid, friendUid) {
  const batch = writeBatch(db)
  batch.update(doc(db, 'users', uid), { friends: arrayRemove(friendUid) })
  batch.update(doc(db, 'users', friendUid), { friends: arrayRemove(uid) })
  await batch.commit()
}

export async function getFriendProfiles(friendUids) {
  if (!friendUids.length) return []
  const profiles = await Promise.all(friendUids.map(uid => getDoc(doc(db, 'users', uid))))
  return profiles.filter(s => s.exists()).map(s => ({ id: s.id, ...s.data() }))
}

// ── PAPER DATABASE (community) ────────────────────────────────────────────────
export async function submitPaperStructure(uid, paperData) {
  await addDoc(collection(db, 'paperStructures'), {
    ...paperData, submittedBy: uid, approved: false, createdAt: serverTimestamp(),
  })
}

export async function getPaperStructures(filters = {}) {
  let q = collection(db, 'paperStructures')
  if (filters.board)   q = query(q, where('board', '==', filters.board))
  if (filters.subject) q = query(q, where('subject', '==', filters.subject))
  if (filters.year)    q = query(q, where('year', '==', filters.year))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// ── LEADERBOARD ───────────────────────────────────────────────────────────────
export async function getGlobalLeaderboard(limit = 50) {
  // Returns top users by XP who have opted into the global leaderboard
  // All users visible by default (showOnGlobalLeaderboard !== false)
  const snap = await getDocs(collection(db, 'users'))
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(u => u.showOnGlobalLeaderboard !== false)
    .sort((a,b) => (b.xp||0) - (a.xp||0))
    .slice(0, limit)
    .map(u => ({
      id: u.id,
      displayName: u.hideNameFromLeaderboard ? 'Anonymous' : (u.displayName || 'Student'),
      level: u.level || 1,
      xp: u.xp || 0,
      streak: u.streak || 0,
      badges: (u.badges || []).length,
    }))
}

export async function getLeaderboard(friendUids, currentUid) {
  const uids = [...friendUids, currentUid]
  const profiles = await Promise.all(uids.map(uid => getDoc(doc(db, 'users', uid))))
  return profiles
    .filter(s => s.exists())
    .map(s => ({ id: s.id, ...s.data() }))
    .sort((a, b) => (b.xp || 0) - (a.xp || 0))
}
