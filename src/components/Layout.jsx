// src/components/Layout.jsx
import React, { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import PWAInstallBanner from './PWAInstallBanner'
import {
  LayoutDashboard, Calendar, FileText, Brain, AlertCircle,
  CheckSquare, Users, Trophy, User, MessageSquare, BookOpen,
  Clock, Settings, LogOut, Menu, X, Sun, Moon, Zap, Timer, BarChart2, Layers, HelpCircle
} from 'lucide-react'

const NAV = [
  { to:'/dashboard',   label:'Dashboard',   icon:LayoutDashboard },
  { to:'/calendar',    label:'Calendar',    icon:Calendar },
  { to:'/exams',       label:'Exam Dates',  icon:Clock },
  { to:'/papers',      label:'Past Papers', icon:FileText },
  { to:'/topics',      label:'Topics',      icon:Brain },
  { to:'/mistakes',    label:'Mistakes',    icon:AlertCircle },
  { to:'/notes',       label:'Notes',       icon:BookOpen },
  { to:'/tasks',       label:'Tasks',       icon:CheckSquare },
  { to:'/timer',       label:'Timer',       icon:Timer },
  { to:'/analytics',   label:'Analytics',   icon:BarChart2 },
  { to:'/mastery',     label:'Mastery',     icon:Layers },
  { to:'/ai',          label:'AI Advisor',  icon:MessageSquare },
  { to:'/friends',     label:'Friends',     icon:Users },
  { to:'/leaderboard', label:'Leaderboard', icon:Trophy },
  { to:'/profile',     label:'Profile',     icon:User },
  { to:'/help',       label:'Help',        icon:HelpCircle },
  { to:'/settings',    label:'Settings',    icon:Settings },
]

const MOBILE_NAV = [
  { to:'/dashboard', label:'Home',     icon:LayoutDashboard },
  { to:'/calendar',  label:'Calendar', icon:Calendar },
  { to:'/timer',     label:'Timer',    icon:Timer },
  { to:'/analytics', label:'Analytics', icon:BarChart2 },
  { to:'/mastery',   label:'Mastery',   icon:Layers },
  { to:'/ai',        label:'AI',       icon:MessageSquare },
  { to:'/profile',   label:'Profile',  icon:User },
]

export default function Layout() {
  const { profile, logout } = useAuth()
  const { theme, toggle }   = useTheme()
  const navigate             = useNavigate()
  const [open,       setOpen]       = useState(false)
  const [showWidget, setShowWidget] = useState(false)
  const [collapsed,  setCollapsed]  = useState(false)

  async function handleLogout() {
    await logout()
    navigate('/login')
  }

  const xpForNext  = profile ? Math.floor(100 * Math.pow(1.15, (profile.level||1)-1)) : 100
  const xpProgress = profile ? Math.min(100,((profile.xp||0)/xpForNext)*100) : 0

  return (
    <div className="app-layout">
      {open && <div style={{position:'fixed',inset:0,zIndex:99,background:'rgba(0,0,0,0.5)'}} onClick={()=>setOpen(false)}/>}

      <aside className={`sidebar ${open?'open':''}`} style={{width:collapsed?52:undefined,minWidth:collapsed?52:undefined,transition:'width 0.2s,min-width 0.2s',overflow:'hidden'}}>
        {/* Logo */}
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:20,padding:'0 4px'}}>
          <div style={{width:32,height:32,borderRadius:8,background:'linear-gradient(135deg,#7c3aed,#a855f7)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
            <Zap size={18} color="#fff"/>
          </div>
          {!collapsed && <span style={{fontWeight:800,fontSize:'1.05rem',letterSpacing:'-0.02em',flex:1}}>Revision<span style={{color:'var(--accent-light)'}}>Flow</span></span>}
          <button onClick={()=>setCollapsed(x=>!x)} title={collapsed?'Expand sidebar':'Collapse sidebar'} style={{marginLeft:'auto',background:'var(--bg-surface)',border:'1px solid var(--border)',cursor:'pointer',color:'var(--text-secondary)',padding:'4px 6px',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{collapsed?'»':'«'}</button>
        </div>

        {/* User card */}
        {profile && !collapsed && (
          <div className="card accent-card" style={{marginBottom:14,padding:10}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}>
              <div style={{width:30,height:30,borderRadius:'50%',background:'linear-gradient(135deg,var(--purple-700),var(--purple-400))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.8rem',fontWeight:700,flexShrink:0}}>
                {(profile.displayName||'U')[0].toUpperCase()}
              </div>
              <div style={{overflow:'hidden'}}>
                <div style={{fontWeight:600,fontSize:'0.82rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{profile.displayName}</div>
                <div style={{fontSize:'0.68rem',color:'var(--text-muted)'}}>Level {profile.level||1}</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill xp-bar-fill" style={{width:`${xpProgress}%`}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:3,fontSize:'0.68rem',color:'var(--text-muted)'}}>
              <span>{profile.xp||0} XP</span>
              <span className="streak-fire">🔥 {profile.streak||0}</span>
            </div>
          </div>
        )}

        {/* Nav */}
        <nav style={{flex:1,display:'flex',flexDirection:'column',gap:1}}>
          {NAV.map(({to,label,icon:Icon})=>(
            <NavLink key={to} to={to} onClick={()=>setOpen(false)}
              style={({isActive})=>({
                display:'flex',alignItems:'center',gap:9,padding:'8px 10px',
                borderRadius:'var(--radius-md)',fontSize:'0.85rem',fontWeight:500,
                color:isActive?'#fff':'var(--text-secondary)',
                background:isActive?'var(--accent)':'transparent',
                textDecoration:'none',transition:'all var(--transition)',
              })}>
              <Icon size={16}/>{!collapsed && <span style={{marginLeft:9}}>{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div style={{display:'flex',flexDirection:'column',gap:3,marginTop:10,paddingTop:10,borderTop:'1px solid var(--border)'}}>
          <button className="btn btn-ghost" onClick={toggle} style={{justifyContent:'flex-start',gap:9,fontSize:'0.85rem'}}>
            {theme==='dark'?<Sun size={16}/>:<Moon size={16}/>}
            {!collapsed && (theme==='dark'?'Light mode':'Dark mode')}
          </button>
          <button className="btn btn-ghost" onClick={handleLogout} style={{justifyContent:'flex-start',gap:9,fontSize:'0.85rem',color:'var(--danger)'}}>
            <LogOut size={16}/>{!collapsed && ' Sign out'}
          </button>
        </div>
      </aside>

      <main className="main-content">
        {/* Mobile header */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16,paddingBottom:12,borderBottom:'1px solid var(--border)'}}
          className="mobile-header">
          <button className="btn btn-icon btn-ghost" onClick={()=>setOpen(true)}><Menu size={22}/></button>
          <span style={{fontWeight:800}}>Revision<span style={{color:'var(--accent-light)'}}>Flow</span></span>
          <div style={{display:'flex',gap:6}}>
            <button className="btn btn-icon btn-ghost btn-sm" onClick={()=>setShowWidget(!showWidget)} title="Timer widget">
              <Timer size={18}/>
            </button>
            <button className="btn btn-icon btn-ghost" onClick={toggle}>
              {theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}
            </button>
          </div>
        </div>
        <Outlet />
      </main>

      {/* Floating timer widget */}
      
      <PWAInstallBanner/>

      {/* Mobile bottom nav */}
      <nav className="mobile-nav">
        <div className="mobile-nav-items">
          {MOBILE_NAV.map(({to,label,icon:Icon})=>(
            <NavLink key={to} to={to} className={({isActive})=>`mobile-nav-item${isActive?' active':''}`}>
              <Icon size={20}/><span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <style>{`.mobile-header{display:none;}@media(max-width:768px){.mobile-header{display:flex !important;}}`}</style>
    </div>
  )
}
