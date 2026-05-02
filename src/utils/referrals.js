// src/utils/referrals.js
import {
  doc, getDoc, setDoc, getDocs,
  collection, query, where, limit, serverTimestamp, updateDoc
} from 'firebase/firestore'
import { db } from '../firebase'
import { awardXP, checkAndAwardBadge, unlockReferralIcon } from './firestore'

export function generateReferralCode(uid) {
  return uid.slice(0, 8).toUpperCase()
}

// Link goes directly to /signup so the referral code field is pre-filled
export function getReferralUrl(uid) {
  const code = generateReferralCode(uid)
  return `https://revision-flow.netlify.app/signup?ref=${code}`
}

export async function applyReferralCode(newUid, referralCode) {
  if (!referralCode) return

  const ownCode = generateReferralCode(newUid)
  if (referralCode.toUpperCase() === ownCode) return

  const q = query(
    collection(db, 'users'),
    where('referralCode', '==', referralCode.toUpperCase()),
    limit(1)
  )
  const snap = await getDocs(q)
  if (snap.empty) return false // code not found

  const referrerDoc  = snap.docs[0]
  const referrerId   = referrerDoc.id

  // Save referral info on new user
  await setDoc(doc(db, 'users', newUid), {
    referredBy:  referrerId,
    referredAt:  serverTimestamp(),
  }, { merge: true })

  // Reward the referrer: XP + badge + unlock rocket icon
  await awardXP(referrerId, 200)
  await checkAndAwardBadge(referrerId, 'referral')
  await unlockReferralIcon(referrerId)

  // Reward the new user: XP + unlock rocket icon
  await awardXP(newUid, 100)
  await unlockReferralIcon(newUid)

  return true
}

export async function applyReferralCodeForExistingUser(uid, referralCode) {
  if (!referralCode) return false

  const ownCode = generateReferralCode(uid)
  if (referralCode.toUpperCase() === ownCode) return false

  // Don't let users apply a code twice
  const userSnap = await getDoc(doc(db, 'users', uid))
  if (userSnap.data()?.referredBy) return false

  const q = query(
    collection(db, 'users'),
    where('referralCode', '==', referralCode.toUpperCase()),
    limit(1)
  )
  const snap = await getDocs(q)
  if (snap.empty) return false

  const referrerId = snap.docs[0].id

  await setDoc(doc(db, 'users', uid), {
    referredBy: referrerId,
    referredAt: serverTimestamp(),
  }, { merge: true })

  await awardXP(referrerId, 200)
  await checkAndAwardBadge(referrerId, 'referral')
  await unlockReferralIcon(referrerId)

  await awardXP(uid, 100)
  await unlockReferralIcon(uid)

  return true
}

export async function ensureReferralCode(uid) {
  const ref  = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.data()?.referralCode) {
    await setDoc(ref, { referralCode: generateReferralCode(uid) }, { merge: true })
  }
}

export function captureReferralFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const ref    = params.get('ref')
  if (ref) {
    sessionStorage.setItem('pendingReferral', ref)
    localStorage.setItem('pendingReferralFallback', ref)
  }
}

export function getPendingReferral() {
  return sessionStorage.getItem('pendingReferral') || localStorage.getItem('pendingReferralFallback')
}

export function clearPendingReferral() {
  sessionStorage.removeItem('pendingReferral')
  localStorage.removeItem('pendingReferralFallback')
}

// Legacy aliases
export const getPendingReferralWithFallback = getPendingReferral
export const clearAllPendingReferrals       = clearPendingReferral
