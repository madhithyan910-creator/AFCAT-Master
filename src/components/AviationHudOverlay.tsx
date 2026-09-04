import React from 'react';

interface AviationHudOverlayProps {
  enabled?: boolean;
  intensity?: 'subtle' | 'standard' | 'high';
  focusDensity?: 'comfortable' | 'compact' | 'focus';
}

export const AviationHudOverlay: React.FC<AviationHudOverlayProps> = ({
  enabled = true,
  intensity = 'subtle',
  focusDensity = 'comfortable'
}) => {
  // If in 'focus' exam mode, disable decorative HUD overlays for absolute distraction-free focus
  if (!enabled || focusDensity === 'focus') return null;

  // Determine opacity classes based on user intensity preference
  const opacityClass =
    intensity === 'high'
      ? 'opacity-45'
      : intensity === 'standard'
      ? 'opacity-30'
      : 'opacity-18'; // Subtle by default, elegant & unobtrusive

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none select-none z-0 overflow-hidden transition-opacity duration-700 ${opacityClass}`}
    >
      {/* -------------------------------------------------------------
          1. TOP HEADING TAPE / COMPASS RIBBON (CENTERED TOP)
      ------------------------------------------------------------- */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 flex flex-col items-center">
        {/* Compass Ticks SVG */}
        <svg
          viewBox="0 0 600 40"
          className="w-full h-8 text-sky-400 stroke-current fill-none overflow-visible"
        >
          {/* Main horizontal tape axis */}
          <line x1="30" y1="24" x2="570" y2="24" strokeWidth="1.2" strokeOpacity="0.7" />

          {/* Compass degree graduation marks */}
          {Array.from({ length: 29 }).map((_, i) => {
            const x = 40 + i * 18.5;
            const isMajor = i % 4 === 0;
            const isMedium = i % 2 === 0 && !isMajor;
            const deg = 20 + i * 5; // e.g. 020 to 160

            return (
              <g key={i}>
                <line
                  x1={x}
                  y1={isMajor ? 10 : isMedium ? 16 : 20}
                  x2={x}
                  y2="24"
                  strokeWidth={isMajor ? "1.5" : "1"}
                  strokeOpacity={isMajor ? "0.9" : "0.5"}
                />
                {isMajor && (
                  <text
                    x={x}
                    y="7"
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="8"
                    fontFamily="monospace"
                    fontWeight="bold"
                    fillOpacity="0.8"
                  >
                    {String(deg).padStart(3, '0')}
                  </text>
                )}
              </g>
            );
          })}

          {/* Center Caret / Current Heading Marker */}
          <polygon
            points="300,26 295,34 305,34"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            className="text-amber-400 fill-amber-400"
          />
          <line
            x1="300"
            y1="4"
            x2="300"
            y2="24"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            className="stroke-amber-400"
          />
        </svg>

        {/* Heading Digital Readout */}
        <div className="flex items-center gap-3 font-mono text-[9px] sm:text-[10px] text-sky-300 font-bold tracking-widest uppercase -mt-1">
          <span className="text-white/40 hidden sm:inline">IAF-AFCAT TAC-NAV</span>
          <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-400/30 text-amber-300">
            ▲ HDG 045° MAG
          </span>
          <span className="text-emerald-400/80 hidden sm:inline">TRK 046° // SYS NORM</span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. CORNER TACTICAL RETICLES & TELEMETRY BLOCKS
      ------------------------------------------------------------- */}

      {/* Top-Left Corner Reticle */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2">
        <svg width="72" height="72" viewBox="0 0 72 72" className="text-sky-400 stroke-current fill-none">
          {/* Bracket */}
          <path d="M 4 48 L 4 4 L 48 4" strokeWidth="1.5" strokeOpacity="0.9" />
          {/* Notch ticks */}
          <line x1="4" y1="16" x2="10" y2="16" strokeWidth="1" />
          <line x1="4" y1="32" x2="8" y2="32" strokeWidth="1" />
          <line x1="16" y1="4" x2="16" y2="10" strokeWidth="1" />
          <line x1="32" y1="4" x2="32" y2="8" strokeWidth="1" />
          {/* Corner diagonal accent */}
          <line x1="8" y1="8" x2="14" y2="14" strokeWidth="1" strokeOpacity="0.7" />
        </svg>

        <div className="font-mono text-[9px] text-sky-300/80 leading-relaxed -mt-3 pl-2 hidden sm:block">
          <div className="font-bold text-sky-400">IAF TAC-HUD // MK-IV</div>
          <div>LAT 28°34'N LON 77°12'E</div>
          <div>GRID: 43R (AIR HQ / DELHI)</div>
          <div className="text-emerald-400">MASTER ARM: SIMULATION</div>
        </div>
      </div>

      {/* Top-Right Corner Reticle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col items-end gap-2 text-right">
        <svg width="72" height="72" viewBox="0 0 72 72" className="text-sky-400 stroke-current fill-none">
          {/* Bracket */}
          <path d="M 68 48 L 68 4 L 24 4" strokeWidth="1.5" strokeOpacity="0.9" />
          {/* Notch ticks */}
          <line x1="68" y1="16" x2="62" y2="16" strokeWidth="1" />
          <line x1="68" y1="32" x2="64" y2="32" strokeWidth="1" />
          <line x1="56" y1="4" x2="56" y2="10" strokeWidth="1" />
          <line x1="40" y1="4" x2="40" y2="8" strokeWidth="1" />
          {/* Corner diagonal accent */}
          <line x1="64" y1="8" x2="58" y2="14" strokeWidth="1" strokeOpacity="0.7" />
        </svg>

        <div className="font-mono text-[9px] text-sky-300/80 leading-relaxed -mt-3 pr-2 hidden sm:block">
          <div className="font-bold text-amber-300">RADAR: AESA ACTIVE [TWS]</div>
          <div>SCAN: ±60° AZIMUTH</div>
          <div>IFF: 7700 SQUAWK OK</div>
          <div className="text-emerald-400">DATALINK: LINK-16 SECURE</div>
        </div>
      </div>

      {/* Bottom-Left Corner Reticle */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-col gap-2">
        <div className="font-mono text-[9px] text-sky-300/80 leading-relaxed pl-2 mb-1 hidden sm:block">
          <div>ALT: 24,500 FT MSL</div>
          <div>R-ALT: 4,820 FT AGL</div>
          <div>MACH: 0.84 // IAS: 420 KT</div>
          <div className="text-emerald-400">G-LOAD: +1.0G (MAX 9.0G)</div>
        </div>

        <svg width="72" height="72" viewBox="0 0 72 72" className="text-sky-400 stroke-current fill-none">
          {/* Bracket */}
          <path d="M 4 24 L 4 68 L 48 68" strokeWidth="1.5" strokeOpacity="0.9" />
          {/* Notch ticks */}
          <line x1="4" y1="56" x2="10" y2="56" strokeWidth="1" />
          <line x1="4" y1="40" x2="8" y2="40" strokeWidth="1" />
          <line x1="16" y1="68" x2="16" y2="62" strokeWidth="1" />
          <line x1="32" y1="68" x2="32" y2="64" strokeWidth="1" />
          {/* Corner diagonal accent */}
          <line x1="8" y1="64" x2="14" y2="58" strokeWidth="1" strokeOpacity="0.7" />
        </svg>
      </div>

      {/* Bottom-Right Corner Reticle */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-2 text-right">
        <div className="font-mono text-[9px] text-sky-300/80 leading-relaxed pr-2 mb-1 hidden sm:block">
          <div>AOA: 5.2° // PITCH: +02.4°</div>
          <div>WP 01: SQUADRON HQ</div>
          <div className="text-amber-300 font-bold">MODE: CADET SORTIE READY</div>
          <div className="text-emerald-400 font-bold">AIR COMBAT DECK ACTIVE</div>
        </div>

        <svg width="72" height="72" viewBox="0 0 72 72" className="text-sky-400 stroke-current fill-none">
          {/* Bracket */}
          <path d="M 68 24 L 68 68 L 24 68" strokeWidth="1.5" strokeOpacity="0.9" />
          {/* Notch ticks */}
          <line x1="68" y1="56" x2="62" y2="56" strokeWidth="1" />
          <line x1="68" y1="40" x2="64" y2="40" strokeWidth="1" />
          <line x1="56" y1="68" x2="56" y2="62" strokeWidth="1" />
          <line x1="40" y1="68" x2="40" y2="64" strokeWidth="1" />
          {/* Corner diagonal accent */}
          <line x1="64" y1="64" x2="58" y2="58" strokeWidth="1" strokeOpacity="0.7" />
        </svg>
      </div>

      {/* -------------------------------------------------------------
          3. CENTER ARTIFICIAL HORIZON & PITCH LADDER (BORESIGHT)
      ------------------------------------------------------------- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full text-sky-400 stroke-current fill-none overflow-visible">
          {/* Aircraft Boresight / Flight Path Vector Symbol in Center */}
          <g transform="translate(200, 200)">
            {/* Center circle */}
            <circle cx="0" cy="0" r="5" strokeWidth="1.5" strokeOpacity="0.9" />
            {/* Left wing */}
            <line x1="-22" y1="0" x2="-6" y2="0" strokeWidth="1.8" strokeOpacity="0.9" />
            {/* Right wing */}
            <line x1="6" y1="0" x2="22" y2="0" strokeWidth="1.8" strokeOpacity="0.9" />
            {/* Top rudder fin */}
            <line x1="0" y1="-6" x2="0" y2="-16" strokeWidth="1.8" strokeOpacity="0.9" />
          </g>

          {/* Pitch Ladder Bars */}
          {/* Horizon Line 00° */}
          <g transform="translate(200, 200)" strokeOpacity="0.6">
            <line x1="-120" y1="0" x2="-35" y2="0" strokeWidth="1.5" />
            <line x1="35" y1="0" x2="120" y2="0" strokeWidth="1.5" />
            <text x="-140" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.7" textAnchor="end">
              00
            </text>
            <text x="140" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.7">
              00
            </text>
          </g>

          {/* +05° Pitch (Upward, tick pointing down toward horizon) */}
          <g transform="translate(200, 160)" strokeOpacity="0.45">
            <line x1="-70" y1="0" x2="-30" y2="0" strokeWidth="1.2" />
            <line x1="-70" y1="0" x2="-70" y2="6" strokeWidth="1.2" />
            <line x1="30" y1="0" x2="70" y2="0" strokeWidth="1.2" />
            <line x1="70" y1="0" x2="70" y2="6" strokeWidth="1.2" />
            <text x="-82" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.6" textAnchor="end">
              05
            </text>
            <text x="82" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.6">
              05
            </text>
          </g>

          {/* +10° Pitch */}
          <g transform="translate(200, 120)" strokeOpacity="0.35">
            <line x1="-90" y1="0" x2="-35" y2="0" strokeWidth="1.2" />
            <line x1="-90" y1="0" x2="-90" y2="8" strokeWidth="1.2" />
            <line x1="35" y1="0" x2="90" y2="0" strokeWidth="1.2" />
            <line x1="90" y1="0" x2="90" y2="8" strokeWidth="1.2" />
            <text x="-102" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.5" textAnchor="end">
              10
            </text>
            <text x="102" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.5">
              10
            </text>
          </g>

          {/* -05° Pitch (Downward, dashed lines, ticks pointing up toward horizon) */}
          <g transform="translate(200, 240)" strokeOpacity="0.45">
            <line x1="-70" y1="0" x2="-30" y2="0" strokeWidth="1.2" strokeDasharray="5 4" />
            <line x1="-70" y1="0" x2="-70" y2="-6" strokeWidth="1.2" />
            <line x1="30" y1="0" x2="70" y2="0" strokeWidth="1.2" strokeDasharray="5 4" />
            <line x1="70" y1="0" x2="70" y2="-6" strokeWidth="1.2" />
            <text x="-82" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.6" textAnchor="end">
              -05
            </text>
            <text x="82" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.6">
              -05
            </text>
          </g>

          {/* -10° Pitch */}
          <g transform="translate(200, 280)" strokeOpacity="0.35">
            <line x1="-90" y1="0" x2="-35" y2="0" strokeWidth="1.2" strokeDasharray="6 4" />
            <line x1="-90" y1="0" x2="-90" y2="-8" strokeWidth="1.2" />
            <line x1="35" y1="0" x2="90" y2="0" strokeWidth="1.2" strokeDasharray="6 4" />
            <line x1="90" y1="0" x2="90" y2="-8" strokeWidth="1.2" />
            <text x="-102" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.5" textAnchor="end">
              -10
            </text>
            <text x="102" y="3" fontSize="8" fontFamily="monospace" fill="currentColor" fillOpacity="0.5">
              -10
            </text>
          </g>
        </svg>
      </div>

      {/* -------------------------------------------------------------
          4. TACTICAL RADAR RANGE RINGS & AZIMUTH GRID (BACKGROUND)
      ------------------------------------------------------------- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[720px] h-[520px] sm:h-[720px]">
        <svg viewBox="0 0 700 700" className="w-full h-full text-sky-400 stroke-current fill-none overflow-visible">
          {/* Inner Range Ring (10 NM) */}
          <circle
            cx="350"
            cy="350"
            r="160"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            strokeOpacity="0.3"
          />
          <text
            x="355"
            y="195"
            fill="currentColor"
            fontSize="8"
            fontFamily="monospace"
            fillOpacity="0.4"
          >
            10 NM
          </text>

          {/* Outer Range Ring (25 NM) */}
          <circle
            cx="350"
            cy="350"
            r="300"
            strokeWidth="0.9"
            strokeDasharray="8 8"
            strokeOpacity="0.25"
          />
          <text
            x="355"
            y="55"
            fill="currentColor"
            fontSize="8"
            fontFamily="monospace"
            fillOpacity="0.4"
          >
            25 NM
          </text>

          {/* Azimuth 30° radial tick segments */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="350"
              y1="40"
              x2="350"
              y2="55"
              strokeWidth="1.2"
              strokeOpacity="0.4"
              transform={`rotate(${deg} 350 350)`}
            />
          ))}

          {/* Rotating Subtle Radar Sweep Line */}
          <g className="animate-hud-sweep origin-center">
            <line
              x1="350"
              y1="350"
              x2="350"
              y2="50"
              strokeWidth="1.5"
              strokeOpacity="0.5"
              className="stroke-sky-300"
            />
            {/* Faint Sweep Cone Arc */}
            <path
              d="M 350 350 L 350 50 A 300 300 0 0 1 450 75 Z"
              fill="url(#radar-gradient)"
              stroke="none"
              opacity="0.25"
            />
          </g>

          <defs>
            <radialGradient id="radar-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.0" />
              <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* -------------------------------------------------------------
          5. AIRSPEED & ALTIMETER HUD VERTICAL SIDE TAPES
      ------------------------------------------------------------- */}
      {/* Left Airspeed Scale (IAS) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-14 hidden md:flex flex-col items-end gap-1 text-sky-400 font-mono text-[9px]">
        <span className="text-[10px] font-bold text-sky-300">460</span>
        <div className="w-4 h-[1px] bg-sky-400/40" />
        <span className="text-[10px] font-bold text-sky-300">440</span>
        <div className="w-4 h-[1px] bg-sky-400/40" />
        <div className="px-2 py-1 rounded bg-sky-500/20 border border-sky-400/50 text-white font-extrabold text-[11px] shadow-sm">
          ▶ 420 KT
        </div>
        <div className="w-4 h-[1px] bg-sky-400/40" />
        <span className="text-[10px] font-bold text-sky-300">400</span>
        <div className="w-4 h-[1px] bg-sky-400/40" />
        <span className="text-[10px] font-bold text-sky-300">380</span>
        <span className="text-[8px] text-white/40 tracking-wider uppercase mt-1">AIRSPEED</span>
      </div>

      {/* Right Altitude Scale (ALT) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-14 hidden md:flex flex-col items-start gap-1 text-sky-400 font-mono text-[9px]">
        <span className="text-[10px] font-bold text-sky-300">26.0</span>
        <div className="w-4 h-[1px] bg-sky-400/40" />
        <span className="text-[10px] font-bold text-sky-300">25.0</span>
        <div className="w-4 h-[1px] bg-sky-400/40" />
        <div className="px-2 py-1 rounded bg-sky-500/20 border border-sky-400/50 text-white font-extrabold text-[11px] shadow-sm">
          ◀ 24,500
        </div>
        <div className="w-4 h-[1px] bg-sky-400/40" />
        <span className="text-[10px] font-bold text-sky-300">24.0</span>
        <div className="w-4 h-[1px] bg-sky-400/40" />
        <span className="text-[10px] font-bold text-sky-300">23.0</span>
        <span className="text-[8px] text-white/40 tracking-wider uppercase mt-1">BARO ALT</span>
      </div>

      {/* -------------------------------------------------------------
          6. FINE AVIONICS GRID CROSSHAIRS (+)
      ------------------------------------------------------------- */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-sky-400/40 font-mono text-xs">
        +
      </div>
      <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 text-sky-400/40 font-mono text-xs">
        +
      </div>
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 text-sky-400/40 font-mono text-xs">
        +
      </div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 text-sky-400/40 font-mono text-xs">
        +
      </div>

      {/* -------------------------------------------------------------
          7. ULTRA-SUBTLE COCKPIT HUD SCANLINE
      ------------------------------------------------------------- */}
      <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-sky-400/0 via-sky-400/[0.04] to-sky-400/0 animate-hud-scanline pointer-events-none" />
    </div>
  );
};
