// src/pages/Profile.jsx
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { updateUserProfile } from '../utils/firestore'
import { LEVELS, BADGES, SUBJECT_COLOURS } from '../data/subjects'
import { gradeColour } from '../utils/calendar'
import { Zap, Flame, Trophy, Star, Copy, Check } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Profile() {
  const { user, profile, refreshProfile } = useAuth()
  const [copied, setCopied] = useState(false)

  const lvl       = LEVELS[Math.min((profile?.level||1)-1,LEVELS.length-1)]
  const nextLvl   = LEVELS[Math.min((profile?.level||1),LEVELS.length-1)]
  const xpPct     = profile ? Math.min(100,((profile.xp||0)/(nextLvl?.xpRequired||100))*100) : 0
  const unlockedBadges = (profile?.badges||[]).map(id=>BADGES.find(b=>b.id===id)).filter(Boolean)
  const profileUrl = `${window.location.origin}/u/${profile?.username||user?.uid}`

  function copyLink() {
    navigator.clipboard.writeText(profileUrl)
    setCopied(true)
    setTimeout(()=>setCopied(false),2000)
    toast.success('Profile link copied!')
  }

  return (
    <div className="fade-in" style={{maxWidth:720,margin:'0 auto'}}>
      {/* Header card */}
      <div className="card accent-card" style={{marginBottom:20,padding:28,textAlign:'center'}}>
        <div style={{width:72,height:72,borderRadius:'50%',background:'linear-gradient(135deg,#7c3aed,#a855f7)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'1.8rem',margin:'0 auto 16px'}}>
          {(profile?.displayName||'U')[0].toUpperCase()}
        </div>
        <h2 style={{marginBottom:4}}>{profile?.displayName}</h2>
        {profile?.username && <p style={{fontSize:'0.875rem',marginBottom:16}}>@{profile.username}</p>}
        <div style={{display:'flex',gap:20,justifyContent:'center',flexWrap:'wrap',marginBottom:20}}>
          <div style={{textAlign:'center'}}><div style={{fontSize:'1.5rem',fontWeight:800,color:'var(--accent-light)'}}>{(profile?.xp||0).toLocaleString()}</div><div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>XP</div></div>
          <div style={{textAlign:'center'}}><div style={{fontSize:'1.5rem',fontWeight:800,color:'var(--warning)'}}><span className="streak-fire">🔥</span>{profile?.streak||0}</div><div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>Streak</div></div>
          <div style={{textAlign:'center'}}><div style={{fontSize:'1.5rem',fontWeight:800,color:'var(--purple-300)'}}>Lv.{profile?.level||1}</div><div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>{lvl?.title}</div></div>
          <div style={{textAlign:'center'}}><div style={{fontSize:'1.5rem',fontWeight:800,color:'var(--success)'}}>{unlockedBadges.length}</div><div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>Badges</div></div>
        </div>
        <div className="progress-bar" style={{maxWidth:360,margin:'0 auto 8px'}}><div className="progress-fill xp-bar-fill" style={{width:`${xpPct}%`}}/></div>
        <div style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>{profile?.xp||0} / {nextLvl?.xpRequired} XP to Level {(profile?.level||1)+1}</div>

        <div style={{display:'flex',gap:8,justifyContent:'center',marginTop:16}}>
          <button className="btn btn-secondary btn-sm" onClick={copyLink}>
            {copied?<><Check size={13}/> Copied!</>:<><Copy size={13}/> Share profile</>}
          </button>
        </div>
      </div>

      {/* Subjects */}
      <div className="card" style={{marginBottom:20}}>
        <h4 style={{marginBottom:16}}>Your subjects</h4>
        {(profile?.subjects||[]).length===0 ? <p>No subjects added yet</p> : (
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {(profile?.subjects||[]).map(s=>(
              <div key={s.name} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <div style={{width:10,height:10,borderRadius:'50%',background:SUBJECT_COLOURS[s.name]||'var(--accent)'}}/>
                  <span style={{fontWeight:600}}>{s.name}</span>
                  <span className="badge badge-grey">{s.board}</span>
                </div>
                <div style={{display:'flex',gap:8,alignItems:'center'}}>
                  {profile?.startingGrades?.[s.name]&&<span style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Start: {profile.startingGrades[s.name]}</span>}
                  <span style={{fontWeight:800,color:gradeColour(s.currentGrade||''),fontSize:'1.05rem'}}>{s.currentGrade||'?'}</span>
                  <span style={{color:'var(--text-muted)'}}>→</span>
                  <span style={{fontWeight:800,color:'var(--success)'}}>{s.targetGrade||9}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Badges */}
      <div className="card">
        <h4 style={{marginBottom:4}}>Badges ({unlockedBadges.length}/{BADGES.length})</h4>
        <p style={{fontSize:'0.82rem',marginBottom:16}}>Earn badges by completing sessions, maintaining streaks, and hitting milestones</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:10}}>
          {BADGES.map(b => {
            const unlocked = (profile?.badges||[]).includes(b.id)
            return (
              <div key={b.id} style={{padding:10,borderRadius:'var(--radius-md)',border:`1px solid ${unlocked?'var(--accent)':'var(--border)'}`,background:unlocked?'rgba(124,58,237,0.1)':'var(--bg-surface)',opacity:unlocked?1:0.45,textAlign:'center'}}>
                <div style={{fontSize:'1.6rem',marginBottom:4}}>{b.icon}</div>
                <div style={{fontWeight:600,fontSize:'0.8rem'}}>{b.name}</div>
                <div style={{fontSize:'0.7rem',color:'var(--text-muted)',lineHeight:1.4,marginTop:2}}>{b.desc}</div>
                {unlocked&&<div style={{marginTop:4,fontSize:'0.7rem',color:'var(--accent-light)',fontWeight:600}}>+{b.xp} XP</div>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
