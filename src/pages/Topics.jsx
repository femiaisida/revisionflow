// src/pages/Topics.jsx
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { getTopics, saveTopicData } from '../utils/firestore'
import { getTopicAdvice } from '../utils/ai'
import { SUBJECT_COLOURS } from '../data/subjects'
import toast from 'react-hot-toast'
import { Plus, X, Brain, Zap } from 'lucide-react'

const CONFIDENCE_LABELS = ['','Struggling','Needs work','Getting there','Good','Strong']

export default function Topics() {
  const { user, profile } = useAuth()
  const [topics, setTopics] = useState([])
  const [selectedSubject, setSelectedSubject] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [aiAdvice, setAiAdvice] = useState({})
  const [loadingAI, setLoadingAI] = useState(null)
  const [newTopic, setNewTopic] = useState({ name:'', confidence:3, notes:'' })

  const subjects = profile?.subjects?.map(s=>s.name) || []

  useEffect(() => {
    if (!user || !selectedSubject) return
    getTopics(user.uid, selectedSubject).then(setTopics)
  }, [user, selectedSubject])

  async function addTopic() {
    if (!newTopic.name || !selectedSubject) return
    await saveTopicData(user.uid, selectedSubject, { ...newTopic, subjectId: selectedSubject, updatedAt: new Date().toISOString() })
    await getTopics(user.uid, selectedSubject).then(setTopics)
    setNewTopic({ name:'', confidence:3, notes:'' })
    setShowAdd(false)
    toast.success('Topic added +10 XP')
  }

  async function updateConfidence(topicId, topic, conf) {
    await saveTopicData(user.uid, selectedSubject, { ...topic, confidence: conf, subjectId: selectedSubject })
    setTopics(ts => ts.map(t => t.id === topicId ? { ...t, confidence: conf } : t))
    toast.success('Confidence updated')
  }

  async function getAIAdvice(topic) {
    setLoadingAI(topic.id)
    const res = await getTopicAdvice(selectedSubject, topic.name, topic.confidence, [])
    setAiAdvice(a => ({ ...a, [topic.id]: res.text || res.error }))
    setLoadingAI(null)
  }

  const sorted = [...topics].sort((a,b) => (a.confidence||3)-(b.confidence||3))
  const weak   = sorted.filter(t => (t.confidence||3) <= 2)
  const mid    = sorted.filter(t => (t.confidence||3) === 3)
  const strong = sorted.filter(t => (t.confidence||3) >= 4)

  const confColour = c => c<=2?'var(--danger)':c===3?'var(--warning)':c>=4?'var(--success)':'var(--text-muted)'

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <h2>Topic Tracker</h2>
        {selectedSubject && <button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}><Plus size={15}/> Add topic</button>}
      </div>

      {/* Subject picker */}
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:24}}>
        {subjects.map(s => (
          <button key={s} className={`btn btn-sm ${selectedSubject===s?'btn-primary':'btn-secondary'}`} onClick={()=>setSelectedSubject(s)}>{s}</button>
        ))}
      </div>

      {!selectedSubject ? (
        <div className="empty-state"><div className="empty-icon">📚</div><p>Select a subject to view and manage topics</p></div>
      ) : (
        <>
          {/* Overview */}
          <div className="grid-3" style={{marginBottom:24}}>
            {[{label:'Struggling',count:weak.length,col:'var(--danger)'},{label:'Building',count:mid.length,col:'var(--warning)'},{label:'Strong',count:strong.length,col:'var(--success)'}].map(s=>(
              <div key={s.label} className="card stat-card">
                <div style={{fontSize:'0.75rem',color:'var(--text-muted)',fontWeight:600,textTransform:'uppercase'}}>{s.label}</div>
                <div style={{fontSize:'2rem',fontWeight:800,color:s.col}}>{s.count}</div>
                <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>topics</div>
              </div>
            ))}
          </div>

          {topics.length === 0 ? (
            <div className="empty-state"><div className="empty-icon">🧠</div><p>No topics yet for {selectedSubject}</p><button className="btn btn-primary" onClick={()=>setShowAdd(true)}>Add your first topic</button></div>
          ) : (
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              {sorted.map(t => (
                <div key={t.id} className="card" style={{borderLeft:`3px solid ${confColour(t.confidence||3)}`}}>
                  <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12}}>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:600,marginBottom:6}}>{t.name}</div>
                      <div style={{display:'flex',alignItems:'center',gap:10}}>
                        <span style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Confidence:</span>
                        <div className="conf-dots">
                          {[1,2,3,4,5].map(n => (
                            <div key={n} className={`conf-dot${(t.confidence||3)>=n?' filled-'+n:''}`}
                              onClick={()=>updateConfidence(t.id,t,n)} title={CONFIDENCE_LABELS[n]}/>
                          ))}
                        </div>
                        <span style={{fontSize:'0.78rem',color:confColour(t.confidence||3),fontWeight:600}}>{CONFIDENCE_LABELS[t.confidence||3]}</span>
                      </div>
                      {t.notes && <p style={{fontSize:'0.8rem',marginTop:6}}>{t.notes}</p>}
                    </div>
                    <button className="btn btn-secondary btn-sm" onClick={()=>getAIAdvice(t)} disabled={loadingAI===t.id}>
                      {loadingAI===t.id?'…':<><Brain size={13}/> Advice</>}
                    </button>
                  </div>
                  {aiAdvice[t.id] && (
                    <div style={{marginTop:12,padding:12,background:'rgba(124,58,237,0.08)',borderRadius:'var(--radius-md)',fontSize:'0.82rem',lineHeight:1.7,whiteSpace:'pre-wrap'}}>
                      <div style={{fontWeight:600,marginBottom:4,color:'var(--accent-light)',display:'flex',alignItems:'center',gap:6}}><Zap size={13}/> AI Advice</div>
                      {aiAdvice[t.id]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {showAdd && (
        <div className="modal-overlay" onClick={()=>setShowAdd(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-header"><span className="modal-title">Add topic</span><button className="btn btn-ghost btn-icon" onClick={()=>setShowAdd(false)}><X size={18}/></button></div>
            <div className="form-group"><label className="label">Topic name</label><input className="input" placeholder="e.g. Quadratic equations" value={newTopic.name} onChange={e=>setNewTopic(t=>({...t,name:e.target.value}))}/></div>
            <div className="form-group">
              <label className="label">Confidence (1–5)</label>
              <div className="conf-dots" style={{gap:8}}>
                {[1,2,3,4,5].map(n=>(
                  <div key={n} className={`conf-dot${newTopic.confidence>=n?' filled-'+n:''}`} style={{width:20,height:20,cursor:'pointer'}} onClick={()=>setNewTopic(t=>({...t,confidence:n}))}/>
                ))}
              </div>
            </div>
            <div className="form-group"><label className="label">Notes</label><textarea className="textarea" style={{minHeight:60}} placeholder="Optional notes…" value={newTopic.notes} onChange={e=>setNewTopic(t=>({...t,notes:e.target.value}))}/></div>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
              <button className="btn btn-secondary" onClick={()=>setShowAdd(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={addTopic} disabled={!newTopic.name}>Add topic</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
