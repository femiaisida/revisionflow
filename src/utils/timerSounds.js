// src/utils/timerSounds.js
// Ambient sounds for the revision timer using Web Audio API
// No external audio files needed — all generated programmatically

let audioCtx = null
const activeNodes = []

function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  return audioCtx
}

function stopAll() {
  activeNodes.forEach(n => { try { n.stop(); n.disconnect() } catch (e) {} })
  activeNodes.length = 0
}

// ── Individual sound generators ───────────────────────────────────────────────

function playRain() {
  const ctx    = getCtx()
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate)
  const data   = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.15
  const source = ctx.createBufferSource()
  source.buffer = buffer
  source.loop   = true

  const filter = ctx.createBiquadFilter()
  filter.type      = 'bandpass'
  filter.frequency.value = 600
  filter.Q.value   = 0.8

  const gain = ctx.createGain()
  gain.gain.value = 0.4

  source.connect(filter)
  filter.connect(gain)
  gain.connect(ctx.destination)
  source.start()
  activeNodes.push(source)
}

function playLofi() {
  const ctx = getCtx()
  // Gentle chord progression: Am - F - C - G
  const chords = [
    [220, 261.63, 329.63],  // Am
    [174.61, 220, 261.63],  // F
    [261.63, 329.63, 392],  // C
    [196, 246.94, 293.66],  // G
  ]
  const masterGain = ctx.createGain()
  masterGain.gain.value = 0.06
  masterGain.connect(ctx.destination)

  let startTime = ctx.currentTime
  const CHORD_DUR = 2.5

  function scheduleChords() {
    chords.forEach((chord, ci) => {
      chord.forEach(freq => {
        const osc  = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.value = freq
        gain.gain.setValueAtTime(0, startTime + ci * CHORD_DUR)
        gain.gain.linearRampToValueAtTime(1, startTime + ci * CHORD_DUR + 0.2)
        gain.gain.linearRampToValueAtTime(0, startTime + ci * CHORD_DUR + CHORD_DUR - 0.1)
        osc.connect(gain)
        gain.connect(masterGain)
        osc.start(startTime + ci * CHORD_DUR)
        osc.stop(startTime + ci * CHORD_DUR + CHORD_DUR)
        activeNodes.push(osc)
      })
    })
    startTime += chords.length * CHORD_DUR
  }

  scheduleChords()
  const interval = setInterval(() => {
    if (audioCtx?.state === 'closed') { clearInterval(interval); return }
    scheduleChords()
  }, chords.length * CHORD_DUR * 1000)
  activeNodes.push({ stop: () => clearInterval(interval), disconnect: () => {} })
}

function playWhiteNoise() {
  const ctx    = getCtx()
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate)
  const data   = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  const source = ctx.createBufferSource()
  source.buffer = buffer
  source.loop   = true
  const gain = ctx.createGain()
  gain.gain.value = 0.08
  source.connect(gain)
  gain.connect(ctx.destination)
  source.start()
  activeNodes.push(source)
}

function playForest() {
  const ctx = getCtx()

  // Background wind (filtered noise)
  const windBuf = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate)
  const windData = windBuf.getChannelData(0)
  for (let i = 0; i < windData.length; i++) windData[i] = (Math.random() * 2 - 1) * 0.1
  const wind = ctx.createBufferSource()
  wind.buffer = windBuf
  wind.loop   = true
  const windFilter = ctx.createBiquadFilter()
  windFilter.type = 'lowpass'
  windFilter.frequency.value = 400
  const windGain = ctx.createGain()
  windGain.gain.value = 0.3
  wind.connect(windFilter)
  windFilter.connect(windGain)
  windGain.connect(ctx.destination)
  wind.start()
  activeNodes.push(wind)

  // Periodic bird chirp
  function chirp() {
    if (audioCtx?.state === 'closed') return
    const osc  = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(1800, ctx.currentTime)
    osc.frequency.linearRampToValueAtTime(2200, ctx.currentTime + 0.08)
    osc.frequency.linearRampToValueAtTime(1600, ctx.currentTime + 0.16)
    gain.gain.setValueAtTime(0, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.04)
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.18)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.2)
    activeNodes.push(osc)
    const next = 4000 + Math.random() * 8000
    const t = setTimeout(chirp, next)
    activeNodes.push({ stop: () => clearTimeout(t), disconnect: () => {} })
  }
  setTimeout(chirp, 1500 + Math.random() * 3000)
}

function playCafe() {
  const ctx = getCtx()

  // Murmur (bandpass noise)
  const buf  = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1)
  const source = ctx.createBufferSource()
  source.buffer = buf
  source.loop   = true
  const filter = ctx.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = 800
  filter.Q.value = 1.5
  const gain = ctx.createGain()
  gain.gain.value = 0.12
  source.connect(filter)
  filter.connect(gain)
  gain.connect(ctx.destination)
  source.start()
  activeNodes.push(source)

  // Occasional cup clink
  function clink() {
    if (audioCtx?.state === 'closed') return
    const osc  = ctx.createOscillator()
    const g    = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.value = 1200
    g.gain.setValueAtTime(0.15, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4)
    osc.connect(g)
    g.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.4)
    activeNodes.push(osc)
    const t = setTimeout(clink, 8000 + Math.random() * 15000)
    activeNodes.push({ stop: () => clearTimeout(t), disconnect: () => {} })
  }
  setTimeout(clink, 3000)
}

// ── Session end bell ─────────────────────────────────────────────────────────
export function playSessionEndBell() {
  try {
    const ctx = getCtx()
    ;[0, 0.3, 0.6].forEach((delay, i) => {
      const osc  = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = [523.25, 659.25, 783.99][i]
      gain.gain.setValueAtTime(0.4, ctx.currentTime + delay)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 1.5)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(ctx.currentTime + delay)
      osc.stop(ctx.currentTime + delay + 1.5)
    })
  } catch (e) { /* silent fail if audio not supported */ }
}

// ── Public API ────────────────────────────────────────────────────────────────

export const TIMER_SOUNDS = [
  { id: 'none',        label: 'No sound',       emoji: '🔇' },
  { id: 'rain',        label: 'Rainfall',        emoji: '🌧️' },
  { id: 'lofi',        label: 'Lo-fi beats',     emoji: '🎵' },
  { id: 'whitenoise',  label: 'White noise',     emoji: '〰️' },
  { id: 'forest',      label: 'Forest & birds',  emoji: '🌿' },
  { id: 'cafe',        label: 'Coffee shop',     emoji: '☕' },
]

export function startSound(id) {
  stopAll()
  if (!id || id === 'none') return
  try {
    const ctx = getCtx()
    if (ctx.state === 'suspended') ctx.resume()
    if (id === 'rain')       playRain()
    else if (id === 'lofi')  playLofi()
    else if (id === 'whitenoise') playWhiteNoise()
    else if (id === 'forest') playForest()
    else if (id === 'cafe')  playCafe()
  } catch (e) {
    console.warn('Audio not available:', e.message)
  }
}

export function stopSound() {
  stopAll()
}
