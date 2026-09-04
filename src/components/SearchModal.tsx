import React, { useState, useEffect } from 'react';
import { ENGLISH_LESSONS } from '../data/englishData';
import { FORMULA_VAULT } from '../data/mathAndReasoningData';
import { IAF_AIRCRAFT } from '../data/defenceAndAfsbData';
import { sound } from '../utils/audio';
import { 
  Search, 
  X, 
  BookOpen, 
  FileText, 
  Plane, 
  ArrowRight
} from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // toggle is handled in parent, or can focus
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchedLessons = q ? ENGLISH_LESSONS.filter(l => 
    l.title.toLowerCase().includes(q) || l.introduction.toLowerCase().includes(q)
  ) : [];

  const matchedFormulas = q ? FORMULA_VAULT.filter(f => 
    f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q) || f.category.toLowerCase().includes(q)
  ) : [];

  const matchedAircraft = q ? IAF_AIRCRAFT.filter(a => 
    a.name.toLowerCase().includes(q) || a.role.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
  ) : [];

  const hasResults = matchedLessons.length > 0 || matchedFormulas.length > 0 || matchedAircraft.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-xl rounded-2xl bg-[#0e172a]/95 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-sky-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons, formulas, questions, or IAF aircraft..."
            className="w-full bg-transparent border-none outline-none text-white text-sm placeholder-white/40 font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/40 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto custom-scrollbar space-y-4 flex-1">
          {q && !hasResults && (
            <div className="p-8 text-center text-white/50 text-xs">
              No matching modules or formulas found for "{query}".
            </div>
          )}

          {!q && (
            <div className="p-6 text-center text-white/40 text-xs space-y-1">
              <div>Try searching for: <span className="text-sky-300">"Rafale"</span>, <span className="text-sky-300">"Average Speed"</span>, <span className="text-sky-300">"Grammar"</span></div>
            </div>
          )}

          {matchedLessons.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] uppercase font-bold tracking-widest text-sky-400 font-mono">
                Lessons
              </div>
              {matchedLessons.map(l => (
                <div
                  key={l.id}
                  onClick={() => {
                    sound.playClick();
                    onNavigate('learn');
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">{l.title}</div>
                      <div className="text-[11px] text-white/50">{l.chapter}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                </div>
              ))}
            </div>
          )}

          {matchedFormulas.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 font-mono">
                Formulas & Shortcuts
              </div>
              {matchedFormulas.map(f => (
                <div
                  key={f.id}
                  onClick={() => {
                    sound.playClick();
                    onNavigate('revision');
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">{f.name}</div>
                      <div className="text-[11px] font-mono text-emerald-300">{f.formula}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                </div>
              ))}
            </div>
          )}

          {matchedAircraft.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 font-mono">
                IAF Aircraft Arsenal
              </div>
              {matchedAircraft.map(a => (
                <div
                  key={a.name}
                  onClick={() => {
                    sound.playClick();
                    onNavigate('defence_hub');
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <Plane className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">{a.name}</div>
                      <div className="text-[11px] text-white/50">{a.role}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
