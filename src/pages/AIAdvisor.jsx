// src/pages/AIAdvisor.jsx
import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { chatWithAI, getResourceRecommendations, generateStudyPlan, analyseWeaknesses } from '../utils/ai'
import { checkAndAwardBadge } from '../utils/firestore'
import { SUBJECT_COLOURS } from '../data/subjects'
import { MessageSquare, Send, Zap, BookOpen, TrendingUp, X, Brain, Star, Target, FileText, Check } from 'lucide-react'

const QUICK_PROMPTS = [
  'What should I revise today?',
  'Which topic needs the most work?',
  'How do I improve from grade 8 to 9?',
  'Give me tips for exam technique',
  'What are my weakest subjects?',
  'Predict my likely grade',
]

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`

async function callGemini(prompt) {
  if (!GEMINI_KEY) return { error: 'No Gemini API key configured.' }
  try {
    const res  = await fetch(GEMINI_URL, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ contents:[{parts:[{text:prompt}]}], generationConfig:{temperature:0.7,maxOutputTokens:8192} })
    })
    const data = await res.json()
    if (data.error) return { error: data.error.message }
    return { text: data.candidates?.[0]?.content?.parts?.[0]?.text||'' }
  } catch(e) { return { error: e.message } }
}

export default function AIAdvisor() {
  const { profile, user } = useAuth()
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
  const [planCopied, setPlanCopied] = useState(false)

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
  const [markLoad,    setMarkLoad]    = useState(false)

  // Flashcard generator
  const [flashSubj,   setFlashSubj]   = useState('')
  const [flashTopic,  setFlashTopic]  = useState('')
  const [flashCards,  setFlashCards]  = useState([])
  const [flashLoad,   setFlashLoad]   = useState(false)

  const bottomRef = useRef()

  // Build context string from real user data
  const [userContext, setUserContext] = useState('')

  useEffect(() => { buildContext() }, [profile, user])
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
        weakTopics.length   ? `Weak topics: ${weakTopics.join(', ')}`             : '',
        recentPapers.length ? `Recent papers: ${recentPapers.join(', ')}`         : '',
        topMistakes.length  ? `Unresolved mistakes: ${topMistakes.join(', ')}`    : '',
      ].filter(Boolean).join('\n')
      setUserContext(ctx)

      // Set initial greeting with context
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

    const SYSTEM = `You are RevisionFlow's AI tutor for UK GCSE and A-Level students. Be specific, practical and encouraging. Reference free resources (Dr Frost, Cognito, PMT, SaveMyExams, Seneca, Mr Bruff, Craig 'n' Dave). Use the student's real data below to give personalised advice.\n\n${userContext}`
    const conversation = newMessages.map(m=>`${m.role==='user'?'Student':'AI'}: ${m.content}`).join('\n')
    const prompt = `${SYSTEM}\n\nConversation:\n${conversation}\n\nAI:`

    const res = await callGemini(prompt)
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
    // Calculate weeks until first exam
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
    setStudyPlan(res.text||res.error||'')
    if (res.text && user) await checkAndAwardBadge(user.uid, 'ai_plan').catch(()=>{})
    setPlanLoading(false)
  }

  async function handleGradePredict() {
    if (!gradeSubj) return
    setGradeLoad(true)
    const prompt = `${userContext}\n\nPredict the likely final GCSE grade for: ${gradeSubj}\nBased on: recent paper scores, topic confidence, and typical grade progression patterns.\nGive: predicted grade range, confidence level, what would push it higher, what risks pushing it lower. Be specific and honest.`
    const res = await callGemini(prompt)
    setGradePred(res.text||res.error||'')
    setGradeLoad(false)
  }

  async function handleNextTopic() {
    if (!nextSubj) return
    setNextLoad(true)
    const prompt = `${userContext}\n\nFor subject: ${nextSubj}\nBased on: confidence ratings, exam proximity, recent mistakes, and revision history — what ONE topic should this student revise next and why? Give specific action steps for the next 45-minute session.`
    const res = await callGemini(prompt)
    setNextTopic(res.text||res.error||'')
    setNextLoad(false)
  }

  async function handleMarkAnswer() {
    if (!markSubj||!markQ||!markA) return
    setMarkLoad(true)
    const prompt = `You are a ${markSubj} GCSE examiner. Mark this student's answer:\n\nQuestion: ${markQ}\n\nStudent's answer: ${markA}\n\nProvide: estimated mark out of the likely total, specific strengths, specific improvements needed, what a model answer would include. Be encouraging but honest.`
    const res = await callGemini(prompt)
    setMarkResult(res.text||res.error||'')
    setMarkLoad(false)
  }

  async function handleFlashcards() {
    if (!flashSubj) return
    setFlashLoad(true)
    const prompt = `Generate 8 detailed GCSE flashcards for: ${flashSubj}${flashTopic?` — ${flashTopic}`:''}\n\nFor each card:\nQ: [clear question]\nA: [concise but complete answer]\n\nFocus on high-frequency exam topics. Include key definitions, processes, and common exam question types.`
    const res = await callGemini(prompt)
    // Parse cards from response
    const text = res.text||''
    const cards = []
    const matches = text.matchAll(/Q:\s*(.+?)\nA:\s*([\s\S]+?)(?=\nQ:|$)/g)
    for (const m of matches) cards.push({q:m[1].trim(),a:m[2].trim()})
    setFlashCards(cards.length ? cards : [{q:'Flashcards generated',a:text}])
    setFlashLoad(false)
  }

  const subjects = profile?.subjects?.map(s=>s.name)||[]

  return (
    <div className="fade-in" style={{maxWidth:860,margin:'0 auto'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
        <div>
          <h2 style={{display:'flex',alignItems:'center',gap:9}}><MessageSquare size={22} color="var(--accent-light)"/> AI Revision Advisor</h2>
          <p style={{fontSize:'0.82rem'}}>Powered by Gemini 2.5 Flash · Sees your full profile · Free</p>
        </div>
      </div>

      <div className="tabs" style={{marginBottom:20}}>
        {[
          {k:'chat',    label:'Chat',         icon:MessageSquare},
          {k:'predict', label:'Grade Predict', icon:Target},
          {k:'next',    label:'Next Topic',    icon:Brain},
          {k:'mark',    label:'Mark Answer',   icon:FileText},
          {k:'flash',   label:'Flashcards',    icon:Star},
          {k:'resources',label:'Resources',    icon:BookOpen},
          {k:'plan',    label:'Study Plan',    icon:TrendingUp},
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
                <div style={{maxWidth:'78%',padding:'9px 13px',borderRadius:'var(--radius-lg)',background:m.role==='user'?'var(--accent)':'var(--bg-surface)',border:m.role==='user'?'none':'1px solid var(--border)',fontSize:'0.875rem',lineHeight:1.7,whiteSpace:'pre-wrap',borderBottomRightRadius:m.role==='user'?4:undefined,borderBottomLeftRadius:m.role==='assistant'?4:undefined}}>
                  {m.content}
                </div>
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
          {gradePred&&<div style={{whiteSpace:'pre-wrap',fontSize:'0.875rem',lineHeight:1.8}}>{gradePred}</div>}
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
          {nextTopic&&<div style={{whiteSpace:'pre-wrap',fontSize:'0.875rem',lineHeight:1.8}}>{nextTopic}</div>}
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
            <button className="btn btn-primary" onClick={handleMarkAnswer} disabled={markLoad||!markSubj||!markQ||!markA}>
              {markLoad?'Marking…':'Mark my answer'}
            </button>
          </div>
          {markLoad&&<div className="loading-center" style={{marginTop:16}}><div className="spinner"/></div>}
          {markResult&&(
            <div style={{marginTop:16,padding:14,background:'rgba(124,58,237,0.08)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',whiteSpace:'pre-wrap',fontSize:'0.875rem',lineHeight:1.8}}>
              {markResult}
            </div>
          )}
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
            <button className="btn btn-primary" onClick={handleFlashcards} disabled={flashLoad||!flashSubj}>
              {flashLoad?'Generating…':'Generate 8 flashcards'}
            </button>
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
              {resources[s.name]&&<div style={{whiteSpace:'pre-wrap',fontSize:'0.875rem',lineHeight:1.8,borderTop:'1px solid var(--border)',paddingTop:12}}>{resources[s.name]}</div>}
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
                    Save
                  </button>
                </>
              )}
              <button className="btn btn-primary btn-sm" onClick={()=>setPlanPrefs(p=>({...p,showForm:true,confirmed:false}))} disabled={planLoading}>
                {planLoading?'Generating…':<><Zap size={13}/> {studyPlan?'Regenerate':'Generate'}</>}
              </button>
            </div>
          </div>

          {/* Preferences form */}
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
          {studyPlan&&!planLoading&&<div style={{whiteSpace:'pre-wrap',fontSize:'0.875rem',lineHeight:1.8}}>{studyPlan}</div>}
          {!studyPlan&&!planLoading&&!planPrefs.showForm&&(
            <div className="empty-state" style={{padding:'28px 0'}}>
              <TrendingUp size={36} style={{opacity:0.3}}/>
              <p>Click Generate to build your personalised revision plan</p>
              <p style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Uses your exam dates, subjects, and grade targets</p>
            </div>
          )}
        </div>
      )}

      <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}`}</style>
    </div>
  )
}
