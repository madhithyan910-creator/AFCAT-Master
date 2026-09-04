# 🛩️ AFCAT Master — Comprehensive Exam Preparation Ecosystem

> **Self-Contained • Zero Cloud Dependencies • Runs Anywhere on Any Private Device**

AFCAT Master is a complete, offline-first AFCAT (Air Force Common Admission Test) preparation workstation and interactive simulator. It is built purely with **React 19, TypeScript, Vite, and Tailwind CSS**.

All question banks, formula sheets, examiner trap explanations, audio synthesizers (via browser Web Audio API), and user progress metrics run **entirely client-side** using browser `localStorage`. No external backend servers, databases, or API keys are required.

---

## 🚀 How to Run on Any Private Device (Mac, Windows, Linux)

### 1. Prerequisites
Ensure you have **Node.js** (version 18.0 or higher) installed on your device:
- Download Node.js from: [https://nodejs.org/](https://nodejs.org/)

### 2. Export / Download the Project
- If you are in **Google AI Studio**:
  - Click the **Settings / Menu (⋮)** at the top right.
  - Choose **"Export to GitHub"** or **"Download ZIP"**.
  - Extract the downloaded ZIP file to any folder on your computer.

### 3. Open in Terminal
Open your terminal (Terminal on macOS/Linux, or PowerShell / Command Prompt / Git Bash on Windows) in the project folder:

```bash
# 1. Install all dependencies (takes ~15-30 seconds)
npm install

# 2. Start the local development server
npm run dev
```

### 4. Open in Your Browser
Once the dev server starts, open your browser and navigate to:
```
http://localhost:3000
```
*(If port 3000 is used by another app, Vite will automatically suggest an alternate port, e.g., `http://localhost:5173`)*

---

## 📱 Accessing from Mobile Phones & Tablets on Your Local Wi-Fi

Because Vite binds to `0.0.0.0`, any device connected to the same local Wi-Fi network (such as your iPhone, iPad, or Android phone) can access the app directly:
1. Find your computer's local IP address (e.g. `192.168.1.45` via `ipconfig` on Windows or `ifconfig` / `ip a` on Mac/Linux).
2. Open your phone or tablet's browser and go to:
   ```
   http://192.168.1.45:3000
   ```
3. You can even tap **"Add to Home Screen"** in Safari / Chrome on mobile to run it in full-screen standalone app mode!

---

## 📦 Production Build & Deployment

To generate a standalone production build ready for deployment on any static hosting (such as GitHub Pages, Vercel, Netlify, or Cloudflare Pages):

```bash
# Build static assets to dist/
npm run build

# Preview the production build locally
npm run preview
```

The resulting `dist/` directory contains standard static HTML, JavaScript, and CSS files that can be served from any web server (Nginx, Apache, Python `http.server`, etc.).

---

## 🛠️ Project Structure

- **`/src/data/`**: Complete syllabus databases:
  - `englishData.ts` — Comprehension, vocab, idioms, error spotting, cloze tests.
  - `mathAndReasoningData.ts` — Numerical ability, spatial reasoning, dot figures, Venn diagrams.
  - `generalAwarenessData.ts` — Defence forces, IAF aircraft specs, missile systems, awards, history, geography.
  - `learnTierQuestions.ts` — Tiered question banks (Beginner, Intermediate PYQs, Advance Traps).
  - `mockExams.ts` — Full 100-question timed simulation papers with official marking scheme (+3, -1).
- **`/src/components/`**: Modular view controllers:
  - `LearnView.tsx` — 3-tier depth syllabus reader, formula vault, examiner traps & tiered questions.
  - `PracticeArena.tsx` — Adaptive difficulty trainer, rapid-fire drills, accuracy gauges.
  - `ExamSimulator.tsx` — Full-length CBT exam interface with tactical navigation palette.
  - `DashboardView.tsx` — Radar charts, readiness indices, streak tracker & rank progression.
  - `FormulaVault.tsx` — Quick-reference math and science formulae.
  - `ReadingProgressBar.tsx` — Real-time lesson reading progress indicator.
- **`/src/utils/audio.ts`**: Zero-dependency procedural Web Audio sound synthesizer (clicks, correct chimes, alert sirens, test timer alarms).

---

## 🛡️ Privacy & Offline Resilience
- **Zero Tracking**: All answers, bookmark states, high scores, and XP progress are saved directly in your device's browser `localStorage`.
- **Works Without Internet**: Once `npm install` has been run, you can develop, study, and take mock exams completely offline without an active internet connection.
