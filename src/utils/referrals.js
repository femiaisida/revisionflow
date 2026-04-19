// src/utils/referrals.js
// Referral system — generates codes, handles signup rewards

import {
  doc, getDoc, setDoc, getDocs,
  collection, query, where, limit, serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'
import { awardXP } from './firestore'
import { checkAndAwardBadge } from './firestore'

// Generate a short referral code from the user's UID
export function generateReferralCode(uid) {
  return uid.slice(0, 8).toUpperCase()
}

// Get the referral URL to share
export function getReferralUrl(uid) {
  const code = generateReferralCode(uid)
  return `https://revision-flow.netlify.app?ref=${code}`
}

// Call this immediately after a new user signs up
// Pass in their uid and the ?ref= code from the URL (if any)
export async function applyReferralCode(newUid, referralCode) {
  if (!referralCode) return

  // Don't let users refer themselves
  const ownCode = generateReferralCode(newUid)
  if (referralCode.toUpperCase() === ownCode) return

  // Find the referrer by their code
  const q = query(
    collection(db, 'users'),
    where('referralCode', '==', referralCode.toUpperCase()),
    limit(1)
  )
  const snap = await getDocs(q)
  if (snap.empty) return

  const referrerDoc = snap.docs[0]
  const referrerId = referrerDoc.id

  // Save referral info on the new user
  await setDoc(doc(db, 'users', newUid), {
    referredBy: referrerId,
    referredAt: serverTimestamp(),
  }, { merge: true })

  // Reward the referrer
  await awardXP(referrerId, 200, 'referral_success')
  await checkAndAwardBadge(referrerId, 'referral')

  // Reward the new user
  await awardXP(newUid, 100, 'joined_via_referral')

  console.log(`Referral applied: ${referrerId} referred ${newUid}`)
}

// Save the referral code on the user's own document
// Call this once when a user first signs up or on first login
export async function ensureReferralCode(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.data()?.referralCode) {
    await setDoc(ref, { referralCode: generateReferralCode(uid) }, { merge: true })
  }
}

// Read ?ref= from the URL and store it in sessionStorage so it survives the auth flow
export function captureReferralFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const ref = params.get('ref')
  if (ref) {
    sessionStorage.setItem('pendingReferral', ref)
    // Store in localStorage too as a fallback in case session is lost during auth flow
    localStorage.setItem('pendingReferralFallback', ref)
  }
}

export function getPendingReferralWithFallback() {
  return sessionStorage.getItem('pendingReferral') || localStorage.getItem('pendingReferralFallback')
}

export function clearAllPendingReferrals() {
  sessionStorage.removeItem('pendingReferral')
  localStorage.removeItem('pendingReferralFallback')
}

// After signup completes, apply the stored referral
export function getPendingReferral() {
  return sessionStorage.getItem('pendingReferral') || localStorage.getItem('pendingReferralFallback')
}

export function clearPendingReferral() {
  sessionStorage.removeItem('pendingReferral')
  localStorage.removeItem('pendingReferralFallback')
}
