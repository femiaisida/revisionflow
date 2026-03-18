// src/pages/TopicMastery.jsx
// Cross-subject topic mastery view — shows all topics colour-coded by confidence
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import { SUBJECT_COLOURS } from '../data/subjects'
import { Brain, TrendingUp, AlertTriangle, CheckCircle2, Filter } from 'lucide-react'

const CONF_LABELS = { 1:'Very weak', 2:'Weak', 3:'Building', 4:'Strong', 5:'Mastered' }
const CONF_COLOURS = {
  1: 'var(--danger)',
  2: 'rgba(239,68,68,0.7)',
  3: 'var(--warning)',
  4: 'rgba(16,185,129,0.8)',
  5: 'var(--success)',
}
const CONF_BG = {
  1: 'rgba(239,68,68,0.1)',
  2: 'rgba(239,68,68,0.06)',
  3: 'rgba(245,158,11,0.08)',
  4: 'rgba(16,185,129,0.08)',
  5: 'rgba(16,185,129,0.12)',
}

export default function TopicMastery() {
  const { user, profile } = useAuth()
  const [allTopics, setAllTopics] = useState([])
  const [loading,   setLoading]   = useState(true)
  const [filter,    setFilter]    = useState('all')   // all | weak | strong
  const [selSubj,   setSelSubj]   = useState('all')

  const subjects = profile?.subjects?.map(s => s.name) || []

  useEffect(() => {
    if (!user) return
    getDocs(collection(db, 'users', user.uid, 'topics'))
      .then(snap => {
        setAllTopics(snap.docs.map(d => ({ id: d.id, ...d.data() })))
        setLoading(false)
      })
  }, [user])

  const filtered = allTopics
    .filter(t => selSubj === 'all' || t.subjectId === selSubj || t.subject === selSubj)
    .filter(t => {
      const c = t.confidence || 3
      if (filter === 'weak')   return c <= 2
      if (filter === 'mid')    return c === 3
      if (filter === 'strong') return c >= 4
      return true
    })
    .sort((a, b) => (a.confidence || 3) - (b.confidence || 3))

  // Stats
  const weak   = allTopics.filter(t => (t.confidence||3) <= 2).length
  const mid    = allTopics.filter(t => (t.confidence||3) === 3).length
  const strong = allTopics.filter(t => (t.confidence||3) >= 4).length
  const total  = allTopics.length
  const masteryPct = total ? Math.round((strong / total) * 100) : 0

  // Group by subject for the overview
  const bySubject = {}
  allTopics.forEach(t => {
    const subj = t.subjectId || t.subject || 'Unknown'
    if (!bySubject[subj]) bySubject[subj] = { weak:0, mid:0, strong:0, total:0 }
    const c = t.confidence || 3
    bySubject[subj].total++
    if (c <= 2) bySubject[subj].weak++
    else if (c === 3) bySubject[subj].mid++
    else bySubject[subj].strong++
  })

  if (loading) return <div className="loading-center"><div className="spinner"/></div>

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <div>
          <h2 style={{display:'flex',alignItems:'center',gap:10}}>
            <Brain size={22} color="var(--accent-light)"/> Topic Mastery
          </h2>
          <p>Confidence levels across all your subjects</p>
        </div>
        <Link to="/topics" className="btn btn-secondary btn-sm">
          Update topics
        </Link>
      </div>

      {total === 0 ? (
        <div className="empty-state">
          <Brain size={56} style={{opacity:0.3}}/>
          <h4>No topic data yet</h4>
          <p>Go to Topics and rate your confidence on each topic to see your mastery overview.</p>
          <Link to="/topics" className="btn btn-primary">Go to Topics</Link>
        </div>
      ) : (
        <>
          {/* Summary stats */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',gap:10,marginBottom:20}}>
            {[
              { label:'Total topics',   val:total,       c:'var(--accent-light)', icon:<Brain size={16}/> },
              { label:'Needs work',     val:weak,        c:'var(--danger)',       icon:<AlertTriangle size={16}/> },
              { label:'Building',       val:mid,         c:'var(--warning)',      icon:<TrendingUp size={16}/> },
              { label:'Strong',         val:strong,      c:'var(--success)',      icon:<CheckCircle2 size={16}/> },
              { label:'Mastery score',  val:`${masteryPct}%`, c:'var(--purple-300)', icon:<Brain size={16}/> },
            ].map(s => (
              <div key={s.label} className="card" style={{textAlign:'center',padding:'12px 8px'}}>
                <div style={{color:s.c,marginBottom:4}}>{s.icon}</div>
                <div style={{fontWeight:800,fontSize:'1.4rem',color:s.c}}>{s.val}</div>
                <div style={{fontSize:'0.68rem',color:'var(--text-muted)',marginTop:2}}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Per-subject breakdown bars */}
          <div className="card" style={{marginBottom:16}}>
            <h4 style={{marginBottom:14}}>By Subject</h4>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {Object.entries(bySubject).map(([subj, data]) => {
                const pct = data.total ? Math.round((data.strong/data.total)*100) : 0
                return (
                  <div key={subj}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:4,fontSize:'0.82rem'}}>
                      <span style={{fontWeight:600,display:'flex',alignItems:'center',gap:6}}>
                        <div style={{width:7,height:7,borderRadius:'50%',background:SUBJECT_COLOURS[subj]||'var(--accent)'}}/>
                        {subj}
                      </span>
                      <span style={{color:'var(--text-muted)'}}>{data.strong}/{data.total} strong ({pct}%)</span>
                    </div>
                    <div style={{height:8,borderRadius:4,background:'var(--bg-hover)',overflow:'hidden',display:'flex'}}>
                      <div style={{width:`${data.total?Math.round(data.weak/data.total*100):0}%`,background:'var(--danger)',transition:'width 0.4s'}}/>
                      <div style={{width:`${data.total?Math.round(data.mid/data.total*100):0}%`,background:'var(--warning)',transition:'width 0.4s'}}/>
                      <div style={{width:`${pct}%`,background:'var(--success)',transition:'width 0.4s'}}/>
                    </div>
                  </div>
                )
              })}
            </div>
            <div style={{display:'flex',gap:12,marginTop:10,fontSize:'0.7rem',color:'var(--text-muted)'}}>
              {[['var(--danger)','Weak'],['var(--warning)','Building'],['var(--success)','Strong']].map(([c,l])=>(
                <span key={l} style={{display:'flex',alignItems:'center',gap:4}}>
                  <div style={{width:8,height:8,borderRadius:2,background:c}}/>{l}
                </span>
              ))}
            </div>
          </div>

          {/* Topic list with filters */}
          <div className="card">
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14,flexWrap:'wrap',gap:10}}>
              <h4>All Topics</h4>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                <select className="select" style={{fontSize:'0.78rem',padding:'4px 8px'}}
                  value={selSubj} onChange={e=>setSelSubj(e.target.value)}>
                  <option value="all">All subjects</option>
                  {Object.keys(bySubject).map(s=><option key={s} value={s}>{s}</option>)}
                </select>
                <div className="tabs" style={{padding:2}}>
                  {[['all','All'],['weak','⚠ Weak'],['mid','Building'],['strong','✓ Strong']].map(([v,l])=>(
                    <button key={v} className={`tab${filter===v?' active':''}`} style={{fontSize:'0.72rem',padding:'3px 8px'}}
                      onClick={()=>setFilter(v)}>{l}</button>
                  ))}
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="empty-state" style={{padding:'20px 0'}}>
                <p>No topics match this filter</p>
              </div>
            ) : (
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:8}}>
                {filtered.map(t => {
                  const c = t.confidence || 3
                  return (
                    <div key={t.id} style={{padding:'10px 12px',borderRadius:'var(--radius-md)',background:CONF_BG[c],border:`1px solid ${CONF_COLOURS[c]}30`}}>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:6}}>
                        <div style={{flex:1}}>
                          <div style={{fontSize:'0.8rem',fontWeight:600,lineHeight:1.3,marginBottom:3}}>{t.name}</div>
                          <div style={{fontSize:'0.68rem',color:'var(--text-muted)'}}>{t.subjectId||t.subject}</div>
                        </div>
                        <div style={{flexShrink:0,textAlign:'right'}}>
                          <div style={{fontWeight:800,color:CONF_COLOURS[c],fontSize:'0.82rem'}}>{c}/5</div>
                          <div style={{fontSize:'0.62rem',color:CONF_COLOURS[c]}}>{CONF_LABELS[c]}</div>
                        </div>
                      </div>
                      {/* Confidence pip bar */}
                      <div style={{display:'flex',gap:2,marginTop:6}}>
                        {[1,2,3,4,5].map(n=>(
                          <div key={n} style={{flex:1,height:3,borderRadius:2,background:n<=c?CONF_COLOURS[c]:'var(--bg-hover)'}}/>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
