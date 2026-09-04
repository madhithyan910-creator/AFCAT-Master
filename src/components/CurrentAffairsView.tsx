import React, { useState } from 'react';
import { CURRENT_AFFAIRS_2026 } from '../data/currentAffairs2026';
import { sound } from '../utils/audio';
import { 
  Globe, 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Filter, 
  Award, 
  Calendar
} from 'lucide-react';

interface CurrentAffairsViewProps {
  onAddXP: (amount: number) => void;
}

export const CurrentAffairsView: React.FC<CurrentAffairsViewProps> = ({ onAddXP }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  const allTags = ['all', 'Defence', 'Exercise', 'Summits', 'Awards', 'Culture', 'Space', '2026'];

  const filteredQuestions = CURRENT_AFFAIRS_2026.filter(q => {
    if (selectedTag === 'all') return true;
    return q.tags?.some(t => t.toLowerCase() === selectedTag.toLowerCase());
  });

  const handleSelect = (qId: string, optIdx: number, correctIdx: number) => {
    if (userAnswers[qId] !== undefined) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
    if (optIdx === correctIdx) {
      sound.playCorrect();
      onAddXP(5);
    } else {
      sound.playWrong();
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs text-sky-400 font-semibold px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>EXAM TARGET: 2026 SESSIONS</span>
          </div>
          <h1 className="text-2xl font-bold text-white font-['Rajdhani'] tracking-wide">
            CURRENT AFFAIRS 2026: DEFENCE & NATIONAL
          </h1>
          <p className="text-xs text-white/60 mt-1">
            Hand-picked, high-probability current affairs covering military drills, global summits, awards, science, and appointments.
          </p>
        </div>
        <div className="text-xs font-mono text-sky-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl self-start sm:self-auto">
          {filteredQuestions.length} Questions Ready
        </div>
      </div>

      {/* Filter Tag Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => {
              sound.playClick();
              setSelectedTag(tag);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              selectedTag === tag
                ? 'bg-white/10 text-white border-white/20 backdrop-blur-md shadow-sm'
                : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            {tag === 'all' ? 'All Topics' : `#${tag}`}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, qIdx) => {
          const userChoice = userAnswers[q.id];
          const answered = userChoice !== undefined;
          const isCorrect = userChoice === q.correctAnswer;

          return (
            <div key={q.id} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-4 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-sky-300 font-semibold uppercase text-[10px] tracking-wider border border-white/15">
                  {q.topic || 'Current Affairs'}
                </span>
                <span className="text-white/40">Q{qIdx + 1}</span>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                {q.question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt, optIdx) => {
                  let style = "bg-white/5 border-white/10 hover:bg-white/10 text-white/80";
                  if (answered) {
                    if (optIdx === q.correctAnswer) {
                      style = "bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-semibold";
                    } else if (optIdx === userChoice) {
                      style = "bg-rose-500/20 border-rose-500/40 text-rose-300";
                    } else {
                      style = "opacity-40 bg-white/5 border-white/10 text-white/50";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={answered}
                      onClick={() => handleSelect(q.id, optIdx, q.correctAnswer)}
                      className={`p-3.5 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${style}`}
                    >
                      <span>{opt}</span>
                      {answered && optIdx === q.correctAnswer && (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 leading-relaxed animate-fade-in space-y-1">
                  <div className="font-bold text-sky-300">Analysis:</div>
                  <div>{q.explanation}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
