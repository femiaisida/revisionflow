// src/pages/Landing.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import {
  Zap, Calendar, Brain, Trophy, Users, FileText,
  BarChart2, CheckSquare, MessageSquare, Sun, Moon,
  ArrowRight, Star, Flame, BookOpen
} from 'lucide-react'

const FEATURES = [
  { icon: Calendar,      title: 'Smart Calendar',      desc: 'AI-generated revision schedules with content vs exam practice sessions, paper rotation, and emergency sessions before exams.' },
  { icon: Brain,         title: 'Topic Tracker',        desc: 'Rate your confidence per topic, track progress over time, and let the AI automatically update what you should revise next.' },
  { icon: FileText,      title: 'Past Paper Tracker',   desc: 'Log marks per question for every past paper. Get grade calculations, progression graphs, and AI weakness analysis.' },
  { icon: BarChart2,     title: 'Progress Analytics',   desc: 'See your grade trajectory per subject, average scores, and predicted grade based on recent performance.' },
  { icon: MessageSquare, title: 'AI Revision Advisor',  desc: 'Powered by Gemini AI. Get personalised study plans, topic explanations, resource recommendations, and daily briefings.' },
  { icon: Trophy,        title: 'Gamification',         desc: 'Earn XP, level up, unlock badges, maintain streaks, and compete on leaderboards with your friends.' },
  { icon: Users,         title: 'Social Features',      desc: 'Add friends, see their progress, compete on leaderboards, and stay motivated together.' },
  { icon: CheckSquare,   title: 'Tasks & Deadlines',    desc: 'Add revision tasks with due dates, mark them complete, and never miss a deadline.' },
  { icon: BookOpen,      title: 'Revision Notes',       desc: 'Write and organise notes per topic within the app, linked directly to your revision calendar.' },
]

const STATS = [
  { value: '11+', label: 'Subjects supported' },
  { value: '9',   label: 'Grade target' },
  { value: 'AI',  label: 'Powered advisor' },
  { value: 'Free', label: 'Always' },
]

export default function Landing() {
  const { theme, toggle } = useTheme()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>

      {/* Nav */}
      <nav style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'16px 40px', borderBottom:'1px solid var(--border)',
        position:'sticky', top:0, zIndex:100,
        background:'rgba(15,10,30,0.85)', backdropFilter:'blur(12px)'
      }}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:36,height:36,borderRadius:10,background:'linear-gradient(135deg,#7c3aed,#a855f7)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Zap size={20} color="#fff"/>
          </div>
          <span style={{fontWeight:800,fontSize:'1.2rem'}}>
            Revision<span style={{color:'var(--accent-light)'}}>Flow</span>
          </span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button className="btn btn-ghost btn-icon" onClick={toggle} title="Toggle theme">
            {theme==='dark' ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <Link to="/login"  className="btn btn-secondary btn-sm">Sign in</Link>
          <Link to="/signup" className="btn btn-primary btn-sm">Get started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{textAlign:'center',padding:'80px 24px 60px',maxWidth:820,margin:'0 auto'}}>
        <div className="badge badge-purple" style={{marginBottom:20,display:'inline-flex'}}>
          <Flame size={12}/> Built for GCSE & A-Level Students
        </div>
        <h1 style={{marginBottom:20,lineHeight:1.1}}>
          Your AI-powered<br/>
          <span className="gradient-text">revision command centre</span>
        </h1>
        <p style={{fontSize:'1.15rem',maxWidth:580,margin:'0 auto 36px',lineHeight:1.7}}>
          Smart revision calendars, past paper tracking, topic confidence ratings,
          AI advice, streaks, and social features — all in one place. Free forever.
        </p>
        <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <Link to="/signup" className="btn btn-primary btn-lg">
            Start revising free <ArrowRight size={18}/>
          </Link>
          <Link to="/login" className="btn btn-secondary btn-lg">
            Sign in
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,
          marginTop:56,padding:'24px',borderRadius:'var(--radius-xl)',
          background:'var(--bg-card)',border:'1px solid var(--border)',
          maxWidth:600,margin:'56px auto 0'
        }}>
          {STATS.map(s => (
            <div key={s.label} style={{textAlign:'center'}}>
              <div style={{fontSize:'1.75rem',fontWeight:800,color:'var(--accent-light)'}}>{s.value}</div>
              <div style={{fontSize:'0.78rem',color:'var(--text-muted)',marginTop:2}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{padding:'40px 24px 80px',maxWidth:1100,margin:'0 auto'}}>
        <h2 style={{textAlign:'center',marginBottom:12}}>Everything you need to get a 9</h2>
        <p style={{textAlign:'center',maxWidth:500,margin:'0 auto 48px'}}>
          Built by a student, for students. Every feature is designed around how revision actually works.
        </p>
        <div className="grid-3" style={{gap:20}}>
          {FEATURES.map(f => (
            <div key={f.title} className="card" style={{display:'flex',flexDirection:'column',gap:12}}>
              <div style={{
                width:40,height:40,borderRadius:10,
                background:'rgba(124,58,237,0.15)',
                display:'flex',alignItems:'center',justifyContent:'center'
              }}>
                <f.icon size={20} color="var(--accent-light)"/>
              </div>
              <h4>{f.title}</h4>
              <p style={{fontSize:'0.875rem',lineHeight:1.6}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding:'60px 24px',textAlign:'center',
        background:'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(168,85,247,0.05))',
        borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'
      }}>
        <h2 style={{marginBottom:12}}>Ready to level up your revision?</h2>
        <p style={{marginBottom:32}}>Free to use. No credit card required. Start in 2 minutes.</p>
        <Link to="/signup" className="btn btn-primary btn-lg">
          Create your free account <ArrowRight size={18}/>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{padding:'32px 40px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12,borderTop:'1px solid var(--border)'}}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <Zap size={16} color="var(--accent-light)"/>
          <span style={{fontWeight:700,fontSize:'0.9rem'}}>RevisionFlow</span>
        </div>
        <p style={{fontSize:'0.8rem',margin:0}}>
          Built for UK GCSE & A-Level students · Free · AI-powered
        </p>
        <div style={{display:'flex',gap:16}}>
          <Link to="/login" style={{fontSize:'0.82rem',color:'var(--text-secondary)'}}>Sign in</Link>
          <Link to="/signup" style={{fontSize:'0.82rem',color:'var(--accent-light)'}}>Get started</Link>
        </div>
      </footer>
    </div>
  )
}
