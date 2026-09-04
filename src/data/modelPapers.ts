import { Question } from '../types';

export const MODEL_PAPER_QUESTIONS: Question[] = [
  // --- ENGLISH SECTION ---
  {
    id: 'mp1_q1',
    subject: 'english',
    chapter: 'Reading Comprehension',
    topic: 'Polar Bear Passage',
    difficulty: 'easy',
    passage: "In spring, polar bear mothers emerge from dens with three months old cubs. The mother bear has fasted for as long as eight months but that does not stop the young from demanding full access to her remaining reserves. If there are triplets, the most persistent stands to gain an extra meal at the expense of others. The smallest of the cubs forfeits many meals to stronger siblings. Females are protective of their cubs but tend to ignore family rivalry over food. In 21 years of photographing polar bears, I have only once seen the smallest of triplets survive till autumn.",
    question: "Female polar bears give birth during:",
    options: ["Spring", "Summer", "Autumn", "Winter"],
    correctAnswer: 3, // Winter (cubs are 3 months old in spring)
    explanation: "Because cubs emerge at three months old in spring, they are born three months earlier during the winter.",
    tags: ["Comprehension", "AFCAT Model I"]
  },
  {
    id: 'mp1_q2',
    subject: 'english',
    chapter: 'Reading Comprehension',
    topic: 'Polar Bear Passage',
    difficulty: 'medium',
    question: "According to the passage, the mother bear:",
    options: [
      "Takes sides over cubs",
      "Lets the cubs fend for themselves",
      "Feeds only their favourites",
      "Sees that all cubs get an equal share"
    ],
    correctAnswer: 1, // Lets the cubs fend for themselves
    explanation: "The passage states that females 'tend to ignore family rivalry over food', effectively letting the cubs fend for themselves.",
    tags: ["Comprehension"]
  },
  {
    id: 'mp1_q10',
    subject: 'english',
    chapter: 'Vocabulary',
    topic: 'Synonyms',
    difficulty: 'medium',
    question: "Choose the word which is nearest in meaning to 'Intransigent':",
    options: ["Authoritative", "Impersonal", "Strenuous", "Unbending"],
    correctAnswer: 3, // Unbending
    explanation: "'Intransigent' means refusing to compromise or change one's view, i.e., stubborn, unyielding, or unbending.",
    tags: ["Synonyms", "AFCAT Model I"]
  },
  {
    id: 'mp1_q11',
    subject: 'english',
    chapter: 'Vocabulary',
    topic: 'Synonyms',
    difficulty: 'easy',
    question: "Choose the word which is nearest in meaning to 'Intimidate':",
    options: ["Mislead", "Misplace", "Frighten", "Demoralise"],
    correctAnswer: 2, // Frighten
    explanation: "'Intimidate' means to frighten or overawe someone, especially in order to make them do what one wants.",
    tags: ["Synonyms"]
  },
  {
    id: 'mp1_q12',
    subject: 'english',
    chapter: 'Vocabulary',
    topic: 'Synonyms',
    difficulty: 'easy',
    question: "Choose the word which is nearest in meaning to 'Sporadic':",
    options: ["Epidemic", "Whirling", "Occasional", "Stagnant"],
    correctAnswer: 2, // Occasional
    explanation: "'Sporadic' refers to something occurring at irregular intervals or only in a few places; occasional or scattered.",
    tags: ["Synonyms"]
  },
  {
    id: 'mp1_q13',
    subject: 'english',
    chapter: 'Vocabulary',
    topic: 'Synonyms',
    difficulty: 'easy',
    question: "Choose the word which is nearest in meaning to 'Genesis':",
    options: ["Style", "Beginning", "Movement", "Relevant"],
    correctAnswer: 1, // Beginning
    explanation: "'Genesis' represents the origin or mode of formation of something; the beginning.",
    tags: ["Synonyms"]
  },
  {
    id: 'mp1_q14',
    subject: 'english',
    chapter: 'Vocabulary',
    topic: 'Antonyms',
    difficulty: 'easy',
    question: "Choose the word which is nearly opposite in meaning to 'Malevolent':",
    options: ["Kindly", "Vacuous", "Ambivalent", "Primitive"],
    correctAnswer: 0, // Kindly
    explanation: "'Malevolent' means having or showing a wish to do evil to others. Its direct opposite is 'kindly' or benevolent.",
    tags: ["Antonyms"]
  },
  {
    id: 'mp1_q16',
    subject: 'english',
    chapter: 'Vocabulary',
    topic: 'Antonyms',
    difficulty: 'medium',
    question: "Choose the word which is nearly opposite in meaning to 'Clemency':",
    options: ["Corporal", "Intolerance", "Compromise", "Sensibility"],
    correctAnswer: 1, // Intolerance
    explanation: "'Clemency' means mercy, lenience, or forgiveness. Its antonym is intolerance or mercilessness.",
    tags: ["Antonyms"]
  },
  {
    id: 'mp1_q17',
    subject: 'english',
    chapter: 'Vocabulary',
    topic: 'Antonyms',
    difficulty: 'easy',
    question: "Choose the word which is nearly opposite in meaning to 'Cajole':",
    options: ["Nestle", "Secede", "Bully", "Moisten"],
    correctAnswer: 2, // Bully
    explanation: "'Cajole' means to coax or flatter someone gently. To 'bully' or coerce by intimidation is its opposite.",
    tags: ["Antonyms"]
  },
  {
    id: 'mp1_q18',
    subject: 'english',
    chapter: 'Idioms & Phrases',
    topic: 'Phrase Meanings',
    difficulty: 'easy',
    question: "What is the meaning of the phrase 'In weal and woe'?",
    options: ["By hook or crook", "During illness", "In prosperity and adversity", "During the operation"],
    correctAnswer: 2, // in prosperity and adversity
    explanation: "'Weal' denotes prosperity or good times, and 'woe' denotes grief or bad times. 'In weal and woe' means through thick and thin, both in good and bad times.",
    tags: ["Idioms"]
  },
  {
    id: 'mp1_q19',
    subject: 'english',
    chapter: 'Idioms & Phrases',
    topic: 'One Word Substitution',
    difficulty: 'easy',
    question: "A person who travels widely around the world is called a:",
    options: ["Philanthropist", "Indulgent", "Intelligent mind", "Globetrotter"],
    correctAnswer: 3, // Globetrotter
    explanation: "A 'globetrotter' is an individual who regularly travels widely across multiple international destinations.",
    tags: ["Vocabulary"]
  },
  {
    id: 'mp1_q20',
    subject: 'english',
    chapter: 'Idioms & Phrases',
    topic: 'Idioms',
    difficulty: 'medium',
    question: "What is meant by 'A Curtain Lecture'?",
    options: ["To speak plainly", "Vulgar ideas", "Private scolding of a husband by his wife", "Hate others"],
    correctAnswer: 2, // Private scolding
    explanation: "'A curtain lecture' is an archaic British and Indian idiom referring to a private reproof given behind closed doors/bed curtains by a wife to her husband.",
    tags: ["Idioms"]
  },
  {
    id: 'mp1_q21',
    subject: 'english',
    chapter: 'Idioms & Phrases',
    topic: 'Idioms',
    difficulty: 'easy',
    question: "The idiom 'Square pegs in round holes' refers to:",
    options: ["A genuinely helpful person", "A clever person", "People in the wrong jobs", "To be perplexed"],
    correctAnswer: 2, // People in wrong jobs
    explanation: "A square peg in a round hole is someone whose character or skills are unsuited for the position or situation they occupy.",
    tags: ["Idioms"]
  },
  {
    id: 'mp1_q28',
    subject: 'english',
    chapter: 'Idioms & Phrases',
    topic: 'Idioms',
    difficulty: 'easy',
    question: "What is the meaning of 'Man of Letters'?",
    options: ["Who writes too many letters", "An important person", "A politician", "A literary person"],
    correctAnswer: 3, // A literary person
    explanation: "A 'man of letters' is a scholar, author, or literary intellectual dedicated to books and humanities.",
    tags: ["Idioms"]
  },
  {
    id: 'mp1_q29',
    subject: 'english',
    chapter: 'Vocabulary',
    topic: 'Foreign Phrases',
    difficulty: 'medium',
    question: "The word 'Sangfroid' means:",
    options: ["Composure", "Go on leave", "Changed suddenly", "Make an attempt"],
    correctAnswer: 0, // Composure
    explanation: "'Sangfroid' is the French-derived ability to remain calm, level-headed, and poised under extreme danger or stress.",
    tags: ["Vocabulary"]
  },

  // --- GENERAL AWARENESS SECTION ---
  {
    id: 'mp1_q33',
    subject: 'general_awareness',
    chapter: 'Defence Knowledge',
    topic: 'Missile Systems',
    difficulty: 'medium',
    question: "Which among the following is India's first long-range subsonic cruise missile?",
    options: ["Agni II", "Prithvi", "Dhanush", "Nirbhay"],
    correctAnswer: 3, // Nirbhay
    explanation: "Nirbhay is India's indigenous long-range all-weather subsonic cruise missile developed by ADE (DRDO), flying at Mach 0.7 - 0.9.",
    tags: ["Defence", "Missiles"]
  },
  {
    id: 'mp1_q34',
    subject: 'general_awareness',
    chapter: 'Science',
    topic: 'Biology',
    difficulty: 'easy',
    question: "The branch of science that studies biological cells is called:",
    options: ["Cytology", "Entomology", "Homoplastic", "Hormonology"],
    correctAnswer: 0, // Cytology
    explanation: "Cytology is the scientific examination and study of cells regarding their structure, functions, and chemistry.",
    tags: ["Science"]
  },
  {
    id: 'mp1_q36',
    subject: 'general_awareness',
    chapter: 'Static GK',
    topic: 'Awards & Honors',
    difficulty: 'easy',
    question: "The Bharat Ratna has been awarded to only two foreign dignitaries: Nelson Mandela and:",
    options: ["Marshal Tito", "Mikhail Gorbachev", "Khan Abdul Ghaffar Khan", "Abdul Wali Khan"],
    correctAnswer: 2, // Khan Abdul Ghaffar Khan (1987)
    explanation: "Khan Abdul Ghaffar Khan (Frontier Gandhi) received the Bharat Ratna in 1987, and Nelson Mandela received it in 1990.",
    tags: ["Awards", "Bharat Ratna"]
  },
  {
    id: 'mp1_q37',
    subject: 'general_awareness',
    chapter: 'Science',
    topic: 'Physics',
    difficulty: 'easy',
    question: "Sir C.V. Raman was awarded the Nobel Prize in Physics in 1930 for his work on which phenomenon?",
    options: ["Scattering of light", "Diffraction", "Interference", "Polarisation"],
    correctAnswer: 0, // Scattering
    explanation: "Sir C.V. Raman discovered the Raman Effect (inelastic scattering of photons by matter), leading to his Nobel Prize in 1930.",
    tags: ["Science", "Physics"]
  },
  {
    id: 'mp1_q38',
    subject: 'general_awareness',
    chapter: 'Static GK',
    topic: 'International Organizations',
    difficulty: 'easy',
    question: "In which city is the headquarters of the Asian Development Bank (ADB) located?",
    options: ["Manila", "Singapore", "Bangkok", "Jakarta"],
    correctAnswer: 0, // Manila (Mandaluyong, Philippines)
    explanation: "The Asian Development Bank (ADB) was established in 1966 and is headquartered in Manila (Mandaluyong), Philippines.",
    tags: ["International"]
  },
  {
    id: 'mp1_q39',
    subject: 'general_awareness',
    chapter: 'Defence Knowledge',
    topic: 'Naval Missiles',
    difficulty: 'medium',
    question: "The K-15 (Sagarika) missile belongs to which class?",
    options: [
      "Submarine Launched Ballistic Missile (SLBM)",
      "Inter Continental Ballistic Missile (ICBM)",
      "Medium Range Ballistic Missile (MRBM)",
      "Short Range Ballistic Missile (SRBM)"
    ],
    correctAnswer: 0, // SLBM
    explanation: "K-15 (Sagarika) is an indigenous Submarine-Launched Ballistic Missile with a range of ~750 km deployed on INS Arihant class SSBNs.",
    tags: ["Defence", "Navy"]
  },
  {
    id: 'mp1_q42',
    subject: 'general_awareness',
    chapter: 'Sports',
    topic: 'Olympics History',
    difficulty: 'easy',
    question: "Who was the first Indian to win an individual Olympic medal in independent India?",
    options: ["Milkha Singh", "P.T. Usha", "Karnam Malleswari", "K.D. Jadhav"],
    correctAnswer: 3, // KD Jadhav
    explanation: "Khashaba Dadasaheb Jadhav won a Bronze medal in Freestyle Wrestling at the 1952 Helsinki Olympics.",
    tags: ["Sports", "Olympics"]
  },
  {
    id: 'mp1_q47',
    subject: 'general_awareness',
    chapter: 'Ancient History',
    topic: 'Dynasties',
    difficulty: 'medium',
    question: "Which dynasty was ruling North India at the time of Alexander's invasion in 326 BC?",
    options: ["Nanda", "Maurya", "Sunga", "Kanva"],
    correctAnswer: 0, // Nanda (Dhana Nanda)
    explanation: "The Nanda dynasty under king Dhana Nanda ruled the vast Magadha empire when Alexander the Great reached the Beas river.",
    tags: ["History", "Ancient"]
  },
  {
    id: 'mp1_q50',
    subject: 'general_awareness',
    chapter: 'Indian Polity',
    topic: 'Parliament',
    difficulty: 'easy',
    question: "The official Leader of the Opposition status is recognized in the Lok Sabha only if the party wins at least:",
    options: ["5% Seats", "10% Seats", "15% Seats", "20% Seats"],
    correctAnswer: 1, // 10% seats (55 seats)
    explanation: "According to parliamentary conventions, a party must secure at least 10% of the total membership of the House (55 out of 543/545 seats) to be recognized as the official Opposition.",
    tags: ["Polity", "Parliament"]
  },
  {
    id: 'mp1_q53',
    subject: 'general_awareness',
    chapter: 'Defence Knowledge',
    topic: 'IAF Honors',
    difficulty: 'easy',
    question: "Which sports personality has been awarded the honorary rank of Group Captain by the Indian Air Force?",
    options: ["Kapil Dev", "Sania Mirza", "Saina Nehwal", "Sachin Tendulkar"],
    correctAnswer: 3, // Sachin Tendulkar (2010)
    explanation: "Master blaster Sachin Tendulkar was conferred the honorary rank of Group Captain by the Indian Air Force in 2010.",
    tags: ["Defence", "IAF"]
  },

  // --- NUMERICAL ABILITY SECTION ---
  {
    id: 'mp1_q54',
    subject: 'numerical',
    chapter: 'Time, Distance & Speed',
    topic: 'Journey Calculations',
    difficulty: 'medium',
    question: "A man travelled from point A to B at 25 km/h and walked back at 4 km/h. If the whole journey took 5 hours 48 minutes, the distance between A and B is:",
    options: ["30 km", "24 km", "20 km", "51.6 km"],
    correctAnswer: 2, // 20 km
    explanation: "5 hrs 48 min = 5 + 48/60 = 29/5 hours. Let distance = D. D/25 + D/4 = 29/5 => D*(29/100) = 29/5 => D = 100/5 = 20 km.",
    tags: ["Speed", "Distance"]
  },
  {
    id: 'mp1_q55',
    subject: 'numerical',
    chapter: 'Time, Distance & Speed',
    topic: 'Trains',
    difficulty: 'medium',
    question: "A train travelling at uniform speed clears a platform 200 m long in 10 seconds and passes a telegraph post in 5 seconds. The speed of the train is:",
    options: ["36 km/h", "39 km/h", "72 km/h", "78 km/h"],
    correctAnswer: 2, // 72 km/h
    explanation: "Let train length = L. Speed = L/5 = (L + 200)/10 => 2L = L + 200 => L = 200 m. Speed = 200/5 = 40 m/s? Wait: L/5 = (L+200)/10 => 10L = 5L + 1000 => 5L = 1000 => L = 200 m. Speed = 200/10 = 20 m/s. 20 * 18/5 = 72 km/h.",
    tags: ["Trains"]
  },
  {
    id: 'mp1_q56',
    subject: 'numerical',
    chapter: 'Percentage',
    topic: 'Price & Consumption',
    difficulty: 'medium',
    question: "The price of sugar increases by 20% due to festive demand. By what percentage should a family reduce consumption so that expenditure remains unchanged?",
    options: ["20%", "18 1/3%", "16 2/3%", "16 1/4%"],
    correctAnswer: 2, // 16 2/3%
    explanation: "Reduction% = [R / (100 + R)] * 100 = [20 / 120] * 100 = 100/6 = 16 2/3%.",
    tags: ["Percentage"]
  },
  {
    id: 'mp1_q58',
    subject: 'numerical',
    chapter: 'Average',
    topic: 'Replacement',
    difficulty: 'easy',
    question: "The average weight of 5 men increases by 2 kg when one man weighing 60 kg is replaced by a new man. The weight of the new man is:",
    options: ["50 kg", "65 kg", "68 kg", "70 kg"],
    correctAnswer: 3, // 70 kg
    explanation: "Weight of new man = Weight of replaced man + (Increase in average * Total men) = 60 + (2 * 5) = 70 kg.",
    tags: ["Average"]
  },
  {
    id: 'mp1_q60',
    subject: 'numerical',
    chapter: 'Time & Work',
    topic: 'Assisted Work',
    difficulty: 'medium',
    question: "A, B and C can do a work in 20, 30 and 60 days respectively. In how many days can A finish the work if he is assisted by B and C on every third day?",
    options: ["12 days", "15 days", "16 days", "18 days"],
    correctAnswer: 1, // 15 days
    explanation: "Take total work = 60 units (LCM). Rate: A = 3, B = 2, C = 1 unit/day. Day 1: A does 3. Day 2: A does 3. Day 3: A+B+C does 6. In 3 days: 3 + 3 + 6 = 12 units. To complete 60 units: 5 cycles of 3 days = 15 days.",
    tags: ["Time & Work"]
  },
  {
    id: 'mp1_q62',
    subject: 'numerical',
    chapter: 'Time, Distance & Speed',
    topic: 'Boats & Streams',
    difficulty: 'medium',
    question: "The speed of a boat in still water is 10 km/h. If it can travel 26 km downstream and 14 km upstream in the same time, the speed of the stream is:",
    options: ["2 km/h", "2.5 km/h", "3 km/h", "4 km/h"],
    correctAnswer: 2, // 3 km/h
    explanation: "Time downstream = 26 / (10 + s). Time upstream = 14 / (10 - s). 26 / (10 + s) = 14 / (10 - s) => 260 - 26s = 140 + 14s => 40s = 120 => s = 3 km/h.",
    tags: ["Boats & Streams"]
  },

  // --- REASONING SECTION ---
  {
    id: 'mp1_q71',
    subject: 'reasoning',
    chapter: 'Analogy',
    topic: 'Verbal Analogy',
    difficulty: 'medium',
    question: "Loath : Coercion :: ?:?",
    options: [
      "Detest : Caressing",
      "Irritate : Caressing",
      "Irate : Antagonism",
      "Reluctant : Persuasion"
    ],
    correctAnswer: 3, // Reluctant : Persuasion
    explanation: "When someone is loath (unwilling), they require coercion (force). Similarly, when someone is reluctant, they require persuasion.",
    tags: ["Analogy", "Verbal"]
  },
  {
    id: 'mp1_q72',
    subject: 'reasoning',
    chapter: 'Analogy',
    topic: 'Verbal Analogy',
    difficulty: 'easy',
    question: "Trilogy : Novel :: ?:?",
    options: ["Rice : Husk", "Milk : Cream", "Serial : Episode", "Gun : Cartridge"],
    correctAnswer: 2, // Serial : Episode
    explanation: "A trilogy is a collection composed of novels. Similarly, a serial is a broadcast series composed of episodes.",
    tags: ["Analogy"]
  },
  {
    id: 'mp1_q74',
    subject: 'reasoning',
    chapter: 'Analogy',
    topic: 'Directional Analogy',
    difficulty: 'easy',
    question: "East : Orient :: ?:?",
    options: ["North : Polar", "North : Tropic", "South : Capricorn", "West : Occident"],
    correctAnswer: 3, // West : Occident
    explanation: "The Orient refers traditionally to the East; the Occident refers to the West.",
    tags: ["Analogy"]
  },
  {
    id: 'mp1_q76',
    subject: 'reasoning',
    chapter: 'Classification',
    topic: 'Odd One Out',
    difficulty: 'easy',
    question: "Choose the word which is different from the rest:",
    options: ["Aravalli hills", "Shivalik hills", "Mole hills", "Satpura hills"],
    correctAnswer: 2, // Mole hills
    explanation: "Aravalli, Shivalik, and Satpura are major geographical mountain ranges in India, whereas a molehill is a tiny mound of earth thrown up by a burrowing mole.",
    tags: ["Classification"]
  },
  {
    id: 'mp1_q78',
    subject: 'reasoning',
    chapter: 'Classification',
    topic: 'Odd One Out',
    difficulty: 'easy',
    question: "Choose the word which is different from the rest:",
    options: ["Othello", "King Lear", "Oliver Twist", "Macbeth"],
    correctAnswer: 2, // Oliver Twist
    explanation: "Othello, King Lear, and Macbeth are tragedies written by William Shakespeare; Oliver Twist is a novel by Charles Dickens.",
    tags: ["Classification"]
  },
  {
    id: 'mp1_q79',
    subject: 'reasoning',
    chapter: 'Classification',
    topic: 'Military Leaders',
    difficulty: 'medium',
    question: "Choose the leader who is different from the rest:",
    options: ["Nimitz", "Yamamoto", "Nelson", "Montgomery"],
    correctAnswer: 3, // Montgomery
    explanation: "Chester Nimitz (US Navy), Isoroku Yamamoto (Imperial Japanese Navy), and Horatio Nelson (Royal Navy) were famous Admirals, whereas Bernard Montgomery was an Army Field Marshal.",
    tags: ["Military", "Classification"]
  },
  {
    id: 'mp1_q80',
    subject: 'reasoning',
    chapter: 'Classification',
    topic: 'Odd One Out',
    difficulty: 'easy',
    question: "Choose the word which is different from the rest:",
    options: ["Blaze", "Glint", "Simmer", "Shimmer"],
    correctAnswer: 2, // Simmer
    explanation: "Blaze, Glint, and Shimmer relate to optical light or shine; Simmer relates to cooking and boiling temperature.",
    tags: ["Classification"]
  }
];
