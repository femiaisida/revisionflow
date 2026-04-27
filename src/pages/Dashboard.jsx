import { useApp } from "../context/AppContext";

export default function Dashboard() {
  const { dashboard } = useApp();

  if (!dashboard) return <div className="loader">Loading dashboard...</div>;

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="card">
        <h2>Level {dashboard.level}</h2>
        <p>
          XP: {dashboard.currentXP} / {dashboard.nextLevelXP}
        </p>
      </div>

      <div className="card">
        <h2>Streak</h2>
        <p>{dashboard.streak} days</p>
      </div>

      <div className="card">
        <h2>Badges</h2>
        <p>{dashboard.badgeCount}</p>
      </div>
    </div>
  );
}
