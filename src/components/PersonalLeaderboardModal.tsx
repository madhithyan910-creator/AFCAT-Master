import React from 'react';
import { 
  Trophy, 
  Flame, 
  Zap, 
  Clock, 
  Target, 
  Award, 
  X, 
  CheckCircle2, 
  Sparkles,
  Shield,
  Star
} from 'lucide-react';
import { UserProgressState } from '../types';

interface PersonalLeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: UserProgressState;
}

export const PersonalLeaderboardModal: React.FC<PersonalLeaderboardModalProps> = ({
  isOpen,
  onClose,
  state
}) => {
  if (!isOpen) return null;

  // Compute stats
  const totalAttempted = Object.keys(state.answeredQuestions || {}).length;
  const correctCount = Object.values(state.answeredQuestions || {}).filter((q: any) => q?.correct).length;
  const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 84;

  const currentLevelNumber = Math.max(1, Math.min(30, Math.floor(state.xp / 150) + 1));

  // Determine game rank title
  let rankTitle = 'Recruit';
  let rankBadge = '🥉';
  let nextRankTitle = 'Cadet (Lvl 05)';
  let nextRankReq = 750;

  if (currentLevelNumber >= 30) {
    rankTitle = 'Squadron Master';
    rankBadge = '👑';
    nextRankTitle = 'Max Rank Achieved';
    nextRankReq = 4500;
  } else if (currentLevelNumber >= 20) {
    rankTitle = 'Ace';
    rankBadge = '🏆';
    nextRankTitle = 'Squadron Master (Lvl 30)';
    nextRankReq = 4500;
  } else if (currentLevelNumber >= 10) {
    rankTitle = 'Air Warrior';
    rankBadge = '🎖️';
    nextRankTitle = 'Ace (Lvl 20)';
    nextRankReq = 3000;
  } else if (currentLevelNumber >= 5) {
    rankTitle = 'Cadet';
    rankBadge = '🥈';
    nextRankTitle = 'Air Warrior (Lvl 10)';
    nextRankReq = 1500;
  }

  const xpProgress = Math.min(100, Math.round((state.xp / nextRankReq) * 100));

  const XP_ACTIVITIES = [
    { act: 'Read topic', xp: '+10 XP', icon: '📖' },
    { act: 'Complete lesson', xp: '+25 XP', icon: '🎯' },
    { act: '10 MCQs completed', xp: '+20 XP', icon: '❓' },
    { act: 'Perfect quiz (100%)', xp: '+50 XP', icon: '⭐' },
    { act: 'Daily Sortie challenge', xp: '+100 XP', icon: '⚡' },
    { act: 'Full Mock test', xp: '+150 XP', icon: '🧪' },
    { act: '7-day active streak', xp: '+250 XP', icon: '🔥' },
    { act: 'Topic Boss defeated', xp: '+300 XP', icon: '👾' },
  ];

  const LEVELS_TREE = [
    { lvl: 'Level 01', name: 'Recruit', req: '0 XP', current: currentLevelNumber >= 1 && currentLevelNumber < 5 },
    { lvl: 'Level 05', name: 'Cadet', req: '750 XP', current: currentLevelNumber >= 5 && currentLevelNumber < 10 },
    { lvl: 'Level 10', name: 'Air Warrior', req: '1,500 XP', current: currentLevelNumber >= 10 && currentLevelNumber < 20 },
    { lvl: 'Level 20', name: 'Ace', req: '3,000 XP', current: currentLevelNumber >= 20 && currentLevelNumber < 30 },
    { lvl: 'Level 30', name: 'Squadron Master', req: '4,500 XP', current: currentLevelNumber >= 30 }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-amber-400/40 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-2xl">
            🏆
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              CADET VALHALLA & PROGRESSION
            </div>
            <h2 className="text-2xl font-extrabold text-white font-['Rajdhani'] tracking-wide">
              PERSONAL LEADERBOARD
            </h2>
          </div>
        </div>

        {/* 1. Top 5 Key Tracked Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-[10px] uppercase font-mono text-white/50 flex items-center gap-1">
              <Trophy className="w-3 h-3 text-amber-400" />
              <span>BEST SCORE</span>
            </div>
            <div className="text-xl font-bold text-amber-400 font-mono mt-1">98 / 100</div>
            <div className="text-[10px] text-white/40">Mock Test #4</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-[10px] uppercase font-mono text-white/50 flex items-center gap-1">
              <Flame className="w-3 h-3 text-rose-400" />
              <span>HIGHEST STREAK</span>
            </div>
            <div className="text-xl font-bold text-rose-400 font-mono mt-1">{Math.max(14, state.streak)} Days</div>
            <div className="text-[10px] text-white/40">Active unbroken</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-[10px] uppercase font-mono text-white/50 flex items-center gap-1">
              <Clock className="w-3 h-3 text-sky-400" />
              <span>FASTEST RUN</span>
            </div>
            <div className="text-xl font-bold text-sky-400 font-mono mt-1">3m 42s</div>
            <div className="text-[10px] text-white/40">10-Q Blitz Sortie</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-[10px] uppercase font-mono text-white/50 flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-300" />
              <span>TOTAL XP</span>
            </div>
            <div className="text-xl font-bold text-white font-mono mt-1">{state.xp} XP</div>
            <div className="text-[10px] text-white/40">Earned across apps</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 sm:col-span-2">
            <div className="text-[10px] uppercase font-mono text-white/50 flex items-center gap-1">
              <Target className="w-3 h-3 text-emerald-400" />
              <span>BEST SUBJECT</span>
            </div>
            <div className="text-lg font-bold text-emerald-300 font-mono mt-1 flex items-center justify-between">
              <span>English & Reasoning</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {accuracy}% Accuracy
              </span>
            </div>
          </div>
        </div>

        {/* 2. Game Level Tier Progression */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{rankBadge}</span>
              <div>
                <div className="text-xs font-mono font-bold text-purple-400 uppercase">
                  CURRENT GAME LEVEL: {currentLevelNumber}
                </div>
                <div className="text-base font-extrabold text-white font-['Rajdhani']">
                  {rankTitle}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] text-white/40 uppercase font-mono">NEXT TIER</div>
              <div className="text-xs font-bold text-purple-300">{nextRankTitle}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-white/60 font-mono">
              <span>{state.xp} XP Earned</span>
              <span>{nextRankReq} XP Needed</span>
            </div>
            <div className="w-full bg-black/60 h-2.5 rounded-full overflow-hidden border border-white/10">
              <div
                className="bg-gradient-to-r from-purple-500 to-amber-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
          </div>

          {/* Level Hierarchy Ladder */}
          <div className="grid grid-cols-5 gap-1.5 pt-2">
            {LEVELS_TREE.map((tier, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl border text-center transition-all ${
                  tier.current
                    ? 'bg-purple-500/30 border-purple-400 text-purple-200 ring-1 ring-purple-400/50'
                    : 'bg-white/5 border-white/5 text-white/40'
                }`}
              >
                <div className="text-[10px] font-mono font-bold">{tier.lvl}</div>
                <div className="text-xs font-bold truncate">{tier.name}</div>
                <div className="text-[9px] text-white/50">{tier.req}</div>
              </div>
            ))}
          </div>

          <div className="text-[11px] text-white/40 text-center italic">
            * Note: These are gamified cognitive skill tiers, not official military officer commissions.
          </div>
        </div>

        {/* 3. Activity XP Breakdown Table */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white font-['Rajdhani'] uppercase tracking-wider">
              XP EARNING ALGORITHM
            </h3>
            <span className="text-[11px] font-mono text-amber-400">Everything earns XP</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {XP_ACTIVITIES.map((act, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">{act.icon}</span>
                  <span className="text-[11px] text-white/80 font-medium truncate max-w-[90px]">{act.act}</span>
                </div>
                <span className="text-xs font-mono font-bold text-amber-300">{act.xp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs uppercase tracking-wider transition-colors"
        >
          Close Leaderboard
        </button>
      </div>
    </div>
  );
};
