// src/utils/ai.js
// AI provider: Mistral AI (mistral-small-latest)
// Free tier: https://console.mistral.ai
// Add VITE_MISTRAL_API_KEY to your Netlify environment variables.

const MISTRAL_KEY = import.meta.env.VITE_MISTRAL_API_KEY
const MISTRAL_URL = 'https://api.mistral.ai/v1/chat/completions'

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
export async function callAI(prompt, systemPrompt = SYSTEM, maxTokens = 8192) {
  if (!MISTRAL_KEY) {
    return { error: 'No AI API key configured. Add VITE_MISTRAL_API_KEY to your Netlify environment variables.' }
  }

  try {
    const res = await fetch(MISTRAL_URL, {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${MISTRAL_KEY}`,
      },
      body: JSON.stringify({
        model:      'mistral-small-latest',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user',   content: prompt },
        ],
        temperature: 0.7,
        max_tokens:  maxTokens,
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error('[AI] Mistral error:', res.status, err)
      return { error: `AI request failed (${res.status}). Please try again shortly.` }
    }

    const data = await res.json()
    const text = data.choices?.[0]?.message?.content || ''
    if (!text) return { error: 'AI returned an empty response. Please try again.' }
    return { text, provider: 'mistral' }
  } catch (e) {
    console.error('[AI] Network error:', e)
    return { error: 'Could not reach the AI service. Check your internet connection and try again.' }
  }
}

// ── Exported functions ────────────────────────────────────────────────────────

export async function generateStudyPlan(userData) {
  const { subjects, examDates, weakTopics, availableHours, preferences, weeksUntilFirst, firstExamDate, lastExamDate } = userData

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
  const confLabel = ['','Very weak — needs urgent attention','Weak — gaps in understanding','Building — some understanding but not secure','Strong — mostly secure','Mastered — confident'][confidence] || 'Building'
  const prompt = `You are an expert GCSE/A-Level tutor. A student is revising the topic "${topic}" within ${subject}. Their current confidence is: ${confLabel}.

Give a focused, exam-targeted response with these sections:

**Why students struggle with "${topic}"**
1-2 sentences on the most common misconceptions or hardest parts. Be specific to this exact topic.

**What you must know for the exam**
4-6 bullet points of the essential knowledge/skills for "${topic}". Use exact terminology the examiner expects.

**Best way to revise this specific topic**
One concrete, actionable technique tailored to the nature of this content (e.g. for a process: draw and label a diagram from memory; for definitions: make flashcards with trigger words; for calculations: do 10 timed questions without notes). Explain why this works for this topic.

**Exam technique tip**
One specific, actionable tip on how marks are awarded for "${topic}" — what examiners want to see, what students commonly miss.

**Free resources**
2 specific free resources. Format exactly as: [Name](URL) — one line of what it covers.
Only use real URLs: bbc.co.uk/bitesize, savemyexams.com, physicsandmathstutor.com, youtube.com, senecalearning.com, or subject-specific sites.

Keep under 280 words total. Everything must be specific to "${topic}" — nothing generic.
Recent mistakes to address: ${mistakes?.join(', ') || 'none logged'}`
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
    .slice(-10)
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

export async function generatePredictedQuestions(subject, board, topic, level, totalMarks) {
  const commandWords = {
    AQA:     'State, Describe, Explain, Evaluate, Assess, Analyse',
    Edexcel: 'State, Outline, Explain, Assess, Evaluate, To what extent',
    OCR:     'Identify, Describe, Explain, Discuss, Evaluate',
    WJEC:    'Identify, Describe, Explain, Discuss, Evaluate',
    Eduqas:  'Identify, Describe, Explain, Discuss, Evaluate',
    CCEA:    'State, Describe, Explain, Discuss, Evaluate',
  }
  const words = commandWords[board] || commandWords.AQA

  const prompt = `You are an expert ${board} ${subject} ${level} examiner.

Generate 3 exam-style predicted questions on the topic "${topic}" for ${board} ${subject} ${level}.

REQUIREMENTS:
- Match the exact style, wording and mark allocation format used by ${board}
- Use only these ${board} command words: ${words}
- Questions should total approximately ${totalMarks || 20} marks combined
- Make them realistic — these could appear in a real ${board} exam paper

FORMAT EACH QUESTION EXACTLY LIKE THIS (keep the --- separators):

---QUESTION 1---
[question text] [X marks]

MARK SCHEME:
• [mark point 1]
• [mark point 2]
• [continue for all marks available]

EXAMINER TIP: [one specific sentence on what students commonly miss for this question type]

---QUESTION 2---
[same format]

---QUESTION 3---
[same format]`

  return callAI(prompt)
}
