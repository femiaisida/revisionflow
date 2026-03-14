// src/utils/ai.js
// Uses Google Gemini 2.0 Flash (free tier: 1500 req/day)
// Get your free key at https://aistudio.google.com/app/apikey

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`

async function callGemini(prompt, systemPrompt = '') {
  if (!GEMINI_KEY) return { error: 'No Gemini API key configured. Add VITE_GEMINI_API_KEY to your .env.local file.' }
  try {
    const res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
      }),
    })
    const data = await res.json()
    if (data.error) return { error: data.error.message }
    return { text: data.candidates?.[0]?.content?.parts?.[0]?.text || '' }
  } catch (e) {
    return { error: e.message }
  }
}

const SYSTEM = `You are RevisionFlow's AI tutor — an expert on UK GCSE and A-Level revision.
You give specific, practical, encouraging advice tailored to UK students.
Be concise. Use bullet points where helpful. Focus on actionable recommendations.
Reference specific free resources (Dr Frost Maths, Cognito, PMT, SaveMyExams, Seneca, Mr Bruff, Craig 'n' Dave, Internet Geography, Tutor2u, CS GCSE Guru).`

export async function generateStudyPlan(userData) {
  const { subjects, examDates, weakTopics, availableHours, preferences } = userData
  const prompt = `Generate a personalised GCSE/A-Level study plan for a student with these details:
Subjects: ${subjects?.map(s => `${s.name} (${s.board}, current grade: ${s.currentGrade})`).join(', ')}
Exam dates: ${examDates ? JSON.stringify(examDates) : 'Not specified'}
Weak topics: ${weakTopics?.join(', ') || 'Not specified'}
Available revision hours per week: ${availableHours || 'Not specified'}
Preferences: ${preferences || 'Standard'}

Create a structured weekly study plan with:
1. Which subjects to prioritise and why
2. Recommended session structure (content vs exam practice ratio)
3. Specific resources for each subject
4. Key topics to focus on first
5. Tips for maintaining motivation

Format clearly with headers and bullet points.`
  return callGemini(prompt, SYSTEM)
}

export async function getTopicAdvice(subject, topic, confidence, mistakes) {
  const prompt = `A student is struggling with this topic and needs advice:
Subject: ${subject}
Topic: ${topic}
Confidence level: ${confidence}/5
Recent mistakes: ${mistakes?.join(', ') || 'None logged'}

Give:
1. A clear explanation of the key concepts in this topic
2. Common mistakes students make and how to avoid them
3. The 3 best free resources specifically for this topic
4. 3 practice questions to try (with difficulty: easy, medium, hard)
5. Exam technique tips for questions on this topic`
  return callGemini(prompt, SYSTEM)
}

export async function analyseWeaknesses(paperAttempts, subject) {
  const prompt = `Analyse a student's past paper performance and recommend revision focus:
Subject: ${subject}
Paper attempts (last 5): ${JSON.stringify(paperAttempts?.slice(-5))}

Provide:
1. Pattern analysis — which question types/topics are consistently weak
2. Priority topics to revise this week (ranked)
3. Specific resources for each weak area
4. Whether to focus more on content revision or exam technique
5. A realistic target grade based on recent trajectory`
  return callGemini(prompt, SYSTEM)
}

export async function getResourceRecommendations(subject, board, tier, weakTopics) {
  const prompt = `Recommend the best FREE revision resources for:
Subject: ${subject} (${board}, ${tier || 'Higher'})
Weak topics: ${weakTopics?.join(', ') || 'General revision'}

For each resource, give:
- Resource name and URL
- What it's best for
- How to use it effectively
- How much time to spend on it per week

Focus only on genuinely free resources. Include at least 5 resources.`
  return callGemini(prompt, SYSTEM)
}

export async function generateCalendarPlan(userData) {
  const prompt = `Generate a detailed revision calendar plan for a student:
Subjects and exam dates: ${JSON.stringify(userData.subjects)}
Available days: ${userData.availableDays?.join(', ')}
Session start times: ${JSON.stringify(userData.startTimes)}
End time: ${userData.endTime}
Content:exam ratio preference: ${userData.ratio || '2:1'}
Weeks until exams start: ${userData.weeksUntilExams}

Generate a week-by-week plan showing:
- Which subject to revise each day
- Whether it's content or exam practice
- Which paper/topic to focus on
- Any important milestones

Format as a structured plan. Be specific about paper numbers and topics.`
  return callGemini(prompt, SYSTEM)
}

export async function getDailyAdvice(uid, todaysSessions, streak, recentMistakes) {
  const prompt = `Give a student their personalised daily revision briefing:
Today's scheduled sessions: ${todaysSessions?.map(s => `${s.subject} ${s.type}`).join(', ')}
Current streak: ${streak} days
Recent mistakes logged: ${recentMistakes?.slice(0,3).map(m => `${m.subject}: ${m.topic}`).join(', ') || 'None'}

Give:
1. One motivational sentence (specific to their streak/progress)
2. Today's focus tip (specific to their sessions)
3. One quick win they can get today
4. A reminder about their most urgent weak area

Keep it short, punchy, and encouraging. Max 150 words total.`
  return callGemini(prompt, SYSTEM)
}

export async function chatWithAI(messages, userContext) {
  const contextStr = `Student context: ${userContext.subjects?.map(s => s.name).join(', ')} student. Current grade targets: ${userContext.subjects?.map(s => `${s.name}: ${s.targetGrade}`).join(', ')}.`
  const conversationStr = messages.map(m => `${m.role === 'user' ? 'Student' : 'AI'}: ${m.content}`).join('\n')
  const prompt = `${contextStr}\n\nConversation:\n${conversationStr}\n\nAI:`
  return callGemini(prompt, SYSTEM)
}
