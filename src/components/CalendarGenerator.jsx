// src/components/CalendarGenerator.jsx
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { addDoc, collection, serverTimestamp, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { generateSchedule, buildSubjectsFromProfile, SCHEDULE_DEFAULTS } from '../utils/scheduler'
import { downloadICS, generateICS } from '../utils/calendar'
import { format, addMonths } from 'date-fns'
import toast from 'react-hot-toast'
import { Zap, Calendar, X, Check, ChevronRight, Download, Trash2 } from 'lucide-react'

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

export default function CalendarGenerator({ onClose, onGenerated }) {
  const { user, profile } = useAuth()
  const [step,     setStep]    = useState(0)
  const [loading,  setLoading] = useState(false)
  const [preview,  setPreview] = useState(null)  // generated sessions preview

  // Preferences
  const [startDate,     setStartDate]     = useState(format(new Date(),'yyyy-MM-dd'))
  const [endDate,       setEndDate]       = useState(
    profile?.examDates?.length
      ? format(new Date(Math.max(...(profile.examDates||[]).map(e=>new Date(e.examDate)))),'yyyy-MM-dd')
      : format(addMonths(new Date(),3),'yyyy-MM-dd')
  )
  const [contentRatio,  setContentRatio]  = useState(2)
  const [examRatio,     setExamRatio]     = useState(1)
  const [tuesdayCap,    setTuesdayCap]    = useState(true)
  const [extendedDate,  setExtendedDate]  = useState('')
  const [replaceMode,   setReplaceMode]   = useState('ask')  // 'ask'|'replace'|'add'
  const [replaceChoice, setReplaceChoice] = useState(null)   // null|'replace'|'add'

  // Availability from profile, editable
  const defaultAvail = profile?.availability || Object.fromEntries(
    DAYS.map(d => [d, { enabled: d!=='Sunday', startTime: d==='Wednesday'?'16:00':d==='Saturday'?'12:00':'17:00', endTime:'21:00' }])
  )
  const [availability, setAvailability] = useState(defaultAvail)

  function generate() {
    const subjects = buildSubjectsFromProfile(profile)
    if (!subjects.length) { toast.error('Add subjects first'); return }

    const sessions = generateSchedule({
      subjects,
      availability,
      startDate: new Date(startDate),
      endDate:   new Date(endDate),
      holidays:  [],
      contentRatio,
      examRatio,
      tuesdayCap,
      extendedFromDate: extendedDate ? new Date(extendedDate) : null,
    })
    setPreview(sessions)
    setStep(2)
  }

  async function saveToCalendar(mode) {
    setLoading(true)
    try {
      // If replacing, delete existing generated sessions
      if (mode === 'replace') {
        const snap = await getDocs(
          query(collection(db,'users',user.uid,'sessions'), where('source','==','generated'))
        )
        await Promise.all(snap.docs.map(d => deleteDoc(doc(db,'users',user.uid,'sessions',d.id))))
      }

      // Save new sessions
      const batch = preview.slice(0,500)  // Firestore batch limit safety
      for (const s of batch) {
        await addDoc(collection(db,'users',user.uid,'sessions'), {
          ...s,
          createdAt: serverTimestamp(),
        })
      }

      toast.success(`Added ${batch.length} sessions to your calendar! 🎉`)
      onGenerated?.()
      onClose()
    } catch(err) {
      toast.error('Failed to save: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleSave() {
    if (replaceMode === 'replace') { await saveToCalendar('replace'); return }
    if (replaceMode === 'add')     { await saveToCalendar('add');     return }
    // ask mode
    setStep(3)
  }

  // Stats from preview
  const previewStats = preview ? {
    total:    preview.length,
    content:  preview.filter(s=>s.type==='Content Revision').length,
    exam:     preview.filter(s=>s.type==='Exam Practice').length,
    emergency:preview.filter(s=>s.isEmergency).length,
    subjects: [...new Set(preview.map(s=>s.subject))].length,
  } : null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{maxWidth:580}} onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title" style={{display:'flex',alignItems:'center',gap:8}}>
            <Zap size={16} color="var(--accent-light)"/> Generate Revision Schedule
          </span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button>
        </div>

        {/* Step 0 — Dates */}
        {step===0 && (
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            <p style={{fontSize:'0.875rem'}}>
              Generates a full revision schedule using the same rules as your personal calendar —
              paper rotation, 2:1 ratio, emergency sessions, pre-exam locking and more.
            </p>
            <div className="grid-2" style={{gap:12}}>
              <div><label className="label">Start date</label>
                <input className="input" type="date" value={startDate} onChange={e=>setStartDate(e.target.value)}/></div>
              <div><label className="label">End date</label>
                <input className="input" type="date" value={endDate} onChange={e=>setEndDate(e.target.value)}/></div>
              <div><label className="label">Content sessions per cycle</label>
                <select className="select" value={contentRatio} onChange={e=>setContentRatio(parseInt(e.target.value))}>
                  {[1,2,3].map(n=><option key={n} value={n}>{n}</option>)}
                </select></div>
              <div><label className="label">Exam practice per cycle</label>
                <select className="select" value={examRatio} onChange={e=>setExamRatio(parseInt(e.target.value))}>
                  {[1,2].map(n=><option key={n} value={n}>{n}</option>)}
                </select></div>
              <div><label className="label">Extended end time from (optional)</label>
                <input className="input" type="date" value={extendedDate} onChange={e=>setExtendedDate(e.target.value)}/>
                <span style={{fontSize:'0.72rem',color:'var(--text-muted)',display:'block',marginTop:3}}>Sessions end at 22:00 from this date onwards</span></div>
              <div style={{display:'flex',alignItems:'center',gap:8,paddingTop:20}}>
                <input type="checkbox" checked={tuesdayCap} onChange={e=>setTuesdayCap(e.target.checked)}
                  style={{width:16,height:16,accentColor:'var(--accent)'}}/>
                <label style={{fontSize:'0.875rem',fontWeight:500}}>Tuesday 1-session cap (before extended date)</label>
              </div>
            </div>
            <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
              <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
              <button className="btn btn-primary" onClick={()=>setStep(1)}>Next <ChevronRight size={15}/></button>
            </div>
          </div>
        )}

        {/* Step 1 — Availability */}
        {step===1 && (
          <div>
            <h4 style={{marginBottom:12}}>Confirm your availability</h4>
            <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:16}}>
              {DAYS.map(day=>(
                <div key={day} style={{display:'flex',alignItems:'center',gap:8,padding:'7px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                  <input type="checkbox" checked={availability[day]?.enabled||false}
                    onChange={e=>setAvailability(a=>({...a,[day]:{...a[day],enabled:e.target.checked}}))}
                    style={{width:15,height:15,accentColor:'var(--accent)',flexShrink:0}}/>
                  <span style={{width:92,fontWeight:500,fontSize:'0.85rem',flexShrink:0}}>{day}</span>
                  {availability[day]?.enabled ? (
                    <>
                      <input type="time" className="input" style={{flex:1,padding:'3px 6px'}}
                        value={availability[day]?.startTime||'17:00'}
                        onChange={e=>setAvailability(a=>({...a,[day]:{...a[day],startTime:e.target.value}}))}/>
                      <span style={{color:'var(--text-muted)',fontSize:'0.78rem'}}>–</span>
                      <input type="time" className="input" style={{flex:1,padding:'3px 6px'}}
                        value={availability[day]?.endTime||'21:00'}
                        onChange={e=>setAvailability(a=>({...a,[day]:{...a[day],endTime:e.target.value}}))}/>
                    </>
                  ) : <span style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Rest day</span>}
                </div>
              ))}
            </div>
            <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
              <button className="btn btn-secondary" onClick={()=>setStep(0)}>Back</button>
              <button className="btn btn-primary" onClick={generate}>
                <Zap size={15}/> Generate schedule
              </button>
            </div>
          </div>
        )}

        {/* Step 2 — Preview */}
        {step===2 && previewStats && (
          <div>
            <h4 style={{marginBottom:12}}>Schedule preview</h4>
            <div className="grid-4" style={{gap:8,marginBottom:16}}>
              {[
                {l:'Total',v:previewStats.total,c:'var(--accent-light)'},
                {l:'Content',v:previewStats.content,c:'var(--purple-300)'},
                {l:'Exam practice',v:previewStats.exam,c:'var(--info)'},
                {l:'Emergency',v:previewStats.emergency,c:'var(--danger)'},
              ].map(s=>(
                <div key={s.l} style={{padding:'8px 10px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',textAlign:'center'}}>
                  <div style={{fontWeight:800,fontSize:'1.3rem',color:s.c}}>{s.v}</div>
                  <div style={{fontSize:'0.68rem',color:'var(--text-muted)'}}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* First 5 sessions preview */}
            <div style={{maxHeight:180,overflowY:'auto',marginBottom:14}}>
              {preview.slice(0,8).map((s,i)=>(
                <div key={i} style={{display:'flex',gap:10,padding:'5px 10px',borderBottom:'1px solid var(--border)',fontSize:'0.8rem',alignItems:'center'}}>
                  <span style={{color:'var(--text-muted)',flexShrink:0,minWidth:70}}>{s.date}</span>
                  <span style={{color:'var(--text-muted)',flexShrink:0}}>{s.start}</span>
                  <span style={{flex:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',color:s.isEmergency?'var(--danger)':'var(--text-primary)'}}>{s.title}</span>
                </div>
              ))}
              {preview.length>8&&<div style={{padding:'4px 10px',fontSize:'0.75rem',color:'var(--text-muted)'}}>...and {preview.length-8} more sessions</div>}
            </div>

            <div style={{display:'flex',gap:8,justifyContent:'space-between',flexWrap:'wrap'}}>
              <button className="btn btn-secondary btn-sm" onClick={()=>downloadICS(preview,'revisionflow-schedule.ics')}>
                <Download size={13}/> Download ICS
              </button>
              <div style={{display:'flex',gap:8}}>
                <button className="btn btn-secondary" onClick={()=>setStep(0)}>Back</button>
                <button className="btn btn-primary" onClick={handleSave} disabled={loading}>
                  {loading?'Saving…':'Add to calendar'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 — Replace or add */}
        {step===3 && (
          <div>
            <h4 style={{marginBottom:12}}>Add to existing calendar?</h4>
            <p style={{marginBottom:16,fontSize:'0.875rem'}}>You already have sessions in your calendar. What would you like to do?</p>
            <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:20}}>
              {[
                {val:'replace',label:'Replace all generated sessions',desc:'Removes old auto-generated sessions and replaces with the new schedule',icon:'🔄'},
                {val:'add',label:'Add to existing calendar',desc:'Keeps all current sessions and adds the new ones on top',icon:'➕'},
              ].map(opt=>(
                <button key={opt.val} onClick={()=>setReplaceChoice(opt.val)}
                  style={{padding:'12px 14px',borderRadius:'var(--radius-md)',border:`2px solid ${replaceChoice===opt.val?'var(--accent)':'var(--border)'}`,background:replaceChoice===opt.val?'rgba(124,58,237,0.1)':'var(--bg-surface)',textAlign:'left',cursor:'pointer'}}>
                  <div style={{fontWeight:600,fontSize:'0.9rem',marginBottom:3}}>{opt.icon} {opt.label}</div>
                  <div style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>{opt.desc}</div>
                </button>
              ))}
            </div>
            <div style={{marginBottom:14}}>
              <label style={{display:'flex',alignItems:'center',gap:8,fontSize:'0.875rem',cursor:'pointer'}}>
                <input type="checkbox" checked={replaceMode!=='ask'}
                  onChange={e=>setReplaceMode(e.target.checked?(replaceChoice||'add'):'ask')}
                  style={{accentColor:'var(--accent)'}}/>
                Remember my choice (don't ask again)
              </label>
            </div>
            <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
              <button className="btn btn-secondary" onClick={()=>setStep(2)}>Back</button>
              <button className="btn btn-primary" onClick={()=>saveToCalendar(replaceChoice||'add')} disabled={loading||!replaceChoice}>
                {loading?'Saving…':<><Check size={15}/> Confirm</>}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
