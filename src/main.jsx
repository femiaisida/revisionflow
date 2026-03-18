import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PriorityProvider } from './context/PriorityContext'
import { TimerProvider } from './context/TimerContext'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PriorityProvider>
      <TimerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      </TimerProvider>
      </PriorityProvider>
    </React.StrictMode>
)

// PWA service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}
