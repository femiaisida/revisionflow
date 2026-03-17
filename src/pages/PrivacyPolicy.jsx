export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>Last updated: March 2026</p>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>1. Who We Are</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>RevisionFlow is an independent revision tracking app for GCSE and A-Level students, developed by Oluwafemi Aisida.</p>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>2. Data We Collect</h2>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.9, paddingLeft: '1.5rem' }}>
          <li><strong>Account:</strong> email and display name</li>
          <li><strong>Revision data:</strong> subjects, sessions, scores, topics, notes, tasks</li>
          <li><strong>Progress:</strong> XP, streaks, badges</li>
          <li><strong>AI interactions:</strong> messages processed by Mistral AI</li>
        </ul>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>3. How We Use Your Data</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>To provide revision features, AI recommendations, and gamification. We do not sell your data or use it for advertising.</p>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>4. Data Storage</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Stored securely via Google Firebase on Google Cloud. Access is restricted to your account only via security rules.</p>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>5. Third-Party Services</h2>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.9, paddingLeft: '1.5rem' }}>
          <li><strong>Google Firebase</strong> — auth and storage</li>
          <li><strong>Mistral AI</strong> — AI advisor (no training on API data by default)</li>
          <li><strong>Netlify</strong> — hosting</li>
        </ul>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>6. Your Rights (GDPR)</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>You have the right to access, correct, or delete your data. Go to <strong>Settings &rarr; Delete Account</strong> to remove all your data. For requests: <strong>femiaisida1@gmail.com</strong></p>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>7. Cookies</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Only functional cookies to keep you logged in. No tracking or advertising cookies.</p>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>8. Age</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Designed for students aged 14+. Users under 13 should not use this service.</p>
      </section>
    </div>
  );
}
