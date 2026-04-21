// src/components/DailyQuests.jsx
// Shows 3 daily quests on the dashboard.
// Progress is tracked in Firestore at users/{uid}/quests/{today's date}

import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import { getDailyQuests } from '../data/badges'
import { awardXP } from '../utils/firestore'
import { CheckCircle, Circle } from 'lucide-react'

export default function DailyQuests() {
  const { user, refreshProfile } = useAuth()
  const [quests, setQuests] = useState([])
  const [progress, setProgress] = useState({})
  const [loading, setLoading] = useState(true)
  const today = new Date().toDateString().replace(/ /g, '_')

  useEffect(() => {
    if (!user) return
    // Set up quests for today
    const dailyQuests = getDailyQuests(user.uid)
    setQuests(dailyQuests)
    // Real-time listener so quests auto-tick when completed from other pages
    const ref = doc(db, 'users', user.uid, 'quests', today)
    const unsub = onSnapshot(ref, (snap) => {
      setProgress(snap.exists() ? snap.data() : {})
      setLoading(false)
    })
    return () => unsub()
  }, [user])

  async function completeQuest(questId, xp) {
    if (progress[questId]) return // already done

    const newProgress = { ...progress, [questId]: true }
    setProgress(newProgress)

    // Save to Firestore
    const ref = doc(db, 'users', user.uid, 'quests', today)
    await setDoc(ref, { ...newProgress, updatedAt: serverTimestamp() }, { merge: true })

    // Award XP
    await awardXP(user.uid, xp, 'daily_quest')
    await refreshProfile()

    // Check if all 3 quests done — bonus XP
    const allDone = quests.every(q => newProgress[q.id])
    if (allDone) {
      await awardXP(user.uid, 50, 'all_quests_complete')
      await refreshProfile()
    }
  }

  const completedCount = quests.filter(q => progress[q.id]).length

  if (loading) return null

  return (
    <div className="card" style={{ padding: '16px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Daily quests</h4>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: completedCount === 3 ? 'var(--success)' : 'var(--text-muted)',
          background: completedCount === 3 ? 'rgba(34,197,94,0.1)' : 'var(--bg-hover)',
          padding: '2px 8px',
          borderRadius: 20,
        }}>
          {completedCount}/3 done {completedCount === 3 ? '🎉 +50 bonus XP' : ''}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {quests.map(quest => {
          const done = !!progress[quest.id]
          return (
            <div
              key={quest.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 12px',
                borderRadius: 'var(--radius-md)',
                background: done ? 'rgba(34,197,94,0.08)' : 'var(--bg-surface)',
                border: `1px solid ${done ? 'rgba(34,197,94,0.3)' : 'var(--border)'}`,
                opacity: done ? 0.8 : 1,
                transition: 'all 0.2s',
              }}
            >
              <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{quest.icon}</span>
              <span style={{
                flex: 1,
                fontSize: '0.85rem',
                textDecoration: done ? 'line-through' : 'none',
                color: done ? 'var(--text-muted)' : 'var(--text-primary)',
              }}>
                {quest.desc}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-light)', fontWeight: 600, flexShrink: 0 }}>
                +{quest.xp} XP
              </span>
              {done
                ? <CheckCircle size={16} color="var(--success)" style={{ flexShrink: 0 }} />
                : (
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ padding: '2px 8px', fontSize: '0.72rem', flexShrink: 0 }}
                    onClick={() => completeQuest(quest.id, quest.xp)}
                  >
                    Done
                  </button>
                )
              }
            </div>
          )
        })}
      </div>

      <p style={{ margin: '10px 0 0', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
        Quests reset at midnight. Complete all 3 for a +50 XP bonus.
      </p>
    </div>
  )
}
