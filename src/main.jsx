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

// Capture ?ref= from URL before React mounts (survives the auth redirect)
captureReferralFromUrl()

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
