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
  const [selected, setSelected] = useState(null)
  const [editing, setEditing] = useState(null)
  const [filter, setFilter] = useState('')
  const [showNew, setShowNew] = useState(false)
  const [newNote, setNewNote] = useState({ title:'', subject:'', content:'' })

  const subjects = profile?.subjects?.map(s=>s.name)||[]

  useEffect(() => { if(user) getNotes(user.uid, filter||null).then(setNotes) }, [user, filter])

  async function handleSave() {
    if (!editing?.title) return
    const id = await saveNote(user.uid, editing)
    setEditing(null)
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
    if (selected?.id===id) setSelected(null)
  }

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <h2>Notes</h2>
        <button className="btn btn-primary btn-sm" onClick={()=>setShowNew(true)}><Plus size={15}/> New note</button>
      </div>

      {/* Subject filter */}
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:20}}>
        <button className={`btn btn-sm ${!filter?'btn-primary':'btn-secondary'}`} onClick={()=>setFilter('')}>All</button>
        {subjects.map(s=><button key={s} className={`btn btn-sm ${filter===s?'btn-primary':'btn-secondary'}`} onClick={()=>setFilter(s)}>{s}</button>)}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'260px 1fr',gap:20,alignItems:'start'}}>
        {/* Note list */}
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {notes.length===0&&<div className="empty-state" style={{padding:'24px 0'}}><BookOpen size={32} style={{opacity:0.3}}/><p>No notes yet</p></div>}
          {notes.map(n=>(
            <div key={n.id} className="card" style={{cursor:'pointer',padding:12,borderLeft:`3px solid ${SUBJECT_COLOURS[n.subject]||'var(--accent)'}`,background:selected?.id===n.id?'var(--bg-hover)':'var(--bg-card)'}} onClick={()=>{setSelected(n);setEditing({...n})}}>
              <div style={{fontWeight:600,fontSize:'0.875rem',marginBottom:2,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{n.title}</div>
              <div style={{display:'flex',gap:6,alignItems:'center'}}>
                {n.subject&&<span style={{fontSize:'0.72rem',color:'var(--text-muted)'}}>{n.subject}</span>}
                <span style={{fontSize:'0.7rem',color:'var(--text-muted)',marginLeft:'auto'}}>{n.updatedAt?format(new Date(n.updatedAt.seconds?n.updatedAt.seconds*1000:n.updatedAt),'d MMM'):''}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="card">
          {!editing ? (
            <div className="empty-state"><BookOpen size={40} style={{opacity:0.3}}/><p>Select a note to view and edit</p></div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
                <input className="input" style={{fontWeight:700,fontSize:'1.1rem',border:'none',background:'transparent',padding:'4px 0',flex:1}} value={editing.title} onChange={e=>setEditing(n=>({...n,title:e.target.value}))} placeholder="Note title…"/>
                <div style={{display:'flex',gap:6}}>
                  <button className="btn btn-primary btn-sm" onClick={handleSave}><Save size={14}/> Save</button>
                  <button className="btn btn-ghost btn-icon btn-sm" onClick={()=>handleDelete(editing.id)} style={{color:'var(--danger)'}}><Trash2 size={15}/></button>
                </div>
              </div>
              {editing.subject&&<span className="badge badge-purple" style={{alignSelf:'flex-start'}}>{editing.subject}</span>}
              <textarea className="textarea" style={{minHeight:380,fontSize:'0.9rem',lineHeight:1.8,fontFamily:'var(--font-sans)'}} value={editing.content} onChange={e=>setEditing(n=>({...n,content:e.target.value}))} placeholder="Start writing your notes…"/>
            </div>
          )}
        </div>
      </div>

      {showNew&&(
        <div className="modal-overlay" onClick={()=>setShowNew(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-header"><span className="modal-title">New note</span><button className="btn btn-ghost btn-icon" onClick={()=>setShowNew(false)}><X size={18}/></button></div>
            <form onSubmit={handleNew} style={{display:'flex',flexDirection:'column',gap:14}}>
              <div className="form-group" style={{marginBottom:0}}><label className="label">Title</label><input className="input" value={newNote.title} onChange={e=>setNewNote(n=>({...n,title:e.target.value}))} placeholder="e.g. Quadratic equations" required/></div>
              <div className="form-group" style={{marginBottom:0}}><label className="label">Subject</label><select className="select" value={newNote.subject} onChange={e=>setNewNote(n=>({...n,subject:e.target.value}))}><option value="">None</option>{subjects.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
              <div className="form-group" style={{marginBottom:0}}><label className="label">Initial content</label><textarea className="textarea" value={newNote.content} onChange={e=>setNewNote(n=>({...n,content:e.target.value}))} placeholder="Optional starting content…"/></div>
              <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}><button type="button" className="btn btn-secondary" onClick={()=>setShowNew(false)}>Cancel</button><button type="submit" className="btn btn-primary">Create note</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
