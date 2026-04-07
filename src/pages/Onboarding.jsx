// src/pages/Onboarding.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { doc, updateDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { generateCalendarPlan } from '../utils/ai'
import { GCSE_SUBJECTS, ALEVEL_SUBJECTS, BTEC_L2_SUBJECTS, BTEC_L3_SUBJECTS, EXAM_BOARDS, getGradeOptions, getSubjectList } from '../data/subjects'
import { isTiered, EXAM_DATES_2026 } from '../data/examDates2026'
import { getAllTopicsFlat } from '../data/topics'
import toast from 'react-hot-toast'
import { Zap, Plus, X, ChevronRight, ChevronLeft, Check, Users, Brain } from 'lucide-react'

const STEPS = ['Welcome','Qualification','Subjects','Targets','Availability','AI Plan','Friends','Done']
const DAYS  = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const DEFAULT_TIMES = {
  Monday:'17:00', Tuesday:'17:00', Wednesday:'16:00',
  Thursday:'17:00', Friday:'17:00', Saturday:'12:00', Sunday:'Rest day',
}

export default function Onboarding() {
  const { user, refreshProfile } = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [saving, setSaving] = useState(false)
  const [aiLoading, setAiLoading] = useState(false)
  const [aiPlan, setAiPlan] = useState('')
  const [planDone, setPlanDone] = useState(false)

  const [qual, setQual] = useState('GCSE')
  const [subjects, setSubjects] = useState([])
  const [newSubj, setNewSubj] = useState({ name:'', board:'AQA', tier:'N/A', currentGrade:'', targetGrade:'' })
  const [globalTarget, setGlobalTarget] = useState(() => getGradeOptions('','GCSE','N/A')[0] || '9')

  React.useEffect(() => {
    const opts = getGradeOptions('', qual, 'N/A')
    setGlobalTarget(opts[0] || '9')
  }, [qual])

  const [availability, setAvailability] = useState(
    Object.fromEntries(DAYS.map(d => [d, { enabled: d!=='Sunday', startTime: DEFAULT_TIMES[d], endTime: '21:00' }]))
  )
  const [username, setUsername] = useState('')

  // Full subject list for the selected qualification — no filtering by exam dates.
  // Exam dates auto-fill where available; subjects without dates still work fine.
  const subjectList = qual==='A-Level' ? ALEVEL_SUBJECTS
    : qual==='BTEC-L2' ? BTEC_L2_SUBJECTS
    : qual==='BTEC-L3' ? BTEC_L3_SUBJECTS
    : GCSE_SUBJECTS

  const gradeOptions = getGradeOptions(newSubj.name, qual, newSubj.tier)
  const globalGradeOptions = getGradeOptions('', qual, 'N/A')

  function onSubjName(name) {
    setNewSubj(s => ({ ...s, name, tier: isTiered(name) ? 'Higher' : 'N/A' }))
  }

  function addSubject() {
    if (!newSubj.name) return
    const opts = getGradeOptions(newSubj.name, qual, newSubj.tier)
    const target = newSubj.targetGrade || (opts.includes(globalTarget) ? globalTarget : opts[0])
    setSubjects(s => [...s, { ...newSubj, targetGrade: target, id: Date.now().toString() }])
    setNewSubj({ name:'', board:'AQA', tier:'N/A', currentGrade:'', targetGrade:'' })
  }

  function updateSubj(id, field, val) { setSubjects(s => s.map(x => x.id===id ? {...x,[field]:val} : x)) }

  async function generatePlan() {
    setAiLoading(true)
    const res = await generateCalendarPlan({
      subjects: subjects.map(s => ({ name:s.name, board:s.board, currentGrade:s.currentGrade, targetGrade:s.targetGrade })),
      availableDays: Object.entries(availability).filter(([,v])=>v.enabled).map(([k])=>k),
      startTimes: Object.fromEntries(Object.entries(availability).map(([k,v])=>[k,v.startTime])),
      endTime: '21:00', ratio: '2:1', weeksUntilExams: 12,
    })
    setAiPlan(res.text||res.error||'')
    setPlanDone(true)
    setAiLoading(false)
  }

  async function seedTopics(uid) {
    for (const s of subjects) {
      const topics = getAllTopicsFlat(s.board, s.name, qual)
      for (const t of topics) {
        const id = `${s.name}_${t.name}`.replace(/[^a-zA-Z0-9_]/g,'_').slice(0,100)
        await setDoc(doc(db,'users',uid,'topics',id), {
          name:t.name, paper:t.paper, subjectId:s.name,
          confidence:3, notes:'', createdAt:serverTimestamp(), updatedAt:serverTimestamp(),
        }, { merge:true })
      }
    }
  }

  async function finish() {
    if (!user) return
    setSaving(true)
    try {
      await updateDoc(doc(db,'users',user.uid), {
        qualification:qual, subjects,
        startingGrades: Object.fromEntries(subjects.map(s=>[s.name,s.currentGrade])),
        targetGrades:   Object.fromEntries(subjects.map(s=>[s.name,s.targetGrade||globalTarget])),
        availability,
        username: username||user.uid.slice(0,8),
        onboardingComplete: true,
        updatedAt: serverTimestamp(),
      })
      await seedTopics(user.uid)
      await refreshProfile()
      navigate('/dashboard')
      toast.success('Welcome to RevisionFlow! 🎉')
    } catch(err) { toast.error(err.message) }
    finally { setSaving(false) }
  }

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:24,background:'var(--bg-base)'}}>
      <div style={{width:'100%',maxWidth:560}}>
        {/* Logo */}
        <div style={{textAlign:'center',marginBottom:24}}>
          <div style={{width:44,height:44,borderRadius:12,background:'linear-gradient(135deg,#7c3aed,#a855f7)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px'}}>
            <Zap size={22} color="#fff"/>
          </div>
          <span style={{fontWeight:800}}>RevisionFlow</span>
        </div>

        {/* Progress */}
        <div style={{display:'flex',gap:3,marginBottom:8}}>
          {STEPS.map((_,i) => <div key={i} style={{flex:1,height:4,borderRadius:2,background:i<=step?'var(--accent)':'var(--bg-hover)',transition:'background 0.3s'}}/>)}
        </div>
        <div style={{textAlign:'center',fontSize:'0.75rem',color:'var(--text-muted)',marginBottom:20}}>{STEPS[step]} · Step {step+1}/{STEPS.length}</div>

        <div className="card" style={{padding:28,minHeight:400}}>

          {/* Step 0 — Welcome */}
          {step===0 && (
            <div className="fade-in" style={{textAlign:'center'}}>
              <div style={{fontSize:'3rem',marginBottom:12}}>👋</div>
              <h2 style={{marginBottom:10}}>Let's set up your account</h2>
              <p style={{marginBottom:20}}>5 minutes. We'll pre-load your topics, auto-fill your exam dates, and generate an AI study plan.</p>
              <div className="form-group">
                <label className="label">Username (optional)</label>
                <input className="input" placeholder="e.g. femi_revision" value={username}
                  onChange={e=>setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g,''))}/>
                <span style={{fontSize:'0.75rem',color:'var(--text-muted)',marginTop:4,display:'block'}}>revisionflow.app/u/{username||'yourname'}</span>
              </div>
            </div>
          )}

          {/* Step 1 — Qualification */}
          {step===1 && (
            <div className="fade-in">
              <h3 style={{marginBottom:4}}>What are you studying?</h3>
              <p style={{marginBottom:16,fontSize:'0.85rem',color:'var(--text-secondary)'}}>Choose one. You can add individual subjects from the other level in Settings later.</p>

              <div style={{fontSize:'0.75rem',fontWeight:700,color:'var(--text-muted)',letterSpacing:'0.05em',textTransform:'uppercase',marginBottom:8}}>Secondary school (Year 10–11)</div>
              {[
                {id:'GCSE',    label:'GCSE',                      desc:'Grades 9–1 · Most common UK qualification at 16'},
                {id:'BTEC-L2', label:'BTEC Tech Award (Level 2)', desc:'Grades D*–P · Vocational, taken alongside GCSEs'},
              ].map(({id:q,label,desc})=>(
                <button key={q} onClick={()=>setQual(q)}
                  style={{width:'100%',textAlign:'left',cursor:'pointer',marginBottom:8,
                    border:`2px solid ${qual===q?'var(--accent)':'var(--border)'}`,
                    background:qual===q?'rgba(124,58,237,0.1)':'var(--bg-card)',
                    borderRadius:'var(--radius-md)',
                    padding:'14px 16px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <div>
                    <div style={{fontWeight:600}}>{label}</div>
                    <div style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>{desc}</div>
                  </div>
                  {qual===q&&<Check size={16} color="var(--accent-light)"/>}
                </button>
              ))}

              <div style={{fontSize:'0.75rem',fontWeight:700,color:'var(--text-muted)',letterSpacing:'0.05em',textTransform:'uppercase',marginBottom:8,marginTop:16}}>Sixth form / college (Year 12–13)</div>
              {[
                {id:'A-Level', label:'A-Level',                   desc:'Grades A*–E · University entrance qualification'},
                {id:'BTEC-L3', label:'BTEC National (Level 3)',   desc:'Grades D*D*–U · Vocational, equivalent to A-Levels'},
              ].map(({id:q,label,desc})=>(
                <button key={q} onClick={()=>setQual(q)}
                  style={{width:'100%',textAlign:'left',cursor:'pointer',marginBottom:8,
                    border:`2px solid ${qual===q?'var(--accent)':'var(--border)'}`,
                    background:qual===q?'rgba(124,58,237,0.1)':'var(--bg-card)',
                    borderRadius:'var(--radius-md)',
                    padding:'14px 16px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <div>
                    <div style={{fontWeight:600}}>{label}</div>
                    <div style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>{desc}</div>
                  </div>
                  {qual===q&&<Check size={16} color="var(--accent-light)"/>}
                </button>
              ))}
            </div>
          )}

          {/* Step 2 — Subjects */}
          {step===2 && (
            <div className="fade-in">
              <h3 style={{marginBottom:4}}>Add your subjects</h3>
              <p style={{marginBottom:14,fontSize:'0.85rem'}}>Topics auto-load for each subject · Exam dates auto-fill · Only tiered subjects show Higher/Foundation</p>

              {subjects.length>0 && (
                <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:12}}>
                  {subjects.map(s=>(
                    <div key={s.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',background:'var(--bg-surface)',padding:'8px 12px',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                      <span style={{fontWeight:600,fontSize:'0.875rem'}}>{s.name} <span style={{fontWeight:400,color:'var(--text-muted)',fontSize:'0.78rem'}}>{s.board}{s.tier&&s.tier!=='N/A'?` · ${s.tier}`:''}</span></span>
                      <button className="btn btn-ghost btn-icon btn-sm" onClick={()=>setSubjects(ss=>ss.filter(x=>x.id!==s.id))}><X size={14}/></button>
                    </div>
                  ))}
                </div>
              )}

              <div style={{background:'var(--bg-surface)',padding:12,borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                <div className="grid-2" style={{gap:8,marginBottom:8}}>
                  <div>
                    <label className="label">Subject</label>
                    <select className="select" value={newSubj.name} onChange={e=>onSubjName(e.target.value)}>
                      <option value="">Select…</option>
                      {subjectList.map(s=><option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="label">Board</label>
                    <select className="select" value={newSubj.board} onChange={e=>setNewSubj(s=>({...s,board:e.target.value}))}>
                      {EXAM_BOARDS.map(b=><option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  {newSubj.name && isTiered(newSubj.name) && (
                    <div>
                      <label className="label">Tier</label>
                      <select className="select" value={newSubj.tier} onChange={e=>setNewSubj(s=>({...s,tier:e.target.value}))}>
                        <option value="Higher">Higher</option>
                        <option value="Foundation">Foundation</option>
                      </select>
                    </div>
                  )}
                  <div>
                    <label className="label">Current grade</label>
                    <select className="select" value={newSubj.currentGrade} onChange={e=>setNewSubj(s=>({...s,currentGrade:e.target.value}))}>
                      <option value="">Unknown</option>
                      {gradeOptions.map(g=><option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm" onClick={addSubject} disabled={!newSubj.name}><Plus size={14}/> Add</button>
              </div>
            </div>
          )}

          {/* Step 3 — Targets */}
          {step===3 && (
            <div className="fade-in">
              <h3 style={{marginBottom:4}}>Set your grade targets</h3>
              <p style={{marginBottom:14}}>The AI uses these to prioritise your revision.</p>
              <div style={{padding:12,background:'rgba(124,58,237,0.08)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',marginBottom:14}}>
                <label className="label">Global target</label>
                <select className="select" value={globalTarget} onChange={e=>{
                  const val = e.target.value;
                  setGlobalTarget(val);
                  setSubjects(s=>s.map(x=>{
                    const opts = getGradeOptions(x.name, qual, x.tier);
                    const target = opts.includes(val) ? val : (opts[0] || val);
                    return {...x, targetGrade: target};
                  }));
                }}>
                  {globalGradeOptions.map(g=><option key={g} value={g}>Grade {g}</option>)}
                </select>
                <p style={{fontSize:'0.75rem',color:'var(--text-muted)',marginTop:4}}>Applied to all subjects — override individually below</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {subjects.map(s=>(
                  <div key={s.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                    <div style={{fontWeight:500,fontSize:'0.875rem'}}>{s.name}{s.currentGrade?<span style={{color:'var(--text-muted)',fontSize:'0.78rem',marginLeft:6}}>currently {s.currentGrade}</span>:null}</div>
                    <div style={{display:'flex',alignItems:'center',gap:6}}>
                      <span style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>→</span>
                      <select className="select" style={{width:'auto'}} value={s.targetGrade||globalTarget} onChange={e=>updateSubj(s.id,'targetGrade',e.target.value)}>
                        {getGradeOptions(s.name, qual, s.tier).map(g=><option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 — Availability */}
          {step===4 && (
            <div className="fade-in">
              <h3 style={{marginBottom:4}}>When can you revise?</h3>
              <p style={{marginBottom:14}}>Used for AI calendar generation. Edit any time in Settings.</p>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>
                {DAYS.map(day=>(
                  <div key={day} style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                    <input type="checkbox" checked={availability[day].enabled}
                      onChange={e=>setAvailability(a=>({...a,[day]:{...a[day],enabled:e.target.checked}}))}
                      style={{width:15,height:15,accentColor:'var(--accent)',flexShrink:0}}/>
                    <span style={{width:88,fontWeight:500,fontSize:'0.85rem',flexShrink:0}}>{day}</span>
                    {availability[day].enabled ? (
                      <>
                        <input type="time" className="input" style={{flex:1,padding:'3px 6px'}} value={availability[day].startTime} onChange={e=>setAvailability(a=>({...a,[day]:{...a[day],startTime:e.target.value}}))}/>
                        <span style={{color:'var(--text-muted)',fontSize:'0.78rem'}}>–</span>
                        <input type="time" className="input" style={{flex:1,padding:'3px 6px'}} value={availability[day].endTime} onChange={e=>setAvailability(a=>({...a,[day]:{...a[day],endTime:e.target.value}}))}/>
                      </>
                    ) : <span style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Rest day</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 — AI Plan */}
          {step===5 && (
            <div className="fade-in">
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
                <Brain size={20} color="var(--accent-light)"/>
                <h3 style={{margin:0}}>Generate your AI study plan</h3>
              </div>
              <p style={{marginBottom:16,fontSize:'0.875rem'}}>Personalised to your subjects, targets, and availability using Google Gemini.</p>
              {!planDone ? (
                <div style={{textAlign:'center',padding:'20px 0'}}>
                  <div style={{fontSize:'3rem',marginBottom:12}}>🤖</div>
                  <button className="btn btn-primary" onClick={generatePlan} disabled={aiLoading}>
                    {aiLoading?'Generating…':'Generate AI study plan'}
                  </button>
                  {aiLoading&&<div style={{marginTop:16}}><div className="spinner" style={{margin:'0 auto'}}/><p style={{marginTop:8,fontSize:'0.8rem',color:'var(--text-muted)'}}>~15 seconds…</p></div>}
                  <div style={{marginTop:12}}>
                    <button className="btn btn-ghost btn-sm" onClick={()=>setStep(s=>s+1)}>Skip for now</button>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{background:'rgba(124,58,237,0.08)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',padding:12,maxHeight:260,overflowY:'auto',fontSize:'0.82rem',lineHeight:1.8,whiteSpace:'pre-wrap',marginBottom:10}}>
                    {aiPlan}
                  </div>
                  <p style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Full AI advisor available in the app after setup.</p>
                </div>
              )}
            </div>
          )}

          {/* Step 6 — Friends */}
          {step===6 && (
            <div className="fade-in" style={{textAlign:'center'}}>
              <Users size={44} color="var(--accent-light)" style={{margin:'0 auto 14px'}}/>
              <h3 style={{marginBottom:8}}>Find your friends</h3>
              <p style={{marginBottom:20}}>RevisionFlow is more fun with friends. Compete on leaderboards and stay accountable.</p>
              <div style={{background:'rgba(124,58,237,0.08)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',padding:14,marginBottom:14,textAlign:'left'}}>
                {['Compete on the XP leaderboard','See each other\'s streaks','Share your profile link','Stay accountable together'].map(f=>(
                  <div key={f} style={{display:'flex',alignItems:'center',gap:8,fontSize:'0.875rem',marginBottom:6}}>
                    <Check size={13} color="var(--success)"/>{f}
                  </div>
                ))}
              </div>
              <p style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>
                Share your profile: <strong>revisionflow.app/u/{username||user?.uid?.slice(0,8)}</strong>
              </p>
              <p style={{fontSize:'0.78rem',color:'var(--text-muted)',marginTop:6}}>Add friends from the Friends page after setup.</p>
            </div>
          )}

          {/* Step 7 — Done */}
          {step===7 && (
            <div className="fade-in" style={{textAlign:'center'}}>
              <div style={{fontSize:'4rem',marginBottom:14}}>🎉</div>
              <h2 style={{marginBottom:10}}>You're all set!</h2>
              <div style={{display:'flex',flexDirection:'column',gap:7,marginBottom:18,textAlign:'left'}}>
                {[
                  `${subjects.length} subject${subjects.length!==1?'s':''} added`,
                  'Topics pre-loaded for all subjects',
                  'Exam dates ready to auto-fill',
                  'Grade targets set',
                  'AI advisor ready',
                  'Streak tracking starts today',
                ].map(t=>(
                  <div key={t} style={{display:'flex',alignItems:'center',gap:8,padding:'7px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',fontSize:'0.875rem'}}>
                    <Check size={13} color="var(--success)"/>{t}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nav */}
          <div style={{display:'flex',justifyContent:'space-between',marginTop:24}}>
            <button className="btn btn-secondary" onClick={()=>setStep(s=>s-1)} style={{visibility:step===0?'hidden':'visible'}}>
              <ChevronLeft size={15}/> Back
            </button>
            {step<STEPS.length-1 ? (
              <button className="btn btn-primary" onClick={()=>setStep(s=>s+1)} disabled={step===2&&subjects.length===0}>
                Continue <ChevronRight size={15}/>
              </button>
            ) : (
              <button className="btn btn-primary" onClick={finish} disabled={saving}>
                {saving?'Setting up…':'Go to dashboard'} <ChevronRight size={15}/>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
