export type SubjectId = 'english' | 'numerical' | 'reasoning' | 'general_awareness';

export type SectionType = 
  | 'command_center'
  | 'learn'
  | 'practice'
  | 'mock_tests'
  | 'revision'
  | 'arena'
  | 'defence_hub'
  | 'afsb_master'
  | 'current_affairs'
  | 'diagrams'
  | 'fleet_gallery'
  | 'planner'
  | 'analytics'
  | 'settings';

export type UserLevel = 'Recruit' | 'Cadet' | 'Air Warrior' | 'Ace' | 'Elite' | 'Master';

export interface Question {
  id: string;
  subject: SubjectId;
  chapter: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  tags?: string[];
  passage?: string;
}

export interface Flashcard {
  id: string;
  subject: SubjectId;
  category: string;
  front: string;
  back: string;
  details?: string;
  interval?: number;
  repetition?: number;
  easeFactor?: number;
  dueDate?: string; // ISO date string
}

export interface FormulaItem {
  id: string;
  category: string;
  name: string;
  formula: string;
  meaning: string;
  example: string;
  shortcut: string;
  trap: string;
}

export interface TopicLesson {
  id: string;
  subject: SubjectId;
  chapter: string;
  title: string;
  estimatedMinutes: number;
  introduction: string;
  concepts: string[];
  rulesOrFormulas?: { title: string; desc: string; formula?: string }[];
  workedExamples: { problem: string; solution: string }[];
  commonMistakes: { mistake: string; correction: string; why?: string }[];
  quickCheckQuestions: Question[];
  beginnerQuestions?: Question[];
  intermediateQuestions?: Question[];
  advanceQuestions?: Question[];
  diagramType?: 'angle_bisector' | 'parallel_lines' | 'circle_chords' | 'venn' | 'blood_tree' | 'solar_system' | 'clouds' | 'earth_layers' | 'polity_hierarchy' | 'iaf_ranks';
  levelDetails?: {
    beginner: { summary: string; points: string[] };
    intermediate: { summary: string; points: string[] };
    advance: { summary: string; points: string[] };
  };
}

export interface MockTestResult {
  id: string;
  testId: string;
  title: string;
  date: string;
  totalScore: number; // +3 correct, -1 wrong
  maxScore: number;
  timeSpentSeconds: number;
  attempted: number;
  correct: number;
  wrong: number;
  skipped: number;
  accuracy: number;
  sectionBreakdown: Record<SubjectId, { correct: number; wrong: number; score: number }>;
}

export interface UserMistake {
  questionId: string;
  question: Question;
  userAnswer: number;
  failCount: number;
  lastAttempted: string;
}

export interface NoteItem {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  subject?: SubjectId;
}

export interface BookmarkItem {
  id: string;
  type: 'question' | 'topic' | 'formula' | 'flashcard' | 'defence';
  referenceId: string;
  title: string;
  preview: string;
  savedAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface UserProgressState {
  xp: number;
  streak: number;
  lastActiveDate: string;
  level: UserLevel;
  completedTopics: string[]; // Topic IDs
  topicMastery: Record<string, 'not_started' | 'learning' | 'practicing' | 'strong' | 'mastered'>;
  answeredQuestions: Record<string, { correct: boolean; timestamp: string }>;
  mistakes: Record<string, UserMistake>;
  flashcardProgress: Record<string, { interval: number; repetition: number; dueDate: string; box: number }>;
  notes: NoteItem[];
  bookmarks: BookmarkItem[];
  mockHistory: MockTestResult[];
  gameScores: Record<string, { highScore: number; timesPlayed: number }>;
  studyPlan: {
    examDate: string;
    dailyTargetHours: number;
    targetScore: number;
    selectedSubjects: SubjectId[];
  };
  settings: {
    theme: 'dark' | 'light' | 'system';
    soundEnabled: boolean;
    reducedMotion: boolean;
    dailyGoalQuestions: number;
    hudEnabled?: boolean;
    hudIntensity?: 'subtle' | 'standard' | 'high';
    focusDensity?: 'comfortable' | 'compact' | 'focus';
  };
  achievements: Achievement[];
}

export type MilestoneMedal = 'cadet' | 'bronze' | 'silver' | 'gold' | 'master';

export interface ConfidenceMetric {
  score: number; // 0-100
  level: 'low' | 'moderate' | 'high' | 'combat_ready';
  label: string;
  factors: {
    accuracy: number;
    recencyDays: number;
    difficultyWeight: number;
    mistakePenalty: number;
  };
}

export interface TrainingTimelineEvent {
  id: string;
  date: string;
  displayDate: string;
  title: string;
  description: string;
  badge?: string;
  iconType: 'plane' | 'target' | 'award' | 'flame' | 'shield' | 'check';
  highlight?: boolean;
}
