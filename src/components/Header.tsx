import React from 'react';
import { UserProgressState, SectionType } from '../types';
import { 
  Flame, 
  Zap, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Search, 
  Clock, 
  Shield, 
  Compass,
  Menu
} from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  state: UserProgressState;
  onUpdateState: (newState: UserProgressState) => void;
  onOpenSearch: () => void;
  onOpenSettings: () => void;
  onSelectSection: (section: SectionType) => void;
  onToggleMobileSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  state,
  onUpdateState,
  onOpenSearch,
  onOpenSettings,
  onSelectSection,
  onToggleMobileSidebar,
}) => {
  const toggleTheme = () => {
    sound.playClick();
    const nextTheme = state.settings.theme === 'dark' ? 'light' : 'dark';
    onUpdateState({
      ...state,
      settings: { ...state.settings, theme: nextTheme }
    });
  };

  const toggleSound = () => {
    const nextSound = !state.settings.soundEnabled;
    sound.enabled = nextSound;
    if (nextSound) sound.playClick();
    onUpdateState({
      ...state,
      settings: { ...state.settings, soundEnabled: nextSound }
    });
  };

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-white/10 bg-white/5 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between transition-colors duration-300">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileSidebar}
          className="md:hidden p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div 
          onClick={() => onSelectSection('command_center')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-sky-500/10 text-sky-400 group-hover:scale-105 transition-transform backdrop-blur-md">
            <div className="w-4 h-4 rounded-sm bg-sky-400 flex items-center justify-center text-slate-950 font-bold">
              <Compass className="w-3.5 h-3.5 text-slate-900" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-wider font-['Rajdhani'] text-white">AFCAT MASTER</span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-white/10 text-sky-300 border border-white/15">2026-27</span>
            </div>
            <p className="text-[11px] text-white/40 font-medium hidden sm:block">Train. Practice. Master. Fly.</p>
          </div>
        </div>
      </div>

      {/* Center Search Bar Trigger */}
      <button
        onClick={onOpenSearch}
        className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white/60 hover:text-white transition-all text-xs w-80 justify-between backdrop-blur-sm"
      >
        <span className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-white/40" />
          <span>Search 1,000+ questions, formulas, aircraft...</span>
        </span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[10px] text-white/60 font-mono">⌘K</kbd>
      </button>

      {/* Right Stats & Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search Mobile Trigger */}
        <button
          onClick={onOpenSearch}
          className="lg:hidden p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          title="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Streak Counter */}
        <div 
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-amber-300 text-xs font-semibold backdrop-blur-sm"
          title="Daily Study Streak"
        >
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
          <span>{state.streak} {state.streak === 1 ? 'Day' : 'Days'}</span>
        </div>

        {/* XP & Level Badge */}
        <div 
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-sky-200 text-xs backdrop-blur-sm"
          title={`Cadet Rank: ${state.level} (${state.xp} XP)`}
        >
          <div className="w-2 h-2 rounded-full bg-sky-400" />
          <Zap className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
          <span className="font-bold text-white">{state.xp}</span>
          <span className="hidden md:inline text-white/40">XP</span>
          <span className="hidden md:inline px-1.5 py-0.5 rounded bg-sky-400/20 text-sky-300 font-semibold border border-sky-400/30 text-[10px]">
            {state.level}
          </span>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors"
          title={state.settings.soundEnabled ? "Mute Audio" : "Enable Audio"}
          aria-label="Toggle Sound"
        >
          {state.settings.soundEnabled ? <Volume2 className="w-4 h-4 text-sky-400" /> : <VolumeX className="w-4 h-4 text-white/30" />}
        </button>

        {/* Settings button */}
        <button
          onClick={onOpenSettings}
          className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors"
          title="Settings & Data Backup"
          aria-label="Settings"
        >
          <Shield className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
