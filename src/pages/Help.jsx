// src/pages/Help.jsx
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { chatWithAI } from '../utils/ai'

const APP_ARCHITECTURE = `RevisionFlow is a UK GCSE, A-Level and BTEC revision tracking web app. Here is the complete architecture:

PAGES & FEATURES:
- Dashboard: Today's sessions, upcoming exams, streak, XP, daily AI tip, setup checklist
- Calendar: Monthly/weekly view, generate revision schedule (AI-powered 7-step wizard), ICS import/export, add/delete sessions
- Past Papers: Log paper attempts with score, grade, year, tier. Auto-fills grade boundaries. Shows grade trajectory. Bulk delete.
- Topics: Confidence ratings (1-5) per spec topic, heatmap view, list view, Priority tab (star rating + drag to reorder)
- Mistakes Log: Log errors from past papers with subject, topic, description
- Tasks: Personal to-do list with due dates
- Notes: Free-text notes per subject
- Exam Dates: Add upcoming exam dates with subject, paper, date
- AI Advisor tabs: Chat (ask anything), Grade Predictor, Next Topic, Answer Marker, Flashcard Generator, Resource Recommendations
- Timer: Countdown, Stopwatch with laps, Alarm. Ambient backgrounds, music. Persists across page navigation.
- Analytics: Study time charts, subject distribution, grade trajectory, consistency heatmap
- Friends: Add friends by username, Friends leaderboard
- Leaderboard: Global XP leaderboard (opt-out available)
- Profile: Public profile page
- Settings: Profile, Subjects, Appearance (dark/light), Privacy, Notifications, Grade Boundaries viewer, qualification toggle (GCSE→A-Level)
- Help: This page
- Privacy Policy: /privacy

GAMIFICATION: XP system (earn XP for sessions, papers, streaks), 50 levels, 14 badges, daily streaks

DATA: All stored in Firebase Firestore. Subjects have board (AQA/Edexcel/OCR/WJEC/CCEA/Cambridge), tier (Higher/Foundation/N/A), current grade, target grade.

AI: Mistral AI (primary), Gemini (fallback). All AI features use full student context (subjects, topics, papers, mistakes, priorities).

GRADING: GCSE 9-1, Combined Science double grade (e.g. 6-6), A-Level A*-E, BTEC D*/D/M/P/U. All include U grade.`

const QUICK_QUESTIONS = [
  'How do I generate a revision schedule?',
  'How do I log a past paper?',
  'What is the priority list and how do I use it?',
  'How does XP and levelling work?',
  'How do I add my exam dates?',
  'How do I switch from GCSE to A-Level?',
  'How does the AI advisor work?',
  'How do I import my revision calendar?',
  'How do I add friends?',
  'What are badges and how do I earn them?',
]

export default function Help() {
  const { profile } = useAuth()
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [asked, setAsked] = useState([])

  async function ask(q) {
    const query = q || question.trim()
    if (!query) return
    setLoading(true)
    setAnswer('')
    setAsked(prev => [query, ...prev.slice(0, 4)])
    setQuestion('')

    const prompt = `You are the help assistant for RevisionFlow, a UK revision tracking app. Answer the following question about how to use RevisionFlow.

APP ARCHITECTURE:
${APP_ARCHITECTURE}

USER: ${profile?.displayName || 'Student'} (${profile?.qualification || 'GCSE'}, ${(profile?.subjects || []).length} subjects)

QUESTION: ${query}

Give a clear, friendly answer specific to RevisionFlow. Be concise (2-4 sentences max). If relevant, mention which page or feature to use.`

    try {
      const res = await chatWithAI([{ role: 'user', content: prompt }], '')
      setAnswer(typeof res === 'string' ? res : res?.text || 'Sorry, I could not find an answer.')
    } catch (e) {
      setAnswer('Sorry, something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '1.5rem' }}>
      <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Help Centre</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        Ask anything about RevisionFlow — the AI knows the whole app.
      </p>

      {/* Search bar */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input
          value={question}
          onChange={e => setQuestion(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && ask()}
          placeholder="e.g. How do I generate a revision schedule?"
          style={{
            flex: 1, padding: '0.65rem 1rem', borderRadius: 10,
            border: '1px solid var(--border)', background: 'var(--surface)',
            color: 'var(--text-primary)', fontSize: '0.95rem',
          }}
        />
        <button onClick={() => ask()} disabled={loading || !question.trim()} style={{
          background: 'var(--accent)', color: 'white', border: 'none',
          borderRadius: 10, padding: '0.65rem 1.25rem', cursor: 'pointer',
          fontWeight: 700, fontSize: '0.9rem', opacity: loading ? 0.6 : 1,
        }}>
          {loading ? '…' : 'Ask'}
        </button>
      </div>

      {/* Answer */}
      {(loading || answer) && (
        <div style={{
          padding: '1rem 1.25rem', background: 'var(--surface)',
          borderRadius: 12, border: '1px solid var(--border)',
          marginBottom: '1.5rem',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem' }}>
            ✨ RevisionFlow Assistant
          </div>
          {loading
            ? <div style={{ color: 'var(--text-muted)' }}>Finding answer…</div>
            : <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{answer}</p>
          }
        </div>
      )}

      {/* Quick questions */}
      <h3 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: 700 }}>
        Common questions
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        {QUICK_QUESTIONS.map(q => (
          <button key={q} onClick={() => ask(q)} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '0.35rem 0.85rem', cursor: 'pointer',
            color: 'var(--text-secondary)', fontSize: '0.82rem',
            transition: 'border-color 0.15s, color 0.15s',
          }}>
            {q}
          </button>
        ))}
      </div>

      {/* Feature overview */}
      <h3 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: 700 }}>
        Feature overview
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
        {[
          { icon: '📅', title: 'Dashboard', desc: 'Daily sessions, streak, AI tip' },
          { icon: '📆', title: 'Calendar', desc: 'AI schedule generator + ICS import' },
          { icon: '📄', title: 'Past Papers', desc: 'Track scores and grade boundaries' },
          { icon: '🧠', title: 'Topics', desc: 'Confidence ratings + priority list' },
          { icon: '✨', title: 'AI Advisor', desc: 'Chat, grade prediction, flashcards' },
          { icon: '⏱', title: 'Timer', desc: 'Pomodoro, stopwatch, ambient sounds' },
          { icon: '📊', title: 'Analytics', desc: 'Charts, heatmaps, progress tracking' },
          { icon: '👥', title: 'Friends', desc: 'Leaderboard and social features' },
          { icon: '🎯', title: 'Gamification', desc: 'XP, levels, streaks, badges' },
          { icon: '⚙️', title: 'Settings', desc: 'Subjects, notifications, privacy' },
        ].map(f => (
          <div key={f.title} style={{
            padding: '0.9rem', background: 'var(--surface)',
            borderRadius: 10, border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>{f.icon}</div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.875rem', marginBottom: '0.2rem' }}>{f.title}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
