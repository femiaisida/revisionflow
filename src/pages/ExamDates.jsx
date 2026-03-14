// src/pages/ExamDates.jsx
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { updateUserProfile } from '../utils/firestore'
import { countdownLabel, countdownUrgency } from '../utils/calendar'
import { EXAM_BOARDS } from '../data/subjects'
import toast from 'react-hot-toast'
import { Plus, X, Clock, Trash2 } from 'lucide-react'
import { format, differenceInDays } from 'date-fns'

export default function ExamDates() {
  const { user, profile, refreshProfile } = useAuth()
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({ subject:'', board:'AQA', paper:'1', paperName:'', examDate:'' })

  const subjects = profile?.subjects?.map(s=>s.name)||[]
  const examDates = (profile?.examDates||[]).sort((a,b)=>new Date(a.examDate)-new Date(b.examDate))

  async function handleAdd(e) {
    e.preventDefault()
    const updated = [...(profile?.examDates||[]), { ...form, id: Date.now().toString() }]
    await updateUserProfile(user.uid, { examDates: updated })
    await refreshProfile()
    setForm({ subject:'', board:'AQA', paper:'1', paperName:'', examDate:'' })
    setShowAdd(false)
    toast.success('Exam date added')
  }

  async function handleDelete(id) {
    const updated = (profile?.examDates||[]).filter(e=>e.id!==id)
    await updateUserProfile(user.uid, { examDates: updated })
    await refreshProfile()
  }

  const urgencyStyle = u => u==='urgent'?{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)'}:u==='soon'?{background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.2)'}:{background:'var(--bg-surface)',border:'1px solid var(--border)'}

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <div><h2>Exam Dates</h2><p>Countdowns to your final exams</p></div>
        <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}><Plus size={15}/> Add exam</button>
      </div>

      {examDates.length===0 ? (
        <div className="empty-state"><Clock size={48} style={{opacity:0.3}}/><h4>No exam dates added</h4><p>Add your exam dates to get countdowns and prioritise revision</p><button className="btn btn-primary" onClick={()=>setShowAdd(true)}>Add first exam</button></div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {examDates.map(e => {
            const days = differenceInDays(new Date(e.examDate), new Date())
            const urgency = countdownUrgency(e.examDate)
            const label = countdownLabel(e.examDate)
            return (
              <div key={e.id} style={{padding:16,borderRadius:'var(--radius-lg)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,...urgencyStyle(urgency)}}>
                <div style={{flex:1}}>
                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:4}}>
                    <h4 style={{margin:0}}>{e.subject}</h4>
                    <span className="badge badge-grey">{e.board}</span>
                    <span className="badge badge-grey">Paper {e.paper}</span>
                  </div>
                  {e.paperName&&<div style={{fontSize:'0.82rem',color:'var(--text-secondary)',marginBottom:4}}>{e.paperName}</div>}
                  <div style={{fontSize:'0.82rem',color:'var(--text-muted)'}}>{days<0?'Completed':'Exam on'} {format(new Date(e.examDate),'EEEE, d MMMM yyyy')}</div>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div style={{textAlign:'center'}}>
                    <div style={{fontSize:'1.8rem',fontWeight:800,color:urgency==='urgent'?'var(--danger)':urgency==='soon'?'var(--warning)':'var(--accent-light)',lineHeight:1}}>{days<0?'✓':days}</div>
                    <div style={{fontSize:'0.72rem',color:'var(--text-muted)',marginTop:2}}>{days<0?'done':days===0?'TODAY':days===1?'day':'days'}</div>
                  </div>
                  <button className="btn btn-ghost btn-icon btn-sm" onClick={()=>handleDelete(e.id)} style={{color:'var(--danger)'}}><Trash2 size={15}/></button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {showAdd&&(
        <div className="modal-overlay" onClick={()=>setShowAdd(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-header"><span className="modal-title">Add exam date</span><button className="btn btn-ghost btn-icon" onClick={()=>setShowAdd(false)}><X size={18}/></button></div>
            <form onSubmit={handleAdd} style={{display:'flex',flexDirection:'column',gap:14}}>
              <div className="grid-2" style={{gap:10}}>
                <div className="form-group" style={{marginBottom:0}}><label className="label">Subject</label><select className="select" value={form.subject} onChange={e=>setForm(f=>({...f,subject:e.target.value}))} required><option value="">Select…</option>{subjects.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
                <div className="form-group" style={{marginBottom:0}}><label className="label">Exam board</label><select className="select" value={form.board} onChange={e=>setForm(f=>({...f,board:e.target.value}))}>{EXAM_BOARDS.map(b=><option key={b} value={b}>{b}</option>)}</select></div>
                <div className="form-group" style={{marginBottom:0}}><label className="label">Paper</label><select className="select" value={form.paper} onChange={e=>setForm(f=>({...f,paper:e.target.value}))}>{['1','2','3','4'].map(p=><option key={p} value={p}>Paper {p}</option>)}</select></div>
                <div className="form-group" style={{marginBottom:0}}><label className="label">Exam date</label><input className="input" type="date" value={form.examDate} onChange={e=>setForm(f=>({...f,examDate:e.target.value}))} required/></div>
              </div>
              <div className="form-group" style={{marginBottom:0}}><label className="label">Paper name (optional)</label><input className="input" placeholder="e.g. Listening, Paper 1H" value={form.paperName} onChange={e=>setForm(f=>({...f,paperName:e.target.value}))}/></div>
              <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}><button type="button" className="btn btn-secondary" onClick={()=>setShowAdd(false)}>Cancel</button><button type="submit" className="btn btn-primary">Add exam</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
