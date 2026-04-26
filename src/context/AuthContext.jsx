// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth'
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  onSnapshot,
  query,
  collection,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'
import { auth, db, googleProvider } from '../firebase'
import { ensureReferralCode } from '../utils/referrals'

const AuthContext = createContext(null)

const todayIsoDate = () => new Date().toISOString().slice(0, 10)

function normalizeUserProfile(uid, data = {}) {
  return {
    uid,
    email: data.email || null,
    displayName: data.displayName || 'Student',
    photoURL: data.photoURL || null,
    createdAt: data.createdAt || serverTimestamp(),
    xp: Number.isFinite(data.xp) ? data.xp : 0,
    level: Number.isFinite(data.level) && data.level > 0 ? data.level : 1,
    streak: Number.isFinite(data.streak) && data.streak > 0 ? data.streak : 1,
    lastSessionDate: typeof data.lastSessionDate === 'string' ? data.lastSessionDate : null,
    lastLoginDate: typeof data.lastLoginDate === 'string' ? data.lastLoginDate : todayIsoDate(),
    subjects: Array.isArray(data.subjects) ? data.subjects : [],
    friends: Array.isArray(data.friends) ? data.friends : [],
    friendRequests: Array.isArray(data.friendRequests) ? data.friendRequests : [],
    sentFriendRequests: Array.isArray(data.sentFriendRequests) ? data.sentFriendRequests : [],
    badges: Array.isArray(data.badges) ? data.badges : [],
    referralCode: typeof data.referralCode === 'string' ? data.referralCode : '',
    theme: data.theme || 'default',
    profileIcon: data.profileIcon || 'lightning',
    settings: {
      theme: data.settings?.theme || 'dark',
      profilePublic: typeof data.settings?.profilePublic === 'boolean' ? data.settings.profilePublic : true,
      friendsCanSeeGrades: typeof data.settings?.friendsCanSeeGrades === 'boolean' ? data.settings.friendsCanSeeGrades : true,
    },
    onboardingComplete: Boolean(data.onboardingComplete),
    startingGrades: data.startingGrades && typeof data.startingGrades === 'object' ? data.startingGrades : {},
  }
}

async function updateStreakOnLogin(uid) {
  try {
    const ref = doc(db, 'users', uid)
    const snap = await getDoc(ref)
    if (!snap.exists()) return

    const data = snap.data()
    const today = todayIsoDate()
    const lastLoginDate = typeof data.lastLoginDate === 'string' ? data.lastLoginDate : null
    const currentStreak = Number.isFinite(data.streak) ? data.streak : 0

    if (lastLoginDate === today) return

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().slice(0, 10)

    let newStreak = 1
    if (lastLoginDate === yesterdayStr) {
      newStreak = Math.max(1, currentStreak + 1)
    }

    await updateDoc(ref, {
      streak: newStreak,
      lastLoginDate: today,
      updatedAt: serverTimestamp(),
    })
  } catch (error) {
    console.error('Failed to update login streak:', error)
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unsubscribeProfile = null
    let unsubscribeHandshake = null

    const clearListeners = () => {
      if (unsubscribeProfile) {
        unsubscribeProfile()
        unsubscribeProfile = null
      }
      if (unsubscribeHandshake) {
        unsubscribeHandshake()
        unsubscribeHandshake = null
      }
    }

    const unsubAuth = onAuthStateChanged(auth, async (authedUser) => {
      clearListeners()
      setUser(authedUser)

      if (!authedUser) {
        setProfile(null)
        setLoading(false)
        return
      }

      await updateStreakOnLogin(authedUser.uid)
      try {
        await ensureReferralCode(authedUser.uid)
      } catch (error) {
        console.error('Failed to ensure referral code:', error)
      }

      unsubscribeProfile = onSnapshot(doc(db, 'users', authedUser.uid), async (snap) => {
        if (!snap.exists()) {
          setProfile(null)
          return
        }

        const rawData = snap.data()
        const normalized = normalizeUserProfile(authedUser.uid, rawData)
        setProfile(normalized)

        const missingRequiredField =
          !Array.isArray(rawData.friends) ||
          !Array.isArray(rawData.sentFriendRequests) ||
          !Array.isArray(rawData.friendRequests) ||
          !Array.isArray(rawData.badges) ||
          !rawData.createdAt ||
          typeof rawData.lastLoginDate !== 'string' ||
          typeof rawData.referralCode !== 'string' ||
          !Number.isFinite(rawData.streak)

        if (missingRequiredField) {
          await setDoc(doc(db, 'users', authedUser.uid), {
            ...normalized,
            referralCode: normalized.referralCode || await ensureReferralCode(authedUser.uid),
            updatedAt: serverTimestamp(),
          }, { merge: true })
        }
      }, (error) => {
        console.error('Profile listener error:', error)
      })

      const handshakeQuery = query(collection(db, 'users'), where('friends', 'array-contains', authedUser.uid))
      unsubscribeHandshake = onSnapshot(handshakeQuery, async (snap) => {
        if (snap.empty) return

        for (const friendDoc of snap.docs) {
          const friendUid = friendDoc.id
          try {
            const ourSnap = await getDoc(doc(db, 'users', authedUser.uid))
            const ourData = ourSnap.data() || {}
            const ourFriends = Array.isArray(ourData.friends) ? ourData.friends : []
            const ourSent = Array.isArray(ourData.sentFriendRequests) ? ourData.sentFriendRequests : []

            if (!ourFriends.includes(friendUid) && ourSent.includes(friendUid)) {
              await updateDoc(doc(db, 'users', authedUser.uid), {
                friends: arrayUnion(friendUid),
                sentFriendRequests: arrayRemove(friendUid),
                updatedAt: serverTimestamp(),
              })
            }
          } catch (error) {
            console.error('Friend handshake update error:', error)
          }
        }
      }, (error) => {
        console.error('Friend handshake listener error:', error)
      })

      setLoading(false)
    })

    return () => {
      unsubAuth()
      clearListeners()
    }
  }, [])

  async function createUserDoc(u, extra = {}) {
    const ref = doc(db, 'users', u.uid)
    const snap = await getDoc(ref)

    if (!snap.exists()) {
      const referralCode = await ensureReferralCode(u.uid)
      const data = normalizeUserProfile(u.uid, {
        uid: u.uid,
        email: u.email,
        displayName: u.displayName || extra.displayName || 'Student',
        photoURL: u.photoURL || null,
        createdAt: serverTimestamp(),
        lastLoginDate: todayIsoDate(),
        streak: 1,
        onboardingComplete: false,
        ...extra,
        referralCode,
      })
      await setDoc(ref, data, { merge: true })
      setProfile(data)
      return
    }

    const existing = snap.data() || {}
    const normalized = normalizeUserProfile(u.uid, existing)
    await setDoc(ref, { ...normalized, updatedAt: serverTimestamp() }, { merge: true })
    setProfile(normalized)
  }

  async function signup(email, password, displayName) {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(cred.user, { displayName })
    await createUserDoc(cred.user, { displayName })
    return cred
  }

  function login(email, password) {
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

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  async function refreshProfile() {
    if (!user) return
    const snap = await getDoc(doc(db, 'users', user.uid))
    if (snap.exists()) {
      setProfile(normalizeUserProfile(user.uid, snap.data()))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signup,
        login,
        loginWithGoogle,
        logout,
        resetPassword,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
