import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { 
  Heart, 
  ShieldAlert, 
  Sparkles, 
  Trophy, 
  RotateCcw, 
  ArrowLeft, 
  Swords, 
  Flame, 
  CheckCircle2, 
  XCircle,
  Skull,
  Zap,
  Target
} from 'lucide-react';

interface BossBattleProps {
  onBack: () => void;
  onAddXP: (amount: number) => void;
}

interface BossProfile {
  id: string;
  name: string;
  title: string;
  topic: string;
  subject: string;
  color: string;
  bgColor: string;
  borderColor: string;
  avatar: string;
  maxHp: number;
  description: string;
  questions: {
    id: string;
    difficulty: 'easy' | 'medium' | 'hard';
    damage: number; // easy = 1, medium = 2, hard = 3
    q: string;
    options: string[];
    ans: number;
    explanation: string;
  }[];
}

const BOSS_ROSTER: BossProfile[] = [
  {
    id: 'math_boss',
    name: 'GOLIATH CHRONOS',
    title: 'Titan of Time & Motion',
    topic: 'Time & Work / Speed & Distance',
    subject: 'Numerical Ability',
    color: 'text-emerald-400',
    bgColor: 'from-emerald-950/90 via-slate-900 to-teal-950/90',
    borderColor: 'border-emerald-500/40',
    avatar: '👾',
    maxHp: 8,
    description: 'Bends velocity and work ratios. Throws complex relative speed and work-pipe dilemmas.',
    questions: [
      {
        id: 'mb_1',
        difficulty: 'easy',
        damage: 1,
        q: 'A train 120m long runs at 54 km/h. How many seconds does it take to cross a telegraph post?',
        options: ['6 sec', '8 sec', '10 sec', '12 sec'],
        ans: 1,
        explanation: '54 km/h = 54 × (5/18) = 15 m/s. Time = Distance / Speed = 120 / 15 = 8 seconds.'
      },
      {
        id: 'mb_2',
        difficulty: 'medium',
        damage: 2,
        q: 'A can do work in 10 days, B in 15 days. They work together for 3 days, then A leaves. Days B takes for rest:',
        options: ['6 days', '7.5 days', '8 days', '9 days'],
        ans: 1,
        explanation: 'Work = 30 units. A=3 u/d, B=2 u/d. 3 days combined = 15 units. Remainder = 15 units. B takes 15/2 = 7.5 days.'
      },
      {
        id: 'mb_3',
        difficulty: 'hard',
        damage: 3,
        q: 'Difference between CI and SI on ₹10,000 for 2 years at 8% per annum compounded annually is:',
        options: ['₹54', '₹64', '₹72', '₹80'],
        ans: 1,
        explanation: 'Diff = P × (R/100)² = 10000 × (8/100)² = 10000 × 0.0064 = ₹64.'
      },
      {
        id: 'mb_4',
        difficulty: 'medium',
        damage: 2,
        q: 'A boat travels 24 km downstream in 2 hrs and 18 km upstream in 3 hrs. Speed of stream is:',
        options: ['2 km/h', '3 km/h', '4 km/h', '5 km/h'],
        ans: 1,
        explanation: 'Downstream speed = 12 km/h, Upstream = 6 km/h. Stream speed = (12 - 6) / 2 = 3 km/h.'
      },
      {
        id: 'mb_5',
        difficulty: 'hard',
        damage: 3,
        q: 'Pipe A fills a tank in 12h, B in 15h. Drain C empties in 20h. If all opened together, tank fills in:',
        options: ['8 hours', '10 hours', '12 hours', '15 hours'],
        ans: 1,
        explanation: 'LCM = 60. A=+5, B=+4, C=-3. Net rate = 5+4-3 = +6 u/hr. Time = 60 / 6 = 10 hours.'
      }
    ]
  },
  {
    id: 'reasoning_boss',
    name: 'CIPHER TITAN',
    title: 'Overlord of Deductive Mind',
    topic: 'Syllogism, Blood Relations & Clocks',
    subject: 'Reasoning Aptitude',
    color: 'text-purple-400',
    bgColor: 'from-purple-950/90 via-slate-900 to-indigo-950/90',
    borderColor: 'border-purple-500/40',
    avatar: '🛡️',
    maxHp: 8,
    description: 'Weaves deceptive premise knots, inverted clock hand angles, and generational lineage chains.',
    questions: [
      {
        id: 'rb_1',
        difficulty: 'easy',
        damage: 1,
        q: 'What is the angle between the hour and minute hands of a clock at 3:30?',
        options: ['70°', '75°', '80°', '85°'],
        ans: 1,
        explanation: 'Angle = |30H - 5.5M| = |30(3) - 5.5(30)| = |90 - 165| = 75°.'
      },
      {
        id: 'rb_2',
        difficulty: 'medium',
        damage: 2,
        q: "Pointing to a man, Rahul said, 'His only brother is the father of my daughter's father.' Rahul is his:",
        options: ['Son', 'Father', 'Brother', 'Nephew'],
        ans: 3,
        explanation: "'My daughter's father' is Rahul himself. So Rahul's father is the man's only brother. Hence Rahul is his nephew."
      },
      {
        id: 'rb_3',
        difficulty: 'hard',
        damage: 3,
        q: "Statements: All Fighters are Jets. No Jet is Glider. Conclusions: I. No Fighter is Glider. II. Some Jets are Fighters.",
        options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither follows'],
        ans: 2,
        explanation: 'Since all Fighters are inside Jets and no Jet overlaps Glider, no Fighter can touch Glider (I follows). Since All Fighters are Jets, Some Jets are Fighters (II follows).'
      },
      {
        id: 'rb_4',
        difficulty: 'medium',
        damage: 2,
        q: 'Find the missing number: 7, 13, 25, 49, 97, ?',
        options: ['185', '193', '194', '197'],
        ans: 1,
        explanation: 'Each step is × 2 - 1: 7×2-1=13, 13×2-1=25, 25×2-1=49, 49×2-1=97, 97×2-1 = 193.'
      }
    ]
  },
  {
    id: 'english_boss',
    name: 'LEXICON DRAGON',
    title: 'Emperor of Verbal Syntax',
    topic: 'Idioms, Analogies & Grammar Traps',
    subject: 'English Comprehension',
    color: 'text-rose-400',
    bgColor: 'from-rose-950/90 via-slate-900 to-red-950/90',
    borderColor: 'border-rose-500/40',
    avatar: '🐉',
    maxHp: 8,
    description: 'Guards the vocabulary gates with cunning homophones, subject-verb agreement traps, and subtle metaphors.',
    questions: [
      {
        id: 'eb_1',
        difficulty: 'easy',
        damage: 1,
        q: 'Idiom: "A bolt from the blue" means:',
        options: ['A thunderstorm in spring', 'A complete surprise / sudden shock', 'A deliberate attack', 'An aerial missile test'],
        ans: 1,
        explanation: 'A bolt from the blue refers to an unexpected, completely surprising event.'
      },
      {
        id: 'eb_2',
        difficulty: 'medium',
        damage: 2,
        q: 'Choose the correct antonym of "LACONIC":',
        options: ['Verbose', 'Taciturn', 'Terse', 'Concise'],
        ans: 0,
        explanation: 'Laconic means using very few words. Its antonym is verbose (wordy).'
      },
      {
        id: 'eb_3',
        difficulty: 'hard',
        damage: 3,
        q: 'Find the correct form: "Neither the commander nor his officers _____ present at the debriefing."',
        options: ['was', 'were', 'is', 'has been'],
        ans: 1,
        explanation: 'With "neither... nor", the verb agrees with the closer subject ("his officers" - plural), hence "were".'
      },
      {
        id: 'eb_4',
        difficulty: 'medium',
        damage: 2,
        q: 'Analogy: FILIBUSTER : LEGISLATION :: ? : ?',
        options: ['Blockade : Commerce', 'Treaty : War', 'Veto : Senate', 'Debate : Proposal'],
        ans: 0,
        explanation: 'A filibuster is an obstruction to legislation, just as a blockade is an obstruction to commerce.'
      }
    ]
  },
  {
    id: 'gk_boss',
    name: 'STRATEGY GENERAL',
    title: 'Marshal of Sovereign Domain',
    topic: 'Indian Polity, History & Defence Systems',
    subject: 'General Awareness',
    color: 'text-amber-400',
    bgColor: 'from-amber-950/90 via-slate-900 to-yellow-950/90',
    borderColor: 'border-amber-500/40',
    avatar: '🎖️',
    maxHp: 8,
    description: 'Master of constitutional provisions, historical treaties, military doctrines, and Indian Air Force heritage.',
    questions: [
      {
        id: 'gb_1',
        difficulty: 'easy',
        damage: 1,
        q: 'Which Article is known as the "Heart and Soul of the Constitution" according to Dr. B.R. Ambedkar?',
        options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
        ans: 3,
        explanation: 'Article 32 (Right to Constitutional Remedies) guarantees enforcement of Fundamental Rights via writs.'
      },
      {
        id: 'gb_2',
        difficulty: 'medium',
        damage: 2,
        q: 'Operation Meghdoot (1984) was launched by Indian Armed Forces to secure which strategic glacier?',
        options: ['Baltoro Glacier', 'Siachen Glacier', 'Gangotri Glacier', 'Hispar Glacier'],
        ans: 1,
        explanation: 'Operation Meghdoot in April 1984 captured the highest battlefield on Earth - Siachen Glacier.'
      },
      {
        id: 'gb_3',
        difficulty: 'hard',
        damage: 3,
        q: 'The First Battle of Tarain (1191 AD) was fought between Prithviraj Chauhan and:',
        options: ['Muhammad Ghori', 'Mahmud Ghazni', 'Qutb-ud-din Aibak', 'Iltutmish'],
        ans: 0,
        explanation: 'Prithviraj Chauhan defeated Muhammad Ghori in the First Battle of Tarain (1191).'
      },
      {
        id: 'gb_4',
        difficulty: 'medium',
        damage: 2,
        q: 'Where is the Headquarters of Eastern Air Command (EAC) of the Indian Air Force situated?',
        options: ['Tezpur', 'Guwahati', 'Shillong', 'Silchar'],
        ans: 2,
        explanation: 'The Eastern Air Command is headquartered in Shillong, Meghalaya.'
      }
    ]
  }
];

export const BossBattleGame: React.FC<BossBattleProps> = ({ onBack, onAddXP }) => {
  const [selectedBoss, setSelectedBoss] = useState<BossProfile | null>(null);
  const [bossHp, setBossHp] = useState<number>(8);
  const [playerHp, setPlayerHp] = useState<number>(5); // 5 Hearts
  const [qIndex, setQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [battleState, setBattleState] = useState<'idle' | 'fighting' | 'victory' | 'defeat'>('idle');
  const [bossHitAnim, setBossHitAnim] = useState<boolean>(false);
  const [playerHitAnim, setPlayerHitAnim] = useState<boolean>(false);

  const startBoss = (boss: BossProfile) => {
    sound.playClick();
    setSelectedBoss(boss);
    setBossHp(boss.maxHp);
    setPlayerHp(5);
    setQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
    setBattleState('fighting');
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered || !selectedBoss) return;
    const currentQ = selectedBoss.questions[qIndex % selectedBoss.questions.length];
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.ans) {
      sound.playCorrect();
      setIsCorrect(true);
      setBossHitAnim(true);
      setTimeout(() => setBossHitAnim(false), 600);

      const damageDealt = currentQ.damage;
      const newBossHp = Math.max(0, bossHp - damageDealt);
      setBossHp(newBossHp);

      if (newBossHp === 0) {
        // Boss Defeated!
        setTimeout(() => {
          sound.playLevelUp();
          setBattleState('victory');
          onAddXP(300); // 300 XP for defeating boss!
        }, 1000);
      }
    } else {
      sound.playWrong();
      setIsCorrect(false);
      setPlayerHitAnim(true);
      setTimeout(() => setPlayerHitAnim(false), 600);

      const newPlayerHp = playerHp - 1;
      setPlayerHp(newPlayerHp);

      if (newPlayerHp === 0) {
        setTimeout(() => {
          setBattleState('defeat');
        }, 1000);
      }
    }
  };

  const nextQuestion = () => {
    if (!selectedBoss) return;
    sound.playClick();
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
    setQIndex(i => i + 1);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Arena</span>
        </button>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
          <Swords className="w-4 h-4" />
          <span>BOSS BATTLE ARENA</span>
        </div>
      </div>

      {/* 1. SELECTION SCREEN */}
      {battleState === 'idle' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/30 text-center space-y-2">
            <span className="text-xs uppercase font-mono font-bold text-purple-400 tracking-wider">🧠 TOPIC GUARDIANS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Rajdhani'] tracking-wide">
              DEFEAT THE BOSS → CLAIM TOPIC MASTERY
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
              You start with 5 Hearts. Easy questions deal 1 damage, Medium deals 2 damage, Hard deals 3 damage. 
              Wrong answers cost you 1 HP. Defeating a boss grants <span className="text-amber-300 font-bold">+300 XP</span> and masters the topic!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BOSS_ROSTER.map((boss) => (
              <div
                key={boss.id}
                onClick={() => startBoss(boss)}
                className={`p-5 rounded-2xl bg-gradient-to-br ${boss.bgColor} border ${boss.borderColor} hover:scale-[1.02] transition-all cursor-pointer group shadow-xl space-y-4`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{boss.avatar}</span>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-white/50 font-mono">{boss.subject}</span>
                      <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors font-['Rajdhani']">
                        {boss.name}
                      </h3>
                      <div className="text-xs font-medium text-white/70">{boss.title}</div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] font-mono text-white/80">
                    HP: {boss.maxHp}
                  </span>
                </div>

                <p className="text-xs text-white/60 leading-relaxed">
                  {boss.description}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/80">Topic: <span className={boss.color}>{boss.topic}</span></span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                    <span>CHALLENGE BOSS</span>
                    <Swords className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. ACTIVE BATTLE SCREEN */}
      {battleState === 'fighting' && selectedBoss && (
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Battle Status Bar */}
          <div className={`p-5 rounded-2xl bg-gradient-to-r ${selectedBoss.bgColor} border ${selectedBoss.borderColor} shadow-2xl relative overflow-hidden`}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Boss Status */}
              <div className={`flex items-center gap-3 transition-transform ${bossHitAnim ? 'scale-110 animate-bounce' : ''}`}>
                <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/20 flex items-center justify-center text-3xl">
                  {selectedBoss.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold text-white/50 uppercase font-mono">{selectedBoss.name}</div>
                  <div className="text-sm font-extrabold text-white font-['Rajdhani'] tracking-wide">
                    BOSS HP: {bossHp} / {selectedBoss.maxHp}
                  </div>
                  {/* Boss HP Bar */}
                  <div className="w-36 sm:w-44 bg-black/50 h-3 rounded-full overflow-hidden border border-white/10 mt-1">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400 transition-all duration-300"
                      style={{ width: `${(bossHp / selectedBoss.maxHp) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="text-xs font-extrabold font-mono text-white/30 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                VS
              </div>

              {/* Player Hearts */}
              <div className={`text-right transition-transform ${playerHitAnim ? 'scale-110 text-rose-400 animate-pulse' : ''}`}>
                <div className="text-xs font-bold text-white/50 uppercase font-mono">YOUR HEALTH</div>
                <div className="flex items-center gap-1.5 mt-1 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Heart 
                      key={i} 
                      className={`w-5 h-5 transition-all ${
                        i < playerHp 
                          ? 'fill-rose-500 text-rose-500 animate-pulse' 
                          : 'fill-transparent text-white/20'
                      }`} 
                    />
                  ))}
                </div>
                <div className="text-[11px] font-mono text-white/60 mt-1">{playerHp} / 5 HEARTS REMAINING</div>
              </div>
            </div>
          </div>

          {/* Question Card */}
          {(() => {
            const currentQ = selectedBoss.questions[qIndex % selectedBoss.questions.length];
            return (
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-white/50">Question #{qIndex + 1}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase ${
                      currentQ.difficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      currentQ.difficulty === 'medium' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}>
                      {currentQ.difficulty} ({currentQ.damage} DMG)
                    </span>
                  </div>

                  <span className="text-xs font-mono text-purple-300 font-semibold">
                    Target: -{currentQ.damage} Boss HP
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {currentQ.q}
                </h3>

                {/* Options */}
                <div className="space-y-2.5">
                  {currentQ.options.map((opt, idx) => {
                    let btnStyle = "bg-white/5 hover:bg-white/10 border-white/10 text-white/80";
                    if (isAnswered) {
                      if (idx === currentQ.ans) {
                        btnStyle = "bg-emerald-500/20 border-emerald-400 text-emerald-300";
                      } else if (idx === selectedOption) {
                        btnStyle = "bg-rose-500/20 border-rose-400 text-rose-300";
                      } else {
                        btnStyle = "bg-white/5 border-white/5 text-white/40 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full p-3.5 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
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

                {/* Answer Feedback & Next Action */}
                {isAnswered && (
                  <div className="space-y-3 pt-2">
                    <div className={`p-4 rounded-xl text-xs font-medium ${
                      isCorrect 
                        ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-200' 
                        : 'bg-rose-950/40 border border-rose-500/30 text-rose-200'
                    }`}>
                      <div className="font-bold mb-1">
                        {isCorrect ? `⚡ Direct Hit! Dealt ${currentQ.damage} damage to Boss!` : '⚠️ Counterattack! You lost 1 Heart!'}
                      </div>
                      <div className="text-white/70">{currentQ.explanation}</div>
                    </div>

                    {bossHp > 0 && playerHp > 0 && (
                      <button
                        onClick={nextQuestion}
                        className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-purple-600/20"
                      >
                        Next Attack Wave →
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* 3. VICTORY SCREEN */}
      {battleState === 'victory' && selectedBoss && (
        <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/40 text-center space-y-5 max-w-lg mx-auto shadow-2xl animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-amber-400/20 border-2 border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto text-4xl animate-bounce">
            🏆
          </div>

          <div>
            <span className="text-xs uppercase font-mono font-bold text-amber-400 tracking-wider">VICTORY ACHIEVED</span>
            <h2 className="text-3xl font-extrabold text-white font-['Rajdhani'] mt-1">
              {selectedBoss.name} DEFEATED!
            </h2>
            <p className="text-xs text-white/70 mt-1">
              You triumphed over the topic guardian of <span className="text-purple-300 font-bold">{selectedBoss.topic}</span>!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-around font-mono">
            <div>
              <div className="text-[10px] text-white/40 uppercase">REWARD</div>
              <div className="text-xl font-bold text-amber-400">+300 XP</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-[10px] text-white/40 uppercase">STATUS</div>
              <div className="text-xl font-bold text-emerald-400">MASTERED</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setBattleState('idle')}
              className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors"
            >
              Choose Next Boss
            </button>
            <button
              onClick={onBack}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors"
            >
              Back to Arena
            </button>
          </div>
        </div>
      )}

      {/* 4. DEFEAT SCREEN */}
      {battleState === 'defeat' && selectedBoss && (
        <div className="p-8 rounded-2xl bg-gradient-to-b from-rose-950/80 via-slate-900 to-black/80 border border-rose-500/40 text-center space-y-5 max-w-lg mx-auto shadow-2xl animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-rose-500/20 border-2 border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto text-4xl">
            <Skull className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs uppercase font-mono font-bold text-rose-400 tracking-wider">HEARTS DEPLETED</span>
            <h2 className="text-3xl font-extrabold text-white font-['Rajdhani'] mt-1">
              MISSION FAILED
            </h2>
            <p className="text-xs text-white/70 mt-1">
              {selectedBoss.name} overwhelmed your defenses. Study the formula traps and try again!
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => startBoss(selectedBoss)}
              className="flex-1 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Boss</span>
            </button>
            <button
              onClick={() => setBattleState('idle')}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors"
            >
              Boss Roster
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
