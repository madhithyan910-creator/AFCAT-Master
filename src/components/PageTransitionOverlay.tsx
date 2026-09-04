import React, { useEffect, useState } from 'react';
import { SectionType } from '../types';
import { Plane, Compass, CheckCircle2 } from 'lucide-react';

interface PageTransitionOverlayProps {
  targetSection: SectionType | null;
  onComplete: () => void;
}

const SECTION_TACTICAL_NAMES: Record<SectionType, { code: string; title: string; subtitle: string }> = {
  command_center: { code: 'TAC-01', title: 'COMMAND SQUADRON', subtitle: 'Global telemetry & daily sortie hub' },
  learn: { code: 'TAC-02', title: 'TACTICAL BRIEFINGS', subtitle: 'Core syllabus theories, rules & traps' },
  practice: { code: 'TAC-03', title: 'COMBAT SIMULATION', subtitle: 'Targeted question bank & live drills' },
  arena: { code: 'TAC-04', title: 'TRAINING ARENA', subtitle: '10 combat games & cognitive challenges' },
  mock_tests: { code: 'TAC-05', title: 'FULL AFCAT SORTIES', subtitle: 'Timed exam simulations with +3/-1 marking' },
  diagrams: { code: 'TAC-06', title: 'DIAGRAM VAULT', subtitle: 'Spatial, geometry, clouds & polity hierarchies' },
  fleet_gallery: { code: 'TAC-07', title: 'IAF FIGHTER FLEET', subtitle: 'Fighter jets, helicopters & recon craft' },
  revision: { code: 'TAC-08', title: 'MISTAKE RECON & VAULT', subtitle: 'Spaced flashcards & formula vault' },
  defence_hub: { code: 'TAC-09', title: 'DEFENCE FORCES HUB', subtitle: 'IAF ranks, commands & missile specs' },
  afsb_master: { code: 'TAC-10', title: 'AFSB CADET ACADEMY', subtitle: 'Psychological tests, OIR, GTO & interview' },
  current_affairs: { code: 'TAC-11', title: '2026 CURRENT AFFAIRS', subtitle: 'Defence exercises, budget & milestones' },
  analytics: { code: 'TAC-12', title: 'MISSION DEBRIEFS', subtitle: 'Accuracy graphs, subject readiness & stats' },
  planner: { code: 'TAC-13', title: 'SORTIE FLIGHT PLANNER', subtitle: 'Exam countdown & customized schedule' },
  settings: { code: 'TAC-14', title: 'SYSTEM CONFIG', subtitle: 'Audio, HUD avionics & data backup' },
};

export const PageTransitionOverlay: React.FC<PageTransitionOverlayProps> = ({
  targetSection,
  onComplete
}) => {
  const [phase, setPhase] = useState<'loading' | 'ready' | 'exit'>('loading');

  useEffect(() => {
    if (!targetSection) return;
    setPhase('loading');

    // 160ms -> Ready
    const readyTimer = setTimeout(() => {
      setPhase('ready');
    }, 150);

    // 320ms -> Exit & Complete
    const completeTimer = setTimeout(() => {
      setPhase('exit');
      onComplete();
    }, 320);

    return () => {
      clearTimeout(readyTimer);
      clearTimeout(completeTimer);
    };
  }, [targetSection, onComplete]);

  if (!targetSection) return null;

  const info = SECTION_TACTICAL_NAMES[targetSection] || {
    code: 'TAC',
    title: targetSection.toUpperCase().replace('_', ' '),
    subtitle: 'Tactical system active'
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      {/* Semi-transparent dark tactical veil */}
      <div 
        className={`absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-150 ${
          phase === 'exit' ? 'opacity-0' : 'opacity-100'
        }`} 
      />

      {/* Center Tactical Briefing Capsule */}
      <div 
        className={`relative z-10 px-8 py-5 rounded-2xl bg-slate-900/90 border border-sky-400/40 shadow-2xl shadow-sky-500/20 text-center max-w-md w-full mx-4 transition-all duration-200 transform ${
          phase === 'exit' ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Top Micro-HUD Coordinate Bar */}
        <div className="flex items-center justify-between text-[10px] font-mono text-sky-400/70 pb-2 mb-2 border-b border-white/10">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            <span>MODULE INITIALIZATION</span>
          </span>
          <span>{info.code} // CH-01</span>
          <span>SYS NORM</span>
        </div>

        {/* Animated Flight Path Line */}
        <div className="relative w-full h-8 my-2 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
          
          {/* Supersonic Jet Flight Animation */}
          <div className="absolute transition-all duration-300 ease-out animate-flight-streak">
            <div className="flex items-center gap-1.5 text-sky-300">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-sky-400 opacity-80" />
              <Plane className="w-5 h-5 fill-sky-400 text-sky-200 transform rotate-45" />
            </div>
          </div>
        </div>

        {/* Module Title & Status */}
        <div className="space-y-1">
          <div className="text-xs uppercase font-mono tracking-widest text-sky-400 font-bold">
            {phase === 'loading' ? 'ENGAGING FREQUENCY...' : 'READY // COMMENCE'}
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-['Rajdhani'] tracking-wide">
            {info.title}
          </h2>
          <p className="text-[11px] text-white/60 font-mono">
            {info.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
