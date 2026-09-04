import React from 'react';
import { UserProgressState } from '../types';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Award, 
  Flame, 
  Clock, 
  CheckCircle,
  Zap,
  Gauge
} from 'lucide-react';

interface AnalyticsViewProps {
  state: UserProgressState;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ state }) => {
  const totalAttempted = Object.keys(state.answeredQuestions || {}).length;
  const totalCorrect = Object.values(state.answeredQuestions || {}).filter((q: any) => q?.correct).length;
  const accuracy = totalAttempted > 0 
    ? Math.round((totalCorrect / totalAttempted) * 100) 
    : 0;
  const streak = state.streak || 1;
  const mockHistory = state.mockHistory || [];

  const subjectStats = [
    { name: 'English Comprehension', code: 'english', target: 30, color: 'text-sky-400', bar: 'bg-sky-400' },
    { name: 'Numerical Ability', code: 'numerical', target: 20, color: 'text-emerald-400', bar: 'bg-emerald-400' },
    { name: 'Reasoning & Military Aptitude', code: 'reasoning', target: 25, color: 'text-indigo-400', bar: 'bg-indigo-400' },
    { name: 'General Awareness', code: 'general_awareness', target: 25, color: 'text-amber-400', bar: 'bg-amber-400' },
  ];

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sky-300 text-xs font-semibold backdrop-blur-sm">
            <Gauge className="w-3.5 h-3.5" />
            <span>SORTIE READINESS TELEMETRY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-['Rajdhani'] tracking-wide">
            PERFORMANCE & DIAGNOSTIC ANALYTICS
          </h1>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Real-time analytics computed from every practice question, mock test, and arena drill completed.
          </p>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-1">
          <div className="text-xs text-white/50">Questions Solved</div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{totalAttempted}</div>
          <div className="text-[11px] text-emerald-400">{totalCorrect} verified correct</div>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-1">
          <div className="text-xs text-white/50">Global Accuracy</div>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">{accuracy}%</div>
          <div className="text-[11px] text-white/40">Target &gt; 80% for merit list</div>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-1">
          <div className="text-xs text-white/50">Total XP Earned</div>
          <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-mono">{state.xp}</div>
          <div className="text-[11px] text-white/40">Rank: Level {state.level} Cadet</div>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-1">
          <div className="text-xs text-white/50">Combat Streak</div>
          <div className="text-2xl sm:text-3xl font-bold text-orange-400 font-mono">{streak} Days</div>
          <div className="text-[11px] text-white/40">Consistency multiplier active</div>
        </div>
      </div>

      {/* Subject Breakdown & Mock Test Trajectory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject Progress */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-['Rajdhani']">
              Subject Mastery Breakdown
            </h3>
            <span className="text-xs text-white/40">AFCAT Weightage</span>
          </div>

          <div className="space-y-4">
            {subjectStats.map(sub => {
              const subMastery = Math.min(100, Math.round((totalAttempted / (sub.target * 2 || 1)) * 100));

              return (
                <div key={sub.code} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/80 font-medium">{sub.name}</span>
                    <span className={`font-mono font-bold ${sub.color}`}>{subMastery}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${sub.bar}`}
                      style={{ width: `${subMastery}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mock Test History */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-['Rajdhani']">
              Recent Mock Sortie History
            </h3>
            <span className="text-xs text-white/40">{mockHistory.length} Recorded</span>
          </div>

          {mockHistory.length > 0 ? (
            <div className="space-y-2.5 max-h-72 overflow-y-auto custom-scrollbar pr-1">
              {mockHistory.map((hist) => (
                <div key={hist.id} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{hist.title}</div>
                    <div className="text-[11px] text-white/40 mt-0.5">
                      {new Date(hist.date).toLocaleDateString()} • {hist.attempted} attempted
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-mono font-bold text-sky-400">
                      {hist.totalScore} / {hist.maxScore}
                    </div>
                    <div className="text-[11px] text-emerald-300 font-mono">
                      {hist.accuracy}% Acc
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-white/40 text-xs">
              No mock tests completed yet. Deploy your first test in the Mock Tests section to record score telemetry.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
