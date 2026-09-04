import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { 
  Award, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Plane, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Trophy, 
  Compass, 
  BookOpen, 
  Clock, 
  RotateCcw 
} from 'lucide-react';

interface AfcatFinalBossProps {
  onBack: () => void;
  onAddXP: (amount: number) => void;
}

interface MissionStage {
  id: number;
  name: string;
  subject: string;
  badge: string;
  questions: {
    q: string;
    options: string[];
    ans: number;
    explanation: string;
  }[];
}

const MISSION_STAGES: MissionStage[] = [
  {
    id: 1,
    name: 'STAGE 1: VERBAL RECONNAISSANCE',
    subject: 'English Comprehension & Lexicon',
    badge: '🦅',
    questions: [
      {
        q: 'Find the correctly spelled word:',
        options: ['Manoeuvre', 'Maneuverer', 'Manuever', 'Manoevre'],
        ans: 0,
        explanation: "'Manoeuvre' is the standard British/Indian military spelling."
      },
      {
        q: 'Antonym of "EPHEMERAL":',
        options: ['Transient', 'Eternal / Permanent', 'Fleet', 'Ethereal'],
        ans: 1,
        explanation: 'Ephemeral means short-lived or fleeting. Its antonym is eternal or permanent.'
      },
      {
        q: 'Idiom: "To burning the candle at both ends" means:',
        options: ['Working excessively without rest', 'Lighting up aircraft flares', 'Squandering wealth foolishly', 'Igniting double combustors'],
        ans: 0,
        explanation: 'It means exhausting one\'s energy or resources by staying up late and waking early.'
      }
    ]
  },
  {
    id: 2,
    name: 'STAGE 2: TACTICAL SPATIAL APTITUDE',
    subject: 'Reasoning & Military Aptitude',
    badge: '🧭',
    questions: [
      {
        q: 'A pilot starts from Base O, flies 10 km North, turns Right and flies 6 km, then turns Right and flies 10 km. How far is he from Base O?',
        options: ['6 km East', '10 km South', '16 km North-East', '0 km'],
        ans: 0,
        explanation: 'The North and South segments (10 km each) cancel out. He is 6 km East of Base O.'
      },
      {
        q: 'If DELHI is coded as 73541 and CALCUTTA as 82589662, how is CALICUT coded?',
        options: ['5279431', '8251896', '8251596', '8543691'],
        ans: 1,
        explanation: 'Direct letter substitution: C=8, A=2, L=5, I=1, C=8, U=9, T=6 => 8251896.'
      },
      {
        q: 'Find the odd one out from the military branches:',
        options: ['Brigadier', 'Commodore', 'Air Commodore', 'Colonel'],
        ans: 1,
        explanation: 'Brigadier, Air Commodore, and Commodore are 1-star ranks. But Commodore is Indian Navy, Air Commodore is IAF, Brigadier is Army. Or Colonel is a lower 3-baton rank.'
      }
    ]
  },
  {
    id: 3,
    name: 'STAGE 3: BALLISTIC QUANTITATIVE LOCK',
    subject: 'Numerical Ability',
    badge: '🎯',
    questions: [
      {
        q: 'A Sukhoi jet flies at Mach 1.8 (approx 600 m/s). How many kilometers does it travel in 15 minutes?',
        options: ['450 km', '540 km', '600 km', '720 km'],
        ans: 1,
        explanation: '15 min = 900 seconds. Distance = 600 m/s × 900 s = 540,000 m = 540 km.'
      },
      {
        q: 'Two pipes A and B can fill an aviation fuel tank in 20 min and 30 min respectively. If both are opened together, the time taken is:',
        options: ['10 min', '12 min', '15 min', '18 min'],
        ans: 1,
        explanation: 'Time = (20 × 30) / (20 + 30) = 600 / 50 = 12 minutes.'
      },
      {
        q: 'A seller marks a flight helmet 40% above cost price and allows a discount of 25%. His profit percentage is:',
        options: ['5%', '10%', '12%', '15%'],
        ans: 0,
        explanation: 'SP = 1.40 × 0.75 × CP = 1.05 × CP. Profit = 5%.'
      }
    ]
  },
  {
    id: 4,
    name: 'STAGE 4: SOVEREIGN DEFENCE AUDIT',
    subject: 'General Awareness & Defence Knowledge',
    badge: '🛡️',
    questions: [
      {
        q: 'The motto of the Indian Air Force "Nabha Sparsham Deeptham" is taken from which sacred text?',
        options: ['Rigveda', 'Bhagavad Gita (Chapter 11)', 'Mundaka Upanishad', 'Mahabharata'],
        ans: 1,
        explanation: '"Touch the Sky with Glory" is from Chapter 11, Verse 24 of the Bhagavad Gita.'
      },
      {
        q: 'Which air base was the home to the first batch of Rafale fighter aircraft inducted into the Golden Arrows Squadron?',
        options: ['Ambala AFS', 'Halwara AFS', 'Jodhpur AFS', 'Bareilly AFS'],
        ans: 0,
        explanation: 'No. 17 Squadron (Golden Arrows) at Ambala AFS received the first batch of Rafales in July 2020.'
      },
      {
        q: 'Which treaty ended the First Anglo-Maratha War in 1782?',
        options: ['Treaty of Bassein', 'Treaty of Salbai', 'Treaty of Purandar', 'Treaty of Surat'],
        ans: 1,
        explanation: 'The Treaty of Salbai signed in May 1782 concluded the First Anglo-Maratha War.'
      }
    ]
  },
  {
    id: 5,
    name: 'FINAL MISSION: FULL COMBAT CLIMAX',
    subject: 'Comprehensive Tactical Integration',
    badge: '👑',
    questions: [
      {
        q: 'In an air combat engagement, Fighter A leaves base at 09:00 flying North at 400 km/h. Fighter B leaves at 09:30 flying East at 600 km/h. At 10:30, what is the straight-line displacement between them?',
        options: ['600 km', '600√2 km ≈ 848 km', '800 km', '750 km'],
        ans: 1,
        explanation: 'At 10:30, Fighter A has flown 1.5 hrs = 600 km North. Fighter B has flown 1 hr = 600 km East. Distance = √(600² + 600²) = 600√2 km ≈ 848 km.'
      }
    ]
  }
];

export const AfcatFinalBossGame: React.FC<AfcatFinalBossProps> = ({ onBack, onAddXP }) => {
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [stageQIdx, setStageQIdx] = useState<number>(0);
  const [stageScore, setStageScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [missionComplete, setMissionComplete] = useState<boolean>(false);

  const currentStage = MISSION_STAGES[currentStageIdx];
  const currentQ = currentStage.questions[stageQIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.ans) {
      sound.playCorrect();
      setIsCorrect(true);
      setStageScore(s => s + 1);
    } else {
      sound.playWrong();
      setIsCorrect(false);
    }
  };

  const nextStep = () => {
    sound.playClick();
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);

    // If more questions in this stage
    if (stageQIdx < currentStage.questions.length - 1) {
      setStageQIdx(q => q + 1);
    } else {
      // Stage finished! Move to next stage
      if (currentStageIdx < MISSION_STAGES.length - 1) {
        sound.playLevelUp();
        setCurrentStageIdx(s => s + 1);
        setStageQIdx(0);
      } else {
        // ALL STAGES COMPLETE! Unlocked AIR ACE!
        sound.playLevelUp();
        setMissionComplete(true);
        onAddXP(500); // Massive XP bonus!
      }
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Abort Mission</span>
        </button>

        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold">
          <Plane className="w-4 h-4 text-amber-400" />
          <span>OPERATION: AFCAT FINAL BOSS</span>
        </div>
      </div>

      {!missionComplete ? (
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Multi-Stage Progression Tracker */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-red-950/40 to-slate-950 border border-amber-400/30 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                TACTICAL SORTIE PROGRESS
              </span>
              <span className="text-xs font-mono text-white/70">
                Stage {currentStageIdx + 1} of {MISSION_STAGES.length}
              </span>
            </div>

            {/* Stages Stepper */}
            <div className="grid grid-cols-5 gap-2">
              {MISSION_STAGES.map((stg, i) => {
                const isPassed = i < currentStageIdx;
                const isCurrent = i === currentStageIdx;
                return (
                  <div
                    key={stg.id}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isPassed
                        ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300'
                        : isCurrent
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 ring-2 ring-amber-400/30'
                        : 'bg-white/5 border-white/10 text-white/40'
                    }`}
                  >
                    <div className="text-base sm:text-lg mb-0.5">{stg.badge}</div>
                    <div className="text-[10px] font-bold truncate">Stage {stg.id}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Stage Banner */}
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-amber-400">CURRENT TACTICAL SECTOR</span>
              <h2 className="text-lg sm:text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
                {currentStage.name}
              </h2>
              <div className="text-xs text-white/60">{currentStage.subject}</div>
            </div>

            <div className="text-right font-mono">
              <div className="text-[10px] text-white/40 uppercase">QUESTION</div>
              <div className="text-sm font-bold text-sky-400">
                {stageQIdx + 1} / {currentStage.questions.length}
              </div>
            </div>
          </div>

          {/* Question Box */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl space-y-5">
            <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
              {currentQ.q}
            </h3>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                let style = "bg-white/5 hover:bg-white/10 border-white/10 text-white/80";
                if (isAnswered) {
                  if (idx === currentQ.ans) {
                    style = "bg-emerald-500/20 border-emerald-400 text-emerald-300";
                  } else if (idx === selectedOption) {
                    style = "bg-rose-500/20 border-rose-400 text-rose-300";
                  } else {
                    style = "bg-white/5 border-white/5 text-white/40 opacity-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${style}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-white/10 text-xs flex items-center justify-center font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswered && idx === currentQ.ans && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.ans && (
                      <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Advance */}
            {isAnswered && (
              <div className="space-y-3 pt-2">
                <div className={`p-4 rounded-xl text-xs font-medium ${
                  isCorrect 
                    ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-200' 
                    : 'bg-rose-950/40 border border-rose-500/30 text-rose-200'
                }`}>
                  <div className="font-bold mb-1">
                    {isCorrect ? '✅ Tactical Objective Met!' : '⚠️ Deviation Recorded!'}
                  </div>
                  <div className="text-white/70">{currentQ.explanation}</div>
                </div>

                <button
                  onClick={nextStep}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
                >
                  {stageQIdx < currentStage.questions.length - 1 
                    ? 'Next Question in Sector →' 
                    : currentStageIdx < MISSION_STAGES.length - 1 
                    ? 'Advance to Next Mission Stage →' 
                    : 'Claim Final Mission Debrief 🏆'}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* AIR ACE UNLOCKED VICTORY CELEBRATION */
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-amber-950/80 via-slate-900 to-black/90 border-2 border-amber-400/50 text-center space-y-6 max-w-xl mx-auto shadow-2xl animate-fade-in">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 text-black flex items-center justify-center mx-auto text-5xl shadow-xl shadow-amber-400/20 animate-pulse">
              👑
            </div>
            <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-red-600 text-white font-mono text-[10px] font-bold border border-white/20">
              ACE WINGS
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-mono font-bold text-amber-400 tracking-widest">
              OPERATION AFCAT: 100% CONQUERED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Rajdhani'] tracking-wide">
              UNLOCKED: AIR ACE 🏆
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              You navigated English, Reasoning, Numerical Ability, and General Awareness through the full combat crucible. Your wings are official!
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black/60 border border-amber-400/30 grid grid-cols-2 gap-4 font-mono text-center">
            <div>
              <div className="text-[10px] text-white/40 uppercase">TITLE UNLOCKED</div>
              <div className="text-lg font-extrabold text-amber-400">AIR ACE</div>
            </div>
            <div>
              <div className="text-[10px] text-white/40 uppercase">EXPERIENCE</div>
              <div className="text-lg font-extrabold text-emerald-400">+500 XP</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setCurrentStageIdx(0);
                setStageQIdx(0);
                setMissionComplete(false);
                setIsAnswered(false);
              }}
              className="flex-1 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Replay Operation
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
