// src/pages/AIAdvisor.jsx
import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { chatWithAI, getResourceRecommendations, generateStudyPlan } from '../utils/ai'
import { SUBJECT_COLOURS } from '../data/subjects'
import { MessageSquare, Send, Zap, BookOpen, TrendingUp, X } from 'lucide-react'

const QUICK_PROMPTS = [
  'What should I revise today?',
  'Give me a study tip for exam week',
  'How do I improve from grade 8 to 9?',
  'Best resources for my weakest subject',
  'How should I structure a revision session?',
  'What exam technique improves marks most?',
]

export default function AIAdvisor() {
  const { profile } = useAuth()
  const [messages, setMessages] = useState([{
    role:'assistant',
    content:`Hi! I'm your RevisionFlow AI advisor powered by Gemini. I know you're studying ${profile?.subjects?.map(s=>s.name).join(', ')||'various subjects'}.\n\nHow can I help you today? You can ask me anything about revision, exam technique, resources, or specific topics.`
  }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [tab, setTab] = useState('chat')
  const [resources, setResources] = useState({})
  const [loadingRes, setLoadingRes] = useState(null)
  const [studyPlan, setStudyPlan] = useState('')
  const [planLoading, setPlanLoading] = useState(false)
  const bottomRef = useRef()

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:'smooth' }) }, [messages])

  async function sendMessage(text) {
    const msg = text || input.trim()
    if (!msg || loading) return
    setInput('')
    const newMessages = [...messages, { role:'user', content:msg }]
    setMessages(newMessages)
    setLoading(true)
    const res = await chatWithAI(newMessages, { subjects: profile?.subjects||[] })
    setMessages(ms => [...ms, { role:'assistant', content: res.text || res.error || 'Sorry, I had trouble responding. Please try again.' }])
    setLoading(false)
  }

  async function getResources(subject) {
    setLoadingRes(subject)
    const subj = profile?.subjects?.find(s=>s.name===subject)
    const res = await getResourceRecommendations(subject, subj?.board, subj?.tier, [])
    setResources(r=>({...r,[subject]:res.text||res.error}))
    setLoadingRes(null)
  }

  async function handleStudyPlan() {
    setPlanLoading(true)
    const res = await generateStudyPlan({
      subjects: profile?.subjects||[],
      examDates: profile?.examDates||[],
      weakTopics: [],
      availableHours: 10,
      preferences: 'Balanced content and exam practice'
    })
    setStudyPlan(res.text||res.error||'')
    setPlanLoading(false)
  }

  return (
    <div className="fade-in" style={{maxWidth:860,margin:'0 auto'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24}}>
        <div>
          <h2 style={{display:'flex',alignItems:'center',gap:10}}><MessageSquare size={24} color="var(--accent-light)"/> AI Revision Advisor</h2>
          <p>Powered by Google Gemini · Free</p>
        </div>
      </div>

      <div className="tabs" style={{marginBottom:20}}>
        {['chat','resources','plan'].map(t=>(
          <button key={t} className={`tab${tab===t?' active':''}`} onClick={()=>setTab(t)}>
            {t==='chat'?'Chat':t==='resources'?'Resources':'Study Plan'}
          </button>
        ))}
      </div>

      {tab==='chat' && (
        <div className="card" style={{display:'flex',flexDirection:'column',height:'calc(100vh - 280px)',minHeight:400}}>
          {/* Messages */}
          <div style={{flex:1,overflowY:'auto',display:'flex',flexDirection:'column',gap:12,padding:'16px 0'}}>
            {messages.map((m,i)=>(
              <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start',flexDirection:m.role==='user'?'row-reverse':'row'}}>
                <div style={{width:32,height:32,borderRadius:'50%',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',background:m.role==='user'?'var(--accent)':'rgba(124,58,237,0.2)'}}>
                  {m.role==='user'?'👤':<Zap size={16} color="var(--accent-light)"/>}
                </div>
                <div style={{
                  maxWidth:'78%',padding:'10px 14px',borderRadius:'var(--radius-lg)',
                  background:m.role==='user'?'var(--accent)':'var(--bg-surface)',
                  border:m.role==='user'?'none':'1px solid var(--border)',
                  fontSize:'0.875rem',lineHeight:1.7,whiteSpace:'pre-wrap',
                  borderBottomRightRadius:m.role==='user'?4:undefined,
                  borderBottomLeftRadius:m.role==='assistant'?4:undefined,
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading&&(
              <div style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                <div style={{width:32,height:32,borderRadius:'50%',background:'rgba(124,58,237,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}><Zap size={16} color="var(--accent-light)"/></div>
                <div style={{padding:'10px 14px',background:'var(--bg-surface)',borderRadius:'var(--radius-lg)',border:'1px solid var(--border)'}}>
                  <div style={{display:'flex',gap:4}}>
                    {[0,1,2].map(i=><div key={i} style={{width:6,height:6,borderRadius:'50%',background:'var(--accent)',animation:`bounce 1s ease ${i*0.15}s infinite`}}/>)}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {/* Quick prompts */}
          <div style={{padding:'8px 0',borderTop:'1px solid var(--border)',display:'flex',gap:6,flexWrap:'wrap'}}>
            {QUICK_PROMPTS.map(p=>(
              <button key={p} className="btn btn-secondary btn-sm" style={{fontSize:'0.75rem'}} onClick={()=>sendMessage(p)}>{p}</button>
            ))}
          </div>

          {/* Input */}
          <div style={{display:'flex',gap:10,paddingTop:12}}>
            <input className="input" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask me anything about revision…"
              onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage()}}} disabled={loading}/>
            <button className="btn btn-primary btn-icon" onClick={()=>sendMessage()} disabled={!input.trim()||loading}>
              <Send size={18}/>
            </button>
          </div>
          <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}`}</style>
        </div>
      )}

      {tab==='resources' && (
        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          <p>Get personalised resource recommendations for each subject you're studying.</p>
          {(profile?.subjects||[]).map(s=>(
            <div key={s.name} className="card">
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:resources[s.name]?12:0}}>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <div style={{width:10,height:10,borderRadius:'50%',background:SUBJECT_COLOURS[s.name]||'var(--accent)'}}/>
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

      {tab==='plan' && (
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
            <div><h4>AI Study Plan</h4><p style={{fontSize:'0.875rem'}}>Get a personalised week-by-week plan based on your subjects and exam dates</p></div>
            <button className="btn btn-primary" onClick={handleStudyPlan} disabled={planLoading}>
              {planLoading?'Generating…':<><Zap size={16}/> Generate plan</>}
            </button>
          </div>
          {planLoading&&<div className="loading-center"><div className="spinner"/></div>}
          {studyPlan&&<div style={{whiteSpace:'pre-wrap',fontSize:'0.875rem',lineHeight:1.8}}>{studyPlan}</div>}
          {!studyPlan&&!planLoading&&<div className="empty-state" style={{padding:'32px 0'}}><TrendingUp size={40} style={{opacity:0.3}}/><p>Click Generate plan to get your personalised study plan</p></div>}
        </div>
      )}
    </div>
  )
}
