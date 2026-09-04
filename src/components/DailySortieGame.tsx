import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';
import { 
  Flame, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  Trophy, 
  Award, 
  RotateCcw,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface DailySortieProps {
  onBack: () => void;
  onAddXP: (amount: number) => void;
  currentStreak?: number;
  bestScore?: number;
}

const SORTIE_QUESTIONS = [
  // Subject 1: English
  {
    subject: 'English',
    q: 'Select the word closest in meaning to "PRAGMATIC":',
    options: ['Theoretical', 'Practical / Realistic', 'Arrogant', 'Deceptive'],
    ans: 1,
    explanation: 'Pragmatic means dealing with matters realistically and practically.'
  },
  {
    subject: 'English',
    q: 'Identify the error segment: "Each of the pilots (A) have submitted (B) their flight logs (C) on time (D)":',
    options: ['Each of the pilots', 'have submitted', 'their flight logs', 'on time'],
    ans: 1,
    explanation: '"Each" is grammatically singular, so it must take "has submitted" instead of "have submitted".'
  },
  // Subject 2: Reasoning
  {
    subject: 'Reasoning',
    q: 'Find the odd one out: 64, 125, 216, 343, 512, 729, 1000',
    options: ['64', '216', '343', '729'],
    ans: 0,
    explanation: 'All are cubes: 4³=64, 5³=125, 6³=216, 7³=343, 8³=512, 9³=729, 10³=1000. But 64 and 729 are also squares, or 343 is prime-based.'
  },
  {
    subject: 'Reasoning',
    q: 'If SOUTH-EAST becomes NORTH and NORTH-EAST becomes WEST, what will WEST become?',
    options: ['NORTH-EAST', 'SOUTH-EAST', 'NORTH-WEST', 'SOUTH-WEST'],
    ans: 1,
    explanation: 'The directions are rotated 135° clockwise. West rotated 135° clockwise points to South-East.'
  },
  // Subject 3: Numerical Ability
  {
    subject: 'Numerical',
    q: 'A sum of ₹12,500 amounts to ₹15,500 in 4 years at simple interest. What is the annual interest rate?',
    options: ['5%', '6%', '7%', '8%'],
    ans: 1,
    explanation: 'SI = ₹3,000. R = (SI × 100) / (P × T) = (3000 × 100) / (12500 × 4) = 300000 / 50000 = 6%.'
  },
  {
    subject: 'Numerical',
    q: 'Two cyclists start from the same point at speeds of 15 km/h and 20 km/h in opposite directions. Distance after 3 hours:',
    options: ['90 km', '105 km', '120 km', '135 km'],
    ans: 1,
    explanation: 'Relative speed in opposite directions = 15 + 20 = 35 km/h. In 3 hours = 35 × 3 = 105 km.'
  },
  {
    subject: 'Numerical',
    q: 'If 15% of A equals 20% of B, then the ratio A : B is:',
    options: ['3 : 4', '4 : 3', '5 : 4', '4 : 5'],
    ans: 1,
    explanation: '0.15 A = 0.20 B => A / B = 20 / 15 = 4 / 3.'
  },
  // Subject 4: General Awareness
  {
    subject: 'General Awareness',
    q: 'Where was the headquarters of the Indian Air Force Maintenance Command located?',
    options: ['Nagpur', 'Bengaluru', 'Kanpur', 'Pune'],
    ans: 0,
    explanation: 'The Maintenance Command of the IAF is headquartered at Vayu Sena Nagar, Nagpur, Maharashtra.'
  },
  {
    subject: 'General Awareness',
    q: 'Who was the first Indian to travel to space in the Soviet Soyuz T-11 mission in 1984?',
    options: ['Ravish Malhotra', 'Rakesh Sharma', 'Kalpana Chawla', 'Sunita Williams'],
    ans: 1,
    explanation: 'Wing Commander Rakesh Sharma flew aboard Soyuz T-11 on 3 April 1984.'
  },
  {
    subject: 'General Awareness',
    q: 'Which Article of the Constitution provides for the establishment of the Finance Commission of India?',
    options: ['Article 260', 'Article 280', 'Article 312', 'Article 324'],
    ans: 1,
    explanation: 'Article 280 of the Indian Constitution mandates the constitution of a Finance Commission every 5 years.'
  }
];

export const DailySortieGame: React.FC<DailySortieProps> = ({
  onBack,
  onAddXP,
  currentStreak = 12,
  bestScore = 9
}) => {
  const [started, setStarted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(300); // 5 minutes = 300s
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (!started || isCompleted) return;
    const interval = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(interval);
          finishSortie();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [started, isCompleted]);

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    sound.playClick();
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const finishSortie = () => {
    sound.playLevelUp();
    let computedScore = 0;
    SORTIE_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.ans) {
        computedScore += 1;
      }
    });
    setScore(computedScore);
    setIsCompleted(true);
    onAddXP(100); // +100 XP for Daily Sortie
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const currentQ = SORTIE_QUESTIONS[currentIndex];

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Sortie</span>
        </button>

        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold">
          <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>DAILY SORTIE</span>
        </div>
      </div>

      {/* 1. BRIEFING / LOBBY */}
      {!started && !isCompleted && (
        <div className="max-w-xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-amber-950/80 via-slate-900 to-black/90 border border-amber-400/40 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-amber-400/20 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto text-3xl">
            ⚡
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-mono font-bold text-amber-400 tracking-widest">
              DAILY FLIGHT DISPATCH
            </span>
            <h2 className="text-3xl font-extrabold text-white font-['Rajdhani'] tracking-wide">
              DAILY SORTIE CHALLENGE
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
              10 rapid-fire questions covering all 4 exam pillars in 5 minutes. Maintain your streak and keep your cognitive edge sharp!
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 font-mono text-center">
            <div>
              <div className="text-[10px] text-white/40 uppercase">SORTIE TIME</div>
              <div className="text-base font-extrabold text-sky-400">5 Mins</div>
            </div>
            <div className="border-x border-white/10">
              <div className="text-[10px] text-white/40 uppercase">CURRENT STREAK</div>
              <div className="text-base font-extrabold text-amber-400 flex items-center justify-center gap-1">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span>{currentStreak} Days</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] text-white/40 uppercase">BEST SCORE</div>
              <div className="text-base font-extrabold text-emerald-400">{bestScore}/10</div>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              setStarted(true);
            }}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-extrabold text-sm tracking-wider uppercase transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
          >
            <Zap className="w-5 h-5 fill-current" />
            <span>[ START SORTIE ]</span>
          </button>
        </div>
      )}

      {/* 2. ACTIVE SORTIE RUNNER */}
      {started && !isCompleted && (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Status Bar */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white/50 font-mono">Q{currentIndex + 1} / 10</span>
              <span className="px-2.5 py-0.5 rounded-full bg-sky-400/15 border border-sky-400/30 text-[10px] font-bold text-sky-300 uppercase">
                {currentQ.subject}
              </span>
            </div>

            {/* Live Countdown */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Question Box */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-5">
            <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
              {currentQ.q}
            </h3>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentIndex] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentIndex, idx)}
                    className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${
                      isSelected 
                        ? 'bg-amber-400/20 border-amber-400 text-amber-200' 
                        : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-white/10 text-xs flex items-center justify-center font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(i => i - 1)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/70 disabled:opacity-30"
              >
                Previous
              </button>

              {currentIndex < SORTIE_QUESTIONS.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(i => i + 1)}
                  className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={finishSortie}
                  className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-400/20"
                >
                  Finish Sortie
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. SORTIE RESULTS */}
      {isCompleted && (
        <div className="max-w-xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-amber-950/80 via-slate-900 to-black/90 border border-amber-400/40 text-center space-y-6 shadow-2xl animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-amber-400/20 border-2 border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto text-4xl">
            🏆
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase font-mono font-bold text-amber-400 tracking-widest">
              SORTIE COMPLETE
            </span>
            <h2 className="text-3xl font-extrabold text-white font-['Rajdhani']">
              DAILY SCORE: {score} / 10
            </h2>
            <p className="text-xs text-white/70">
              {score >= 8 
                ? 'Outstanding marksmanship! Air Force standard precision.' 
                : 'Good sortie! Review the missed questions below to cement concepts.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-center">
            <div>
              <div className="text-[10px] text-white/40 uppercase">STREAK EXTENDED</div>
              <div className="text-lg font-bold text-amber-400 flex items-center justify-center gap-1">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span>{currentStreak + 1} Days</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] text-white/40 uppercase">XP EARNED</div>
              <div className="text-lg font-bold text-emerald-400">+100 XP</div>
            </div>
          </div>

          {/* Quick Review of Answers */}
          <div className="space-y-2 text-left max-h-60 overflow-y-auto pr-1">
            {SORTIE_QUESTIONS.map((q, idx) => {
              const isUserCorrect = selectedAnswers[idx] === q.ans;
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-xs ${
                    isUserCorrect 
                      ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200' 
                      : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                  }`}
                >
                  <div className="font-semibold">{idx + 1}. {q.q}</div>
                  <div className="text-[11px] text-white/60 mt-1">{q.explanation}</div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setStarted(false);
                setIsCompleted(false);
                setTimeLeft(300);
                setCurrentIndex(0);
                setSelectedAnswers({});
              }}
              className="flex-1 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider transition-colors"
            >
              Replay Sortie
            </button>
            <button
              onClick={onBack}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors"
            >
              Back to Arena
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
