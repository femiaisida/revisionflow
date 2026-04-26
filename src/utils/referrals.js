// src/utils/referrals.js
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
  limit,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'
import { awardXP, checkAndAwardBadge } from './firestore'

const REFERRAL_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const REFERRAL_LENGTH = 8

function randomReferralCode() {
  const bytes = new Uint8Array(REFERRAL_LENGTH)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, (b) => REFERRAL_ALPHABET[b % REFERRAL_ALPHABET.length]).join('')
}

async function referralCodeExists(code) {
  const q = query(collection(db, 'users'), where('referralCode', '==', code), limit(1))
  const snap = await getDocs(q)
  return !snap.empty
}

export async function generateUniqueReferralCode() {
  for (let i = 0; i < 10; i += 1) {
    const code = randomReferralCode()
    if (!(await referralCodeExists(code))) return code
  }
  throw new Error('Unable to generate a unique referral code after multiple attempts')
}

export function getReferralUrl(referralCode) {
  return `https://revision-flow.netlify.app?ref=${referralCode}`
}

export async function applyReferralCode(newUid, referralCode) {
  if (!referralCode) return

  const normalizedCode = referralCode.trim().toUpperCase()
  const newUserRef = doc(db, 'users', newUid)
  const newUserSnap = await getDoc(newUserRef)
  const ownCode = newUserSnap.data()?.referralCode
  if (ownCode && normalizedCode === ownCode) return

  const q = query(collection(db, 'users'), where('referralCode', '==', normalizedCode), limit(1))
  const snap = await getDocs(q)
  if (snap.empty) return

  const referrerDoc = snap.docs[0]
  const referrerId = referrerDoc.id
  if (referrerId === newUid) return

  await setDoc(newUserRef, {
    referredBy: referrerId,
    referredAt: serverTimestamp(),
  }, { merge: true })

  await awardXP(referrerId, 200, 'referral_success')
  await checkAndAwardBadge(referrerId, 'referral')
  await awardXP(newUid, 100, 'joined_via_referral')

  console.log(`Referral applied: ${referrerId} referred ${newUid}`)
}

export async function ensureReferralCode(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  const existing = snap.data()?.referralCode
  if (existing && typeof existing === 'string' && existing.trim()) {
    return existing.trim().toUpperCase()
  }

  const referralCode = await generateUniqueReferralCode()
  await setDoc(ref, { referralCode }, { merge: true })
  return referralCode
}

export function captureReferralFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const ref = params.get('ref')
  if (ref) {
    sessionStorage.setItem('pendingReferral', ref)
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

export function getPendingReferral() {
  return sessionStorage.getItem('pendingReferral') || localStorage.getItem('pendingReferralFallback')
}

export function clearPendingReferral() {
  sessionStorage.removeItem('pendingReferral')
  localStorage.removeItem('pendingReferralFallback')
}
