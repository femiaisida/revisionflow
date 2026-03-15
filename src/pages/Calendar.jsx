// src/pages/Calendar.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useAuth } from '../context/AuthContext'
import { addSession, completeSession } from '../utils/firestore'
import { collection, getDocs, deleteDoc, doc, addDoc, serverTimestamp, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import { getMonthDays, getWeekDays, sessionsForDay, downloadICS, parseICS, parseCSV } from '../utils/calendar'
import CalendarGenerator from '../components/CalendarGenerator'
import toast from 'react-hot-toast'
import { format, addMonths, subMonths, addWeeks, subWeeks, isToday, isSameDay } from 'date-fns'
import {
  ChevronLeft, ChevronRight, Plus, Download, Upload, Zap, X,
  CheckCircle2, Clock, Trash2, AlertTriangle, Check, Eye
} from 'lucide-react'
import { SUBJECT_COLOURS } from '../data/subjects'

const SESSION_TYPES = ['Content Revision','Exam Practice','Emergency Revision']

export default function Calendar() {
  const { user, profile } = useAuth()
  const [view,          setView]          = useState('month')
  const [current,       setCurrent]       = useState(new Date())
  const [sessions,      setSessions]      = useState([])
  const [selected,      setSelected]      = useState(null)
  const [showAdd,       setShowAdd]       = useState(false)
  const [showComplete,  setShowComplete]  = useState(null)
  const [showGen,       setShowGen]       = useState(false)
  const [showClear,     setShowClear]     = useState(false)
  const [showImport,    setShowImport]    = useState(false)  // import review modal
  const [importParsed,  setImportParsed]  = useState([])    // parsed events pending review
  const [importing,     setImporting]     = useState(false)
  const fileRef = useRef()

  useEffect(() => { loadSessions() }, [user])

  async function loadSessions() {
    if (!user) return
    const snap = await getDocs(collection(db, 'users', user.uid, 'sessions'))
    setSessions(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  }

  async function handleComplete(sessionId, notes) {
    await completeSession(user.uid, sessionId, notes)
    await loadSessions()
    setShowComplete(null)
    toast.success('Session completed! +50 XP 🎉')
  }

  // ── IMPORT: parse file → show review modal ──────────────────────────────
  async function handleFileSelect(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setImporting(true)
    try {
      const text   = await file.text()
      const parsed = file.name.toLowerCase().endsWith('.ics')
        ? parseICS(text)
        : parseCSV(text)

      if (!parsed.length) {
        toast.error('No events found in this file')
        return
      }

      setImportParsed(parsed)
      setShowImport(true)
    } catch (err) {
      toast.error('Failed to read file: ' + err.message)
      console.error(err)
    } finally {
      setImporting(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  // ── CLEAR CALENDAR ───────────────────────────────────────────────────────
  async function clearCalendar(mode) {
    try {
      let toDelete
      if (mode === 'all') {
        toDelete = sessions
      } else {
        toDelete = sessions.filter(s => s.source === 'generated')
      }
      await Promise.all(
        toDelete.map(s => deleteDoc(doc(db, 'users', user.uid, 'sessions', s.id)))
      )
      await loadSessions()
      setShowClear(false)
      toast.success(`Cleared ${toDelete.length} session${toDelete.length !== 1 ? 's' : ''}`)
    } catch (err) {
      toast.error('Failed to clear: ' + err.message)
    }
  }

  // ── NAV ──────────────────────────────────────────────────────────────────
  function navigate(dir) {
    if (view === 'month') setCurrent(dir > 0 ? addMonths(current, 1) : subMonths(current, 1))
    else setCurrent(dir > 0 ? addWeeks(current, 1) : subWeeks(current, 1))
  }

  const days = view === 'month'
    ? getMonthDays(current.getFullYear(), current.getMonth())
    : getWeekDays(current).map(d => ({ date: d, otherMonth: false }))

  const dayNames         = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const selectedSessions = selected ? sessionsForDay(sessions, selected) : []

  return (
    <div className="fade-in">
      {/* Header */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20,flexWrap:'wrap',gap:10}}>
        <h2>Revision Calendar</h2>
        <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
          <div className="tabs" style={{padding:3}}>
            <button className={`tab${view==='month'?' active':''}`} onClick={()=>setView('month')}>Month</button>
            <button className={`tab${view==='week'?' active':''}`} onClick={()=>setView('week')}>Week</button>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={()=>fileRef.current.click()} disabled={importing}>
            <Upload size={14}/> {importing ? 'Reading…' : 'Import'}
          </button>
          <input ref={fileRef} type="file" accept=".ics,.csv" style={{display:'none'}} onChange={handleFileSelect}/>
          <button className="btn btn-secondary btn-sm" onClick={()=>downloadICS(sessions)}>
            <Download size={14}/> Export ICS
          </button>
          <button className="btn btn-secondary btn-sm" onClick={()=>setShowClear(true)}>
            <Trash2 size={14}/> Clear
          </button>
          <button className="btn btn-secondary btn-sm" onClick={()=>setShowGen(true)}>
            <Zap size={14}/> Generate
          </button>
          <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>
            <Plus size={14}/> Add session
          </button>
        </div>
      </div>

      {/* Navigator */}
      <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
        <button className="btn btn-ghost btn-icon" onClick={()=>navigate(-1)}><ChevronLeft size={18}/></button>
        <h3 style={{minWidth:220,textAlign:'center'}}>
          {view === 'month'
            ? format(current, 'MMMM yyyy')
            : `${format(days[0].date,'d MMM')} – ${format(days[6].date,'d MMM yyyy')}`}
        </h3>
        <button className="btn btn-ghost btn-icon" onClick={()=>navigate(1)}><ChevronRight size={18}/></button>
        <button className="btn btn-ghost btn-sm" onClick={()=>setCurrent(new Date())}>Today</button>
        <span style={{fontSize:'0.78rem',color:'var(--text-muted)',marginLeft:'auto'}}>
          {sessions.length} session{sessions.length!==1?'s':''} total
        </span>
      </div>

      <div className="grid-2" style={{gap:16,alignItems:'start'}}>
        {/* Calendar grid */}
        <div className="card" style={{padding:14}}>
          <div className="cal-grid" style={{marginBottom:3}}>
            {dayNames.map(d => (
              <div key={d} style={{textAlign:'center',fontSize:'0.68rem',fontWeight:600,color:'var(--text-muted)',padding:'3px 0'}}>{d}</div>
            ))}
          </div>
          <div className="cal-grid">
            {days.map(({date,otherMonth},i) => {
              const ds     = sessionsForDay(sessions, date)
              const isSel  = selected && isSameDay(date, selected)
              return (
                <div key={i}
                  className={`cal-day${isToday(date)?' today':''}${otherMonth?' other-month':''}${ds.length>0?' has-session':''}${ds.some(s=>s.completed)?' completed':''}`}
                  style={{background:isSel?'rgba(124,58,237,0.25)':undefined,border:isSel?'1px solid var(--accent)':undefined}}
                  onClick={() => setSelected(date)}>
                  <span style={{fontWeight:isToday(date)?700:400,fontSize:'0.8rem'}}>{format(date,'d')}</span>
                  {ds.length > 0 && (
                    <div style={{display:'flex',gap:2,flexWrap:'wrap',justifyContent:'center',marginTop:2}}>
                      {ds.slice(0,3).map((s,si) => (
                        <div key={si} style={{width:4,height:4,borderRadius:'50%',
                          background:s.completed?'var(--success)':s.isEmergency?'var(--danger)':SUBJECT_COLOURS[s.subject]||'var(--accent)'}}/>
                      ))}
                      {ds.length > 3 && <div style={{width:4,height:4,borderRadius:'50%',background:'var(--text-muted)'}}/>}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div style={{display:'flex',gap:14,marginTop:10,fontSize:'0.68rem',color:'var(--text-muted)',justifyContent:'center',flexWrap:'wrap'}}>
            {[['var(--accent)','Scheduled'],['var(--success)','Completed'],['var(--danger)','Emergency']].map(([c,l])=>(
              <span key={l} style={{display:'flex',alignItems:'center',gap:3}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:c}}/>{l}
              </span>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div className="card">
          {selected ? (
            <>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
                <h4>{format(selected,'EEEE, d MMMM')}</h4>
                <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>
                  <Plus size={13}/> Add
                </button>
              </div>
              {selectedSessions.length === 0 ? (
                <div className="empty-state" style={{padding:'28px 0'}}>
                  <p style={{fontSize:'0.875rem'}}>No sessions on this day</p>
                  <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>Add session</button>
                </div>
              ) : (
                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  {selectedSessions.map(s => (
                    <SessionCard key={s.id} session={s}
                      onComplete={() => setShowComplete(s)}
                      onDelete={async () => {
                        await deleteDoc(doc(db,'users',user.uid,'sessions',s.id))
                        await loadSessions()
                        toast.success('Session deleted')
                      }}/>
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
          onClose={() => setShowAdd(false)}
          onSave={async s => {
            await addSession(user.uid, s)
            await loadSessions()
            setShowAdd(false)
            toast.success('Session added')
          }}/>
      )}
      {showComplete && (
        <CompleteModal session={showComplete}
          onClose={() => setShowComplete(null)}
          onComplete={handleComplete}/>
      )}
      {showGen && (
        <CalendarGenerator
          onClose={() => setShowGen(false)}
          onGenerated={() => { loadSessions(); toast.success('Schedule generated!') }}/>
      )}
      {showClear && (
        <ClearModal
          sessions={sessions}
          onClose={() => setShowClear(false)}
          onClear={clearCalendar}/>
      )}
      {showImport && (
        <ImportReviewModal
          parsed={importParsed}
          profile={profile}
          existingCount={sessions.length}
          onClose={() => setShowImport(false)}
          onConfirm={async (approved, mode) => {
            setShowImport(false)
            setImporting(true)
            try {
              if (mode === 'replace') {
                const snap = await getDocs(collection(db,'users',user.uid,'sessions'))
                await Promise.all(snap.docs.map(d => deleteDoc(doc(db,'users',user.uid,'sessions',d.id))))
              }
              for (const ev of approved) {
                const start = ev.start instanceof Date && !isNaN(ev.start) ? ev.start : null
                await addDoc(collection(db,'users',user.uid,'sessions'), {
                  title:     ev.title || `${ev.subject||'Revision'} – ${ev.type||'Session'}`,
                  subject:   ev.subject    || '',
                  type:      ev.type       || 'Content Revision',
                  paper:     ev.paper      || '',
                  board:     ev.board      || '',
                  isEmergency: ev.isEmergency || false,
                  startTime: start ? start.toISOString() : null,
                  endTime:   ev.end instanceof Date && !isNaN(ev.end) ? ev.end.toISOString() : null,
                  duration:  ev.duration   || 45,
                  date:      start ? format(start,'yyyy-MM-dd') : '',
                  start:     start ? format(start,'HH:mm')       : '',
                  notes:     ev.description || '',
                  source:    'import',
                  completed: false,
                  createdAt: serverTimestamp(),
                })
              }
              await loadSessions()
              toast.success(`Imported ${approved.length} session${approved.length!==1?'s':''}`)
            } catch (err) {
              toast.error('Import failed: ' + err.message)
            } finally {
              setImporting(false)
            }
          }}/>
      )}
    </div>
  )
}

// ── Session Card ──────────────────────────────────────────────────────────────
function SessionCard({ session: s, onComplete, onDelete }) {
  return (
    <div style={{padding:12,borderRadius:'var(--radius-md)',background:'var(--bg-surface)',
      border:`1px solid ${s.completed?'var(--success)':s.isEmergency?'var(--danger)':'var(--border)'}`}}>
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:8}}>
        <div style={{flex:1}}>
          <div style={{fontWeight:600,fontSize:'0.85rem',marginBottom:5,
            color:s.isEmergency?'var(--danger)':'var(--text-primary)'}}>
            {s.title||s.subject}
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
            {s.start && <span className="badge badge-grey"><Clock size={9}/> {s.start}</span>}
            {s.duration && <span className="badge badge-grey">{s.duration}min</span>}
            {s.type && <span className={`badge badge-${s.isEmergency?'red':s.type.includes('Exam')?'blue':'purple'}`}>{s.type}</span>}
          </div>
        </div>
        <div style={{display:'flex',gap:5,flexShrink:0}}>
          {!s.completed && (
            <button className="btn btn-secondary btn-sm" onClick={onComplete}>
              <CheckCircle2 size={13}/> Done
            </button>
          )}
          {s.completed && <span style={{color:'var(--success)',fontSize:'0.75rem',fontWeight:600,alignSelf:'center'}}>✓</span>}
          <button className="btn btn-ghost btn-icon btn-sm" style={{color:'var(--danger)'}} onClick={onDelete}>
            <Trash2 size={13}/>
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Clear Calendar Modal ──────────────────────────────────────────────────────
function ClearModal({ sessions, onClose, onClear }) {
  const generatedCount = sessions.filter(s => s.source === 'generated').length
  const manualCount    = sessions.filter(s => s.source !== 'generated').length

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title" style={{display:'flex',alignItems:'center',gap:8}}>
            <Trash2 size={16} color="var(--danger)"/> Clear calendar
          </span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button>
        </div>
        <p style={{marginBottom:20,fontSize:'0.875rem'}}>Choose what to clear. This cannot be undone.</p>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          <button
            className="card"
            style={{textAlign:'left',cursor:'pointer',padding:14,border:'2px solid var(--border)',background:'var(--bg-card)'}}
            onClick={() => onClear('generated')}>
            <div style={{fontWeight:600,marginBottom:3}}>Clear generated sessions only</div>
            <div style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>
              Removes {generatedCount} auto-generated session{generatedCount!==1?'s':''}. Keeps {manualCount} manually added session{manualCount!==1?'s':''}.
            </div>
          </button>
          <button
            className="card"
            style={{textAlign:'left',cursor:'pointer',padding:14,border:'2px solid var(--danger)',background:'rgba(239,68,68,0.06)'}}
            onClick={() => onClear('all')}>
            <div style={{fontWeight:600,marginBottom:3,color:'var(--danger)'}}>Clear everything</div>
            <div style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>
              Removes all {sessions.length} session{sessions.length!==1?'s':''} including manually added ones.
            </div>
          </button>
        </div>
        <div style={{display:'flex',justifyContent:'flex-end',marginTop:16}}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

// ── Import Review Modal ───────────────────────────────────────────────────────
function ImportReviewModal({ parsed, profile, existingCount, onClose, onConfirm }) {
  const subjects     = profile?.subjects?.map(s => s.name) || []
  const [items, setItems]   = useState(
    parsed.map((ev, i) => ({
      ...ev,
      _id:      i,
      _include: true,
      _subject: ev.subject || '',
      _type:    ev.type    || 'Content Revision',
    }))
  )
  const [mode, setMode] = useState('add')  // 'add' | 'replace'

  const included    = items.filter(e => e._include)
  const unrecognised = items.filter(e => !e.subject || e.subjectUnrecognised)

  function toggleItem(id) {
    setItems(it => it.map(e => e._id === id ? {...e, _include: !e._include} : e))
  }

  function updateSubject(id, val) {
    setItems(it => it.map(e => e._id === id ? {...e, _subject: val, subject: val, subjectUnrecognised: false} : e))
  }

  function updateType(id, val) {
    setItems(it => it.map(e => e._id === id ? {...e, _type: val, type: val} : e))
  }

  function toggleAll(val) {
    setItems(it => it.map(e => ({...e, _include: val})))
  }

  const formatDate = (ev) => {
    if (ev.start instanceof Date && !isNaN(ev.start)) {
      try { return format(ev.start, 'EEE d MMM, HH:mm') } catch { return '—' }
    }
    return ev.date || '—'
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{maxWidth:680,maxHeight:'92vh',overflowY:'auto'}} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title" style={{display:'flex',alignItems:'center',gap:8}}>
            <Eye size={16} color="var(--accent-light)"/> Review import
          </span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button>
        </div>

        {/* Summary */}
        <div style={{display:'flex',gap:10,marginBottom:16,flexWrap:'wrap'}}>
          {[
            {l:'Total found',  v:items.length,        c:'var(--accent-light)'},
            {l:'Selected',     v:included.length,     c:'var(--success)'},
            {l:'Unrecognised', v:unrecognised.length, c:'var(--warning)'},
          ].map(s => (
            <div key={s.l} style={{padding:'6px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',textAlign:'center',flex:1}}>
              <div style={{fontWeight:800,color:s.c,fontSize:'1.2rem'}}>{s.v}</div>
              <div style={{fontSize:'0.68rem',color:'var(--text-muted)'}}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Unrecognised warning */}
        {unrecognised.length > 0 && (
          <div style={{padding:'8px 12px',background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.25)',borderRadius:'var(--radius-md)',fontSize:'0.82rem',marginBottom:12,display:'flex',alignItems:'center',gap:8}}>
            <AlertTriangle size={14} color="var(--warning)"/>
            {unrecognised.length} session{unrecognised.length!==1?'s':''} couldn't be matched to a subject. You can assign them below or exclude them.
          </div>
        )}

        {/* Select all / deselect all */}
        <div style={{display:'flex',gap:8,marginBottom:10,alignItems:'center'}}>
          <button className="btn btn-secondary btn-sm" onClick={() => toggleAll(true)}>Select all</button>
          <button className="btn btn-secondary btn-sm" onClick={() => toggleAll(false)}>Deselect all</button>
          <span style={{fontSize:'0.78rem',color:'var(--text-muted)',marginLeft:'auto'}}>
            {included.length} of {items.length} selected
          </span>
        </div>

        {/* Session list */}
        <div style={{maxHeight:340,overflowY:'auto',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',marginBottom:16}}>
          {items.map((ev, i) => (
            <div key={ev._id} style={{
              display:'flex',alignItems:'center',gap:10,padding:'9px 12px',
              borderBottom: i < items.length-1 ? '1px solid var(--border)' : 'none',
              background: ev._include ? 'var(--bg-card)' : 'var(--bg-surface)',
              opacity: ev._include ? 1 : 0.5,
            }}>
              <input type="checkbox" checked={ev._include} onChange={() => toggleItem(ev._id)}
                style={{width:15,height:15,accentColor:'var(--accent)',flexShrink:0}}/>

              <div style={{flex:1,overflow:'hidden',minWidth:0}}>
                <div style={{fontWeight:600,fontSize:'0.82rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',marginBottom:3}}>
                  {ev.title || '(no title)'}
                  {(ev.subjectUnrecognised || !ev.subject) && (
                    <span className="badge badge-amber" style={{marginLeft:6,fontSize:'0.65rem'}}>unassigned</span>
                  )}
                </div>
                <div style={{fontSize:'0.72rem',color:'var(--text-muted)'}}>{formatDate(ev)}</div>
              </div>

              {/* Subject selector */}
              <select
                className="select"
                style={{fontSize:'0.75rem',padding:'3px 6px',width:140,flexShrink:0}}
                value={ev._subject}
                onChange={e => updateSubject(ev._id, e.target.value)}>
                <option value="">Unassigned</option>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>

              {/* Type selector */}
              <select
                className="select"
                style={{fontSize:'0.75rem',padding:'3px 6px',width:130,flexShrink:0}}
                value={ev._type}
                onChange={e => updateType(ev._id, e.target.value)}>
                {SESSION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          ))}
        </div>

        {/* Mode selection */}
        <div style={{marginBottom:16}}>
          <label className="label">What should happen to your existing {existingCount} sessions?</label>
          <div style={{display:'flex',flexDirection:'column',gap:7}}>
            {[
              {val:'add',     label:'Add to existing calendar',   desc:'All current sessions are kept'},
              {val:'replace', label:'Replace existing calendar',   desc:'All current sessions are deleted first'},
            ].map(opt => (
              <button key={opt.val} onClick={() => setMode(opt.val)}
                style={{padding:'9px 14px',borderRadius:'var(--radius-md)',cursor:'pointer',textAlign:'left',width:'100%',
                  border:`2px solid ${mode===opt.val?'var(--accent)':'var(--border)'}`,
                  background:mode===opt.val?'rgba(124,58,237,0.1)':'var(--bg-surface)'}}>
                <span style={{fontWeight:600,fontSize:'0.875rem'}}>{opt.label}</span>
                <span style={{fontSize:'0.78rem',color:'var(--text-muted)',marginLeft:8}}>{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={() => onConfirm(included, mode)} disabled={!included.length}>
            <Check size={15}/> Import {included.length} session{included.length!==1?'s':''}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Add Session Modal ─────────────────────────────────────────────────────────
function AddSessionModal({ user, profile, selectedDate, onClose, onSave }) {
  const subjects = profile?.subjects?.map(s => s.name) || []
  const [form, setForm] = useState({
    subject: subjects[0] || '',
    type:    'Content Revision',
    date:    selectedDate ? format(selectedDate,'yyyy-MM-dd') : format(new Date(),'yyyy-MM-dd'),
    start:   '17:00',
    duration: 45,
    paper:   '',
    notes:   '',
  })

  async function submit(e) {
    e.preventDefault()
    const startDt = new Date(`${form.date}T${form.start}`)
    await onSave({
      ...form,
      duration:  parseInt(form.duration),
      title:     `${form.subject}${form.paper?' P'+form.paper:''} – ${form.type}`,
      startTime: startDt.toISOString(),
      endTime:   new Date(startDt.getTime() + parseInt(form.duration)*60000).toISOString(),
      completed: false,
      source:    'manual',
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Add session</span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button>
        </div>
        <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12}}>
          <div className="grid-2" style={{gap:10}}>
            <div><label className="label">Subject</label>
              <select className="select" value={form.subject} onChange={e=>setForm(f=>({...f,subject:e.target.value}))} required>
                <option value="">Select…</option>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select></div>
            <div><label className="label">Type</label>
              <select className="select" value={form.type} onChange={e=>setForm(f=>({...f,type:e.target.value}))}>
                {SESSION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select></div>
            <div><label className="label">Paper</label>
              <input className="input" placeholder="1, 2…" value={form.paper} onChange={e=>setForm(f=>({...f,paper:e.target.value}))}/></div>
            <div><label className="label">Date</label>
              <input className="input" type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} required/></div>
            <div><label className="label">Start time</label>
              <input className="input" type="time" value={form.start} onChange={e=>setForm(f=>({...f,start:e.target.value}))} required/></div>
            <div><label className="label">Duration (min)</label>
              <input className="input" type="number" min={15} max={300} value={form.duration} onChange={e=>setForm(f=>({...f,duration:e.target.value}))} required/></div>
          </div>
          <div><label className="label">Notes</label>
            <textarea className="textarea" style={{minHeight:55}} value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></div>
          <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ── Complete Modal ────────────────────────────────────────────────────────────
function CompleteModal({ session, onClose, onComplete }) {
  const [notes, setNotes] = useState('')
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Mark complete</span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button>
        </div>
        <p style={{marginBottom:12,fontWeight:500}}>{session.title}</p>
        <div className="form-group">
          <label className="label">Session notes (optional)</label>
          <textarea className="textarea" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="What did you cover? Any topics to revisit?"/>
        </div>
        <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={() => onComplete(session.id, notes)}>
            <CheckCircle2 size={15}/> Complete +50 XP
          </button>
        </div>
      </div>
    </div>
  )
}
