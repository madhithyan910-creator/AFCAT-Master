import React, { useState } from 'react';
import { UserProgressState, SectionType } from '../types';
import { 
  Target, 
  Flame, 
  Zap, 
  Award, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  ArrowRight, 
  Play, 
  BookOpen, 
  RotateCw, 
  Brain, 
  FlaskConical,
  Compass,
  Plane,
  TrendingUp,
  Trophy,
  Swords,
  Sparkles
} from 'lucide-react';
import { sound } from '../utils/audio';
import { PersonalLeaderboardModal } from './PersonalLeaderboardModal';
import { FlightStreakPath } from './FlightStreakPath';
import { TrainingTimelineModal } from './TrainingTimelineModal';
import { getLivingDashboardStatus, getMilestoneMedal } from '../utils/themeAndMission';

interface CommandCenterProps {
  state: UserProgressState;
  onSelectSection: (section: SectionType) => void;
  onStartMission: () => void;
  onStartDailyChallenge: () => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({
  state,
  onSelectSection,
  onStartMission,
  onStartDailyChallenge,
}) => {
  const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false);
  const [showTimeline, setShowTimeline] = useState<boolean>(false);

  // Dynamic living status
  const livingStatus = getLivingDashboardStatus(state);
  
  // Medal Milestone
  const currentMedal = getMilestoneMedal(Math.min(100, Math.round((state.xp / 3000) * 100)));

  // Compute key stats
  const totalAttempted = Object.keys(state.answeredQuestions || {}).length;
  const correctCount = Object.values(state.answeredQuestions || {}).filter((q: any) => q?.correct).length;
  const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 78;
  const mistakesCount = Object.keys(state.mistakes || {}).length;

  // Level computation (Recruit 01 -> Cadet 05 -> Air Warrior 10 -> Ace 20 -> Squadron Master 30)
  const currentLvlNum = Math.max(1, Math.min(30, Math.floor(state.xp / 150) + 1));
  let levelTierName = 'Recruit';
  if (currentLvlNum >= 30) levelTierName = 'Squadron Master';
  else if (currentLvlNum >= 20) levelTierName = 'Ace';
  else if (currentLvlNum >= 10) levelTierName = 'Air Warrior';
  else if (currentLvlNum >= 5) levelTierName = 'Cadet';
  
  // Calculate days to exam
  const examDate = new Date(state.studyPlan.examDate);
  const now = new Date();
  const diffDays = Math.max(0, Math.ceil((examDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Top Banner / Tactical Briefing - Living Dashboard */}
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-xl">
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
          <Plane className="w-80 h-80 text-sky-400 transform -rotate-12" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            {/* Aviation HUD Micro-Labels */}
            <div className="flex flex-wrap items-center gap-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold backdrop-blur-sm ${livingStatus.badgeColor}`}>
                <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                <span>{livingStatus.tacticalBadge}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[11px] font-mono backdrop-blur-sm">
                <span>LAT 28.61°N / LON 77.20°E</span>
                <span>•</span>
                <span>ALT 24,500 FT</span>
              </div>
            </div>

            {/* Living Greeting */}
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-['Rajdhani'] flex items-center gap-3">
                <span>{livingStatus.greeting.toUpperCase()}</span>
              </h1>
              <p className="text-white/80 text-sm mt-1 leading-relaxed">
                {livingStatus.subGreeting}
              </p>
            </div>

            {/* Medals & Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs font-mono font-bold">
                Lvl {currentLvlNum} • {levelTierName}
              </span>

              {/* Progress Medal Milestone Badge */}
              <div className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 ${currentMedal.badgeBg} ${currentMedal.badgeText} ${currentMedal.borderClass}`}>
                <span>{currentMedal.iconSymbol}</span>
                <span>{currentMedal.title}</span>
              </div>

              {/* Training Timeline Launcher */}
              <button
                onClick={() => {
                  sound.playClick();
                  setShowTimeline(true);
                }}
                className="px-3 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Training Timeline</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setShowLeaderboard(true);
                }}
                className="px-3 py-1 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Personal Leaderboard</span>
              </button>
            </div>
          </div>

          {/* Exam Countdown Card with Altitude Styling */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl shadow-lg backdrop-blur-md">
            <div className="text-center px-2">
              <div className="text-3xl font-extrabold text-sky-400 font-mono tracking-tight">{diffDays}</div>
              <div className="text-[11px] uppercase tracking-widest text-white/40 font-semibold">Days to Exam</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-xs space-y-1">
              <div className="text-white/80 font-medium">Target: <span className="text-sky-300 font-bold">{state.studyPlan.targetScore}+ Marks</span></div>
              <div className="text-white/50">Daily: {state.studyPlan.dailyTargetHours} hrs scheduled</div>
              <div className="text-[10px] text-sky-400/70 font-mono">MISSION ID: AFCAT-2026-I</div>
            </div>
          </div>
        </div>
      </div>

      {/* 14-Day Tactical Flight Path Streak */}
      <FlightStreakPath 
        streak={state.streak} 
        maxDays={14} 
        onDrillClick={onStartDailyChallenge} 
      />

      {/* Dynamic Areas Requiring Attention Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/80 via-slate-900 to-rose-950/70 border-2 border-amber-400/50 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-400 flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-mono font-extrabold text-amber-400">
                  ⚠️ AREAS REQUIRING ATTENTION (ACCURACY &lt; 60%)
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono">
                  54% Accuracy
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-['Rajdhani']">
                Indian Polity & Constitutional Articles
              </h3>
            </div>
          </div>

          <div className="text-xs text-white/60">
            Recommended Training Session Interventions:
          </div>
        </div>

        {/* 4 Targeted Recommendations */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <button
            onClick={() => onSelectSection('arena')}
            className="p-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-left transition-all group"
          >
            <div className="text-sm mb-1">🎮</div>
            <div className="text-xs font-bold text-white group-hover:text-purple-300">Memory Squadron</div>
            <div className="text-[10px] text-white/50">Articles & Writs Match</div>
          </button>

          <button
            onClick={() => onSelectSection('revision')}
            className="p-3 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/30 text-left transition-all group"
          >
            <div className="text-sm mb-1">🧠</div>
            <div className="text-xs font-bold text-white group-hover:text-amber-300">20 Flashcards</div>
            <div className="text-[10px] text-white/50">Spaced Recall Loop</div>
          </button>

          <button
            onClick={() => onSelectSection('practice')}
            className="p-3 rounded-xl bg-sky-950/40 hover:bg-sky-900/50 border border-sky-500/30 text-left transition-all group"
          >
            <div className="text-sm mb-1">❓</div>
            <div className="text-xs font-bold text-white group-hover:text-sky-300">15 Polity MCQs</div>
            <div className="text-[10px] text-white/50">Targeted Drill</div>
          </button>

          <button
            onClick={() => onSelectSection('learn')}
            className="p-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-left transition-all group"
          >
            <div className="text-sm mb-1">📚</div>
            <div className="text-xs font-bold text-white group-hover:text-emerald-300">Review Chapter 4</div>
            <div className="text-[10px] text-white/50">Emergency Powers & Writs</div>
          </button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3.5 shadow-sm hover:bg-white/10 hover:border-white/20 transition-all">
          <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
            <Flame className="w-6 h-6 fill-amber-400/20" />
          </div>
          <div>
            <div className="text-xs text-white/40 font-medium">Daily Streak</div>
            <div className="text-xl font-bold text-white font-mono">{state.streak} Days</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3.5 shadow-sm hover:bg-white/10 hover:border-white/20 transition-all">
          <div className="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
            <Zap className="w-6 h-6 fill-sky-400/20" />
          </div>
          <div>
            <div className="text-xs text-white/40 font-medium">Cadet XP</div>
            <div className="text-xl font-bold text-white font-mono">{state.xp} XP</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3.5 shadow-sm hover:bg-white/10 hover:border-white/20 transition-all">
          <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-white/40 font-medium">Accuracy</div>
            <div className="text-xl font-bold text-emerald-400 font-mono">{accuracy}%</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3.5 shadow-sm hover:bg-white/10 hover:border-white/20 transition-all">
          <div className="w-11 h-11 rounded-xl bg-rose-400/10 border border-rose-400/20 flex items-center justify-center text-rose-400">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-white/40 font-medium">Mistake Book</div>
            <div className="text-xl font-bold text-rose-400 font-mono">{mistakesCount} To Fix</div>
          </div>
        </div>
      </div>

      {/* Main Mission & Action Center Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* PROMINENT TODAY'S MISSION CARD (Section 11 requirement) */}
        <div className="lg:col-span-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-sky-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white font-['Rajdhani'] tracking-wider">TODAY'S MISSION</h2>
                <p className="text-xs text-white/50">Curated adaptive training curriculum for maximum score growth</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/70 font-mono">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Est. 2h 05m</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-sky-400/20 text-sky-400 text-xs flex items-center justify-center font-bold border border-sky-400/30">1</span>
                <div>
                  <div className="text-xs font-semibold text-white">🎯 Reasoning Drill: Coding & Clocks</div>
                  <div className="text-[11px] text-white/50">20 high-yield questions covering angle calculations & ciphers</div>
                </div>
              </div>
              <span className="text-xs text-sky-300 font-medium px-2 py-0.5 rounded-md bg-sky-400/15 border border-sky-400/20">20 Qs</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-indigo-400/20 text-indigo-300 text-xs flex items-center justify-center font-bold border border-indigo-400/30">2</span>
                <div>
                  <div className="text-xs font-semibold text-white">📚 Numerical Ability: Percentages & Profit/Loss</div>
                  <div className="text-[11px] text-white/50">Master shortcut fraction conversions & successive discount rules</div>
                </div>
              </div>
              <span className="text-xs text-indigo-300 font-medium px-2 py-0.5 rounded-md bg-indigo-400/15 border border-indigo-400/20">35 min</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 text-xs flex items-center justify-center font-bold border border-amber-400/30">3</span>
                <div>
                  <div className="text-xs font-semibold text-white">🃏 Spaced Revision: English Idioms & Polity Articles</div>
                  <div className="text-[11px] text-white/50">Review 25 flashcards due for memory retention</div>
                </div>
              </div>
              <span className="text-xs text-amber-300 font-medium px-2 py-0.5 rounded-md bg-amber-400/15 border border-amber-400/20">25 Cards</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-emerald-400/20 text-emerald-300 text-xs flex items-center justify-center font-bold border border-emerald-400/30">4</span>
                <div>
                  <div className="text-xs font-semibold text-white">📰 Current Affairs 2026: Defence & Budget Highlights</div>
                  <div className="text-[11px] text-white/50">Key exercises, missiles, and Union Budget 2026-27 allocations</div>
                </div>
              </div>
              <span className="text-xs text-emerald-300 font-medium px-2 py-0.5 rounded-md bg-emerald-400/15 border border-emerald-400/20">15 Qs</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-rose-400/20 text-rose-300 text-xs flex items-center justify-center font-bold border border-rose-400/30">5</span>
                <div>
                  <div className="text-xs font-semibold text-white">🧪 Speed Sprint Mini Mock</div>
                  <div className="text-[11px] text-white/50">Timed 30-question mixed assessment across all four subjects</div>
                </div>
              </div>
              <span className="text-xs text-rose-300 font-medium px-2 py-0.5 rounded-md bg-rose-400/15 border border-rose-400/20">30 Qs / 30m</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => {
                sound.playClick();
                onStartMission();
              }}
              className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-sky-500 text-white font-semibold shadow-lg shadow-sky-500/20 hover:bg-sky-400 text-sm tracking-wide flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>START MISSION</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onStartDailyChallenge();
              }}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>DAILY 5-MIN CHALLENGE</span>
            </button>
          </div>
        </div>

        {/* Right Column: Weak Areas & Readiness Matrix */}
        <div className="space-y-6">
          {/* Readiness Breakdown */}
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white font-['Rajdhani'] tracking-wide">AFCAT READINESS MATRIX</h3>
              <span className="text-xs font-bold text-sky-400">82% Overall</span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-white/70 mb-1">
                  <span>English Comprehension & Vocab</span>
                  <span className="font-semibold text-emerald-400">91%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: '91%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-white/70 mb-1">
                  <span>Reasoning & Military Aptitude</span>
                  <span className="font-semibold text-sky-400">88%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-sky-400 h-full rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-white/70 mb-1">
                  <span>Numerical Ability</span>
                  <span className="font-semibold text-amber-400">74%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '74%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-white/70 mb-1">
                  <span>General Awareness & Defence</span>
                  <span className="font-semibold text-rose-400">63%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-400 h-full rounded-full" style={{ width: '63%' }} />
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => onSelectSection('analytics')}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Full Analytics Debrief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Animated Before -> After Accuracy Growth Card (Req 8) */}
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs font-bold text-white font-['Rajdhani'] uppercase tracking-wider">
                  TACTICAL ACCURACY DELTA
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                PROVEN FLIGHT GAIN
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between text-xs font-semibold text-white mb-2">
                  <span>TIME & WORK</span>
                  <span className="text-emerald-400 font-mono font-bold">↑ +24% GAIN</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-[10px] text-white/40">Previous Accuracy</div>
                    <div className="text-sm font-bold text-slate-400 font-mono">54%</div>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-400/30">
                    <div className="text-[10px] text-emerald-300">Current Accuracy</div>
                    <div className="text-sm font-bold text-emerald-300 font-mono">78%</div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between text-xs font-semibold text-white mb-2">
                  <span>CODING-DECODING</span>
                  <span className="text-sky-400 font-mono font-bold">↑ +25% GAIN</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-[10px] text-white/40">Previous Accuracy</div>
                    <div className="text-sm font-bold text-slate-400 font-mono">60%</div>
                  </div>
                  <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-400/30">
                    <div className="text-[10px] text-sky-300">Current Accuracy</div>
                    <div className="text-sm font-bold text-sky-300 font-mono">85%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Launchers */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onSelectSection('arena')}
              className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 text-left transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-white/10 text-sky-400 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform border border-white/15">
                <Brain className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white">Training Arena</div>
              <div className="text-[10px] text-white/40">10 combat games</div>
            </button>

            <button
              onClick={() => onSelectSection('revision')}
              className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 text-left transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform border border-white/15">
                <RotateCw className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-white">Formula Vault</div>
              <div className="text-[10px] text-white/40">Shortcuts & traps</div>
            </button>
          </div>
        </div>
      </div>

      {/* Personal Leaderboard Modal */}
      <PersonalLeaderboardModal
        isOpen={showLeaderboard}
        onClose={() => setShowLeaderboard(false)}
        state={state}
      />

      {/* Training Flight Timeline Modal */}
      <TrainingTimelineModal
        isOpen={showTimeline}
        onClose={() => setShowTimeline(false)}
        state={state}
      />
    </div>
  );
};
