// src/context/AppContext.jsx
import { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { useAuth } from './AuthContext'
import { buildDashboard } from '../system/dashboard'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const { profile } = useAuth()
  const [dashboard, setDashboard] = useState(null)

  useEffect(() => {
    if (!profile) {
      setDashboard(null)
      return
    }
    // buildDashboard is pure — derives level/badges from profile data
    setDashboard(buildDashboard(profile))
  }, [profile])

  const value = useMemo(() => ({ dashboard }), [dashboard])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
