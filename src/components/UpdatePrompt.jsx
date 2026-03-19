import React, { useState } from 'react'
import { AlertCircle, X, ArrowRight, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function UpdatePrompt() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem('data-update-march-2026-dismissed') === '1'
  )

  if (dismissed) return null

  const handleDismiss = () => {
    localStorage.setItem('data-update-march-2026-dismissed', '1')
    setDismissed(true)
  }

  return (
    <div style={{
      marginBottom: 20,
      padding: '16px 20px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
      border: '1px solid var(--accent)',
      borderRadius: 'var(--radius-lg)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      animation: 'slideDown 0.4s ease-out'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ 
            background: 'var(--accent)', 
            padding: 8, 
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <RefreshCw size={18} color="white" />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>New Exam Data Available!</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 2 }}>
              We've just updated the database with confirmed **2026 AQA & Edexcel** dates and topics.
            </p>
          </div>
        </div>
        <button 
          onClick={handleDismiss}
          style={{ 
            background: 'none', 
            border: 'none', 
            padding: 4, 
            cursor: 'pointer',
            color: 'var(--text-muted)',
            hover: { color: 'var(--text-primary)' }
          }}
        >
          <X size={18} />
        </button>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <Link 
          to="/exams" 
          onClick={handleDismiss}
          className="btn btn-primary btn-sm"
          style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px' }}
        >
          Update Exam Dates <ArrowRight size={14} />
        </Link>
        <Link 
          to="/settings" 
          onClick={handleDismiss}
          className="btn btn-secondary btn-sm"
          style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px' }}
        >
          Check Topics
        </Link>
      </div>

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
