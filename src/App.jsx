// src/App.jsx
import React, { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { BadgeProvider } from './context/BadgeContext'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'
import { requestNotificationPermission } from './utils/notifications'

const Landing      = lazy(() => import('./pages/Landing'))
const Login        = lazy(() => import('./pages/Login'))
const Signup       = lazy(() => import('./pages/Signup'))
const Onboarding   = lazy(() => import('./pages/Onboarding'))
const Dashboard    = lazy(() => import('./pages/Dashboard'))
const Calendar     = lazy(() => import('./pages/Calendar'))
const PastPapers   = lazy(() => import('./pages/PastPapers'))
const Topics       = lazy(() => import('./pages/Topics'))
const Mistakes     = lazy(() => import('./pages/Mistakes'))
const Tasks        = lazy(() => import('./pages/Tasks'))
const Friends      = lazy(() => import('./pages/Friends'))
const Leaderboard  = lazy(() => import('./pages/Leaderboard'))
const Profile      = lazy(() => import('./pages/Profile'))
const PublicProfile= lazy(() => import('./pages/PublicProfile'))
const AIAdvisor    = lazy(() => import('./pages/AIAdvisor'))
const Notes        = lazy(() => import('./pages/Notes'))
const ExamDates    = lazy(() => import('./pages/ExamDates'))
const Settings     = lazy(() => import('./pages/Settings'))
const TimerPage    = lazy(() => import('./pages/Timer'))
const Analytics    = lazy(() => import('./pages/Analytics'))

function NotificationInit() {
  useEffect(() => {
    const asked = localStorage.getItem('rf-notif-asked')
    if (!asked) {
      setTimeout(() => {
        requestNotificationPermission().then(granted => {
          localStorage.setItem('rf-notif-asked', '1')
        })
      }, 3000)
    }
  }, [])
  return null
}

function PrivateRoute({ children }) {
  const { user, loading, profile } = useAuth()
  if (loading) return <LoadingScreen />
  if (!user) return <Navigate to="/login" replace />
  if (user && profile && !profile.onboardingComplete) return <Navigate to="/onboarding" replace />
  return children
}

function PublicOnlyRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <LoadingScreen />
  if (user) return <Navigate to="/dashboard" replace />
  return children
}

function OnboardingRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <LoadingScreen />
  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BadgeProvider>
        <NotificationInit />
        <Toaster
          position="top-right"
          toastOptions={{ className:'toast-custom', duration:3500 }}
        />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/"    element={<Landing />} />
            <Route path="/login"  element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
            <Route path="/signup" element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />
            <Route path="/u/:username" element={<PublicProfile />} />
            <Route path="/onboarding" element={<OnboardingRoute><Onboarding /></OnboardingRoute>} />

            <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
              <Route path="/dashboard"   element={<Dashboard />} />
              <Route path="/calendar"    element={<Calendar />} />
              <Route path="/exams"       element={<ExamDates />} />
              <Route path="/papers"      element={<PastPapers />} />
              <Route path="/topics"      element={<Topics />} />
              <Route path="/mistakes"    element={<Mistakes />} />
              <Route path="/notes"       element={<Notes />} />
              <Route path="/tasks"       element={<Tasks />} />
              <Route path="/timer"       element={<TimerPage />} />
              <Route path="/ai"          element={<AIAdvisor />} />
              <Route path="/friends"     element={<Friends />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile"     element={<Profile />} />
              <Route path="/settings"    element={<Settings />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        </BadgeProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
