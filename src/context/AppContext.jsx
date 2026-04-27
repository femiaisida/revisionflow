import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useAuth } from "./AuthContext";
import useUserData from "../hooks/useUserData";
import { buildDashboard } from "../system/dashboard";
import { updateStreak } from "../system/streak";

const AppContext = createContext();

export function AppProvider({ children }) {
  const { user } = useAuth();
  const userData = useUserData();
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    if (!userData) return;

    const updatedStreak = updateStreak(
      userData.lastLoginDate,
      userData.streak
    );

    const enriched = buildDashboard({
      ...userData,
      streak: updatedStreak,
      lastLoginDate: new Date().toDateString(),
    });

    setDashboard(enriched);
  }, [userData]);

  const value = useMemo(() => ({ dashboard }), [dashboard]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
