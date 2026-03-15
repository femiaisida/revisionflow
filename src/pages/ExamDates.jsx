// src/pages/ExamDates.jsx
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { updateUserProfile } from '../utils/firestore'
import { countdownLabel, countdownUrgency } from '../utils/calendar'
import { EXAM_BOARDS } from '../data/subjects'
import { isTiered, getExamDates } from '../data/examDates2026'
import toast from 'react-hot-toast'
import { Plus, X, Clock, Trash2, Check } from 'lucide-react'
import { format, differenceInDays } from 'date-fns'

export default function ExamDates() {
  const { user, profile, refreshProfile } = useAuth()
  const [showAdd,   setShowAdd]   = useState(false)
  const [selected,  setSelected]  = useState([])
  const [form, setForm] = useState({ subject:'', board:'AQA', tier:'N/A', paper:'1', paperName:'', examDate:'' })

  // Auto-fill state
  const [autoSubj,    setAutoSubj]    = useState({ name:'', board:'AQA', tier:'N/A' })
  const [autoMatches, setAutoMatches] = useState([])

  const subjects  = profile?.subjects || []
  const examDates = (profile?.examDates||[]).sort((a,b)=>new Date(a.examDate)-new Date(b.examDate))

  // Auto-lookup whenever subject/board/tier changes
  useEffect(() => {
    if (!autoSubj.name) { setAutoMatches([]); return }
    const matches = getExamDates(autoSubj.name, autoSubj.board, autoSubj.tier)
    setAutoMatches(matches)
  }, [autoSubj.name, autoSubj.board, autoSubj.tier])

  async function handleAutoFillAdd() {
    if (!autoMatches.length) return
    const existing = profile?.examDates||[]
    const newDates = autoMatches.map(m=>({
      id: `${m.board}-${m.subject}-${m.tier}-P${m.paper}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      subject:m.subject, board:m.board, tier:m.tier,
      paper:String(m.paper), paperName:m.paperName, examDate:m.date,
    }))
    await updateUserProfile(user.uid,{examDates:[...existing,...newDates]})
    await refreshProfile()
    setAutoSubj({name:'',board:'AQA',tier:'N/A'})
    setAutoMatches([])
    toast.success(`Added ${newDates.length} exam date${newDates.length!==1?'s':''}`)
  }

  async function handleAdd(e) {
    e.preventDefault()
    const updated = [...(profile?.examDates||[]),{...form,id:Date.now().toString()}]
    await updateUserProfile(user.uid,{examDates:updated})
    await refreshProfile()
    setForm({subject:'',board:'AQA',tier:'N/A',paper:'1',paperName:'',examDate:''})
    setShowAdd(false)
    toast.success('Exam date added')
  }

  async function handleDelete(id) {
    const updated = (profile?.examDates||[]).filter(e=>e.id!==id)
    await updateUserProfile(user.uid,{examDates:updated})
    await refreshProfile()
  }

  async function handleBulkDelete() {
    const updated = (profile?.examDates||[]).filter(e=>!selected.includes(e.id))
    await updateUserProfile(user.uid,{examDates:updated})
    await refreshProfile()
    setSelected([])
    toast.success(`Deleted ${selected.length} exam date${selected.length!==1?'s':''}`)
  }

  function toggleSelect(id) { setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]) }

  const urgStyle = u => u==='urgent'
    ? {background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.25)'}
    : u==='soon'
    ? {background:'rgba(245,158,11,0.06)',border:'1px solid rgba(245,158,11,0.2)'}
    : {background:'var(--bg-surface)',border:'1px solid var(--border)'}

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <div><h2>Exam Dates</h2><p>Countdowns to your final exams</p></div>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          {selected.length>0&&<button className="btn btn-danger btn-sm" onClick={handleBulkDelete}><Trash2 size={14}/> Delete {selected.length}</button>}
          <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}><Plus size={14}/> Add manually</button>
        </div>
      </div>

      {/* Auto-fill panel — always visible */}
      <div className="card" style={{marginBottom:20}}>
        <h4 style={{marginBottom:4}}>Auto-fill from 2026 timetable</h4>
        <p style={{fontSize:'0.82rem',marginBottom:14}}>Select a subject and board — dates appear automatically.</p>
        <div className="grid-2" style={{gap:10,marginBottom:autoMatches.length?12:0}}>
          <div><label className="label">Subject</label>
            <select className="select" value={autoSubj.name}
              onChange={e=>setAutoSubj(s=>({...s,name:e.target.value,tier:isTiered(e.target.value)?'Higher':'N/A'}))}>
              <option value="">Select subject…</option>
              {subjects.map(s=><option key={s.name} value={s.name}>{s.name}</option>)}
            </select></div>
          <div><label className="label">Board</label>
            <select className="select" value={autoSubj.board} onChange={e=>setAutoSubj(s=>({...s,board:e.target.value}))}>
              {EXAM_BOARDS.map(b=><option key={b} value={b}>{b}</option>)}
            </select></div>
          {autoSubj.name&&isTiered(autoSubj.name)&&(
            <div><label className="label">Tier</label>
              <select className="select" value={autoSubj.tier} onChange={e=>setAutoSubj(s=>({...s,tier:e.target.value}))}>
                <option value="Higher">Higher</option>
                <option value="Foundation">Foundation</option>
              </select></div>
          )}
        </div>

        {autoSubj.name && autoMatches.length===0 && (
          <p style={{fontSize:'0.82rem',color:'var(--text-muted)'}}>No 2026 dates found for {autoSubj.name} ({autoSubj.board}). Try a different board or add manually.</p>
        )}

        {autoMatches.length>0&&(
          <>
            <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:10}}>
              {autoMatches.map(m=>(
                <div key={m.paper} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'7px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',fontSize:'0.875rem'}}>
                  <span>Paper {m.paper}{m.paperName?` — ${m.paperName}`:''}</span>
                  <span style={{fontWeight:600}}>{format(new Date(m.date),'d MMM yyyy')}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-primary btn-sm" onClick={handleAutoFillAdd}>
              <Check size={14}/> Add all {autoMatches.length} dates
            </button>
          </>
        )}
      </div>

      {examDates.length===0 ? (
        <div className="empty-state">
          <Clock size={48} style={{opacity:0.3}}/><h4>No exam dates yet</h4>
          <p>Use the auto-fill above to add your 2026 dates instantly</p>
        </div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          {examDates.map(e=>{
            const days    = differenceInDays(new Date(e.examDate),new Date())
            const urgency = countdownUrgency(e.examDate)
            const isSel   = selected.includes(e.id)
            return (
              <div key={e.id} style={{padding:'13px 16px',borderRadius:'var(--radius-lg)',display:'flex',alignItems:'center',gap:14,...urgStyle(urgency),outline:isSel?'2px solid var(--accent)':'none'}}>
                <input type="checkbox" checked={isSel} onChange={()=>toggleSelect(e.id)} style={{width:15,height:15,accentColor:'var(--accent)',flexShrink:0}}/>
                <div style={{flex:1}}>
                  <div style={{display:'flex',alignItems:'center',gap:7,marginBottom:3}}>
                    <span style={{fontWeight:700}}>{e.subject}</span>
                    <span className="badge badge-grey">{e.board}</span>
                    {e.tier&&e.tier!=='N/A'&&<span className="badge badge-purple">{e.tier}</span>}
                    <span className="badge badge-grey">Paper {e.paper}</span>
                  </div>
                  {e.paperName&&<div style={{fontSize:'0.8rem',color:'var(--text-secondary)',marginBottom:2}}>{e.paperName}</div>}
                  <div style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>{days<0?'Completed':'Exam on'} {format(new Date(e.examDate),'EEEE, d MMMM yyyy')}</div>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <div style={{textAlign:'center',minWidth:44}}>
                    <div style={{fontSize:'1.5rem',fontWeight:800,lineHeight:1,color:urgency==='urgent'?'var(--danger)':urgency==='soon'?'var(--warning)':'var(--accent-light)'}}>{days<0?'✓':days}</div>
                    <div style={{fontSize:'0.68rem',color:'var(--text-muted)',marginTop:1}}>{days<0?'done':days===0?'TODAY':days===1?'day':'days'}</div>
                  </div>
                  <button className="btn btn-ghost btn-icon btn-sm" onClick={()=>handleDelete(e.id)} style={{color:'var(--danger)'}}><Trash2 size={14}/></button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {showAdd&&(
        <div className="modal-overlay" onClick={()=>setShowAdd(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-header"><span className="modal-title">Add exam date manually</span><button className="btn btn-ghost btn-icon" onClick={()=>setShowAdd(false)}><X size={18}/></button></div>
            <form onSubmit={handleAdd} style={{display:'flex',flexDirection:'column',gap:12}}>
              <div className="grid-2" style={{gap:10}}>
                <div><label className="label">Subject</label><select className="select" value={form.subject} onChange={e=>setForm(f=>({...f,subject:e.target.value}))} required><option value="">Select…</option>{subjects.map(s=><option key={s.name} value={s.name}>{s.name}</option>)}</select></div>
                <div><label className="label">Board</label><select className="select" value={form.board} onChange={e=>setForm(f=>({...f,board:e.target.value}))}>{EXAM_BOARDS.map(b=><option key={b} value={b}>{b}</option>)}</select></div>
                <div><label className="label">Paper</label><select className="select" value={form.paper} onChange={e=>setForm(f=>({...f,paper:e.target.value}))}>{['1','2','3','4'].map(p=><option key={p} value={p}>Paper {p}</option>)}</select></div>
                <div><label className="label">Exam date</label><input className="input" type="date" value={form.examDate} onChange={e=>setForm(f=>({...f,examDate:e.target.value}))} required/></div>
              </div>
              <div><label className="label">Paper name (optional)</label><input className="input" placeholder="e.g. Non-Calculator" value={form.paperName} onChange={e=>setForm(f=>({...f,paperName:e.target.value}))}/></div>
              <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}><button type="button" className="btn btn-secondary" onClick={()=>setShowAdd(false)}>Cancel</button><button type="submit" className="btn btn-primary">Add</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
