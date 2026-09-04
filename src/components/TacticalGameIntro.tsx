import React, { useEffect, useState } from 'react';
import { Crosshair, Shield, Zap, Brain, Plane, Swords } from 'lucide-react';
import { sound } from '../utils/audio';

export interface GameIntroConfig {
  title: string;
  systemStatus: string;
  missionDirective: string;
  accentColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const GAME_TACTICAL_INTROS: Record<string, GameIntroConfig> = {
  code_breaker: {
    title: 'CODE BREAKER',
    systemStatus: 'SECURITY SYSTEM ONLINE',
    missionDirective: 'Decrypt the alphanumeric cryptographic sequence before timeout.',
    accentColor: 'text-purple-400 border-purple-400/40 bg-purple-950/40',
    icon: Shield
  },
  math_attack: {
    title: 'MATH ATTACK',
    systemStatus: 'TARGET ACQUIRED',
    missionDirective: 'Calculate ballistic intercept coordinates before impact.',
    accentColor: 'text-emerald-400 border-emerald-400/40 bg-emerald-950/40',
    icon: Crosshair
  },
  memory: {
    title: 'MEMORY SQUADRON',
    systemStatus: 'MEMORY SYSTEM INITIALIZED',
    missionDirective: 'Match tactical pairs under simulated G-force cognitive load.',
    accentColor: 'text-sky-400 border-sky-400/40 bg-sky-950/40',
    icon: Brain
  },
  scramble: {
    title: 'AIR SCRAMBLE',
    systemStatus: 'SCRAMBLE ALERT ACTIVE',
    missionDirective: 'Reach target flight ceiling by resolving 10 rapid tactical queries.',
    accentColor: 'text-amber-400 border-amber-400/40 bg-amber-950/40',
    icon: Plane
  },
  boss_battle: {
    title: 'TOPIC GUARDIAN BATTLE',
    systemStatus: 'HOSTILE INTERCEPT DETECTED',
    missionDirective: 'Out-calculate the AI Squadron Leader to claim territorial mastery.',
    accentColor: 'text-rose-400 border-rose-400/40 bg-rose-950/40',
    icon: Swords
  },
  afcat_final_boss: {
    title: 'AIR MARSHAL FINAL GAUNTLET',
    systemStatus: 'COMMAND PROTOCOL DELTA ENGAGED',
    missionDirective: 'Execute flawless 4-phase combat sequence across all AFCAT domains.',
    accentColor: 'text-cyan-400 border-cyan-400/40 bg-cyan-950/40',
    icon: Swords
  },
  daily_sortie: {
    title: 'DAILY SORTIE ESCORT',
    systemStatus: 'SORTIE FREQUENCY TUNED',
    missionDirective: 'Clear 10 fast checkpoints to maintain your unbroken flight path.',
    accentColor: 'text-sky-400 border-sky-400/40 bg-sky-950/40',
    icon: Plane
  }
};

interface TacticalGameIntroProps {
  gameKey: string;
  onLaunch: () => void;
}

export const TacticalGameIntro: React.FC<TacticalGameIntroProps> = ({
  gameKey,
  onLaunch
}) => {
  const [progress, setProgress] = useState(0);

  const intro = GAME_TACTICAL_INTROS[gameKey] || {
    title: gameKey.toUpperCase().replace('_', ' '),
    systemStatus: 'TACTICAL RADAR ENGAGED',
    missionDirective: 'Execute cognitive sortie protocols immediately.',
    accentColor: 'text-sky-400 border-sky-400/40 bg-sky-950/40',
    icon: Zap
  };

  const IconComp = intro.icon;

  useEffect(() => {
    sound.playClick();
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onLaunch();
          return 100;
        }
        return prev + 10;
      });
    }, 120); // 1.2s total

    return () => clearInterval(interval);
  }, [onLaunch]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-md w-full p-6 sm:p-8 rounded-2xl bg-slate-900 border border-white/15 shadow-2xl shadow-sky-500/20 text-center space-y-5 overflow-hidden">
        {/* Subtle background radar ring */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-sky-400/10 pointer-events-none animate-pulse" />
        
        {/* Icon & Status */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-sky-400 shadow-inner">
            <IconComp className="w-7 h-7" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-sky-300">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            <span>{intro.systemStatus}</span>
          </div>
        </div>

        {/* Title & Directive */}
        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Rajdhani'] tracking-wide">
            {intro.title}
          </h2>
          <p className="text-xs text-white/70 leading-relaxed font-mono">
            {intro.missionDirective}
          </p>
        </div>

        {/* Progress Bar & Skip Button */}
        <div className="space-y-3 pt-2">
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-sky-400 to-cyan-300 h-full transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
            <span>ENGAGING FREQUENCY...</span>
            <button
              onClick={onLaunch}
              className="px-3 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/30 font-bold uppercase tracking-wider transition-colors"
            >
              SKIP INTRO →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
