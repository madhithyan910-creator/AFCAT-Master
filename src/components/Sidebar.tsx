import React from 'react';
import { SectionType } from '../types';
import { 
  Compass, 
  BookOpen, 
  Brain, 
  Gamepad2, 
  FlaskConical, 
  RotateCw, 
  Plane, 
  UserCheck, 
  Newspaper, 
  BarChart3, 
  Calendar, 
  Trophy, 
  Bookmark, 
  Settings,
  Layers,
  Crosshair,
  X
} from 'lucide-react';
import { sound } from '../utils/audio';

interface SidebarProps {
  currentSection: SectionType;
  onSelectSection: (section: SectionType) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  mistakesCount: number;
  revisionDueCount: number;
}

interface NavItem {
  id: SectionType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
  highlight?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSection,
  onSelectSection,
  mobileOpen,
  onCloseMobile,
  mistakesCount,
  revisionDueCount,
}) => {
  const navItems: NavItem[] = [
    { id: 'command_center', label: 'Command Center', icon: Compass },
    { id: 'learn', label: 'Learn Ecosystem', icon: BookOpen },
    { id: 'practice', label: 'Adaptive Practice', icon: Brain },
    { id: 'arena', label: 'Training Arena (10 Games)', icon: Gamepad2, highlight: true },
    { id: 'mock_tests', label: 'Mock Tests (AFCAT)', icon: FlaskConical },
    { id: 'diagrams', label: 'Visual Diagrams Vault', icon: Layers },
    { id: 'fleet_gallery', label: 'Fighter Jets & Recon', icon: Crosshair },
    { id: 'revision', label: 'Revision & Mistakes', icon: RotateCw, badge: (mistakesCount + revisionDueCount) > 0 ? (mistakesCount + revisionDueCount) : undefined },
    { id: 'defence_hub', label: 'Defence Hub (IAF)', icon: Plane },
    { id: 'afsb_master', label: 'AFSB Master', icon: UserCheck },
    { id: 'current_affairs', label: 'Current Affairs 2026', icon: Newspaper },
    { id: 'analytics', label: 'Performance Analytics', icon: BarChart3 },
    { id: 'planner', label: 'Study Planner', icon: Calendar },
    { id: 'settings', label: 'Settings & Backup', icon: Settings },
  ];

  const handleNavClick = (section: SectionType) => {
    sound.playClick();
    onSelectSection(section);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden animate-fade-in"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed md:sticky top-0 md:top-16 z-50 md:z-20 h-screen md:h-[calc(100vh-4rem)] w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Mobile close header */}
        <div className="p-4 flex items-center justify-between border-b border-white/10 md:hidden">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-sky-400">
              <Compass className="w-4 h-4" />
            </div>
            <span className="font-bold text-white tracking-wide font-['Rajdhani']">AFCAT MASTER</span>
          </div>
          <button 
            onClick={onCloseMobile} 
            className="p-1.5 rounded-xl text-white/60 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 custom-scrollbar">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-white/40 font-mono">
            Navigation Matrix
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                  isActive
                    ? 'bg-white/10 text-white font-semibold border border-white/20 shadow-sm backdrop-blur-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 flex items-center justify-center transition-colors ${
                    isActive ? 'text-sky-400' : 'text-white/40 group-hover:text-white/80'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="truncate">{item.label}</span>
                </div>

                {item.badge && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-400/20 text-rose-300 border border-rose-400/30">
                    {item.badge}
                  </span>
                )}

                {item.highlight && !isActive && (
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer: Readiness Snapshot */}
        <div className="p-3 border-t border-white/10 bg-black/10 backdrop-blur-sm">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-sky-400">
              <Plane className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center text-[11px] font-medium text-white/70 mb-1.5">
                <span>AFCAT Readiness</span>
                <span className="font-bold text-sky-400">82%</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-indigo-400 h-full rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
