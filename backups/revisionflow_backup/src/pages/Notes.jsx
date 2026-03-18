// src/pages/Notes.jsx
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { saveNote, getNotes, deleteNote } from '../utils/firestore'
import { SUBJECT_COLOURS } from '../data/subjects'
import toast from 'react-hot-toast'
import { Plus, X, Trash2, BookOpen, Save } from 'lucide-react'
import { format } from 'date-fns'

export default function Notes() {
  const { user, profile } = useAuth()
  const [notes, setNotes] = useState([])
  const [selected, setSelected] = useState([])
  const [editing, setEditing] = useState(null)
  const [filter, setFilter] = useState('')
  const [showNew, setShowNew] = useState(false)
  const [newNote, setNewNote] = useState({ title:'', subject:'', content:'' })

  const subjects = profile?.subjects?.map(s=>s.name)||[]

  useEffect(() => { if(user) getNotes(user.uid, filter||null).then(setNotes) }, [user, filter])

  async function handleSave() {
    if (!editing?.title) return
    await saveNote(user.uid, editing)
    setEditing(e=>({...e}))
    getNotes(user.uid, filter||null).then(setNotes)
    toast.success('Note saved +10 XP')
  }

  async function handleNew(e) {
    e.preventDefault()
    await saveNote(user.uid, newNote)
    setNewNote({ title:'', subject:'', content:'' })
    setShowNew(false)
    getNotes(user.uid, filter||null).then(setNotes)
    toast.success('Note created')
  }

  async function handleDelete(id) {
    if (!confirm('Delete this note?')) return
    await deleteNote(user.uid, id)
    setNotes(ns=>ns.filter(n=>n.id!==id))
    if (editing?.id===id) setEditing(null)
  }

  async function handleBulkDelete() {
    if (!confirm(`Delete ${selected.length} note${selected.length!==1?'s':''}?`)) return
    await Promise.all(selected.map(id=>deleteNote(user.uid, id)))
    setNotes(ns=>ns.filter(n=>!selected.includes(n.id)))
    setSelected([])
    if (editing && selected.includes(editing.id)) setEditing(null)
    toast.success(`Deleted ${selected.length} note${selected.length!==1?'s':''}`)
  }

  function toggleSelect(id) { setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]) }

  const tsToDate = ts => ts?.seconds ? new Date(ts.seconds*1000) : ts ? new Date(ts) : null

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <h2>Notes</h2>
        <div style={{display:'flex',gap:8}}>
          {selected.length>0&&<button className="btn btn-danger btn-sm" onClick={handleBulkDelete}><Trash2 size={14}/> Delete {selected.length}</button>}
          <button className="btn btn-primary btn-sm" onClick={()=>setShowNew(true)}><Plus size={14}/> New note</button>
        </div>
      </div>

      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:16}}>
        <button className={`btn btn-sm ${!filter?'btn-primary':'btn-secondary'}`} onClick={()=>setFilter('')}>All</button>
        {subjects.map(s=><button key={s} className={`btn btn-sm ${filter===s?'btn-primary':'btn-secondary'}`} onClick={()=>setFilter(s)}>{s}</button>)}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'260px 1fr',gap:16,alignItems:'start'}}>
        {/* List */}
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          {notes.length===0&&<div className="empty-state" style={{padding:'24px 0'}}><BookOpen size={28} style={{opacity:0.3}}/><p style={{fontSize:'0.875rem'}}>No notes yet</p></div>}
          {notes.map(n=>{
            const d = tsToDate(n.updatedAt)
            const isSel = selected.includes(n.id)
            return (
              <div key={n.id} style={{display:'flex',alignItems:'center',gap:6,padding:'10px 12px',borderRadius:'var(--radius-md)',border:`1px solid ${editing?.id===n.id?'var(--accent)':isSel?'var(--accent)':'var(--border)'}`,background:editing?.id===n.id?'var(--bg-hover)':'var(--bg-card)',borderLeft:`3px solid ${SUBJECT_COLOURS[n.subject]||'var(--accent)'}`,cursor:'pointer'}}>
                <input type="checkbox" checked={isSel} onChange={()=>toggleSelect(n.id)}
                  onClick={e=>e.stopPropagation()} style={{width:14,height:14,accentColor:'var(--accent)',flexShrink:0}}/>
                <div style={{flex:1,overflow:'hidden',minWidth:0}} onClick={()=>setEditing({...n})}>
                  <div style={{fontWeight:600,fontSize:'0.85rem',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{n.title}</div>
                  <div style={{fontSize:'0.7rem',color:'var(--text-muted)'}}>{n.subject||'General'} · {d?format(d,'d MMM'):''}</div>
                </div>
                <button className="btn btn-ghost btn-icon btn-sm" style={{color:'var(--danger)',flexShrink:0}} onClick={e=>{e.stopPropagation();handleDelete(n.id)}}><Trash2 size={13}/></button>
              </div>
            )
          })}
        </div>

        {/* Editor */}
        <div className="card">
          {!editing ? (
            <div className="empty-state"><BookOpen size={36} style={{opacity:0.3}}/><p>Select a note to edit</p></div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10}}>
                <input className="input" style={{fontWeight:700,fontSize:'1.05rem',border:'none',background:'transparent',padding:'3px 0',flex:1}}
                  value={editing.title} onChange={e=>setEditing(n=>({...n,title:e.target.value}))} placeholder="Note title…"/>
                <div style={{display:'flex',gap:6}}>
                  <button className="btn btn-primary btn-sm" onClick={handleSave}><Save size={13}/> Save</button>
                  <button className="btn btn-ghost btn-icon btn-sm" style={{color:'var(--danger)'}} onClick={()=>handleDelete(editing.id)}><Trash2 size={14}/></button>
                </div>
              </div>
              {editing.subject&&<span className="badge badge-purple" style={{alignSelf:'flex-start'}}>{editing.subject}</span>}
              <textarea className="textarea" style={{minHeight:360,fontSize:'0.88rem',lineHeight:1.8,fontFamily:'var(--font-sans)'}}
                value={editing.content} onChange={e=>setEditing(n=>({...n,content:e.target.value}))} placeholder="Start writing…"/>
            </div>
          )}
        </div>
      </div>

      {showNew&&(
        <div className="modal-overlay" onClick={()=>setShowNew(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-header"><span className="modal-title">New note</span><button className="btn btn-ghost btn-icon" onClick={()=>setShowNew(false)}><X size={18}/></button></div>
            <form onSubmit={handleNew} style={{display:'flex',flexDirection:'column',gap:12}}>
              <div><label className="label">Title</label><input className="input" value={newNote.title} onChange={e=>setNewNote(n=>({...n,title:e.target.value}))} placeholder="e.g. Quadratic equations" required/></div>
              <div><label className="label">Subject</label>
                <select className="select" value={newNote.subject} onChange={e=>setNewNote(n=>({...n,subject:e.target.value}))}>
                  <option value="">None</option>{subjects.map(s=><option key={s} value={s}>{s}</option>)}
                </select></div>
              <div><label className="label">Content</label><textarea className="textarea" value={newNote.content} onChange={e=>setNewNote(n=>({...n,content:e.target.value}))} placeholder="Optional starting content…"/></div>
              <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}><button type="button" className="btn btn-secondary" onClick={()=>setShowNew(false)}>Cancel</button><button type="submit" className="btn btn-primary">Create</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
