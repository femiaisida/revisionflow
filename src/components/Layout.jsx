// src/components/Layout.jsx
import React, { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import {
  LayoutDashboard, Calendar, FileText, Brain, AlertCircle,
  CheckSquare, Users, Trophy, User, MessageSquare, BookOpen,
  Clock, Settings, LogOut, Menu, X, Sun, Moon, Zap, Flame
} from 'lucide-react'

const NAV = [
  { to: '/dashboard',   label: 'Dashboard',   icon: LayoutDashboard },
  { to: '/calendar',    label: 'Calendar',    icon: Calendar },
  { to: '/exams',       label: 'Exam Dates',  icon: Clock },
  { to: '/papers',      label: 'Past Papers', icon: FileText },
  { to: '/topics',      label: 'Topics',      icon: Brain },
  { to: '/mistakes',    label: 'Mistakes',    icon: AlertCircle },
  { to: '/notes',       label: 'Notes',       icon: BookOpen },
  { to: '/tasks',       label: 'Tasks',       icon: CheckSquare },
  { to: '/ai',          label: 'AI Advisor',  icon: MessageSquare },
  { to: '/friends',     label: 'Friends',     icon: Users },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { to: '/profile',     label: 'Profile',     icon: User },
  { to: '/settings',    label: 'Settings',    icon: Settings },
]

const MOBILE_NAV = [
  { to: '/dashboard',   label: 'Home',     icon: LayoutDashboard },
  { to: '/calendar',    label: 'Calendar', icon: Calendar },
  { to: '/papers',      label: 'Papers',   icon: FileText },
  { to: '/ai',          label: 'AI',       icon: MessageSquare },
  { to: '/profile',     label: 'Profile',  icon: User },
]

export default function Layout() {
  const { profile, logout } = useAuth()
  const { theme, toggle } = useTheme()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  async function handleLogout() {
    await logout()
    navigate('/login')
  }

  const xpForNextLevel = profile ? Math.floor(100 * Math.pow(1.15, (profile.level || 1) - 1)) : 100
  const xpProgress = profile ? Math.min(100, ((profile.xp || 0) / xpForNextLevel) * 100) : 0

  return (
    <div className="app-layout">
      {/* Overlay */}
      {open && <div style={{position:'fixed',inset:0,zIndex:99,background:'rgba(0,0,0,0.5)'}} onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        {/* Logo */}
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:24,padding:'0 4px'}}>
          <div style={{width:32,height:32,borderRadius:8,background:'linear-gradient(135deg,#7c3aed,#a855f7)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
            <Zap size={18} color="#fff" />
          </div>
          <span style={{fontWeight:800,fontSize:'1.1rem',letterSpacing:'-0.02em'}}>
            Revision<span style={{color:'var(--accent-light)'}}>Flow</span>
          </span>
        </div>

        {/* User card */}
        {profile && (
          <div className="card accent-card" style={{marginBottom:16,padding:12}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
              <div style={{width:32,height:32,borderRadius:'50%',background:'linear-gradient(135deg,var(--purple-700),var(--purple-400))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.85rem',fontWeight:700,flexShrink:0}}>
                {(profile.displayName||'U')[0].toUpperCase()}
              </div>
              <div style={{overflow:'hidden'}}>
                <div style={{fontWeight:600,fontSize:'0.85rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{profile.displayName}</div>
                <div style={{fontSize:'0.72rem',color:'var(--text-muted)'}}>Level {profile.level||1}</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill xp-bar-fill" style={{width:`${xpProgress}%`}} />
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:4,fontSize:'0.7rem',color:'var(--text-muted)'}}>
              <span>{profile.xp||0} XP</span>
              <span className="streak-fire">🔥 {profile.streak||0}</span>
            </div>
          </div>
        )}

        {/* Nav links */}
        <nav style={{flex:1,display:'flex',flexDirection:'column',gap:2}}>
          {NAV.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display:'flex',alignItems:'center',gap:10,padding:'9px 12px',
                borderRadius:'var(--radius-md)',fontSize:'0.875rem',fontWeight:500,
                color: isActive ? '#fff' : 'var(--text-secondary)',
                background: isActive ? 'var(--accent)' : 'transparent',
                textDecoration:'none',transition:'all var(--transition)',
              })}
            >
              <Icon size={17} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom actions */}
        <div style={{display:'flex',flexDirection:'column',gap:4,marginTop:12,paddingTop:12,borderTop:'1px solid var(--border)'}}>
          <button className="btn btn-ghost" onClick={toggle} style={{justifyContent:'flex-start',gap:10,fontSize:'0.875rem'}}>
            {theme==='dark' ? <Sun size={17}/> : <Moon size={17}/>}
            {theme==='dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button className="btn btn-ghost" onClick={handleLogout} style={{justifyContent:'flex-start',gap:10,fontSize:'0.875rem',color:'var(--danger)'}}>
            <LogOut size={17}/> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        {/* Mobile header */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}} className="mobile-only"
          hidden={typeof window !== 'undefined' && window.innerWidth > 768}>
          <button className="btn btn-icon btn-ghost" onClick={() => setOpen(true)}>
            <Menu size={22}/>
          </button>
          <span style={{fontWeight:800}}>Revision<span style={{color:'var(--accent-light)'}}>Flow</span></span>
          <button className="btn btn-icon btn-ghost" onClick={toggle}>
            {theme==='dark' ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>

        <Outlet />
      </main>

      {/* Mobile bottom nav */}
      <nav className="mobile-nav">
        <div className="mobile-nav-items">
          {MOBILE_NAV.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `mobile-nav-item${isActive ? ' active':''}`}>
              <Icon size={20}/>
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
