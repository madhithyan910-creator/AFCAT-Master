import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { 
  Calendar, 
  CheckSquare, 
  Square, 
  Clock, 
  Target, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const PlannerView: React.FC = () => {
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    's1': true,
    's2': true,
    's3': false,
    's4': false,
    's5': false,
    's6': false,
  });

  const [examDate, setExamDate] = useState('2026-08-25');

  // Days left calculation
  const target = new Date(examDate).getTime();
  const now = new Date().getTime();
  const daysLeft = Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24)));

  const toggleItem = (id: string) => {
    sound.playClick();
    setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const syllabusUnits = [
    { id: 's1', title: 'English: Reading Comprehension & Inferences', subject: 'English' },
    { id: 's2', title: 'English: Error Spotting & Preposition Rules', subject: 'English' },
    { id: 's3', title: 'English: High-Yield Idioms, Synonyms & Antonyms', subject: 'English' },
    { id: 's4', title: 'Math: Time & Work, Pipes & Cisterns', subject: 'Math' },
    { id: 's5', title: 'Math: Speed, Distance & Relative Velocity Trains', subject: 'Math' },
    { id: 's6', title: 'Math: Profit, Loss & Successive Discounts', subject: 'Math' },
    { id: 's7', title: 'Reasoning: Non-Verbal Series & Figure Completion', subject: 'Reasoning' },
    { id: 's8', title: 'Reasoning: Direction Sense, Blood Relations & Venn Diagrams', subject: 'Reasoning' },
    { id: 's9', title: 'GK: Indian Air Force Aircraft & Missiles Fleet', subject: 'General Awareness' },
    { id: 's10', title: 'GK: 2025-2026 Military Joint Exercises & Summits', subject: 'General Awareness' }
  ];

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const progressPct = Math.round((completedCount / syllabusUnits.length) * 100);

  return (
    <div className="space-y-6 pb-12 animate-fade-in max-w-4xl mx-auto">
      {/* Countdown Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-sky-400 font-semibold px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">
            <Calendar className="w-3.5 h-3.5" />
            <span>MISSION COUNTDOWN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-['Rajdhani'] tracking-wide">
            AFCAT 2026 SORTIE PLANNER
          </h1>
          <p className="text-xs sm:text-sm text-white/70">
            Target exam window: August 2026. Maintain consistent daily hours and track syllabus completion.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[160px] self-start md:self-auto backdrop-blur-md">
          <div className="text-4xl sm:text-5xl font-extrabold text-sky-400 font-mono tracking-tight">
            {daysLeft}
          </div>
          <div className="text-xs uppercase tracking-widest font-mono text-white/50 mt-1 font-bold">
            Days to Sortie
          </div>
        </div>
      </div>

      {/* Syllabus Checklist */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white font-['Rajdhani'] tracking-wide">
              CORE SYLLABUS READINESS CHECKLIST
            </h2>
            <p className="text-xs text-white/60">
              Check off topics as you study lessons and solve corresponding practice sets.
            </p>
          </div>

          <div className="text-right">
            <div className="text-sm font-bold text-emerald-400 font-mono">
              {progressPct}% Done
            </div>
            <div className="text-[11px] text-white/40">
              {completedCount} of {syllabusUnits.length} topics
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          {syllabusUnits.map(unit => {
            const isChecked = !!checklist[unit.id];

            return (
              <div
                key={unit.id}
                onClick={() => toggleItem(unit.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                  isChecked
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-white'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <Square className="w-5 h-5 text-white/30 group-hover:text-white/60 shrink-0" />
                  )}

                  <div>
                    <div className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-white/60' : ''}`}>
                      {unit.title}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-sky-300">
                  {unit.subject}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
