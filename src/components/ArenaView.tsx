import React, { useState, useEffect, useRef } from 'react';
import { sound } from '../utils/audio';
import { 
  Plane, 
  Brain, 
  Zap, 
  Crosshair, 
  KeyRound, 
  MapPin, 
  Award, 
  Languages, 
  MoveRight, 
  Sparkles, 
  Clock, 
  RefreshCw, 
  Trophy, 
  Flame, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Shield, 
  Layers, 
  FileText,
  Swords,
  Crown
} from 'lucide-react';
import { BossBattleGame } from './BossBattleGame';
import { AfcatFinalBossGame } from './AfcatFinalBossGame';
import { DailySortieGame } from './DailySortieGame';

interface ArenaViewProps {
  onAddXP: (amount: number) => void;
}

type GameMode = 
  | 'menu'
  | 'scramble'
  | 'memory'
  | 'blitz'
  | 'math_attack'
  | 'code_breaker'
  | 'india_explorer'
  | 'air_identification'
  | 'rank_rush'
  | 'vocab_duel'
  | 'sentence_builder'
  | 'boss_battle'
  | 'afcat_final_boss'
  | 'daily_sortie';

export const ArenaView: React.FC<ArenaViewProps> = ({ onAddXP }) => {
  const [activeGame, setActiveGame] = useState<GameMode>('menu');
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  // -------------------------------------------------------------
  // 1. SCRAMBLE (60s rapid flight, altitude & distance)
  // -------------------------------------------------------------
  const [scrambleTime, setScrambleTime] = useState(60);
  const [altitude, setAltitude] = useState(15000); // in feet
  const [distance, setDistance] = useState(0); // in nautical miles
  const [scrambleQIndex, setScrambleQIndex] = useState(0);

  const SCRAMBLE_QUESTIONS = [
    { q: 'Which Article deals with Constitutional Remedies?', opts: ['Article 19', 'Article 21', 'Article 32', 'Article 44'], ans: 2 },
    { q: 'Where is the Headquarters of Western Air Command?', opts: ['Subroto Park, New Delhi', 'Shillong', 'Prayagraj', 'Gandhinagar'], ans: 0 },
    { q: 'What is 25% of 480?', opts: ['100', '120', '140', '160'], ans: 1 },
    { q: 'Operation Safed Sagar was launched during which war?', opts: ['1971 War', '1999 Kargil War', '1965 War', '1962 Sino-Indian'], ans: 1 },
    { q: 'Nearest synonym for ABATE:', opts: ['Subside', 'Intensify', 'Gather', 'Prolong'], ans: 0 },
    { q: 'In CAT -> DBU (+1 shift), what is DOG?', opts: ['EPH', 'EOH', 'FPI', 'DPH'], ans: 0 },
    { q: 'The Astra Mk-1 missile is which type of missile?', opts: ['Air-to-Air BVRAAM', 'Surface-to-Air', 'Anti-Tank', 'Cruise'], ans: 0 },
    { q: 'In which atmospheric layer does weather occur?', opts: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Exosphere'], ans: 0 },
    { q: 'A boat moves at 18 km/h downstream and 12 km/h upstream. Stream speed?', opts: ['3 km/h', '4 km/h', '5 km/h', '6 km/h'], ans: 0 },
    { q: 'Who is the only 5-Star Marshal of the Indian Air Force?', opts: ['Arjan Singh', 'Subroto Mukherjee', 'Aspy Engineer', 'P.C. Lal'], ans: 0 }
  ];

  // -------------------------------------------------------------
  // 2. MEMORY SQUADRON (Card Matching)
  // -------------------------------------------------------------
  interface MemoryCard { id: number; pairId: number; text: string; isFlipped: boolean; isMatched: boolean }
  const [memoryCards, setMemoryCards] = useState<MemoryCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const MEMORY_PAIRS = [
    { a: 'Article 32', b: 'Right to Constitutional Remedies' },
    { a: 'Operation Meghdoot', b: 'Siachen Glacier 1984' },
    { a: 'Operation Safed Sagar', b: 'Kargil Air Support 1999' },
    { a: 'Astra Mk-1', b: 'Indigenous BVRAAM Missile' },
    { a: 'Dassault Rafale', b: 'Meteor & SCALP Missiles' },
    { a: 'HAL Tejas', b: 'Light Combat Aircraft (LCA)' }
  ];

  const initMemoryGame = () => {
    let cards: MemoryCard[] = [];
    MEMORY_PAIRS.slice(0, 6).forEach((pair, idx) => {
      cards.push({ id: idx * 2, pairId: idx, text: pair.a, isFlipped: false, isMatched: false });
      cards.push({ id: idx * 2 + 1, pairId: idx, text: pair.b, isFlipped: false, isMatched: false });
    });
    // Shuffle
    cards.sort(() => Math.random() - 0.5);
    setMemoryCards(cards);
    setSelectedCards([]);
  };

  const handleCardClick = (cardId: number) => {
    if (selectedCards.length === 2) return;
    const target = memoryCards.find(c => c.id === cardId);
    if (!target || target.isFlipped || target.isMatched) return;

    sound.playClick();
    const updated = memoryCards.map(c => c.id === cardId ? { ...c, isFlipped: true } : c);
    setMemoryCards(updated);
    const newSelected = [...selectedCards, cardId];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const c1 = memoryCards.find(c => c.id === newSelected[0]);
      const c2 = target;
      if (c1 && c2 && c1.pairId === c2.pairId) {
        sound.playCorrect();
        setScore(s => s + 10);
        setTimeout(() => {
          setMemoryCards(prev => prev.map(c => (c.id === c1.id || c.id === c2.id) ? { ...c, isMatched: true } : c));
          setSelectedCards([]);
        }, 500);
      } else {
        sound.playWrong();
        setTimeout(() => {
          setMemoryCards(prev => prev.map(c => (c.id === newSelected[0] || c.id === newSelected[1]) ? { ...c, isFlipped: false } : c));
          setSelectedCards([]);
        }, 900);
      }
    }
  };

  // -------------------------------------------------------------
  // 3. 10-SECOND BLITZ (Rapid Recall Countdown)
  // -------------------------------------------------------------
  const [blitzTimer, setBlitzTimer] = useState(10);
  const [blitzQIndex, setBlitzQIndex] = useState(0);

  const BLITZ_QUESTIONS = [
    { q: "India's first Chief of the Air Staff (CAS) after Independence was?", opts: ['Subroto Mukherjee', 'Thomas Elmhirst', 'Arjan Singh', 'Aspy Engineer'], ans: 1 },
    { q: 'Air Force Day is celebrated annually in India on which date?', opts: ['8th October', '15th January', '4th December', '26th July'], ans: 0 },
    { q: 'Formula for relative speed of two trains moving in opposite directions:', opts: ['S1 + S2', 'S1 - S2', 'S1 × S2', '(S1 + S2)/2'], ans: 0 },
    { q: 'Antonym of CANDID:', opts: ['Outspoken', 'Deceitful / Secretive', 'Frank', 'Genuine'], ans: 1 },
    { q: 'Escape velocity from Earth is approximately:', opts: ['11.2 km/s', '9.8 km/s', '7.9 km/s', '15.4 km/s'], ans: 0 }
  ];

  // -------------------------------------------------------------
  // 4. MATH ATTACK (Target Shooting Calculations)
  // -------------------------------------------------------------
  const [mathStage, setMathStage] = useState<'easy' | 'medium' | 'afcat' | 'hard'>('easy');
  const [mathProblem, setMathProblem] = useState<{ q: string; targets: number[]; ans: number }>({
    q: '25% of 480 = ?',
    targets: [100, 120, 140, 160],
    ans: 120
  });

  const generateMathAttack = (stage: 'easy' | 'medium' | 'afcat' | 'hard') => {
    let q = '';
    let ans = 0;
    let targets: number[] = [];

    if (stage === 'easy') {
      const p = 25;
      const val = 480;
      ans = (p * val) / 100;
      q = `${p}% of ${val} = ?`;
      targets = [ans - 20, ans, ans + 20, ans + 40].sort(() => Math.random() - 0.5);
    } else if (stage === 'medium') {
      q = 'Successive discount of 20% and 10% = single discount of ?%';
      ans = 28;
      targets = [25, 28, 30, 32].sort(() => Math.random() - 0.5);
    } else if (stage === 'afcat') {
      q = 'Train 150m at 54 km/h passes a telegraph pole in ? seconds';
      ans = 10;
      targets = [8, 10, 12, 15].sort(() => Math.random() - 0.5);
    } else {
      q = 'Sum doubles itself at 8% SI in how many years?';
      ans = 12.5;
      targets = [10, 12.5, 15, 16].sort(() => Math.random() - 0.5);
    }
    setMathProblem({ q, targets, ans });
  };

  const handleShootTarget = (choice: number) => {
    if (choice === mathProblem.ans) {
      sound.playCorrect();
      setScore(s => s + 15);
      setStreak(st => st + 1);
      // upgrade difficulty
      if (mathStage === 'easy') setMathStage('medium');
      else if (mathStage === 'medium') setMathStage('afcat');
      else if (mathStage === 'afcat') setMathStage('hard');
      else setMathStage('easy');
      generateMathAttack(mathStage);
    } else {
      sound.playWrong();
      setStreak(0);
    }
  };

  // -------------------------------------------------------------
  // 5. CODE BREAKER (Animated Reasoning Vault Cipher)
  // -------------------------------------------------------------
  const [cipherStage, setCipherStage] = useState(0);
  const CIPHER_QUESTIONS = [
    { prompt: 'CAT  →  DBU (+1 shift)\nDOG  →  ?', options: ['EPH', 'EOH', 'FPI', 'DPH'], ans: 0 },
    { prompt: 'ROSE  →  TQUG (+2 shift)\nBLUE  →  ?', options: ['DNWG', 'CMVF', 'COWG', 'DLTE'], ans: 0 },
    { prompt: 'Opposite Letters:\nAZ, BY, CX...\nMIRAGE  →  ?', options: ['NIZTTV', 'NIRAHT', 'HIZTIV', 'NVSTRI'], ans: 0 }
  ];

  // -------------------------------------------------------------
  // 6. INDIA EXPLORER (Interactive Location Identification)
  // -------------------------------------------------------------
  const [explorerQIndex, setExplorerQIndex] = useState(0);
  const EXPLORER_QUESTIONS = [
    { q: 'Locate the Headquarters of Western Air Command (WAC):', options: ['Subroto Park, New Delhi', 'Shillong (EAC)', 'Prayagraj (CAC)', 'Gandhinagar (SWAC)'], ans: 0, hint: 'Responsible for capital airspace defense.' },
    { q: 'Locate the Headquarters of Eastern Air Command (EAC):', options: ['Shillong, Meghalaya', 'Tezpur, Assam', 'Kolkata, WB', 'Dimapur, Nagaland'], ans: 0, hint: 'Guards the entire Northeast frontier.' },
    { q: 'Which state is Majuli river island (Brahmaputra) located in?', options: ['Assam', 'Arunachal Pradesh', 'Meghalaya', 'West Bengal'], ans: 0, hint: 'World largest inhabited freshwater river island.' },
    { q: 'Where is the strategic Siachen Glacier situated?', options: ['Nubra Valley, Eastern Karakoram Range', 'Pir Panjal Range', 'Zanskar Range', 'Shiwalik Range'], ans: 0, hint: 'Highest battleground in the world.' }
  ];

  // -------------------------------------------------------------
  // 7. AIR FORCE IDENTIFICATION (Aircraft & Takeoff)
  // -------------------------------------------------------------
  const [identQIndex, setIdentQIndex] = useState(0);
  const [tookOff, setTookOff] = useState(false);
  const IDENT_QUESTIONS = [
    {
      name: 'Dassault Rafale',
      img: '/assets/aircraft/rafale.svg',
      options: ['Rafale (France)', 'Su-30MKI (Russia/India)', 'Tejas LCA (India)', 'Mirage 2000 (France)'],
      ans: 0,
      details: '4.5 Generation Omnirole Jet • Meteor BVR & SCALP Missiles • Golden Arrows Squadron'
    },
    {
      name: 'Sukhoi Su-30MKI',
      img: '/assets/aircraft/su30mki.svg',
      options: ['Su-30MKI (Air Dominance)', 'MiG-29 (Baaz)', 'Mirage 2000', 'Tejas LCA'],
      ans: 0,
      details: '4+ Generation Twin-seat Fighter • BrahMos Supersonic Missile • Thrust Vectoring'
    },
    {
      name: 'HAL Tejas LCA',
      img: '/assets/aircraft/tejas.svg',
      options: ['Tejas LCA Mk-1A', 'Rafale', 'MiG-21 Bison', 'Jaguar DARIN III'],
      ans: 0,
      details: 'Indigenous 4+ Gen Delta-Wing LCA • Uttam AESA Radar • Flying Daggers'
    }
  ];

  // -------------------------------------------------------------
  // 8. RANK RUSH (Arrange Ranks Lowest -> Highest)
  // -------------------------------------------------------------
  const IAF_RANKS_ORDER = [
    'Flying Officer',
    'Flight Lieutenant',
    'Squadron Leader',
    'Wing Commander',
    'Group Captain',
    'Air Commodore',
    'Air Vice Marshal',
    'Air Marshal',
    'Air Chief Marshal'
  ];
  const [scrambledRanks, setScrambledRanks] = useState<string[]>([]);
  const [selectedRankOrder, setSelectedRankOrder] = useState<string[]>([]);

  const initRankRush = () => {
    const subset = IAF_RANKS_ORDER.slice(0, 5); // 5 ranks to arrange
    const shuffled = [...subset].sort(() => Math.random() - 0.5);
    setScrambledRanks(shuffled);
    setSelectedRankOrder([]);
  };

  const handleRankPick = (rank: string) => {
    sound.playClick();
    const updatedChosen = [...selectedRankOrder, rank];
    setSelectedRankOrder(updatedChosen);
    setScrambledRanks(prev => prev.filter(r => r !== rank));

    if (updatedChosen.length === 5) {
      // Check if sorted according to IAF_RANKS_ORDER
      let isCorrect = true;
      for (let i = 0; i < updatedChosen.length - 1; i++) {
        if (IAF_RANKS_ORDER.indexOf(updatedChosen[i]) > IAF_RANKS_ORDER.indexOf(updatedChosen[i + 1])) {
          isCorrect = false;
          break;
        }
      }
      if (isCorrect) {
        sound.playCorrect();
        setScore(s => s + 25);
        setFeedback('Tactical Order Mastered! Perfect Officer Rank Progression.');
      } else {
        sound.playWrong();
        setFeedback('Incorrect order! Review the rank sequence from Flying Officer upwards.');
      }
    }
  };

  // -------------------------------------------------------------
  // 9. VOCABULARY DUEL (Instant revision memory flashcards)
  // -------------------------------------------------------------
  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabFlashcard, setVocabFlashcard] = useState<{ word: string; def: string; antonym: string; example: string } | null>(null);

  const VOCAB_QUESTIONS = [
    {
      word: 'ABATE',
      opts: ['Increase', 'Reduce / Subside', 'Destroy', 'Ignore'],
      ans: 1,
      def: 'To become less intense or widespread; subside or lessen.',
      antonym: 'Intensify, Aggravate',
      example: 'The cyclonic storm began to abate by morning.'
    },
    {
      word: 'CANDID',
      opts: ['Frank / Outspoken', 'Deceitful', 'Hesitant', 'Secretive'],
      ans: 0,
      def: 'Truthful, straightforward, and sincere in expression.',
      antonym: 'Guarded, Evasive, Disingenuous',
      example: 'The Flight Commander gave a candid assessment of the sortie.'
    },
    {
      word: 'EPHEMERAL',
      opts: ['Perpetual', 'Fleeting / Short-lived', 'Eternal', 'Substantial'],
      ans: 1,
      def: 'Lasting for a very brief time; transient.',
      antonym: 'Perpetual, Everlasting',
      example: 'Fame in dogfights is ephemeral without tactical discipline.'
    }
  ];

  // -------------------------------------------------------------
  // 10. SENTENCE BUILDER (Grammar & Sentence Rearrangement)
  // -------------------------------------------------------------
  const [sentenceTokens, setSentenceTokens] = useState<string[]>([]);
  const [constructedSentence, setConstructedSentence] = useState<string[]>([]);
  const [targetSentence, setTargetSentence] = useState('India is my proud country');

  const SENTENCE_TASKS = [
    { target: 'India is my proud country', words: ['proud', 'country', 'India', 'my', 'is'] },
    { target: 'The pilot flew through the storm safely', words: ['storm', 'safely', 'flew', 'The', 'pilot', 'through', 'the'] },
    { target: 'Neither candidate was found eligible for commission', words: ['for', 'candidate', 'Neither', 'found', 'was', 'commission', 'eligible'] }
  ];
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const initSentenceTask = (idx: number) => {
    const task = SENTENCE_TASKS[idx % SENTENCE_TASKS.length];
    setTargetSentence(task.target);
    setSentenceTokens([...task.words].sort(() => Math.random() - 0.5));
    setConstructedSentence([]);
    setFeedback(null);
  };

  const handleWordTap = (word: string) => {
    sound.playClick();
    const updatedConstructed = [...constructedSentence, word];
    setConstructedSentence(updatedConstructed);
    setSentenceTokens(prev => {
      const i = prev.indexOf(word);
      return prev.filter((_, idx) => idx !== i);
    });

    if (sentenceTokens.length === 1) {
      // Completed sentence check
      const finalStr = updatedConstructed.join(' ');
      if (finalStr === targetSentence) {
        sound.playCorrect();
        setScore(s => s + 20);
        setFeedback('Sentence Structurally Flawless! Correct Grammatical Syntax.');
      } else {
        sound.playWrong();
        setFeedback(`Syntax mismatch! Expected: "${targetSentence}"`);
      }
    }
  };

  // -------------------------------------------------------------
  // Timers: Scramble & Blitz
  // -------------------------------------------------------------
  useEffect(() => {
    if (activeGame === 'scramble' && scrambleTime > 0 && !gameOver) {
      const t = setInterval(() => setScrambleTime(prev => prev - 1), 1000);
      return () => clearInterval(t);
    } else if (activeGame === 'scramble' && scrambleTime <= 0) {
      setGameOver(true);
      onAddXP(Math.max(10, score * 3));
    }
  }, [activeGame, scrambleTime, gameOver, score, onAddXP]);

  useEffect(() => {
    if (activeGame === 'blitz' && blitzTimer > 0 && !gameOver) {
      const t = setInterval(() => setBlitzTimer(prev => prev - 1), 1000);
      return () => clearInterval(t);
    } else if (activeGame === 'blitz' && blitzTimer <= 0) {
      // Time up on blitz question
      sound.playWrong();
      setStreak(0);
      setFeedback('Time Expired! In AFCAT, speed determines whether you finish the paper.');
    }
  }, [activeGame, blitzTimer, gameOver]);

  // Start selected game
  const startGame = (game: GameMode) => {
    sound.playClick();
    setActiveGame(game);
    setScore(0);
    setStreak(0);
    setGameOver(false);
    setFeedback(null);

    if (game === 'scramble') {
      setScrambleTime(60);
      setAltitude(15000);
      setDistance(0);
      setScrambleQIndex(0);
    } else if (game === 'memory') {
      initMemoryGame();
    } else if (game === 'blitz') {
      setBlitzTimer(10);
      setBlitzQIndex(0);
    } else if (game === 'math_attack') {
      setMathStage('easy');
      generateMathAttack('easy');
    } else if (game === 'rank_rush') {
      initRankRush();
    } else if (game === 'sentence_builder') {
      initSentenceTask(0);
    }
  };

  // Exit game to menu
  const returnToMenu = () => {
    sound.playClick();
    setActiveGame('menu');
    setFeedback(null);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16 animate-fade-in text-white">
      {/* Top Header */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
              <Trophy className="w-3.5 h-3.5" />
              <span>AFCAT COMBAT SIMULATOR & SKILL ARENA</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Rajdhani'] tracking-tight">
              10 TACTICAL MISSION GAMES
            </h1>
            <p className="text-xs sm:text-sm text-white/60">
              Speed, visual recall, cipher decoding, and reflex calculations built strictly from authentic AFCAT curriculum.
            </p>
          </div>

          {activeGame !== 'menu' && (
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono text-white/40 block">Score</span>
                <span className="text-xl font-bold font-mono text-amber-300">{score} PTS</span>
              </div>
              <button
                onClick={returnToMenu}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold transition-colors"
              >
                Exit Game
              </button>
            </div>
          )}
        </div>
      </div>

      {/* GAME MENU: 10 DISTINCT TILES */}
      {activeGame === 'menu' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 1. Scramble */}
          <div
            onClick={() => startGame('scramble')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-sky-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-sky-400 font-mono">60-SEC SORTIE</span>
              <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                1. Scramble — Quick-fire MCQs
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Fly your aircraft: correct answers advance distance, wrong answers lose altitude!
              </p>
            </div>
          </div>

          {/* 2. Memory Squadron */}
          <div
            onClick={() => startGame('memory')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-indigo-400 font-mono">CARD MATCHING</span>
              <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                2. Memory Squadron
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Turn over cards to pair Articles (Art 32 ↔ Writs) and Operations (Meghdoot ↔ Siachen).
              </p>
            </div>
          </div>

          {/* 3. 10-Second Blitz */}
          <div
            onClick={() => startGame('blitz')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-400 font-mono">RAPID RECALL</span>
              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                3. 10-Second Blitz
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Intense 10-second countdown for Defence, Static GK, and Formula recognition.
              </p>
            </div>
          </div>

          {/* 4. Math Attack */}
          <div
            onClick={() => startGame('math_attack')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-400/50 hover:bg-rose-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Crosshair className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-rose-400 font-mono">TARGET SHOOTING</span>
              <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                4. Math Attack
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Solve calculations and shoot the right radar target! Easy → Medium → AFCAT → Hard.
              </p>
            </div>
          </div>

          {/* 5. Code Breaker */}
          <div
            onClick={() => startGame('code_breaker')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-purple-400 font-mono">CIPHER VAULT</span>
              <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                5. Code Breaker
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Reasoning letter-shifts and series patterns. Unlock stages in an animated mission vault.
              </p>
            </div>
          </div>

          {/* 6. India Explorer */}
          <div
            onClick={() => startGame('india_explorer')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400 font-mono">STRATEGIC MAPS</span>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                6. India Explorer
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Locate Air Command Headquarters (WAC, EAC, SWAC) and geographic strategic landmarks.
              </p>
            </div>
          </div>

          {/* 7. Air Force Identification */}
          <div
            onClick={() => startGame('air_identification')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-cyan-400 font-mono">RECON TAKEOFF</span>
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                7. Air Force Identification
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Identify Rafale, Sukhoi, Tejas, Mirage from imagery. Correct answers trigger takeoff!
              </p>
            </div>
          </div>

          {/* 8. Rank Rush */}
          <div
            onClick={() => startGame('rank_rush')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/50 hover:bg-yellow-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-yellow-400 font-mono">OFFICER HIERARCHY</span>
              <h3 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
                8. Rank Rush
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Ranks appear scrambled. Tap and arrange them in order from lowest to highest.
              </p>
            </div>
          </div>

          {/* 9. Vocabulary Duel */}
          <div
            onClick={() => startGame('vocab_duel')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-400/50 hover:bg-pink-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-pink-400 font-mono">VOCAB REVISION</span>
              <h3 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                9. Vocabulary Duel
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Choose the synonym; immediately unlocks full revision definitions and antonyms.
              </p>
            </div>
          </div>

          {/* 10. Sentence Builder */}
          <div
            onClick={() => startGame('sentence_builder')}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/50 hover:bg-teal-500/10 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-teal-400 font-mono">GRAMMAR SYNTAX</span>
              <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                10. Sentence Builder
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Rearrange scrambled words into grammatically impeccable military and formal sentences.
              </p>
            </div>
          </div>

          {/* 11. Boss Battle */}
          <div
            onClick={() => {
              sound.playClick();
              setActiveGame('boss_battle');
            }}
            className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/80 via-slate-900 to-fuchsia-950/60 border border-purple-500/40 hover:border-purple-400 hover:scale-[1.02] transition-all cursor-pointer group space-y-3 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/30 text-purple-300 flex items-center justify-center group-hover:scale-110 transition-transform border border-purple-400/40">
              <Swords className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-purple-400 font-mono">🧠 TOPIC GUARDIANS</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 font-mono font-bold">+300 XP</span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                <span>11. Boss Battle 🔥</span>
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Every major topic has a boss. 5 Hearts. Easy=1, Med=2, Hard=3 DMG. Slay the boss to claim Topic Mastered!
              </p>
            </div>
          </div>

          {/* 12. AFCAT Final Boss */}
          <div
            onClick={() => {
              sound.playClick();
              setActiveGame('afcat_final_boss');
            }}
            className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/80 via-slate-900 to-red-950/60 border border-amber-400/40 hover:border-amber-300 hover:scale-[1.02] transition-all cursor-pointer group space-y-3 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/30 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform border border-amber-400/40">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-amber-400 font-mono">👑 OPERATION: AFCAT</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-mono font-bold">AIR ACE</span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                12. AFCAT Final Boss
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Giant 5-stage multi-subject mission. English → Reasoning → Numerical → GA → Climax Mock. Complete to unlock Air Ace!
              </p>
            </div>
          </div>

          {/* 13. Daily Challenge */}
          <div
            onClick={() => {
              sound.playClick();
              setActiveGame('daily_sortie');
            }}
            className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/80 via-slate-900 to-yellow-950/60 border border-yellow-400/40 hover:border-yellow-300 hover:scale-[1.02] transition-all cursor-pointer group space-y-3 shadow-xl sm:col-span-2 lg:col-span-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/30 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform border border-amber-400/40">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-amber-400 font-mono">⚡ DAILY CHALLENGE</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono flex items-center gap-1">
                      <Flame className="w-3 h-3 fill-rose-400" />
                      <span>STREAK ACTIVE</span>
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    13. Daily Sortie
                  </h3>
                </div>
              </div>
              <div className="text-right hidden sm:block font-mono">
                <span className="text-xs font-bold text-amber-300 block">10 Qs • 5 Mins • 4 Subjects</span>
                <span className="text-[10px] text-white/50">+100 XP Daily Reward</span>
              </div>
            </div>
            <p className="text-xs text-white/60">
              Quick 5-minute daily operational check across English, Reasoning, Numerical Ability, and General Awareness.
            </p>
          </div>
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 1: SCRAMBLE
      -------------------------------------------------------- */}
      {activeGame === 'scramble' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          {/* Flight Telemetry Dashboard */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-center">
            <div>
              <span className="text-[10px] text-white/40 block">FLIGHT TIME</span>
              <span className="text-xl font-bold text-amber-400">{scrambleTime}s</span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 block">ALTITUDE</span>
              <span className={`text-xl font-bold ${altitude < 8000 ? 'text-rose-400 animate-pulse' : 'text-sky-300'}`}>
                {altitude} FT
              </span>
            </div>
            <div>
              <span className="text-[10px] text-white/40 block">DISTANCE GAINED</span>
              <span className="text-xl font-bold text-emerald-400">{distance} NM</span>
            </div>
          </div>

          {/* Aircraft Horizon Display */}
          <div className="relative h-28 rounded-xl bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 border border-white/10 overflow-hidden flex items-center px-6">
            <div 
              className="transition-all duration-500 flex items-center gap-2"
              style={{ transform: `translateX(${Math.min(distance * 4, 300)}px) translateY(${Math.max(-20, (15000 - altitude) / 500)}px)` }}
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/30 border border-sky-400 flex items-center justify-center text-sky-300 shadow-lg shadow-sky-500/20">
                <Plane className="w-6 h-6 transform rotate-45" />
              </div>
              <span className="text-xs font-mono text-sky-300 font-bold">SORTIE-1</span>
            </div>
          </div>

          {/* Current Question */}
          {!gameOver ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-sky-400">RAPID ENGAGEMENT</span>
                <h3 className="text-base font-bold text-white mt-1">
                  {SCRAMBLE_QUESTIONS[scrambleQIndex % SCRAMBLE_QUESTIONS.length].q}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCRAMBLE_QUESTIONS[scrambleQIndex % SCRAMBLE_QUESTIONS.length].opts.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const cur = SCRAMBLE_QUESTIONS[scrambleQIndex % SCRAMBLE_QUESTIONS.length];
                      if (idx === cur.ans) {
                        sound.playCorrect();
                        setScore(s => s + 10);
                        setDistance(d => d + 25);
                        setAltitude(a => Math.min(35000, a + 2000));
                      } else {
                        sound.playWrong();
                        setAltitude(a => Math.max(1000, a - 4000));
                      }
                      setScrambleQIndex(i => i + 1);
                    }}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-400 text-left text-xs font-semibold transition-all"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <Trophy className="w-12 h-12 text-amber-400 mx-auto" />
              <h2 className="text-xl font-bold font-['Rajdhani']">SORTIE COMPLETED!</h2>
              <p className="text-sm text-white/60">
                Total Score: <span className="font-bold text-amber-300 font-mono">{score}</span> • Final Distance: <span className="font-bold text-emerald-400 font-mono">{distance} NM</span>
              </p>
              <button
                onClick={() => startGame('scramble')}
                className="px-6 py-2.5 rounded-xl bg-sky-500 text-white font-bold text-xs"
              >
                Fly Again
              </button>
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 2: MEMORY SQUADRON
      -------------------------------------------------------- */}
      {activeGame === 'memory' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-bold font-['Rajdhani'] text-indigo-300">MEMORY SQUADRON</h2>
              <p className="text-xs text-white/50">Turn over 2 matching cards (Articles, Operations, Missiles)</p>
            </div>
            <button
              onClick={initMemoryGame}
              className="p-2 rounded-xl bg-white/10 text-xs flex items-center gap-1.5 hover:bg-white/20"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reshuffle</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {memoryCards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`h-28 p-3 rounded-xl border flex items-center justify-center text-center text-xs font-semibold cursor-pointer transition-all transform duration-300 ${
                  card.isMatched
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                    : card.isFlipped
                    ? 'bg-indigo-500/30 border-indigo-400 text-white'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/40'
                }`}
              >
                {card.isFlipped || card.isMatched ? (
                  <span className="leading-snug">{card.text}</span>
                ) : (
                  <Brain className="w-6 h-6 text-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 3: 10-SECOND BLITZ
      -------------------------------------------------------- */}
      {activeGame === 'blitz' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-bold font-['Rajdhani'] text-amber-300">10-SECOND RAPID BLITZ</h2>
              <p className="text-xs text-white/50">Rapid-fire memory retrieval. Beat the ticking clock!</p>
            </div>
            <div className={`text-2xl font-extrabold font-mono px-3 py-1 rounded-xl ${blitzTimer <= 3 ? 'bg-rose-500 text-white animate-pulse' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}`}>
              {blitzTimer}s
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] text-amber-400 font-mono font-bold">BLITZ QUESTION</span>
            <h3 className="text-base font-bold text-white">
              {BLITZ_QUESTIONS[blitzQIndex % BLITZ_QUESTIONS.length].q}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BLITZ_QUESTIONS[blitzQIndex % BLITZ_QUESTIONS.length].opts.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const cur = BLITZ_QUESTIONS[blitzQIndex % BLITZ_QUESTIONS.length];
                  if (idx === cur.ans) {
                    sound.playCorrect();
                    setScore(s => s + 15);
                    setStreak(st => st + 1);
                    setFeedback('Lightning Fast & Correct!');
                  } else {
                    sound.playWrong();
                    setStreak(0);
                    setFeedback('Incorrect choice! Review rapid recall flashcards.');
                  }
                  setBlitzTimer(10);
                  setBlitzQIndex(i => i + 1);
                }}
                className="p-3.5 rounded-xl bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-400 text-left text-xs font-semibold transition-all"
              >
                {opt}
              </button>
            ))}
          </div>

          {feedback && (
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-amber-300 text-center font-semibold animate-fade-in">
              {feedback}
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 4: MATH ATTACK
      -------------------------------------------------------- */}
      {activeGame === 'math_attack' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-bold font-['Rajdhani'] text-rose-300">MATH ATTACK TARGET RADAR</h2>
              <p className="text-xs text-white/50">Current Tier: <span className="uppercase font-bold text-rose-400 font-mono">{mathStage}</span></p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono">
              Streak: {streak}x
            </span>
          </div>

          <div className="p-6 rounded-xl bg-black/40 border border-white/10 text-center space-y-2">
            <span className="text-xs uppercase font-mono text-rose-400 font-bold">RADAR INTERCEPT CALCULATION</span>
            <div className="text-2xl font-bold font-mono text-white">
              {mathProblem.q}
            </div>
          </div>

          {/* 4 Radar Targets */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {mathProblem.targets.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleShootTarget(choice)}
                className="p-6 rounded-2xl bg-white/5 border-2 border-dashed border-white/20 hover:border-rose-400 hover:bg-rose-500/20 flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <Crosshair className="w-6 h-6 text-rose-400 group-hover:scale-125 transition-transform" />
                <span className="text-xl font-bold font-mono text-white">{choice}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 5: CODE BREAKER
      -------------------------------------------------------- */}
      {activeGame === 'code_breaker' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-bold font-['Rajdhani'] text-purple-300">CODE BREAKER VAULT</h2>
              <p className="text-xs text-white/50">Stage {cipherStage + 1} of {CIPHER_QUESTIONS.length}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e172a] border border-purple-500/30 text-center space-y-3 font-mono">
            <div className="text-xs text-purple-300 uppercase tracking-widest">CIPHER CIPHER ENCRYPTION PATTERN</div>
            <div className="text-xl font-bold text-white whitespace-pre-line leading-relaxed">
              {CIPHER_QUESTIONS[cipherStage % CIPHER_QUESTIONS.length].prompt}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {CIPHER_QUESTIONS[cipherStage % CIPHER_QUESTIONS.length].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const cur = CIPHER_QUESTIONS[cipherStage % CIPHER_QUESTIONS.length];
                  if (idx === cur.ans) {
                    sound.playCorrect();
                    setScore(s => s + 20);
                    setFeedback('Access Granted! Vault Door Unlocked.');
                    setCipherStage(s => (s + 1) % CIPHER_QUESTIONS.length);
                  } else {
                    sound.playWrong();
                    setFeedback('Alarm Triggered! Pattern mismatch.');
                  }
                }}
                className="p-4 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-400 font-mono text-center font-bold text-sm transition-all"
              >
                {opt}
              </button>
            ))}
          </div>

          {feedback && (
            <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 text-center font-semibold animate-fade-in">
              {feedback}
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 6: INDIA EXPLORER
      -------------------------------------------------------- */}
      {activeGame === 'india_explorer' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-bold font-['Rajdhani'] text-emerald-300">INDIA EXPLORER STRATEGIC RECON</h2>
              <p className="text-xs text-white/50">Geographic command bases, passes, and borders</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold">MISSION TARGET</span>
            <h3 className="text-base font-bold text-white">
              {EXPLORER_QUESTIONS[explorerQIndex % EXPLORER_QUESTIONS.length].q}
            </h3>
            <p className="text-xs text-white/50 italic">
              Hint: {EXPLORER_QUESTIONS[explorerQIndex % EXPLORER_QUESTIONS.length].hint}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EXPLORER_QUESTIONS[explorerQIndex % EXPLORER_QUESTIONS.length].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const cur = EXPLORER_QUESTIONS[explorerQIndex % EXPLORER_QUESTIONS.length];
                  if (idx === cur.ans) {
                    sound.playCorrect();
                    setScore(s => s + 15);
                    setFeedback('Target Coordinates Verified!');
                  } else {
                    sound.playWrong();
                    setFeedback('Incorrect location Coordinates!');
                  }
                  setExplorerQIndex(i => (i + 1) % EXPLORER_QUESTIONS.length);
                }}
                className="p-3.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400 text-left text-xs font-semibold transition-all flex items-center gap-2.5"
              >
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{opt}</span>
              </button>
            ))}
          </div>

          {feedback && (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200 text-center font-semibold animate-fade-in">
              {feedback}
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 7: AIR FORCE IDENTIFICATION
      -------------------------------------------------------- */}
      {activeGame === 'air_identification' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-bold font-['Rajdhani'] text-cyan-300">AIR FORCE IDENTIFICATION & TAKEOFF</h2>
              <p className="text-xs text-white/50">Identify the silhouette and technical parameters</p>
            </div>
          </div>

          {/* Aircraft Silhouette / Visual */}
          <div className="relative h-60 rounded-xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center">
            <img
              src={IDENT_QUESTIONS[identQIndex % IDENT_QUESTIONS.length].img}
              alt="Recon Aircraft"
              className={`w-full h-full object-cover transition-transform duration-700 ${tookOff ? '-translate-y-40 scale-75 opacity-20' : 'scale-100'}`}
              referrerPolicy="no-referrer"
            />
            {tookOff && (
              <div className="absolute inset-0 flex items-center justify-center font-['Rajdhani'] font-extrabold text-2xl text-cyan-300 animate-pulse">
                ✈️ AIRCRAFT SCRAMBLED & AIRBORNE!
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {IDENT_QUESTIONS[identQIndex % IDENT_QUESTIONS.length].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const cur = IDENT_QUESTIONS[identQIndex % IDENT_QUESTIONS.length];
                  if (idx === cur.ans) {
                    sound.playCorrect();
                    setScore(s => s + 20);
                    setTookOff(true);
                    setFeedback(cur.details);
                    setTimeout(() => {
                      setTookOff(false);
                      setIdentQIndex(i => (i + 1) % IDENT_QUESTIONS.length);
                      setFeedback(null);
                    }, 2500);
                  } else {
                    sound.playWrong();
                    setFeedback('Target Identification Error!');
                  }
                }}
                className="p-3.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400 text-left text-xs font-semibold transition-all"
              >
                {opt}
              </button>
            ))}
          </div>

          {feedback && (
            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 text-center font-mono animate-fade-in">
              {feedback}
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 8: RANK RUSH
      -------------------------------------------------------- */}
      {activeGame === 'rank_rush' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-bold font-['Rajdhani'] text-yellow-300">RANK RUSH: OFFICER PROGRESSION</h2>
              <p className="text-xs text-white/50">Tap ranks in order from LOWEST to HIGHEST</p>
            </div>
            <button
              onClick={initRankRush}
              className="p-2 rounded-xl bg-white/10 text-xs hover:bg-white/20"
            >
              Reset Tiles
            </button>
          </div>

          {/* Chosen sequence */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 min-h-[60px] flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/40 mr-2">Your Order:</span>
            {selectedRankOrder.map((r, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold flex items-center gap-1.5">
                <span>{idx + 1}.</span> {r}
              </span>
            ))}
          </div>

          {/* Available scrambled ranks */}
          <div className="flex flex-wrap gap-2.5">
            {scrambledRanks.map((r, idx) => (
              <button
                key={idx}
                onClick={() => handleRankPick(r)}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-yellow-500/20 border border-white/10 hover:border-yellow-400 text-xs font-semibold text-white transition-all active:scale-95"
              >
                {r}
              </button>
            ))}
          </div>

          {feedback && (
            <div className="p-3.5 rounded-xl bg-yellow-950/40 border border-yellow-500/30 text-xs text-yellow-200 text-center font-semibold animate-fade-in">
              {feedback}
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 9: VOCABULARY DUEL
      -------------------------------------------------------- */}
      {activeGame === 'vocab_duel' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-bold font-['Rajdhani'] text-pink-300">VOCABULARY DUEL & FLASH REVISION</h2>
              <p className="text-xs text-white/50">Word recognition with instant memory reinforcement</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e172a] border border-pink-500/30 text-center space-y-2">
            <span className="text-xs font-mono text-pink-400 uppercase tracking-widest">TARGET VOCABULARY</span>
            <div className="text-3xl font-extrabold font-['Rajdhani'] text-white">
              {VOCAB_QUESTIONS[vocabIndex % VOCAB_QUESTIONS.length].word}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {VOCAB_QUESTIONS[vocabIndex % VOCAB_QUESTIONS.length].opts.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const cur = VOCAB_QUESTIONS[vocabIndex % VOCAB_QUESTIONS.length];
                  if (idx === cur.ans) {
                    sound.playCorrect();
                    setScore(s => s + 15);
                  } else {
                    sound.playWrong();
                  }
                  setVocabFlashcard({
                    word: cur.word,
                    def: cur.def,
                    antonym: cur.antonym,
                    example: cur.example
                  });
                }}
                className="p-3.5 rounded-xl bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-400 text-xs font-semibold transition-all text-center"
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Instant Revision Card */}
          {vocabFlashcard && (
            <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-500/40 space-y-2 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-pink-300 uppercase font-mono">
                  📖 {vocabFlashcard.word} = {vocabFlashcard.def}
                </span>
                <button
                  onClick={() => {
                    sound.playClick();
                    setVocabFlashcard(null);
                    setVocabIndex(i => (i + 1) % VOCAB_QUESTIONS.length);
                  }}
                  className="px-3 py-1 rounded bg-pink-500 text-white font-bold text-xs"
                >
                  Next Word →
                </button>
              </div>
              <div className="text-xs text-white/70">
                <span className="font-semibold text-white">Antonym:</span> {vocabFlashcard.antonym}
              </div>
              <div className="text-xs text-white/50 italic">
                "{vocabFlashcard.example}"
              </div>
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 10: SENTENCE BUILDER
      -------------------------------------------------------- */}
      {activeGame === 'sentence_builder' && (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg font-bold font-['Rajdhani'] text-teal-300">SENTENCE BUILDER & SYNTAX CONSTRUCTOR</h2>
              <p className="text-xs text-white/50">Tap tokens in grammatically correct sequence</p>
            </div>
            <button
              onClick={() => initSentenceTask(sentenceIndex)}
              className="p-2 rounded-xl bg-white/10 text-xs hover:bg-white/20"
            >
              Reset Words
            </button>
          </div>

          {/* Constructed Sentence Box */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 min-h-[60px] flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/40 mr-1">Sentence:</span>
            {constructedSentence.map((w, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-teal-500/20 border border-teal-400/40 text-teal-200 text-xs font-semibold">
                {w}
              </span>
            ))}
          </div>

          {/* Token Pool */}
          <div className="flex flex-wrap gap-2.5">
            {sentenceTokens.map((w, idx) => (
              <button
                key={idx}
                onClick={() => handleWordTap(w)}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-teal-500/20 border border-white/10 hover:border-teal-400 text-xs font-semibold text-white transition-all active:scale-95"
              >
                {w}
              </button>
            ))}
          </div>

          {feedback && (
            <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs text-teal-200 text-center font-semibold flex items-center justify-between animate-fade-in">
              <span>{feedback}</span>
              <button
                onClick={() => {
                  sound.playClick();
                  setSentenceIndex(i => i + 1);
                  initSentenceTask(sentenceIndex + 1);
                }}
                className="px-3 py-1 rounded bg-teal-500 text-white font-bold text-xs"
              >
                Next Task →
              </button>
            </div>
          )}
        </div>
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 11: BOSS BATTLE
      -------------------------------------------------------- */}
      {activeGame === 'boss_battle' && (
        <BossBattleGame
          onBack={() => setActiveGame('menu')}
          onAddXP={onAddXP}
        />
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 12: AFCAT FINAL BOSS
      -------------------------------------------------------- */}
      {activeGame === 'afcat_final_boss' && (
        <AfcatFinalBossGame
          onBack={() => setActiveGame('menu')}
          onAddXP={onAddXP}
        />
      )}

      {/* --------------------------------------------------------
          ACTIVE GAME 13: DAILY SORTIE
      -------------------------------------------------------- */}
      {activeGame === 'daily_sortie' && (
        <DailySortieGame
          onBack={() => setActiveGame('menu')}
          onAddXP={onAddXP}
          currentStreak={12}
          bestScore={9}
        />
      )}
    </div>
  );
};
