// src/components/UpdatePrompt.jsx
// Global update notification — reads dismissal from Firestore so all users see it
// The reload button re-seeds topics from the updated topics.js database
import React, { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import { getAllTopicsFlat } from '../data/topics'
import { RefreshCw, X, CheckCircle } from 'lucide-react'

// Bump this ID whenever there is a new update that all users must see
const UPDATE_ID = 'v22-march-2026-full-database'
const UPDATE_TITLE = 'Database Updated — March 2026'
const UPDATE_BODY = 'OCR, Eduqas and CCEA exam dates, real specification topics for all boards, and improved grade boundaries are now live. Click "Reload my topics" to update your topic lists.'

export default function UpdatePrompt() {
  const { user, profile } = useAuth()
  const [dismissed, setDismissed] = useState(true) // start hidden, check async
  const [reloading, setReloading] = useState(false)
  const [reloaded, setReloaded] = useState(false)

  useEffect(() => {
    if (!user) return
    // Check if this user has dismissed this update
    const key = `update-dismissed-${UPDATE_ID}`
    const local = localStorage.getItem(key)
    if (local === '1') { setDismissed(true); return }
    // Also check Firestore (so dismissal syncs across devices)
    getDoc(doc(db, 'users', user.uid, 'meta', 'updateDismissals')).then(snap => {
      if (snap.exists() && snap.data()[UPDATE_ID]) {
        localStorage.setItem(key, '1')
        setDismissed(true)
      } else {
        setDismissed(false)
      }
    }).catch((error) => {
      console.error('Failed to load update dismissal state:', error)
      setDismissed(false)
    })
  }, [user])

  async function handleDismiss() {
    const key = `update-dismissed-${UPDATE_ID}`
    localStorage.setItem(key, '1')
    setDismissed(true)
    if (user) {
      try {
        await setDoc(doc(db, 'users', user.uid, 'meta', 'updateDismissals'),
          { [UPDATE_ID]: true, dismissedAt: serverTimestamp() }, { merge: true })
      } catch (error) {
        console.error('Failed to persist update dismissal:', error)
      }
    }
  }

  async function handleReload() {
    if (!user || !profile?.subjects) return
    setReloading(true)
    try {
      const { setDoc: firestoreSetDoc, doc: firestoreDoc, serverTimestamp: sts } = await import('firebase/firestore')
      const qual = profile.qualification || 'GCSE'
      let seeded = 0
      for (const s of profile.subjects) {
        const topics = getAllTopicsFlat(s.board, s.name, qual)
        for (const t of topics) {
          const id = `${s.name}_${t.name}`.replace(/[^a-zA-Z0-9_]/g, '_').slice(0, 100)
          await setDoc(
            firestoreDoc(db, 'users', user.uid, 'topics', id),
            { name: t.name, paper: t.paper, subjectId: s.name, updatedAt: sts() },
            { merge: true }
          )
          seeded++
        }
      }
      setReloaded(true)
      setReloading(false)
      // Auto-dismiss after showing success
      setTimeout(() => handleDismiss(), 3000)
    } catch (err) {
      setReloading(false)
      console.error('Reload topics error:', err)
    }
  }

  if (dismissed) return null

  return (
    <div style={{
      marginBottom: 20, padding: '14px 18px',
      background: 'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(147,51,234,0.08))',
      border: '1px solid var(--accent)', borderRadius: 'var(--radius-lg)',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: 'var(--accent)', padding: 7, borderRadius: 8, flexShrink: 0 }}>
            <RefreshCw size={16} color="white"/>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{UPDATE_TITLE}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2, lineHeight: 1.5 }}>
              {UPDATE_BODY}
            </div>
          </div>
        </div>
        <button onClick={handleDismiss} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 2, flexShrink: 0 }}>
          <X size={16}/>
        </button>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {reloaded ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--success)', fontSize: '0.85rem', fontWeight: 600 }}>
            <CheckCircle size={16}/> Topics reloaded! Refreshing…
          </div>
        ) : (
          <button className="btn btn-primary btn-sm" onClick={handleReload} disabled={reloading}
            style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <RefreshCw size={14} style={{ animation: reloading ? 'spin 1s linear infinite' : 'none' }}/>
            {reloading ? 'Reloading topics…' : 'Reload my topics'}
          </button>
        )}
        <button className="btn btn-secondary btn-sm" onClick={handleDismiss}>Dismiss</button>
      </div>
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}
