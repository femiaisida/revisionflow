// src/pages/Signup.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { Zap, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'

export default function Signup() {
  const { signup, loginWithGoogle } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name:'', email:'', password:'', confirm:'' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim())              e.name     = 'Name is required'
    if (!form.email.includes('@'))      e.email    = 'Valid email required'
    if (form.password.length < 6)      e.password = 'At least 6 characters'
    if (form.password !== form.confirm) e.confirm  = 'Passwords do not match'
    return e
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setLoading(true)
    try {
      await signup(form.email, form.password, form.name)
      navigate('/onboarding')
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') toast.error('Email already in use')
      else toast.error(err.message)
    } finally { setLoading(false) }
  }

  async function handleGoogle() {
    setLoading(true)
    try { await loginWithGoogle(); navigate('/onboarding') }
    catch (err) { toast.error(err.message) }
    finally { setLoading(false) }
  }

  const field = (key) => ({
    value: form[key],
    onChange: e => { setForm(f => ({...f, [key]: e.target.value})); setErrors(er => ({...er, [key]: ''})) }
  })

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:24,background:'var(--bg-base)'}}>
      <div style={{width:'100%',maxWidth:420}}>
        <div style={{textAlign:'center',marginBottom:28}}>
          <div style={{width:52,height:52,borderRadius:14,background:'linear-gradient(135deg,#7c3aed,#a855f7)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',boxShadow:'0 0 24px rgba(124,58,237,0.4)'}}>
            <Zap size={26} color="#fff"/>
          </div>
          <h2>Create your account</h2>
          <p style={{marginTop:6}}>Start revising smarter with RevisionFlow</p>
        </div>

        <div className="card" style={{padding:28}}>
          <button className="btn btn-secondary" style={{width:'100%',marginBottom:20,gap:10}} onClick={handleGoogle} disabled={loading}>
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>

          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
            <div className="divider" style={{flex:1,margin:0}}/><span style={{fontSize:'0.8rem',color:'var(--text-muted)',whiteSpace:'nowrap'}}>or email</span><div className="divider" style={{flex:1,margin:0}}/>
          </div>

          <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:14}}>
            {[
              { key:'name', label:'Full name', icon:User, type:'text', placeholder:'Your full name' },
              { key:'email', label:'Email', icon:Mail, type:'email', placeholder:'you@school.ac.uk' },
            ].map(({key,label,icon:Icon,type,placeholder}) => (
              <div key={key} className="form-group" style={{marginBottom:0}}>
                <label className="label">{label}</label>
                <div style={{position:'relative'}}>
                  <Icon size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-muted)'}}/>
                  <input className="input" style={{paddingLeft:38}} type={type} placeholder={placeholder} {...field(key)} required/>
                </div>
                {errors[key] && <span className="form-error">{errors[key]}</span>}
              </div>
            ))}

            {['password','confirm'].map(key => (
              <div key={key} className="form-group" style={{marginBottom:0}}>
                <label className="label">{key==='password'?'Password':'Confirm password'}</label>
                <div style={{position:'relative'}}>
                  <Lock size={16} style={{position:'absolute',left:12,top:'50%',transform:'translateY(-50%)',color:'var(--text-muted)'}}/>
                  <input className="input" style={{paddingLeft:38,paddingRight:40}} type={showPw?'text':'password'} placeholder="••••••••" {...field(key)} required/>
                  {key==='confirm' && (
                    <button type="button" style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',background:'none',border:'none',cursor:'pointer',color:'var(--text-muted)'}} onClick={()=>setShowPw(!showPw)}>
                      {showPw?<EyeOff size={16}/>:<Eye size={16}/>}
                    </button>
                  )}
                </div>
                {errors[key] && <span className="form-error">{errors[key]}</span>}
              </div>
            ))}

            <button className="btn btn-primary" type="submit" disabled={loading} style={{width:'100%',marginTop:4}}>
              {loading ? 'Creating account…' : 'Create free account'}
            </button>
          </form>

          <p style={{textAlign:'center',marginTop:16,fontSize:'0.875rem'}}>
            Already have an account?{' '}
            <Link to="/login" style={{color:'var(--accent-light)',fontWeight:600}}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
