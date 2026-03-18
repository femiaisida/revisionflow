// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react'
import Skeleton from '../components/Skeleton'
import AIOutput from '../components/AIOutput'
import TooltipTour from '../components/TooltipTour'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getSessions, getTasks, getPaperAttempts } from '../utils/firestore'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { getDailyAdvice } from '../utils/ai'
import { countdownLabel, countdownUrgency, gradeColour } from '../utils/calendar'
import { LEVELS, BADGES, SUBJECT_COLOURS } from '../data/subjects'
import { format } from 'date-fns'
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'
import {
  Flame, Zap, Calendar, FileText, Brain,
  CheckSquare, MessageSquare, ArrowRight, Clock, TrendingUp, Trophy,
  CheckCircle2, AlertCircle, ChevronRight
} from 'lucide-react'

export default function Dashboard() {
  const { profile, user } = useAuth()
  const [gdprConsent, setGdprConsent] = useState(localStorage.getItem('gdpr_consent') === 'true')
  const [todaySessions, setTodaySessions] = useState([])
  const [tasks,         setTasks]         = useState([])
  const [recentPapers,  setRecentPapers]  = useState([])
  const [aiAdvice,      setAiAdvice]      = useState('')
  const [aiLoading,     setAiLoading]     = useState(false)
  const [dataLoading,   setDataLoading]   = useState(true)

  useEffect(() => {
    if (!user) return
    setDataLoading(true)
    Promise.all([
      getSessions(user.uid, { limit:50 }),
      getTasks(user.uid),
      getPaperAttempts(user.uid, null),
    ]).then(([sessions, taskList, papers]) => {
      const todayStr = new Date().toISOString().split('T')[0]
      setTodaySessions(sessions.filter(s => {
        if (s.date && typeof s.date === 'string' && s.date.substring(0,10) === todayStr) return true
        if (s.start && typeof s.start === 'string' && s.start.substring(0,10) === todayStr) return true
        if (s.startTime) { try { return new Date(s.startTime).toISOString().split('T')[0] === todayStr } catch(e) {} }
        return false
      }))
      setTasks(taskList.filter(t=>!t.completed).slice(0,5))
      // Sort by date descending, load more for sparkline to work
      const sorted = papers.sort((a,b) => {
        const da = a.attemptDate ? new Date(a.attemptDate) : new Date(a.createdAt?.seconds*1000||0)
        const db2 = b.attemptDate ? new Date(b.attemptDate) : new Date(b.createdAt?.seconds*1000||0)
        return db2 - da
      })
      setRecentPapers(sorted.slice(0,20))
      setDataLoading(false)
    })
    loadDailyBriefing()
  }, [user])

  async function loadDailyBriefing() {
    if (!user) return
    const todayStr = format(new Date(), 'yyyy-MM-dd')
    const ref = doc(db,'users',user.uid,'dailyBriefing','latest')

    try {
      const snap = await getDoc(ref)
      if (snap.exists() && snap.data().date === todayStr) {
        setAiAdvice(snap.data().text)
        return
      }
    } catch(e) {}

    // Generate new briefing
    setAiLoading(true)
    const res = await getDailyAdvice(user.uid, todaySessions, profile?.streak||0, [])
    if (res.text) {
      setAiAdvice(res.text)
      try {
        await setDoc(ref, { date: todayStr, text: res.text, createdAt: serverTimestamp() })
      } catch(e) {}
    }
    setAiLoading(false)
  }

  const currentLevel = LEVELS[Math.min((profile?.level||1)-1, LEVELS.length-1)]
  const nextLevel    = LEVELS[Math.min((profile?.level||1),   LEVELS.length-1)]
  const xpProgress   = profile ? Math.min(100,((profile.xp||0)/(nextLevel?.xpRequired||100))*100) : 0
  const badges       = (profile?.badges||[]).map(id=>BADGES.find(b=>b.id===id)).filter(Boolean)

  const examCountdowns = (profile?.examDates||[])
    .filter(e=>e.examDate)
    .map(e=>({...e, label:countdownLabel(e.examDate), urgency:countdownUrgency(e.examDate)}))
    .filter(e=>e.urgency!=='done')
    .sort((a,b)=>new Date(a.examDate)-new Date(b.examDate))
    .slice(0,4)

  // Setup checklist for new users
  const [showTour, setShowTour] = useState(!localStorage.getItem('tour_complete'))
  const [setupSkipped, setSetupSkipped] = useState(
    () => localStorage.getItem('setup-skipped') === '1'
  )
  function skipSetup() {
    localStorage.setItem('setup-skipped', '1')
    setSetupSkipped(true)
  }

  const setupSteps = [
    { id:'subjects', label:'Add your subjects',         done: (profile?.subjects||[]).length > 0,  link:'/settings' },
    { id:'exams',    label:'Add exam dates',             done: (profile?.examDates||[]).length > 0, link:'/exams' },
    { id:'calendar', label:'Generate a revision schedule', done: (todaySessions||[]).length > 0 || (profile?.sessions||[]).length > 0, link:'/calendar' },
  ]
  const setupDone   = setupSteps.every(s => s.done)
  const setupProgress = setupSteps.filter(s => s.done).length

  const hour = new Date().getHours()
  const greeting = hour<12?'morning':hour<17?'afternoon':'evening'

  return (
    <>
      {showTour && <TooltipTour onComplete={() => setShowTour(false)} />}
      {!gdprConsent && (
        <div style={{position:'fixed',bottom:0,left:0,right:0,zIndex:9999,background:'var(--surface)',borderTop:'2px solid var(--accent)',padding:'1rem 1.5rem',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'0.75rem',boxShadow:'0 -4px 20px rgba(0,0,0,0.3)'}}>
          <p style={{margin:0,color:'var(--text-secondary)',fontSize:'0.9rem',maxWidth:600}}>
            🍪 RevisionFlow stores your revision data to power your study features. By continuing, you agree to our{' '}
            <a href="/privacy" style={{color:'var(--accent)'}}>Privacy Policy</a>.
          </p>
          <button onClick={()=>{localStorage.setItem('gdpr_consent','true');setGdprConsent(true)}} style={{background:'var(--accent)',color:'white',border:'none',borderRadius:8,padding:'0.5rem 1.25rem',cursor:'pointer',fontWeight:700,whiteSpace:'nowrap'}}>
            I Agree
          </button>
        </div>
      )}
      <div className="fade-in">
      {/* Setup banner — shown until all steps complete */}
      {!setupDone && !setupSkipped && (
        <div style={{marginBottom:20,padding:16,background:'linear-gradient(135deg,rgba(124,58,237,0.1),rgba(59,130,246,0.1))',border:'1px solid var(--accent)',borderRadius:'var(--radius-lg)'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12,flexWrap:'wrap',gap:8}}>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <AlertCircle size={18} color="var(--accent-light)"/>
              <span style={{fontWeight:700,fontSize:'0.95rem'}}>Get started — {setupProgress}/{setupSteps.length} steps complete</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{height:6,width:100,background:'var(--bg-hover)',borderRadius:3,overflow:'hidden'}}>
                <div style={{height:'100%',width:`${(setupProgress/setupSteps.length)*100}%`,background:'var(--accent)',borderRadius:3,transition:'width 0.4s'}}/>
              </div>
              <button onClick={skipSetup} style={{background:'none',border:'none',fontSize:'0.75rem',color:'var(--text-muted)',cursor:'pointer',padding:'2px 6px',borderRadius:4}}>
                Skip
              </button>
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:7}}>
            {setupSteps.map(step=>(
              <Link key={step.id} to={step.link} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 12px',borderRadius:'var(--radius-md)',background:step.done?'rgba(16,185,129,0.08)':'var(--bg-surface)',border:`1px solid ${step.done?'rgba(16,185,129,0.3)':'var(--border)'}`,textDecoration:'none',color:'inherit'}}>
                <CheckCircle2 size={16} color={step.done?'var(--success)':'var(--text-muted)'} style={{flexShrink:0}}/>
                <span style={{flex:1,fontSize:'0.875rem',fontWeight:step.done?400:600,color:step.done?'var(--text-muted)':'var(--text-primary)',textDecoration:step.done?'line-through':'none'}}>
                  {step.label}
                </span>
                {!step.done && <ChevronRight size={14} color="var(--text-muted)"/>}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div style={{marginBottom:24}}>
        <h1 style={{marginBottom:4}}>
          Good {greeting},{' '}
          <span className="gradient-text">{profile?.displayName?.split(' ')[0]}!</span>
        </h1>
        <p>{format(new Date(),'EEEE, d MMMM yyyy')}</p>
      </div>

      {/* Stats row */}
      <div className="grid-4" style={{marginBottom:20}}>
        {[
          {label:'Streak',       val:<><span className="streak-fire">🔥</span>{profile?.streak||0} days</>,  sub:'Keep it going!',                            col:'var(--warning)'},
          {label:'XP',           val:<><Zap size={15} style={{color:'var(--accent-light)'}}/>{(profile?.xp||0).toLocaleString()}</>, sub:`Level ${profile?.level||1}`, col:'var(--accent-light)'},
          {label:'Today',        val:todaySessions.length,  sub:`${todaySessions.filter(s=>s.completed).length} done`, col:'var(--success)'},
          {label:'Tasks due',    val:tasks.length,          sub:'Pending',                                    col:tasks.length>3?'var(--danger)':'var(--info)'},
        ].map(s=>(
          <div key={s.label} className="card stat-card">
            <div style={{fontSize:'0.72rem',color:'var(--text-muted)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em'}}>{s.label}</div>
            <div style={{fontSize:'1.4rem',fontWeight:800,color:s.col,display:'flex',alignItems:'center',gap:5}}>
              {dataLoading ? <Skeleton width={60} height={24} /> : s.val}
            </div>
            <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>
              {dataLoading ? <Skeleton width={80} height={12} style={{marginTop:4}} /> : s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* XP bar */}
      <div className="card" style={{marginBottom:20,padding:14}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:6,fontSize:'0.82rem'}}>
          <span style={{fontWeight:600}}>Level {profile?.level||1} — {currentLevel?.title}</span>
          <span style={{color:'var(--text-muted)'}}>{profile?.xp||0} / {nextLevel?.xpRequired} XP</span>
        </div>
        <div className="progress-bar"><div className="progress-fill xp-bar-fill" style={{width:`${xpProgress}%`}}/></div>
      </div>

      <div className="grid-2" style={{marginBottom:20,gap:16}}>
        {/* Today's sessions */}
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <h4 style={{display:'flex',alignItems:'center',gap:7}}><Calendar size={17} color="var(--accent-light)"/> Today</h4>
            <Link to="/calendar" className="btn btn-ghost btn-sm">View all</Link>
          </div>
          {dataLoading ? (
            <div style={{display:'flex',flexDirection:'column',gap:7}}>
              {[1,2,3].map(i => <Skeleton key={i} height={48} />)}
            </div>
          ) : todaySessions.length===0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}>
              <Calendar size={28} style={{opacity:0.3}}/>
              <p style={{fontSize:'0.875rem'}}>No sessions today</p>
              <Link to="/calendar" className="btn btn-primary btn-sm">Open calendar</Link>
            </div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:7}}>
              {todaySessions.map(s=>(
                <div key={s.id} style={{display:'flex',alignItems:'center',gap:8,padding:'8px 10px',borderRadius:'var(--radius-md)',background:'var(--bg-surface)',border:`1px solid ${s.completed?'var(--success)':'var(--border)'}`,opacity:s.completed?0.7:1}}>
                  <div style={{width:3,height:32,borderRadius:2,background:SUBJECT_COLOURS[s.subject]||'var(--accent)',flexShrink:0}}/>
                  <div style={{flex:1,overflow:'hidden'}}>
                    <div style={{fontWeight:600,fontSize:'0.82rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{s.title||s.subject}</div>
                    <div style={{fontSize:'0.7rem',color:'var(--text-muted)'}}>{s.start} · {s.duration||45}min</div>
                  </div>
                  {s.completed&&<span style={{fontSize:'0.7rem',color:'var(--success)',fontWeight:600}}>✓</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* AI briefing — cached per day */}
        <div className="card accent-card">
          <div style={{display:'flex',alignItems:'center',gap:7,marginBottom:10}}>
            <MessageSquare size={17} color="var(--accent-light)"/>
            <h4>AI Daily Briefing</h4>
            <span style={{fontSize:'0.68rem',color:'var(--text-muted)',marginLeft:'auto'}}>Updates daily</span>
          </div>
          {aiLoading ? (
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <Skeleton height={14} width="90%" />
              <Skeleton height={14} width="100%" />
              <Skeleton height={14} width="80%" />
            </div>
          ) : aiAdvice ? (
            <AIOutput text={aiAdvice} label="AI Briefing" />
          ) : (
            <p style={{fontSize:'0.85rem',color:'var(--text-muted)'}}>Loading your daily briefing…</p>
          )}
          <Link to="/ai" className="btn btn-secondary btn-sm" style={{marginTop:12}}>
            Open AI Advisor <ArrowRight size={13}/>
          </Link>
        </div>
      </div>

      <div className="grid-2" style={{marginBottom:20,gap:16}}>
        {/* Exam countdowns */}
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <h4 style={{display:'flex',alignItems:'center',gap:7}}><Clock size={17} color="var(--accent-light)"/> Upcoming Exams</h4>
            <Link to="/exams" className="btn btn-ghost btn-sm">All</Link>
          </div>
          {examCountdowns.length===0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}>
              <p style={{fontSize:'0.875rem'}}>No upcoming exams</p>
              <Link to="/exams" className="btn btn-primary btn-sm">Add exams</Link>
            </div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:7}}>
              {examCountdowns.map(e=>(
                <div key={e.id||e.subject+e.paper} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'7px 10px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                  <div>
                    <div style={{fontWeight:600,fontSize:'0.85rem'}}>{e.subject} P{e.paper}</div>
                    <div style={{fontSize:'0.7rem',color:'var(--text-muted)'}}>{e.board} · {new Date(e.examDate).toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</div>
                  </div>
                  <span className={`badge badge-${e.urgency==='urgent'?'red':e.urgency==='soon'?'amber':'purple'}`}>{e.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tasks */}
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <h4 style={{display:'flex',alignItems:'center',gap:7}}><CheckSquare size={17} color="var(--accent-light)"/> Tasks</h4>
            <Link to="/tasks" className="btn btn-ghost btn-sm">All</Link>
          </div>
          {dataLoading ? (
            <div style={{display:'flex',flexDirection:'column',gap:6}}>
              {[1,2,3].map(i => <Skeleton key={i} height={42} />)}
            </div>
          ) : tasks.length===0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}>
              <p style={{fontSize:'0.875rem'}}>No pending tasks</p>
              <Link to="/tasks" className="btn btn-primary btn-sm">Add task</Link>
            </div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:6}}>
              {tasks.map(t=>(
                <div key={t.id} style={{display:'flex',alignItems:'center',gap:8,padding:'7px 10px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                  <div style={{width:6,height:6,borderRadius:'50%',background:t.priority==='high'?'var(--danger)':t.priority==='medium'?'var(--warning)':'var(--success)',flexShrink:0}}/>
                  <div style={{flex:1,overflow:'hidden'}}>
                    <div style={{fontWeight:500,fontSize:'0.82rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{t.title}</div>
                    {t.dueDate&&<div style={{fontSize:'0.7rem',color:'var(--text-muted)'}}>Due {new Date(t.dueDate).toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid-2" style={{gap:16}}>
        {/* Recent papers */}
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <h4 style={{display:'flex',alignItems:'center',gap:7}}><TrendingUp size={17} color="var(--accent-light)"/> Recent Papers</h4>
            <Link to="/papers" className="btn btn-ghost btn-sm">All</Link>
          </div>
          {dataLoading ? (
            <div style={{display:'flex',flexDirection:'column',gap:6}}>
              <Skeleton height={80} style={{marginBottom:6}} />
              {[1,2,3].map(i => <Skeleton key={i} height={46} />)}
            </div>
          ) : recentPapers.length===0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}>
              <p style={{fontSize:'0.875rem'}}>No papers logged yet</p>
              <Link to="/papers" className="btn btn-primary btn-sm">Log a paper</Link>
            </div>
          ) : (() => {
            // Build sparkline for most-attempted subject
            const subjectCounts = {}
            recentPapers.forEach(p => { subjectCounts[p.subject] = (subjectCounts[p.subject]||0)+1 })
            const topSubj = Object.entries(subjectCounts).sort((a,b)=>b[1]-a[1])[0]?.[0]
            const sparkData = recentPapers
              .filter(p=>p.subject===topSubj && p.percentage)
              .sort((a,b)=>new Date(a.attemptDate||0)-new Date(b.attemptDate||0))
              .slice(-8)
              .map((p,i)=>({i, pct:p.percentage, label:`P${p.paper} ${p.year}`}))
            const latest = recentPapers[0]
            const trend = sparkData.length>=2
              ? sparkData[sparkData.length-1].pct - sparkData[0].pct
              : null
            return (
              <>
                {sparkData.length>=2 && (
                  <div style={{marginBottom:12,padding:'10px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:6}}>
                      <div>
                        <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>Grade trend — {topSubj}</div>
                        <div style={{fontWeight:800,fontSize:'1.3rem',color:gradeColour(recentPapers.find(p=>p.subject===topSubj)?.grade||'')}}>{sparkData[sparkData.length-1]?.pct}%</div>
                      </div>
                      {trend!==null && (
                        <div style={{padding:'3px 8px',borderRadius:999,background:trend>=0?'rgba(16,185,129,0.12)':'rgba(239,68,68,0.12)',color:trend>=0?'var(--success)':'var(--danger)',fontWeight:700,fontSize:'0.78rem'}}>
                          {trend>=0?'+':''}{trend}% trend
                        </div>
                      )}
                    </div>
                    <ResponsiveContainer width="100%" height={50}>
                      <LineChart data={sparkData}>
                        <Line type="monotone" dataKey="pct" stroke="var(--accent)" strokeWidth={2} dot={false}/>
                        <Tooltip formatter={(v)=>[`${v}%`]} contentStyle={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:6,fontSize:'0.72rem'}} labelFormatter={(l)=>sparkData[l]?.label||''}/>
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}
                <div style={{display:'flex',flexDirection:'column',gap:6}}>
                  {recentPapers.slice(0,4).map(p=>(
                    <div key={p.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'7px 10px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                      <div>
                        <div style={{fontWeight:600,fontSize:'0.82rem'}}>{p.subject} P{p.paper}</div>
                        <div style={{fontSize:'0.7rem',color:'var(--text-muted)'}}>{p.board} {p.year} · {p.score}/{p.maxMarks}</div>
                      </div>
                      {p.grade&&<span style={{fontWeight:800,color:gradeColour(p.grade),fontSize:'1.05rem'}}>{p.grade}</span>}
                    </div>
                  ))}
                </div>
              </>
            )
          })()}
        </div>

        {/* Badges */}
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <h4 style={{display:'flex',alignItems:'center',gap:7}}><Trophy size={17} color="var(--warning)"/> Badges</h4>
            <span style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>{badges.length}/{BADGES.length}</span>
          </div>
          {badges.length===0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}>
              <div style={{fontSize:'2.5rem'}}>🏅</div>
              <p style={{fontSize:'0.875rem'}}>Complete your first session to earn badges!</p>
            </div>
          ) : (
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {badges.map(b=>(
                <div key={b.id} title={`${b.name}: ${b.desc}`}
                  style={{width:40,height:40,borderRadius:9,background:'rgba(124,58,237,0.15)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.3rem',cursor:'default',transition:'transform 0.15s'}}
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
    </>
  )
}