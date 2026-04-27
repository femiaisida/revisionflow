// src/App.jsx
import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { AppProvider } from './context/AppContext'

// ── Lazy pages ────────────────────────────────────────────────────────────────
const Landing       = lazy(() => import('./pages/Landing'))
const Login         = lazy(() => import('./pages/Login'))
const Signup        = lazy(() => import('./pages/Signup'))
const Onboarding    = lazy(() => import('./pages/Onboarding'))
const Dashboard     = lazy(() => import('./pages/Dashboard'))
const Topics        = lazy(() => import('./pages/Topics'))
const TopicMastery  = lazy(() => import('./pages/TopicMastery'))
const Calendar      = lazy(() => import('./pages/Calendar'))
const Timer         = lazy(() => import('./pages/Timer'))
const Tasks         = lazy(() => import('./pages/Tasks'))
const Notes         = lazy(() => import('./pages/Notes'))
const Mistakes      = lazy(() => import('./pages/Mistakes'))
const PastPapers    = lazy(() => import('./pages/PastPapers'))
const Analytics     = lazy(() => import('./pages/Analytics'))
const ExamDates     = lazy(() => import('./pages/ExamDates'))
const AIAdvisor     = lazy(() => import('./pages/AIAdvisor'))
const AI            = lazy(() => import('./pages/AI'))
const Friends       = lazy(() => import('./pages/Friends'))
const Leaderboard   = lazy(() => import('./pages/Leaderboard'))
const Profile       = lazy(() => import('./pages/Profile'))
const PublicProfile = lazy(() => import('./pages/PublicProfile'))
const Settings      = lazy(() => import('./pages/Settings'))
const EmergencyMode = lazy(() => import('./pages/EmergencyMode'))
const Help          = lazy(() => import('./pages/Help'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

// ── Guards ────────────────────────────────────────────────────────────────────
function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}

function PublicOnly({ children }) {
  const { user } = useAuth()
  return user ? <Navigate to="/dashboard" replace /> : children
}

// ── Loading fallback ──────────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'var(--bg-base)' }}>
      <div className="spinner" />
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppProvider>
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Public */}
                <Route path="/"            element={<Landing />} />
                <Route path="/privacy"     element={<PrivacyPolicy />} />
                <Route path="/u/:username" element={<PublicProfile />} />

                {/* Auth */}
                <Route path="/login"  element={<PublicOnly><Login /></PublicOnly>} />
                <Route path="/signup" element={<PublicOnly><Signup /></PublicOnly>} />

                {/* Protected */}
                <Route path="/dashboard"     element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/onboarding"    element={<PrivateRoute><Onboarding /></PrivateRoute>} />
                <Route path="/topics"        element={<PrivateRoute><Topics /></PrivateRoute>} />
                <Route path="/topic-mastery" element={<PrivateRoute><TopicMastery /></PrivateRoute>} />
                <Route path="/calendar"      element={<PrivateRoute><Calendar /></PrivateRoute>} />
                <Route path="/timer"         element={<PrivateRoute><Timer /></PrivateRoute>} />
                <Route path="/tasks"         element={<PrivateRoute><Tasks /></PrivateRoute>} />
                <Route path="/notes"         element={<PrivateRoute><Notes /></PrivateRoute>} />
                <Route path="/mistakes"      element={<PrivateRoute><Mistakes /></PrivateRoute>} />
                <Route path="/past-papers"   element={<PrivateRoute><PastPapers /></PrivateRoute>} />
                <Route path="/analytics"     element={<PrivateRoute><Analytics /></PrivateRoute>} />
                <Route path="/exam-dates"    element={<PrivateRoute><ExamDates /></PrivateRoute>} />
                <Route path="/ai-advisor"    element={<PrivateRoute><AIAdvisor /></PrivateRoute>} />
                <Route path="/ai"            element={<PrivateRoute><AI /></PrivateRoute>} />
                <Route path="/friends"       element={<PrivateRoute><Friends /></PrivateRoute>} />
                <Route path="/leaderboard"   element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
                <Route path="/profile"       element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/settings"      element={<PrivateRoute><Settings /></PrivateRoute>} />
                <Route path="/emergency"     element={<PrivateRoute><EmergencyMode /></PrivateRoute>} />
                <Route path="/help"          element={<PrivateRoute><Help /></PrivateRoute>} />

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AppProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
