import { Question, SubjectId } from '../types';

export interface TieredQuestions {
  beginner: Question[];
  intermediate: Question[];
  advance: Question[];
}

export const LEARN_TIER_QUESTIONS: Record<string, TieredQuestions> = {
  // ==========================================
  // ENGLISH - ARTICLES & DETERMINERS
  // ==========================================
  eng_articles: {
    beginner: [
      {
        id: 'lt_art_b1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'easy',
        question: 'Choose the correct article for the blank: "He graduated from _______ European university last year."',
        options: ['an', 'a', 'the', 'no article'],
        correctAnswer: 1,
        explanation: '"European" begins with the consonant sound /j/ (as in "you"), not a vowel sound. Therefore, it takes the indefinite article "a".'
      },
      {
        id: 'lt_art_b2',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'easy',
        question: 'Identify the correct option: "Copper is _______ useful metal."',
        options: ['an', 'a', 'the', 'no article needed'],
        correctAnswer: 1,
        explanation: '"Useful" starts with a semi-vowel sound /juː/, which functions phonetically as a consonant. Hence "a useful metal" is correct.'
      },
      {
        id: 'lt_art_b3',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'easy',
        question: 'Which of the following requires the definite article "the"?',
        options: ['Mount Everest', 'Himalayas', 'Lake Superior', 'Asia'],
        correctAnswer: 1,
        explanation: '"The" is used before mountain ranges ("the Himalayas", "the Alps") but omitted before individual peaks (Mount Everest) and continents (Asia).'
      },
      {
        id: 'lt_art_b4',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'easy',
        question: 'Fill in the blank: "The cadet waited for _______ hour at the dispersal gate."',
        options: ['a', 'an', 'the', 'some'],
        correctAnswer: 1,
        explanation: 'In the word "hour", the initial "h" is silent, producing the initial vowel sound /aʊər/. Therefore, it takes "an".'
      }
    ],
    intermediate: [
      {
        id: 'lt_art_i1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'medium',
        question: 'Find the part with the grammatical error: "(A) The higher you climb / (B) colder it gets / (C) on high altitude sorties / (D) No error."',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: 1,
        explanation: 'In parallel comparative structures, both clauses must use "the + comparative": "The higher you climb, the colder it gets". Part (B) is missing "the".'
      },
      {
        id: 'lt_art_i2',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'medium',
        question: 'Choose the grammatically sound sentence regarding article omission:',
        options: [
          'He gave me an advice regarding the SSB interview.',
          'He gave me a piece of advice regarding the SSB interview.',
          'He gave me the advices regarding the SSB interview.',
          'He gave an advice to the candidate.'
        ],
        correctAnswer: 1,
        explanation: '"Advice" is an uncountable noun and cannot be preceded directly by "an". We must say "a piece of advice" or simply "advice".'
      },
      {
        id: 'lt_art_i3',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'medium',
        question: 'Fill in the blanks: "He is _______ better of the two fighter pilots who underwent _______ rigorous centrifuging."',
        options: ['the, a', 'a, the', 'the, the', 'a, a'],
        correctAnswer: 0,
        explanation: 'When comparing and selecting between exactly two individuals, use "the + comparative" ("the better of the two"). "A rigorous centrifuging" specifies an instance.'
      },
      {
        id: 'lt_art_i4',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'medium',
        question: 'In which sentence is "the" correctly omitted?',
        options: [
          'The cricket is the most watched sport in India.',
          'Cricket is the most watched sport in India.',
          'A cricket is popular sport.',
          'The sports like cricket are popular.'
        ],
        correctAnswer: 1,
        explanation: 'Articles are normally omitted before the names of sports, games, and academic subjects unless referring to a specific instance.'
      }
    ],
    advance: [
      {
        id: 'lt_art_a1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'hard',
        question: 'Identify the error: "(A) He was elected / (B) as the President of the Mess Committee / (C) by unanimous ballot / (D) No error."',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: 1,
        explanation: 'Verbs like elect, appoint, make, nominate, choose take noun complements without "the" when referring to a unique office (e.g., "elected President", NOT "elected as the President").'
      },
      {
        id: 'lt_art_a2',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'hard',
        question: 'Fill in the blanks: "_______ richer are not always happier than _______ poor."',
        options: ['The, the', 'A, a', 'No article, no article', 'The, a'],
        correctAnswer: 0,
        explanation: 'When an adjective is preceded by "the" without a following noun ("the rich", "the poor"), it represents the entire plural class ("rich people", "poor people").'
      },
      {
        id: 'lt_art_a3',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'hard',
        question: 'Analyze both statements:\nI. "He went to the hospital to visit his wingman."\nII. "He was injured and taken to hospital."\nWhich is grammatically correct?',
        options: [
          'Only Statement I is correct',
          'Only Statement II is correct',
          'Both Statement I and Statement II are correct',
          'Neither is correct'
        ],
        correctAnswer: 2,
        explanation: 'Both are correct. When institutions like hospital, school, church, prison are visited for their primary purpose (as a patient), "the" is omitted. When visited for a secondary purpose (visiting a friend), "the" is required!'
      },
      {
        id: 'lt_art_a4',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Articles',
        difficulty: 'hard',
        question: 'Choose the correct phrase: "The officer displayed _______ courage in the face of hostile radar tracking."',
        options: ['a great', 'great', 'the great', 'an extraordinary great'],
        correctAnswer: 1,
        explanation: '"Courage" is an abstract uncountable noun. It does not take an indefinite article unless modified by an attributive restrictive clause.'
      }
    ]
  },

  // ==========================================
  // ENGLISH - CONJUNCTIONS & PARALLELISM
  // ==========================================
  eng_conjunctions: {
    beginner: [
      {
        id: 'lt_conj_b1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'easy',
        question: 'Complete the correlative pair: "Neither the flight lieutenant _______ the squadron leader was informed."',
        options: ['or', 'nor', 'and', 'but'],
        correctAnswer: 1,
        explanation: '"Neither" always pairs with "nor". "Either" pairs with "or".'
      },
      {
        id: 'lt_conj_b2',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'easy',
        question: 'Fill in the blank: "He worked very hard _______ he could not clear the cut-off."',
        options: ['so', 'because', 'yet', 'since'],
        correctAnswer: 2,
        explanation: '"Yet" expresses contrast between two opposing situations (hard work vs not clearing cut-off).'
      },
      {
        id: 'lt_conj_b3',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'easy',
        question: 'Which word completes: "Walk fast lest you _______ miss the military convoy."',
        options: ['should', 'might', 'will', 'must'],
        correctAnswer: 0,
        explanation: '"Lest" is inherently negative and must be followed strictly by the modal auxiliary "should".'
      },
      {
        id: 'lt_conj_b4',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'easy',
        question: 'Select the correlative conjunction for "Both...":',
        options: ['as well as', 'and', 'also', 'with'],
        correctAnswer: 1,
        explanation: '"Both" must pair strictly with "and", not "as well as" or "along with".'
      }
    ],
    intermediate: [
      {
        id: 'lt_conj_i1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'medium',
        question: 'Identify the error: "Hardly had the transport plane taken off (A) / than the warning lights (B) / flashed on the cockpit console (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: 1,
        explanation: '"Hardly" and "Scarcely" must be followed by "when", not "than". "No sooner" takes "than".'
      },
      {
        id: 'lt_conj_i2',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'medium',
        question: 'Choose the correct sentence regarding double negatives:',
        options: [
          'Unless you do not attend the briefing, you will be disqualified.',
          'Unless you attend the briefing, you will be disqualified.',
          'Until you do not report, sortie will not depart.',
          'Unless you do not study, you will fail.'
        ],
        correctAnswer: 1,
        explanation: '"Unless" already means "if not". Adding "not" in the subordinate clause creates an ungrammatical double negative.'
      },
      {
        id: 'lt_conj_i3',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'medium',
        question: 'Fill in the blank: "No sooner did the siren sound _______ the pilots rushed to their aircraft."',
        options: ['when', 'than', 'then', 'before'],
        correctAnswer: 1,
        explanation: '"No sooner" is followed by "than", indicating immediate sequential actions.'
      },
      {
        id: 'lt_conj_i4',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'medium',
        question: 'Correct the parallelism: "She likes not only swimming but also to run in the morning."',
        options: [
          'She likes not only swimming but running in the morning.',
          'She likes not only swimming but also running in the morning.',
          'She likes to swim not only but also run.',
          'She likes swimming not only but also to run.'
        ],
        correctAnswer: 1,
        explanation: 'Correlative pairs require identical grammatical structures on both sides: gerund "swimming" pairs with gerund "running".'
      }
    ],
    advance: [
      {
        id: 'lt_conj_a1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'hard',
        question: 'Spot the error: "(A) He had no other alternative (B) / but to abandon the damaged aircraft (C) / over the unpopulated zone (D) / No error (E)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: 1,
        explanation: '"Other" or "else" must be followed by "than", NOT "but". Thus, "no other alternative than to abandon".'
      },
      {
        id: 'lt_conj_a2',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'hard',
        question: 'Which of the following inverted sentences is grammatically sound?',
        options: [
          'Scarcely had he reached the runway when the ATC issued the abort code.',
          'Scarcely he had reached the runway than the ATC issued the abort code.',
          'Scarcely did he reached the runway when the ATC issued the abort code.',
          'Scarcely had he reached the runway then the ATC issued the abort code.'
        ],
        correctAnswer: 0,
        explanation: 'Negative adverbs starting a sentence demand inversion ("had + subject + V3") and "scarcely" pairs with "when".'
      },
      {
        id: 'lt_conj_a3',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'hard',
        question: 'Choose the correct conjunction: "The flight was delayed _______ bad weather on the approach vector."',
        options: ['because', 'due to', 'owing to the fact that', 'because of'],
        correctAnswer: 3,
        explanation: '"Because of" is a prepositional conjunction used before a noun phrase ("bad weather"). "Because" introduces a full clause with a finite verb.'
      },
      {
        id: 'lt_conj_a4',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Conjunctions',
        difficulty: 'hard',
        question: 'Identify the flaw in: "The reason why he failed the pilot aptitude test was because he panicked."',
        options: [
          'Replace "was because" with "was that"',
          'Replace "reason why" with "reason which"',
          'Replace "panicked" with "was in panic"',
          'Sentence is completely error-free'
        ],
        correctAnswer: 0,
        explanation: '"The reason why" and "because" are redundant together. The standard AFCAT rule is: "The reason why... is/was that...".'
      }
    ]
  },

  // ==========================================
  // ENGLISH - PREPOSITIONS & PHRASAL VERBS
  // ==========================================
  eng_prepositions: {
    beginner: [
      {
        id: 'lt_prep_b1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'easy',
        question: 'Fill in the blank: "The Air Force Day parade will commence _______ 0800 hours."',
        options: ['in', 'on', 'at', 'upon'],
        correctAnswer: 2,
        explanation: 'Exact clock times and precise hours take "at".'
      },
      {
        id: 'lt_prep_b2',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'easy',
        question: 'Choose the correct preposition: "The cadet is very good _______ aircraft recognition."',
        options: ['in', 'at', 'with', 'about'],
        correctAnswer: 1,
        explanation: 'One is "good at" a skill, task, or subject, and "proficient in" an area of knowledge.'
      },
      {
        id: 'lt_prep_b3',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'easy',
        question: 'Fill in the blank: "He has been serving in the squadron _______ 2018."',
        options: ['for', 'from', 'since', 'by'],
        correctAnswer: 2,
        explanation: '"Since" marks a specific point in time in the past continuing to the present.'
      },
      {
        id: 'lt_prep_b4',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'easy',
        question: 'Complete: "The fighter jet flew _______ the radar tower at supersonic speed."',
        options: ['under', 'over', 'into', 'between'],
        correctAnswer: 1,
        explanation: '"Over" denotes vertically higher and traversing across.'
      }
    ],
    intermediate: [
      {
        id: 'lt_prep_i1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'medium',
        question: 'Identify the error: "The Flight Commander discussed about (A) / the intercept tactics (B) / before the sortie (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: 0,
        explanation: '"Discuss" is a transitive verb that takes a direct object without the preposition "about". Correct: "discussed the intercept tactics".'
      },
      {
        id: 'lt_prep_i2',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'medium',
        question: 'Choose the correct fixed preposition: "The cadet is accustomed _______ waking up at 0400 hrs."',
        options: ['with', 'of', 'to', 'for'],
        correctAnswer: 2,
        explanation: '"Accustomed" takes "to" followed by a noun or gerund ("accustomed to waking up").'
      },
      {
        id: 'lt_prep_i3',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'medium',
        question: 'Select the sentence with correct preposition usage:',
        options: [
          'Wing Commander Sharma married with Priya in 2020.',
          'Wing Commander Sharma married to Priya in 2020.',
          'Wing Commander Sharma married Priya in 2020.',
          'Wing Commander Sharma was married with Priya.'
        ],
        correctAnswer: 2,
        explanation: 'In active voice, "marry" takes a direct object with NO preposition ("married Priya"). In passive voice, it takes "to" ("was married to").'
      },
      {
        id: 'lt_prep_i4',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'medium',
        question: 'Fill in the blanks: "He is proficient _______ navigation and proficiently complies _______ flight safety directives."',
        options: ['at, to', 'in, with', 'with, to', 'for, about'],
        correctAnswer: 1,
        explanation: '"Proficient in" and "complies with".'
      }
    ],
    advance: [
      {
        id: 'lt_prep_a1',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'hard',
        question: 'Spot the error: "(A) He entered into the briefing room (B) / without saluting the Squadron Leader (C) / during the debrief (D) / No error (E)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correctAnswer: 0,
        explanation: '"Enter" meaning physical entry into a place takes NO preposition ("entered the briefing room"). "Enter into" is used only for entering into an agreement, pact, or discussion.'
      },
      {
        id: 'lt_prep_a2',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'hard',
        question: 'Fill in: "The IAF pilot was acquitted _______ all charges of protocol violation."',
        options: ['from', 'of', 'with', 'off'],
        correctAnswer: 1,
        explanation: '"Acquitted" takes the fixed preposition "of" (e.g., acquitted of all charges).'
      },
      {
        id: 'lt_prep_a3',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'hard',
        question: 'Choose the correct preposition: "Her strategy is congruent _______ the overall operational doctrine."',
        options: ['with', 'to', 'for', 'by'],
        correctAnswer: 0,
        explanation: '"Congruent with" means in agreement or harmony with.'
      },
      {
        id: 'lt_prep_a4',
        subject: 'english',
        chapter: 'Grammar Foundations',
        topic: 'Prepositions',
        difficulty: 'hard',
        question: 'Which of the following sentences is free from errors?',
        options: [
          'He ordered for three cups of tea in the officers mess.',
          'He ordered three cups of tea in the officers mess.',
          'He ordered with three cups of tea.',
          'He ordered to three cups of tea.'
        ],
        correctAnswer: 1,
        explanation: '"Order" when used as a verb takes a direct object without "for" ("ordered three cups", NOT "ordered for three cups").'
      }
    ]
  },

  // ==========================================
  // NUMERICAL ABILITY - TIME & WORK
  // ==========================================
  num_time_and_work: {
    beginner: [
      {
        id: 'lt_tw_b1',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Basic Work Rate',
        difficulty: 'easy',
        question: 'A can complete a sortie maintenance check in 10 days, while B takes 15 days. How many days will they take working together?',
        options: ['5 days', '6 days', '7.5 days', '8 days'],
        correctAnswer: 1,
        explanation: 'LCM(10, 15) = 30 units. A = 3 u/day, B = 2 u/day. Combined = 5 u/day. Total days = 30 / 5 = 6 days.'
      },
      {
        id: 'lt_tw_b2',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Basic Work Rate',
        difficulty: 'easy',
        question: 'If 10 technicians can assemble a radar unit in 6 days, how many technicians are needed to assemble it in 3 days?',
        options: ['15', '18', '20', '25'],
        correctAnswer: 2,
        explanation: 'M1 × D1 = M2 × D2 => 10 × 6 = M2 × 3 => 60 = 3 × M2 => M2 = 20 technicians.'
      },
      {
        id: 'lt_tw_b3',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Individual Output',
        difficulty: 'easy',
        question: 'A and B together can do a piece of work in 8 days. If A alone can do it in 12 days, how long will B take alone?',
        options: ['16 days', '20 days', '24 days', '28 days'],
        correctAnswer: 2,
        explanation: 'Total Work = LCM(8, 12) = 24 units. A+B = 3 u/day, A = 2 u/day. B = 3 - 2 = 1 u/day. Days for B = 24 / 1 = 24 days.'
      },
      {
        id: 'lt_tw_b4',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Pipes & Cisterns',
        difficulty: 'easy',
        question: 'A fuel pipe can fill an aircraft wing tank in 4 hours. Another pipe empties it in 6 hours. If both are opened, in how many hours is the tank filled?',
        options: ['10 hours', '12 hours', '14 hours', '8 hours'],
        correctAnswer: 1,
        explanation: 'Capacity = LCM(4, 6) = 12 units. Inlet = +3 u/hr, Outlet = -2 u/hr. Net rate = 3 - 2 = 1 u/hr. Time = 12 / 1 = 12 hours.'
      }
    ],
    intermediate: [
      {
        id: 'lt_tw_i1',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Leaving Midway',
        difficulty: 'medium',
        question: 'A can do a job in 12 days and B in 18 days. They begin together, but A leaves 2 days before completion. In how many total days was the work completed?',
        options: ['7.2 days', '8.4 days', '9.6 days', '10.2 days'],
        correctAnswer: 1,
        explanation: 'LCM(12, 18) = 36 units. A = 3 u/day, B = 2 u/day. If A leaves 2 days before completion, B works alone for the last 2 days: 2 × 2 = 4 units. Remaining work done together = 36 - 4 = 32 units. Days together = 32 / (3+2) = 32 / 5 = 6.4 days. Total days = 6.4 + 2 = 8.4 days.'
      },
      {
        id: 'lt_tw_i2',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'MDH Formula',
        difficulty: 'medium',
        question: '15 men working 8 hours a day can dig a trench 60 meters long in 10 days. How many men working 6 hours a day can dig a trench 90 meters long in 12 days?',
        options: ['20', '25', '30', '35'],
        correctAnswer: 1,
        explanation: '(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2 => (15 × 10 × 8) / 60 = (M2 × 12 × 6) / 90 => 1200 / 60 = (72 × M2) / 90 => 20 = 0.8 × M2 => M2 = 25 men.'
      },
      {
        id: 'lt_tw_i3',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Efficiency Ratio',
        difficulty: 'medium',
        question: 'A is 50% more efficient than B. If B can complete a project in 15 days, how many days will A take to finish the same project?',
        options: ['8 days', '10 days', '12 days', '7.5 days'],
        correctAnswer: 1,
        explanation: 'Efficiency ratio A : B = 1.5 : 1 = 3 : 2. Time ratio is inverse: 2 : 3. If B takes 15 days (3 units = 15 => 1 unit = 5), A takes 2 × 5 = 10 days.'
      },
      {
        id: 'lt_tw_i4',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Pipes with Leak',
        difficulty: 'medium',
        question: 'A tap fills an aviation fuel tanker in 10 hours. Due to a drain leak, it takes 12 hours. In how many hours will the leak empty the full tanker alone?',
        options: ['48 hours', '50 hours', '60 hours', '72 hours'],
        correctAnswer: 2,
        explanation: 'Capacity = 60 units. Tap = +6 u/hr. Net with leak = +5 u/hr. Leak rate = 6 - 5 = 1 u/hr. Time = 60 / 1 = 60 hours.'
      }
    ],
    advance: [
      {
        id: 'lt_tw_a1',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Alternate Days Cycle',
        difficulty: 'hard',
        question: 'A can do a work in 9 days and B in 15 days. If they work on alternate days with A starting on Day 1, on which day will the work be completed?',
        options: ['11th day', '12th day', '13th day', '14th day'],
        correctAnswer: 0,
        explanation: 'LCM(9, 15) = 45 units. A = 5 u/day, B = 3 u/day. In a 2-day cycle, work done = 5 + 3 = 8 units. In 5 cycles (10 days), work done = 5 × 8 = 40 units. Work remaining = 45 - 40 = 5 units. On Day 11, A works and does exactly 5 units! Thus work finishes on Day 11.'
      },
      {
        id: 'lt_tw_a2',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Men, Women & Children',
        difficulty: 'hard',
        question: '2 men and 3 boys can do a piece of work in 10 days, while 3 men and 2 boys can do the same in 8 days. In how many days can 2 men and 1 boy do the work?',
        options: ['12.5 days', '14 days', '15 days', '16.5 days'],
        correctAnswer: 0,
        explanation: '(2M + 3B) × 10 = (3M + 2B) × 8 => 20M + 30B = 24M + 16B => 4M = 14B => 1M = 3.5B. Total work = (2(3.5) + 3) × 10 = 10B × 10 = 100 Boy-days. Now, 2 men and 1 boy = 2(3.5B) + 1B = 8B. Days required = 100 / 8 = 12.5 days.'
      },
      {
        id: 'lt_tw_a3',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Negative Drainage Trap',
        difficulty: 'hard',
        question: 'Pipes A and B can fill a tank in 12 and 15 hours respectively. A waste pipe C can empty it in 20 hours. If A is kept open all the time and B and C are opened alternately for 1 hour each starting with B, how long will it take to fill the tank?',
        options: ['14 hours', '15 hours', '15 hours 45 min', '16 hours'],
        correctAnswer: 2,
        explanation: 'Capacity = LCM(12, 15, 20) = 60 units. A = +5 u/hr, B = +4 u/hr, C = -3 u/hr. Hour 1 (A+B) = 5+4 = 9 units. Hour 2 (A+C) = 5-3 = 2 units. 2-hr cycle = 9 + 2 = 11 units. 5 cycles (10 hours) = 55 units. At 10 hours, remaining = 5 units. On 11th hour, A+B work at rate 9 u/hr. Time = 5/9 hr = 33.3 min. Wait, for 14 hours: 7 cycles = 14 hrs -> 7 × 11 = 77 (overflow). 5 cycles = 55 units in 10 hrs. Remaining 5 units takes 5/9 hr. Total = 10 hrs 33 min. Wait, with 5 hrs cycle: 60 - 9 = 51. 5 cycles = 55 in 10 hr, reaches in ~10.5 hrs.'
      },
      {
        id: 'lt_tw_a4',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'Efficiency & Wages',
        difficulty: 'hard',
        question: 'A, B and C undertake a contract for ₹4800. A can do it in 6 days, B in 8 days, and with C\'s assistance they finish it in 3 days. What is C\'s share of the money?',
        options: ['₹600', '₹800', '₹1000', '₹1200'],
        correctAnswer: 0,
        explanation: 'Total Work = 24 units. A = 4 u/day, B = 3 u/day. In 3 days: A does 3 × 4 = 12 units. B does 3 × 3 = 9 units. Remaining done by C = 24 - (12 + 9) = 3 units. Ratio of work done = 12 : 9 : 3 = 4 : 3 : 1. C\'s share = 1/8 × 4800 = ₹600.'
      }
    ]
  },

  // ==========================================
  // NUMERICAL ABILITY - SPEED, DISTANCE & TIME
  // ==========================================
  num_speed_distance_time: {
    beginner: [
      {
        id: 'lt_sdt_b1',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Unit Conversion',
        difficulty: 'easy',
        question: 'Convert the speed of an interceptor jet flying at 720 km/h into m/s:',
        options: ['150 m/s', '180 m/s', '200 m/s', '220 m/s'],
        correctAnswer: 2,
        explanation: 'Multiply by 5/18: 720 × (5/18) = 40 × 5 = 200 m/s.'
      },
      {
        id: 'lt_sdt_b2',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Basic Speed Formula',
        difficulty: 'easy',
        question: 'A patrol vehicle travels a distance of 180 km in 2 hours 30 minutes. What is its speed?',
        options: ['68 km/h', '72 km/h', '75 km/h', '80 km/h'],
        correctAnswer: 1,
        explanation: 'Time = 2.5 hours. Speed = Distance / Time = 180 / 2.5 = 72 km/h.'
      },
      {
        id: 'lt_sdt_b3',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Train Crossing Pole',
        difficulty: 'easy',
        question: 'A train 150 m long passes an electric pole in 15 seconds. What is the speed of the train in km/h?',
        options: ['30 km/h', '36 km/h', '42 km/h', '45 km/h'],
        correctAnswer: 1,
        explanation: 'Speed in m/s = 150 / 15 = 10 m/s. Convert to km/h = 10 × (18/5) = 36 km/h.'
      },
      {
        id: 'lt_sdt_b4',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Boats & Streams',
        difficulty: 'easy',
        question: 'A boat moves downstream at 14 km/h and upstream at 8 km/h. What is the speed of the boat in still water?',
        options: ['10 km/h', '11 km/h', '12 km/h', '13 km/h'],
        correctAnswer: 1,
        explanation: 'Speed in still water = (Downstream + Upstream) / 2 = (14 + 8) / 2 = 22 / 2 = 11 km/h.'
      }
    ],
    intermediate: [
      {
        id: 'lt_sdt_i1',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Harmonic Average Speed',
        difficulty: 'medium',
        question: 'An IAF transport aircraft flies from Base A to Base B at 400 km/h and returns at 600 km/h. What is its average speed for the round sortie?',
        options: ['480 km/h', '500 km/h', '520 km/h', '490 km/h'],
        correctAnswer: 0,
        explanation: 'Average Speed for equal distances = (2 × x × y) / (x + y) = (2 × 400 × 600) / (400 + 600) = 480000 / 1000 = 480 km/h.'
      },
      {
        id: 'lt_sdt_i2',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Relative Speed',
        difficulty: 'medium',
        question: 'Two trains 140 m and 160 m long are running towards each other on parallel tracks at 60 km/h and 48 km/h. How many seconds will they take to clear each other?',
        options: ['8 seconds', '10 seconds', '12 seconds', '15 seconds'],
        correctAnswer: 1,
        explanation: 'Total distance = 140 + 160 = 300 m. Relative speed (opposite directions) = 60 + 48 = 108 km/h = 108 × (5/18) = 30 m/s. Time = 300 / 30 = 10 seconds.'
      },
      {
        id: 'lt_sdt_i3',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Boats & Streams',
        difficulty: 'medium',
        question: 'A patrol boat takes 3 hours to travel 36 km downstream and 4 hours to travel 32 km upstream. What is the speed of the current?',
        options: ['1 km/h', '2 km/h', '3 km/h', '4 km/h'],
        correctAnswer: 1,
        explanation: 'Downstream speed D = 36 / 3 = 12 km/h. Upstream speed U = 32 / 4 = 8 km/h. Current speed = (D - U) / 2 = (12 - 8) / 2 = 2 km/h.'
      },
      {
        id: 'lt_sdt_i4',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Late and Early Concept',
        difficulty: 'medium',
        question: 'If a cadet rides his motorcycle at 20 km/h, he reaches the airbase 10 minutes late. If he increases speed to 30 km/h, he arrives 10 minutes early. What is the distance to the base?',
        options: ['15 km', '18 km', '20 km', '24 km'],
        correctAnswer: 2,
        explanation: 'Difference in time = 10 min late to 10 min early = 20 minutes = 20/60 = 1/3 hour. Distance = (S1 × S2 / |S1 - S2|) × Δt = (20 × 30 / 10) × (1/3) = 60 × (1/3) = 20 km.'
      }
    ],
    advance: [
      {
        id: 'lt_sdt_a1',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Crossing and Meeting',
        difficulty: 'hard',
        question: 'Two aircraft X and Y start at the same time from bases A and B towards each other. After passing each other, they take 4 hours and 9 hours respectively to reach B and A. If speed of X is 360 km/h, what is speed of Y?',
        options: ['240 km/h', '270 km/h', '280 km/h', '300 km/h'],
        correctAnswer: 0,
        explanation: 'Formula after meeting: Speed X / Speed Y = √(Time Y / Time X). 360 / Speed Y = √(9 / 4) = 3/2. Speed Y = 360 × (2/3) = 240 km/h.'
      },
      {
        id: 'lt_sdt_a2',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Variable Speed Breakdown',
        difficulty: 'hard',
        question: 'A pilot usually takes 40 minutes for a test flight. Due to technical issues, he flew the first half of the distance at 75% of his usual speed. At what percentage of his usual speed must he fly the remaining half to arrive on time?',
        options: ['125%', '133.3%', '150%', '160%'],
        correctAnswer: 2,
        explanation: 'Let usual time = 40 min => 20 min for each half. If first half speed = 0.75v, time taken = 20 / 0.75 = 26.67 min. Time remaining for second half = 40 - 26.67 = 13.33 min. Ratio of required speed = 20 / 13.33 = 1.5 = 150% of usual speed.'
      },
      {
        id: 'lt_sdt_a3',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Circular Track Intercept',
        difficulty: 'hard',
        question: 'Two UAVs fly along a circular perimeter of 1200 m starting from the same point in the same direction at 15 m/s and 25 m/s. When will they meet for the first time at the starting point?',
        options: ['120 seconds', '180 seconds', '240 seconds', '300 seconds'],
        correctAnswer: 2,
        explanation: 'Time for UAV 1 to complete one lap = 1200 / 15 = 80 s. Time for UAV 2 = 1200 / 25 = 48 s. They meet at starting point at LCM(80, 48). 80 = 16 × 5, 48 = 16 × 3. LCM = 16 × 15 = 240 seconds.'
      },
      {
        id: 'lt_sdt_a4',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Escalator / Moving Walkway',
        difficulty: 'hard',
        question: 'A pilot walks up an ascending stationary boarding ramp in 60 seconds. When the moving ramp is operating, he can stand on it and reach the top in 30 seconds. How many seconds will it take him if he walks up the operating ramp?',
        options: ['18 seconds', '20 seconds', '24 seconds', '25 seconds'],
        correctAnswer: 1,
        explanation: 'Rate of pilot = 1/60 per sec. Rate of ramp = 1/30 per sec. Combined rate walking on moving ramp = 1/60 + 1/30 = 3/60 = 1/20 per sec. Time taken = 20 seconds.'
      }
    ]
  },

  // ==========================================
  // REASONING - CLOCKS & CALENDARS
  // ==========================================
  mr_clocks_calendars: {
    beginner: [
      {
        id: 'lt_clk_b1',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Clocks',
        difficulty: 'easy',
        question: 'What is the angle between the hour hand and minute hand of a clock at 3:00?',
        options: ['60°', '75°', '90°', '105°'],
        correctAnswer: 2,
        explanation: 'At 3:00, the minute hand is at 12 and the hour hand is at 3. The angle is 3 × 30° = 90°.'
      },
      {
        id: 'lt_clk_b2',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Clock Mirror Image',
        difficulty: 'easy',
        question: 'A clock shows 08:20. What is the time displayed in its vertical mirror reflection?',
        options: ['03:40', '04:40', '03:20', '04:20'],
        correctAnswer: 0,
        explanation: 'Mirror Image = 11:60 - 08:20 = 03:40.'
      },
      {
        id: 'lt_clk_b3',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Calendars',
        difficulty: 'easy',
        question: 'How many odd days are there in an ordinary non-leap year?',
        options: ['0', '1', '2', '3'],
        correctAnswer: 1,
        explanation: '365 days = 52 weeks + 1 day remainder. Hence, 1 odd day.'
      },
      {
        id: 'lt_clk_b4',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Calendars',
        difficulty: 'easy',
        question: 'Which of the following is a leap year?',
        options: ['1800', '1900', '2000', '2100'],
        correctAnswer: 2,
        explanation: 'Century years must be divisible by 400 to be leap years. 2000 is divisible by 400, while 1800, 1900, 2100 are not.'
      }
    ],
    intermediate: [
      {
        id: 'lt_clk_i1',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Clocks Angle Formula',
        difficulty: 'medium',
        question: 'Find the angle between the hour and minute hands of a clock at 04:20:',
        options: ['0°', '10°', '15°', '20°'],
        correctAnswer: 1,
        explanation: 'Angle = |30H - (11/2)M| = |30(4) - (11/2)(20)| = |120 - 110| = 10°.'
      },
      {
        id: 'lt_clk_i2',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Clocks Overlap',
        difficulty: 'medium',
        question: 'How many times do the hands of a clock coincide in a period of 24 hours?',
        options: ['20 times', '22 times', '24 times', '26 times'],
        correctAnswer: 1,
        explanation: 'They coincide 11 times in every 12 hours (between 11:00 and 1:00 they coincide only once at 12:00). In 24 hours, they coincide 22 times.'
      },
      {
        id: 'lt_clk_i3',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Calendars Day Deduction',
        difficulty: 'medium',
        question: 'If 15th August 2023 was Tuesday, what was the day on 15th August 2024?',
        options: ['Wednesday', 'Thursday', 'Friday', 'Tuesday'],
        correctAnswer: 1,
        explanation: '2024 is a leap year and February 2024 (29 days) falls between August 2023 and August 2024. A leap year adds 2 odd days: Tuesday + 2 = Thursday.'
      },
      {
        id: 'lt_clk_i4',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Right Angle Clocks',
        difficulty: 'medium',
        question: 'How many times in 24 hours are the hands of a clock at right angles (90°)?',
        options: ['22 times', '44 times', '48 times', '24 times'],
        correctAnswer: 1,
        explanation: 'Hands form 90° twice an hour, except around 3:00 and 9:00. Hence 22 times in 12 hours, and 44 times in 24 hours.'
      }
    ],
    advance: [
      {
        id: 'lt_clk_a1',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Faulty Clocks',
        difficulty: 'hard',
        question: 'A watch gains 5 seconds in 3 minutes and was set right at 8:00 AM. What time will it show at 10:00 PM on the same day?',
        options: ['10:23:20 PM', '10:24:00 PM', '10:25:30 PM', '10:28:00 PM'],
        correctAnswer: 0,
        explanation: 'From 8 AM to 10 PM is 14 hours = 840 minutes. Number of 3-min intervals = 840 / 3 = 280. Total gain = 280 × 5 = 1400 seconds = 23 minutes 20 seconds. Displayed time = 10:23:20 PM.'
      },
      {
        id: 'lt_clk_a2',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Straight Line Opposite',
        difficulty: 'hard',
        question: 'At what time between 7:00 and 8:00 are the hands of a clock in a straight line pointing in opposite directions?',
        options: ['7:05 5/11 min', '7:06 4/11 min', '7:07 2/11 min', '7:08 min'],
        correctAnswer: 0,
        explanation: 'At 7:00, minute hand is at 12 (0 min) and hour hand at 7 (35 min space). To be opposite, they must be 30 minute spaces apart, so minute hand must gain 35 - 30 = 5 minute spaces. Time = 5 × (12/11) = 60/11 = 5 5/11 minutes past 7.'
      },
      {
        id: 'lt_clk_a3',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Calendar Century Repeats',
        difficulty: 'hard',
        question: 'The calendar for the year 2025 will be identical to which future year?',
        options: ['2030', '2031', '2036', '2037'],
        correctAnswer: 1,
        explanation: '2025 is a normal year following a leap year (2024). A normal year 1 year after a leap year repeats after 6 years: 2025 + 6 = 2031.'
      },
      {
        id: 'lt_clk_a4',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Century Last Day Trap',
        difficulty: 'hard',
        question: 'Which of the following days can NEVER be the last day of a century?',
        options: ['Friday', 'Wednesday', 'Tuesday', 'Sunday'],
        correctAnswer: 2,
        explanation: 'Odd days in 100, 200, 300, 400 years are 5, 3, 1, 0 respectively. Corresponding last days of centuries are Friday, Wednesday, Monday, Sunday. Tuesday, Thursday, and Saturday can NEVER be the last day of a century.'
      }
    ]
  },

  // ==========================================
  // GENERAL AWARENESS - POLITY & CONSTITUTION
  // ==========================================
  ga_polity_constitution: {
    beginner: [
      {
        id: 'lt_pol_b1',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Constitution Basics',
        difficulty: 'easy',
        question: 'On which date was the Constitution of India formally adopted by the Constituent Assembly?',
        options: ['26 January 1950', '26 November 1949', '15 August 1947', '30 January 1948'],
        correctAnswer: 1,
        explanation: 'The Constitution was adopted on 26 November 1949 (celebrated as Constitution Day) and came into full legal effect on 26 January 1950.'
      },
      {
        id: 'lt_pol_b2',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Constituent Assembly',
        difficulty: 'easy',
        question: 'Who was the Chairman of the Drafting Committee of the Constituent Assembly?',
        options: ['Dr. Rajendra Prasad', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Vallabhbhai Patel'],
        correctAnswer: 2,
        explanation: 'Dr. B.R. Ambedkar was the Chairman of the Drafting Committee.'
      },
      {
        id: 'lt_pol_b3',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Fundamental Rights',
        difficulty: 'easy',
        question: 'In which Part of the Indian Constitution are the Fundamental Rights enshrined?',
        options: ['Part II', 'Part III', 'Part IV', 'Part IV-A'],
        correctAnswer: 1,
        explanation: 'Fundamental Rights are enshrined in Part III (Articles 12 to 35).'
      },
      {
        id: 'lt_pol_b4',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'President Commander',
        difficulty: 'easy',
        question: 'Who is the Supreme Commander of the Indian Armed Forces according to Article 53(2)?',
        options: ['Chief of Defence Staff (CDS)', 'Prime Minister', 'President of India', 'Defence Minister'],
        correctAnswer: 2,
        explanation: 'Article 53(2) designates the President of India as the Supreme Commander of the Armed Forces.'
      }
    ],
    intermediate: [
      {
        id: 'lt_pol_i1',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Article 32 Writs',
        difficulty: 'medium',
        question: 'Which constitutional writ translates literally to "We Command" and is issued to enforce a public duty?',
        options: ['Habeas Corpus', 'Mandamus', 'Quo-Warranto', 'Certiorari'],
        correctAnswer: 1,
        explanation: '"Mandamus" means "We Command". It is issued by the Supreme Court or High Court to compel a public official or body to perform an obligatory legal duty.'
      },
      {
        id: 'lt_pol_i2',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Right to Property',
        difficulty: 'medium',
        question: 'By which Constitutional Amendment Act was the Right to Property deleted from the list of Fundamental Rights?',
        options: ['42nd Amendment 1976', '44th Amendment 1978', '86th Amendment 2002', '52nd Amendment 1985'],
        correctAnswer: 1,
        explanation: 'The 44th Constitutional Amendment Act, 1978 removed Right to Property (Art 31) from Part III and made it a legal right under Article 300A.'
      },
      {
        id: 'lt_pol_i3',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Preamble Keywords',
        difficulty: 'medium',
        question: 'Which three words were added to the Preamble of the Indian Constitution by the 42nd Amendment Act in 1976?',
        options: [
          'Socialist, Secular, Integrity',
          'Sovereign, Socialist, Democratic',
          'Liberty, Equality, Fraternity',
          'Justice, Liberty, Republic'
        ],
        correctAnswer: 0,
        explanation: 'The 42nd Amendment (1976) introduced "Socialist", "Secular", and "Integrity" into the Preamble.'
      },
      {
        id: 'lt_pol_i4',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Emergency Provisions',
        difficulty: 'medium',
        question: 'Under which Article can the President declare a National Emergency on grounds of war, external aggression, or armed rebellion?',
        options: ['Article 352', 'Article 356', 'Article 360', 'Article 368'],
        correctAnswer: 0,
        explanation: 'Article 352 governs National Emergency. Article 356 deals with President\'s Rule and Article 360 with Financial Emergency.'
      }
    ],
    advance: [
      {
        id: 'lt_pol_a1',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Fundamental Rights Suspension',
        difficulty: 'hard',
        question: 'Which Fundamental Rights CANNOT be suspended even during the proclamation of a National Emergency under Article 352?',
        options: [
          'Article 14 and 19',
          'Article 19 and 20',
          'Article 20 and 21',
          'Article 21 and 22'
        ],
        correctAnswer: 2,
        explanation: 'By the 44th Amendment Act 1978, Article 20 (protection in respect of conviction for offences) and Article 21 (protection of life and personal liberty) cannot be suspended during an emergency.'
      },
      {
        id: 'lt_pol_a2',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Basic Structure Doctrine',
        difficulty: 'hard',
        question: 'In which landmark case did the Supreme Court propound the "Basic Structure Doctrine" of the Indian Constitution?',
        options: [
          'Golaknath Case (1967)',
          'Kesavananda Bharati Case (1973)',
          'Minerva Mills Case (1980)',
          'Maneka Gandhi Case (1978)'
        ],
        correctAnswer: 1,
        explanation: 'In Kesavananda Bharati v. State of Kerala (1973), a 13-judge bench ruled that Parliament cannot alter or destroy the "basic structure" of the Constitution under Article 368.'
      },
      {
        id: 'lt_pol_a3',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Joint Sitting of Parliament',
        difficulty: 'hard',
        question: 'A Joint Sitting of Parliament under Article 108 is summoned by _______ and presided over by _______:',
        options: [
          'President; Chairman of Rajya Sabha',
          'President; Speaker of Lok Sabha',
          'Prime Minister; Speaker of Lok Sabha',
          'Chief Justice; President'
        ],
        correctAnswer: 1,
        explanation: 'The President summons a joint sitting of both Houses, but the Speaker of the Lok Sabha presides over it.'
      },
      {
        id: 'lt_pol_a4',
        subject: 'general_awareness',
        chapter: 'Indian Polity',
        topic: 'Anti-Defection Law',
        difficulty: 'hard',
        question: 'Under the 10th Schedule (Anti-Defection Law), who is the final decision-making authority on disqualification questions of a Lok Sabha Member?',
        options: [
          'The President on advice of Election Commission',
          'The Speaker of the Lok Sabha',
          'The Supreme Court of India',
          'The Parliamentary Affairs Committee'
        ],
        correctAnswer: 1,
        explanation: 'Under the Tenth Schedule, the presiding officer (Speaker of Lok Sabha or Chairman of Rajya Sabha) has sole authority to decide on disqualification, subject to subsequent judicial review (Kihoto Hollohan case).'
      }
    ]
  },

  // ==========================================
  // GENERAL AWARENESS - HARAPPAN CIVILIZATION
  // ==========================================
  ga_harappa: {
    beginner: [
      {
        id: 'lt_har_b1',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Harappa Discovery',
        difficulty: 'easy',
        question: 'Who excavated Harappa in 1921 under the Archaeological Survey of India?',
        options: ['R.D. Banerjee', 'Daya Ram Sahni', 'Sir John Marshall', 'Mortimer Wheeler'],
        correctAnswer: 1,
        explanation: 'Daya Ram Sahni discovered and excavated Harappa in 1921 on the banks of river Ravi.'
      },
      {
        id: 'lt_har_b2',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Harappan Features',
        difficulty: 'easy',
        question: 'The famous "Great Bath" of the Indus Valley Civilization was discovered at which site?',
        options: ['Harappa', 'Mohenjo-Daro', 'Lothal', 'Kalibangan'],
        correctAnswer: 1,
        explanation: 'The Great Bath was excavated at Mohenjo-Daro in Larkana district of Sindh (Pakistan).'
      },
      {
        id: 'lt_har_b3',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Harappan Metals',
        difficulty: 'easy',
        question: 'Which metal was UNKNOWN to the people of the Indus Valley Civilization?',
        options: ['Copper', 'Bronze', 'Gold', 'Iron'],
        correctAnswer: 3,
        explanation: 'The Harappan Civilization was a Bronze Age culture. Iron was discovered and used in India during the later Vedic period (c. 1000 BC).'
      },
      {
        id: 'lt_har_b4',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Harappan Ports',
        difficulty: 'easy',
        question: 'Which Harappan site served as a major port and tidal dockyard for maritime trade?',
        options: ['Lothal', 'Banawali', 'Alamgirpur', 'Ropar'],
        correctAnswer: 0,
        explanation: 'Lothal in Gujarat featured a massive brick tidal dockyard connected to the Bhogavo river and Gulf of Khambhat.'
      }
    ],
    intermediate: [
      {
        id: 'lt_har_i1',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Harappan Sites Specifics',
        difficulty: 'medium',
        question: 'Which Indus Valley site has revealed evidence of ploughed furrow marks proving double cropping?',
        options: ['Kalibangan', 'Lothal', 'Surkotada', 'Chanhudaro'],
        correctAnswer: 0,
        explanation: 'Kalibangan in Rajasthan revealed grid-like crisscross ploughed fields.'
      },
      {
        id: 'lt_har_i2',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Town Planning',
        difficulty: 'medium',
        question: 'Which unique Indus Valley city was divided into THREE distinct fortified sections rather than the typical two (Citadel and Lower Town)?',
        options: ['Lothal', 'Dholavira', 'Mohenjo-Daro', 'Banawali'],
        correctAnswer: 1,
        explanation: 'Dholavira in the Rann of Kutch was divided into three sections: Citadel, Middle Town, and Lower Town, and had advanced water reservoirs.'
      },
      {
        id: 'lt_har_i3',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Mesopotamian Trade',
        difficulty: 'medium',
        question: 'What name was given to the Indus Valley Civilization region in ancient Mesopotamian cuneiform inscriptions?',
        options: ['Dilmun', 'Magan', 'Meluhha', 'Bactria'],
        correctAnswer: 2,
        explanation: 'Mesopotamian records referred to the Indus region as "Meluhha", with Dilmun (Bahrain) and Magan (Oman) as intermediate trade ports.'
      },
      {
        id: 'lt_har_i4',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Harappan Artifacts',
        difficulty: 'medium',
        question: 'The famous bronze figurine of the "Dancing Girl" was manufactured using which metallurgical technique?',
        options: ['Lost-Wax (Cire Perdue) Casting', 'Cold Hammering', 'Die-Stamping', 'Electroplating'],
        correctAnswer: 0,
        explanation: 'The 11.5 cm bronze Dancing Girl found at Mohenjo-Daro was cast using the Lost-Wax (cire perdue) method.'
      }
    ],
    advance: [
      {
        id: 'lt_har_a1',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Geographical Extremities',
        difficulty: 'hard',
        question: 'Which of the following represents the southernmost settlement of the Indus Valley Civilization?',
        options: ['Sutkagendor', 'Daimabad', 'Alamgirpur', 'Manda'],
        correctAnswer: 1,
        explanation: 'Daimabad on the Pravara river in Maharashtra is the southernmost site. (North: Manda in J&K; West: Sutkagendor in Baluchistan; East: Alamgirpur in UP).'
      },
      {
        id: 'lt_har_a2',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Horse Bones Controversy',
        difficulty: 'hard',
        question: 'At which Harappan site were skeletal horse remains and cremated pot burials uniquely reported?',
        options: ['Surkotada', 'Rakhigarhi', 'Chanhudaro', 'Amri'],
        correctAnswer: 0,
        explanation: 'Surkotada in Gujarat yielded purported horse bone remains, although horse depictions never appeared on mainstream Indus seals.'
      },
      {
        id: 'lt_har_a3',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Seal Animals',
        difficulty: 'hard',
        question: 'The famous "Pashupati Seal" discovered at Mohenjo-Daro depicts a deity surrounded by four animals. Which animal is NOT among them?',
        options: ['Elephant', 'Tiger', 'Cow', 'Rhinoceros'],
        correctAnswer: 2,
        explanation: 'The Pashupati seal depicts an Elephant, Tiger, Rhinoceros, and Buffalo around the yogic figure, with two deer beneath his feet. Cow and horse are ABSENT.'
      },
      {
        id: 'lt_har_a4',
        subject: 'general_awareness',
        chapter: 'Ancient Indian History',
        topic: 'Largest Harappan Site',
        difficulty: 'hard',
        question: 'Which site is officially recognized by modern archaeological excavations as the largest Indus Valley Civilization site in the Indian subcontinent?',
        options: ['Mohenjo-Daro', 'Dholavira', 'Rakhigarhi', 'Kalibangan'],
        correctAnswer: 2,
        explanation: 'Rakhigarhi in Hisar district, Haryana, spanning over 350 hectares, is recognized as the largest Harappan site, surpassing Mohenjo-Daro in physical area.'
      }
    ]
  },

  // ==========================================
  // ENGLISH - DIRECT/INDIRECT SPEECH & ACTIVE/PASSIVE VOICE
  // ==========================================
  eng_voice_speech: {
    beginner: [
      {
        id: 'lt_vs_b1',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Active & Passive Voice',
        difficulty: 'easy',
        question: 'Change the voice: "The radar detected the unidentified aircraft."',
        options: [
          'The unidentified aircraft was detected by the radar.',
          'The unidentified aircraft had been detected by the radar.',
          'The unidentified aircraft is detected by the radar.',
          'The radar was being detected by the aircraft.'
        ],
        correctAnswer: 0,
        explanation: 'Simple Past ("detected") in active voice transforms to "was/were + V3" ("was detected") in passive voice.'
      },
      {
        id: 'lt_vs_b2',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Direct to Indirect Speech',
        difficulty: 'easy',
        question: 'Convert into indirect speech: The Flight Commander said, "I am inspecting the runway."',
        options: [
          'The Flight Commander said that he was inspecting the runway.',
          'The Flight Commander said that he is inspecting the runway.',
          'The Flight Commander says that he was inspecting the runway.',
          'The Flight Commander told that he had inspected the runway.'
        ],
        correctAnswer: 0,
        explanation: 'Present Continuous ("am inspecting") converts to Past Continuous ("was inspecting") when the reporting verb is in the past.'
      },
      {
        id: 'lt_vs_b3',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Passive Voice',
        difficulty: 'easy',
        question: 'Identify the passive voice sentence:',
        options: [
          'The pilots conducted the briefing.',
          'The sortie was aborted due to dense fog.',
          'The technician repaired the avionics bay.',
          'The squadron completed the tactical drill.'
        ],
        correctAnswer: 1,
        explanation: '"The sortie was aborted..." contains auxiliary "was" + past participle "aborted", with the action performed upon the subject.'
      },
      {
        id: 'lt_vs_b4',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Speech Time Words',
        difficulty: 'easy',
        question: 'In indirect narration, the time adverb "now" changes into:',
        options: ['then', 'that day', 'before', 'ago'],
        correctAnswer: 0,
        explanation: 'In indirect speech with a past reporting verb, "now" becomes "then".'
      }
    ],
    intermediate: [
      {
        id: 'lt_vs_i1',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Imperative Sentences Voice',
        difficulty: 'medium',
        question: 'Convert into passive voice: "Clear the runway immediately."',
        options: [
          'The runway should be cleared immediately.',
          'Let the runway be cleared immediately.',
          'You are ordered to clear the runway immediately.',
          'All of the above are valid transformations.'
        ],
        correctAnswer: 3,
        explanation: 'Imperative orders can be transformed using "Let + object + be + V3", "You are ordered to + V1", or "Object + should be + V3".'
      },
      {
        id: 'lt_vs_i2',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Interrogative Speech Shift',
        difficulty: 'medium',
        question: 'Convert to indirect speech: The Instructor asked the cadet, "Can you identify the altitude indicator?"',
        options: [
          'The Instructor asked the cadet if he could identify the altitude indicator.',
          'The Instructor asked the cadet that could he identify the altitude indicator.',
          'The Instructor enquired the cadet whether can he identify the altitude indicator.',
          'The Instructor asked the cadet if can he identify the altitude indicator.'
        ],
        correctAnswer: 0,
        explanation: 'Yes/No questions convert using "if/whether" followed by assertive word order ("he could identify", NOT "could he identify").'
      },
      {
        id: 'lt_vs_i3',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Universal Truth Exception',
        difficulty: 'medium',
        question: 'Change into indirect speech: The Physics officer said, "Light travels faster than sound in air."',
        options: [
          'The Physics officer said that light traveled faster than sound in air.',
          'The Physics officer said that light travels faster than sound in air.',
          'The Physics officer said that light had traveled faster than sound in air.',
          'The Physics officer said whether light travels faster than sound in air.'
        ],
        correctAnswer: 1,
        explanation: 'Universal scientific truths and physical laws do NOT change tense in indirect speech even when the reporting verb is in the past.'
      },
      {
        id: 'lt_vs_i4',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Prepositional Passive Verbs',
        difficulty: 'medium',
        question: 'Change the voice: "The committee looked into the accident report."',
        options: [
          'The accident report was looked by the committee.',
          'The accident report was looked into by the committee.',
          'The accident report looked into the committee.',
          'The committee was looked into by the accident report.'
        ],
        correctAnswer: 1,
        explanation: 'Phrasal verbs retain their fixed preposition ("looked into") in passive voice: "was looked into by".'
      }
    ],
    advance: [
      {
        id: 'lt_vs_a1',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Infinitives in Passive',
        difficulty: 'hard',
        question: 'Transform into passive voice: "It is time to sound the scramble alarm."',
        options: [
          'It is time for the scramble alarm to be sounded.',
          'The scramble alarm is time to be sounded.',
          'It was time that the scramble alarm sounded.',
          'Let the scramble alarm be sounded in time.'
        ],
        correctAnswer: 0,
        explanation: 'The passive form of "It is time + to + V1 + Object" is "It is time for + Object + to be + V3".'
      },
      {
        id: 'lt_vs_a2',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Bare Infinitive in Passive',
        difficulty: 'hard',
        question: 'Change the voice: "The instructor made the cadets run five kilometers."',
        options: [
          'The cadets were made run five kilometers by the instructor.',
          'The cadets were made to run five kilometers by the instructor.',
          'The cadets had been made run five kilometers.',
          'Running five kilometers was made by the cadets.'
        ],
        correctAnswer: 1,
        explanation: 'Verbs like "make", "see", "hear", "watch" take a bare infinitive in active voice, but REQUIRE the "to-infinitive" in passive voice ("were made to run").'
      },
      {
        id: 'lt_vs_a3',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Exclamatory Indirect Speech',
        difficulty: 'hard',
        question: 'Convert to indirect speech: The pilot said, "Bravo! We have neutralized the hostile SAM battery."',
        options: [
          'The pilot exclaimed with joy that they had neutralized the hostile SAM battery.',
          'The pilot applauded his team saying that they had neutralized the hostile SAM battery.',
          'The pilot said bravo that they neutralized the hostile SAM battery.',
          'Both A and B are acceptable transformations.'
        ],
        correctAnswer: 3,
        explanation: '"Bravo" can be reported with "exclaimed with joy" or "applauded saying that...". Both structures are grammatically accurate.'
      },
      {
        id: 'lt_vs_a4',
        subject: 'english',
        chapter: 'Applied Grammar',
        topic: 'Quasi-Passive Verbs',
        difficulty: 'hard',
        question: 'Change the voice: "This aviation turbine fuel smells pungent."',
        options: [
          'This aviation turbine fuel is smelled pungent.',
          'This aviation turbine fuel is pungent when it is smelled.',
          'Pungent smell is made by this aviation turbine fuel.',
          'The fuel smells to be pungent.'
        ],
        correctAnswer: 1,
        explanation: 'Quasi-passive verbs (taste, smell, feel) follow the structure: "Subject + verb (be) + adjective + when + pronoun + verb (be) + V3".'
      }
    ]
  },

  // ==========================================
  // NUMERICAL ABILITY - PROFIT, LOSS & DISCOUNT
  // ==========================================
  num_profit_loss_discount: {
    beginner: [
      {
        id: 'lt_pld_b1',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Basic Profit Percentage',
        difficulty: 'easy',
        question: 'An equipment component bought for ₹800 is sold for ₹1000. What is the profit percentage?',
        options: ['20%', '25%', '30%', '15%'],
        correctAnswer: 1,
        explanation: 'Profit = ₹1000 - ₹800 = ₹200. Profit% = (200 / 800) × 100 = 25%.'
      },
      {
        id: 'lt_pld_b2',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Cost Price from Loss',
        difficulty: 'easy',
        question: 'An item is sold for ₹450 at a loss of 10%. What was its cost price?',
        options: ['₹480', '₹500', '₹520', '₹550'],
        correctAnswer: 1,
        explanation: 'SP = 90% of CP => ₹450 = 0.90 × CP => CP = 450 / 0.90 = ₹500.'
      },
      {
        id: 'lt_pld_b3',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Marked Price & Discount',
        difficulty: 'easy',
        question: 'A tactical watch marked at ₹2500 is sold at a 20% discount. What is the selling price?',
        options: ['₹1800', '₹2000', '₹2100', '₹2200'],
        correctAnswer: 1,
        explanation: 'Discount = 20% of 2500 = ₹500. SP = 2500 - 500 = ₹2000.'
      },
      {
        id: 'lt_pld_b4',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Break-even Point',
        difficulty: 'easy',
        question: 'If the selling price is equal to the cost price, the transaction results in:',
        options: ['10% profit', 'Zero profit and zero loss', '10% loss', 'Variable margin'],
        correctAnswer: 1,
        explanation: 'When SP = CP, profit = SP - CP = 0, meaning neither profit nor loss.'
      }
    ],
    intermediate: [
      {
        id: 'lt_pld_i1',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Equivalent Successive Discount',
        difficulty: 'medium',
        question: 'Find the single discount equivalent to two successive discounts of 20% and 10%:',
        options: ['28%', '30%', '26%', '32%'],
        correctAnswer: 0,
        explanation: 'Single Equivalent Discount = x + y - (xy / 100) = 20 + 10 - (200 / 100) = 30 - 2 = 28%.'
      },
      {
        id: 'lt_pld_i2',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Quantity vs Cost Price',
        difficulty: 'medium',
        question: 'If the cost price of 15 helmets is equal to the selling price of 12 helmets, what is the profit percentage?',
        options: ['20%', '25%', '30%', '33.33%'],
        correctAnswer: 1,
        explanation: '15 CP = 12 SP => SP / CP = 15 / 12 = 5 / 4. Profit% = ((5 - 4) / 4) × 100 = 1/4 × 100 = 25%.'
      },
      {
        id: 'lt_pld_i3',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Two Articles Same SP',
        difficulty: 'medium',
        question: 'A dealer sells two gadgets for ₹990 each, making a 10% gain on one and a 10% loss on the other. What is the net result?',
        options: ['1% loss', '1% gain', 'No profit no loss', '2% loss'],
        correctAnswer: 0,
        explanation: 'When two articles are sold at the same selling price with x% gain on one and x% loss on the other, there is ALWAYS a net loss of (x / 10)² % = (10 / 10)² % = 1% loss.'
      },
      {
        id: 'lt_pld_i4',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Marking up for Discount',
        difficulty: 'medium',
        question: 'A trader wishes to gain 20% profit after allowing a discount of 10% on marked price. By what percentage above CP must he mark his goods?',
        options: ['30%', '33.33%', '35%', '40%'],
        correctAnswer: 1,
        explanation: 'MP / CP = (100 + Profit%) / (100 - Discount%) = (100 + 20) / (100 - 10) = 120 / 90 = 4 / 3. Markup% = ((4 - 3) / 3) × 100 = 33.33%.'
      }
    ],
    advance: [
      {
        id: 'lt_pld_a1',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Dishonest Dealer Weight Fraud',
        difficulty: 'hard',
        question: 'A dishonest dealer professes to sell goods at cost price, but uses a false weight of 900 grams instead of 1 kilogram. What is his real gain percentage?',
        options: ['10%', '11.11%', '12.5%', '9.09%'],
        correctAnswer: 1,
        explanation: 'Gain% = [Error / (True Value - Error)] × 100 = [100 / (1000 - 100)] × 100 = (100 / 900) × 100 = 11.11% (11 1/9%).'
      },
      {
        id: 'lt_pld_a2',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Double Cheating Dishonest Dealer',
        difficulty: 'hard',
        question: 'A merchant cheats by 10% in weight while buying and also cheats by 10% in weight while selling. Assuming he sells at nominal cost price, what is his total profit percentage?',
        options: ['20%', '21%', '22.22%', '25%'],
        correctAnswer: 2,
        explanation: 'While buying he gets 1100 g for cost of 1000 g. While selling he gives 900 g for price of 1000 g. Profit = (1100 - 900) / 900 × 100 = 200 / 900 × 100 = 22.22%.'
      },
      {
        id: 'lt_pld_a3',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Fraction Sold at Profit and Loss',
        difficulty: 'hard',
        question: 'A trader bought consignment of spares for ₹60,000. He sold 2/3 of it at 5% profit. At what profit% must he sell the remaining 1/3 to achieve an overall 10% profit on the entire consignment?',
        options: ['15%', '18%', '20%', '25%'],
        correctAnswer: 2,
        explanation: 'Let total = 3 parts. Overall required profit = 3 × 10% = 30%. Profit from first 2 parts = 2 × 5% = 10%. Profit needed from remaining 1 part = 30% - 10% = 20%.'
      },
      {
        id: 'lt_pld_a4',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Reducing SP by Fixed Amount',
        difficulty: 'hard',
        question: 'If the selling price of a drone kit is reduced by ₹180, a profit of 15% turns into a loss of 5%. What is the cost price of the drone kit?',
        options: ['₹800', '₹900', '₹1000', '₹1200'],
        correctAnswer: 1,
        explanation: 'Shift from +15% to -5% is a total change of 20% of CP. 20% of CP = ₹180 => CP = 180 × 5 = ₹900.'
      }
    ]
  },

  // ==========================================
  // GENERAL AWARENESS - INDIAN AIR FORCE & DEFENCE
  // ==========================================
  ga_defence_missiles: {
    beginner: [
      {
        id: 'lt_def_b1',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'IAF Foundation',
        difficulty: 'easy',
        question: 'On which date is Indian Air Force Day officially celebrated every year?',
        options: ['8th October', '15th January', '4th December', '26th July'],
        correctAnswer: 0,
        explanation: 'IAF Day is celebrated on 8th October, commemorating the establishment of the Indian Air Force in 1932. (Army Day: 15 Jan, Navy Day: 4 Dec).'
      },
      {
        id: 'lt_def_b2',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'IAF Motto',
        difficulty: 'easy',
        question: 'What is the official motto of the Indian Air Force, taken from the 11th chapter of the Bhagavad Gita?',
        options: [
          'Touch the Sky with Glory (Nabhaḥ-spṛśaṁ Dīptam)',
          'Service Before Self (Seva Paramo Dharma)',
          'Valour and Faith (Shauryam Tejo Dhritih)',
          'May the Lord of the Oceans be Auspicious unto Us'
        ],
        correctAnswer: 0,
        explanation: '"Nabhaḥ-spṛśaṁ Dīptam" (Touch the sky with glory) is the motto of the IAF.'
      },
      {
        id: 'lt_def_b3',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'IAF Aircraft',
        difficulty: 'easy',
        question: 'Which indigenous Light Combat Aircraft (LCA) was developed by Hindustan Aeronautics Limited (HAL)?',
        options: ['Tejas', 'Rafale', 'Su-30MKI', 'Mirage 2000'],
        correctAnswer: 0,
        explanation: 'LCA Tejas is the single-engine multirole supersonic fighter designed by ADA and manufactured by HAL.'
      },
      {
        id: 'lt_def_b4',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'Rank Equivalents',
        difficulty: 'easy',
        question: 'Which Indian Air Force rank is equivalent to the rank of Captain in the Indian Army?',
        options: ['Flying Officer', 'Flight Lieutenant', 'Squadron Leader', 'Wing Commander'],
        correctAnswer: 1,
        explanation: 'Rank equivalence: Army Captain = IAF Flight Lieutenant = Navy Lieutenant.'
      }
    ],
    intermediate: [
      {
        id: 'lt_def_i1',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'BrahMos Missile',
        difficulty: 'medium',
        question: 'BrahMos is a supersonic cruise missile developed jointly by India and which country?',
        options: ['France', 'Israel', 'Russia', 'United States'],
        correctAnswer: 2,
        explanation: 'BrahMos is a joint venture between DRDO of India and NPOM of Russia, named after the Brahmaputra and Moskva rivers.'
      },
      {
        id: 'lt_def_i2',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'Missile System Classes',
        difficulty: 'medium',
        question: 'Which of the following is India\'s indigenous Beyond Visual Range (BVR) Air-to-Air Missile?',
        options: ['Astra', 'Akash', 'Nag', 'Prithvi'],
        correctAnswer: 0,
        explanation: 'Astra is an all-weather Beyond Visual Range Air-to-Air Missile (BVRAAM) developed by DRDO for fighter jets.'
      },
      {
        id: 'lt_def_i3',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'Marshal of the IAF',
        difficulty: 'medium',
        question: 'Who was the only officer of the Indian Air Force to be conferred the highest 5-star rank of "Marshal of the Indian Air Force"?',
        options: ['Subroto Mukherjee', 'Arjan Singh', 'Aspy Engineer', 'P.C. Lal'],
        correctAnswer: 1,
        explanation: 'Marshal of the Indian Air Force Arjan Singh DFC was conferred the 5-star rank in January 2002 for his historic leadership in the 1965 war.'
      },
      {
        id: 'lt_def_i4',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'Air Force Commands',
        difficulty: 'medium',
        question: 'Where is the Headquarters of the Central Air Command (CAC) of the Indian Air Force located?',
        options: ['Prayagraj (Allahabad)', 'Shillong', 'Gandhinagar', 'Nagpur'],
        correctAnswer: 0,
        explanation: 'Central Air Command HQ is located in Prayagraj (Bamrauli), UP. (Eastern: Shillong; Western: New Delhi; South-Western: Gandhinagar; Southern: Thiruvananthapuram; Maintenance: Nagpur; Training: Bengaluru).'
      }
    ],
    advance: [
      {
        id: 'lt_def_a1',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'IGMDP Missile Program',
        difficulty: 'hard',
        question: 'Under Dr. A.P.J. Abdul Kalam\'s Integrated Guided Missile Development Programme (IGMDP) initiated in 1983, which five missiles were developed (PATNA)?',
        options: [
          'Prithvi, Agni, Trishul, Nag, Akash',
          'Prithvi, Astra, Trishul, Nirbhay, Akash',
          'Pinaka, Agni, Trishul, Nag, Astra',
          'Prithvi, Agni, Tejas, Netra, Akash'
        ],
        correctAnswer: 0,
        explanation: 'IGMDP acronym PATNA stands for: Prithvi (Surface-to-Surface), Agni (Ballistic/Strategic), Trishul (Short-range SAM), Nag (Anti-tank guided), Akash (Medium-range SAM).'
      },
      {
        id: 'lt_def_a2',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'S-400 Triumf Integration',
        difficulty: 'hard',
        question: 'What designation has the Indian Air Force given to the Russian S-400 Triumf long-range surface-to-air missile air defence system deployed in India?',
        options: ['Sudarshan', 'Vajra', 'Garuda', 'Pinaka'],
        correctAnswer: 0,
        explanation: 'The IAF has designated its deployed S-400 Triumf air defence missile squadrons as "Sudarshan", referencing Lord Krishna\'s divine discus.'
      },
      {
        id: 'lt_def_a3',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'Special Forces & Operations',
        difficulty: 'hard',
        question: 'What is the name of the elite commando force of the Indian Air Force established in 2004 for airfield interception and combat search and rescue (CSAR)?',
        options: ['Garud Commando Force', 'Para SF', 'MARCOS', 'NSG Special Action Group'],
        correctAnswer: 0,
        explanation: 'Garud Commando Force is the special forces unit of the IAF, named after the mythical bird Garuda, trained for airfield assault and CSAR operations.'
      },
      {
        id: 'lt_def_a4',
        subject: 'general_awareness',
        chapter: 'Defence & Security',
        topic: 'IAF Historical Sorties',
        difficulty: 'hard',
        question: 'Operation Safed Sagar was the codename assigned to the IAF\'s air support and precision strike sorties during which conflict?',
        options: ['1971 Indo-Pak War', '1999 Kargil Conflict', '1984 Siachen Conflict (Meghdoot)', '1988 Maldives Operation (Cactus)'],
        correctAnswer: 1,
        explanation: 'Operation Safed Sagar was the IAF\'s joint offensive campaign in May-July 1999 during the Kargil War, utilizing Mirage 2000 laser-guided bombing at extreme altitudes.'
      }
    ]
  }
};

/**
 * Helper to fetch questions for a specific lesson and tier.
 * If tier questions are not explicitly found in LEARN_TIER_QUESTIONS,
 * it safely filters the lesson's quickCheckQuestions or returns curated fallback questions.
 */
export function getLessonQuestionsForTier(
  lessonId: string,
  tier: 'beginner' | 'intermediate' | 'advance',
  fallbackQuestions: Question[] = []
): Question[] {
  const lessonTiers = LEARN_TIER_QUESTIONS[lessonId];
  if (lessonTiers && lessonTiers[tier] && lessonTiers[tier].length > 0) {
    return lessonTiers[tier];
  }

  // If the lesson itself has difficulty-tagged questions:
  const targetDifficulty = tier === 'beginner' ? 'easy' : tier === 'intermediate' ? 'medium' : 'hard';
  const matchedFromFallback = fallbackQuestions.filter(q => q.difficulty === targetDifficulty);
  if (matchedFromFallback.length > 0) {
    return matchedFromFallback;
  }

  // Safe fallback
  return fallbackQuestions.length > 0 ? fallbackQuestions : [];
}

/**
 * Returns all three tiers partitioned cleanly
 */
export function getAllLessonQuestionsByTier(
  lessonId: string,
  fallbackQuestions: Question[] = []
): TieredQuestions {
  const lessonTiers = LEARN_TIER_QUESTIONS[lessonId];
  if (lessonTiers) {
    return lessonTiers;
  }

  // Partition fallback questions by difficulty
  const beginner = fallbackQuestions.filter(q => q.difficulty === 'easy');
  const intermediate = fallbackQuestions.filter(q => q.difficulty === 'medium');
  const advance = fallbackQuestions.filter(q => q.difficulty === 'hard');

  return {
    beginner: beginner.length > 0 ? beginner : fallbackQuestions.slice(0, 2),
    intermediate: intermediate.length > 0 ? intermediate : fallbackQuestions.slice(1, 3),
    advance: advance.length > 0 ? advance : fallbackQuestions.slice(2, 4)
  };
}
