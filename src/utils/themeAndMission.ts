import { SubjectId, MilestoneMedal, ConfidenceMetric, UserProgressState, TrainingTimelineEvent } from '../types';

export interface SubjectThemeConfig {
  id: SubjectId | 'defence';
  name: string;
  shortName: string;
  colorName: string;
  accentHex: string;
  // Tailwind class sets
  text: string;
  textMuted: string;
  bgSubtle: string;
  bgMedium: string;
  border: string;
  borderHover: string;
  glow: string;
  badge: string;
  progressGradient: string;
  solidButton: string;
}

export const SUBJECT_THEMES: Record<SubjectId | 'defence', SubjectThemeConfig> = {
  english: {
    id: 'english',
    name: 'English Comprehension & Verbal Ability',
    shortName: 'English',
    colorName: 'sky',
    accentHex: '#0284c7',
    text: 'text-sky-400 dark:text-sky-300',
    textMuted: 'text-sky-600 dark:text-sky-400/70',
    bgSubtle: 'bg-sky-50 dark:bg-sky-950/30',
    bgMedium: 'bg-sky-100 dark:bg-sky-500/20',
    border: 'border-sky-300 dark:border-sky-500/30',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-400/60',
    glow: 'shadow-sky-500/20',
    badge: 'bg-sky-500/15 text-sky-400 border-sky-400/30',
    progressGradient: 'from-sky-500 to-blue-600',
    solidButton: 'bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/25'
  },
  numerical: {
    id: 'numerical',
    name: 'Numerical Ability & Mathematics',
    shortName: 'Maths',
    colorName: 'emerald',
    accentHex: '#10b981',
    text: 'text-emerald-500 dark:text-emerald-300',
    textMuted: 'text-emerald-600 dark:text-emerald-400/70',
    bgSubtle: 'bg-emerald-50 dark:bg-emerald-950/30',
    bgMedium: 'bg-emerald-100 dark:bg-emerald-500/20',
    border: 'border-emerald-300 dark:border-emerald-500/30',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-400/60',
    glow: 'shadow-emerald-500/20',
    badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-400/30',
    progressGradient: 'from-emerald-500 to-teal-600',
    solidButton: 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/25'
  },
  reasoning: {
    id: 'reasoning',
    name: 'Reasoning & Military Aptitude',
    shortName: 'Reasoning',
    colorName: 'purple',
    accentHex: '#a855f7',
    text: 'text-purple-500 dark:text-purple-300',
    textMuted: 'text-purple-600 dark:text-purple-400/70',
    bgSubtle: 'bg-purple-50 dark:bg-purple-950/30',
    bgMedium: 'bg-purple-100 dark:bg-purple-500/20',
    border: 'border-purple-300 dark:border-purple-500/30',
    borderHover: 'hover:border-purple-400 dark:hover:border-purple-400/60',
    glow: 'shadow-purple-500/20',
    badge: 'bg-purple-500/15 text-purple-400 border-purple-400/30',
    progressGradient: 'from-purple-500 to-indigo-600',
    solidButton: 'bg-purple-500 hover:bg-purple-400 text-white shadow-purple-500/25'
  },
  general_awareness: {
    id: 'general_awareness',
    name: 'General Awareness & Static GK',
    shortName: 'GK',
    colorName: 'amber',
    accentHex: '#f59e0b',
    text: 'text-amber-500 dark:text-amber-300',
    textMuted: 'text-amber-600 dark:text-amber-400/70',
    bgSubtle: 'bg-amber-50 dark:bg-amber-950/30',
    bgMedium: 'bg-amber-100 dark:bg-amber-500/20',
    border: 'border-amber-300 dark:border-amber-500/30',
    borderHover: 'hover:border-amber-400 dark:hover:border-amber-400/60',
    glow: 'shadow-amber-500/20',
    badge: 'bg-amber-500/15 text-amber-400 border-amber-400/30',
    progressGradient: 'from-amber-500 to-orange-600',
    solidButton: 'bg-amber-500 hover:bg-amber-400 text-white shadow-amber-500/25'
  },
  defence: {
    id: 'defence',
    name: 'Defence Forces & Indian Air Force',
    shortName: 'Defence',
    colorName: 'cyan',
    accentHex: '#06b6d4',
    text: 'text-cyan-500 dark:text-cyan-300',
    textMuted: 'text-cyan-600 dark:text-cyan-400/70',
    bgSubtle: 'bg-cyan-50 dark:bg-cyan-950/30',
    bgMedium: 'bg-cyan-100 dark:bg-cyan-500/20',
    border: 'border-cyan-300 dark:border-cyan-500/30',
    borderHover: 'hover:border-cyan-400 dark:hover:border-cyan-400/60',
    glow: 'shadow-cyan-500/20',
    badge: 'bg-cyan-500/15 text-cyan-400 border-cyan-400/30',
    progressGradient: 'from-cyan-500 to-blue-700',
    solidButton: 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-cyan-500/25'
  }
};

export function getSubjectTheme(subject?: SubjectId | 'defence' | string): SubjectThemeConfig {
  if (subject && subject in SUBJECT_THEMES) {
    return SUBJECT_THEMES[subject as SubjectId | 'defence'];
  }
  return SUBJECT_THEMES.english;
}

// -------------------------------------------------------------
// Medal Milestone System (Visual metallic badges)
// -------------------------------------------------------------
export interface MedalInfo {
  medal: MilestoneMedal;
  title: string;
  threshold: number;
  gradient: string;
  borderClass: string;
  glowClass: string;
  badgeBg: string;
  badgeText: string;
  iconSymbol: string;
}

export function getMilestoneMedal(percentage: number): MedalInfo {
  if (percentage >= 100) {
    return {
      medal: 'master',
      title: 'Air Ace Master Wings',
      threshold: 100,
      gradient: 'from-cyan-400 via-sky-300 to-indigo-400',
      borderClass: 'border-cyan-300/80 shadow-lg shadow-cyan-500/30 ring-1 ring-cyan-400/50',
      glowClass: 'shadow-cyan-400/40',
      badgeBg: 'bg-cyan-500/20',
      badgeText: 'text-cyan-300',
      iconSymbol: '👑'
    };
  }
  if (percentage >= 75) {
    return {
      medal: 'gold',
      title: 'Gold Squadron Leader',
      threshold: 75,
      gradient: 'from-amber-300 via-yellow-400 to-amber-600',
      borderClass: 'border-amber-400/80 shadow-md shadow-amber-500/20',
      glowClass: 'shadow-amber-400/30',
      badgeBg: 'bg-amber-500/20',
      badgeText: 'text-amber-300',
      iconSymbol: '🥇'
    };
  }
  if (percentage >= 50) {
    return {
      medal: 'silver',
      title: 'Silver Flight Officer',
      threshold: 50,
      gradient: 'from-slate-200 via-slate-300 to-slate-400',
      borderClass: 'border-slate-300/80 shadow-sm shadow-slate-400/20',
      glowClass: 'shadow-slate-300/30',
      badgeBg: 'bg-slate-400/20',
      badgeText: 'text-slate-200',
      iconSymbol: '🥈'
    };
  }
  if (percentage >= 25) {
    return {
      medal: 'bronze',
      title: 'Bronze Aviator',
      threshold: 25,
      gradient: 'from-amber-700 via-amber-800 to-yellow-900',
      borderClass: 'border-amber-700/60',
      glowClass: 'shadow-amber-700/20',
      badgeBg: 'bg-amber-800/30',
      badgeText: 'text-amber-400',
      iconSymbol: '🥉'
    };
  }
  return {
    medal: 'cadet',
    title: 'Cadet Pilot In-Training',
    threshold: 0,
    gradient: 'from-slate-600 to-slate-700',
    borderClass: 'border-white/10',
    glowClass: 'shadow-none',
    badgeBg: 'bg-white/10',
    badgeText: 'text-white/60',
    iconSymbol: '✈️'
  };
}

// -------------------------------------------------------------
// Multi-factor Confidence Indicator
// -------------------------------------------------------------
export function calculateTopicConfidence(params: {
  accuracy: number; // 0 - 100
  attemptCount: number;
  repeatedMistakesCount?: number;
  lastAttemptDaysAgo?: number;
  avgDifficultyScore?: number; // 1 (easy) to 3 (hard)
}): ConfidenceMetric {
  const {
    accuracy,
    attemptCount,
    repeatedMistakesCount = 0,
    lastAttemptDaysAgo = 1,
    avgDifficultyScore = 2
  } = params;

  if (attemptCount === 0) {
    return {
      score: 15,
      level: 'low',
      label: 'Sortie Needed',
      factors: { accuracy: 0, recencyDays: 99, difficultyWeight: 1, mistakePenalty: 0 }
    };
  }

  // Multi-factor calculation
  const accuracyComponent = accuracy * 0.55; // 55% weight
  
  // Recency factor (up to 15%)
  const recencyBonus = Math.max(0, 15 - lastAttemptDaysAgo * 2.5);

  // Difficulty weight (up to 15%)
  const diffMultiplier = (avgDifficultyScore / 3) * 15;

  // Sample size confidence (up to 15%)
  const sampleBonus = Math.min(15, attemptCount * 1.5);

  // Mistake penalty (-3% per active uncorrected mistake)
  const mistakePenalty = Math.min(25, repeatedMistakesCount * 3.5);

  const rawScore = accuracyComponent + recencyBonus + diffMultiplier + sampleBonus - mistakePenalty;
  const score = Math.max(5, Math.min(100, Math.round(rawScore)));

  let level: 'low' | 'moderate' | 'high' | 'combat_ready' = 'low';
  let label = 'Low Confidence';

  if (score >= 85) {
    level = 'combat_ready';
    label = 'Combat Ready';
  } else if (score >= 65) {
    level = 'high';
    label = 'High Confidence';
  } else if (score >= 45) {
    level = 'moderate';
    label = 'Moderate Grasp';
  } else {
    level = 'low';
    label = 'Attention Required';
  }

  return {
    score,
    level,
    label,
    factors: {
      accuracy,
      recencyDays: lastAttemptDaysAgo,
      difficultyWeight: Math.round(diffMultiplier),
      mistakePenalty: Math.round(mistakePenalty)
    }
  };
}

// -------------------------------------------------------------
// "Living" Dashboard Dynamic Situational Messaging
// -------------------------------------------------------------
export interface LivingStatusInfo {
  greeting: string;
  subGreeting: string;
  tacticalBadge: string;
  badgeColor: string;
  recommendedAction: string;
}

export function getLivingDashboardStatus(state: UserProgressState): LivingStatusInfo {
  const hour = new Date().getHours();
  let greeting = '☀️ Good morning, Cadet';
  let subGreeting = 'Your first sortie awaits. Calm focus guarantees tactical precision.';

  if (hour >= 12 && hour < 17) {
    greeting = '🌤️ Good afternoon, Air Warrior';
    subGreeting = 'Mid-day tactical training in session. Maintain consistent throttle.';
  } else if (hour >= 17 && hour < 22) {
    greeting = '🌅 Good evening, Officer';
    subGreeting = 'Debrief today’s sorties. Convert weak spots into flight strengths.';
  } else if (hour >= 22 || hour < 5) {
    greeting = '🌙 Night Sortie Active';
    subGreeting = 'Tactical night vision mode engaged. Deep focus leads the squadron.';
  }

  const answeredToday = Object.values(state.answeredQuestions || {}).filter(q => {
    if (!q?.timestamp) return false;
    const qDate = new Date(q.timestamp).toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];
    return qDate === today;
  }).length;

  const mistakesCount = Object.keys(state.mistakes || {}).length;
  const latestMock = state.mockHistory?.[0];

  let tacticalBadge = 'SYSTEM READY // ALL CHANNELS NOMINAL';
  let badgeColor = 'bg-sky-500/20 text-sky-300 border-sky-400/40';
  let recommendedAction = 'Engage in today’s primary syllabus mission';

  if (answeredToday > 0) {
    tacticalBadge = `🔥 SORTIES ACTIVE // ${answeredToday} QUESTIONS CONQUERED TODAY`;
    badgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40';
    recommendedAction = 'Keep the momentum going with a 5-min Speed Sprint';
  } else if (mistakesCount >= 5) {
    tacticalBadge = `⚠️ ATTENTION REQUIRED // ${mistakesCount} MISTAKES FLAGGED IN MISTAKE BOOK`;
    badgeColor = 'bg-amber-500/20 text-amber-300 border-amber-400/40';
    recommendedAction = 'Perform a 10-minute Mistake Reconnaissance drill';
  } else if (latestMock) {
    tacticalBadge = `🎖️ DEBRIEF COMPLETE // LAST MOCK: ${latestMock.totalScore}/${latestMock.maxScore} (${latestMock.accuracy}%)`;
    badgeColor = 'bg-purple-500/20 text-purple-300 border-purple-400/40';
    recommendedAction = 'Target Numerical Ability to push beyond 220+ target';
  }

  return {
    greeting,
    subGreeting,
    tacticalBadge,
    badgeColor,
    recommendedAction
  };
}

// -------------------------------------------------------------
// Training Timeline History Generator
// -------------------------------------------------------------
export function generateTrainingTimeline(state: UserProgressState): TrainingTimelineEvent[] {
  const events: TrainingTimelineEvent[] = [];

  // Anchor start
  events.push({
    id: 'tl-start',
    date: '2026-08-20',
    displayDate: 'DAY 01',
    title: 'Commissioned Cadet Squadron',
    description: 'Enrolled in AFCAT 2026 Flight Academy. Initialized study plan and diagnostic.',
    iconType: 'plane',
    badge: 'ENLISTED'
  });

  events.push({
    id: 'tl-english',
    date: '2026-08-23',
    displayDate: 'DAY 04',
    title: 'Verbal Reconnaissance Sortie',
    description: 'Mastered Active/Passive Voice, Prepositions, and 50 high-yield idioms.',
    iconType: 'target',
    badge: 'VERBAL +40 XP'
  });

  const totalAnswered = Object.keys(state.answeredQuestions || {}).length;
  if (totalAnswered >= 20) {
    events.push({
      id: 'tl-questions-50',
      date: '2026-08-27',
      displayDate: 'DAY 08',
      title: '50 Combat Questions Conquered',
      description: `Crossed initial threshold with consistent tactical accuracy across all subjects.`,
      iconType: 'check',
      badge: 'COMBAT DRILL'
    });
  }

  if (state.mockHistory && state.mockHistory.length > 0) {
    const mock = state.mockHistory[0];
    events.push({
      id: 'tl-first-mock',
      date: mock.date.split('T')[0] || '2026-08-30',
      displayDate: 'DAY 11',
      title: 'Full AFCAT Mission Debrief',
      description: `Completed full timed mock sortie: Scored ${mock.totalScore}/${mock.maxScore} with ${mock.accuracy}% accuracy.`,
      iconType: 'award',
      badge: `${mock.totalScore} MARKS`,
      highlight: true
    });
  } else {
    events.push({
      id: 'tl-first-mock-bench',
      date: '2026-08-30',
      displayDate: 'DAY 11',
      title: 'Speed Sprint Sectional Benchmark',
      description: 'Tested reasoning, clocks & calendars, and military aptitude under timed pressure.',
      iconType: 'award',
      badge: 'SECTIONAL'
    });
  }

  if (state.streak >= 3) {
    events.push({
      id: 'tl-streak',
      date: '2026-09-02',
      displayDate: `DAY ${Math.max(12, state.streak)}`,
      title: `${state.streak}-Day Flight Path Maintained`,
      description: 'Air superiority secured with an unbroken daily training flight path.',
      iconType: 'flame',
      badge: `${state.streak} DAYS 🔥`,
      highlight: true
    });
  }

  // Now anchor
  events.push({
    id: 'tl-now',
    date: new Date().toISOString().split('T')[0],
    displayDate: 'ACTIVE NOW',
    title: 'Mission Flight in Progress',
    description: `Current rank: ${state.level} (${state.xp} XP). Next tactical milestone: 220+ Target score.`,
    iconType: 'plane',
    badge: 'SORTIE ACTIVE',
    highlight: true
  });

  return events;
}
