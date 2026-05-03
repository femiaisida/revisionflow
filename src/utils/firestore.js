// src/utils/firestore.js

import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  query,
  orderBy,
  serverTimestamp,
  increment,
  where,
  limit
} from 'firebase/firestore'
import { BADGE_MAP } from '../data/badges'

/* =========================
   INIT
========================= */

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db   = getFirestore(app)

/* =========================
   AUTH
========================= */

const googleProvider = new GoogleAuthProvider()

export const loginWithGoogle  = ()       => signInWithPopup(auth, googleProvider)
export const loginWithEmail   = (e, p)   => signInWithEmailAndPassword(auth, e, p)
export const signupWithEmail  = (e, p)   => createUserWithEmailAndPassword(auth, e, p)
export const resetPassword    = (e)      => sendPasswordResetEmail(auth, e)
export const logout           = ()       => signOut(auth)

/* =========================
   USER / PROFILE
========================= */

export async function ensureUser(uid, initialData = {}) {
  const ref          = doc(db, 'users', uid)
  const snap         = await getDoc(ref)
  // Referral code is always the first 8 chars of uid — deterministic, no query needed
  const referralCode = uid.slice(0, 8).toUpperCase()

  if (!snap.exists()) {
    await setDoc(ref, {
      createdAt:    serverTimestamp(),
      xp:           0,
      streak:       0,
      lastLogin:    null,
      badges:       [],
      friends:      [],
      referralCode,
      displayName:  initialData.displayName || '',
      profile: {
        displayName: initialData.displayName || '',
        email:       initialData.email       || '',
        avatarUrl:   initialData.avatarUrl   || '',
      },
    })
  } else {
    // Patch any fields missing from old accounts
    const existing = snap.data()
    const patches  = {}
    if (!existing.referralCode)                                    patches.referralCode           = referralCode
    if (!existing.displayName  && initialData.displayName)         patches.displayName             = initialData.displayName
    if (!existing.profile?.displayName && initialData.displayName) patches['profile.displayName'] = initialData.displayName
    if (Object.keys(patches).length > 0) await updateDoc(ref, patches)
  }
}

// Write top-level fields directly (not nested under profile:{})
export const updateUserProfile = (uid, updates) =>
  updateDoc(doc(db, 'users', uid), updates)

// Unlock a specific profile icon (stored as unlockedIcons array)
export const unlockReferralIcon = async (uid) => {
  const ref  = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return
  const current = snap.data().unlockedIcons || []
  if (!current.includes('rocket')) {
    await updateDoc(ref, { unlockedIcons: [...current, 'rocket'] })
  }
}

/* =========================
   STREAK
========================= */

export async function updateStreakOnLogin(uid) {
  const ref  = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return

  const data         = snap.data()
  const now          = new Date()
  const todayStr     = now.toDateString()
  const lastLogin    = data.lastLogin?.toDate ? data.lastLogin.toDate() : null
  const lastLoginStr = lastLogin ? lastLogin.toDateString() : null

  if (lastLoginStr === todayStr) return // already updated today

  const yesterday    = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStr = yesterday.toDateString()

  const currentStreak = data.streak || 0
  const newStreak     = lastLoginStr === yesterdayStr ? currentStreak + 1 : 1

  await updateDoc(ref, { streak: newStreak, lastLogin: serverTimestamp() })

  // Award streak XP
  await awardXP(uid, 10)
  if (newStreak === 7)  await checkAndAwardBadge(uid, 'streak_7')
  if (newStreak === 30) await checkAndAwardBadge(uid, 'streak_30')
}

/* =========================
   XP / LEVELS / BADGES
========================= */

// Infinite level formula (100 * 1.15^(n-1))
export function xpForLevel(n) {
  return Math.floor(100 * Math.pow(1.15, n - 1))
}

export function levelFromXP(totalXP) {
  let level = 1, cumulative = 0
  while (true) {
    const needed = xpForLevel(level)
    if (cumulative + needed > totalXP) break
    cumulative += needed
    level++
  }
  return level
}

export const awardXP = async (uid, amount) => {
  if (!uid || !amount || amount <= 0) return
  await updateDoc(doc(db, 'users', uid), { xp: increment(amount) })
}

export const awardTimerXP = async (uid, seconds) => {
  // 1 XP per minute, max 100 XP per session
  const xp = Math.min(Math.floor(seconds / 60), 100)
  if (xp > 0) await awardXP(uid, xp)
}

export const checkAndAwardBadge = async (uid, badgeId) => {
  if (!uid || !badgeId) return
  const badge = BADGE_MAP[badgeId]
  if (!badge) return

  const ref  = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return

  const earned = snap.data().badges || []
  if (earned.includes(badgeId)) return

  await updateDoc(ref, {
    badges: [...earned, badgeId],
    xp:     increment(badge.xp || 0),
  })
}

/* =========================
   DAILY QUESTS
========================= */

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

export const autoCompleteQuest = async (uid, questId) => {
  if (!uid || !questId) return

  const today = new Date().toISOString().slice(0, 10)
  const ref   = doc(db, 'users', uid, 'quests', today)
  const snap  = await getDoc(ref)

  const data      = snap.exists() ? snap.data() : { completed: [] }
  const completed = data.completed || []
  if (completed.includes(questId)) return

  const newCompleted = [...completed, questId]
  const xp           = QUEST_XP[questId] || 10

  await setDoc(ref, { completed: newCompleted }, { merge: true })
  await awardXP(uid, xp)

  // Bonus for all-3 complete
  if (newCompleted.length >= 3 && !data.bonusAwarded) {
    await setDoc(ref, { bonusAwarded: true }, { merge: true })
    await awardXP(uid, 50)
    await checkAndAwardBadge(uid, 'quests_complete')
  }
}

/* =========================
   LEADERBOARD
========================= */

export const getLeaderboard = async (friendUids, currentUid) => {
  if (!friendUids || friendUids.length === 0) return []

  const uids     = [...new Set([...friendUids, currentUid].filter(Boolean))]
  const profiles = await Promise.all(
    uids.map(async uid => {
      try {
        const snap = await getDoc(doc(db, 'users', uid))
        if (!snap.exists()) return null
        const d = snap.data()
        return {
          uid,
          displayName:             d.displayName || d.profile?.displayName || d.profile?.name || 'Anonymous',
          xp:                      d.xp || 0,
          streak:                  d.streak || 0,
          profileIcon:             d.profileIcon || null,
          hideNameFromLeaderboard: d.hideNameFromLeaderboard || d.profile?.hideNameFromLeaderboard || false,
          isCurrentUser:           uid === currentUid,
        }
      } catch { return null }
    })
  )

  return profiles.filter(Boolean).sort((a, b) => b.xp - a.xp)
}

export const getGlobalLeaderboard = async (maxResults = 100) => {
  try {
    const q    = query(collection(db, 'users'), orderBy('xp', 'desc'), limit(maxResults))
    const snap = await getDocs(q)
    return snap.docs.map(d => {
      const data = d.data()
      return {
        uid:                     d.id,
        displayName:             data.displayName || data.profile?.displayName || data.profile?.name || 'Anonymous',
        xp:                      data.xp || 0,
        streak:                  data.streak || 0,
        profileIcon:             data.profileIcon || null,
        hideNameFromLeaderboard: data.hideNameFromLeaderboard || data.profile?.hideNameFromLeaderboard || false,
      }
    })
  } catch { return [] }
}

/* =========================
   SESSIONS
   XP: +50 on complete, +bonus for long sessions
========================= */

export const addSession = async (uid, data) => {
  const ref = await addDoc(collection(db, 'users', uid, 'sessions'), {
    ...data,
    createdAt: serverTimestamp(),
  })
  return ref.id
}

export const getSessions = async (uid) => {
  const snap = await getDocs(collection(db, 'users', uid, 'sessions'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const completeSession = async (uid, id, notes = '') => {
  // Mark the session complete
  await updateDoc(doc(db, 'users', uid, 'sessions', id), {
    completed: true,
    notes:     notes || '',
  })
  // Award XP: base 50, +25 if session is 60+ mins
  const snap = await getDoc(doc(db, 'users', uid, 'sessions', id))
  const dur  = snap.exists() ? (snap.data().duration || 0) : 0
  const xp   = dur >= 60 ? 75 : 50
  await awardXP(uid, xp)
  await autoCompleteQuest(uid, 'log_session')
  // First session badge
  await checkAndAwardBadge(uid, 'first_session')
}

export const updateSession = (uid, id, data) =>
  updateDoc(doc(db, 'users', uid, 'sessions', id), data)

export const deleteSession = (uid, id) =>
  deleteDoc(doc(db, 'users', uid, 'sessions', id))

/* =========================
   TASKS
   XP: +20 on complete
========================= */

export const addTask = async (uid, task) => {
  const ref = await addDoc(collection(db, 'users', uid, 'tasks'), task)
  return ref.id
}

export const getTasks = async (uid) => {
  const snap = await getDocs(collection(db, 'users', uid, 'tasks'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const completeTask = async (uid, id, done = true) => {
  await updateDoc(doc(db, 'users', uid, 'tasks', id), { completed: done })
  if (done) await awardXP(uid, 20)
}

export const updateTask = (uid, id, data) =>
  updateDoc(doc(db, 'users', uid, 'tasks', id), data)

export const deleteTask = (uid, id) =>
  deleteDoc(doc(db, 'users', uid, 'tasks', id))

/* =========================
   NOTES
   XP: +10 on save
========================= */

export const saveNote = async (uid, note) => {
  const ref = await addDoc(collection(db, 'users', uid, 'notes'), {
    ...note,
    createdAt: serverTimestamp(),
  })
  await awardXP(uid, 10)
  await autoCompleteQuest(uid, 'add_note')
  return ref.id
}

export const getNotes = async (uid) => {
  const snap = await getDocs(collection(db, 'users', uid, 'notes'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const deleteNote = (uid, id) =>
  deleteDoc(doc(db, 'users', uid, 'notes', id))

/* =========================
   MISTAKES
   XP: +10 on log, +20 on resolve
========================= */

export const addMistake = async (uid, data) => {
  const ref = await addDoc(collection(db, 'users', uid, 'mistakes'), {
    ...data,
    createdAt: serverTimestamp(),
  })
  await awardXP(uid, 10)
  return ref.id
}

export const getMistakes = async (uid) => {
  const snap = await getDocs(collection(db, 'users', uid, 'mistakes'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const resolveMistake = async (uid, id) => {
  await updateDoc(doc(db, 'users', uid, 'mistakes', id), { resolved: true })
  await awardXP(uid, 20)
  await autoCompleteQuest(uid, 'resolve_mistake')
}

/* =========================
   PAPER ATTEMPTS
   XP: +100 on save
========================= */

export const savePaperAttempt = async (uid, data) => {
  const ref = await addDoc(collection(db, 'users', uid, 'paperAttempts'), {
    ...data,
    createdAt: serverTimestamp(),
  })
  await awardXP(uid, 100)
  await autoCompleteQuest(uid, 'log_paper')
  await checkAndAwardBadge(uid, 'first_paper')
  return ref.id
}

export const getPaperAttempts = async (uid) => {
  const snap = await getDocs(collection(db, 'users', uid, 'paperAttempts'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const updatePaperAttempt = (uid, id, data) =>
  updateDoc(doc(db, 'users', uid, 'paperAttempts', id), data)

export const deletePaperAttempt = (uid, id) =>
  deleteDoc(doc(db, 'users', uid, 'paperAttempts', id))

/* =========================
   PAPER STRUCTURES
========================= */

export const getPaperStructures = async (uid) => {
  const snap = await getDocs(collection(db, 'users', uid, 'paperStructures'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const submitPaperStructure = async (uid, data) => {
  const ref = await addDoc(collection(db, 'users', uid, 'paperStructures'), data)
  return ref.id
}

/* =========================
   FRIENDS SYSTEM
========================= */

export const sendFriendRequest = async (fromUid, toUid) => {
  await addDoc(collection(db, 'friendRequests'), {
    from:      fromUid,
    to:        toUid,
    createdAt: serverTimestamp(),
  })
}

export const getReceivedRequests = async (uid) => {
  const q    = query(collection(db, 'friendRequests'), where('to', '==', uid))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const acceptFriendRequest = async (requestId, fromUid, toUid) => {
  await updateDoc(doc(db, 'users', fromUid), { friends: increment(1) })
  await updateDoc(doc(db, 'users', toUid),   { friends: increment(1) })
  await deleteDoc(doc(db, 'friendRequests', requestId))
  // Award XP to both
  await awardXP(fromUid, 25)
  await awardXP(toUid,   25)
}

export const declineFriendRequest = (requestId) =>
  deleteDoc(doc(db, 'friendRequests', requestId))

export const removeFriend    = async () => {}
export const getFriendProfiles  = async () => []
export const getUserByUsername  = async () => null
export const searchUsersByName  = async () => []
