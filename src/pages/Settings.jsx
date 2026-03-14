// src/pages/Settings.jsx
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { updateUserProfile } from '../utils/firestore'
import { GCSE_SUBJECTS, ALEVEL_SUBJECTS, EXAM_BOARDS } from '../data/subjects'
import toast from 'react-hot-toast'
import { Sun, Moon, User, Bell, Shield, BookOpen, Plus, X, Trash2 } from 'lucide-react'

export default function Settings() {
  const { user, profile, refreshProfile, logout } = useAuth()
  const { theme, toggle } = useTheme()
  const [saving, setSaving] = useState(false)
  const [tab, setTab] = useState('profile')
  const [displayName, setDisplayName] = useState(profile?.displayName||'')
  const [username, setUsername] = useState(profile?.username||'')
  const [privacy, setPrivacy] = useState({
    profilePublic: profile?.settings?.profilePublic ?? true,
    friendsCanSeeGrades: profile?.settings?.friendsCanSeeGrades ?? true,
  })
  const [subjects, setSubjects] = useState(profile?.subjects||[])
  const [newSubj, setNewSubj] = useState({ name:'', board:'AQA', tier:'Higher', currentGrade:'', targetGrade:'9' })

  const subjectList = profile?.qualification==='A-Level' ? ALEVEL_SUBJECTS : GCSE_SUBJECTS

  async function saveProfile() {
    setSaving(true)
    await updateUserProfile(user.uid, { displayName, username: username.toLowerCase().replace(/\s/g,''), settings: { ...profile?.settings, ...privacy } })
    await refreshProfile()
    toast.success('Settings saved')
    setSaving(false)
  }

  async function saveSubjects() {
    setSaving(true)
    await updateUserProfile(user.uid, { subjects })
    await refreshProfile()
    toast.success('Subjects updated')
    setSaving(false)
  }

  function addSubj() {
    if (!newSubj.name) return
    setSubjects(s=>[...s,{...newSubj,id:Date.now().toString()}])
    setNewSubj({ name:'', board:'AQA', tier:'Higher', currentGrade:'', targetGrade:'9' })
  }

  return (
    <div className="fade-in" style={{maxWidth:640,margin:'0 auto'}}>
      <h2 style={{marginBottom:24}}>Settings</h2>

      <div className="tabs" style={{marginBottom:20}}>
        {['profile','subjects','appearance','privacy'].map(t=>(
          <button key={t} className={`tab${tab===t?' active':''}`} onClick={()=>setTab(t)}>
            {t.charAt(0).toUpperCase()+t.slice(1)}
          </button>
        ))}
      </div>

      {tab==='profile' && (
        <div className="card" style={{display:'flex',flexDirection:'column',gap:16}}>
          <h4>Profile settings</h4>
          <div className="form-group" style={{marginBottom:0}}><label className="label">Display name</label><input className="input" value={displayName} onChange={e=>setDisplayName(e.target.value)}/></div>
          <div className="form-group" style={{marginBottom:0}}><label className="label">Username</label><input className="input" value={username} onChange={e=>setUsername(e.target.value.toLowerCase().replace(/\s/g,''))} placeholder="your-username"/><span style={{fontSize:'0.78rem',color:'var(--text-muted)',marginTop:4}}>Profile URL: {window.location.origin}/u/{username||'yourname'}</span></div>
          <div className="form-group" style={{marginBottom:0}}><label className="label">Email</label><input className="input" value={user?.email||''} disabled style={{opacity:0.6}}/></div>
          <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
            <button className="btn btn-primary" onClick={saveProfile} disabled={saving}>{saving?'Saving…':'Save changes'}</button>
          </div>
        </div>
      )}

      {tab==='subjects' && (
        <div className="card" style={{display:'flex',flexDirection:'column',gap:16}}>
          <h4>Your subjects</h4>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {subjects.map((s,i)=>(
              <div key={s.id||i} style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                <span style={{flex:1,fontWeight:500,fontSize:'0.875rem'}}>{s.name}</span>
                <span className="badge badge-grey">{s.board}</span>
                <span className="badge badge-grey">{s.tier}</span>
                <div style={{display:'flex',gap:4,alignItems:'center'}}>
                  <span style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Grade:</span>
                  <input style={{width:40,padding:'2px 4px',borderRadius:4,border:'1px solid var(--border)',background:'var(--bg-input)',color:'var(--text-primary)',fontSize:'0.82rem',textAlign:'center'}} value={s.currentGrade} onChange={e=>setSubjects(ss=>ss.map((x,j)=>j===i?{...x,currentGrade:e.target.value}:x))}/>
                  <span style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>→</span>
                  <input style={{width:40,padding:'2px 4px',borderRadius:4,border:'1px solid var(--border)',background:'var(--bg-input)',color:'var(--text-primary)',fontSize:'0.82rem',textAlign:'center'}} value={s.targetGrade} onChange={e=>setSubjects(ss=>ss.map((x,j)=>j===i?{...x,targetGrade:e.target.value}:x))}/>
                </div>
                <button className="btn btn-ghost btn-icon btn-sm" style={{color:'var(--danger)'}} onClick={()=>setSubjects(ss=>ss.filter((_,j)=>j!==i))}><Trash2 size={14}/></button>
              </div>
            ))}
          </div>
          {/* Add */}
          <div style={{padding:12,background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:10}}>
            <div className="grid-2" style={{gap:8}}>
              <select className="select" value={newSubj.name} onChange={e=>setNewSubj(s=>({...s,name:e.target.value}))}><option value="">Subject…</option>{subjectList.map(s=><option key={s} value={s}>{s}</option>)}</select>
              <select className="select" value={newSubj.board} onChange={e=>setNewSubj(s=>({...s,board:e.target.value}))}>{EXAM_BOARDS.map(b=><option key={b} value={b}>{b}</option>)}</select>
            </div>
            <button className="btn btn-secondary btn-sm" onClick={addSubj} disabled={!newSubj.name}><Plus size={14}/> Add subject</button>
          </div>
          <button className="btn btn-primary" onClick={saveSubjects} disabled={saving}>{saving?'Saving…':'Save subjects'}</button>
        </div>
      )}

      {tab==='appearance' && (
        <div className="card" style={{display:'flex',flexDirection:'column',gap:16}}>
          <h4>Appearance</h4>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 16px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              {theme==='dark'?<Moon size={18}/>:<Sun size={18}/>}
              <div><div style={{fontWeight:600}}>{theme==='dark'?'Dark mode':'Light mode'}</div><div style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>Switch between dark and light themes</div></div>
            </div>
            <button className="btn btn-secondary btn-sm" onClick={toggle}>Toggle</button>
          </div>
        </div>
      )}

      {tab==='privacy' && (
        <div className="card" style={{display:'flex',flexDirection:'column',gap:16}}>
          <h4>Privacy settings</h4>
          {[
            {key:'profilePublic',label:'Public profile',desc:'Anyone can view your profile at your public URL'},
            {key:'friendsCanSeeGrades',label:'Friends can see grades',desc:'Friends can see your subject grades on the leaderboard'},
          ].map(setting=>(
            <div key={setting.key} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 16px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
              <div><div style={{fontWeight:600,fontSize:'0.9rem'}}>{setting.label}</div><div style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>{setting.desc}</div></div>
              <label style={{position:'relative',display:'inline-block',width:44,height:24,cursor:'pointer',flexShrink:0}}>
                <input type="checkbox" checked={privacy[setting.key]} onChange={e=>setPrivacy(p=>({...p,[setting.key]:e.target.checked}))} style={{opacity:0,width:0,height:0}}/>
                <span style={{position:'absolute',inset:0,background:privacy[setting.key]?'var(--accent)':'var(--bg-hover)',borderRadius:12,transition:'background 0.2s'}}/>
                <span style={{position:'absolute',top:3,left:privacy[setting.key]?22:3,width:18,height:18,background:'#fff',borderRadius:'50%',transition:'left 0.2s'}}/>
              </label>
            </div>
          ))}
          <button className="btn btn-primary" onClick={saveProfile} disabled={saving}>{saving?'Saving…':'Save privacy settings'}</button>
          <div className="divider"/>
          <button className="btn btn-danger" onClick={logout}>Sign out</button>
        </div>
      )}
    </div>
  )
}
