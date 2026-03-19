import { Link } from 'react-router-dom'
import { ArrowLeft, Zap } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      {/* Top nav bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 24px', borderBottom: '1px solid var(--border)',
        background: 'var(--bg-surface)',
      }}>
        <Link to="/" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 800, fontSize: '1.05rem',
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Zap size={18} color="#fff" />
          </div>
          Revision<span style={{ color: 'var(--accent-light)' }}>Flow</span>
        </Link>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/" className="btn btn-secondary btn-sm">
            <ArrowLeft size={14} /> Back to home
          </Link>
          <Link to="/login" className="btn btn-primary btn-sm">
            Log in
          </Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1.5rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>Last updated: March 2026</p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem' }}>1. Who We Are</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>RevisionFlow is an independent revision tracking app for GCSE and A-Level students, developed by Oluwafemi Aisida.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem' }}>2. Data We Collect</h2>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.9, paddingLeft: '1.5rem' }}>
            <li><strong>Account:</strong> email and display name</li>
            <li><strong>Revision data:</strong> subjects, sessions, scores, topics, notes, tasks</li>
            <li><strong>Progress:</strong> XP, streaks, badges</li>
            <li><strong>AI interactions:</strong> messages processed by Mistral AI</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem' }}>3. How We Use Your Data</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>To provide revision features, AI recommendations, and gamification. We do not sell your data or use it for advertising.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem' }}>4. Data Storage</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Stored securely via Google Firebase on Google Cloud. Access is restricted to your account only via security rules.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem' }}>5. Third-Party Services</h2>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.9, paddingLeft: '1.5rem' }}>
            <li><strong>Google Firebase</strong> — auth and storage</li>
            <li><strong>Mistral AI</strong> — AI advisor (no training on API data by default)</li>
            <li><strong>Netlify</strong> — hosting</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem' }}>6. Your Rights (GDPR)</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>You have the right to access, correct, or delete your data. Go to <strong>Settings &rarr; Delete Account</strong> to remove all your data. For requests: <strong>femiaisida1@gmail.com</strong></p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem' }}>7. Cookies</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Only functional cookies to keep you logged in. No tracking or advertising cookies.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem' }}>8. Age</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Designed for students aged 14+. Users under 13 should not use this service.</p>
        </section>

        {/* Footer nav */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <Link to="/" className="btn btn-secondary btn-sm">
            <ArrowLeft size={14} /> Back to home
          </Link>
          <Link to="/signup" className="btn btn-primary btn-sm">
            Start revising free →
          </Link>
        </div>
      </div>
    </div>
  );
}
