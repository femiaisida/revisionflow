// src/utils/ai.js
// Primary: Mistral AI (mistral-small-latest, free tier, no regional restrictions)
// Fallback: Google Gemini 2.5 Flash (if Mistral key missing or fails)
//
// Mistral free tier: https://console.mistral.ai
// Gemini free tier:  https://aistudio.google.com/app/apikey

const MISTRAL_KEY = import.meta.env.VITE_MISTRAL_API_KEY
const GEMINI_KEY  = import.meta.env.VITE_GEMINI_API_KEY

const MISTRAL_URL = 'https://api.mistral.ai/v1/chat/completions'
const GEMINI_URL  = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`

const SYSTEM = `You are RevisionFlow's AI tutor — an expert on UK GCSE and A-Level revision.
You give specific, practical, encouraging advice tailored to UK students.
Be concise but thorough. Use bullet points where helpful. Focus on actionable recommendations.
Always reference specific free resources where relevant:
- Maths: Dr Frost Maths, 1stclassmaths, Corbettmaths, PMT, Addvancemaths (Further Maths)
- Sciences: Cognito, PMT, SaveMyExams, Primrose Kitten
- Computer Science: Craig 'n' Dave, CS GCSE Guru, Seneca
- English: Mr Bruff, SaveMyExams
- Geography: Internet Geography, PMT
- Business: Tutor2u
- Languages: Seneca, Herr Antrim (German)
- All subjects: Seneca, PMT, SaveMyExams`

// ── Core call function ────────────────────────────────────────────────────────
async function callMistral(prompt, systemPrompt = SYSTEM, maxTokens = 8192) {
  if (!MISTRAL_KEY) return null  // Signal to try fallback

  try {
    const res = await fetch(MISTRAL_URL, {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${MISTRAL_KEY}`,
      },
      body: JSON.stringify({
        model:       'mistral-small-latest',
        messages: [
          { role: 'system',  content: systemPrompt },
          { role: 'user',    content: prompt },
        ],
        temperature:  0.7,
        max_tokens:   maxTokens,
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.warn('[AI] Mistral error:', res.status, err)
      return null  // Try fallback for any error (including 429 rate limit)
    }

    const data = await res.json()
    const text = data.choices?.[0]?.message?.content || ''
    if (!text) return null
    console.log('[AI] Provider: Mistral (mistral-small-latest)')
    return { text, provider: 'mistral' }
  } catch {
    return null  // Network error — try fallback
  }
}

async function callGemini(prompt, systemPrompt = SYSTEM, maxTokens = 8192) {
  if (!GEMINI_KEY) return { error: 'No AI API key configured. Add VITE_MISTRAL_API_KEY to your environment variables.' }

  try {
    const res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${systemPrompt}\n\n${prompt}` }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: maxTokens },
      }),
    })

    const data = await res.json()
    if (data.error) return { error: data.error.message }
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
    console.log('[AI] Provider: Gemini 2.5 Flash (fallback)')
    return { text, provider: 'gemini' }
  } catch (e) {
    return { error: e.message }
  }
}

// Primary → fallback wrapper
async function callAI(prompt, systemPrompt = SYSTEM, maxTokens = 8192) {
  const mistralResult = await callMistral(prompt, systemPrompt, maxTokens)
  if (mistralResult !== null) return mistralResult
  // Mistral unavailable or not configured — use Gemini
  return callGemini(prompt, systemPrompt, maxTokens)
}

// ── Exported functions ────────────────────────────────────────────────────────

export async function generateStudyPlan(userData) {
  const { subjects, examDates, weakTopics, availableHours, preferences, weeksUntilFirst, firstExamDate, lastExamDate } = userData

  // Calculate actual revision window
  const weeks = weeksUntilFirst || 12
  const windowDesc = firstExamDate && lastExamDate
    ? `from now until ${lastExamDate} (first exam: ${firstExamDate}, approximately ${weeks} weeks away)`
    : `approximately ${weeks} weeks`

  const prompt = `Generate a personalised GCSE/A-Level revision study plan for a student.

STUDENT DETAILS:
Subjects: ${subjects?.map(s => `${s.name} (${s.board}, current: ${s.currentGrade || '?'}, target: ${s.targetGrade || 9})`).join(', ')}
Exam period: ${windowDesc}
Upcoming exams: ${examDates?.filter(e => new Date(e.examDate) > new Date()).sort((a,b)=>new Date(a.examDate)-new Date(b.examDate)).slice(0,12).map(e => `${e.subject} P${e.paper} on ${e.examDate}`).join(', ') || 'Not specified'}
Available hours per week: ${availableHours || 10}
Focus preference: ${preferences || 'Balanced content and exam practice'}

IMPORTANT CONSTRAINTS:
- The plan must cover EXACTLY ${weeks} weeks — no more
- Do NOT repeat the same weekly structure endlessly — vary it by phase
- Structure into 3 clear phases: Foundation (weeks 1-${Math.floor(weeks*0.4)}), Intensive (weeks ${Math.floor(weeks*0.4)+1}-${Math.floor(weeks*0.8)}), Final push (weeks ${Math.floor(weeks*0.8)+1}-${weeks})
- In the final 2 weeks before each exam, prioritise that specific subject heavily
- Keep each week's entry concise — one paragraph per phase, not per week

FORMAT:
1. Subject priority order and reasoning (bullet list)
2. Phase 1 — Foundation (what to do, which subjects, ratio)
3. Phase 2 — Intensive revision (shift in focus, more past papers)
4. Phase 3 — Final push (exam-specific focus, week by week for last 3 weeks only)
5. Resources per subject (concise list)
6. 3 practical motivation tips

Keep the total response under 600 words. Be specific and actionable.`
  return callAI(prompt)
}

export async function getTopicAdvice(subject, topic, confidence, mistakes) {
  const prompt = `A student needs advice on this topic:
Subject: ${subject}
Topic: ${topic}
Confidence level: ${confidence}/5
Recent mistakes: ${mistakes?.join(', ') || 'None logged'}

Give:
1. A clear explanation of the key concepts
2. Common mistakes students make and how to avoid them
3. The 3 best free resources for this specific topic
4. 3 practice questions (easy, medium, hard)
5. Exam technique tips for this topic`
  return callAI(prompt)
}

export async function analyseWeaknesses(paperAttempts, subject) {
  const recent = paperAttempts?.slice(0, 8) || []
  const prompt = `Analyse this student's past paper performance:
Subject: ${subject || 'All subjects'}
Recent attempts: ${JSON.stringify(recent.map(a => ({
  subject: a.subject, paper: a.paper, year: a.year,
  score: a.score, maxMarks: a.maxMarks, percentage: a.percentage, grade: a.grade
})))}

Provide:
1. Pattern analysis — which topics/question types are consistently weak
2. Priority topics to revise this week (ranked by urgency)
3. Specific free resources for each weak area
4. Whether to focus more on content revision or exam technique
5. Realistic grade trajectory based on recent scores`
  return callAI(prompt)
}

export async function getResourceRecommendations(subject, board, tier, weakTopics) {
  const prompt = `Recommend the best FREE revision resources for:
Subject: ${subject} (${board || 'AQA'}, ${tier || 'Higher'})
Weak topics: ${weakTopics?.join(', ') || 'General revision'}

For each resource:
- Name and URL
- What it's best for
- How to use it effectively
- Recommended time per week

Only include genuinely free resources. Include at least 5.`
  return callAI(prompt)
}

export async function generateCalendarPlan(userData) {
  const prompt = `Generate a revision calendar plan for a student:
Subjects: ${userData.subjects?.map(s => `${s.name} (${s.board}, target: ${s.targetGrade || 9})`).join(', ')}
Available days: ${userData.availableDays?.join(', ')}
Session times: ${JSON.stringify(userData.startTimes)}
End time: ${userData.endTime}
Content:exam ratio: ${userData.ratio || '2:1'}
Weeks until exams: ${userData.weeksUntilExams}

Generate a week-by-week plan showing subject priority, session types, and key milestones.
Be specific about which papers and topics to cover each week.`
  return callAI(prompt)
}

export async function getDailyAdvice(uid, todaysSessions, streak, recentMistakes) {
  const prompt = `Give a student their personalised daily revision briefing:
Today's sessions: ${todaysSessions?.map(s => `${s.subject} (${s.type})`).join(', ') || 'None scheduled'}
Current streak: ${streak} days
Recent mistakes: ${recentMistakes?.slice(0,3).map(m => `${m.subject}: ${m.topic}`).join(', ') || 'None'}

Give:
1. One motivational sentence (specific to their streak/progress)
2. Today's focus tip (specific to their sessions)
3. One quick win they can get today
4. A reminder about their most urgent weak area

Keep it short, punchy, and encouraging. Max 150 words total.`
  return callAI(prompt)
}

export async function chatWithAI(messages, userContext) {
  const contextStr = userContext?.subjects?.length
    ? `Student context: studying ${userContext.subjects.map(s => s.name).join(', ')}.`
    : ''
  const conversationStr = messages
    .slice(-10)  // last 10 messages to stay within token limits
    .map(m => `${m.role === 'user' ? 'Student' : 'AI'}: ${m.content}`)
    .join('\n')
  const prompt = `${contextStr}\n\nConversation:\n${conversationStr}\n\nAI:`
  return callAI(prompt)
}

export async function predictGrade(subject, paperAttempts, topicConfidences) {
  const subjectAttempts = paperAttempts?.filter(a => a.subject === subject) || []
  const weakTopics = topicConfidences?.filter(t => t.subjectId === subject && (t.confidence||3) <= 2) || []
  const prompt = `Predict the likely GCSE final grade for this student:
Subject: ${subject}
Paper attempts: ${JSON.stringify(subjectAttempts.slice(0,6).map(a => ({year:a.year,paper:a.paper,percentage:a.percentage,grade:a.grade})))}
Weak topics (confidence ≤2/5): ${weakTopics.map(t => t.name).join(', ') || 'None logged'}

Provide:
1. Predicted grade range (e.g. grade 7–8) with confidence level
2. What would push the grade up
3. What risks pulling it down
4. The single most impactful thing to work on right now`
  return callAI(prompt)
}

export async function suggestNextTopic(subject, topicConfidences, examDates) {
  const subjectTopics = topicConfidences?.filter(t => t.subjectId === subject) || []
  const nextExam = examDates?.filter(e => e.subject === subject && new Date(e.examDate) > new Date())
    .sort((a,b) => new Date(a.examDate) - new Date(b.examDate))[0]
  const prompt = `Suggest the single most important topic for this student to revise next:
Subject: ${subject}
Next exam: ${nextExam ? `${nextExam.examDate} (Paper ${nextExam.paper})` : 'Not specified'}
Topic confidence ratings:
${subjectTopics.sort((a,b)=>(a.confidence||3)-(b.confidence||3)).slice(0,15).map(t => `- ${t.name}: ${t.confidence||3}/5`).join('\n')}

Recommend ONE specific topic and explain:
1. Why this topic should be next (exam proximity + confidence gap)
2. How to structure a 45-minute revision session on it
3. Specific resources to use
4. What a grade 9 answer looks like for exam questions on this topic`
  return callAI(prompt)
}

export async function markAnswer(subject, question, answer) {
  const prompt = `You are a ${subject} GCSE examiner. Mark this student's answer:

Question: ${question}

Student's answer: ${answer}

Provide:
1. Estimated mark (state what out of, e.g. "6/8 marks")
2. What the student did well (specific praise)
3. What marks were lost and why (specific)
4. What a model answer would include
5. One exam technique tip for this question type`
  return callAI(prompt)
}

export async function generateFlashcards(subject, topic, count = 8) {
  const prompt = `Generate ${count} GCSE flashcards for: ${subject}${topic ? ` — ${topic}` : ''}

Format each card exactly like this:
Q: [clear, specific question]
A: [concise but complete answer — include key terms, numbers, processes]

Focus on:
- High-frequency exam topics
- Key definitions and processes
- Common command word questions (state, explain, evaluate)
- Numbers and statistics students must know`
  return callAI(prompt)
}
