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
  serverTimestamp
} from 'firebase/firestore'

// 🔑 Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// 🔥 Init
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

/* =========================
   AUTH
========================= */

const googleProvider = new GoogleAuthProvider()

export async function loginWithGoogle() {
  return await signInWithPopup(auth, googleProvider)
}

export async function loginWithEmail(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
}

export async function signupWithEmail(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export async function resetPassword(email) {
  return await sendPasswordResetEmail(auth, email)
}

export async function logout() {
  return await signOut(auth)
}

/* =========================
   USER SETUP + STREAK
========================= */

// ✅ FIX: ensureUser (missing before)
export async function ensureUser(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)

  if (!snap.exists()) {
    await setDoc(ref, {
      createdAt: serverTimestamp(),
      streak: 0,
      lastLogin: null
    })
  }
}

// ✅ FIX: updateStreakOnLogin (missing before)
export async function updateStreakOnLogin(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)

  if (!snap.exists()) return

  const data = snap.data()
  const now = new Date()
  const lastLogin = data.lastLogin?.toDate?.()

  let newStreak = data.streak || 0

  if (lastLogin) {
    const diffDays = Math.floor(
      (now - lastLogin) / (1000 * 60 * 60 * 24)
    )

    if (diffDays === 1) newStreak += 1
    else if (diffDays > 1) newStreak = 1
  } else {
    newStreak = 1
  }

  await updateDoc(ref, {
    streak: newStreak,
    lastLogin: serverTimestamp()
  })
}

/* =========================
   SESSIONS
========================= */

export async function addSession(uid, session) {
  const ref = await addDoc(collection(db, 'users', uid, 'sessions'), {
    ...session,
    createdAt: serverTimestamp()
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
    createdAt: serverTimestamp()
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
