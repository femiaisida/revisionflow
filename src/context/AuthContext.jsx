// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signInWithPopup,
  signOut, updateProfile, sendPasswordResetEmail
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp, onSnapshot } from 'firebase/firestore'
import { auth, db, googleProvider } from '../firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unsubSnapshot = null

    const unsubAuth = onAuthStateChanged(auth, async (u) => {
      setUser(u)
      if (u) {
        // Real-time listener for the user profile
        unsubSnapshot = onSnapshot(doc(db, 'users', u.uid), (snap) => {
          if (snap.exists()) setProfile(snap.data())
        })
      } else {
        if (unsubSnapshot) unsubSnapshot()
        setProfile(null)
      }
      setLoading(false)
    })

    return () => {
      unsubAuth()
      if (unsubSnapshot) unsubSnapshot()
    }
  }, [])

  async function createUserDoc(u, extra = {}) {
    const ref = doc(db, 'users', u.uid)
    const snap = await getDoc(ref)
    if (!snap.exists()) {
      const data = {
        uid: u.uid,
        email: u.email,
        displayName: u.displayName || extra.displayName || 'Student',
        photoURL: u.photoURL || null,
        createdAt: serverTimestamp(),
        xp: 0,
        level: 1,
        streak: 0,
        lastSessionDate: null,
        subjects: [],
        friends: [],
        friendRequests: [],
        sentFriendRequests: [],
        settings: { theme: 'dark', profilePublic: true, friendsCanSeeGrades: true },
        onboardingComplete: false,
        streak: 0,
        lastSessionDate: '',
        startingGrades: {},
        ...extra,
      }
      await setDoc(ref, data)
      setProfile(data)
    } else {
      setProfile(snap.data())
    }
  }

  async function signup(email, password, displayName) {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(cred.user, { displayName })
    await createUserDoc(cred.user, { displayName })
    return cred
  }

  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  async function loginWithGoogle() {
    const cred = await signInWithPopup(auth, googleProvider)
    await createUserDoc(cred.user)
    return cred
  }

  async function logout() {
    await signOut(auth)
    setProfile(null)
  }

  async function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  async function refreshProfile() {
    if (!user) return
    const snap = await getDoc(doc(db, 'users', user.uid))
    if (snap.exists()) setProfile(snap.data())
  }

  return (
    <AuthContext.Provider value={{
      user, profile, loading,
      signup, login, loginWithGoogle, logout, resetPassword, refreshProfile
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
