// src/pages/Calendar.jsx
import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { addSession, completeSession, getSessions } from '../utils/firestore'
import { getMonthDays, getWeekDays, sessionsForDay, downloadICS, parseICS, parseCSV } from '../utils/calendar'
import { generateCalendarPlan } from '../utils/ai'
import toast from 'react-hot-toast'
import { format, addMonths, subMonths, addWeeks, subWeeks, isToday, isSameDay } from 'date-fns'
import { ChevronLeft, ChevronRight, Plus, Download, Upload, Calendar as CalIcon, CheckCircle2, Clock, Zap, X } from 'lucide-react'
import { SUBJECT_COLOURS } from '../data/subjects'

const SESSION_TYPES = ['Content Revision','Exam Practice','Emergency Revision']

export default function Calendar() {
  const { user, profile } = useAuth()
  const [view, setView] = useState('month')
  const [current, setCurrent] = useState(new Date())
  const [sessions, setSessions] = useState([])
  const [selected, setSelected] = useState(null)
  const [showAdd, setShowAdd] = useState(false)
  const [showComplete, setShowComplete] = useState(null)
  const [showAIPlan, setShowAIPlan] = useState(false)
  const [aiPlan, setAiPlan] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const fileRef = useRef()

  useEffect(() => { loadSessions() }, [user])

  async function loadSessions() {
    if (!user) return
    const s = await getSessions(user.uid)
    setSessions(s)
  }

  async function handleComplete(sessionId, notes) {
    await completeSession(user.uid, sessionId, notes)
    await loadSessions()
    setShowComplete(null)
    toast.success('Session completed! +50 XP 🎉')
  }

  async function handleImport(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const text = await file.text()
    const parsed = file.name.endsWith('.ics') ? parseICS(text) : parseCSV(text)
    let count = 0
    for (const ev of parsed) {
      if (!ev.title && !ev.subject) continue
      await addSession(user.uid, {
        title: ev.title || `${ev.subject} – ${ev.type||'Revision'}`,
        subject: ev.subject || '',
        type: ev.type || 'Content Revision',
        startTime: ev.start?.toISOString() || ev.date,
        endTime: ev.end?.toISOString() || '',
        duration: ev.duration || 45,
        date: ev.start ? format(ev.start,'yyyy-MM-dd') : ev.date,
        start: ev.start ? format(ev.start,'HH:mm') : '',
        paper: ev.paper || '',
        notes: ev.description || '',
        source: 'import',
      })
      count++
    }
    await loadSessions()
    toast.success(`Imported ${count} sessions`)
    fileRef.current.value = ''
  }

  async function generateAIPlan() {
    setAiLoading(true)
    const res = await generateCalendarPlan({
      subjects: profile?.subjects || [],
      availableDays: Object.entries(profile?.availability||{}).filter(([,v])=>v.enabled).map(([k])=>k),
      startTimes: Object.fromEntries(Object.entries(profile?.availability||{}).map(([k,v])=>[k,v.startTime])),
      endTime: '21:00',
      ratio: '2:1',
      weeksUntilExams: 12,
    })
    setAiPlan(res.text || res.error || '')
    setAiLoading(false)
  }

  const days = view === 'month'
    ? getMonthDays(current.getFullYear(), current.getMonth())
    : getWeekDays(current).map(d => ({ date: d, otherMonth: false }))

  const dayNames = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

  function navigate(dir) {
    if (view === 'month') setCurrent(dir > 0 ? addMonths(current,1) : subMonths(current,1))
    else setCurrent(dir > 0 ? addWeeks(current,1) : subWeeks(current,1))
  }

  const selectedSessions = selected ? sessionsForDay(sessions, selected) : []

  return (
    <div className="fade-in">
      {/* Header */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <h2>Revision Calendar</h2>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <div className="tabs" style={{padding:3}}>
            <button className={`tab${view==='month'?' active':''}`} onClick={()=>setView('month')}>Month</button>
            <button className={`tab${view==='week'?' active':''}`} onClick={()=>setView('week')}>Week</button>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={()=>fileRef.current.click()}>
            <Upload size={15}/> Import
          </button>
          <input ref={fileRef} type="file" accept=".ics,.csv" style={{display:'none'}} onChange={handleImport}/>
          <button className="btn btn-secondary btn-sm" onClick={()=>downloadICS(sessions)}>
            <Download size={15}/> Export
          </button>
          <button className="btn btn-secondary btn-sm" onClick={()=>{setShowAIPlan(true);generateAIPlan()}}>
            <Zap size={15}/> AI Plan
          </button>
          <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>
            <Plus size={15}/> Add session
          </button>
        </div>
      </div>

      {/* Month/Week navigator */}
      <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:16}}>
        <button className="btn btn-ghost btn-icon" onClick={()=>navigate(-1)}><ChevronLeft size={18}/></button>
        <h3 style={{minWidth:200,textAlign:'center'}}>
          {view==='month' ? format(current,'MMMM yyyy') : `${format(days[0].date,'d MMM')} – ${format(days[6].date,'d MMM yyyy')}`}
        </h3>
        <button className="btn btn-ghost btn-icon" onClick={()=>navigate(1)}><ChevronRight size={18}/></button>
        <button className="btn btn-ghost btn-sm" onClick={()=>setCurrent(new Date())}>Today</button>
      </div>

      <div className="grid-2" style={{gap:20,alignItems:'start'}}>
        {/* Calendar grid */}
        <div className="card" style={{padding:16}}>
          <div className="cal-grid" style={{marginBottom:4}}>
            {dayNames.map(d=><div key={d} style={{textAlign:'center',fontSize:'0.72rem',fontWeight:600,color:'var(--text-muted)',padding:'4px 0'}}>{d}</div>)}
          </div>
          <div className="cal-grid">
            {days.map(({date,otherMonth},i) => {
              const daySessions = sessionsForDay(sessions, date)
              const hasCompleted = daySessions.some(s=>s.completed)
              const hasSession   = daySessions.length > 0
              const isSelected   = selected && isSameDay(date, selected)
              return (
                <div key={i}
                  className={`cal-day${isToday(date)?' today':''}${otherMonth?' other-month':''}${hasSession?' has-session':''}${hasCompleted?' completed':''}`}
                  style={{
                    background: isSelected ? 'rgba(124,58,237,0.25)' : undefined,
                    border: isSelected ? '1px solid var(--accent)' : undefined,
                  }}
                  onClick={() => setSelected(date)}
                >
                  <span style={{fontWeight: isToday(date) ? 700 : 400, fontSize:'0.82rem'}}>{format(date,'d')}</span>
                  {/* Session dots */}
                  {daySessions.length > 0 && (
                    <div style={{display:'flex',gap:2,flexWrap:'wrap',justifyContent:'center',marginTop:2}}>
                      {daySessions.slice(0,3).map((s,si) => (
                        <div key={si} style={{width:5,height:5,borderRadius:'50%',background:s.completed?'var(--success)':SUBJECT_COLOURS[s.subject]||'var(--accent)'}}/>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Session detail panel */}
        <div className="card">
          {selected ? (
            <>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
                <h4>{format(selected,'EEEE, d MMMM')}</h4>
                <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>
                  <Plus size={14}/> Add
                </button>
              </div>
              {selectedSessions.length === 0 ? (
                <div className="empty-state" style={{padding:'32px 0'}}>
                  <CalIcon size={32} style={{opacity:0.3}}/>
                  <p>No sessions on this day</p>
                  <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>Add a session</button>
                </div>
              ) : (
                <div style={{display:'flex',flexDirection:'column',gap:10}}>
                  {selectedSessions.map(s => (
                    <div key={s.id} style={{
                      padding:14, borderRadius:'var(--radius-md)',
                      background:'var(--bg-surface)', border:`1px solid ${s.completed?'var(--success)':'var(--border)'}`,
                    }}>
                      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:8}}>
                        <div style={{flex:1}}>
                          <div style={{fontWeight:600,fontSize:'0.875rem',marginBottom:4}}>{s.title||s.subject}</div>
                          <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                            {s.start && <span className="badge badge-grey"><Clock size={10}/> {s.start}</span>}
                            {s.duration && <span className="badge badge-grey">{s.duration}min</span>}
                            {s.type && <span className={`badge badge-${s.type.includes('Exam')?'blue':s.type.includes('Emergency')?'red':'purple'}`}>{s.type}</span>}
                          </div>
                        </div>
                        {!s.completed ? (
                          <button className="btn btn-secondary btn-sm" onClick={()=>setShowComplete(s)}>
                            <CheckCircle2 size={14}/> Done
                          </button>
                        ) : (
                          <span style={{color:'var(--success)',fontSize:'0.82rem',fontWeight:600,whiteSpace:'nowrap'}}>✓ Completed</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="empty-state">
              <CalIcon size={40} style={{opacity:0.3}}/>
              <p>Select a day to view sessions</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Session Modal */}
      {showAdd && <AddSessionModal user={user} profile={profile} selectedDate={selected} onClose={()=>setShowAdd(false)} onSave={async(s)=>{await addSession(user.uid,s);await loadSessions();setShowAdd(false);toast.success('Session added')}}/>}

      {/* Complete Session Modal */}
      {showComplete && <CompleteModal session={showComplete} onClose={()=>setShowComplete(null)} onComplete={handleComplete}/>}

      {/* AI Plan Modal */}
      {showAIPlan && (
        <div className="modal-overlay" onClick={()=>setShowAIPlan(false)}>
          <div className="modal" style={{maxWidth:640}} onClick={e=>e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title"><Zap size={16}/> AI Study Plan</span>
              <button className="btn btn-ghost btn-icon" onClick={()=>setShowAIPlan(false)}><X size={18}/></button>
            </div>
            {aiLoading ? <div className="loading-center"><div className="spinner"/></div> : (
              <div style={{whiteSpace:'pre-wrap',fontSize:'0.875rem',lineHeight:1.8}}>{aiPlan}</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function AddSessionModal({ user, profile, selectedDate, onClose, onSave }) {
  const subjects = profile?.subjects?.map(s=>s.name) || []
  const [form, setForm] = useState({
    subject: subjects[0]||'',
    type: 'Content Revision',
    date: selectedDate ? format(selectedDate,'yyyy-MM-dd') : format(new Date(),'yyyy-MM-dd'),
    start: '17:00',
    duration: 45,
    paper: '',
    notes: '',
  })

  async function submit(e) {
    e.preventDefault()
    const startDt = new Date(`${form.date}T${form.start}`)
    const endDt   = new Date(startDt.getTime() + form.duration*60000)
    await onSave({
      ...form,
      duration: parseInt(form.duration),
      title: `${form.subject}${form.paper?' P'+form.paper:''} – ${form.type}`,
      startTime: startDt.toISOString(),
      endTime: endDt.toISOString(),
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Add revision session</span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button>
        </div>
        <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:14}}>
          <div className="form-group" style={{marginBottom:0}}>
            <label className="label">Subject</label>
            <select className="select" value={form.subject} onChange={e=>setForm(f=>({...f,subject:e.target.value}))} required>
              {subjects.map(s=><option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="grid-2" style={{gap:10}}>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="label">Type</label>
              <select className="select" value={form.type} onChange={e=>setForm(f=>({...f,type:e.target.value}))}>
                {SESSION_TYPES.map(t=><option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="label">Paper #</label>
              <input className="input" placeholder="e.g. 1" value={form.paper} onChange={e=>setForm(f=>({...f,paper:e.target.value}))}/>
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="label">Date</label>
              <input className="input" type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} required/>
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="label">Start time</label>
              <input className="input" type="time" value={form.start} onChange={e=>setForm(f=>({...f,start:e.target.value}))} required/>
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="label">Duration (min)</label>
              <input className="input" type="number" min={15} max={300} value={form.duration} onChange={e=>setForm(f=>({...f,duration:e.target.value}))} required/>
            </div>
          </div>
          <div className="form-group" style={{marginBottom:0}}>
            <label className="label">Notes (optional)</label>
            <textarea className="textarea" style={{minHeight:60}} value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} placeholder="e.g. Focus on topic X…"/>
          </div>
          <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Add session</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function CompleteModal({ session, onClose, onComplete }) {
  const [notes, setNotes] = useState('')
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Mark session complete</span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button>
        </div>
        <p style={{marginBottom:16}}>{session.title}</p>
        <div className="form-group">
          <label className="label">Session notes (optional)</label>
          <textarea className="textarea" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="What did you cover? Any topics to revisit?"/>
        </div>
        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={()=>onComplete(session.id,notes)}>
            <CheckCircle2 size={16}/> Complete +50 XP
          </button>
        </div>
      </div>
    </div>
  )
}
