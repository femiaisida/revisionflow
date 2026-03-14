// src/pages/Leaderboard.jsx
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { getLeaderboard } from '../utils/firestore'
import { LEVELS } from '../data/subjects'
import { Trophy, Flame, Zap } from 'lucide-react'

export default function Leaderboard() {
  const { user, profile } = useAuth()
  const [board, setBoard] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user || !profile) return
    getLeaderboard(profile.friends||[], user.uid).then(data => { setBoard(data); setLoading(false) })
  }, [user, profile])

  const medals = ['🥇','🥈','🥉']

  return (
    <div className="fade-in">
      <div style={{marginBottom:24}}>
        <h2 style={{display:'flex',alignItems:'center',gap:10}}><Trophy size={24} color="var(--warning)"/> Leaderboard</h2>
        <p>Ranked by total XP against you and your friends</p>
      </div>

      {loading ? <div className="loading-center"><div className="spinner"/></div> : (
        board.length === 0 ? (
          <div className="empty-state"><Trophy size={48} style={{opacity:0.3}}/><p>Add friends to see the leaderboard!</p></div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {board.map((u,i) => {
              const isMe = u.id === user.uid
              const lvl  = LEVELS[Math.min((u.level||1)-1,LEVELS.length-1)]
              return (
                <div key={u.id} className="card" style={{
                  display:'flex',alignItems:'center',gap:14,
                  background: isMe ? 'rgba(124,58,237,0.12)' : 'var(--bg-card)',
                  border: isMe ? '1px solid var(--accent)' : '1px solid var(--border)',
                }}>
                  <div style={{width:36,textAlign:'center',fontWeight:800,fontSize:i<3?'1.5rem':'1.1rem',flexShrink:0}}>
                    {i<3 ? medals[i] : <span style={{color:'var(--text-muted)'}}>{i+1}</span>}
                  </div>
                  <div style={{width:40,height:40,borderRadius:'50%',background:'linear-gradient(135deg,var(--purple-700),var(--purple-400))',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'1rem',flexShrink:0}}>
                    {(u.displayName||'U')[0].toUpperCase()}
                  </div>
                  <div style={{flex:1,overflow:'hidden'}}>
                    <div style={{fontWeight:700,fontSize:'0.95rem'}}>{u.displayName} {isMe&&<span style={{color:'var(--accent-light)',fontSize:'0.78rem'}}>(you)</span>}</div>
                    <div style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Level {u.level||1} · {lvl?.title}</div>
                  </div>
                  <div style={{display:'flex',gap:16,alignItems:'center'}}>
                    <div style={{textAlign:'center'}}>
                      <div style={{fontWeight:800,color:'var(--warning)',fontSize:'1.1rem',display:'flex',alignItems:'center',gap:4}}><Flame size={14}/>{u.streak||0}</div>
                      <div style={{fontSize:'0.68rem',color:'var(--text-muted)'}}>streak</div>
                    </div>
                    <div style={{textAlign:'center'}}>
                      <div style={{fontWeight:800,color:'var(--accent-light)',fontSize:'1.1rem',display:'flex',alignItems:'center',gap:4}}><Zap size={14}/>{(u.xp||0).toLocaleString()}</div>
                      <div style={{fontSize:'0.68rem',color:'var(--text-muted)'}}>XP</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      )}
    </div>
  )
}
