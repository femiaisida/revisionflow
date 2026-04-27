// src/hooks/useUserData.js
// NOTE: This hook is no longer the primary data source.
// AuthContext now owns the live profile via onSnapshot.
// This hook remains for any component that needs it directly.
import { useAuth } from '../context/AuthContext'

export default function useUserData() {
  const { profile } = useAuth()
  return profile
}
