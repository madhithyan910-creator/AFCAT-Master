export interface AircraftModel {
  id: string;
  name: string;
  codename: string;
  category: 'Fighter Jet' | 'Combat Helicopter' | 'Transport' | 'Early Warning & Recon';
  countryOfOrigin: string;
  generation: string;
  role: string;
  maxSpeed: string;
  combatRadius: string;
  serviceCeiling: string;
  squadrons: string[];
  weapons: string[];
  keyMissions: string[];
  imageUrl: string;
  description: string;
}

export const AIRCRAFT_FLEET: AircraftModel[] = [
  {
    id: 'rafale',
    name: 'Dassault Rafale EH/DH',
    codename: 'Omnirole Jet',
    category: 'Fighter Jet',
    countryOfOrigin: 'France (Dassault Aviation)',
    generation: '4.5 Generation',
    role: 'Omnirole Air Superiority & Deep Strike',
    maxSpeed: 'Mach 1.8 (2,223 km/h)',
    combatRadius: '1,850 km (ferry range 3,700 km)',
    serviceCeiling: '50,000 ft (15,240 m)',
    squadrons: ['No. 17 Squadron (Golden Arrows, Ambala AFS)', 'No. 101 Squadron (Falcons, Hasimara AFS)'],
    weapons: ['Meteor BVR Air-to-Air (100+ km)', 'SCALP Deep Strike Cruise Missile (300+ km)', 'HAMMER Precision Guided Munitions', 'MICA Multi-mission Air-to-Air'],
    keyMissions: ['Air-to-Air Dominance', 'Nuclear Deterrence capable', 'Precision Deep Strike inside enemy airspace'],
    imageUrl: '/assets/aircraft/rafale.svg',
    description: 'The Dassault Rafale is India\'s spearhead 4.5 generation omnirole fighter, equipped with Thales RBE2 Active Electronically Scanned Array (AESA) radar, SPECTRA electronic warfare suite, and front-sector optronics (FSO).'
  },
  {
    id: 'su30mki',
    name: 'Sukhoi Su-30MKI',
    codename: 'Flanker-H',
    category: 'Fighter Jet',
    countryOfOrigin: 'Russia / India (HAL license built)',
    generation: '4+ Generation',
    role: 'Twin-seater Multi-role Long-range Air Dominance',
    maxSpeed: 'Mach 2.0 (2,120 km/h)',
    combatRadius: '3,000 km (with internal fuel)',
    serviceCeiling: '56,800 ft (17,300 m)',
    squadrons: ['No. 20 Squadron (Lightnings, Pune)', 'No. 222 Squadron (Tigersharks, Thanjavur - BrahMos equipped)'],
    weapons: ['BrahMos-A Supersonic Cruise Missile (450 km)', 'Astra Mk-1 BVRAAM', 'R-77 & R-73', 'KAB-500 laser-guided bombs'],
    keyMissions: ['Long-range Maritime Strike', 'Air Dominance & Escort', 'Strategic Interdiction'],
    imageUrl: '/assets/aircraft/su30mki.svg',
    description: 'The backbone of the IAF fighter fleet (~260+ aircraft), featuring canard foreplanes, AL-31FP thrust-vectoring engines for super-maneuverability, and integration with the deadly BrahMos supersonic cruise missile.'
  },
  {
    id: 'tejas',
    name: 'HAL Tejas LCA Mk-1A',
    codename: 'Flying Dagger',
    category: 'Fighter Jet',
    countryOfOrigin: 'India (Hindustan Aeronautics Limited)',
    generation: '4+ Generation',
    role: 'Light Combat Aircraft (LCA)',
    maxSpeed: 'Mach 1.6 (1,980 km/h)',
    combatRadius: '500 km (ferry range 3,000 km with drop tanks)',
    serviceCeiling: '50,000 ft (15,200 m)',
    squadrons: ['No. 45 Squadron (Flying Daggers, Sulur)', 'No. 18 Squadron (Flying Bullets)'],
    weapons: ['Astra Mk-1 & Mk-2 BVRAAM', 'Python-5 & Derby AAM', 'R-73', 'Laser Guided Bombs (LGB)'],
    keyMissions: ['Air Defence', 'Close Air Support (CAS)', 'Point Interception'],
    imageUrl: '/assets/aircraft/tejas.svg',
    description: 'Indigenous single-engine delta wing supersonic fighter with digital fly-by-wire flight control system (FCS), composite structure (45% by weight), in-flight refueling probe, and ELTA/Uttam AESA radar.'
  },
  {
    id: 'mirage2000',
    name: 'Dassault Mirage 2000 I/TI',
    codename: 'Vajra (Thunderbolt)',
    category: 'Fighter Jet',
    countryOfOrigin: 'France (Dassault Aviation)',
    generation: '4th Generation (upgraded)',
    role: 'Precision Strike & Multi-role Interceptor',
    maxSpeed: 'Mach 2.2 (2,336 km/h)',
    combatRadius: '1,550 km',
    serviceCeiling: '59,000 ft (17,060 m)',
    squadrons: ['No. 1 Squadron (Tigers, Gwalior)', 'No. 7 Squadron (Battle Axes)', 'No. 9 Squadron (Wolfpack)'],
    weapons: ['SPICE 2000 Precision Penetrator Bomb', 'MICA Air-to-Air Missiles', 'Matra Super 530D', 'Crystal Maze AGM'],
    keyMissions: ['1999 Kargil War Tiger Hill strikes', '2019 Balakot Air Strikes', 'Nuclear Delivery role'],
    imageUrl: '/assets/aircraft/mirage2000.svg',
    description: 'Renowned combat veteran of the Indian Air Force. Played the decisive role in the 1999 Kargil War using Paveway laser-guided bombs, and executed the 2019 Balakot precision strike with SPICE-2000 penetrators.'
  },
  {
    id: 'mig29',
    name: 'Mikoyan MiG-29 UPG',
    codename: 'Baaz (Falcon)',
    category: 'Fighter Jet',
    countryOfOrigin: 'Russia (upgraded in India)',
    generation: '4th Generation (UPG standard)',
    role: 'Air Superiority Interceptor',
    maxSpeed: 'Mach 2.25 (2,400 km/h)',
    combatRadius: '1,430 km',
    serviceCeiling: '59,100 ft (18,013 m)',
    squadrons: ['No. 28 Squadron (First Supersonics)', 'No. 47 Squadron (Black Archers, Adampur)'],
    weapons: ['R-77 BVRAAM', 'R-73 Dogfight missile', 'Kh-35 anti-ship missiles', 'KAB precision bombs'],
    keyMissions: ['Air Defence Interception', 'High Altitude Patrols in Ladakh', 'Combat Air Patrols (CAP)'],
    imageUrl: '/assets/aircraft/mig29.svg',
    description: 'Upgraded with conformal fuel tanks, Zhuk-M2E radar, modern glass cockpit, and mid-air refueling probe. Deployed extensively for high-altitude air patrols across Ladakh and Kashmir.'
  },
  {
    id: 'apache',
    name: 'Boeing AH-64E Apache Guardian',
    codename: 'Flying Tank',
    category: 'Combat Helicopter',
    countryOfOrigin: 'United States (Boeing)',
    generation: 'Dedicated Attack Helo',
    role: 'Heavy All-weather Attack Helicopter',
    maxSpeed: '300 km/h (162 knots)',
    combatRadius: '480 km',
    serviceCeiling: '21,000 ft (6,400 m)',
    squadrons: ['No. 125 Helicopter Squadron (Gladiators, Pathankot)', 'Jorhat / Leh detachments'],
    weapons: ['AGM-114 Hellfire Anti-Tank Missiles (16x)', 'Stinger Air-to-Air Missiles', 'Hydra 70mm Rockets', '30mm M230 Chain Gun'],
    keyMissions: ['Anti-Armor Operations', 'Mountain Warfare Support', 'Air-to-Air Helicopter Interception'],
    imageUrl: '/assets/aircraft/apache.svg',
    description: 'World\'s premier attack helicopter, equipped with mast-mounted AN/APG-78 Longbow fire-control radar, night vision sensor (M-TADS/PNVS), and datalink capability to command unmanned drones.'
  },
  {
    id: 'chinook',
    name: 'Boeing CH-47F (I) Chinook',
    codename: 'Tandem Rotor Heavy Lift',
    category: 'Combat Helicopter',
    countryOfOrigin: 'United States (Boeing)',
    generation: 'Modernized Tandem Heavy Lift',
    role: 'Tactical Heavy Airlift & Disaster Relief',
    maxSpeed: '315 km/h',
    combatRadius: '370 km (payload dependent)',
    serviceCeiling: '20,000 ft',
    squadrons: ['No. 126 Helicopter Flight (Featherweights, Chandigarh)', 'Mohanbari (Assam)'],
    weapons: ['Defensive 7.62mm M240 machine guns on pintle mounts'],
    keyMissions: ['Airlifting M777 Ultra-Light Howitzers to high altitudes', 'Troop insertion in remote Himalayan outposts', 'Border Roads Organisation heavy equipment transfer'],
    imageUrl: '/assets/aircraft/chinook.svg',
    description: 'Features counter-rotating twin tandem rotors eliminating the need for an anti-torque tail rotor. Crucial for delivering heavy artillery and road construction vehicles to Himalayan mountain tops.'
  },
  {
    id: 'c17',
    name: 'Boeing C-17 Globemaster III',
    codename: 'Sky Titan',
    category: 'Transport',
    countryOfOrigin: 'United States (Boeing)',
    generation: 'Heavy Strategic Airlifter',
    role: 'Strategic Heavy Troop & Armor Transport',
    maxSpeed: '830 km/h (Mach 0.74)',
    combatRadius: '4,480 km with 71-tonne payload',
    serviceCeiling: '45,000 ft',
    squadrons: ['No. 81 Squadron (Skylords, Hindan AFS, Ghaziabad)'],
    weapons: ['Countermeasure Dispensing System (flares/chaff)'],
    keyMissions: ['Operation Ganga (Ukraine evacuation)', 'Operation Kaveri (Sudan evacuation)', 'Rapid deployment of T-90 tanks to Ladakh'],
    imageUrl: '/assets/aircraft/c17.svg',
    description: 'Heavy lifter capable of transporting Main Battle Tanks (T-90/Arjun) directly to high-altitude unpaved airstrips like Daulat Beg Oldie (DBO) at 16,614 ft.'
  },
  {
    id: 'netra',
    name: 'DRDO / Embraer Netra AEW&C',
    codename: 'Eye in the Sky',
    category: 'Early Warning & Recon',
    countryOfOrigin: 'India / Brazil (Embraer ERJ-145 platform)',
    generation: 'Active Airborne Early Warning',
    role: 'Airborne Early Warning and Battle Management',
    maxSpeed: '833 km/h',
    combatRadius: '3,000 km',
    serviceCeiling: '37,000 ft',
    squadrons: ['No. 200 Squadron (Bhatinda AFS)'],
    weapons: ['Self-protection suite, electronic counter-countermeasures'],
    keyMissions: ['Air Battle Surveillance', 'Vectoring interceptors during 2019 air skirmish', 'Electronic Intelligence (ELINT)'],
    imageUrl: '/assets/aircraft/netra.svg',
    description: 'Equipped with a dorsal Active Electronically Scanned Array (AESA) radar providing 240-degree electronic coverage, secondary surveillance radar (IFF), voice and tactical data links.'
  }
];
