// src/components/TooltipTour.jsx
import { useState, useEffect } from 'react'

const TOUR_STEPS = [
  {
    title: '👋 Welcome to RevisionFlow!',
    body: 'This quick tour will show you how to get the most out of the app. You can skip it at any time.',
    anchor: null, // centred modal
  },
  {
    title: '📅 Your Dashboard',
    body: "This is your home base. You'll see today's sessions, upcoming exams, your streak, and a personalised AI tip every day.",
    anchor: null,
  },
  {
    title: '📆 Calendar',
    body: 'Generate a full revision schedule with AI, or add sessions manually. The schedule is built around your exam dates and availability.',
    anchor: null,
  },
  {
    title: '📄 Past Papers',
    body: 'Log every past paper you do. RevisionFlow tracks your score, grade, and grade boundaries automatically so you can see your progress.',
    anchor: null,
  },
  {
    title: '🧠 Topics',
    body: 'Rate your confidence on every topic in your spec (1–5). Use the Priority tab to flag the topics that need the most work.',
    anchor: null,
  },
  {
    title: '✨ AI Advisor',
    body: 'Your personal AI tutor. Ask anything, get grade predictions, find your next topic to revise, mark your answers, and generate flashcards — all personalised to your data.',
    anchor: null,
  },
  {
    title: '⏱ Timer',
    body: 'Use the built-in Pomodoro timer or stopwatch for focused revision sessions. It keeps running even when you switch pages.',
    anchor: null,
  },
  {
    title: '🎯 You\'re all set!',
    body: 'Start by completing your subjects in Settings, then generate your first revision schedule. Good luck! 🚀',
    anchor: null,
  },
]

export default function TooltipTour({ onComplete }) {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(true)

  function skip() {
    localStorage.setItem('tour_complete', 'true')
    setVisible(false)
    onComplete?.()
  }

  function next() {
    if (step >= TOUR_STEPS.length - 1) {
      skip()
    } else {
      setStep(s => s + 1)
    }
  }

  if (!visible) return null

  const current = TOUR_STEPS[step]

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
    }}>
      <div style={{
        background: 'var(--surface)', borderRadius: 16, padding: '2rem',
        maxWidth: 420, width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        border: '1px solid var(--border)',
      }}>
        {/* Progress dots */}
        <div style={{ display: 'flex', gap: 6, marginBottom: '1.25rem', justifyContent: 'center' }}>
          {TOUR_STEPS.map((_, i) => (
            <div key={i} style={{
              width: i === step ? 20 : 8, height: 8, borderRadius: 4,
              background: i === step ? 'var(--accent)' : i < step ? 'var(--accent)60' : 'var(--border)',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>

        <h3 style={{ color: 'var(--text-primary)', margin: '0 0 0.75rem', fontSize: '1.15rem', textAlign: 'center' }}>
          {current.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 1.5rem', textAlign: 'center', fontSize: '0.95rem' }}>
          {current.body}
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <button onClick={skip} style={{
            background: 'transparent', border: '1px solid var(--border)',
            color: 'var(--text-muted)', borderRadius: 8,
            padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '0.875rem',
          }}>
            Skip tour
          </button>
          <button onClick={next} style={{
            background: 'var(--accent)', color: 'white', border: 'none',
            borderRadius: 8, padding: '0.5rem 1.25rem', cursor: 'pointer',
            fontSize: '0.875rem', fontWeight: 700,
          }}>
            {step === TOUR_STEPS.length - 1 ? '🚀 Get started!' : 'Next →'}
          </button>
        </div>

        <p style={{ textAlign: 'center', margin: '0.75rem 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {step + 1} of {TOUR_STEPS.length}
        </p>
      </div>
    </div>
  )
}
