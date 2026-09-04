import React, { useState, useEffect } from 'react';
import { SAMPLE_WAT_WORDS, SAMPLE_SRT_SCENARIOS, SrtScenario } from '../data/defenceAndAfsbData';
import { sound } from '../utils/audio';
import { 
  UserCheck, 
  Clock, 
  Brain, 
  Shield, 
  Award, 
  HelpCircle, 
  CheckCircle,
  Play,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const AfsbMasterView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stage1' | 'wat' | 'srt' | 'olq'>('stage1');

  // WAT Simulator state
  const [watIndex, setWatIndex] = useState(0);
  const [watTimer, setWatTimer] = useState(15); // 15 seconds per word in real AFSB
  const [watRunning, setWatRunning] = useState(false);
  const [watSentence, setWatSentence] = useState('');
  const [watResponses, setWatResponses] = useState<Record<string, string>>({});

  // SRT state
  const [revealedSrt, setRevealedSrt] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!watRunning) return;
    if (watTimer <= 0) {
      sound.playClick();
      // save sentence
      const word = SAMPLE_WAT_WORDS[watIndex]?.word;
      if (word) {
        setWatResponses(prev => ({ ...prev, [word]: watSentence }));
      }
      setWatSentence('');

      if (watIndex < SAMPLE_WAT_WORDS.length - 1) {
        setWatIndex(prev => prev + 1);
        setWatTimer(15);
      } else {
        setWatRunning(false);
        sound.playLevelUp();
      }
      return;
    }

    const interval = setInterval(() => {
      setWatTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [watRunning, watTimer, watIndex, watSentence]);

  const startWatSession = () => {
    sound.playClick();
    setWatIndex(0);
    setWatTimer(15);
    setWatSentence('');
    setWatResponses({});
    setWatRunning(true);
  };

  const olqs = [
    { num: 1, name: 'Effective Intelligence', category: 'Planning & Organizing', desc: 'Practical intelligence to solve military and real-world problems.' },
    { num: 2, name: 'Reasoning Ability', category: 'Planning & Organizing', desc: 'Logical grasping power and ability to weigh pros and cons.' },
    { num: 3, name: 'Organizing Ability', category: 'Planning & Organizing', desc: 'Arranging men, resources, and materials in systematic order.' },
    { num: 4, name: 'Power of Expression', category: 'Planning & Organizing', desc: 'Communicating thoughts with clarity and confidence.' },
    { num: 5, name: 'Social Adaptability', category: 'Social Adjustment', desc: 'Adapting seamlessly to team members from all cultures and backgrounds.' },
    { num: 6, name: 'Cooperation', category: 'Social Adjustment', desc: 'Team synergy; working harmoniously for collective objective.' },
    { num: 7, name: 'Sense of Responsibility', category: 'Social Adjustment', desc: 'High moral integrity and taking ownership of actions.' },
    { num: 8, name: 'Initiative', category: 'Social Effectiveness', desc: 'Taking the first step in unfamiliar and challenging conditions.' },
    { num: 9, name: 'Self Confidence', category: 'Social Effectiveness', desc: 'Faith in one’s own capabilities and judgment.' },
    { num: 10, name: 'Speed of Decision', category: 'Social Effectiveness', desc: 'Arriving at workable decisions quickly under crisis.' },
    { num: 11, name: 'Ability to Influence the Group', category: 'Social Effectiveness', desc: 'Motivating and directing peers toward group success.' },
    { num: 12, name: 'Liveliness', category: 'Social Effectiveness', desc: 'Cheerfulness and optimism even during adversity.' },
    { num: 13, name: 'Determination', category: 'Dynamism', desc: 'Unflinching perseverance to accomplish goals despite obstacles.' },
    { num: 14, name: 'Courage', category: 'Dynamism', desc: 'Willingness to face physical and moral risk.' },
    { num: 15, name: 'Stamina', category: 'Dynamism', desc: 'Endurance to sustain high physical and mental strain.' }
  ];

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Top Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4 overflow-x-auto">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('stage1');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 shrink-0 ${
            activeTab === 'stage1'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Shield className="w-3.5 h-3.5 text-sky-400" />
          <span>Stage 1: Screening (OIR & PPDT)</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('wat');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 shrink-0 ${
            activeTab === 'wat'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>WAT Simulator (15s Timer)</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('srt');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 shrink-0 ${
            activeTab === 'srt'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Brain className="w-3.5 h-3.5 text-emerald-400" />
          <span>Situation Reaction Test (SRT)</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('olq');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 shrink-0 ${
            activeTab === 'olq'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-indigo-400" />
          <span>15 Officer Like Qualities</span>
        </button>
      </div>

      {/* Stage 1 Screening Guide */}
      {activeTab === 'stage1' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg space-y-2">
            <h2 className="text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
              STAGE 1 SCREENING TEST: OIR & PPDT
            </h2>
            <p className="text-xs text-white/60 leading-relaxed">
              Day 1 at the Air Force Selection Board (1 AFSB Dehradun, 2 AFSB Mysuru, 3 AFSB Gandhinagar, 4 AFSB Varanasi, 5 AFSB Guwahati). Over 60% of candidates get screened out on Day 1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <Brain className="w-4 h-4" />
                <span>OIR (Officer Intelligence Rating)</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Consists of two booklets with 40-50 verbal and non-verbal reasoning questions each (17-20 minutes). Highest rating is OIR 1 (top 20% score).
              </p>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1 text-white/80">
                <div className="font-semibold text-emerald-300">Strategy to achieve OIR 1:</div>
                <div>• Zero negative marking: attempt every single question.</div>
                <div>• Master cube rotation, folding, dice rules, and analogies.</div>
                <div>• Maintain 25-30 seconds per question pace.</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Shield className="w-4 h-4" />
                <span>PPDT (Picture Perception & Description Test)</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                A hazy picture is shown for 30 seconds. You record characters (Age, Gender, Mood) and write an action-oriented positive story in 4 minutes, followed by individual narration (1 min) and group discussion.
              </p>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1 text-white/80">
                <div className="font-semibold text-amber-300">Crucial Golden Rules:</div>
                <div>• Identify the central character and establish a constructive mission.</div>
                <div>• Structure: What led to the situation, what is happening now, what is the positive outcome.</div>
                <div>• In Group Discussion: Speak clearly, listen politely, never shout or create fish market.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WAT Simulator */}
      {activeTab === 'wat' && (
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg text-center space-y-3">
            <h2 className="text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
              WORD ASSOCIATION TEST (WAT) SIMULATOR
            </h2>
            <p className="text-xs text-white/60">
              60 words are flashed for 15 seconds each. Write the first constructive, spontaneous sentence that comes to mind.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center space-y-6 min-h-[300px] flex flex-col justify-center shadow-xl">
            {watRunning ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white/40">Word {watIndex + 1} of {SAMPLE_WAT_WORDS.length}</span>
                  <span className="px-3 py-1 rounded-xl bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                    {watTimer}s remaining
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider font-['Rajdhani']">
                  {SAMPLE_WAT_WORDS[watIndex]?.word}
                </div>

                <input
                  type="text"
                  autoFocus
                  value={watSentence}
                  onChange={(e) => setWatSentence(e.target.value)}
                  placeholder="Type your spontaneous natural reaction..."
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-sky-400 backdrop-blur-md"
                />

                <div className="text-[11px] text-white/40">
                  Press Enter or wait for 15s timer to auto-advance to next word.
                </div>
              </div>
            ) : (
              <div className="space-y-4 py-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-sky-400 mx-auto">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-sm font-semibold text-white">
                  Ready to test your psychological association reflex?
                </div>
                <button
                  onClick={startWatSession}
                  className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs inline-flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>START 15-SECOND WAT RUN</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Situation Reaction Test (SRT) */}
      {activeTab === 'srt' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
            <h2 className="text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
              SITUATION REACTION TEST (SRT)
            </h2>
            <p className="text-xs text-white/60 mt-1">
              60 practical everyday and crisis situations in 30 minutes (30 seconds per situation). Write practical, complete actions.
            </p>
          </div>

          <div className="space-y-3">
            {SAMPLE_SRT_SCENARIOS.map((srt, idx) => {
              const revealed = revealedSrt[srt.id];
              return (
                <div key={srt.id} className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-3">
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">
                    Situation {idx + 1}:
                  </div>
                  <div className="text-sm font-medium text-white leading-relaxed">
                    {srt.situation}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setRevealedSrt(prev => ({ ...prev, [srt.id]: !prev[srt.id] }))}
                      className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/70 hover:text-white transition-colors"
                    >
                      {revealed ? 'Hide Model Reaction' : 'View Officer-Grade Reaction'}
                    </button>
                  </div>

                  {revealed && (
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 animate-fade-in text-xs leading-relaxed">
                      <div className="text-emerald-300 font-semibold">
                        Model Reaction: <span className="text-white/90 font-normal">{srt.idealReaction}</span>
                      </div>
                      <div className="text-sky-300 text-[11px]">
                        <span className="font-bold">OLQs Demonstrated: </span>{srt.olqHighlight}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 15 OLQs Tab */}
      {activeTab === 'olq' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
            <h2 className="text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
              THE 15 OFFICER LIKE QUALITIES (OLQs)
            </h2>
            <p className="text-xs text-white/60 mt-1">
              Evaluated across all 3 assessors (Psychologist, GTO, and Interviewing Officer) to determine recommendation for Indian Air Force.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {olqs.map((q) => (
              <div key={q.num} className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-md bg-white/10 text-sky-300 border border-white/15">
                    OLQ #{q.num}
                  </span>
                  <span className="text-[11px] text-white/40">
                    {q.category}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-white">
                  {q.name}
                </h3>

                <p className="text-xs text-white/60 leading-relaxed">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
