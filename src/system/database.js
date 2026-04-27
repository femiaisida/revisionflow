import { doc, getDoc, setDoc, updateDoc, runTransaction } from "firebase/firestore";
import { db } from "../utils/firestore";

const defaultUser = {
  xp: 0,
  level: 1,
  streak: 1,
  lastLoginDate: null,
  badges: [],
  friends: [],
  quests: {},
};

export async function ensureUser(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, defaultUser);
    return defaultUser;
  }

  return snap.data();
}

export async function safeUpdateXP(uid, amount) {
  const ref = doc(db, "users", uid);

  await runTransaction(db, async (transaction) => {
    const snap = await transaction.get(ref);
    if (!snap.exists()) return;

    const data = snap.data();
    const newXP = data.xp + amount;

    transaction.update(ref, { xp: newXP });
  });
}
