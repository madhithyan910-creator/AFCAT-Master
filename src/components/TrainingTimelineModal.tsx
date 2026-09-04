import React from 'react';
import { UserProgressState } from '../types';
import { generateTrainingTimeline } from '../utils/themeAndMission';
import { X, Plane, Target, Award, Flame, Shield, Check, Compass, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface TrainingTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: UserProgressState;
}

export const TrainingTimelineModal: React.FC<TrainingTimelineModalProps> = ({
  isOpen,
  onClose,
  state
}) => {
  if (!isOpen) return null;

  const events = generateTrainingTimeline(state);

  const getIcon = (type: string) => {
    switch (type) {
      case 'plane':
        return <Plane className="w-4 h-4 transform rotate-45" />;
      case 'target':
        return <Target className="w-4 h-4" />;
      case 'award':
        return <Award className="w-4 h-4" />;
      case 'flame':
        return <Flame className="w-4 h-4" />;
      case 'shield':
        return <Shield className="w-4 h-4" />;
      default:
        return <Check className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-xl w-full max-h-[85vh] flex flex-col rounded-2xl bg-slate-900 border border-sky-400/30 shadow-2xl shadow-sky-500/20 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Rajdhani'] tracking-wide">
                CADET TRAINING FLIGHT TIMELINE
              </h3>
              <p className="text-xs text-white/50 font-mono">Chronological progression of your combat readiness</p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          <div className="relative pl-6 sm:pl-8 space-y-8">
            {/* Continuous Vertical Flight Vector Line */}
            <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-sky-400 via-amber-400 to-sky-300 opacity-60" />

            {events.map((ev, index) => {
              const isLast = index === events.length - 1;

              return (
                <div key={ev.id} className="relative group">
                  {/* Waypoint Node Circle */}
                  <div className={`absolute -left-[23px] sm:-left-[27px] top-1 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isLast 
                      ? 'bg-sky-400 text-slate-950 ring-4 ring-sky-400/30 animate-pulse' 
                      : ev.highlight 
                        ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-400/40' 
                        : 'bg-slate-800 text-sky-300 border border-white/20'
                  }`}>
                    {getIcon(ev.iconType)}
                  </div>

                  {/* Card Body */}
                  <div className={`p-4 rounded-xl transition-all ${
                    isLast
                      ? 'bg-gradient-to-r from-sky-950/60 to-slate-900 border border-sky-400/50 shadow-md shadow-sky-500/10'
                      : ev.highlight
                        ? 'bg-white/5 border border-amber-400/30'
                        : 'bg-white/5 border border-white/10'
                  }`}>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-sky-400 uppercase">
                        {ev.displayDate}
                      </span>
                      {ev.badge && (
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${
                          isLast 
                            ? 'bg-sky-400/20 text-sky-300 border border-sky-400/30'
                            : 'bg-white/10 text-white/70'
                        }`}>
                          {ev.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-white font-['Rajdhani'] tracking-wide">
                      {ev.title}
                    </h4>
                    <p className="text-xs text-white/70 mt-1 leading-relaxed">
                      {ev.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-white/5 flex items-center justify-between text-xs text-white/60">
          <span className="font-mono text-[11px]">Rank: {state.level} • {state.xp} XP</span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold font-mono text-xs transition-colors"
          >
            RESUME SORTIE
          </button>
        </div>
      </div>
    </div>
  );
};
