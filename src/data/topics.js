// src/data/topics.js
// Official specification topic names for all qualifications
// Sources: AQA, OCR, Edexcel, WJEC, CCEA, Pearson published specifications

// ─────────────────────────────────────────────────────────────────────────────
// GCSE TOPICS
// ─────────────────────────────────────────────────────────────────────────────
const GCSE = {
  "Edexcel": {
    "Subject": {
      "papers": {
        "1": [
          "Key Topic Areas"
        ]
      }
    }
  },
  "AQA": {
    "Mathematics": {
      "papers": {
        "1": [
          "All topics as Paper 1",
          "More complex calculations, multi-step problems",
          "Financial maths (compound interest, reverse percentage)"
        ]
      }
    },
    "English Language": {
      "papers": {
        "1": [
          "Reading: 20th/21st century fiction",
          "Inference",
          "Language analysis",
          "Structure analysis",
          "Evaluation",
          "Writing: descriptive or narrative"
        ],
        "2": [
          "Reading: 19th century non-fiction + modern non-fiction",
          "Comparison",
          "Writing: viewpoint or perspective text"
        ]
      }
    },
    "English Literature": {
      "papers": {
        "1": [
          "Shakespeare play (set text \u2013 choice from: Macbeth, Romeo & Juliet, The Merchant of Venice, etc.)",
          "19th-century novel"
        ],
        "2": [
          "Modern prose or drama",
          "Power & Conflict or Love & Relationships anthology poetry",
          "Unseen poetry"
        ]
      }
    },
    "Biology": {
      "papers": {
        "1": [
          "Cell biology",
          "Organisation",
          "Infection & response",
          "Bioenergetics"
        ],
        "2": [
          "Homeostasis & response",
          "Inheritance, variation & evolution",
          "Ecology"
        ]
      }
    },
    "Chemistry": {
      "papers": {
        "1": [
          "Atomic structure & periodic table",
          "Bonding",
          "Quantitative chemistry",
          "Chemical changes",
          "Energy changes"
        ],
        "2": [
          "Rate & extent of reactions",
          "Organic chemistry",
          "Chemical analysis",
          "Chemistry of the atmosphere",
          "Using resources"
        ]
      }
    },
    "Physics": {
      "papers": {
        "1": [
          "Energy",
          "Electricity",
          "Particle model of matter",
          "Atomic structure"
        ],
        "2": [
          "Forces",
          "Waves",
          "Magnetism & electromagnetism",
          "Space physics (higher tier)"
        ]
      }
    },
    "Geography": {
      "papers": {
        "1": [
          "Natural hazards",
          "Living world (ecosystems, tropical rainforests, hot deserts)",
          "Physical landscapes in the UK (rivers, coasts)"
        ],
        "2": [
          "Urban issues & challenges",
          "Changing economic world",
          "Resource management",
          "Food/water/energy"
        ],
        "3": [
          "Issue evaluation",
          "Fieldwork (two investigations)",
          "Geographical skills"
        ]
      }
    },
    "History": {
      "papers": {
        "1": [
          "Section A: Period study (America, Germany, Russia, or America 1920\u201373)",
          "Section B: Wider world conflict topic"
        ],
        "2": [
          "Section A: Thematic study (Health, Power, Migration)",
          "Section B: British depth study (Norman England, Elizabethan, etc.)"
        ]
      }
    },
    "Economics": {
      "papers": {
        "1": [
          "Economic foundations",
          "Resource allocation",
          "Price mechanism",
          "Competition",
          "Market failure",
          "Role of government"
        ],
        "2": [
          "National economic performance",
          "Government objectives",
          "Fiscal/monetary policy",
          "International trade",
          "Globalisation",
          "Inequality"
        ]
      }
    },
    "Business": {
      "papers": {
        "1": [
          "Business activity",
          "Business ownership",
          "Stakeholders",
          "Business location",
          "Business planning",
          "Operations",
          "HRM"
        ],
        "2": [
          "Marketing",
          "Market research",
          "Marketing mix (4Ps)",
          "Finance",
          "Sources of finance",
          "Financial planning",
          "External influences"
        ]
      }
    },
    "Computer Science": {
      "papers": {
        "1": [
          "Algorithms",
          "Programming fundamentals",
          "Data structures",
          "Boolean logic",
          "Theory of computation",
          "Problems & solutions"
        ],
        "2": [
          "Hardware",
          "Software",
          "Binary & data representation",
          "Networks",
          "Cybersecurity",
          "Databases",
          "Ethical, legal & cultural issues"
        ]
      }
    },
    "Psychology": {
      "papers": {
        "1": [
          "Memory",
          "Perception",
          "Development (Piaget)",
          "Research methods"
        ],
        "2": [
          "Social influence",
          "Language, thought & communication",
          "Brain & neuropsychology",
          "Psychological problems"
        ]
      }
    },
    "Sociology": {
      "papers": {
        "1": [
          "What is sociology?",
          "The family (types, roles, diversity, changing patterns)",
          "Education (role, sociological perspectives)"
        ],
        "2": [
          "Crime & deviance",
          "Social stratification (class, gender, ethnicity, power)"
        ]
      }
    },
    "Religious Studies A": {
      "papers": {
        "1": [
          "Two religions studied in depth: Christian/Catholic/Islamic/Hindu/Jewish/Sikh/Buddhist beliefs, practices, sources of wisdom"
        ],
        "2": [
          "Themes: Religion & relationships",
          "Religion & life",
          "Religion, peace & conflict",
          "Religion, crime & punishment",
          "Religion, human rights & social justice"
        ]
      }
    },
    "Citizenship Studies": {
      "papers": {
        "1": [
          "Living together in the UK",
          "Democracy, government & participation",
          "Rights & responsibilities"
        ],
        "2": [
          "Active citizenship",
          "Bilateral & international relations",
          "Media & digital citizenship"
        ]
      }
    },
    "Drama": {
      "papers": {
        "1": [
          "Set text analysis",
          "Theatre vocabulary",
          "Live theatre evaluation"
        ]
      }
    },
    "Music": {
      "papers": {
        "1": [
          "Listening to and appraising music",
          "Four areas of study (compulsory): Western Classical Tradition, Popular Music, Traditional Music, Western Classical Tradition since 1910"
        ]
      }
    },
    "Physical Education": {
      "papers": {
        "1": [
          "Applied anatomy & physiology",
          "Movement analysis",
          "Physical training"
        ],
        "2": [
          "Sports psychology",
          "Socio-cultural influences",
          "Health, fitness & wellbeing",
          "Use of data"
        ]
      }
    },
    "Food Preparation & Nutrition": {
      "papers": {
        "1": [
          "Food commodities",
          "Principles of nutrition",
          "Diet & good health",
          "Functional & chemical properties of food",
          "Cooking",
          "Food provenance",
          "Food science"
        ]
      }
    },
    "Media Studies": {
      "papers": {
        "1": [
          "Media language",
          "Representation",
          "Media industries",
          "Audiences",
          "Set products: newspapers, advertising, music video, online"
        ],
        "2": [
          "Television",
          "Film",
          "Radio",
          "Video games",
          "Online/social media",
          "Set products",
          "NEA"
        ]
      }
    },
    "Design & Technology": {
      "papers": {
        "1": [
          "Core technical principles",
          "Specialist technical principles",
          "Designing & making principles"
        ]
      }
    },
    "French": {
      "papers": {
        "1": [
          "Translation",
          "Free writing",
          "Role-play",
          "Photo card",
          "Conversation"
        ]
      }
    },
    "German": {
      "papers": {
        "1": [
          "Themes: Identity & culture",
          "Local/national/international/global",
          "Current/future study & employment",
          "Grammar"
        ]
      }
    },
    "Spanish": {
      "papers": {
        "1": [
          "Themes: Identity & culture",
          "Local/national/international/global",
          "Study, employment & future plans",
          "Grammar"
        ]
      }
    }
  }
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
  "Pearson": {
    "Subject Title": {
      "papers": {
        "1": [
          "Available Sizes"
        ]
      }
    },
    "Animal Care": {
      "papers": {
        "1": [
          "Award / Certificate / Extended Certificate"
        ]
      }
    },
    "Applied Science": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Art and Design": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    },
    "Business": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Children and Young People's Workforce": {
      "papers": {
        "1": [
          "Award / Certificate / Extended Certificate"
        ]
      }
    },
    "Construction and the Built Environment": {
      "papers": {
        "1": [
          "Award / Certificate / Extended Certificate"
        ]
      }
    },
    "Engineering": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Health and Social Care": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Hospitality": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    },
    "Information Technology": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Land-based Technology": {
      "papers": {
        "1": [
          "Award / Certificate"
        ]
      }
    },
    "Creative Media Production": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    },
    "Performing Arts": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Public Services": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Sport": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Travel and Tourism": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Vehicle Technology": {
      "papers": {
        "1": [
          "Award / Certificate"
        ]
      }
    },
    "Animal Management": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Applied Human Biology": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    },
    "Applied Law": {
      "papers": {
        "1": [
          "Certificate / Ext Cert"
        ]
      }
    },
    "Applied Psychology": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    },
    "Children's Play, Learning & Development": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    },
    "Computing": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    },
    "Construction & Built Environment": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    },
    "Enterprise & Entrepreneurship": {
      "papers": {
        "1": [
          "Certificate / Ext Cert"
        ]
      }
    },
    "Esports": {
      "papers": {
        "1": [
          "Certificate / Ext Cert"
        ]
      }
    },
    "Forensic & Criminal Investigation": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma"
        ]
      }
    },
    "Land and Environment": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    },
    "Music": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Foundation Diploma / Diploma / Ext Diploma"
        ]
      }
    },
    "Music Technology": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma"
        ]
      }
    },
    "Sport and Exercise Science": {
      "papers": {
        "1": [
          "Certificate / Ext Cert / Diploma / Ext Diploma"
        ]
      }
    }
  }
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
