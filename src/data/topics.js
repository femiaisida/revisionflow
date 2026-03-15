// src/data/topics.js
// Official specification topic names as published by each exam board
// Sources: AQA, OCR, Edexcel, WJEC, CCEA published specifications

const TOPICS = {
  AQA: {
    'Mathematics': {
      papers: {
        1: [
          'Number – Structure and Calculation',
          'Number – Fractions, Decimals and Percentages',
          'Number – Measures and Accuracy',
          'Algebra – Notation, Vocabulary and Manipulation',
          'Algebra – Graphs',
          'Algebra – Solving Equations and Inequalities',
          'Algebra – Sequences',
          'Ratio, Proportion and Rates of Change',
          'Geometry – Properties of Shapes',
          'Geometry – Mensuration and Calculation',
          'Geometry – Vectors',
          'Probability',
          'Statistics',
        ],
        2: [
          'Number – Calculations and Estimation',
          'Algebra – Quadratics and Further Equations',
          'Algebra – Simultaneous Equations',
          'Algebra – Inequalities',
          'Algebra – Further Graphs (Cubic, Reciprocal, Exponential)',
          'Geometry – Trigonometry (SOH CAH TOA)',
          'Geometry – Pythagoras Theorem',
          'Geometry – Congruence and Similarity',
          'Statistics – Scatter Graphs and Correlation',
          'Probability – Combined Events and Tree Diagrams',
        ],
        3: [
          'Algebra – Functions and Function Notation',
          'Algebra – Algebraic Proof',
          'Geometry – Circle Theorems',
          'Geometry – Equation of a Circle',
          'Geometry – Transformations of Graphs',
          'Statistics – Cumulative Frequency and Box Plots',
          'Statistics – Histograms',
          'Number – Surds',
          'Number – Upper and Lower Bounds',
          'Trigonometry – Sine Rule and Cosine Rule',
          'Trigonometry – Area of a Triangle (½ab sinC)',
          'Calculus – Gradient of a Curve (Higher only)',
        ],
      }
    },
    'Further Mathematics': {
      papers: {
        1: [
          'Algebra – Factor Theorem and Algebraic Division',
          'Algebra – Algebraic Fractions',
          'Algebra – Proof',
          'Algebra – Functions',
          'Coordinate Geometry – Straight Lines and Circles',
          'Matrices',
          'Calculus – Differentiation',
          'Calculus – Integration',
          'Series and Sequences',
          'Inequalities (Linear and Quadratic)',
        ],
        2: [
          'Further Algebra and Functions',
          'Further Calculus',
          'Further Trigonometry – Identities and Equations',
          'Further Coordinate Geometry',
          'Numerical Methods',
          'Vectors in 3D',
          'Further Statistics',
          'Further Mechanics',
        ],
      }
    },
    'English Language': {
      papers: {
        1: [
          'AO1 – Identify and Interpret Explicit and Implicit Information',
          'AO2 – Language Analysis – Writer\'s Methods and Effects',
          'AO3 – Structural Analysis – Structural Features and Effects',
          'AO4 – Critical Evaluation of a Text',
          'AO5 – Communicate Clearly, Effectively and Imaginatively (Writing)',
          'AO6 – Technical Accuracy – Spelling, Punctuation and Grammar',
          'Descriptive Writing Techniques',
          'Narrative Writing Techniques',
        ],
        2: [
          'AO1 – Synthesis and Summary of Two Sources',
          'AO2 – Language Analysis – Non-Fiction Texts',
          'AO3 – Comparison of Writers\' Viewpoints and Perspectives',
          'AO4 – Evaluation of a Non-Fiction Text',
          'AO5 – Viewpoint and Argument Writing',
          'AO6 – Technical Accuracy',
          'Rhetoric and Persuasive Techniques',
          'Register, Tone and Purpose',
        ],
      }
    },
    'English Literature': {
      papers: {
        1: [
          'Macbeth – Themes: Ambition and Power',
          'Macbeth – Themes: Fate and the Supernatural',
          'Macbeth – Themes: Guilt and Conscience',
          'Macbeth – Themes: Gender and Masculinity',
          'Macbeth – Character: Macbeth',
          'Macbeth – Character: Lady Macbeth',
          'Macbeth – Context: Jacobean Society and Divine Right',
          'Macbeth – Language and Structure',
          'A Christmas Carol – Themes: Social Responsibility and Poverty',
          'A Christmas Carol – Themes: Redemption and Transformation',
          'A Christmas Carol – Themes: Family and Isolation',
          'A Christmas Carol – Themes: Christmas and Generosity',
          'A Christmas Carol – Character: Scrooge',
          'A Christmas Carol – Context: Victorian England and the Poor Laws',
          'A Christmas Carol – Language and Structure',
          'An Inspector Calls – Themes: Social Responsibility and Class',
          'An Inspector Calls – Themes: Gender and Age',
          'An Inspector Calls – Themes: Morality and Guilt',
          'An Inspector Calls – Character: Inspector Goole',
          'An Inspector Calls – Character: Sheila and Eric',
          'An Inspector Calls – Character: Mr and Mrs Birling',
          'An Inspector Calls – Context: 1912 vs 1945 Setting',
          'An Inspector Calls – Language and Structure',
          'Essay Technique: Using Quotations and Embedded Evidence',
        ],
        2: [
          'Power and Conflict Poetry – Ozymandias (Shelley)',
          'Power and Conflict Poetry – London (Blake)',
          'Power and Conflict Poetry – The Prelude: Stealing the Boat (Wordsworth)',
          'Power and Conflict Poetry – My Last Duchess (Browning)',
          'Power and Conflict Poetry – The Charge of the Light Brigade (Tennyson)',
          'Power and Conflict Poetry – Exposure (Owen)',
          'Power and Conflict Poetry – Storm on the Island (Heaney)',
          'Power and Conflict Poetry – Bayonet Charge (Hughes)',
          'Power and Conflict Poetry – Remains (Armitage)',
          'Power and Conflict Poetry – Poppies (Weir)',
          'Power and Conflict Poetry – War Photographer (Duffy)',
          'Power and Conflict Poetry – Tissue (Dharker)',
          'Power and Conflict Poetry – The Emigrée (Rumens)',
          'Power and Conflict Poetry – Kamikaze (Garland)',
          'Power and Conflict Poetry – Checking Out Me History (Agard)',
          'Poetry Comparison Technique',
          'Unseen Poetry – Analysing an Unfamiliar Poem',
          'Unseen Poetry – Comparing Two Poems',
        ],
      }
    },
    'Biology': {
      papers: {
        1: [
          'B1 – Cell Structure',
          'B1 – Cell Division (Mitosis and Cell Cycle)',
          'B1 – Transport in Cells (Diffusion, Osmosis, Active Transport)',
          'B2 – Organisation: The Human Digestive System',
          'B2 – Organisation: The Heart and Blood Vessels',
          'B2 – Organisation: Health, Disease and Cancer',
          'B2 – Organisation: Non-Communicable Diseases',
          'B3 – Infection and Response: Communicable Diseases',
          'B3 – Infection and Response: Viral and Bacterial Disease',
          'B3 – Infection and Response: Preventing and Treating Disease',
          'B3 – Infection and Response: Monoclonal Antibodies',
          'B4 – Bioenergetics: Photosynthesis',
          'B4 – Bioenergetics: Respiration (Aerobic and Anaerobic)',
          'Required Practical 1 – Microscopy',
          'Required Practical 2 – Osmosis in Plant Tissue',
          'Required Practical 3 – Food Tests',
          'Required Practical 4 – Enzyme Action and pH',
          'Required Practical 5 – Photosynthesis Rate',
          'Required Practical 6 – Respiration Rate',
        ],
        2: [
          'B5 – Homeostasis and Response: Nervous System',
          'B5 – Homeostasis and Response: The Brain',
          'B5 – Homeostasis and Response: The Eye',
          'B5 – Homeostasis and Response: Hormonal Coordination',
          'B5 – Homeostasis and Response: The Kidneys',
          'B5 – Homeostasis and Response: Controlling Blood Glucose',
          'B5 – Homeostasis and Response: Reproduction and Hormones',
          'B6 – Inheritance, Variation and Evolution: Reproduction',
          'B6 – Inheritance, Variation and Evolution: DNA and the Genome',
          'B6 – Inheritance, Variation and Evolution: Inheritance',
          'B6 – Inheritance, Variation and Evolution: Natural Selection and Evolution',
          'B6 – Inheritance, Variation and Evolution: Classification',
          'B7 – Ecology: Adaptations, Interdependence and Competition',
          'B7 – Ecology: Organisation of an Ecosystem',
          'B7 – Ecology: Biodiversity and the Effect of Human Interaction',
          'B7 – Ecology: Trophic Levels and Biomass',
          'B7 – Ecology: Food Production',
          'Required Practical 7 – Reaction Time',
          'Required Practical 8 – Plant Tropisms',
          'Required Practical 9 – Population Size',
        ],
      }
    },
    'Chemistry': {
      papers: {
        1: [
          'C1 – Atomic Structure and the Periodic Table',
          'C1 – Atomic Structure: History of the Atom',
          'C1 – Atomic Structure: Electronic Structure',
          'C1 – Periodic Table: Development and Trends',
          'C1 – Periodic Table: Group 1 (Alkali Metals)',
          'C1 – Periodic Table: Group 7 (Halogens)',
          'C1 – Periodic Table: Group 0 (Noble Gases)',
          'C2 – Bonding, Structure and Properties: Ionic Bonding',
          'C2 – Bonding: Covalent Bonding',
          'C2 – Bonding: Metallic Bonding',
          'C2 – Structure: Giant Ionic Structures',
          'C2 – Structure: Simple Molecular Substances',
          'C2 – Structure: Polymers and Giant Covalent Structures',
          'C2 – Structure: Metallic Structures and Alloys',
          'C2 – Structure: Nanoparticles',
          'C3 – Quantitative Chemistry: Relative Formula Mass',
          'C3 – Quantitative Chemistry: Moles and Avogadro',
          'C3 – Quantitative Chemistry: Limiting Reactants',
          'C3 – Quantitative Chemistry: Concentration of Solutions',
          'C4 – Chemical Changes: Metal Reactivity Series',
          'C4 – Chemical Changes: Extraction of Metals',
          'C4 – Chemical Changes: Reactions of Acids',
          'C4 – Chemical Changes: pH and Neutralisation',
          'C4 – Chemical Changes: Electrolysis',
          'C5 – Energy Changes: Exothermic and Endothermic Reactions',
          'C5 – Energy Changes: Bond Energies',
          'C5 – Energy Changes: Cells and Batteries',
          'Required Practical 1 – Making Salts',
          'Required Practical 2 – Titration',
          'Required Practical 3 – Electrolysis',
          'Required Practical 4 – Temperature Change in Reactions',
        ],
        2: [
          'C6 – The Rate and Extent of Chemical Change: Rate of Reaction',
          'C6 – Rate of Reaction: Factors Affecting Rate',
          'C6 – Rate of Reaction: Collision Theory',
          'C6 – Rate of Reaction: Catalysts',
          'C6 – Equilibrium: Reversible Reactions',
          'C6 – Equilibrium: Le Chatelier\'s Principle',
          'C6 – Equilibrium: The Haber Process',
          'C7 – Organic Chemistry: Carbon Compounds and Crude Oil',
          'C7 – Organic Chemistry: Alkanes and Alkenes',
          'C7 – Organic Chemistry: Alcohols and Carboxylic Acids',
          'C7 – Organic Chemistry: Addition and Condensation Polymers',
          'C8 – Chemical Analysis: Purity and Formulations',
          'C8 – Chemical Analysis: Chromatography',
          'C8 – Chemical Analysis: Identification of Gases',
          'C8 – Chemical Analysis: Flame Tests and Ion Tests',
          'C9 – Chemistry of the Atmosphere: Earth\'s Early Atmosphere',
          'C9 – Chemistry of the Atmosphere: Greenhouse Effect and Climate Change',
          'C9 – Chemistry of the Atmosphere: Atmospheric Pollutants',
          'C10 – Using Resources: Finite and Renewable Resources',
          'C10 – Using Resources: Water Treatment',
          'C10 – Using Resources: Corrosion and Alloys',
          'C10 – Using Resources: Ceramics, Polymers and Composites',
          'C10 – Using Resources: The Life Cycle Assessment (LCA)',
          'Required Practical 5 – Rates of Reaction (Disappearing Cross)',
          'Required Practical 6 – Rates of Reaction (Gas Syringe)',
          'Required Practical 7 – Chromatography',
          'Required Practical 8 – Identifying Ions (Flame Test and Precipitates)',
        ],
      }
    },
    'Physics': {
      papers: {
        1: [
          'P1 – Energy: Energy Stores and Transfers',
          'P1 – Energy: Kinetic Energy and Gravitational Potential Energy',
          'P1 – Energy: Elastic Potential Energy and Specific Heat Capacity',
          'P1 – Energy: Power and Efficiency',
          'P1 – Energy: National and Global Energy Resources',
          'P2 – Electricity: Circuit Symbols and Components',
          'P2 – Electricity: Charge, Current and Potential Difference',
          'P2 – Electricity: Series and Parallel Circuits',
          'P2 – Electricity: Resistance and Ohm\'s Law',
          'P2 – Electricity: I-V Characteristics (Resistor, Filament, Diode)',
          'P2 – Electricity: Mains Electricity and Domestic Appliances',
          'P2 – Electricity: National Grid',
          'P3 – Particle Model of Matter: States of Matter',
          'P3 – Particle Model: Density',
          'P3 – Particle Model: Changes of State and Specific Latent Heat',
          'P3 – Particle Model: Internal Energy and Gas Pressure',
          'P4 – Atomic Structure: History of the Atom',
          'P4 – Atomic Structure: Radioactivity – Alpha, Beta, Gamma',
          'P4 – Atomic Structure: Nuclear Equations and Half-Life',
          'P4 – Atomic Structure: Hazards and Uses of Radiation',
          'P4 – Atomic Structure: Nuclear Fission and Fusion',
          'Required Practical 1 – Specific Heat Capacity',
          'Required Practical 2 – Resistance (Wire and Components)',
          'Required Practical 3 – I-V Characteristics',
          'Required Practical 4 – Density',
        ],
        2: [
          'P5 – Forces: Scalar and Vector Quantities',
          'P5 – Forces: Contact and Non-Contact Forces',
          'P5 – Forces: Gravity and Weight',
          'P5 – Forces: Resultant Forces and Free Body Diagrams',
          'P5 – Forces: Work Done and Energy Transfer',
          'P5 – Forces: Forces and Elasticity (Hooke\'s Law)',
          'P5 – Forces: Distance-Time and Velocity-Time Graphs',
          'P5 – Forces: Newton\'s Three Laws of Motion',
          'P5 – Forces: Stopping Distance and Braking',
          'P5 – Forces: Momentum',
          'P6 – Waves: Transverse and Longitudinal Waves',
          'P6 – Waves: Properties of Waves (Speed, Frequency, Wavelength)',
          'P6 – Waves: Reflection and Refraction',
          'P6 – Waves: Sound Waves and Ultrasound',
          'P6 – Waves: Electromagnetic Spectrum',
          'P6 – Waves: Uses and Hazards of EM Waves',
          'P6 – Waves: Lenses and Ray Diagrams',
          'P7 – Magnetism and Electromagnetism: Permanent and Induced Magnets',
          'P7 – Magnetism: Motor Effect and Fleming\'s Left-Hand Rule',
          'P7 – Magnetism: Electric Motors',
          'P7 – Magnetism: Electromagnetic Induction and Generators',
          'P7 – Magnetism: Transformers',
          'P8 – Space Physics: The Solar System and Beyond',
          'P8 – Space Physics: Life Cycle of a Star',
          'P8 – Space Physics: Orbital Motion and Satellites',
          'P8 – Space Physics: Red-Shift and the Expanding Universe',
          'Required Practical 5 – Investigating Waves',
          'Required Practical 6 – Investigating Infrared Radiation',
        ],
      }
    },
    'Geography': {
      papers: {
        1: [
          '1A – The Challenge of Natural Hazards: Tectonic Hazards',
          '1A – The Challenge of Natural Hazards: Atmospheric Hazards (Tropical Storms)',
          '1A – The Challenge of Natural Hazards: Climate Change',
          '1B – The Living World: Ecosystems',
          '1B – The Living World: Tropical Rainforests',
          '1B – The Living World: Hot Deserts',
          '1B – The Living World: Cold Environments',
          '1C – Physical Landscapes in the UK: Coastal Landscapes',
          '1C – Physical Landscapes in the UK: River Landscapes',
          '1C – Physical Landscapes in the UK: Glacial Landscapes',
        ],
        2: [
          '2A – Urban Issues and Challenges: Urban Growth and Urbanisation',
          '2A – Urban Issues and Challenges: UK City Case Study',
          '2A – Urban Issues and Challenges: Developing World City Case Study',
          '2B – The Changing Economic World: Measuring Development',
          '2B – The Changing Economic World: Causes of Uneven Development',
          '2B – The Changing Economic World: Reducing the Development Gap',
          '2B – The Changing Economic World: Nigeria Case Study',
          '2B – The Changing Economic World: Post-Industrial UK Economy',
          '2C – The Challenge of Resource Management: Global Resource Management',
          '2C – The Challenge of Resource Management: Food (UK and Global)',
          '2C – The Challenge of Resource Management: Water (UK and Global)',
          '2C – The Challenge of Resource Management: Energy (UK and Global)',
        ],
        3: [
          '3A – Issue Evaluation: Pre-Release Booklet Analysis',
          '3B – Fieldwork: Physical Environment Investigation',
          '3B – Fieldwork: Human Environment Investigation',
          '3C – Geographical Skills: Atlas and Map Skills',
          '3C – Geographical Skills: Graphs and Statistical Skills',
          '3C – Geographical Skills: Ordnance Survey Map Skills',
        ],
      }
    },
    'Computer Science': {
      papers: {
        1: [
          '1.1 – Systems Architecture: CPU Structure (ALU, CU, Registers, Cache)',
          '1.1 – Systems Architecture: Fetch-Decode-Execute Cycle',
          '1.1 – Systems Architecture: Factors Affecting CPU Performance',
          '1.1 – Systems Architecture: Embedded Systems',
          '1.2 – Memory and Storage: RAM and ROM',
          '1.2 – Memory and Storage: Virtual Memory and Secondary Storage',
          '1.2 – Memory and Storage: Units of Data (Bits, Bytes, KB, MB, GB)',
          '1.2 – Memory and Storage: Binary, Denary, Hexadecimal Conversion',
          '1.2 – Memory and Storage: Binary Arithmetic and Overflow',
          '1.2 – Memory and Storage: Character Encoding (ASCII and Unicode)',
          '1.2 – Memory and Storage: Representing Images (Pixels, Bit Depth)',
          '1.2 – Memory and Storage: Representing Sound (Sample Rate, Bit Depth)',
          '1.2 – Memory and Storage: Data Compression (Lossy and Lossless)',
          '1.3 – Computer Networks: Types of Network (LAN, WAN, PAN)',
          '1.3 – Computer Networks: Network Topologies (Star, Mesh, Bus)',
          '1.3 – Computer Networks: Wired and Wireless Networks',
          '1.3 – Computer Networks: Protocols and Layers (TCP/IP, HTTP, HTTPS, FTP)',
          '1.3 – Computer Networks: Network Hardware (Router, Switch, NIC)',
          '1.4 – Network Security: Forms of Attack (Phishing, Malware, Brute Force)',
          '1.4 – Network Security: Preventing Attacks (Firewalls, Encryption, Authentication)',
          '1.4 – Network Security: SQL Injection and Penetration Testing',
          '1.5 – Systems Software: Operating System Functions',
          '1.5 – Systems Software: Utility Software',
          '1.6 – Ethical, Legal and Environmental Issues: Ethical Issues',
          '1.6 – Ethical, Legal and Environmental Issues: Legal Issues (Computer Misuse Act, Copyright)',
          '1.6 – Ethical, Legal and Environmental Issues: Environmental Impact',
          '1.6 – Ethical, Legal and Environmental Issues: Privacy Issues',
        ],
        2: [
          '2.1 – Algorithms: Computational Thinking (Decomposition, Abstraction, Algorithmic Thinking)',
          '2.1 – Algorithms: Representing Algorithms (Pseudocode, Flowcharts)',
          '2.1 – Algorithms: Searching Algorithms (Linear Search, Binary Search)',
          '2.1 – Algorithms: Sorting Algorithms (Bubble Sort, Merge Sort, Insertion Sort)',
          '2.2 – Programming Fundamentals: Variables, Constants and Data Types',
          '2.2 – Programming Fundamentals: Sequence, Selection and Iteration',
          '2.2 – Programming Fundamentals: String Manipulation',
          '2.2 – Programming Fundamentals: Arrays and Lists',
          '2.2 – Programming Fundamentals: File Handling (Read, Write, Open, Close)',
          '2.2 – Programming Fundamentals: Subroutines (Procedures and Functions)',
          '2.2 – Programming Fundamentals: Local and Global Variables',
          '2.3 – Producing Robust Programs: Defensive Design',
          '2.3 – Producing Robust Programs: Testing (Normal, Boundary, Erroneous)',
          '2.3 – Producing Robust Programs: Syntax and Logic Errors',
          '2.4 – Boolean Logic: AND, OR, NOT Gates',
          '2.4 – Boolean Logic: Truth Tables',
          '2.4 – Boolean Logic: Logic Circuits',
          '2.5 – Programming Languages and IDEs: High and Low Level Languages',
          '2.5 – Programming Languages: Translators (Compiler, Interpreter, Assembler)',
          '2.5 – IDEs: Features of an IDE',
        ],
      }
    },
    'German': {
      papers: {
        1: [
          'Listening – Theme 1: Identity and Culture (Family, Relationships, Technology)',
          'Listening – Theme 1: Free Time Activities and Interests',
          'Listening – Theme 2: Local Area, Holiday and Travel',
          'Listening – Theme 2: Town and Region Descriptions',
          'Listening – Theme 3: School and Future Plans',
          'Listening – Theme 3: Jobs, Careers and Ambitions',
          'Listening – Theme 4: International and Global Dimension',
          'Listening – Phonics and Pronunciation Recognition',
        ],
        2: [
          'Speaking – Role Play (Formal and Informal Scenarios)',
          'Speaking – Photo Card Description and Discussion',
          'Speaking – General Conversation: Theme 1 (Identity and Culture)',
          'Speaking – General Conversation: Theme 2 (Local Area and Travel)',
          'Speaking – General Conversation: Theme 3 (School and Future Plans)',
          'Speaking – General Conversation: Theme 4 (Global Issues)',
          'Speaking – Spontaneity and Pronunciation',
        ],
        3: [
          'Reading – Theme 1: Identity and Culture',
          'Reading – Theme 2: Local Area, Holiday and Travel',
          'Reading – Theme 3: School, Future Plans and Work',
          'Reading – Theme 4: International and Global Issues',
          'Reading – Grammar in Context',
          'Grammar – Present Tense (Regular and Irregular Verbs)',
          'Grammar – Perfect Tense (haben and sein)',
          'Grammar – Imperfect Tense',
          'Grammar – Future Tense and Conditional',
          'Grammar – Cases: Nominative, Accusative, Dative, Genitive',
          'Grammar – Articles and Adjective Endings',
          'Grammar – Modal Verbs',
          'Grammar – Conjunctions and Word Order (SVOMPT, Time-Manner-Place)',
          'Grammar – Relative Clauses and Subordinate Clauses',
          'Vocabulary – All Four Themes (AQA Vocabulary List)',
        ],
        4: [
          'Writing – Translation from English into German',
          'Writing – Structured Writing Task (Short and Long Response)',
          'Writing – Open-Ended Writing Task',
          'Writing – Accuracy of Tenses and Grammar',
          'Writing – Range of Vocabulary and Structures',
        ],
      }
    },
    'Business Studies': {
      papers: {
        1: [
          '1.1 – Enterprise and Entrepreneurship: Role of Entrepreneurs',
          '1.1 – Enterprise and Entrepreneurship: Business Ideas and Opportunity',
          '1.1 – Enterprise and Entrepreneurship: Risk and Reward',
          '1.2 – Spotting a Business Opportunity: Market Research',
          '1.2 – Spotting a Business Opportunity: Market Segmentation',
          '1.2 – Spotting a Business Opportunity: The Competitive Environment',
          '1.3 – Putting a Business Idea into Practice: Business Aims and Objectives',
          '1.3 – Putting a Business Idea into Practice: Business Revenue, Costs and Profit',
          '1.3 – Putting a Business Idea into Practice: Cash Flow',
          '1.3 – Putting a Business Idea into Practice: Sources of Finance',
          '1.4 – Making the Business Effective: Location and Legal Structure',
          '1.4 – Making the Business Effective: The Marketing Mix (4Ps)',
          '1.4 – Making the Business Effective: Business Plans',
          '1.5 – Understanding External Influences: Stakeholders',
          '1.5 – Understanding External Influences: Technology',
          '1.5 – Understanding External Influences: Legislation (Consumer and Employment)',
          '1.5 – Understanding External Influences: The Economy',
          '1.5 – Understanding External Influences: Ethics',
        ],
        2: [
          '2.1 – Growing the Business: Business Growth Methods',
          '2.1 – Growing the Business: Public Limited Companies (PLCs)',
          '2.1 – Growing the Business: Globalisation and E-Commerce',
          '2.2 – Making Marketing Decisions: Product Life Cycle',
          '2.2 – Making Marketing Decisions: Branding and Promotion',
          '2.2 – Making Marketing Decisions: Pricing Strategies',
          '2.2 – Making Marketing Decisions: Distribution Channels',
          '2.3 – Making Operational Decisions: Business Operations',
          '2.3 – Making Operational Decisions: Quality Management',
          '2.3 – Making Operational Decisions: The Sales Process',
          '2.4 – Making Financial Decisions: Business Calculations (Revenue, Profit, ROI)',
          '2.4 – Making Financial Decisions: Understanding Financial Statements',
          '2.5 – Making Human Resource Decisions: Organisational Structures',
          '2.5 – Making Human Resource Decisions: Recruitment and Selection',
          '2.5 – Making Human Resource Decisions: Motivation and Retention',
          '2.5 – Making Human Resource Decisions: Training and Development',
        ],
      }
    },
    'History': {
      papers: {
        1: [
          'Medicine in Britain c.1250–Present: Medieval Medicine (1250–1500)',
          'Medicine in Britain: Renaissance Medicine (1500–1700)',
          'Medicine in Britain: Industrial Revolution and Germ Theory (1700–1900)',
          'Medicine in Britain: Modern Medicine (1900–Present)',
          'Medicine in Britain: Key Individuals (Harvey, Jenner, Pasteur, Lister, Fleming)',
          'Historic Environment – The British Sector of the Western Front 1914–18',
        ],
        2: [
          'Conflict and Tension 1894–1918: Alliance Systems and Militarism',
          'Conflict and Tension: Assassination of Franz Ferdinand',
          'Conflict and Tension: Events Causing WWI',
          'Conflict and Tension: Peacemaking and Treaty of Versailles',
          'Elizabethan England c.1568–1603: Elizabeth I and Government',
          'Elizabethan England: Religious Settlement',
          'Elizabethan England: Mary Queen of Scots and Plots',
          'Elizabethan England: Exploration and the Armada',
          'Elizabethan England: Education and Popular Culture',
          'Germany 1890–1945: Kaiser Wilhelm II and the Second Reich',
          'Germany 1890–1945: The Weimar Republic and Economic Crisis',
          'Germany 1890–1945: Rise of the Nazi Party',
          'Germany 1890–1945: Nazi Consolidation of Power',
          'Germany 1890–1945: Life in Nazi Germany',
        ],
      }
    },
    'Religious Studies': {
      papers: {
        1: [
          'Christianity – Beliefs: The Nature of God (Omnipotent, Omniscient, Omnipresent)',
          'Christianity – Beliefs: The Trinity (Father, Son, Holy Spirit)',
          'Christianity – Beliefs: Creation and the Fall',
          'Christianity – Beliefs: Incarnation and the Nature of Jesus',
          'Christianity – Beliefs: Salvation, Atonement and Redemption',
          'Christianity – Beliefs: Afterlife and Judgement',
          'Christianity – Practices: Worship (Liturgical and Non-Liturgical)',
          'Christianity – Practices: Prayer and The Lord\'s Prayer',
          'Christianity – Practices: Sacraments (Baptism, Eucharist)',
          'Christianity – Practices: Pilgrimage and Celebrations (Christmas, Easter)',
          'Christianity – Practices: The Role of the Church in the Local Community',
          'Islam – Beliefs: The Six Articles of Faith',
          'Islam – Beliefs: Nature of Allah (Tawhid)',
          'Islam – Beliefs: Angels, Prophethood and Holy Books',
          'Islam – Beliefs: Akhirah (Life After Death) and Predestination',
          'Islam – Beliefs: Sunni and Shi\'a Differences',
          'Islam – Practices: The Five Pillars (Shahadah, Salah, Sawm, Zakah, Hajj)',
          'Islam – Practices: Jihad (Greater and Lesser)',
          'Islam – Practices: Celebrations (Id-ul-Fitr, Id-ul-Adha)',
        ],
        2: [
          'Theme A – Relationships and Families: Roles of Men and Women',
          'Theme A – Relationships and Families: Marriage and Divorce',
          'Theme A – Relationships and Families: Sexual Relationships and Contraception',
          'Theme A – Relationships and Families: Family and the Nature of Families',
          'Theme B – Religion and Life: The Origins and Value of the Universe',
          'Theme B – Religion and Life: The Origins and Value of Human Life (Abortion)',
          'Theme B – Religion and Life: Euthanasia and the Sanctity of Life',
          'Theme B – Religion and Life: Animal Rights and the Environment',
          'Theme D – Religion, Peace and Conflict: Violence, Terrorism and War',
          'Theme D – Religion, Peace and Conflict: Just War Theory',
          'Theme D – Religion, Peace and Conflict: Holy War',
          'Theme D – Religion, Peace and Conflict: Pacifism and Peacemaking',
          'Theme E – Religion, Crime and Punishment: Crime and Its Causes',
          'Theme E – Religion, Crime and Punishment: Aims of Punishment',
          'Theme E – Religion, Crime and Punishment: Forgiveness and the Death Penalty',
          'Theme F – Religion, Human Rights and Social Justice: Prejudice and Discrimination',
          'Theme F – Religion, Human Rights and Social Justice: Wealth and Poverty',
        ],
      }
    },
    'French': {
      papers: {
        1: ['Listening – Identity and Culture', 'Listening – Local Area and Travel', 'Listening – School and Future Plans', 'Listening – Global Issues'],
        2: ['Speaking – Role Play', 'Speaking – Photo Card', 'Speaking – General Conversation'],
        3: ['Reading – All Themes', 'Grammar – Tenses (Present, Perfect, Imperfect, Future, Conditional)', 'Grammar – Verbs (Reflexive, Modal, Irregular)', 'Vocabulary – All AQA Themes'],
        4: ['Writing – Translation into French', 'Writing – Structured Task', 'Writing – Open-Ended Task'],
      }
    },
    'Spanish': {
      papers: {
        1: ['Listening – Identity and Culture', 'Listening – Local Area and Travel', 'Listening – School and Future Plans', 'Listening – Global Issues'],
        2: ['Speaking – Role Play', 'Speaking – Photo Card', 'Speaking – General Conversation'],
        3: ['Reading – All Themes', 'Grammar – Tenses and Verb Forms', 'Vocabulary – All AQA Themes'],
        4: ['Writing – Translation into Spanish', 'Writing – Structured Task', 'Writing – Open-Ended Task'],
      }
    },
    'Combined Science': {
      papers: {
        1: ['B1 – Cell Structure and Transport', 'B1 – Cell Division', 'B2 – Organisation: Digestive and Circulatory Systems', 'B2 – Organisation: Disease'],
        2: ['C1 – Atomic Structure and Periodic Table', 'C2 – Bonding, Structure and Properties', 'C3 – Quantitative Chemistry', 'C4 – Chemical Changes'],
        3: ['P1 – Energy', 'P2 – Electricity', 'P3 – Particle Model', 'P4 – Atomic Structure and Radioactivity'],
        4: ['B4 – Bioenergetics', 'B5 – Homeostasis and Response', 'B6 – Inheritance and Evolution', 'B7 – Ecology'],
        5: ['C5 – Energy Changes', 'C6 – Rate and Extent of Chemical Change', 'C7 – Organic Chemistry', 'C8 – Chemical Analysis'],
        6: ['P5 – Forces', 'P6 – Waves', 'P7 – Magnetism and Electromagnetism'],
      }
    },
  },

  OCR: {
    'Computer Science': {
      papers: {
        1: [
          'J277/01 – 1.1 Systems Architecture: The CPU',
          'J277/01 – 1.1 Systems Architecture: Memory',
          'J277/01 – 1.1 Systems Architecture: Secondary Storage',
          'J277/01 – 1.2 Networks and the Internet: Networks',
          'J277/01 – 1.2 Networks and the Internet: The Internet and the WWW',
          'J277/01 – 1.2 Networks and the Internet: Network Security',
          'J277/01 – 1.3 Impacts of Digital Technology: Ethical Issues',
          'J277/01 – 1.3 Impacts of Digital Technology: Legal Issues',
          'J277/01 – 1.3 Impacts of Digital Technology: Environmental Impact',
          'J277/01 – 1.3 Impacts of Digital Technology: Privacy',
        ],
        2: [
          'J277/02 – 2.1 Algorithms: Computational Thinking',
          'J277/02 – 2.1 Algorithms: Designing Algorithms',
          'J277/02 – 2.1 Algorithms: Searching and Sorting Algorithms',
          'J277/02 – 2.2 Programming Fundamentals',
          'J277/02 – 2.3 Producing Robust Programs',
          'J277/02 – 2.4 Boolean Logic',
          'J277/02 – 2.5 Programming Languages and IDEs',
          'J277/02 – Programming in Python (Practical Application)',
        ],
      }
    },
    'Mathematics': {
      papers: {
        1: ['Number', 'Algebra', 'Ratio, Proportion and Rates of Change', 'Geometry and Measures', 'Probability and Statistics'],
        2: ['Number and Algebra (Calculator)', 'Geometry and Measures (Calculator)', 'Statistics (Calculator)'],
        3: ['Higher Only: Further Algebra', 'Higher Only: Further Geometry', 'Higher Only: Further Statistics'],
      }
    },
  },

  Edexcel: {
    'Mathematics': {
      papers: {
        1: [
          'Number – Calculations, Checking and Rounding',
          'Number – Indices, Roots, Reciprocals and Hierarchy of Operations',
          'Number – Factors, Multiples, Primes, Standard Form',
          'Number – Fractions and Percentages',
          'Algebra – Notation, Formulae and Identities',
          'Algebra – Graphs, Tables and Charts',
          'Algebra – Sequences',
          'Ratio, Proportion and Rates of Change',
          'Geometry – Angles, Polygons, Parallel Lines',
          'Geometry – Circles and Constructions',
          'Statistics and Probability',
        ],
        2: [
          'Number – Surds and Bounds',
          'Algebra – Equations and Inequalities',
          'Algebra – Quadratics',
          'Algebra – Simultaneous Equations',
          'Geometry – Pythagoras and Trigonometry',
          'Geometry – Transformations',
          'Statistics – Scatter Graphs',
          'Probability – Combined Events',
        ],
        3: [
          'Algebra – Further Graphs and Transformations',
          'Algebra – Proof',
          'Geometry – Circle Theorems',
          'Geometry – Vectors',
          'Statistics – Cumulative Frequency and Histograms',
          'Trigonometry – Sine and Cosine Rules',
        ],
      }
    },
    'English Language': {
      papers: {
        1: ['Reading – Inference and Deduction', 'Reading – Language Analysis', 'Reading – Structural Analysis', 'Writing – Imaginative and Creative Writing'],
        2: ['Reading – Non-Fiction Analysis', 'Reading – Comparison and Synthesis', 'Writing – Transactional Writing (Letter, Article, Speech)'],
      }
    },
    'English Literature': {
      papers: {
        1: ['Modern Prose or Drama Text', 'Shakespeare: Conflict and Character', 'Essay Technique and Assessment Objectives'],
        2: ['19th Century Novel', 'Poetry Anthology – Conflict', 'Unseen Poetry'],
      }
    },
    'Business Studies': {
      papers: {
        1: [
          'Theme 1 – Investigating Small Business: Enterprise and Entrepreneurs',
          'Theme 1 – Marketing: Understanding Customer Needs',
          'Theme 1 – Marketing: Market Research and Segmentation',
          'Theme 1 – Marketing: The Marketing Mix',
          'Theme 1 – Finance: Sources of Finance',
          'Theme 1 – Finance: Costs, Revenue and Profit',
          'Theme 1 – Finance: Break-Even',
          'Theme 1 – Finance: Cash Flow Forecasting',
          'Theme 1 – People: Organisational Structures',
          'Theme 1 – People: Recruitment and Selection',
          'Theme 1 – Operations: Business Operations and Quality',
          'Theme 1 – External Influences: Stakeholders and Business Aims',
        ],
        2: [
          'Theme 2 – Growing the Business: Business Growth',
          'Theme 2 – Growing the Business: Globalisation',
          'Theme 2 – Making Marketing Decisions: Product (PLC and Boston Matrix)',
          'Theme 2 – Making Marketing Decisions: Price, Promotion and Place',
          'Theme 2 – Making Financial Decisions: Financial Statements',
          'Theme 2 – Making Financial Decisions: Ratio Analysis',
          'Theme 2 – Making Operational Decisions: Efficiency and Technology',
          'Theme 2 – Making HR Decisions: Motivation and Retention',
          'Theme 2 – Making HR Decisions: Training',
        ],
      }
    },
    'Geography': {
      papers: {
        1: ['The Physical Environment: Coasts', 'The Physical Environment: Rivers', 'The Physical Environment: Glaciation', 'The Physical Environment: Weather and Climate'],
        2: ['The Human Environment: Changing Cities', 'The Human Environment: Global Development', 'The Human Environment: Resource Management'],
        3: ['Geographical Investigations: Fieldwork', 'Geographical Investigations: UK Challenges'],
      }
    },
  },

  WJEC: {
    'Mathematics': {
      papers: {
        1: ['Number', 'Algebra', 'Geometry', 'Statistics and Probability'],
        2: ['Number and Algebra (Calculator)', 'Shape, Space and Measures', 'Data Handling'],
      }
    },
    'English Language': {
      papers: {
        1: ['Reading Literary Prose', 'Writing: Descriptive and Narrative'],
        2: ['Reading Non-Fiction', 'Writing: Transactional and Persuasive'],
      }
    },
    'Biology': {
      papers: {
        1: ['Unit 1: Cells and Movement Across Membranes', 'Unit 1: Respiration and the Respiratory System', 'Unit 1: Digestion and the Digestive System', 'Unit 1: Circulatory System', 'Unit 1: Pathogens and Disease', 'Unit 1: Homeostasis'],
        2: ['Unit 2: Classification and Biodiversity', 'Unit 2: Cell Division and Cancer', 'Unit 2: DNA and Inheritance', 'Unit 2: Variation and Evolution', 'Unit 2: Biotechnology', 'Unit 2: Ecosystems and Human Impact'],
      }
    },
    'Chemistry': {
      papers: {
        1: ['Unit 1: Bonding and Structure', 'Unit 1: Periodic Table and Properties of Elements', 'Unit 1: Formulae and Equations', 'Unit 1: Acids, Bases and Salts', 'Unit 1: Electrolysis'],
        2: ['Unit 2: Rates of Reaction', 'Unit 2: Organic Chemistry', 'Unit 2: Chemical Analysis', 'Unit 2: Environmental Chemistry'],
      }
    },
    'Physics': {
      papers: {
        1: ['Unit 1: Motion', 'Unit 1: Forces', 'Unit 1: Energy', 'Unit 1: Electricity', 'Unit 1: Magnetism'],
        2: ['Unit 2: Waves', 'Unit 2: Radioactivity and Nuclear Physics', 'Unit 2: Space Physics'],
      }
    },
  },

  CCEA: {
    'Mathematics': {
      papers: {
        1: ['Module T1: Number and Algebra', 'Module T1: Geometry', 'Module T1: Statistics'],
        2: ['Module T2: Further Number', 'Module T2: Further Algebra', 'Module T2: Further Geometry and Statistics'],
      }
    },
    'Biology': {
      papers: {
        1: ['Unit 1: Cells', 'Unit 1: Osmosis and Diffusion', 'Unit 1: Enzymes', 'Unit 1: Nutrition', 'Unit 1: The Circulatory System', 'Unit 1: Breathing and Respiration'],
        2: ['Unit 2: Genetics and Inheritance', 'Unit 2: DNA and Protein Synthesis', 'Unit 2: Variation and Evolution', 'Unit 2: Ecosystems', 'Unit 2: Homeostasis', 'Unit 2: Human Impact on the Environment'],
      }
    },
    'Chemistry': {
      papers: {
        1: ['Unit 1: Atomic Structure', 'Unit 1: Chemical Bonding', 'Unit 1: Formulae, Equations and Amounts', 'Unit 1: Acids and Bases'],
        2: ['Unit 2: Organic Chemistry', 'Unit 2: Industrial Chemistry', 'Unit 2: Chemical Analysis'],
      }
    },
    'Physics': {
      papers: {
        1: ['Unit 1: Motion and Forces', 'Unit 1: Energy, Work and Power', 'Unit 1: Electricity'],
        2: ['Unit 2: Waves and Sound', 'Unit 2: Light and Optics', 'Unit 2: Magnetism and Electromagnetism', 'Unit 2: Radioactivity'],
      }
    },
  },
}

export function getTopicsForSubject(board, subject) {
  return TOPICS[board]?.[subject] || TOPICS['AQA']?.[subject] || null
}

export function getAllTopicsFlat(board, subject) {
  const subj = getTopicsForSubject(board, subject)
  if (!subj) return []
  return Object.entries(subj.papers).flatMap(([paper, topics]) =>
    topics.map(t => ({ name: t, paper: parseInt(paper) }))
  )
}

export default TOPICS
