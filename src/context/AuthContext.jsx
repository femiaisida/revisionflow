// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signInWithPopup,
  signOut, updateProfile, sendPasswordResetEmail
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp, onSnapshot, query, collection, where, updateDoc, deleteDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { auth, db, googleProvider } from '../firebase'
import toast from 'react-hot-toast'

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
        // 1. Profile listener
        unsubSnapshot = onSnapshot(doc(db, 'users', u.uid), (snap) => {
          if (snap.exists()) {
            const data = snap.data()
            setProfile(data)
            
            // --- ONE-TIME STREAK RECOVERY (Migration) ---
            if (!data.streakMigrated && data.createdAt) {
              const created = data.createdAt?.toDate?.() || new Date(data.createdAt)
              const diff = Date.now() - created.getTime()
              const days = Math.floor(diff / (1000 * 60 * 60 * 24))
              const finalStreak = Math.max(data.streak || 0, days)
              
              if (finalStreak > (data.streak || 0)) {
                toast.success(`Welcome back! We've boosted your streak to ${finalStreak} days to make up for the update!`)
              }
              
              updateDoc(doc(db, 'users', u.uid), { 
                streak: finalStreak, 
                streakMigrated: true,
                lastSessionDate: new Date().toISOString().substring(0, 10),
                updatedAt: serverTimestamp()
              })
            }
          }
        })

        // 2. Handshake Pull (Permission-Safe Sync)
        // Alice watches Bob. If Bob added Alice to HIS 'friends', 
        // Alice adds Bob to HER 'friends'.
        const q = query(collection(db, 'users'), where('friends', 'array-contains', u.uid))
        const unsubHandshake = onSnapshot(q, (snap) => {
          if (snap.empty) return
          
          snap.docs.forEach(async (d) => {
            const bob = d.data()
            const bobUid = d.id
            
            // Re-fetch our latest state to avoid race conditions
            const ourSnap = await getDoc(doc(db, 'users', u.uid))
            const ourData = ourSnap.data()
            const ourFriends = ourData?.friends || []
            const ourSent = ourData?.sentFriendRequests || []
            
            if (!ourFriends.includes(bobUid) && ourSent.includes(bobUid)) {
              // Mutual handshake!
              await updateDoc(doc(db, 'users', u.uid), {
                friends: arrayUnion(bobUid),
                sentFriendRequests: arrayRemove(bobUid),
                updatedAt: serverTimestamp()
              })
            }
          })
        })

        // Wrap unsubs
        const oldU = unsubSnapshot
        unsubSnapshot = () => { if (oldU) oldU(); unsubHandshake() }

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
