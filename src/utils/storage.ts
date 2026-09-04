import { UserProgressState, UserLevel, Question, Achievement } from '../types';
import { sound } from './audio';

const STORAGE_KEY = 'afcat_master_state_v1';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: 'first_sorte', title: 'First Sortie', description: 'Complete your first practice session or mock test.', icon: '🛩️', unlocked: false },
  { id: 'seven_day_streak', title: 'Seven-Day Streak', description: 'Maintain training consistency for 7 consecutive days.', icon: '🔥', unlocked: false },
  { id: 'sharpshooter', title: 'Sharpshooter', description: 'Achieve 90%+ accuracy in any 20+ question session.', icon: '🎯', unlocked: false },
  { id: 'knowledge_machine', title: 'Knowledge Machine', description: 'Attempt over 100 questions.', icon: '🧠', unlocked: false },
  { id: 'air_ace', title: 'Air Ace', description: 'Score above 180 in a full AFCAT mock test.', icon: '🎖️', unlocked: false },
  { id: 'topic_master', title: 'Topic Master', description: 'Master all topics in any subject chapter.', icon: '📚', unlocked: false },
  { id: 'boss_slayer', title: 'Sky Commander', description: 'Defeat a Boss Battle in the Training Arena.', icon: '⚔️', unlocked: false },
  { id: 'revision_warrior', title: 'Spaced Memory Pro', description: 'Review 50 flashcards using spaced repetition.', icon: '🃏', unlocked: false }
];

export function getInitialState(): UserProgressState {
  const today = new Date().toISOString().split('T')[0];
  return {
    xp: 0,
    streak: 1,
    lastActiveDate: today,
    level: 'Recruit',
    completedTopics: [],
    topicMastery: {},
    answeredQuestions: {},
    mistakes: {},
    flashcardProgress: {},
    notes: [
      {
        id: 'welcome_note',
        title: 'AFCAT Exam Pattern & Strategy',
        content: 'AFCAT consists of 100 questions (300 marks) in 2 hours. Marking: +3 for correct, -1 for wrong. Sections: English (30Q), General Awareness (25Q), Numerical Ability (20Q), Reasoning & Military Aptitude (25Q). Aim for 180+ marks for safe cutoff across Flying, Ground Duty Tech & Non-Tech branches.',
        tags: ['Strategy', 'Exam Pattern'],
        createdAt: new Date().toISOString()
      }
    ],
    bookmarks: [],
    mockHistory: [],
    gameScores: {},
    studyPlan: {
      examDate: '2026-08-25',
      dailyTargetHours: 2.5,
      targetScore: 210,
      selectedSubjects: ['english', 'numerical', 'reasoning', 'general_awareness']
    },
    settings: {
      theme: 'dark',
      soundEnabled: true,
      reducedMotion: false,
      dailyGoalQuestions: 25,
      hudEnabled: true,
      hudIntensity: 'subtle',
      focusDensity: 'comfortable'
    },
    achievements: INITIAL_ACHIEVEMENTS
  };
}

export function loadState(): UserProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialState();
    const parsed = JSON.parse(raw) as UserProgressState;
    
    // Check streak
    const today = new Date().toISOString().split('T')[0];
    if (parsed.lastActiveDate !== today) {
      const lastDate = new Date(parsed.lastActiveDate);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        parsed.streak += 1;
      } else if (diffDays > 1) {
        parsed.streak = 1;
      }
      parsed.lastActiveDate = today;
    }
    
    // sync sound
    sound.enabled = parsed.settings?.soundEnabled ?? true;
    return { ...getInitialState(), ...parsed };
  } catch (err) {
    console.error('Failed to load state from localStorage:', err);
    return getInitialState();
  }
}

export function saveState(state: UserProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
  }
}

export function calculateLevel(xp: number): UserLevel {
  if (xp >= 5000) return 'Master';
  if (xp >= 3000) return 'Elite';
  if (xp >= 1500) return 'Ace';
  if (xp >= 700) return 'Air Warrior';
  if (xp >= 250) return 'Cadet';
  return 'Recruit';
}

export function addXP(state: UserProgressState, amount: number): { state: UserProgressState; leveledUp: boolean; newLevel?: UserLevel } {
  const prevLevel = state.level;
  const newXP = state.xp + amount;
  const newLevel = calculateLevel(newXP);
  const leveledUp = newLevel !== prevLevel;

  const updatedState: UserProgressState = {
    ...state,
    xp: newXP,
    level: newLevel
  };

  saveState(updatedState);
  return { state: updatedState, leveledUp, newLevel: leveledUp ? newLevel : undefined };
}

export function recordQuestionAnswer(
  state: UserProgressState,
  question: Question,
  userAnswer: number
): UserProgressState {
  const isCorrect = userAnswer === question.correctAnswer;
  const now = new Date().toISOString();

  const answeredQuestions = {
    ...state.answeredQuestions,
    [question.id]: { correct: isCorrect, timestamp: now }
  };

  const mistakes = { ...state.mistakes };
  if (!isCorrect) {
    const existing = mistakes[question.id];
    mistakes[question.id] = {
      questionId: question.id,
      question,
      userAnswer,
      failCount: (existing?.failCount || 0) + 1,
      lastAttempted: now
    };
  } else if (mistakes[question.id]) {
    // If successfully answered, lower or clear mistake
    if (mistakes[question.id].failCount > 1) {
      mistakes[question.id].failCount -= 1;
    } else {
      delete mistakes[question.id];
    }
  }

  const xpEarned = isCorrect ? 5 : 1;
  const { state: newState } = addXP({
    ...state,
    answeredQuestions,
    mistakes
  }, xpEarned);

  return newState;
}

export function exportStateAsJSON(state: UserProgressState): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `afcat_master_progress_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
