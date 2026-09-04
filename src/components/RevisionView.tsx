import React, { useState } from 'react';
import { UserMistake, FormulaItem } from '../types';
import { FORMULA_VAULT } from '../data/mathAndReasoningData';
import { sound } from '../utils/audio';
import { 
  RotateCw, 
  AlertTriangle, 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  HelpCircle,
  Zap,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface RevisionViewProps {
  mistakes: Record<string, UserMistake>;
  onClearMistake: (qId: string) => void;
  onAddXP: (amount: number) => void;
}

export const RevisionView: React.FC<RevisionViewProps> = ({ mistakes, onClearMistake, onAddXP }) => {
  const [activeTab, setActiveTab] = useState<'mistakes' | 'formulas' | 'flashcards'>('mistakes');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const mistakeList: UserMistake[] = Object.values(mistakes || {});

  const formulaCategories = ['all', ...Array.from(new Set(FORMULA_VAULT.map(f => f.category)))];

  const filteredFormulas = FORMULA_VAULT.filter(f => 
    selectedCategory === 'all' || f.category === selectedCategory
  );

  // Flashcards demo deck
  const flashcards = [
    { id: 'fc1', front: 'What is the harmonic mean formula for average speed over equal distances?', back: 'Average Speed = (2 × x × y) / (x + y). Never use arithmetic mean!' },
    { id: 'fc2', front: 'Angle between clock hands at H hours and M minutes?', back: 'θ = |30H - (11/2)M| degrees.' },
    { id: 'fc3', front: 'If SP is same with x% profit and x% loss, what is net outcome?', back: 'Always a NET LOSS of (x / 10)%.' },
    { id: 'fc4', front: 'Rafale aircraft top speed and generation?', back: 'Mach 1.8 (2,223 km/h), 4.5 Generation Omni-role fighter.' },
    { id: 'fc5', front: 'Equivalent rank to Wing Commander in Indian Army and Navy?', back: 'Army: Lieutenant Colonel | Navy: Commander.' }
  ];

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Tab Switcher */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('mistakes');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 ${
            activeTab === 'mistakes'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
          <span>Mistake Notebook ({mistakeList.length})</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('formulas');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 ${
            activeTab === 'formulas'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-sky-400" />
          <span>Formula & Trap Vault ({FORMULA_VAULT.length})</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('flashcards');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 ${
            activeTab === 'flashcards'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Spaced Flashcards ({flashcards.length})</span>
        </button>
      </div>

      {/* Mistake Notebook Tab */}
      {activeTab === 'mistakes' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
                AUTOMATED MISTAKE LOG & RETEST
              </h2>
              <p className="text-xs text-white/60 mt-1">
                Every question answered incorrectly is captured here for review until mastered.
              </p>
            </div>
            <div className="text-xs font-bold text-rose-300 bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              {mistakeList.length} Questions to Overcome
            </div>
          </div>

          {mistakeList.length > 0 ? (
            <div className="space-y-3">
              {mistakeList.map((m) => (
                <div key={m.questionId} className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-md bg-white/10 text-rose-300 border border-white/15">
                      Failed {m.failCount} {m.failCount === 1 ? 'time' : 'times'}
                    </span>

                    <button
                      onClick={() => {
                        sound.playCorrect();
                        onClearMistake(m.questionId);
                        onAddXP(10);
                      }}
                      className="px-3 py-1 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Mark Mastered (+10 XP)</span>
                    </button>
                  </div>

                  <div className="text-sm font-semibold text-white">
                    {m.question.question}
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 space-y-1">
                    <div className="font-bold text-emerald-300">
                      Correct Answer: {m.question.options[m.question.correctAnswer]}
                    </div>
                    <div className="text-white/60 leading-relaxed">
                      {m.question.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/60 text-xs space-y-2">
              <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="font-bold text-white text-sm">Mistake Notebook Empty!</div>
              <div>Great sortie discipline. Your answered questions are clean and accurate.</div>
            </div>
          )}
        </div>
      )}

      {/* Formula Vault Tab */}
      {activeTab === 'formulas' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {formulaCategories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  selectedCategory === cat
                    ? 'bg-white/10 text-white border-white/20 backdrop-blur-md'
                    : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Formulas' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFormulas.map(f => (
              <div key={f.id} className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-md bg-white/10 text-sky-300 border border-white/15">
                      {f.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white">
                    {f.name}
                  </h3>

                  <div className="p-3 rounded-xl bg-black/30 border border-white/10 font-mono text-xs text-emerald-300 font-semibold leading-relaxed">
                    {f.formula}
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {f.meaning}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs">
                  <div className="text-amber-300 flex items-start gap-1">
                    <span className="font-bold">⚡ Shortcut:</span>
                    <span className="text-white/80">{f.shortcut}</span>
                  </div>
                  <div className="text-rose-400 flex items-start gap-1">
                    <span className="font-bold">⚠️ Trap:</span>
                    <span className="text-white/80">{f.trap}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Spaced Flashcards Tab */}
      {activeTab === 'flashcards' && (
        <div className="space-y-4 max-w-xl mx-auto">
          <div className="text-center space-y-1 pb-2">
            <h2 className="text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
              SPACED REPETITION FLASHCARDS
            </h2>
            <p className="text-xs text-white/60">
              Click any card to flip and reveal the tactical memory answer.
            </p>
          </div>

          <div className="space-y-4">
            {flashcards.map(fc => {
              const isFlipped = flippedCardId === fc.id;
              return (
                <div
                  key={fc.id}
                  onClick={() => {
                    sound.playClick();
                    setFlippedCardId(isFlipped ? null : fc.id);
                  }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all cursor-pointer min-h-[140px] flex flex-col justify-center text-center shadow-lg relative"
                >
                  <div className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-2">
                    {isFlipped ? 'REVERSE (ANSWER)' : 'FRONT (PROMPT) • CLICK TO FLIP'}
                  </div>

                  <div className="text-sm font-semibold text-white leading-relaxed">
                    {isFlipped ? (
                      <span className="text-emerald-300 font-medium">{fc.back}</span>
                    ) : (
                      fc.front
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
