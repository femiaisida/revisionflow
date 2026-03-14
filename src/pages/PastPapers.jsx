// src/pages/PastPapers.jsx
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { savePaperAttempt, getPaperAttempts, getPaperStructures, submitPaperStructure } from '../utils/firestore'
import { analyseWeaknesses } from '../utils/ai'
import { calculateGrade, gradeColour } from '../utils/calendar'
import { GRADE_BOUNDARIES_GCSE, SUBJECT_COLOURS } from '../data/subjects'
import toast from 'react-hot-toast'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { Plus, X, Brain, TrendingUp, FileText, AlertCircle } from 'lucide-react'

export default function PastPapers() {
  const { user, profile } = useAuth()
  const [attempts, setAttempts] = useState([])
  const [structures, setStructures] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [showStructure, setShowStructure] = useState(false)
  const [aiAnalysis, setAiAnalysis] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const [tab, setTab] = useState('attempts')

  const subjects = profile?.subjects?.map(s=>s.name) || []

  useEffect(() => {
    if (!user) return
    getPaperAttempts(user.uid, selectedSubject||null).then(setAttempts)
    getPaperStructures({}).then(setStructures)
  }, [user, selectedSubject])

  async function handleAnalyse() {
    setAiLoading(true)
    const res = await analyseWeaknesses(attempts, selectedSubject)
    setAiAnalysis(res.text||res.error||'')
    setAiLoading(false)
  }

  const filtered = selectedSubject ? attempts.filter(a=>a.subject===selectedSubject) : attempts

  // Chart data
  const chartData = [...filtered].reverse().map((a,i) => ({
    name: `${a.subject} P${a.paper} ${a.year}`,
    percentage: a.percentage,
    grade: a.grade,
  }))

  // Subject averages
  const subjectAverages = subjects.map(s => {
    const subAttempts = attempts.filter(a=>a.subject===s)
    const avg = subAttempts.length ? Math.round(subAttempts.reduce((sum,a)=>sum+a.percentage,0)/subAttempts.length) : null
    return { subject:s, avg, count:subAttempts.length, latest:subAttempts[0] }
  })

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <h2>Past Papers</h2>
        <div style={{display:'flex',gap:8}}>
          <button className="btn btn-secondary btn-sm" onClick={()=>setShowStructure(true)}>
            <Plus size={15}/> Add paper structure
          </button>
          <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}>
            <Plus size={15}/> Log paper attempt
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs" style={{marginBottom:20}}>
        {['attempts','progress','analyse'].map(t=>(
          <button key={t} className={`tab${tab===t?' active':''}`} onClick={()=>setTab(t)}>
            {t==='attempts'?'Attempts':t==='progress'?'Progress':' AI Analysis'}
          </button>
        ))}
      </div>

      {/* Subject filter */}
      <div style={{marginBottom:20,display:'flex',gap:8,flexWrap:'wrap'}}>
        <button className={`btn btn-sm ${!selectedSubject?'btn-primary':'btn-secondary'}`} onClick={()=>setSelectedSubject('')}>All</button>
        {subjects.map(s=>(
          <button key={s} className={`btn btn-sm ${selectedSubject===s?'btn-primary':'btn-secondary'}`} onClick={()=>setSelectedSubject(s)}>{s}</button>
        ))}
      </div>

      {tab === 'attempts' && (
        <>
          {/* Subject overview cards */}
          <div className="grid-3" style={{marginBottom:24}}>
            {subjectAverages.filter(s=>s.count>0).map(s=>(
              <div key={s.subject} className="card stat-card" style={{cursor:'pointer'}} onClick={()=>setSelectedSubject(s.subject)}>
                <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:8}}>
                  <div style={{width:8,height:8,borderRadius:'50%',background:SUBJECT_COLOURS[s.subject]||'var(--accent)'}}/>
                  <span style={{fontSize:'0.78rem',color:'var(--text-muted)',fontWeight:600}}>{s.subject}</span>
                </div>
                <div style={{fontSize:'1.5rem',fontWeight:800,color:gradeColour(s.latest?.grade||'')}}>{s.avg}%</div>
                <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>{s.count} paper{s.count!==1?'s':''} · Grade {s.latest?.grade||'?'}</div>
              </div>
            ))}
          </div>

          {/* Attempts table */}
          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <h4>No papers logged yet</h4>
              <p>Log your first past paper attempt to start tracking progress</p>
              <button className="btn btn-primary" onClick={()=>setShowAdd(true)}>Log a paper</button>
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead><tr>
                  <th>Subject</th><th>Paper</th><th>Board</th><th>Year</th>
                  <th>Score</th><th>%</th><th>Grade</th><th>Date</th>
                </tr></thead>
                <tbody>
                  {filtered.map(a=>(
                    <tr key={a.id}>
                      <td><div style={{display:'flex',alignItems:'center',gap:6}}>
                        <div style={{width:8,height:8,borderRadius:'50%',background:SUBJECT_COLOURS[a.subject]||'var(--accent)',flexShrink:0}}/>
                        {a.subject}
                      </div></td>
                      <td>Paper {a.paper}</td>
                      <td>{a.board}</td>
                      <td>{a.year}</td>
                      <td>{a.score}/{a.maxMarks}</td>
                      <td>{a.percentage}%</td>
                      <td><span style={{fontWeight:800,color:gradeColour(a.grade||''),fontSize:'1.05rem'}}>{a.grade||'–'}</span></td>
                      <td style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>{a.attemptDate || '–'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {tab === 'progress' && (
        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {chartData.length < 2 ? (
            <div className="empty-state"><p>Log at least 2 papers to see a progress graph</p></div>
          ) : (
            <div className="card">
              <h4 style={{marginBottom:16}}>Score progression</h4>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)"/>
                  <XAxis dataKey="name" tick={{fontSize:10,fill:'var(--text-muted)'}} interval="preserveStartEnd"/>
                  <YAxis domain={[0,100]} tickFormatter={v=>`${v}%`} tick={{fontSize:11,fill:'var(--text-muted)'}}/>
                  <Tooltip formatter={(v)=>`${v}%`} contentStyle={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8}}/>
                  <Line type="monotone" dataKey="percentage" stroke="var(--accent-light)" strokeWidth={2} dot={{fill:'var(--accent)',strokeWidth:0,r:4}}/>
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      )}

      {tab === 'analyse' && (
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <h4 style={{display:'flex',alignItems:'center',gap:8}}><Brain size={18} color="var(--accent-light)"/> AI Weakness Analysis</h4>
            <button className="btn btn-primary btn-sm" onClick={handleAnalyse} disabled={aiLoading||filtered.length===0}>
              {aiLoading?'Analysing…':'Analyse performance'}
            </button>
          </div>
          {filtered.length === 0 && <p>Log at least one past paper to get AI analysis.</p>}
          {aiLoading && <div className="loading-center"><div className="spinner"/></div>}
          {aiAnalysis && <div style={{whiteSpace:'pre-wrap',fontSize:'0.875rem',lineHeight:1.8}}>{aiAnalysis}</div>}
        </div>
      )}

      {showAdd && <AddAttemptModal user={user} profile={profile} structures={structures} onClose={()=>setShowAdd(false)}
        onSave={async(a)=>{await savePaperAttempt(user.uid,a);await getPaperAttempts(user.uid,null).then(setAttempts);setShowAdd(false);toast.success('Paper logged! +100 XP')}}/>}

      {showStructure && <AddStructureModal user={user} profile={profile} onClose={()=>setShowStructure(false)}
        onSave={async(s)=>{await submitPaperStructure(user.uid,s);setShowStructure(false);toast.success('Paper structure submitted for review')}}/>}
    </div>
  )
}

function AddAttemptModal({ user, profile, structures, onClose, onSave }) {
  const subjects = profile?.subjects || []
  const [form, setForm] = useState({ subject:'', board:'AQA', year: new Date().getFullYear(), paper:1, score:'', maxMarks:'', attemptDate: new Date().toISOString().slice(0,10), customBoundaries:false })
  const [questionMarks, setQuestionMarks] = useState([])
  const [useQuestions, setUseQuestions] = useState(false)
  const [selectedStructure, setSelectedStructure] = useState(null)

  function selectStructure(s) {
    setSelectedStructure(s)
    setQuestionMarks(s.questions.map(q=>({...q, scored:0})))
    setForm(f=>({...f, maxMarks:s.totalMarks}))
    setUseQuestions(true)
  }

  const totalScored = questionMarks.reduce((sum,q)=>sum+parseInt(q.scored||0),0)

  async function submit(e) {
    e.preventDefault()
    const score  = useQuestions ? totalScored : parseInt(form.score)
    const max    = parseInt(form.maxMarks)
    const pct    = Math.round((score/max)*100)
    const key    = `${form.board}-${form.subject}-${form.year}`
    const bounds = GRADE_BOUNDARIES_GCSE[key]
    const grade  = bounds ? calculateGrade(score, max, bounds.boundaries) : null
    await onSave({ ...form, score, percentage:pct, grade, questionMarks: useQuestions ? questionMarks : [] })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{maxWidth:580}} onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Log paper attempt</span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button>
        </div>
        <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:14}}>
          <div className="grid-2" style={{gap:10}}>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="label">Subject</label>
              <select className="select" value={form.subject} onChange={e=>setForm(f=>({...f,subject:e.target.value}))} required>
                <option value="">Select…</option>
                {subjects.map(s=><option key={s.name} value={s.name}>{s.name}</option>)}
              </select>
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="label">Exam board</label>
              <select className="select" value={form.board} onChange={e=>setForm(f=>({...f,board:e.target.value}))}>
                {['AQA','Edexcel','OCR','WJEC','CCEA'].map(b=><option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="label">Year</label>
              <select className="select" value={form.year} onChange={e=>setForm(f=>({...f,year:parseInt(e.target.value)}))}>
                {[2024,2023,2022,2021,2019,2018,2017].map(y=><option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="label">Paper</label>
              <select className="select" value={form.paper} onChange={e=>setForm(f=>({...f,paper:parseInt(e.target.value)}))}>
                {[1,2,3].map(p=><option key={p} value={p}>Paper {p}</option>)}
              </select>
            </div>
          </div>

          {/* Select paper structure */}
          {structures.filter(s=>s.subject===form.subject&&s.year===form.year&&s.paper===form.paper).length > 0 && (
            <div>
              <label className="label">Use question breakdown</label>
              {structures.filter(s=>s.subject===form.subject&&s.year===form.year&&s.paper===form.paper).map(s=>(
                <button key={s.id} type="button" className={`btn btn-sm ${selectedStructure?.id===s.id?'btn-primary':'btn-secondary'}`}
                  onClick={()=>selectStructure(s)} style={{marginRight:6}}>{s.board} structure</button>
              ))}
            </div>
          )}

          {/* Question-by-question entry */}
          {useQuestions && questionMarks.length > 0 ? (
            <div style={{background:'var(--bg-surface)',padding:14,borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
                <span style={{fontWeight:600,fontSize:'0.875rem'}}>Question marks</span>
                <span style={{color:'var(--accent-light)',fontWeight:700}}>{totalScored}/{form.maxMarks}</span>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(80px,1fr))',gap:8}}>
                {questionMarks.map((q,i)=>(
                  <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                    <span style={{fontSize:'0.7rem',color:'var(--text-muted)'}}>Q{q.num} /{q.marks}</span>
                    <input className="input" type="number" min={0} max={q.marks} value={q.scored}
                      onChange={e=>setQuestionMarks(qs=>qs.map((qx,j)=>j===i?{...qx,scored:Math.min(parseInt(e.target.value)||0,qx.marks)}:qx))}
                      style={{textAlign:'center',padding:'4px',width:'100%'}}/>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid-2" style={{gap:10}}>
              <div className="form-group" style={{marginBottom:0}}>
                <label className="label">Score</label>
                <input className="input" type="number" min={0} value={form.score} onChange={e=>setForm(f=>({...f,score:e.target.value}))} required={!useQuestions}/>
              </div>
              <div className="form-group" style={{marginBottom:0}}>
                <label className="label">Max marks</label>
                <input className="input" type="number" min={1} value={form.maxMarks} onChange={e=>setForm(f=>({...f,maxMarks:e.target.value}))} required/>
              </div>
            </div>
          )}

          <div className="form-group" style={{marginBottom:0}}>
            <label className="label">Date attempted</label>
            <input className="input" type="date" value={form.attemptDate} onChange={e=>setForm(f=>({...f,attemptDate:e.target.value}))}/>
          </div>

          <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save attempt</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function AddStructureModal({ user, profile, onClose, onSave }) {
  const subjects = profile?.subjects?.map(s=>s.name)||[]
  const [form, setForm] = useState({ subject:'', board:'AQA', year:2024, paper:1, tier:'Higher', totalMarks:80 })
  const [questions, setQuestions] = useState(Array.from({length:20},(_,i)=>({num:i+1,marks:3})))

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{maxWidth:580}} onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Add paper structure</span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}><X size={18}/></button>
        </div>
        <p style={{marginBottom:16,fontSize:'0.875rem'}}>Define the question structure of a paper so you and others can enter marks per question.</p>
        <div className="grid-2" style={{gap:10,marginBottom:14}}>
          {[
            {key:'subject',label:'Subject',type:'select',opts:subjects},
            {key:'board',label:'Board',type:'select',opts:['AQA','Edexcel','OCR','WJEC','CCEA']},
            {key:'year',label:'Year',type:'number'},
            {key:'paper',label:'Paper',type:'number'},
            {key:'totalMarks',label:'Total marks',type:'number'},
          ].map(f=>(
            <div key={f.key} className="form-group" style={{marginBottom:0}}>
              <label className="label">{f.label}</label>
              {f.type==='select'
                ? <select className="select" value={form[f.key]} onChange={e=>setForm(x=>({...x,[f.key]:e.target.value}))}>
                    {f.opts.map(o=><option key={o} value={o}>{o}</option>)}
                  </select>
                : <input className="input" type={f.type} value={form[f.key]} onChange={e=>setForm(x=>({...x,[f.key]:e.target.value}))}/>
              }
            </div>
          ))}
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:8,alignItems:'center'}}>
          <span style={{fontWeight:600,fontSize:'0.875rem'}}>Questions ({questions.length})</span>
          <div style={{display:'flex',gap:6}}>
            <button className="btn btn-secondary btn-sm" onClick={()=>setQuestions(q=>[...q,{num:q.length+1,marks:3}])}>+ Q</button>
            <button className="btn btn-secondary btn-sm" onClick={()=>setQuestions(q=>q.slice(0,-1))}>- Q</button>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(70px,1fr))',gap:6,marginBottom:16,maxHeight:200,overflowY:'auto'}}>
          {questions.map((q,i)=>(
            <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>
              <span style={{fontSize:'0.7rem',color:'var(--text-muted)'}}>Q{q.num}</span>
              <input className="input" type="number" min={1} max={20} value={q.marks}
                onChange={e=>setQuestions(qs=>qs.map((qx,j)=>j===i?{...qx,marks:parseInt(e.target.value)||1}:qx))}
                style={{textAlign:'center',padding:'4px',width:'100%'}}/>
            </div>
          ))}
        </div>
        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={()=>onSave({...form,questions,year:parseInt(form.year),paper:parseInt(form.paper),totalMarks:parseInt(form.totalMarks)})}>Submit structure</button>
        </div>
      </div>
    </div>
  )
}
