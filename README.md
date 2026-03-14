# RevisionFlow

> AI-powered GCSE & A-Level revision tracker with smart calendars, past paper analytics, gamification, and social features.

Built with React, Firebase, and Google Gemini AI. Free to use, installable as a PWA.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, React Router |
| Backend / Auth | Firebase (Firestore, Authentication, Storage) |
| AI | Google Gemini 2.0 Flash (free tier) |
| Hosting | Netlify (auto-deploy from GitHub) |
| PWA | Service Worker, Web App Manifest |
| Charts | Recharts |
| Animations | Framer Motion |

---

## Features

- **Smart Revision Calendar** — monthly/weekly view, AI-generated plans, ICS/CSV import & export
- **Past Paper Tracker** — question-by-question mark entry, grade calculation, progress graphs
- **Topic Confidence Tracker** — rate topics 1–5, AI advice per topic
- **Mistake Log** — log errors from papers, link to AI recommendations
- **AI Advisor** — chat interface + study plans + resource recommendations (Gemini)
- **Gamification** — XP, levels, badges, streaks
- **Friends & Leaderboard** — add friends, compete on XP leaderboard
- **Tasks** — to-do list with due dates and priorities
- **Notes** — rich text notes per subject/topic
- **Exam Countdowns** — add exam dates, see live countdowns
- **Public Profiles** — shareable profile page at `/u/username`
- **Dark / Light mode** — toggle with persistent preference
- **PWA** — installable on mobile home screen, basic offline support

---

## Quick Setup (20 minutes)

### Step 1 — Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/revisionflow.git
cd revisionflow
npm install
```

### Step 2 — Create a Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it `revisionflow` → Continue
3. Disable Google Analytics (optional) → Create project

**Enable Authentication:**
- Left sidebar → **Authentication** → Get started
- Sign-in method → Enable **Email/Password**
- Sign-in method → Enable **Google**

**Create Firestore database:**
- Left sidebar → **Firestore Database** → Create database
- Choose **Start in production mode** → Select your region → Done
- Go to **Rules** tab and paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
      match /{subcollection}/{docId} {
        allow read, write: if request.auth.uid == userId;
      }
    }
    match /paperStructures/{doc} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && resource.data.submittedBy == request.auth.uid;
    }
  }
}
```

**Get your Firebase config:**
- Project Settings (gear icon) → Your apps → Click **</>** (Web)
- Register app as `revisionflow-web`
- Copy the `firebaseConfig` object

### Step 3 — Get a free Gemini API key

1. Go to [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Click **Create API key**
3. Copy the key (free, no credit card needed)

### Step 4 — Create your environment file

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your values:

```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=revisionflow-xxxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=revisionflow-xxxxx
VITE_FIREBASE_STORAGE_BUCKET=revisionflow-xxxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123:web:abc123

VITE_GEMINI_API_KEY=AIzaSy...
```

### Step 5 — Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Deploy to Netlify

### Option A — Connect GitHub (recommended, auto-deploys on every push)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/revisionflow.git
git push -u origin main
```

2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Connect GitHub, select your `revisionflow` repo
4. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Add environment variables** — Site settings → Environment variables → Add each variable from your `.env.local`
6. Click **Deploy site**

Your app is live at `https://your-site.netlify.app`

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify env:set VITE_FIREBASE_API_KEY "your_key"
netlify env:set VITE_FIREBASE_AUTH_DOMAIN "your_domain"
netlify env:set VITE_FIREBASE_PROJECT_ID "your_project_id"
netlify env:set VITE_FIREBASE_STORAGE_BUCKET "your_bucket"
netlify env:set VITE_FIREBASE_MESSAGING_SENDER_ID "your_sender_id"
netlify env:set VITE_FIREBASE_APP_ID "your_app_id"
netlify env:set VITE_GEMINI_API_KEY "your_gemini_key"
netlify deploy --prod
```

---

## Add Google Auth domain to Firebase

After deploying, you must whitelist your Netlify domain in Firebase:

1. Firebase Console → Authentication → Settings → Authorised domains
2. Add your Netlify URL (e.g. `revisionflow.netlify.app`)

---

## Firebase Indexes (required for queries)

Some queries need composite indexes. Firebase will show an error with a link to create them automatically — just click the link in the browser console when it appears. The main indexes needed are:

- `users/{uid}/sessions` — `subject ASC, createdAt DESC`
- `users/{uid}/paperAttempts` — `subject ASC, createdAt DESC`
- `users/{uid}/mistakes` — `subject ASC, createdAt DESC`
- `paperStructures` — `board ASC, subject ASC, year DESC`

---

## Project Structure

```
revisionflow/
├── public/
│   ├── manifest.json        # PWA manifest
│   ├── sw.js                # Service worker
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Layout.jsx       # Sidebar + mobile nav
│   │   └── LoadingScreen.jsx
│   ├── context/
│   │   ├── AuthContext.jsx  # Firebase auth state
│   │   └── ThemeContext.jsx # Dark/light theme
│   ├── data/
│   │   └── subjects.js      # Subjects, boards, XP, badges, levels
│   ├── pages/
│   │   ├── Landing.jsx      # Public landing page
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Onboarding.jsx   # Multi-step setup wizard
│   │   ├── Dashboard.jsx    # Main home screen
│   │   ├── Calendar.jsx     # Revision calendar
│   │   ├── PastPapers.jsx   # Paper tracking + grade calc
│   │   ├── Topics.jsx       # Topic confidence tracker
│   │   ├── Mistakes.jsx     # Mistake log
│   │   ├── Tasks.jsx        # To-do list
│   │   ├── Notes.jsx        # Rich text notes
│   │   ├── ExamDates.jsx    # Exam countdowns
│   │   ├── AIAdvisor.jsx    # Gemini AI chat + plans
│   │   ├── Friends.jsx      # Social features
│   │   ├── Leaderboard.jsx  # XP leaderboard
│   │   ├── Profile.jsx      # User profile + badges
│   │   ├── PublicProfile.jsx# Public-facing profile
│   │   └── Settings.jsx     # Account + privacy settings
│   ├── styles/
│   │   └── globals.css      # Full design system
│   ├── utils/
│   │   ├── ai.js            # Gemini API calls
│   │   ├── calendar.js      # ICS/CSV, grade calc, countdown
│   │   └── firestore.js     # All Firestore operations
│   ├── firebase.js          # Firebase initialisation
│   ├── App.jsx              # Routes
│   └── main.jsx             # Entry point
├── .env.example             # Environment variable template
├── .gitignore
├── index.html
├── netlify.toml             # Netlify build config
├── package.json
└── vite.config.js
```

---

## Customisation

### Adding your own subjects to the onboarding
Edit `src/data/subjects.js` — add to `GCSE_SUBJECTS` or `ALEVEL_SUBJECTS`.

### Adding grade boundaries
Edit `GRADE_BOUNDARIES_GCSE` in `src/data/subjects.js`. Format:
```js
'BOARD-Subject-Year': { maxMarks: 80, boundaries: [72,64,56,48,40,32,24,16,8] }
// boundaries: [grade9, grade8, grade7, grade6, grade5, grade4, grade3, grade2, grade1]
```

### Changing the colour theme
Edit CSS variables in `src/styles/globals.css` under `:root`.

---

## Environment Variables Reference

| Variable | Where to get it |
|---|---|
| `VITE_FIREBASE_API_KEY` | Firebase Console → Project Settings → Your Apps |
| `VITE_FIREBASE_AUTH_DOMAIN` | Same as above |
| `VITE_FIREBASE_PROJECT_ID` | Same as above |
| `VITE_FIREBASE_STORAGE_BUCKET` | Same as above |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Same as above |
| `VITE_FIREBASE_APP_ID` | Same as above |
| `VITE_GEMINI_API_KEY` | [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) |

---

## Security Notes

- Never commit `.env.local` to GitHub — it is in `.gitignore`
- The Gemini API key is exposed in the client bundle — this is acceptable for free-tier personal/portfolio projects; for production at scale, proxy it through a Netlify function
- Firestore rules restrict all user data to the authenticated user only

---

## Portfolio Notes

This project demonstrates:
- **React 18** with lazy loading, context API, custom hooks
- **Firebase** — Firestore (NoSQL), Authentication (multi-provider), real-time data
- **AI integration** — Gemini API for personalised study advice and plan generation
- **PWA** — service worker, manifest, offline capability
- **Responsive design** — mobile-first, works across all screen sizes
- **Gamification** — XP system, badge unlocks, streak tracking
- **Full-stack architecture** — client-side rendering with serverless backend
- **Data visualisation** — Recharts for progress graphs
- **Calendar system** — ICS generation/parsing, monthly/weekly views

---

*Built by Oluwafemi Aisida · RevisionFlow · 2026*
