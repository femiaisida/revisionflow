// src/pages/Help.jsx
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { chatWithAI } from '../utils/ai'
import {
  HelpCircle, Send, BookOpen, Calendar, FileText, Brain,
  MessageSquare, Timer, BarChart2, Users, Trophy, Settings,
  Zap, ChevronDown, ChevronUp, Layers, ClipboardList, Gift,
  Star, Globe, Lock, Shield, Bell, Palette
} from 'lucide-react'

const APP_ARCHITECTURE = `RevisionFlow is a free UK GCSE and A-Level revision web app. Here is the complete up-to-date feature set:

PAGES & FEATURES:
- Dashboard: Today's sessions, next exam countdown, streak, XP level bar (infinite levels, 1.15x XP formula), daily AI briefing, daily quests, badge showcase, recent papers carousel, referral code entry
- Calendar: Monthly/weekly view, AI-powered 7-step schedule generator, ICS import/export. Tasks appear as coloured multi-day blocks spanning their full duration
- Exam Dates: Add upcoming exams with subject, board, paper, date. Emergency Mode triggers when exam is within 7 days
- Past Papers: Log paper attempts (score, grade, year, tier). Auto-fills grade boundaries (AQA/Edexcel/OCR, 2019-2025). Grade trajectory charts. Mistakes tab — log, view and manage mistakes from papers
- Topics: Confidence ratings (1-5) per spec topic. Views: List, Heatmap, Priority (star + drag-reorder), Resources, Notes (per-subject revision notes), Mastery (cross-topic progress summary). All 6 boards, GCSE and A-Level
- Study Tools (/study): Two tabs:
  * Flashcards — AI generator, saved sets (private/public), create custom sets manually, flip-card UI, confidence rating (Got it/Partial/Missed), Quizlet import format copy, CSV download, public sets library
  * Exam Questions — realistic exam-style questions with mark allocations, mark scheme hidden until revealed
- AI Advisor: Chat, Grade Predictor, Next Steps, Answer Marker, Resource Recommendations
- Timer: Countdown with MM:SS input, Stopwatch with laps, 5 ambient sounds (Web Audio API), looping alert on finish, XP awarded on completion (1 XP/min, max 100)
- Analytics: Study time charts, subject distribution, grade trajectory, consistency heatmap
- Friends: Add friends by username, accept/decline requests, friends leaderboard
- Leaderboard: Global XP leaderboard with opt-out, profile icons shown
- Profile: 30 badges (7 categories), public profile, profile icon selector, badge audit button
- Settings: Subjects/boards/tiers, themes (10 colour themes), profile icon, privacy, notifications, grade boundaries viewer, qualification toggle
- Help: AI assistant + FAQ
- Emergency Mode: AI generates a last-minute revision plan when an exam is within 7 days

GAMIFICATION:
- XP awarded automatically: session complete (+50/+75), task done (+20), note saved (+10), mistake logged (+10), mistake resolved (+20), paper logged (+100), friend added (+25 each), daily login (+10)
- Infinite levels using formula: XP needed = floor(100 × 1.15^(level-1))
- 30 badges across 7 categories: milestone, streak, mastery, improvement, consistency, social, special
- Badge audit: runs automatically on login, also triggerable manually from Profile page
- Daily quests: 3 quests per day, reset at midnight, +50 XP bonus for completing all 3
- XP popup toasts appear whenever XP is awarded
- Streaks: maintained by logging in daily

REFERRALS:
- Each user has a unique referral code (first 8 chars of their UID)
- Referral link: revision-flow.netlify.app/signup?ref=CODE
- Both referrer and new user receive +100-200 XP and unlock the Rocket profile icon
- Existing users can enter a referral code from the Dashboard

FLASHCARDS:
- AI-generated: pick subject, topic (optional), number of cards (5/10/15/20)
- Flip-card UI with animated 3D flip
- Rate confidence after each card: Got it / Partially / Didn't know
- Save sets to your account (private or public)
- Create custom sets manually — add/edit/delete individual cards
- Public sets: browse and study sets shared by other RevisionFlow users
- Quizlet import: copy in tab-separated format → Quizlet → Create → Import → Paste
- CSV download for any set

THEMES & CUSTOMISATION:
- 10 colour themes available in Settings → Appearance
- 12 profile icons (emoji-based)
- Dark/light mode toggle in sidebar
- Profile icon appears in sidebar, leaderboard, AI chat bubbles

AI CONFIG:
- Model: mistral-small-latest
- All features use full student context (subjects, topics, papers, mistakes, priorities, streaks)
- Daily briefing cached per day to Firestore

DATA STORAGE (Firebase Firestore):
- users/{uid}: main profile, XP, streak, badges, referral code, display name
- users/{uid}/sessions: revision sessions
- users/{uid}/paperAttempts: past paper results
- users/{uid}/topics: confidence ratings per topic
- users/{uid}/mistakes: mistake log
- users/{uid}/notes: revision notes (now accessed via Topics → Notes tab)
- users/{uid}/tasks: tasks with startDate + dueDate for multi-day support
- users/{uid}/quests/{date}: daily quest progress
- users/{uid}/flashcardSets: saved flashcard sets
- publicFlashcards: public flashcard sets shared by users`

const QUICK_QUESTIONS = [
  'How do I generate a revision schedule?',
  'How does the XP and level system work?',
  'How do I use flashcards and save a set?',
  'How do I import my flashcards to Quizlet?',
  'How do I log a past paper?',
  'How do I earn badges?',
  'What are daily quests?',
  'How does the referral system work?',
  'How do I use Emergency Mode?',
  'How do I add friends and use the leaderboard?',
  'How do I switch from GCSE to A-Level?',
  'How do I track topic confidence?',
]

const FAQ = [
  {
    q: 'How do I get started?',
    a: 'Complete the onboarding flow after signup — add your subjects, exam boards, and target grades. Then go to Calendar → Generate Schedule to create your first AI revision timetable. Add your exam dates in Exam Dates so the app can count down and trigger Emergency Mode.'
  },
  {
    q: 'How does the level and XP system work?',
    a: 'You earn XP automatically for every action: completing sessions (+50), logging papers (+100), resolving mistakes (+20), saving notes (+10), completing tasks (+20), adding friends (+25), and daily logins (+10). Levels use an exponential formula so each level requires slightly more XP than the last. You\'ll see a floating XP popup every time you earn XP. There are infinite levels — no cap.'
  },
  {
    q: 'How do I use the flashcard system?',
    a: 'Go to Study Tools → Flashcards. You can generate AI flashcards by picking a subject and topic, or create your own set manually. During a study session, tap a card to flip it, then rate your confidence. At the end you\'ll see a breakdown of how you did. Save sets to your account and optionally make them public for other students.'
  },
  {
    q: 'How do I import flashcards to Quizlet?',
    a: 'After generating or studying a set, click "Quizlet import" — this copies all cards in tab-separated format (term[tab]definition). Then go to quizlet.com → Create → Import from Word/Google Docs → paste → set "Between term and definition" to Tab → Import. Done.'
  },
  {
    q: 'What are daily quests?',
    a: 'Each day you get 3 quests (e.g. log a past paper, write a note, resolve a mistake). Complete them to earn XP — completing all 3 gives an extra +50 XP bonus. Quests reset at midnight. Progress is tracked automatically when you complete actions anywhere in the app.'
  },
  {
    q: 'How do I earn badges?',
    a: 'Badges are awarded automatically when you hit certain milestones — streaks, session counts, paper scores, friends added, etc. If you had activity before badges were introduced, go to Profile and click "Check for missing badges" to run a retroactive audit. New badges are also checked on every login.'
  },
  {
    q: 'How does the referral system work?',
    a: 'Your referral code is shown in Profile → Referral. Share your link (revision-flow.netlify.app/signup?ref=YOURCODE) with a friend. When they sign up using it, you both get +200 XP and unlock the 🚀 Rocket profile icon. Existing users can enter a referral code from the Dashboard.'
  },
  {
    q: 'What is Emergency Mode?',
    a: 'If you have an exam within the next 7 days, a red banner appears on your Dashboard. Click "Open Emergency Mode" and the AI generates a focused last-minute revision plan just for that exam — key topics, time allocation, and exam technique tips.'
  },
  {
    q: 'How do I track past papers and mistakes?',
    a: 'Go to Past Papers → Log Paper. Enter your score, grade, year, and paper number — grade boundaries are auto-filled. The app tracks your grade trajectory over time. Mistakes are now in Past Papers → Mistakes tab: log specific errors, mark them as resolved when you understand them.'
  },
  {
    q: 'How do I use topic confidence ratings?',
    a: 'Go to Topics, select your subject, and rate each topic 1–5 (1=struggling, 5=strong). The AI uses these to personalise all advice. The Mastery tab shows your overall progress. The Notes tab lets you save revision notes per subject.'
  },
  {
    q: 'How do tasks work on the calendar?',
    a: 'Create tasks in Tasks with a start date and due date. They appear as coloured blocks on the Calendar spanning their full duration — red for high priority, amber for medium, green for low. Completing a task awards +20 XP.'
  },
  {
    q: 'Can I use RevisionFlow for A-Levels or BTEC?',
    a: 'Yes. Go to Settings → Profile and change your qualification. The app supports GCSE (9-1), A-Level (A*-E), and BTEC (D*/D/M/P/U) with correct grade scales and spec topics for all boards.'
  },
  {
    q: 'Is my data private?',
    a: 'Yes. All data is stored in Firebase with strict security rules — only you can read your own data. You can delete your account from Settings. We never sell data or show ads. See the Privacy Policy at /privacy for full details.'
  },
  {
    q: 'How do I export my revision calendar?',
    a: 'In Calendar, click the export button to download an .ics file. Import this into Google Calendar, Apple Calendar, or Outlook — all sessions and events will appear in your calendar app.'
  },
]

const FEATURES = [
  { icon: BookOpen,     title: 'Dashboard',       desc: 'XP, streak, next exam countdown, daily quests, AI briefing, recent papers carousel', colour: 'var(--accent)' },
  { icon: Calendar,     title: 'Calendar',         desc: 'AI schedule generator, multi-day task blocks, ICS import/export', colour: '#3b82f6' },
  { icon: FileText,     title: 'Past Papers',      desc: 'Grade tracking, boundaries (2019–2025), mistakes log', colour: '#f59e0b' },
  { icon: Brain,        title: 'Topics',           desc: 'Confidence ratings, heatmap, priority, notes, mastery tab', colour: '#8b5cf6' },
  { icon: Zap,          title: 'Study Tools',      desc: 'Flip-card flashcards, custom sets, public library, exam questions', colour: '#a855f7' },
  { icon: MessageSquare,title: 'AI Advisor',       desc: 'Chat, grade predictor, answer marker, next steps, recommendations', colour: '#06b6d4' },
  { icon: Timer,        title: 'Timer',            desc: 'Countdown/stopwatch, ambient sounds, XP per minute', colour: '#ec4899' },
  { icon: BarChart2,    title: 'Analytics',        desc: 'Study charts, subject distribution, grade trajectory, heatmap', colour: '#22c55e' },
  { icon: Users,        title: 'Friends',          desc: 'Add friends, friends leaderboard, referral system', colour: '#f97316' },
  { icon: Trophy,       title: 'Gamification',     desc: 'Infinite levels, 30 badges, daily quests, XP popups, streaks', colour: '#eab308' },
  { icon: Palette,      title: 'Customisation',    desc: '10 colour themes, 12 profile icons, dark/light mode', colour: '#e879f9' },
  { icon: Shield,       title: 'Privacy & Safety', desc: 'GDPR compliant, Firebase security rules, account deletion', colour: '#64748b' },
]

export default function Help() {
  const { profile } = useAuth()
  const [question, setQuestion] = useState('')
  const [answer,   setAnswer]   = useState('')
  const [loading,  setLoading]  = useState(false)
  const [openFaq,  setOpenFaq]  = useState(null)
  const [openCat,  setOpenCat]  = useState('getting-started')

  async function ask(q) {
    const query = q || question.trim()
    if (!query) return
    setLoading(true)
    setAnswer('')
    setQuestion('')

    const prompt = `You are the help assistant for RevisionFlow, a UK revision web app. Answer concisely and helpfully.

APP ARCHITECTURE:
${APP_ARCHITECTURE}

USER: ${profile?.displayName || 'Student'} (${profile?.qualification || 'GCSE'}, ${(profile?.subjects || []).length} subjects)

QUESTION: ${query}

Give a clear, friendly answer specific to RevisionFlow. Be concise (2-4 sentences). Mention which page or feature to use.`

    try {
      const res = await chatWithAI([{ role: 'user', content: prompt }], '')
      setAnswer(typeof res === 'string' ? res : res?.text || 'Sorry, I couldn\'t find an answer.')
    } catch {
      setAnswer('Sorry, something went wrong. Please try again.')
    }
    setLoading(false)
  }

  const faqCategories = [
    { id: 'getting-started', label: 'Getting Started', questions: FAQ.filter((_, i) => [0, 11, 12].includes(i)) },
    { id: 'xp-badges',       label: 'XP & Badges',    questions: FAQ.filter((_, i) => [1, 4].includes(i)) },
    { id: 'flashcards',      label: 'Flashcards',      questions: FAQ.filter((_, i) => [2, 3].includes(i)) },
    { id: 'features',        label: 'Features',        questions: FAQ.filter((_, i) => [5, 6, 7, 8, 9, 10].includes(i)) },
    { id: 'privacy',         label: 'Privacy & Data',  questions: FAQ.filter((_, i) => [13].includes(i)) },
  ]

  return (
    <div className="fade-in" style={{ maxWidth: 780, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <HelpCircle size={22} color="var(--accent-light)" /> Help Centre
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Everything you need to know about RevisionFlow · Last updated May 2026
        </p>
      </div>

      {/* AI assistant */}
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
            placeholder="e.g. How do I save a flashcard set?"
          />
          <button className="btn btn-primary" onClick={() => ask()} disabled={loading || !question.trim()} style={{ flexShrink: 0 }}>
            {loading ? '…' : <><Send size={14} /> Ask</>}
          </button>
        </div>
        {(loading || answer) && (
          <div style={{ marginTop: 14, padding: '12px 16px', background: 'rgba(124,58,237,0.08)', borderRadius: 'var(--radius-md)', fontSize: '0.88rem', lineHeight: 1.7 }}>
            <div style={{ fontWeight: 700, marginBottom: 4, color: 'var(--accent-light)', fontSize: '0.78rem' }}>✨ RevisionFlow Assistant</div>
            {loading
              ? <span style={{ color: 'var(--text-muted)' }}>Finding answer…</span>
              : <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{answer}</p>
            }
          </div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
          {QUICK_QUESTIONS.map(q => (
            <button key={q} onClick={() => ask(q)} className="btn btn-secondary btn-sm" style={{ borderRadius: 20, fontSize: '0.76rem', padding: '4px 12px' }}>
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* What's new banner */}
      <div style={{ marginBottom: 24, padding: '14px 18px', background: 'linear-gradient(135deg,rgba(124,58,237,0.1),rgba(168,85,247,0.05))', borderRadius: 12, border: '1px solid rgba(124,58,237,0.25)' }}>
        <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-light)', marginBottom: 8 }}>🆕 Recently added</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>
          <span>✦ <strong>Study Tools</strong> — Quizlet-rival flashcard system with saved sets, public library, custom cards, and exam questions</span>
          <span>✦ <strong>Notes in Topics</strong> — Write and save revision notes per subject directly in the Topics page</span>
          <span>✦ <strong>Mastery tab in Topics</strong> — Cross-topic progress view per subject</span>
          <span>✦ <strong>Mistakes in Past Papers</strong> — Mistake log is now part of the Past Papers page</span>
          <span>✦ <strong>Multi-day tasks</strong> — Tasks span their full date range on the Calendar</span>
          <span>✦ <strong>XP popups</strong> — Floating +XP notifications appear whenever you earn XP</span>
          <span>✦ <strong>Referral system</strong> — Share your code, earn XP and unlock the 🚀 Rocket icon</span>
          <span>✦ <strong>Badge audit</strong> — Retroactively earn badges from past activity via Profile page</span>
          <span>✦ <strong>30 badges</strong> — Up from 14, across 7 categories</span>
          <span>✦ <strong>Next exam countdown</strong> on Dashboard replaces "Tasks due"</span>
        </div>
      </div>

      {/* FAQ — categorised */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ marginBottom: 14, fontSize: '1rem' }}>Frequently Asked Questions</h3>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
          {faqCategories.map(cat => (
            <button
              key={cat.id}
              className={`btn btn-sm ${openCat === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setOpenCat(openCat === cat.id ? null : cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {faqCategories.filter(cat => cat.id === openCat).map(cat => (
          <div key={cat.id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {cat.questions.map((item, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === `${cat.id}-${i}` ? null : `${cat.id}-${i}`)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.88rem', textAlign: 'left', gap: 10 }}
                >
                  {item.q}
                  {openFaq === `${cat.id}-${i}` ? <ChevronUp size={16} style={{ flexShrink: 0 }} /> : <ChevronDown size={16} style={{ flexShrink: 0 }} />}
                </button>
                {openFaq === `${cat.id}-${i}` && (
                  <div style={{ padding: '0 18px 16px', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, borderTop: '1px solid var(--border)', paddingTop: 14 }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Feature overview grid */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ marginBottom: 12, fontSize: '1rem' }}>Feature Overview</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
          {FEATURES.map(f => {
            const Icon = f.icon
            return (
              <div key={f.title} className="card" style={{ padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${f.colour}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} color={f.colour} />
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{f.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{f.desc}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* XP quick reference */}
      <div className="card" style={{ marginBottom: 24 }}>
        <h4 style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 7 }}>
          <Zap size={16} color="var(--accent-light)" /> XP Quick Reference
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
          {[
            { action: 'Complete a session', xp: '+50 (or +75 for 60+ min)' },
            { action: 'Log a past paper',   xp: '+100' },
            { action: 'Complete a task',    xp: '+20' },
            { action: 'Save a note',        xp: '+10' },
            { action: 'Log a mistake',      xp: '+10' },
            { action: 'Resolve a mistake',  xp: '+20' },
            { action: 'Add a friend',       xp: '+25 each' },
            { action: 'Daily login',        xp: '+10' },
            { action: 'Timer session',      xp: '+1/min (max 100)' },
            { action: 'Complete a quest',   xp: '+15 to +40' },
            { action: 'All 3 quests done',  xp: '+50 bonus' },
            { action: 'Earn a badge',       xp: '+50 to +600' },
            { action: 'Referral accepted',  xp: '+100–200' },
          ].map(r => (
            <div key={r.action} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: 'var(--bg-surface)', borderRadius: 8, border: '1px solid var(--border)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{r.action}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-light)', flexShrink: 0, marginLeft: 8 }}>{r.xp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="card" style={{ textAlign: 'center', padding: '24px 16px' }}>
        <h4 style={{ marginBottom: 6 }}>Still need help?</h4>
        <p style={{ fontSize: '0.85rem', marginBottom: 4 }}>
          Contact us at <strong style={{ color: 'var(--accent-light)' }}>femiaisida1@gmail.com</strong>
        </p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>We usually respond within 24 hours</p>
      </div>
    </div>
  )
}
