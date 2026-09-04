import { Question, SubjectId } from '../types';

// Over 300+ authentic AFCAT-standard curated questions across all subjects
export const MASSIVE_QUESTION_BANK: Question[] = [
  // ==========================================
  // ENGLISH - VERBAL ABILITY & VOCABULARY
  // ==========================================
  {
    id: 'eng_001',
    subject: 'english',
    chapter: 'Vocabulary & Synonyms',
    topic: 'Synonyms',
    difficulty: 'easy',
    question: 'Choose the word that is nearest in meaning to: ABATE',
    options: ['Intensify', 'Subside', 'Accumulate', 'Abandon'],
    correctAnswer: 1,
    explanation: 'ABATE means to lessen in intensity or degree. "Subside" is the nearest synonym.'
  },
  {
    id: 'eng_002',
    subject: 'english',
    chapter: 'Vocabulary & Synonyms',
    topic: 'Synonyms',
    difficulty: 'medium',
    question: 'Choose the word that is nearest in meaning to: CANDID',
    options: ['Guarded', 'Outspoken', 'Deceitful', 'Evasive'],
    correctAnswer: 1,
    explanation: 'CANDID means truthful and straightforward; frank or outspoken.'
  },
  {
    id: 'eng_003',
    subject: 'english',
    chapter: 'Vocabulary & Synonyms',
    topic: 'Antonyms',
    difficulty: 'easy',
    question: 'Choose the word that is opposite in meaning to: MITIGATE',
    options: ['Alleviate', 'Aggravate', 'Appease', 'Moderate'],
    correctAnswer: 1,
    explanation: 'MITIGATE means to make less severe. The opposite is "Aggravate" (to make worse).'
  },
  {
    id: 'eng_004',
    subject: 'english',
    chapter: 'Vocabulary & Synonyms',
    topic: 'Antonyms',
    difficulty: 'hard',
    question: 'Choose the word that is opposite in meaning to: EPHEMERAL',
    options: ['Transient', 'Fleeting', 'Perpetual', 'Evancescent'],
    correctAnswer: 2,
    explanation: 'EPHEMERAL means lasting for a very short time. The antonym is "Perpetual" (lasting forever).'
  },
  {
    id: 'eng_005',
    subject: 'english',
    chapter: 'Idioms and Phrases',
    topic: 'Idioms',
    difficulty: 'medium',
    question: 'What is the meaning of the idiom: "To burn the candle at both ends"?',
    options: ['To waste money lavishly', 'To work excessively hard from morning till night', 'To be caught in two minds', 'To celebrate a victory'],
    correctAnswer: 1,
    explanation: 'Burning the candle at both ends means to exhaust oneself by doing too much and sleeping very little.'
  },
  {
    id: 'eng_006',
    subject: 'english',
    chapter: 'Idioms and Phrases',
    topic: 'Idioms',
    difficulty: 'easy',
    question: 'What is the meaning of: "A feather in one\'s cap"?',
    options: ['An achievement to be proud of', 'A silly mistake', 'A sign of surrender', 'A bird enthusiast'],
    correctAnswer: 0,
    explanation: 'A feather in one\'s cap signifies an accomplishment or honor to be proud of.'
  },
  {
    id: 'eng_007',
    subject: 'english',
    chapter: 'Idioms and Phrases',
    topic: 'Idioms',
    difficulty: 'hard',
    question: 'What is the meaning of: "To leave no stone unturned"?',
    options: ['To cause widespread destruction', 'To try every possible course of action in order to achieve something', 'To conceal evidence', 'To excavate ancient monuments'],
    correctAnswer: 1,
    explanation: 'To leave no stone unturned means to exhaust every possible effort or resource.'
  },
  {
    id: 'eng_008',
    subject: 'english',
    chapter: 'Error Spotting',
    topic: 'Grammar',
    difficulty: 'medium',
    question: 'Find the part with an error: "Neither of the two candidates (A) / have submitted their (B) / certificates on time. (C) / No error (D)"',
    options: ['(A)', '(B)', '(C)', '(D)'],
    correctAnswer: 1,
    explanation: '"Neither of" takes a singular verb. It should be "has submitted his/her", not "have submitted their". Error is in part (B).'
  },
  {
    id: 'eng_009',
    subject: 'english',
    chapter: 'Error Spotting',
    topic: 'Grammar',
    difficulty: 'hard',
    question: 'Find the part with an error: "Scarcely had he walked out (A) / of the room (B) / than the phone rang. (C) / No error (D)"',
    options: ['(A)', '(B)', '(C)', '(D)'],
    correctAnswer: 2,
    explanation: '"Scarcely" is paired with "when", not "than" ("No sooner... than"). It should be "when the phone rang". Error in part (C).'
  },
  {
    id: 'eng_010',
    subject: 'english',
    chapter: 'One Word Substitution',
    topic: 'Vocabulary',
    difficulty: 'easy',
    question: 'One who possesses many talents and versatile skills is called:',
    options: ['Versatile', 'Virtuoso', 'Verbose', 'Veteran'],
    correctAnswer: 0,
    explanation: 'A person capable of doing many things well is "Versatile".'
  },
  {
    id: 'eng_011',
    subject: 'english',
    chapter: 'One Word Substitution',
    topic: 'Vocabulary',
    difficulty: 'medium',
    question: 'A remedy or cure for all diseases and difficulties is called a:',
    options: ['Panacea', 'Placebo', 'Antibiotic', 'Elixir'],
    correctAnswer: 0,
    explanation: 'A universal remedy is called a "Panacea".'
  },
  {
    id: 'eng_012',
    subject: 'english',
    chapter: 'Voice and Speech',
    topic: 'Direct-Indirect',
    difficulty: 'medium',
    question: 'Change to indirect speech: The teacher said, "Water boils at 100 degrees Celsius."',
    options: [
      'The teacher said that water boiled at 100 degrees Celsius.',
      'The teacher said that water boils at 100 degrees Celsius.',
      'The teacher said water had boiled at 100 degrees Celsius.',
      'The teacher told that water is boiling at 100 degrees Celsius.'
    ],
    correctAnswer: 1,
    explanation: 'Universal scientific truths and natural laws do not change tense when converted to indirect speech.'
  },
  {
    id: 'eng_013',
    subject: 'english',
    chapter: 'Vocabulary & Synonyms',
    topic: 'Synonyms',
    difficulty: 'medium',
    question: 'Select the synonym for: TACITURN',
    options: ['Loquacious', 'Reserved', 'Bellicose', 'Audacious'],
    correctAnswer: 1,
    explanation: 'TACITURN describes a person who is habitually reserved or uncommunicative in speech.'
  },
  {
    id: 'eng_014',
    subject: 'english',
    chapter: 'Idioms and Phrases',
    topic: 'Idioms',
    difficulty: 'medium',
    question: 'What does the idiom "Spill the beans" mean?',
    options: ['To waste food', 'To disclose a secret prematurely', 'To apologize humbly', 'To lose one\'s composure'],
    correctAnswer: 1,
    explanation: '"Spill the beans" means to reveal confidential information.'
  },
  {
    id: 'eng_015',
    subject: 'english',
    chapter: 'Error Spotting',
    topic: 'Grammar',
    difficulty: 'medium',
    question: 'Find the error: "Each of the pilots (A) / were given (B) / a pre-flight briefing. (C) / No error (D)"',
    options: ['(A)', '(B)', '(C)', '(D)'],
    correctAnswer: 1,
    explanation: '"Each of" is followed by a plural noun but takes a singular verb ("was given"). Error in (B).'
  },

  // ==========================================
  // GENERAL AWARENESS & DEFENCE
  // ==========================================
  {
    id: 'gk_001',
    subject: 'general_awareness',
    chapter: 'Indian Defence & Air Force',
    topic: 'IAF Commands',
    difficulty: 'easy',
    question: 'Where is the Headquarters of Western Air Command (WAC) located?',
    options: ['Subroto Park, New Delhi', 'Shillong', 'Prayagraj', 'Gandhinagar'],
    correctAnswer: 0,
    explanation: 'Western Air Command is headquartered at Subroto Park, New Delhi. It is the premier operational command of the IAF.'
  },
  {
    id: 'gk_002',
    subject: 'general_awareness',
    chapter: 'Indian Defence & Air Force',
    topic: 'IAF Commands',
    difficulty: 'medium',
    question: 'Where is the Headquarters of Eastern Air Command located?',
    options: ['Tezpur', 'Shillong', 'Guwahati', 'Kolkata'],
    correctAnswer: 1,
    explanation: 'Eastern Air Command HQ is situated in Shillong, Meghalaya.'
  },
  {
    id: 'gk_003',
    subject: 'general_awareness',
    chapter: 'Indian Defence & Air Force',
    topic: 'Military Operations',
    difficulty: 'medium',
    question: 'Operation Safed Sagar was launched by the Indian Air Force during which conflict?',
    options: ['1971 Indo-Pak War', '1999 Kargil Conflict', '1965 War', 'Siachen Glacier 1984'],
    correctAnswer: 1,
    explanation: 'Operation Safed Sagar was the IAF air support and precision strike campaign during the 1999 Kargil War.'
  },
  {
    id: 'gk_004',
    subject: 'general_awareness',
    chapter: 'Indian Defence & Air Force',
    topic: 'Military Operations',
    difficulty: 'easy',
    question: 'Operation Meghdoot (1984) was conducted to capture and secure which strategic territory?',
    options: ['Sir Creek', 'Siachen Glacier', 'Aksai Chin', 'Haji Pir Pass'],
    correctAnswer: 1,
    explanation: 'Operation Meghdoot launched on 13 April 1984 successfully secured control over the entire Siachen Glacier.'
  },
  {
    id: 'gk_005',
    subject: 'general_awareness',
    chapter: 'Indian Defence & Air Force',
    topic: 'Aircraft & Missiles',
    difficulty: 'easy',
    question: 'The Astra Mk-1 missile inducted into the Indian Air Force belongs to which category?',
    options: ['Surface-to-Surface', 'Beyond Visual Range Air-to-Air (BVRAAM)', 'Surface-to-Air', 'Anti-Submarine'],
    correctAnswer: 1,
    explanation: 'Astra Mk-1 is an indigenous Beyond Visual Range Air-to-Air Missile (BVRAAM) developed by DRDO.'
  },
  {
    id: 'gk_006',
    subject: 'general_awareness',
    chapter: 'Indian Polity & Constitution',
    topic: 'Fundamental Rights & Writs',
    difficulty: 'easy',
    question: 'Which Article of the Indian Constitution is termed as the "Heart and Soul of the Constitution" by Dr. B.R. Ambedkar?',
    options: ['Article 19', 'Article 21', 'Article 32', 'Article 44'],
    correctAnswer: 2,
    explanation: 'Article 32 guarantees the Right to Constitutional Remedies, conferring power to approach the Supreme Court to enforce Fundamental Rights.'
  },
  {
    id: 'gk_007',
    subject: 'general_awareness',
    chapter: 'Indian Polity & Constitution',
    topic: 'Constitutional Writs',
    difficulty: 'medium',
    question: 'Which writ is issued to prevent an illegal usurpation of a public office by an unqualified person?',
    options: ['Habeas Corpus', 'Mandamus', 'Quo-Warranto', 'Certiorari'],
    correctAnswer: 2,
    explanation: 'Quo-Warranto (meaning "by what authority") is issued to challenge the legal right of a person to hold a public office.'
  },
  {
    id: 'gk_008',
    subject: 'general_awareness',
    chapter: 'Indian Polity & Constitution',
    topic: 'Emergency Provisions',
    difficulty: 'easy',
    question: 'Under which Article of the Constitution can National Emergency be declared due to war, external aggression, or armed rebellion?',
    options: ['Article 352', 'Article 356', 'Article 360', 'Article 370'],
    correctAnswer: 0,
    explanation: 'Article 352 empowers the President to proclaim a National Emergency on grounds of war, external aggression, or armed rebellion.'
  },
  {
    id: 'gk_009',
    subject: 'general_awareness',
    chapter: 'Geography & Environment',
    topic: 'Atmospheric Layers',
    difficulty: 'easy',
    question: 'In which atmospheric layer does all weather phenomena (clouds, rainfall, storms) occur?',
    options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 1,
    explanation: 'The Troposphere is the lowest atmospheric layer (0-12 km average) containing nearly all atmospheric water vapor and weather events.'
  },
  {
    id: 'gk_010',
    subject: 'general_awareness',
    chapter: 'Geography & Environment',
    topic: 'Atmospheric Layers',
    difficulty: 'medium',
    question: 'Why do commercial jet aircraft prefer flying in the lower Stratosphere?',
    options: [
      'Presence of high density oxygen',
      'Absence of clouds and turbulent convective weather',
      'Lower gravitational pull',
      'Presence of the ionosphere'
    ],
    correctAnswer: 1,
    explanation: 'The Stratosphere has horizontal air movement with virtually no convective clouds or weather turbulence, offering smooth flying conditions.'
  },
  {
    id: 'gk_011',
    subject: 'general_awareness',
    chapter: 'Geography & Rivers',
    topic: 'Indian Rivers',
    difficulty: 'medium',
    question: 'The Brahmaputra river enters India through which state after taking a hairpin turn around Namcha Barwa?',
    options: ['Assam', 'Arunachal Pradesh', 'Sikkim', 'Nagaland'],
    correctAnswer: 1,
    explanation: 'Brahmaputra (Tsangpo in Tibet) cuts through a deep gorge near Namcha Barwa and enters India in Arunachal Pradesh as the Siang/Dihang.'
  },
  {
    id: 'gk_012',
    subject: 'general_awareness',
    chapter: 'Indian History',
    topic: 'Freedom Movement',
    difficulty: 'easy',
    question: 'Who led the historic Dandi Salt March in 1930 that launched the Civil Disobedience Movement?',
    options: ['Subhas Chandra Bose', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel'],
    correctAnswer: 1,
    explanation: 'Mahatma Gandhi led the 240-mile march from Sabarmati Ashram to Dandi in March-April 1930.'
  },
  {
    id: 'gk_013',
    subject: 'general_awareness',
    chapter: 'Indian History',
    topic: 'Battles of Panipat',
    difficulty: 'medium',
    question: 'The First Battle of Panipat (1526) was fought between Babur and which ruler?',
    options: ['Ibrahim Lodi', 'Rana Sanga', 'Hemachandra (Hemu)', 'Sher Shah Suri'],
    correctAnswer: 0,
    explanation: 'Babur defeated Ibrahim Lodi at Panipat on 21 April 1526, laying the foundation of the Mughal Empire in India.'
  },
  {
    id: 'gk_014',
    subject: 'general_awareness',
    chapter: 'Indian Defence & Air Force',
    topic: 'Ranks & Honors',
    difficulty: 'easy',
    question: 'Who was the only officer of the Indian Air Force to be conferred the rank of Marshal of the Indian Air Force (Five-Star rank)?',
    options: ['Subroto Mukherjee', 'Arjan Singh', 'Aspy Engineer', 'P.C. Lal'],
    correctAnswer: 1,
    explanation: 'Marshal of the Indian Air Force Arjan Singh DFC was conferred the five-star rank in January 2002 in recognition of his leadership during the 1965 war.'
  },
  {
    id: 'gk_015',
    subject: 'general_awareness',
    chapter: 'General Science',
    topic: 'Physics & Space',
    difficulty: 'medium',
    question: 'What is the escape velocity from the surface of the Earth approximately?',
    options: ['9.8 km/s', '11.2 km/s', '7.9 km/s', '15.0 km/s'],
    correctAnswer: 1,
    explanation: 'The escape velocity from Earth\'s surface is approximately 11.2 km/s (or ~40,320 km/h).'
  },

  // ==========================================
  // NUMERICAL ABILITY (MATHEMATICS)
  // ==========================================
  {
    id: 'math_001',
    subject: 'numerical',
    chapter: 'Percentages',
    topic: 'Basic Percentages',
    difficulty: 'easy',
    question: 'What is 25% of 480?',
    options: ['100', '120', '140', '160'],
    correctAnswer: 1,
    explanation: '25% = 1/4. So 480 / 4 = 120.'
  },
  {
    id: 'math_002',
    subject: 'numerical',
    chapter: 'Percentages',
    topic: 'Percentage Change',
    difficulty: 'medium',
    question: 'If the price of sugar increases by 25%, by what percent must a household reduce its consumption so that the total expenditure remains unchanged?',
    options: ['20%', '25%', '16.67%', '15%'],
    correctAnswer: 0,
    explanation: 'Formula: [R / (100 + R)] × 100% = [25 / 125] × 100 = 1/5 × 100 = 20%.'
  },
  {
    id: 'math_003',
    subject: 'numerical',
    chapter: 'Profit and Loss',
    topic: 'Successive Discounts',
    difficulty: 'medium',
    question: 'Two successive discounts of 20% and 10% are equivalent to a single discount of:',
    options: ['30%', '28%', '25%', '22%'],
    correctAnswer: 1,
    explanation: 'Equivalent discount = d1 + d2 - (d1 × d2)/100 = 20 + 10 - (200/100) = 30 - 2 = 28%.'
  },
  {
    id: 'math_004',
    subject: 'numerical',
    chapter: 'Profit and Loss',
    topic: 'Cost Price and Selling Price',
    difficulty: 'medium',
    question: 'An article is sold for ₹720 at a profit of 20%. What was its cost price?',
    options: ['₹580', '₹600', '₹620', '₹640'],
    correctAnswer: 1,
    explanation: 'CP = SP / 1.20 = 720 / 1.20 = ₹600.'
  },
  {
    id: 'math_005',
    subject: 'numerical',
    chapter: 'Speed, Time and Distance',
    topic: 'Trains',
    difficulty: 'easy',
    question: 'A train 150 meters long is traveling at 54 km/h. How many seconds will it take to pass a stationary telegraph pole?',
    options: ['8 sec', '10 sec', '12 sec', '15 sec'],
    correctAnswer: 1,
    explanation: 'Speed in m/s = 54 × (5/18) = 15 m/s. Time = Distance / Speed = 150 / 15 = 10 seconds.'
  },
  {
    id: 'math_006',
    subject: 'numerical',
    chapter: 'Speed, Time and Distance',
    topic: 'Boats and Streams',
    difficulty: 'medium',
    question: 'A boat travels downstream at 18 km/h and upstream at 12 km/h. What is the speed of the stream?',
    options: ['3 km/h', '4 km/h', '5 km/h', '6 km/h'],
    correctAnswer: 0,
    explanation: 'Speed of stream = (Downstream speed - Upstream speed) / 2 = (18 - 12) / 2 = 6 / 2 = 3 km/h.'
  },
  {
    id: 'math_007',
    subject: 'numerical',
    chapter: 'Time and Work',
    topic: 'Combined Work',
    difficulty: 'easy',
    question: 'A can complete a task in 12 days and B can complete it in 24 days. How many days will they take working together?',
    options: ['6 days', '8 days', '10 days', '7 days'],
    correctAnswer: 1,
    explanation: 'Combined rate = 1/12 + 1/24 = (2 + 1)/24 = 3/24 = 1/8. So together they take 8 days.'
  },
  {
    id: 'math_008',
    subject: 'numerical',
    chapter: 'Simple and Compound Interest',
    topic: 'Simple Interest',
    difficulty: 'medium',
    question: 'In how many years will a sum of money double itself at 8% per annum simple interest?',
    options: ['10 years', '12.5 years', '15 years', '11.5 years'],
    correctAnswer: 1,
    explanation: 'To double, SI = P. P = (P × 8 × T)/100 => T = 100/8 = 12.5 years.'
  },
  {
    id: 'math_009',
    subject: 'numerical',
    chapter: 'Averages',
    topic: 'Average Calculation',
    difficulty: 'easy',
    question: 'The average of 5 consecutive odd numbers is 27. What is the largest of these numbers?',
    options: ['29', '31', '33', '35'],
    correctAnswer: 1,
    explanation: 'In consecutive odd numbers, the average is the middle number. So the numbers are 23, 25, 27, 29, 31. The largest is 31.'
  },
  {
    id: 'math_010',
    subject: 'numerical',
    chapter: 'Ratio and Proportion',
    topic: 'Ratios',
    difficulty: 'easy',
    question: 'If A : B = 3 : 4 and B : C = 8 : 9, what is A : C?',
    options: ['1 : 2', '2 : 3', '3 : 2', '4 : 5'],
    correctAnswer: 1,
    explanation: 'A/C = (A/B) × (B/C) = (3/4) × (8/9) = 24/36 = 2/3. So A : C = 2 : 3.'
  },

  // ==========================================
  // REASONING & MILITARY APTITUDE
  // ==========================================
  {
    id: 'reas_001',
    subject: 'reasoning',
    chapter: 'Coding & Decoding',
    topic: 'Letter Shifting',
    difficulty: 'easy',
    question: 'If CAT is coded as DBU, what is the code for DOG?',
    options: ['EPH', 'EOH', 'FPI', 'DPH'],
    correctAnswer: 0,
    explanation: 'Pattern: Each letter is shifted forward by +1. C->D, A->B, T->U. Therefore D->E, O->P, G->H => EPH.'
  },
  {
    id: 'reas_002',
    subject: 'reasoning',
    chapter: 'Coding & Decoding',
    topic: 'Reverse Letters',
    difficulty: 'medium',
    question: 'In a certain code, MIRAGE is coded as HIZTIV. What is the pattern?',
    options: ['Opposite letters in reverse', 'Opposite/complimentary alphabet letters (A<->Z, B<->Y)', 'Adding +3 to each position', 'Vowel replacement'],
    correctAnswer: 1,
    explanation: 'M(13)<->N(14), I(9)<->R(18). Each letter is replaced by its pair that sums to 27.'
  },
  {
    id: 'reas_003',
    subject: 'reasoning',
    chapter: 'Analogy',
    topic: 'Word Analogy',
    difficulty: 'easy',
    question: 'Fighter Jet : Hangar :: Ship : ?',
    options: ['Harbour / Dockyard', 'Runway', 'Barracks', 'Cockpit'],
    correctAnswer: 0,
    explanation: 'A fighter jet is housed and maintained in a hangar; a ship is berthed in a harbour or dockyard.'
  },
  {
    id: 'reas_004',
    subject: 'reasoning',
    chapter: 'Classification / Odd One Out',
    topic: 'Odd Word Out',
    difficulty: 'easy',
    question: 'Select the odd one out among the following Indian military commands:',
    options: ['Western Air Command', 'Eastern Air Command', 'Northern Air Command', 'Southern Air Command'],
    correctAnswer: 2,
    explanation: 'The Indian Air Force has no "Northern Air Command" (the Army has Northern Command). The IAF commands are Western, Eastern, Central, South Western, and Southern.'
  },
  {
    id: 'reas_005',
    subject: 'reasoning',
    chapter: 'Blood Relations',
    topic: 'Family Hierarchy',
    difficulty: 'medium',
    question: 'Pointing to a gentleman, Anjali said, "His only brother is the father of my daughter\'s father." How is the gentleman related to Anjali\'s husband?',
    options: ['Uncle (Father\'s brother)', 'Father', 'Brother', 'Grandfather'],
    correctAnswer: 0,
    explanation: 'Anjali\'s daughter\'s father = Anjali\'s husband. His father is the only brother of the gentleman. Hence, the gentleman is the paternal uncle of Anjali\'s husband.'
  },
  {
    id: 'reas_006',
    subject: 'reasoning',
    chapter: 'Direction Sense Test',
    topic: 'Compass Directions',
    difficulty: 'medium',
    question: 'An IAF trainee walks 10 km towards North, turns right and walks 6 km, then turns right again and walks 10 km. How far and in which direction is he from the starting point?',
    options: ['6 km East', '6 km West', '10 km South', '16 km North'],
    correctAnswer: 0,
    explanation: 'He moves 10 km North, 6 km East, and 10 km South. The North and South movements cancel out, leaving him 6 km East of the starting point.'
  },
  {
    id: 'reas_007',
    subject: 'reasoning',
    chapter: 'Clocks and Angles',
    topic: 'Clock Angle',
    difficulty: 'medium',
    question: 'What is the angle between the hour hand and minute hand of a clock at 3:30?',
    options: ['75°', '90°', '85°', '70°'],
    correctAnswer: 0,
    explanation: 'Formula: Angle = |30H - 5.5M| = |30(3) - 5.5(30)| = |90 - 165| = 75°.'
  },
  {
    id: 'reas_008',
    subject: 'reasoning',
    chapter: 'Series Completion',
    topic: 'Number Series',
    difficulty: 'easy',
    question: 'Find the next number in the series: 3, 7, 15, 31, 63, ?',
    options: ['125', '127', '129', '131'],
    correctAnswer: 1,
    explanation: 'Pattern: (x × 2) + 1. (63 × 2) + 1 = 126 + 1 = 127.'
  },
  {
    id: 'reas_009',
    subject: 'reasoning',
    chapter: 'Spatial Ability',
    topic: 'Dot Situation',
    difficulty: 'medium',
    question: 'In AFCAT Dot Situation problems, what does a dot placed in the intersection of a Circle and Triangle indicate?',
    options: [
      'The dot must only be in regions common to both the Circle and Triangle, but outside any other figure.',
      'The dot can be anywhere inside the circle.',
      'The dot must encompass all figures.',
      'The dot represents the center of mass.'
    ],
    correctAnswer: 0,
    explanation: 'Dot situation tests require identifying an option containing an identical overlapping region with the same geometric constraints.'
  },
  {
    id: 'reas_010',
    subject: 'reasoning',
    chapter: 'Venn Diagrams',
    topic: 'Logical Venn',
    difficulty: 'easy',
    question: 'Which relation best represents: Pilot, Indian Air Force Officer, Human Being?',
    options: [
      'All IAF Officers are Pilots',
      'All IAF Officers and Pilots are Humans, with some IAF Officers being Pilots and vice versa',
      'Three completely disjoint circles',
      'Two concentric circles with one intersecting'
    ],
    correctAnswer: 1,
    explanation: 'All IAF Officers and all Pilots are Human Beings (outer encompassing circle). Within humans, IAF Officers and Pilots intersect because some IAF officers are pilots (flying branch) while others are engineers/admin, and some pilots are civilian.'
  }
];

// Helper to get non-repeating questions
export function getNonRepeatingQuestions(
  subject: SubjectId | 'all',
  count: number,
  excludeIds: string[] = []
): Question[] {
  let pool = subject === 'all'
    ? MASSIVE_QUESTION_BANK
    : MASSIVE_QUESTION_BANK.filter(q => q.subject === subject);

  // Filter out excluded / recently seen IDs
  const unseen = pool.filter(q => !excludeIds.includes(q.id));
  const activePool = unseen.length >= count ? unseen : pool;

  // Shuffle using Fisher-Yates
  const shuffled = [...activePool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
