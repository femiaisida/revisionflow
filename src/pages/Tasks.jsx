// src/pages/Tasks.jsx
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { addTask, getTasks, completeTask, deleteTask } from '../utils/firestore'
import toast from 'react-hot-toast'
import { Plus, X, CheckSquare, Square, Trash2 } from 'lucide-react'
import { format, isPast, isToday } from 'date-fns'

export default function Tasks() {
  const { user, profile } = useAuth()
  const [tasks, setTasks] = useState([])
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({ title:'', subject:'', dueDate:'', priority:'medium', notes:'' })
  const [filter, setFilter] = useState('pending')

  const subjects = profile?.subjects?.map(s=>s.name)||[]

  useEffect(() => { if(user) getTasks(user.uid).then(setTasks) }, [user])

  async function handleAdd(e) {
    e.preventDefault()
    await addTask(user.uid, form)
    getTasks(user.uid).then(setTasks)
    setForm({ title:'', subject:'', dueDate:'', priority:'medium', notes:'' })
    setShowAdd(false)
    toast.success('Task added')
  }

  async function handleToggle(task) {
    await completeTask(user.uid, task.id, !task.completed)
    setTasks(ts=>ts.map(t=>t.id===task.id?{...t,completed:!t.completed}:t))
    if (!task.completed) toast.success('Task completed! ✓')
  }

  async function handleDelete(id) {
    await deleteTask(user.uid, id)
    setTasks(ts=>ts.filter(t=>t.id!==id))
  }

  const visible = tasks.filter(t => filter==='all'?true:filter==='pending'?!t.completed:t.completed)
  const overdue = visible.filter(t=>t.dueDate&&isPast(new Date(t.dueDate))&&!isToday(new Date(t.dueDate))&&!t.completed)
  const dueSoon = visible.filter(t=>t.dueDate&&isToday(new Date(t.dueDate))&&!t.completed)
  const rest    = visible.filter(t=>!overdue.includes(t)&&!dueSoon.includes(t))

  const TaskItem = ({task}) => (
    <div style={{display:'flex',alignItems:'flex-start',gap:10,padding:'12px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:`1px solid ${task.completed?'var(--border)':isPast(new Date(task.dueDate||'9999'))&&!isToday(new Date(task.dueDate||'9999'))&&!task.completed?'var(--danger)':'var(--border)'}`,opacity:task.completed?0.6:1}}>
      <button className="btn btn-ghost btn-icon" style={{flexShrink:0,marginTop:1}} onClick={()=>handleToggle(task)}>
        {task.completed?<CheckSquare size={18} color="var(--success)"/>:<Square size={18}/>}
      </button>
      <div style={{flex:1,overflow:'hidden'}}>
        <div style={{fontWeight:600,fontSize:'0.9rem',textDecoration:task.completed?'line-through':'none'}}>{task.title}</div>
        <div style={{display:'flex',gap:6,marginTop:4,flexWrap:'wrap'}}>
          {task.subject && <span className="badge badge-purple">{task.subject}</span>}
          {task.dueDate && <span className={`badge badge-${isToday(new Date(task.dueDate))?'amber':isPast(new Date(task.dueDate))&&!task.completed?'red':'grey'}`}>
            {isToday(new Date(task.dueDate))?'Today':format(new Date(task.dueDate),'d MMM')}
          </span>}
          <span className={`badge badge-${task.priority==='high'?'red':task.priority==='medium'?'amber':'blue'}`}>{task.priority}</span>
        </div>
        {task.notes && <p style={{fontSize:'0.78rem',marginTop:4}}>{task.notes}</p>}
      </div>
      <button className="btn btn-ghost btn-icon btn-sm" onClick={()=>handleDelete(task.id)} style={{color:'var(--danger)',flexShrink:0}}><Trash2 size={15}/></button>
    </div>
  )

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <h2>Tasks</h2>
        <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}><Plus size={15}/> Add task</button>
      </div>
      <div className="tabs" style={{marginBottom:20}}>
        {['pending','completed','all'].map(f=><button key={f} className={`tab${filter===f?' active':''}`} onClick={()=>setFilter(f)}>{f.charAt(0).toUpperCase()+f.slice(1)}</button>)}
      </div>
      {overdue.length>0&&<><div style={{fontSize:'0.8rem',fontWeight:700,color:'var(--danger)',marginBottom:8,textTransform:'uppercase'}}>Overdue</div><div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:16}}>{overdue.map(t=><TaskItem key={t.id} task={t}/>)}</div></>}
      {dueSoon.length>0&&<><div style={{fontSize:'0.8rem',fontWeight:700,color:'var(--warning)',marginBottom:8,textTransform:'uppercase'}}>Due today</div><div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:16}}>{dueSoon.map(t=><TaskItem key={t.id} task={t}/>)}</div></>}
      {rest.length>0&&<div style={{display:'flex',flexDirection:'column',gap:8}}>{rest.map(t=><TaskItem key={t.id} task={t}/>)}</div>}
      {visible.length===0&&<div className="empty-state"><CheckSquare size={40} style={{opacity:0.3}}/><p>No tasks here</p><button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>Add a task</button></div>}

      {showAdd&&(
        <div className="modal-overlay" onClick={()=>setShowAdd(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-header"><span className="modal-title">Add task</span><button className="btn btn-ghost btn-icon" onClick={()=>setShowAdd(false)}><X size={18}/></button></div>
            <form onSubmit={handleAdd} style={{display:'flex',flexDirection:'column',gap:14}}>
              <div className="form-group" style={{marginBottom:0}}><label className="label">Task</label><input className="input" placeholder="e.g. Complete Chemistry Paper 2" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} required/></div>
              <div className="grid-2" style={{gap:10}}>
                <div className="form-group" style={{marginBottom:0}}><label className="label">Subject</label><select className="select" value={form.subject} onChange={e=>setForm(f=>({...f,subject:e.target.value}))}><option value="">None</option>{subjects.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
                <div className="form-group" style={{marginBottom:0}}><label className="label">Due date</label><input className="input" type="date" value={form.dueDate} onChange={e=>setForm(f=>({...f,dueDate:e.target.value}))}/></div>
                <div className="form-group" style={{marginBottom:0}}><label className="label">Priority</label><select className="select" value={form.priority} onChange={e=>setForm(f=>({...f,priority:e.target.value}))}>{['high','medium','low'].map(p=><option key={p} value={p}>{p.charAt(0).toUpperCase()+p.slice(1)}</option>)}</select></div>
              </div>
              <div className="form-group" style={{marginBottom:0}}><label className="label">Notes</label><textarea className="textarea" style={{minHeight:60}} value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></div>
              <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}><button type="button" className="btn btn-secondary" onClick={()=>setShowAdd(false)}>Cancel</button><button type="submit" className="btn btn-primary">Add task</button></div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
