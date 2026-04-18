// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signInWithPopup,
  signOut, updateProfile, sendPasswordResetEmail
} from 'firebase/auth'
import {
  doc, setDoc, getDoc, serverTimestamp, onSnapshot,
  query, collection, where, updateDoc,
  arrayUnion, arrayRemove
} from 'firebase/firestore'
import { auth, db, googleProvider } from '../firebase'
import toast from 'react-hot-toast'

const AuthContext = createContext(null)

// ── Streak: update on every login ────────────────────────────────────────────
async function updateStreakOnLogin(uid) {
  try {
    const ref   = doc(db, 'users', uid)
    const snap  = await getDoc(ref)
    if (!snap.exists()) return
    const data  = snap.data()
    const today = new Date().toISOString().substring(0, 10)

    // Don't fire more than once per calendar day
    if (data.lastLoginDate === today) return

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yStr = yesterday.toISOString().substring(0, 10)

    // If last activity was before yesterday, streak resets
    const lastActive = data.lastLoginDate || data.lastSessionDate || null
    const newStreak  = (!lastActive || lastActive < yStr) ? 0 : (data.streak || 0)

    await updateDoc(ref, {
      streak:        newStreak,
      lastLoginDate: today,
      updatedAt:     serverTimestamp(),
    })
  } catch (e) { /* non-critical, silent fail */ }
}

// ── Give existing users a referral code if they don't have one ───────────────
async function ensureReferralCode(uid) {
  try {
    const ref  = doc(db, 'users', uid)
    const snap = await getDoc(ref)
    if (!snap.data()?.referralCode) {
      await setDoc(ref, { referralCode: uid.slice(0, 8).toUpperCase() }, { merge: true })
    }
  } catch (e) { /* silent */ }
}

export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unsubSnapshot = null

    const unsubAuth = onAuthStateChanged(auth, async (u) => {
      setUser(u)
      if (u) {
        // Run on every login — silently
        updateStreakOnLogin(u.uid)
        ensureReferralCode(u.uid)

        // Real-time profile listener
        unsubSnapshot = onSnapshot(doc(db, 'users', u.uid), (snap) => {
          if (snap.exists()) {
            const data = snap.data()
            setProfile(data)

            // One-time streak migration for old accounts created before streak tracking
            if (!data.streakMigrated && data.createdAt) {
              updateDoc(doc(db, 'users', u.uid), {
                streakMigrated:  true,
                lastSessionDate: data.lastSessionDate || new Date().toISOString().substring(0, 10),
                updatedAt:       serverTimestamp(),
              })
            }
          }
        })

        // Friends handshake — if Bob added Alice, Alice adds Bob back
        const q = query(collection(db, 'users'), where('friends', 'array-contains', u.uid))
        const unsubHandshake = onSnapshot(q, (snap) => {
          if (snap.empty) return
          snap.docs.forEach(async (d) => {
            const bobUid  = d.id
            const ourSnap = await getDoc(doc(db, 'users', u.uid))
            const ourData = ourSnap.data()
            const ourFriends = ourData?.friends || []
            const ourSent    = ourData?.sentFriendRequests || []
            if (!ourFriends.includes(bobUid) && ourSent.includes(bobUid)) {
              await updateDoc(doc(db, 'users', u.uid), {
                friends:            arrayUnion(bobUid),
                sentFriendRequests: arrayRemove(bobUid),
                updatedAt:          serverTimestamp(),
              })
            }
          })
        })

        const prevUnsub = unsubSnapshot
        unsubSnapshot = () => { if (prevUnsub) prevUnsub(); unsubHandshake() }

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
    const ref  = doc(db, 'users', u.uid)
    const snap = await getDoc(ref)
    if (!snap.exists()) {
      const data = {
        uid:                u.uid,
        email:              u.email,
        displayName:        u.displayName || extra.displayName || 'Student',
        photoURL:           u.photoURL || null,
        createdAt:          serverTimestamp(),
        xp:                 0,
        level:              1,
        streak:             0,
        lastSessionDate:    null,
        lastLoginDate:      new Date().toISOString().substring(0, 10),
        subjects:           [],
        friends:            [],
        friendRequests:     [],
        sentFriendRequests: [],
        badges:             [],
        referralCode:       u.uid.slice(0, 8).toUpperCase(),
        theme:              'default',
        profileIcon:        'lightning',
        settings:           { theme: 'dark', profilePublic: true, friendsCanSeeGrades: true },
        onboardingComplete: false,
        startingGrades:     {},
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
      signup, login, loginWithGoogle, logout, resetPassword, refreshProfile,
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
