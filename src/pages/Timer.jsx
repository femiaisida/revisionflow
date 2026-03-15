// src/pages/Timer.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { sendTimerNotification } from '../utils/notifications'
import { Play, Pause, RotateCcw, Bell, Timer as TimerIcon, Watch, Volume2, ExternalLink, X, Maximize2, Minimize2, Music, Image } from 'lucide-react'

// ── Sound generation using Web Audio API ─────────────────────────────────────
function createAudioContext() {
  return new (window.AudioContext || window.webkitAudioContext)()
}

const SOUNDS = {
  bell: (ctx) => {
    const osc  = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 1.5)
    gain.gain.setValueAtTime(0.8, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2)
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 2)
  },
  chime: (ctx) => {
    [523, 659, 784, 1047].forEach((freq, i) => {
      const osc  = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain); gain.connect(ctx.destination)
      osc.type = 'sine'
      osc.frequency.value = freq
      const t = ctx.currentTime + i * 0.18
      gain.gain.setValueAtTime(0, t)
      gain.gain.linearRampToValueAtTime(0.5, t + 0.05)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.8)
      osc.start(t); osc.stop(t + 0.85)
    })
  },
  beep: (ctx) => {
    [0, 0.3, 0.6].forEach(delay => {
      const osc  = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain); gain.connect(ctx.destination)
      osc.frequency.value = 1000
      osc.type = 'square'
      const t = ctx.currentTime + delay
      gain.gain.setValueAtTime(0.3, t)
      gain.gain.setValueAtTime(0, t + 0.15)
      osc.start(t); osc.stop(t + 0.2)
    })
  },
  gentle: (ctx) => {
    const osc  = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(528, ctx.currentTime)
    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.3)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5)
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 2.6)
  },
}

function playSound(soundKey) {
  try {
    const ctx = createAudioContext()
    SOUNDS[soundKey]?.(ctx)
  } catch(e) { console.warn('Audio error', e) }
}

function fmtTime(secs, showHours = true) {
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  const s = secs % 60
  if (showHours && h > 0) return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
}

// ── Main Timer Page ───────────────────────────────────────────────────────────
export default function TimerPage({ isWidget = false, onClose }) {
  const [tab, setTab]               = useState('timer')
  const [sound, setSound]           = useState('chime')
  const [volume, setVolume]         = useState(0.8)
  const [isPopped, setIsPopped]     = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [ambient, setAmbient]       = useState('none')
  const [customBg, setCustomBg]     = useState(null)
  const [showAmbient, setShowAmbient] = useState(false)
  const [musicOpen, setMusicOpen]   = useState(false)
  const bgFileRef = React.useRef()

  return (
    <div className={isWidget ? '' : 'fade-in'} style={isWidget ? {} : {maxWidth:560,margin:'0 auto'}}>
      {!isWidget && (
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24}}>
          <h2 style={{display:'flex',alignItems:'center',gap:10}}><TimerIcon size={24} color="var(--accent-light)"/> Timer</h2>
          <div style={{display:'flex',gap:6}}>
            <button className="btn btn-secondary btn-sm" onClick={()=>setShowAmbient(s=>!s)} title="Ambient background">
              <Image size={14}/> Ambient
            </button>
            <button className="btn btn-secondary btn-sm" onClick={()=>setMusicOpen(s=>!s)} title="Revision music">
              <Music size={14}/> Music
            </button>
            <button className="btn btn-secondary btn-sm" onClick={()=>{
              if (!isFullscreen) document.documentElement.requestFullscreen?.()
              else document.exitFullscreen?.()
              setIsFullscreen(f=>!f)
            }} title="Fullscreen">
              {isFullscreen ? <Minimize2 size={14}/> : <Maximize2 size={14}/>} {isFullscreen?'Exit':'Fullscreen'}
            </button>
            <button className="btn btn-secondary btn-sm" onClick={()=>setIsPopped(true)} title="Pop out as widget">
              <ExternalLink size={14}/> Pop out
            </button>
          </div>
        </div>
      )}

      {isWidget && (
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12,padding:'0 4px'}}>
          <span style={{fontWeight:700,fontSize:'0.9rem',display:'flex',alignItems:'center',gap:6}}><TimerIcon size={16} color="var(--accent-light)"/> Timer</span>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}><X size={16}/></button>
        </div>
      )}

      {/* Sound selector */}
      <div style={{display:'flex',gap:8,marginBottom:16,flexWrap:'wrap',alignItems:'center'}}>
        <Volume2 size={16} style={{color:'var(--text-muted)',flexShrink:0}}/>
        {Object.keys(SOUNDS).map(s=>(
          <button key={s} className={`btn btn-sm ${sound===s?'btn-primary':'btn-secondary'}`}
            onClick={()=>{setSound(s);playSound(s)}}>
            {s.charAt(0).toUpperCase()+s.slice(1)}
          </button>
        ))}
      </div>

      <div className="tabs" style={{marginBottom:20}}>
        <button className={`tab${tab==='timer'?' active':''}`} onClick={()=>setTab('timer')}><TimerIcon size={14}/> Timer</button>
        <button className={`tab${tab==='stopwatch'?' active':''}`} onClick={()=>setTab('stopwatch')}><Watch size={14}/> Stopwatch</button>
        <button className={`tab${tab==='alarm'?' active':''}`} onClick={()=>setTab('alarm')}><Bell size={14}/> Alarm</button>
      </div>

      {tab==='timer'    && <CountdownTimer sound={sound}/>}
      {tab==='stopwatch'&& <Stopwatch/>}
      {tab==='alarm'   && <AlarmClock sound={sound}/>}

      {/* Pop-out widget */}
      {isPopped && <TimerWidget onClose={()=>setIsPopped(false)} sound={sound}/>}

      {/* ── Ambient background panel ── */}
      {showAmbient && (
        <AmbientPanel
          current={ambient}
          customBg={customBg}
          onSelect={setAmbient}
          onCustom={setCustomBg}
          bgFileRef={bgFileRef}
          onClose={()=>setShowAmbient(false)}/>
      )}

      {/* ── Music panel ── */}
      {musicOpen && (
        <MusicPanel onClose={()=>setMusicOpen(false)}/>
      )}

      {/* ── Ambient background overlay ── */}
      {(ambient !== 'none' || customBg) && (
        <AmbientBackground ambient={ambient} customBg={customBg}/>
      )}
    </div>
  )
}

// ── Countdown Timer ───────────────────────────────────────────────────────────
function CountdownTimer({ sound }) {
  const [hours,   setHours]   = useState(0)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [remaining, setRemaining] = useState(null)
  const [running,   setRunning]   = useState(false)
  const [finished,  setFinished]  = useState(false)
  const intervalRef = useRef(null)

  const totalSecs = hours*3600 + minutes*60 + seconds

  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining(r => {
          if (r <= 1) {
            clearInterval(intervalRef.current)
            setRunning(false)
            setFinished(true)
            playSound(sound)
            sendTimerNotification('Countdown complete!')
            return 0
          }
          return r - 1
        })
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [running])

  function start() {
    if (remaining === null) setRemaining(totalSecs)
    setRunning(true)
    setFinished(false)
  }

  function pause()  { setRunning(false); clearInterval(intervalRef.current) }

  function reset()  {
    setRunning(false); clearInterval(intervalRef.current)
    setRemaining(null); setFinished(false)
  }

  const display = remaining !== null ? remaining : totalSecs
  const pct     = remaining !== null && totalSecs > 0 ? (1 - remaining/totalSecs)*100 : 0

  const PRESETS = [
    {label:'5 min',  m:5,  s:0},
    {label:'10 min', m:10, s:0},
    {label:'25 min', m:25, s:0},
    {label:'45 min', m:45, s:0},
    {label:'90 min', m:90, s:0},
  ]

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:20}}>
      {/* Presets */}
      <div style={{display:'flex',gap:6,flexWrap:'wrap',justifyContent:'center'}}>
        {PRESETS.map(p=>(
          <button key={p.label} className="btn btn-secondary btn-sm" disabled={running}
            onClick={()=>{setMinutes(p.m>60?p.m%60:p.m);setHours(p.m>=60?Math.floor(p.m/60):0);setSeconds(p.s);setRemaining(null);setFinished(false)}}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Circular progress */}
      <div style={{position:'relative',width:200,height:200}}>
        <svg width="200" height="200" style={{transform:'rotate(-90deg)'}}>
          <circle cx="100" cy="100" r="88" fill="none" stroke="var(--bg-hover)" strokeWidth="12"/>
          <circle cx="100" cy="100" r="88" fill="none"
            stroke={finished?'var(--success)':running?'var(--accent-light)':'var(--accent)'}
            strokeWidth="12" strokeLinecap="round"
            strokeDasharray={`${2*Math.PI*88}`}
            strokeDashoffset={`${2*Math.PI*88*(1-pct/100)}`}
            style={{transition:'stroke-dashoffset 1s linear, stroke 0.3s'}}/>
        </svg>
        <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <div style={{fontSize:'2.4rem',fontWeight:800,fontFamily:'var(--font-mono)',color:finished?'var(--success)':'var(--text-primary)'}}>
            {fmtTime(display)}
          </div>
          {finished && <div style={{fontSize:'0.85rem',color:'var(--success)',fontWeight:600,marginTop:4}}>Done! 🎉</div>}
        </div>
      </div>

      {/* Manual time input */}
      {!running && remaining===null && (
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          {[{val:hours,set:setHours,max:23,label:'h'},{val:minutes,set:setMinutes,max:59,label:'m'},{val:seconds,set:setSeconds,max:59,label:'s'}].map(({val,set,max,label})=>(
            <div key={label} style={{textAlign:'center'}}>
              <input type="number" min={0} max={max} value={val}
                onChange={e=>set(Math.min(max,Math.max(0,parseInt(e.target.value)||0)))}
                style={{width:56,padding:'8px',textAlign:'center',fontSize:'1.1rem',fontFamily:'var(--font-mono)',background:'var(--bg-surface)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',color:'var(--text-primary)'}}/>
              <div style={{fontSize:'0.72rem',color:'var(--text-muted)',marginTop:2}}>{label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Controls */}
      <div style={{display:'flex',gap:10}}>
        {!running ? (
          <button className="btn btn-primary" onClick={start} disabled={display===0} style={{minWidth:80}}>
            <Play size={16}/> {remaining!==null?'Resume':'Start'}
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={pause} style={{minWidth:80}}>
            <Pause size={16}/> Pause
          </button>
        )}
        <button className="btn btn-secondary btn-icon" onClick={reset}><RotateCcw size={16}/></button>
      </div>
    </div>
  )
}

// ── Stopwatch ─────────────────────────────────────────────────────────────────
function Stopwatch() {
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps,    setLaps]    = useState([])
  const intervalRef = useRef(null)
  const startRef    = useRef(0)
  const offsetRef   = useRef(0)

  useEffect(() => {
    if (running) {
      startRef.current = Date.now()
      intervalRef.current = setInterval(() => {
        setElapsed(offsetRef.current + Date.now() - startRef.current)
      }, 50)
    } else {
      clearInterval(intervalRef.current)
      if (elapsed > 0) offsetRef.current = elapsed
    }
    return () => clearInterval(intervalRef.current)
  }, [running])

  function reset() {
    setRunning(false); setElapsed(0); setLaps([]); offsetRef.current=0
  }

  function lap() {
    setLaps(l => [...l, elapsed])
  }

  function fmtMs(ms) {
    const totalSecs = Math.floor(ms/1000)
    const centis    = Math.floor((ms%1000)/10)
    return fmtTime(totalSecs) + '.' + String(centis).padStart(2,'0')
  }

  const bestLap  = laps.length ? Math.min(...laps) : null
  const worstLap = laps.length ? Math.max(...laps) : null

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:20}}>
      <div style={{fontSize:'3.5rem',fontWeight:800,fontFamily:'var(--font-mono)',letterSpacing:'-0.02em',color:'var(--text-primary)'}}>
        {fmtMs(elapsed)}
      </div>

      <div style={{display:'flex',gap:10}}>
        <button className={`btn ${running?'btn-secondary':'btn-primary'}`} onClick={()=>setRunning(!running)} style={{minWidth:80}}>
          {running?<><Pause size={15}/> Pause</>:<><Play size={15}/> {elapsed>0?'Resume':'Start'}</>}
        </button>
        {running && <button className="btn btn-secondary" onClick={lap}><Watch size={15}/> Lap</button>}
        <button className="btn btn-secondary btn-icon" onClick={reset}><RotateCcw size={16}/></button>
      </div>

      {laps.length>0&&(
        <div style={{width:'100%',maxHeight:200,overflowY:'auto'}}>
          {[...laps].reverse().map((lap,i)=>{
            const lapNum = laps.length-i
            const isBest  = lap===bestLap
            const isWorst = lap===worstLap && laps.length>1
            return (
              <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'6px 12px',borderBottom:'1px solid var(--border)',fontSize:'0.875rem'}}>
                <span style={{color:'var(--text-muted)'}}>Lap {lapNum}</span>
                <span style={{fontFamily:'var(--font-mono)',fontWeight:600,color:isBest?'var(--success)':isWorst?'var(--danger)':'var(--text-primary)'}}>
                  {fmtMs(lap)} {isBest?'●':''}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ── Alarm Clock ───────────────────────────────────────────────────────────────
function AlarmClock({ sound }) {
  const [alarmTime, setAlarmTime]     = useState('')
  const [countdown, setCountdown]     = useState(0)  // custom countdown in minutes
  const [useCountdown, setUseCountdown] = useState(false)
  const [active,    setActive]        = useState(false)
  const [fired,     setFired]         = useState(false)
  const [label,     setLabel]         = useState('Revision alarm')
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!active) return
    intervalRef.current = setInterval(() => {
      const now = new Date()
      let shouldFire = false

      if (useCountdown) {
        // Countdown handled separately
      } else if (alarmTime) {
        const [h,m] = alarmTime.split(':').map(Number)
        if (now.getHours()===h && now.getMinutes()===m && now.getSeconds()<5) {
          shouldFire = true
        }
      }

      if (shouldFire) {
        clearInterval(intervalRef.current)
        setActive(false)
        setFired(true)
        playSound(sound)
        playSound(sound)
        setTimeout(()=>playSound(sound),1500)
        sendTimerNotification(label)
      }
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [active, alarmTime, useCountdown, sound, label])

  function startCountdownAlarm() {
    if (!countdown) return
    const fireAt = new Date(Date.now() + countdown*60000)
    const h = fireAt.getHours()
    const m = fireAt.getMinutes()
    setAlarmTime(`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`)
    setUseCountdown(false)
    setActive(true)
    setFired(false)
  }

  function getTimeUntil() {
    if (!alarmTime) return ''
    const [h,m] = alarmTime.split(':').map(Number)
    const now   = new Date()
    let target  = new Date(now)
    target.setHours(h,m,0,0)
    if (target<=now) target.setDate(target.getDate()+1)
    const diff  = Math.ceil((target-now)/60000)
    const hrs   = Math.floor(diff/60)
    const mins  = diff%60
    return hrs>0 ? `${hrs}h ${mins}m` : `${mins}m`
  }

  return (
    <div style={{display:'flex',flexDirection:'column',gap:16}}>
      <div className="form-group" style={{marginBottom:0}}>
        <label className="label">Alarm label</label>
        <input className="input" value={label} onChange={e=>setLabel(e.target.value)} placeholder="e.g. Start revision"/>
      </div>

      <div style={{display:'flex',gap:8,marginBottom:4}}>
        <button className={`btn btn-sm ${!useCountdown?'btn-primary':'btn-secondary'}`} onClick={()=>setUseCountdown(false)}>Set time</button>
        <button className={`btn btn-sm ${useCountdown?'btn-primary':'btn-secondary'}`} onClick={()=>setUseCountdown(true)}>In X minutes</button>
      </div>

      {!useCountdown ? (
        <div>
          <label className="label">Alarm time</label>
          <input className="input" type="time" value={alarmTime} onChange={e=>setAlarmTime(e.target.value)}
            style={{fontSize:'2rem',padding:'10px 16px',fontFamily:'var(--font-mono)',letterSpacing:'0.05em'}}/>
          {alarmTime&&<p style={{marginTop:6,fontSize:'0.82rem',color:'var(--text-muted)'}}>Fires in {getTimeUntil()}</p>}
        </div>
      ) : (
        <div>
          <label className="label">In how many minutes?</label>
          <input className="input" type="number" min={1} max={480} value={countdown}
            onChange={e=>setCountdown(parseInt(e.target.value)||0)}
            style={{fontSize:'1.5rem',padding:'10px 16px',fontFamily:'var(--font-mono)'}}/>
        </div>
      )}

      {fired && (
        <div style={{padding:16,background:'rgba(124,58,237,0.15)',border:'1px solid var(--accent)',borderRadius:'var(--radius-md)',textAlign:'center'}}>
          <div style={{fontSize:'2rem',marginBottom:6}}>⏰</div>
          <div style={{fontWeight:700,color:'var(--accent-light)'}}>{label}</div>
          <div style={{fontSize:'0.82rem',color:'var(--text-muted)',marginTop:4}}>Alarm fired!</div>
          <button className="btn btn-secondary btn-sm" style={{marginTop:10}} onClick={()=>{setFired(false);setActive(false)}}>Dismiss</button>
        </div>
      )}

      {!fired && (
        <div style={{display:'flex',gap:8}}>
          {!active ? (
            <button className="btn btn-primary" onClick={()=>{
              if(useCountdown) startCountdownAlarm()
              else { setActive(true); setFired(false) }
            }} disabled={(!alarmTime&&!useCountdown)||(useCountdown&&!countdown)}>
              <Bell size={15}/> Set alarm
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={()=>{setActive(false);clearInterval(intervalRef.current)}}>
              <X size={15}/> Cancel alarm
            </button>
          )}
          {active&&<div style={{display:'flex',alignItems:'center',gap:6,fontSize:'0.875rem',color:'var(--success)'}}>
            <div style={{width:8,height:8,borderRadius:'50%',background:'var(--success)',animation:'pulse 1.5s ease-in-out infinite'}}/>
            Active — fires at {alarmTime}
          </div>}
        </div>
      )}
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
    </div>
  )
}

// ── Floating Widget ───────────────────────────────────────────────────────────
export function TimerWidget({ onClose, sound }) {
  const [running,   setRunning]   = useState(false)
  const [remaining, setRemaining] = useState(25*60)
  const [total,     setTotal]     = useState(25*60)
  const [finished,  setFinished]  = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(()=>{
        setRemaining(r=>{
          if(r<=1){
            clearInterval(intervalRef.current)
            setRunning(false); setFinished(true)
            playSound(sound||'chime')
            sendTimerNotification('Timer complete!')
            return 0
          }
          return r-1
        })
      },1000)
    }
    return ()=>clearInterval(intervalRef.current)
  },[running])

  const pct = total>0 ? ((total-remaining)/total)*100 : 0

  // Draggable state
  const [pos, setPos] = React.useState({x: window.innerWidth - 220, y: window.innerHeight - 320})
  const dragging = React.useRef(false)
  const dragOffset = React.useRef({x:0, y:0})

  function onMouseDown(e) {
    if (e.target.closest('button') || e.target.closest('select')) return
    dragging.current = true
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    e.preventDefault()
  }

  React.useEffect(() => {
    function onMove(e) {
      if (!dragging.current) return
      setPos({
        x: Math.max(0, Math.min(window.innerWidth-220, e.clientX - dragOffset.current.x)),
        y: Math.max(0, Math.min(window.innerHeight-300, e.clientY - dragOffset.current.y)),
      })
    }
    function onUp() { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
  }, [])

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position:'fixed', left:pos.x, top:pos.y, zIndex:500,
        background:'var(--bg-card)', border:'1px solid var(--border)',
        borderRadius:'var(--radius-xl)', padding:16, width:210,
        boxShadow:'var(--shadow-lg)', cursor:'grab', userSelect:'none',
      }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
        <span style={{fontWeight:700,fontSize:'0.82rem',color:'var(--text-muted)'}}>⏱ Timer</span>
        <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}><X size={14}/></button>
      </div>

      <div className="progress-bar" style={{marginBottom:8}}>
        <div className="progress-fill xp-bar-fill" style={{width:`${pct}%`,transition:'width 1s linear'}}/>
      </div>

      <div style={{textAlign:'center',fontSize:'1.8rem',fontWeight:800,fontFamily:'var(--font-mono)',marginBottom:10,color:finished?'var(--success)':'var(--text-primary)'}}>
        {fmtTime(remaining)}
      </div>

      {/* Quick presets */}
      <div style={{display:'flex',gap:4,marginBottom:8,justifyContent:'center'}}>
        {[5,10,25,45].map(m=>(
          <button key={m} style={{padding:'2px 6px',fontSize:'0.7rem',borderRadius:4,background:'var(--bg-hover)',border:'1px solid var(--border)',color:'var(--text-secondary)',cursor:'pointer'}}
            onClick={()=>{setRemaining(m*60);setTotal(m*60);setRunning(false);setFinished(false)}}>
            {m}m
          </button>
        ))}
      </div>

      <div style={{display:'flex',gap:6,justifyContent:'center'}}>
        <button className="btn btn-primary btn-sm" onClick={()=>{setRunning(!running);setFinished(false)}} style={{flex:1}}>
          {running?<><Pause size={13}/> Pause</>:<><Play size={13}/> {remaining<total&&remaining>0?'Resume':'Start'}</>}
        </button>
        <button className="btn btn-secondary btn-icon btn-sm" onClick={()=>{setRunning(false);setRemaining(total);setFinished(false)}}><RotateCcw size={13}/></button>
      </div>
    </div>
  )
}

// ── Ambient Background Overlay ────────────────────────────────────────────────
const AMBIENT_PRESETS = {
  none:     { label:'None',            css: 'none' },
  forest:   { label:'🌲 Forest',       css: 'radial-gradient(ellipse at 30% 20%,#0a2e1a 0%,#1a5c30 35%,#2d8a50 65%,#1a4a28 100%)' },
  rain:     { label:'🌧 Rain',          css: 'linear-gradient(170deg,#0d1b2a 0%,#1e2f42 25%,#2c4a6b 55%,#1a3050 80%,#0d1b2a 100%)' },
  ocean:    { label:'🌊 Ocean',         css: 'radial-gradient(ellipse at 50% 100%,#0077b6 0%,#023e8a 40%,#03045e 70%,#000814 100%)' },
  sunset:   { label:'🌅 Sunset',        css: 'linear-gradient(180deg,#0f0c29 0%,#302b63 30%,#c0392b 60%,#f39c12 80%,#f1c40f 100%)' },
  space:    { label:'✨ Space',          css: 'radial-gradient(ellipse at 15% 40%,#2d1b69 0%,#11074a 35%,#030014 65%,#000000 100%)' },
  aurora:   { label:'🌌 Aurora',        css: 'linear-gradient(160deg,#001a0e 0%,#003322 20%,#006644 40%,#4a0080 65%,#1a0040 85%,#000d1a 100%)' },
  cosy:     { label:'🕯 Candlelight',   css: 'radial-gradient(ellipse at 50% 80%,#7a3b1e 0%,#4a1e0a 35%,#2a0e04 65%,#100400 100%)' },
  midnight: { label:'🌙 Midnight',      css: 'radial-gradient(ellipse at 70% 30%,#1a1a4e 0%,#0d0d2b 40%,#050510 70%,#000005 100%)' },
  focus:    { label:'🎯 Focus',         css: 'radial-gradient(ellipse at 50% 50%,#1a1a2e 0%,#16213e 50%,#0f3460 100%)' },
  nature:   { label:'🍃 Meadow',        css: 'linear-gradient(160deg,#0a1628 0%,#1a3a1a 25%,#2e6b2e 50%,#4a9e3f 70%,#6ab04c 100%)' },
  zen:      { label:'🎋 Zen',           css: 'linear-gradient(135deg,#1a2a1a 0%,#2d4a2d 30%,#4a6741 60%,#c8a97e 85%,#e8d5b0 100%)' },
}

function AmbientBackground({ ambient, customBg }) {
  const bg = customBg
    ? `url(${customBg})`
    : AMBIENT_PRESETS[ambient]?.css || 'none'

  if (bg === 'none') return null

  return (
    <div style={{
      position:'fixed', inset:0, zIndex:-1,
      background: bg,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.35,
      pointerEvents:'none',
      transition:'background 0.8s ease',
    }}/>
  )
}

function AmbientPanel({ current, customBg, onSelect, onCustom, bgFileRef, onClose }) {
  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => { onCustom(ev.target.result); onSelect('custom') }
    reader.readAsDataURL(file)
  }

  return (
    <div className="card" style={{marginBottom:16,position:'relative'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
        <h4 style={{margin:0}}>Ambient Background</h4>
        <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}><X size={16}/></button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(90px,1fr))',gap:8,marginBottom:10}}>
        {Object.entries(AMBIENT_PRESETS).map(([key, preset]) => (
          <button key={key} onClick={()=>{onSelect(key); if(key!=='custom') onCustom(null)}}
            style={{
              padding:'10px 6px', borderRadius:'var(--radius-md)',
              border:`2px solid ${current===key?'var(--accent)':'var(--border)'}`,
              background: key==='none' ? 'var(--bg-surface)' : preset.css,
              backgroundSize: 'cover',
              color: key==='none' ? 'var(--text-primary)' : '#fff',
              fontSize:'0.72rem', fontWeight:600, cursor:'pointer',
              textShadow: key==='none' ? 'none' : '0 1px 3px rgba(0,0,0,0.8)',
            }}>
            {preset.label}
          </button>
        ))}
        {customBg && (
          <button onClick={()=>onSelect('custom')}
            style={{
              padding:'10px 6px', borderRadius:'var(--radius-md)',
              border:`2px solid ${current==='custom'?'var(--accent)':'var(--border)'}`,
              background:`url(${customBg})`, backgroundSize:'cover', backgroundPosition:'center',
              color:'#fff', fontSize:'0.72rem', fontWeight:600, cursor:'pointer',
              textShadow:'0 1px 3px rgba(0,0,0,0.8)',
            }}>
            Custom
          </button>
        )}
      </div>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <button className="btn btn-secondary btn-sm" onClick={()=>bgFileRef.current?.click()}>
          <Image size={13}/> Upload image
        </button>
        <span style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>PNG, JPG, WebP supported</span>
        <input ref={bgFileRef} type="file" accept="image/*" style={{display:'none'}} onChange={handleFile}/>
      </div>
    </div>
  )
}

// ── Music Panel ───────────────────────────────────────────────────────────────
// Using specific video IDs of long-form embeddable ambient videos
// These are public domain / Creative Commons ambient study videos
const PLAYLISTS = [
  { label:'Lo-fi Study Beats',   vid:'jfKfPfyJRdk', type:'video' },
  { label:'Classical Focus',     vid:'DWcJFNfaw9c', type:'video' },
  { label:'Rain & Thunder',      vid:'mPZkdNFkNps', type:'video' },
  { label:'Deep Focus',          vid:'WPni755-Krg', type:'video' },
  { label:'Piano & Strings',     vid:'4oStw0r33so', type:'video' },
  { label:'Brown Noise',         vid:'RqzGzwTY-6w', type:'video' },
  { label:'Nature Sounds',       vid:'Qm846KdZN_c', type:'video' },
  { label:'Calm Ambient',        vid:'2gliGzb2_1I', type:'video' },
]

function MusicPanel({ onClose }) {
  const [selected, setSelected] = useState(null)
  const [spotifyOpen, setSpotifyOpen] = useState(false)

  return (
    <div className="card" style={{marginBottom:16}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
        <h4 style={{margin:0}}>Revision Music</h4>
        <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}><X size={16}/></button>
      </div>

      <div className="tabs" style={{marginBottom:12}}>
        <button className={`tab${!spotifyOpen?' active':''}`} onClick={()=>setSpotifyOpen(false)}>
          Curated Playlists
        </button>
        <button className={`tab${spotifyOpen?' active':''}`} onClick={()=>setSpotifyOpen(true)}>
          Spotify
        </button>
      </div>

      {!spotifyOpen ? (
        <>
          <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:12}}>
            {PLAYLISTS.map(p=>(
              <button key={p.id} onClick={()=>setSelected(selected===p.id?null:p.id)}
                style={{
                  display:'flex',alignItems:'center',justifyContent:'space-between',
                  padding:'8px 12px',borderRadius:'var(--radius-md)',
                  border:`1px solid ${selected===p.vid?'var(--accent)':'var(--border)'}`,
                  background:selected===p.vid?'rgba(124,58,237,0.1)':'var(--bg-surface)',
                  cursor:'pointer',textAlign:'left',width:'100%',
                }}>
                <span style={{fontWeight:600,fontSize:'0.875rem'}}>{p.label}</span>
                <span style={{fontSize:'0.72rem',color:'var(--text-muted)'}}>
                  {selected===p.vid?'▶ Playing':'Click to play'}
                </span>
              </button>
            ))}
          </div>

          {selected && selected.length > 5 && (
            <div style={{borderRadius:'var(--radius-md)',overflow:'hidden',border:'1px solid var(--border)'}}>
              <iframe
                width="100%" height="120"
                src={`https://www.youtube.com/embed/${selected}?autoplay=1&controls=1&start=0`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Revision music"
                style={{display:'block'}}/>
            </div>
          )}
          <p style={{fontSize:'0.72rem',color:'var(--text-muted)',marginTop:8}}>
            Curated royalty-free playlists via YouTube. Ensure volume is comfortable for focus.
          </p>
        </>
      ) : (
        <div style={{padding:'12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
            <div style={{width:32,height:32,borderRadius:6,background:'#1DB954',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.2rem'}}>♫</div>
            <div>
              <div style={{fontWeight:700}}>Spotify</div>
              <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>Web Playback requires Spotify Premium</div>
            </div>
          </div>
          <p style={{fontSize:'0.82rem',marginBottom:12}}>
            Open Spotify directly and play any revision playlist alongside your timer. Recommended playlists:
          </p>
          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            {[
              {name:'Lo-fi Study',      url:'spotify:playlist:37i9dQZF1DX8Uebhn9wzrS'},
              {name:'Deep Focus',       url:'spotify:playlist:37i9dQZF1DWZeKCadgRdKQ'},
              {name:'Classical Study',  url:'spotify:playlist:37i9dQZF1DWWEJlAGA9gs0'},
              {name:'Brain Food',       url:'spotify:playlist:37i9dQZF1DWXLeA8Omik1L'},
            ].map(p=>(
              <a key={p.name} href={p.url}
                style={{display:'flex',justifyContent:'space-between',padding:'7px 10px',background:'var(--bg-card)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',textDecoration:'none',color:'inherit',fontSize:'0.82rem',fontWeight:500}}>
                {p.name}
                <span style={{color:'#1DB954',fontWeight:600}}>Open →</span>
              </a>
            ))}
          </div>
          <p style={{fontSize:'0.72rem',color:'var(--text-muted)',marginTop:8}}>
            These links open in the Spotify app. If you don't have Premium, use the curated playlists tab instead.
          </p>
        </div>
      )}
    </div>
  )
}
