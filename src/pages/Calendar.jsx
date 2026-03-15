// src/pages/Calendar.jsx
import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { addSession, completeSession, getSessions } from '../utils/firestore'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { getMonthDays, getWeekDays, sessionsForDay, downloadICS, parseICS, parseCSV } from '../utils/calendar'
import CalendarGenerator from '../components/CalendarGenerator'
import toast from 'react-hot-toast'
import { format, addMonths, subMonths, addWeeks, subWeeks, isToday, isSameDay } from 'date-fns'
import { ChevronLeft, ChevronRight, Plus, Download, Upload, Zap, X, CheckCircle2, Clock } from 'lucide-react'
import { SUBJECT_COLOURS } from '../data/subjects'

const SESSION_TYPES = ['Content Revision','Exam Practice','Emergency Revision']

export default function Calendar() {
  const { user, profile } = useAuth()
  const [view,         setView]         = useState('month')
  const [current,      setCurrent]      = useState(new Date())
  const [sessions,     setSessions]     = useState([])
  const [selected,     setSelected]     = useState(null)
  const [showAdd,      setShowAdd]      = useState(false)
  const [showComplete, setShowComplete] = useState(null)
  const [showGen,      setShowGen]      = useState(false)
  const [importing,    setImporting]    = useState(false)
  const fileRef = useRef()

  useEffect(() => { loadSessions() }, [user])

  async function loadSessions() {
    if (!user) return
    const snap = await getDocs(collection(db,'users',user.uid,'sessions'))
    setSessions(snap.docs.map(d=>({id:d.id,...d.data()})))
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
    setImporting(true)
    try {
      const text   = await file.text()
      const parsed = file.name.endsWith('.ics') ? parseICS(text) : parseCSV(text)
      let count    = 0
      for (const ev of parsed) {
        if (!ev.title && !ev.subject) continue
        await addSession(user.uid, {
          title:   ev.title || `${ev.subject||'Revision'} – ${ev.type||'Session'}`,
          subject: ev.subject || '',
          type:    ev.type    || 'Content Revision',
          paper:   ev.paper   || '',
          board:   ev.board   || '',
          startTime: ev.start?.toISOString?.() || (ev.date ? new Date(ev.date).toISOString() : null),
          endTime:   ev.end?.toISOString?.()   || null,
          duration:  ev.duration || 45,
          date:      ev.start ? format(ev.start,'yyyy-MM-dd') : (ev.date||''),
          start:     ev.start ? format(ev.start,'HH:mm') : '',
          notes:     ev.description || '',
          source:    'import',
        })
        count++
      }
      // Reload sessions after import
      await loadSessions()
      toast.success(`Imported ${count} sessions`)
    } catch(err) {
      toast.error('Import failed: ' + err.message)
    } finally {
      setImporting(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  function navigate(dir) {
    if (view==='month') setCurrent(dir>0?addMonths(current,1):subMonths(current,1))
    else setCurrent(dir>0?addWeeks(current,1):subWeeks(current,1))
  }

  const days = view==='month'
    ? getMonthDays(current.getFullYear(), current.getMonth())
    : getWeekDays(current).map(d=>({date:d,otherMonth:false}))

  const dayNames = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const selectedSessions = selected ? sessionsForDay(sessions, selected) : []

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20,flexWrap:'wrap',gap:10}}>
        <h2>Revision Calendar</h2>
        <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
          <div className="tabs" style={{padding:3}}>
            <button className={`tab${view==='month'?' active':''}`} onClick={()=>setView('month')}>Month</button>
            <button className={`tab${view==='week'?' active':''}`} onClick={()=>setView('week')}>Week</button>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={()=>fileRef.current.click()} disabled={importing}>
            <Upload size={14}/> {importing?'Importing…':'Import'}
          </button>
          <input ref={fileRef} type="file" accept=".ics,.csv" style={{display:'none'}} onChange={handleImport}/>
          <button className="btn btn-secondary btn-sm" onClick={()=>downloadICS(sessions)}>
            <Download size={14}/> Export ICS
          </button>
          <button className="btn btn-secondary btn-sm" onClick={()=>setShowGen(true)}>
            <Zap size={14}/> Generate schedule
          </button>
          <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>
            <Plus size={14}/> Add session
          </button>
        </div>
      </div>

      {/* Navigator */}
      <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
        <button className="btn btn-ghost btn-icon" onClick={()=>navigate(-1)}><ChevronLeft size={18}/></button>
        <h3 style={{minWidth:200,textAlign:'center'}}>
          {view==='month' ? format(current,'MMMM yyyy')
            : `${format(days[0].date,'d MMM')} – ${format(days[6].date,'d MMM yyyy')}`}
        </h3>
        <button className="btn btn-ghost btn-icon" onClick={()=>navigate(1)}><ChevronRight size={18}/></button>
        <button className="btn btn-ghost btn-sm" onClick={()=>setCurrent(new Date())}>Today</button>
      </div>

      <div className="grid-2" style={{gap:16,alignItems:'start'}}>
        {/* Calendar grid */}
        <div className="card" style={{padding:14}}>
          <div className="cal-grid" style={{marginBottom:3}}>
            {dayNames.map(d=><div key={d} style={{textAlign:'center',fontSize:'0.68rem',fontWeight:600,color:'var(--text-muted)',padding:'3px 0'}}>{d}</div>)}
          </div>
          <div className="cal-grid">
            {days.map(({date,otherMonth},i)=>{
              const ds        = sessionsForDay(sessions,date)
              const hasComp   = ds.some(s=>s.completed)
              const hasSess   = ds.length>0
              const isSel     = selected && isSameDay(date,selected)
              return (
                <div key={i}
                  className={`cal-day${isToday(date)?' today':''}${otherMonth?' other-month':''}${hasSess?' has-session':''}${hasComp?' completed':''}`}
                  style={{background:isSel?'rgba(124,58,237,0.25)':undefined,border:isSel?'1px solid var(--accent)':undefined}}
                  onClick={()=>setSelected(date)}>
                  <span style={{fontWeight:isToday(date)?700:400,fontSize:'0.8rem'}}>{format(date,'d')}</span>
                  {ds.length>0&&(
                    <div style={{display:'flex',gap:2,flexWrap:'wrap',justifyContent:'center',marginTop:2}}>
                      {ds.slice(0,3).map((s,si)=>(
                        <div key={si} style={{width:4,height:4,borderRadius:'50%',background:s.completed?'var(--success)':SUBJECT_COLOURS[s.subject]||'var(--accent)'}}/>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div style={{display:'flex',gap:12,marginTop:12,fontSize:'0.68rem',color:'var(--text-muted)',justifyContent:'center'}}>
            <span style={{display:'flex',alignItems:'center',gap:3}}><div style={{width:6,height:6,borderRadius:'50%',background:'var(--accent)'}}/> Scheduled</span>
            <span style={{display:'flex',alignItems:'center',gap:3}}><div style={{width:6,height:6,borderRadius:'50%',background:'var(--success)'}}/> Completed</span>
          </div>
        </div>

        {/* Session detail */}
        <div className="card">
          {selected ? (
            <>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
                <h4>{format(selected,'EEEE, d MMMM')}</h4>
                <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}><Plus size={13}/> Add</button>
              </div>
              {selectedSessions.length===0 ? (
                <div className="empty-state" style={{padding:'28px 0'}}>
                  <p style={{fontSize:'0.875rem'}}>No sessions on this day</p>
                  <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>Add session</button>
                </div>
              ) : (
                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  {selectedSessions.map(s=>(
                    <div key={s.id} style={{padding:12,borderRadius:'var(--radius-md)',background:'var(--bg-surface)',border:`1px solid ${s.completed?'var(--success)':s.isEmergency?'var(--danger)':'var(--border)'}`}}>
                      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:8}}>
                        <div style={{flex:1}}>
                          <div style={{fontWeight:600,fontSize:'0.85rem',marginBottom:5,color:s.isEmergency?'var(--danger)':'var(--text-primary)'}}>{s.title||s.subject}</div>
                          <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
                            {s.start&&<span className="badge badge-grey"><Clock size={9}/> {s.start}</span>}
                            {s.duration&&<span className="badge badge-grey">{s.duration}min</span>}
                            {s.type&&<span className={`badge badge-${s.isEmergency?'red':s.type.includes('Exam')?'blue':'purple'}`}>{s.type}</span>}
                          </div>
                        </div>
                        {!s.completed ? (
                          <button className="btn btn-secondary btn-sm" onClick={()=>setShowComplete(s)}>
                            <CheckCircle2 size={13}/> Done
                          </button>
                        ) : (
                          <span style={{color:'var(--success)',fontSize:'0.78rem',fontWeight:600,whiteSpace:'nowrap'}}>✓ Complete</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="empty-state">
              <p>Select a day to view sessions</p>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {showAdd && (
        <AddSessionModal user={user} profile={profile} selectedDate={selected}
          onClose={()=>setShowAdd(false)}
          onSave={async(s)=>{await addSession(user.uid,s);await loadSessions();setShowAdd(false);toast.success('Session added')}}/>
      )}
      {showComplete && (
        <CompleteModal session={showComplete} onClose={()=>setShowComplete(null)} onComplete={handleComplete}/>
      )}
      {showGen && (
        <CalendarGenerator
          onClose={()=>setShowGen(false)}
          onGenerated={()=>{loadSessions();toast.success('Schedule generated!')}}/>
      )}
    </div>
  )
}

function AddSessionModal({ user, profile, selectedDate, onClose, onSave }) {
  const subjects = profile?.subjects?.map(s=>s.name)||[]
  const [form,setForm] = useState({
    subject:subjects[0]||'',type:'Content Revision',
    date:selectedDate?format(selectedDate,'yyyy-MM-dd'):format(new Date(),'yyyy-MM-dd'),
    start:'17:00',duration:45,paper:'',notes:'',
  })
  async function submit(e) {
    e.preventDefault()
    const startDt = new Date(`${form.date}T${form.start}`)
    await onSave({...form,duration:parseInt(form.duration),title:`${form.subject}${form.paper?' P'+form.paper:''} – ${form.type}`,startTime:startDt.toISOString(),endTime:new Date(startDt.getTime()+form.duration*60000).toISOString()})
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="modal-header"><span className="modal-title">Add session</span><button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button></div>
        <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12}}>
          <div className="grid-2" style={{gap:10}}>
            <div><label className="label">Subject</label><select className="select" value={form.subject} onChange={e=>setForm(f=>({...f,subject:e.target.value}))} required><option value="">Select…</option>{subjects.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
            <div><label className="label">Type</label><select className="select" value={form.type} onChange={e=>setForm(f=>({...f,type:e.target.value}))}>{SESSION_TYPES.map(t=><option key={t} value={t}>{t}</option>)}</select></div>
            <div><label className="label">Paper</label><input className="input" placeholder="1, 2…" value={form.paper} onChange={e=>setForm(f=>({...f,paper:e.target.value}))}/></div>
            <div><label className="label">Date</label><input className="input" type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} required/></div>
            <div><label className="label">Start time</label><input className="input" type="time" value={form.start} onChange={e=>setForm(f=>({...f,start:e.target.value}))} required/></div>
            <div><label className="label">Duration (min)</label><input className="input" type="number" min={15} max={300} value={form.duration} onChange={e=>setForm(f=>({...f,duration:e.target.value}))} required/></div>
          </div>
          <div><label className="label">Notes</label><textarea className="textarea" style={{minHeight:55}} value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></div>
          <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}><button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button><button type="submit" className="btn btn-primary">Add</button></div>
        </form>
      </div>
    </div>
  )
}

function CompleteModal({ session, onClose, onComplete }) {
  const [notes,setNotes]=useState('')
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="modal-header"><span className="modal-title">Mark complete</span><button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button></div>
        <p style={{marginBottom:12}}>{session.title}</p>
        <div className="form-group"><label className="label">Notes (optional)</label><textarea className="textarea" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="What did you cover?"/></div>
        <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={()=>onComplete(session.id,notes)}><CheckCircle2 size={15}/> Complete +50 XP</button>
        </div>
      </div>
    </div>
  )
}
