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
import { Plus, X, Brain, Zap, Trash2, Grid, BarChart2, Star, ExternalLink } from 'lucide-react'

const CONF_LABELS = ['','Struggling','Needs work','Getting there','Good','Strong']
const CONF_COLOURS = ['','var(--danger)','#f97316','var(--warning)','#84cc16','var(--success)']

// Evidence-based revision resource links per subject
const SUBJECT_RESOURCES = {
  'Mathematics': [
    { name:'Corbettmaths', url:'https://corbettmaths.com', desc:'Videos and practice questions for every GCSE maths topic' },
    { name:'Maths Genie', url:'https://www.mathsgenie.co.uk', desc:'Past papers, grade boundaries, and topic-specific questions' },
    { name:'Dr Frost Maths', url:'https://www.drfrostmaths.com', desc:'Full GCSE and A-Level practice with worked solutions' },
    { name:'Desmos Graphing Calculator', url:'https://www.desmos.com/calculator', desc:'Free online graphing tool — essential for visualising functions' },
  ],
  'Further Mathematics': [
    { name:'Maths Genie A-Level', url:'https://www.mathsgenie.co.uk/newalevel.php', desc:'A-Level and Further Maths resources' },
    { name:'Dr Frost Maths', url:'https://www.drfrostmaths.com', desc:'Further Maths topic-by-topic practice' },
    { name:'Physics & Maths Tutor', url:'https://www.physicsandmathstutor.com/maths-revision/', desc:'A-Level Maths and Further Maths revision' },
  ],
  'Biology': [
    { name:'Cognito (YouTube)', url:'https://www.youtube.com/@CognitoEdu', desc:'Clear, concise GCSE and A-Level Biology videos' },
    { name:'Save My Exams — Biology', url:'https://www.savemyexams.com/gcse/biology/', desc:'Topic notes, flashcards and past paper questions' },
    { name:'BBC Bitesize Biology', url:'https://www.bbc.co.uk/bitesize/examspecs/zpgwxyc', desc:'AQA GCSE Biology revision with quizzes' },
    { name:'FreeScienceLessons', url:'https://www.youtube.com/@Freesciencelessons', desc:'Comprehensive GCSE Biology YouTube series' },
  ],
  'Chemistry': [
    { name:'Cognito (YouTube)', url:'https://www.youtube.com/@CognitoEdu', desc:'GCSE and A-Level Chemistry explained clearly' },
    { name:'Save My Exams — Chemistry', url:'https://www.savemyexams.com/gcse/chemistry/', desc:'AQA/Edexcel/OCR Chemistry notes and questions' },
    { name:'Chemrevise', url:'https://chemrevise.org', desc:'A-Level Chemistry detailed notes by Neil Goalby' },
    { name:'FreeScienceLessons', url:'https://www.youtube.com/@Freesciencelessons', desc:'GCSE Chemistry full course on YouTube' },
  ],
  'Physics': [
    { name:'Physics & Maths Tutor', url:'https://www.physicsandmathstutor.com/physics-revision/', desc:'A-Level Physics topic notes, past papers and mark schemes' },
    { name:'Cognito (YouTube)', url:'https://www.youtube.com/@CognitoEdu', desc:'GCSE and A-Level Physics videos' },
    { name:'Save My Exams — Physics', url:'https://www.savemyexams.com/gcse/physics/', desc:'Physics revision notes and practice questions' },
    { name:'Isaac Physics', url:'https://isaacphysics.org', desc:'Free A-Level Physics problems and hints — excellent for deep practice' },
  ],
  'Combined Science': [
    { name:'FreeScienceLessons', url:'https://www.youtube.com/@Freesciencelessons', desc:'Full GCSE Combined Science (Trilogy/Synergy) video series' },
    { name:'Save My Exams — Sciences', url:'https://www.savemyexams.com/gcse/', desc:'Combined Science notes for all exam boards' },
    { name:'Cognito (YouTube)', url:'https://www.youtube.com/@CognitoEdu', desc:'GCSE science videos across all three sciences' },
  ],
  'English Language': [
    { name:'Mr Bruff (YouTube)', url:'https://www.youtube.com/@mrbruff', desc:'GCSE English Language and Literature — one of the best YouTube channels' },
    { name:'BBC Bitesize English Language', url:'https://www.bbc.co.uk/bitesize/subjects/zr9d7ty', desc:'GCSE English Language revision guides' },
    { name:'AQA English Language Resources', url:'https://www.aqa.org.uk/subjects/english/gcse/english-language-8700', desc:'Official AQA spec, sample papers and mark schemes' },
  ],
  'English Literature': [
    { name:'Mr Bruff (YouTube)', url:'https://www.youtube.com/@mrbruff', desc:'Set text analysis videos for all major GCSE set texts' },
    { name:'Litcharts', url:'https://www.litcharts.com', desc:'Detailed literary analysis, themes, and quotes for set texts' },
    { name:'SparkNotes', url:'https://www.sparknotes.com', desc:'Study guides for all major set texts — good for context' },
    { name:'No Fear Shakespeare', url:'https://www.sparknotes.com/shakespeare/', desc:'Modern English translation alongside Shakespeare text' },
  ],
  'History': [
    { name:'Seneca Learning — History', url:'https://app.senecalearning.com', desc:'Free adaptive learning for GCSE and A-Level History' },
    { name:'BBC Bitesize History', url:'https://www.bbc.co.uk/bitesize/subjects/zk26n39', desc:'GCSE History topic guides and quizzes' },
    { name:'Mr Allsop History (YouTube)', url:'https://www.youtube.com/@MrAllsopHistory', desc:'Excellent GCSE and A-Level History videos' },
    { name:'Save My Exams — History', url:'https://www.savemyexams.com/gcse/history/', desc:'Topic notes and questions for all major exam boards' },
  ],
  'Geography': [
    { name:'Seneca Learning — Geography', url:'https://app.senecalearning.com', desc:'Adaptive GCSE Geography revision' },
    { name:'Cool Geography', url:'https://www.coolgeography.co.uk', desc:'Comprehensive GCSE and A-Level Geography notes' },
    { name:'BBC Bitesize Geography', url:'https://www.bbc.co.uk/bitesize/subjects/zkw76sg', desc:'GCSE Geography case studies and revision' },
    { name:'Geography All The Way (YouTube)', url:'https://www.youtube.com/@GeographyAllTheWay', desc:'GCSE Geography YouTube tutorials' },
  ],
  'Computer Science': [
    { name:"Craig'n'Dave (YouTube)", url:'https://www.youtube.com/@craigndave', desc:'The best GCSE and A-Level Computer Science YouTube channel' },
    { name:'Revision Village CS', url:'https://www.revisionvillage.com', desc:'Computer Science topic resources' },
    { name:'BBC Bitesize Computer Science', url:'https://www.bbc.co.uk/bitesize/subjects/z34k7ty', desc:'GCSE Computer Science revision' },
    { name:'CS Field Guide', url:'https://www.csfieldguide.org.nz', desc:'Free interactive CS concepts — excellent for algorithms and data structures' },
  ],
  'Business Studies': [
    { name:'Tutor2u Business', url:'https://www.tutor2u.net/business', desc:'Free GCSE and A-Level Business revision notes, flashcards, essays' },
    { name:'BBC Bitesize Business', url:'https://www.bbc.co.uk/bitesize/subjects/zpsvr82', desc:'GCSE Business Studies topic guides' },
    { name:'Business Studies Online (YouTube)', url:'https://www.youtube.com/@BusinessStudiesOnline', desc:'GCSE and A-Level Business YouTube videos' },
  ],
  'Economics': [
    { name:'Tutor2u Economics', url:'https://www.tutor2u.net/economics', desc:'Comprehensive A-Level and GCSE Economics revision' },
    { name:'Econplusdal (YouTube)', url:'https://www.youtube.com/@econplusdal', desc:'A-Level Economics — one of the best YouTube channels' },
    { name:'Economics Explained (YouTube)', url:'https://www.youtube.com/@EconomicsExplained', desc:'Real-world examples that make economics concepts stick' },
  ],
  'Psychology': [
    { name:'PsychLogic (YouTube)', url:'https://www.youtube.com/@PsychLogicUK', desc:'A-Level Psychology videos covering all major topics' },
    { name:'Simply Psychology', url:'https://www.simplypsychology.org', desc:'Free psychology study guides and research summaries' },
    { name:'Save My Exams — Psychology', url:'https://www.savemyexams.com/a-level/psychology/', desc:'AQA A-Level Psychology revision notes and questions' },
    { name:'Tutor2u Psychology', url:'https://www.tutor2u.net/psychology', desc:'Revision notes, flashcards and model answers' },
  ],
  'Sociology': [
    { name:'Tutor2u Sociology', url:'https://www.tutor2u.net/sociology', desc:'A-Level Sociology revision notes and topic summaries' },
    { name:'ReviseSociology', url:'https://revisesociology.com', desc:'Detailed A-Level Sociology notes across all topics' },
    { name:'Sociology Live (YouTube)', url:'https://www.youtube.com/@SociologyLive', desc:'A-Level Sociology video revision' },
  ],
  'French': [
    { name:'BBC Languages French', url:'https://www.bbc.co.uk/languages/french/', desc:'Grammar guides, vocabulary and listening practice' },
    { name:'Kwiziq French', url:'https://french.kwiziq.com', desc:'Personalised French grammar practice with explanations' },
    { name:'LanguageTransfer French', url:'https://www.languagetransfer.org/french', desc:'Free audio course — excellent for building intuition' },
    { name:'Collins Easy Learning French', url:'https://collins.co.uk', desc:'Grammar reference and vocabulary resources' },
  ],
  'German': [
    { name:'BBC Languages German', url:'https://www.bbc.co.uk/languages/german/', desc:'Grammar and vocabulary resources' },
    { name:'LanguageTransfer German', url:'https://www.languagetransfer.org/german', desc:'Free audio course for building grammar intuition' },
    { name:'Deutsch lernen (YouTube — Easy German)', url:'https://www.youtube.com/@EasyGerman', desc:'Real conversational German with subtitles' },
    { name:'Deutsche Welle', url:'https://www.dw.com/en/learn-german/s-2469', desc:'Free structured German courses at all levels' },
  ],
  'Spanish': [
    { name:'BBC Languages Spanish', url:'https://www.bbc.co.uk/languages/spanish/', desc:'Grammar and vocabulary revision' },
    { name:'LanguageTransfer Spanish', url:'https://www.languagetransfer.org/spanish', desc:'The best free beginner Spanish audio course' },
    { name:'Notes in Spanish (YouTube)', url:'https://www.youtube.com/@notesinspanish', desc:'Real conversational Spanish at multiple levels' },
    { name:'Lingolia Spanish', url:'https://espanol.lingolia.com/en/', desc:'Clear explanations of Spanish grammar rules' },
  ],
  'Religious Studies': [
    { name:'BBC Bitesize RS', url:'https://www.bbc.co.uk/bitesize/subjects/z7hs34j', desc:'GCSE Religious Studies revision guides' },
    { name:'RS Revision (YouTube)', url:'https://www.youtube.com/@RSRevision', desc:'GCSE and A-Level RS topic videos' },
    { name:'Tutor2u RE', url:'https://www.tutor2u.net/religious-studies', desc:'A-Level Religious Studies notes and resources' },
  ],
  'Law': [
    { name:"Law Teacher", url:'https://www.lawteacher.net', desc:'Free law essays, notes and problem question guides' },
    { name:'Tutor2u Law', url:'https://www.tutor2u.net/law', desc:'A-Level Law revision notes and exam technique guides' },
    { name:'E-Law Resources', url:'https://e-lawresources.co.uk', desc:'OCR and AQA A-Level Law case summaries and topic guides' },
  ],
  'Media Studies': [
    { name:'BBC Bitesize Media Studies', url:'https://www.bbc.co.uk/bitesize/subjects/ztnygk7', desc:'GCSE Media Studies revision guides' },
    { name:'Media Studies Tutor (YouTube)', url:'https://www.youtube.com/@MediaStudiesTutor', desc:'GCSE and A-Level Media Studies revision videos' },
  ],
}

export default function Topics() {
  const { user, profile } = useAuth()
  const [topics, setTopics] = useState([])
  const [allTopics, setAllTopics] = useState([])
  const [selSubj, setSelSubj] = useState('All')
  const [showAdd, setShowAdd] = useState(false)
  const [aiAdvice, setAiAdvice] = useState({})
  const [loadingAI, setLoadingAI] = useState(null)
  const [view, setView] = useState('list')
  const [selected, setSelected] = useState([])
  const [newTopic, setNewTopic] = useState({ name:'', confidence:3, notes:'' })
  const [loading, setLoading] = useState(false)

  const subjects = profile?.subjects?.map(s=>s.name) || []

  useEffect(() => {
    if (!user) return
    loadTopics()
  }, [user, selSubj])

  async function loadTopics() {
    const snap = await getDocs(collection(db,'users',user.uid,'topics'))
    const all = snap.docs.map(d=>({id:d.id,...d.data()}))
    setAllTopics(all)
    if (selSubj === 'All') {
      setTopics(all)
    } else {
      setTopics(all.filter(t=>t.subjectId===selSubj))
    }
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
    const confLabel = ['','Very weak','Weak','Building','Strong','Mastered'][topic.confidence||3]
    const { callAI } = await import('../utils/ai')
    const prompt = `You are a GCSE/A-Level tutor. A student is revising "${topic.name}" in ${selSubj}. Their confidence is ${confLabel} (${topic.confidence||3}/5).

Give a focused, topic-specific response with:

**Why students struggle with this topic**
One or two sentences on the most common misconceptions or difficult parts of "${topic.name}".

**Key points to master**
3-5 bullet points of the most important things to know about "${topic.name}" for the exam.

**Best revision technique for this specific topic**
One specific, concrete technique that works especially well for "${topic.name}" (e.g. if it's a process, draw a flow diagram; if it's definitions, use flashcards; if it's calculations, do timed practice questions).

**Exam technique tip**
One specific tip for how examiners assess "${topic.name}" and what students often lose marks on.

**Free revision resources**
List 2-3 specific free resources for "${topic.name}" in ${selSubj}. Format each as: [Resource name](URL) — one line description.
Use real, working URLs from: BBC Bitesize (bbc.co.uk/bitesize), Save My Exams (savemyexams.com), Physics & Maths Tutor (physicsandmathstutor.com), Seneca Learning (app.senecalearning.com), YouTube channels like Cognito, FreeScienceLessons, Dr Sabiha, or subject-specific channels.

Keep the whole response under 300 words. Be specific to "${topic.name}", not generic.`
    const res = await callAI(prompt)
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
        <button className={`btn btn-sm ${selSubj==='All'?'btn-primary':'btn-secondary'}`} onClick={()=>{setSelSubj('All');setSelected([])}}>All Subjects</button>
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
              <button className={`tab${view==='resources'?' active':''}`} onClick={()=>setView('resources')}><ExternalLink size={14}/> Resources</button>
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
            <PriorityList topics={topics} profile={profile} />
          ) : view==='resources' ? (
            // ── Resources view ──
            <ResourcesPanel subject={selSubj} allSubjects={subjects}/>
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
                      <div style={{marginTop:10,padding:10,background:'rgba(124,58,237,0.08)',borderRadius:'var(--radius-md)',fontSize:'0.82rem',lineHeight:1.7}}>
                        <div style={{fontWeight:600,marginBottom:6,color:'var(--accent-light)',display:'flex',alignItems:'center',gap:5}}><Zap size={12}/> AI Advice — {t.name}</div>
                        <TopicAdviceRenderer text={aiAdvice[t.id]}/>
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

// ── Topic Advice Renderer ─────────────────────────────────────────────────────
// Renders AI markdown with bold, bullets, headings, and clickable resource links
function TopicAdviceRenderer({ text }) {
  if (!text) return null

  // Parse [label](url) markdown links
  function parseLinks(line) {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g
    const parts = []
    let last = 0
    let match
    while ((match = linkRegex.exec(line)) !== null) {
      if (match.index > last) parts.push(line.slice(last, match.index))
      parts.push(
        <a key={match.index} href={match[2]} target="_blank" rel="noreferrer"
          style={{ color:'var(--accent-light)', fontWeight:600, textDecoration:'underline' }}
          onClick={e => e.stopPropagation()}>
          {match[1]}
        </a>
      )
      last = match.index + match[0].length
    }
    if (last < line.length) parts.push(line.slice(last))
    return parts
  }

  function inlineFmt(line) {
    // Bold **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/)
    return parts.map((p, i) => {
      if (p.startsWith('**') && p.endsWith('**')) {
        return <strong key={i}>{parseLinks(p.slice(2,-2))}</strong>
      }
      return <span key={i}>{parseLinks(p)}</span>
    })
  }

  return (
    <div>
      {text.split('\n').map((line, i) => {
        if (!line.trim()) return <div key={i} style={{height:4}}/>
        // Heading
        if (line.startsWith('## ') || line.startsWith('**') && line.endsWith('**'))
          return <div key={i} style={{fontWeight:700,color:'var(--text-primary)',marginTop:8,marginBottom:3,fontSize:'0.85rem'}}>{inlineFmt(line.replace(/^#+\s*/,''))}</div>
        // Bullet
        const bullet = line.match(/^[-•*]\s+(.+)/)
        if (bullet) return (
          <div key={i} style={{display:'flex',gap:6,marginTop:2}}>
            <span style={{color:'var(--accent-light)',flexShrink:0}}>•</span>
            <span>{inlineFmt(bullet[1])}</span>
          </div>
        )
        return <div key={i} style={{marginTop:2}}>{inlineFmt(line)}</div>
      })}
    </div>
  )
}

// ── Resources Panel ───────────────────────────────────────────────────────────
function ResourcesPanel({ subject, allSubjects }) {
  const [selSubj, setSelSubj] = React.useState(subject || allSubjects[0] || '')
  const resources = SUBJECT_RESOURCES[selSubj] || []

  // Generic resources available for all subjects
  const generic = [
    { name:'Seneca Learning', url:'https://app.senecalearning.com', desc:'Free adaptive revision across all GCSE/A-Level subjects. Proven to improve grades 2× vs re-reading.' },
    { name:'Save My Exams', url:'https://www.savemyexams.com', desc:'Topic notes, flashcards and past paper questions for every major subject and exam board.' },
    { name:'Physics & Maths Tutor', url:'https://www.physicsandmathstutor.com', desc:'A-Level and GCSE resources, past papers and mark schemes across sciences and maths.' },
    { name:'BBC Bitesize', url:'https://www.bbc.co.uk/bitesize/levels/z98jmp3', desc:'Free GCSE revision across all subjects with quizzes and interactive content.' },
    { name:'Khan Academy', url:'https://www.khanacademy.org', desc:'Free video lessons and practice exercises for maths, sciences and more — especially good for filling in gaps.' },
    { name:'Quizlet', url:'https://quizlet.com', desc:'Create or use pre-made flashcard sets for any subject — good for definitions and vocabulary.' },
    { name:'Past Papers — AQA', url:'https://www.aqa.org.uk/past-papers', desc:'Official AQA past papers and mark schemes, free to download.' },
    { name:'Past Papers — Edexcel', url:'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html', desc:'Official Pearson/Edexcel past papers.' },
    { name:'Past Papers — OCR', url:'https://www.ocr.org.uk/administration/support-and-tools/past-papers-finder/', desc:'Official OCR past papers and mark schemes.' },
  ]

  return (
    <div style={{padding:'4px 0'}}>
      {/* Subject selector */}
      <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16,flexWrap:'wrap'}}>
        <label className="label" style={{margin:0,whiteSpace:'nowrap'}}>Resources for:</label>
        <select className="select" style={{flex:1,maxWidth:280}} value={selSubj} onChange={e=>setSelSubj(e.target.value)}>
          {allSubjects.map(s=><option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Subject-specific resources */}
      {resources.length > 0 && (
        <div style={{marginBottom:20}}>
          <h4 style={{marginBottom:10,fontSize:'0.9rem',color:'var(--accent-light)'}}>
            Best resources for {selSubj}
          </h4>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:10}}>
            {resources.map(r => (
              <a key={r.name} href={r.url} target="_blank" rel="noreferrer"
                style={{display:'flex',flexDirection:'column',gap:4,padding:'12px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',textDecoration:'none',color:'inherit',transition:'border-color 0.15s'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}}>
                  <span style={{fontWeight:700,fontSize:'0.875rem',color:'var(--text-primary)'}}>{r.name}</span>
                  <ExternalLink size={13} style={{flexShrink:0,color:'var(--text-muted)'}}/>
                </div>
                <span style={{fontSize:'0.78rem',color:'var(--text-secondary)',lineHeight:1.5}}>{r.desc}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {resources.length === 0 && (
        <div style={{padding:'12px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',marginBottom:20,fontSize:'0.875rem',color:'var(--text-secondary)'}}>
          No subject-specific resources listed yet for {selSubj}. Use the general resources below.
        </div>
      )}

      {/* General resources */}
      <h4 style={{marginBottom:10,fontSize:'0.9rem',color:'var(--text-muted)'}}>
        General revision resources (all subjects)
      </h4>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:10}}>
        {generic.map(r => (
          <a key={r.name} href={r.url} target="_blank" rel="noreferrer"
            style={{display:'flex',flexDirection:'column',gap:4,padding:'12px 14px',background:'var(--bg-card)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',textDecoration:'none',color:'inherit'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}}>
              <span style={{fontWeight:700,fontSize:'0.875rem',color:'var(--text-primary)'}}>{r.name}</span>
              <ExternalLink size={13} style={{flexShrink:0,color:'var(--text-muted)'}}/>
            </div>
            <span style={{fontSize:'0.78rem',color:'var(--text-secondary)',lineHeight:1.5}}>{r.desc}</span>
          </a>
        ))}
      </div>

      <p style={{fontSize:'0.75rem',color:'var(--text-muted)',marginTop:12,lineHeight:1.6}}>
        All resources listed are free. Clicking opens them in a new tab. Use the AI Advice button on individual topics for personalised recommendations for specific topics.
      </p>
    </div>
  )
}
