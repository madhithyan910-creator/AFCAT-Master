import React, { useState } from 'react';
import { IAF_AIRCRAFT, TRI_SERVICE_RANKS, IAF_COMMANDS, AircraftInfo } from '../data/defenceAndAfsbData';
import { sound } from '../utils/audio';
import { 
  Plane, 
  Shield, 
  MapPin, 
  Award, 
  Gauge, 
  Zap, 
  ChevronRight,
  Crosshair
} from 'lucide-react';

export const DefenceHubView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'aircraft' | 'ranks' | 'commands'>('aircraft');
  const [selectedAircraft, setSelectedAircraft] = useState<AircraftInfo | null>(null);

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Top Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('aircraft');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 ${
            activeTab === 'aircraft'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Plane className="w-3.5 h-3.5 text-sky-400" />
          <span>IAF Aircraft Fleet ({IAF_AIRCRAFT.length})</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('ranks');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 ${
            activeTab === 'ranks'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Tri-Service Rank Matrix</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('commands');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 ${
            activeTab === 'commands'
              ? 'bg-white/10 text-white border-white/20 shadow-sm backdrop-blur-md'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>IAF Operational Commands</span>
        </button>
      </div>

      {/* Aircraft Fleet Tab */}
      {activeTab === 'aircraft' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
                INDIAN AIR FORCE AIRCRAFT SQUADRON
              </h2>
              <p className="text-xs text-white/60 mt-1">
                Fighter jets, heavy-lift transports, and attack helicopters. Essential knowledge for General Awareness & AFSB Interview.
              </p>
            </div>
            <div className="text-xs font-mono text-sky-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              Active Arsenal
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {IAF_AIRCRAFT.map((plane) => (
              <div
                key={plane.name}
                className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-md bg-white/10 text-sky-300 border border-white/15">
                      {plane.category}
                    </span>
                    <span className="text-xs font-mono text-white/50">
                      {plane.origin}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors font-['Rajdhani'] tracking-wide">
                      {plane.name}
                    </h3>
                    <div className="text-xs text-sky-400 font-medium mt-0.5">
                      {plane.role}
                    </div>
                  </div>

                  <p className="text-xs text-white/60 leading-relaxed">
                    {plane.keyFeatures}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-bold text-white/40 uppercase font-mono">
                      Speed & Range:
                    </div>
                    <div className="text-xs text-amber-300 font-mono font-semibold">
                      {plane.maxSpeed}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="text-[11px] font-bold text-white/40 uppercase font-mono">
                    Armaments / Payload:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {plane.armaments.map((arm, aIdx) => (
                      <span key={aIdx} className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/70">
                        {arm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tri-Service Ranks Tab */}
      {activeTab === 'ranks' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
            <h2 className="text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
              TRI-SERVICE OFFICER EQUIVALENT RANKS
            </h2>
            <p className="text-xs text-white/60 mt-1">
              Direct parity across the Indian Air Force, Indian Army, and Indian Navy from Commissioning to 5-Star Honor.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full text-left text-xs text-white/80">
              <thead className="bg-white/10 border-b border-white/10 text-sky-300 font-mono uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Level</th>
                  <th className="p-4">Indian Air Force</th>
                  <th className="p-4">Indian Army</th>
                  <th className="p-4">Indian Navy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {TRI_SERVICE_RANKS.map((r) => (
                  <tr key={r.tier} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-mono font-bold text-white/40">Tier {r.tier}</td>
                    <td className="p-4 font-bold text-sky-400">{r.airForce}</td>
                    <td className="p-4 text-emerald-300 font-medium">{r.army}</td>
                    <td className="p-4 text-indigo-300 font-medium">{r.navy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* IAF Commands Tab */}
      {activeTab === 'commands' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
            <h2 className="text-xl font-bold text-white font-['Rajdhani'] tracking-wide">
              THE 7 OPERATIONAL & FUNCTIONAL COMMANDS
            </h2>
            <p className="text-xs text-white/60 mt-1">
              Headquarters and strategic operational zones safeguarding Indian airspace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {IAF_COMMANDS.map((cmd) => (
              <div key={cmd.name} className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-white font-['Rajdhani'] tracking-wide">
                    {cmd.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-sky-400 font-mono font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{cmd.hq}</span>
                  </div>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {cmd.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
