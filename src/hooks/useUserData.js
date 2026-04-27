import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../utils/firestore";
import { useAuth } from "../context/AuthContext";

const defaultUser = {
  xp: 0,
  level: 1,
  streak: 1,
  lastLoginDate: null,
  badges: [],
  friends: [],
  quests: {},
};

export default function useUserData() {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!user) return;

    const ref = doc(db, "users", user.uid);

    const unsub = onSnapshot(ref, async (snap) => {
      if (!snap.exists()) {
        await setDoc(ref, defaultUser);
        return;
      }
      setData(snap.data());
    });

    return () => unsub();
  }, [user]);

  return data;
}
