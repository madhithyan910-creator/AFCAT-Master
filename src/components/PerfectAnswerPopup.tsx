import React, { useEffect, useState } from 'react';
import { Sparkles, Zap, Flame, Crown } from 'lucide-react';

interface PerfectAnswerPopupProps {
  isFast: boolean;
  streakCount: number;
  onDone?: () => void;
}

export const PerfectAnswerPopup: React.FC<PerfectAnswerPopupProps> = ({
  isFast,
  streakCount,
  onDone
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onDone]);

  if (!visible) return null;

  return (
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center animate-bounce-short">
      {/* Radial glow ripple */}
      <div className="absolute -inset-3 rounded-full bg-emerald-400/20 blur-md animate-ping pointer-events-none" />

      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white font-black text-xs shadow-lg shadow-emerald-500/40 border border-emerald-300 font-['Rajdhani'] tracking-wider">
        {isFast ? (
          <>
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" />
            <span>PERFECT! FAST ACCURACY</span>
          </>
        ) : streakCount >= 5 ? (
          <>
            <Crown className="w-3.5 h-3.5 text-yellow-300" />
            <span>{streakCount} IN A ROW 🔥 ACE RUN!</span>
          </>
        ) : streakCount >= 3 ? (
          <>
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            <span>{streakCount} IN A ROW ⚡</span>
          </>
        ) : (
          <>
            <Zap className="w-3.5 h-3.5 text-yellow-300" />
            <span>TARGET DESTROYED +10 XP</span>
          </>
        )}
      </div>
    </div>
  );
};
