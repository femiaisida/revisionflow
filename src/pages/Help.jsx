// src/pages/Help.jsx
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { chatWithAI } from '../utils/ai'
import { HelpCircle, Send, BookOpen, Calendar, FileText, Brain, MessageSquare, Timer, BarChart2, Users, Trophy, Settings, Zap, ChevronDown, ChevronUp } from 'lucide-react'

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

const FAQ = [
  { q: 'How do I get started?', a: 'After signing up and completing onboarding, head to Settings to add your subjects, boards, and target grades. Then go to Calendar to generate your first AI revision schedule.' },
  { q: 'How does the AI revision schedule work?', a: 'Go to Calendar → Generate Schedule. The AI wizard asks about your subjects, availability, and priorities, then creates a personalised timetable that you can edit and export to Google/Apple Calendar.' },
  { q: 'How do I track past papers?', a: 'Go to Past Papers → Log Paper. Select your subject, enter the year, paper number, your score, and grade. The app auto-fills grade boundaries and tracks your trajectory over time.' },
  { q: 'What do the topic confidence ratings mean?', a: '1 = Struggling, 2 = Needs work, 3 = Getting there, 4 = Good, 5 = Strong. Rate each topic honestly — the app uses these to prioritise your revision and give smarter AI advice.' },
  { q: 'How does XP and levelling work?', a: 'You earn XP for logging sessions (+20), past papers (+15), adding topics (+10), and maintaining streaks. There are 50 levels with increasing XP requirements and 14 badges to unlock.' },
  { q: 'Can I use this for A-Levels or BTEC?', a: 'Yes! Go to Settings and change your qualification type. The app supports GCSE (9-1), A-Level (A*-E), and BTEC (D*/D/M/P/U) with appropriate grade scales.' },
  { q: 'Is my data private?', a: 'Yes. Your data is stored securely in Firebase with strict security rules. Only you can access your data. You can delete your account and all data from Settings at any time.' },
  { q: 'How do I export my calendar?', a: 'In Calendar, click the export button to download an .ics file. You can import this into Google Calendar, Apple Calendar, or Outlook.' },
]

const FEATURES = [
  { icon: BookOpen, title: 'Dashboard', desc: 'Daily sessions, streak tracker, AI tips, and setup checklist', colour: 'var(--accent)' },
  { icon: Calendar, title: 'Calendar', desc: 'AI-powered schedule generator with ICS import/export', colour: '#3b82f6' },
  { icon: FileText, title: 'Past Papers', desc: 'Track scores, grade boundaries, and grade trajectory', colour: '#f59e0b' },
  { icon: Brain, title: 'Topics', desc: 'Confidence ratings, heatmap, and priority list', colour: '#8b5cf6' },
  { icon: MessageSquare, title: 'AI Advisor', desc: 'Chat, grade predictor, flashcards, answer marker', colour: '#06b6d4' },
  { icon: Timer, title: 'Timer', desc: 'Pomodoro, stopwatch, ambient sounds and music', colour: '#ec4899' },
  { icon: BarChart2, title: 'Analytics', desc: 'Study charts, heatmaps, and progress tracking', colour: '#22c55e' },
  { icon: Users, title: 'Friends', desc: 'Add friends & compete on leaderboards', colour: '#f97316' },
  { icon: Trophy, title: 'Gamification', desc: 'XP system, 50 levels, 14 badges, daily streaks', colour: '#eab308' },
  { icon: Settings, title: 'Settings', desc: 'Subjects, boards, tiers, notifications, themes', colour: '#64748b' },
]

export default function Help() {
  const { profile } = useAuth()
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  async function ask(q) {
    const query = q || question.trim()
    if (!query) return
    setLoading(true)
    setAnswer('')
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
    <div className="fade-in" style={{ maxWidth: 760, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <HelpCircle size={22} color="var(--accent-light)" /> Help Centre
        </h2>
        <p style={{ fontSize: '0.9rem' }}>Everything you need to know about RevisionFlow</p>
      </div>

      {/* AI Search */}
      <div className="card accent-card" style={{ padding: 20, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Zap size={16} color="var(--accent-light)" />
          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Ask AI anything about RevisionFlow</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            className="input"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && ask()}
            placeholder="e.g. How do I generate a revision schedule?"
          />
          <button className="btn btn-primary" onClick={() => ask()} disabled={loading || !question.trim()} style={{ flexShrink: 0 }}>
            {loading ? '…' : <><Send size={14} /> Ask</>}
          </button>
        </div>
        {(loading || answer) && (
          <div style={{
            marginTop: 14, padding: '12px 16px', background: 'rgba(124,58,237,0.08)',
            borderRadius: 'var(--radius-md)', fontSize: '0.88rem', lineHeight: 1.7,
          }}>
            <div style={{ fontWeight: 700, marginBottom: 4, color: 'var(--accent-light)', fontSize: '0.78rem' }}>
              ✨ RevisionFlow Assistant
            </div>
            {loading
              ? <span style={{ color: 'var(--text-muted)' }}>Finding answer…</span>
              : <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{answer}</p>
            }
          </div>
        )}
        {/* Quick question chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
          {QUICK_QUESTIONS.map(q => (
            <button key={q} onClick={() => ask(q)} className="btn btn-secondary btn-sm"
              style={{ borderRadius: 20, fontSize: '0.76rem', padding: '4px 12px' }}>
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ marginBottom: 12, fontSize: '1rem' }}>Frequently Asked Questions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {FAQ.map((item, i) => (
            <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 18px', background: 'transparent', border: 'none', cursor: 'pointer',
                  color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.88rem', textAlign: 'left',
                }}
              >
                {item.q}
                {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openFaq === i && (
                <div style={{
                  padding: '0 18px 16px', color: 'var(--text-secondary)',
                  fontSize: '0.85rem', lineHeight: 1.7, borderTop: '1px solid var(--border)',
                  paddingTop: 14,
                }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ marginBottom: 12, fontSize: '1rem' }}>Feature Overview</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
          {FEATURES.map(f => {
            const Icon = f.icon
            return (
              <div key={f.title} className="card" style={{ padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `${f.colour}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color={f.colour} />
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{f.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{f.desc}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Contact */}
      <div className="card" style={{ textAlign: 'center', padding: '24px 16px' }}>
        <h4 style={{ marginBottom: 6 }}>Still need help?</h4>
        <p style={{ fontSize: '0.85rem', marginBottom: 12 }}>
          Contact us at <strong style={{ color: 'var(--accent-light)' }}>femiaisida1@gmail.com</strong>
        </p>
      </div>
    </div>
  )
}
