import React, { useState } from 'react';
import { AIRCRAFT_FLEET, AircraftModel } from '../data/aircraftData';
import { sound } from '../utils/audio';
import { 
  Plane, 
  Shield, 
  Gauge, 
  MapPin, 
  Crosshair, 
  Search, 
  Filter, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

export const FleetGalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedJet, setSelectedJet] = useState<AircraftModel | null>(AIRCRAFT_FLEET[0]);

  const categories = [
    { id: 'all', label: 'All Fleet Units' },
    { id: 'Fighter Jet', label: 'Fighter Jets (Combat)' },
    { id: 'Combat Helicopter', label: 'Helicopters' },
    { id: 'Transport', label: 'Strategic Transport' },
    { id: 'Early Warning & Recon', label: 'AEW&C / Recon' }
  ];

  const filteredFleet = AIRCRAFT_FLEET.filter((jet) => {
    const matchesCat = selectedCategory === 'all' || jet.category === selectedCategory;
    const matchesSearch = 
      jet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      jet.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      jet.countryOfOrigin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      jet.weapons.some(w => w.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16 animate-fade-in text-white">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
              <Plane className="w-3.5 h-3.5" />
              <span>INDIAN AIR FORCE AERIAL RECONNAISSANCE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Rajdhani'] tracking-tight">
              FIGHTER JET & COMBAT FLEET RECON
            </h1>
            <p className="text-xs sm:text-sm text-white/60">
              High-resolution photographic reconnaissance and tactical specs of frontline IAF fighters, strike platforms, and logistics lifters.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Rafale, BrahMos, Mach..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-sky-400 focus:bg-white/10 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              sound.playClick();
              setSelectedCategory(cat.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedCategory === cat.id
                ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Grid: Left List / Right Active Inspection Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Thumbnails List */}
        <div className="lg:col-span-5 space-y-3 max-h-[750px] overflow-y-auto pr-1">
          {filteredFleet.map((aircraft) => {
            const isSelected = selectedJet?.id === aircraft.id;
            return (
              <div
                key={aircraft.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedJet(aircraft);
                }}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 group ${
                  isSelected
                    ? 'bg-sky-500/20 border-sky-400/60 shadow-lg shadow-sky-500/10'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="w-20 h-16 rounded-xl overflow-hidden bg-slate-900 border border-white/10 flex-shrink-0 relative">
                  <img
                    src={aircraft.imageUrl}
                    alt={aircraft.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 right-1 text-[9px] px-1 py-0.2 rounded bg-black/60 font-mono text-sky-300">
                    {aircraft.generation}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white truncate font-['Rajdhani']">
                      {aircraft.name}
                    </h3>
                    <span className="text-[10px] text-sky-400 font-mono font-semibold">
                      {aircraft.maxSpeed.split(' ')[0]}
                    </span>
                  </div>
                  <div className="text-[11px] text-white/50 truncate">{aircraft.role}</div>
                  <div className="text-[10px] text-white/40 mt-1 flex items-center gap-2">
                    <span>🌍 {aircraft.countryOfOrigin.split(' ')[0]}</span>
                    <span>•</span>
                    <span className="text-sky-300 font-medium truncate">{aircraft.codename}</span>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 text-white/30 group-hover:text-white transition-colors ${isSelected ? 'text-sky-400' : ''}`} />
              </div>
            );
          })}
        </div>

        {/* Right Tactical Detailed Dossier */}
        <div className="lg:col-span-7">
          {selectedJet ? (
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl space-y-6">
              {/* Photo Banner */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
                <img
                  src={selectedJet.imageUrl}
                  alt={selectedJet.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/40 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-sky-500/80 text-white font-mono">
                      {selectedJet.category} • {selectedJet.generation}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Rajdhani'] tracking-wide mt-1">
                      {selectedJet.name}
                    </h2>
                    <p className="text-xs text-sky-300 font-mono">Codename: {selectedJet.codename}</p>
                  </div>

                  <div className="text-right sm:text-right">
                    <span className="text-xs text-white/60 font-mono block">Top Speed</span>
                    <span className="text-lg font-bold text-amber-300 font-mono">{selectedJet.maxSpeed}</span>
                  </div>
                </div>
              </div>

              {/* Specs & Intelligence Report */}
              <div className="p-6 space-y-6 pt-0">
                {/* Tactical Specs Bar */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-black/30 border border-white/10 font-mono text-center">
                  <div>
                    <span className="text-[10px] text-white/40 block">COMBAT RADIUS</span>
                    <span className="text-xs font-bold text-sky-300">{selectedJet.combatRadius}</span>
                  </div>
                  <div className="border-x border-white/10 px-2">
                    <span className="text-[10px] text-white/40 block">SERVICE CEILING</span>
                    <span className="text-xs font-bold text-emerald-300">{selectedJet.serviceCeiling}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block">ORIGIN</span>
                    <span className="text-xs font-bold text-white truncate block">{selectedJet.countryOfOrigin.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold font-mono text-white/40 uppercase tracking-wider">
                    OPERATIONAL PROFILE
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {selectedJet.description}
                  </p>
                </div>

                {/* Weapons & Payloads */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-rose-400 uppercase tracking-wider">
                    <Crosshair className="w-3.5 h-3.5" />
                    <span>ARMAMENT & WEAPONS PAYLOAD</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedJet.weapons.map((w, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Squadrons & Deployments */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-sky-400 uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>IAF SQUADRONS & OPERATIONAL BASES</span>
                  </div>
                  <div className="space-y-1.5">
                    {selectedJet.squadrons.map((sq, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs text-sky-200">
                        {sq}
                      </div>
                    ))}
                  </div>
                </div>

                {/* High-Yield AFCAT Fact Tip */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">AFCAT Exam Recall: </span>
                    <span>Recognize the weapon-to-aircraft mapping (e.g. SCALP & Meteor with Rafale; BrahMos-A with Su-30MKI; SPICE 2000 with Mirage 2000; Longbow Hellfire with Apache).</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-96 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/40">
              Select an aircraft from the left list to view tactical reconnaissance dossier.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
