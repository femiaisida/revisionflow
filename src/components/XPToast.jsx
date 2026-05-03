// src/components/XPToast.jsx
// Listens for 'xp-awarded' custom events dispatched by firestore.js
// and shows floating "+XP" popups that animate upward and fade out.

import React, { useState, useEffect, useCallback } from 'react'
import { Zap } from 'lucide-react'

let _nextId = 1

export default function XPToast() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((e) => {
    const { amount, reason } = e.detail || {}
    if (!amount || amount <= 0) return
    const id = _nextId++
    setToasts(prev => [...prev, { id, amount, reason }])
    // Remove after 2.2s (animation is 2s)
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 2200)
  }, [])

  useEffect(() => {
    window.addEventListener('xp-awarded', addToast)
    return () => window.removeEventListener('xp-awarded', addToast)
  }, [addToast])

  if (toasts.length === 0) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 80,
      right: 24,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: 8,
      pointerEvents: 'none',
    }}>
      {toasts.map((t, i) => (
        <div
          key={t.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            padding: '9px 16px',
            borderRadius: 999,
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1rem',
            boxShadow: '0 4px 20px rgba(124,58,237,0.5)',
            animation: 'xpFloatUp 2.2s ease forwards',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          <Zap size={16} color="#fff" fill="#fff" />
          +{t.amount} XP
          {t.reason && (
            <span style={{ fontWeight: 400, fontSize: '0.82rem', opacity: 0.85 }}>
              · {t.reason}
            </span>
          )}
        </div>
      ))}
      <style>{`
        @keyframes xpFloatUp {
          0%   { opacity: 0;   transform: translateY(0px) scale(0.85); }
          15%  { opacity: 1;   transform: translateY(-8px) scale(1); }
          70%  { opacity: 1;   transform: translateY(-24px) scale(1); }
          100% { opacity: 0;   transform: translateY(-48px) scale(0.95); }
        }
      `}</style>
    </div>
  )
}
