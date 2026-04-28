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
  increment
} from 'firebase/firestore'

/* =========================
   FIREBASE INIT
========================= */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

/* =========================
   AUTH
========================= */

const googleProvider = new GoogleAuthProvider()

export async function loginWithGoogle() {
  return signInWithPopup(auth, googleProvider)
}

export async function loginWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export async function signupWithEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export async function resetPassword(email) {
  return sendPasswordResetEmail(auth, email)
}

export async function logout() {
  return signOut(auth)
}

/* =========================
   USER SETUP + STREAK
========================= */

export async function ensureUser(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)

  if (!snap.exists()) {
    await setDoc(ref, {
      createdAt: serverTimestamp(),
      xp: 0,
      streak: 0,
      lastLogin: null,
      badges: []
    })
  }
}

export async function updateStreakOnLogin(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)

  if (!snap.exists()) return

  const data = snap.data()
  const now = new Date()
  const lastLogin = data.lastLogin?.toDate?.()

  let streak = data.streak || 0

  if (lastLogin) {
    const diff = Math.floor((now - lastLogin) / (1000 * 60 * 60 * 24))
    if (diff === 1) streak++
    else if (diff > 1) streak = 1
  } else {
    streak = 1
  }

  await updateDoc(ref, {
    streak,
    lastLogin: serverTimestamp()
  })
}

/* =========================
   XP + BADGES
========================= */

export async function awardXP(uid, amount) {
  const ref = doc(db, 'users', uid)

  await updateDoc(ref, {
    xp: increment(amount)
  })

  // Award XP specifically from timer sessions
export async function awardTimerXP(uid, seconds) {
  if (!uid || !seconds) return

  // simple conversion: 1 XP per minute
  const xp = Math.floor(seconds / 60)

  if (xp <= 0) return

  await awardXP(uid, xp)
}

  await checkAndAwardBadge(uid)
}

export async function checkAndAwardBadge(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)

  if (!snap.exists()) return

  const data = snap.data()
  const xp = data.xp || 0
  const badges = data.badges || []

  const updated = [...badges]

  if (xp >= 100 && !updated.includes('100_XP')) updated.push('100_XP')
  if (xp >= 500 && !updated.includes('500_XP')) updated.push('500_XP')
  if (xp >= 1000 && !updated.includes('1000_XP')) updated.push('1000_XP')

  if (updated.length !== badges.length) {
    await updateDoc(ref, { badges: updated })
  }
}

/* =========================
   SESSIONS
========================= */

export async function addSession(uid, session) {
  const ref = await addDoc(collection(db, 'users', uid, 'sessions'), {
    ...session,
    createdAt: serverTimestamp(),
    completed: false
  })
  return ref.id
}

export async function getSessions(uid) {
  const snap = await getDocs(
    query(
      collection(db, 'users', uid, 'sessions'),
      orderBy('createdAt', 'desc')
    )
  )
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function completeSession(uid, sessionId) {
  const ref = doc(db, 'users', uid, 'sessions', sessionId)
  await updateDoc(ref, {
    completed: true,
    completedAt: serverTimestamp()
  })
}

export async function updateSession(uid, sessionId, updates) {
  const ref = doc(db, 'users', uid, 'sessions', sessionId)
  await updateDoc(ref, updates)
}

export async function deleteSession(uid, sessionId) {
  const ref = doc(db, 'users', uid, 'sessions', sessionId)
  await deleteDoc(ref)
}

/* =========================
   TASKS
========================= */

export async function addTask(uid, task) {
  const ref = await addDoc(collection(db, 'users', uid, 'tasks'), {
    ...task,
    createdAt: serverTimestamp(),
    completed: false
  })
  return ref.id
}

export async function getTasks(uid) {
  const snap = await getDocs(
    query(
      collection(db, 'users', uid, 'tasks'),
      orderBy('createdAt', 'desc')
    )
  )
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function completeTask(uid, taskId) {
  const ref = doc(db, 'users', uid, 'tasks', taskId)
  await updateDoc(ref, {
    completed: true,
    completedAt: serverTimestamp()
  })
}

export async function updateTask(uid, taskId, updates) {
  const ref = doc(db, 'users', uid, 'tasks', taskId)
  await updateDoc(ref, updates)
}

export async function deleteTask(uid, taskId) {
  const ref = doc(db, 'users', uid, 'tasks', taskId)
  await deleteDoc(ref)
}

/* =========================
   PAPER ATTEMPTS
========================= */

export async function addPaperAttempt(uid, attempt) {
  const ref = await addDoc(collection(db, 'users', uid, 'paperAttempts'), {
    ...attempt,
    createdAt: serverTimestamp()
  })
  return ref.id
}

export async function getPaperAttempts(uid) {
  const snap = await getDocs(
    query(
      collection(db, 'users', uid, 'paperAttempts'),
      orderBy('createdAt', 'desc')
    )
  )
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function updatePaperAttempt(uid, attemptId, updates) {
  const ref = doc(db, 'users', uid, 'paperAttempts', attemptId)
  await updateDoc(ref, updates)
}

export async function deletePaperAttempt(uid, attemptId) {
  const ref = doc(db, 'users', uid, 'paperAttempts', attemptId)
  await deleteDoc(ref)
}
