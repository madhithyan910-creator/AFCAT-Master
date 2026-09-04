import React, { useState } from 'react';
import { TopicLesson, SubjectId, Question } from '../types';
import { ENGLISH_LESSONS } from '../data/englishData';
import { MATH_REASONING_LESSONS, FORMULA_VAULT } from '../data/mathAndReasoningData';
import { GENERAL_AWARENESS_LESSONS } from '../data/generalAwarenessData';
import { getAllLessonQuestionsByTier } from '../data/learnTierQuestions';
import { ReadingProgressBar } from './ReadingProgressBar';
import { sound } from '../utils/audio';
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  ChevronRight, 
  ArrowLeft, 
  Sparkles,
  Bookmark,
  Layers,
  Award,
  HelpCircle,
  Calculator,
  Compass,
  FileCheck2,
  Filter,
  Check,
  Zap
} from 'lucide-react';

interface LearnViewProps {
  onRecordAnswer: (questionId: string, isCorrect: boolean) => void;
  onAddXP: (amount: number) => void;
  onNavigateToDiagrams?: () => void;
}

type LearningTier = 'beginner' | 'intermediate' | 'advance';

export const LearnView: React.FC<LearnViewProps> = ({ 
  onRecordAnswer, 
  onAddXP,
  onNavigateToDiagrams 
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('english');
  const [activeLesson, setActiveLesson] = useState<TopicLesson | null>(null);
  const [selectedTier, setSelectedTier] = useState<LearningTier>('beginner');
  const [practiceFilter, setPracticeFilter] = useState<'selected' | 'beginner' | 'intermediate' | 'advance' | 'all'>('selected');
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'study' | 'formulas' | 'traps' | 'practice'>('study');

  // Combine lessons across all subjects
  const allLessons: TopicLesson[] = [
    ...ENGLISH_LESSONS,
    ...MATH_REASONING_LESSONS,
    ...GENERAL_AWARENESS_LESSONS
  ];

  const filteredLessons = allLessons.filter(l => l.subject === selectedSubject);

  const handleSelectLesson = (lesson: TopicLesson) => {
    sound.playClick();
    setActiveLesson(lesson);
    setUserAnswers({});
    setActiveTab('study');
    setPracticeFilter('selected');
  };

  const handleAnswerCheck = (qId: string, optionIdx: number, correctIdx: number, difficulty: string = 'medium') => {
    if (userAnswers[qId] !== undefined) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    const isCorrect = optionIdx === correctIdx;
    if (isCorrect) {
      sound.playCorrect();
      const xpAmount = difficulty === 'hard' ? 25 : difficulty === 'medium' ? 15 : 10;
      onAddXP(xpAmount);
    } else {
      sound.playWrong();
    }
    onRecordAnswer(qId, isCorrect);
  };

  const markLessonComplete = (lessonId: string) => {
    sound.playLevelUp();
    setCompletedLessons(prev => ({ ...prev, [lessonId]: true }));
    onAddXP(30);
  };

  const subjects = [
    { id: 'english' as SubjectId, label: 'Verbal Ability (English)', icon: '📖', count: `${ENGLISH_LESSONS.length} Core Modules` },
    { id: 'numerical' as SubjectId, label: 'Numerical Ability', icon: '➗', count: `${FORMULA_VAULT.length} Formulas + Modules` },
    { id: 'reasoning' as SubjectId, label: 'Reasoning & Military Aptitude', icon: '🧩', count: `${MATH_REASONING_LESSONS.length} Logic Modules` },
    { id: 'general_awareness' as SubjectId, label: 'General Awareness & Defence', icon: '🎖️', count: `${GENERAL_AWARENESS_LESSONS.length} GK Modules` },
  ];

  // If viewing an active lesson
  if (activeLesson) {
    const isDone = completedLessons[activeLesson.id];

    // Retrieve separate pools for Beginner, Intermediate, and Advance
    const tieredPool = getAllLessonQuestionsByTier(activeLesson.id, activeLesson.quickCheckQuestions);
    const totalLessonQuestions = tieredPool.beginner.length + tieredPool.intermediate.length + tieredPool.advance.length;
    
    // Count answered questions in this lesson
    const answeredCount = Object.keys(userAnswers).filter(id => 
      tieredPool.beginner.some(q => q.id === id) ||
      tieredPool.intermediate.some(q => q.id === id) ||
      tieredPool.advance.some(q => q.id === id)
    ).length;
    const progressPercent = totalLessonQuestions > 0 ? (answeredCount / totalLessonQuestions) * 100 : (isDone ? 100 : 0);

    return (
      <div className="space-y-6 pb-16 animate-fade-in max-w-5xl mx-auto text-white">
        {/* Top Header & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <button
            onClick={() => {
              sound.playClick();
              setActiveLesson(null);
            }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-semibold backdrop-blur-md transition-all self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Syllabus</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              {activeLesson.chapter}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-white/60 px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>{activeLesson.estimatedMinutes} min read</span>
            </div>
            {onNavigateToDiagrams && activeLesson.diagramType && (
              <button
                onClick={() => {
                  sound.playClick();
                  onNavigateToDiagrams();
                }}
                className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 hover:bg-indigo-500/30 transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>View Diagram</span>
              </button>
            )}
          </div>
        </div>

        {/* Lesson Title & Completion Status */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-sky-400 tracking-wider">
                AFCAT HIGH-YIELD ECOSYSTEM
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-['Rajdhani'] tracking-tight text-white mt-0.5">
                {activeLesson.title}
              </h1>
            </div>

            <button
              onClick={() => markLessonComplete(activeLesson.id)}
              disabled={isDone}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                isDone
                  ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 cursor-default'
                  : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/20 active:scale-95'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>{isDone ? 'Lesson Mastered (+30 XP)' : 'Mark Topic Mastered'}</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            {activeLesson.introduction}
          </p>

          {/* 3-TIER LEARNING LEVEL SWITCHER (Beginner / Intermediate / Advance) */}
          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold font-mono text-white/50 uppercase">
                Learning Depth Tier:
              </span>
              <span className="text-xs text-sky-300 font-mono">
                {selectedTier === 'beginner' && '🌱 Tier 1: Core Fundamentals & Definitions'}
                {selectedTier === 'intermediate' && '⚡ Tier 2: Standard AFCAT Patterns & Shortcuts'}
                {selectedTier === 'advance' && '🔥 Tier 3: Speed Mastery, Traps & Hard PYQs'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['beginner', 'intermediate', 'advance'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => {
                    sound.playClick();
                    setSelectedTier(tier);
                    setPracticeFilter(tier);
                  }}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold uppercase font-mono transition-all flex items-center justify-center gap-2 ${
                    selectedTier === tier
                      ? tier === 'beginner'
                        ? 'bg-emerald-500 text-white border-emerald-400 shadow-md shadow-emerald-500/20'
                        : tier === 'intermediate'
                        ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                        : 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-500/20'
                      : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{tier}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tactical Reading & Lesson Progress Bar */}
        <ReadingProgressBar
          currentSection={
            activeTab === 'study' ? 'Concept Notes' :
            activeTab === 'formulas' ? 'Rules & Cheat Sheet' :
            activeTab === 'traps' ? 'Mistakes & Traps' :
            `Practice (${practiceFilter === 'all' ? 'All Tiers' : practiceFilter.toUpperCase()})`
          }
          totalSections={4}
          currentSectionIndex={
            activeTab === 'study' ? 0 :
            activeTab === 'formulas' ? 1 :
            activeTab === 'traps' ? 2 : 3
          }
          percent={progressPercent}
          onSectionClick={(idx) => {
            sound.playClick();
            if (idx === 0) setActiveTab('study');
            else if (idx === 1) setActiveTab('formulas');
            else if (idx === 2) setActiveTab('traps');
            else setActiveTab('practice');
          }}
        />

        {/* Secondary Sub-Tabs: Concept Study, Formula Sheet, Traps & Mistakes, Practice */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('study');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'study'
                ? 'bg-white/15 text-white font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            📚 Detailed Concept Notes
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('formulas');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'formulas'
                ? 'bg-white/15 text-white font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            ⚡ Rules & Cheat Sheet
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('traps');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'traps'
                ? 'bg-white/15 text-white font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            ⚠️ Common Mistakes & Traps
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('practice');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'practice'
                ? 'bg-white/15 text-white font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            ✍️ Tier Practice Sorties ({totalLessonQuestions} Qs)
          </button>
        </div>

        {/* SUB-TAB 1: CONCEPT STUDY */}
        {activeTab === 'study' && (
          <div className="space-y-6">
            {/* Level guidance banner */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-white/80">
                  Currently Viewing: <span className="font-bold text-white uppercase">{selectedTier} Level</span> Notes
                </span>
              </div>
              <span className="text-white/40 font-mono">Curriculum Aligned</span>
            </div>

            {/* Core Concepts Accordion List */}
            <div className="space-y-3">
              {activeLesson.concepts.map((concept, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-1">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      {concept}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Worked Examples */}
            {activeLesson.workedExamples && activeLesson.workedExamples.length > 0 && (
              <div className="space-y-3 pt-4">
                <h3 className="text-sm font-bold font-mono text-sky-300 uppercase tracking-wider">
                  SOLVED STEP-BY-STEP EXAMPLES (AFCAT PYQ PATTERN)
                </h3>
                <div className="space-y-3">
                  {activeLesson.workedExamples.map((ex, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#0d162b] border border-sky-500/20 space-y-2">
                      <div className="text-xs font-semibold text-white">
                        <span className="text-amber-400 font-mono mr-2">Problem {idx + 1}:</span>
                        {ex.problem}
                      </div>
                      <div className="p-3 rounded-lg bg-black/30 text-xs text-white/80 border border-white/5 font-mono">
                        <span className="text-emerald-400 font-bold block mb-1">✓ Solution:</span>
                        {ex.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUB-TAB 2: RULES & FORMULAS */}
        {activeTab === 'formulas' && (
          <div className="space-y-4">
            {activeLesson.rulesOrFormulas && activeLesson.rulesOrFormulas.length > 0 ? (
              activeLesson.rulesOrFormulas.map((rule, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-sky-300">{rule.title}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">Formula</span>
                  </div>
                  <p className="text-xs text-white/70">{rule.desc}</p>
                  {rule.formula && (
                    <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-amber-300">
                      {rule.formula}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center text-xs text-white/50">
                This topic relies primarily on verbal syntax and analytical comprehension rules rather than algebraic formulas.
              </div>
            )}
          </div>
        )}

        {/* SUB-TAB 3: COMMON MISTAKES & TRAPS */}
        {activeTab === 'traps' && (
          <div className="space-y-4">
            {activeLesson.commonMistakes && activeLesson.commonMistakes.length > 0 ? (
              activeLesson.commonMistakes.map((cm, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-300">
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    <span>EXAMINER TRAP #{idx + 1}</span>
                  </div>
                  <div className="text-xs text-white/80">
                    <span className="text-rose-400 font-semibold">Common Error: </span>
                    {cm.mistake}
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200">
                    <span className="font-bold">Correct Approach: </span>
                    {cm.correction}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center text-xs text-white/50">
                No specific recurring traps recorded for this conceptual module.
              </div>
            )}
          </div>
        )}

        {/* SUB-TAB 4: SEPARATE QUESTION SECTIONS BY DIFFICULTY TIER */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            {/* Tier Section Selector Filter Bar */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
                    SEPARATE DIFFICULTY SECTIONS
                  </h3>
                  <p className="text-[11px] text-white/60">
                    Questions are organized into distinct difficulty banks from authentic AFCAT past papers and syllabus drills.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-white/50">
                  Total Questions: <span className="font-bold text-sky-300">{totalLessonQuestions}</span>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  onClick={() => {
                    sound.playClick();
                    setPracticeFilter('beginner');
                    setSelectedTier('beginner');
                  }}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    practiceFilter === 'beginner' || (practiceFilter === 'selected' && selectedTier === 'beginner')
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-md shadow-emerald-500/10'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>🌱 Beginner Drills</span>
                  <span className="px-1.5 py-0.2 rounded bg-white/10 text-[10px]">
                    {tieredPool.beginner.length}
                  </span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setPracticeFilter('intermediate');
                    setSelectedTier('intermediate');
                  }}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    practiceFilter === 'intermediate' || (practiceFilter === 'selected' && selectedTier === 'intermediate')
                      ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-md shadow-sky-500/10'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>⚡ Intermediate AFCAT PYQs</span>
                  <span className="px-1.5 py-0.2 rounded bg-white/10 text-[10px]">
                    {tieredPool.intermediate.length}
                  </span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setPracticeFilter('advance');
                    setSelectedTier('advance');
                  }}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    practiceFilter === 'advance' || (practiceFilter === 'selected' && selectedTier === 'advance')
                      ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-md shadow-purple-500/10'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>🔥 Advance Combat Traps</span>
                  <span className="px-1.5 py-0.2 rounded bg-white/10 text-[10px]">
                    {tieredPool.advance.length}
                  </span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setPracticeFilter('all');
                  }}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    practiceFilter === 'all'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md shadow-amber-500/10'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>📑 View All 3 Sections</span>
                  <span className="px-1.5 py-0.2 rounded bg-white/10 text-[10px]">
                    {totalLessonQuestions}
                  </span>
                </button>
              </div>
            </div>

            {/* SECTIONS RENDERER */}
            {(() => {
              const sectionsToDisplay: Array<{
                tier: 'beginner' | 'intermediate' | 'advance';
                title: string;
                badge: string;
                icon: string;
                description: string;
                xpPerQ: number;
                colorClass: {
                  border: string;
                  badge: string;
                  text: string;
                  bg: string;
                };
                questions: Question[];
              }> = [];

              if (practiceFilter === 'beginner' || (practiceFilter === 'selected' && selectedTier === 'beginner') || practiceFilter === 'all') {
                sectionsToDisplay.push({
                  tier: 'beginner',
                  title: 'SECTION 1: BEGINNER FOUNDATION DRILLS',
                  badge: 'TIER 1 • FOUNDATION',
                  icon: '🌱',
                  description: 'Core definitions, direct single-step questions, formula recall & basic rules from the AFCAT syllabus (+10 XP per question).',
                  xpPerQ: 10,
                  colorClass: {
                    border: 'border-emerald-500/30',
                    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
                    text: 'text-emerald-400',
                    bg: 'bg-emerald-950/20'
                  },
                  questions: tieredPool.beginner
                });
              }

              if (practiceFilter === 'intermediate' || (practiceFilter === 'selected' && selectedTier === 'intermediate') || practiceFilter === 'all') {
                sectionsToDisplay.push({
                  tier: 'intermediate',
                  title: 'SECTION 2: INTERMEDIATE AFCAT PAST EXAM PATTERNS',
                  badge: 'TIER 2 • STANDARD PYQS',
                  icon: '⚡',
                  description: 'Authentic AFCAT past question formats, 2-step calculations, sentence corrections & syllabus PYQs (+15 XP per question).',
                  xpPerQ: 15,
                  colorClass: {
                    border: 'border-sky-500/30',
                    badge: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
                    text: 'text-sky-400',
                    bg: 'bg-sky-950/20'
                  },
                  questions: tieredPool.intermediate
                });
              }

              if (practiceFilter === 'advance' || (practiceFilter === 'selected' && selectedTier === 'advance') || practiceFilter === 'all') {
                sectionsToDisplay.push({
                  tier: 'advance',
                  title: 'SECTION 3: ADVANCE EXAMINER TRAPS & COMBAT MASTERY',
                  badge: 'TIER 3 • ADVANCE TRAPS',
                  icon: '🔥',
                  description: 'High-order reasoning, speed traps, multi-statement deductions & high-yield AFCAT examiner tricks (+25 XP per question).',
                  xpPerQ: 25,
                  colorClass: {
                    border: 'border-purple-500/30',
                    badge: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
                    text: 'text-purple-400',
                    bg: 'bg-purple-950/20'
                  },
                  questions: tieredPool.advance
                });
              }

              return sectionsToDisplay.map((section) => {
                const sectionAnsweredCount = section.questions.filter(q => userAnswers[q.id] !== undefined).length;
                const sectionCorrectCount = section.questions.filter(q => userAnswers[q.id] === q.correctAnswer).length;

                return (
                  <div 
                    key={section.tier} 
                    className={`p-5 sm:p-6 rounded-2xl border ${section.colorClass.border} ${section.colorClass.bg} backdrop-blur-xl space-y-4 shadow-xl`}
                  >
                    {/* Section Header Card */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${section.colorClass.badge}`}>
                            {section.badge}
                          </span>
                          <span className="text-xs font-mono text-white/50">
                            +{section.xpPerQ} XP / correct
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white font-['Rajdhani'] flex items-center gap-2">
                          <span>{section.icon}</span>
                          <span>{section.title}</span>
                        </h4>
                        <p className="text-xs text-white/70 max-w-2xl leading-relaxed">
                          {section.description}
                        </p>
                      </div>

                      {/* Section Progress Counter */}
                      <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
                        <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-center">
                          <span className="text-[10px] text-white/40 block">COMPLETED</span>
                          <span className={`font-bold ${section.colorClass.text}`}>
                            {sectionAnsweredCount} / {section.questions.length}
                          </span>
                        </div>
                        {sectionAnsweredCount > 0 && (
                          <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-center">
                            <span className="text-[10px] text-white/40 block">ACCURACY</span>
                            <span className="font-bold text-emerald-400">
                              {Math.round((sectionCorrectCount / sectionAnsweredCount) * 100)}%
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Questions in this Section */}
                    <div className="space-y-4">
                      {section.questions.map((q, qIdx) => {
                        const selectedOpt = userAnswers[q.id];
                        const isAnswered = selectedOpt !== undefined;

                        return (
                          <div 
                            key={q.id} 
                            className="p-4 sm:p-5 rounded-xl bg-slate-950/40 border border-white/10 space-y-3 hover:border-white/20 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-white/70">
                                {section.tier.toUpperCase()} DRILL #{qIdx + 1} • {q.difficulty}
                              </span>
                              {isAnswered && (
                                <span className={`text-xs font-bold font-mono ${selectedOpt === q.correctAnswer ? 'text-emerald-400' : 'text-rose-400'}`}>
                                  {selectedOpt === q.correctAnswer ? `✓ Correct (+${section.xpPerQ} XP)` : '✗ Incorrect'}
                                </span>
                              )}
                            </div>

                            <div className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                              {q.question}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {q.options.map((opt, optIdx) => {
                                let btnStyle = 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10';
                                if (isAnswered) {
                                  if (optIdx === q.correctAnswer) {
                                    btnStyle = 'bg-emerald-500/30 border-emerald-400 text-white font-bold';
                                  } else if (selectedOpt === optIdx) {
                                    btnStyle = 'bg-rose-500/30 border-rose-400 text-white';
                                  } else {
                                    btnStyle = 'opacity-35 border-white/5 text-white/50';
                                  }
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => handleAnswerCheck(q.id, optIdx, q.correctAnswer, q.difficulty)}
                                    disabled={isAnswered}
                                    className={`p-3 rounded-xl border text-xs text-left transition-all ${btnStyle}`}
                                  >
                                    <span className="font-mono mr-2 text-white/40 font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>

                            {isAnswered && (
                              <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/40 text-xs text-sky-200 animate-fade-in space-y-1">
                                <div className="font-bold flex items-center gap-1.5 text-sky-300">
                                  <span>💡 AFCAT Pedagogical Explanation:</span>
                                </div>
                                <div className="leading-relaxed text-sky-100/90">
                                  {q.explanation}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        )}
      </div>
    );
  }

  // SYLLABUS LIST VIEW
  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16 animate-fade-in text-white">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>AFCAT COMPLETE SYLLABUS ECOSYSTEM</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Rajdhani'] tracking-tight">
              LEARN ECOSYSTEM & MASTERY TIERS
            </h1>
            <p className="text-xs sm:text-sm text-white/60">
              Structured modules for Beginner, Intermediate, and Advance tiers with integrated formula sheets, worked examples, and rapid check quizzes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-mono">
              <span className="text-[10px] text-white/40 block">COMPLETED</span>
              <span className="text-base font-bold text-emerald-400">
                {Object.keys(completedLessons).length} / {allLessons.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Filter Pills */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {subjects.map((sub) => {
          const isSelected = selectedSubject === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => {
                sound.playClick();
                setSelectedSubject(sub.id);
              }}
              className={`p-4 rounded-2xl border transition-all text-left space-y-1.5 ${
                isSelected
                  ? 'bg-sky-500/20 border-sky-400/60 shadow-lg shadow-sky-500/10'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <div className="text-xl">{sub.icon}</div>
              <h3 className="text-xs font-bold text-white leading-snug">{sub.label}</h3>
              <p className="text-[10px] text-white/50 font-mono">{sub.count}</p>
            </button>
          );
        })}
      </div>

      {/* Module Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLessons.map((lesson) => {
          const isDone = completedLessons[lesson.id];
          return (
            <div
              key={lesson.id}
              onClick={() => handleSelectLesson(lesson)}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-sky-400 px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    {lesson.chapter}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/50">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>{lesson.estimatedMinutes} min</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors font-['Rajdhani']">
                  {lesson.title}
                </h3>

                <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                  {lesson.introduction}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono">
                    Beginner
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 font-mono">
                    Intermediate
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 font-mono">
                    Advance
                  </span>
                </div>

                <div className="flex items-center gap-1 text-sky-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>{isDone ? 'Review' : 'Start'}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
