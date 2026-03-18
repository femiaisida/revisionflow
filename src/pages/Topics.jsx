// src/pages/Topics.jsx
import React, { useState, useEffect } from 'react'
import PriorityList from '../components/PriorityList'
import { useAuth } from '../context/AuthContext'
import { collection, getDocs, doc, updateDoc, deleteDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { awardXP } from '../utils/firestore'
import { getTopicAdvice } from '../utils/ai'
import { getAllTopicsFlat } from '../data/topics'
import { SUBJECT_COLOURS } from '../data/subjects'
import toast from 'react-hot-toast'
import { Plus, X, Brain, Zap, Trash2, Grid, BarChart2 } from 'lucide-react'

const CONF_LABELS = ['','Struggling','Needs work','Getting there','Good','Strong']
const CONF_COLOURS = ['','var(--danger)','#f97316','var(--warning)','#84cc16','var(--success)']

export default function Topics() {
  const { user, profile } = useAuth()
  const [topics, setTopics] = useState([])
  const [allTopics, setAllTopics] = useState([])
  const [selSubj, setSelSubj] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [aiAdvice, setAiAdvice] = useState({})
  const [loadingAI, setLoadingAI] = useState(null)
  const [view, setView] = useState('list')
  const [selected, setSelected] = useState([])
  const [newTopic, setNewTopic] = useState({ name:'', confidence:3, notes:'' })
  const [loading, setLoading] = useState(false)

  const subjects = profile?.subjects?.map(s=>s.name) || []

  useEffect(() => {
    if (!user || !selSubj) return
    loadTopics()
  }, [user, selSubj])

  async function loadTopics() {
    const snap = await getDocs(collection(db,'users',user.uid,'topics'))
    const all = snap.docs.map(d=>({id:d.id,...d.data()}))
    setAllTopics(all)
    setTopics(all.filter(t=>t.subjectId===selSubj))
  }

  async function handleSeedTopics() {
    if (!selSubj) return
    setLoading(true)
    const subj = profile?.subjects?.find(s=>s.name===selSubj)
    const topicList = getAllTopicsFlat(subj?.board||'AQA', selSubj)
    if (!topicList.length) { toast.error('No topics found for this subject/board'); setLoading(false); return }
    for (const t of topicList) {
      const id = `${selSubj}_${t.name}`.replace(/[^a-zA-Z0-9_]/g,'_').slice(0,100)
      await setDoc(doc(db,'users',user.uid,'topics',id), {
        name:t.name, paper:t.paper, subjectId:selSubj,
        confidence:3, notes:'', createdAt:serverTimestamp(), updatedAt:serverTimestamp(),
      }, { merge:true })
    }
    await loadTopics()
    toast.success(`Loaded ${topicList.length} topics for ${selSubj}`)
    setLoading(false)
  }

  async function addTopic() {
    if (!newTopic.name || !selSubj) return
    const id = `${selSubj}_${newTopic.name}`.replace(/[^a-zA-Z0-9_]/g,'_').slice(0,100)
    await setDoc(doc(db,'users',user.uid,'topics',id), {
      ...newTopic, subjectId:selSubj, createdAt:serverTimestamp(), updatedAt:serverTimestamp()
    }, { merge:true })
    await awardXP(user.uid, 10, 'Topic added')
    await loadTopics()
    setNewTopic({ name:'', confidence:3, notes:'' })
    setShowAdd(false)
    toast.success('Topic added +10 XP')
  }

  async function updateConf(topicId, conf) {
    await updateDoc(doc(db,'users',user.uid,'topics',topicId), { confidence:conf, updatedAt:serverTimestamp() })
    setTopics(ts=>ts.map(t=>t.id===topicId?{...t,confidence:conf}:t))
    setAllTopics(ts=>ts.map(t=>t.id===topicId?{...t,confidence:conf}:t))
  }

  async function handleDelete(id) {
    await deleteDoc(doc(db,'users',user.uid,'topics',id))
    setTopics(ts=>ts.filter(t=>t.id!==id))
  }

  async function handleBulkDelete() {
    await Promise.all(selected.map(id=>deleteDoc(doc(db,'users',user.uid,'topics',id))))
    setTopics(ts=>ts.filter(t=>!selected.includes(t.id)))
    setSelected([])
    toast.success(`Deleted ${selected.length} topics`)
  }

  async function getAIAdvice(topic) {
    setLoadingAI(topic.id)
    const res = await getTopicAdvice(selSubj, topic.name, topic.confidence, [])
    setAiAdvice(a=>({...a,[topic.id]:res.text||res.error}))
    setLoadingAI(null)
  }

  function toggleSelect(id) { setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]) }

  const sorted = [...topics].sort((a,b)=>(a.confidence||3)-(b.confidence||3))
  const weak   = sorted.filter(t=>(t.confidence||3)<=2)
  const mid    = sorted.filter(t=>(t.confidence||3)===3)
  const strong = sorted.filter(t=>(t.confidence||3)>=4)

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <h2>Topic Tracker</h2>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          {selected.length>0&&<button className="btn btn-danger btn-sm" onClick={handleBulkDelete}><Trash2 size={14}/> Delete {selected.length}</button>}
          {selSubj&&<button className="btn btn-secondary btn-sm" onClick={handleSeedTopics} disabled={loading}>{loading?'Loading…':'Reload spec topics'}</button>}
          {selSubj&&<button className="btn btn-primary btn-sm" onClick={()=>setShowAdd(true)}><Plus size={14}/> Add topic</button>}
        </div>
      </div>

      {/* Subject picker */}
      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:20}}>
        {subjects.map(s=><button key={s} className={`btn btn-sm ${selSubj===s?'btn-primary':'btn-secondary'}`} onClick={()=>{setSelSubj(s);setSelected([])}}>{s}</button>)}
      </div>

      {!selSubj ? (
        <div className="empty-state"><div className="empty-icon">📚</div><p>Select a subject to view topics</p></div>
      ) : (
        <>
          {/* Stats + view toggle */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16,flexWrap:'wrap',gap:12}}>
            <div style={{display:'flex',gap:10}}>
              {[{l:'Struggling',c:weak.length,col:'var(--danger)'},{l:'Building',c:mid.length,col:'var(--warning)'},{l:'Strong',c:strong.length,col:'var(--success)'}].map(s=>(
                <div key={s.l} style={{textAlign:'center',padding:'6px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                  <div style={{fontWeight:800,color:s.col,fontSize:'1.3rem'}}>{s.c}</div>
                  <div style={{fontSize:'0.7rem',color:'var(--text-muted)'}}>{s.l}</div>
                </div>
              ))}
            </div>
            <div className="tabs" style={{padding:3}}>
              <button className={`tab${view==='list'?' active':''}`} onClick={()=>setView('list')}><BarChart2 size={14}/> List</button>
              <button className={`tab${view==='heat'?' active':''}`} onClick={()=>setView('heat')}><Grid size={14}/> Heatmap</button>
              <button className={`tab${view==='priority'?' active':''}`} onClick={()=>setView('priority')}><Star size={14} style={{marginLeft: 4}}/> Priority</button>
            </div>
          </div>

          {topics.length===0 ? (
            <div className="empty-state">
              <div className="empty-icon">🧠</div>
              <p>No topics yet for {selSubj}</p>
              <div style={{display:'flex',gap:8}}>
                <button className="btn btn-primary" onClick={handleSeedTopics} disabled={loading}>{loading?'Loading…':'Load spec topics'}</button>
                <button className="btn btn-secondary" onClick={()=>setShowAdd(true)}>Add manually</button>
              </div>
            </div>
          ) : view==='priority' ? (
            // ── Priority view ──
            <PriorityList topics={allTopics} profile={profile} />
          ) : view==='heat' ? (
            // ── Heatmap view ──
            <div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',gap:6}}>
                {sorted.map(t=>{
                  const conf = t.confidence||3
                  const bg = conf===1?'rgba(239,68,68,0.25)':conf===2?'rgba(249,115,22,0.2)':conf===3?'rgba(245,158,11,0.15)':conf===4?'rgba(132,204,22,0.15)':'rgba(34,197,94,0.2)'
                  const border = conf===1?'rgba(239,68,68,0.5)':conf===2?'rgba(249,115,22,0.4)':conf===3?'rgba(245,158,11,0.3)':conf===4?'rgba(132,204,22,0.3)':'rgba(34,197,94,0.4)'
                  return (
                    <div key={t.id} style={{padding:'8px 10px',borderRadius:'var(--radius-md)',background:bg,border:`1px solid ${border}`,cursor:'pointer',position:'relative'}}
                      title={`${t.name} — ${CONF_LABELS[conf]}`}>
                      <div style={{fontSize:'0.78rem',fontWeight:600,lineHeight:1.3,marginBottom:4}}>{t.name}</div>
                      <div className="conf-dots" style={{gap:3}}>
                        {[1,2,3,4,5].map(n=>(
                          <div key={n} className={`conf-dot${conf>=n?` filled-${n}`:''}`} style={{width:8,height:8}}
                            onClick={()=>updateConf(t.id,n)}/>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div style={{display:'flex',gap:16,marginTop:16,fontSize:'0.78rem',color:'var(--text-muted)'}}>
                {[[1,'Struggling','var(--danger)'],[2,'Needs work','#f97316'],[3,'Getting there','var(--warning)'],[4,'Good','#84cc16'],[5,'Strong','var(--success)']].map(([n,l,c])=>(
                  <div key={n} style={{display:'flex',alignItems:'center',gap:4}}>
                    <div style={{width:10,height:10,borderRadius:2,background:c,opacity:0.7}}/>
                    {l}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // ── List view ──
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {sorted.map(t=>{
                const conf = t.confidence||3
                return (
                  <div key={t.id} className="card" style={{borderLeft:`3px solid ${CONF_COLOURS[conf]}`}}>
                    <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:10}}>
                      <div style={{display:'flex',gap:8,alignItems:'flex-start',flex:1}}>
                        <input type="checkbox" checked={selected.includes(t.id)} onChange={()=>toggleSelect(t.id)}
                          style={{width:15,height:15,accentColor:'var(--accent)',marginTop:3,flexShrink:0}}/>
                        <div style={{flex:1}}>
                          <div style={{fontWeight:600,marginBottom:6}}>{t.name}</div>
                          <div style={{display:'flex',alignItems:'center',gap:8}}>
                            <span style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Confidence:</span>
                            <div className="conf-dots">
                              {[1,2,3,4,5].map(n=>(
                                <div key={n} className={`conf-dot${conf>=n?` filled-${n}`:''}`} onClick={()=>updateConf(t.id,n)} title={CONF_LABELS[n]}/>
                              ))}
                            </div>
                            <span style={{fontSize:'0.78rem',color:CONF_COLOURS[conf],fontWeight:600}}>{CONF_LABELS[conf]}</span>
                          </div>
                          {t.notes&&<p style={{fontSize:'0.8rem',marginTop:4}}>{t.notes}</p>}
                        </div>
                      </div>
                      <div style={{display:'flex',gap:6,flexShrink:0}}>
                        <button className="btn btn-secondary btn-sm" onClick={()=>getAIAdvice(t)} disabled={loadingAI===t.id}>
                          {loadingAI===t.id?'…':<><Brain size={12}/> Advice</>}
                        </button>
                        <button className="btn btn-ghost btn-icon btn-sm" style={{color:'var(--danger)'}} onClick={()=>handleDelete(t.id)}><Trash2 size={13}/></button>
                      </div>
                    </div>
                    {aiAdvice[t.id]&&(
                      <div style={{marginTop:10,padding:10,background:'rgba(124,58,237,0.08)',borderRadius:'var(--radius-md)',fontSize:'0.82rem',lineHeight:1.7,whiteSpace:'pre-wrap'}}>
                        <div style={{fontWeight:600,marginBottom:4,color:'var(--accent-light)',display:'flex',alignItems:'center',gap:5}}><Zap size={12}/> AI Advice</div>
                        {aiAdvice[t.id]}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </>
      )}

      {showAdd&&(
        <div className="modal-overlay" onClick={()=>setShowAdd(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <div className="modal-header"><span className="modal-title">Add topic</span><button className="btn btn-ghost btn-icon" onClick={()=>setShowAdd(false)}><X size={18}/></button></div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <div><label className="label">Topic name</label><input className="input" placeholder="e.g. Quadratic equations" value={newTopic.name} onChange={e=>setNewTopic(t=>({...t,name:e.target.value}))}/></div>
              <div>
                <label className="label">Confidence</label>
                <div className="conf-dots" style={{gap:8}}>
                  {[1,2,3,4,5].map(n=>(
                    <div key={n} className={`conf-dot${newTopic.confidence>=n?` filled-${n}`:''}`} style={{width:20,height:20,cursor:'pointer'}} onClick={()=>setNewTopic(t=>({...t,confidence:n}))} title={CONF_LABELS[n]}/>
                  ))}
                </div>
                <span style={{fontSize:'0.78rem',color:CONF_COLOURS[newTopic.confidence],marginTop:4,display:'block'}}>{CONF_LABELS[newTopic.confidence]}</span>
              </div>
              <div><label className="label">Notes</label><textarea className="textarea" style={{minHeight:60}} value={newTopic.notes} onChange={e=>setNewTopic(t=>({...t,notes:e.target.value}))}/></div>
              <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
                <button className="btn btn-secondary" onClick={()=>setShowAdd(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={addTopic} disabled={!newTopic.name}>Add topic</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
