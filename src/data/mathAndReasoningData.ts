import { TopicLesson, FormulaItem, Question } from '../types';

export const FORMULA_VAULT: FormulaItem[] = [
  // --- QUANTITATIVE FORMULAS ---
  {
    id: 'f_speed_conv',
    category: 'Time, Distance & Speed',
    name: 'Unit Conversion (km/h to m/s)',
    formula: 'x km/h = x × (5 / 18) m/s  |  y m/s = y × (18 / 5) km/h',
    meaning: 'Converts speed between kilometers per hour and meters per second instantly.',
    example: '54 km/h = 54 × (5/18) = 15 m/s. 20 m/s = 20 × (18/5) = 72 km/h.',
    shortcut: 'Multiply by 5/18 for smaller unit (m/s); multiply by 18/5 for larger unit (km/h).',
    trap: 'Forgetting to convert minutes to seconds or hours before applying formulas.'
  },
  {
    id: 'f_avg_speed',
    category: 'Time, Distance & Speed',
    name: 'Harmonic Average Speed (Equal Distances)',
    formula: 'Average Speed = (2 × x × y) / (x + y)',
    meaning: 'Calculates average speed when traveling to a destination at speed x and returning the same distance at speed y.',
    example: 'Go at 50 km/h and return at 75 km/h: (2 × 50 × 75) / (50 + 75) = 7500 / 125 = 60 km/h.',
    shortcut: 'Never take the simple arithmetic mean (50+75)/2 = 62.5 km/h! Time spent at lower speed is higher.',
    trap: 'This formula applies ONLY when distances of outbound and inbound journeys are equal.'
  },
  {
    id: 'f_train_crossing',
    category: 'Time, Distance & Speed',
    name: 'Train Crossing Platform / Bridge',
    formula: 'Time = (Length of Train + Length of Platform) / Speed of Train',
    meaning: 'Total distance traversed is the sum of the train length and the stationary obstacle length.',
    example: 'Train 200m crosses 200m platform in 10s: Speed = (200+200)/10 = 40 m/s = 144 km/h.',
    shortcut: 'If crossing a pole or person, obstacle length = 0; distance = length of train.',
    trap: 'Check if relative speed is needed when the other object is moving (opposite = add speeds, same = subtract speeds).'
  },
  {
    id: 'f_work_rate',
    category: 'Time and Work',
    name: 'Combined Work Rate (Two Workers)',
    formula: 'Total Days = (A × B) / (A + B)',
    meaning: 'If A completes work in A days and B in B days, together they complete it in AB/(A+B) days.',
    example: 'A takes 10 days, B takes 15 days: (10 × 15) / (10 + 15) = 150 / 25 = 6 days.',
    shortcut: 'Use LCM method! Total Work = LCM(10, 15) = 30 units. A=3 u/day, B=2 u/day. Total = 30/(3+2) = 6 days.',
    trap: 'Do not add days directly (10 + 15 = 25 is wrong!).'
  },
  {
    id: 'f_men_days',
    category: 'Time and Work',
    name: 'MDH Work Equation',
    formula: '(M1 × D1 × H1 × E1) / W1 = (M2 × D2 × H2 × E2) / W2',
    meaning: 'Relates Men (M), Days (D), Hours/day (H), Efficiency (E) with total Work completed (W).',
    example: '15 men work 8 days to do 1 work. 18 men will take D2 = (15 × 8) / 18 = 20/3 = 6 2/3 days.',
    shortcut: 'Keep all work units in denominator; all effort variables in numerator.',
    trap: 'When additional men join midway, apply formula to the remaining portion of work.'
  },
  {
    id: 'f_profit_loss_loss_sq',
    category: 'Profit and Loss',
    name: 'Two Articles Sold at Same SP with ±x% Profit/Loss',
    formula: 'Net Loss% = (x / 10)²',
    meaning: 'When two articles are sold for the same selling price, one at x% profit and the other at x% loss, there is ALWAYS an overall net loss of (x/10)%.',
    example: 'Sold for ₹10,000 each; one at 20% gain, other at 20% loss: Loss% = (20/10)² = 2² = 4% loss.',
    shortcut: 'Instant answer: Square the common percentage and divide by 100.',
    trap: 'Does NOT apply if articles have the same Cost Price! (Same CP = no profit, no loss).'
  },
  {
    id: 'f_discount_succ',
    category: 'Profit and Loss',
    name: 'Successive Discounts Equivalent',
    formula: 'Equivalent Discount% = X + Y - (X × Y) / 100',
    meaning: 'Combines two successive discounts into a single equivalent percentage discount.',
    example: 'Discounts of 20% and 10%: 20 + 10 - (200/100) = 30 - 2 = 28%.',
    shortcut: 'For 3 discounts: calculate first two, then combine result with the third.',
    trap: 'Never simply add discounts (20% + 10% is not 30%, it is 28%).'
  },
  {
    id: 'f_ci_si_diff',
    category: 'Simple & Compound Interest',
    name: 'Difference between CI and SI for 2 Years',
    formula: 'Difference (D) = P × (R / 100)²',
    meaning: 'Gives the difference between Compound Interest and Simple Interest on principal P at rate R% for 2 years.',
    example: 'P = ₹3,000, R = 10%: D = 3000 × (10/100)² = 3000 × 0.01 = ₹30.',
    shortcut: 'For 3 years: D = P × (R/100)² × (3 + R/100).',
    trap: 'Ensure annual compounding is specified. If half-yearly, R becomes R/2 and n becomes 2n.'
  },
  {
    id: 'f_geom_chord',
    category: 'Geometry',
    name: 'Intersecting Chords Theorem',
    formula: 'AP × PB = CP × PD',
    meaning: 'If two chords AB and CD of a circle intersect at point P (inside or outside), the products of their segments are equal.',
    example: 'If chord AB has segments AP = 6, PB = 6, and PC = 2, then PD = (6 × 6) / 2 = 18.',
    shortcut: 'If P is outside with tangent PT: PT² = PA × PB.',
    trap: 'Measure segments from intersection point P to circle edges, not between chords.'
  },
  {
    id: 'f_triangle_area',
    category: 'Mensuration',
    name: "Heron's Formula for Triangle Area",
    formula: 'Area = √[s(s - a)(s - b)(s - c)], where s = (a + b + c) / 2',
    meaning: 'Calculates area of any scalene triangle given lengths of all three sides a, b, c.',
    example: 'Sides 12, 13, 11 m: s = 36/2 = 18. Area = √[18 × 6 × 5 × 7] = 6√105 m².',
    shortcut: 'For equilateral triangle of side a: Area = (√3 / 4) × a²; Height = (√3 / 2) × a.',
    trap: 'Ensure semi-perimeter s is computed, not the full perimeter.'
  },
  {
    id: 'f_clock_angle',
    category: 'Reasoning - Clocks',
    name: 'Angle Between Clock Hands',
    formula: 'Angle θ = |30H - (11 / 2)M|',
    meaning: 'Calculates the acute angle between hour hand and minute hand at H hours and M minutes.',
    example: 'At 10:30: |30(10) - (11/2)(30)| = |300 - 165| = 135°.',
    shortcut: 'If angle exceeds 180°, reflex angle is required or subtract from 360° for acute angle.',
    trap: 'Hour hand moves at 0.5° per minute, not stationary!'
  },
  {
    id: 'f_calendar_leap',
    category: 'Reasoning - Calendars',
    name: 'Odd Days Calculation & Repetition',
    formula: 'Ordinary Year = 1 Odd Day (365 = 52 wks + 1 d) | Leap Year = 2 Odd Days',
    meaning: 'Every 7 days the weekday repeats. 100 years = 5 odd days, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.',
    example: 'Normal year advances day by 1; leap year advances by 2. Calendar repeats: +28 yrs for leap year, +6 or +11 for ordinary.',
    shortcut: 'Century year is leap ONLY if divisible by 400 (1600, 2000 are leap; 1700, 1800, 1900 are NOT).',
    trap: 'Check if February 29 falls inside the date range being computed.'
  }
];

export const MATH_REASONING_LESSONS: TopicLesson[] = [
  {
    id: 'mr_clocks_calendars',
    subject: 'reasoning',
    chapter: 'Aptitude & Logic',
    title: 'Clocks & Calendars Masterclass',
    estimatedMinutes: 24,
    introduction: 'Clocks and calendars are regular AFCAT staples. Master the angular velocity of hands, mirror imagery, odd days counting, and century leap cycles.',
    concepts: [
      'Clock Dial Geometry: The dial is 360° divided into 60 minute spaces (1 minute space = 6°). 12 hours = 360° (hour hand moves 30° per hour = 0.5° per minute).',
      'Relative Speed: Minute hand moves 6°/min, hour hand moves 0.5°/min. Relative speed = 5.5° (11/2°) per minute. In 60 minutes, minute hand gains 55 minutes over hour hand.',
      'Special Angles per Day: Coincide (0°) = 22 times in 24 hours (only once between 11 and 1 o\'clock at 12:00). Opposite (180°) = 22 times in 24 hours (only once between 5 and 7 at 6:00). Right angles (90°) = 44 times in 24 hours.',
      'Mirror Image of Clock: Subtract given time from 11:60 (or 23:60). Example: Mirror image of 01:40 is 11:60 - 01:40 = 10:20.',
      'Odd Days Counting: 1 normal year (365 days) = 52 weeks + 1 odd day. 1 leap year (366 days) = 52 weeks + 2 odd days.',
      'Centuries Odd Days: 100 years has 76 normal + 24 leap = 124 days = 17 weeks + 5 odd days. 200 yrs = 3 odd days. 300 yrs = 1 odd day. 400 yrs = 0 odd days.',
      'Calendar Repetition: Leap year repeats after 28 years. Non-leap year: Add +11 (if result is leap year, add +6 instead).'
    ],
    rulesOrFormulas: [
      { title: 'Angle Formula', desc: 'Angle between hands at H hours and M minutes.', formula: 'θ = |30H - (11/2)M|' },
      { title: 'Mirror Image Rule', desc: 'Reflected time on a vertical mirror.', formula: 'Mirror Time = 11:60 - Given Time' }
    ],
    workedExamples: [
      { problem: 'What is the angle between hands at 7:20?', solution: 'θ = |30(7) - (11/2)(20)| = |210 - 110| = 100°.' },
      { problem: 'If 6th March 2005 is Monday, what was the day on 6th March 2004?', solution: '2004 is a leap year, but February 2004 is not included (counting March to March). Hence 1 odd day difference. Day = 1 day before Monday = Sunday.' }
    ],
    commonMistakes: [
      { mistake: 'Assuming the hands coincide 24 times in 24 hours.', correction: 'They coincide only 22 times because between 11:00 and 1:00 they coincide only once at 12:00.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_clk_1',
        subject: 'reasoning',
        chapter: 'Aptitude & Logic',
        topic: 'Clocks',
        difficulty: 'easy',
        question: "Find the mirror image of a clock when the real time is 02:40:",
        options: ["09:20", "10:20", "09:25", "10:22"],
        correctAnswer: 0,
        explanation: "11:60 - 02:40 = 09:20."
      }
    ]
  },
  {
    id: 'mr_seating_puzzles',
    subject: 'reasoning',
    chapter: 'Analytical Reasoning',
    title: 'Seating Arrangements & Puzzles',
    estimatedMinutes: 25,
    introduction: 'Solve complex seating matrices: Linear unidirectional/bidirectional, Circular inward/outward facing, Concentric circles, and multi-variable floor/box puzzles.',
    concepts: [
      'Circular Left vs Right: When facing INSIDE/CENTER: Left is Clockwise, Right is Counter-Clockwise. When facing OUTSIDE: Left is Counter-Clockwise, Right is Clockwise.',
      'Linear Row Rules: Facing North: your right is right, your left is left. Facing South: left and right are reversed.',
      'Immediate Neighbor vs In-Between: "A sits 3 places away from B" means there are 3 - 1 = 2 persons between A and B.',
      'Double Row Alignment: Row 1 facing North opposite to Row 2 facing South. Align facing pairs accurately.',
      'Box & Floor Puzzles: Anchor fixed positions first (e.g. "Onion 1 place above bottom box", "Atul on odd floor but not bottom"). Test 2 parallel cases to eliminate invalid branch quickly.'
    ],
    rulesOrFormulas: [
      { title: 'Gap Rule', desc: 'Number of people between two positions.', formula: 'Gap = Difference between ranks - 1' },
      { title: 'Circular Symmetry', desc: 'In an 8-person circle, opposite person is (Position + 4) % 8.', formula: 'Opposite index = (i + N/2) % N' }
    ],
    workedExamples: [
      { problem: '8 persons in circle facing center. A is 3rd to right of B. How many between them from right of B?', solution: '2 persons sit between B and A.' }
    ],
    commonMistakes: [
      { mistake: 'Confusing "2 places away" with "2 people in between".', correction: '"2 places away" means exactly 1 person in between; "2 people between" means 3 places away.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_seat_1',
        subject: 'reasoning',
        chapter: 'Analytical Reasoning',
        topic: 'Seating Arrangement',
        difficulty: 'medium',
        question: "In a circle of 8 people facing center, who sits opposite to person at position 1?",
        options: ["Person at position 4", "Person at position 5", "Person at position 6", "Person at position 7"],
        correctAnswer: 1,
        explanation: "In an 8-person circle, opposite seats are 8/2 = 4 steps apart (1 + 4 = 5)."
      }
    ]
  },
  {
    id: 'mr_venn_diagrams',
    subject: 'reasoning',
    chapter: 'Non-Verbal & Diagrammatic',
    title: 'Venn Diagrams & Class Relations',
    estimatedMinutes: 20,
    introduction: 'Classify relations among groups of entities using geometric circles: Universal Affirmative (nested), Universal Negative (disjoint), and Particular (overlapping).',
    concepts: [
      'Type 1: Universal Affirmative: One class is completely inside another, which in turn is inside a third (e.g. Square ⊂ Rectangle ⊂ Polygon; City ⊂ State ⊂ Country; Day ⊂ Week ⊂ Year).',
      'Type 2: Universal Negative: Three disjoint sets with zero mutual overlap (e.g. Whale, Crocodile, Bird; Barley, Potato, Mustard; Anxiety, Intelligence, Strength).',
      'Type 3: Particular / Partial Overlap: Intersecting sets where members can possess multiple attributes (e.g. Teachers, Authors, Men; Singers, Athletes, Girls).',
      'Mixed Types: Two separate entities inside a broader category (e.g. Table and Chair inside Furniture; Vegetables, Potato, Cabbage). One entity inside another while the third is independent (e.g. Pilot ⊂ Human, Duck disjoint).'
    ],
    rulesOrFormulas: [
      { title: 'Class Inclusion Rule', desc: 'Identify genus (broader group) and species (subsets).', formula: 'Subset A ⊂ Set B' }
    ],
    workedExamples: [
      { problem: 'Represent Doctors, Human Beings, and Married People.', solution: 'All Doctors and all Married People are Human Beings (large circle). Some Doctors are Married and vice versa (intersecting inner circles inside the Human circle).' },
      { problem: 'Represent Thief, Criminal, and Police.', solution: 'All Thieves are Criminals (Thief circle inside Criminal circle). Police is a separate law enforcement entity (disjoint circle).' }
    ],
    commonMistakes: [
      { mistake: 'Showing Police inside the Criminal category.', correction: 'Police is an independent group outside the Criminal circle.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_venn_1',
        subject: 'reasoning',
        chapter: 'Non-Verbal & Diagrammatic',
        topic: 'Venn Diagrams',
        difficulty: 'easy',
        question: "Which relationship describes 'Table, Chair, Furniture'?",
        options: [
          "Three concentric circles",
          "Two disjoint circles inside a larger circle",
          "Three mutually overlapping circles",
          "Three independent disjoint circles"
        ],
        correctAnswer: 1,
        explanation: "Table and Chair are mutually exclusive furniture items, both completely contained within Furniture."
      }
    ],
    diagramType: 'venn'
  },
  // ==========================================
  // NUMERICAL ABILITY CORE SYLLABUS LESSONS
  // ==========================================
  {
    id: 'num_time_and_work',
    subject: 'numerical',
    chapter: 'Time & Work',
    title: 'Time & Work, Efficiency & Cisterns',
    estimatedMinutes: 28,
    introduction: 'Time & Work questions consistently test efficiency ratios, combined worker cycles, and negative rates in pipes and cisterns. Master the LCM unit method to bypass clumsy fractional algebra.',
    concepts: [
      'LCM Unit Work Method: Set total work equal to LCM of days taken by workers. Efficiency = Total Work / Days. Efficiency represents units of work completed per day.',
      'Combined Rate: If worker A has efficiency 4 u/day and B has 3 u/day, combined output is 7 u/day. Total time required = Total Units / 7.',
      'MDH Formula: Work done is directly proportional to Men (M), Days (D), Hours/day (H), and Efficiency (E). (M1 × D1 × H1 × E1) / W1 = (M2 × D2 × H2 × E2) / W2.',
      'Pipes & Cisterns: Inlet pipe does positive work (+), while leak or outlet pipe does negative work (-). Net filling rate = (Inlet rate) - (Leak rate).',
      'Alternate Days Cycle: Work done in 2-day cycles (A on day 1, B on day 2). Divide total work by 2-day cycle output and evaluate remaining fraction.'
    ],
    rulesOrFormulas: [
      { title: 'Combined Two-Person Formula', desc: 'Direct formula when two individuals work together.', formula: 'Total Days = (A × B) / (A + B)' },
      { title: 'MDH Rule', desc: 'Work proportionality formula across differing group sizes.', formula: '(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2' },
      { title: 'Pipes with Leak', desc: 'Net rate when inlet pipe A fills and drain pipe B empties.', formula: 'Net rate = (1/A) - (1/B)' }
    ],
    workedExamples: [
      {
        problem: 'A can do a piece of work in 12 days and B in 18 days. They work together for 4 days, then A leaves. How many days does B take to finish the remaining work?',
        solution: 'Total Work = LCM(12, 18) = 36 units. Efficiency of A = 36/12 = 3 u/day. Efficiency of B = 36/18 = 2 u/day. Combined efficiency = 5 u/day. In 4 days, they complete 4 × 5 = 20 units. Remaining work = 36 - 20 = 16 units. B completes it in 16 / 2 = 8 days.'
      },
      {
        problem: 'A tap fills a tank in 6 hours, but due to a leak in the bottom it takes 8 hours. How long will the leak alone take to empty the full tank?',
        solution: 'Total capacity = LCM(6, 8) = 24 units. Tap rate = 24/6 = +4 u/hr. Net rate with leak = 24/8 = +3 u/hr. Leak rate = 4 - 3 = 1 u/hr. Time to empty full tank = 24 / 1 = 24 hours.'
      }
    ],
    commonMistakes: [
      { mistake: 'Adding days directly: "A takes 10 days, B takes 20 days, so together they take 30 days".', correction: 'Never add days! Working together always takes LESS time than either person alone. Add efficiencies: 1/10 + 1/20 = 3/20 → 6.67 days.' },
      { mistake: 'Forgetting that a leak or drain performs negative work in pipes and cisterns.', correction: 'Subtract the outlet capacity from total inlet flow rate.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_num_tw_1',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'LCM Unit Work',
        difficulty: 'easy',
        question: 'A can finish a task in 10 days and B in 15 days. Working together, how many days do they require?',
        options: ['5 days', '6 days', '7.5 days', '12.5 days'],
        correctAnswer: 1,
        explanation: 'LCM(10, 15) = 30 units. A = 3 u/day, B = 2 u/day. Combined = 5 u/day. Time = 30 / 5 = 6 days.'
      },
      {
        id: 'chk_num_tw_2',
        subject: 'numerical',
        chapter: 'Time & Work',
        topic: 'MDH Equation',
        difficulty: 'medium',
        question: '12 men can complete a project in 9 days working 8 hours a day. How many days will 16 men take to finish it working 6 hours a day?',
        options: ['8 days', '9 days', '10 days', '12 days'],
        correctAnswer: 1,
        explanation: 'M1 × D1 × H1 = M2 × D2 × H2 => 12 × 9 × 8 = 16 × D2 × 6 => 864 = 96 × D2 => D2 = 9 days.'
      }
    ]
  },
  {
    id: 'num_speed_distance_time',
    subject: 'numerical',
    chapter: 'Speed, Distance & Time',
    title: 'Speed, Distance, Trains & Relative Velocity',
    estimatedMinutes: 26,
    introduction: 'Speed, Distance & Time is an AFCAT pillar. Master unit conversions, train crossing mechanics, average speed formulas, and upstream/downstream navigation.',
    concepts: [
      'Fundamental Equation: Distance = Speed × Time. Ensure uniform metric units (km/h with hours and kilometers, or m/s with seconds and meters).',
      'Unit Conversion Multiplier: km/h to m/s multiply by 5/18. m/s to km/h multiply by 18/5.',
      'Harmonic Average Speed: For equal distances covered at speeds x and y, Average Speed = 2xy / (x + y). Never take simple arithmetic mean (x + y)/2.',
      'Train Crossing Objects: Crossing a pole, person or tree: Distance = Length of Train. Crossing a platform, tunnel or bridge: Distance = Length of Train + Length of Platform.',
      'Relative Speed: Moving in OPPOSITE directions → ADD speeds (S1 + S2). Moving in SAME direction → SUBTRACT speeds (|S1 - S2|).',
      'Boats & Streams: Downstream Speed (with current) = u + v. Upstream Speed (against current) = u - v. Speed in still water u = (Downstream + Upstream)/2. Stream speed v = (Downstream - Upstream)/2.'
    ],
    rulesOrFormulas: [
      { title: 'Unit Conversion', desc: 'Rapid factor conversion.', formula: 'Speed (m/s) = Speed (km/h) × 5/18' },
      { title: 'Harmonic Average Speed', desc: 'Average speed over two equal distance legs.', formula: 'Avg Speed = (2 × x × y) / (x + y)' },
      { title: 'Train Platform Crossing', desc: 'Time taken to cross a stationary platform.', formula: 'Time = (Train Length + Platform Length) / Train Speed' },
      { title: 'Boat in Still Water', desc: 'Speed of boat given upstream (U) and downstream (D) rates.', formula: 'Speed in Still Water = (D + U) / 2' }
    ],
    workedExamples: [
      {
        problem: 'A train 180 m long crosses a 120 m long bridge in 15 seconds. What is the speed of the train in km/h?',
        solution: 'Total Distance = 180 + 120 = 300 m. Time = 15 s. Speed in m/s = 300 / 15 = 20 m/s. Convert to km/h = 20 × (18/5) = 72 km/h.'
      },
      {
        problem: 'A man rows downstream at 14 km/h and upstream at 8 km/h. Find the speed of the stream.',
        solution: 'Speed of stream v = (Downstream - Upstream) / 2 = (14 - 8) / 2 = 6 / 2 = 3 km/h.'
      }
    ],
    commonMistakes: [
      { mistake: 'Taking arithmetic average (S1+S2)/2 when round trips have equal distance.', correction: 'Use harmonic average 2xy/(x+y), because more time is spent at the slower speed.' },
      { mistake: 'Forgetting to add platform length to train length when crossing platforms or bridges.', correction: 'Total distance traversed is always Train Length + Platform Length.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_num_sdt_1',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Unit Conversion',
        difficulty: 'easy',
        question: 'Convert 90 km/h into meters per second (m/s):',
        options: ['20 m/s', '25 m/s', '30 m/s', '32.5 m/s'],
        correctAnswer: 1,
        explanation: '90 × (5/18) = 5 × 5 = 25 m/s.'
      },
      {
        id: 'chk_num_sdt_2',
        subject: 'numerical',
        chapter: 'Speed, Distance & Time',
        topic: 'Average Speed',
        difficulty: 'medium',
        question: 'A pilot flies from Base A to Base B at 300 km/h and returns at 200 km/h. What is his average speed for the whole journey?',
        options: ['240 km/h', '250 km/h', '245 km/h', '260 km/h'],
        correctAnswer: 0,
        explanation: 'Avg Speed = (2 × 300 × 200) / (300 + 200) = 120000 / 500 = 240 km/h.'
      }
    ]
  },
  {
    id: 'num_profit_loss_discount',
    subject: 'numerical',
    chapter: 'Profit & Loss',
    title: 'Profit, Loss, Discount & Dishonest Dealer',
    estimatedMinutes: 25,
    introduction: 'Decode commercial mathematics tested in AFCAT: Cost Price, Selling Price, Marked Price, Successive Discounts, and weight-cheating tricks.',
    concepts: [
      'Basics: Profit = SP - CP. Loss = CP - SP. Profit% = (Profit / CP) × 100. Loss% = (Loss / CP) × 100. Always compute profit or loss on COST PRICE unless stated otherwise.',
      'Multiplier Method: If profit is 25%, SP = 1.25 × CP. If loss is 15%, SP = 0.85 × CP.',
      'Marked Price & Discount: Discount is always calculated on MARKED PRICE (MP). SP = MP × (1 - Discount%/100).',
      'Successive Discounts: Single equivalent discount for two successive discounts D1% and D2% = D1 + D2 - (D1 × D2) / 100.',
      'Equal Selling Price Rule: If two articles are sold at the same SP, one at x% profit and the other at x% loss, there is ALWAYS an overall net loss of (x/10)% = x²/100 %.',
      'Dishonest Dealer Formula: Gain% = [Error / (True Value - Error)] × 100.'
    ],
    rulesOrFormulas: [
      { title: 'Selling Price Formula', desc: 'Expressing SP directly from CP and profit/loss.', formula: 'SP = CP × (100 ± P/L)% / 100' },
      { title: 'Successive Discount Equivalent', desc: 'Single discount replacing two successive discounts.', formula: 'D = D1 + D2 - (D1 × D2)/100' },
      { title: 'Equal SP Net Loss', desc: 'Net loss when identical SP yields ±x% gain/loss.', formula: 'Loss% = (x / 10)²' }
    ],
    workedExamples: [
      {
        problem: 'Two fighter scale models are sold for ₹2,400 each. On one the seller gains 20%, and on the other he loses 20%. What is his overall gain or loss percentage?',
        solution: 'Since Selling Prices are identical and percentage gain and loss are equal (x = 20%), there is always a net loss of (x/10)² = (20/10)² = 2² = 4% loss.'
      },
      {
        problem: 'Find the single equivalent discount for successive discounts of 20% and 10%.',
        solution: 'Equivalent Discount = 20 + 10 - (20 × 10)/100 = 30 - 2 = 28%.'
      }
    ],
    commonMistakes: [
      { mistake: 'Adding successive discounts directly (20% + 10% = 30%).', correction: 'Second discount applies to the discounted price, not the original marked price! 20 + 10 - 2 = 28%.' },
      { mistake: 'Calculating profit percentage on the Selling Price instead of Cost Price.', correction: 'Profit% is mathematically defined on CP: (Profit/CP) × 100.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_num_pld_1',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Successive Discounts',
        difficulty: 'easy',
        question: 'What is the single equivalent discount to two successive discounts of 30% and 20%?',
        options: ['50%', '44%', '42%', '46%'],
        correctAnswer: 1,
        explanation: 'Equivalent = 30 + 20 - (30 × 20)/100 = 50 - 6 = 44%.'
      },
      {
        id: 'chk_num_pld_2',
        subject: 'numerical',
        chapter: 'Profit & Loss',
        topic: 'Equal SP Rule',
        difficulty: 'medium',
        question: 'A dealer sells two cameras for ₹5,000 each, making 10% profit on one and 10% loss on the other. Overall, the dealer:',
        options: ['Has no profit, no loss', 'Loses 1%', 'Gains 1%', 'Loses 2%'],
        correctAnswer: 1,
        explanation: 'Loss% = (10/10)² = 1² = 1% loss.'
      }
    ]
  },
  {
    id: 'num_percentages_averages',
    subject: 'numerical',
    chapter: 'Percentages & Averages',
    title: 'Percentages, Successive Change & Alligation',
    estimatedMinutes: 24,
    introduction: 'Percentages and averages form the computational bedrock for all quantitative reasoning in AFCAT. Master fractional equivalents and alligation cross-rules.',
    concepts: [
      'Fraction Equivalents: 1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.',
      'Successive Percentage Change: Net change for +a% followed by +b% is [a + b + (ab/100)]%. For decreases, substitute negative values.',
      'Price & Consumption Invariance: If price of sugar increases by r%, consumption must be reduced by [r / (100 + r)] × 100 % to keep expenditure constant.',
      'Average Speed & Weighted Average: Weighted Average = (w1×x1 + w2×x2) / (w1 + w2).',
      'Rule of Alligation: When mixing two ingredients of prices C (cheaper) and D (dearer) to get mean price M: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).'
    ],
    rulesOrFormulas: [
      { title: 'Successive Change', desc: 'Net percentage effect of two modifications.', formula: 'Net % = a + b + (ab / 100)' },
      { title: 'Expenditure Invariance', desc: 'Required consumption cut when price rises by r%.', formula: 'Reduction% = [r / (100 + r)] × 100' },
      { title: 'Alligation Ratio', desc: 'Mixing ratio of two components of cost C and D.', formula: 'Ratio = (D - Mean) / (Mean - C)' }
    ],
    workedExamples: [
      {
        problem: 'If the price of petrol increases by 25%, by what percentage should a driver reduce consumption so that expenditure remains unchanged?',
        solution: 'Reduction% = [25 / (100 + 25)] × 100 = (25 / 125) × 100 = (1/5) × 100 = 20%.'
      },
      {
        problem: 'In what ratio must rice at ₹40/kg be mixed with rice at ₹60/kg so that the mixture is worth ₹48/kg?',
        solution: 'Using Alligation: (60 - 48) : (48 - 40) = 12 : 8 = 3 : 2.'
      }
    ],
    commonMistakes: [
      { mistake: 'Assuming a 25% price hike requires a 25% consumption reduction.', correction: 'If price rises by 25% (1/4), consumption must reduce by 1/(4+1) = 1/5 = 20%.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_num_pct_1',
        subject: 'numerical',
        chapter: 'Percentages & Averages',
        topic: 'Expenditure Invariance',
        difficulty: 'easy',
        question: 'If the salary of an employee is first increased by 20% and then decreased by 20%, what is the net change in salary?',
        options: ['No change (0%)', '4% increase', '4% decrease', '2% decrease'],
        correctAnswer: 2,
        explanation: 'Net% = +20 - 20 - (20 × 20)/100 = -400/100 = -4% (4% decrease).'
      }
    ]
  },
  {
    id: 'num_ratio_proportion_interest',
    subject: 'numerical',
    chapter: 'Ratio & Interest',
    title: 'Ratio, Partnerships, Simple & Compound Interest',
    estimatedMinutes: 24,
    introduction: 'High-frequency AFCAT quantitative topic covering proportional division, investment profit sharing, and the crucial 2-year and 3-year SI vs CI differences.',
    concepts: [
      'Ratio Invariance: If a:b and b:c are given, combine by scaling: a : b : c = (a × b2) : (b1 × b2) : (b1 × c).',
      'Partnership Profit Sharing: Profit is shared in ratio of (Capital × Time). Profit A : Profit B = (C_A × T_A) : (C_B × T_B).',
      'Simple Interest (SI): SI = (P × R × T) / 100. Amount = P + SI. SI remains identical in every year.',
      'Compound Interest (CI): Amount = P(1 + R/100)^T. CI = Amount - P.',
      'Difference between CI and SI for 2 Years: Difference (D2) = P × (R / 100)²',
      'Difference between CI and SI for 3 Years: Difference (D3) = P × (R / 100)² × [(300 + R) / 100].'
    ],
    rulesOrFormulas: [
      { title: '2-Year CI-SI Difference', desc: 'Rapid difference formula between CI and SI.', formula: 'CI - SI (2 yrs) = P × (R / 100)²' },
      { title: 'Partnership Formula', desc: 'Profit distribution proportional to capital and time.', formula: 'P1 / P2 = (C1 × T1) / (C2 × T2)' }
    ],
    workedExamples: [
      {
        problem: 'The difference between CI and SI on a certain sum for 2 years at 10% per annum is ₹150. Find the principal sum.',
        solution: 'Difference = P × (R/100)² => 150 = P × (10/100)² => 150 = P × 0.01 => P = 150 / 0.01 = ₹15,000.'
      }
    ],
    commonMistakes: [
      { mistake: 'Calculating 2-year CI difference by writing lengthy binomial expansions.', correction: 'Memorize the direct shortcut: D = P(R/100)².' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_num_si_1',
        subject: 'numerical',
        chapter: 'Ratio & Interest',
        topic: 'CI vs SI Difference',
        difficulty: 'medium',
        question: 'What is the difference between CI and SI on ₹8,000 at 5% p.a. for 2 years?',
        options: ['₹15', '₹20', '₹25', '₹30'],
        correctAnswer: 1,
        explanation: 'Diff = P × (R/100)² = 8000 × (5/100)² = 8000 × (1/400) = ₹20.'
      }
    ]
  },
  {
    id: 'num_mensuration_geometry',
    subject: 'numerical',
    chapter: 'Mensuration & Geometry',
    title: 'Mensuration 2D/3D & Geometric Mensuration',
    estimatedMinutes: 25,
    introduction: 'Solve planar area, perimeter, surface area, and volume problems for circles, cones, cylinders, spheres, and rectangular prisms with high computational accuracy.',
    concepts: [
      '2D Figures: Circle Area = πr², Circumference = 2πr. Semicircle Perimeter = πr + 2r = r(π + 2) = (36/7)r.',
      'Equilateral Triangle: Area = (√3 / 4) a², Height = (√3 / 2) a. Inradius = a / (2√3), Circumradius = a / √3.',
      'Cylinder: Curved Surface Area (CSA) = 2πrh. Total Surface Area (TSA) = 2πr(h + r). Volume = πr²h.',
      'Cone: Slant height l = √(r² + h²). CSA = πrl. TSA = πr(l + r). Volume = (1/3)πr²h.',
      'Sphere: Surface Area = 4πr². Volume = (4/3)πr³. Hemisphere: CSA = 2πr², TSA = 3πr², Volume = (2/3)πr³.',
      'Melting & Recasting Principle: When a solid is melted and recast into another shape, the TOTAL VOLUME remains strictly invariant.'
    ],
    rulesOrFormulas: [
      { title: 'Volume Invariance in Recasting', desc: 'Total volume remains identical when shapes are reshaped.', formula: 'Volume (Initial) = n × Volume (Recast Units)' },
      { title: 'Equilateral Triangle Area', desc: 'Direct area from side length.', formula: 'Area = (√3 / 4) × a²' }
    ],
    workedExamples: [
      {
        problem: 'How many metallic spherical balls of radius 2 cm can be made by melting a large sphere of radius 8 cm?',
        solution: 'Number of balls = Volume of large sphere / Volume of small sphere = [(4/3)π × 8³] / [(4/3)π × 2³] = 8³ / 2³ = (8/2)³ = 4³ = 64 balls.'
      }
    ],
    commonMistakes: [
      { mistake: 'Forgetting the diameter base when calculating perimeter of a semicircle.', correction: 'Perimeter of semicircle = Curved Arc + Base Diameter = πr + 2r.' }
    ],
    quickCheckQuestions: [
      {
        id: 'chk_num_geom_1',
        subject: 'numerical',
        chapter: 'Mensuration & Geometry',
        topic: 'Sphere Recasting',
        difficulty: 'easy',
        question: 'If the radius of a sphere is doubled, its volume increases by what factor?',
        options: ['2 times', '4 times', '6 times', '8 times'],
        correctAnswer: 3,
        explanation: 'Volume is proportional to r³. If r is doubled, (2r)³ = 8r³, so volume becomes 8 times.'
      }
    ]
  }
];
