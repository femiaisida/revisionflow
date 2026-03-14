// src/pages/Onboarding.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import toast from 'react-hot-toast'
import { GCSE_SUBJECTS, ALEVEL_SUBJECTS, EXAM_BOARDS } from '../data/subjects'
import { Zap, Plus, X, ChevronRight, ChevronLeft, Check } from 'lucide-react'

const STEPS = ['Welcome', 'Qualification', 'Subjects', 'Starting Grades', 'Availability', 'Done']

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const DEFAULT_TIMES = {
  Monday:'17:00', Tuesday:'17:00', Wednesday:'16:00',
  Thursday:'17:00', Friday:'17:00', Saturday:'12:00', Sunday:'Rest day'
}

export default function Onboarding() {
  const { user, refreshProfile } = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)

  const [qual, setQual] = useState('GCSE')
  const [subjects, setSubjects] = useState([])
  const [newSubj, setNewSubj] = useState({ name:'', board:'AQA', tier:'Higher', currentGrade:'', targetGrade:'9' })
  const [startingGrades, setStartingGrades] = useState({})
  const [availability, setAvailability] = useState(
    Object.fromEntries(DAYS.map(d => [d, { enabled: d !== 'Sunday', startTime: DEFAULT_TIMES[d], endTime: '21:00' }]))
  )
  const [username, setUsername] = useState('')

  function addSubject() {
    if (!newSubj.name) return
    setSubjects(s => [...s, { ...newSubj, id: Date.now().toString() }])
    setNewSubj({ name:'', board:'AQA', tier:'Higher', currentGrade:'', targetGrade:'9' })
  }

  function removeSubject(id) { setSubjects(s => s.filter(x => x.id !== id)) }

  async function finish() {
    if (!user) return
    setLoading(true)
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        qualification: qual,
        subjects,
        startingGrades: Object.fromEntries(subjects.map(s => [s.name, s.currentGrade])),
        availability,
        username: username || user.uid.slice(0,8),
        onboardingComplete: true,
        updatedAt: serverTimestamp(),
      })
      await refreshProfile()
      navigate('/dashboard')
      toast.success('Welcome to RevisionFlow! 🎉')
    } catch (err) { toast.error(err.message) }
    finally { setLoading(false) }
  }

  const subjectList = qual === 'GCSE' ? GCSE_SUBJECTS : ALEVEL_SUBJECTS

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:24,background:'var(--bg-base)'}}>
      <div style={{width:'100%',maxWidth:560}}>
        {/* Logo */}
        <div style={{textAlign:'center',marginBottom:32}}>
          <div style={{width:48,height:48,borderRadius:12,background:'linear-gradient(135deg,#7c3aed,#a855f7)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px'}}>
            <Zap size={24} color="#fff"/>
          </div>
          <span style={{fontWeight:800,fontSize:'1.1rem'}}>RevisionFlow</span>
        </div>

        {/* Progress */}
        <div style={{display:'flex',gap:4,marginBottom:28}}>
          {STEPS.map((s,i) => (
            <div key={s} style={{flex:1,height:4,borderRadius:2,background:i<=step?'var(--accent)':'var(--bg-hover)',transition:'background 0.3s'}}/>
          ))}
        </div>

        <div className="card" style={{padding:32,minHeight:400}}>

          {/* Step 0: Welcome */}
          {step === 0 && (
            <div className="fade-in" style={{textAlign:'center'}}>
              <div style={{fontSize:'3rem',marginBottom:16}}>👋</div>
              <h2 style={{marginBottom:12}}>Let's set up your account</h2>
              <p style={{marginBottom:24}}>It takes about 3 minutes. We'll personalise your revision experience based on your subjects, exam dates, and availability.</p>
              <div className="form-group">
                <label className="label">Choose a username (optional)</label>
                <input className="input" placeholder="e.g. femi_revision" value={username} onChange={e=>setUsername(e.target.value.toLowerCase().replace(/\s/g,''))}/>
                <span style={{fontSize:'0.78rem',color:'var(--text-muted)',marginTop:4}}>Your public profile URL will be revisionflow.app/u/{username || 'yourname'}</span>
              </div>
            </div>
          )}

          {/* Step 1: Qualification */}
          {step === 1 && (
            <div className="fade-in">
              <h3 style={{marginBottom:8}}>What are you studying?</h3>
              <p style={{marginBottom:24}}>This sets the right subjects and grade boundaries.</p>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                {['GCSE','A-Level','Both'].map(q => (
                  <button key={q} onClick={()=>setQual(q)}
                    className="card"
                    style={{textAlign:'left',cursor:'pointer',border:`2px solid ${qual===q?'var(--accent)':'var(--border)'}`,background:qual===q?'rgba(124,58,237,0.1)':'var(--bg-card)',padding:16,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <div>
                      <div style={{fontWeight:600}}>{q}</div>
                      <div style={{fontSize:'0.82rem',color:'var(--text-muted)'}}>
                        {q==='GCSE'?'Grades 1–9, UK secondary'
                          :q==='A-Level'?'Grades A*–E, sixth form'
                          :'Mixed — studying both levels'}
                      </div>
                    </div>
                    {qual===q && <Check size={18} color="var(--accent-light)"/>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Subjects */}
          {step === 2 && (
            <div className="fade-in">
              <h3 style={{marginBottom:4}}>Add your subjects</h3>
              <p style={{marginBottom:20}}>Add each subject you're taking with your exam board and current grade.</p>

              {/* Subject list */}
              {subjects.length > 0 && (
                <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:16}}>
                  {subjects.map(s => (
                    <div key={s.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',background:'var(--bg-surface)',padding:'8px 12px',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                      <div>
                        <span style={{fontWeight:600,fontSize:'0.875rem'}}>{s.name}</span>
                        <span style={{fontSize:'0.78rem',color:'var(--text-muted)',marginLeft:8}}>{s.board} · {s.tier} · Grade {s.currentGrade||'?'} → {s.targetGrade}</span>
                      </div>
                      <button className="btn btn-ghost btn-icon btn-sm" onClick={()=>removeSubject(s.id)}>
                        <X size={14}/>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add subject form */}
              <div style={{background:'var(--bg-surface)',padding:16,borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                <div className="grid-2" style={{gap:10,marginBottom:10}}>
                  <div className="form-group" style={{marginBottom:0}}>
                    <label className="label">Subject</label>
                    <select className="select" value={newSubj.name} onChange={e=>setNewSubj(s=>({...s,name:e.target.value}))}>
                      <option value="">Select…</option>
                      {subjectList.map(s=><option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group" style={{marginBottom:0}}>
                    <label className="label">Exam board</label>
                    <select className="select" value={newSubj.board} onChange={e=>setNewSubj(s=>({...s,board:e.target.value}))}>
                      {EXAM_BOARDS.map(b=><option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div className="form-group" style={{marginBottom:0}}>
                    <label className="label">Tier</label>
                    <select className="select" value={newSubj.tier} onChange={e=>setNewSubj(s=>({...s,tier:e.target.value}))}>
                      {['Higher','Foundation','N/A'].map(t=><option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group" style={{marginBottom:0}}>
                    <label className="label">Current grade (mock)</label>
                    <select className="select" value={newSubj.currentGrade} onChange={e=>setNewSubj(s=>({...s,currentGrade:e.target.value}))}>
                      <option value="">Unknown</option>
                      {['9','8','7','6','5','4','3','2','1'].map(g=><option key={g} value={g}>{qual==='A-Level'?{9:'A*',8:'A',7:'B',6:'C',5:'D',4:'E'}[g]||g:g}</option>)}
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm" onClick={addSubject} disabled={!newSubj.name}>
                  <Plus size={15}/> Add subject
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Starting grades */}
          {step === 3 && (
            <div className="fade-in">
              <h3 style={{marginBottom:4}}>Confirm your starting grades</h3>
              <p style={{marginBottom:20}}>These are stored as your baseline so you can track improvement.</p>
              {subjects.length === 0 ? (
                <div className="empty-state"><div className="empty-icon">📚</div><p>No subjects added yet. Go back to add some.</p></div>
              ) : (
                <div style={{display:'flex',flexDirection:'column',gap:10}}>
                  {subjects.map(s => (
                    <div key={s.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                      <span style={{fontWeight:500,fontSize:'0.9rem'}}>{s.name}</span>
                      <select className="select" style={{width:'auto'}}
                        value={startingGrades[s.name]||s.currentGrade||''}
                        onChange={e=>setStartingGrades(g=>({...g,[s.name]:e.target.value}))}>
                        <option value="">Not sure</option>
                        {['9','8','7','6','5','4','3','2','1','U'].map(g=><option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 4: Availability */}
          {step === 4 && (
            <div className="fade-in">
              <h3 style={{marginBottom:4}}>When can you revise?</h3>
              <p style={{marginBottom:20}}>Used to generate your calendar. You can change this later.</p>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {DAYS.map(day => (
                  <div key={day} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                    <input type="checkbox" checked={availability[day].enabled}
                      onChange={e=>setAvailability(a=>({...a,[day]:{...a[day],enabled:e.target.checked}}))}
                      style={{width:16,height:16,accentColor:'var(--accent)',flexShrink:0}}/>
                    <span style={{width:90,fontWeight:500,fontSize:'0.875rem',flexShrink:0}}>{day}</span>
                    {availability[day].enabled && (
                      <>
                        <input type="time" className="input" style={{flex:1,padding:'4px 8px'}}
                          value={availability[day].startTime}
                          onChange={e=>setAvailability(a=>({...a,[day]:{...a[day],startTime:e.target.value}}))}/>
                        <span style={{color:'var(--text-muted)',fontSize:'0.8rem'}}>to</span>
                        <input type="time" className="input" style={{flex:1,padding:'4px 8px'}}
                          value={availability[day].endTime}
                          onChange={e=>setAvailability(a=>({...a,[day]:{...a[day],endTime:e.target.value}}))}/>
                      </>
                    )}
                    {!availability[day].enabled && <span style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>Rest day</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Done */}
          {step === 5 && (
            <div className="fade-in" style={{textAlign:'center'}}>
              <div style={{fontSize:'4rem',marginBottom:16}}>🎉</div>
              <h2 style={{marginBottom:12}}>You're all set!</h2>
              <p style={{marginBottom:8}}>
                You've added <strong>{subjects.length} subject{subjects.length!==1?'s':''}</strong>.
              </p>
              <p style={{marginBottom:24}}>Head to your dashboard to see your personalised revision calendar, start tracking past papers, and get AI advice.</p>
              <div style={{display:'flex',flexDirection:'column',gap:8,maxWidth:280,margin:'0 auto'}}>
                {subjects.slice(0,3).map(s=>(
                  <div key={s.id} style={{display:'flex',alignItems:'center',gap:8,fontSize:'0.875rem'}}>
                    <Check size={14} color="var(--success)"/>
                    <span>{s.name} ({s.board})</span>
                  </div>
                ))}
                {subjects.length>3 && <span style={{fontSize:'0.82rem',color:'var(--text-muted)'}}>+{subjects.length-3} more</span>}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{display:'flex',justifyContent:'space-between',marginTop:32}}>
            <button className="btn btn-secondary" onClick={()=>setStep(s=>s-1)} disabled={step===0} style={{visibility:step===0?'hidden':'visible'}}>
              <ChevronLeft size={16}/> Back
            </button>
            {step < 5 ? (
              <button className="btn btn-primary" onClick={()=>setStep(s=>s+1)}
                disabled={step===2 && subjects.length===0}>
                Continue <ChevronRight size={16}/>
              </button>
            ) : (
              <button className="btn btn-primary" onClick={finish} disabled={loading}>
                {loading ? 'Setting up…' : 'Go to dashboard'} <ChevronRight size={16}/>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
