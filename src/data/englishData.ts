import { TopicLesson, Flashcard, Question } from '../types';

export const ENGLISH_LESSONS: TopicLesson[] = [
  {
    id: 'eng_articles',
    subject: 'english',
    chapter: 'Grammar Foundations',
    title: 'Articles (A, An, The) & Rules',
    estimatedMinutes: 18,
    introduction: 'Articles are determiners used before nouns to define nouns or provide specific information. Master the definitive distinction between consonant/vowel sounds and the unique geographical usage of "The".',
    concepts: [
      'Articles are of three types: A, An (Indefinite) and The (Definite).',
      'Usage of A/An depends entirely on the PHONETIC SOUND with which a word begins, NOT on the spelling letter. Eg: a European, a university, an M.P., an honest man, a one-rupee note.',
      'A/An is used before singular countable nouns (e.g. Twelve inches make a foot) and when introducing an unknown person (A Mr. Sharma has arrived).',
      'Article A/An is OMITTED with uncountable nouns such as advice, luggage, information, furniture, news, hair, accommodation (Wrong: "an advice"; Right: "a piece of advice").',
      'Definite article "The" must precede: oceans, gulfs, seas, rivers (the Pacific, the Ganga, the Nile), mountain ranges (the Himalayas, the Alps), countries with "United/Republic/Kingdom" (the USA, the UK, the UAE), group of islands (the Andamans).',
      '"The" must NOT precede: individual continents (Asia), individual countries (India, France), single mountain peaks (Mount Everest, Mount Fuji), single lakes (Lake Superior), names of sports or subjects (cricket, mathematics).'
    ],
    rulesOrFormulas: [
      { title: 'Sound Rule', desc: 'Use "A" before consonant sounds (/b/, /k/, /j/, /w/), "An" before vowel sounds (/æ/, /eɪ/, /ɒ/).', formula: 'An + Vowel Sound / A + Consonant Sound' },
      { title: 'Double Comparison', desc: 'When comparing two proportional qualities in a clause.', formula: 'The + comparative..., the + comparative... (e.g. The higher you go, the cooler it becomes)' },
      { title: 'Selection Out of Two', desc: 'When selecting one of two specific items.', formula: 'He is the better of the two candidates.' }
    ],
    workedExamples: [
      { problem: 'An hourly rate of Rs. 1000 is too much. Find error.', solution: 'No error. "Hourly" starts with silent "h" yielding vowel sound /aʊər/, hence "an" is correct.' },
      { problem: 'The Royal Sundaram, Bajaj Allianz, and ICICI are insurance firms.', solution: 'Error: omit "The" before company proper nouns. Correct: "Royal Sundaram, Bajaj Allianz..."' }
    ],
    commonMistakes: [
      { mistake: 'He gave me an advice regarding the exam.', correction: 'He gave me advice (or a piece of advice).', why: 'Advice is an uncountable noun and does not take indefinite articles.' },
      { mistake: 'The Mount Everest is the highest peak.', correction: 'Mount Everest is the highest peak.', why: '"The" is used for mountain ranges (the Himalayas) but omitted for single peaks.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_art_1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'easy',
        question: "Choose the correct sentence:",
        options: [
          "He is an honest police officer.",
          "He is a honest police officer.",
          "He is the honest officer who has not name.",
          "He is honest officer."
        ],
        correctAnswer: 0,
        explanation: "'Honest' begins with a silent 'h' and a vowel sound /ɒ/, thus takes 'an'."
      }
    ]
  },
  {
    id: 'eng_conjunctions',
    subject: 'english',
    chapter: 'Grammar Foundations',
    title: 'Conjunctions & Parallelism',
    estimatedMinutes: 20,
    introduction: 'Conjunctions link words, phrases, and clauses to form elegant compound and complex sentences while maintaining grammatical parallelism.',
    concepts: [
      'Coordinating Conjunctions: Link clauses of equal grammatical rank. Remember mnemonic FANBOYS: For, And, Nor, But, Or, Yet, So.',
      'Correlative Conjunctions: Always appear in strict paired formats: either...or, neither...nor, not only...but also, both...and.',
      'Lest Rule: "Lest" is always followed by "should" and never takes "not" because negative meaning is already inherent (e.g. Walk cautiously lest you should stumble).',
      'Other...Than: "Other" is followed by "than", NOT "but" (e.g. He has no choice other than to surrender).',
      'Unless vs Until: "Unless" expresses condition (if not); "Until" expresses time. Neither takes a double negative.'
    ],
    rulesOrFormulas: [
      { title: 'Lest Condition', desc: 'Lest is inherently negative; followed only by modal "should".', formula: 'Subject + Verb + lest + Subject + should + V1' },
      { title: 'Subordinating Inversion', desc: 'Hardly/Scarcely are followed by "when", not "then" or "than".', formula: 'Hardly had + Subject + V3... when...' },
      { title: 'Correlative Parallelism', desc: 'Both sides of correlative conjunctions must share identical parts of speech.', formula: 'not only [Verb/Noun] ... but also [Verb/Noun]' }
    ],
    workedExamples: [
      { problem: 'Work hard lest you should not fail.', solution: 'Incorrect: lest already carries negative force. Correct: "Work hard lest you should fail."' },
      { problem: 'She is not only intelligent, but generous.', solution: 'Incorrect: missing "also". Correct: "She is not only intelligent, but also generous."' }
    ],
    commonMistakes: [
      { mistake: 'Neither he or his brother attended the briefing.', correction: 'Neither he nor his brother attended the briefing.', why: 'Neither must pair strictly with nor; either pairs with or.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_conj_1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'medium',
        question: "Fill in the blank: 'Run fast lest you _______ miss the military train.'",
        options: ["might", "should", "will not", "could"],
        correctAnswer: 1,
        explanation: "'Lest' is grammatically paired with 'should' and conveys preventive purpose."
      }
    ]
  },
  {
    id: 'eng_prepositions',
    subject: 'english',
    chapter: 'Grammar Foundations',
    title: 'Prepositions & Common Traps',
    estimatedMinutes: 22,
    introduction: 'Prepositions specify spatial, temporal, or logical relationships. Mastering fixed prepositions and avoiding false insertions is critical for AFCAT error spotting.',
    concepts: [
      'In - On - At Pyramid: "In" for large periods/locations (centuries, years, countries, cities). "On" for specific dates/days and surfaces (on Monday, on 15th August, on the table). "At" for exact clock times and specific spots (at 5 PM, at the bus stop).',
      'Arrive At vs Arrive In: Arrive at a specific point or venue (arrive at the airfield, station). Arrive in a city, country, or territory (arrive in London, arrive in India).',
      'Married To: One is married to someone (He is married to Kim), NOT married with.',
      'Omission of Prepositions: Omit prepositions before transitive verbs with direct objects (e.g., discuss the matter, enter the hall, ordered tea, marry someone). Also omit prepositions before time words qualified by this, that, next, last, every (e.g. He met me last evening, NOT on last evening).',
      'Since vs For: "Since" marks a specific point in time (since 1999, since morning). "For" denotes duration (for 5 years, for two hours).'
    ],
    rulesOrFormulas: [
      { title: 'Time / Place Hierarchy', desc: 'At (specific) -> On (medium/days) -> In (general/large)', formula: 'At 7 AM < On Tuesday < In July < In 2026' },
      { title: 'Fixed Adjective Pairs', desc: 'Aware of, different from, similar to, good at, surprised at, interested in, responsible for.', formula: 'Adjective + Fixed Preposition' }
    ],
    workedExamples: [
      { problem: 'I will meet you on tomorrow morning.', solution: 'Incorrect: omit "on" before tomorrow. Correct: "I will meet you tomorrow morning."' },
      { problem: 'She has been residing here since five years.', solution: 'Incorrect: 5 years is a duration, so use "for". Correct: "She has been residing here for five years."' }
    ],
    commonMistakes: [
      { mistake: 'We discussed about the squadron strategy.', correction: 'We discussed the squadron strategy.', why: '"Discuss" is a transitive verb that directly governs its object without "about".' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_prep_1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'easy',
        question: "He is proficient _______ aeronautical engineering and good _______ solving puzzles.",
        options: ["at, in", "in, at", "with, on", "for, about"],
        correctAnswer: 1,
        explanation: "One is 'proficient in' a subject and 'good at' an activity or skill."
      }
    ]
  },
  {
    id: 'eng_voice_speech',
    subject: 'english',
    chapter: 'Applied Grammar',
    title: 'Direct/Indirect Speech & Active/Passive Voice',
    estimatedMinutes: 25,
    introduction: 'Master reporting clauses, modal transformations, and tense conversions for both direct-to-indirect narration and active-to-passive voice transformations.',
    concepts: [
      'Speech Tense Shifts: When reporting verb is in past tense, Simple Present -> Simple Past; Present Continuous -> Past Continuous; Present Perfect -> Past Perfect; Simple Past -> Past Perfect.',
      'Universal Truth Exception: If direct speech expresses an eternal truth or habitual fact, tenses DO NOT shift (e.g., "The teacher said, \\\'The sun rises in the east\\\'" -> "The teacher said that the sun rises in the east").',
      'Time and Place Adverbs in Speech: now -> then, today -> that day, tomorrow -> the next day, yesterday -> the day before, here -> there, this -> that.',
      'Voice Conversion: Object becomes subject, subject becomes prepositional agent (by + agent). The main verb is ALWAYS converted to past participle (V3).',
      'Untransformed Tenses in Passive: Present Perfect Continuous, Past Perfect Continuous, Future Continuous, and Future Perfect Continuous generally have no standard passive form.'
    ],
    rulesOrFormulas: [
      { title: 'Imperative Indirect', desc: 'Imperative statements convert into infinitive phrases (to + V1).', formula: 'Subject + ordered/requested + object + to + V1' },
      { title: 'Passive Core Structure', desc: 'Subject + auxiliary verb (be) + V3 (past participle) + by agent.', formula: 'Active: S + V + O => Passive: O + Be + V3 + by S' }
    ],
    workedExamples: [
      { problem: 'Direct: She said, "I have completed the flight sortie."', solution: 'Indirect: She said that she had completed the flight sortie.' },
      { problem: 'Active: The engineer inspected the aircraft turbine.', solution: 'Passive: The aircraft turbine was inspected by the engineer.' }
    ],
    commonMistakes: [
      { mistake: 'He asked me that where was I going.', correction: 'He asked me where I was going.', why: 'Do not insert "that" before wh- question words in indirect speech, and revert the auxiliary inversion to normal assertion.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_speech_1',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Direct and Indirect Speech',
        difficulty: 'medium',
        question: "Transform to Indirect: The commander said to the pilots, 'Are you ready for takeoff?'",
        options: [
          "The commander asked the pilots if they were ready for takeoff.",
          "The commander asked that whether the pilots are ready for takeoff.",
          "The commander ordered that if the pilots were ready for takeoff.",
          "The commander told the pilots they were ready for takeoff."
        ],
        correctAnswer: 0,
        explanation: "Yes/No interrogative reporting uses 'if/whether' without 'that', with subject-auxiliary order restored."
      }
    ]
  }
];

export const ENGLISH_FLASHCARDS: Flashcard[] = [
  // Idioms from the provided PDF
  { id: 'fc_id_1', subject: 'english', category: 'Idioms & Phrases', front: 'Rank and File', back: 'Ordinary People / Common members of an organization', details: 'The rank and file of the unit supported the mission without hesitation.' },
  { id: 'fc_id_2', subject: 'english', category: 'Idioms & Phrases', front: 'By fits and starts', back: 'Irregularly / In short, sporadic periods', details: 'Studying by fits and starts will not yield an AFCAT recommendation.' },
  { id: 'fc_id_3', subject: 'english', category: 'Idioms & Phrases', front: 'At one\'s wits\' end', back: 'Completely perplexed / Not knowing what to do', details: 'Faced with multiple dilemmas, the candidate was at his wits\' end.' },
  { id: 'fc_id_4', subject: 'english', category: 'Idioms & Phrases', front: 'Between the devil and the deep sea', back: 'Between two equally hazardous dangers', details: 'Trapped on both fronts, the enemy was caught between the devil and the deep sea.' },
  { id: 'fc_id_5', subject: 'english', category: 'Idioms & Phrases', front: 'Burn the midnight oil', back: 'Work or study hard late into the night', details: 'Aspirants burn the midnight oil solving previous year papers.' },
  { id: 'fc_id_6', subject: 'english', category: 'Idioms & Phrases', front: 'Call a spade a spade', back: 'Speak frankly and directly without sugarcoating', details: 'A military officer must call a spade a spade during mission debriefs.' },
  { id: 'fc_id_7', subject: 'english', category: 'Idioms & Phrases', front: 'Come off with flying colours', back: 'Be highly successful and triumph', details: 'She cleared the AFCAT flying branch with flying colours.' },
  { id: 'fc_id_8', subject: 'english', category: 'Idioms & Phrases', front: 'Hit the nail on the head', back: 'Do or say the exact right thing', details: 'Your analysis of the aircraft range hit the nail on the head.' },
  { id: 'fc_id_9', subject: 'english', category: 'Idioms & Phrases', front: 'Die in harness', back: 'Die while in active service / continuous occupation', details: 'The brave officer wished to die in harness serving the motherland.' },
  { id: 'fc_id_10', subject: 'english', category: 'Idioms & Phrases', front: 'Leave no stone unturned', back: 'Use all available means / Spare no effort', details: 'Leave no stone unturned in preparing your quantitative formula sheet.' },
  { id: 'fc_id_11', subject: 'english', category: 'Idioms & Phrases', front: 'Bury the hatchet', back: 'End a quarrel and establish peace', details: 'The two rival officers decided to bury the hatchet for national interest.' },
  { id: 'fc_id_12', subject: 'english', category: 'Idioms & Phrases', front: 'A bolt from the blue', back: 'An unexpected and shocking catastrophe', details: 'The sudden deployment order came as a bolt from the blue.' },
  { id: 'fc_id_13', subject: 'english', category: 'Idioms & Phrases', front: 'Once in a blue moon', back: 'Very rarely / Almost never', details: 'A total solar eclipse occurs once in a blue moon in any specific city.' },
  { id: 'fc_id_14', subject: 'english', category: 'Idioms & Phrases', front: 'A white elephant', back: 'A useless possession that is extremely expensive to maintain', details: 'The obsolete radar station became an expensive white elephant.' },
  { id: 'fc_id_15', subject: 'english', category: 'Idioms & Phrases', front: 'Lock, stock and barrel', back: 'The whole of everything / Completely', details: 'The squadron moved lock, stock and barrel to the forward base.' },

  // Synonyms & Antonyms from the PDF
  { id: 'fc_voc_1', subject: 'english', category: 'Vocabulary', front: 'Abate', back: 'Syn: Moderate, Decrease, Subside\nAnt: Aggravate, Intensify', details: 'The severe thunderstorm began to abate over the airfield.' },
  { id: 'fc_voc_2', subject: 'english', category: 'Vocabulary', front: 'Acumen', back: 'Syn: Sharpness, Brilliance, Insight\nAnt: Stupidity, Ignorance', details: 'Tactical acumen is essential for an air combat leader.' },
  { id: 'fc_voc_3', subject: 'english', category: 'Vocabulary', front: 'Benevolent', back: 'Syn: Benign, Generous, Altruistic\nAnt: Malevolent, Miserly', details: 'The benevolent commander looked after the families of his airmen.' },
  { id: 'fc_voc_4', subject: 'english', category: 'Vocabulary', front: 'Callous', back: 'Syn: Obdurate, Unfeeling, Hardened\nAnt: Compassionate, Tender', details: 'He showed a callous disregard for the safety regulations.' },
  { id: 'fc_voc_5', subject: 'english', category: 'Vocabulary', front: 'Clandestine', back: 'Syn: Covert, Furtive, Secret\nAnt: Open, Legal, Overt', details: 'Special Forces carried out a clandestine reconnaissance behind enemy lines.' },
  { id: 'fc_voc_6', subject: 'english', category: 'Vocabulary', front: 'Decipher', back: 'Syn: Interpret, Decode, Reveal\nAnt: Misinterpret, Distort', details: 'The intelligence cell managed to decipher the enemy communication code.' },
  { id: 'fc_voc_7', subject: 'english', category: 'Vocabulary', front: 'Docile', back: 'Syn: Pliable, Submissive, Compliant\nAnt: Headstrong, Obstinate', details: 'The young recruits were well-disciplined and docile during drill.' },
  { id: 'fc_voc_8', subject: 'english', category: 'Vocabulary', front: 'Equivocal', back: 'Syn: Ambiguous, Hazy, Uncertain\nAnt: Obvious, Lucid, Clear', details: 'The pilot received an equivocal radio message due to static.' },
  { id: 'fc_voc_9', subject: 'english', category: 'Vocabulary', front: 'Invincible', back: 'Syn: Unconquerable, Impregnable\nAnt: Vulnerable, Effeminate', details: 'The fortress was deemed invincible until air power breached it.' },
  { id: 'fc_voc_10', subject: 'english', category: 'Vocabulary', front: 'Zenith', back: 'Syn: Summit, Apex, Pinnacle\nAnt: Nadir, Base, Bottom', details: 'Reaching the rank of Air Chief Marshal was the zenith of his military career.' }
];
