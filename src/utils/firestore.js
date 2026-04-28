// src/utils/firestore.js

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'

/* =========================
   SESSIONS
========================= */

// CREATE
export async function addSession(uid, session) {
  const ref = await addDoc(collection(db, 'users', uid, 'sessions'), {
    ...session,
    createdAt: serverTimestamp()
  })
  return ref.id
}

// READ (FIXED - this was missing)
export async function getSessions(uid) {
  const snap = await getDocs(
    query(
      collection(db, 'users', uid, 'sessions'),
      orderBy('createdAt', 'desc')
    )
  )
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// UPDATE
export async function updateSession(uid, sessionId, updates) {
  const ref = doc(db, 'users', uid, 'sessions', sessionId)
  await updateDoc(ref, updates)
}

// DELETE
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
