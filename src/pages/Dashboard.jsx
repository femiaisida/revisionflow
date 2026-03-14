// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getSessions, getTasks, getMistakes, getPaperAttempts } from '../utils/firestore'
import { getDailyAdvice } from '../utils/ai'
import { countdownLabel, countdownUrgency, gradeColour } from '../utils/calendar'
import { LEVELS, BADGES, SUBJECT_COLOURS } from '../data/subjects'
import {
  Flame, Zap, Trophy, Calendar, FileText, Brain, AlertCircle,
  CheckSquare, MessageSquare, ArrowRight, Star, Clock, TrendingUp
} from 'lucide-react'
import { format } from 'date-fns'

export default function Dashboard() {
  const { profile, user } = useAuth()
  const [todaySessions, setTodaySessions] = useState([])
  const [tasks, setTasks] = useState([])
  const [recentPapers, setRecentPapers] = useState([])
  const [aiAdvice, setAiAdvice] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    Promise.all([
      getSessions(user.uid, { limit: 50 }),
      getTasks(user.uid),
      getPaperAttempts(user.uid, null),
    ]).then(([sessions, taskList, papers]) => {
      const today = new Date().toDateString()
      setTodaySessions(sessions.filter(s => {
        const d = s.startTime ? new Date(s.startTime) : s.date ? new Date(s.date) : null
        return d && d.toDateString() === today
      }))
      setTasks(taskList.filter(t => !t.completed).slice(0,5))
      setRecentPapers(papers.slice(0,5))
      setLoading(false)
    })

    getDailyAdvice(user.uid, [], profile?.streak||0, []).then(r => {
      if (r.text) setAiAdvice(r.text)
    })
  }, [user])

  const currentLevel = LEVELS[Math.min((profile?.level||1)-1, LEVELS.length-1)]
  const nextLevel    = LEVELS[Math.min((profile?.level||1), LEVELS.length-1)]
  const xpProgress   = profile ? Math.min(100, ((profile.xp||0) / (nextLevel?.xpRequired||100))*100) : 0
  const badges       = (profile?.badges||[]).map(id => BADGES.find(b=>b.id===id)).filter(Boolean)

  // Upcoming exams from profile subjects
  const examCountdowns = (profile?.subjects||[])
    .filter(s => s.examDate)
    .map(s => ({ ...s, label: countdownLabel(s.examDate), urgency: countdownUrgency(s.examDate) }))
    .filter(s => s.urgency !== 'done')
    .sort((a,b) => new Date(a.examDate) - new Date(b.examDate))
    .slice(0,4)

  return (
    <div className="fade-in">
      {/* Header */}
      <div style={{marginBottom:28}}>
        <h1 style={{marginBottom:4}}>
          Good {new Date().getHours()<12?'morning':new Date().getHours()<17?'afternoon':'evening'},{' '}
          <span className="gradient-text">{profile?.displayName?.split(' ')[0]}!</span>
        </h1>
        <p>{format(new Date(),'EEEE, d MMMM yyyy')}</p>
      </div>

      {/* Stats row */}
      <div className="grid-4" style={{marginBottom:24}}>
        {[
          { label:'Streak', value: <><span className="streak-fire">🔥</span> {profile?.streak||0} days</>, sub:'Keep it going!', color:'var(--warning)' },
          { label:'XP', value:<><Zap size={16} style={{color:'var(--accent-light)'}}/> {(profile?.xp||0).toLocaleString()}</>, sub:`Level ${profile?.level||1}`, color:'var(--accent-light)' },
          { label:'Sessions today', value: todaySessions.length, sub:`${todaySessions.filter(s=>s.completed).length} completed`, color:'var(--success)' },
          { label:'Tasks due', value: tasks.length, sub:'Pending tasks', color:tasks.length>3?'var(--danger)':'var(--info)' },
        ].map(s => (
          <div key={s.label} className="card stat-card">
            <div style={{fontSize:'0.75rem',color:'var(--text-muted)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em'}}>{s.label}</div>
            <div style={{fontSize:'1.5rem',fontWeight:800,color:s.color,display:'flex',alignItems:'center',gap:6}}>{s.value}</div>
            <div style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* XP bar */}
      <div className="card" style={{marginBottom:24,padding:16}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:8,fontSize:'0.85rem'}}>
          <span style={{fontWeight:600}}>Level {profile?.level||1} — {currentLevel?.title}</span>
          <span style={{color:'var(--text-muted)'}}>{profile?.xp||0} / {nextLevel?.xpRequired} XP</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill xp-bar-fill" style={{width:`${xpProgress}%`}}/>
        </div>
      </div>

      <div className="grid-2" style={{marginBottom:24,gap:20}}>
        {/* Today's sessions */}
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <h4 style={{display:'flex',alignItems:'center',gap:8}}><Calendar size={18} color="var(--accent-light)"/> Today's Sessions</h4>
            <Link to="/calendar" className="btn btn-ghost btn-sm">View all</Link>
          </div>
          {todaySessions.length === 0 ? (
            <div className="empty-state" style={{padding:'24px 0'}}>
              <div className="empty-icon">📅</div>
              <p style={{fontSize:'0.875rem'}}>No sessions scheduled today</p>
              <Link to="/calendar" className="btn btn-primary btn-sm">Open calendar</Link>
            </div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {todaySessions.map(s => (
                <div key={s.id} style={{
                  display:'flex',alignItems:'center',gap:10,padding:'10px 12px',
                  borderRadius:'var(--radius-md)',background:'var(--bg-surface)',
                  border:`1px solid ${s.completed?'var(--success)':'var(--border)'}`,
                  opacity:s.completed?0.7:1
                }}>
                  <div style={{width:3,height:36,borderRadius:2,background:SUBJECT_COLOURS[s.subject]||'var(--accent)',flexShrink:0}}/>
                  <div style={{flex:1,overflow:'hidden'}}>
                    <div style={{fontWeight:600,fontSize:'0.85rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{s.title||s.subject}</div>
                    <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>{s.start} · {s.type} · {s.duration||45}min</div>
                  </div>
                  {s.completed && <span style={{fontSize:'0.75rem',color:'var(--success)',fontWeight:600}}>✓ Done</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* AI daily advice */}
        <div className="card accent-card">
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
            <MessageSquare size={18} color="var(--accent-light)"/>
            <h4>AI Daily Briefing</h4>
          </div>
          {aiAdvice ? (
            <p style={{fontSize:'0.875rem',lineHeight:1.7,whiteSpace:'pre-wrap'}}>{aiAdvice}</p>
          ) : (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:80}}>
              <div className="spinner"/>
            </div>
          )}
          <Link to="/ai" className="btn btn-secondary btn-sm" style={{marginTop:14}}>
            Open AI Advisor <ArrowRight size={14}/>
          </Link>
        </div>
      </div>

      <div className="grid-2" style={{marginBottom:24,gap:20}}>
        {/* Upcoming exams */}
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <h4 style={{display:'flex',alignItems:'center',gap:8}}><Clock size={18} color="var(--accent-light)"/> Upcoming Exams</h4>
            <Link to="/exams" className="btn btn-ghost btn-sm">All exams</Link>
          </div>
          {examCountdowns.length === 0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}>
              <p style={{fontSize:'0.875rem'}}>Add exam dates in Exam Dates</p>
              <Link to="/exams" className="btn btn-primary btn-sm">Add exams</Link>
            </div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {examCountdowns.map(e => (
                <div key={e.name+e.examDate} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                  <div>
                    <div style={{fontWeight:600,fontSize:'0.875rem'}}>{e.name}</div>
                    <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>{e.board} · {new Date(e.examDate).toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</div>
                  </div>
                  <span className={`badge badge-${e.urgency==='urgent'?'red':e.urgency==='soon'?'amber':'purple'}`}>
                    {e.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tasks */}
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <h4 style={{display:'flex',alignItems:'center',gap:8}}><CheckSquare size={18} color="var(--accent-light)"/> Tasks</h4>
            <Link to="/tasks" className="btn btn-ghost btn-sm">All tasks</Link>
          </div>
          {tasks.length === 0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}>
              <p style={{fontSize:'0.875rem'}}>No pending tasks</p>
              <Link to="/tasks" className="btn btn-primary btn-sm">Add a task</Link>
            </div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {tasks.map(t => (
                <div key={t.id} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                  <div style={{width:6,height:6,borderRadius:'50%',background:t.priority==='high'?'var(--danger)':t.priority==='medium'?'var(--warning)':'var(--success)',flexShrink:0}}/>
                  <div style={{flex:1,overflow:'hidden'}}>
                    <div style={{fontWeight:500,fontSize:'0.85rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{t.title}</div>
                    {t.dueDate && <div style={{fontSize:'0.72rem',color:'var(--text-muted)'}}>Due {new Date(t.dueDate).toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recent papers & badges */}
      <div className="grid-2" style={{gap:20}}>
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <h4 style={{display:'flex',alignItems:'center',gap:8}}><TrendingUp size={18} color="var(--accent-light)"/> Recent Papers</h4>
            <Link to="/papers" className="btn btn-ghost btn-sm">All papers</Link>
          </div>
          {recentPapers.length === 0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}>
              <p style={{fontSize:'0.875rem'}}>No papers logged yet</p>
              <Link to="/papers" className="btn btn-primary btn-sm">Log a paper</Link>
            </div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {recentPapers.map(p => (
                <div key={p.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                  <div>
                    <div style={{fontWeight:600,fontSize:'0.85rem'}}>{p.subject} P{p.paper}</div>
                    <div style={{fontSize:'0.72rem',color:'var(--text-muted)'}}>{p.board} {p.year} · {p.score}/{p.maxMarks}</div>
                  </div>
                  {p.grade && <span style={{fontWeight:800,color:gradeColour(p.grade),fontSize:'1.1rem'}}>{p.grade}</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <h4 style={{display:'flex',alignItems:'center',gap:8}}><Trophy size={18} color="var(--warning)"/> Badges</h4>
            <span style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>{badges.length}/{BADGES.length}</span>
          </div>
          {badges.length === 0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}>
              <div className="empty-icon">🏅</div>
              <p style={{fontSize:'0.875rem'}}>Complete your first session to earn a badge!</p>
            </div>
          ) : (
            <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              {badges.map(b => (
                <div key={b.id} title={`${b.name}: ${b.desc}`} style={{
                  width:44,height:44,borderRadius:10,
                  background:'rgba(124,58,237,0.15)',border:'1px solid var(--border)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:'1.4rem',cursor:'default',transition:'transform 0.2s'
                }}
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.1)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                  {b.icon}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
