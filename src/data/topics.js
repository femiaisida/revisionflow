// src/data/topics.js
// Pre-loaded topic lists for all major GCSE subjects
// Format: { [board]: { [subject]: { papers: { [paperNum]: string[] } } } }

const TOPICS = {
  AQA: {
    'Mathematics': {
      papers: {
        1: ['Number – integers, decimals, fractions', 'Number – surds and indices', 'Algebra – expressions and formulae', 'Algebra – equations and inequalities', 'Algebra – sequences', 'Algebra – graphs', 'Ratio, proportion and rates of change', 'Geometry – angles and polygons', 'Geometry – circles', 'Geometry – 3D shapes', 'Geometry – transformations', 'Geometry – constructions and loci', 'Statistics – data collection', 'Statistics – averages and spread', 'Statistics – charts and diagrams', 'Probability'],
        2: ['Number – calculations', 'Algebra – quadratics', 'Algebra – simultaneous equations', 'Algebra – functions', 'Geometry – Pythagoras and trigonometry', 'Geometry – vectors', 'Statistics – scatter graphs', 'Probability – tree diagrams', 'Ratio and proportion', 'Mensuration'],
        3: ['Algebra – further graphs', 'Algebra – proof', 'Geometry – circle theorems', 'Geometry – similar shapes', 'Statistics – cumulative frequency', 'Statistics – histograms', 'Probability – combined events', 'Number – bounds', 'Trigonometry – sine and cosine rule', 'Calculus (Higher)'],
      }
    },
    'Further Mathematics': {
      papers: {
        1: ['Algebra – factor theorem', 'Algebra – algebraic fractions', 'Algebra – matrices', 'Calculus – differentiation', 'Calculus – integration', 'Coordinate geometry – conic sections', 'Trigonometry – identities', 'Series and sequences', 'Proof', 'Inequalities'],
        2: ['Further calculus', 'Further trigonometry', 'Further algebra', 'Numerical methods', 'Vectors in 3D', 'Further statistics', 'Further mechanics', 'Complex numbers introduction'],
      }
    },
    'English Language': {
      papers: {
        1: ['Reading – fiction extracts', 'Reading – language analysis (Q2)', 'Reading – structural analysis (Q3)', 'Reading – evaluation (Q4)', 'Writing – descriptive writing', 'Writing – narrative writing', 'Vocabulary and language techniques', 'Structural techniques', 'Sentence-level grammar'],
        2: ['Reading – non-fiction', 'Reading – synthesis (Q2)', 'Reading – language analysis (Q3)', 'Reading – comparison of viewpoints (Q4)', 'Writing – viewpoint and argument', 'Writing – persuasive techniques', 'Rhetoric and discourse markers', 'Formality and register'],
      }
    },
    'English Literature': {
      papers: {
        1: ['Macbeth – themes', 'Macbeth – character analysis', 'Macbeth – language and context', 'A Christmas Carol – themes', 'A Christmas Carol – character analysis', 'A Christmas Carol – language and context', 'An Inspector Calls – themes', 'An Inspector Calls – character analysis', 'An Inspector Calls – language and context', 'Essay structure and technique'],
        2: ['Power and Conflict poetry – individual poems', 'Power and Conflict – comparison techniques', 'Power and Conflict – unseen poetry', 'Love and Relationships poetry', 'Unseen poetry analysis (SMILE)', 'Context and its effect on writing'],
      }
    },
    'Biology': {
      papers: {
        1: ['Cell biology', 'Organisation – digestive system', 'Organisation – heart and blood vessels', 'Organisation – health and disease', 'Infection and response', 'Bioenergetics – photosynthesis', 'Bioenergetics – respiration', 'Required practicals – biology'],
        2: ['Homeostasis – nervous system', 'Homeostasis – hormonal coordination', 'Homeostasis – kidney', 'Inheritance, variation and evolution', 'Genetics – DNA and inheritance', 'Evolution – natural selection', 'Ecology – ecosystems', 'Ecology – biodiversity', 'Required practicals – biology 2'],
      }
    },
    'Chemistry': {
      papers: {
        1: ['Atomic structure and periodic table', 'Bonding – ionic', 'Bonding – covalent and metallic', 'Bonding – structure and properties', 'Quantitative chemistry – moles', 'Quantitative chemistry – calculations', 'Chemical changes – reactivity', 'Chemical changes – electrolysis', 'Energy changes', 'Required practicals – chemistry'],
        2: ['Rate of reaction', 'Equilibrium – Le Chatelier', 'Organic chemistry – hydrocarbons', 'Organic chemistry – polymers', 'Chemical analysis – chromatography', 'Chemical analysis – tests for ions', 'Chemistry of the atmosphere', 'Using resources – water treatment', 'Using resources – Haber process', 'Required practicals – chemistry 2'],
      }
    },
    'Physics': {
      papers: {
        1: ['Energy – stores and transfers', 'Energy – calculations and efficiency', 'Electricity – circuits', 'Electricity – domestic and mains', 'Particle model of matter', 'Atomic structure – radioactivity', 'Atomic structure – nuclear equations', 'Required practicals – physics'],
        2: ['Forces – speed and velocity', 'Forces – Newton\'s laws', 'Forces – momentum', 'Waves – properties', 'Waves – electromagnetic spectrum', 'Waves – sound and ultrasound', 'Magnetism and electromagnetism', 'Space physics', 'Required practicals – physics 2'],
      }
    },
    'Combined Science': {
      papers: {
        1: ['Cell biology', 'Organisation', 'Infection and response', 'Bioenergetics'],
        2: ['Atomic structure', 'Bonding', 'Quantitative chemistry', 'Chemical changes'],
        3: ['Energy', 'Electricity', 'Particle model', 'Atomic structure – radioactivity'],
        4: ['Homeostasis', 'Inheritance and evolution', 'Ecology'],
        5: ['Rate of reaction', 'Organic chemistry', 'Chemical analysis', 'Chemistry of atmosphere'],
        6: ['Forces', 'Waves', 'Magnetism', 'Space physics'],
      }
    },
    'Geography': {
      papers: {
        1: ['Tectonic hazards', 'Weather hazards', 'Climate change', 'Ecosystems – small scale', 'Tropical rainforests', 'Hot deserts', 'Cold environments', 'Coasts', 'Rivers', 'Glacial landscapes'],
        2: ['Urban issues – UK city', 'Urban issues – developing world city', 'Economic world – development gap', 'Economic world – Nigeria', 'Economic world – UK economy', 'Resource management – food', 'Resource management – water', 'Resource management – energy'],
        3: ['Issue evaluation (pre-release)', 'Fieldwork – physical environment', 'Fieldwork – human environment', 'Geographical skills – maps', 'Geographical skills – statistics'],
      }
    },
    'Computer Science': {
      papers: {
        1: ['Systems architecture – CPU', 'Systems architecture – fetch-decode-execute', 'Memory and storage – RAM and ROM', 'Memory and storage – secondary storage', 'Networks – types and topologies', 'Networks – protocols and layers', 'Network security – threats', 'Network security – prevention', 'Systems software – operating systems', 'Ethical and legal issues'],
        2: ['Algorithms – searching', 'Algorithms – sorting', 'Algorithms – flowcharts and pseudocode', 'Programming – variables and data types', 'Programming – selection and iteration', 'Programming – arrays and lists', 'Programming – functions and procedures', 'Programming – file handling', 'Programming – OOP concepts', 'Boolean logic', 'Programming languages and IDEs', 'Computational thinking – decomposition', 'Computational thinking – abstraction'],
      }
    },
    'German': {
      papers: {
        1: ['Listening – identity and culture', 'Listening – local area and travel', 'Listening – school and education', 'Listening – future plans and work', 'Listening – international and global themes'],
        2: ['Speaking – role play', 'Speaking – photo card', 'Speaking – general conversation theme 1', 'Speaking – general conversation theme 2'],
        3: ['Reading – identity and culture', 'Reading – local area', 'Reading – school', 'Reading – future plans', 'Reading – global issues', 'Grammar – tenses', 'Grammar – cases and articles', 'Grammar – conjunctions and word order', 'Vocabulary – all themes'],
        4: ['Writing – translation into German', 'Writing – structured task', 'Writing – open-ended task', 'Grammar in writing', 'Vocabulary accuracy'],
      }
    },
    'Business Studies': {
      papers: {
        1: ['Enterprise and entrepreneurship', 'Spotting a business opportunity', 'Putting a business idea into practice', 'Making the business effective', 'Understanding external influences', 'Business operations', 'Marketing'],
        2: ['Growing the business', 'Making marketing decisions', 'Making operational decisions', 'Making financial decisions', 'Making human resource decisions', 'Global business'],
      }
    },
    'History': {
      papers: {
        1: ['Medicine through time', 'Western Front', 'Crime and punishment', 'Elizabethan England'],
        2: ['Germany 1890–1945', 'Conflict and tension 1918–1939', 'Britain – Health and the People'],
      }
    },
    'Religious Studies': {
      papers: {
        1: ['Christianity – beliefs and teachings', 'Christianity – practices', 'Islam – beliefs and teachings', 'Islam – practices'],
        2: ['Relationships and families', 'Religion and life', 'Crime and punishment', 'Peace and conflict'],
      }
    },
    'Psychology': {
      papers: {
        1: ['Memory', 'Perception', 'Development', 'Research methods'],
        2: ['Social influence', 'Language, thought and communication', 'Brain and neuropsychology', 'Psychological problems'],
      }
    },
    'Sociology': {
      papers: {
        1: ['The sociology of families', 'The sociology of education', 'Research methods'],
        2: ['The sociology of crime and deviance', 'Social stratification', 'Research methods in context'],
      }
    },
    'French': {
      papers: {
        1: ['Listening – all themes'],
        2: ['Speaking – role play, photo card, conversation'],
        3: ['Reading – all themes', 'Grammar and vocabulary'],
        4: ['Writing – translation, structured and open tasks'],
      }
    },
    'Spanish': {
      papers: {
        1: ['Listening – all themes'],
        2: ['Speaking – role play, photo card, conversation'],
        3: ['Reading – all themes', 'Grammar and vocabulary'],
        4: ['Writing – translation, structured and open tasks'],
      }
    },
  },

  OCR: {
    'Computer Science': {
      papers: {
        1: ['Systems architecture', 'Memory and storage', 'Computer networks', 'Network security', 'Systems software', 'Ethical, legal, cultural and environmental issues'],
        2: ['Computational thinking', 'Problem solving', 'Algorithms', 'Programming techniques', 'Producing robust programs', 'Boolean logic', 'Programming languages and IDEs'],
      }
    },
    'Mathematics': {
      papers: {
        1: ['Number', 'Algebra', 'Ratio', 'Geometry', 'Statistics and probability'],
        2: ['Number and algebra', 'Geometry and measures', 'Statistics'],
        3: ['Higher topics – further algebra', 'Further geometry', 'Further statistics'],
      }
    },
    'Geography': {
      papers: {
        1: ['Landscapes of the UK', 'People of the UK', 'UK in the 21st century'],
        2: ['People and society', 'Physical systems and sustainability'],
        3: ['Geographical debate 1', 'Geographical debate 2'],
      }
    },
    'History': {
      papers: {
        1: ['History around us (site study)', 'The People\'s Health'],
        2: ['Elizabethan England', 'Germany 1925–1955', 'The Cold War'],
      }
    },
  },

  Edexcel: {
    'Mathematics': {
      papers: {
        1: ['Number', 'Algebra', 'Ratio, proportion and rates of change', 'Geometry and measures', 'Statistics and probability'],
        2: ['Number and algebra', 'Shape, space and measures', 'Handling data'],
        3: ['Further algebra and graphs', 'Further geometry', 'Further statistics'],
      }
    },
    'English Language': {
      papers: {
        1: ['Fiction reading and analysis', 'Imaginative writing', 'Language techniques'],
        2: ['Non-fiction reading', 'Transactional writing', 'Comparison skills'],
      }
    },
    'English Literature': {
      papers: {
        1: ['Modern prose or drama', 'Shakespeare', 'Essay technique'],
        2: ['19th-century novel', 'Poetry anthology', 'Unseen poetry'],
      }
    },
    'Business Studies': {
      papers: {
        1: ['Enterprise', 'Marketing', 'Finance – costs and revenue', 'Finance – break even', 'Operations', 'Human resources – small business'],
        2: ['Business growth', 'Global business', 'Marketing decisions', 'Financial decisions', 'Operations decisions', 'HR decisions'],
      }
    },
    'Geography': {
      papers: {
        1: ['Coasts', 'Rivers', 'Glaciation', 'Weather and climate'],
        2: ['Changing cities', 'Global development', 'Resource management'],
        3: ['Fieldwork and skills', 'Issue evaluation'],
      }
    },
    'History': {
      papers: {
        1: ['Thematic study', 'Historic environment'],
        2: ['British depth study', 'Period study'],
        3: ['Modern depth study'],
      }
    },
  },

  WJEC: {
    'Mathematics': {
      papers: {
        1: ['Number', 'Algebra', 'Geometry', 'Statistics'],
        2: ['Number and algebra', 'Shape and space', 'Data handling'],
      }
    },
    'English Language': {
      papers: {
        1: ['Reading – prose fiction', 'Writing – creative'],
        2: ['Reading – non-fiction', 'Writing – transactional'],
      }
    },
    'English Literature': {
      papers: {
        1: ['Poetry', 'Drama – Shakespeare'],
        2: ['Prose', 'Unseen texts'],
      }
    },
    'Biology': {
      papers: {
        1: ['Cells', 'Biodiversity', 'Photosynthesis and respiration', 'Health'],
        2: ['Genetics', 'Evolution', 'Homeostasis', 'Ecology'],
      }
    },
    'Chemistry': {
      papers: {
        1: ['Atomic structure', 'Bonding', 'Acids and bases', 'Quantitative chemistry'],
        2: ['Rates', 'Organic chemistry', 'Analysis', 'Environmental chemistry'],
      }
    },
    'Physics': {
      papers: {
        1: ['Energy', 'Forces', 'Electricity', 'Radiation'],
        2: ['Waves', 'Magnetism', 'Space', 'Nuclear physics'],
      }
    },
    'Geography': {
      papers: {
        1: ['Changing landscapes', 'Changing places'],
        2: ['Tectonic hazards', 'Ecosystems', 'Development'],
        3: ['Applied fieldwork enquiry'],
      }
    },
    'History': {
      papers: {
        1: ['Changes in health and medicine', 'Power and protest'],
        2: ['Germany 1919–1945', 'Cold War'],
      }
    },
  },

  CCEA: {
    'Mathematics': {
      papers: {
        1: ['Number and algebra', 'Geometry', 'Statistics and probability'],
        2: ['Further number', 'Further algebra', 'Further geometry'],
      }
    },
    'English Language': {
      papers: {
        1: ['Reading and writing – creative'],
        2: ['Reading and writing – transactional'],
      }
    },
    'Biology': {
      papers: {
        1: ['Cells and organisms', 'Ecosystems', 'Genetics'],
        2: ['Biological molecules', 'Respiration and photosynthesis', 'Homeostasis'],
      }
    },
    'Chemistry': {
      papers: {
        1: ['Atomic structure', 'Bonding', 'Chemical reactions'],
        2: ['Organic chemistry', 'Analysis', 'Industrial chemistry'],
      }
    },
    'Physics': {
      papers: {
        1: ['Forces and motion', 'Energy', 'Electricity'],
        2: ['Waves', 'Magnetism', 'Nuclear physics'],
      }
    },
  },
}

// Cambridge IGCSE (common for independent schools)
TOPICS['Cambridge'] = {
  'Mathematics': {
    papers: {
      1: ['Number', 'Algebra', 'Geometry', 'Statistics and probability'],
      2: ['Extended mathematics topics'],
    }
  },
  'English Language': {
    papers: {
      1: ['Reading comprehension', 'Summary writing'],
      2: ['Extended writing and directed writing'],
    }
  },
  'Biology': {
    papers: {
      1: ['Cell biology', 'Plant biology', 'Animal biology', 'Genetics and evolution'],
      2: ['Extended biology'],
    }
  },
  'Chemistry': {
    papers: {
      1: ['Atomic structure', 'Chemical reactions', 'Organic chemistry'],
      2: ['Extended chemistry'],
    }
  },
  'Physics': {
    papers: {
      1: ['Forces and motion', 'Energy', 'Waves', 'Electricity', 'Nuclear physics'],
      2: ['Extended physics'],
    }
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
