export interface AircraftInfo {
  name: string;
  category: 'Fighter' | 'Transport' | 'Helicopter' | 'Trainer / Special';
  origin: string;
  maxSpeed: string;
  role: string;
  keyFeatures: string;
  armaments: string[];
}

export interface RankMapping {
  airForce: string;
  army: string;
  navy: string;
  tier: number;
}

export interface WatWord {
  word: string;
  sampleSentence: string;
}

export interface SrtScenario {
  id: string;
  situation: string;
  idealReaction: string;
  olqHighlight: string;
}

export const IAF_AIRCRAFT: AircraftInfo[] = [
  {
    name: "Dassault Rafale",
    category: "Fighter",
    origin: "France",
    maxSpeed: "Mach 1.8 (2,223 km/h)",
    role: "4.5 Gen Omni-Role Air Superiority & Deep Strike",
    keyFeatures: "Twin-engine delta-canard, RBE2 AESA radar, SPECTRA electronic warfare suite, Meteor BVRAAM compatibility.",
    armaments: ["Meteor BVR missile (150+ km)", "SCALP deep-strike cruise missile", "HAMMER precision guidance bombs", "30mm GIAT cannon"]
  },
  {
    name: "Sukhoi Su-30MKI (Flanker-H)",
    category: "Fighter",
    origin: "Russia / India (HAL license)",
    maxSpeed: "Mach 2.0 (2,120 km/h)",
    role: "Twin-seat Long-Range Heavy Air Dominance",
    keyFeatures: "Thrust-vectoring engines, canards, Bars phased-array radar, air-to-air refueling, BrahMos-A integration.",
    armaments: ["BrahMos-A supersonic missile", "Astra Mk-1 BVR missile", "R-77, R-73", "KAB-500 precision bombs"]
  },
  {
    name: "HAL Tejas LCA (Mk-1 / 1A)",
    category: "Fighter",
    origin: "India (ADA / HAL)",
    maxSpeed: "Mach 1.6 (1,975 km/h)",
    role: "Indigenously Developed Lightweight Multi-Role Combat Aircraft",
    keyFeatures: "Smallest & lightest supersonic fighter in its class, tailless compound delta-wing, digital fly-by-wire, Uttam AESA radar.",
    armaments: ["Astra BVR missile", "Python-5 & Derby AAMs", "Laser Guided Bombs (LGB)", "23mm GSh-23 cannon"]
  },
  {
    name: "Mirage 2000 (Vajra)",
    category: "Fighter",
    origin: "France",
    maxSpeed: "Mach 2.2 (2,336 km/h)",
    role: "Multi-Role Precision Strike & Air Defence",
    keyFeatures: "Legendary combat performance in 1999 Kargil War (Tiger Hill bombing) and 2019 Balakot precision strike.",
    armaments: ["MICA air-to-air missiles", "Spice 2000 precision glide bombs", "Matra Magic-II", "Twin 30mm DEFA cannons"]
  },
  {
    name: "Mikoyan MiG-29 (UPG)",
    category: "Fighter",
    origin: "Russia / India upgraded",
    maxSpeed: "Mach 2.25 (2,450 km/h)",
    role: "Dedicated Air Superiority Interceptor",
    keyFeatures: "Zhuk-M radar, conformal fuel tanks for extended combat radius, OLS-UEM infrared search & track (IRST).",
    armaments: ["R-77 active radar AAM", "R-73 infrared AAM", "30mm GSh-30-1 cannon"]
  },
  {
    name: "Boeing AH-64E Apache Guardian",
    category: "Helicopter",
    origin: "USA",
    maxSpeed: "300 km/h",
    role: "All-Weather Heavy Attack Helicopter",
    keyFeatures: "Longbow millimeter-wave fire control radar, modern tandem cockpit, night-vision sensors, datalink capabilities.",
    armaments: ["AGM-114 Hellfire anti-tank missiles", "Hydra 70 rockets", "Stinger AAM", "30mm M230 chain gun"]
  },
  {
    name: "Boeing CH-47F Chinook",
    category: "Helicopter",
    origin: "USA",
    maxSpeed: "315 km/h",
    role: "Heavy-Lift Tandem Rotor Helicopter",
    keyFeatures: "Twin tandem rotors, sling load capacity up to 11 tonnes, operates in high-altitude Himalayan valleys carrying M777 howitzers.",
    armaments: ["Self-defence machine guns", "Advanced electronic countermeasure suites"]
  },
  {
    name: "HAL Prachand LCH",
    category: "Helicopter",
    origin: "India (HAL)",
    maxSpeed: "268 km/h",
    role: "Dedicated High-Altitude Light Combat Helicopter",
    keyFeatures: "First attack helicopter capable of landing and taking off at 5,000 meters in the Siachen glacier region with full payload.",
    armaments: ["Helina anti-tank missiles", "Mistral-2 AAMs", "70mm rocket pods", "20mm nose turret cannon"]
  },
  {
    name: "Boeing C-17 Globemaster III",
    category: "Transport",
    origin: "USA",
    maxSpeed: "830 km/h",
    role: "Strategic Heavy Military Transport Aircraft",
    keyFeatures: "Payload capacity of 77.5 tonnes, tactical landing on short unpaved airstrips (e.g., Daulat Beg Oldi in Ladakh).",
    armaments: ["Electronic warfare self-protection flares & chaff"]
  }
];

export const TRI_SERVICE_RANKS: RankMapping[] = [
  { tier: 1, airForce: "Flying Officer", army: "Lieutenant", navy: "Sub Lieutenant" },
  { tier: 2, airForce: "Flight Lieutenant", army: "Captain", navy: "Lieutenant" },
  { tier: 3, airForce: "Squadron Leader", army: "Major", navy: "Lieutenant Commander" },
  { tier: 4, airForce: "Wing Commander", army: "Lieutenant Colonel", navy: "Commander" },
  { tier: 5, airForce: "Group Captain", army: "Colonel", navy: "Captain" },
  { tier: 6, airForce: "Air Commodore", army: "Brigadier", navy: "Commodore" },
  { tier: 7, airForce: "Air Vice Marshal", army: "Major General", navy: "Rear Admiral" },
  { tier: 8, airForce: "Air Marshal", army: "Lieutenant General", navy: "Vice Admiral" },
  { tier: 9, airForce: "Air Chief Marshal", army: "General", navy: "Admiral" },
  { tier: 10, airForce: "Marshal of the IAF", army: "Field Marshal", navy: "Admiral of the Fleet" }
];

export const IAF_COMMANDS = [
  { name: "Western Air Command", hq: "New Delhi", role: "Primary operational command safeguarding Western border and high-altitude Ladakh." },
  { name: "Eastern Air Command", hq: "Shillong, Meghalaya", role: "Defends the northeastern frontiers, Sikkim, and the Siliguri corridor." },
  { name: "Central Air Command", hq: "Prayagraj (Allahabad), UP", role: "Covers central strategic heartland, major fighter bases (Gwalior, Bareilly)." },
  { name: "South Western Air Command", hq: "Gandhinagar, Gujarat", role: "Safeguards Rajasthan desert sector and Gujarat maritime border." },
  { name: "Southern Air Command", hq: "Thiruvananthapuram, Kerala", role: "Protects peninsular airspace and Indian Ocean maritime air surveillance." },
  { name: "Training Command", hq: "Bengaluru, Karnataka", role: "Directs flying, technical, and non-technical training academies (AFA Dundigal)." },
  { name: "Maintenance Command", hq: "Nagpur, Maharashtra", role: "Manages repair depots, overhauls, and supply logistics for aircraft fleet." }
];

export const SAMPLE_WAT_WORDS: WatWord[] = [
  { word: "Courage", sampleSentence: "Courage under fire ensures mission success." },
  { word: "Failure", sampleSentence: "Failure provides valuable data for future victories." },
  { word: "Discipline", sampleSentence: "Discipline turns tactical plans into flawless execution." },
  { word: "Leader", sampleSentence: "A good leader inspires confidence and leads from the front." },
  { word: "Risk", sampleSentence: "Calculated risk drives strategic breakthroughs." },
  { word: "Victory", sampleSentence: "Preparation and team synergy ensure decisive victory." },
  { word: "Tension", sampleSentence: "Composure dispels tension during critical sorties." },
  { word: "Weapon", sampleSentence: "Knowledge and advanced technology are potent weapons." },
  { word: "Order", sampleSentence: "Order brings clarity to chaotic situations." },
  { word: "Duty", sampleSentence: "Duty towards the nation stands above personal interest." }
];

export const SAMPLE_SRT_SCENARIOS: SrtScenario[] = [
  {
    id: "srt_1",
    situation: "During an outdoor exercise in a remote forest, one of your team members slips, fractures his ankle, and darkness is setting in with no mobile network.",
    idealReaction: "Administered immediate first aid and improvised splint using sturdy branches; set up shelter with available ponchos; signaled location using emergency whistle and torch; dispatched two team members with compass to the base while remaining with the casualty.",
    olqHighlight: "Resourcefulness, Initiative, Decision Making, Care for Team"
  },
  {
    id: "srt_2",
    situation: "You are the captain of a patrol boat and receive a distress call about a civilian boat capsizing 2 km away, but your own engine starts overheating.",
    idealReaction: "Switched to secondary propulsion/throttled down to prevent engine seizure; radioed shore base and nearby vessels with coordinates; steered towards the capsized boat; deployed life buoys and successfully rescued civilians while monitoring vessel temperature.",
    olqHighlight: "Courage, Calmness under stress, Quick Thinking"
  },
  {
    id: "srt_3",
    situation: "Your subordinate refuses to carry out a critical maintenance inspection due to fatigue before a scheduled flight.",
    idealReaction: "Understood the safety implications; appreciated his honesty regarding fatigue; assigned another certified technician immediately to inspect the aircraft; scheduled rest for the subordinate and debriefed on crew resource management.",
    olqHighlight: "Sense of Responsibility, Human Understanding, Safety Consciousness"
  }
];
