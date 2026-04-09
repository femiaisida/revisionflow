// src/pages/AIAdvisor.jsx
import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { buildAIContext, getSystemPrompt } from '../utils/buildAIContext'
import { usePriority } from '../context/PriorityContext'
import { collection, getDocs, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import {
  chatWithAI,
  getResourceRecommendations,
  generateStudyPlan,
  analyseWeaknesses,
  getTopicAdvice,
  predictGrade,
  suggestNextTopic,
  markAnswer,
  generateFlashcards,
} from '../utils/ai'
import { checkAndAwardBadge } from '../utils/firestore'
import AIOutput from '../components/AIOutput'
import { SUBJECT_COLOURS } from '../data/subjects'
import { MessageSquare, Send, Zap, BookOpen, TrendingUp, X, Brain, Star, Target, FileText, Check, Lightbulb } from 'lucide-react'

const QUICK_PROMPTS = [
  'What should I revise today?',
  'Which topic needs the most work?',
  'How do I improve from grade 8 to 9?',
  'Give me tips for exam technique',
  'What are my weakest subjects?',
  'Predict my likely grade',
]

export default function AIAdvisor() {
  const { profile, user } = useAuth()
  const { priorities, getTopPriorities } = usePriority()
  const [messages,    setMessages]    = useState([])
  const [input,       setInput]       = useState('')
  const [loading,     setLoading]     = useState(false)
  const [tab,         setTab]         = useState('chat')
  const [resources,   setResources]   = useState({})
  const [loadingRes,  setLoadingRes]  = useState(null)
  const [studyPlan,   setStudyPlan]   = useState('')
  const [planLoading, setPlanLoading] = useState(false)
  const [planPrefs,   setPlanPrefs]   = useState({
    showForm: false, confirmed: false,
    hoursPerWeek: 10, preferences: 'Balanced content and exam practice'
  })
  const [planCopied,  setPlanCopied]  = useState(false)
  const [calAdded,    setCalAdded]    = useState(false)
  const [showAddCal,  setShowAddCal]  = useState(false)

  // Grade predictor
  const [gradeSubj,   setGradeSubj]   = useState('')
  const [gradePred,   setGradePred]   = useState('')
  const [gradeLoad,   setGradeLoad]   = useState(false)

  // Next topic suggestion
  const [nextSubj,    setNextSubj]    = useState('')
  const [nextTopic,   setNextTopic]   = useState('')
  const [nextLoad,    setNextLoad]    = useState(false)

  // Answer marker
  const [markSubj,    setMarkSubj]    = useState('')
  const [markQ,       setMarkQ]       = useState('')
  const [markA,       setMarkA]       = useState('')
  const [markResult,  setMarkResult]  = useState('')
  const [markMarks,   setMarkMarks]   = useState('')
  const [markIsPaper, setMarkIsPaper] = useState(false)
  const [markYear,    setMarkYear]    = useState('2024')
  const [markPaperNum,setMarkPaperNum]= useState('1')
  const [markLoad,    setMarkLoad]    = useState(false)

  // Techniques
  const [techSubj,    setTechSubj]    = useState('')
  const [techLoading, setTechLoading] = useState(false)
  const [techResult,  setTechResult]  = useState('')

  // Flashcard generator
  const [flashSubj,   setFlashSubj]   = useState('')
  const [flashTopic,  setFlashTopic]  = useState('')
  const [flashCards,  setFlashCards]  = useState([])
  const [flashLoad,   setFlashLoad]   = useState(false)
  const [flashCount,  setFlashCount]  = useState(10)

  const bottomRef = useRef()
  const [userContext, setUserContext] = useState('')

  useEffect(() => { buildContext() }, [profile, user])

  useEffect(() => {
    if (!user) return
    const loadSaved = async () => {
      try {
        const snap = await getDoc(doc(db, 'users', user.uid, 'aiData', 'studyPlan'))
        if (snap.exists() && snap.data().text) {
          setStudyPlan(snap.data().text)
          setPlanPrefs(p => ({...p, hoursPerWeek: snap.data().hoursPerWeek||10, preferences: snap.data().preferences||p.preferences}))
        }
      } catch(e) {}
    }
    loadSaved()
  }, [user])

  useEffect(() => { bottomRef.current?.scrollIntoView({behavior:'smooth'}) }, [messages])

  async function buildContext() {
    if (!user || !profile) return
    try {
      const [papersSnap, topicsSnap, mistakesSnap] = await Promise.all([
        getDocs(collection(db,'users',user.uid,'paperAttempts')),
        getDocs(collection(db,'users',user.uid,'topics')),
        getDocs(collection(db,'users',user.uid,'mistakes')),
      ])
      const papers   = papersSnap.docs.map(d=>d.data())
      const topics   = topicsSnap.docs.map(d=>d.data())
      const mistakes = mistakesSnap.docs.map(d=>d.data())

      const weakTopics   = topics.filter(t=>(t.confidence||3)<=2).slice(0,10).map(t=>`${t.subjectId}: ${t.name}`)
      const recentPapers = papers.slice(0,5).map(p=>`${p.subject} P${p.paper} ${p.year}: ${p.percentage}% (Grade ${p.grade||'?'})`)
      const topMistakes  = mistakes.filter(m=>!m.resolved).slice(0,5).map(m=>`${m.subject} - ${m.topic}: ${m.description?.slice(0,60)}`)

      const ctx = [
        `Student: ${profile.displayName}`,
        `Level: ${profile.level||1} | XP: ${profile.xp||0} | Streak: ${profile.streak||0} days`,
        `Subjects: ${(profile.subjects||[]).map(s=>`${s.name} (${s.board}, target: ${s.targetGrade||9})`).join(', ')}`,
        `Upcoming exams: ${(profile.examDates||[]).filter(e=>new Date(e.examDate)>new Date()).slice(0,5).map(e=>`${e.subject} P${e.paper} on ${e.examDate}`).join(', ')||'None set'}`,
        weakTopics.length   ? `Weak topics: ${weakTopics.join(', ')}`          : '',
        recentPapers.length ? `Recent papers: ${recentPapers.join(', ')}`      : '',
        topMistakes.length  ? `Unresolved mistakes: ${topMistakes.join(', ')}` : '',
      ].filter(Boolean).join('\n')
      setUserContext(ctx)

      setMessages([{
        role:'assistant',
        content:`Hi ${profile.displayName?.split(' ')[0]}! I'm your AI revision advisor and I can see your full profile.\n\n` +
          `You're revising: ${(profile.subjects||[]).map(s=>s.name).join(', ')||'no subjects set yet'}.\n\n` +
          (weakTopics.length ? `Your weakest topics right now: ${weakTopics.slice(0,3).join(', ')}.\n\n` : '') +
          `Ask me anything — I can predict your grades, suggest what to revise next, mark your practice answers, generate flashcards, or give specific advice on any topic.`
      }])
    } catch(e) {
      setMessages([{role:'assistant',content:`Hi! I'm your AI revision advisor. How can I help you today?`}])
    }
  }

  async function sendMessage(text) {
    const msg = text||input.trim()
    if (!msg||loading) return
    setInput('')
    const newMessages = [...messages,{role:'user',content:msg}]
    setMessages(newMessages)
    setLoading(true)
    const res = await chatWithAI(newMessages, { subjects: profile?.subjects, context: userContext })
    setMessages(ms=>[...ms,{role:'assistant',content:res.text||res.error||'Sorry, I had trouble responding.'}])
    setLoading(false)
  }

  async function getResources(subject) {
    setLoadingRes(subject)
    const subj = profile?.subjects?.find(s=>s.name===subject)
    const res  = await getResourceRecommendations(subject, subj?.board, subj?.tier, [])
    setResources(r=>({...r,[subject]:res.text||res.error}))
    setLoadingRes(null)
  }

  async function handleStudyPlan() {
    if (!planPrefs.confirmed) { setPlanPrefs(p=>({...p, showForm:true})); return }
    setPlanLoading(true)
    const upcomingExams = (profile?.examDates||[])
      .filter(e => new Date(e.examDate) > new Date())
      .sort((a,b) => new Date(a.examDate) - new Date(b.examDate))
    const firstExam = upcomingExams[0]
    const lastExam  = upcomingExams[upcomingExams.length-1]
    const weeksUntilFirst = firstExam
      ? Math.max(1, Math.ceil((new Date(firstExam.examDate)-new Date())/(7*86400000)))
      : 12
    const res = await generateStudyPlan({
      subjects:       profile?.subjects||[],
      examDates:      profile?.examDates||[],
      weakTopics:     [],
      availableHours: planPrefs.hoursPerWeek,
      preferences:    planPrefs.preferences,
      weeksUntilFirst,
      firstExamDate:  firstExam?.examDate,
      lastExamDate:   lastExam?.examDate,
    })
    const planText = res.text||res.error||''
    setStudyPlan(planText)
    if (res.text && user) {
      await checkAndAwardBadge(user.uid, 'ai_plan').catch(()=>{})
      try {
        await setDoc(doc(db, 'users', user.uid, 'aiData', 'studyPlan'), {
          text:         planText,
          hoursPerWeek: planPrefs.hoursPerWeek,
          preferences:  planPrefs.preferences,
          generatedAt:  serverTimestamp(),
        })
      } catch(e) {}
    }
    setPlanLoading(false)
  }

  async function handleGradePredict() {
    if (!gradeSubj) return
    setGradeLoad(true)
    // Fetch paper attempts and topic confidences for this subject
    let papers = [], topics = []
    try {
      const [ps, ts] = await Promise.all([
        getDocs(collection(db,'users',user.uid,'paperAttempts')),
        getDocs(collection(db,'users',user.uid,'topics')),
      ])
      papers = ps.docs.map(d=>d.data())
      topics = ts.docs.map(d=>d.data())
    } catch(e) {}
    const res = await predictGrade(gradeSubj, papers, topics)
    setGradePred(res.text||res.error||'')
    setGradeLoad(false)
  }

  async function handleNextTopic() {
    if (!nextSubj) return
    setNextLoad(true)
    let topics = [], examDates = profile?.examDates || []
    try {
      const ts = await getDocs(collection(db,'users',user.uid,'topics'))
      topics = ts.docs.map(d=>d.data())
    } catch(e) {}
    const res = await suggestNextTopic(nextSubj, topics, examDates)
    setNextTopic(res.text||res.error||'')
    setNextLoad(false)
  }

  async function handleMarkAnswer() {
    if (!markSubj||!markQ||!markA) return
    setMarkLoad(true)
    setMarkResult('')
    // Build an enriched question string with optional context
    const enrichedQ = markIsPaper
      ? `[${markSubj} ${markYear} Paper ${markPaperNum}${markMarks ? `, ${markMarks} marks` : ''}] ${markQ}`
      : markMarks ? `[${markMarks} marks] ${markQ}` : markQ
    const res = await markAnswer(markSubj, enrichedQ, markA)
    setMarkResult(res.text||res.error||'')
    setMarkLoad(false)
  }

  async function handleFlashcards() {
    if (!flashSubj) return
    setFlashLoad(true)
    const res = await generateFlashcards(flashSubj, flashTopic, flashCount)
    const text = res.text||''
    const cards = []
    const matches = text.matchAll(/Q:\s*(.+?)\nA:\s*([\s\S]+?)(?=\nQ:|$)/g)
    for (const m of matches) cards.push({q:m[1].trim(),a:m[2].trim()})
    setFlashCards(cards.length ? cards : [{q:'Flashcards generated',a:text}])
    setFlashLoad(false)
  }

  async function handleTechniques() {
    if (!techSubj) return
    setTechLoading(true)
    setTechResult('')
    const res = await getTopicAdvice(techSubj, `revision techniques for ${techSubj}`, 3, [])
    setTechResult(res.text||res.error||'')
    setTechLoading(false)
  }

  const subjects = profile?.subjects?.map(s=>s.name)||[]

  return (
    <div className="fade-in" style={{maxWidth:860,margin:'0 auto'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
        <div>
          <h2 style={{display:'flex',alignItems:'center',gap:9}}><MessageSquare size={22} color="var(--accent-light)"/> AI Revision Advisor</h2>
          <p style={{fontSize:'0.82rem'}}>Powered by Mistral AI · Sees your full profile · Free</p>
        </div>
      </div>

      <div className="tabs" style={{marginBottom:20}}>
        {[
          {k:'chat',       label:'Chat',          icon:MessageSquare},
          {k:'predict',    label:'Grade Predict',  icon:Target},
          {k:'next',       label:'Next Topic',     icon:Brain},
          {k:'mark',       label:'Mark Answer',    icon:FileText},
          {k:'flash',      label:'Flashcards',     icon:Star},
          {k:'resources',  label:'Resources',      icon:BookOpen},
          {k:'plan',       label:'Study Plan',     icon:TrendingUp},
          {k:'techniques', label:'Techniques',     icon:Lightbulb},
        ].map(({k,label,icon:Icon})=>(
          <button key={k} className={`tab${tab===k?' active':''}`} onClick={()=>setTab(k)}>
            <Icon size={13}/> {label}
          </button>
        ))}
      </div>

      {/* ── Chat ── */}
      {tab==='chat'&&(
        <div className="card" style={{display:'flex',flexDirection:'column',height:'calc(100vh - 300px)',minHeight:400}}>
          <div style={{flex:1,overflowY:'auto',display:'flex',flexDirection:'column',gap:10,padding:'12px 0'}}>
            {messages.map((m,i)=>(
              <div key={i} style={{display:'flex',gap:8,alignItems:'flex-start',flexDirection:m.role==='user'?'row-reverse':'row'}}>
                <div style={{width:30,height:30,borderRadius:'50%',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',background:m.role==='user'?'var(--accent)':'rgba(124,58,237,0.2)'}}>
                  {m.role==='user'?'👤':<Zap size={14} color="var(--accent-light)"/>}
                </div>
                {m.role==='user' ? (
                  <div style={{maxWidth:'78%',padding:'9px 13px',borderRadius:'var(--radius-lg)',background:'var(--accent)',fontSize:'0.875rem',lineHeight:1.7,borderBottomRightRadius:4}}>
                    {m.content}
                  </div>
                ) : (
                  <div style={{maxWidth:'88%'}}>
                    <AIOutput text={m.content} label="AI Response" />
                  </div>
                )}
              </div>
            ))}
            {loading&&(
              <div style={{display:'flex',gap:8}}>
                <div style={{width:30,height:30,borderRadius:'50%',background:'rgba(124,58,237,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}><Zap size={14} color="var(--accent-light)"/></div>
                <div style={{padding:'9px 13px',background:'var(--bg-surface)',borderRadius:'var(--radius-lg)',border:'1px solid var(--border)'}}>
                  <div style={{display:'flex',gap:3}}>{[0,1,2].map(i=><div key={i} style={{width:5,height:5,borderRadius:'50%',background:'var(--accent)',animation:`bounce 1s ease ${i*0.15}s infinite`}}/>)}</div>
                </div>
              </div>
            )}
            <div ref={bottomRef}/>
          </div>
          <div style={{padding:'8px 0',borderTop:'1px solid var(--border)',display:'flex',gap:5,flexWrap:'wrap'}}>
            {QUICK_PROMPTS.map(p=><button key={p} className="btn btn-secondary btn-sm" style={{fontSize:'0.72rem'}} onClick={()=>sendMessage(p)}>{p}</button>)}
          </div>
          <div style={{display:'flex',gap:8,paddingTop:10}}>
            <input className="input" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask me anything…" onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage()}}} disabled={loading}/>
            <button className="btn btn-primary btn-icon" onClick={()=>sendMessage()} disabled={!input.trim()||loading}><Send size={17}/></button>
          </div>
        </div>
      )}

      {/* ── Grade Predictor ── */}
      {tab==='predict'&&(
        <div className="card">
          <h4 style={{marginBottom:4,display:'flex',alignItems:'center',gap:8}}><Target size={18} color="var(--accent-light)"/> Grade Predictor</h4>
          <p style={{marginBottom:16,fontSize:'0.875rem'}}>Based on your paper scores, topic confidence, and revision patterns.</p>
          <div style={{display:'flex',gap:8,marginBottom:16}}>
            <select className="select" value={gradeSubj} onChange={e=>setGradeSubj(e.target.value)}>
              <option value="">Select subject…</option>
              {subjects.map(s=><option key={s} value={s}>{s}</option>)}
            </select>
            <button className="btn btn-primary" onClick={handleGradePredict} disabled={gradeLoad||!gradeSubj}>
              {gradeLoad?'Predicting…':'Predict grade'}
            </button>
          </div>
          {gradeLoad&&<div className="loading-center"><div className="spinner"/></div>}
          {gradePred&&<div style={{marginTop:16}}><AIOutput text={gradePred} label="Grade Prediction" /></div>}
        </div>
      )}

      {/* ── Next Topic ── */}
      {tab==='next'&&(
        <div className="card">
          <h4 style={{marginBottom:4,display:'flex',alignItems:'center',gap:8}}><Brain size={18} color="var(--accent-light)"/> What Should I Revise Next?</h4>
          <p style={{marginBottom:16,fontSize:'0.875rem'}}>AI picks your highest-priority topic based on confidence ratings, exam proximity, and recent mistakes.</p>
          <div style={{display:'flex',gap:8,marginBottom:16}}>
            <select className="select" value={nextSubj} onChange={e=>setNextSubj(e.target.value)}>
              <option value="">Select subject…</option>
              {subjects.map(s=><option key={s} value={s}>{s}</option>)}
            </select>
            <button className="btn btn-primary" onClick={handleNextTopic} disabled={nextLoad||!nextSubj}>
              {nextLoad?'Thinking…':'Suggest topic'}
            </button>
          </div>
          {nextLoad&&<div className="loading-center"><div className="spinner"/></div>}
          {nextTopic&&<div style={{marginTop:16}}><AIOutput text={nextTopic} label="Topic Suggestion" /></div>}
        </div>
      )}

      {/* ── Answer Marker ── */}
      {tab==='mark'&&(
        <div className="card">
          <h4 style={{marginBottom:4,display:'flex',alignItems:'center',gap:8}}><FileText size={18} color="var(--accent-light)"/> AI Answer Marker</h4>
          <p style={{marginBottom:16,fontSize:'0.875rem'}}>Write a practice answer and the AI marks it like a GCSE examiner — with feedback and a model answer.</p>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div><label className="label">Subject</label>
              <select className="select" value={markSubj} onChange={e=>setMarkSubj(e.target.value)}>
                <option value="">Select…</option>
                {subjects.map(s=><option key={s} value={s}>{s}</option>)}
              </select></div>
            <div><label className="label">Question</label>
              <textarea className="textarea" style={{minHeight:70}} value={markQ} onChange={e=>setMarkQ(e.target.value)} placeholder="Paste or type the exam question here…"/></div>
            <div><label className="label">Your answer</label>
              <textarea className="textarea" style={{minHeight:120}} value={markA} onChange={e=>setMarkA(e.target.value)} placeholder="Write your answer here…"/></div>
            <div className="grid-2" style={{gap:10}}>
              <div>
                <label className="label">Marks available (optional)</label>
                <input className="input" type="number" min={1} max={40} value={markMarks} onChange={e=>setMarkMarks(e.target.value)} placeholder="e.g. 8"/>
              </div>
              <div style={{display:'flex',alignItems:'flex-end',gap:8}}>
                <label style={{display:'flex',alignItems:'center',gap:6,cursor:'pointer',paddingBottom:8}}>
                  <input type="checkbox" checked={markIsPaper} onChange={e=>setMarkIsPaper(e.target.checked)}
                    style={{width:15,height:15,accentColor:'var(--accent)'}}/>
                  <span style={{fontSize:'0.82rem',fontWeight:500}}>From a real past paper</span>
                </label>
              </div>
            </div>
            {markIsPaper && (
              <div className="grid-2" style={{gap:10}}>
                <div>
                  <label className="label">Year</label>
                  <select className="select" value={markYear} onChange={e=>setMarkYear(e.target.value)}>
                    {[2024,2023,2022,2021,2020,2019,2018,2017].map(y=><option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label">Paper number</label>
                  <select className="select" value={markPaperNum} onChange={e=>setMarkPaperNum(e.target.value)}>
                    {['1','2','3','4'].map(p=><option key={p} value={p}>Paper {p}</option>)}
                  </select>
                </div>
              </div>
            )}
            <button className="btn btn-primary" onClick={handleMarkAnswer} disabled={markLoad||!markSubj||!markQ||!markA}>
              {markLoad?'Marking…':'Mark my answer'}
            </button>
          </div>
          {markLoad&&<div className="loading-center" style={{marginTop:16}}><div className="spinner"/></div>}
          {markResult&&<div style={{marginTop:16}}><AIOutput text={markResult} label="Marking Feedback" /></div>}
        </div>
      )}

      {/* ── Flashcards ── */}
      {tab==='flash'&&(
        <div>
          <div className="card" style={{marginBottom:16}}>
            <h4 style={{marginBottom:4,display:'flex',alignItems:'center',gap:8}}><Star size={18} color="var(--accent-light)"/> AI Flashcard Generator</h4>
            <p style={{marginBottom:14,fontSize:'0.875rem'}}>Generate detailed flashcards for any topic. Copy them to Anki, Quizlet, or Gizmo.</p>
            <div className="grid-2" style={{gap:10,marginBottom:10}}>
              <div><label className="label">Subject</label>
                <select className="select" value={flashSubj} onChange={e=>setFlashSubj(e.target.value)}>
                  <option value="">Select…</option>
                  {subjects.map(s=><option key={s} value={s}>{s}</option>)}
                </select></div>
              <div><label className="label">Topic (optional)</label>
                <input className="input" value={flashTopic} onChange={e=>setFlashTopic(e.target.value)} placeholder="e.g. Cell biology"/></div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}}>
              <div>
                <label className="label">Number of cards</label>
                <select className="select" style={{width:'auto'}} value={flashCount} onChange={e=>setFlashCount(parseInt(e.target.value))}>
                  {[5,8,10,15,20,25,30].map(n=><option key={n} value={n}>{n} cards</option>)}
                </select>
              </div>
              <button className="btn btn-primary" style={{alignSelf:'flex-end'}} onClick={handleFlashcards} disabled={flashLoad||!flashSubj}>
                {flashLoad?'Generating…':`Generate ${flashCount} flashcards`}
              </button>
            </div>
          </div>
          {flashLoad&&<div className="loading-center"><div className="spinner"/></div>}
          {flashCards.length>0&&(
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:12}}>
              {flashCards.map((c,i)=>(
                <div key={i} className="card" style={{padding:14}}>
                  <div style={{fontWeight:600,fontSize:'0.875rem',marginBottom:8,color:'var(--accent-light)'}}>Q: {c.q}</div>
                  <div style={{fontSize:'0.85rem',lineHeight:1.7,color:'var(--text-secondary)'}}>A: {c.a}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Resources ── */}
      {tab==='resources'&&(
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          <p>Personalised resource recommendations for each of your subjects.</p>
          {(profile?.subjects||[]).map(s=>(
            <div key={s.name} className="card">
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:resources[s.name]?12:0}}>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <div style={{width:9,height:9,borderRadius:'50%',background:SUBJECT_COLOURS[s.name]||'var(--accent)'}}/>
                  <h4>{s.name}</h4>
                  <span className="badge badge-grey">{s.board}</span>
                </div>
                <button className="btn btn-secondary btn-sm" onClick={()=>getResources(s.name)} disabled={loadingRes===s.name}>
                  {loadingRes===s.name?'Loading…':<><BookOpen size={13}/> Get resources</>}
                </button>
              </div>
              {resources[s.name]&&<div style={{marginTop:12}}><AIOutput text={resources[s.name]} label={`Resources for ${s.name}`} /></div>}
            </div>
          ))}
        </div>
      )}

      {/* ── Study Plan ── */}
      {tab==='plan'&&(
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14,flexWrap:'wrap',gap:10}}>
            <div>
              <h4>AI Study Plan</h4>
              <p style={{fontSize:'0.875rem'}}>Personalised plan based on your subjects, exam dates and preferences</p>
            </div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {studyPlan && (
                <>
                  <button className="btn btn-secondary btn-sm" onClick={()=>{
                    navigator.clipboard.writeText(studyPlan)
                    setPlanCopied(true)
                    setTimeout(()=>setPlanCopied(false),2000)
                  }}>
                    {planCopied ? <><Check size={13}/> Copied!</> : 'Copy'}
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={()=>{
                    const blob = new Blob([studyPlan],{type:'text/plain'})
                    const url  = URL.createObjectURL(blob)
                    const a    = document.createElement('a')
                    a.href=url; a.download='revision-study-plan.txt'; a.click()
                    URL.revokeObjectURL(url)
                  }}>
                    Save .txt
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={()=>setShowAddCal(true)} disabled={calAdded}>
                    {calAdded ? <><Check size={13}/> Added!</> : '+ Add to Calendar'}
                  </button>
                  <button className="btn btn-ghost btn-sm"
                    style={{color:'var(--text-muted)',fontSize:'0.75rem',borderColor:'var(--border)'}}
                    onClick={()=>setPlanPrefs(p=>({...p,showForm:true,confirmed:false}))} disabled={planLoading}>
                    New plan
                  </button>
                </>
              )}
              {!studyPlan && !planLoading && (
                <button className="btn btn-primary btn-sm" onClick={()=>setPlanPrefs(p=>({...p,showForm:true,confirmed:false}))}>
                  <Zap size={13}/> Generate
                </button>
              )}
              {planLoading && <span style={{fontSize:'0.82rem',color:'var(--text-muted)',alignSelf:'center'}}>Generating…</span>}
            </div>
          </div>

          {planPrefs.showForm && (
            <div style={{padding:14,background:'rgba(124,58,237,0.06)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',marginBottom:14}}>
              <h4 style={{marginBottom:12,fontSize:'0.9rem'}}>Customise your plan</h4>
              <div className="grid-2" style={{gap:10,marginBottom:12}}>
                <div>
                  <label className="label">Hours available per week</label>
                  <select className="select" value={planPrefs.hoursPerWeek} onChange={e=>setPlanPrefs(p=>({...p,hoursPerWeek:parseInt(e.target.value)}))}>
                    {[5,8,10,12,15,20].map(h=><option key={h} value={h}>{h} hours/week</option>)}
                  </select>
                </div>
                <div>
                  <label className="label">Focus preference</label>
                  <select className="select" value={planPrefs.preferences} onChange={e=>setPlanPrefs(p=>({...p,preferences:e.target.value}))}>
                    <option value="Balanced content and exam practice">Balanced (content + practice)</option>
                    <option value="Heavy exam practice focus">Heavy exam practice</option>
                    <option value="Content-heavy, build foundations first">Content-heavy (build foundations)</option>
                    <option value="Weak topics priority">Focus on weak topics first</option>
                  </select>
                </div>
              </div>
              {(profile?.examDates||[]).length > 0 ? (
                <div style={{padding:'6px 10px',background:'rgba(34,197,94,0.08)',border:'1px solid rgba(34,197,94,0.2)',borderRadius:'var(--radius-md)',fontSize:'0.8rem',marginBottom:10,display:'flex',alignItems:'center',gap:6}}>
                  <Check size={13} color="var(--success)"/>
                  {(profile.examDates||[]).filter(e=>new Date(e.examDate)>new Date()).length} upcoming exam dates found — plan will be capped to your exam period
                </div>
              ) : (
                <div style={{padding:'6px 10px',background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.2)',borderRadius:'var(--radius-md)',fontSize:'0.8rem',marginBottom:10}}>
                  ⚠ No exam dates set — add them in Exam Dates for a more accurate plan
                </div>
              )}
              <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
                <button className="btn btn-secondary btn-sm" onClick={()=>setPlanPrefs(p=>({...p,showForm:false}))}>Cancel</button>
                <button className="btn btn-primary btn-sm" onClick={()=>{setPlanPrefs(p=>({...p,showForm:false,confirmed:true}));handleStudyPlan()}}>
                  <Zap size={13}/> Generate plan
                </button>
              </div>
            </div>
          )}

          {planLoading&&<div className="loading-center"><div className="spinner"/></div>}
          {studyPlan&&!planLoading&&<div style={{marginTop:14}}><AIOutput text={studyPlan} label="Generated Study Plan" /></div>}
          {!studyPlan&&!planLoading&&!planPrefs.showForm&&(
            <div className="empty-state" style={{padding:'28px 0'}}>
              <TrendingUp size={36} style={{opacity:0.3}}/>
              <p>Click Generate to build your personalised revision plan</p>
              <p style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Uses your exam dates, subjects, and grade targets</p>
            </div>
          )}
        </div>
      )}

      {/* ── Revision Techniques ── */}
      {tab==='techniques'&&(
        <div>
          <div className="card" style={{marginBottom:16}}>
            <h4 style={{marginBottom:4,display:'flex',alignItems:'center',gap:8}}>
              <Lightbulb size={18} color="var(--accent-light)"/> Evidence-Based Revision Techniques
            </h4>
            <p style={{marginBottom:14,fontSize:'0.875rem',color:'var(--text-secondary)'}}>
              Get subject-specific advice on the most effective revision methods — grounded in cognitive science research.
            </p>
            <div style={{display:'flex',gap:10,alignItems:'flex-end',flexWrap:'wrap'}}>
              <div style={{flex:1,minWidth:180}}>
                <label className="label">Choose a subject</label>
                <select className="select" value={techSubj} onChange={e=>setTechSubj(e.target.value)}>
                  <option value="">Select subject…</option>
                  {subjects.map(s=><option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <button className="btn btn-primary" onClick={handleTechniques}
                disabled={techLoading||!techSubj} style={{minWidth:140}}>
                {techLoading?'Generating…':'Get techniques'}
              </button>
            </div>
          </div>

          {techLoading && <div className="loading-center" style={{marginBottom:16}}><div className="spinner"/></div>}
          {techResult && (
            <div style={{marginBottom:16}}>
              <AIOutput text={techResult} label={`Revision Techniques — ${techSubj}`} />
            </div>
          )}

          <div className="card" style={{marginBottom:16}}>
            <h4 style={{marginBottom:12}}>The 6 most effective revision techniques (research-backed)</h4>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:10}}>
              {[
                {name:'Retrieval Practice',rating:'★★★★★',ratingCol:'var(--success)',desc:'Testing yourself on content rather than re-reading it. The act of retrieving strengthens memory far more than passive review.',how:'Use flashcards, practice questions, past papers, or cover your notes and write down everything you remember.',avoid:'Passive re-reading and highlighting — these feel productive but produce almost no durable learning.'},
                {name:'Spaced Repetition',rating:'★★★★★',ratingCol:'var(--success)',desc:'Reviewing material at increasing intervals (e.g. 1 day → 3 days → 7 days → 21 days). Exploits the spacing effect to dramatically reduce forgetting.',how:'Anki, Quizlet, or RevisionFlow flashcard system. Review topics you found hard more frequently.',avoid:'Cramming the night before — this produces short-term recall but very little long-term retention.'},
                {name:'Interleaving',rating:'★★★★☆',ratingCol:'var(--success)',desc:'Mixing different topics or subjects within a single study session instead of blocking all of one topic before moving on.',how:'In a 90-minute session, spend 30 min on Topic A, 30 min on Topic B, 30 min on Topic C — not 90 min on Topic A.',avoid:'Blocked practice — feels easier but builds weaker memories.'},
                {name:'Elaborative Interrogation',rating:'★★★★☆',ratingCol:'var(--warning)',desc:'Asking "why?" and "how?" about facts rather than accepting them at face value. Forces deeper processing.',how:'For each fact, ask: "Why is this true? How does this connect to what I already know?"',avoid:'Learning facts in isolation without connecting them to wider knowledge.'},
                {name:'Concrete Examples',rating:'★★★★☆',ratingCol:'var(--warning)',desc:'Grounding abstract concepts in specific, memorable examples. Particularly powerful for sciences, economics, and law.',how:'For every abstract principle, write down 2–3 real-world examples. Draw diagrams that show the concept in action.',avoid:'Abstract definitions without application — hard to recall under exam pressure.'},
                {name:'Dual Coding',rating:'★★★☆☆',ratingCol:'var(--warning)',desc:'Combining verbal and visual information — words plus diagrams, charts, or mind maps.',how:'Draw diagrams from memory, create visual summaries, annotate your notes with sketches.',avoid:'Relying on either text OR visuals alone — the combination is what matters.'},
              ].map(t=>(
                <div key={t.name} style={{padding:'12px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
                    <span style={{fontWeight:700,fontSize:'0.9rem'}}>{t.name}</span>
                    <span style={{fontSize:'0.75rem',color:t.ratingCol,fontWeight:700}}>{t.rating}</span>
                  </div>
                  <p style={{fontSize:'0.78rem',color:'var(--text-secondary)',lineHeight:1.6,marginBottom:6}}>{t.desc}</p>
                  <div style={{fontSize:'0.75rem',lineHeight:1.5}}>
                    <span style={{color:'var(--success)',fontWeight:600}}>✓ How: </span>
                    <span style={{color:'var(--text-secondary)'}}>{t.how}</span>
                  </div>
                  <div style={{fontSize:'0.75rem',lineHeight:1.5,marginTop:3}}>
                    <span style={{color:'var(--danger)',fontWeight:600}}>✗ Avoid: </span>
                    <span style={{color:'var(--text-secondary)'}}>{t.avoid}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showAddCal && (
        <AddPlanToCalendarModal
          studyPlan={studyPlan}
          profile={profile}
          user={user}
          onClose={()=>setShowAddCal(false)}
          onDone={()=>{setShowAddCal(false);setCalAdded(true);setTimeout(()=>setCalAdded(false),4000)}}/>
      )}

      <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}`}</style>
    </div>
  )
}

// ── Add Plan to Calendar Modal ────────────────────────────────────────────────
function AddPlanToCalendarModal({ studyPlan, profile, user, onClose, onDone }) {
  const [mode,    setMode]    = useState('add')
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(null)

  const subjects  = profile?.subjects?.map(s => s.name) || []
  const examDates = profile?.examDates || []

  function parsePlanToSessions() {
    const sessions = []
    const today    = new Date()
    const weekMatches = studyPlan.match(/week\s+(\d+)/gi) || []
    const maxWeek = weekMatches.length
      ? Math.max(...weekMatches.map(w => parseInt(w.replace(/\D/g,''))))
      : 12

    subjects.forEach((subj, si) => {
      if (!studyPlan.toLowerCase().includes(subj.toLowerCase())) return
      const examEntry = examDates
        .filter(e => e.subject === subj && new Date(e.examDate) > today)
        .sort((a,b) => new Date(a.examDate) - new Date(b.examDate))[0]
      const examDate  = examEntry ? new Date(examEntry.examDate) : null
      const weeksAway = examDate
        ? Math.max(1, Math.ceil((examDate - today) / (7*86400000)))
        : maxWeek
      const sessionsPerSubj = Math.max(2, Math.floor(weeksAway * 2 / Math.max(subjects.length, 1)))
      const intervalDays    = Math.max(1, Math.floor((weeksAway * 7) / sessionsPerSubj))

      for (let i = 0; i < sessionsPerSubj && i < 20; i++) {
        const dayOffset   = i * intervalDays + (si % 3)
        const sessionDate = new Date(today)
        sessionDate.setDate(today.getDate() + dayOffset)
        if (sessionDate.getDay() === 0) sessionDate.setDate(sessionDate.getDate() + 1)
        const isExamPractice = i >= Math.floor(sessionsPerSubj * 0.6)
        const hour = 17 + (si % 3)
        sessionDate.setHours(hour, 0, 0, 0)
        const endDate = new Date(sessionDate.getTime() + 45*60000)
        sessions.push({
          subject: subj, type: isExamPractice ? 'Exam Practice' : 'Content Revision',
          title:   `${subj} – ${isExamPractice ? 'Exam Practice' : 'Content Revision'}`,
          date:    sessionDate.toISOString().slice(0,10),
          start:   `${String(hour).padStart(2,'0')}:00`,
          startTime: sessionDate.toISOString(), endTime: endDate.toISOString(),
          duration: 45, source: 'ai-plan', completed: false, notes: 'Generated from AI Study Plan',
        })
      }
    })
    return sessions.sort((a,b) => new Date(a.startTime) - new Date(b.startTime))
  }

  useEffect(() => { setPreview(parsePlanToSessions()) }, [])

  async function handleConfirm() {
    if (!user || !preview) return
    setLoading(true)
    try {
      const { collection: col, addDoc: aDoc, getDocs, writeBatch, doc: fdoc, serverTimestamp: sTs } = await import('firebase/firestore')
      const { db: fdb } = await import('../firebase')
      if (mode === 'replace') {
        const snap  = await getDocs(col(fdb, 'users', user.uid, 'sessions'))
        const batch = writeBatch(fdb)
        snap.docs.forEach(d => batch.delete(fdoc(fdb, 'users', user.uid, 'sessions', d.id)))
        await batch.commit()
      }
      for (const s of preview) {
        await aDoc(col(fdb, 'users', user.uid, 'sessions'), { ...s, createdAt: sTs() })
      }
      onDone()
    } catch(err) {
      alert('Failed: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const bySubject = preview ? preview.reduce((acc, s) => { acc[s.subject] = (acc[s.subject]||0)+1; return acc }, {}) : {}

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{maxWidth:520}} onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Add study plan to calendar</span>
          <button className="btn btn-ghost btn-icon" onClick={onClose}>✕</button>
        </div>
        <p style={{fontSize:'0.875rem',marginBottom:14}}>
          This will create revision sessions in your calendar based on the AI study plan.
        </p>
        {preview && (
          <>
            <div style={{padding:'8px 12px',background:'rgba(124,58,237,0.08)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',fontSize:'0.82rem',marginBottom:14}}>
              <strong>{preview.length} sessions</strong> across {Object.keys(bySubject).length} subjects:
              <div style={{marginTop:6,display:'flex',flexWrap:'wrap',gap:6}}>
                {Object.entries(bySubject).map(([s,n])=>(
                  <span key={s} className="badge badge-purple" style={{fontSize:'0.72rem'}}>{s}: {n}</span>
                ))}
              </div>
            </div>
            <div style={{maxHeight:160,overflowY:'auto',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',marginBottom:14}}>
              {preview.slice(0,8).map((s,i)=>(
                <div key={i} style={{display:'flex',gap:10,padding:'5px 10px',borderBottom:'1px solid var(--border)',fontSize:'0.78rem',alignItems:'center'}}>
                  <span style={{color:'var(--text-muted)',flexShrink:0,minWidth:68}}>{s.date}</span>
                  <span style={{flex:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{s.title}</span>
                  <span className={`badge badge-${s.type.includes('Exam')?'blue':'purple'}`} style={{fontSize:'0.65rem',flexShrink:0}}>{s.type==='Exam Practice'?'Exam':'Content'}</span>
                </div>
              ))}
              {preview.length>8&&<div style={{padding:'4px 10px',fontSize:'0.72rem',color:'var(--text-muted)'}}>…and {preview.length-8} more</div>}
            </div>
          </>
        )}
        <div style={{marginBottom:16}}>
          <label className="label">What to do with existing sessions?</label>
          {[
            {val:'add',     label:'Add to existing calendar', desc:'Keeps current sessions'},
            {val:'replace', label:'Replace existing calendar', desc:'Deletes all current sessions first'},
          ].map(opt=>(
            <button key={opt.val} onClick={()=>setMode(opt.val)}
              style={{display:'block',width:'100%',padding:'8px 12px',marginBottom:6,borderRadius:'var(--radius-md)',cursor:'pointer',textAlign:'left',
                border:`2px solid ${mode===opt.val?'var(--accent)':'var(--border)'}`,
                background:mode===opt.val?'rgba(124,58,237,0.1)':'var(--bg-surface)'}}>
              <span style={{fontWeight:600,fontSize:'0.875rem'}}>{opt.label}</span>
              <span style={{fontSize:'0.78rem',color:'var(--text-muted)',marginLeft:8}}>{opt.desc}</span>
            </button>
          ))}
        </div>
        <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleConfirm} disabled={loading||!preview?.length}>
            {loading?'Adding…':`Add ${preview?.length||0} sessions`}
          </button>
        </div>
      </div>
    </div>
  )
}
