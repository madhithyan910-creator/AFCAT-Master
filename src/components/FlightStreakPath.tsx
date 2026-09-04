import React from 'react';
import { Plane, Flame, ShieldAlert, Check } from 'lucide-react';

interface FlightStreakPathProps {
  streak: number;
  maxDays?: number;
  className?: string;
  onDrillClick?: () => void;
}

export const FlightStreakPath: React.FC<FlightStreakPathProps> = ({
  streak,
  maxDays = 14,
  className = '',
  onDrillClick
}) => {
  const currentStreak = Math.max(0, streak);
  const activeCount = Math.min(maxDays, currentStreak);
  const isBroken = currentStreak === 0;

  // Generate 14-day flight points
  const points = Array.from({ length: maxDays }, (_, i) => i + 1);

  return (
    <div className={`p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${className}`}>
      {/* Header telemetry */}
      <div className="flex items-center justify-between mb-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-400 border border-amber-400/30 flex items-center justify-center">
            <Flame className="w-3.5 h-3.5 fill-amber-400/30" />
          </div>
          <div>
            <div className="font-bold text-white font-['Rajdhani'] tracking-wide">
              TACTICAL FLIGHT PATH
            </div>
            <div className="text-[10px] text-white/50 font-mono">
              {currentStreak}-DAY UNBROKEN AIR ROUTE
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px]">
          <span className="px-2 py-0.5 rounded-md bg-amber-400/15 text-amber-300 border border-amber-400/30 font-bold">
            {currentStreak} DAYS
          </span>
          <span className="text-white/40">/ {maxDays}D SQUADRON TARGET</span>
        </div>
      </div>

      {/* Flight Path Waypoint Line */}
      <div className="relative py-2 px-1">
        {/* Background Track Line */}
        <div className="absolute top-1/2 left-3 right-3 h-[2px] -translate-y-1/2 bg-white/10 z-0" />
        
        {/* Active Vector Glow Line */}
        {activeCount > 1 && (
          <div 
            className="absolute top-1/2 left-3 h-[2px] -translate-y-1/2 bg-gradient-to-r from-amber-500 via-sky-400 to-sky-300 z-0 shadow-sm shadow-sky-400/50 transition-all duration-500"
            style={{ 
              width: `calc(${((activeCount - 1) / (maxDays - 1)) * 100}% - 12px)` 
            }}
          />
        )}

        {/* Waypoint nodes */}
        <div className="relative z-10 flex items-center justify-between">
          {points.map((dayNum) => {
            const isCompleted = dayNum < activeCount;
            const isCurrentJet = dayNum === activeCount && activeCount > 0;
            const isPending = dayNum > activeCount;

            return (
              <div 
                key={dayNum} 
                className="group relative flex flex-col items-center"
                title={`Day ${dayNum}: ${isCompleted ? 'Sortie Complete' : isCurrentJet ? 'Active Sortie Station' : 'Upcoming Station'}`}
              >
                {/* Node representation */}
                {isCurrentJet ? (
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <div className="absolute -inset-1.5 rounded-full bg-sky-400/30 animate-ping pointer-events-none" />
                    <div className="w-7 h-7 rounded-full bg-sky-500 text-white border-2 border-sky-200 shadow-md shadow-sky-500/50 flex items-center justify-center transform hover:scale-110 transition-transform">
                      <Plane className="w-3.5 h-3.5 fill-current transform rotate-45" />
                    </div>
                  </div>
                ) : isCompleted ? (
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 border border-amber-200 shadow-sm shadow-amber-400/30 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-slate-900" />
                  </div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-slate-800 border border-white/20 hover:border-white/40 transition-colors" />
                )}

                {/* Day Label */}
                <span className={`text-[9px] font-mono mt-1 ${
                  isCurrentJet ? 'text-sky-300 font-bold' : isCompleted ? 'text-white/60' : 'text-white/30'
                }`}>
                  D{dayNum}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trajectory Status Footer */}
      <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
        {isBroken ? (
          <div className="flex items-center gap-1.5 text-rose-300">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>Flight path paused. Complete 1 mission today to reboot route.</span>
          </div>
        ) : (
          <div className="text-white/60 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Flight trajectory on schedule. Waypoint {activeCount} secured.</span>
          </div>
        )}

        {onDrillClick && (
          <button
            onClick={onDrillClick}
            className="text-sky-400 hover:text-sky-300 font-semibold font-mono text-[10px] uppercase hover:underline"
          >
            Engage Daily Sortie →
          </button>
        )}
      </div>
    </div>
  );
};
