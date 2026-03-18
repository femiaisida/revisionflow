// src/data/topics.js
// Official specification topic names for all qualifications
// Sources: AQA, OCR, Edexcel, WJEC, CCEA, Pearson published specifications

// ─────────────────────────────────────────────────────────────────────────────
// GCSE TOPICS
// ─────────────────────────────────────────────────────────────────────────────
const GCSE = {
  AQA: {
    'Mathematics': { papers: {
      1: ['Number – Structure and Calculation','Number – Fractions, Decimals and Percentages','Number – Measures and Accuracy','Algebra – Notation, Vocabulary and Manipulation','Algebra – Graphs','Algebra – Solving Equations and Inequalities','Algebra – Sequences','Ratio, Proportion and Rates of Change','Geometry – Properties of Shapes','Geometry – Mensuration and Calculation','Geometry – Vectors','Probability','Statistics'],
      2: ['Number – Calculations, Checking and Estimation','Algebra – Quadratics','Algebra – Simultaneous Equations','Algebra – Inequalities','Algebra – Further Graphs','Geometry – Pythagoras Theorem','Geometry – Trigonometry (SOH CAH TOA)','Geometry – Congruence and Similarity','Statistics – Scatter Graphs','Probability – Combined Events and Tree Diagrams'],
      3: ['Algebra – Functions','Algebra – Algebraic Proof','Geometry – Circle Theorems','Geometry – Transformations of Graphs','Statistics – Cumulative Frequency and Box Plots','Statistics – Histograms','Number – Surds','Number – Upper and Lower Bounds','Trigonometry – Sine and Cosine Rules','Trigonometry – Area of a Triangle'],
    }},
    'Further Mathematics': { papers: {
      1: ['Algebra – Factor Theorem','Algebra – Algebraic Fractions','Algebra – Proof','Algebra – Functions','Coordinate Geometry','Matrices','Calculus – Differentiation','Calculus – Integration','Series and Sequences','Inequalities'],
      2: ['Further Algebra and Functions','Further Calculus','Further Trigonometry – Identities','Further Coordinate Geometry','Numerical Methods','Vectors in 3D','Further Statistics','Further Mechanics'],
    }},
    'English Language': { papers: {
      1: ['AO1 – Identify and Interpret Information','AO2 – Language Analysis (Writer\'s Methods)','AO3 – Structural Analysis','AO4 – Critical Evaluation','AO5 – Creative and Descriptive Writing','AO6 – Spelling, Punctuation and Grammar','Descriptive Writing Techniques','Narrative Writing Techniques'],
      2: ['AO1 – Synthesis and Summary','AO2 – Language Analysis (Non-Fiction)','AO3 – Comparison of Viewpoints','AO4 – Evaluation of Non-Fiction','AO5 – Viewpoint and Argument Writing','Rhetoric and Persuasive Techniques','Register, Tone and Purpose'],
    }},
    'English Literature': { papers: {
      1: ['Macbeth – Ambition and Power','Macbeth – Fate and the Supernatural','Macbeth – Guilt and Conscience','Macbeth – Gender and Masculinity','Macbeth – Character: Macbeth','Macbeth – Character: Lady Macbeth','Macbeth – Jacobean Context','Macbeth – Language and Structure','A Christmas Carol – Social Responsibility','A Christmas Carol – Redemption','A Christmas Carol – Victorian Context','A Christmas Carol – Scrooge\'s Transformation','An Inspector Calls – Social Class','An Inspector Calls – Responsibility and Guilt','An Inspector Calls – 1912 vs 1945 Context','An Inspector Calls – Key Characters'],
      2: ['Power and Conflict: Ozymandias','Power and Conflict: London','Power and Conflict: The Prelude','Power and Conflict: My Last Duchess','Power and Conflict: The Charge of the Light Brigade','Power and Conflict: Exposure','Power and Conflict: Storm on the Island','Power and Conflict: Bayonet Charge','Power and Conflict: Remains','Power and Conflict: Poppies','Power and Conflict: War Photographer','Power and Conflict: Tissue','Power and Conflict: The Emigrée','Power and Conflict: Kamikaze','Power and Conflict: Checking Out Me History','Poetry Comparison Technique','Unseen Poetry Analysis','Unseen Poetry Comparison'],
    }},
    'Biology': { papers: {
      1: ['B1 – Cell Structure','B1 – Cell Division (Mitosis)','B1 – Transport in Cells (Diffusion, Osmosis, Active Transport)','B2 – Human Digestive System','B2 – The Heart and Blood Vessels','B2 – Health, Disease and Cancer','B2 – Non-Communicable Diseases','B3 – Communicable Diseases','B3 – Viral and Bacterial Disease','B3 – Preventing and Treating Disease','B3 – Monoclonal Antibodies','B4 – Photosynthesis','B4 – Aerobic and Anaerobic Respiration','Required Practical – Microscopy','Required Practical – Osmosis','Required Practical – Food Tests','Required Practical – Enzymes and pH','Required Practical – Photosynthesis Rate'],
      2: ['B5 – Nervous System','B5 – The Brain','B5 – The Eye','B5 – Hormonal Coordination','B5 – Kidneys and Homeostasis','B5 – Controlling Blood Glucose','B5 – Reproductive Hormones','B6 – DNA and the Genome','B6 – Inheritance and Genetics','B6 – Natural Selection and Evolution','B6 – Classification of Living Organisms','B7 – Adaptations and Interdependence','B7 – Organisation of Ecosystems','B7 – Biodiversity and Human Impact','B7 – Food Production and Land Use','Required Practical – Plant Tropisms','Required Practical – Population Size'],
    }},
    'Chemistry': { papers: {
      1: ['C1 – Atomic Structure and the Periodic Table','C1 – Electronic Structure','C1 – Group 1 (Alkali Metals)','C1 – Group 7 (Halogens)','C1 – Group 0 (Noble Gases)','C2 – Ionic Bonding','C2 – Covalent Bonding','C2 – Metallic Bonding','C2 – Giant Ionic and Covalent Structures','C2 – Nanoparticles','C3 – Relative Formula Mass and Moles','C3 – Limiting Reactants and Yields','C3 – Concentration of Solutions','C4 – Metal Reactivity Series','C4 – Extraction of Metals','C4 – Reactions of Acids','C4 – pH and Neutralisation','C4 – Electrolysis','C5 – Exothermic and Endothermic Reactions','C5 – Bond Energies','C5 – Electrochemical Cells','Required Practical – Making Salts','Required Practical – Titration','Required Practical – Electrolysis','Required Practical – Temperature Changes'],
      2: ['C6 – Rate of Reaction and Collision Theory','C6 – Factors Affecting Rate','C6 – Catalysts','C6 – Reversible Reactions and Equilibrium','C6 – Le Chatelier\'s Principle','C6 – The Haber Process','C7 – Crude Oil and Hydrocarbons','C7 – Alkanes and Alkenes','C7 – Alcohols and Carboxylic Acids','C7 – Addition and Condensation Polymers','C8 – Purity and Formulations','C8 – Chromatography','C8 – Identification of Gases','C8 – Flame Tests and Ion Tests','C9 – Earth\'s Atmosphere History','C9 – Greenhouse Effect and Climate Change','C9 – Atmospheric Pollutants','C10 – Finite and Renewable Resources','C10 – Water Treatment','C10 – Life Cycle Assessment','Required Practical – Rates of Reaction','Required Practical – Chromatography','Required Practical – Identifying Ions'],
    }},
    'Physics': { papers: {
      1: ['P1 – Energy Stores and Transfers','P1 – Kinetic and Gravitational Potential Energy','P1 – Elastic Potential and Specific Heat Capacity','P1 – Power and Efficiency','P1 – Energy Resources','P2 – Circuit Symbols and Components','P2 – Charge, Current and Potential Difference','P2 – Series and Parallel Circuits','P2 – Resistance and Ohm\'s Law','P2 – I-V Characteristics','P2 – Mains Electricity and Domestic Appliances','P2 – National Grid','P3 – States of Matter and Density','P3 – Changes of State and Specific Latent Heat','P3 – Internal Energy and Gas Pressure','P4 – Atomic Structure and History of the Atom','P4 – Radioactivity – Alpha, Beta, Gamma','P4 – Nuclear Equations and Half-Life','P4 – Hazards and Uses of Radiation','P4 – Nuclear Fission and Fusion','Required Practical – Specific Heat Capacity','Required Practical – Resistance','Required Practical – I-V Characteristics','Required Practical – Density'],
      2: ['P5 – Scalar and Vector Quantities','P5 – Gravity and Weight','P5 – Resultant Forces and Newton\'s Laws','P5 – Work Done and Energy Transfer','P5 – Hooke\'s Law','P5 – Distance-Time and Velocity-Time Graphs','P5 – Stopping Distance and Momentum','P6 – Transverse and Longitudinal Waves','P6 – Properties of Waves (Speed, Frequency, Wavelength)','P6 – Reflection and Refraction','P6 – Sound and Ultrasound','P6 – Electromagnetic Spectrum','P6 – Lenses and Ray Diagrams','P7 – Permanent and Induced Magnets','P7 – Motor Effect and Fleming\'s Left-Hand Rule','P7 – Electromagnetic Induction and Generators','P7 – Transformers','P8 – The Solar System','P8 – Life Cycle of a Star','P8 – Red-Shift and the Expanding Universe','Required Practical – Waves','Required Practical – Infrared Radiation'],
    }},
    'Combined Science: Trilogy': { papers: {
      1: ['B1 – Cell Structure and Transport','B1 – Cell Division','B2 – Organisation: Digestive System','B2 – Organisation: Disease and Immune Response'],
      2: ['C1 – Atomic Structure and Periodic Table','C2 – Bonding and Structure','C3 – Quantitative Chemistry','C4 – Chemical Changes and Electrolysis'],
      3: ['P1 – Energy Stores and Transfers','P2 – Electricity','P3 – Particle Model of Matter','P4 – Atomic Structure and Radioactivity'],
      4: ['B4 – Bioenergetics (Photosynthesis and Respiration)','B5 – Homeostasis and Response','B6 – Inheritance, Variation and Evolution','B7 – Ecology and Human Impact'],
      5: ['C5 – Energy Changes','C6 – Rate and Extent of Chemical Change','C7 – Organic Chemistry','C8 – Chemical Analysis and Atmosphere'],
      6: ['P5 – Forces and Motion','P6 – Waves','P7 – Magnetism and Electromagnetism'],
    }},
    'Combined Science: Synergy': { papers: {
      1: ['Biology – Cells and Organisation','Biology – Infection and Response','Biology – Bioenergetics'],
      2: ['Biology – Homeostasis','Biology – Inheritance','Biology – Ecology'],
      3: ['Chemistry – Atomic Structure','Chemistry – Bonding','Chemistry – Quantitative Chemistry'],
      4: ['Chemistry – Chemical Changes','Chemistry – Organic Chemistry'],
      5: ['Physics – Energy','Physics – Forces'],
      6: ['Physics – Waves and Electromagnetism','Physics – Space'],
    }},
    'Combined Science': { papers: {
      1: ['B1 – Cell Structure and Transport','B1 – Cell Division','B2 – Organisation: Digestive System','B2 – Organisation: Disease'],
      2: ['C1 – Atomic Structure and Periodic Table','C2 – Bonding and Structure','C3 – Quantitative Chemistry','C4 – Chemical Changes'],
      3: ['P1 – Energy','P2 – Electricity','P3 – Particle Model','P4 – Atomic Structure'],
      4: ['B4 – Bioenergetics','B5 – Homeostasis','B6 – Inheritance','B7 – Ecology'],
      5: ['C5 – Energy Changes','C6 – Rate of Reaction','C7 – Organic Chemistry','C8 – Analysis'],
      6: ['P5 – Forces','P6 – Waves','P7 – Magnetism'],
    }},
    'Geography': { papers: {
      1: ['1A – Tectonic Hazards','1A – Tropical Storms','1A – Climate Change','1B – Ecosystems','1B – Tropical Rainforests','1B – Hot Deserts','1B – Cold Environments','1C – Coastal Landscapes','1C – River Landscapes','1C – Glacial Landscapes'],
      2: ['2A – Urban Growth and Urbanisation','2A – UK City Case Study','2A – Developing World City Case Study','2B – Measuring Development','2B – Causes of Uneven Development','2B – Reducing the Development Gap','2B – Nigeria Case Study','2B – UK Economy Post-Industrial','2C – Food Resource Management','2C – Water Resource Management','2C – Energy Resource Management'],
      3: ['3A – Issue Evaluation','3B – Physical Fieldwork','3B – Human Fieldwork','3C – Map and Atlas Skills','3C – Graphs and Statistical Skills','3C – Ordnance Survey Skills'],
    }},
    'History': { papers: {
      1: ['Medicine in Britain – Medieval (1250–1500)','Medicine in Britain – Renaissance (1500–1700)','Medicine in Britain – Industrial and Germ Theory','Medicine in Britain – Modern Medicine','Medicine in Britain – Key Individuals','Western Front Historic Environment'],
      2: ['Conflict and Tension – Alliance Systems','Conflict and Tension – WWI Causes','Conflict and Tension – Treaty of Versailles','Elizabethan England – Government and Religion','Elizabethan England – Mary Queen of Scots','Elizabethan England – Exploration and Armada','Germany 1890–1945 – Weimar Republic','Germany 1890–1945 – Rise of Nazis','Germany 1890–1945 – Life in Nazi Germany'],
    }},
    'German': { papers: {
      1: ['Listening – Identity and Culture','Listening – Local Area and Travel','Listening – School and Future Plans','Listening – Global Issues','Phonics Recognition'],
      2: ['Speaking – Role Play','Speaking – Photo Card','Speaking – General Conversation: Identity','Speaking – General Conversation: Local Area','Speaking – General Conversation: School and Careers','Speaking – General Conversation: Global Issues'],
      3: ['Reading – Identity and Culture','Reading – Local Area and Travel','Reading – School and Future Plans','Reading – Global Issues','Grammar – Present Tense','Grammar – Perfect Tense','Grammar – Imperfect Tense','Grammar – Future and Conditional','Grammar – Cases (Nominative, Accusative, Dative, Genitive)','Grammar – Modal Verbs','Grammar – Word Order (SVOMPT)','Grammar – Subordinate Clauses','Vocabulary – All AQA Themes'],
      4: ['Writing – Translation into German','Writing – Short Structured Task','Writing – Open-Ended Extended Writing','Writing – Accuracy and Range of Structures'],
    }},
    'French': { papers: {
      1: ['Listening – Theme 1: Identity and Culture','Listening – Theme 2: Local Area and Travel','Listening – Theme 3: School and Future Plans','Listening – Theme 4: Global Issues'],
      2: ['Speaking – Role Play','Speaking – Photo Card Description','Speaking – General Conversation'],
      3: ['Reading – All Themes','Grammar – Present Tense (Regular and Irregular)','Grammar – Perfect, Imperfect and Future Tenses','Grammar – Pronouns, Articles, Adjectives','Grammar – Negatives and Questions','Vocabulary – Full AQA French List'],
      4: ['Writing – Translation into French','Writing – Structured Response','Writing – Open-Ended Task'],
    }},
    'Spanish': { papers: {
      1: ['Listening – Theme 1: Identity and Culture','Listening – Theme 2: Local Area and Travel','Listening – Theme 3: School and Future Plans','Listening – Theme 4: Global Issues'],
      2: ['Speaking – Role Play','Speaking – Photo Card','Speaking – General Conversation'],
      3: ['Reading – All Themes','Grammar – Tenses (Present, Preterite, Imperfect, Future, Conditional)','Grammar – Verbs (Reflexive, Radical-Changing)','Vocabulary – AQA Spanish List'],
      4: ['Writing – Translation into Spanish','Writing – Structured Task','Writing – Open-Ended Task'],
    }},
    'Religious Studies': { papers: {
      1: ['Christianity – Nature of God','Christianity – Trinity and Incarnation','Christianity – Creation and the Fall','Christianity – Salvation and Atonement','Christianity – Afterlife','Christianity – Worship and Prayer','Christianity – Sacraments','Christianity – Church in the Community','Islam – The Six Articles of Faith','Islam – Tawhid and Nature of Allah','Islam – Angels, Prophethood, Holy Books','Islam – Akhirah and Predestination','Islam – Sunni and Shi\'a Differences','Islam – The Five Pillars','Islam – Jihad','Islam – Id-ul-Fitr and Id-ul-Adha'],
      2: ['Theme A – Relationships and Families','Theme B – Religion and Life (Abortion, Euthanasia)','Theme D – Religion, Peace and Conflict','Theme E – Religion, Crime and Punishment','Theme F – Human Rights and Social Justice'],
    }},
    'Sociology': { papers: {
      1: ['Sociological Theory and Methods – Functionalism','Sociological Theory and Methods – Marxism','Sociological Theory and Methods – Feminism','Research Methods – Surveys and Interviews','Research Methods – Observation','Research Methods – Ethics in Research','Education – Role and Purpose','Education – Achievement and Social Class','Education – Gender and Achievement','Education – Ethnicity and Achievement','Education – Hidden Curriculum','Families and Households – Roles of Family','Families and Households – Changing Family Patterns'],
      2: ['Crime and Deviance – Defining Crime','Crime and Deviance – Patterns and Statistics','Crime and Deviance – Functionalist Explanations','Crime and Deviance – Marxist Explanations','Crime and Deviance – Labelling Theory','Social Stratification – Class, Status, Power','Social Stratification – Social Mobility','Social Stratification – Poverty'],
    }},
    'Psychology': { papers: {
      1: ['Memory – Multi-Store Model','Memory – Working Memory Model','Memory – Eyewitness Testimony','Perception – Theories of Perception','Development – Piaget\'s Theory','Development – Vygotsky\'s Theory','Research Methods – Experiments','Research Methods – Observations','Research Methods – Self-Report Methods'],
      2: ['Social Influence – Obedience (Milgram)','Social Influence – Conformity (Asch)','Language, Thought and Communication','Brain and Neuropsychology','Psychological Problems – Depression','Psychological Problems – Phobias','Research Methods – Sampling and Ethics'],
    }},
    'Media Studies': { papers: {
      1: ['Media Language – Semiotics','Media Language – Narrative Theory','Media Language – Genre','Media Representations – Stereotyping','Media Representations – Gender and Identity','Media Industries – Ownership and Control','Media Audiences – Active and Passive','Set Products – Music Video','Set Products – Newspapers'],
      2: ['Media in the Online Age – Convergence','Media in the Online Age – Social Media','Long Form TV Drama – Analysis','Film – Marketing and Distribution','Magazines – Representation','Advertising – Persuasion Techniques'],
    }},
  },

  OCR: {
    'Computer Science': { papers: {
      1: ['1.1 CPU Structure (ALU, CU, Registers, Cache)','1.1 Fetch-Decode-Execute Cycle','1.1 Factors Affecting CPU Performance','1.1 Embedded Systems','1.2 RAM, ROM and Virtual Memory','1.2 Secondary Storage Types','1.2 Units of Data (Bits to TB)','1.2 Binary, Denary, Hexadecimal','1.2 Binary Arithmetic and Overflow','1.2 Character Encoding (ASCII and Unicode)','1.2 Representing Images (Pixels, Bit Depth)','1.2 Representing Sound (Sample Rate, Bit Depth)','1.2 Data Compression (Lossy and Lossless)','1.3 Types of Network (LAN, WAN, PAN)','1.3 Network Topologies (Star, Mesh, Bus)','1.3 Wired and Wireless Networks','1.3 Protocols (TCP/IP, HTTP, HTTPS, FTP, DNS)','1.3 Network Hardware (Router, Switch, NIC)','1.4 Forms of Attack (Phishing, Malware, SQL Injection)','1.4 Preventing Attacks (Firewalls, Encryption, Authentication)','1.5 Operating System Functions','1.5 Utility Software','1.6 Ethical Issues','1.6 Legal Issues (Computer Misuse Act, GDPR, Copyright)','1.6 Environmental Impact of Technology'],
      2: ['2.1 Computational Thinking (Decomposition, Abstraction)','2.1 Algorithms in Pseudocode and Flowcharts','2.1 Linear and Binary Search','2.1 Bubble Sort, Merge Sort, Insertion Sort','2.2 Variables, Constants, Data Types','2.2 Sequence, Selection, Iteration','2.2 String Manipulation','2.2 Arrays and Lists','2.2 File Handling','2.2 Procedures and Functions','2.2 Local and Global Variables','2.3 Defensive Design and Input Validation','2.3 Testing (Normal, Boundary, Erroneous Data)','2.3 Syntax vs Logic Errors','2.4 AND, OR, NOT Logic Gates','2.4 Truth Tables','2.4 Logic Circuits','2.5 High and Low Level Languages','2.5 Compilers, Interpreters, Assemblers','2.5 IDE Features','Programming in Python – Core Concepts','Programming in Python – Data Structures','Programming in Python – File I/O'],
    }},
    'Mathematics': { papers: {
      1: ['Number – Calculations and Fractions','Algebra – Expressions and Equations','Geometry – Angles and Shapes','Statistics and Probability'],
      2: ['Number and Algebra – Calculator','Geometry and Measures – Calculator','Statistics – Calculator'],
      3: ['Further Algebra (Higher)','Further Geometry (Higher)','Further Statistics (Higher)'],
    }},
    'English Language': { papers: {
      1: ['Reading – Identifying Information','Reading – Language Techniques and Effects','Reading – Structural Features','Writing – Imaginative and Creative'],
      2: ['Reading – Non-Fiction Analysis','Reading – Comparison of Texts','Writing – Transactional (Letters, Speeches, Articles)'],
    }},
    'English Literature': { papers: {
      1: ['Modern Prose or Drama','Shakespeare – Character and Theme','Essay Technique – Embedding Evidence'],
      2: ['19th-Century Novel','Poetry Anthology','Unseen Poetry'],
    }},
    'Geography': { papers: {
      1: ['Physical Landscapes – Coasts','Physical Landscapes – Rivers','Glaciation','Weather and Climate'],
      2: ['Changing Cities','Global Development','Resource Management'],
      3: ['Geographical Debates – Topic A','Geographical Debates – Topic B','Fieldwork Investigation'],
    }},
    'History': { papers: {
      1: ['History Around Us – Local Study','British Period Study'],
      2: ['Non-British Depth Study'],
    }},
    'Biology': { papers: {
      1: ['Cell Biology','Biological Molecules','Enzymes and Metabolism','Exchange and Transport','Biodiversity and Classification'],
      2: ['Genetics and Inheritance','Natural Selection and Evolution','Ecosystems and Human Impact','Homeostasis'],
    }},
    'Chemistry': { papers: {
      1: ['Atoms, Molecules and Stoichiometry','Ionic and Covalent Bonding','Energetics','Periodic Table Trends'],
      2: ['Rates of Reaction and Equilibrium','Organic Chemistry','Chemical Analysis','Industrial Processes'],
    }},
    'Physics': { papers: {
      1: ['Forces and Motion','Energy','Waves and Sound','Electricity'],
      2: ['Magnetism and Electromagnetism','Radioactivity and Nuclear Physics','Space Physics'],
    }},
  },

  Edexcel: {
    'Mathematics': { papers: {
      1: ['Number – Calculations and Rounding','Algebra – Expressions and Graphs','Ratio and Proportion','Geometry – Angles and Shapes','Statistics and Probability'],
      2: ['Algebra – Equations and Quadratics','Geometry – Pythagoras and Trigonometry','Statistics – Scatter Graphs and Histograms','Probability – Combined Events'],
      3: ['Algebra – Further Graphs and Proof','Geometry – Circle Theorems and Vectors','Statistics – Advanced Analysis'],
    }},
    'English Language': { papers: {
      1: ['Reading Fiction – Inference and Language Analysis','Writing – Imaginative and Creative'],
      2: ['Reading Non-Fiction – Analysis and Comparison','Writing – Transactional'],
    }},
    'English Literature': { papers: {
      1: ['Shakespeare and Post-1914 Text','Essay Technique'],
      2: ['19th-Century Novel','Poetry Anthology','Unseen Poetry'],
    }},
    'Business Studies': { papers: {
      1: ['Theme 1 – Enterprise and Entrepreneurs','Theme 1 – Market Research','Theme 1 – Marketing Mix','Theme 1 – Finance (Revenue, Costs, Profit, Cash Flow)','Theme 1 – Operations','Theme 1 – External Influences','Theme 1 – Stakeholders'],
      2: ['Theme 2 – Business Growth','Theme 2 – Globalisation','Theme 2 – Product Life Cycle and Boston Matrix','Theme 2 – Pricing and Promotion','Theme 2 – Financial Statements and Ratio Analysis','Theme 2 – Efficiency and Technology','Theme 2 – HR and Motivation'],
    }},
    'History': { papers: {
      1: ['Thematic Study – Crime and Punishment','Thematic Study – Medicine Through Time','Historic Environment Study'],
      2: ['British Depth Study'],
      3: ['Modern Depth Study'],
    }},
    'Geography': { papers: {
      1: ['Coasts – Processes and Landforms','Rivers – Processes and Landforms','Glaciation','Weather Hazards and Climate'],
      2: ['Urban Issues','Development and Globalisation','The Development Gap'],
      3: ['UK Geographical Issues','Fieldwork Investigation'],
    }},
    'Religious Studies': { papers: {
      1: ['Beliefs and Teachings – Christianity','Beliefs and Teachings – Islam or Second Religion'],
      2: ['Practices – Christianity','Practices – Islam or Second Religion','Thematic Studies – A, B, D, E, F'],
    }},
    'Economics': { papers: {
      1: ['Supply and Demand','Elasticity','Market Failure','Government Intervention'],
      2: ['Macroeconomic Objectives','Fiscal and Monetary Policy','International Trade','Development Economics'],
    }},
    'Biology': { papers: {
      1: ['Cell Biology and Transport','Biological Molecules','Photosynthesis and Respiration','Disease and Immunity'],
      2: ['Coordination and Homeostasis','Genetics and Evolution','Ecosystems','Biotechnology'],
    }},
    'Chemistry': { papers: {
      1: ['Atomic Structure and Bonding','Moles and Equations','Acids and Redox','Inorganic Chemistry'],
      2: ['Organic Chemistry','Rates and Equilibrium','Analysis and Environmental Chemistry'],
    }},
    'Physics': { papers: {
      1: ['Motion and Forces','Energy','Waves and Optics','Electricity'],
      2: ['Magnetism','Radioactivity','Space and Astrophysics'],
    }},
  },

  WJEC: {
    'Mathematics': { papers: {
      1: ['Number and Algebra','Geometry and Measures','Statistics and Probability'],
      2: ['Number and Algebra (Calculator)','Shape and Space','Data Handling'],
    }},
    'English Language': { papers: {
      1: ['Reading Literary Prose – Analysis and Response','Writing – Descriptive and Narrative'],
      2: ['Reading Non-Fiction – Analysis and Comparison','Writing – Transactional and Persuasive'],
    }},
    'English Literature': { papers: {
      1: ['Poetry Collection','Prose Study'],
      2: ['Drama – Shakespeare','Unseen Texts'],
    }},
    'Biology': { papers: {
      1: ['Cells and Osmosis','Respiration and Digestive System','Circulatory System','Pathogens and Disease','Homeostasis'],
      2: ['Biodiversity and Classification','Genetics and DNA','Variation and Evolution','Biotechnology','Ecosystems'],
    }},
    'Chemistry': { papers: {
      1: ['Bonding and Structure','Periodic Table','Equations and Moles','Acids and Electrolysis'],
      2: ['Rates and Equilibrium','Organic Chemistry','Chemical Analysis','Environmental Chemistry'],
    }},
    'Physics': { papers: {
      1: ['Motion and Forces','Energy','Electricity and Magnetism'],
      2: ['Waves and Sound','Radioactivity','Space Physics'],
    }},
    'Geography': { papers: {
      1: ['Changing Landscapes – Rivers and Coasts','Changing Landscapes – Weather and Climate'],
      2: ['Changing Places – Urbanisation','Changing Places – Economic Change'],
      3: ['Applied Fieldwork Enquiry'],
    }},
    'History': { papers: {
      1: ['Changes in Health and Medicine','Conflict and Change'],
      2: ['Power and Protest','Wales and the Wider World'],
    }},
    'French': { papers: {
      1: ['Listening – All Themes'],
      2: ['Reading – All Themes'],
      3: ['Writing – Translation and Extended Tasks'],
    }},
    'German': { papers: {
      1: ['Listening – All Themes'],
      2: ['Reading – All Themes'],
      3: ['Writing – Translation and Extended Tasks'],
    }},
  },

  CCEA: {
    'Mathematics': { papers: {
      1: ['Number and Algebra – Module T1','Geometry – Module T1','Statistics – Module T1'],
      2: ['Further Number and Algebra – Module T2','Further Geometry','Further Statistics'],
    }},
    'English Language': { papers: {
      1: ['Writing – Personal, Imaginative and Persuasive'],
      2: ['Reading – Comprehension and Analysis'],
    }},
    'Biology': { papers: {
      1: ['Cells and Biological Molecules','Osmosis and Enzymes','Nutrition and the Digestive System','Circulatory System','Breathing and Respiration'],
      2: ['Genetics and DNA','Natural Selection and Evolution','Homeostasis','Ecosystems','Human Impact on Environment'],
    }},
    'Chemistry': { papers: {
      1: ['Atomic Structure and Bonding','Formulae and Equations','Acids, Bases and Salts'],
      2: ['Rates and Equilibrium','Organic Chemistry','Industrial Chemistry'],
    }},
    'Physics': { papers: {
      1: ['Motion and Forces','Energy, Work and Power','Electricity'],
      2: ['Waves and Optics','Magnetism','Radioactivity'],
    }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// A-LEVEL TOPICS
// ─────────────────────────────────────────────────────────────────────────────
const A_LEVEL = {
  AQA: {
    'Mathematics': { papers: {
      1: ['Pure – Proof','Pure – Algebra and Functions','Pure – Coordinate Geometry in the Cartesian Plane','Pure – Sequences and Series','Pure – Trigonometry','Pure – Exponentials and Logarithms','Pure – Differentiation','Pure – Integration','Pure – Numerical Methods','Pure – Vectors'],
      2: ['Pure – Further Algebra','Pure – Functions and Modelling','Pure – Further Trigonometry','Pure – Further Calculus','Pure – Differential Equations','Pure – Complex Numbers (AS context)'],
      3: ['Statistics – Statistical Sampling','Statistics – Data Presentation and Interpretation','Statistics – Probability','Statistics – Statistical Distributions (Binomial, Normal)','Statistics – Hypothesis Testing','Mechanics – Quantities and Units','Mechanics – Kinematics in 1D and 2D','Mechanics – Forces and Newton\'s Laws','Mechanics – Moments','Mechanics – Projectiles'],
    }},
    'Further Mathematics': { papers: {
      1: ['Core Pure – Complex Numbers','Core Pure – Argand Diagrams','Core Pure – Series (Sum of r, r², r³)','Core Pure – Roots of Polynomials','Core Pure – Volumes of Revolution','Core Pure – Matrices','Core Pure – Linear Transformations','Core Pure – Proof by Induction'],
      2: ['Core Pure – Further Calculus','Core Pure – Polar Coordinates','Core Pure – Hyperbolic Functions','Core Pure – Differential Equations'],
      3: ['Options – Further Pure / Further Mechanics / Further Statistics / Decision'],
    }},
    'Biology': { papers: {
      1: ['Biological Molecules','Cells','Organisms Exchange Substances','Genetic Information and Variation'],
      2: ['Energy Transfers in and between Organisms','Organisms Respond to Changes in Their Environment','Genetics, Populations, Evolution and Ecosystems','The Control of Gene Expression'],
      3: ['Practical Skills and Data Analysis','Synoptic Questions across all topics'],
    }},
    'Chemistry': { papers: {
      1: ['Physical Chemistry – Atomic Structure','Physical Chemistry – Amount of Substance','Physical Chemistry – Bonding','Physical Chemistry – Energetics','Physical Chemistry – Kinetics','Physical Chemistry – Chemical Equilibria','Physical Chemistry – Oxidation and Reduction','Inorganic Chemistry – Periodicity','Inorganic Chemistry – Group 2 and Group 7'],
      2: ['Physical Chemistry – Thermodynamics','Physical Chemistry – Rate Equations','Physical Chemistry – Equilibrium Constant Kp','Physical Chemistry – Electrode Potentials','Physical Chemistry – Acids and Bases','Inorganic Chemistry – Period 3','Inorganic Chemistry – Transition Metals','Inorganic Chemistry – Reactions of Aqueous Ions','Organic Chemistry – Optical Isomers','Organic Chemistry – Aldehydes and Ketones','Organic Chemistry – Carboxylic Acids','Organic Chemistry – Aromatic Chemistry','Organic Chemistry – Amines and Amino Acids','Organic Chemistry – Polymers','Organic Chemistry – NMR Spectroscopy'],
      3: ['Practical Skills','Synoptic Chemistry'],
    }},
    'Physics': { papers: {
      1: ['Measurements and Their Errors','Particles and Radiation','Waves','Mechanics and Energy','Electricity'],
      2: ['Further Mechanics (Circular Motion, Simple Harmonic Motion)','Thermal Physics','Fields – Gravitational, Electric, Magnetic','Nuclear Physics','Capacitors','Electromagnetic Induction'],
      3: ['Practical Skills Paper','Options – Astrophysics / Medical Physics / Engineering Physics / Turning Points'],
    }},
    'Computer Science': { papers: {
      1: ['Fundamentals of Programming','Theory of Computation','Fundamentals of Data Structures','Fundamentals of Algorithms','Systematic Approach to Problem Solving'],
      2: ['Fundamentals of Computer Systems','Fundamentals of Computer Organisation and Architecture','Consequences of Uses of Computing','Communication and Networking','Databases','Big Data','Functional Programming'],
    }},
    'Psychology': { papers: {
      1: ['Social Influence – Conformity and Obedience','Memory – Eyewitness Testimony and Forgetting','Attachment – Bowlby and Ainsworth','Psychopathology – Definitions and Treatments'],
      2: ['Approaches – Biological, Behaviourist, Cognitive, Psychodynamic','Biopsychology – Nervous System and Brain','Research Methods – Experimental Design','Research Methods – Statistical Testing','Research Methods – Data Handling'],
      3: ['Issues and Debates in Psychology','Options – Relationships / Aggression / Forensic Psychology / Schizophrenia / Gender'],
    }},
    'Sociology': { papers: {
      1: ['Education – Sociological Explanations','Education – Gender and Ethnicity','Theory and Methods – Sociological Approaches'],
      2: ['Families and Households – Diversity and Change','Beliefs in Society – Religion and Ideology','Global Development or Media'],
      3: ['Crime and Deviance – Explanations and Control','Stratification and Differentiation'],
    }},
    'Economics': { papers: {
      1: ['Markets and Market Failure – Supply and Demand','Elasticities','Consumer and Producer Surplus','Market Failure and Government Intervention'],
      2: ['Macroeconomic Indicators and Objectives','Aggregate Demand and Supply','Fiscal and Monetary Policy','International Trade and Exchange Rates','Development Economics'],
      3: ['Economic Principles and Issues – Synoptic Application'],
    }},
    'Geography': { papers: {
      1: ['Water and Carbon Cycles','Hot Desert Environments','Coastal Systems and Landscapes','Glacial Systems and Landscapes'],
      2: ['Global Systems and Global Governance','Changing Places','Contemporary Urban Environments','Population and the Environment'],
      3: ['Geographical Debates – Option A and Option B','NEA – Independent Investigation'],
    }},
    'History': { papers: {
      1: ['Breadth Study – Long-Term Change','Breadth Study – Historical Processes'],
      2: ['Depth Study – Detailed Period Analysis'],
      3: ['Historical Controversies and Extended Essay'],
    }},
    'Business': { papers: {
      1: ['Business Objectives and Strategy','Financial Decision Making','Marketing Strategy','Operational Decision Making'],
      2: ['Human Resources','Finance – Accounts and Ratios','Business Environments','Global Business'],
      3: ['Synoptic Case Study – Business Analysis'],
    }},
    'Law': { papers: {
      1: ['English Legal System – Courts and Personnel','Sources of Law – Statute and Common Law','Constitutional Law – Parliamentary Sovereignty','Criminal Law – Actus Reus and Mens Rea'],
      2: ['Contract Law – Formation and Terms','Law of Tort – Negligence and Occupiers\' Liability','Human Rights Law'],
      3: ['Further Law Options – Criminal, Contract or Tort'],
    }},
    'Religious Studies': { papers: {
      1: ['Philosophy of Religion – Arguments for God\'s Existence','Philosophy of Religion – Evil and Suffering','Philosophy of Religion – Religious Language','Philosophy of Religion – Life after Death'],
      2: ['Ethics – Utilitarianism and Kantian Ethics','Ethics – Virtue Ethics','Ethics – Sexual Ethics','Ethics – Environmental Ethics'],
      3: ['Study of Religion – Christianity, Islam or Buddhism'],
    }},
    'Media Studies': { papers: {
      1: ['Media Language – Semiotics and Narrative','Media Representations – Gender, Ethnicity, Age','Media Industries – Ownership and Regulation','Set Products Analysis'],
      2: ['Media in the Digital Age','Long Form TV Drama','Film Industry and Spectatorship','Magazines and Music Videos'],
    }},
    'French': { papers: {
      1: ['Listening, Reading and Translation – All Themes','Themes – Francophone Society, Political Life, French Culture'],
      2: ['Writing – Essay and Translation into French'],
    }},
    'German': { papers: {
      1: ['Listening, Reading and Translation – All Themes','Themes – German-Speaking Society, Political Life, German Culture'],
      2: ['Writing – Essay and Translation into German'],
    }},
    'Spanish': { papers: {
      1: ['Listening, Reading and Translation – All Themes','Themes – Hispanic Society, Political Life, Hispanic Culture'],
      2: ['Writing – Essay and Translation into Spanish'],
    }},
    'English Language': { papers: {
      1: ['Language – Varieties and Change','Language Acquisition','Representation through Language'],
      2: ['Language Diversity – Gender, Ethnicity, Technology','Language Change over Time','Language in Use'],
    }},
    'English Literature A': { papers: {
      1: ['Love Through the Ages – Poetry','Love Through the Ages – Prose','Love Through the Ages – Drama'],
      2: ['Texts in Shared Contexts – Dystopia / Conflict / Modern Times'],
    }},
  },

  Edexcel: {
    'Mathematics': { papers: {
      1: ['Pure – Algebra and Proof','Pure – Coordinate Geometry','Pure – Differentiation','Pure – Integration','Pure – Exponentials and Logarithms'],
      2: ['Pure – Further Differentiation and Integration','Pure – Numerical Methods','Pure – Sequences'],
      3: ['Statistics – Data and Probability','Statistics – Distributions','Mechanics – Kinematics and Newton\'s Laws'],
    }},
    'Biology': { papers: {
      1: ['Biological Molecules and Cells','Exchange, Transport, Ecosystems'],
      2: ['Energy, Immunity and Nervous System','Homeostasis, Genetics and Ecosystems'],
      3: ['General and Practical Principles in Biology'],
    }},
    'Chemistry': { papers: {
      1: ['Advanced Inorganic Chemistry','Advanced Physical Chemistry 1'],
      2: ['Advanced Organic Chemistry','Advanced Physical Chemistry 2'],
      3: ['General and Practical Principles in Chemistry'],
    }},
    'Physics': { papers: {
      1: ['Mechanics','Electric Circuits','Further Mechanics','Electric and Magnetic Fields'],
      2: ['Nuclear and Particle Physics','Thermodynamics','Space','Nuclear Radiation','Gravitational Fields','Oscillations'],
      3: ['General and Practical Principles in Physics'],
    }},
    'Economics A': { papers: {
      1: ['Microeconomics – Markets and Failure','Microeconomics – Business and Labour Markets'],
      2: ['Macroeconomics – Objectives and Policy','International Economics'],
      3: ['Synoptic Paper – Micro and Macro Application'],
    }},
    'Business': { papers: {
      1: ['Marketing and People'],
      2: ['Business Activities, Decisions and Strategy'],
      3: ['Investigating Business in a Competitive Environment'],
    }},
    'History': { papers: {
      1: ['Breadth Study in History'],
      2: ['Depth Study in History'],
    }},
    'Geography': { papers: {
      1: ['Dynamic Landscapes – Tectonics, Coasts and Glaciation'],
      2: ['Dynamic Places – Regeneration, Migration, Superpowers'],
      3: ['Synoptic Investigation and Fieldwork'],
    }},
    'Psychology': { papers: {
      1: ['Social and Cognitive Psychology'],
      2: ['Biological Psychology and Learning Theories'],
      3: ['Applied Psychology – Clinical, Criminal, Sport or Child'],
    }},
  },

  OCR: {
    'Computer Science': { papers: {
      1: ['Component 1 – Computer Systems','Computational Thinking and Problem Solving','Data Structures and Algorithms','Theory of Computation','Communication Systems'],
      2: ['Component 2 – Algorithms and Programming','Algorithms in Practice','OOP and Functional Programming','Databases and Big Data'],
    }},
    'Biology A': { papers: {
      1: ['Biological Processes – Cells, Molecules, Exchange'],
      2: ['Biological Diversity – Genetics, Evolution, Ecosystems'],
      3: ['Unified Biology – Practical and Synoptic'],
    }},
    'Chemistry A': { papers: {
      1: ['Periodic Table and Physical Chemistry','Bonding, Energetics and Redox'],
      2: ['Synthesis and Analytical Techniques','Organic and Inorganic Reactions'],
      3: ['Unified Chemistry – Practical and Synoptic'],
    }},
    'Physics A': { papers: {
      1: ['Modelling Physics – Mechanics, SHM, Quantum'],
      2: ['Exploring Physics – Fields, Particles, Medical'],
      3: ['Unified Physics – Practical and Synoptic'],
    }},
    'Mathematics': { papers: {
      1: ['Pure Mathematics 1'],
      2: ['Pure Mathematics 2'],
      3: ['Statistics and Mechanics'],
    }},
    'History': { papers: {
      1: ['British Period Study and Enquiry'],
      2: ['Non-British Period Study','World History Thematic Study'],
    }},
    'Geography': { papers: {
      1: ['Physical Systems – Landscape Systems, Oceans'],
      2: ['Human Interactions – Global Connections, Cities'],
      3: ['Geographical Debates – Climate Change / Disease / Energy / Migration'],
    }},
    'Economics': { papers: {
      1: ['Microeconomics'],
      2: ['Macroeconomics'],
      3: ['Themes in Economics – Synoptic'],
    }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// LEVEL 2 VOCATIONAL (Cambridge Nationals, WJEC Applied)
// ─────────────────────────────────────────────────────────────────────────────
const L2_VOCATIONAL = {
  OCR: {
    'Cambridge National Business': { papers: {
      1: ['R067 – Enterprise and Business Ideas','R067 – Business Planning','R067 – Financial Planning','R067 – Pitching a Business','R069 (Exam) – Factors Affecting Business','R069 – Business Finance','R069 – Marketing Basics','R069 – Stakeholders and Influences'],
    }},
    'Cambridge National IT': { papers: {
      1: ['R070 (Exam) – IT System Components','R070 – Networks and Connectivity','R070 – Data Storage and Management','R070 – Cyber Security Threats','R070 – Legal and Ethical Issues','R072 – Developing Applications','R073 – Data Visualisation'],
    }},
    'Cambridge National Sport Science': { papers: {
      1: ['R041 (Exam) – Reducing Risk in Sport','R041 – Fitness Testing','R041 – Nutrition and Hydration','R041 – Physiology of Sport','R042 – Sports Psychology','R043 – Sport and the Media'],
    }},
    'Cambridge National Health & Social Care': { papers: {
      1: ['R032 (Exam) – Principles of Care','R032 – Human Development Stages','R032 – Factors Affecting Health','R032 – Care Settings and Roles','R033 – Supporting Individuals','R035 – Health Promotion'],
    }},
    'Cambridge National Creative Media': { papers: {
      1: ['Pre-Production Skills','Creative Media Briefs','Digital Media Production','Animation and Game Design','Audience and Purpose'],
    }},
    'Cambridge National Child Development': { papers: {
      1: ['Development from Conception','Pre-Birth Care and Labour','Newborn Development','Physical, Cognitive and Language Development','Social and Emotional Development'],
    }},
  },
  WJEC: {
    'WJEC Level 2 Applied Business': { papers: {
      1: ['Unit 1 – Business Ownership and Finance','Unit 2 – Marketing in Business','Unit 3 – Business Operations','Unit 4 – Human Resources in Business'],
    }},
    'WJEC Level 2 Applied IT': { papers: {
      1: ['Unit 1 – Creating Digital Documents','Unit 2 – Spreadsheet Modelling','Unit 3 – Database Development','Unit 4 – Website Development'],
    }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// BTEC (topic/unit structures only — no past papers or grade boundaries)
// ─────────────────────────────────────────────────────────────────────────────
const BTEC = {
  Pearson: {
    'BTEC Tech Award Health and Social Care': { papers: {
      1: ['Component 1 – Human Lifespan Development','Component 2 – Health and Social Care Services','Component 3 – Health and Wellbeing (Exam)','HSC – Care Values and Principles','HSC – Communication in Care Settings'],
    }},
    'BTEC Tech Award Sport': { papers: {
      1: ['Component 1 – Preparing Participants to Take Part in Sport','Component 2 – Developing Fitness to Improve Performance','Component 3 – Sport and the Media (Exam)','Sport – Sports Leadership','Sport – Injury and First Aid'],
    }},
    'BTEC Tech Award Creative Media Production': { papers: {
      1: ['Component 1 – Exploring Media Products','Component 2 – Creating a Media Product','Component 3 – Responding to a Brief (Exam)','Media – Codes and Conventions','Media – Audience Research'],
    }},
    'BTEC Tech Award Business': { papers: {
      1: ['Component 1 – Exploring Enterprises','Component 2 – Market Research','Component 3 – Promotion and Finance (Exam)','Business – Enterprise Skills','Business – Financial Documents'],
    }},
    'BTEC Tech Award Computing': { papers: {
      1: ['Component 1 – Exploring User Interface Design','Component 2 – Collecting and Presenting Data','Component 3 – Effective Digital Working Practices (Exam)','Computing – Programming Concepts','Computing – Data Handling and Spreadsheets'],
    }},
    'BTEC Tech Award Performing Arts': { papers: {
      1: ['Component 1 – Exploring the Performing Arts','Component 2 – Developing Skills and Techniques','Component 3 – Responding to a Brief (Exam)','PA – Performance Skills','PA – Rehearsal Techniques'],
    }},
    'BTEC Tech Award Engineering': { papers: {
      1: ['Component 1 – Exploring Engineering Sectors','Component 2 – Engineering Design','Component 3 – Responding to an Engineering Brief (Exam)','Engineering – Materials and Processes','Engineering – CAD and Prototyping'],
    }},
    'BTEC National Business': { papers: {
      1: ['Unit 1 – Exploring Business','Unit 2 – Developing a Marketing Campaign','Unit 3 – Personal and Business Finance','Unit 6 – Principles of Management','Unit 8 – Recruitment and Selection'],
    }},
    'BTEC National IT': { papers: {
      1: ['Unit 1 – Information Technology Systems','Unit 2 – Creating Systems to Manage Information','Unit 3 – Using Social Media in Business','Unit 5 – Data Modelling','Unit 7 – IT Systems Security'],
    }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// MASTER TOPICS OBJECT
// ─────────────────────────────────────────────────────────────────────────────
const TOPICS = { ...GCSE, ...A_LEVEL }

// Merge in A-Level under board keys alongside GCSE
// (A_LEVEL and GCSE share the same board keys so we deep-merge)
for (const board of Object.keys(A_LEVEL)) {
  for (const subject of Object.keys(A_LEVEL[board])) {
    const aLevelSubject = subject + ' (A-Level)'
    if (!TOPICS[board]) TOPICS[board] = {}
    TOPICS[board][aLevelSubject] = A_LEVEL[board][subject]
  }
}

// Add L2 Vocational and BTEC under their own board keys
for (const board of Object.keys(L2_VOCATIONAL)) {
  if (!TOPICS[board]) TOPICS[board] = {}
  for (const subject of Object.keys(L2_VOCATIONAL[board])) {
    TOPICS[board][subject] = L2_VOCATIONAL[board][subject]
  }
}
for (const board of Object.keys(BTEC)) {
  if (!TOPICS[board]) TOPICS[board] = {}
  for (const subject of Object.keys(BTEC[board])) {
    TOPICS[board][subject] = BTEC[board][subject]
  }
}

// ── LOOKUP FUNCTIONS ──────────────────────────────────────────────────────────
export function getTopicsForSubject(board, subject, level) {
  const key = level === 'A-Level' ? subject + ' (A-Level)' : subject
  return TOPICS[board]?.[key] || TOPICS['AQA']?.[key] || null
}

export function getAllTopicsFlat(board, subject, level) {
  // Try exact subject name first, then with qualification suffix
  let subj = getTopicsForSubject(board, subject, level)
  // Fallback: try AQA if board not found
  if (!subj && board !== 'AQA') subj = getTopicsForSubject('AQA', subject, level)
  if (!subj) return []
  return Object.entries(subj.papers).flatMap(([paper, topicList]) =>
    topicList.map(t => ({ name: t, paper: parseInt(paper), subjectId: subject }))
  )
}

export function getAllSubjects(board, level) {
  const boardData = TOPICS[board] || {}
  return Object.keys(boardData).filter(s => {
    if (level === 'A-Level') return s.includes('(A-Level)')
    if (level === 'GCSE') return !s.includes('(A-Level)') && !s.includes('BTEC') && !s.includes('Cambridge National') && !s.includes('WJEC Level')
    return true
  })
}

export default TOPICS
export { GCSE, A_LEVEL, L2_VOCATIONAL, BTEC }
