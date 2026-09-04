import React, { useState } from 'react';
import { sound } from '../utils/audio';
import { 
  Layers, 
  Compass, 
  CloudRain, 
  Award, 
  GitFork, 
  CircleDot, 
  ShieldCheck, 
  ChevronRight, 
  ZoomIn,
  Eye,
  BookOpen
} from 'lucide-react';

export const DiagramGalleryView: React.FC = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<string>('atmosphere');
  const [vennMode, setVennMode] = useState<'all' | 'some' | 'none' | 'three'>('all');

  const diagrams = [
    {
      id: 'atmosphere',
      title: 'Earth Atmosphere & Flight Ceilings',
      category: 'Geography & Aviation',
      icon: Layers,
      summary: 'Troposphere, Stratosphere, Ozone Layer, and aircraft operational service limits.'
    },
    {
      id: 'iaf_ranks',
      title: 'Tri-Service Officer Ranks Matrix',
      category: 'Defence Knowledge',
      icon: Award,
      summary: 'Comparative rank hierarchy across IAF, Indian Army, and Indian Navy.'
    },
    {
      id: 'iaf_commands',
      title: 'IAF Operational Commands & HQs',
      category: 'Military Geography',
      icon: Compass,
      summary: '7 operational, training, and maintenance command stations across India.'
    },
    {
      id: 'clouds',
      title: 'Cloud Formations & Aviation Hazards',
      category: 'Meteorology',
      icon: CloudRain,
      summary: 'Cumulonimbus, Cirrus, Stratus, and severe turbulence zones.'
    },
    {
      id: 'venn',
      title: 'Venn Diagram & Syllogism Logic',
      category: 'Reasoning Aptitude',
      icon: GitFork,
      summary: 'Universal affirmatives, particular negatives, and overlapping sets.'
    },
    {
      id: 'geometry',
      title: 'Circle Theorems & Angle Rules',
      category: 'Numerical Ability',
      icon: CircleDot,
      summary: 'Subtended angles, tangent perpendiculars, and cyclic quadrilaterals.'
    },
    {
      id: 'writs',
      title: 'Article 32 & Constitutional Writs',
      category: 'Indian Polity',
      icon: ShieldCheck,
      summary: 'Habeas Corpus, Mandamus, Quo Warranto, Certiorari, and Prohibition.'
    }
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16 animate-fade-in text-white">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
              <Eye className="w-3.5 h-3.5" />
              <span>VISUAL RECONNAISSANCE VAULT</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Rajdhani'] tracking-tight">
              AFCAT HIGH-YIELD DIAGRAM GALLERY
            </h1>
            <p className="text-sm text-white/60 max-w-2xl">
              Visual schematics, meteorological layers, command bases, and mathematical geometry for rapid photographic recall.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2 rounded-xl text-xs font-mono">
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>7 High-Yield Schematics</span>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {diagrams.map((d) => {
          const Icon = d.icon;
          const isActive = selectedDiagram === d.id;
          return (
            <button
              key={d.id}
              onClick={() => {
                sound.playClick();
                setSelectedDiagram(d.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/20'
                  : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{d.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Diagram Viewer */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-xl space-y-6">
        {/* DIAGRAM 1: ATMOSPHERE */}
        {selectedDiagram === 'atmosphere' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold font-['Rajdhani'] text-sky-300">
                  ATMOSPHERIC LAYERS & AVIATION CEILINGS
                </h2>
                <p className="text-xs text-white/50">
                  Crucial for AFCAT General Awareness (Geography & Meteorology)
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-mono">
                Altitude: 0 to 600+ km
              </span>
            </div>

            {/* Interactive SVG Diagram */}
            <div className="w-full bg-[#0b1329] p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="space-y-3 font-mono text-xs">
                {/* Exosphere */}
                <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-indigo-300">EXOSPHERE (&gt; 600 km)</div>
                    <div className="text-[11px] text-white/50">Geostationary satellites orbit (36,000 km). Transition into deep space.</div>
                  </div>
                  <span className="text-indigo-400 text-[11px]">Satellites 🛰️</span>
                </div>

                {/* Thermosphere */}
                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-purple-300">THERMOSPHERE / IONOSPHERE (85 - 600 km)</div>
                    <div className="text-[11px] text-white/50">International Space Station (~400 km). Kármán Line at 100 km defines outer space. Aurora Borealis occurs here. Reflects radio waves!</div>
                  </div>
                  <span className="text-purple-400 text-[11px]">ISS 🛸 (400 km)</span>
                </div>

                {/* Mesosphere */}
                <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-blue-300">MESOSPHERE (50 - 85 km)</div>
                    <div className="text-[11px] text-white/50">Coldest layer (-90°C). Meteors burn up upon entering this friction boundary.</div>
                  </div>
                  <span className="text-blue-400 text-[11px]">Meteors 🌠</span>
                </div>

                {/* Stratosphere */}
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-between ring-1 ring-cyan-400/30">
                  <div>
                    <div className="font-bold text-cyan-300 flex items-center gap-2">
                      <span>STRATOSPHERE (12 - 50 km)</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-200 uppercase font-bold">Aviation Sweet Spot</span>
                    </div>
                    <div className="text-[11px] text-white/60">
                      ★ Contains Ozone Layer (O₃) at 20-30 km absorbing UV rays. Commercial jets & Rafale/Su-30 cruise in lower stratosphere due to zero turbulence and dry horizontal air currents.
                    </div>
                  </div>
                  <span className="text-cyan-300 text-[11px]">Fighters ✈️ (15-18 km)</span>
                </div>

                {/* Troposphere */}
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-emerald-300">TROPOSPHERE (0 - 12 km / 18 km at Equator)</div>
                    <div className="text-[11px] text-white/60">
                      Contains 75% of atmospheric mass and 99% of water vapor. All weather events (rain, clouds, thunderstorms) happen here. Temperature drops 6.5°C per 1,000m (Normal Lapse Rate). Mount Everest (8.8 km).
                    </div>
                  </div>
                  <span className="text-emerald-400 text-[11px]">Weather & Rain 🌧️</span>
                </div>
              </div>
            </div>

            {/* AFCAT Exam Traps Box */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1">
              <div className="font-bold uppercase tracking-wider text-amber-300">⚡ AFCAT High-Frequency Exam Questions:</div>
              <ul className="list-disc list-inside space-y-1 text-white/80">
                <li>Q: Where is the Ozone layer found? → <span className="font-bold text-amber-300">Stratosphere</span>.</li>
                <li>Q: In which layer do meteors burn? → <span className="font-bold text-amber-300">Mesosphere</span>.</li>
                <li>Q: Why do pilots prefer the lower stratosphere? → <span className="font-bold text-amber-300">Absence of convective clouds and stormy weather</span>.</li>
                <li>Q: Normal Lapse Rate value? → <span className="font-bold text-amber-300">6.5°C decrease per 1 km altitude</span>.</li>
              </ul>
            </div>
          </div>
        )}

        {/* DIAGRAM 2: TRI-SERVICE RANKS */}
        {selectedDiagram === 'iaf_ranks' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold font-['Rajdhani'] text-sky-300">
                  INDIAN ARMED FORCES EQUIVALENT RANKS
                </h2>
                <p className="text-xs text-white/50">
                  Direct question in every single AFCAT exam paper (Commissioned Officer Ranks)
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-mono">
                9 Commissioned Tiers
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 font-mono uppercase tracking-wider">
                    <th className="py-2.5 px-3">Air Force (IAF) ✈️</th>
                    <th className="py-2.5 px-3">Indian Army 🪖</th>
                    <th className="py-2.5 px-3">Indian Navy ⚓</th>
                    <th className="py-2.5 px-3">Insignia / Stars</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/90">
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-3 font-semibold text-sky-300">Flying Officer</td>
                    <td className="py-2.5 px-3">Lieutenant</td>
                    <td className="py-2.5 px-3">Sub Lieutenant</td>
                    <td className="py-2.5 px-3 text-white/60">One Thin Braid / 2 Stars</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-3 font-semibold text-sky-300">Flight Lieutenant</td>
                    <td className="py-2.5 px-3">Captain</td>
                    <td className="py-2.5 px-3">Lieutenant</td>
                    <td className="py-2.5 px-3 text-white/60">Two Braids / 3 Stars</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-3 font-semibold text-sky-300">Squadron Leader</td>
                    <td className="py-2.5 px-3">Major</td>
                    <td className="py-2.5 px-3">Lt. Commander</td>
                    <td className="py-2.5 px-3 text-white/60">Two and a half Braids / Ashoka Emblem</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-3 font-semibold text-sky-300">Wing Commander</td>
                    <td className="py-2.5 px-3">Lieutenant Colonel</td>
                    <td className="py-2.5 px-3">Commander</td>
                    <td className="py-2.5 px-3 text-white/60">Three Braids / Emblem + Star</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-3 font-semibold text-sky-300">Group Captain</td>
                    <td className="py-2.5 px-3">Colonel</td>
                    <td className="py-2.5 px-3">Captain</td>
                    <td className="py-2.5 px-3 text-white/60">Four Braids / Emblem + 2 Stars</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-3 font-semibold text-sky-300">Air Commodore</td>
                    <td className="py-2.5 px-3">Brigadier</td>
                    <td className="py-2.5 px-3">Commodore</td>
                    <td className="py-2.5 px-3 text-white/60">One Broad Band / One Star Flag</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-3 font-semibold text-sky-300">Air Vice Marshal</td>
                    <td className="py-2.5 px-3">Major General</td>
                    <td className="py-2.5 px-3">Rear Admiral</td>
                    <td className="py-2.5 px-3 text-white/60">Two Star Officer</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-3 font-semibold text-sky-300">Air Marshal</td>
                    <td className="py-2.5 px-3">Lieutenant General</td>
                    <td className="py-2.5 px-3">Vice Admiral</td>
                    <td className="py-2.5 px-3 text-white/60">Three Star Officer (Air Officer C-in-C)</td>
                  </tr>
                  <tr className="hover:bg-white/5 bg-sky-500/10">
                    <td className="py-2.5 px-3 font-bold text-sky-300">Air Chief Marshal</td>
                    <td className="py-2.5 px-3 font-bold text-amber-300">General</td>
                    <td className="py-2.5 px-3 font-bold text-cyan-300">Admiral</td>
                    <td className="py-2.5 px-3 text-white/70 font-semibold">Four Star Officer (CAS / Service Chief)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DIAGRAM 3: IAF COMMANDS */}
        {selectedDiagram === 'iaf_commands' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold font-['Rajdhani'] text-sky-300">
                  INDIAN AIR FORCE COMMANDS & HEADQUARTERS
                </h2>
                <p className="text-xs text-white/50">
                  7 Commands (5 Operational, 1 Training, 1 Maintenance)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-sky-400 font-mono">OPERATIONAL COMMAND 1</span>
                <h3 className="font-bold text-sm text-white">Western Air Command (WAC)</h3>
                <div className="text-xs text-white/70">📍 <span className="font-semibold text-white">Subroto Park, New Delhi</span></div>
                <p className="text-[11px] text-white/50">Covers Ladakh, J&K, Punjab, Haryana, and Rajasthan border corridors. The premier fighter command.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-emerald-400 font-mono">OPERATIONAL COMMAND 2</span>
                <h3 className="font-bold text-sm text-white">Eastern Air Command (EAC)</h3>
                <div className="text-xs text-white/70">📍 <span className="font-semibold text-white">Shillong, Meghalaya</span></div>
                <p className="text-[11px] text-white/50">Guards the entire Northeast frontier, LAC border with Tibet, and Bay of Bengal maritime zones.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-indigo-400 font-mono">OPERATIONAL COMMAND 3</span>
                <h3 className="font-bold text-sm text-white">Central Air Command (CAC)</h3>
                <div className="text-xs text-white/70">📍 <span className="font-semibold text-white">Prayagraj (Bamrauli), UP</span></div>
                <p className="text-[11px] text-white/50">Strategic depth command; houses Mirage 2000 base at Gwalior and Bareilly Su-30MKI squadrons.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-cyan-400 font-mono">OPERATIONAL COMMAND 4</span>
                <h3 className="font-bold text-sm text-white">South Western Air Command (SWAC)</h3>
                <div className="text-xs text-white/70">📍 <span className="font-semibold text-white">Gandhinagar, Gujarat</span></div>
                <p className="text-[11px] text-white/50">Defends Rajasthan, Gujarat, and Maharashtra airspace, including vital oil refineries and ports.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-amber-400 font-mono">OPERATIONAL COMMAND 5</span>
                <h3 className="font-bold text-sm text-white">Southern Air Command (SAC)</h3>
                <div className="text-xs text-white/70">📍 <span className="font-semibold text-white">Thiruvananthapuram, Kerala</span></div>
                <p className="text-[11px] text-white/50">Responsible for peninsular maritime air corridors and Indian Ocean Region (IOR) security.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-purple-400 font-mono">FUNCTIONAL COMMANDS</span>
                <div className="space-y-1.5 text-xs">
                  <div>🛠️ <span className="font-bold text-white">Maintenance Command:</span> Nagpur, Maharashtra</div>
                  <div>🎓 <span className="font-bold text-white">Training Command:</span> Bengaluru, Karnataka</div>
                </div>
                <p className="text-[11px] text-white/50">Training Command oversees Air Force Academy (AFA Dundigal) and Flying Instructors School.</p>
              </div>
            </div>
          </div>
        )}

        {/* DIAGRAM 4: CLOUD FORMATIONS */}
        {selectedDiagram === 'clouds' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold font-['Rajdhani'] text-sky-300">
                  CLOUD TYPES & AVIATION HAZARDS
                </h2>
                <p className="text-xs text-white/50">High, Middle, and Low Clouds & Pilot Safety</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 space-y-2">
                <div className="text-xs font-bold text-blue-300">HIGH CLOUDS (6,000m+)</div>
                <div className="text-sm font-semibold text-white">Cirrus, Cirrostratus, Cirrocumulus</div>
                <p className="text-[11px] text-white/60">Composed entirely of ice crystals. Feather-like appearance. Causes haloes around the Sun.</p>
                <div className="text-[10px] text-emerald-400 font-semibold">Hazard: Low (Good visibility)</div>
              </div>

              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                <div className="text-xs font-bold text-indigo-300">MIDDLE CLOUDS (2,000 - 6,000m)</div>
                <div className="text-sm font-semibold text-white">Altostratus, Altocumulus</div>
                <p className="text-[11px] text-white/60">Composed of water droplets. Forms grayish watery blankets across the sky.</p>
                <div className="text-[10px] text-amber-400 font-semibold">Hazard: Moderate Icing</div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                <div className="text-xs font-bold text-rose-300">LOW & VERTICAL CLOUDS (0 - 2,000m)</div>
                <div className="text-sm font-semibold text-rose-200">Cumulonimbus (Cb Cloud)</div>
                <p className="text-[11px] text-white/60">Thunderstorm clouds with anvil tops reaching into the stratosphere. Violent updrafts and downdrafts.</p>
                <div className="text-[10px] text-rose-400 font-bold uppercase">⚠️ Severe Hazard: Hail, Lightning, Wind Shear, Microbursts (Aircraft must divert!)</div>
              </div>
            </div>
          </div>
        )}

        {/* DIAGRAM 5: VENN DIAGRAMS */}
        {selectedDiagram === 'venn' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold font-['Rajdhani'] text-sky-300">
                  VENN DIAGRAM & SYLLOGISM VISUALIZER
                </h2>
                <p className="text-xs text-white/50">Master AFCAT Reasoning Venn questions instantly</p>
              </div>
              <div className="flex gap-1.5">
                {(['all', 'some', 'none', 'three'] as const).map(mode => (
                  <button
                    key={mode}
                    onClick={() => {
                      sound.playClick();
                      setVennMode(mode);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono uppercase ${
                      vennMode === mode
                        ? 'bg-sky-500 text-white font-bold'
                        : 'bg-white/5 text-white/50 hover:bg-white/10'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1329] border border-white/10 flex flex-col items-center justify-center space-y-4">
              {vennMode === 'all' && (
                <div className="text-center space-y-3">
                  <div className="text-sm font-semibold text-emerald-300 font-mono">
                    "All A are B" (Concentric Hierarchy)
                  </div>
                  <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                    <div className="w-44 h-44 rounded-full border-2 border-emerald-400/80 bg-emerald-500/10 flex items-start justify-center pt-2 text-xs font-bold text-emerald-300">
                      B (Humans / Aircraft)
                    </div>
                    <div className="absolute w-24 h-24 rounded-full border-2 border-sky-400 bg-sky-500/30 flex items-center justify-center text-xs font-bold text-sky-200">
                      A (Pilots)
                    </div>
                  </div>
                  <p className="text-xs text-white/60 max-w-md mx-auto">
                    Example: All Pilots are Human Beings. Inner circle (A) is completely enclosed inside outer circle (B).
                  </p>
                </div>
              )}

              {vennMode === 'some' && (
                <div className="text-center space-y-3">
                  <div className="text-sm font-semibold text-sky-300 font-mono">
                    "Some A are B" (Intersection)
                  </div>
                  <div className="relative w-64 h-36 mx-auto flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-2 border-sky-400 bg-sky-500/20 absolute left-4 flex items-center justify-start pl-4 text-xs font-bold text-sky-200">
                      Teachers
                    </div>
                    <div className="w-32 h-32 rounded-full border-2 border-purple-400 bg-purple-500/20 absolute right-4 flex items-center justify-end pr-4 text-xs font-bold text-purple-200">
                      Authors
                    </div>
                  </div>
                  <p className="text-xs text-white/60 max-w-md mx-auto">
                    Example: Some Teachers are Authors (and some Authors are Teachers). Overlapping region represents individuals who belong to both categories.
                  </p>
                </div>
              )}

              {vennMode === 'none' && (
                <div className="text-center space-y-3">
                  <div className="text-sm font-semibold text-rose-300 font-mono">
                    "No A is B" (Mutually Disjoint Sets)
                  </div>
                  <div className="flex items-center justify-center gap-6 py-4">
                    <div className="w-28 h-28 rounded-full border-2 border-rose-400 bg-rose-500/20 flex items-center justify-center text-xs font-bold text-rose-200">
                      Apples 🍎
                    </div>
                    <div className="w-28 h-28 rounded-full border-2 border-amber-400 bg-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-200">
                      Chairs 🪑
                    </div>
                  </div>
                  <p className="text-xs text-white/60 max-w-md mx-auto">
                    Example: Apples and Chairs have zero overlapping elements. Completely detached circles.
                  </p>
                </div>
              )}

              {vennMode === 'three' && (
                <div className="text-center space-y-3">
                  <div className="text-sm font-semibold text-amber-300 font-mono">
                    Three-Way Intersecting Categories
                  </div>
                  <p className="text-xs text-white/70 max-w-md mx-auto">
                    Example: Doctors, Smokers, Indian Citizens. Some doctors smoke, some Indians are doctors, and some individuals are all three!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* DIAGRAM 6: GEOMETRY */}
        {selectedDiagram === 'geometry' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold font-['Rajdhani'] text-sky-300">
                  CIRCLE THEOREMS & GEOMETRY RULES
                </h2>
                <p className="text-xs text-white/50">Core theorems frequently tested in AFCAT Math</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="font-bold text-sm text-sky-300">1. Angle at Center Theorem</h3>
                <p className="text-xs text-white/70">
                  The angle subtended by an arc at the center is <span className="text-emerald-400 font-bold">twice</span> the angle subtended by it at any point on the remaining circumference.
                </p>
                <div className="p-2 rounded bg-black/30 text-xs font-mono text-amber-300">
                  ∠AOB = 2 × ∠ACB
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="font-bold text-sm text-sky-300">2. Cyclic Quadrilateral Theorem</h3>
                <p className="text-xs text-white/70">
                  Opposite angles of a quadrilateral inscribed inside a circle always sum to <span className="text-emerald-400 font-bold">180°</span> (supplementary).
                </p>
                <div className="p-2 rounded bg-black/30 text-xs font-mono text-amber-300">
                  ∠A + ∠C = 180° & ∠B + ∠D = 180°
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="font-bold text-sm text-sky-300">3. Tangent Perpendicular to Radius</h3>
                <p className="text-xs text-white/70">
                  The tangent at any point of a circle is perpendicular to the radius through the point of contact.
                </p>
                <div className="p-2 rounded bg-black/30 text-xs font-mono text-amber-300">
                  Radius ⊥ Tangent → Angle = 90°
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="font-bold text-sm text-sky-300">4. Angles in Same Segment</h3>
                <p className="text-xs text-white/70">
                  Angles in the same segment of a circle subtended by the same chord are equal.
                </p>
                <div className="p-2 rounded bg-black/30 text-xs font-mono text-amber-300">
                  ∠ADB = ∠ACB
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DIAGRAM 7: CONSTITUTION WRITS */}
        {selectedDiagram === 'writs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold font-['Rajdhani'] text-sky-300">
                  ARTICLE 32 & 226 CONSTITUTIONAL WRITS
                </h2>
                <p className="text-xs text-white/50">Supreme Court (Art 32) & High Court (Art 226) Prerogative Writs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-500/30 space-y-2">
                <div className="text-xs font-bold text-sky-300 font-mono">1. HABEAS CORPUS</div>
                <div className="text-xs font-semibold text-white">"To have the body of"</div>
                <p className="text-[11px] text-white/60">Issued against illegal or unlawful detention of a person by police or private individual. Demands production in court.</p>
              </div>

              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                <div className="text-xs font-bold text-indigo-300 font-mono">2. MANDAMUS</div>
                <div className="text-xs font-semibold text-white">"We Command"</div>
                <p className="text-[11px] text-white/60">Issued to a public official or body commanding them to perform an official duty they have failed or refused to do.</p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                <div className="text-xs font-bold text-purple-300 font-mono">3. QUO-WARRANTO</div>
                <div className="text-xs font-semibold text-white">"By What Authority"</div>
                <p className="text-[11px] text-white/60">Challenges illegal usurpation of a substantive public office by an unqualified claimant.</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 space-y-2">
                <div className="text-xs font-bold text-amber-300 font-mono">4. CERTIORARI</div>
                <div className="text-xs font-semibold text-white">"To be Certified"</div>
                <p className="text-[11px] text-white/60">Quashes an order passed by a lower court/tribunal that acted without or in excess of jurisdiction.</p>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 space-y-2">
                <div className="text-xs font-bold text-rose-300 font-mono">5. PROHIBITION</div>
                <div className="text-xs font-semibold text-white">"To Forbid"</div>
                <p className="text-[11px] text-white/60">Issued to prevent a lower court or tribunal from proceeding beyond its legal jurisdiction (preventive in nature).</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
