import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Question, SubjectId } from '../types';
import { MODEL_PAPER_QUESTIONS } from '../data/modelPapers';
import { CURRENT_AFFAIRS_2026 } from '../data/currentAffairs2026';
import { MASSIVE_QUESTION_BANK } from '../data/massiveQuestionBank';
import { sound } from '../utils/audio';
import { PerfectAnswerPopup } from './PerfectAnswerPopup';
import { getSubjectTheme, calculateTopicConfidence } from '../utils/themeAndMission';
import { 
  Brain, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  RotateCw, 
  Bookmark, 
  HelpCircle,
  Zap,
  Filter,
  Flame,
  Award,
  Layers,
  Sparkles,
  Shuffle,
  ShieldCheck,
  Compass
} from 'lucide-react';

interface PracticeViewProps {
  onRecordAnswer: (question: Question, answerIdx: number) => void;
  onAddXP: (amount: number) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({ onRecordAnswer, onAddXP }) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>('all');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sessionStreak, setSessionStreak] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});
  
  // Non-repeating tracking
  const [seenIds, setSeenIds] = useState<Set<string>>(new Set());

  // Merge all available non-repeating questions across datasets
  const allQuestions: Question[] = useMemo(() => {
    // Deduplicate by ID
    const map = new Map<string, Question>();
    MASSIVE_QUESTION_BANK.forEach(q => map.set(q.id, q));
    MODEL_PAPER_QUESTIONS.forEach(q => map.set(q.id, q));
    CURRENT_AFFAIRS_2026.forEach(q => map.set(q.id, q));
    return Array.from(map.values());
  }, []);

  // Extract unique chapters for selected subject
  const availableChapters = useMemo(() => {
    const pool = selectedSubject === 'all' 
      ? allQuestions 
      : allQuestions.filter(q => q.subject === selectedSubject);
    const set = new Set<string>();
    pool.forEach(q => {
      if (q.chapter) set.add(q.chapter);
    });
    return Array.from(set).sort();
  }, [allQuestions, selectedSubject]);

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      const matchSubject = selectedSubject === 'all' || q.subject === selectedSubject;
      const matchChapter = selectedChapter === 'all' || q.chapter === selectedChapter;
      const matchDiff = difficulty === 'all' || q.difficulty === difficulty;
      return matchSubject && matchChapter && matchDiff;
    });
  }, [allQuestions, selectedSubject, selectedChapter, difficulty]);

  // Shuffled non-repeating active queue
  const [queue, setQueue] = useState<Question[]>([]);

  // When filters change, rebuild queue
  useEffect(() => {
    // Fisher-Yates shuffle
    const shuffled = [...filteredQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setQueue(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
  }, [filteredQuestions]);

  const currentQ = queue[currentIndex] || queue[0];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null || !currentQ) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    setSessionTotal(prev => prev + 1);

    // Mark as seen
    setSeenIds(prev => new Set(prev).add(currentQ.id));

    const isCorrect = idx === currentQ.correctAnswer;
    if (isCorrect) {
      sound.playCorrect();
      setSessionCorrect(prev => prev + 1);
      setSessionStreak(prev => prev + 1);
      onAddXP(10);
    } else {
      sound.playWrong();
      setSessionStreak(0);
    }

    onRecordAnswer(currentQ, idx);
  };

  const handleNextQuestion = () => {
    sound.playClick();
    setSelectedOption(null);
    setShowExplanation(false);
    if (currentIndex < queue.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Loop with reshuffle
      const reshuffled = [...queue].sort(() => Math.random() - 0.5);
      setQueue(reshuffled);
      setCurrentIndex(0);
    }
  };

  const handleReshuffle = () => {
    sound.playClick();
    const reshuffled = [...queue].sort(() => Math.random() - 0.5);
    setQueue(reshuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const toggleBookmark = (id: string) => {
    sound.playClick();
    setBookmarkedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const subjects = [
    { id: 'all', label: 'All Subjects' },
    { id: 'english' as SubjectId, label: 'English Comprehension' },
    { id: 'numerical' as SubjectId, label: 'Numerical Ability' },
    { id: 'reasoning' as SubjectId, label: 'Reasoning & Military Aptitude' },
    { id: 'general_awareness' as SubjectId, label: 'General Awareness & Defence' },
  ];

  return (
    <div className="space-y-6 pb-16 animate-fade-in max-w-4xl mx-auto text-white">
      {/* Top Banner & Stats */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
              <Brain className="w-3.5 h-3.5" />
              <span>NON-REPEATING QUESTION VAULT</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Rajdhani'] tracking-tight">
              ADAPTIVE DRILL & MCQ PRACTICE
            </h1>
            <p className="text-xs sm:text-sm text-white/60">
              {allQuestions.length}+ curated authentic questions across syllabus chapters with zero-duplicate algorithm.
            </p>
          </div>

          {/* Session Performance Counters */}
          <div className="flex items-center gap-3 font-mono text-center">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-white/40 block">ACCURACY</span>
              <span className="text-base font-bold text-emerald-400">
                {sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0}%
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-white/40 block">STREAK</span>
              <span className="text-base font-bold text-amber-300 flex items-center justify-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>{sessionStreak}x</span>
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] text-white/40 block">SEEN / TOTAL</span>
              <span className="text-base font-bold text-sky-300">
                {seenIds.size} / {filteredQuestions.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls: Subject & Difficulty */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
        {/* Subject Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {subjects.map(s => {
            const isActive = selectedSubject === s.id;
            return (
              <button
                key={s.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedSubject(s.id as any);
                  setSelectedChapter('all');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  isActive
                    ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                    : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Difficulty Tiers (Easy/Beginner, Medium/Intermediate, Hard/Advance) */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
          {(['all', 'easy', 'medium', 'hard'] as const).map(d => (
            <button
              key={d}
              onClick={() => {
                sound.playClick();
                setDifficulty(d);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold uppercase font-mono transition-all ${
                difficulty === d
                  ? 'bg-white/20 text-white font-bold'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {d === 'easy' ? 'Beginner' : d === 'medium' ? 'Intermediate' : d === 'hard' ? 'Advance' : 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Chapter Selection Bar (if available) */}
      {availableChapters.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
          <span className="text-white/40 font-mono text-[11px] whitespace-nowrap">Chapter:</span>
          <button
            onClick={() => {
              sound.playClick();
              setSelectedChapter('all');
            }}
            className={`px-3 py-1 rounded-lg border whitespace-nowrap transition-all ${
              selectedChapter === 'all'
                ? 'bg-white/20 border-white/30 text-white font-bold'
                : 'bg-white/5 border-white/10 text-white/50 hover:text-white'
            }`}
          >
            All Chapters ({filteredQuestions.length})
          </button>
          {availableChapters.map(chap => (
            <button
              key={chap}
              onClick={() => {
                sound.playClick();
                setSelectedChapter(chap);
              }}
              className={`px-3 py-1 rounded-lg border whitespace-nowrap transition-all ${
                selectedChapter === chap
                  ? 'bg-sky-500/30 border-sky-400 text-sky-200 font-bold'
                  : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
              }`}
            >
              {chap}
            </button>
          ))}
        </div>
      )}

      {/* Main Question Card */}
      {currentQ ? (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-xl space-y-6">
          {/* Question Metadata Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                {currentQ.chapter}
              </span>
              <span className="text-xs text-white/40 font-mono">
                {currentQ.topic}
              </span>
              <span className={`text-[10px] uppercase font-bold font-mono px-2 py-0.5 rounded ${
                currentQ.difficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-300' :
                currentQ.difficulty === 'medium' ? 'bg-amber-500/20 text-amber-300' :
                'bg-rose-500/20 text-rose-300'
              }`}>
                {currentQ.difficulty}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(currentQ.id)}
                className={`p-2 rounded-xl border transition-all ${
                  bookmarkedIds[currentQ.id]
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                    : 'bg-white/5 border-white/10 text-white/40 hover:text-white'
                }`}
                title="Bookmark for Revision"
              >
                <Bookmark className="w-4 h-4" />
              </button>

              <button
                onClick={handleReshuffle}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
                title="Shuffle Question Order"
              >
                <Shuffle className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-white/40">
                #{currentIndex + 1} of {queue.length}
              </span>
            </div>
          </div>

          {/* Passage if present */}
          {currentQ.passage && (
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 text-xs sm:text-sm text-white/80 leading-relaxed max-h-48 overflow-y-auto">
              <span className="text-sky-300 font-bold block mb-1 font-mono uppercase text-[10px]">
                READING PASSAGE:
              </span>
              {currentQ.passage}
            </div>
          )}

          {/* Question Text */}
          <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
            {currentQ.question}
          </h2>

          {/* Options Grid */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              let optStyle = 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20';

              if (selectedOption !== null) {
                if (idx === currentQ.correctAnswer) {
                  optStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-100 font-semibold shadow-md shadow-emerald-500/10';
                } else if (idx === selectedOption) {
                  optStyle = 'bg-rose-500/20 border-rose-400 text-rose-100 font-semibold';
                } else {
                  optStyle = 'opacity-40 border-white/5 bg-transparent';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={selectedOption !== null}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between group ${optStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-white/60 group-hover:text-white flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {selectedOption !== null && (
                    <div>
                      {idx === currentQ.correctAnswer && (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      )}
                      {idx === selectedOption && idx !== currentQ.correctAnswer && (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {showExplanation && (
            <div className="p-4 rounded-2xl bg-[#0c1938] border border-sky-500/30 text-xs sm:text-sm text-sky-100 space-y-2 animate-fade-in">
              <div className="flex items-center gap-1.5 font-bold font-mono text-sky-300 text-xs uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>OFFICIAL SOLUTION & EXPLANATION</span>
              </div>
              <p className="leading-relaxed text-white/90">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Action Footer: Next Question */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <span className="text-xs text-white/40 font-mono">
              Never repeats questions until pool cycle completes
            </span>

            <button
              onClick={handleNextQuestion}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-sky-500/20 active:scale-95 transition-all"
            >
              <span>Next Question</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-white/5 border border-white/10 text-white/50">
          No questions matched your selected filters. Please adjust subject or difficulty.
        </div>
      )}
    </div>
  );
};
