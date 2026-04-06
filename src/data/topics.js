// src/data/topics.js
// Official specification topic names — exact names from published specifications
// Sources: AQA, OCR, Edexcel, WJEC/Eduqas, CCEA published specs (2024–26)
// Format: GCSE[board][subject].papers[n] = string[]
//         A_LEVEL[board][subject].papers[n] = string[]
// Subject keys MUST match GCSE_SUBJECTS / ALEVEL_SUBJECTS in subjects.js exactly.
// Naming convention: 'Section – Topic Name' (spec code where helpful)

// ─────────────────────────────────────────────────────────────────────────────
// GCSE
// ─────────────────────────────────────────────────────────────────────────────
const GCSE = {

  // ── AQA ────────────────────────────────────────────────────────────────────
  AQA: {

    'Mathematics': { papers: {
      1: [
        'Number – Structure and Calculation',
        'Number – Fractions, Decimals and Percentages',
        'Number – Measures and Accuracy (Bounds)',
        'Number – Surds (Higher)',
        'Algebra – Notation, Vocabulary and Manipulation',
        'Algebra – Graphs',
        'Algebra – Solving Equations and Inequalities',
        'Algebra – Sequences',
        'Ratio, Proportion and Rates of Change',
        'Geometry – Properties of Shapes, Parallel Lines and Angles',
        'Geometry – Mensuration and Calculation',
        'Geometry – Vectors (Higher)',
        'Probability',
        'Statistics',
      ],
      2: [
        'Number – Calculations, Estimation and BIDMAS',
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
        'Algebra – Functions and Function Notation (Higher)',
        'Algebra – Algebraic Proof (Higher)',
        'Geometry – Circle Theorems (Higher)',
        'Geometry – Equation of a Circle (Higher)',
        'Geometry – Transformations of Graphs (Higher)',
        'Statistics – Cumulative Frequency and Box Plots',
        'Statistics – Histograms',
        'Number – Upper and Lower Bounds',
        'Trigonometry – Sine Rule and Cosine Rule (Higher)',
        'Trigonometry – Area of a Triangle using ½ab sinC (Higher)',
        'Calculus – Gradient of a Curve (Higher only)',
      ],
    }},

    'Further Mathematics': { papers: {
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
    }},

    'Statistics': { papers: {
      1: [
        'Data Collection – Census and Sampling Methods',
        'Data Collection – Questionnaire Design and Bias',
        'Data Presentation – Bar Charts, Pie Charts, Frequency Polygons',
        'Data Presentation – Histograms and Stem-and-Leaf Diagrams',
        'Statistical Measures – Mean, Median, Mode, Range',
        'Statistical Measures – Interquartile Range and Outliers',
        'Scatter Diagrams – Correlation and Lines of Best Fit',
        'Time Series – Trend Lines and Seasonal Variation',
        'Index Numbers',
      ],
      2: [
        'Probability – Basic Probability and Venn Diagrams',
        'Probability – Conditional Probability and Tree Diagrams',
        'Probability – Binomial Distribution (Higher)',
        'Normal Distribution (Higher)',
        'Hypothesis Testing – Introduction (Higher)',
        'Regression and Correlation – Spearman\'s Rank',
        'Quality Assurance – Control Charts',
      ],
    }},

    'English Language': { papers: {
      1: [
        'AO1 – Identify and Interpret Explicit and Implicit Information',
        'AO2 – Language Analysis: Writer\'s Methods and Effects (Fiction)',
        'AO3 – Structural Analysis: Structural Features and Effects',
        'AO4 – Critical Evaluation of a Fiction Text',
        'AO5 – Communicate Clearly, Effectively and Imaginatively (Writing)',
        'AO6 – Technical Accuracy: Spelling, Punctuation and Grammar',
        'Descriptive Writing Techniques',
        'Narrative Writing Techniques',
      ],
      2: [
        'AO1 – Synthesis and Summary of Two Non-Fiction Sources',
        'AO2 – Language Analysis: Non-Fiction Writer\'s Methods',
        'AO3 – Comparison of Writers\' Viewpoints and Perspectives',
        'AO4 – Evaluation of a Non-Fiction Text',
        'AO5 – Viewpoint and Argument Writing (Letter, Article, Speech)',
        'AO6 – Technical Accuracy',
        'Rhetoric and Persuasive Techniques',
        'Register, Tone and Purpose',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'Macbeth – Themes: Ambition and Power',
        'Macbeth – Themes: Fate and the Supernatural',
        'Macbeth – Themes: Guilt and Conscience',
        'Macbeth – Themes: Gender and Masculinity',
        'Macbeth – Character: Macbeth',
        'Macbeth – Character: Lady Macbeth',
        'Macbeth – Context: Jacobean Society and Divine Right of Kings',
        'Macbeth – Language and Structure Analysis',
        'A Christmas Carol – Themes: Social Responsibility and Poverty',
        'A Christmas Carol – Themes: Redemption and Transformation',
        'A Christmas Carol – Themes: Family and Isolation',
        'A Christmas Carol – Character: Scrooge',
        'A Christmas Carol – Context: Victorian England and the Poor Laws',
        'A Christmas Carol – Language and Structure Analysis',
        'An Inspector Calls – Themes: Social Class and Responsibility',
        'An Inspector Calls – Themes: Gender, Age and Morality',
        'An Inspector Calls – Character: Inspector Goole',
        'An Inspector Calls – Character: The Birling Family',
        'An Inspector Calls – Context: 1912 Setting vs 1945 Audience',
        'An Inspector Calls – Language and Structure Analysis',
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
        'Unseen Poetry – Comparing Two Unseen Poems',
      ],
    }},

    'Biology': { papers: {
      1: [
        'B1 – Cell Structure',
        'B1 – Cell Division: Mitosis and the Cell Cycle',
        'B1 – Transport in Cells: Diffusion, Osmosis, Active Transport',
        'B2 – Organisation: The Human Digestive System',
        'B2 – Organisation: The Heart and Blood Vessels',
        'B2 – Organisation: Health, Disease and Cancer',
        'B2 – Organisation: Non-Communicable Diseases',
        'B3 – Infection and Response: Communicable Diseases',
        'B3 – Infection and Response: Viral and Bacterial Diseases',
        'B3 – Infection and Response: Preventing and Treating Disease',
        'B3 – Infection and Response: Monoclonal Antibodies and Vaccines',
        'B4 – Bioenergetics: Photosynthesis',
        'B4 – Bioenergetics: Respiration (Aerobic and Anaerobic)',
        'Required Practical 1 – Microscopy',
        'Required Practical 2 – Osmosis in Plant Tissue',
        'Required Practical 3 – Food Tests',
        'Required Practical 4 – Enzyme Action and pH',
        'Required Practical 5 – Photosynthesis Rate',
        'Required Practical 6 – Respiration Rate (Yeast)',
      ],
      2: [
        'B5 – Homeostasis and Response: The Nervous System',
        'B5 – Homeostasis and Response: The Brain',
        'B5 – Homeostasis and Response: The Eye',
        'B5 – Homeostasis and Response: Hormonal Coordination',
        'B5 – Homeostasis and Response: The Kidneys and Osmoregulation',
        'B5 – Homeostasis and Response: Controlling Blood Glucose (Diabetes)',
        'B5 – Homeostasis and Response: Reproduction and Hormones',
        'B6 – Inheritance, Variation and Evolution: Types of Reproduction',
        'B6 – Inheritance, Variation and Evolution: DNA and the Genome',
        'B6 – Inheritance, Variation and Evolution: Inheritance and Punnett Squares',
        'B6 – Inheritance, Variation and Evolution: Natural Selection and Evolution',
        'B6 – Inheritance, Variation and Evolution: Classification of Living Organisms',
        'B7 – Ecology: Adaptations, Interdependence and Competition',
        'B7 – Ecology: Organisation of an Ecosystem',
        'B7 – Ecology: Biodiversity and Human Interaction',
        'B7 – Ecology: Trophic Levels and Biomass Transfer',
        'B7 – Ecology: Food Production and Sustainability',
        'Required Practical 7 – Reaction Time',
        'Required Practical 8 – Plant Tropisms',
        'Required Practical 9 – Population Size (Quadrats)',
      ],
    }},

    'Chemistry': { papers: {
      1: [
        'C1 – Atomic Structure: History of the Atom',
        'C1 – Atomic Structure: Atomic Number, Mass Number and Isotopes',
        'C1 – Atomic Structure: Electronic Structure',
        'C1 – The Periodic Table: Development and Trends',
        'C1 – The Periodic Table: Group 1 Alkali Metals',
        'C1 – The Periodic Table: Group 7 Halogens',
        'C1 – The Periodic Table: Group 0 Noble Gases',
        'C1 – The Periodic Table: Transition Metals',
        'C2 – Bonding: Ionic Bonding and Giant Ionic Structures',
        'C2 – Bonding: Covalent Bonding and Simple Molecular Substances',
        'C2 – Bonding: Metallic Bonding and Metallic Structures',
        'C2 – Structure: Polymers and Giant Covalent Structures (Diamond, Graphite)',
        'C2 – Structure: Nanoparticles',
        'C2 – Structure: Alloys',
        'C3 – Quantitative Chemistry: Relative Atomic and Formula Mass',
        'C3 – Quantitative Chemistry: Moles and the Avogadro Constant',
        'C3 – Quantitative Chemistry: Limiting Reactants and Yield',
        'C3 – Quantitative Chemistry: Concentration of Solutions',
        'C4 – Chemical Changes: Metal Reactivity Series and Extraction',
        'C4 – Chemical Changes: Reactions of Acids with Metals and Bases',
        'C4 – Chemical Changes: pH Scale and Neutralisation',
        'C4 – Chemical Changes: Electrolysis',
        'C5 – Energy Changes: Exothermic and Endothermic Reactions',
        'C5 – Energy Changes: Bond Energies',
        'C5 – Energy Changes: Cells and Batteries',
        'Required Practical 1 – Making Salts (Titration)',
        'Required Practical 2 – Preparation of a Pure Salt',
        'Required Practical 3 – Electrolysis of Aqueous Solutions',
        'Required Practical 4 – Temperature Change in Reactions',
      ],
      2: [
        'C6 – Rate of Reaction: Factors Affecting Rate (Temperature, Concentration, Surface Area, Catalysts)',
        'C6 – Rate of Reaction: Collision Theory',
        'C6 – Rate of Reaction: Measuring Rate (Graphs and Calculations)',
        'C6 – Equilibrium: Reversible Reactions',
        'C6 – Equilibrium: Le Chatelier\'s Principle',
        'C6 – Equilibrium: The Haber Process',
        'C7 – Organic Chemistry: Carbon Compounds and Crude Oil Fractional Distillation',
        'C7 – Organic Chemistry: Alkanes',
        'C7 – Organic Chemistry: Alkenes and Addition Reactions',
        'C7 – Organic Chemistry: Alcohols and Carboxylic Acids',
        'C7 – Organic Chemistry: Addition and Condensation Polymers',
        'C8 – Chemical Analysis: Purity and Formulations',
        'C8 – Chemical Analysis: Chromatography (Rf Values)',
        'C8 – Chemical Analysis: Identification of Gases',
        'C8 – Chemical Analysis: Flame Tests and Ion Identification',
        'C9 – Chemistry of the Atmosphere: Earth\'s Early Atmosphere',
        'C9 – Chemistry of the Atmosphere: Greenhouse Effect and Climate Change',
        'C9 – Chemistry of the Atmosphere: Atmospheric Pollutants',
        'C10 – Using Resources: Finite and Renewable Resources',
        'C10 – Using Resources: Water Treatment',
        'C10 – Using Resources: Corrosion and Alloys',
        'C10 – Using Resources: Life Cycle Assessment (LCA)',
        'C10 – Using Resources: The Haber Process (Industry)',
        'Required Practical 5 – Rate of Reaction (Disappearing Cross)',
        'Required Practical 6 – Rate of Reaction (Gas Syringe)',
        'Required Practical 7 – Chromatography',
        'Required Practical 8 – Identifying Ions (Flame Tests and Precipitates)',
      ],
    }},

    'Physics': { papers: {
      1: [
        'P1 – Energy: Energy Stores and Transfers',
        'P1 – Energy: Kinetic and Gravitational Potential Energy',
        'P1 – Energy: Elastic Potential Energy and Specific Heat Capacity',
        'P1 – Energy: Power and Efficiency',
        'P1 – Energy: National and Global Energy Resources',
        'P2 – Electricity: Circuit Symbols and Components',
        'P2 – Electricity: Charge, Current and Potential Difference',
        'P2 – Electricity: Series and Parallel Circuits',
        'P2 – Electricity: Resistance and Ohm\'s Law',
        'P2 – Electricity: I-V Characteristics (Resistor, Filament Lamp, Diode)',
        'P2 – Electricity: Mains Electricity and Domestic Appliances',
        'P2 – Electricity: The National Grid and Transformers',
        'P3 – Particle Model of Matter: States of Matter and Density',
        'P3 – Particle Model: Changes of State and Specific Latent Heat',
        'P3 – Particle Model: Internal Energy and Gas Pressure',
        'P4 – Atomic Structure: History of the Atom',
        'P4 – Atomic Structure: Radioactivity – Alpha, Beta and Gamma',
        'P4 – Atomic Structure: Nuclear Equations and Half-Life',
        'P4 – Atomic Structure: Hazards and Uses of Radiation',
        'P4 – Atomic Structure: Nuclear Fission and Fusion',
        'Required Practical 1 – Specific Heat Capacity',
        'Required Practical 2 – Resistance of a Wire',
        'Required Practical 3 – I-V Characteristics',
        'Required Practical 4 – Density of Regular and Irregular Objects',
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
        'P5 – Forces: Momentum (Higher)',
        'P6 – Waves: Transverse and Longitudinal Waves',
        'P6 – Waves: Properties of Waves (Speed, Frequency, Wavelength, Amplitude)',
        'P6 – Waves: Reflection and Refraction',
        'P6 – Waves: Sound Waves and Ultrasound',
        'P6 – Waves: Electromagnetic Spectrum',
        'P6 – Waves: Uses and Hazards of EM Waves',
        'P6 – Waves: Lenses and Ray Diagrams (Higher)',
        'P7 – Magnetism and Electromagnetism: Permanent and Induced Magnets',
        'P7 – Magnetism: The Motor Effect and Fleming\'s Left-Hand Rule',
        'P7 – Magnetism: Electric Motors',
        'P7 – Magnetism: Electromagnetic Induction and Generators',
        'P7 – Magnetism: Transformers',
        'P8 – Space Physics: The Solar System and Beyond',
        'P8 – Space Physics: Life Cycle of a Star',
        'P8 – Space Physics: Orbital Motion and Satellites',
        'P8 – Space Physics: Red-Shift and the Expanding Universe (Higher)',
        'Required Practical 5 – Investigating Waves (Ripple Tank)',
        'Required Practical 6 – Investigating Infrared Radiation',
      ],
    }},

    'Combined Science: Trilogy': { papers: {
      1: [
        'B1 – Cell Structure',
        'B1 – Cell Division: Mitosis and the Cell Cycle',
        'B1 – Transport in Cells: Diffusion, Osmosis, Active Transport',
        'B2 – Organisation: The Digestive System',
        'B2 – Organisation: The Heart and Blood Vessels',
        'B2 – Organisation: Health and Disease',
        'B3 – Infection and Response: Communicable Diseases',
        'B3 – Infection and Response: Preventing and Treating Disease',
        'B4 – Bioenergetics: Photosynthesis',
        'B4 – Bioenergetics: Respiration',
      ],
      2: [
        'B5 – Homeostasis: Nervous System',
        'B5 – Homeostasis: Hormonal Coordination',
        'B5 – Homeostasis: Kidneys and Blood Glucose',
        'B6 – Inheritance, Variation and Evolution: DNA and Inheritance',
        'B6 – Inheritance, Variation and Evolution: Natural Selection',
        'B7 – Ecology: Ecosystems and Biodiversity',
        'B7 – Ecology: Food Production',
      ],
      3: [
        'C1 – Atomic Structure and the Periodic Table',
        'C2 – Bonding, Structure and Properties of Matter',
        'C3 – Quantitative Chemistry',
        'C4 – Chemical Changes',
        'C5 – Energy Changes',
      ],
      4: [
        'C6 – Rate and Extent of Chemical Change',
        'C7 – Organic Chemistry',
        'C8 – Chemical Analysis',
        'C9 – Chemistry of the Atmosphere',
        'C10 – Using Resources',
      ],
      5: [
        'P1 – Energy',
        'P2 – Electricity',
        'P3 – Particle Model of Matter',
        'P4 – Atomic Structure and Radioactivity',
      ],
      6: [
        'P5 – Forces',
        'P6 – Waves',
        'P7 – Magnetism and Electromagnetism',
      ],
    }},

    'Combined Science: Synergy': { papers: {
      1: [
        'Atomic Structure and Bonding',
        'Quantitative Chemistry',
        'Energy Changes in Chemistry',
        'Rates of Reaction',
        'Physical Chemistry – Synergy Paper 1 Content',
      ],
      2: [
        'Cell Biology and Organisation',
        'Infection and Response',
        'Bioenergetics',
        'Inheritance, Variation and Evolution',
        'Life and the Environment – Synergy Paper 2 Content',
      ],
      3: [
        'Motion, Forces and Conservation of Energy',
        'Waves',
        'Magnetism and Electromagnetism',
        'Particle Model and Atomic Structure (Physics)',
        'Physical Chemistry – Synergy Paper 3 Content',
      ],
      4: [
        'Ecosystems and Material Cycles',
        'Homeostasis and Response',
        'Life and the Environment – Synergy Paper 4 Content',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        '1.1 – Systems Architecture: CPU Structure (ALU, CU, Registers, Cache)',
        '1.1 – Systems Architecture: Fetch-Decode-Execute Cycle',
        '1.1 – Systems Architecture: Factors Affecting CPU Performance',
        '1.1 – Systems Architecture: Embedded Systems',
        '1.2 – Memory and Storage: RAM and ROM',
        '1.2 – Memory and Storage: Virtual Memory and Secondary Storage',
        '1.2 – Memory and Storage: Units of Data (Bits, Bytes, KB, MB, GB, TB)',
        '1.2 – Memory and Storage: Binary, Denary and Hexadecimal Conversion',
        '1.2 – Memory and Storage: Binary Arithmetic and Overflow',
        '1.2 – Memory and Storage: Character Encoding (ASCII and Unicode)',
        '1.2 – Memory and Storage: Representing Images (Pixels and Bit Depth)',
        '1.2 – Memory and Storage: Representing Sound (Sample Rate and Bit Depth)',
        '1.2 – Memory and Storage: Data Compression (Lossy and Lossless)',
        '1.3 – Computer Networks: Types of Network (LAN, WAN)',
        '1.3 – Computer Networks: Network Topologies (Star, Mesh, Bus)',
        '1.3 – Computer Networks: Wired and Wireless Networks',
        '1.3 – Computer Networks: Protocols and Layers (TCP/IP, HTTP, HTTPS, FTP, SMTP)',
        '1.3 – Computer Networks: Network Hardware (Router, Switch, NIC)',
        '1.4 – Network Security: Forms of Attack (Phishing, Malware, Brute Force, SQL Injection)',
        '1.4 – Network Security: Preventing Attacks (Firewalls, Encryption, Authentication)',
        '1.5 – Systems Software: Operating System Functions',
        '1.5 – Systems Software: Utility Software',
        '1.6 – Ethical, Legal and Environmental Issues: Ethical Issues',
        '1.6 – Ethical, Legal and Environmental Issues: Legal Issues (Computer Misuse Act, Data Protection Act)',
        '1.6 – Ethical, Legal and Environmental Issues: Environmental Impact',
        '1.6 – Ethical, Legal and Environmental Issues: Privacy Issues',
      ],
      2: [
        '2.1 – Algorithms: Computational Thinking (Decomposition, Abstraction, Algorithmic Thinking)',
        '2.1 – Algorithms: Representing Algorithms (Pseudocode and Flowcharts)',
        '2.1 – Algorithms: Searching Algorithms (Linear Search and Binary Search)',
        '2.1 – Algorithms: Sorting Algorithms (Bubble Sort, Merge Sort, Insertion Sort)',
        '2.2 – Programming Fundamentals: Variables, Constants and Data Types',
        '2.2 – Programming Fundamentals: Sequence, Selection and Iteration',
        '2.2 – Programming Fundamentals: String Manipulation',
        '2.2 – Programming Fundamentals: Arrays and Lists',
        '2.2 – Programming Fundamentals: File Handling (Read, Write, Open, Close)',
        '2.2 – Programming Fundamentals: Subroutines (Procedures and Functions)',
        '2.2 – Programming Fundamentals: Local and Global Variables',
        '2.3 – Producing Robust Programs: Defensive Design',
        '2.3 – Producing Robust Programs: Testing (Normal, Boundary, Erroneous Data)',
        '2.3 – Producing Robust Programs: Syntax and Logic Errors',
        '2.4 – Boolean Logic: AND, OR, NOT Gates',
        '2.4 – Boolean Logic: Truth Tables',
        '2.4 – Boolean Logic: Logic Circuits and Diagrams',
        '2.5 – Programming Languages: High and Low Level Languages',
        '2.5 – Programming Languages: Translators (Compiler, Interpreter, Assembler)',
        '2.5 – IDEs: Features of an Integrated Development Environment',
      ],
    }},

    'Geography': { papers: {
      1: [
        '1A – The Challenge of Natural Hazards: Tectonic Hazards (Earthquakes and Volcanoes)',
        '1A – The Challenge of Natural Hazards: Atmospheric Hazards (Tropical Storms)',
        '1A – The Challenge of Natural Hazards: Climate Change (Evidence, Causes and Effects)',
        '1B – The Living World: Ecosystems (Small Scale and Global)',
        '1B – The Living World: Tropical Rainforests (Characteristics, Deforestation, Management)',
        '1B – The Living World: Hot Deserts (Characteristics, Opportunities, Challenges)',
        '1B – The Living World: Cold Environments (Characteristics, Opportunities, Challenges)',
        '1C – Physical Landscapes in the UK: Coastal Landscapes (Processes and Landforms)',
        '1C – Physical Landscapes in the UK: River Landscapes (Processes and Landforms)',
        '1C – Physical Landscapes in the UK: Glacial Landscapes (Processes and Landforms)',
      ],
      2: [
        '2A – Urban Issues and Challenges: Global Urbanisation',
        '2A – Urban Issues and Challenges: UK City Case Study',
        '2A – Urban Issues and Challenges: Developing World City Case Study',
        '2B – The Changing Economic World: Measuring Development (HDI, GNI)',
        '2B – The Changing Economic World: Causes of Uneven Development',
        '2B – The Changing Economic World: Reducing the Development Gap (Aid, Trade, Tourism)',
        '2B – The Changing Economic World: Nigeria Case Study',
        '2B – The Changing Economic World: Post-Industrial UK Economy',
        '2C – The Challenge of Resource Management: Global Food Resources',
        '2C – The Challenge of Resource Management: Global Water Resources',
        '2C – The Challenge of Resource Management: Global Energy Resources',
      ],
      3: [
        '3A – Issue Evaluation: Pre-Release Booklet Analysis',
        '3B – Fieldwork: Physical Environment Investigation',
        '3B – Fieldwork: Human Environment Investigation',
        '3C – Geographical Skills: Atlas and Map Skills',
        '3C – Geographical Skills: Graphs and Statistical Skills',
        '3C – Geographical Skills: Ordnance Survey Map Skills',
      ],
    }},

    'History': { papers: {
      1: [
        'Period Study – Medicine in Britain c.1250–Present: Medieval Medicine',
        'Period Study – Medicine in Britain: Renaissance Medicine',
        'Period Study – Medicine in Britain: Industrial Revolution and Germ Theory',
        'Period Study – Medicine in Britain: Modern Medicine (20th Century)',
        'Period Study – Medicine in Britain: Key Individuals (Harvey, Jenner, Pasteur, Lister, Fleming)',
        'Historic Environment – The British Sector of the Western Front 1914–18',
      ],
      2: [
        'Wider World Depth Study – Germany 1890–1945: Kaiser Wilhelm II and the Second Reich',
        'Wider World Depth Study – Germany 1890–1945: The Weimar Republic and Economic Crises',
        'Wider World Depth Study – Germany 1890–1945: Rise of the Nazi Party',
        'Wider World Depth Study – Germany 1890–1945: Nazi Consolidation of Power 1933–34',
        'Wider World Depth Study – Germany 1890–1945: Life in Nazi Germany',
        'British Depth Study – Elizabethan England c.1568–1603: Elizabeth I and Government',
        'British Depth Study – Elizabethan England: The Religious Settlement',
        'British Depth Study – Elizabethan England: Mary Queen of Scots and Plots',
        'British Depth Study – Elizabethan England: Exploration and the Spanish Armada',
        'British Depth Study – Elizabethan England: Education and Popular Culture',
        'Conflict and Tension 1894–1918: Alliance Systems, Militarism and Imperialism',
        'Conflict and Tension 1894–1918: Assassination of Franz Ferdinand',
        'Conflict and Tension 1894–1918: Events Leading to WWI',
        'Conflict and Tension 1918–1939: Peacemaking and the Treaty of Versailles',
        'Conflict and Tension 1918–1939: The League of Nations',
        'Conflict and Tension 1918–1939: The Road to War',
      ],
    }},

    'Religious Studies': { papers: {
      1: [
        'Christianity – Beliefs: The Nature of God (Omnipotent, Omniscient, Omnipresent)',
        'Christianity – Beliefs: The Trinity',
        'Christianity – Beliefs: Creation and the Fall',
        'Christianity – Beliefs: Incarnation and the Nature of Jesus Christ',
        'Christianity – Beliefs: Salvation, Atonement and Redemption',
        'Christianity – Beliefs: Afterlife and Eschatology',
        'Christianity – Practices: Worship (Liturgical and Non-Liturgical)',
        'Christianity – Practices: Prayer and The Lord\'s Prayer',
        'Christianity – Practices: Sacraments (Baptism and Eucharist)',
        'Christianity – Practices: Pilgrimage and Celebrations (Christmas and Easter)',
        'Christianity – Practices: The Role of the Church in the Local and Wider Community',
        'Islam – Beliefs: The Six Articles of Faith',
        'Islam – Beliefs: The Nature of Allah (Tawhid)',
        'Islam – Beliefs: Angels, Prophethood and Holy Books',
        'Islam – Beliefs: Akhirah (Life After Death) and Predestination (Al-Qadr)',
        'Islam – Beliefs: Sunni and Shi\'a Differences',
        'Islam – Practices: The Five Pillars (Shahadah, Salah, Sawm, Zakah, Hajj)',
        'Islam – Practices: Jihad (Greater and Lesser)',
        'Islam – Practices: Celebrations (Id-ul-Fitr and Id-ul-Adha)',
      ],
      2: [
        'Theme A – Relationships and Families: Roles of Men and Women',
        'Theme A – Relationships and Families: Marriage, Cohabitation and Divorce',
        'Theme A – Relationships and Families: Sexual Relationships and Contraception',
        'Theme A – Relationships and Families: Family Structure and the Nature of Families',
        'Theme B – Religion and Life: The Origins and Value of the Universe',
        'Theme B – Religion and Life: The Origins and Value of Human Life (Abortion)',
        'Theme B – Religion and Life: Euthanasia and the Sanctity of Life',
        'Theme B – Religion and Life: Animal Rights and the Environment',
        'Theme D – Religion, Peace and Conflict: Violence, Terrorism and War',
        'Theme D – Religion, Peace and Conflict: Just War Theory',
        'Theme D – Religion, Peace and Conflict: Holy War and Pacifism',
        'Theme E – Religion, Crime and Punishment: Crime, Its Causes and Attitudes',
        'Theme E – Religion, Crime and Punishment: Aims of Punishment',
        'Theme E – Religion, Crime and Punishment: Forgiveness and the Death Penalty',
        'Theme F – Religion, Human Rights and Social Justice: Prejudice and Discrimination',
        'Theme F – Religion, Human Rights and Social Justice: Wealth, Poverty and Social Justice',
      ],
    }},

    'Psychology': { papers: {
      1: [
        'Cognition and Development – Piaget\'s Theory of Cognitive Development',
        'Cognition and Development – Willingham\'s Learning Theory',
        'Cognition and Development – Baron-Cohen\'s Study and Autism Spectrum Disorder',
        'Social Context and Behaviour – Milgram\'s Obedience Studies',
        'Social Context and Behaviour – Haney, Banks and Zimbardo Prison Study',
        'Social Context and Behaviour – Piliavin\'s Bystander Behaviour Study',
        'Social Context and Behaviour – Social Learning Theory (Bandura)',
      ],
      2: [
        'Brain and Neuropsychology – The Nervous System (Central and Peripheral)',
        'Brain and Neuropsychology – Brain Structure and Function (Lobes)',
        'Brain and Neuropsychology – Neurological Damage and Effects',
        'Brain and Neuropsychology – Tulving\'s Theory of Memory',
        'Psychological Problems – Depression (Characteristics, Explanations, Treatments)',
        'Psychological Problems – Addiction (Behavioural and Biological Explanations)',
        'Research Methods – Types of Research (Experiment, Observation, Questionnaire)',
        'Research Methods – Research Design (Hypothesis, Variables, Sampling)',
        'Research Methods – Data Analysis (Quantitative and Qualitative)',
        'Research Methods – Ethical Considerations',
      ],
    }},

    'Sociology': { papers: {
      1: [
        'The Sociology of Families: Changing Family Structures and Types',
        'The Sociology of Families: Roles and Relationships within Families',
        'The Sociology of Families: Demographic Changes',
        'The Sociology of Families: Sociological Perspectives on the Family',
        'The Sociology of Education: Role and Purpose of Education',
        'The Sociology of Education: Sociological Perspectives on Education',
        'The Sociology of Education: Differential Achievement by Social Class',
        'The Sociology of Education: Differential Achievement by Gender',
        'The Sociology of Education: Differential Achievement by Ethnicity',
        'Research Methods: Types of Research and Data',
        'Research Methods: Ethical Considerations in Sociological Research',
      ],
      2: [
        'The Sociology of Crime and Deviance: Defining Crime and Deviance',
        'The Sociology of Crime and Deviance: Crime Statistics and their Limitations',
        'The Sociology of Crime and Deviance: Sociological Explanations for Crime',
        'The Sociology of Crime and Deviance: Social Control',
        'Social Stratification: Social Class, Inequality and Life Chances',
        'Social Stratification: Gender and Inequality',
        'Social Stratification: Ethnicity and Inequality',
        'Social Stratification: Power and Poverty',
        'Research Methods in Context: Applying Methods to Crime and Stratification',
      ],
    }},

    'Business Studies': { papers: {
      1: [
        '1.1 – Enterprise and Entrepreneurship: Role of Entrepreneurs and the Purpose of Business',
        '1.1 – Enterprise and Entrepreneurship: Business Ideas, Opportunity and Risk',
        '1.2 – Spotting a Business Opportunity: Customer Needs and Market Research',
        '1.2 – Spotting a Business Opportunity: Market Segmentation and the Competitive Environment',
        '1.3 – Putting a Business Idea into Practice: Business Aims and Objectives',
        '1.3 – Putting a Business Idea into Practice: Revenue, Costs and Profit',
        '1.3 – Putting a Business Idea into Practice: Cash Flow Forecasting',
        '1.3 – Putting a Business Idea into Practice: Sources of Finance',
        '1.4 – Making the Business Effective: Location and Legal Structure',
        '1.4 – Making the Business Effective: The Marketing Mix (4Ps)',
        '1.4 – Making the Business Effective: Business Plans',
        '1.5 – Understanding External Influences on Business: Stakeholders',
        '1.5 – Understanding External Influences on Business: Technology',
        '1.5 – Understanding External Influences on Business: Legislation (Consumer and Employment)',
        '1.5 – Understanding External Influences on Business: The Economy',
        '1.5 – Understanding External Influences on Business: Ethics and the Environment',
      ],
      2: [
        '2.1 – Growing the Business: Methods of Business Growth',
        '2.1 – Growing the Business: Public Limited Companies (PLCs)',
        '2.1 – Growing the Business: Globalisation and E-Commerce',
        '2.2 – Making Marketing Decisions: Product Life Cycle',
        '2.2 – Making Marketing Decisions: Branding and Promotion',
        '2.2 – Making Marketing Decisions: Pricing Strategies',
        '2.2 – Making Marketing Decisions: Distribution Channels',
        '2.3 – Making Operational Decisions: Business Operations and Processes',
        '2.3 – Making Operational Decisions: Quality Management',
        '2.3 – Making Operational Decisions: The Sales Process',
        '2.4 – Making Financial Decisions: Revenue, Profit and Return on Investment',
        '2.4 – Making Financial Decisions: Understanding Financial Statements',
        '2.5 – Making Human Resource Decisions: Organisational Structures',
        '2.5 – Making Human Resource Decisions: Recruitment and Selection',
        '2.5 – Making Human Resource Decisions: Motivation and Retention',
        '2.5 – Making Human Resource Decisions: Training and Development',
      ],
    }},

    'Economics': { papers: {
      1: [
        'Theme 1 – How Markets Work: The Economic Problem and Resource Allocation',
        'Theme 1 – How Markets Work: Demand (Factors Affecting Demand)',
        'Theme 1 – How Markets Work: Supply (Factors Affecting Supply)',
        'Theme 1 – How Markets Work: Price Determination (Market Equilibrium)',
        'Theme 1 – How Markets Work: Price Elasticity of Demand and Supply',
        'Theme 1 – How Markets Work: Market Failure (Externalities, Public Goods)',
        'Theme 1 – How Markets Work: Government Intervention in Markets',
      ],
      2: [
        'Theme 2 – How the Economy Works: Economic Activity (GDP and Standard of Living)',
        'Theme 2 – How the Economy Works: Unemployment (Types and Causes)',
        'Theme 2 – How the Economy Works: Inflation (CPI, RPI and Causes)',
        'Theme 2 – How the Economy Works: Economic Growth and Business Cycle',
        'Theme 2 – How the Economy Works: Fiscal Policy',
        'Theme 2 – How the Economy Works: Monetary Policy',
        'Theme 2 – How the Economy Works: International Trade and Exchange Rates',
        'Application of Economic Data and Stimulus Material',
      ],
    }},

    'French': { papers: {
      1: [
        'Listening – Theme 1: Identity and Culture (Family, Relationships, Technology, Free Time)',
        'Listening – Theme 2: Local Area, Holiday and Travel',
        'Listening – Theme 3: School, Future Plans and Employment',
        'Listening – Theme 4: International and Global Issues',
        'Listening – Phonics and Pronunciation Recognition',
      ],
      2: [
        'Speaking – Role Play (Formal and Informal Scenarios)',
        'Speaking – Photo Card Description and Discussion',
        'Speaking – General Conversation: Theme 1 (Identity and Culture)',
        'Speaking – General Conversation: Theme 2 (Local Area and Travel)',
        'Speaking – General Conversation: Theme 3 (School and Future Plans)',
        'Speaking – General Conversation: Theme 4 (Global Issues)',
      ],
      3: [
        'Reading – Theme 1: Identity and Culture',
        'Reading – Theme 2: Local Area, Holiday and Travel',
        'Reading – Theme 3: School, Future Plans and Work',
        'Reading – Theme 4: International and Global Issues',
        'Grammar – Present Tense (Regular and Irregular Verbs)',
        'Grammar – Perfect Tense (avoir and être Auxiliaries)',
        'Grammar – Imperfect Tense',
        'Grammar – Future Tense and Conditional',
        'Grammar – Reflexive Verbs',
        'Grammar – Modal Verbs (pouvoir, vouloir, devoir)',
        'Grammar – Conjunctions, Connectives and Word Order',
        'Vocabulary – All AQA Themes (AQA Vocabulary List)',
      ],
      4: [
        'Writing – Translation from English into French',
        'Writing – Structured Writing Task (Short and Extended Response)',
        'Writing – Open-Ended Writing Task',
        'Writing – Accuracy of Tenses and Grammar',
        'Writing – Range of Vocabulary and Structures',
      ],
    }},

    'German': { papers: {
      1: [
        'Listening – Theme 1: Identity and Culture (Family, Relationships, Technology, Free Time)',
        'Listening – Theme 2: Local Area, Holiday and Travel',
        'Listening – Theme 3: School, Future Plans and Employment',
        'Listening – Theme 4: International and Global Issues',
        'Listening – Phonics and Pronunciation Recognition',
      ],
      2: [
        'Speaking – Role Play (Formal and Informal Scenarios)',
        'Speaking – Photo Card Description and Discussion',
        'Speaking – General Conversation: Theme 1 (Identity and Culture)',
        'Speaking – General Conversation: Theme 2 (Local Area and Travel)',
        'Speaking – General Conversation: Theme 3 (School and Future Plans)',
        'Speaking – General Conversation: Theme 4 (Global Issues)',
      ],
      3: [
        'Reading – Theme 1: Identity and Culture',
        'Reading – Theme 2: Local Area, Holiday and Travel',
        'Reading – Theme 3: School, Future Plans and Work',
        'Reading – Theme 4: International and Global Issues',
        'Grammar – Present Tense (Regular and Irregular Verbs)',
        'Grammar – Perfect Tense (haben and sein)',
        'Grammar – Imperfect Tense',
        'Grammar – Future Tense and Conditional',
        'Grammar – Cases: Nominative, Accusative, Dative, Genitive',
        'Grammar – Articles and Adjective Endings',
        'Grammar – Modal Verbs',
        'Grammar – Conjunctions and Word Order (SVOMPT, Time-Manner-Place)',
        'Grammar – Relative and Subordinate Clauses',
        'Vocabulary – All AQA Themes (AQA Vocabulary List)',
      ],
      4: [
        'Writing – Translation from English into German',
        'Writing – Structured Writing Task (Short and Extended Response)',
        'Writing – Open-Ended Writing Task',
        'Writing – Accuracy of Tenses and Grammar',
        'Writing – Range of Vocabulary and Structures',
      ],
    }},

    'Spanish': { papers: {
      1: [
        'Listening – Theme 1: Identity and Culture (Family, Relationships, Technology, Free Time)',
        'Listening – Theme 2: Local Area, Holiday and Travel',
        'Listening – Theme 3: School, Future Plans and Employment',
        'Listening – Theme 4: International and Global Issues',
        'Listening – Phonics and Pronunciation Recognition',
      ],
      2: [
        'Speaking – Role Play (Formal and Informal Scenarios)',
        'Speaking – Photo Card Description and Discussion',
        'Speaking – General Conversation: Theme 1 (Identity and Culture)',
        'Speaking – General Conversation: Theme 2 (Local Area and Travel)',
        'Speaking – General Conversation: Theme 3 (School and Future Plans)',
        'Speaking – General Conversation: Theme 4 (Global Issues)',
      ],
      3: [
        'Reading – Theme 1: Identity and Culture',
        'Reading – Theme 2: Local Area, Holiday and Travel',
        'Reading – Theme 3: School, Future Plans and Work',
        'Reading – Theme 4: International and Global Issues',
        'Grammar – Present Tense (Regular and Irregular Verbs, Stem-Changing Verbs)',
        'Grammar – Preterite Tense',
        'Grammar – Imperfect Tense',
        'Grammar – Future Tense and Conditional',
        'Grammar – Reflexive Verbs',
        'Grammar – Ser and Estar',
        'Grammar – Modal Verbs (poder, querer, deber)',
        'Grammar – Conjunctions and Complex Sentence Structures',
        'Vocabulary – All AQA Themes (AQA Vocabulary List)',
      ],
      4: [
        'Writing – Translation from English into Spanish',
        'Writing – Structured Writing Task (Short and Extended Response)',
        'Writing – Open-Ended Writing Task',
        'Writing – Accuracy of Tenses and Grammar',
        'Writing – Range of Vocabulary and Structures',
      ],
    }},

    'Mandarin Chinese': { papers: {
      1: [
        'Listening – Theme 1: Identity and Culture',
        'Listening – Theme 2: Local Area, Holiday and Travel',
        'Listening – Theme 3: School, Future Plans and Employment',
        'Listening – Theme 4: International and Global Issues',
      ],
      2: [
        'Speaking – Role Play',
        'Speaking – Photo Card Description and Discussion',
        'Speaking – General Conversation (All Themes)',
      ],
      3: [
        'Reading – Theme 1: Identity and Culture',
        'Reading – Theme 2: Local Area, Holiday and Travel',
        'Reading – Theme 3: School, Future Plans and Work',
        'Reading – Theme 4: International and Global Issues',
        'Reading – Characters and Vocabulary Recognition',
      ],
      4: [
        'Writing – Structured Writing Task',
        'Writing – Open-Ended Writing Task',
        'Writing – Accuracy of Characters and Grammar',
      ],
    }},

    'Arabic': { papers: {
      1: [
        'Listening – Theme 1: Identity and Culture',
        'Listening – Theme 2: Local Area, Holiday and Travel',
        'Listening – Theme 3: School, Future Plans and Employment',
        'Listening – Theme 4: International and Global Issues',
      ],
      2: [
        'Speaking – Role Play',
        'Speaking – Photo Card Description and Discussion',
        'Speaking – General Conversation (All Themes)',
      ],
      3: [
        'Reading – Theme 1: Identity and Culture',
        'Reading – Theme 2: Local Area, Holiday and Travel',
        'Reading – Theme 3: School, Future Plans and Work',
        'Reading – Theme 4: International and Global Issues',
        'Reading – Script and Vocabulary Recognition',
      ],
      4: [
        'Writing – Translation from English into Arabic',
        'Writing – Structured Writing Task',
        'Writing – Open-Ended Writing Task',
        'Writing – Accuracy of Script and Grammar',
      ],
    }},

    'Polish': { papers: {
      1: ['Listening – Identity and Culture', 'Listening – Local Area and Travel', 'Listening – School and Future Plans', 'Listening – Global Issues'],
      2: ['Speaking – Role Play', 'Speaking – Photo Card', 'Speaking – General Conversation'],
      3: ['Reading – All Themes', 'Grammar – Tenses and Cases', 'Vocabulary – All AQA Themes'],
      4: ['Writing – Translation into Polish', 'Writing – Structured and Open-Ended Tasks'],
    }},

    'Urdu': { papers: {
      1: ['Listening – Identity and Culture', 'Listening – Local Area and Travel', 'Listening – School and Future Plans', 'Listening – Global Issues'],
      2: ['Speaking – Role Play', 'Speaking – Photo Card', 'Speaking – General Conversation'],
      3: ['Reading – All Themes', 'Reading – Script and Vocabulary Recognition', 'Grammar – Verb Tenses and Agreement'],
      4: ['Writing – Translation into Urdu', 'Writing – Structured and Open-Ended Tasks'],
    }},

    'Art & Design': { papers: {
      1: [
        'Component 1 – Portfolio: Developing and Refining Ideas',
        'Component 1 – Portfolio: Recording and Observational Drawing',
        'Component 1 – Portfolio: Experimenting with Materials and Techniques',
        'Component 1 – Portfolio: Personal Response and Final Outcome',
        'Component 1 – Portfolio: Use of Critical and Contextual Sources',
        'Assessment Objective 1 (AO1) – Develop: Research and Contextual Sources',
        'Assessment Objective 2 (AO2) – Explore: Experimentation with Media and Techniques',
        'Assessment Objective 3 (AO3) – Record: Observational and Analytical Work',
        'Assessment Objective 4 (AO4) – Present: Personal and Meaningful Response',
      ],
      2: [
        'Component 2 – Externally Set Assignment: Preparatory Period',
        'Component 2 – Externally Set Assignment: 10-Hour Supervised Time',
        'Component 2 – Externally Set Assignment: Realising Intentions in Final Piece',
        'Component 2 – AO1: Developing Ideas from Starting Point',
        'Component 2 – AO2: Exploring Materials and Processes in Response to Brief',
        'Component 2 – AO3: Recording Visual Information',
        'Component 2 – AO4: Presenting a Personal Response',
      ],
    }},

    'Drama': { papers: {
      1: [
        'Component 1 – Understanding Drama: Study of a Set Play',
        'Component 1 – Understanding Drama: Live Theatre Evaluation',
        'Component 1 – Set Play Knowledge (Plot, Character, Themes)',
        'Component 1 – Theatrical Roles: Actor, Director, Designer',
        'Component 1 – Staging: Types of Staging (Proscenium, Thrust, In the Round)',
        'Component 1 – Design Elements: Lighting, Sound, Set, Costume',
        'Component 1 – Evaluating Live Theatre: Writing Analytically about Performance',
      ],
      2: [
        'Component 2 – Devising Drama (Non-Exam Assessment)',
        'Component 2 – Devising Process: Research, Development and Refinement',
        'Component 2 – Performance Skills: Voice, Movement, Character',
        'Component 2 – Portfolio: Documenting the Devising Process',
      ],
      3: [
        'Component 3 – Texts in Practice: Scene Performance (Two Extracts)',
        'Component 3 – Interpreting Script for Performance',
        'Component 3 – Use of Performance Space and Staging',
        'Component 3 – Collaboration and Ensemble Work',
      ],
    }},

    'Music': { papers: {
      1: [
        'Listening – Area of Study 1: Western Classical Tradition 1650–1910',
        'Listening – Area of Study 2: Popular Music (Rock, Pop, Blues, Jazz)',
        'Listening – Area of Study 3: Traditional Music (Folk, World)',
        'Listening – Area of Study 4: Western Classical Tradition since 1910 / Film Music / Jazz',
        'Listening – Musical Elements: Rhythm and Metre',
        'Listening – Musical Elements: Melody and Pitch',
        'Listening – Musical Elements: Harmony and Tonality',
        'Listening – Musical Elements: Texture and Structure',
        'Listening – Musical Elements: Timbre and Dynamics',
        'Listening – Musical Notation and Dictation',
        'Performance (Non-Exam Assessment): Solo and/or Ensemble Performance',
        'Composition (Non-Exam Assessment): Composition to a Brief and Free Composition',
      ],
    }},

    'Physical Education': { papers: {
      1: [
        '3.1 – Applied Anatomy and Physiology: The Skeletal System',
        '3.1 – Applied Anatomy and Physiology: The Muscular System',
        '3.1 – Applied Anatomy and Physiology: The Cardiovascular System',
        '3.1 – Applied Anatomy and Physiology: The Respiratory System',
        '3.1 – Applied Anatomy and Physiology: Energy Systems (ATP, Aerobic, Anaerobic)',
        '3.2 – Movement Analysis: Lever Systems',
        '3.2 – Movement Analysis: Planes and Axes of Movement',
        '3.3 – Physical Training: Components of Fitness (Health-Related and Skill-Related)',
        '3.3 – Physical Training: Principles of Training (FITT, Overload, Reversibility)',
        '3.3 – Physical Training: Methods of Training',
        '3.3 – Physical Training: Evaluating and Improving Performance',
      ],
      2: [
        '3.4 – Sports Psychology: Skill Classification',
        '3.4 – Sports Psychology: Goal Setting (SMART)',
        '3.4 – Sports Psychology: Mental Preparation (Arousal, Anxiety)',
        '3.5 – Socio-Cultural Influences: Engagement Patterns in Physical Activity',
        '3.5 – Socio-Cultural Influences: Commercialisation of Physical Activity',
        '3.5 – Socio-Cultural Influences: Ethics in Sport (Drugs, Violence)',
        '3.6 – Health, Fitness and Wellbeing: Physical, Emotional and Social Health',
        '3.6 – Health, Fitness and Wellbeing: Diet and Nutrition for Sport',
        'Practical Performance (Non-Exam Assessment)',
        'Analysis and Evaluation of Performance (Non-Exam Assessment)',
      ],
    }},

    'Food Preparation & Nutrition': { papers: {
      1: [
        'Food Commodities: Cereals and Cereal Products',
        'Food Commodities: Fruit and Vegetables',
        'Food Commodities: Milk, Cheese and Eggs',
        'Food Commodities: Meat, Fish and Alternatives',
        'Food Commodities: Fats, Oils and Sugars',
        'Principles of Nutrition: Macronutrients (Carbohydrates, Proteins, Fats)',
        'Principles of Nutrition: Micronutrients (Vitamins and Minerals)',
        'Principles of Nutrition: Water and Dietary Fibre',
        'Diet and Good Health: Nutritional Needs Across Life Stages',
        'Diet and Good Health: Diet-Related Conditions',
        'The Science of Food: Food Spoilage and Preservation',
        'The Science of Food: Functional and Chemical Properties of Food',
        'Where Food Comes From: Food Provenance and Sustainability',
        'Where Food Comes From: Food Processing and Production',
        'Cooking and Food Preparation: Cooking Methods and Effects',
        'Cooking and Food Preparation: Knife Skills and Equipment',
        'NEA 1 – Food Investigation Task (Written Report)',
        'NEA 2 – Food Preparation Assessment (Practical)',
      ],
    }},

    'Design & Technology': { papers: {
      1: [
        'Core Technical Principles: New and Emerging Technologies',
        'Core Technical Principles: Energy Generation and Storage',
        'Core Technical Principles: Mechanical Devices and Systems',
        'Core Technical Principles: Materials and their Working Properties (Metals, Polymers, Textiles, Paper/Board, Timber)',
        'Core Technical Principles: Ecological and Social Footprint',
        'Specialist Technical Principles: Scales of Production',
        'Specialist Technical Principles: Specialist Materials and Processes',
        'Designing and Making Principles: Design Strategies',
        'Designing and Making Principles: Communication of Design Ideas',
        'Designing and Making Principles: Prototyping and Testing',
        'Designing and Making Principles: Health and Safety in Manufacturing',
        'Non-Exam Assessment (NEA): Design and Make Task',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'Section A – Exploring the Media: Media Language (Semiotics, Genre, Narrative)',
        'Section A – Exploring the Media: Media Representations (Selection, Construction, Stereotypes)',
        'Section A – Exploring the Media: Media Industries (Ownership and Control)',
        'Section A – Exploring the Media: Media Audiences (Passive and Active Audience Theories)',
        'Section A – Set Products: Newspapers (The Guardian / Daily Mirror)',
        'Section A – Set Products: Advertising and Marketing',
        'Section A – Set Products: Music Video',
        'Section A – Set Products: Online and Social Media',
      ],
      2: [
        'Section B – Understanding Media Forms: Television (Crime Drama Set Products)',
        'Section B – Understanding Media Forms: Film Marketing (Posters, Trailers)',
        'Section B – Understanding Media Forms: Radio (BBC Radio vs Commercial)',
        'Section B – Understanding Media Forms: Video Games (Industry and Representation)',
        'Component 2 – Creating Media Products (Non-Exam Assessment)',
      ],
    }},

    'Engineering': { papers: {
      1: [
        'Engineering Principles: Forces, Levers and Mechanisms',
        'Engineering Principles: Electrical Circuits and Components',
        'Engineering Principles: Materials and their Properties',
        'Engineering Principles: Manufacturing Processes',
        'Engineering in Context: New and Emerging Technologies',
        'Engineering in Context: Environmental Impact of Engineering',
        'NEA: Engineering Design and Make Task',
      ],
    }},

    'Film Studies': { papers: {
      1: [
        'Exploring Film: Key Film Concepts (Narrative, Genre, Representation)',
        'Exploring Film: Film Language (Mise-en-scène, Cinematography, Editing, Sound)',
        'Exploring Film: British Cinema Set Film',
        'Exploring Film: Hollywood Cinema Set Film',
        'Exploring Film: Global Cinema Set Film',
      ],
      2: [
        'Understanding Film Contexts: Film Industries (Hollywood and British)',
        'Understanding Film Contexts: Film Audiences',
        'Short Film Studies (Non-Exam Assessment)',
      ],
    }},

    'Sociology (AQA)': { papers: {
      1: [
        'The Sociology of Families: Changing Family Structures',
        'The Sociology of Education: Role of Education',
        'Research Methods',
      ],
      2: [
        'The Sociology of Crime and Deviance',
        'Social Stratification',
        'Research Methods in Context',
      ],
    }},

  }, // end AQA

  // ── Edexcel ────────────────────────────────────────────────────────────────
  Edexcel: {

    'Mathematics': { papers: {
      1: [
        'Number – Calculations, Checking and Rounding',
        'Number – Indices, Roots, Reciprocals and Hierarchy of Operations',
        'Number – Factors, Multiples, Primes and Standard Form',
        'Number – Fractions, Decimals and Percentages',
        'Algebra – Notation, Formulae and Identities',
        'Algebra – Graphs, Tables and Charts',
        'Algebra – Sequences',
        'Ratio, Proportion and Rates of Change',
        'Geometry – Angles, Polygons and Parallel Lines',
        'Geometry – Circles and Constructions',
        'Statistics and Probability',
      ],
      2: [
        'Number – Surds and Bounds',
        'Algebra – Equations and Inequalities',
        'Algebra – Quadratics (Factorising and the Quadratic Formula)',
        'Algebra – Simultaneous Equations',
        'Geometry – Pythagoras Theorem',
        'Geometry – Trigonometry (SOH CAH TOA)',
        'Geometry – Transformations',
        'Statistics – Scatter Graphs and Correlation',
        'Probability – Combined Events and Tree Diagrams',
      ],
      3: [
        'Algebra – Further Graphs (Cubic, Exponential, Reciprocal)',
        'Algebra – Transformations of Functions (Higher)',
        'Algebra – Proof (Higher)',
        'Geometry – Circle Theorems (Higher)',
        'Geometry – Vectors (Higher)',
        'Statistics – Cumulative Frequency and Histograms',
        'Trigonometry – Sine Rule and Cosine Rule (Higher)',
      ],
    }},

    'English Language': { papers: {
      1: [
        'Paper 1 – Fiction and Imaginative Writing',
        'Reading – Inference and Deduction from 20th/21st Century Fiction',
        'Reading – Language Analysis: Writer\'s Methods (Fiction)',
        'Reading – Structural Analysis',
        'Reading – Critical Evaluation',
        'Writing – Imaginative and Descriptive Writing (Response to Image or Text)',
        'Writing – Technical Accuracy (SPaG)',
      ],
      2: [
        'Paper 2 – Non-Fiction and Transactional Writing',
        'Reading – Inference and Deduction from Non-Fiction',
        'Reading – Language Analysis: Writer\'s Methods (Non-Fiction)',
        'Reading – Comparison and Synthesis of Two Non-Fiction Texts',
        'Writing – Transactional Writing (Letter, Article, Speech, Report)',
        'Writing – Tone, Register and Purpose',
        'Writing – Technical Accuracy (SPaG)',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'Shakespeare Set Text – Character, Theme and Context',
        'Shakespeare Set Text – Language and Structure Analysis',
        'Post-1914 British Novel or Play – Character, Theme and Context',
        'Post-1914 British Novel or Play – Language and Structure',
        'Essay Technique: Embedding Quotations and Analytical Writing',
      ],
      2: [
        '19th-Century Novel – Character, Theme and Victorian Context',
        '19th-Century Novel – Language and Structure Analysis',
        'Poetry Anthology – Individual Poems (Conflict Collection)',
        'Poetry Anthology – Comparing Poems (Theme and Method)',
        'Unseen Poetry – Analysing an Unfamiliar Poem',
        'Unseen Poetry – Comparing Two Unseen Poems',
      ],
    }},

    'Biology': { papers: {
      1: [
        'Topic 1 – Key Concepts in Biology: Cell Structure and Organisation',
        'Topic 1 – Key Concepts: Biological Molecules',
        'Topic 1 – Key Concepts: Enzyme Action and Factors Affecting Enzymes',
        'Topic 2 – Cells and Control: Mitosis and the Cell Cycle',
        'Topic 2 – Cells and Control: Growth and Differentiation',
        'Topic 2 – Cells and Control: The Nervous System',
        'Topic 3 – Genetics: Meiosis and Variation',
        'Topic 3 – Genetics: Monohybrid Inheritance and Punnett Squares',
        'Topic 3 – Genetics: Genetic Disorders',
        'Topic 4 – Natural Selection and Genetic Modification: Evolution and Natural Selection',
        'Topic 4 – Natural Selection and Genetic Modification: Classification',
        'Topic 4 – Natural Selection and Genetic Modification: Genetic Engineering',
        'Topic 5 – Health, Disease and Medicines: Communicable Diseases',
        'Topic 5 – Health, Disease and Medicines: Monoclonal Antibodies',
        'Topic 5 – Health, Disease and Medicines: Drug Development',
        'Topic 5 – Health, Disease and Medicines: Non-Communicable Diseases',
      ],
      2: [
        'Topic 1 – Key Concepts Revisited: Enzyme Investigations',
        'Topic 6 – Plant Structures: Photosynthesis',
        'Topic 6 – Plant Structures: Transport in Plants (Xylem and Phloem)',
        'Topic 6 – Plant Structures: Plant Hormones and Responses',
        'Topic 7 – Animal Coordination: Hormones and Homeostasis',
        'Topic 7 – Animal Coordination: Blood Glucose Regulation (Diabetes)',
        'Topic 7 – Animal Coordination: The Kidneys and Osmoregulation',
        'Topic 8 – Exchange and Transport in Animals: The Heart and Circulatory System',
        'Topic 8 – Exchange and Transport in Animals: The Lungs and Gas Exchange',
        'Topic 9 – Ecosystems and Material Cycles: Ecosystems and Interdependence',
        'Topic 9 – Ecosystems and Material Cycles: Nutrient Cycles',
        'Topic 9 – Ecosystems and Material Cycles: Biodiversity and Conservation',
      ],
    }},

    'Chemistry': { papers: {
      1: [
        'Topic 1 – Atomic Structure and the Periodic Table',
        'Topic 2 – Bonding, Structure and Properties of Matter: Ionic Bonding',
        'Topic 2 – Bonding: Covalent Bonding and Metallic Bonding',
        'Topic 2 – Structure: Giant Structures, Simple Molecules and Nanoparticles',
        'Topic 3 – Quantitative Chemistry: Moles, Empirical and Molecular Formula',
        'Topic 3 – Quantitative Chemistry: Limiting Reactants and Yield',
        'Topic 4 – Chemical Changes: Reactivity Series and Metal Extraction',
        'Topic 4 – Chemical Changes: Acids, Bases and Salts',
        'Topic 4 – Chemical Changes: Electrolysis',
        'Topic 5 – Energy Changes: Exothermic and Endothermic Reactions',
        'Topic 5 – Energy Changes: Bond Energies and Fuel Cells',
      ],
      2: [
        'Topic 1 – Key Concepts Revisited',
        'Topic 6 – Rates of Reaction and Equilibrium: Factors Affecting Rate',
        'Topic 6 – Rates of Reaction: Collision Theory and Catalysts',
        'Topic 6 – Equilibrium: Le Chatelier\'s Principle and the Haber Process',
        'Topic 7 – Organic Chemistry: Alkanes, Alkenes and Crude Oil',
        'Topic 7 – Organic Chemistry: Alcohols, Carboxylic Acids and Esters',
        'Topic 7 – Organic Chemistry: Addition and Condensation Polymers',
        'Topic 8 – Chemical Analysis: Purity, Chromatography and Identification Tests',
        'Topic 9 – Chemistry of the Atmosphere: Greenhouse Gases and Climate Change',
        'Topic 9 – Chemistry of the Atmosphere: Atmospheric Pollutants',
        'Topic 10 – Using Resources: Finite Resources, Water Treatment and LCA',
        'Topic 10 – Using Resources: Fertilisers and the Haber Process (Industry)',
      ],
    }},

    'Physics': { papers: {
      1: [
        'Topic 1 – Key Concepts of Physics: Units, Equations and Graphs',
        'Topic 2 – Motion and Forces: Speed, Velocity and Acceleration',
        'Topic 2 – Motion and Forces: Newton\'s Laws of Motion',
        'Topic 2 – Motion and Forces: Forces, Weight and Resultant Forces',
        'Topic 2 – Motion and Forces: Stopping Distances',
        'Topic 3 – Conservation of Energy: Energy Stores and Transfers',
        'Topic 3 – Conservation of Energy: Efficiency and Power',
        'Topic 4 – Waves: Properties of Waves',
        'Topic 4 – Waves: The Electromagnetic Spectrum',
        'Topic 4 – Waves: Sound Waves and Ultrasound',
        'Topic 5 – Light and the Electromagnetic Spectrum: Reflection and Refraction',
        'Topic 5 – Light: Lenses and Ray Diagrams (Higher)',
        'Topic 6 – Radioactivity: Atomic Structure and Nuclear Radiation',
        'Topic 6 – Radioactivity: Half-Life and Nuclear Equations',
        'Topic 6 – Radioactivity: Fission and Fusion',
        'Topic 7 – Astronomy: The Solar System and Beyond',
        'Topic 7 – Astronomy: Life Cycle of a Star',
        'Topic 7 – Astronomy: Red-Shift and the Big Bang',
      ],
      2: [
        'Topic 1 – Key Concepts Revisited',
        'Topic 8 – Energy: Forces Doing Work and Gravitational PE',
        'Topic 9 – Forces and their Effects: Moments and Pressure',
        'Topic 9 – Forces and their Effects: Circular Motion (Higher)',
        'Topic 10 – Electricity and Circuits: Circuit Components and Ohm\'s Law',
        'Topic 10 – Electricity: Series and Parallel Circuits',
        'Topic 10 – Electricity: Mains Electricity and the National Grid',
        'Topic 11 – Static Electricity: Electric Fields (Higher)',
        'Topic 12 – Magnetism and the Motor Effect: Permanent and Induced Magnets',
        'Topic 12 – Magnetism: Motor Effect and Fleming\'s Left-Hand Rule',
        'Topic 13 – Electromagnetic Induction: Generators and Transformers',
        'Topic 14 – Particle Model: States of Matter, Density and Specific Latent Heat',
        'Topic 15 – Forces and Matter: Elasticity and Hooke\'s Law',
        'Topic 15 – Forces and Matter: Pressure in Fluids',
      ],
    }},

    'Combined Science: Trilogy': { papers: {
      1: [
        'Biology Paper 1 – Topic 1: Key Concepts (Cell Structure, Enzymes, Biological Molecules)',
        'Biology Paper 1 – Topic 2: Cells and Control (Mitosis, Nervous System)',
        'Biology Paper 1 – Topic 3: Genetics (Meiosis, Inheritance)',
        'Biology Paper 1 – Topic 4: Natural Selection and Genetic Modification',
        'Biology Paper 1 – Topic 5: Health, Disease and Medicines',
      ],
      2: [
        'Biology Paper 2 – Topic 1: Key Concepts Revisited',
        'Biology Paper 2 – Topic 6: Plant Structures and Photosynthesis',
        'Biology Paper 2 – Topic 7: Animal Coordination and Homeostasis',
        'Biology Paper 2 – Topic 8: Exchange and Transport in Animals',
        'Biology Paper 2 – Topic 9: Ecosystems and Material Cycles',
      ],
      3: [
        'Chemistry Paper 1 – Topic 1: Atomic Structure and the Periodic Table',
        'Chemistry Paper 1 – Topic 2: Bonding, Structure and Properties',
        'Chemistry Paper 1 – Topic 3: Quantitative Chemistry',
        'Chemistry Paper 1 – Topic 4: Chemical Changes',
        'Chemistry Paper 1 – Topic 5: Energy Changes',
      ],
      4: [
        'Chemistry Paper 2 – Topic 1: Key Concepts Revisited',
        'Chemistry Paper 2 – Topic 6: Rates of Reaction and Equilibrium',
        'Chemistry Paper 2 – Topic 7: Organic Chemistry',
        'Chemistry Paper 2 – Topic 8: Chemical Analysis',
        'Chemistry Paper 2 – Topic 9: Chemistry of the Atmosphere',
        'Chemistry Paper 2 – Topic 10: Using Resources',
      ],
      5: [
        'Physics Paper 1 – Topic 1: Key Concepts of Physics',
        'Physics Paper 1 – Topic 2: Motion and Forces',
        'Physics Paper 1 – Topic 3: Conservation of Energy',
        'Physics Paper 1 – Topic 4: Waves',
        'Physics Paper 1 – Topic 5: Light and the EM Spectrum',
        'Physics Paper 1 – Topic 6: Radioactivity',
        'Physics Paper 1 – Topic 7: Astronomy',
      ],
      6: [
        'Physics Paper 2 – Topic 1: Key Concepts Revisited',
        'Physics Paper 2 – Topic 8: Energy – Forces Doing Work',
        'Physics Paper 2 – Topic 9: Forces and their Effects',
        'Physics Paper 2 – Topic 10: Electricity and Circuits',
        'Physics Paper 2 – Topic 12: Magnetism and the Motor Effect',
        'Physics Paper 2 – Topic 13: Electromagnetic Induction',
        'Physics Paper 2 – Topic 14: Particle Model',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        '1.1 – Algorithms: Computational Thinking (Decomposition, Abstraction, Algorithmic Thinking)',
        '1.1 – Algorithms: Representing Algorithms (Pseudocode and Flowcharts)',
        '1.1 – Algorithms: Searching Algorithms (Linear and Binary Search)',
        '1.1 – Algorithms: Sorting Algorithms (Bubble Sort, Merge Sort)',
        '1.2 – Programming: Variables, Constants and Data Types',
        '1.2 – Programming: Sequence, Selection and Iteration',
        '1.2 – Programming: Arrays and String Manipulation',
        '1.2 – Programming: Subroutines (Procedures and Functions)',
        '1.3 – Data: Binary, Denary and Hexadecimal Conversion',
        '1.3 – Data: Data Representation (Images, Sound, Text)',
        '1.3 – Data: Data Compression (Lossy and Lossless)',
        '1.4 – Computers: CPU Architecture and the Fetch-Decode-Execute Cycle',
        '1.4 – Computers: Memory and Storage (RAM, ROM, Secondary Storage)',
        '1.5 – Communication and the Internet: Networks (LAN, WAN, Topologies)',
        '1.5 – Communication: Protocols (TCP/IP, HTTP, HTTPS)',
        '1.5 – Communication: Network Security Threats and Prevention',
        '1.6 – The Bigger Picture: Ethical, Legal and Environmental Issues',
      ],
      2: [
        '2.1 – Algorithms and Programs: Applied Computational Thinking',
        '2.2 – Data and the CPU: Data Representation in Context',
        '2.3 – Networks in Practice: Applying Network Knowledge',
        'Programming Project (Non-Exam Assessment)',
      ],
    }},

    'Geography A': { papers: {
      1: [
        'Unit 1 – The Physical Environment: Coastal Change and Conflict',
        'Unit 1 – The Physical Environment: River Processes and Pressures',
        'Unit 1 – The Physical Environment: Glaciers as Water Stores',
        'Unit 1 – The Physical Environment: Tectonic Hazards',
        'Unit 1 – The Physical Environment: Weather and Climate',
      ],
      2: [
        'Unit 2 – The Human Environment: Urban Issues and Challenges',
        'Unit 2 – The Human Environment: The Development Gap',
        'Unit 2 – The Human Environment: Resource Management (Food, Water, Energy)',
      ],
      3: [
        'Unit 3 – Geographical Investigations: Coastal or River Fieldwork',
        'Unit 3 – Geographical Investigations: Urban or Rural Fieldwork',
        'Unit 3 – Geographical Investigations: Geographical Skills',
      ],
    }},

    'History': { papers: {
      1: [
        'Thematic Study and Historic Environment: Medicine in Britain c.1250–Present',
        'Thematic Study and Historic Environment: Migrants in Britain c.800–Present',
        'Thematic Study and Historic Environment: Crime and Punishment c.1000–Present',
        'Thematic Study and Historic Environment: Warfare and British Society c.1250–Present',
      ],
      2: [
        'Period Study: Early Elizabethan England 1558–88',
        'Period Study: The American West c.1835–95',
        'Period Study: Anglo-Saxon and Norman England c.1060–88',
        'British Depth Study (linked to Period Study)',
      ],
      3: [
        'Modern Depth Study: Weimar and Nazi Germany 1918–39',
        'Modern Depth Study: Mao\'s China 1945–76',
        'Modern Depth Study: The USA 1954–75: Conflict at Home and Abroad',
        'Modern Depth Study: The Soviet Union 1924–53',
      ],
    }},

    'Business Studies': { papers: {
      1: [
        'Theme 1 – Investigating Small Business: Enterprise and Entrepreneurs',
        'Theme 1 – Marketing: Understanding Customer Needs',
        'Theme 1 – Marketing: Market Research and Segmentation',
        'Theme 1 – Marketing: The Marketing Mix (4Ps)',
        'Theme 1 – Finance: Sources of Finance',
        'Theme 1 – Finance: Costs, Revenue and Profit',
        'Theme 1 – Finance: Break-Even Analysis',
        'Theme 1 – Finance: Cash Flow Forecasting',
        'Theme 1 – People: Organisational Structures',
        'Theme 1 – People: Recruitment and Selection',
        'Theme 1 – Operations: Business Operations and Quality',
        'Theme 1 – External Influences: Stakeholders, Technology and the Economy',
      ],
      2: [
        'Theme 2 – Building a Business: Methods of Business Growth',
        'Theme 2 – Building a Business: Globalisation and International Trade',
        'Theme 2 – Making Marketing Decisions: Product Life Cycle and Boston Matrix',
        'Theme 2 – Making Marketing Decisions: Price, Promotion and Place Strategies',
        'Theme 2 – Making Financial Decisions: Financial Statements (Income, Balance Sheet)',
        'Theme 2 – Making Financial Decisions: Ratio Analysis',
        'Theme 2 – Making Operational Decisions: Production Efficiency and Technology',
        'Theme 2 – Making HR Decisions: Motivation Theories and Retention',
        'Theme 2 – Making HR Decisions: Training and Development',
      ],
    }},

    'Economics': { papers: {
      1: [
        'Theme 1 – Introduction to Markets and Market Failure: The Economic Problem',
        'Theme 1 – Introduction to Markets: Demand and Supply',
        'Theme 1 – Introduction to Markets: Price Mechanism and Elasticity',
        'Theme 1 – Introduction to Markets: Market Failure (Externalities, Public Goods, Information Failure)',
        'Theme 1 – Introduction to Markets: Government Intervention',
      ],
      2: [
        'Theme 2 – The UK Economy – Performance and Policies: Macroeconomic Objectives',
        'Theme 2 – UK Economy: Aggregate Demand and Aggregate Supply',
        'Theme 2 – UK Economy: Economic Growth, Unemployment and Inflation',
        'Theme 2 – UK Economy: Fiscal Policy and Monetary Policy',
        'Theme 2 – UK Economy: International Trade and the Balance of Payments',
      ],
    }},

    'Psychology': { papers: {
      1: [
        'Social Influence: Types of Conformity (Internalisation, Identification, Compliance)',
        'Social Influence: Explanations for Conformity (Informational and Normative)',
        'Social Influence: Milgram\'s Obedience Studies and Situational Factors',
        'Social Influence: Dispositional Factors (Authoritarian Personality)',
        'Social Influence: Resistance to Social Influence',
        'Memory: The Multi-Store Model (Atkinson and Shiffrin)',
        'Memory: The Working Memory Model (Baddeley and Hitch)',
        'Memory: Types of Long-Term Memory (Episodic, Semantic, Procedural)',
        'Memory: Eyewitness Testimony (Misleading Information, Anxiety)',
        'Memory: The Cognitive Interview',
        'Attachment: Caregiver Interactions and Attachment Behaviours',
        'Attachment: Schaffer\'s Stages of Attachment',
        'Attachment: Ainsworth\'s Strange Situation and Types of Attachment',
        'Attachment: Cultural Variations in Attachment',
        'Attachment: Bowlby\'s Theory of Maternal Deprivation',
        'Psychopathology: Definitions of Abnormality',
        'Psychopathology: Characteristics of Phobias, Depression and OCD',
        'Psychopathology: Behavioural, Cognitive and Biological Treatments',
      ],
      2: [
        'Approaches: The Behaviourist Approach (Classical and Operant Conditioning)',
        'Approaches: Social Learning Theory (Bandura)',
        'Approaches: The Cognitive Approach',
        'Approaches: The Biological Approach',
        'Approaches: The Psychodynamic Approach (Freud)',
        'Biopsychology: The Nervous System (Central and Peripheral)',
        'Biopsychology: The Endocrine System and Fight-or-Flight Response',
        'Biopsychology: Brain Structure and Localisation of Function',
        'Biopsychology: Hemispheric Lateralisation and Split-Brain Research',
        'Biopsychology: Neuroimaging Techniques (fMRI, EEG)',
        'Research Methods: Experimental Methods (Lab, Field, Natural, Quasi)',
        'Research Methods: Non-Experimental Methods (Observations, Questionnaires, Interviews)',
        'Research Methods: Correlations and Case Studies',
        'Research Methods: Scientific Processes (Hypothesis, Variables, Sampling)',
        'Research Methods: Data Analysis (Descriptive and Inferential Statistics)',
        'Research Methods: Ethics in Psychology',
      ],
      3: [
        'Issues and Debates: Gender and Cultural Bias in Psychology',
        'Issues and Debates: Free Will and Determinism',
        'Issues and Debates: Reductionism vs Holism',
        'Issues and Debates: Nature vs Nurture',
        'Issues and Debates: Idiographic vs Nomothetic Approaches',
        'Option A – Relationships: Sexual Selection and Human Reproductive Behaviour',
        'Option A – Gender: Sex and Gender, Sex Role Stereotypes',
        'Option A – Cognition and Development: Piaget, Vygotsky, Baillargeon',
        'Option B – Schizophrenia: Classification, Biological and Psychological Explanations',
        'Option B – Eating Behaviour: Explanations for Food Preferences',
        'Option B – Stress: Physiological and Psychological Responses',
        'Option C – Aggression: Neural, Hormonal and Evolutionary Explanations',
        'Option C – Forensic Psychology: Offender Profiling and Turning to Crime',
        'Option C – Addiction: Nicotine and Gambling Disorders',
      ],
    }},

    'Religious Studies A': { papers: {
      1: [
        'Christianity – Beliefs and Teachings: The Nature of God',
        'Christianity – Beliefs and Teachings: The Trinity',
        'Christianity – Beliefs and Teachings: Creation',
        'Christianity – Beliefs and Teachings: Incarnation, Crucifixion and Resurrection',
        'Christianity – Beliefs and Teachings: Salvation and Life After Death',
        'Christianity – Practices: Forms of Worship (Liturgical, Non-Liturgical, Informal)',
        'Christianity – Practices: Sacraments (Baptism, Eucharist)',
        'Christianity – Practices: Prayer, Pilgrimage and Celebrations',
        'Christianity – Practices: The Role of the Church in the Local and World Community',
        'Islam – Beliefs and Teachings: The Six Articles of Faith',
        'Islam – Beliefs and Teachings: The Nature of Allah (Tawhid)',
        'Islam – Beliefs and Teachings: Angels, Prophethood and Revelation',
        'Islam – Beliefs and Teachings: Life After Death (Akhirah)',
        'Islam – Beliefs and Teachings: Sunni and Shi\'a Differences',
        'Islam – Practices: The Five Pillars',
        'Islam – Practices: Jihad, Prayer (Salah) and the Mosque',
        'Islam – Practices: Celebrations and Commemorations',
      ],
      2: [
        'Thematic Studies – Religion and Relationships',
        'Thematic Studies – Religion and Life',
        'Thematic Studies – The Existence of God and Revelation',
        'Thematic Studies – Religion and Conflict',
        'Thematic Studies – Religion, Crime and Punishment',
        'Thematic Studies – Religion, Human Rights and Social Justice',
      ],
    }},

    'Sociology': { papers: {
      1: [
        'Theory and Methodology: Key Sociological Perspectives (Functionalism, Marxism, Feminism, Interactionism)',
        'Theory and Methodology: Quantitative and Qualitative Research Methods',
        'Theory and Methodology: Sociological Research Design and Ethics',
        'The Sociology of Families: Changing Family Structures (Nuclear, Extended, Single Parent)',
        'The Sociology of Families: Conjugal Roles and Domestic Division of Labour',
        'The Sociology of Families: Demographic Changes',
        'The Sociology of Families: Theoretical Perspectives on Families',
        'The Sociology of Education: The Role and Function of Education',
        'The Sociology of Education: Factors Affecting Achievement (Class, Gender, Ethnicity)',
        'The Sociology of Education: Theoretical Perspectives on Education',
      ],
      2: [
        'The Sociology of Crime and Deviance: Defining Crime and Deviance',
        'The Sociology of Crime and Deviance: Crime Statistics (Official and Alternative)',
        'The Sociology of Crime and Deviance: Sociological Explanations for Crime',
        'The Sociology of Crime and Deviance: Social Control and Sanctions',
        'Social Stratification: Social Class, Inequality and Life Chances',
        'Social Stratification: Gender and Inequality',
        'Social Stratification: Ethnicity and Inequality',
        'Social Stratification: Poverty (Absolute and Relative)',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'Section 1 – Exploring the Media: Media Language (Semiotics, Narrative, Genre)',
        'Section 1 – Exploring the Media: Media Representations (Selection, Construction)',
        'Section 1 – Exploring the Media: Media Audiences (Active and Passive Theories)',
        'Section 1 – Exploring the Media: Media Industries (Ownership, Regulation, Funding)',
        'Section 1 – Set Products: Newspapers',
        'Section 1 – Set Products: Music Video',
        'Section 1 – Set Products: Advertising and Marketing',
        'Section 1 – Set Products: Online and Social Media',
      ],
      2: [
        'Section 2 – Understanding Media Forms: Television (Drama Set Products)',
        'Section 2 – Understanding Media Forms: Film Marketing',
        'Section 2 – Understanding Media Forms: Radio',
        'Section 2 – Understanding Media Forms: Video Games',
        'Non-Exam Assessment: Media Production Task',
      ],
    }},

    'Statistics': { papers: {
      1: [
        'Statistical Sampling: Census and Sampling Techniques',
        'Data Collection and Representation: Bar Charts, Pie Charts, Frequency Polygons',
        'Data Collection and Representation: Histograms and Cumulative Frequency',
        'Statistical Measures: Mean, Median, Mode, Range and IQR',
        'Scatter Diagrams: Correlation and Regression Lines',
        'Time Series: Trends and Seasonal Variation',
        'Index Numbers',
      ],
      2: [
        'Probability: Basic Probability, Venn Diagrams and Conditional Probability',
        'Probability: Binomial Distribution',
        'Statistical Inference: Hypothesis Testing',
        'Correlation: Spearman\'s Rank Correlation Coefficient',
      ],
    }},

    'Physical Education': { papers: {
      1: [
        'Anatomy and Physiology: The Skeletal System',
        'Anatomy and Physiology: The Muscular System',
        'Anatomy and Physiology: The Cardiovascular System',
        'Anatomy and Physiology: The Respiratory System',
        'Movement Analysis: Lever Systems',
        'Movement Analysis: Planes and Axes of Movement',
        'Physical Training: Components of Fitness',
        'Physical Training: Principles of Training',
        'Physical Training: Methods of Training',
        'Use of Data in Physical Education',
      ],
      2: [
        'Sports Psychology: Classification of Skills',
        'Sports Psychology: Information Processing Model',
        'Sports Psychology: Goal Setting (SMART Goals)',
        'Sports Psychology: Arousal, Anxiety and Performance',
        'Socio-Cultural Influences: Engagement Patterns in Sport',
        'Socio-Cultural Influences: Ethics and Values in Sport',
        'Health, Fitness and Wellbeing: Physical and Mental Wellbeing',
        'Health, Fitness and Wellbeing: Diet, Nutrition and Hydration',
      ],
    }},

    'Food Preparation & Nutrition': { papers: {
      1: [
        'Food, Nutrition and Health: Macronutrients (Carbohydrates, Proteins, Fats)',
        'Food, Nutrition and Health: Micronutrients (Vitamins and Minerals)',
        'Food, Nutrition and Health: Water, Fibre and Nutritional Needs',
        'Food, Nutrition and Health: Diet-Related Health Conditions',
        'Food Science: Functional and Chemical Properties of Food',
        'Food Science: Food Spoilage, Preservation and Safety',
        'Food Safety: Food Hygiene and Preventing Contamination',
        'Food Choice: Factors Affecting Food Choice (Cultural, Ethical, Environmental)',
        'Food Provenance: Food Sources, Seasons and Sustainability',
        'Food Provenance: Food Processing and Production Methods',
        'NEA 1 – Food Investigation Task',
        'NEA 2 – Food Preparation Assessment',
      ],
    }},

    'Design & Technology': { papers: {
      1: [
        'Core Technical Principles: Materials and their Properties (Metals, Polymers, Textiles, Paper/Board, Timber)',
        'Core Technical Principles: New and Emerging Technologies',
        'Core Technical Principles: Energy and Power Systems',
        'Core Technical Principles: Mechanical Devices and Systems',
        'Core Technical Principles: Ecological and Social Footprint',
        'Specialist Technical Principles (Focus Area: Metal / Polymers / Textiles / Electronic Products / Timber)',
        'Designing and Making Principles: Design Methods and Strategies',
        'Designing and Making Principles: Communication of Design Ideas',
        'Designing and Making Principles: Prototyping and Testing',
        'Designing and Making Principles: Commercial Manufacture',
        'Non-Exam Assessment (NEA): Design and Make Task',
      ],
    }},

    'Drama': { papers: {
      1: [
        'Component 1 – Devising Theatre (Portfolio and Performance)',
        'Component 1 – Devising Process: Research, Exploration and Development',
        'Component 1 – Devising: Performance Skills (Voice, Movement, Character)',
        'Component 1 – Portfolio: Documenting the Devising Process',
      ],
      2: [
        'Component 2 – Presenting and Performing Texts',
        'Component 2 – Scripted Performance: Interpreting Text',
        'Component 2 – Scripted Performance: Staging and Design Choices',
      ],
      3: [
        'Component 3 – Theatre Makers in Practice: Study of a Set Text',
        'Component 3 – Set Text Analysis: Character, Theme and Stage Directions',
        'Component 3 – Live Theatre Evaluation',
        'Component 3 – Theatre Conventions and Practitioners',
      ],
    }},

    'Music': { papers: {
      1: [
        'Area of Study 1 – Instrumental Music 1700–1820: Baroque and Classical Periods',
        'Area of Study 2 – Vocal Music: Art Song, Opera, Musical Theatre',
        'Area of Study 3 – Music for Stage and Screen: Film Music and Musical Theatre',
        'Area of Study 4 – Fusions: World Music, Jazz and Blues',
        'Musical Elements: Rhythm, Metre and Tempo',
        'Musical Elements: Melody, Pitch and Harmony',
        'Musical Elements: Texture and Tonality',
        'Musical Elements: Timbre, Dynamics and Structure',
        'Performance (Non-Exam Assessment)',
        'Composition (Non-Exam Assessment)',
      ],
    }},

    'Art & Design': { papers: {
      1: [
        'Component 1 – Portfolio (60%): AO1 – Develop Ideas through Research',
        'Component 1 – Portfolio: AO2 – Explore Materials, Techniques and Processes',
        'Component 1 – Portfolio: AO3 – Record and Analyse through Observational Work',
        'Component 1 – Portfolio: AO4 – Present a Personal and Meaningful Response',
      ],
      2: [
        'Component 2 – Externally Set Assignment (40%): Preparatory Study Period',
        'Component 2 – Externally Set Assignment: 10-Hour Supervised Time',
        'Component 2 – AO1–AO4 Applied to Set Brief',
      ],
    }},

  }, // end Edexcel

  // ── OCR ────────────────────────────────────────────────────────────────────
  OCR: {

    'Mathematics': { papers: {
      1: [
        'J560 Foundation Paper 1 or J560 Higher Paper 4 (Non-Calculator)',
        'Number: Integers, Fractions, Decimals, Percentages, Surds',
        'Algebra: Expressions, Equations, Inequalities, Sequences, Graphs',
        'Ratio, Proportion and Rates of Change',
        'Geometry: Properties of Shapes, Angles, Transformations, Mensuration',
        'Statistics: Data Presentation and Interpretation',
        'Probability',
      ],
      2: [
        'J560 Foundation Paper 2 or J560 Higher Paper 5 (Calculator)',
        'Number: Calculations, Standard Form, Bounds',
        'Algebra: Quadratics, Simultaneous Equations, Functions (Higher)',
        'Geometry: Trigonometry, Pythagoras, Vectors (Higher)',
        'Statistics: Scatter Graphs, Cumulative Frequency, Histograms',
      ],
      3: [
        'J560 Foundation Paper 3 or J560 Higher Paper 6 (Calculator)',
        'Synoptic Content Across All Number, Algebra, Geometry and Statistics Topics',
        'Higher: Circle Theorems, Proof, Further Algebra and Trigonometry',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        'J277/01 – 1.1 Systems Architecture: The CPU (ALU, CU, Registers, Cache)',
        'J277/01 – 1.1 Systems Architecture: Memory (RAM, ROM, Cache)',
        'J277/01 – 1.1 Systems Architecture: Secondary Storage (Optical, Magnetic, Solid State)',
        'J277/01 – 1.2 Networks and the Internet: Types of Networks (LAN, WAN)',
        'J277/01 – 1.2 Networks: Topologies, Protocols (TCP/IP, HTTP, HTTPS, FTP)',
        'J277/01 – 1.2 Networks: The Internet and WWW',
        'J277/01 – 1.2 Networks: Network Security (Phishing, Malware, Firewalls, Encryption)',
        'J277/01 – 1.3 Impacts of Digital Technology: Ethical Issues',
        'J277/01 – 1.3 Impacts: Legal Issues (Computer Misuse Act, Data Protection Act)',
        'J277/01 – 1.3 Impacts: Environmental and Privacy Issues',
      ],
      2: [
        'J277/02 – 2.1 Algorithms: Computational Thinking (Decomposition, Abstraction)',
        'J277/02 – 2.1 Algorithms: Designing Algorithms (Pseudocode and Flowcharts)',
        'J277/02 – 2.1 Algorithms: Searching (Linear and Binary Search)',
        'J277/02 – 2.1 Algorithms: Sorting (Bubble Sort, Merge Sort, Insertion Sort)',
        'J277/02 – 2.2 Programming Fundamentals: Variables, Data Types, Input/Output',
        'J277/02 – 2.2 Programming: Sequence, Selection and Iteration',
        'J277/02 – 2.2 Programming: Arrays, String Handling and File Handling',
        'J277/02 – 2.2 Programming: Subroutines (Procedures and Functions)',
        'J277/02 – 2.3 Producing Robust Programs: Defensive Design and Testing',
        'J277/02 – 2.4 Boolean Logic: Logic Gates (AND, OR, NOT), Truth Tables',
        'J277/02 – 2.5 Programming Languages: High/Low Level, Translators, IDEs',
        'J277/02 – Programming in Python (Practical Application)',
      ],
    }},

    'Biology A': { papers: {
      1: [
        'B1 – Cell Level Systems: Cell Structure and Organisation',
        'B1 – Cell Level Systems: Biological Molecules (Carbohydrates, Proteins, Lipids)',
        'B1 – Cell Level Systems: Enzyme Action and Factors Affecting Enzymes',
        'B1 – Cell Level Systems: Cell Membranes and Transport',
        'B1 – Cell Level Systems: Cell Division: Mitosis and Meiosis',
        'B2 – Scaling Up: Gas Exchange in Plants and Animals',
        'B2 – Scaling Up: Circulatory Systems in Animals',
        'B2 – Scaling Up: Transport in Plants (Xylem and Phloem)',
        'B3 – Organism Level Systems: The Nervous System and Neurones',
        'B3 – Organism Level Systems: Hormones and Homeostasis',
        'B3 – Organism Level Systems: Reproduction and Inheritance',
      ],
      2: [
        'B4 – Community Level Systems: Ecosystems and Interdependence',
        'B4 – Community Level Systems: Material Cycles (Carbon, Water, Nitrogen)',
        'B4 – Community Level Systems: Biodiversity and Conservation',
        'B5 – Genes, Inheritance and Selection: DNA Structure and Protein Synthesis',
        'B5 – Genes, Inheritance and Selection: Inheritance and Genetic Variation',
        'B5 – Genes, Inheritance and Selection: Natural Selection and Evolution',
        'B5 – Genes, Inheritance and Selection: Genetic Engineering and Biotechnology',
      ],
    }},

    'Chemistry A': { papers: {
      1: [
        'C1 – The Periodic Table: Atomic Structure and Electronic Configuration',
        'C1 – The Periodic Table: Periodic Trends (Groups 1, 7 and 0)',
        'C1 – The Periodic Table: Transition Metals',
        'C2 – Bonding and Structure: Ionic, Covalent and Metallic Bonding',
        'C2 – Bonding and Structure: Giant Structures vs Simple Molecules',
        'C2 – Bonding and Structure: Nanoparticles and Alloys',
        'C3 – Chemical Reactions: Chemical Equations and Formulae',
        'C3 – Chemical Reactions: Types of Reaction (Oxidation, Reduction, Displacement)',
        'C3 – Chemical Reactions: Acids, Bases and Salts',
        'C3 – Chemical Reactions: Quantitative Chemistry (Moles and Yield)',
        'C3 – Chemical Reactions: Electrolysis',
      ],
      2: [
        'C4 – Predicting and Identifying Reactions: Rates of Reaction and Collision Theory',
        'C4 – Predicting and Identifying Reactions: Reversible Reactions and Equilibrium',
        'C4 – Predicting and Identifying Reactions: Chemical Analysis and Identification',
        'C5 – Monitoring and Controlling Chemical Reactions: Energy Changes',
        'C5 – Monitoring and Controlling: Electrochemical Cells',
        'C6 – Global Challenges: Organic Chemistry (Crude Oil, Alkanes, Alkenes, Polymers)',
        'C6 – Global Challenges: Materials for a Purpose',
        'C6 – Global Challenges: Earth\'s Resources and Sustainability',
        'C6 – Global Challenges: The Atmosphere and Climate Change',
      ],
    }},

    'Physics A': { papers: {
      1: [
        'P1 – Motion: Distance-Time and Velocity-Time Graphs',
        'P1 – Motion: Newton\'s Laws and Forces',
        'P1 – Motion: Momentum and Stopping Distances',
        'P2 – Electricity: Circuit Components, Charge and Current',
        'P2 – Electricity: Series and Parallel Circuits and Ohm\'s Law',
        'P2 – Electricity: Mains Electricity and the National Grid',
        'P2 – Electricity: Static Electricity (Higher)',
        'P3 – Waves: Properties of Waves (Speed, Frequency, Wavelength, Amplitude)',
        'P3 – Waves: The Electromagnetic Spectrum',
        'P3 – Waves: Reflection, Refraction and Lenses (Higher)',
        'P3 – Waves: Sound and Ultrasound',
      ],
      2: [
        'P4 – Radioactivity: Atomic Structure and Nuclear Radiation (Alpha, Beta, Gamma)',
        'P4 – Radioactivity: Half-Life and Nuclear Equations',
        'P4 – Radioactivity: Nuclear Fission, Fusion and Hazards',
        'P5 – Energy: Energy Stores and Transfers',
        'P5 – Energy: Efficiency and Power',
        'P5 – Energy: Energy Resources (Renewable and Non-Renewable)',
        'P6 – Magnetism and Electromagnetism: Permanent and Induced Magnets',
        'P6 – Magnetism: Motor Effect and Fleming\'s Left-Hand Rule',
        'P6 – Magnetism: Electromagnetic Induction, Generators and Transformers',
        'P7 – Space (Higher): The Solar System, Stars and Cosmology',
      ],
    }},

    'Combined Science A': { papers: {
      1: [
        'Biology Paper 1 (J257/01): Cell Level Systems – Cell Structure, Enzymes, Membranes',
        'Biology Paper 1: Scaling Up – Gas Exchange, Circulatory System',
        'Biology Paper 1: Organism Level Systems – Nervous System, Homeostasis',
      ],
      2: [
        'Biology Paper 2 (J257/02): Community Level Systems – Ecosystems, Cycles',
        'Biology Paper 2: Genes, Inheritance and Selection – DNA, Inheritance, Evolution',
      ],
      3: [
        'Chemistry Paper 1 (J257/03): The Periodic Table, Bonding, Chemical Reactions',
        'Chemistry Paper 1: Acids, Bases, Electrolysis, Quantitative Chemistry',
      ],
      4: [
        'Chemistry Paper 2 (J257/04): Rates of Reaction, Equilibrium, Analysis',
        'Chemistry Paper 2: Organic Chemistry, Materials, Atmosphere',
      ],
      5: [
        'Physics Paper 1 (J257/05): Motion, Electricity, Waves',
      ],
      6: [
        'Physics Paper 2 (J257/06): Radioactivity, Energy, Magnetism, Space',
      ],
    }},

    'Geography A': { papers: {
      1: [
        'J383/01 – Living in the UK Today: Coastal Change and Conflict',
        'J383/01 – Living in the UK Today: River Processes and Pressures',
        'J383/01 – Living in the UK Today: The UK\'s Evolving Physical Landscape',
        'J383/01 – Living in the UK Today: The UK\'s Evolving Human Landscape',
      ],
      2: [
        'J383/02 – The World Around Us: Global Hazards (Tectonic and Atmospheric)',
        'J383/02 – The World Around Us: Climate Under Threat',
        'J383/02 – The World Around Us: Life on Earth (Ecosystems and Biodiversity)',
        'J383/02 – The World Around Us: Changing Economies (Development and Global Connections)',
      ],
      3: [
        'J383/03 – Geographical Skills and Fieldwork: OS Map Skills',
        'J383/03 – Geographical Skills and Fieldwork: Data Collection and Presentation',
        'J383/03 – Geographical Skills and Fieldwork: Two Fieldwork Investigations',
      ],
    }},

    'History A': { papers: {
      1: [
        'J410/01 – British History: Thematic Study (Change over Time in Britain)',
        'J410/01 – British History: Depth Study (Specific Period of British History)',
      ],
      2: [
        'J410/02 – Non-British History: Period Study',
        'J410/02 – Non-British History: Depth Study',
      ],
      3: [
        'J410/03 – History Around Us: Site Investigation (Historic Environment)',
        'J410/03 – Evaluating Historical Significance of a Site',
      ],
    }},

    'English Language': { papers: {
      1: [
        'J351/01 – Communicating Information and Ideas: Reading Two Non-Fiction Texts (19th and 21st Century)',
        'J351/01 – Reading: Synthesis, Comparison and Language Analysis',
        'J351/01 – Writing: Communicating Information and Ideas (Article, Letter, Report)',
        'J351/01 – Writing: Technical Accuracy (SPaG)',
      ],
      2: [
        'J351/02 – Exploring Effects and Impact: Reading Literary Fiction (20th or 21st Century)',
        'J351/02 – Reading: Language Analysis and Structural Analysis',
        'J351/02 – Reading: Evaluating the Impact of a Text',
        'J351/02 – Writing: Creative Writing (Descriptive or Narrative)',
        'J351/02 – Writing: Technical Accuracy (SPaG)',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'J352/01 – Exploring Modern and Literary Heritage Texts: Modern Prose or Drama (Post-1914)',
        'J352/01 – Modern Text: Character, Theme and Context',
        'J352/01 – 19th-Century Prose Fiction: Character, Theme and Victorian Context',
        'J352/01 – Essay Technique and Assessment Objectives',
      ],
      2: [
        'J352/02 – Exploring Poetry and Shakespeare: Shakespeare Play (Set Text)',
        'J352/02 – Shakespeare: Character, Language and Context',
        'J352/02 – Contemporary Poetry: Set Poems from the OCR Anthology',
        'J352/02 – Poetry Comparison Technique',
        'J352/02 – Unseen Poetry: Analysing an Unfamiliar Poem',
      ],
    }},

    'Religious Studies': { papers: {
      1: [
        'J625 – Beliefs and Teachings: Study of One Religion in Depth',
        'Christianity – Beliefs: The Nature of God, Trinity, Creation, Jesus, Salvation, Afterlife',
        'Christianity – Practices: Worship, Sacraments, Prayer, Pilgrimage, Role of the Church',
        'Islam – Beliefs: The Six Articles of Faith, Tawhid, Akhirah',
        'Islam – Practices: The Five Pillars, Jihad, Prayer and Worship',
        'Judaism – Beliefs: The Nature of God, Covenant, Messiah, Afterlife',
        'Judaism – Practices: Worship, The Synagogue, Shabbat, Festivals',
      ],
      2: [
        'J625 – Religion, Philosophy and Ethics in the Modern World',
        'Philosophy: Arguments for God\'s Existence (Cosmological, Teleological, Ontological)',
        'Philosophy: The Problem of Evil and Suffering',
        'Philosophy: Religious Experience and Revelation',
        'Ethics: Ethical Theories (Natural Law, Situation Ethics, Utilitarianism)',
        'Ethics: Sexual Ethics, Relationships and the Sanctity of Life',
        'Ethics: Religion and Science, Environmental Ethics',
        'Ethics: Social Justice, Wealth and Poverty',
      ],
    }},

    'Business Studies': { papers: {
      1: [
        'J204/01 – Business 1: Business Activity and the Business Environment',
        'J204/01 – Marketing: Understanding Customer Needs and Market Research',
        'J204/01 – Marketing: The Marketing Mix (4Ps)',
        'J204/01 – People: Organisational Structures, Recruitment and Motivation',
        'J204/01 – Finance: Sources of Finance, Costs, Revenue and Profit',
      ],
      2: [
        'J204/02 – Business 2: Operations Management and Production',
        'J204/02 – Operations: Quality Management and Supply Chain',
        'J204/02 – Finance: Financial Management and Decision Making',
        'J204/02 – External Influences: Economic Climate, Legislation, Globalisation, Ethics',
      ],
    }},

    'Economics': { papers: {
      1: [
        'J205/01 – Introduction to Economics: The Economic Problem',
        'J205/01 – Microeconomic Foundations: Demand, Supply and Market Equilibrium',
        'J205/01 – Microeconomic Foundations: Elasticity (PED and PES)',
        'J205/01 – Microeconomic Foundations: Market Failure (Externalities, Public Goods)',
        'J205/01 – Government Intervention: Taxes, Subsidies and Regulation',
      ],
      2: [
        'J205/02 – National and International Economics: Macroeconomic Indicators (GDP, Inflation, Unemployment)',
        'J205/02 – National Economics: Aggregate Demand and Aggregate Supply',
        'J205/02 – National Economics: Macroeconomic Policy (Fiscal, Monetary, Supply-Side)',
        'J205/02 – International Economics: Trade, Exchange Rates and Globalisation',
      ],
    }},

    'Drama': { papers: {
      1: [
        'J316 – Drama: Performance and Response (Written Paper)',
        'J316 – Set Play Analysis: Character, Theme and Context',
        'J316 – Set Play: Theatrical Conventions and Staging',
        'J316 – Live Theatre Evaluation: Analysing a Professional Performance',
        'Component 1 – Acting (Non-Exam Assessment): Performance Skills',
        'Component 2 – Devising (Non-Exam Assessment): Devising Process and Portfolio',
      ],
    }},

    'Music': { papers: {
      1: [
        'J536 – Listening and Appraising: Area of Study 1 – Western Classical Tradition',
        'J536 – Listening: Area of Study 2 – Popular Music',
        'J536 – Listening: Area of Study 3 – Music for Theatre (Musical Theatre)',
        'J536 – Listening: Area of Study 4 – World Music',
        'J536 – Musical Elements: Rhythm, Melody, Harmony, Texture, Timbre, Structure, Dynamics',
        'Performance (Non-Exam Assessment): Solo and Ensemble',
        'Composition (Non-Exam Assessment): Composition to a Brief',
      ],
    }},

    'Physical Education': { papers: {
      1: [
        'J587/01 – Physical Factors Affecting Performance: Applied Anatomy and Physiology',
        'J587/01 – Physical Factors: The Muscular and Skeletal Systems',
        'J587/01 – Physical Factors: The Cardiovascular and Respiratory Systems',
        'J587/01 – Physical Factors: Exercise Physiology and Training',
        'J587/01 – Physical Factors: Biomechanics (Levers, Planes and Axes)',
      ],
      2: [
        'J587/02 – Socio-Cultural Issues and Sports Psychology',
        'J587/02 – Sports Psychology: Skill Classification and Information Processing',
        'J587/02 – Sports Psychology: Goal Setting and Mental Preparation',
        'J587/02 – Socio-Cultural Issues: Sport and Society (Participation, Commercialisation)',
        'J587/02 – Socio-Cultural Issues: Technology in Sport',
        'Practical Performance (Non-Exam Assessment)',
      ],
    }},

    'Food Preparation & Nutrition': { papers: {
      1: [
        'J309/01 – Food Commodities: Cereals, Fruit and Vegetables, Dairy, Meat and Alternatives',
        'J309/01 – Nutrition: Macronutrients and Micronutrients',
        'J309/01 – Nutrition: Water, Fibre and Nutritional Needs Across Life Stages',
        'J309/01 – Diet and Health: Diet-Related Health Conditions',
        'J309/01 – Food Science: Functional and Chemical Properties of Food',
        'J309/01 – Food Safety: Food Spoilage, Hygiene and Storage',
        'J309/01 – Food Provenance: Sustainability, Seasons and Food Production',
        'J309 – NEA 1: Food Investigation Task',
        'J309 – NEA 2: Food Preparation Assessment',
      ],
    }},

    'Design & Technology': { papers: {
      1: [
        'J310/01 – Principles of Design and Technology',
        'J310/01 – Materials and their Working Properties (Core and Specialist)',
        'J310/01 – New and Emerging Technologies',
        'J310/01 – Designing and Making Principles: Communication and Design Methods',
        'J310/01 – Designing and Making Principles: Prototyping and Commercial Manufacture',
        'J310/01 – Ecological and Social Footprint of Products',
        'NEA – Design and Make Task',
      ],
    }},

    'Sociology': { papers: {
      1: [
        'J270/01 – Socialisation, Identity and the Media: Socialisation and Cultural Identity',
        'J270/01 – The Family: Structure, Functions and Relationships',
        'J270/01 – The Media: Representation, Influence and Ownership',
        'J270/01 – Research Methods: Quantitative and Qualitative Methods',
      ],
      2: [
        'J270/02 – Researching and Understanding Social Inequalities',
        'J270/02 – Social Inequality: Class, Gender and Ethnicity',
        'J270/02 – Education: Differential Achievement',
        'J270/02 – Crime and Deviance: Explanations and Statistics',
        'J270/02 – Research Methods in Context',
      ],
    }},

    'Psychology': { papers: {
      1: [
        'J203/01 – Studies and Applications: Cognitive Psychology (Memory)',
        'J203/01 – Cognitive Psychology: Reconstructive Memory (Bartlett)',
        'J203/01 – Social Psychology: Conformity (Asch)',
        'J203/01 – Social Psychology: Obedience (Milgram)',
        'J203/01 – Developmental Psychology: Learning Theory vs Attachment',
        'J203/01 – Sleep and Dreaming: The Functions of Sleep',
      ],
      2: [
        'J203/02 – Studies and Applications: Criminal Psychology',
        'J203/02 – Criminal Psychology: Theories of Criminal Behaviour',
        'J203/02 – Sport Psychology: Arousal, Anxiety and Motivation',
        'J203/02 – Health Psychology: Smoking, Obesity and Stress',
        'J203/02 – Research Methods: Types of Research and Data Analysis',
        'J203/02 – Research Methods: Ethical Considerations',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'J200/01 – Television and Promoting Media: TV Set Products',
        'J200/01 – Television: Media Language, Representation, Industry, Audiences',
        'J200/01 – Advertising and Marketing: Print and Digital Advertising Set Products',
      ],
      2: [
        'J200/02 – Music and News: Music Industry and Set Music Products',
        'J200/02 – News and Online Media: Newspapers and Online News Set Products',
        'J200/02 – Online Media: Digital Media and Social Networking',
      ],
    }},

    'Art & Design': { papers: {
      1: [
        'Component 1 – Portfolio: AO1 – Develop Ideas through Investigation of Contextual Sources',
        'Component 1 – Portfolio: AO2 – Explore and Select Appropriate Materials, Techniques and Processes',
        'Component 1 – Portfolio: AO3 – Record Ideas, Observations and Insights',
        'Component 1 – Portfolio: AO4 – Present a Personal and Meaningful Response',
      ],
      2: [
        'Component 2 – Externally Set Task: Preparatory Period',
        'Component 2 – Externally Set Task: 10-Hour Sustained Study',
        'Component 2 – AO1–AO4 Applied to Set Starting Point',
      ],
    }},

    'Engineering': { papers: {
      1: [
        'Engineering Manufacture: Materials and their Properties',
        'Engineering Manufacture: Manufacturing Processes and Techniques',
        'Engineering Principles: Forces, Levers, Mechanical Advantage',
        'Engineering Principles: Electrical Circuits and Electronic Components',
        'Engineering Design: Drawing and Communication Techniques',
        'Engineering Design: CAD/CAM and New Technologies',
        'NEA – Engineering Design and Make Task',
      ],
    }},

  }, // end OCR

  // ── Eduqas ─────────────────────────────────────────────────────────────────
  Eduqas: {

    'Mathematics': { papers: {
      1: [
        'Component 1 Non-Calculator (C300U10): Number (Integers, Fractions, Decimals, Percentages, Surds)',
        'Component 1 – Algebra: Expressions, Equations, Inequalities, Sequences, Graphs',
        'Component 1 – Geometry: Properties of Shapes, Mensuration, Angles',
        'Component 1 – Statistics: Data Presentation, Averages and Probability',
      ],
      2: [
        'Component 2 Calculator (C300U20): Number (Standard Form, Bounds, Compound Measures)',
        'Component 2 – Algebra: Quadratics, Simultaneous Equations, Functions (Higher)',
        'Component 2 – Geometry: Trigonometry, Pythagoras, Vectors (Higher)',
        'Component 2 – Statistics: Scatter Graphs, Cumulative Frequency, Histograms',
        'Component 2 – Probability: Combined Events and Tree Diagrams',
      ],
    }},

    'English Language': { papers: {
      1: [
        'Component 1 (C700U10) – 21st-Century Literature Reading and Creative Prose Writing',
        'Reading – Identify and Interpret Implicit and Explicit Information',
        'Reading – Language Analysis: Writer\'s Methods (21st-Century Literary Fiction)',
        'Reading – Structural Analysis and Evaluation',
        'Writing – Descriptive or Narrative Creative Prose',
        'Writing – Technical Accuracy (SPaG)',
      ],
      2: [
        'Component 2 (C700U20) – 19th and 21st Century Non-Fiction Reading and Transactional Writing',
        'Reading – Synthesis of Two Non-Fiction Texts (19th and 21st Century)',
        'Reading – Comparing Writers\' Viewpoints and Methods',
        'Writing – Transactional and Persuasive Writing (Letter, Article, Speech, Report)',
        'Writing – Technical Accuracy (SPaG)',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'Component 1 (C720U10) – Shakespeare and Poetry',
        'Shakespeare Set Play – Character, Themes and Language',
        'Shakespeare Set Play – Context and Stage Directions',
        'Poetry Anthology – Eduqas Set Poems (Cluster of Poems by Theme)',
        'Poetry Comparison Technique',
      ],
      2: [
        'Component 2 (C720U20) – Drama, Prose and Unseen Poetry',
        'Post-1914 Drama Set Text – Character, Theme and Context',
        '19th-Century Prose Set Text – Character, Theme and Victorian Context',
        'Unseen Prose Extract – Analysis and Response',
        'Unseen Poetry – Analysing an Unfamiliar Poem',
      ],
    }},

    'Biology': { papers: {
      1: [
        'Component 1 (C400U10): Cell Biology and Organisation',
        'Component 1 – Cell Biology: Cell Structure and Transport',
        'Component 1 – Organisation: The Digestive System and Enzymes',
        'Component 1 – Organisation: The Cardiovascular System',
        'Component 1 – Infection and Response: Communicable Diseases and Defences',
        'Component 1 – Bioenergetics: Photosynthesis',
        'Component 1 – Bioenergetics: Respiration',
      ],
      2: [
        'Component 2 (C400U20): Homeostasis, Inheritance, Variation and Evolution',
        'Component 2 – Homeostasis and Response: Nervous System and Hormones',
        'Component 2 – Homeostasis: Kidneys and Blood Glucose Regulation',
        'Component 2 – Inheritance: DNA, Inheritance and Punnett Squares',
        'Component 2 – Inheritance: Variation and Mutation',
        'Component 2 – Evolution: Natural Selection and Classification',
        'Component 2 – Ecology: Ecosystems and Biodiversity',
      ],
    }},

    'Chemistry': { papers: {
      1: [
        'Component 1 (C500U10): Atomic Structure, Bonding and the Periodic Table',
        'Component 1 – Atomic Structure: Electronic Structure and Isotopes',
        'Component 1 – The Periodic Table: Group Properties and Trends',
        'Component 1 – Bonding: Ionic, Covalent and Metallic Bonding',
        'Component 1 – Quantitative Chemistry: Moles, Formulae and Equations',
        'Component 1 – Chemical Changes: Reactivity Series, Acids and Electrolysis',
        'Component 1 – Energy Changes: Exothermic, Endothermic and Bond Energies',
      ],
      2: [
        'Component 2 (C500U20): Rates, Equilibrium, Organic Chemistry and the Environment',
        'Component 2 – Rate of Reaction: Factors, Collision Theory and Catalysts',
        'Component 2 – Equilibrium: Le Chatelier\'s Principle and the Haber Process',
        'Component 2 – Organic Chemistry: Alkanes, Alkenes, Polymers and Crude Oil',
        'Component 2 – Chemical Analysis: Chromatography and Identification Tests',
        'Component 2 – Chemistry of the Atmosphere: Greenhouse Effect and Pollutants',
        'Component 2 – Using Resources: Water Treatment and Sustainability',
      ],
    }},

    'Physics': { papers: {
      1: [
        'Component 1 (C600U10): Forces, Energy, Electricity and Radioactivity',
        'Component 1 – Energy: Energy Stores, Transfers, Efficiency and Power',
        'Component 1 – Electricity: Circuits, Resistance and Mains Electricity',
        'Component 1 – Particle Model: States of Matter, Density and Latent Heat',
        'Component 1 – Atomic Structure: Radioactivity, Half-Life and Nuclear Equations',
      ],
      2: [
        'Component 2 (C600U20): Forces, Waves, Magnetism and Space',
        'Component 2 – Forces: Newton\'s Laws, Motion Graphs and Momentum',
        'Component 2 – Waves: Properties of Waves and the Electromagnetic Spectrum',
        'Component 2 – Magnetism and Electromagnetism: Motor Effect and Induction',
        'Component 2 – Space Physics: The Solar System, Stars and Cosmology (Higher)',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        'Component 1 (C500U10-1): Computer Architecture, Data and Communication',
        'Component 1 – Systems Architecture: CPU, Memory and Secondary Storage',
        'Component 1 – Data Representation: Binary, Denary, Hexadecimal',
        'Component 1 – Data Representation: Images, Sound and Compression',
        'Component 1 – Networks: Types, Topologies and Protocols',
        'Component 1 – Cyber Security: Threats and Prevention',
        'Component 1 – Software: Operating Systems and Utility Software',
        'Component 1 – Boolean Logic: Logic Gates and Truth Tables',
        'Component 1 – Databases and Big Data',
        'Component 1 – Ethical and Legal Issues',
      ],
      2: [
        'Component 2 (C500U20-1): Algorithms and Programming',
        'Component 2 – Algorithms: Computational Thinking (Decomposition, Abstraction)',
        'Component 2 – Algorithms: Searching and Sorting Algorithms',
        'Component 2 – Programming: Variables, Data Types, Input/Output',
        'Component 2 – Programming: Sequence, Selection and Iteration',
        'Component 2 – Programming: Arrays, String Handling and File Handling',
        'Component 2 – Programming: Subroutines and Scope',
        'Component 2 – OOP and Functional Programming Paradigms',
        'Component 2 – Theory of Computation: Turing Machines and Complexity',
        'Programming Project (On-Screen Practical Task)',
      ],
    }},

    'Geography A': { papers: {
      1: [
        'Component 1 (A110U10) – Changing Landscapes: Coastal Processes and Landforms',
        'Component 1 – Changing Landscapes: Coastal Management Strategies',
        'Component 1 – Changing Landscapes: Glaciated Upland Landscapes (Processes and Landforms)',
        'Component 1 – Fieldwork Skills',
      ],
      2: [
        'Component 2 (A110U20) – Changing Places: Urban Change in the UK and Wider World',
        'Component 2 – Changing Places: Rural Change',
        'Component 2 – Changing Places: Place Identity and Character',
        'Component 2 – Fieldwork Investigation',
      ],
      3: [
        'Component 3 (A110U30) – Global Systems and Governance: Globalisation',
        'Component 3 – Global Governance: International Trade and Aid',
        'Component 3 – Global Governance: Human Rights',
        'Component 3 – Global Governance: Antarctica (Case Study)',
      ],
    }},

    'History': { papers: {
      1: [
        'Component 1 (A110U10) – Studies in Depth (School Choice)',
        'Option: Development of the USA 1929–2000',
        'Option: Development of Germany 1918–45',
        'Option: Development of Medicine 1845–Present',
      ],
      2: [
        'Component 2 (A110U20) – Studies in Breadth (School Choice)',
        'Option: The British Empire c.1500–1968',
        'Option: The Development of the USA 1865–1929',
        'Option: Migration and Identity in Wales and Britain c.1100–Present',
      ],
    }},

    'Business Studies': { papers: {
      1: [
        'Component 1 (C510U10) – Business Activity, Enterprise, Marketing and People',
        'Component 1 – Business Activity: Business Purposes and Ownership',
        'Component 1 – Enterprise: Entrepreneurs, Risk and Reward',
        'Component 1 – Marketing: Market Research, Segmentation and the Marketing Mix',
        'Component 1 – People: Organisational Structure, Recruitment and Motivation',
        'Component 1 – Finance: Sources of Finance, Costs, Revenue and Profit',
      ],
      2: [
        'Component 2 (C510U20) – Operations, Finance and External Influences',
        'Component 2 – Operations: Production Processes, Quality and Supply Chain',
        'Component 2 – Finance: Financial Statements and Ratio Analysis',
        'Component 2 – External Influences: Economic Climate, Legislation, Technology, Ethics',
        'Component 2 – Global Business: Globalisation and International Trade',
      ],
    }},

    'Religious Studies': { papers: {
      1: [
        'Component 1 (A120U10) – Religious, Philosophical and Ethical Studies',
        'Philosophy: Arguments for God\'s Existence (Cosmological, Teleological, Ontological)',
        'Philosophy: The Problem of Evil and Suffering',
        'Philosophy: Religious Experience and Miracles',
        'Ethics: Natural Law and Utilitarianism',
        'Ethics: Situation Ethics and Personal Ethics',
        'Ethics: Medical Ethics (Abortion, Euthanasia)',
        'Ethics: Environmental Ethics and Social Justice',
      ],
      2: [
        'Component 2 (A120U20) – Study of Christianity',
        'Christianity – Beliefs: The Nature of God, Trinity, Incarnation, Resurrection',
        'Christianity – Beliefs: Salvation, Atonement and Life After Death',
        'Christianity – Practices: Worship, Prayer and Pilgrimage',
        'Christianity – Practices: Sacraments, Celebrations and the Role of the Church',
        'Christianity – Sources of Authority: The Bible and Church Tradition',
      ],
      3: [
        'Component 3 (A120U30) – Study of a Second Religion (School Choice)',
        'Islam – Beliefs, Practices and Sources of Authority',
        'Judaism – Beliefs, Practices and Sources of Authority',
        'Hinduism – Beliefs, Practices and Sources of Authority',
        'Buddhism – Beliefs, Practices and Sources of Authority',
      ],
    }},

    'Sociology': { papers: {
      1: [
        'Component 1 (C200U10) – Understanding Social Structures',
        'Socialisation and Identity: Culture, Norms and Values',
        'The Family: Changing Family Structures and Theoretical Perspectives',
        'Education: The Role of Education and Differential Achievement',
        'Research Methods: Quantitative and Qualitative Methods',
      ],
      2: [
        'Component 2 (C200U20) – Understanding Social Processes',
        'Crime and Deviance: Definitions, Statistics and Explanations',
        'Social Inequality: Class, Gender, Ethnicity and Poverty',
        'Research Methods in Context: Applying Methods to Social Issues',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'Component 1 (C680U10) – Exploring the Media',
        'Media Language: Semiotics, Narrative and Genre',
        'Representation: Selection, Construction and Stereotypes',
        'Media Industries: Ownership, Regulation and Funding',
        'Audiences: Active and Passive Audience Theories',
        'Set Products: Film, Television, Newspaper, Music Video, Online/Social Media',
      ],
      2: [
        'Component 2 (C680U20) – Understanding Media Forms and Products',
        'Long-Form TV Drama (UK and US): Industry, Narrative and Representation',
        'Music: Music Industry, Music Video and Set Products',
        'Film: Film Industry and Set Film Products',
      ],
    }},

    'Film Studies': { papers: {
      1: [
        'Component 1 (C670U10) – Varieties of Film and Filmmaking',
        'Film Language: Mise-en-scène, Cinematography, Editing and Sound',
        'Hollywood Cinema Set Film: Narrative, Genre and Representation',
        'British Film Set Film: British Identity, Genre and Context',
        'Documentary Set Film: Documentary Techniques and Purpose',
        'Short Film Studies',
      ],
      2: [
        'Component 2 (C670U20) – Global Filmmaking Perspectives',
        'US Independent Cinema Set Film',
        'European Cinema Set Film (Auteur Theory and National Cinema)',
        'World Cinema Set Film (Asia, Latin America or Africa)',
        'Comparative Film Analysis',
      ],
    }},

    'Design & Technology': { papers: {
      1: [
        'Component 1 (C600U10) – Materials and their Properties: Core and Specialist Materials',
        'Component 1 – Technical Principles: New and Emerging Technologies',
        'Component 1 – Technical Principles: Energy, Mechanical and Electronic Systems',
        'Component 1 – Designing and Making Principles',
        'NEA – Design and Make Task',
      ],
    }},

    'Music': { papers: {
      1: [
        'Component 3 (C660U30) – Appraising: Area of Study 1 – Western Classical Tradition',
        'Component 3 – Appraising: Area of Study 2 – Popular Music',
        'Component 3 – Appraising: Area of Study 3 – World Music',
        'Component 3 – Appraising: Area of Study 4 – Film Music',
        'Musical Elements: Rhythm, Melody, Harmony, Texture, Timbre, Dynamics, Structure',
        'Performance (Non-Exam Assessment)',
        'Composition (Non-Exam Assessment)',
      ],
    }},

    'Drama': { papers: {
      1: [
        'Component 3 (C690U30) – Written Examination: Set Play Analysis',
        'Component 3 – Set Play: Character, Theme, Context and Stage Directions',
        'Component 3 – Live Theatre Evaluation',
        'Component 3 – Theatrical Roles (Director, Designer, Performer)',
        'Component 1 – Devising from a Stimulus (Non-Exam Assessment)',
        'Component 2 – Performing from a Script (Non-Exam Assessment)',
      ],
    }},

    'Physical Education': { papers: {
      1: [
        'Component 1 (C550U10) – Physical Factors Affecting Performance',
        'Component 1 – Anatomy and Physiology: Skeletal, Muscular, Cardiovascular and Respiratory Systems',
        'Component 1 – Exercise Physiology: Energy Systems and Fitness Testing',
        'Component 1 – Biomechanics: Levers, Planes and Axes of Movement',
      ],
      2: [
        'Component 2 (C550U20) – Psychological and Socio-Cultural Factors',
        'Component 2 – Psychology of Sport: Skill Classification, Goal Setting, Arousal',
        'Component 2 – Socio-Cultural: Participation, Commercialisation, Ethics',
        'Component 2 – Health and Wellbeing: Nutrition, Lifestyle and Physical Activity',
        'Practical Performance (Non-Exam Assessment)',
      ],
    }},

    'Food Preparation & Nutrition': { papers: {
      1: [
        'Component 1 (C560UA0) – Food Commodities: Cereals, Fruit and Vegetables, Dairy, Meat, Fish',
        'Component 1 – Nutrition: Macronutrients and Micronutrients',
        'Component 1 – Diet and Health: Nutritional Needs and Diet-Related Conditions',
        'Component 1 – Food Science: Functional Properties and Chemical Reactions in Food',
        'Component 1 – Food Safety: Hygiene, Storage and Preservation',
        'Component 1 – Food Provenance: Sustainability, Seasons and Farming Methods',
        'NEA 1 – Food Investigation Task',
        'NEA 2 – Food Preparation Assessment',
      ],
    }},

    'Art & Design': { papers: {
      1: [
        'Component 1 – Portfolio: AO1 – Develop Ideas through Investigation of Contextual Sources',
        'Component 1 – Portfolio: AO2 – Explore Appropriate Materials, Techniques and Processes',
        'Component 1 – Portfolio: AO3 – Record Ideas, Observations and Insights Relevant to Intentions',
        'Component 1 – Portfolio: AO4 – Present a Personal and Meaningful Response',
      ],
      2: [
        'Component 2 – Externally Set Task: Preparatory Study Period (School-Based)',
        'Component 2 – Externally Set Task: 10-Hour Supervised Time',
        'Component 2 – AO1–AO4 Applied to Set Theme',
      ],
    }},

  }, // end Eduqas

  // ── WJEC ───────────────────────────────────────────────────────────────────
  WJEC: {

    'Mathematics': { papers: {
      1: [
        'Unit 1 Non-Calculator (Foundation) or Unit 3 Non-Calculator (Higher)',
        'Number: Integers, Fractions, Decimals, Percentages, Surds (Higher)',
        'Algebra: Expressions, Equations, Inequalities, Sequences and Graphs',
        'Ratio, Proportion and Rates of Change',
        'Geometry: Properties of Shapes, Angles and Mensuration',
        'Statistics: Data Presentation, Averages and Spread',
        'Probability',
      ],
      2: [
        'Unit 2 Calculator (Foundation) or Unit 4 Calculator (Higher)',
        'Number: Standard Form, Bounds and Compound Measures',
        'Algebra: Quadratics, Simultaneous Equations, Functions (Higher)',
        'Geometry: Trigonometry, Pythagoras, Circle Theorems (Higher), Vectors (Higher)',
        'Statistics: Scatter Graphs, Cumulative Frequency and Histograms',
      ],
    }},

    'English Language': { papers: {
      1: [
        'Unit 1 (C700U10) – Prose Fiction and Descriptive/Narrative Writing',
        'Reading – Literary Prose Fiction: Identifying Information and Ideas',
        'Reading – Literary Prose Fiction: Language Analysis and Writer\'s Methods',
        'Reading – Literary Prose Fiction: Structural Analysis',
        'Reading – Literary Prose Fiction: Evaluation',
        'Writing – Descriptive Writing',
        'Writing – Narrative Writing',
        'Writing – Technical Accuracy (SPaG)',
      ],
      2: [
        'Unit 2 (C700U20) – Non-Fiction and Transactional Writing',
        'Reading – Non-Fiction: Identifying Information and Viewpoints',
        'Reading – Non-Fiction: Language Analysis',
        'Reading – Non-Fiction: Comparing Two Non-Fiction Texts',
        'Writing – Transactional Writing (Letter, Article, Speech, Report)',
        'Writing – Technical Accuracy (SPaG)',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'Unit 1 (C720U10) – Poetry and Drama',
        'WJEC Poetry Anthology: Individual Poems (Identity, Place or Other Theme)',
        'Poetry Comparison Technique',
        'Shakespeare Set Play: Character, Theme and Language',
        'Shakespeare: Context and Stage Directions',
      ],
      2: [
        'Unit 2 (C720U20) – Prose and Unseen Texts',
        'Prose Set Text (19th or 20th Century): Character, Theme and Context',
        'Unseen Prose Extract: Analysis and Response',
        'Unseen Poetry: Analysing an Unfamiliar Poem',
      ],
    }},

    'Biology': { papers: {
      1: [
        'Unit 1: Cells and Movement Across Membranes',
        'Unit 1: Respiration and the Respiratory System',
        'Unit 1: Digestion and the Digestive System',
        'Unit 1: The Circulatory System (Heart and Blood Vessels)',
        'Unit 1: Pathogens, Disease and the Immune System',
        'Unit 1: Homeostasis (Blood Glucose, Temperature)',
        'Unit 1: Required Practicals',
      ],
      2: [
        'Unit 2: Classification and Biodiversity',
        'Unit 2: Cell Division and Cancer',
        'Unit 2: DNA Structure and Protein Synthesis',
        'Unit 2: Inheritance and Genetic Disorders',
        'Unit 2: Variation and Evolution',
        'Unit 2: Biotechnology and Genetic Engineering',
        'Unit 2: Ecosystems and Human Impact on the Environment',
        'Unit 2: Required Practicals',
      ],
    }},

    'Chemistry': { papers: {
      1: [
        'Unit 1: Bonding and Structure (Ionic, Covalent, Metallic)',
        'Unit 1: The Periodic Table: Properties and Trends (Groups 1, 7 and 0)',
        'Unit 1: Formulae, Equations and Quantitative Chemistry',
        'Unit 1: Acids, Bases and Salts',
        'Unit 1: Electrolysis',
        'Unit 1: Required Practicals',
      ],
      2: [
        'Unit 2: Rates of Reaction and Collision Theory',
        'Unit 2: Organic Chemistry (Alkanes, Alkenes, Polymers, Crude Oil)',
        'Unit 2: Chemical Analysis (Chromatography, Ion Tests)',
        'Unit 2: Environmental Chemistry (Greenhouse Effect, Atmosphere)',
        'Unit 2: Using Resources (Water Treatment, Life Cycle Assessment)',
        'Unit 2: Required Practicals',
      ],
    }},

    'Physics': { papers: {
      1: [
        'Unit 1: Motion (Distance-Time and Velocity-Time Graphs)',
        'Unit 1: Forces (Newton\'s Laws, Resultant Forces, Stopping Distances)',
        'Unit 1: Energy (Stores, Transfers, Efficiency and Power)',
        'Unit 1: Electricity (Circuits, Resistance, Mains Electricity)',
        'Unit 1: Magnetism (Permanent Magnets, Motor Effect)',
        'Unit 1: Required Practicals',
      ],
      2: [
        'Unit 2: Waves (Properties, Electromagnetic Spectrum, Sound)',
        'Unit 2: Radioactivity (Nuclear Radiation, Half-Life, Fission and Fusion)',
        'Unit 2: Space Physics (The Solar System, Stars, Red-Shift)',
        'Unit 2: Pressure and Moments',
        'Unit 2: Required Practicals',
      ],
    }},

    'Combined Science: Trilogy': { papers: {
      1: [
        'Biology Paper 1: Cells, Organisation, Infection and Response, Bioenergetics',
      ],
      2: [
        'Biology Paper 2: Homeostasis, Inheritance, Variation, Ecology',
      ],
      3: [
        'Chemistry Paper 1: Atomic Structure, Bonding, Quantitative Chemistry, Chemical Changes',
      ],
      4: [
        'Chemistry Paper 2: Rates, Organic Chemistry, Analysis, Atmosphere, Resources',
      ],
      5: [
        'Physics Paper 1: Energy, Electricity, Particle Model, Atomic Structure',
      ],
      6: [
        'Physics Paper 2: Forces, Waves, Magnetism',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        'Unit 1 (Written): Systems Architecture – CPU, Memory, Storage',
        'Unit 1 – Data Representation: Binary, Denary, Hexadecimal, Images, Sound, Compression',
        'Unit 1 – Networks: Types, Topologies and Protocols',
        'Unit 1 – Cyber Security: Threats (Phishing, Malware) and Prevention (Firewalls, Encryption)',
        'Unit 1 – Boolean Logic: Logic Gates and Truth Tables',
        'Unit 1 – Databases and Big Data',
        'Unit 1 – Software: Operating Systems and Programming Languages',
        'Unit 1 – Ethical and Legal Issues',
      ],
      2: [
        'Unit 2 (On-Screen): Programming Project',
        'Unit 2 – Algorithms: Computational Thinking (Decomposition, Abstraction)',
        'Unit 2 – Algorithms: Searching and Sorting',
        'Unit 2 – Programming: Variables, Data Types, Sequence, Selection, Iteration',
        'Unit 2 – Programming: Arrays, Subroutines and File Handling',
      ],
    }},

    'Geography': { papers: {
      1: [
        'Unit 1 (A110U10) – Changing Landscapes: Coastal Processes and Landforms',
        'Unit 1 – Changing Landscapes: Coastal Management',
        'Unit 1 – Changing Landscapes: Glaciated Upland Landscapes',
        'Unit 1 – Theme 3: Tectonic Hazards',
      ],
      2: [
        'Unit 2 (A110U20) – Changing Places: Urban Change (Urban Issues in the UK and World)',
        'Unit 2 – Changing Places: Rural Change',
        'Unit 2 – Theme 6: Development',
      ],
      3: [
        'Unit 3 (A110U30) – Applied Fieldwork Enquiry: Physical or Human Investigation',
        'Unit 3 – Geographical Skills and Data Analysis',
      ],
    }},

    'History': { papers: {
      1: [
        'Unit 1 – Changes in Health and Medicine c.1345–Present',
        'Unit 1 – Power and Protest (British History: Key Episodes)',
      ],
      2: [
        'Unit 2 – Germany 1919–1945: Weimar Republic and Nazi Germany',
        'Unit 2 – The Cold War 1945–1991',
        'Unit 2 – Option: Development of Wales and Britain c.1906–2000',
      ],
    }},

    'Religious Studies': { papers: {
      1: [
        'Unit 1 – Study of Christianity: Beliefs, Teachings and Practices',
        'Christianity – Beliefs: The Nature of God, Trinity, Jesus, Salvation and Afterlife',
        'Christianity – Practices: Worship, Prayer, Sacraments, Pilgrimage and Celebrations',
        'Christianity – Sources of Authority: The Bible and Church Tradition',
      ],
      2: [
        'Unit 2 – Study of Islam: Beliefs, Teachings and Practices',
        'Islam – Beliefs: The Six Articles of Faith, Tawhid, Akhirah',
        'Islam – Practices: The Five Pillars, Jihad and Mosque Worship',
        'Unit 2 Option: Judaism / Hinduism / Buddhism – Beliefs and Practices',
      ],
      3: [
        'Unit 3 – Religious, Philosophical and Ethical Studies',
        'Philosophy: Arguments for and against the Existence of God',
        'Philosophy: The Problem of Evil and Religious Experience',
        'Ethics: Sanctity of Life (Abortion and Euthanasia)',
        'Ethics: War, Peace and Justice',
      ],
    }},

    'Business Studies': { papers: {
      1: [
        'Unit 1 (C510U10) – Business Activity, Marketing and People',
        'Business Activity: Business Purposes, Types of Ownership',
        'Marketing: Market Research, Segmentation and the Marketing Mix',
        'People: Organisational Structures, Recruitment, Motivation',
        'Finance: Sources of Finance, Costs, Revenue and Profit',
      ],
      2: [
        'Unit 2 (C510U20) – Operations, Finance and External Influences',
        'Operations: Production Methods, Quality Management, Supply Chain',
        'Finance: Financial Statements and Ratio Analysis',
        'External Influences: Economic Climate, Legislation, Globalisation, Ethics',
      ],
    }},

    'Drama': { papers: {
      1: [
        'Component 3 – Written Examination: Set Play Analysis and Live Theatre Evaluation',
        'Set Play: Character, Themes, Context and Stage Directions',
        'Live Theatre Evaluation: Reviewing a Professional Performance',
        'Component 1 – Devising from a Stimulus (Non-Exam Assessment)',
        'Component 2 – Performing from a Script (Non-Exam Assessment)',
      ],
    }},

    'Music': { papers: {
      1: [
        'Component 3 – Listening and Appraising: Four Areas of Study',
        'Area of Study 1: Western Classical Tradition (1650–1910)',
        'Area of Study 2: Popular Music',
        'Area of Study 3: World Music',
        'Area of Study 4: Film Music or Musical Theatre',
        'Musical Elements: Rhythm, Melody, Harmony, Texture, Timbre, Structure',
        'Performance (Non-Exam Assessment)',
        'Composition (Non-Exam Assessment)',
      ],
    }},

    'Physical Education': { papers: {
      1: [
        'Unit 1 – Physical Factors Affecting Performance: Applied Anatomy and Physiology',
        'Unit 1 – Anatomy: Skeletal System, Muscular System, Cardiovascular and Respiratory Systems',
        'Unit 1 – Exercise Physiology: Energy Systems and Principles of Training',
        'Unit 1 – Biomechanics: Levers, Planes and Axes',
      ],
      2: [
        'Unit 2 – Psychological and Socio-Cultural Factors in Physical Activity',
        'Unit 2 – Sports Psychology: Skill Classification, Goal Setting, Arousal and Anxiety',
        'Unit 2 – Socio-Cultural: Participation Patterns, Commercialisation, Ethics',
        'Unit 2 – Health and Wellbeing: Nutrition, Lifestyle and Mental Health Benefits',
        'Practical Performance (Non-Exam Assessment)',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'Component 1 – Exploring the Media: Media Language, Representation, Industry, Audiences',
        'Set Products: Film, Television, Newspaper, Music Video and Online/Social Media',
      ],
      2: [
        'Component 2 – Understanding Media Forms: TV Drama, Film, Music and News',
      ],
    }},

    'Food Preparation & Nutrition': { papers: {
      1: [
        'Component 1 – Food Commodities, Nutrition, Diet and Health',
        'Component 1 – Food Science: Functional Properties and Food Safety',
        'Component 1 – Food Provenance: Sustainability and Farming Methods',
        'NEA 1 – Food Investigation Task',
        'NEA 2 – Food Preparation Assessment',
      ],
    }},

    'Design & Technology': { papers: {
      1: [
        'Component 1 – Materials and their Working Properties',
        'Component 1 – New and Emerging Technologies',
        'Component 1 – Designing and Making Principles',
        'NEA – Design and Make Task',
      ],
    }},

    'Art & Design': { papers: {
      1: [
        'Component 1 – Portfolio: AO1 Develop, AO2 Explore, AO3 Record, AO4 Present',
      ],
      2: [
        'Component 2 – Externally Set Task: 10-Hour Supervised Period',
      ],
    }},

    'Sociology': { papers: {
      1: [
        'Component 1 – Socialisation, Culture and Identity: Family and Education',
        'Research Methods: Quantitative and Qualitative Methods',
      ],
      2: [
        'Component 2 – Social Processes: Crime and Deviance, Social Inequality',
        'Research Methods in Context',
      ],
    }},

    'French': { papers: {
      1: ['Listening – All WJEC Themes (Identity, Local Area, School, Future Plans, Global Issues)'],
      2: ['Speaking – Role Play, Photo Card, General Conversation'],
      3: ['Reading – All WJEC Themes; Grammar and Vocabulary'],
      4: ['Writing – Translation into French; Structured and Open-Ended Tasks'],
    }},

    'German': { papers: {
      1: ['Listening – All WJEC Themes (Identity, Local Area, School, Future Plans, Global Issues)'],
      2: ['Speaking – Role Play, Photo Card, General Conversation'],
      3: ['Reading – All WJEC Themes; Grammar and Vocabulary'],
      4: ['Writing – Translation into German; Structured and Open-Ended Tasks'],
    }},

    'Spanish': { papers: {
      1: ['Listening – All WJEC Themes (Identity, Local Area, School, Future Plans, Global Issues)'],
      2: ['Speaking – Role Play, Photo Card, General Conversation'],
      3: ['Reading – All WJEC Themes; Grammar and Vocabulary'],
      4: ['Writing – Translation into Spanish; Structured and Open-Ended Tasks'],
    }},

    'Economics': { papers: {
      1: [
        'Unit 1 – Introduction to Markets: The Economic Problem, Demand, Supply and Price Mechanism',
        'Unit 1 – Market Failure and Government Intervention',
      ],
      2: [
        'Unit 2 – The Welsh and UK Economy: Macroeconomic Indicators and Policy',
        'Unit 2 – International Trade and the Welsh Economy',
      ],
    }},

    'Film Studies': { papers: {
      1: [
        'Component 1 – Varieties of Film: Hollywood Cinema, British Film and Documentary',
        'Film Language: Mise-en-scène, Cinematography, Editing and Sound',
      ],
      2: [
        'Component 2 – Global Filmmaking: European Cinema and World Cinema',
      ],
    }},

  }, // end WJEC

  // ── CCEA ───────────────────────────────────────────────────────────────────
  CCEA: {

    'Mathematics': { papers: {
      1: [
        'Unit T1 (Foundation) Non-Calculator or Unit T3 (Higher) Non-Calculator',
        'Number: Integers, Fractions, Decimals, Percentages, Surds (Higher)',
        'Algebra: Expressions, Equations, Inequalities, Sequences and Graphs',
        'Ratio, Proportion and Rates of Change',
        'Geometry: Properties of Shapes, Angles, Mensuration and Transformations',
        'Statistics: Data Presentation, Averages and Probability',
      ],
      2: [
        'Unit T2 (Foundation) Calculator or Unit T4 (Higher) Calculator',
        'Number: Standard Form, Bounds',
        'Algebra: Quadratics, Simultaneous Equations, Functions (Higher)',
        'Geometry: Trigonometry, Pythagoras, Circle Theorems (Higher), Vectors (Higher)',
        'Statistics: Scatter Graphs, Cumulative Frequency, Histograms',
      ],
      3: [
        'Unit T5 (Higher Only) Calculator',
        'Further Algebra: Functions, Algebraic Proof, Further Graphs',
        'Further Geometry: Circle Theorems, Sine and Cosine Rule, Vectors',
        'Further Statistics: Histograms and Probability',
      ],
    }},

    'English Language': { papers: {
      1: [
        'Unit GEL11 – Writing for Purpose and Audience',
        'Writing: Descriptive Writing',
        'Writing: Narrative Writing',
        'Writing: Transactional Writing (Letter, Article, Report, Speech)',
        'Writing: Technical Accuracy (SPaG)',
        'Reading: Accessing Non-Fiction Texts (Identifying Information and Viewpoints)',
        'Reading: Language Analysis of Non-Fiction Texts',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'Unit GET11 – The Study of Prose: Two Prose Set Texts (One Pre-1900, One Post-1900)',
        'Prose: Character, Theme and Context',
        'Prose: Language and Structure Analysis',
        'Prose: Comparison Between Two Texts',
      ],
      2: [
        'Unit GET12 – The Study of Poetry and Drama',
        'Poetry Anthology: Individual Poems (CCEA Set Poems)',
        'Poetry Comparison Technique',
        'Drama Set Text: Character, Themes, Context and Stage Directions',
      ],
    }},

    'Biology': { papers: {
      1: [
        'Unit 1 – Cells, Living Processes and Biodiversity: Cell Structure',
        'Unit 1 – Cells: Osmosis, Diffusion and Active Transport',
        'Unit 1 – Cells: Enzymes and Biological Molecules',
        'Unit 1 – Nutrition and Digestion',
        'Unit 1 – The Circulatory System',
        'Unit 1 – Breathing and Gas Exchange',
        'Unit 1 – Microorganisms and Disease',
      ],
      2: [
        'Unit 2 – Body Systems, Ecology and the Environment',
        'Unit 2 – The Nervous System and Sense Organs',
        'Unit 2 – Hormones and Homeostasis',
        'Unit 2 – Reproduction',
        'Unit 2 – Genetics and Inheritance',
        'Unit 2 – Variation and Natural Selection',
        'Unit 2 – Biodiversity and Ecosystems',
        'Unit 2 – Human Impact on the Environment',
      ],
    }},

    'Chemistry': { papers: {
      1: [
        'Unit 1 – Basic Concepts in Chemistry: Atomic Structure',
        'Unit 1 – Ionic and Covalent Bonding',
        'Unit 1 – Formulae and Chemical Equations',
        'Unit 1 – Types of Reaction (Acids, Bases, Oxidation, Reduction)',
        'Unit 1 – Rates of Reaction',
        'Unit 1 – Electrolysis',
        'Unit 1 – The Periodic Table: Properties and Trends',
      ],
      2: [
        'Unit 2 – Further Chemical Reactions: Reversible Reactions and Equilibrium',
        'Unit 2 – Organic Chemistry: Crude Oil, Alkanes, Alkenes and Polymers',
        'Unit 2 – Quantitative Chemistry: Moles and Calculations',
        'Unit 2 – Environmental Chemistry: Greenhouse Effect and Pollution',
        'Unit 2 – Using Resources: Water Treatment and Sustainability',
      ],
    }},

    'Physics': { papers: {
      1: [
        'Unit 1 – Forces, Energy and Electricity: Speed and Acceleration',
        'Unit 1 – Forces: Newton\'s Laws, Weight and Resultant Forces',
        'Unit 1 – Forces: Momentum and Stopping Distances',
        'Unit 1 – Energy: Energy Stores, Transfers, Efficiency and Power',
        'Unit 1 – Electricity: Circuits, Resistance and Mains Electricity',
        'Unit 1 – Electricity: The National Grid',
      ],
      2: [
        'Unit 2 – Waves, Particles and the Universe: Properties of Waves',
        'Unit 2 – Waves: The Electromagnetic Spectrum',
        'Unit 2 – Waves: Sound and Ultrasound',
        'Unit 2 – Radioactivity: Nuclear Radiation (Alpha, Beta, Gamma)',
        'Unit 2 – Radioactivity: Half-Life and Nuclear Equations',
        'Unit 2 – Radioactivity: Nuclear Fission and Fusion',
        'Unit 2 – Space: The Solar System, Stars and Cosmology',
      ],
    }},

    'Combined Science: Trilogy': { papers: {
      1: [
        'Unit 1 – Biology: Cells, Organisation, Nutrition, Respiration, Biological Molecules',
      ],
      2: [
        'Unit 2 – Chemistry: Atomic Structure, Bonding, Reactions, Rates, Acids and Bases',
      ],
      3: [
        'Unit 3 – Physics: Energy, Electricity, Forces, Waves and Radioactivity',
      ],
      4: [
        'Unit 4 – Combined: Inheritance, Ecosystems, Organic Chemistry, Radioactivity',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        'Unit GCS11 – Digital Technology: Hardware (CPU, Memory, Storage)',
        'Unit GCS11 – Data Representation: Binary, Denary, Hexadecimal, Images, Sound, Compression',
        'Unit GCS11 – Networks: Types, Topologies and Protocols',
        'Unit GCS11 – Cyber Security: Threats and Prevention',
        'Unit GCS11 – Software: Operating Systems and Programming Concepts',
        'Unit GCS11 – Algorithms: Computational Thinking and Algorithmic Design',
        'Unit GCS11 – Ethical and Legal Issues',
      ],
      2: [
        'Unit GCS12 – Practical Problem Solving: Programming Project',
        'Unit GCS12 – Programming: Variables, Data Types, Sequence, Selection, Iteration',
        'Unit GCS12 – Programming: Arrays, Subroutines and File Handling',
        'Unit GCS12 – Algorithms: Searching and Sorting Algorithms',
      ],
    }},

    'Geography': { papers: {
      1: [
        'Unit GGY11 – Understanding Our Natural World: Rivers (Processes and Landforms)',
        'Unit GGY11 – Understanding Our Natural World: Coasts (Processes and Landforms)',
        'Unit GGY11 – Understanding Our Natural World: Tectonic Hazards',
        'Unit GGY11 – Understanding Our Natural World: Weather and Climate',
        'Unit GGY11 – Understanding Our Natural World: Ecosystems and Biodiversity',
      ],
      2: [
        'Unit GGY12 – Living in Our World: Population and Migration',
        'Unit GGY12 – Living in Our World: Settlement and Urbanisation',
        'Unit GGY12 – Living in Our World: Development and Global Inequality',
        'Unit GGY12 – Living in Our World: Tourism and Resource Management',
      ],
    }},

    'History': { papers: {
      1: [
        'Unit GHY11 – Changes in Germany 1919–1945: The Weimar Republic',
        'Unit GHY11 – Germany 1919–1945: Rise of the Nazis',
        'Unit GHY11 – Germany 1919–1945: The Nazi State and Life Under Hitler',
        'Unit GHY11 – The USA 1918–68: The Roaring Twenties and the Depression',
        'Unit GHY11 – The USA 1918–68: Civil Rights Movement',
      ],
      2: [
        'Unit GHY12 – Northern Ireland and its Neighbours: Partition of Ireland',
        'Unit GHY12 – Northern Ireland: Stormont, the Civil Rights Movement, the Troubles',
        'Unit GHY12 – Northern Ireland: The Peace Process and the Good Friday Agreement',
      ],
    }},

    'Religious Studies': { papers: {
      1: [
        'Unit GRS11 – The Christian Church: Origins and Early Church',
        'Unit GRS11 – The Christian Church: Christian Beliefs (Nature of God, Trinity, Jesus)',
        'Unit GRS11 – The Christian Church: Authority in the Church (Bible, Tradition, Pope)',
        'Unit GRS11 – The Christian Church: Unity and Diversity (Denominations)',
      ],
      2: [
        'Unit GRS12 – Christianity in the Local and Global Community',
        'Unit GRS12 – Social Justice: Prejudice, Discrimination and Human Rights',
        'Unit GRS12 – Mission and Evangelism',
        'Unit GRS12 – Ecumenism and Inter-Faith Dialogue',
      ],
    }},

    'Business Studies': { papers: {
      1: [
        'Unit GBS11 – The Business Environment: Business Activity and Types of Business',
        'Unit GBS11 – Marketing: Market Research, Segmentation and the Marketing Mix',
        'Unit GBS11 – Finance: Sources of Finance, Costs, Revenue and Profit',
        'Unit GBS11 – People: Organisational Structure and Recruitment',
      ],
      2: [
        'Unit GBS12 – Business Growth and Development: Growth Strategies',
        'Unit GBS12 – Human Resources: Motivation, Training and Employee Relations',
        'Unit GBS12 – Finance: Financial Statements and Decision Making',
        'Unit GBS12 – Global Business: Globalisation, International Trade and Ethics',
      ],
    }},

    'Drama': { papers: {
      1: [
        'CCEA Drama – Component 1: Acting (Performance of Extracts)',
        'CCEA Drama – Component 2: Devising (Devised Performance and Portfolio)',
        'CCEA Drama – Component 3: Written Examination (Set Play and Live Theatre)',
        'Set Play Analysis: Character, Themes, Context and Stage Directions',
        'Live Theatre Evaluation: Analysing a Professional Performance',
      ],
    }},

    'Music': { papers: {
      1: [
        'CCEA Music – Listening and Appraising: Western Classical Music',
        'CCEA Music – Listening and Appraising: Popular Music',
        'CCEA Music – Listening and Appraising: World Music',
        'CCEA Music – Musical Elements: Rhythm, Melody, Harmony, Texture, Timbre, Structure',
        'Performance (Non-Exam Assessment)',
        'Composition (Non-Exam Assessment)',
      ],
    }},

    'Physical Education': { papers: {
      1: [
        'CCEA PE – Unit 1: Physical Factors Affecting Performance',
        'Unit 1 – Anatomy and Physiology: Skeletal, Muscular, Cardiovascular and Respiratory Systems',
        'Unit 1 – Exercise Physiology: Energy Systems and Fitness',
        'Unit 1 – Biomechanics: Levers, Planes and Axes',
      ],
      2: [
        'CCEA PE – Unit 2: Psychological and Socio-Cultural Factors',
        'Unit 2 – Sports Psychology: Skill Classification, Goal Setting, Arousal and Anxiety',
        'Unit 2 – Socio-Cultural: Participation in Northern Ireland, Commercialisation, Ethics',
        'Unit 2 – Health and Wellbeing: Nutrition and Physical Activity Benefits',
        'Practical Performance (Non-Exam Assessment)',
      ],
    }},

    'Food Preparation & Nutrition': { papers: {
      1: [
        'CCEA Food – Component 1: Food Commodities, Nutrition, Diet and Health',
        'Component 1 – Food Science: Functional Properties and Food Safety',
        'Component 1 – Food Provenance: Sustainability, Seasons and Production Methods',
        'NEA 1 – Food Investigation Task',
        'NEA 2 – Food Preparation Assessment',
      ],
    }},

    'Art & Design': { papers: {
      1: [
        'Component 1 – Portfolio: AO1 Develop Ideas through Investigation',
        'Component 1 – Portfolio: AO2 Explore Materials, Techniques and Processes',
        'Component 1 – Portfolio: AO3 Record Ideas, Observations and Insights',
        'Component 1 – Portfolio: AO4 Present a Personal and Meaningful Response',
      ],
      2: [
        'Component 2 – Externally Set Task: Preparatory Period and 10-Hour Supervised Study',
      ],
    }},

    'Design & Technology': { papers: {
      1: [
        'CCEA Technology and Design – Unit GTD11: Designing and Making',
        'Unit GTD11 – Materials: Metals, Polymers, Wood, Textiles and their Properties',
        'Unit GTD11 – Manufacturing Processes and Techniques',
        'Unit GTD11 – Product Analysis and Evaluation',
        'Unit GTD11 – New and Emerging Technologies',
        'NEA – Design and Make Task',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'CCEA Media Studies – Component 1: Exploring the Media',
        'Media Language, Representation, Industry and Audiences',
        'Set Products: TV, Film, Music, Newspaper',
      ],
      2: [
        'CCEA Media Studies – Component 2: Creating Media Products (Non-Exam Assessment)',
      ],
    }},

    'French': { papers: {
      1: ['Listening – All CCEA Themes (Identity, Local Area, School, Future Plans, Global Issues)'],
      2: ['Speaking – Role Play, Photo Card, General Conversation'],
      3: ['Reading – All CCEA Themes; Grammar and Vocabulary'],
      4: ['Writing – Translation into French; Structured and Open-Ended Tasks'],
    }},

    'German': { papers: {
      1: ['Listening – All CCEA Themes'],
      2: ['Speaking – Role Play, Photo Card, General Conversation'],
      3: ['Reading – All CCEA Themes; Grammar and Vocabulary'],
      4: ['Writing – Translation into German; Structured and Open-Ended Tasks'],
    }},

    'Spanish': { papers: {
      1: ['Listening – All CCEA Themes'],
      2: ['Speaking – Role Play, Photo Card, General Conversation'],
      3: ['Reading – All CCEA Themes; Grammar and Vocabulary'],
      4: ['Writing – Translation into Spanish; Structured and Open-Ended Tasks'],
    }},

  }, // end CCEA

} // end GCSE
const A_LEVEL = {

  AQA: {

    'Mathematics': { papers: {
      1: [
        'Pure 1 – Proof: Deduction, Exhaustion, Counter-example',
        'Pure 1 – Algebra and Functions: Indices, Surds, Quadratics, Discriminant',
        'Pure 1 – Coordinate Geometry: Straight Lines, Circles (equation, tangents)',
        'Pure 1 – Sequences and Series: Arithmetic, Geometric, Sigma Notation, Binomial Expansion',
        'Pure 1 – Trigonometry: Radians, Exact Values, Identities, Sine and Cosine Rule',
        'Pure 1 – Exponentials and Logarithms: e^x, ln x, Laws of Logarithms, Exponential Models',
        'Pure 1 – Differentiation: Polynomial, Chain Rule, Product Rule, Quotient Rule, Implicit',
        'Pure 1 – Integration: Indefinite and Definite, Reverse Chain Rule, Area Under a Curve',
        'Pure 1 – Numerical Methods: Change of Sign, Newton-Raphson, Iteration',
        'Pure 1 – Vectors: 2D and 3D, Position Vectors, Dot Product',
      ],
      2: [
        'Pure 2 – Further Algebra: Partial Fractions, Binomial Expansion (any index)',
        'Pure 2 – Further Trigonometry: Addition Formulae, Double Angle Formulae, R sin(x+α)',
        'Pure 2 – Further Calculus: Integration by Parts, Integration by Substitution, Parametric Differentiation',
        'Pure 2 – Differential Equations: Separating Variables, Forming and Solving DEs',
        'Pure 2 – Coordinate Geometry: Parametric Equations',
        'Pure 2 – Further Functions: Modulus, Inverse Functions, Transformations of Graphs',
        'Pure 2 – Proof by Contradiction',
      ],
      3: [
        'Statistics – Sampling: Sampling Methods and the AQA Large Data Set',
        'Statistics – Data Presentation: Measures of Location, Spread, Outliers, Box Plots',
        'Statistics – Probability: Conditional Probability, Venn Diagrams, Tree Diagrams',
        'Statistics – Binomial Distribution: P(X=r), Mean and Variance',
        'Statistics – Normal Distribution: Standardisation, Z-scores, Inverse Normal',
        'Statistics – Hypothesis Testing: One-Tailed and Two-Tailed Tests',
        'Mechanics – Kinematics: SUVAT Equations, Velocity-Time Graphs, Variable Acceleration',
        'Mechanics – Forces: Newton\'s Laws, Friction, Inclined Planes, Connected Particles',
        'Mechanics – Moments: Turning Effect, Equilibrium of a Rigid Body',
        'Mechanics – Projectiles: Horizontal and Vertical Components, Range, Maximum Height',
      ],
    }},

    'Further Mathematics': { papers: {
      1: [
        'Core Pure 1 – Complex Numbers: Cartesian Form, Modulus-Argument, Argand Diagram, Loci',
        'Core Pure 1 – Matrices: Operations, Determinant, Inverse, Transformations in 2D and 3D',
        'Core Pure 1 – Series: Sum of r, r², r³, Method of Differences',
        'Core Pure 1 – Roots of Polynomials: Vieta\'s Formulae',
        'Core Pure 1 – Volumes of Revolution: Around x- and y-axes',
        'Core Pure 1 – Proof by Induction: Series, Divisibility, Matrices',
      ],
      2: [
        'Core Pure 2 – Complex Numbers: De Moivre\'s Theorem, nth Roots, Exponential Form',
        'Core Pure 2 – Further Calculus: Improper Integrals, Maclaurin Series',
        'Core Pure 2 – Polar Coordinates: Polar Curves, Area',
        'Core Pure 2 – Hyperbolic Functions: cosh x, sinh x, tanh x and Inverses',
        'Core Pure 2 – Second-Order Differential Equations: Complementary Function, Particular Integral',
        'Core Pure 2 – Reducible Differential Equations',
      ],
      3: [
        'Optional Paper – Further Pure Mathematics',
        'Optional Paper – Further Mechanics: Circular Motion, SHM, Collisions',
        'Optional Paper – Further Statistics: Continuous Distributions, Chi-Squared, t-tests',
        'Optional Paper – Decision Mathematics: Algorithms, Networks, Linear Programming',
      ],
    }},

    'Biology': { papers: {
      1: [
        '3.1 – Biological Molecules: Carbohydrates, Lipids, Proteins, Nucleic Acids, Enzymes, Water, Inorganic Ions',
        '3.2 – Cells: Eukaryotic and Prokaryotic Structure, Electron Microscopy, Mitosis, Meiosis, Cell Membranes and Transport',
        '3.3 – Organisms Exchange Substances: Gas Exchange in Mammals, Fish and Insects; Digestion; Mass Transport in Blood and Plants',
        '3.4 – Genetic Information, Variation and Relationships: DNA Replication, Transcription, Translation, Genetic Diversity, Biodiversity, Classification, Evolution',
      ],
      2: [
        '3.5 – Energy Transfers: Photosynthesis (light-dependent reaction, Calvin cycle), Respiration (glycolysis, Krebs cycle, oxidative phosphorylation), Energy Transfer in Ecosystems',
        '3.6 – Organisms Respond to Changes: Nervous System, Hormones, Muscle Contraction, Homeostasis (blood glucose, thermoregulation)',
        '3.7 – Genetics, Populations, Evolution and Ecosystems: Mendelian and Non-Mendelian Inheritance, Hardy-Weinberg, Populations, Ecosystems, Nutrient Cycles',
        '3.8 – Control of Gene Expression: Epigenetics, Gene Expression, Stem Cells, Recombinant DNA Technology, Genetic Fingerprinting',
      ],
      3: [
        'Paper 3 – Practical Skills: Planning, Data Analysis and Evaluation',
        'Paper 3 – Synoptic Questions: Connecting Concepts Across All Seven Topics',
        'Paper 3 – Essay: Extended Writing on a Broad Biological Topic',
      ],
    }},

    'Chemistry': { papers: {
      1: [
        '1.1 – Atomic Structure: Orbitals, Sub-Shells, Electron Configuration, Ionisation Energies',
        '1.2 – Amount of Substance: Moles, Ideal Gas Equation, Empirical Formulae, Yield',
        '1.3 – Bonding: Ionic, Covalent, Metallic, Intermolecular Forces, VSEPR Theory',
        '1.4 – Energetics: Enthalpy Changes, Hess\'s Law, Bond Enthalpies, Calorimetry',
        '1.5 – Kinetics: Collision Theory, Activation Energy, Catalysts',
        '1.6 – Equilibria: Kc, Le Chatelier\'s Principle',
        '1.7 – Redox: Oxidation States, Half-Equations',
        '2.1 – Periodicity: Atomic Radius, Ionisation Energy, Oxides of Period 3',
        '2.2 – Group 2: Reactions, Solubility, Uses of Compounds',
        '2.3 – Group 7: Redox Reactions, Halide Tests, Uses of Chlorine',
        '3.1 – Nomenclature and Isomerism',
        '3.2 – Alkanes: Fractional Distillation, Combustion, Cracking',
        '3.2 – Alkenes: Addition Reactions, Polymerisation',
        '3.3 – Halogenoalkanes: Nucleophilic Substitution, Elimination',
        '3.4 – Alcohols: Oxidation, Esterification, Dehydration',
        '3.5 – Organic Analysis: IR Spectroscopy, Mass Spectrometry',
      ],
      2: [
        '1.8 – Thermodynamics: Lattice Enthalpy, Born-Haber Cycles, Entropy, Gibbs Free Energy',
        '1.9 – Rate Equations: Order of Reaction, Rate Constant k, Arrhenius Equation',
        '1.10 – Equilibrium Constant Kp',
        '1.11 – Electrode Potentials: Standard Electrode Potential, Electrochemical Cells',
        '1.12 – Acids and Bases: Brønsted-Lowry Theory, Ka, pH Calculations, Buffer Solutions',
        '2.4 – Properties of Period 3: Oxides and Chlorides with Water',
        '2.5 – Transition Metals: Complex Ions, Colour, Catalysis, Variable Oxidation States',
        '2.6 – Reactions of Ions in Aqueous Solution: Precipitation Tests, Ligand Exchange',
        '3.3 – Optical Isomers and Chirality',
        '3.4 – Aldehydes and Ketones: Nucleophilic Addition, Fehling\'s, Tollens\' Tests',
        '3.5 – Carboxylic Acids and Derivatives: Acyl Chlorides, Esters, Condensation Polymers',
        '3.6 – Aromatic Chemistry: Benzene Structure, Electrophilic Substitution',
        '3.7 – Amines: Basic Properties, Amides, Azo Dyes',
        '3.8 – Polymers: Addition and Condensation',
        '3.9 – Amino Acids, Proteins and DNA: Primary Structure, Hydrolysis',
        '3.10 – Organic Synthesis: Multi-Step Pathways and Retrosynthesis',
        '3.11 – NMR Spectroscopy: ¹H NMR (chemical shift, splitting), ¹³C NMR',
        '3.12 – Chromatography: TLC, Column Chromatography, GC, GC-MS',
      ],
      3: [
        'Paper 3 – Practical Skills Assessment: Planning, Apparatus, Techniques, Analysis',
        'Paper 3 – Synoptic Chemistry: Linking Concepts Across the Whole Specification',
      ],
    }},

    'Physics': { papers: {
      1: [
        '3.1 – Measurements and Their Errors: SI Units, Uncertainties, Significant Figures',
        '3.2 – Particles and Radiation: Atomic Structure, Quarks and Leptons, Antimatter, Photons, Photoelectric Effect, Wave-Particle Duality',
        '3.3 – Waves: Progressive and Stationary Waves, Superposition, Diffraction, Refraction, Polarisation',
        '3.4 – Mechanics and Materials: Scalars and Vectors, Moments, Newton\'s Laws, Momentum, Work-Energy, Stress, Strain, Young Modulus',
        '3.5 – Electricity: Current, PD, Resistance, Resistivity, Series and Parallel Circuits, EMF and Internal Resistance, Potential Dividers',
      ],
      2: [
        '3.6 – Further Mechanics and Thermal Physics: Circular Motion, SHM, Resonance and Damping, Thermal Energy, Kinetic Theory, Ideal Gas Law',
        '3.7 – Fields: Gravitational Fields (Newton\'s Law, Orbits); Electric Fields (Coulomb\'s Law, Capacitors); Magnetic Fields (Flux, Motor Effect, Faraday\'s and Lenz\'s Laws)',
        '3.8 – Nuclear Physics: Radioactive Decay (α, β, γ), Nuclear Instability, Half-Life, Fission, Fusion, Binding Energy',
        '3.9 – Capacitors: Capacitance, Energy Stored, Exponential Charge and Discharge',
        '3.10 – Electromagnetic Induction: Faraday\'s and Lenz\'s Laws, AC Generators, Transformers',
      ],
      3: [
        'Paper 3 Section A – Practical Skills and Data Analysis',
        'Paper 3 Section B – Option A: Astrophysics (Telescopes, Stars, Cosmology)',
        'Paper 3 Section B – Option B: Medical Physics (PET, MRI, X-ray, Ultrasound)',
        'Paper 3 Section B – Option C: Engineering Physics (Rotational Dynamics, Thermodynamics)',
        'Paper 3 Section B – Option D: Turning Points in Physics (Special Relativity, Wave-Particle Duality)',
        'Paper 3 Section B – Option E: Electronics (Op-Amps, Digital Systems)',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        '4.1 – Contemporary Processors, Input, Output and Storage',
        '4.2 – Software and Software Development: Types, Translators, Methodologies',
        '4.3 – Exchanging Data: Networks, Protocols (TCP/IP stack), Compression, Encryption',
        '4.4 – Data Types, Data Structures and Algorithms: Arrays, Stacks, Queues, Trees, Graphs, Hash Tables',
        '4.4 – Algorithms: Searching, Sorting, Path-Finding (Dijkstra\'s), Big-O Notation',
        '4.5 – Legal, Moral, Cultural and Ethical Issues',
      ],
      2: [
        '4.6 – Computational Thinking: Abstraction, Decomposition, Automation',
        '4.7 – Problem Solving and Programming: Algorithms, Pseudocode, Flowcharts',
        '4.8 – Structured Programming: Subroutines, Parameters, Recursion',
        '4.9 – Object-Oriented Programming: Classes, Inheritance, Encapsulation, Polymorphism',
        '4.10 – Functional Programming: Higher-Order Functions, Immutability, Lambda',
      ],
    }},

    'Psychology': { papers: {
      1: [
        'Social Influence: Types of Conformity (Asch), Obedience (Milgram), Situational Variables, Resistance to Social Influence, Minority Influence',
        'Memory: Multi-Store Model, Working Memory Model (Baddeley), EWT, Misleading Information, Anxiety, Cognitive Interview',
        'Attachment: Caregiver-Infant Interaction, Stages (Schaffer), Strange Situation (Ainsworth), Cultural Variations, Bowlby\'s Theory, Deprivation, Institutionalisation',
        'Psychopathology: Definitions of Abnormality, Phobias, Depression, OCD — Characteristics, Explanations and Treatments',
      ],
      2: [
        'Approaches: Behaviourism, Social Learning Theory (Bandura), Cognitive Approach, Biological Approach, Psychodynamic Approach (Freud), Humanistic Psychology',
        'Biopsychology: CNS and PNS, Endocrine System, Fight-or-Flight, Localisation of Brain Function, Lateralisation, Split-Brain Research, Neuroimaging',
        'Research Methods: Experimental, Observational, Correlational, Self-Report, Case Studies',
        'Research Methods: Sampling, Statistical Testing, Ethics, Peer Review',
      ],
      3: [
        'Issues and Debates: Gender Bias, Cultural Bias, Free Will vs Determinism, Reductionism vs Holism, Nature-Nurture, Idiographic vs Nomothetic',
        'Option A – Relationships: Evolutionary Explanations, Sexual Selection, Theories of Relationships, Virtual Relationships',
        'Option A – Gender: Sex-Role Stereotypes, Androgyny, Atypical Gender Development, Biological, Cognitive and Social Learning Explanations',
        'Option A – Cognition and Development: Piaget, Vygotsky, Baillargeon, Mirror Neurons',
        'Option B – Schizophrenia: Classification, Biological and Psychological Explanations, Treatments',
        'Option B – Eating Behaviour: Neural and Evolutionary Explanations, Anorexia Nervosa',
        'Option B – Stress: Physiological Response (Selye\'s GAS), Workplace and Life Changes, Management',
        'Option C – Aggression: Neural, Hormonal and Evolutionary Mechanisms, SLT, Deindividuation, Institutional Aggression',
        'Option C – Forensic Psychology: Offender Profiling, Explanations of Criminal Behaviour, Custodial Sentencing',
        'Option C – Addiction: Risk Factors, Biological and Cognitive Explanations, Reducing Addiction',
      ],
    }},

    'Sociology': { papers: {
      1: [
        'Education: Functionalist, Marxist, Feminist and New Right Perspectives on the Role of Education',
        'Education: Differential Achievement by Social Class, Gender and Ethnicity',
        'Education: Internal Factors (labelling, streaming, hidden curriculum) and External Factors',
        'Education: Education Policy (comprehensivisation, marketisation, academies)',
        'Research Methods: Quantitative and Qualitative; Reliability, Validity, Ethics',
      ],
      2: [
        'Families and Households: Types, Perspectives, Changing Structure, Demographic Trends',
        'Families and Households: Gender Roles, Domestic Division of Labour, Domestic Violence',
        'Beliefs in Society: Religion (functionalism, Marxism, feminism), Secularisation, Sects and Cults, Fundamentalism',
        'Optional Topic: Global Development / Health / Media / Work and Leisure',
      ],
      3: [
        'Crime and Deviance: Functionalist, Strain, Interactionist, Marxist, Feminist, Right/Left Realist Theories',
        'Crime and Deviance: Globalisation, Green Crime, State Crime, Moral Panics',
        'Theory and Methods: Consensus vs Conflict, Modernism vs Postmodernism, Positivism vs Interpretivism',
      ],
    }},

    'Economics': { papers: {
      1: [
        '3.1 – Economic Methodology: Positive vs Normative, PPF, Economic Models',
        '3.2 – Price Determination: Demand, Supply, Equilibrium, Consumer and Producer Surplus',
        '3.3 – Production, Costs and Revenue: Short and Long Run, Diminishing Returns, Revenue Curves',
        '3.4 – Market Structures: Perfect Competition, Monopoly, Oligopoly, Monopolistic Competition',
        '3.5 – Labour Market: MRP, Wage Determination, Trade Unions, Monopsony, Minimum Wage',
        '3.6 – Distribution of Income and Wealth: Inequality, Gini Coefficient, Redistribution, Poverty',
        '3.7 – Market Failure and Government Intervention: Externalities, Public Goods, Information Failure, Government Failure',
      ],
      2: [
        '3.8 – Macroeconomic Performance: National Income (GDP, GNP, GNI), HDI, Circular Flow',
        '3.9 – AD/AS Model: Components of AD, SRAS and LRAS, Shifts, Multiplier Effect',
        '3.10 – Economic Performance: Business Cycle, Unemployment, Inflation, Balance of Payments',
        '3.11 – Financial Markets and Monetary Policy: Bank of England, MPC, Interest Rates, QE',
        '3.12 – Fiscal Policy and Supply-Side Policies: Government Spending, Taxation, National Debt, Laffer Curve',
        '3.13 – International Economy: Comparative Advantage, Protectionism, Exchange Rates, IMF and World Bank',
      ],
      3: [
        '3.14 – Synoptic Application: Micro and Macro Applied to Real Contexts',
        'Data Response and Essay Questions',
      ],
    }},

    'Geography': { papers: {
      1: [
        'Water and Carbon Cycles: Global Water Cycle (stores, fluxes, feedback loops), Human Factors, Global Carbon Cycle, Climate Change Links',
        'Hot Desert Environments: Physical Characteristics, Opportunities, Challenges, Desertification',
        'Coastal Systems and Landscapes: Coastal Processes, Landforms of Erosion and Deposition, Coastal Management',
        'Glacial Systems and Landscapes: Glacial Processes, Landforms, Periglaciation, Human Activity',
      ],
      2: [
        'Global Systems and Global Governance: Globalisation, TNCs, International Trade, Global Governance, Antarctica',
        'Changing Places: Place Character, Insider and Outsider Perspectives, Place Representation, Local vs Global Change',
        'Contemporary Urban Environments: Urbanisation, Urban Structure, Urban Deficiencies, Regeneration',
        'Population and the Environment: Environment-Population Relationship, Malthus and Boserup, Carrying Capacity',
      ],
      3: [
        'Geographical Debates (two from six): Climate Change; Disease Dilemmas; Exploring Oceans; Future of Food; Hazardous Earth; Technology in a Changing World',
        'NEA – Independent Investigation',
      ],
    }},

    'History': { papers: {
      1: [
        'Breadth Study (school choice) — Historical Change Over Approximately One Century',
        'Popular AQA options: Russia 1855–1964; USA 1920–73; Britain 1851–1964; Germany 1871–1990',
      ],
      2: [
        'Depth Study (school choice) — Detailed Analysis of a Shorter Period',
        'Popular AQA options: The Tudors 1485–1603; France 1774–99; Germany 1919–45',
      ],
      3: [
        'Historical Controversies: Extended Essay on Competing Historical Interpretations',
      ],
    }},

    'Business': { papers: {
      1: [
        '3.1 – Business Objectives and Strategy: Mission, Objectives, Stakeholder Conflicts',
        '3.2 – Business Growth: Organic Growth, Integration, Economies and Diseconomies of Scale',
        '3.3 – Decision-Making Techniques: Decision Trees, Investment Appraisal (NPV, Payback, ARR), Critical Path Analysis',
        '3.4 – Influences on Business Decisions: Stakeholders, CSR, Ethics, Environmental Considerations',
        '3.5 – The Market: Segmentation, Competitive Analysis, International Marketing',
      ],
      2: [
        '3.6 – Managing Finance: Ratio Analysis (profitability, liquidity, gearing), Cash Flow, Profit and Loss',
        '3.7 – Resource Management: Lean Production (JIT, Kaizen), Capacity Management, Quality (TQM)',
        '3.8 – Managing People: Organisational Culture, Motivation Theories, Leadership Styles',
        '3.9 – Strategic Direction: Ansoff Matrix, Porter\'s Generic Strategies, BCG Matrix, SWOT',
      ],
      3: [
        '3.10 – Synoptic Case Study: Integrated Analysis of a Business Scenario',
      ],
    }},

    'Law': { papers: {
      1: [
        'English Legal System: Court Structure, Legal Personnel (barristers, solicitors, judges, magistrates, juries)',
        'English Legal System: Legal Funding and Access to Justice',
        'Sources of Law: Statute Law (legislative process, delegated legislation)',
        'Sources of Law: Common Law — Doctrine of Precedent (stare decisis, ratio decidendi, obiter dicta)',
        'Sources of Law: Statutory Interpretation (literal, golden, mischief rules; purposive approach)',
        'Criminal Law: Actus Reus and Mens Rea; Strict Liability',
        'Criminal Law: Non-Fatal Offences (s.39, s.47, s.20, s.18); Fatal Offences (murder, manslaughter)',
        'Criminal Law: General Defences (insanity, automatism, intoxication, self-defence, consent)',
      ],
      2: [
        'Law Making: Parliamentary Law Making, Judicial Law Making, Law Reform (Law Commission)',
        'Law of Tort: Negligence (Caparo three-stage test, breach, causation, remoteness)',
        'Law of Tort: Occupiers\' Liability (1957 and 1984 Acts)',
        'Law of Tort: Private Nuisance, Public Nuisance, Vicarious Liability',
        'Law of Tort: Defences (contributory negligence, volenti) and Remedies (damages, injunction)',
      ],
      3: [
        'Nature of Law: Law and Morality, Law and Justice, Human Rights Act 1998',
        'Option — Contract Law: Formation, Terms, Vitiating Factors, Discharge, Remedies',
        'Option — Further Criminal Law: Property Offences (theft, robbery, burglary)',
      ],
    }},

    'Religious Studies': { papers: {
      1: [
        'Philosophy of Religion: Ancient Influences (Plato\'s Forms, Aristotle\'s Four Causes)',
        'Philosophy of Religion: Soul, Mind and Body (Plato, Aristotle, Descartes, Dawkins)',
        'Philosophy of Religion: Arguments for God\'s Existence — Cosmological, Teleological, Ontological',
        'Philosophy of Religion: Religious Experience (conversion, mystical, numinous; James)',
        'Philosophy of Religion: Problem of Evil (Augustine\'s Theodicy, Irenaeus\'s Soul-Making)',
        'Philosophy of Religion: Religious Language (via negativa, analogy, symbol, verification, falsification)',
      ],
      2: [
        'Religion and Ethics: Natural Moral Law (Aquinas)',
        'Religion and Ethics: Situation Ethics (Fletcher)',
        'Religion and Ethics: Kantian Ethics (Categorical Imperative)',
        'Religion and Ethics: Utilitarianism (Bentham, Mill, Singer)',
        'Religion and Ethics: Euthanasia and Medical Ethics',
        'Religion and Ethics: Business Ethics and CSR',
        'Religion and Ethics: Conscience (Aquinas, Butler, Freud)',
        'Religion and Ethics: Sexual Ethics',
      ],
      3: [
        'Study of Religion — Christianity: Sources of Authority, Person of Jesus Christ, Christian Moral Principles',
        'Study of Religion — Christianity: Liberation Theology, Gender and Sexuality, Pluralism, Science and Religion',
        'Alternative: Islam or Judaism — Sources, Beliefs and Contemporary Issues',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'Media Language: Semiotics (Barthes), Narrative (Propp, Todorov), Genre Theory',
        'Representation: Stuart Hall\'s Theory; Gender, Ethnicity, Class, Age, Sexuality',
        'Media Industries: Ownership, Funding Models, Regulation (Ofcom, BBFC)',
        'Audiences: Hypodermic Needle, Uses and Gratifications, Reception Theory, Cultivation Theory',
        'Set Products – Newspapers, Advertising, Music Video, Online/Social Media',
      ],
      2: [
        'Long-Form TV Drama: UK and US Comparison — Genre, Narrative, Representation, Industry',
        'Film: Hollywood Industry, Spectatorship, British Film',
        'Magazines, Radio or Video Games: Industry, Audiences and Representation',
        'Media in the Digital Age: Convergence, Digitalisation',
      ],
    }},

    'Politics': { papers: {
      1: [
        'UK Politics: Democracy and Participation, Political Parties, Electoral Systems, Voting Behaviour and the Media',
        'UK Government: The Constitution, Parliament, Prime Minister and Cabinet, The Judiciary',
        'UK Government: Devolution (Scotland, Wales, Northern Ireland)',
      ],
      2: [
        'Core Political Ideas: Liberalism (Locke, Mill, Rawls), Socialism (Marx, Gramsci), Conservatism (Burke, Oakeshott, Thatcher)',
        'Additional Political Ideas: Feminism, Nationalism, Multiculturalism or Anarchism or Ecologism',
        'Global Politics: International System, State Sovereignty, Theories (Realism, Liberalism)',
        'Global Politics: Global Governance (UN, NATO, WTO), International Security, Poverty and Development',
      ],
    }},

    'French': { papers: {
      1: [
        'Listening, Reading and Translation: Theme 1 – Les aspects de la société française contemporaine',
        'Theme 1 – La famille en voie de changement; Le cinéma français; Les médias',
        'Theme 2 – La culture politique et artistique dans les pays francophones',
        'Theme 3 – La France et son passé historique / Les deux guerres mondiales',
        'Translation from French into English; Grammar — All A-Level Structures',
      ],
      2: [
        'Individual Research Project: 2-Minute Presentation and Discussion',
        'Essay on Set Literary Text (novel or play)',
        'Essay on Set Film (French-language)',
        'Translation from English into French',
      ],
    }},

    'German': { papers: {
      1: [
        'Listening, Reading and Translation: Theme 1 – Aspekte der deutschen Gesellschaft',
        'Theme 1 – Familie im Wandel; Jugend von heute; Einwanderung und Multikulturalismus',
        'Theme 2 – Politische und kulturelle Aspekte der deutschsprachigen Welt',
        'Theme 3 – Das Dritte Reich: Entstehung, Ideologie und Auswirkungen',
        'Translation from German into English; Grammar — All A-Level Structures',
      ],
      2: [
        'Individual Research Project: 2-Minute Presentation and Discussion',
        'Essay on Set Literary Text (novel or play)',
        'Essay on Set Film (German-language)',
        'Translation from English into German',
      ],
    }},

    'Spanish': { papers: {
      1: [
        'Listening, Reading and Translation: Theme 1 – Aspectos de la sociedad hispanohablante',
        'Theme 1 – Familia y relaciones; Jóvenes de hoy; La España actual y su identidad',
        'Theme 2 – Aspectos políticos y culturales del mundo hispano',
        'Theme 3 – La dictadura de Franco y la Transición a la democracia',
        'Translation from Spanish into English; Grammar — All A-Level Structures',
      ],
      2: [
        'Individual Research Project: 2-Minute Presentation and Discussion',
        'Essay on Set Literary Text (novel or play)',
        'Essay on Set Film (Spanish-language)',
        'Translation from English into Spanish',
      ],
    }},

    'English Language': { papers: {
      1: [
        'Language – Varieties in Language and Literature: Applying Linguistic Frameworks (phonology, lexis, semantics, grammar, discourse, pragmatics)',
        'Language – Varieties: Methods and Analysis of Spoken and Written Texts',
        'Language – Varieties: Representation and How Writers Construct Meaning',
      ],
      2: [
        'Language – Diversity and Change: Language Diversity (gender, ethnicity, age, occupation, region)',
        'Language – Diversity and Change: Historical and Contemporary Language Change',
        'Language – Diversity and Change: Attitudes to Language (prescriptivism vs descriptivism)',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'Love Through the Ages: AQA Pre-1900 Poetry Anthology — Studied Poems',
        'Love Through the Ages: Prose Text 1800–Present — Themes and Context',
        'Love Through the Ages: Drama Text Pre-1900 — Themes and Dramatic Technique',
        'Unseen Poetry Comparison',
      ],
      2: [
        'Texts in Shared Contexts: Two Paired Texts from a Shared Period or Theme',
        'Contextual Analysis: Linking Texts to Historical, Social and Literary Context',
        'Extended Comparative Essay',
      ],
    }},

    'Environmental Science': { papers: {
      1: [
        'Unit 1 – The Living Environment: Ecosystems, Energy Flow, Nutrient Cycles, Biodiversity (measurement, threats, conservation)',
        'Unit 1 – Populations: Population Growth (J and S curves), Carrying Capacity, Human Population Growth',
        'Unit 1 – Evolution: Natural Selection, Speciation',
        'Unit 1 – Biomes: Tropical Rainforest, Savanna, Temperate Forest, Tundra, Desert',
      ],
      2: [
        'Unit 2 – The Physical Environment: Atmosphere, Hydrosphere, Hydrological Cycle, Lithosphere',
        'Unit 2 – Climate Change: Causes (greenhouse effect), Evidence, Impacts, Responses (Kyoto, Paris Agreement)',
        'Unit 2 – Pollution: Air, Water and Soil Pollution; Sources, Effects, Control',
        'Unit 2 – Sustainable Development: Renewable Energy, Conservation, Environmental Policy and Legislation',
      ],
    }},

    'Art & Design': { papers: {
      1: [
        'Component 1 – Personal Investigation: Self-Directed Study of an Area of Practice',
        'Component 1 – Preparatory Work: Research, Experimentation, Sustained Development',
        'Component 1 – Critical and Contextual Studies: Analysis of Artists, Craftspeople and Designers',
        'Component 1 – Personal Statement: Written Rationale',
        'Component 1 – Final Realisation',
      ],
      2: [
        'Component 2 – Externally Set Assignment: Set Brief Issued by AQA',
        'Component 2 – Preparatory Period: Research, Planning and Development',
        'Component 2 – 15-Hour Supervised Time: Final Piece',
      ],
    }},

    'Drama & Theatre Studies': { papers: {
      1: [
        'Component 1 – Devising (Practical): Creating a Devised Piece Inspired by a Practitioner',
        'Component 1 – Practitioners: Stanislavski, Brecht, Artaud, Berkoff',
        'Component 1 – Portfolio: Rationale, Development Log, Evaluation',
      ],
      2: [
        'Component 2 – Texts in Practice (Practical): Performance of Two Extracts from Different Plays',
        'Component 2 – Performance Skills: Vocal, Physical, Characterisation',
      ],
      3: [
        'Component 3 – Theatre Makers in Practice (Written Examination)',
        'Set Text Analysis: Dramatic Intentions, Character, Theme',
        'Live Theatre Evaluation: Analysis of a Professional Production',
        'Conceptualising a Production: Director\'s Vision, Design Choices',
      ],
    }},

    'Music': { papers: {
      1: [
        'Component 3 – Music History Written Paper',
        'Area of Study 1 – Western Classical Music and Its Contexts: Baroque, Classical, Romantic, 20th Century (set works)',
        'Area of Study 2 – Popular Music: Rock, Pop, Blues (set works)',
        'Area of Study 3 – Traditional Music: Folk and World Music (set works)',
        'Area of Study 4 – Western Classical Since 1910 or Jazz or Film Music (set works)',
        'Listening and Appraising Skills; Composition and Performance (Non-Exam)',
      ],
    }},

    'Physical Education': { papers: {
      1: [
        '3.1 – Anatomy and Physiology: Skeletal and Muscular Systems, Energy Systems, Cardiovascular and Respiratory Responses',
        '3.2 – Exercise Physiology: Principles of Training, VO₂ max, Injury Prevention, Ergogenic Aids',
        '3.3 – Biomechanical Movement: Newton\'s Laws, Lever Systems, Projectile Motion, Fluid Mechanics',
        '3.4 – Sport Psychology: Personality, Attitudes, Arousal, Anxiety, Motivation, Attribution, Confidence, Group Dynamics',
      ],
      2: [
        '3.5 – Sport and Society: Amateurism, Professionalism, Commercialisation, Globalisation, Media',
        '3.6 – Technology in Sport: Performance Analysis, Equipment Technology, Anti-Doping',
        'NEA – Practical Performance and Evaluating and Planning for Performance (EPP)',
      ],
    }},

    'Design & Technology': { papers: {
      1: [
        'Technical Principles: Materials and Their Working Properties (timbers, metals, polymers, textiles, papers and boards, composites)',
        'Technical Principles: Smart Materials, Modern Materials, Nano-Materials',
        'Technical Principles: Electronic and Mechanical Systems',
        'Designing and Making Principles: Iterative Design, User-Centred Design, Sustainability (LCA)',
        'Designing and Making Principles: Manufacturing Methods, Quality Control, CAD/CAM',
        'NEA – Non-Exam Assessment: Design and Make Task',
      ],
    }},

    'Product Design': { papers: {
      1: [
        'Technical Principles: Material Properties (metals, polymers, timbers, textiles, composites, smart materials)',
        'Technical Principles: Manufacturing Processes (casting, forming, cutting, joining, finishing)',
        'Designing and Making Principles: User-Centred Design, Ergonomics, Anthropometrics',
        'Designing and Making Principles: Iterative Design, Prototyping, Commercial Manufacture',
        'Designing and Making Principles: Sustainability (LCA, circular economy)',
        'Social, Moral, Cultural and Environmental Implications of Product Design',
        'NEA – Design and Make Task: Substantial Practical Project',
      ],
    }},

  }, // end AQA A-Level

  Edexcel: {

    'Mathematics': { papers: {
      1: [
        'Pure Mathematics 1 (Non-Calculator): Proof; Algebra and Functions; Coordinate Geometry; Sequences and Series; Trigonometry; Exponentials and Logarithms; Differentiation; Integration; Numerical Methods; Vectors',
      ],
      2: [
        'Pure Mathematics 2 (Calculator): Partial Fractions; Modulus Functions; Parametric Equations; Implicit Differentiation; Further Integration; Differential Equations',
      ],
      3: [
        'Statistics and Mechanics (Calculator)',
        'Statistics: Statistical Sampling (large data set), Data Presentation, Probability, Binomial and Normal Distributions, Hypothesis Testing',
        'Mechanics: Kinematics (SUVAT, variable acceleration), Forces (Newton\'s Laws, friction), Moments, Projectiles',
      ],
    }},

    'Further Mathematics': { papers: {
      1: [
        'Core Pure Mathematics 1: Complex Numbers (Argand diagram, modulus-argument, loci)',
        'Core Pure Mathematics 1: Matrices (operations, transformations, determinant, inverse)',
        'Core Pure Mathematics 1: Proof by Induction; Series; Volumes of Revolution; Roots of Polynomials',
      ],
      2: [
        'Core Pure Mathematics 2: Complex Numbers (de Moivre\'s Theorem, nth roots)',
        'Core Pure Mathematics 2: Further Calculus (Maclaurin series); Polar Coordinates; Hyperbolic Functions; Second-Order DEs',
      ],
      3: [
        'Optional Papers: Further Pure / Further Mechanics 1 / Further Statistics 1 / Decision Mathematics 1',
      ],
    }},

    'Biology': { papers: {
      1: [
        'Topics 1–4: Biological Molecules and Cells; Mechanisms of Exchange and Transport; Cell Cycle and Differentiation; DNA, Replication and Protein Synthesis',
      ],
      2: [
        'Topics 5–8: Energy for Biological Processes (photosynthesis, respiration); Microbiology and Pathogens; Modern Genetics; Origins of Genetic Variation',
        'Ecosystems: Energy Flow, Nutrient Cycles, Succession, Conservation',
      ],
      3: [
        'Paper 3 – Synoptic: Practical Biology, Data Analysis, Extended Experimental Design',
      ],
    }},

    'Chemistry': { papers: {
      1: [
        'Advanced Inorganic and Physical Chemistry: Atomic Structure, Bonding, Redox, Inorganic (Group 2, Group 17, Transition Metals), Amount of Substance, Equilibrium (Kc, Kp)',
      ],
      2: [
        'Advanced Organic Chemistry and Analysis: Nomenclature, Isomerism, Organic Reactions (alkanes, alkenes, halogenoalkanes, alcohols, carbonyls, arenes), Organic Synthesis, IR, MS, NMR',
        'Thermodynamics: Enthalpy, Entropy, Gibbs Free Energy; Rate Equations: Arrhenius Equation',
      ],
      3: [
        'General and Practical Principles: Synoptic Paper, Required Practical Skills',
      ],
    }},

    'Physics': { papers: {
      1: [
        'Topics 1–7: Mechanics (scalars, vectors, Newton\'s Laws, momentum), Electric Circuits, Further Mechanics (circular motion, SHM), Electric and Magnetic Fields, Nuclear and Particle Physics, Thermodynamics',
      ],
      2: [
        'Topics 8–16: Space, Nuclear Radiation, Gravitational Fields, Oscillations, Astrophysics and Cosmology, Practical Skills',
      ],
      3: [
        'General and Practical Principles: Synoptic Paper; Option Topics (Astrophysics / Medical Physics / Applied Physics)',
      ],
    }},

    'Economics A': { papers: {
      1: [
        'Theme 1 – Introduction to Markets and Market Failure: Scarcity, Demand, Supply, Elasticity, Market Failure, Government Intervention',
      ],
      2: [
        'Theme 2 – The UK Economy: Performance and Policies: GDP, Inflation, Unemployment, AD/AS, Fiscal and Monetary Policy, Supply-Side, International Trade',
      ],
      3: [
        'Theme 3 – Business Behaviour and the Labour Market: Market Structures, Labour Market, MRP Theory',
        'Theme 4 – A Global Perspective: Globalisation, Development Economics, Synoptic Application',
      ],
    }},

    'Business': { papers: {
      1: [
        'Theme 1 – Marketing, People and Global Businesses: Customer Needs, Market Research, Marketing Mix, Managing People (motivation, structures, leadership), Entrepreneurship',
      ],
      2: [
        'Theme 2 – Business Activities, Decisions and Strategy: Raising Finance, Financial Planning (budgets, break-even), Managing Finance (ratios), Resource Management (lean production), External Influences',
      ],
      3: [
        'Theme 3 – Investigating Business in a Competitive Environment: Synoptic Case Study, Strategic Analysis (Porter\'s Five Forces, Ansoff, SWOT)',
      ],
    }},

    'History': { papers: {
      1: [
        'Breadth Study (school choice): Historical Change Over Approximately One Century',
        'Popular options: Britain Transformed c.1918–97; Russia and Its Rulers 1855–1964',
      ],
      2: [
        'Depth Study (school choice): Germany 1914–45; Mao\'s China 1945–76; USA in Asia 1945–75',
      ],
      3: [
        'Historical Controversies: Historiographical Essay on Competing Scholarly Interpretations',
      ],
    }},

    'Geography': { papers: {
      1: [
        'Dynamic Landscapes: Tectonic Processes and Hazards; Glaciated or Coastal Landscape Systems',
      ],
      2: [
        'Dynamic Places: Globalisation (TNCs, inequality); Shaping Places — Regenerating or Diverse Places',
      ],
      3: [
        'Synoptic Investigation: Pre-Release Resource Booklet on a Contemporary Issue; Fieldwork (Human and Physical)',
      ],
    }},

    'Psychology': { papers: {
      1: [
        'Social Psychology: Conformity (Asch), Obedience (Milgram), Deindividuation',
        'Cognitive Psychology: Memory (MSM, WMM), EWT, Cognitive Development (Piaget)',
        'Biological Psychology: Brain Localisation, Neurochemistry, Sleep, Aggression',
        'Learning Theories: Classical Conditioning (Pavlov), Operant Conditioning (Skinner), SLT (Bandura)',
      ],
      2: [
        'Clinical Psychology: Mental Health, Classification (DSM-5, ICD-11), Schizophrenia, One Other Disorder',
        'Research Methods in Depth: Experimental Design, Statistical Testing',
      ],
      3: [
        'Issues and Debates; Applying Psychology: Criminal / Child / Sport / Health Psychology',
      ],
    }},

    'Sociology': { papers: {
      1: [
        'Socialisation, Culture and Identity: Families, Youth Subcultures, Media, Theory and Methods Overview',
      ],
      2: [
        'Researching and Understanding Social Inequalities: Class, Gender, Ethnic Inequalities, Research Methods in Practice',
      ],
      3: [
        'Crime, Deviance, Social Control and Social Order: Explanations for Crime, Crime Statistics, Social Control, Applying Theory and Methods',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        '1.1–1.5 – Contemporary Processors, Data, Software, Programming Languages, Boolean Algebra',
        '1.6–1.11 – Communication and the Internet, Databases, Big Data, Functional Programming, Ethical Issues',
      ],
      2: [
        '2.1–2.5 – Computational Thinking, Problem Solving, Algorithms (Big-O, Dijkstra\'s), Theory of Computation (Turing Machines), Data Representation',
      ],
    }},

    'Religious Studies': { papers: {
      1: [
        'Philosophy of Religion: Arguments for God, Problem of Evil, Religious Experience, Miracles, Religious Language, Life After Death',
      ],
      2: [
        'Religion and Ethics: Natural Law, Situation Ethics, Kantian Ethics, Utilitarianism, Free Will, Conscience, Virtue Ethics, Sexual Ethics',
      ],
      3: [
        'Developments in Christian Thought or New Testament or Islam or Judaism',
      ],
    }},

    'English Language and Literature': { papers: {
      1: [
        'Paper 1 – Voices in Speech and Writing: Spoken Language Transcripts, Non-Literary Prose, Literary Non-Fiction',
      ],
      2: [
        'Paper 2 – Varieties in Language and Literature: Satire, Genre Fiction, Poetry from a Literary Period',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'Component 1 – Media Products, Industries and Audiences: Media Language, Representation, Industries, Audiences, Set Products',
      ],
      2: [
        'Component 2 – Media Forms and Products in Depth: Long-Form TV Drama (UK and US), Film, Music, Online/Social Media',
      ],
    }},

    'Law': { papers: {
      1: [
        'Paper 1 – Theory of Law and the English Legal System: Legal Personnel, Criminal Process, Sentencing, ADR',
      ],
      2: [
        'Paper 2 – Tort, Contract or Criminal Law Option',
      ],
      3: [
        'Paper 3 – Further Law Option',
      ],
    }},

    'Environmental Science': { papers: {
      1: [
        'Unit 1 – Ecosystems and Biodiversity: Ecosystem Structure, Energy Flow, Nutrient Cycles, Conservation, Population Dynamics, Evolution, Speciation',
      ],
      2: [
        'Unit 2 – Energy, Pollution and Climate Change: Fossil Fuels, Renewable Energy, Nuclear Power, Air/Water/Soil Pollution, Climate Change, Environmental Management and Policy',
        'Fieldwork Component: Environmental Survey and Analysis',
      ],
    }},

  }, // end Edexcel A-Level

  OCR: {

    'Biology A': { papers: {
      1: [
        'H420/01 – Biological Processes: Module 2 – Foundations (cells, biological molecules, enzymes, membranes); Module 3 – Exchange and Transport (gas exchange, circulatory systems, transport in plants); Module 5 – Communication, Homeostasis and Energy (nervous system, hormones, excretion, homeostasis, photosynthesis, respiration)',
      ],
      2: [
        'H420/02 – Biological Diversity: Module 4 – Biodiversity, Evolution and Disease (classification, biodiversity, pathogens, immunity); Module 6 – Genetics, Evolution and Ecosystems (gene expression, inheritance, manipulating genomes, ecosystems, populations, evolution)',
      ],
      3: [
        'H420/03 – Unified Biology: Synoptic Paper, Practical Skills Assessment',
      ],
    }},

    'Chemistry A': { papers: {
      1: [
        'H432/01 – Periodic Table, Elements and Physical Chemistry: Module 2 – Foundations (atomic structure, bonding, moles, acids, redox); Module 3 – Periodic Table (Group 2, Group 17, transition metals intro, periodicity); Module 5 – Physical Chemistry (rate equations, equilibria, acids and buffers, electrode potentials, transition metal chemistry)',
      ],
      2: [
        'H432/02 – Synthesis and Analytical Techniques: Module 4 – Core Organic (alkanes, alkenes, halogenoalkanes, alcohols, carbonyls, carboxylic acids, analysis); Module 6 – Advanced Organic (arenes, nitrogen compounds, polymers, NMR, chromatography, organic synthesis)',
      ],
      3: [
        'H432/03 – Unified Chemistry: Synoptic Paper, Practical Skills Assessment',
      ],
    }},

    'Physics A': { papers: {
      1: [
        'H556/01 – Modelling Physics: Module 2 – Foundations of Physics; Module 3 – Forces and Motion (kinematics, Newton\'s Laws, materials); Module 5 – Newtonian World and Astrophysics (circular motion, SHM, gravitational fields, astrophysics)',
      ],
      2: [
        'H556/02 – Exploring Physics: Module 4 – Electrons, Waves and Photons (circuits, waves, quantum physics); Module 6 – Particles and Medical Physics (capacitors, electric fields, magnetic fields, electromagnetic induction, radioactivity, nuclear physics, medical imaging)',
      ],
      3: [
        'H556/03 – Unified Physics: Practical Skills and Synoptic Paper',
      ],
    }},

    'Mathematics A': { papers: {
      1: [
        'H240/01 – Pure Mathematics (Non-Calculator): Proof, Algebra, Coordinate Geometry, Sequences, Trigonometry, Exponentials, Differentiation, Integration, Numerical Methods, Vectors',
      ],
      2: [
        'H240/02 – Pure Mathematics and Statistics: Further Pure, Statistical Sampling, Data Presentation, Probability, Distributions (Binomial, Normal), Hypothesis Testing, Regression and Correlation',
      ],
      3: [
        'H240/03 – Pure Mathematics and Mechanics: Further Pure, Kinematics, Forces, Newton\'s Laws, Moments, Friction, Projectiles',
      ],
    }},

    'Further Mathematics A': { papers: {
      1: [
        'H245/Y540 – Pure Core 1: Complex Numbers, Matrices, Proof by Induction, Vectors, Series',
      ],
      2: [
        'H245/Y541 – Pure Core 2: Further Complex Numbers, Further Calculus, Differential Equations, Polar Coordinates',
      ],
      3: [
        'Option Papers: Statistics / Mechanics / Discrete Mathematics / Further Pure',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        'H446/01 – Computer Systems: Processors (FDE cycle, RISC/CISC), Data Representation (binary, floating point, compression, encryption), Networking (protocols, cybersecurity), Software (OS, translators), Databases (relational, SQL), Big Data, Functional Programming, Ethical Issues',
      ],
      2: [
        'H446/02 – Algorithms and Programming: Computational Thinking (FSMs, regular expressions), Problem Solving, Algorithms (sorting, searching, Dijkstra\'s, Big-O), Theory of Computation (Turing Machines, intractability), OOP, Recursion, Data Structures',
      ],
    }},

    'Economics': { papers: {
      1: [
        'H460/01 – Microeconomics: Economic Foundations, Competitive Markets, Market Failure, Government Intervention, Labour Markets, Market Structures, Inequality',
      ],
      2: [
        'H460/02 – Macroeconomics: Measuring the Economy, AD/AS Model, Economic Performance, Macroeconomic Policy, International Economy',
      ],
      3: [
        'H460/03 – Themes in Economics: Synoptic Application of Micro and Macro, Data Response and Essay',
      ],
    }},

    'Geography': { papers: {
      1: [
        'H481/01 – Physical Systems: Landscape Systems (Coastal or Glaciated); Earth\'s Life Support Systems (Water Cycle, Carbon Cycle)',
      ],
      2: [
        'H481/02 – Human Interactions: Changing Spaces – Making Places; Global Connections (Trade, Migration, Global Governance)',
      ],
      3: [
        'H481/03 – Geographical Debates (two from six): Climate Change; Disease; Oceans; Food; Hazards; Technology; NEA',
      ],
    }},

    'History A': { papers: {
      1: [
        'H505 – Thematic Study and Historical Interpretations (school choice): Change Over ~200 Years, Evaluating Interpretations',
      ],
      2: [
        'H505 – British Period Study and Enquiry (school choice): Period Knowledge, Primary Source Analysis',
      ],
      3: [
        'H505 – Non-British Period Study (school choice): Germany 1871–1991; Russia 1894–1991; The USA 1865–1975',
      ],
    }},

    'Law': { papers: {
      1: [
        'H418/01 – Legal System and Criminal Law: Court Structure, Legal Personnel, Actus Reus and Mens Rea, Non-Fatal and Fatal Offences, Defences',
      ],
      2: [
        'H418/02 – Law Making and Law of Tort: Parliamentary Law Making, Statutory Interpretation, Judicial Precedent, Negligence, Occupiers\' Liability, Nuisance, Vicarious Liability',
      ],
      3: [
        'H418/03-04 – Nature of Law and Contract: Law and Morality, Justice, HRA 1998, Contract Formation, Terms, Discharge, Remedies',
      ],
    }},

    'Business': { papers: {
      1: [
        'H431/01 – Local Business Environment: Business Activity, Marketing, Finance, People, External Influences',
      ],
      2: [
        'H431/02 – UK Business Environment: Business Strategy (Ansoff, Porter), Financial Decisions, Globalisation, Ethics',
      ],
      3: [
        'H431/03 – Global Business Environment: Synoptic Case Study, Global Markets, International Strategy',
      ],
    }},

    'Psychology': { papers: {
      1: [
        'H567/01 – Research Methods: Types of Research, Experimental Design, Sampling, Statistical Testing, Ethics',
      ],
      2: [
        'H567/02 – Core Studies: 20 Compulsory Studies (Milgram, Asch, Zimbardo, Loftus and Palmer, Baron-Cohen, Bandura, Dement and Kleitman, Sperry, Rosenhan, Freud, and others)',
      ],
      3: [
        'H567/03 – Applied Psychology: Issues in Mental Health (Griffiths key study); Option: Criminal / Sport / Health / Educational Psychology',
      ],
    }},

    'Religious Studies': { papers: {
      1: [
        'H573/01 – Philosophy of Religion: Ancient Influences (Plato, Aristotle); Soul, Mind and Body; Arguments for God\'s Existence; Religious Experience; Problem of Evil; Religious Language',
      ],
      2: [
        'H573/02 – Religion and Ethics: Natural Law; Situation Ethics; Kantian Ethics; Utilitarianism; Free Will; Conscience; Virtue Ethics; Sexual Ethics',
      ],
      3: [
        'H573/03 – Developments in Religious Thought (Christianity): Sources of Authority, Person of Jesus, Christian Ethics, Liberation Theology, Gender, Pluralism, Science and Religion',
      ],
    }},

    'Sociology': { papers: {
      1: [
        'H580/01 – Socialisation, Culture and Identity: Identity, Socialisation, Culture, The Family, The Media',
      ],
      2: [
        'H580/02 – Social Inequalities: Social Differentiation (class, gender, ethnicity, age), Health Inequalities, Education Inequalities',
      ],
      3: [
        'H580/03 – Debates in Contemporary Society: Crime and Deviance, Global Development, The Media',
      ],
    }},

    'Drama and Theatre': { papers: {
      1: [
        'H459/31 – Analysing and Evaluating Theatre: Live Performance Analysis, Set Text Study, Evaluation of Own Work',
      ],
      2: [
        'H459/41-48 – Deconstructing Texts for Performance: Two Dramatic Texts Analysed in Depth, Realising a Performance Concept',
      ],
    }},

    'English Language': { papers: {
      1: [
        'H470/01 – Exploring Language: Language in Action, Linguistic Frameworks (phonology, lexis, semantics, grammar, discourse, pragmatics), Representation and Context',
      ],
      2: [
        'H470/02 – Dimensions of Linguistic Variation: Language Diversity, Language Change, Language Acquisition, Attitudes to Language',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'H472/01 – Drama and Poetry Pre-1900: Set Play, Set Poet Study and Unseen Poetry Analysis',
      ],
      2: [
        'H472/02 – Comparative and Contextual Study: Two Texts from Different Genres (one pre-1900, one post-1900)',
      ],
    }},

    'Film Studies': { papers: {
      1: [
        'H410/01 – Film History: US Mainstream Hollywood, British Film, Silent Cinema or Non-English Language Film',
      ],
      2: [
        'H410/02 – Critical Approaches: Narrative, Genre, Representation, Aesthetics, Film Movements, Documentary',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'H409/01 – Media Messages: Media Language, Representation, Industries, Audiences, Set Products',
      ],
      2: [
        'H409/02 – Evolving Media: Digital Media, Convergence, Online Social Media, Video Games, Evolving Industries',
      ],
    }},

    'Physical Education': { papers: {
      1: [
        'H555/01 – Physiological Factors: Applied Anatomy and Physiology, Exercise Physiology, Biomechanics, Skill Acquisition',
      ],
      2: [
        'H555/02 – Psychological Factors: Skill Acquisition in Depth, Sports Psychology (arousal, motivation, attribution, self-efficacy)',
      ],
      3: [
        'H555/03 – Socio-Cultural Issues: Sport and Society, Commercialisation, Technology in Sport; NEA – Practical Performance',
      ],
    }},

    'Music': { papers: {
      1: [
        'H543/05 – Listening and Appraising: AoS 1 – Vocal Music; AoS 2 – Instrumental Music; AoS 3 – Film Music; AoS 4 – Popular Music and Jazz; Composition and Performance (Non-Exam)',
      ],
    }},

  }, // end OCR A-Level

  Eduqas: {

    'Mathematics': { papers: {
      1: [
        'A300U10-1 – Pure Mathematics: Proof, Algebra, Coordinate Geometry, Sequences, Trigonometry, Exponentials, Calculus, Numerical Methods, Vectors',
      ],
      2: [
        'A300U20-1 – Applied Mathematics: Statistics (sampling, probability, distributions, hypothesis testing, regression) and Mechanics (kinematics, Newton\'s Laws, friction, projectiles, moments)',
      ],
    }},

    'Biology': { papers: {
      1: [
        'A400U10-1 – Energy, Homeostasis and the Environment: Photosynthesis, Respiration, Microbiology, Population Ecology, Excretion (kidney), Temperature Regulation',
      ],
      2: [
        'A400U20-1 – Continuity and Change: Nucleic Acids, Cell Division, Gene Mutation, Immunology, Population Genetics, Evolution and Speciation',
      ],
      3: [
        'A400U30-1 – Organisms and Environments: Ecology, Natural Systems, Biotechnology, Practical Skills Assessment',
      ],
    }},

    'Chemistry': { papers: {
      1: [
        'A410U10-1 – Physical and Inorganic Chemistry: Atomic Structure, Bonding, Energetics, Kinetics, Equilibria, Redox, Group 2, Group 17, Period 3 Oxides, Transition Metals',
      ],
      2: [
        'A410U20-1 – Organic Chemistry and Analysis: Nomenclature, Isomerism, Organic Reactions (all functional groups), Arenes, Nitrogen Compounds, Organic Synthesis, IR, MS, NMR, Chromatography',
      ],
      3: [
        'A410U30-1 – Physical Chemistry and Practical Skills: Thermodynamics (entropy, Gibbs Free Energy, Born-Haber), Advanced Rates and Equilibria, Electrochemistry, Synoptic Practical Questions',
      ],
    }},

    'Physics': { papers: {
      1: [
        'A420U10-1 – Newtonian Physics: Kinematics, Dynamics, Circular Motion, SHM, Properties of Matter, Kinetic Theory and Ideal Gases',
      ],
      2: [
        'A420U20-1 – Electromagnetism and Light: Electric Fields, Capacitors, Magnetic Fields, Electromagnetic Induction, Photons and Electrons, Nuclear Physics (radioactivity, half-life, binding energy)',
      ],
      3: [
        'A420U30-1 – Oscillations and Nuclei: Gravitational Fields, Magnetic Resonance, Radioactivity in Depth, Nuclear Energy, Synoptic and Practical Questions',
      ],
    }},

    'Computer Science': { papers: {
      1: [
        'A500U10-1 – Computer Architecture, Data, Communication and Applications: CPU, Memory, Networks (protocols, cybersecurity), Data Representation (binary, compression, encryption), Boolean Logic, Databases, SQL, Ethical Issues',
      ],
      2: [
        'A500U20-1 – Algorithms and Programming (On-Screen): Computational Thinking, Algorithms (searching, sorting, Dijkstra\'s), Programming (OOP, functional), Theory of Computation (FSMs, Turing Machines), Robust Programs',
      ],
    }},

    'Economics': { papers: {
      1: [
        'A520U10-1 – Microeconomics: Demand, Supply, Elasticity, Market Failure, Government Intervention, Labour Markets, Market Structures',
      ],
      2: [
        'A520U20-1 – Macroeconomics: Macroeconomic Objectives, AD/AS, Business Cycle, Fiscal and Monetary Policy, International Trade, Exchange Rates, Globalisation',
      ],
      3: [
        'A520U30-1 – Synoptic: Micro and Macro Applied to Real Contexts, Data Response and Essay',
      ],
    }},

    'Business': { papers: {
      1: [
        'A510U10-1 – Business Opportunities and Functions: Enterprise, Marketing, Operations, HR, Finance',
      ],
      2: [
        'A510U20-1 – Business Analysis and Strategy: Strategic Analysis, Strategic Choice, Corporate Objectives, Competitive Advantage',
      ],
      3: [
        'A510U30-1 – Business in a Changing World: Globalisation, Technology, Sustainability, Synoptic Case Study',
      ],
    }},

    'Geography': { papers: {
      1: [
        'A110U10-1 – Changing Landscapes: Coasts (processes, landforms, management); Glaciated Upland Landscapes; Fieldwork Skills',
      ],
      2: [
        'A110U20-1 – Changing Places: Urban and Rural Change, Place Character and Identity, Fieldwork Investigation',
      ],
      3: [
        'A110U30-1 – Global Systems and Governance: Globalisation, International Trade, Human Rights, Antarctica',
      ],
    }},

    'Sociology': { papers: {
      1: [
        'A200U10-1 – Socialisation and Identity: Families, Youth Subcultures, Media, Socialisation, Identity, Research Methods',
      ],
      2: [
        'A200U20-1 – Understanding Social Processes: Education, Religion, Power and Politics, Research Methods in Practice',
      ],
      3: [
        'A200U30-1 – Social Change: Crime and Deviance, Global Development, Sociological Theory and Methods (Synoptic)',
      ],
    }},

    'Psychology': { papers: {
      1: [
        'A290U10-1 – Memories, Thinking and Social Behaviour: Cognitive Psychology (memory, EWT), Social Psychology (conformity, obedience), Research Methods',
      ],
      2: [
        'A290U20-1 – Behaviour, Alternatives and Research: Behaviourism, Alternative Approaches (cognitive, biological, humanistic, psychodynamic), Research Methods in Practice',
      ],
      3: [
        'A290U30-1 – Applied Psychology and Issues: Option Topic (Criminal / Sport / Educational / Health Psychology); Issues in Psychology (ethics, bias, free will)',
      ],
    }},

    'Religious Studies': { papers: {
      1: [
        'A120U10-1 – Introduction to the Study of Religion: Philosophy of Religion (existence of God, evil, religious experience, life after death)',
      ],
      2: [
        'A120U20-1 – The Study of Religion (school choice): Christianity; Islam; Judaism; Hinduism; Buddhism',
      ],
      3: [
        'A120U30-1 – Applied Study: Ethics, Religion and Society, Contemporary Issues (bioethics, environmental ethics, human rights)',
      ],
    }},

    'English Language': { papers: {
      1: [
        'A700U10-1 – Language in Context: Language Change, Language Diversity, Spoken and Written Text Analysis',
      ],
      2: [
        'A700U20-1 – Language Investigation and Creative Writing: Independent Investigation, Original Writing with Commentary',
      ],
      3: [
        'A700U30-1 – Language, Power and Identity: Power in Language, Language and Gender, Language and Identity, Digital Communication',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'A720U10-1 – Poetry: Set Pre-1900 Poetry Collection, Unseen Poetry Analysis',
      ],
      2: [
        'A720U20-1 – Drama: Shakespeare Set Play; Post-1900 Drama Set Text',
      ],
      3: [
        'A720U30-1 – Prose: 19th-Century Prose; Post-1900 Prose; Comparative Prose Extracts',
      ],
    }},

    'Media Studies': { papers: {
      1: [
        'A680U10-1 – Media Products, Industries and Audiences: Media Language, Representation, Industries, Audiences, Set Products',
      ],
      2: [
        'A680U20-1 – Media Forms and Products in Depth: Long-Form TV Drama, Music Industry, Film',
      ],
    }},

    'Law': { papers: {
      1: [
        'A150U10-1 – Nature of Law and the English Legal System: Rule of Law, Sources of Law, Legal Personnel, Court Structure, ADR',
      ],
      2: [
        'A150U20-1 – Law of Obligations: Contract Law (formation, terms, discharge, remedies) and Tort (negligence, nuisance, vicarious liability)',
      ],
      3: [
        'A150U30-1 – Human Rights Law: ECHR, HRA 1998, Balancing Rights, Key Cases',
      ],
    }},

    'Film Studies': { papers: {
      1: [
        'A670U10-1 – US Film: Classical Hollywood, Post-Classical Hollywood, American Independent, Documentary',
      ],
      2: [
        'A670U20-1 – Global Film: Silent Cinema, European Cinema, World Cinema (Africa, Asia, Latin America); Comparative Analysis',
      ],
    }},

    'Physical Education': { papers: {
      1: [
        'A550U10-1 – Anatomy, Physiology, Exercise Physiology and Biomechanics: Skeletal and Muscular Systems, Cardiovascular and Respiratory Responses, VO₂ max, Energy Systems, Newton\'s Laws, Levers, Projectile Motion',
      ],
      2: [
        'A550U20-1 – Psychology of Sport and Socio-Cultural Issues: Skill Acquisition, Sports Psychology (motivation, arousal, anxiety, confidence, group dynamics), Socio-Cultural Factors (gender, ethnicity, commercialisation, media)',
      ],
    }},

    'Drama and Theatre': { papers: {
      1: [
        'A690U30-1 – Written Examination: Set Play Analysis (themes, characters, staging, performance concepts), Live Theatre Review, Evaluation of Own Practical Work',
      ],
    }},

  }, // end Eduqas A-Level

  CCEA: {

    'Mathematics': { papers: {
      1: [
        'AS Unit 1 (A2MA11) – Pure Mathematics with Mechanics: Algebra, Coordinate Geometry, Trigonometry, Calculus, Kinematics, Newton\'s Laws',
      ],
      2: [
        'AS Unit 2 (A2MA12) – Pure Mathematics with Statistics: Sequences, Exponentials and Logarithms, Integration, Data Presentation, Probability, Binomial and Normal Distributions',
      ],
      3: [
        'A2 Unit 1 (A2MA21) – Pure Mathematics: Further Algebra, Complex Numbers, Proof by Induction, Further Calculus, Differential Equations, Vectors in 3D',
      ],
      4: [
        'A2 Unit 2 (A2MA22) – Pure Mathematics with Mechanics: Further Pure, Circular Motion, SHM, Momentum, Work-Energy Theorem',
      ],
      5: [
        'A2 Unit 3 (A2MA23) – Pure Mathematics with Statistics: Further Pure, Hypothesis Testing, Correlation and Regression, Further Probability',
      ],
    }},

    'Biology': { papers: {
      1: [
        'AS Unit 1 (A2BI11) – Molecules and Cells: Cell Structure, Biological Molecules, Enzymes, Cell Division (Mitosis), Gas Exchange, Transport in Animals and Plants',
      ],
      2: [
        'AS Unit 2 (A2BI12) – Organisms and Biodiversity: Photosynthesis, Respiration, Ecosystems, Biodiversity, Classification, Evolution',
      ],
      3: [
        'A2 Unit 1 (A2BI21) – Physiology, Coordination and Control: Excretion (kidney), Nervous System, Muscle Physiology, Hormonal Coordination, Homeostasis',
      ],
      4: [
        'A2 Unit 2 (A2BI22) – Biochemistry, Genetics and Evolutionary Trends: DNA Structure, Transcription, Translation, Genetics (Mendelian and non-Mendelian), Mutations, Genetic Engineering, Evolution',
      ],
    }},

    'Chemistry': { papers: {
      1: [
        'AS Unit 1 (A2CH11) – Physical and Inorganic Chemistry: Atomic Structure, Bonding, Periodicity, Moles, Acids and Bases, Group 2, Halogens',
      ],
      2: [
        'AS Unit 2 (A2CH12) – Further Physical and Organic Chemistry: Energetics, Kinetics, Equilibrium, Organic Chemistry Introduction (alkanes, alkenes, halogenoalkanes, alcohols)',
      ],
      3: [
        'A2 Unit 1 (A2CH21) – Further Physical and Inorganic Chemistry: Electrode Potentials, Transition Metals, Period 3, Advanced Acid-Base Equilibria, Thermodynamics',
      ],
      4: [
        'A2 Unit 2 (A2CH22) – Analytical, Electrochemistry and Organic Nitrogen: MS, NMR, IR; Electrochemistry; Amines, Amides, Amino Acids; Polymers; Organic Synthesis',
      ],
    }},

    'Physics': { papers: {
      1: [
        'AS Unit 1 (A2PH11) – Forces, Energy and Electricity: Kinematics, Newton\'s Laws, Momentum, Energy, Electricity (circuits, resistance, EMF, power)',
      ],
      2: [
        'AS Unit 2 (A2PH12) – Waves, Photons and Medical Physics: Waves, EM Spectrum, Quantum Physics (photoelectric effect), Medical Imaging (X-ray, MRI, PET)',
      ],
      3: [
        'A2 Unit 1 (A2PH21) – Momentum, Thermal Physics, Circular Motion, Oscillations and Atomic Physics: Momentum, Thermal Physics, Circular Motion, SHM, Atomic and Nuclear Physics',
      ],
      4: [
        'A2 Unit 2 (A2PH22) – Fields, Capacitors and Particle Physics: Gravitational Fields, Electric Fields, Magnetic Fields, Capacitors, Particle Physics (Standard Model)',
      ],
    }},

    'English Literature': { papers: {
      1: [
        'AS Unit 1 (A2ET11) – Poetry and Drama (AS): Set Poetry Anthology, Set Drama Text',
      ],
      2: [
        'AS Unit 2 (A2ET12) – Prose (AS): Prose Set Text',
      ],
      3: [
        'A2 Unit 1 (A2ET21) – Poetry and Drama (A2): Extended Response to Poetry, A2 Drama Set Text',
      ],
      4: [
        'A2 Unit 2 (A2ET22) – Prose (A2): Comparative Prose Study',
      ],
    }},

    'Geography': { papers: {
      1: [
        'AS Unit 1 (A2GY11) – Physical Geography: Rivers (processes, landforms, management), Glaciation, Coasts',
      ],
      2: [
        'AS Unit 2 (A2GY12) – Human Geography: Population and Migration, World Cities, Rural Environments',
      ],
      3: [
        'A2 Unit 1 (A2GY21) – Physical Processes, Landforms and Management: Tectonic and Geomorphological Processes, Landscape Management',
      ],
      4: [
        'A2 Unit 2 (A2GY22) – Changing Environments: Economic and Social Change, Development, Tourism, Fieldwork Investigation',
      ],
    }},

    'History': { papers: {
      1: [
        'AS Unit 1 (A2HY11) – Partition of Ireland 1900–25: Home Rule Crisis, Easter Rising, War of Independence, Anglo-Irish Treaty',
      ],
      2: [
        'AS Unit 2 (A2HY12) – Germany 1918–45: Weimar Republic, Rise of the Nazis, The Third Reich, WW2',
      ],
      3: [
        'A2 Unit 1 (A2HY21) – Dictatorship and Democracy in Germany 1933–63: Nazi Germany, Post-War Division, West and East Germany',
      ],
      4: [
        'A2 Unit 2 (A2HY22) – Ireland and Her Neighbours: Developing Irish State, Northern Ireland 1920–98, Anglo-Irish Relations',
      ],
    }},

    'Psychology': { papers: {
      1: [
        'AS Unit 1 (A2PS11) – Research Methods: Research Design, Sampling, Statistical Testing, Ethics',
      ],
      2: [
        'AS Unit 2 (A2PS12) – Biological Psychology, Learning and Development: Biological Approaches, Conditioning (classical, operant), SLT, Cognitive Development',
      ],
      3: [
        'A2 Unit 1 (A2PS21) – Social Cognition, Prejudice and Stress: Social Influence (Asch, Milgram), Attribution, Prejudice, Stress (sources, response, management)',
      ],
      4: [
        'A2 Unit 2 (A2PS22) – Schizophrenia, Autism and Criminology: Schizophrenia (diagnosis, explanations, treatments), ASD, Criminal Behaviour (explanations, profiling)',
      ],
    }},

  }, // end CCEA A-Level

} // end A_LEVEL

// ─────────────────────────────────────────────────────────────────────────────
// BTEC — Pearson
// ─────────────────────────────────────────────────────────────────────────────
const BTEC = {
  Pearson: {
    'Business': { papers: {
      1: [
        'Unit 1 – Exploring Business: Types of Business, Aims and Objectives, Stakeholders, Functional Areas',
        'Unit 2 – Developing a Marketing Campaign: Market Research, Segmentation, The Marketing Mix, Campaign Planning',
        'Unit 3 – Personal and Business Finance: Sources of Finance, Financial Documents, Break-Even, Cash Flow, Profit and Loss',
        'Unit 4 – Managing an Event: Planning, Organising, Promoting and Reviewing an Event',
        'Unit 5 – International Business: Globalisation, International Trade, Cultural Considerations, Global Marketing',
      ],
    }},
    'Health and Social Care': { papers: {
      1: [
        'Unit 1 – Human Lifespan Development: Life Stages, PIES Development, Factors Affecting Development',
        'Unit 2 – Working in Health and Social Care: Roles, Settings, Legislation, Values and Ethics',
        'Unit 3 – Anatomy and Physiology: Body Systems (cardiovascular, respiratory, musculoskeletal, nervous, digestive)',
        'Unit 4 – Enquiries into Current Research in Health and Social Care: Research Methods, Analysing and Presenting Research',
      ],
    }},
    'Sport': { papers: {
      1: [
        'Unit 1 – Anatomy and Physiology: Skeletal System, Muscular System, Energy Systems, Cardiovascular and Respiratory Systems',
        'Unit 2 – Fitness Training and Programming: Fitness Components, Principles of Training, Training Methods, Fitness Testing',
        'Unit 3 – Professional Development in the Sports Industry: Career Pathways, Skills, Employability, Reflective Practice',
        'Unit 4 – Sports Leadership: Leadership Styles, Planning and Delivering Sessions, Evaluation',
        'Unit 5 – Application of Fitness Testing: Fitness Tests, Data Analysis, Training Recommendations',
      ],
    }},
    'Information Technology': { papers: {
      1: [
        'Unit 1 – Information Technology Systems: Hardware, Software, Networks, Security, Data and Information',
        'Unit 2 – Creating Systems to Manage Information: Relational Databases, SQL, Data Modelling',
        'Unit 3 – Using Social Media in Business: Social Media Platforms, Digital Communication, Legal and Ethical Issues',
        'Unit 4 – Programming: Programming Concepts, Algorithms, Debugging, Testing',
        'Unit 5 – Data Modelling: Spreadsheet Tools, Modelling Scenarios, Presenting Data',
      ],
    }},
    'Applied Science': { papers: {
      1: [
        'Unit 1 – Principles and Applications of Science I: Cell Biology, Cells and the Periodic Table, Energy Changes, Waves',
        'Unit 2 – Practical Scientific Procedures and Techniques: Titrations, Colorimetry, Chromatography, Calibration',
        'Unit 3 – Science Investigation Skills: Planning, Carrying Out and Evaluating Scientific Investigations',
        'Unit 4 – Principles and Applications of Science II: Genetics, Organic Chemistry, Electricity, Materials',
      ],
    }},
    'Engineering': { papers: {
      1: [
        'Unit 1 – Engineering Principles: Forces, Energy, Electricity, Materials, Engineering Mathematics',
        'Unit 2 – Innovating and Designing: Design Process, CAD, Materials Selection, Sustainability',
        'Unit 3 – Engineering Product Design and Manufacture: Manufacturing Processes, Quality, Safety',
        'Unit 4 – Managing a Manufacturing Process: Production Planning, Scheduling, Quality Control, Cost Management',
      ],
    }},
    'Construction and the Built Environment': { papers: {
      1: [
        'Unit 1 – Construction Technology: Building Materials, Construction Methods, Structural Principles',
        'Unit 2 – Design Practice in the Built Environment: Design Process, Drawing Techniques, Planning Regulations',
        'Unit 3 – Surveying in Construction: Measurement Techniques, Estimating, Site Surveys',
        'Unit 4 – Mathematics for Construction: Calculations, Geometry, Statistics Applied to Construction',
      ],
    }},
    'Performing Arts': { papers: {
      1: [
        'Unit 1 – Investigating Practitioners\' Work: Research, Analysis and Evaluation of Professional Practitioners',
        'Unit 2 – Developing Skills and Techniques: Discipline-Specific Technique Development (acting, dance or music)',
        'Unit 3 – Group Performance Workshop: Devised or Scripted Collaborative Performance',
        'Unit 4 – Performing Arts Production Project: Production Planning, Execution and Evaluation',
      ],
    }},
    'Creative Media Production': { papers: {
      1: [
        'Unit 1 – Media Representations: How Media Products Construct and Represent the World',
        'Unit 2 – Digital Media Skills: Using Digital Tools for Media Production',
        'Unit 3 – Communication in Creative Media Production: Communication Skills for Production Contexts',
        'Unit 4 – Media Production Project: Planning, Creating and Evaluating a Media Product',
      ],
    }},
    'Art and Design': { papers: {
      1: [
        'Unit 1 – Visual Recording and Communication: Drawing, Photography and Visual Language',
        'Unit 2 – Idea Development: Research, Experimentation and Conceptual Development',
        'Unit 3 – Two-Dimensional Visual Communication: Graphic Design, Illustration, Typography',
        'Unit 4 – Three-Dimensional Design: Sculpture, Ceramics, Product Design',
      ],
    }},
    'Music': { papers: {
      1: [
        'Unit 1 – The Music Industry: Structure of the Industry, Rights and Royalties, Career Pathways',
        'Unit 2 – Music Theory and Composition: Music Notation, Harmony, Composing Techniques',
        'Unit 3 – Group Music Making: Rehearsal, Collaboration and Group Performance',
        'Unit 4 – Music Performance: Solo and Ensemble Performance, Technical Skills, Stagecraft',
      ],
    }},
    'Public Services': { papers: {
      1: [
        'Unit 1 – Government, Policies and the Public Services: Structure of Government, Public Service Roles',
        'Unit 2 – Leadership and Teamwork in the Public Services: Leadership Styles, Teamwork, Chain of Command',
        'Unit 3 – Citizenship, Diversity and the Public Services: Equality and Diversity, Human Rights, Community Engagement',
        'Unit 4 – Law and its Impact on the Individual in Public Services: Criminal Justice System, Powers of Arrest, Detention',
      ],
    }},
    'Travel and Tourism': { papers: {
      1: [
        'Unit 1 – The World of Travel and Tourism: The Travel and Tourism Industry, Types of Tourism, Key Organisations',
        'Unit 2 – Global Destinations: World Geography, Tourist Destinations, Climate and Seasons',
        'Unit 3 – Impacts of Tourism: Economic, Environmental and Socio-Cultural Impacts of Tourism',
        'Unit 4 – Customer Experience in Travel and Tourism: Customer Service, Meeting Diverse Customer Needs',
      ],
    }},
    'Hospitality': { papers: {
      1: [
        'Unit 1 – The Hospitality Industry: Structure of the Industry, Types of Hospitality Business, Trends',
        'Unit 2 – Working in the Hospitality Industry: Roles and Responsibilities, Personal Skills, Career Development',
        'Unit 3 – Food Safety and Health and Safety in Hospitality: Legislation, HACCP, Risk Assessment',
        'Unit 4 – Customer Service in Hospitality: Customer Expectations, Handling Complaints, Service Standards',
      ],
    }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// L2 VOCATIONAL — OCR Cambridge Nationals
// ─────────────────────────────────────────────────────────────────────────────
const L2_VOCATIONAL = {
  OCR: {
    'Cambridge National Business': { papers: {
      1: [
        'R067 – Enterprise and Business Ideas (NEA): Identifying a Business Need, Market Research, Business Plan',
        'R069 – Exam: Factors Affecting Business Activity, Business Finance, Marketing, Stakeholders, Ethical and Legal Issues',
      ],
    }},
    'Cambridge National IT': { papers: {
      1: [
        'R070 – Exam: Systems Architecture, Software, Networks, Cybersecurity, Data Representation, Ethical Issues',
        'R072 – Creating Digital Art; R073 – Data Visualisation; R074 – Software Development (NEA units)',
      ],
    }},
    'Cambridge National Sport Science': { papers: {
      1: [
        'R041 – Exam: Reducing Risk of Sports Injuries, Musculo-Skeletal System, Cardiovascular and Respiratory Systems, Nutrition, Sports Psychology',
        'R042 – Applying Principles of Training; R043 – The Sports Performer in Action (NEA units)',
      ],
    }},
    'Cambridge National Health and Social Care': { papers: {
      1: [
        'R032 – Exam: Principles of Care, Human Development Stages, Factors Affecting Health, Care Settings and Roles',
        'R033 – Supporting Individuals Through Life Events; R035 – Health Promotion (NEA units)',
      ],
    }},
    'Cambridge National Creative Media': { papers: {
      1: [
        'Pre-Production Skills: Research, Planning and Communication for Media Products',
        'Digital Media Production: Creating Media Products Using Digital Tools',
        'Audience and Purpose: Targeting and Reaching Audiences',
        'Reviewing and Evaluating Media Products',
      ],
    }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// MASTER TOPICS OBJECT — merge all four sections
// ─────────────────────────────────────────────────────────────────────────────
const TOPICS = {}

// GCSE subjects — stored under board key directly
for (const board of Object.keys(GCSE)) {
  TOPICS[board] = { ...GCSE[board] }
}

// A-Level subjects — stored with "(A-Level)" suffix to avoid key collisions
for (const board of Object.keys(A_LEVEL)) {
  if (!TOPICS[board]) TOPICS[board] = {}
  for (const subject of Object.keys(A_LEVEL[board])) {
    TOPICS[board][subject + ' (A-Level)'] = A_LEVEL[board][subject]
  }
}

// L2 Vocational — stored directly
for (const board of Object.keys(L2_VOCATIONAL)) {
  if (!TOPICS[board]) TOPICS[board] = {}
  for (const subject of Object.keys(L2_VOCATIONAL[board])) {
    TOPICS[board][subject] = L2_VOCATIONAL[board][subject]
  }
}

// BTEC — stored directly under Pearson board key
for (const board of Object.keys(BTEC)) {
  if (!TOPICS[board]) TOPICS[board] = {}
  for (const subject of Object.keys(BTEC[board])) {
    TOPICS[board][subject] = BTEC[board][subject]
  }
}

// ── LOOKUP FUNCTIONS ──────────────────────────────────────────────────────────

/**
 * Get topics for a specific board, subject and level.
 * Returns the { papers: { 1: [...], 2: [...] } } object or null.
 * Falls back to AQA if the specific board has no data for this subject.
 */
export function getTopicsForSubject(board, subject, level) {
  const key = level === 'A-Level' ? subject + ' (A-Level)' : subject
  const result = TOPICS[board]?.[key]
  if (result) return result
  // Fallback to AQA (most comprehensive coverage)
  if (board !== 'AQA') return TOPICS['AQA']?.[key] || null
  return null
}

/**
 * Returns a flat array of topic objects for use in the topic tracker.
 * Each object: { name: string, paper: number, subjectId: string }
 */
export function getAllTopicsFlat(board, subject, level) {
  const subj = getTopicsForSubject(board, subject, level)
  if (!subj) return []
  return Object.entries(subj.papers).flatMap(([paper, topicList]) =>
    topicList.map(t => ({ name: t, paper: parseInt(paper), subjectId: subject }))
  )
}

/**
 * Returns all subject keys for a given board and level.
 */
export function getAllSubjects(board, level) {
  const boardData = TOPICS[board] || {}
  return Object.keys(boardData).filter(s => {
    if (level === 'A-Level') return s.endsWith('(A-Level)')
    if (level === 'GCSE') return !s.endsWith('(A-Level)') && !s.includes('BTEC') && !s.includes('Cambridge National')
    return true
  })
}

export default TOPICS
export { GCSE, A_LEVEL, L2_VOCATIONAL, BTEC }
