// src/pages/Analytics.jsx
import React, { useState, useEffect, useMemo } from 'react'
import Skeleton from '../components/Skeleton'
import { useAuth } from '../context/AuthContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { getPaperAttempts } from '../utils/firestore'
import { format, subDays, eachDayOfInterval, isToday } from 'date-fns'
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from 'recharts'
import { SUBJECT_COLOURS } from '../data/subjects'
import { gradeColour } from '../utils/calendar'
import { Activity, Clock, Flame, TrendingUp, Award, Target, BookOpen, Zap } from 'lucide-react'

const COLOURS = ['#7c3aed','#3b82f6','#10b981','#f59e0b','#ef4444','#ec4899','#06b6d4','#84cc16','#f97316','#a855f7']

export default function Analytics() {
  const { user, profile } = useAuth()
  const [sessions,  setSessions]  = useState([])
  const [attempts,  setAttempts]  = useState([])
  const [loading,   setLoading]   = useState(true)
  const [dateRange, setDateRange] = useState(30) // days

  useEffect(() => {
    if (!user) return
    Promise.all([
      getDocs(collection(db,'users',user.uid,'sessions')).then(s=>s.docs.map(d=>({id:d.id,...d.data()}))),
      getPaperAttempts(user.uid, null),
    ]).then(([sess, atts]) => {
      setSessions(sess)
      setAttempts(atts)
      setLoading(false)
    })
  }, [user])

  // ── Derived metrics ─────────────────────────────────────────────────────────
  const completedSessions = sessions.filter(s => s.completed)

  const totalMinutes = useMemo(() =>
    completedSessions.reduce((sum, s) => sum + (parseInt(s.duration) || 45), 0)
  , [completedSessions])

  const avgMinutesPerSession = completedSessions.length
    ? Math.round(totalMinutes / completedSessions.length)
    : 0

  // Sessions in selected date range
  const rangeStart = subDays(new Date(), dateRange)
  const recentSessions = completedSessions.filter(s => {
    const d = s.startTime ? new Date(s.startTime) : s.date ? new Date(s.date) : null
    return d && d >= rangeStart
  })

  const recentMinutes = recentSessions.reduce((sum,s) => sum + (parseInt(s.duration)||45), 0)
  const avgDailyMinutes = Math.round(recentMinutes / dateRange)

  // ── Completion rate ──────────────────────────────────────────────────────────
  const completionRate = sessions.length
    ? Math.round((completedSessions.length / sessions.length) * 100)
    : 0

  // ── Daily hours chart ────────────────────────────────────────────────────────
  const dailyData = useMemo(() => {
    const days = eachDayOfInterval({ start: rangeStart, end: new Date() })
    return days.map(day => {
      const dayStr = format(day, 'yyyy-MM-dd')
      const daySessions = recentSessions.filter(s =>
        (s.date === dayStr) ||
        (s.startTime && format(new Date(s.startTime),'yyyy-MM-dd') === dayStr)
      )
      const bySubject = {}
      let total = 0
      daySessions.forEach(s => {
        const mins = (parseInt(s.duration)||45) / 60
        bySubject[s.subject] = (bySubject[s.subject]||0) + mins
        total += mins
      })
      return { date: format(day, 'd MMM'), total: Math.round(total*10)/10, ...bySubject }
    })
  }, [recentSessions, dateRange])

  // ── Subject distribution ─────────────────────────────────────────────────────
  const subjectDist = useMemo(() => {
    const counts = {}
    completedSessions.forEach(s => {
      if (!s.subject) return
      counts[s.subject] = (counts[s.subject]||0) + (parseInt(s.duration)||45)
    })
    return Object.entries(counts)
      .map(([name, minutes]) => ({ name, minutes, hours: Math.round(minutes/60*10)/10 }))
      .sort((a,b) => b.minutes - a.minutes)
      .slice(0, 10)
  }, [completedSessions])

  // ── Consistency heatmap (last 12 weeks) ─────────────────────────────────────
  const heatmapData = useMemo(() => {
    const start = subDays(new Date(), 83) // 12 weeks
    const days  = eachDayOfInterval({ start, end: new Date() })
    return days.map(day => {
      const dayStr = format(day, 'yyyy-MM-dd')
      const count  = completedSessions.filter(s =>
        s.date === dayStr ||
        (s.startTime && format(new Date(s.startTime),'yyyy-MM-dd') === dayStr)
      ).length
      return { date: day, dayStr, count, label: format(day,'EEE d MMM') }
    })
  }, [completedSessions])

  // ── Grade trajectory ─────────────────────────────────────────────────────────
  const subjects = profile?.subjects?.map(s=>s.name) || []
  const [gradeSub, setGradeSub] = useState('')
  useEffect(() => { if (subjects.length && !gradeSub) setGradeSub(subjects[0]) }, [subjects])

  const gradeTrajectory = useMemo(() => {
    if (!gradeSub) return []
    return attempts
      .filter(a => a.subject === gradeSub && a.percentage)
      .sort((a,b) => new Date(a.attemptDate||a.createdAt?.seconds*1000||0) - new Date(b.attemptDate||b.createdAt?.seconds*1000||0))
      .map((a,i) => ({
        attempt: i+1,
        label:   `P${a.paper} ${a.year}`,
        percentage: a.percentage,
        grade:   a.grade || '',
      }))
  }, [attempts, gradeSub])

  // ── Personal records ─────────────────────────────────────────────────────────
  const records = useMemo(() => {
    const longestSession = completedSessions.reduce((max,s) => Math.max(max, parseInt(s.duration)||45), 0)
    const sessionsPerDay = {}
    completedSessions.forEach(s => {
      const d = s.date || (s.startTime ? format(new Date(s.startTime),'yyyy-MM-dd') : null)
      if (d) sessionsPerDay[d] = (sessionsPerDay[d]||0) + 1
    })
    const mostProductiveDay = Object.entries(sessionsPerDay).sort((a,b)=>b[1]-a[1])[0]
    const paperGrades = attempts.filter(a=>a.grade).map(a=>parseInt(a.grade)).filter(g=>!isNaN(g))
    const bestGrade   = paperGrades.length ? Math.max(...paperGrades) : null

    return {
      totalSessions:    completedSessions.length,
      longestSession,
      bestStreak:       profile?.streak || 0,
      mostProductiveDay: mostProductiveDay ? `${mostProductiveDay[0]} (${mostProductiveDay[1]} sessions)` : 'None yet',
      bestGrade:        bestGrade ? `Grade ${bestGrade}` : 'None yet',
      totalPapers:      attempts.length,
    }
  }, [completedSessions, attempts, profile])

  const heatColour = (count) => {
    if (count === 0) return 'var(--bg-hover)'
    if (count === 1) return 'rgba(124,58,237,0.3)'
    if (count === 2) return 'rgba(124,58,237,0.55)'
    if (count === 3) return 'rgba(124,58,237,0.75)'
    return 'rgba(124,58,237,0.95)'
  }

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <div>
          <h2 style={{display:'flex',alignItems:'center',gap:10}}><Activity size={22}/> Study Insights</h2>
          <p>Your revision analytics and progress overview</p>
        </div>
        <select className="select" style={{width:'auto'}} value={dateRange} onChange={e=>setDateRange(parseInt(e.target.value))}>
          {[7,14,30,60,90].map(d=><option key={d} value={d}>Last {d} days</option>)}
        </select>
      </div>

      {/* ── Summary stats ── */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10,marginBottom:20}}>
        {[
          { icon:<Clock size={18}/>,   label:'Total study time',     val: totalMinutes >= 60 ? `${Math.floor(totalMinutes/60)}h ${totalMinutes%60}m` : `${totalMinutes}m`, c:'var(--accent-light)' },
          { icon:<Activity size={18}/>, label:'Avg per session',     val: `${avgMinutesPerSession}m`,   c:'var(--info)' },
          { icon:<Zap size={18}/>,     label:'Avg daily (period)',   val: `${avgDailyMinutes}m`,         c:'var(--purple-300)' },
          { icon:<Flame size={18}/>,   label:'Current streak',       val: `${profile?.streak||0} days`, c:'var(--warning)' },
          { icon:<Target size={18}/>,  label:'Completion rate',      val: `${completionRate}%`,          c:'var(--success)' },
          { icon:<BookOpen size={18}/>,label:'Papers logged',        val: attempts.length,               c:'var(--accent)' },
        ].map(s=>(
          <div key={s.label} className="card" style={{textAlign:'center',padding:'14px 10px'}}>
            <div style={{color:s.c,marginBottom:4}}>{s.icon}</div>
            <div style={{fontWeight:800,fontSize:'1.4rem',color:s.c}}>
              {loading ? <Skeleton height={28} width={60} style={{margin:'0 auto'}} /> : s.val}
            </div>
            <div style={{fontSize:'0.7rem',color:'var(--text-muted)',marginTop:2}}>
              {loading ? <Skeleton height={12} width={80} style={{margin:'4px auto 0'}} /> : s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Daily study hours ── */}
      <div className="card" style={{marginBottom:16}}>
        <h4 style={{marginBottom:14}}>Daily Study Hours</h4>
        {loading ? (
          <Skeleton height={200} />
        ) : dailyData.every(d=>d.total===0) ? (
          <div className="empty-state" style={{padding:'20px 0'}}><p>No completed sessions in this period</p></div>
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dailyData.filter((_,i,arr)=>arr.length<=30||i%2===0)} margin={{top:5,right:5,bottom:5,left:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)"/>
              <XAxis dataKey="date" tick={{fontSize:10,fill:'var(--text-muted)'}} interval={Math.floor(dailyData.length/7)}/>
              <YAxis tick={{fontSize:10,fill:'var(--text-muted)'}} unit="h"/>
              <Tooltip formatter={(v)=>[`${v}h`,'Hours']} contentStyle={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)'}}/>
              <Bar dataKey="total" fill="var(--accent)" radius={[3,3,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="grid-2" style={{gap:16,marginBottom:16}}>
        <div className="card">
          <h4 style={{marginBottom:14}}>Subject Distribution</h4>
          {loading ? (
            <Skeleton height={200} />
          ) : subjectDist.length === 0 ? (
            <div className="empty-state" style={{padding:'20px 0'}}><p>No sessions yet</p></div>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={subjectDist} dataKey="hours" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({name,percent})=>`${name.length>10?name.slice(0,10)+'…':name} ${Math.round(percent*100)}%`} labelLine={false} fontSize={10}>
                    {subjectDist.map((_,i)=>(
                      <Cell key={i} fill={SUBJECT_COLOURS[subjectDist[i].name]||COLOURS[i%COLOURS.length]}/>
                    ))}
                  </Pie>
                  <Tooltip formatter={(v)=>[`${v}h`,'Hours']} contentStyle={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)'}}/>
                </PieChart>
              </ResponsiveContainer>
              <div style={{display:'flex',flexDirection:'column',gap:4,marginTop:8}}>
                {subjectDist.slice(0,5).map((s,i)=>(
                  <div key={s.name} style={{display:'flex',alignItems:'center',gap:8,fontSize:'0.78rem'}}>
                    <div style={{width:8,height:8,borderRadius:'50%',background:SUBJECT_COLOURS[s.name]||COLOURS[i%COLOURS.length],flexShrink:0}}/>
                    <span style={{flex:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{s.name}</span>
                    <span style={{fontWeight:600,color:'var(--text-muted)'}}>{s.hours}h</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14,flexWrap:'wrap',gap:8}}>
            <h4>Grade Trajectory</h4>
            {!loading && (
              <select className="select" style={{fontSize:'0.78rem',padding:'3px 6px'}} value={gradeSub} onChange={e=>setGradeSub(e.target.value)}>
                {subjects.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            )}
          </div>
          {loading ? (
            <Skeleton height={200} />
          ) : gradeTrajectory.length < 2 ? (
            <div className="empty-state" style={{padding:'20px 0'}}><p>Log at least 2 papers for {gradeSub} to see trajectory</p></div>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={gradeTrajectory} margin={{top:5,right:10,bottom:5,left:0}}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)"/>
                <XAxis dataKey="label" tick={{fontSize:10,fill:'var(--text-muted)'}}/>
                <YAxis domain={[0,100]} tick={{fontSize:10,fill:'var(--text-muted)'}} unit="%"/>
                <Tooltip formatter={(v)=>[`${v}%`,'Score']} contentStyle={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)'}}/>
                <Line type="monotone" dataKey="percentage" stroke="var(--accent)" strokeWidth={2} dot={{r:4,fill:'var(--accent)'}} activeDot={{r:6}}/>
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* ── Consistency heatmap ── */}
      <div className="card" style={{marginBottom:16}}>
        <h4 style={{marginBottom:14}}>Revision Consistency — Last 12 Weeks</h4>
        {loading ? (
          <Skeleton height={80} />
        ) : (
        <div style={{overflowX:'auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(84,1fr)',gap:2,minWidth:500}}>
            {heatmapData.map((d,i)=>(
              <div key={i} title={`${d.label}: ${d.count} session${d.count!==1?'s':''}`}
                style={{
                  width:'100%',paddingBottom:'100%',borderRadius:2,
                  background:heatColour(d.count),
                  cursor:'default',
                  outline:isToday(d.date)?'2px solid var(--accent)':'none',
                }}/>
            ))}
          </div>
          <div style={{display:'flex',gap:6,marginTop:8,alignItems:'center',fontSize:'0.72rem',color:'var(--text-muted)'}}>
            <span>Less</span>
            {[0,1,2,3,4].map(c=>(
              <div key={c} style={{width:10,height:10,borderRadius:2,background:heatColour(c)}}/>
            ))}
            <span>More</span>
          </div>
        </div>
        )}
      </div>

      {/* ── Personal records ── */}
      <div className="card">
        <h4 style={{marginBottom:14}}><Award size={16} style={{display:'inline',marginRight:6}}/>Personal Records</h4>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[
            { label:'Total sessions completed',  val:records.totalSessions },
            { label:'Longest session',           val:`${records.longestSession} min` },
            { label:'Best streak ever',          val:`${records.bestStreak} days` },
            { label:'Most productive day',       val:records.mostProductiveDay },
            { label:'Best paper grade',          val:records.bestGrade },
            { label:'Total papers logged',       val:records.totalPapers },
          ].map(r=>(
            <div key={r.label} style={{padding:'10px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
              <div style={{fontSize:'0.68rem',color:'var(--text-muted)',marginBottom:3}}>{r.label}</div>
              <div style={{fontWeight:700,fontSize:'0.95rem'}}>
                {loading ? <Skeleton height={20} width={60} /> : r.val}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Session notes log ── */}
      {(() => {
        const withNotes = completedSessions
          .filter(s => s.notes && s.notes.trim().length > 0)
          .sort((a,b) => {
            const da = a.startTime ? new Date(a.startTime) : new Date(a.date||0)
            const db2 = b.startTime ? new Date(b.startTime) : new Date(b.date||0)
            return db2 - da
          })
          .slice(0, 20)
        if (!withNotes.length) return null
        return (
          <div className="card" style={{marginTop:16}}>
            <h4 style={{marginBottom:14}}>Session Notes</h4>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {withNotes.map((s,i) => {
                const d = s.startTime ? new Date(s.startTime) : s.date ? new Date(s.date) : null
                return (
                  <div key={s.id||i} style={{padding:'10px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:4,flexWrap:'wrap',gap:6}}>
                      <div style={{display:'flex',gap:8,alignItems:'center'}}>
                        <div style={{width:7,height:7,borderRadius:'50%',background:SUBJECT_COLOURS[s.subject]||'var(--accent)',flexShrink:0}}/>
                        <span style={{fontWeight:600,fontSize:'0.85rem'}}>{s.subject}</span>
                        {s.type && <span className="badge badge-grey" style={{fontSize:'0.68rem'}}>{s.type}</span>}
                      </div>
                      {d && <span style={{fontSize:'0.72rem',color:'var(--text-muted)'}}>{format(d,'EEE d MMM')}</span>}
                    </div>
                    <div style={{fontSize:'0.82rem',color:'var(--text-secondary)',lineHeight:1.6}}>{s.notes}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })()}
    </div>
  )
}
