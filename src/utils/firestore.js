// src/utils/firestore.js
import { initializeApp } from 'firebase/app'
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, addDoc, deleteDoc,
  getDocs, collection, query, where, orderBy, limit,
  serverTimestamp, runTransaction, arrayUnion, arrayRemove,
} from 'firebase/firestore'
import {
  getAuth,
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db   = getFirestore(app)
export const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export function loginWithEmail(email, password) { return signInWithEmailAndPassword(auth, email, password) }
export function signupWithEmail(email, password) { return createUserWithEmailAndPassword(auth, email, password) }
export function loginWithGoogle() { return signInWithPopup(auth, googleProvider) }
export function resetPassword(email) { return sendPasswordResetEmail(auth, email) }

export const DEFAULT_USER = {
  xp: 0, level: 1, streak: 0, lastLoginDate: null,
  badges: [], friends: [], quests: { daily: {}, lastReset: null },
  displayName: '', username: '', avatarUrl: '', subjects: [],
  referralCode: '', referredBy: '', totalSessions: 0, totalPapers: 0,
}

export async function ensureUser(uid, extra = {}) {
  const ref  = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) {
    const data = { ...DEFAULT_USER, ...extra, createdAt: serverTimestamp() }
    await setDoc(ref, data)
    return data
  }
  const existing = snap.data()
  const missing  = {}
  for (const [k, v] of Object.entries(DEFAULT_USER)) {
    if (existing[k] === undefined) missing[k] = v
  }
  if (Object.keys(missing).length > 0) await updateDoc(ref, missing)
  return { ...DEFAULT_USER, ...existing }
}

export async function updateUserProfile(uid, updates) {
  await updateDoc(doc(db, 'users', uid), updates)
}

export async function getUserByUsername(username) {
  const q    = query(collection(db, 'users'), where('username', '==', username), limit(1))
  const snap = await getDocs(q)
  if (snap.empty) return null
  return { uid: snap.docs[0].id, ...snap.docs[0].data() }
}

export async function searchUsersByName(name) {
  const snap  = await getDocs(query(collection(db, 'users'), orderBy('displayName'), limit(20)))
  const lower = name.toLowerCase()
  return snap.docs
    .map(d => ({ uid: d.id, ...d.data() }))
    .filter(u => u.displayName?.toLowerCase().includes(lower) || u.username?.toLowerCase().includes(lower))
}

export async function awardXP(uid, amount, _reason = '') {
  const ref = doc(db, 'users', uid)
  await runTransaction(db, async tx => {
    const snap = await tx.get(ref)
    if (!snap.exists()) return
    tx.update(ref, { xp: (snap.data().xp || 0) + amount })
  })
}

export async function checkAndAwardBadge(uid, badgeId) {
  const snap = await getDoc(doc(db, 'users', uid))
  if (!snap.exists()) return
  if ((snap.data().badges || []).includes(badgeId)) return
  await updateDoc(doc(db, 'users', uid), { badges: arrayUnion(badgeId) })
}

export async function updateStreakOnLogin(uid) {
  const snap = await getDoc(doc(db, 'users', uid))
  if (!snap.exists()) return
  const { lastLoginDate, streak = 0 } = snap.data()
  const today     = new Date().toDateString()
  const yesterday = new Date(Date.now() - 86400000).toDateString()
  if (lastLoginDate === today) return
  const newStreak = lastLoginDate === yesterday ? streak + 1 : 1
  await updateDoc(doc(db, 'users', uid), { streak: newStreak, lastLoginDate: today })
}

export async function completeSession(uid, sessionId, notes = '') {
  await updateDoc(doc(db, 'users', uid, 'sessions', sessionId), {
    completed: true, notes, completedAt: serverTimestamp(),
  })
  await awardXP(uid, 20, 'session_complete')
}

export async function completeTask(uid, taskId, done = true) {
  await updateDoc(doc(db, 'users', uid, 'sessions', taskId), { completed: done })
}

export async function updateSession(uid, sessionId, updates) {
  await updateDoc(doc(db, 'users', uid, 'sessions', sessionId), updates)
}

export async function deleteSession(uid, sessionId) {
  await deleteDoc(doc(db, 'users', uid, 'sessions', sessionId))
}

export async function addTask(uid, task) {
  return addDoc(collection(db, 'users', uid, 'tasks'), { ...task, createdAt: serverTimestamp(), completed: false })
}

export async function getTasks(uid) {
  const snap = await getDocs(collection(db, 'users', uid, 'tasks'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function deleteTask(uid, taskId) {
  await deleteDoc(doc(db, 'users', uid, 'tasks', taskId))
}

export async function saveNote(uid, note) {
  if (note.id) {
    const { id, ...data } = note
    await updateDoc(doc(db, 'users', uid, 'notes', id), { ...data, updatedAt: serverTimestamp() })
    return id
  }
  return (await addDoc(collection(db, 'users', uid, 'notes'), { ...note, createdAt: serverTimestamp() })).id
}

export async function getNotes(uid) {
  const snap = await getDocs(query(collection(db, 'users', uid, 'notes'), orderBy('createdAt', 'desc')))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function deleteNote(uid, noteId) {
  await deleteDoc(doc(db, 'users', uid, 'notes', noteId))
}

export async function addMistake(uid, mistake) {
  return addDoc(collection(db, 'users', uid, 'mistakes'), { ...mistake, createdAt: serverTimestamp(), resolved: false })
}

export async function getMistakes(uid) {
  const snap = await getDocs(query(collection(db, 'users', uid, 'mistakes'), orderBy('createdAt', 'desc')))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function resolveMistake(uid, mistakeId) {
  await updateDoc(doc(db, 'users', uid, 'mistakes', mistakeId), { resolved: true, resolvedAt: serverTimestamp() })
}

export async function savePaperAttempt(uid, attempt) {
  const ref      = await addDoc(collection(db, 'users', uid, 'paperAttempts'), { ...attempt, createdAt: serverTimestamp() })
  const userSnap = await getDoc(doc(db, 'users', uid))
  if (userSnap.exists()) await updateDoc(doc(db, 'users', uid), { totalPapers: (userSnap.data().totalPapers || 0) + 1 })
  return ref
}

export async function getPaperAttempts(uid) {
  const snap = await getDocs(query(collection(db, 'users', uid, 'paperAttempts'), orderBy('createdAt', 'desc')))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function updatePaperAttempt(uid, attemptId, updates) {
  await updateDoc(doc(db, 'users', uid, 'paperAttempts', attemptId), updates)
}

export async function deletePaperAttempt(uid, attemptId) {
  await deleteDoc(doc(db, 'users', uid, 'paperAttempts', attemptId))
}

export async function getPaperStructures() {
  const snap = await getDocs(collection(db, 'paperStructures'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function submitPaperStructure(structure) {
  return addDoc(collection(db, 'paperStructures'), { ...structure, submittedAt: serverTimestamp() })
}

export async function sendFriendRequest(fromUid, toUid) {
  await setDoc(doc(db, 'friendRequests', `${fromUid}_${toUid}`), {
    from: fromUid, to: toUid, sentAt: serverTimestamp(), status: 'pending',
  })
}

export async function acceptFriendRequest(fromUid, myUid) {
  await updateDoc(doc(db, 'friendRequests', `${fromUid}_${myUid}`), { status: 'accepted' })
  await updateDoc(doc(db, 'users', myUid),   { friends: arrayUnion(fromUid) })
  await updateDoc(doc(db, 'users', fromUid), { friends: arrayUnion(myUid) })
}

export async function declineFriendRequest(fromUid, myUid) {
  await deleteDoc(doc(db, 'friendRequests', `${fromUid}_${myUid}`))
}

export async function removeFriend(myUid, friendUid) {
  await updateDoc(doc(db, 'users', myUid),     { friends: arrayRemove(friendUid) })
  await updateDoc(doc(db, 'users', friendUid), { friends: arrayRemove(myUid) })
}

export async function getReceivedRequests(uid) {
  const snap = await getDocs(query(collection(db, 'friendRequests'), where('to', '==', uid), where('status', '==', 'pending')))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function getFriendProfiles(friendUids) {
  if (!friendUids?.length) return []
  const results = []
  for (const uid of friendUids) {
    try {
      const snap = await getDoc(doc(db, 'users', uid))
      if (snap.exists()) results.push({ uid, ...snap.data() })
    } catch (e) { console.error('[firestore] getFriendProfiles:', uid, e) }
  }
  return results
}

export async function getLeaderboard(friendUids = []) {
  if (!friendUids.length) return []
  return (await getFriendProfiles(friendUids)).sort((a, b) => (b.xp || 0) - (a.xp || 0))
}

export async function getGlobalLeaderboard(n = 20) {
  const snap = await getDocs(query(collection(db, 'users'), orderBy('xp', 'desc'), limit(n)))
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }))
}
