import React, { useState, useEffect } from 'react';
import { Question, SubjectId, MockTestResult } from '../types';
import { MODEL_PAPER_QUESTIONS } from '../data/modelPapers';
import { CURRENT_AFFAIRS_2026 } from '../data/currentAffairs2026';
import { sound } from '../utils/audio';
import { 
  FlaskConical, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Play, 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  Send,
  RotateCcw,
  Award
} from 'lucide-react';

interface MockTestViewProps {
  onSaveResult: (result: MockTestResult) => void;
  onAddXP: (amount: number) => void;
}

export const MockTestView: React.FC<MockTestViewProps> = ({ onSaveResult, onAddXP }) => {
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 mins for sprint or 7200 for full
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);

  const mockPresets = [
    { id: 'full_afcat_1', title: 'AFCAT Full Mock Exam 2026-I', questionsCount: 50, duration: 3600, badge: 'Full Length', desc: '50 selected high-yield questions simulating full AFCAT format across all 4 subjects.' },
    { id: 'speed_sprint', title: 'Speed Sprint 30 Mini Mock', questionsCount: 30, duration: 1800, badge: 'Speed Assessment', desc: '30 questions timed in 30 minutes to measure real-time accuracy under pressure.' },
    { id: 'english_sectional', title: 'English Comprehension & Vocab Sectional', questionsCount: 25, duration: 1200, badge: 'English Focus', desc: 'Reading comprehension passages, error spotting, idioms, and vocabulary.' },
    { id: 'reasoning_sectional', title: 'Military Aptitude & Reasoning Sectional', questionsCount: 25, duration: 1200, badge: 'Reasoning Focus', desc: 'Analogies, Venn diagrams, pattern completion, and direction reasoning.' },
  ];

  const startTest = (presetId: string) => {
    sound.playClick();
    setActiveTestId(presetId);
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setMarkedForReview({});
    setIsSubmitted(false);

    const preset = mockPresets.find(p => p.id === presetId);
    setTimeLeft(preset?.duration || 1800);

    const pool = [...MODEL_PAPER_QUESTIONS, ...CURRENT_AFFAIRS_2026];
    const count = preset?.questionsCount || 30;
    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, count);
    setTestQuestions(shuffled);
  };

  // Timer loop
  useEffect(() => {
    if (!activeTestId || isSubmitted) return;

    if (timeLeft <= 0) {
      submitTest();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [activeTestId, isSubmitted, timeLeft]);

  const handleSelectOption = (optIdx: number) => {
    sound.playClick();
    setSelectedAnswers(prev => ({ ...prev, [currentQIndex]: optIdx }));
  };

  const toggleReviewMark = () => {
    sound.playClick();
    setMarkedForReview(prev => ({ ...prev, [currentQIndex]: !prev[currentQIndex] }));
  };

  const submitTest = () => {
    sound.playLevelUp();
    setIsSubmitted(true);

    let correct = 0;
    let wrong = 0;
    let score = 0;
    const breakdown: any = {
      english: { correct: 0, wrong: 0, score: 0 },
      numerical: { correct: 0, wrong: 0, score: 0 },
      reasoning: { correct: 0, wrong: 0, score: 0 },
      general_awareness: { correct: 0, wrong: 0, score: 0 }
    };

    testQuestions.forEach((q, idx) => {
      const userChoice = selectedAnswers[idx];
      const sub = q.subject || 'reasoning';
      if (userChoice !== undefined) {
        if (userChoice === q.correctAnswer) {
          correct += 1;
          score += 3; // +3 for correct
          if (breakdown[sub]) {
            breakdown[sub].correct += 1;
            breakdown[sub].score += 3;
          }
        } else {
          wrong += 1;
          score -= 1; // -1 for wrong
          if (breakdown[sub]) {
            breakdown[sub].wrong += 1;
            breakdown[sub].score -= 1;
          }
        }
      }
    });

    const attempted = Object.keys(selectedAnswers).length;
    const maxScore = testQuestions.length * 3;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    const result: MockTestResult = {
      id: `mock_${Date.now()}`,
      testId: activeTestId || 'custom',
      title: mockPresets.find(p => p.id === activeTestId)?.title || 'AFCAT Mock',
      date: new Date().toISOString(),
      totalScore: score,
      maxScore,
      timeSpentSeconds: (mockPresets.find(p => p.id === activeTestId)?.duration || 1800) - timeLeft,
      attempted,
      correct,
      wrong,
      skipped: testQuestions.length - attempted,
      accuracy,
      sectionBreakdown: breakdown
    };

    onSaveResult(result);
    onAddXP(Math.max(10, score * 2));
  };

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (activeTestId && !isSubmitted && testQuestions.length > 0) {
    const currentQ = testQuestions[currentQIndex];
    const userChoice = selectedAnswers[currentQIndex];
    const isMarked = markedForReview[currentQIndex];

    return (
      <div className="space-y-6 pb-12 animate-fade-in">
        {/* Test Header */}
        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm text-white font-['Rajdhani'] tracking-wide">
              {mockPresets.find(p => p.id === activeTestId)?.title}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-sky-300 font-mono">
              +3 / -1 Scheme
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 px-3 py-1 bg-white/5 rounded-xl border border-white/10">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to submit your test sortie now?')) {
                  submitTest();
                }
              }}
              className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SUBMIT</span>
            </button>
          </div>
        </div>

        {/* Question + Question Palette Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Card */}
          <div className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-sky-300 font-semibold uppercase text-[10px] tracking-wider border border-white/15">
                  Q{currentQIndex + 1} • {currentQ.chapter || currentQ.subject}
                </span>

                <button
                  onClick={toggleReviewMark}
                  className={`px-3 py-1 rounded-xl text-xs flex items-center gap-1.5 transition-colors border ${
                    isMarked
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400/30 font-semibold'
                      : 'bg-white/5 text-white/50 border-white/10 hover:text-white'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{isMarked ? 'Marked for Review' : 'Mark for Review'}</span>
                </button>
              </div>

              {currentQ.passage && (
                <div className="p-4 rounded-xl bg-black/20 border border-white/10 text-xs text-white/80 leading-relaxed max-h-48 overflow-y-auto custom-scrollbar">
                  <div className="text-[10px] uppercase font-bold text-sky-400 mb-1 font-mono">Reading Passage:</div>
                  {currentQ.passage}
                </div>
              )}

              <h2 className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                {currentQ.question}
              </h2>

              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = userChoice === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-xl border text-xs sm:text-sm text-left transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'bg-sky-500/20 border-sky-400 text-sky-200 font-semibold shadow-sm backdrop-blur-sm'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/80'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-lg text-xs flex items-center justify-center font-bold border ${
                        isSelected ? 'bg-sky-400 text-slate-950 border-sky-400' : 'bg-white/10 text-white/60 border-white/10'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Previous / Next Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                disabled={currentQIndex === 0}
                onClick={() => {
                  sound.playClick();
                  setCurrentQIndex(prev => Math.max(0, prev - 1));
                }}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                disabled={currentQIndex === testQuestions.length - 1}
                onClick={() => {
                  sound.playClick();
                  setCurrentQIndex(prev => Math.min(testQuestions.length - 1, prev + 1));
                }}
                className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-30 text-white text-xs font-semibold shadow-md shadow-sky-500/20 flex items-center gap-1.5 transition-colors"
              >
                <span>Next Question</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Question Palette Sidebar */}
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Question Palette
            </h3>

            <div className="grid grid-cols-5 gap-2 max-h-80 overflow-y-auto custom-scrollbar p-1">
              {testQuestions.map((_, idx) => {
                const isAns = selectedAnswers[idx] !== undefined;
                const isRev = markedForReview[idx];
                const isCurrent = idx === currentQIndex;

                let btnClass = "bg-white/5 text-white/50 border-white/10";
                if (isAns) btnClass = "bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-bold";
                if (isRev) btnClass = "bg-amber-400/20 border-amber-400/40 text-amber-300 font-bold";
                if (isCurrent) btnClass += " ring-2 ring-sky-400 ring-offset-2 ring-offset-slate-900";

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      sound.playClick();
                      setCurrentQIndex(idx);
                    }}
                    className={`h-8 rounded-lg border text-xs flex items-center justify-center transition-all ${btnClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="space-y-1.5 text-[11px] pt-3 border-t border-white/10 text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/40" />
                <span>Answered ({Object.keys(selectedAnswers).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-400/20 border border-amber-400/40" />
                <span>Marked for Review ({Object.keys(markedForReview).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-white/5 border border-white/10" />
                <span>Unattempted ({testQuestions.length - Object.keys(selectedAnswers).length})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Score Card Screen
  if (isSubmitted) {
    let correct = 0;
    let wrong = 0;
    let score = 0;

    testQuestions.forEach((q, idx) => {
      const userChoice = selectedAnswers[idx];
      if (userChoice !== undefined) {
        if (userChoice === q.correctAnswer) {
          correct += 1;
          score += 3;
        } else {
          wrong += 1;
          score -= 1;
        }
      }
    });

    const attempted = Object.keys(selectedAnswers).length;
    const maxScore = testQuestions.length * 3;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const passed = score >= Math.round(maxScore * 0.55);

    return (
      <div className="space-y-6 pb-12 animate-fade-in max-w-3xl mx-auto">
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 mx-auto flex items-center justify-center text-sky-400 shadow-xl">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-sky-300">
              <span>AFCAT SORTIE DEBRIEF COMPLETE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Rajdhani'] tracking-wide">
              {passed ? 'MISSION SUCCESSFUL - CUTOFF CLEARED' : 'NEEDS ADDITIONAL SORTIES'}
            </h1>
          </div>

          {/* Big Score Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-white/40 font-medium">Final Score</div>
              <div className="text-2xl sm:text-3xl font-bold text-sky-400 font-mono mt-1">
                {score} <span className="text-xs text-white/30">/ {maxScore}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-white/40 font-medium">Accuracy</div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono mt-1">
                {accuracy}%
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-white/40 font-medium">Correct (+3)</div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-300 font-mono mt-1">
                {correct}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-white/40 font-medium">Wrong (-1)</div>
              <div className="text-2xl sm:text-3xl font-bold text-rose-400 font-mono mt-1">
                {wrong}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTestId(null);
                setIsSubmitted(false);
              }}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
            >
              <RotateCcw className="w-4 h-4" />
              <span>RETURN TO MOCK TESTS</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Test Selection Screen
  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Overview Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sky-300 text-xs font-semibold backdrop-blur-sm">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>FULL TEST SIMULATOR</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-['Rajdhani'] tracking-wide">
            MOCK TESTS: TIMED EXAM ENVIRONMENT
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Real AFCAT exam rules (+3 correct, -1 wrong marking scheme, countdown timer, question palette, and detailed performance breakdown).
          </p>
        </div>
      </div>

      {/* Mock Tests Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockPresets.map((preset) => (
          <div
            key={preset.id}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group flex flex-col justify-between space-y-4 shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-md bg-white/10 text-sky-300 border border-white/15">
                  {preset.badge}
                </span>
                <span className="text-xs font-mono text-white/40 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{preset.duration / 60} mins</span>
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors font-['Rajdhani'] tracking-wide">
                  {preset.title}
                </h3>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">
                  {preset.desc}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-white/40 pt-1">
                <span>{preset.questionsCount} Questions</span>
                <span>•</span>
                <span>Max {preset.questionsCount * 3} Marks</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-sky-400 font-semibold">+3 for correct, -1 for wrong</span>

              <button
                onClick={() => startTest(preset.id)}
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs flex items-center gap-2 shadow-md shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>START TEST</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
