// netlify/functions/ai.js
// Server-side proxy for Mistral AI.
// The API key NEVER reaches the browser — it lives only in Netlify's
// server environment as MISTRAL_API_KEY (no VITE_ prefix).
//
// Rate limiting: 100 AI calls per user per day, tracked in a simple
// in-memory store per function instance. For production scale, swap
// the in-memory store for Upstash Redis or a Firestore counter.
//
// Deploy steps:
//   1. Remove VITE_MISTRAL_API_KEY from Netlify → Site settings → Env vars
//   2. Add MISTRAL_API_KEY (same value, no VITE_ prefix) to Netlify env vars
//   3. Upload this file to netlify/functions/ai.js in your repo
//   4. Upload the updated netlify.toml and src/utils/ai.js
//   5. Redeploy — done.

const MISTRAL_URL = 'https://api.mistral.ai/v1/chat/completions'
const MAX_TOKENS  = 8192

// Simple in-memory rate limiter (resets when function cold-starts, ~every few hours)
// Good enough for MVP. Swap for Redis/Firestore for production.
const rateLimiter = new Map() // uid -> { count, resetAt }

const DAILY_LIMIT = 150 // calls per user per day

function checkRateLimit(uid) {
  if (!uid) return { allowed: false, reason: 'Not authenticated' }

  const now = Date.now()
  const entry = rateLimiter.get(uid)

  if (!entry || now > entry.resetAt) {
    // New day or first call
    rateLimiter.set(uid, {
      count:   1,
      resetAt: now + 24 * 60 * 60 * 1000, // 24h from now
    })
    return { allowed: true, remaining: DAILY_LIMIT - 1 }
  }

  if (entry.count >= DAILY_LIMIT) {
    const resetIn = Math.ceil((entry.resetAt - now) / (60 * 1000))
    return {
      allowed: false,
      reason:  `Daily AI limit reached (${DAILY_LIMIT} calls/day). Resets in ${resetIn} minutes.`,
    }
  }

  entry.count++
  return { allowed: true, remaining: DAILY_LIMIT - entry.count }
}

export default async function handler(req, context) {
  // Only accept POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // CORS — only allow requests from your own domain
  const origin = req.headers.get('origin') || ''
  const allowed = [
    'https://revision-flow.netlify.app',
    'http://localhost:5173',
    'http://localhost:4173',
  ]
  if (!allowed.includes(origin) && !origin.endsWith('.netlify.app')) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Parse request body
  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { messages, systemPrompt, maxTokens, uid } = body

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'messages array is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Rate limiting
  const rateCheck = checkRateLimit(uid || 'anonymous')
  if (!rateCheck.allowed) {
    return new Response(JSON.stringify({ error: rateCheck.reason }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'X-RateLimit-Remaining': '0',
      },
    })
  }

  // Check API key
  const apiKey = process.env.MISTRAL_API_KEY
  if (!apiKey) {
    console.error('[AI proxy] MISTRAL_API_KEY not set in environment')
    return new Response(JSON.stringify({ error: 'AI service not configured. Contact support.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Sanitise messages — strip any attempt to inject system role from client
  const safeMessages = messages
    .filter(m => m.role === 'user' || m.role === 'assistant')
    .map(m => ({
      role:    m.role,
      content: String(m.content).slice(0, 20000), // hard cap per message
    }))
    .slice(-20) // last 20 messages max

  // Prepend system prompt
  const fullMessages = [
    { role: 'system', content: systemPrompt || defaultSystem },
    ...safeMessages,
  ]

  // Call Mistral
  try {
    const mistralRes = await fetch(MISTRAL_URL, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model:       'mistral-small-latest',
        messages:    fullMessages,
        temperature: 0.7,
        max_tokens:  Math.min(maxTokens || MAX_TOKENS, MAX_TOKENS),
      }),
    })

    if (!mistralRes.ok) {
      const errBody = await mistralRes.json().catch(() => ({}))
      console.error('[AI proxy] Mistral error:', mistralRes.status, errBody)
      return new Response(JSON.stringify({
        error: `AI request failed (${mistralRes.status}). Please try again.`,
      }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const data = await mistralRes.json()
    const text = data.choices?.[0]?.message?.content || ''

    if (!text) {
      return new Response(JSON.stringify({ error: 'AI returned an empty response.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({
      text,
      provider:  'mistral',
      remaining: rateCheck.remaining,
    }), {
      status: 200,
      headers: {
        'Content-Type':        'application/json',
        'X-RateLimit-Remaining': String(rateCheck.remaining),
      },
    })
  } catch (e) {
    console.error('[AI proxy] Network error:', e)
    return new Response(JSON.stringify({
      error: 'Could not reach the AI service. Check your connection and try again.',
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

const defaultSystem = `You are RevisionFlow's AI tutor — an expert on UK GCSE and A-Level revision.
You give specific, practical, encouraging advice tailored to UK students.
Be concise but thorough. Use bullet points where helpful. Focus on actionable recommendations.
Always reference specific free resources where relevant:
- Maths: Dr Frost Maths, Corbettmaths, PMT
- Sciences: Cognito, PMT, SaveMyExams
- Computer Science: Craig 'n' Dave, Seneca
- English: Mr Bruff, SaveMyExams
- All subjects: Seneca, PMT, SaveMyExams`
