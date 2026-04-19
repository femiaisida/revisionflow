// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { TimerProvider } from './context/TimerContext'
import { captureReferralFromUrl } from './utils/referrals'
import { loadSavedTheme } from './data/themes'
import './styles/globals.css'

// Capture ?ref= from URL before React mounts
captureReferralFromUrl()

// If user arrived via a referral link, redirect to signup so they actually sign up
// (otherwise they land on the landing page and may not know what to do)
;(function redirectReferralToSignup() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('ref') && window.location.pathname === '/') {
    window.history.replaceState({}, '', '/signup?ref=' + params.get('ref'))
  }
})()

// Apply saved theme before first render (prevents flash of wrong colour)
loadSavedTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <TimerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TimerProvider>
    </ErrorBoundary>
  </React.StrictMode>
)

// PWA service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}
