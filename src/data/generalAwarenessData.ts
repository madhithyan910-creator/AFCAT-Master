import { TopicLesson, Flashcard } from '../types';

export const GENERAL_AWARENESS_LESSONS: TopicLesson[] = [
  {
    id: 'ga_harappa',
    subject: 'general_awareness',
    chapter: 'Ancient Indian History',
    title: 'Harappan Civilization (Indus-Saraswati)',
    estimatedMinutes: 20,
    introduction: 'The Harappan Civilization (c. 2600-1900 BC mature phase) was one of the greatest Bronze Age urban civilizations in human history, characterized by grid town planning, covered drainage, and standardized weights.',
    concepts: [
      'Excavation Milestones: Discovered in 1920-21 by Daya Ram Sahni (Harappa) and R.D. Banerjee (Mohenjo-Daro).',
      'Geographical Extent: Over 1,250,000 sq km (12x Egypt & Mesopotamia combined). West: Sutkagendor (Baluchistan), East: Alamgirpur (UP), North: Manda (J&K), South: Daimabad (Maharashtra).',
      '80% of settlements (1100 out of 1400) were located along the Saraswati river basin.',
      'Town Planning: Grid layout with streets intersecting at right angles. Sun-dried and kiln-fired bricks in precise 1:2:4 ratio.',
      'Great Bath of Mohenjo-Daro: Brick structure measuring 12m × 7m × 3m depth, supplied by wells with bitumen lining for ritual purification.',
      'Lothal Tidal Dockyard: 223m × 35m × 8m basin connected to river Bhogavo, enabling international maritime trade with Mesopotamia and Persian Gulf.',
      'Weights & Measures: Binary doubling system (1, 2, 4, 8, 16, 32, 64) followed by decimal multiples (160, 320, 640). The unit 16 tradition lasted until modern India.',
      'Art: Famous 11.5 cm bronze Dancing Girl (cire perdue / lost-wax casting), Bearded Priest/Yogi in steatite, Pashupati seal with elephant, tiger, rhino, buffalo, and deer.'
    ],
    rulesOrFormulas: [
      { title: 'Brick Dimension Standard', desc: 'Identical proportion across all Harappan sites.', formula: 'Thickness : Width : Length = 1 : 2 : 4' },
      { title: 'Chronology Phases', desc: 'Early (3500-2600 BC), Mature (2600-1900 BC), Late (1900-1300 BC).' }
    ],
    workedExamples: [
      { problem: 'Which Harappan site revealed evidence of furrow marks proving mixed double-cropping?', solution: 'Kalibangan (Rajasthan) showed crisscross furrow marks.' },
      { problem: 'Where was a large ten-sign signboard inscription discovered?', solution: 'Dholavira (Kutch, Gujarat), near the citadel gateway.' }
    ],
    commonMistakes: [
      { mistake: 'Believing the horse was commonly depicted on Harappan seals.', correction: 'The horse was NOT depicted on Indus seals, though rare bones have been reported at Surkotada.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_harappa_1',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Harappa',
        difficulty: 'medium',
        question: "The dockyard of the Harappan civilization was discovered at which site?",
        options: ["Mohenjo-Daro", "Kalibangan", "Lothal", "Banawali"],
        correctAnswer: 2,
        explanation: "Lothal in Gujarat featured a brick tidal dockyard connected to the Gulf of Khambhat."
      }
    ],
    diagramType: 'earth_layers'
  },
  {
    id: 'ga_polity_constitution',
    subject: 'general_awareness',
    chapter: 'Indian Polity',
    title: 'Indian Constitution & Fundamental Rights',
    estimatedMinutes: 24,
    introduction: 'The Indian Constitution is the supreme law of India, adopted on 26 Nov 1949 and enacted on 26 Jan 1950. It synthesizes parliamentary democracy with fundamental civil liberties.',
    concepts: [
      'Salient Features: Lengthiest written constitution in the world. Drawn from Government of India Act 1935 (~250 provisions), British system (Parliamentary executive, rule of law), US (Fundamental Rights, Judicial review), Irish (DPSP), Canadian (Federation with strong centre).',
      'Fundamental Rights (Part III, Articles 12-35): Termed the Magna Carta of India. Justiciable and guaranteed by the Supreme Court.',
      '6 Fundamental Rights: 1. Right to Equality (Art 14-18), 2. Right to Freedom (Art 19-22), 3. Right against Exploitation (Art 23-24), 4. Right to Freedom of Religion (Art 25-28), 5. Cultural & Educational Rights (Art 29-30), 6. Right to Constitutional Remedies (Art 32).',
      'Article 32: Called "the heart and soul of the Constitution" by Dr. B.R. Ambedkar. Empowered with 5 Writs: Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari.',
      'Right to Property: Removed from Fundamental Rights by 44th Amendment Act 1978; now a constitutional legal right under Article 300A.',
      'DPSP (Part IV, Articles 36-51): Non-justiciable directives to establish social and economic welfare state. Borrowed from Irish Constitution.'
    ],
    rulesOrFormulas: [
      { title: 'The 5 Constitutional Writs', desc: 'Issued by Supreme Court (Art 32) and High Courts (Art 226).', formula: 'Habeas Corpus (To have the body), Mandamus (We command), Prohibition (Stay order), Quo Warranto (By what authority), Certiorari (To be certified)' }
    ],
    workedExamples: [
      { problem: 'Under which Article did the Supreme Court recognize Elementary Education as a Fundamental Right?', solution: 'Article 21A, inserted by the 86th Constitutional Amendment Act 2002.' }
    ],
    commonMistakes: [
      { mistake: 'Assuming Fundamental Rights are absolute without any restrictions.', correction: 'Fundamental Rights are subject to reasonable restrictions under public order, decency, morality, and sovereignty.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_polity_1',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Constitutional Articles',
        difficulty: 'easy',
        question: "Which Article guarantees Equality before Law and Equal Protection of the Laws?",
        options: ["Article 14", "Article 19", "Article 21", "Article 32"],
        correctAnswer: 0,
        explanation: "Article 14 guarantees equality before law and equal protection within the territory of India."
      }
    ],
    diagramType: 'polity_hierarchy'
  },
  {
    id: 'ga_budget_2026',
    subject: 'general_awareness',
    chapter: 'Economy & Current Affairs',
    title: 'Union Budget 2026-2027 Analysis',
    estimatedMinutes: 20,
    introduction: 'Presented by Finance Minister Nirmala Sitharaman on February 1, 2026, the Union Budget focuses on "Viksit Bharat" with infrastructure-led capital expenditure and fiscal consolidation.',
    concepts: [
      'Total Budget Expenditure: ₹53,47,315 crore, reflecting a 7.7% increase over the 2025-26 Revised Estimates.',
      'Public Capital Expenditure: Increased to ₹12.2 lakh crore (up 11.5%) to accelerate logistics, freight corridors, and high-speed rail.',
      'Fiscal Deficit Target: Kept at 4.3% of GDP (glide path towards <4.0% by 2027), down from 4.4% in 2025-26 RE.',
      'Biopharma SHAKTI: A flagship ₹10,000 crore 5-year mission to position India as a global biologics and biosimilar manufacturing hub.',
      'Strategic Corridors: 7 High-Speed Rail Corridors (Delhi-Varanasi, Mumbai-Pune), Dankuni-Surat dedicated freight corridor, and 20 new national waterways.',
      'Semiconductor Mission 2.0 & Rare Earths: Dedicated equipment, materials fabrication, and Rare Earth Corridors in critical mineral states.',
      'Bharat-VISTAAR: Multilingual generative AI tool integrating AgriStack with agricultural advisory services for farmers.',
      'Personal Income Tax (New Regime Slabs): 0-4 Lakh: Nil, 4-8 Lakh: 5%, 8-12 Lakh: 10%, 12-16 Lakh: 15%, 16-20 Lakh: 20%, 20-24 Lakh: 25%, Above 24 Lakh: 30%.'
    ],
    rulesOrFormulas: [
      { title: 'Tax Devolution to States', desc: 'Vertical devolution share retained at 41% per 16th Finance Commission.', formula: 'Share of States = 41% of divisible tax pool' }
    ],
    workedExamples: [
      { problem: 'What is the fiscal deficit target set for FY 2026-27 in the Union Budget?', solution: '4.3% of GDP, demonstrating strict adherence to fiscal discipline while boosting capex.' }
    ],
    commonMistakes: [
      { mistake: 'Confusing capital expenditure with revenue expenditure.', correction: 'Capital expenditure creates long-term physical assets (roads, rails, power), whereas revenue expenditure covers recurring administration/subsidies.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_budget_1',
        subject: 'general_awareness',
        chapter: 'Economy & Current Affairs',
        topic: 'Union Budget 2026',
        difficulty: 'medium',
        question: "What is the total outlay for the Biopharma SHAKTI initiative in the 2026-27 Budget?",
        options: ["₹5,000 crore", "₹10,000 crore", "₹20,000 crore", "₹40,000 crore"],
        correctAnswer: 1,
        explanation: "Biopharma SHAKTI was allocated ₹10,000 crore over 5 years to establish India as a global biomanufacturing powerhouse."
      }
    ]
  },
  {
    id: 'ga_geography_physio',
    subject: 'general_awareness',
    chapter: 'Indian Geography',
    title: 'Physiography, Mountains, Rivers & Lakes',
    estimatedMinutes: 22,
    introduction: 'Explore the 6 physiographic divisions of India: the Himalayas, Northern Plains, Peninsular Plateau, Great Indian Desert, Coastal Plains, and Islands.',
    concepts: [
      'Himalayan Ranges: Himadri / Greater Himalayas (avg 6000m, Everest 8848m, Kangchenjunga 8586m), Himachal / Lesser Himalayas (3700-4500m, Pir Panjal, Dhauladhar), Siwaliks / Outer Himalayas (900-1100m, Duns and Duars).',
      'Peninsular Peaks: Anaimudi (2695m, in Anaimalai hills, Kerala) is the highest peak in Peninsular India. Doddabetta (2637m) in Nilgiris. Gurushikhar (1722m) in Aravalli range (oldest fold mountain in India).',
      'Himalayan Rivers: Indus (arises near Mansarovar, 2880 km, enters India in Ladakh), Ganga (originates as Bhagirathi from Gangotri glacier; meets Alaknanda at Devprayag, 2525 km, empties as Padma in Bangladesh), Brahmaputra (Tsangpo in Tibet, Dihang in Arunachal, Jamuna in Bangladesh).',
      'Panch Prayag: Vishnuprayag (Alaknanda + Dhauliganga), Nandprayag (Alaknanda + Nandakini), Karnaprayag (Alaknanda + Pindar), Rudraprayag (Alaknanda + Mandakini), Devprayag (Alaknanda + Bhagirathi = Ganga).',
      'Peninsular Rivers: East-flowing (Godavari / Dakshin Ganga 1465km, Krishna 1400km, Kaveri 805km, Mahanadi 851km) drain into Bay of Bengal. West-flowing (Narmada 1312km, Tapi 724km, Mahi) flow through rift valleys into Arabian Sea.',
      'Superlative Lakes: Wular Lake (J&K, largest freshwater in India), Chilika Lake (Odisha, largest saline water lagoon), Vembanad Lake (Kerala, longest lake in India), Cholamu Lake (Sikkim, highest lake in India, >5300m).'
    ],
    rulesOrFormulas: [
      { title: 'West-Flowing Peninsular Rivers', desc: 'Rift valley drainage into the Gulf of Khambhat / Arabian Sea.', formula: 'Narmada (Amarkantak) & Tapi (Betul/Satpura)' }
    ],
    workedExamples: [
      { problem: 'At which confluence does the river Bhagirathi join the Alaknanda to become the Ganga?', solution: 'Devprayag in Garhwal Uttarakhand.' }
    ],
    commonMistakes: [
      { mistake: 'Thinking K2 is entirely situated within the undisputed territory of India.', correction: 'K2 (8611m) is in the Karakoram range in PoK/Gilgit-Baltistan; the highest peak located entirely within Indian territory is Nanda Devi (7816m).' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_geo_1',
        subject: 'general_awareness',
        chapter: 'Indian Geography',
        topic: 'Rivers',
        difficulty: 'easy',
        question: "Which is the longest river in Peninsular India?",
        options: ["Krishna", "Godavari", "Cauvery", "Narmada"],
        correctAnswer: 1,
        explanation: "Godavari (1,465 km), known as Dakshin Ganga, is the longest peninsular river."
      }
    ],
    diagramType: 'clouds'
  }
];

export const GENERAL_AWARENESS_FLASHCARDS: Flashcard[] = [
  // Superlatives & Geography
  { id: 'fc_ga_1', subject: 'general_awareness', category: 'Superlatives', front: 'Highest Dam in India', back: 'Tehri Dam (260.5 m, on Bhagirathi River in Uttarakhand)', details: 'Earth and rock-fill embankment dam.' },
  { id: 'fc_ga_2', subject: 'general_awareness', category: 'Superlatives', front: 'Longest Dam in India', back: 'Hirakud Dam (25.79 km total, on Mahanadi River in Odisha)', details: 'One of the first major multipurpose river valley projects after independence.' },
  { id: 'fc_ga_3', subject: 'general_awareness', category: 'Superlatives', front: 'Highest Battlefield in the World', back: 'Siachen Glacier (Karakoram Range, ~5,400 m altitude)', details: 'Operation Meghdoot launched by IAF and Army in 1984.' },
  { id: 'fc_ga_4', subject: 'general_awareness', category: 'Superlatives', front: 'Largest Inhabited River Island', back: 'Majuli (in Brahmaputra River, Assam)', details: 'World\'s largest freshwater riverine island.' },
  { id: 'fc_ga_5', subject: 'general_awareness', category: 'Geography', front: 'McMahon Line', back: 'Boundary line between India (Arunachal Pradesh) and China (Tibet)', details: 'Drawn in 1914 at the Simla Convention.' },
  { id: 'fc_ga_6', subject: 'general_awareness', category: 'Geography', front: 'Radcliffe Line', back: 'Border line demarcating India with Pakistan and Bangladesh', details: 'Drawn by Sir Cyril Radcliffe in August 1947.' },
  { id: 'fc_ga_7', subject: 'general_awareness', category: 'Geography', front: 'Durand Line', back: 'Boundary line between Pakistan and Afghanistan', details: 'Established in 1893 by Sir Mortimer Durand.' },
  { id: 'fc_ga_8', subject: 'general_awareness', category: 'Geography', front: 'Ten Degree Channel', back: 'Separates Andaman Islands from Nicobar Islands in the Bay of Bengal', details: 'Lies at 10° N latitude.' },
  { id: 'fc_ga_9', subject: 'general_awareness', category: 'Indian Cities', front: 'Detroit of Asia', back: 'Chennai (Tamil Nadu)', details: 'Major automobile manufacturing hub accounting for over 30% of Indian auto industry.' },
  { id: 'fc_ga_10', subject: 'general_awareness', category: 'Indian Cities', front: 'Silicon Valley / Space City of India', back: 'Bengaluru (Karnataka)', details: 'Hub of ISRO, aerospace research, and IT.' },
  
  // History & Polity
  { id: 'fc_ga_11', subject: 'general_awareness', category: 'Ancient History', front: 'Kalinga War Date & Significance', back: '261 BC; Turning point where Ashoka renounced violence and embraced Buddhism', details: 'Recorded in Ashoka\'s Major Rock Edict XIII.' },
  { id: 'fc_ga_12', subject: 'general_awareness', category: 'Ancient History', front: 'Gupta Emperor "Napoleon of India"', back: 'Samudragupta (ruled 335-375 CE)', details: 'Title given by historian V.A. Smith; patron of Harisena and bearer of Kaviraja title.' },
  { id: 'fc_ga_13', subject: 'general_awareness', category: 'Medieval History', front: 'First Battle of Panipat', back: '1526 AD; Babur defeated Ibrahim Lodi, founding the Mughal Empire', details: 'Introduced field artillery and gunpowder tactics in India.' },
  { id: 'fc_ga_14', subject: 'general_awareness', category: 'Indian Polity', front: 'Article 32', back: 'Right to Constitutional Remedies (5 Writs to protect Fundamental Rights)', details: 'Termed the "Heart and Soul of the Constitution" by Dr. B.R. Ambedkar.' },
  { id: 'fc_ga_15', subject: 'general_awareness', category: 'Indian Polity', front: 'Article 76', back: 'Attorney General for India (Chief Legal Advisor to Union Government)', details: 'Appointed by the President; possesses right of audience in all Indian courts.' }
];
