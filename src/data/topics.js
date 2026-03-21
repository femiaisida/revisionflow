// src/data/topics.js
// Official specification topic names — exact names from published specifications
// Sources: AQA, OCR, Edexcel, WJEC/Eduqas, CCEA published specs (2024-26)
// Format: papers are numbered 1, 2, 3 etc. Topics are exact spec section names.

// ─────────────────────────────────────────────────────────────────────────────
// GCSE TOPICS — keyed by board then subject name (must match GCSE_SUBJECTS list)
// ─────────────────────────────────────────────────────────────────────────────
const GCSE = {
  AQA: {
    'Mathematics': { papers: {
      1: ['Number','Algebra','Ratio, proportion and rates of change','Geometry and measures','Probability','Statistics'],
      2: ['Number','Algebra','Ratio, proportion and rates of change','Geometry and measures','Probability','Statistics'],
      3: ['Number','Algebra','Ratio, proportion and rates of change','Geometry and measures','Probability','Statistics'],
    }},
    'English Language': { papers: {
      1: ['Reading: 20th/21st century fiction — identifying information and ideas','Reading: language and structure analysis','Reading: evaluation of a writer\'s ideas and perspectives','Writing: descriptive or narrative writing'],
      2: ['Reading: 19th century non-fiction','Reading: 21st century non-fiction','Reading: comparing writers\' perspectives and methods','Writing: viewpoint or argument'],
    }},
    'English Literature': { papers: {
      1: ['Shakespeare play (set text: Macbeth / Romeo & Juliet / The Merchant of Venice / Much Ado About Nothing / Julius Caesar / Othello)','19th-century prose (set text: A Christmas Carol / Great Expectations / Dr Jekyll & Mr Hyde / Frankenstein / Jane Eyre)'],
      2: ['Modern texts: prose or drama (set text — school choice)','Poetry: Power & Conflict or Love & Relationships anthology','Unseen poetry comparison'],
    }},
    'Biology': { papers: {
      1: ['Cell biology','Organisation','Infection and response','Bioenergetics'],
      2: ['Homeostasis and response','Inheritance, variation and evolution','Ecology'],
    }},
    'Chemistry': { papers: {
      1: ['Atomic structure and the periodic table','Bonding, structure and the properties of matter','Quantitative chemistry','Chemical changes','Energy changes'],
      2: ['Rate and extent of chemical change','Organic chemistry','Chemical analysis','Chemistry of the atmosphere','Using resources'],
    }},
    'Physics': { papers: {
      1: ['Energy','Electricity','Particle model of matter','Atomic structure'],
      2: ['Forces','Waves','Magnetism and electromagnetism','Space physics (Higher only)'],
    }},
    'Combined Science: Trilogy': { papers: {
      1: ['Cell biology','Organisation','Infection and response','Bioenergetics (Biology)'],
      2: ['Homeostasis and response','Inheritance, variation and evolution','Ecology (Biology)'],
      3: ['Atomic structure and the periodic table','Bonding, structure and the properties of matter','Quantitative chemistry','Chemical changes','Energy changes (Chemistry)'],
      4: ['Rate and extent of chemical change','Organic chemistry','Chemical analysis','Chemistry of the atmosphere','Using resources (Chemistry)'],
      5: ['Energy','Electricity','Particle model of matter','Atomic structure (Physics)'],
      6: ['Forces','Waves','Magnetism and electromagnetism (Physics)'],
    }},
    'Combined Science: Synergy': { papers: {
      1: ['Atomic Structure','Bonding and Structure','Quantitative Chemistry','Energy Changes','Rates of Reaction (Physical Chemistry)'],
      2: ['Cell Biology','Organisation and the Digestive System','Infection and Response','Bioenergetics','Inheritance, Variation and Evolution (Life and Environment)'],
      3: ['Motion, Forces and Conservation of Energy','Waves','Magnetism and Electromagnetism','Particle Model','Atomic Structure and Radioactivity (Physical Chemistry)'],
      4: ['Ecosystems and Material Cycles','Homeostasis and Response (Life and Environment)'],
    }},
    'Computer Science': { papers: {
      1: ['3.1 Fundamentals of algorithms','3.2 Programming','3.3 Fundamentals of data representation','3.4 Computer systems','3.5 Fundamentals of computer networks','3.6 Cybersecurity','3.7 Relational databases and structured query language','3.8 Ethical, legal, cultural and environmental impacts of digital technology'],
      2: ['NEA — programming project (non-exam assessment)'],
    }},
    'Geography': { papers: {
      1: ['Section A: The challenge of natural hazards (Tectonic hazards, Weather hazards, Climate change)','Section B: The living world (Ecosystems, Tropical rainforests, Hot deserts or Cold environments)','Section C: Physical landscapes in the UK (Coastal landscapes, River landscapes)'],
      2: ['Section A: Urban issues and challenges','Section B: The changing economic world','Section C: The challenge of resource management (Food / Water / Energy)'],
      3: ['Section A: Issue evaluation (pre-release material)','Section B: Fieldwork (two investigations)','Section C: Geographical skills'],
    }},
    'History': { papers: {
      1: ['Period study (America 1840-95 / Conflict and tension 1918-39 / Conflict and tension — Asia 1950-75 / America 1920-73)','Wider world depth study (Germany 1890-1945 / Tsarist and Communist Russia 1855-1964 / Norman England / Elizabethan England)'],
      2: ['Thematic study (Britain: Health and the people / Power and the people / Migration, empires and the people)','British depth study (Norman England 1066-1100 / Elizabethan England 1568-1603 / Restoration England 1660-85)'],
    }},
    'German': { papers: {
      1: ['Listening — Theme 1: Identity and culture; Theme 2: Local, national, international and global areas of interest; Theme 3: Current and future study and employment'],
      2: ['Speaking — Role play, Photo card, General conversation across all themes'],
      3: ['Reading — Themes 1, 2 and 3 including translation into English'],
      4: ['Writing — Translation into German and extended writing across all themes'],
    }},
    'French': { papers: {
      1: ['Listening — Theme 1: Identity and culture; Theme 2: Local, national, international and global areas of interest; Theme 3: Current and future study and employment'],
      2: ['Speaking — Role play, Photo card, General conversation across all themes'],
      3: ['Reading — Themes 1, 2 and 3 including translation into English'],
      4: ['Writing — Translation into French and extended writing across all themes'],
    }},
    'Spanish': { papers: {
      1: ['Listening — Theme 1: Identity and culture; Theme 2: Local, national, international and global areas of interest; Theme 3: Current and future study and employment'],
      2: ['Speaking — Role play, Photo card, General conversation across all themes'],
      3: ['Reading — Themes 1, 2 and 3 including translation into English'],
      4: ['Writing — Translation into Spanish and extended writing across all themes'],
    }},
    'Religious Studies A': { papers: {
      1: ['Component 1: The study of religions (two religions studied in depth — beliefs, teachings and practices): Christianity, Islam, Judaism, Buddhism, Hinduism, or Sikhism'],
      2: ['Component 2: Thematic studies — Religion and relationships; Religion and life; The existence of God and revelation; Religion, peace and conflict; Religion, crime and punishment; Religion, human rights and social justice'],
    }},
    'Religious Studies B': { papers: {
      1: ['Area of Study 1: Christianity — Core beliefs, teachings and practices'],
      2: ['Area of Study 2: Second religion studied in depth (Islam / Judaism / Buddhism / Hinduism / Sikhism)'],
      3: ['Area of Study 3: Philosophy and ethics applied to religious questions'],
    }},
    'Psychology': { papers: {
      1: ['Cognition and development: Piaget\'s theory, Willingham\'s learning theory, Baron-Cohen and autistic spectrum disorder','Social context and behaviour: Milgram, Haney, Piliavin, social learning theory'],
      2: ['Brain and neuropsychology: nervous system, brain, neurological damage, Tulving\'s theory of memory','Psychological problems: depression, addiction — behavioural and biological explanations and treatments','Research methods'],
    }},
    'Sociology': { papers: {
      1: ['The sociology of families: family types, roles, demographic changes, sociological perspectives on families','The sociology of education: role of education, sociological perspectives, differential achievement by class, gender and ethnicity'],
      2: ['The sociology of crime and deviance: crime statistics, explanations for crime, social control','Social stratification: class, gender, ethnicity, power and poverty'],
    }},
    'Business': { papers: {
      1: ['Business activity: purpose, types of ownership, stakeholders','Marketing: market research, consumer behaviour, marketing mix','People: recruitment, training, motivation, organisational structure','Operations: production processes, working with suppliers, quality management'],
      2: ['Finance: sources of finance, revenue, costs, profit, break-even, cash flow','Influences on business: economic climate, legislation, ethical and environmental factors, globalisation'],
    }},
    'Economics': { papers: {
      1: ['How markets work: demand, supply, price mechanism, market failure','How the economy works: economic activity, unemployment, inflation, economic growth'],
      2: ['Application questions based on economic data and stimulus material (Themes 1 and 2)'],
    }},
    'Drama': { papers: {
      1: ['Component 1: Understanding drama — study of set play; live theatre evaluation'],
      2: ['Component 2: Devising drama (practical — non-exam)'],
      3: ['Component 3: Texts in practice (practical — two scenes from different plays)'],
    }},
    'Music': { papers: {
      1: ['Area of study 1: Western classical tradition 1650–1910','Area of study 2: Popular music','Area of study 3: Traditional music','Area of study 4: Western classical tradition since 1910 / Jazz / Film music'],
    }},
    'Physical Education': { papers: {
      1: ['Applied anatomy and physiology: the skeletal system, muscular system, cardiovascular system, respiratory system, energy systems','Movement analysis: lever systems, planes and axes of movement','Physical training: components of fitness, principles of training, methods of training'],
      2: ['Sports psychology: skill classification, goal setting, mental preparation','Socio-cultural influences: engagement patterns, commercialisation, ethics in sport','Health, fitness and wellbeing'],
    }},
    'Food Preparation and Nutrition': { papers: {
      1: ['Food commodities','Principles of nutrition','Diet and good health','The science of food','Where food comes from','Cooking and food preparation'],
    }},
    'Media Studies': { papers: {
      1: ['Section A: Exploring the media — media language, representation, media industries, audiences, set products (newspaper, advertising, music video, online/social media)'],
      2: ['Section B: Understanding media forms and products — television, film marketing, radio, video games, set products'],
    }},
    'Design and Technology': { papers: {
      1: ['Core technical principles: new and emerging technologies; energy, materials, systems and devices; mechanical devices; materials and their properties','Specialist technical principles (chosen focus area)','Designing and making principles'],
    }},
    'Citizenship Studies': { papers: {
      1: ['Life in modern Britain: democracy and government; rights and responsibilities; the identity and values of UK society'],
      2: ['Active citizenship: taking part in democracy; assessing change; working with others to change things; the UK in the wider world'],
    }},
    'Statistics': { papers: {
      1: ['Data collection, sampling, tabulation and representation'],
      2: ['Probability, correlation, regression, time series, index numbers'],
    }},
    'Further Mathematics': { papers: {
      1: ['Number: primes, factors, powers, standard form, surds','Algebra: expressions, equations, functions, sequences, graphs','Geometry and measures: properties of shapes, coordinate geometry, transformations','Calculus: differentiation and integration (introductory)'],
      2: ['Statistics: data handling, probability, distributions','Mechanics: kinematics, forces, Newton\'s laws','Matrix transformations (Level 2 Further)'],
    }},
  },

  Edexcel: {
    'Mathematics': { papers: {
      1: ['Number','Algebra','Ratio, proportion and rates of change','Geometry and measures','Probability','Statistics'],
      2: ['Number','Algebra','Ratio, proportion and rates of change','Geometry and measures','Probability','Statistics'],
      3: ['Number','Algebra','Ratio, proportion and rates of change','Geometry and measures','Probability','Statistics'],
    }},
    'English Language': { papers: {
      1: ['Fiction and Imaginative Writing — reading: analysing 20th/21st century fiction; writing: imaginative/descriptive'],
      2: ['Non-Fiction and Transactional Writing — reading: two unseen non-fiction texts; writing: transactional/persuasive'],
    }},
    'English Literature': { papers: {
      1: ['Shakespeare and Post-1914 Literature — Shakespeare play; post-1914 British novel or play'],
      2: ['19th-Century Novel and Poetry since 1789 — 19th-century novel; anthology poetry; unseen poetry'],
    }},
    'Biology': { papers: {
      1: ['Topic 1: Key concepts in biology','Topic 2: Cells and control','Topic 3: Genetics','Topic 4: Natural selection and genetic modification','Topic 5: Health, disease and the development of medicines'],
      2: ['Topic 1: Key concepts revisited','Topic 6: Plant structures and their functions','Topic 7: Animal coordination, control and homeostasis','Topic 8: Exchange and transport in animals','Topic 9: Ecosystems and material cycles'],
    }},
    'Chemistry': { papers: {
      1: ['Topic 1: Atomic structure and the periodic table','Topic 2: Bonding, structure and the properties of matter','Topic 3: Quantitative chemistry','Topic 4: Chemical changes','Topic 5: Energy changes'],
      2: ['Topic 1: Key concepts revisited','Topic 6: Rates of reaction and equilibrium','Topic 7: Organic chemistry','Topic 8: Chemical analysis','Topic 9: Chemistry of the atmosphere','Topic 10: Using resources'],
    }},
    'Physics': { papers: {
      1: ['Topic 1: Key concepts of physics','Topic 2: Motion and forces','Topic 3: Conservation of energy','Topic 4: Waves','Topic 5: Light and the electromagnetic spectrum','Topic 6: Radioactivity','Topic 7: Astronomy'],
      2: ['Topic 1: Key concepts revisited','Topic 8: Energy — forces doing work','Topic 9: Forces and their effects','Topic 10: Electricity and circuits','Topic 11: Static electricity','Topic 12: Magnetism and the motor effect','Topic 13: Electromagnetic induction','Topic 14: Particle model','Topic 15: Forces and matter'],
    }},
    'Combined Science': { papers: {
      1: ['Biology Paper 1: Topics 1–5 (Key concepts, Cells, Genetics, Natural selection, Health and disease)'],
      2: ['Biology Paper 2: Topics 1 and 6–9 (Plant structures, Animal coordination, Exchange and transport, Ecosystems)'],
      3: ['Chemistry Paper 1: Topics 1–5 (Atomic structure, Bonding, Quantitative chemistry, Chemical changes, Energy)'],
      4: ['Chemistry Paper 2: Topics 1 and 6–10 (Rates, Organic chemistry, Analysis, Atmosphere, Resources)'],
      5: ['Physics Paper 1: Topics 1–7 (Key concepts, Motion, Conservation of energy, Waves, Light, Radioactivity, Astronomy)'],
      6: ['Physics Paper 2: Topics 1 and 8–15 (Energy, Forces, Electricity, Magnetism, Particle model)'],
    }},
    'Computer Science': { papers: {
      1: ['1.1 Algorithms','1.2 Programming','1.3 Data','1.4 Computers','1.5 Communication and the internet','1.6 The bigger picture (legal, ethical, environmental)'],
      2: ['2.1 Algorithms and programs (applied computing)','2.2 Data and the CPU','2.3 Networks in practice'],
    }},
    'History': { papers: {
      1: ['Thematic study and historic environment (e.g. Medicine in Britain c.1250–present; Migrants in Britain c.800–present)'],
      2: ['Period study and British depth study (e.g. Early Elizabethan England 1558–88; The American West c.1835–95)'],
      3: ['Modern depth study (e.g. Weimar and Nazi Germany 1918–39; Mao\'s China 1945–76; The USA 1954–75)'],
    }},
    'Geography A': { papers: {
      1: ['The challenge of natural hazards','The living world','Physical landscapes in the UK','Geographical skills'],
      2: ['Urban issues and challenges','The changing economic world','The challenge of resource management'],
      3: ['Issue evaluation (pre-release)','Fieldwork','Geographical skills'],
    }},
    'Geography B': { papers: {
      1: ['Global Hazardous Environments','Changing Landscapes','Distinctive Ecosystems'],
      2: ['People of the Planet','Changing Cities','A Globalised World'],
      3: ['People and the Biosphere','Forests Under Threat / Consuming Energy Resources','Decision-making'],
    }},
    'Business': { papers: {
      1: ['Theme 1: Investigating small business — enterprise, market research, business plans, marketing mix, external influences'],
      2: ['Theme 2: Building a business — growing the business, marketing, finance, HR, stakeholders'],
    }},
    'Economics': { papers: {
      1: ['Theme 1: Introduction to markets and market failure'],
      2: ['Theme 2: The UK economy — performance and policies'],
    }},
    'Psychology': { papers: {
      1: ['Social influence: conformity, obedience (Asch, Milgram)','Memory: multi-store model, working memory, EWT','Attachment: caregiver interaction, Strange Situation, cultural variations','Psychopathology: depression, phobias, OCD'],
      2: ['Approaches: behaviourist, SLT, cognitive, biological, psychodynamic','Biopsychology: nervous system, hemispheres','Research methods'],
      3: ['Issues and debates in psychology','Options: Relationships / Gender / Cognition and Development; Schizophrenia / Eating behaviour / Stress; Aggression / Forensic / Addiction'],
    }},
    'Religious Studies A': { papers: {
      1: ['Beliefs and teachings: Christian beliefs; Practices: Christian practices'],
      2: ['Beliefs and teachings: Muslim beliefs; Practices: Muslim practices (or other religion)'],
      3: ['Thematic studies: Religion and relationships; Religion and life; Existence of God; Religion and conflict; Religion and crime; Religion and human rights'],
    }},
    'Citizenship Studies': { papers: {
      1: ['Life in Modern Britain: identity, democratic values, rights, community','UK Government: Parliament, monarchy, elections, political parties'],
      2: ['Active Citizenship: taking action, playing a part in democracy; UK\'s role in Europe and the world'],
    }},
    'Physical Education': { papers: {
      1: ['Anatomy and physiology','Movement analysis','Physical training','Use of data'],
      2: ['Sports psychology','Socio-cultural influences and well-being in physical activity'],
    }},
    'Drama': { papers: {
      1: ['Component 1: Devising theatre (practical and portfolio)'],
      2: ['Component 2: Presenting and performing texts'],
      3: ['Component 3: Theatre makers in practice — set text analysis, live theatre evaluation'],
    }},
    'Music': { papers: {
      1: ['Instrumental music 1700–1820','Vocal music','Music for stage and screen','Fusions (World music and jazz)'],
    }},
    'Design & Technology': { papers: {
      1: ['Core content: materials and their properties; specialist area technical knowledge; designing and making principles'],
    }},
    'Food Preparation and Nutrition': { papers: {
      1: ['Food, nutrition and health','Food science','Food safety','Food choice','Food provenance'],
    }},
    'Sociology': { papers: {
      1: ['Sociology: theory, methodology and research methods','The sociology of families','The sociology of education'],
      2: ['The sociology of crime and deviance','Social stratification'],
    }},
    'Media Studies': { papers: {
      1: ['Section 1: Exploring the media — media language, representation, audience, industries','Set products: newspapers, music video, advertising, online/social media'],
      2: ['Section 2: Understanding media forms and products — TV, film, radio, video games'],
    }},
    'Statistics': { papers: {
      1: ['Statistical sampling, data collection, presentation'],
      2: ['Probability, statistical inference, correlation and regression'],
    }},
  },

  OCR: {
    'Biology A': { papers: {
      1: ['2.1.1 Cell structure','2.1.2 Biological molecules','2.1.3 Nucleotides and nucleic acids','2.1.4 Enzymes','2.1.5 Biological membranes','2.1.6 Cell division, cell diversity and cellular organisation'],
      2: ['2.2.1 Gas exchange and transport in animals and plants','2.2.2 Circulatory systems in animals','2.3.1 Plant and animal responses','2.3.2 Nerves, hormones and homeostasis','2.4.1 Communication and homeostasis (F/H breadth)'],
    }},
    'Biology B': { papers: {
      1: ['B1.1 The building blocks of life (cells, molecules, enzymes)','B1.2 Scaling up (transport in animals and plants)','B2 Genes, inheritance and selection'],
      2: ['B3 Common systems (homeostasis, nervous and hormonal control)','B4 Community level systems (ecosystems, nutrient cycles)','B5 Genes and the future (genetic engineering, evolution)'],
    }},
    'Chemistry A': { papers: {
      1: ['2.1.1 Atomic structure and isotopes','2.1.2 Compounds, formulae and equations','2.1.3 Amount of substance','2.1.4 Acids, bases and salts','2.1.5 Electrons, bonding and structure','2.2 Periodic table and energy'],
      2: ['2.3 The periodic table: transition elements','2.4 Organic chemistry and analysis','2.5 Physical chemistry and transition elements'],
    }},
    'Chemistry B': { papers: {
      1: ['Chapter 1: Particles (atomic structure, bonding, states of matter)','Chapter 2: Reactions (chemical equations, energetics, rates)','Chapter 3: Chemicals of the natural environment (air, water, earth, ocean)'],
      2: ['Chapter 4: Material choices (polymers, metals, quantitative chemistry)','Chapter 5: Chemical analysis','Chapter 6: Making useful chemicals (acids, bases, production)'],
    }},
    'Combined Science A': { papers: {
      1: ['Biology Paper 1 (F/H): Cell biology, Organisation, Infection and response, Bioenergetics'],
      2: ['Biology Paper 2 (F/H): Homeostasis, Inheritance, Ecology'],
      3: ['Chemistry Paper 1 (F/H): Atomic structure, Bonding, Quantitative chemistry, Chemical changes, Energy'],
      4: ['Chemistry Paper 2 (F/H): Rates, Organic chemistry, Analysis, Atmosphere, Resources'],
      5: ['Physics Paper 1 (F/H): Energy, Electricity, Particle model, Atomic structure'],
      6: ['Physics Paper 2 (F/H): Forces, Waves, Magnetism, Space physics'],
    }},
    'Combined Science B': { papers: {
      1: ['Biology (F/H): Cells and life processes, Ecosystems, Inheritance and variation'],
      2: ['Chemistry (F/H): Particles, Reactions, Chemical products, Earth and atmosphere'],
      3: ['Physics (F/H): Energy, Electricity, Forces, Waves, Radioactivity'],
      4: ['Combined Science written paper (F/H): synoptic questions across all three sciences'],
    }},
    'Computer Science': { papers: {
      1: ['1.1 Systems architecture','1.2 Memory and storage','1.3 Computer networks, connections and protocols','1.4 Network security','1.5 Systems software','1.6 Ethical, legal, cultural and environmental concerns','1.7 Algorithms','1.8 Programming techniques'],
      2: ['2.1 Algorithms in pseudocode','2.2 Programming fundamentals','2.3 Producing robust programs','2.4 Boolean logic','2.5 Computing-related legislation and impacts','2.6 Data representation'],
    }},
    'Mathematics': { papers: {
      1: ['Foundation Paper 1 (calculator) or Higher Paper 4 (calculator): Number, algebra, ratio, geometry, statistics'],
      2: ['Foundation Paper 2 (non-calculator) or Higher Paper 5 (non-calculator): Number, algebra, ratio, geometry, statistics'],
      3: ['Foundation Paper 3 (calculator) or Higher Paper 6 (calculator): Number, algebra, ratio, geometry, statistics'],
    }},
    'Geography A': { papers: {
      1: ['J383/01 Living in the UK Today: Coastal change and conflict; River processes and pressures; The UK\'s evolving physical landscape; The UK\'s evolving human landscape'],
      2: ['J383/02 The World Around Us: Global hazards; Climate under threat; Life on Earth; Changing economies'],
      3: ['J383/03 Geographical Skills and Fieldwork: Skills, OS maps, data handling, fieldwork investigation'],
    }},
    'Geography B': { papers: {
      1: ['J384/01 Our Natural World: Hazardous Earth; Development dynamics; Challenges of an urbanising world'],
      2: ['J384/02 People and Society: UK in the 21st century; Dynamic development; Geographical exploration'],
      3: ['J384/03 Geographical Exploration: Synoptic written paper linking themes'],
    }},
    'History A': { papers: {
      1: ['Period study with Non-British Depth Study (set by centre — e.g. The People\'s Health c.1250–present; Migration to Britain c.1000–present)'],
      2: ['Thematic study (single theme across approx. 100 years — e.g. Power and the People; Migrants to Britain)'],
      3: ['British Depth Study with Historic Environment (set by centre — e.g. The Elizabethans; The Norman Conquest)'],
    }},
    'History B (Schools History Project)': { papers: {
      1: ['British History: Thematic Study and Depth Study (J411/11-19 — e.g. The People\'s Health; Crime and Punishment)'],
      2: ['History Around Us: Historic Environment (J411/21 — site investigation)'],
      3: ['World History: Period Study and Depth Study (J411/31-39 — e.g. The USA 1945–75; Conflict and Tension 1945–72)'],
    }},
    'English Language': { papers: {
      1: ['J351/01 Communicating Information and Ideas: reading two non-fiction texts (19th and 21st century); writing to communicate information and ideas'],
      2: ['J351/02 Exploring Effects and Impact: reading literary fiction (20th or 21st century); creative writing (descriptive or narrative)'],
    }},
    'English Literature': { papers: {
      1: ['J352/01 Exploring Modern and Literary Heritage Texts: modern prose or drama (post-1914); 19th-century prose fiction'],
      2: ['J352/02 Exploring Poetry and Shakespeare: Shakespeare play; contemporary and literary heritage anthology poetry; unseen poetry'],
    }},
    'Business': { papers: {
      1: ['J204/01 Business 1: Business activity, marketing and people — enterprise, marketing, HR'],
      2: ['J204/02 Business 2: Operations, finance and influences on business — production, financial management, external influences'],
    }},
    'Economics': { papers: {
      1: ['J205/01 Introduction to Economics: microeconomic foundations, markets, price mechanism'],
      2: ['J205/02 National and International Economics: macroeconomic indicators, policy, international trade'],
    }},
    'Physics A': { papers: {
      1: ['J249/01 Paper 1 (Foundation) or J249/03 Paper 3 (Higher): Energy, Electricity, Particle model, Atomic structure'],
      2: ['J249/02 Paper 2 (Foundation) or J249/04 Paper 4 (Higher): Forces, Waves, Magnetism and electromagnetism, Space physics'],
    }},
    'Physics B': { papers: {
      1: ['J259/01 Breadth in Physics (Foundation) or J259/03 (Higher): Energy, Forces, Waves, Electricity, Magnetism'],
      2: ['J259/02 Depth in Physics (Foundation) or J259/04 (Higher): Matter, Radiation, Space, Practical skills'],
    }},
    'Psychology': { papers: {
      1: ['J203/01 Studies and Applications in Psychology 1: Cognitive psychology (memory); Social psychology (conformity, obedience); Sleep and dreaming'],
      2: ['J203/02 Studies and Applications in Psychology 2: Criminal psychology; Sport psychology; Health psychology; Research methods'],
    }},
    'Religious Studies': { papers: {
      1: ['J625/01-05 Beliefs and Teachings and Practices: study of one religion (Christianity / Islam / Judaism / Hinduism / Buddhism)'],
      2: ['J625/06-10 Religion, Philosophy and Ethics in the Modern World: beliefs, arguments, ethics, secular responses'],
    }},
    'Media Studies': { papers: {
      1: ['J200/01 Television and Promoting Media: TV set products; advertising and marketing products'],
      2: ['J200/02 Music and News: music products; news and online media'],
    }},
    'Drama': { papers: {
      1: ['J316/04 Drama: Performance and Response — written paper on set play and live theatre'],
    }},
    'Music': { papers: {
      1: ['J536/05 Listening and Appraising: Four areas of study — Western classical tradition; Popular music; Music for theatre; World music'],
    }},
    'Physical Education': { papers: {
      1: ['J587/01 Physical factors affecting performance: anatomy and physiology, exercise physiology, biomechanics'],
      2: ['J587/02 Socio-cultural issues and sports psychology: sport and society, psychology, technology in sport'],
    }},
    'Food Preparation and Nutrition': { papers: {
      1: ['J309/01 Food Preparation and Nutrition: food commodities, nutrition, diet and health, food science, food safety, food provenance'],
    }},
    'Design and Technology': { papers: {
      1: ['J310/01 Principles of Design and Technology: designing and making, materials and their working properties, new technologies'],
    }},
    'Sociology': { papers: {
      1: ['J270/01 Socialisation, Identity and the Media: socialisation and identity; the family; the media'],
      2: ['J270/02 Researching and Understanding Social Inequalities: social inequality, education, crime and deviance'],
      3: ['J270/03 (if studied): further content'],
    }},
    'Citizenship Studies': { papers: {
      1: ['J270/01 Citizenship in Perspective: law and justice; democracy and government; rights and responsibilities'],
      2: ['J270/02 Citizenship in Action: active citizenship project; making a difference'],
      3: ['J270/03 Our Rights, Our Society, Our World: human rights; UK in the wider world'],
    }},
  },

  Eduqas: {
    'Mathematics': { papers: {
      1: ['Component 1 Non-Calculator (F/H): Number; Algebra; Geometry; Ratio; Statistics; Probability'],
      2: ['Component 2 Calculator (F/H): Number; Algebra; Geometry; Ratio; Statistics; Probability'],
    }},
    'English Language': { papers: {
      1: ['Component 1: 21st Century Literature Reading and Creative Prose Writing — reading 21st-century literary fiction; descriptive or narrative creative writing'],
      2: ['Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing — two non-fiction texts; transactional writing'],
    }},
    'English Literature': { papers: {
      1: ['Component 1: Shakespeare and Poetry — Shakespeare play (school choice); anthology poetry (Eduqas anthology)'],
      2: ['Component 2: Drama, Prose and Unseen Poetry — post-1914 drama; 19th-century prose; unseen prose and poetry'],
    }},
    'Biology': { papers: {
      1: ['Component 1: Cell biology, Organisation, Infection and response, Bioenergetics'],
      2: ['Component 2: Homeostasis, Inheritance, Variation and evolution, Ecology'],
    }},
    'Chemistry': { papers: {
      1: ['Component 1: Atomic structure, Bonding, Quantitative chemistry, Chemical changes, Energy changes'],
      2: ['Component 2: Rates of reaction, Organic chemistry, Chemical analysis, Atmosphere, Resources'],
    }},
    'Physics': { papers: {
      1: ['Component 1: Energy; Electricity; Particle model of matter; Atomic structure and radioactivity'],
      2: ['Component 2: Forces; Waves; Magnetism and electromagnetism'],
    }},
    'Computer Science': { papers: {
      1: ['Component 1 (C500U10-1 Written): Computer hardware and software; Networks and communication; Cyber security; Data representation; Boolean logic; Programming concepts; Algorithms'],
      2: ['Component 2 (C500U20-1 On-screen): Programming project — practical application of algorithms and programming'],
    }},
    'Geography A': { papers: {
      1: ['Component 1: Changing Places — Changing World: Changing cities; Changing rural areas; Changing UK; Water'],
      2: ['Component 2: Sustaining the Planet: Ecosystems; Biodiversity; Climate change; Natural hazards'],
      3: ['Component 3: Distinctive Landscapes: Coasts; Rivers; Fieldwork'],
    }},
    'Geography B': { papers: {
      1: ['Component 1: Our Changing World: Economic development; Urbanisation; Challenges of an urbanising world'],
      2: ['Component 2: Our Dynamic Planet: Hazardous environments; Cold environments; Restless Earth'],
      3: ['Component 3: Environmental Challenges: Managing our environment; fieldwork investigation'],
    }},
    'History': { papers: {
      1: ['Component 1: Studies in Depth (school choice — e.g. Development of the USA 1929-2000; Weimar Germany 1918-39)'],
      2: ['Component 2: Studies in Breadth (school choice — e.g. British Empire c.1500-1968; Migration and identity c.600-present)'],
    }},
    'Business': { papers: {
      1: ['Component 1 (C510U10-1): Business activity, enterprise, marketing, people'],
      2: ['Component 2 (C510U20-1): Operations, finance, external influences'],
    }},
    'Religious Studies': { papers: {
      1: ['Component 1: Religious, Philosophical and Ethical Studies — philosophy, ethics, religious beliefs on moral issues'],
      2: ['Component 2: Study of Christianity — beliefs, practices, sources of authority'],
      3: ['Component 3: Study of Second Religion (school choice — Islam / Judaism / Hinduism / Buddhism / Sikhism)'],
    }},
    'Sociology': { papers: {
      1: ['Component 1 (C200U10-1): Understanding Social Structures — socialisation, identity, family, education'],
      2: ['Component 2 (C200U20-1): Understanding Social Processes — crime, inequality, research methods'],
    }},
    'Media Studies': { papers: {
      1: ['Component 1 (C680U10-1): Exploring the Media — media language, representation, industry, audiences; set products'],
      2: ['Component 2 (C680U20-1): Understanding Media Forms and Products — TV, film, music, social media'],
    }},
    'Physical Education': { papers: {
      1: ['Component 1 (C550U10-1): Physical factors affecting performance — anatomy, physiology, biomechanics, fitness'],
    }},
    'Food Preparation and Nutrition': { papers: {
      1: ['Component 1 (C560UA0-1): Food commodities; Nutrition; Diet and health; Food science; Food safety; Provenance'],
    }},
    'Film Studies': { papers: {
      1: ['Component 1 (C670U10-1): Varieties of Film and Filmmaking — Hollywood cinema; British film; documentary; short film'],
      2: ['Component 2 (C670U20-1): Global Filmmaking Perspectives — US independent; European cinema; world cinema'],
    }},
    'Design and Technology': { papers: {
      1: ['Component 1 (C600U10-1): Materials and their properties; technical principles; designing and making principles'],
    }},
    'Music': { papers: {
      1: ['Component 3 (C660U30-1): Appraising — four areas of study: Western classical tradition; Popular music; World music; Film music'],
    }},
    'Drama': { papers: {
      1: ['Component 3 (C690U30-1): Written examination — set play analysis; live theatre evaluation'],
    }},
  },

  CCEA: {
    'Mathematics': { papers: {
      1: ['Unit T1 (Foundation) Non-Calculator / Unit T3 (Higher) Non-Calculator: Number, algebra, geometry, statistics, probability'],
      2: ['Unit T2 (Foundation) Calculator / Unit T4 (Higher) Calculator: Number, algebra, geometry, statistics, probability'],
      3: ['Unit T5 (Higher only) Calculator: Number, algebra, geometry, statistics — extended higher content'],
    }},
    'Biology': { papers: {
      1: ['Unit 1: Cells, Living Processes and Biodiversity — cell structure and division; biological molecules; food and diet; transport; gas exchange; microorganisms'],
      2: ['Unit 2: Body Systems, Ecology and the Environment — nervous system; hormones; homeostasis; reproduction; genetics; evolution; biodiversity; ecology'],
    }},
    'Chemistry': { papers: {
      1: ['Unit 1: Basic Concepts in Chemistry — atomic structure; ionic and covalent bonding; formulae; reactions; rates; electrolysis; acids and bases; periodic table'],
      2: ['Unit 2: Further Chemical Reactions — equilibrium; organic chemistry; crude oil; polymers; calculations; environmental chemistry'],
    }},
    'Physics': { papers: {
      1: ['Unit 1: Forces, Energy and Electricity — speed and acceleration; Newton\'s laws; momentum; energy; electricity; circuits'],
      2: ['Unit 2: Waves, Particles and the Universe — waves; electromagnetic spectrum; radioactivity; nuclear reactions; space'],
    }},
    'Double Award Science': { papers: {
      1: ['Unit 1: Biology — cells, organisation, nutrition, respiration, biological molecules'],
      2: ['Unit 2: Chemistry — atomic structure, bonding, reactions, rates, acids'],
      3: ['Unit 3: Physics — energy, electricity, forces, waves'],
      4: ['Unit 4: Combined — inheritance, ecosystems, organic chemistry, radioactivity'],
    }},
    'English Language': { papers: {
      1: ['Unit 1 (GEL11): Writing for Purpose and Audience; Reading to Access Non-Fiction Texts'],
    }},
    'English Literature': { papers: {
      1: ['Unit 1 (GET11): The Study of Prose — two prose texts (one pre-1900, one post-1900)'],
      2: ['Unit 2 (GET12): The Study of Poetry and Drama — poetry anthology; drama set text'],
    }},
    'History': { papers: {
      1: ['Unit 1 (GHY11): Changes in Germany 1919–45 and The USA 1918–68 — Weimar Republic, Nazi Germany, USA boom, civil rights'],
      2: ['Unit 2 (GHY12): Northern Ireland and its Neighbours — Partition, Stormont, civil rights, the Troubles, peace process'],
    }},
    'Geography': { papers: {
      1: ['Unit 1 (GGY11): Understanding Our Natural World — rivers, coasts, tectonic hazards, weather and climate, ecosystems'],
      2: ['Unit 2 (GGY12): Living in Our World — population, settlement, development, tourism, resource management'],
    }},
    'Business Studies': { papers: {
      1: ['Unit 1 (GBS11): The Business Environment — business activity, ownership, marketing, finance basics'],
      2: ['Unit 2 (GBS12): Business Growth and Development — growth strategies, HR, finance, global business'],
    }},
    'Computer Science': { papers: {
      1: ['Unit 1 (GCS11): Digital Technology — hardware, software, networks, data representation, programming concepts, cybersecurity'],
      2: ['Unit 2 (GCS12): Practical Problem Solving — programming project and algorithms in practice'],
    }},
    'Religious Studies': { papers: {
      1: ['Unit 1 (GRS11): The Christian Church — origins, beliefs, authority, unity and diversity'],
      2: ['Unit 2 (GRS12): Christianity in the Local and Global Community — social justice, mission, ecumenism'],
    }},
    'Technology and Design': { papers: {
      1: ['Unit 1 (GTD11): Designing and Making — design process, materials, manufacturing processes, product analysis'],
    }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// A-LEVEL TOPICS — keyed by board then subject name (must match ALEVEL_SUBJECTS)
// ─────────────────────────────────────────────────────────────────────────────
const A_LEVEL = {
  AQA: {
    'Mathematics': { papers: {
      1: ['Proof','Algebra and functions','Coordinate geometry in the (x, y) plane','Sequences and series','Trigonometry','Exponentials and logarithms','Differentiation','Integration','Numerical methods','Vectors'],
      2: ['Proof','Algebra and functions','Further algebra','Functions and modelling','Sequences and series','Trigonometry','Further trigonometry','Further calculus','Differential equations','Complex numbers (context)'],
      3: ['Statistical sampling','Data presentation and interpretation','Probability','Statistical distributions: Binomial and Normal','Statistical hypothesis testing','Quantities and units in mechanics','Kinematics in 1D and 2D','Forces and Newton\'s laws','Moments','Projectile motion'],
    }},
    'Further Mathematics': { papers: {
      1: ['Core Pure 1: Complex numbers','Core Pure 1: Argand diagrams','Core Pure 1: Series — sum of r, r², r³','Core Pure 1: Roots of polynomials','Core Pure 1: Volumes of revolution','Core Pure 1: Matrices','Core Pure 1: Linear transformations','Core Pure 1: Proof by induction'],
      2: ['Core Pure 2: Further calculus','Core Pure 2: Polar coordinates','Core Pure 2: Hyperbolic functions','Core Pure 2: Differential equations (second order)','Core Pure 2: Reducible differential equations'],
      3: ['Optional papers — Further Pure / Further Mechanics 1 / Further Statistics 1 / Decision Mathematics 1'],
    }},
    'Biology': { papers: {
      1: ['3.1 Biological molecules','3.2 Cells','3.3 Organisms exchange substances with their environment','3.4 Genetic information, variation and relationships between organisms'],
      2: ['3.5 Energy transfers in and between organisms','3.6 Organisms respond to changes in their internal and external environments','3.7 Genetics, populations, evolution and ecosystems','3.8 The control of gene expression'],
      3: ['Practical skills and data analysis','Synoptic questions across all topics from Papers 1 and 2'],
    }},
    'Chemistry': { papers: {
      1: ['Physical chemistry: 1.1 Atomic structure; 1.2 Amount of substance; 1.3 Bonding; 1.4 Energetics; 1.5 Kinetics; 1.6 Chemical equilibria; 1.7 Oxidation, reduction and redox equations','Inorganic chemistry: 2.1 Periodicity; 2.2 Group 2; 2.3 Group 7'],
      2: ['Physical chemistry: 1.8 Thermodynamics; 1.9 Rate equations; 1.10 Equilibrium constant Kp; 1.11 Electrode potentials; 1.12 Acids and bases','Inorganic chemistry: 2.4 Properties of Period 3; 2.5 Transition metals; 2.6 Reactions of ions in aqueous solution','Organic chemistry: 3.3 Optical isomers; 3.4 Aldehydes and ketones; 3.5 Carboxylic acids; 3.6 Aromatic chemistry; 3.7 Amines; 3.8 Polymers; 3.9 Amino acids, proteins, DNA; 3.10 Organic synthesis; 3.11 NMR spectroscopy; 3.12 Chromatography'],
      3: ['Practical skills assessment','Synoptic chemistry — linking concepts across the whole specification'],
    }},
    'Physics': { papers: {
      1: ['3.1 Measurements and their errors','3.2 Particles and radiation','3.3 Waves','3.4 Mechanics and materials','3.5 Electricity'],
      2: ['3.6 Further mechanics and thermal physics','3.7 Fields and their consequences (gravitational, electric, magnetic)','3.8 Nuclear physics','3.9 Capacitors','3.10 Electromagnetic induction'],
      3: ['3.11 Practical skills in physics','3.12 Options — Astrophysics / Medical physics / Engineering physics / Turning points in physics / Electronics'],
    }},
    'Computer Science': { papers: {
      1: ['4.1 The characteristics of contemporary processors, input, output and storage','4.2 Software and software development','4.3 Exchanging data','4.4 Data types, data structures and algorithms','4.5 Legal, moral, cultural and ethical issues'],
      2: ['4.6 Elements of computational thinking','4.7 Problem solving and programming','4.8 Structured programming','4.9 Object-oriented programming','4.10 Functional programming'],
    }},
    'Psychology': { papers: {
      1: ['Social influence: conformity (types and explanations), obedience (Milgram), resistance to authority','Memory: multi-store model, working memory, EWT (misleading information, anxiety, cognitive interview)','Attachment: Bowlby\'s theory, Strange Situation, types, deprivation and privation','Psychopathology: definitions of abnormality, phobias, depression, OCD — characteristics and treatments'],
      2: ['Approaches in psychology: origins, behaviourist, SLT, cognitive, biological, psychodynamic, humanist','Biopsychology: nervous system, endocrine system, fight-or-flight, brain structure, hemispheres, split brain, neuroimaging','Research methods: experiments, observations, correlations, questionnaires, case studies, sampling'],
      3: ['Issues and debates: gender and cultural bias, free will, reductionism, nature-nurture, idiographic-nomothetic','Options A: Relationships / Gender / Cognition and development','Options B: Schizophrenia / Eating behaviour / Stress','Options C: Aggression / Forensic psychology / Addiction'],
    }},
    'Sociology': { papers: {
      1: ['Education: role and purpose, differential achievement (class, gender, ethnicity), internal and external factors','Theory and Methods: sociological perspectives overview, research methods, quantitative and qualitative data'],
      2: ['Families and Households: diversity, demographic trends, gender and relationships, sociological perspectives on families','Beliefs in Society: religion as a social institution, secularisation, fundamentalism, ideology','Second optional theme: Global Development / Health / Media'],
      3: ['Crime and Deviance: explanations (functionalist, strain, labelling, Marxist, feminist, realist), globalisation, green crime, state crime','Theory and Methods: positivism vs interpretivism, sociological theory (functionalism, Marxism, feminism, interactionism, postmodernism)'],
    }},
    'Economics': { papers: {
      1: ['3.1 Economic methodology and the economic problem','3.2 Price determination in a competitive market','3.3 Production, costs and revenue','3.4 Competitive and concentrated markets','3.5 The labour market','3.6 The distribution of income and wealth','3.7 The market mechanism, market failure and government intervention in markets'],
      2: ['3.8 The measurement of macroeconomic performance','3.9 How the macroeconomy works: AD/AS model','3.10 Economic performance','3.11 Financial markets and monetary policy','3.12 Fiscal policy and supply-side policies','3.13 The international economy'],
      3: ['3.14 Synoptic application: micro and macro principles applied to economic data and contexts'],
    }},
    'Geography': { papers: {
      1: ['Water and Carbon Cycles — stores, fluxes, feedbacks, human impact','Hot Desert Environments — characteristics, opportunities, challenges, desertification','Coastal Systems and Landscapes — system, processes, landforms, management','Glacial Systems and Landscapes — glacial processes, landforms, periglaciation'],
      2: ['Global Systems and Global Governance — globalisation, international trade, human rights, Antarctica','Changing Places — place character, insider/outsider perspectives, place representation','Contemporary Urban Environments — urban structure, deficiencies, rebranding','Population and the Environment — environment and population relationship'],
      3: ['Geographical Debates — Climate change; Disease dilemmas; Exploring oceans; Future of food; Hazardous Earth; Technology in a changing world','NEA — independent investigation'],
    }},
    'History': { papers: {
      1: ['Breadth study — long-term historical change over a century (school choice: e.g. Britain 1851–1964; Russia 1855–1964; USA 1920–73)'],
      2: ['Depth study — detailed historical period (school choice: e.g. The Tudors 1485–1603; France in Revolution 1774–99; Germany 1919–45)'],
      3: ['Historical controversies — extended essay based on competing historical interpretations'],
    }},
    'Business': { papers: {
      1: ['3.1 Business objectives and strategy','3.2 Business growth','3.3 Decision-making techniques (financial, investment, mathematical)','3.4 Influences on business decisions (stakeholders, ethics, environment)','3.5 The market (segmentation, competitive market, international)'],
      2: ['3.6 Managing finance (accounting, ratios, cash flow)','3.7 Resource management (operations, procurement, quality)','3.8 Managing people (HR, motivation, culture)','3.9 Strategic direction (Ansoff matrix, Porter\'s generic strategies)'],
      3: ['3.10 Synoptic case study — integrated analysis of a real or simulated business context'],
    }},
    'Law': { papers: {
      1: ['The English Legal System: courts, personnel (barristers, solicitors, judiciary, magistrates, juries), legal funding','Sources of Law: statute law (legislative process), delegated legislation, common law, statutory interpretation','Criminal Law: actus reus, mens rea, strict liability; non-fatal offences (assault, battery, ABH, GBH); fatal offences (murder, manslaughter); general defences'],
      2: ['Law Making: parliamentary and judicial law making; influences on Parliament; law reform and the Law Commission','Law of Tort: negligence (Caparo, breach, causation, remoteness); occupiers\' liability; nuisance; vicarious liability; defences; remedies'],
      3: ['The Nature of Law: law and morality, law and justice; Human Rights Act 1998 and its application; Contract Law or Criminal Law option'],
    }},
    'Religious Studies': { papers: {
      1: ['Philosophy of Religion: ancient philosophical influences (Plato, Aristotle); soul, mind and body; arguments for God\'s existence (cosmological, teleological, ontological); religious experience; problem of evil; religious language'],
      2: ['Religion and Ethics: natural law; situation ethics; Kantian ethics; utilitarianism; euthanasia; business ethics; conscience; sexual ethics'],
      3: ['Study of Religion (school choice): Christianity / Islam / Judaism — sources of authority, beliefs, key thinkers, contemporary issues'],
    }},
    'Media Studies': { papers: {
      1: ['Media Language: semiotics, narrative, genre, representation','Set Products: newspapers (The Guardian / The Daily Mail); advertising and marketing; music video; online/social media','Media Industries: ownership, regulation, cultural industries'],
      2: ['Media in the Digital Age: convergence, circulation, audience','Long Form TV Drama (UK and US comparison)','Film Industry and Spectatorship','Magazines and Music Videos — set products'],
    }},
    'French': { papers: {
      1: ['Listening, Reading and Translation: Theme 1 — Les aspects de la société française contemporaine; Theme 2 — La culture politique et artistique dans les pays francophones; Theme 3 — La Francophonie: deux périodes'],
      2: ['Writing: translation into French; essay on literary text and film'],
    }},
    'German': { papers: {
      1: ['Listening, Reading and Translation: Theme 1 — Aspekte der deutschen Gesellschaft; Theme 2 — Politische und kulturelle Aspekte; Theme 3 — Literarische Texte und der Film'],
      2: ['Writing: translation into German; essay on literary text and film'],
    }},
    'Spanish': { papers: {
      1: ['Listening, Reading and Translation: Theme 1 — Aspectos de la sociedad hispanohablante; Theme 2 — Aspectos políticos y culturales; Theme 3 — Textos literarios y la película'],
      2: ['Writing: translation into Spanish; essay on literary text and film'],
    }},
    'English Language': { papers: {
      1: ['Language — Varieties in Language and Literature: methods and analysis; representation; context; genre'],
      2: ['Language — Diversity and Change: language diversity (gender, ethnicity, age, occupation); language change over time; language in use'],
    }},
    'English Literature A': { papers: {
      1: ['Love Through the Ages: poetry pre-1900 (set anthology); unseen poetry; prose 1800–present; drama pre-1900'],
      2: ['Texts in Shared Contexts (option: Modern Times or Conflict)'],
    }},
    'English Literature B': { papers: {
      1: ['Literary Genres: tragedy, comedy or crime (prose, drama, poetry)'],
      2: ['Texts and Genres: wider reading for the set genre'],
    }},
  },

  Edexcel: {
    'Mathematics': { papers: {
      1: ['Pure Mathematics 1: Algebra and functions; Coordinate geometry; Further algebra; Trigonometry; Exponentials and logarithms; Differentiation; Integration; Numerical methods; Vectors'],
      2: ['Pure Mathematics 2: Further pure topics; proof; sequences and series; further calculus; further trigonometry; differential equations'],
      3: ['Statistics and Mechanics: Statistical sampling; data presentation; probability; binomial and normal distributions; hypothesis testing; kinematics; forces; Newton\'s laws; moments; projectiles'],
    }},
    'Further Mathematics': { papers: {
      1: ['Core Pure Mathematics 1: Complex numbers; Argand diagrams; roots of polynomials; matrices; proof by induction; vectors; series'],
      2: ['Core Pure Mathematics 2: Further complex numbers; further series; methods in calculus; further differential equations; coordinate systems; further vectors'],
      3: ['Optional papers — Further Pure / Further Mechanics 1 / Further Statistics 1 / Decision Mathematics 1'],
    }},
    'Biology': { papers: {
      1: ['Topics 1–4: Biological Molecules and Cells; Mechanisms of Exchange and Transport; Cell Cycle, Differentiation and Organisation; DNA, Replication and Protein Synthesis'],
      2: ['Topics 5–8: Energy for Biological Processes; Microbiology and Pathogens; Modern Genetics; Origins of Genetic Variation'],
      3: ['Topics 1–8 (synoptic): Practical biology; data analysis; experimental design'],
    }},
    'Chemistry': { papers: {
      1: ['Advanced Inorganic and Physical Chemistry: Atomic structure and the Periodic Table; Bonding and Structure; Redox Chemistry; Inorganic Chemistry; Formulae and Equations; Equilibrium'],
      2: ['Advanced Organic and Physical Chemistry: Organic Chemistry; Spectroscopic Techniques; Thermodynamics; Rates of Reaction; Organic Synthesis'],
      3: ['General and Practical Principles in Chemistry: synoptic paper; data analysis; required practicals'],
    }},
    'Physics': { papers: {
      1: ['Topics 1–6: Mechanics; Electric Circuits; Further Mechanics; Electric and Magnetic Fields; Nuclear and Particle Physics; Thermodynamics'],
      2: ['Topics 7–12: Space; Nuclear Radiation; Gravitational Fields; Oscillations; Astrophysics and Cosmology; Practical skills'],
      3: ['General and Practical Principles: synoptic; option topics; practical assessment'],
    }},
    'Economics A': { papers: {
      1: ['Theme 1: Introduction to Markets and Market Failure — demand, supply, elasticities, market failure, government intervention'],
      2: ['Theme 2: The UK Economy — Performance and Policies — macroeconomic indicators, AD/AS, fiscal and monetary policy, international trade'],
      3: ['Themes 3 and 4: Business Behaviour and the Labour Market; A Global Perspective — synoptic application'],
    }},
    'Business': { papers: {
      1: ['Theme 1: Marketing, People and Global Businesses — marketing analysis, segmentation, managing people, global business'],
      2: ['Theme 2: Business Activities, Decisions and Strategy — financial decisions, resource management, strategic direction'],
      3: ['Theme 3: Investigating Business in a Competitive Environment — synoptic case study'],
    }},
    'History': { papers: {
      1: ['Breadth study in History (school choice — e.g. Britain Transformed c.1918-97; Russia and its Rulers 1855-1964)'],
      2: ['Depth study in History (school choice — e.g. Germany 1914-45; Mao\'s China 1945-76)'],
      3: ['Historical controversies — historiographical perspectives and extended essay'],
    }},
    'Geography': { papers: {
      1: ['Dynamic Landscapes: Tectonic processes and hazards; Landscape systems (Glacial or Coastal)'],
      2: ['Dynamic Places: Globalisation; Shaping Places (Regenerating or Diverse Places)'],
      3: ['Synoptic Investigation: pre-release resource booklet; players, attitudes and actions on contemporary geographical issue'],
    }},
    'Psychology': { papers: {
      1: ['Paper 1: Social Psychology (conformity, obedience); Cognitive Psychology (memory, EWT, cognitive development); Biological Psychology (brain, localisation, sleep, aggression); Learning Theories (classical and operant conditioning, SLT)'],
      2: ['Paper 2: Clinical Psychology — mental health, classification, schizophrenia, treatment; Research Methods in depth'],
      3: ['Paper 3: Applying Psychology — Issues and Debates; options: Criminal / Child / Sport / Health Psychology'],
    }},
    'Sociology': { papers: {
      1: ['Paper 1: Socialisation, culture and identity; Family; Youth Subcultures; Theory and Methods overview'],
      2: ['Paper 2: Researching and Understanding Social Inequalities: class, gender, ethnicity; research methods in practice'],
      3: ['Paper 3: Crime, Deviance, Social Control and Social Order; applying sociological theory and methods'],
    }},
    'Computer Science': { papers: {
      1: ['Paper 1: 1.1 Characteristics of contemporary processors; 1.2 Types of processor; 1.3 Input, output and storage; 1.4 Software; 1.5 Types of programming language; 1.6 Boolean algebra; 1.7 Communication; 1.8 Databases; 1.9 Big data; 1.10 Functional programming; 1.11 Ethical, legal, moral and cultural issues'],
      2: ['Paper 2: 2.1 Computational thinking; 2.2 Problem-solving and programming; 2.3 Algorithms; 2.4 Theory of computation; 2.5 Data representation'],
    }},
    'Religious Studies': { papers: {
      1: ['Area 1: Philosophy of Religion — existence of God, religious experience, evil and suffering, religious language and thought'],
      2: ['Area 2: Religion and Ethics — ethical theories, normative ethics, sexual ethics, the media and ethics'],
      3: ['Area 3: New Testament Studies / Developments in Christian Thought / Islam / Judaism — sources of wisdom, key figures, contemporary issues'],
    }},
    'English Language and Literature': { papers: {
      1: ['Paper 1: Voices in speech and writing — spoken language transcripts; non-literary prose; literary non-fiction'],
      2: ['Paper 2: Varieties in Language and Literature — satire; genre fiction; poetry'],
    }},
    'Media Studies': { papers: {
      1: ['Component 1: Media Products, Industries and Audiences — media language, representation, industries, audiences; set products'],
      2: ['Component 2: Media Forms and Products in Depth — long-form TV drama; film; music; online/social media'],
    }},
    'Law': { papers: {
      1: ['Paper 1: Theory of Law and the English Legal System: legal personnel, legal funding, criminal process, sentencing'],
      2: ['Paper 2: Law of Tort, Contract Law or Criminal Law option'],
      3: ['Paper 3: Further law option'],
    }},
  },

  OCR: {
    'Biology A': { papers: {
      1: ['Biological Processes (H420/01): Module 2 — Foundations in Biology (cells, molecules, enzymes, membranes); Module 3 — Exchange and Transport (gas exchange, transport systems); Module 5 — Communication, Homeostasis and Energy (communication, excretion, neuronal control, hormonal control)'],
      2: ['Biological Diversity (H420/02): Module 4 — Biodiversity, Evolution and Disease (classification, biodiversity, pathogens, immunity); Module 6 — Genetics, Evolution and Ecosystems (cellular control, genetics, evolution, ecosystems)'],
      3: ['Unified Biology (H420/03): Synoptic paper — practical skills, data analysis, evaluation; all modules assessed'],
    }},
    'Biology B (Advancing Biology)': { papers: {
      1: ['Fundamentals of Biology (H422/01): Module 2 — Cells and molecules; Module 3 — Exchange and transport; Module 5 — Genetics, control and ageing'],
      2: ['Scientific Literacy in Biology (H422/02): Module 4 — Biodiversity and natural resources; Module 6 — Immunity, infection and forensics'],
      3: ['Practical Skills in Biology (H422/03): Synoptic — data analysis and evaluation across all modules'],
    }},
    'Chemistry A': { papers: {
      1: ['Periodic Table, Elements and Physical Chemistry (H432/01): Module 2 — Foundations in Chemistry (atoms, bonding, amount of substance); Module 3 — Periodic Table and Energy (periodicity, Group 2, Group 17, energetics); Module 5 — Physical Chemistry and Transition Elements (reaction rates, equilibrium, acids, pH, transition metals)'],
      2: ['Synthesis and Analytical Techniques (H432/02): Module 4 — Core Organic Chemistry (alkanes, alkenes, alcohols, halogenoalkanes, organic analysis); Module 6 — Organic Chemistry and Analysis (arenes, carbonyls, carboxylic acids, N-containing compounds, polymers, NMR, chromatography)'],
      3: ['Unified Chemistry (H432/03): Synoptic paper — practical skills, data analysis; all modules assessed'],
    }},
    'Chemistry B (Salters)': { papers: {
      1: ['Fundamentals of Chemistry (H433/01): Chemical storylines and activities; physical and inorganic chemistry concepts'],
      2: ['Scientific Literacy in Chemistry (H433/02): Further storylines; organic and inorganic mechanisms; analysis'],
      3: ['Practical Skills in Chemistry (H433/03): Synoptic paper'],
    }},
    'Computer Science': { papers: {
      1: ['Computer Systems (H446/01): 1.1 The characteristics of contemporary processors; 1.2 Types of processor; 1.3 Input/output/storage; 1.4 Software; 1.5 Types of programming language; 1.6 Boolean algebra; 1.7 Communication; 1.8 Databases; 1.9 Big data; 1.10 Functional programming; 1.11 Moral, legal, ethical and cultural issues'],
      2: ['Algorithms and Programming (H446/02): 2.1 Elements of computational thinking; 2.2 Problem solving and programming; 2.3 Algorithms; 2.4 Theory of computation'],
    }},
    'Mathematics A': { papers: {
      1: ['Pure Mathematics (H240/01): Proof; Algebra and functions; Coordinate geometry; Sequences and series; Trigonometry; Exponentials and logarithms; Differentiation; Integration; Numerical methods; Vectors'],
      2: ['Pure Mathematics and Statistics (H240/02): Further pure; Statistical sampling; Data presentation; Probability; Statistical distributions; Hypothesis testing; Regression and correlation'],
      3: ['Pure Mathematics and Mechanics (H240/03): Further pure; Kinematics; Forces; Newton\'s laws; Moments; Friction; Projectiles'],
    }},
    'Mathematics B (MEI)': { papers: {
      1: ['Pure Mathematics and Mechanics (H640/01): Algebra; Functions; Coordinate geometry; Trigonometry; Differentiation; Integration; Vectors; Kinematics; Forces'],
      2: ['Pure Mathematics and Statistics (H640/02): Further calculus; Sequences; Numerical methods; Probability; Binomial distribution; Normal distribution; Hypothesis testing'],
      3: ['Pure Mathematics and Comprehension (H640/03): Further pure topics; MEI comprehension paper'],
    }},
    'Further Mathematics A': { papers: {
      1: ['Pure Core 1 (H245/Y540): Complex numbers; Matrices; Proof by induction; Vectors; Series'],
      2: ['Pure Core 2 (H245/Y541): Further complex numbers; Further calculus; Differential equations; Polar coordinates'],
      3: ['Further option papers: Statistics; Mechanics; Discrete Mathematics; Further Pure; Modelling with Algorithms'],
    }},
    'Physics A': { papers: {
      1: ['Modelling Physics (H556/01): Module 2 — Foundations of Physics; Module 3 — Forces and Motion; Module 5 — Newtonian World and Astrophysics (circular motion, SHM, gravitation, astrophysics)'],
      2: ['Exploring Physics (H556/02): Module 4 — Electrons, Waves and Photons; Module 6 — Particles and Medical Physics (capacitors, electric fields, magnetic fields, EM induction, radioactivity, nuclear)'],
      3: ['Unified Physics (H556/03): Practical skills; synoptic paper across all modules; option topic'],
    }},
    'Physics B (Advancing Physics)': { papers: {
      1: ['Fundamentals of Physics (H557/01): Module 2 — Physics in action; Module 3 — Understanding processes (optics, quantum, mechanics)'],
      2: ['Scientific Literacy in Physics (H557/02): Module 4 — Physics of space; Module 5 — Rise and fall of the clockwork universe; Module 6 — Field and particle pictures'],
      3: ['Practical Skills in Physics (H557/03): Synoptic paper and practical assessment'],
    }},
    'Economics': { papers: {
      1: ['Microeconomics (H460/01): 1.1 Economic foundations; 1.2 How competitive markets work; 1.3 Market failure and government intervention; 1.4 Labour markets; 1.5 Firms and market structures; 1.6 Inequality'],
      2: ['Macroeconomics (H460/02): 2.1 Measuring the economy; 2.2 Aggregate demand and aggregate supply; 2.3 Economic performance; 2.4 Macroeconomic policy; 2.5 International economy'],
      3: ['Themes in Economics (H460/03): Synoptic application of micro and macro economics to unseen data'],
    }},
    'Geography': { papers: {
      1: ['Physical Systems (H481/01): Landscape systems (Coastal or Glaciated landscapes); Earth\'s life support systems (water and carbon cycles)'],
      2: ['Human Interactions (H481/02): Changing spaces — making places; Global connections (trade, migration, global governance)'],
      3: ['Geographical Debates (H481/03): Choice of two from — Climate change; Disease dilemmas; Exploring oceans; Future of food; Hazardous Earth; Technology in a changing world'],
    }},
    'History A': { papers: {
      1: ['Thematic Study and Historical Interpretations (H505/Y301-Y321): Change over time; evaluating historical interpretations (school choice of topic)'],
      2: ['British Period Study and Enquiry (H505/Y101-Y113): Detailed British period; historical enquiry based on primary sources'],
      3: ['Non-British Period Study (H505/Y201-Y224): Detailed non-British period (school choice)'],
    }},
    'Law': { papers: {
      1: ['The Legal System and Criminal Law (H418/01): Legal personnel; court structure; criminal law (actus reus, mens rea, non-fatal offences, murder, manslaughter, defences)'],
      2: ['Law Making and the Law of Tort (H418/02): Parliamentary law making; statutory interpretation; judicial precedent; negligence; occupiers\' liability; nuisance; vicarious liability'],
      3: ['The Nature of Law and Human Rights or Contract (H418/03-04): Law and morality; HRA 1998; contract formation, terms, vitiating factors, discharge and remedies'],
    }},
    'Business': { papers: {
      1: ['Operating in a Local Business Environment (H431/01): Business activity; marketing and market research; finance; people management; external influences'],
      2: ['The UK Business Environment (H431/02): Business strategy; financial decisions; globalisation; ethical and environmental issues'],
      3: ['The Global Business Environment (H431/03): Synoptic paper — global markets, international business strategy, integrated analysis'],
    }},
    'Psychology': { papers: {
      1: ['Research Methods (H567/01): Types of research; experimental design; sampling; statistical testing; data handling; ethics'],
      2: ['Psychological Themes Through Core Studies (H567/02): 20 compulsory core studies including — Milgram, Zimbardo, Asch, Loftus and Palmer, Grant et al., Baron-Cohen, Freud, Bandura, Dement and Kleitman, Sperry, Rosenhan'],
      3: ['Applied Psychology (H567/03): Issues in mental health; Mandatory core study (Griffiths); Option — Criminal psychology / Sport psychology / Health psychology / Educational psychology'],
    }},
    'Religious Studies': { papers: {
      1: ['Philosophy of Religion (H573/01): Ancient philosophical influences; soul, mind and body; arguments for God\'s existence; religious experience; problem of evil; religious language'],
      2: ['Religion and Ethics (H573/02): Natural law; situation ethics; Kantian ethics; utilitarianism; free will and moral responsibility; conscience; virtue ethics'],
      3: ['Developments in Religious Thought (H573/03): Christianity — sources of authority, life and teachings of Jesus, Christian moral principles, liberation theology, gender and sexuality, pluralism, science'],
    }},
    'Sociology': { papers: {
      1: ['Socialisation, Culture and Identity (H580/01): Identity; socialisation and culture; research methods'],
      2: ['Researching and Understanding Social Inequalities (H580/02): Social differentiation and power; health; education'],
      3: ['Debates in Contemporary Society (H580/03): Crime; global development; media'],
    }},
    'Drama and Theatre': { papers: {
      1: ['Analysing Performance (H459/31): Written analysis of a performance studied in depth'],
      2: ['Deconstructing Texts for Performance (H459/41-48): Analysis and evaluation of two different dramatic texts'],
    }},
    'English Language': { papers: {
      1: ['Exploring Language (H470/01): Language in action (spoken and written genres); representation; context; methods'],
      2: ['Dimensions of Linguistic Variation (H470/02): Language diversity (gender, occupation, social group); language change; language acquisition'],
    }},
    'English Literature': { papers: {
      1: ['Drama and Poetry Pre-1900 (H472/01): Drama pre-1900 (set play); poetry pre-1900 (unseen and set); contextual study'],
      2: ['Comparative and Contextual Study (H472/02): Two texts — different genres, one pre-1900 and one post-1900; comparative essay'],
    }},
    'Film Studies': { papers: {
      1: ['Film History (H410/01): US mainstream Hollywood; British film; silent cinema or non-English language film'],
      2: ['Critical Approaches to Film (H410/02): Narrative; genre; representation; aesthetics; film movements; documentary'],
    }},
    'Media Studies': { papers: {
      1: ['Media Messages (H409/01): Media language; representation; media industries; audiences; set products (TV, radio, newspaper, music video)'],
      2: ['Evolving Media (H409/02): Digital media; convergence; online social media; video games; evolving media industries; set products'],
    }},
    'Physical Education': { papers: {
      1: ['Physiological Factors Affecting Performance (H555/01): Applied anatomy and physiology; exercise physiology; biomechanical movement'],
      2: ['Psychological Factors Affecting Performance (H555/02): Skill acquisition; sports psychology'],
      3: ['Socio-cultural Issues in Physical Activity and Sport (H555/03): Sport and society; technology in sport'],
    }},
    'Music': { papers: {
      1: ['Listening and Appraising (H543/05): Areas of study 1–4 (Vocal music; Instrumental music; Music for film; Popular music and jazz); unprepared listening; set works analysis'],
    }},
  },

  Eduqas: {
    'Mathematics': { papers: {
      1: ['Component 1 (A300U10-1): Pure Mathematics — proof, algebra, coordinate geometry, trigonometry, exponentials, differentiation, integration, vectors'],
      2: ['Component 2 (A300U20-1): Applied Mathematics — statistics (data, probability, distributions, hypothesis testing); mechanics (kinematics, Newton\'s laws, friction, projectiles, moments)'],
    }},
    'Biology': { papers: {
      1: ['Component 1 (A400U10-1): Energy, Homeostasis and the Environment — photosynthesis; respiration; microbiology; population size; excretion; temperature regulation'],
      2: ['Component 2 (A400U20-1): Continuity and Change — nucleic acids; protein synthesis; cell division; gene mutation; immunology; evolution'],
      3: ['Component 3 (A400U30-1): Organisms and Environments — ecology; natural systems; application of biotechnology'],
    }},
    'Chemistry': { papers: {
      1: ['Component 1 (A410U10-1): Physical and Inorganic Chemistry — atomic structure; bonding; energetics; kinetics; equilibria; redox; Group 2 and 17; transition metals'],
      2: ['Component 2 (A410U20-1): Organic Chemistry and Analysis — nomenclature; isomerism; functional groups; mechanisms; organic synthesis; spectroscopy'],
      3: ['Component 3 (A410U30-1): Physical Chemistry and Practical Skills — thermodynamics; rate equations; electrochemistry; synoptic practical questions'],
    }},
    'Physics': { papers: {
      1: ['Component 1 (A420U10-1): Newtonian Physics — kinematics; dynamics; Newton\'s laws; circular motion; vibrations; materials; kinetic theory'],
      2: ['Component 2 (A420U20-1): Electromagnetism and Light — electric fields; capacitors; magnetic fields; electromagnetic induction; photons; electrons; nuclei'],
      3: ['Component 3 (A420U30-1): Oscillations and Nuclei — gravitational fields; magnetic resonance; radioactivity; nuclear energy; option topic'],
    }},
    'Computer Science': { papers: {
      1: ['Component 1 (A500U10-1): Computer Architecture, Data, Communication and Applications — CPU; memory; storage; networks; protocols; security; data representation; logic gates; databases; big data; ethics'],
      2: ['Component 2 (A500U20-1): Algorithms and Programming — algorithms (searching, sorting); programming paradigms (OOP, functional); recursion; data structures; theory of computation'],
    }},
    'Economics': { papers: {
      1: ['Component 1 (A520U10-1): Microeconomics — markets; demand and supply; price mechanism; market failure; government intervention; labour markets; firm behaviour'],
      2: ['Component 2 (A520U20-1): Macroeconomics — macroeconomic indicators; AD/AS model; economic policy; monetary policy; fiscal policy; international trade; globalisation'],
      3: ['Component 3 (A520U30-1): Microeconomics and Macroeconomics — synoptic application of both micro and macro concepts to data and contexts'],
    }},
    'Business': { papers: {
      1: ['Component 1 (A510U10-1): Business Opportunities and Functions — enterprise; marketing; operations; human resources; finance'],
      2: ['Component 2 (A510U20-1): Business Analysis and Strategy — strategic analysis; strategic choice; corporate objectives; competitive advantage'],
      3: ['Component 3 (A510U30-1): Business in a Changing World — globalisation; technology; sustainability; synoptic case study analysis'],
    }},
    'Geography': { papers: {
      1: ['Component 1 (A110U10-1): Changing Landscapes — coasts (processes, landforms, management); glaciated upland landscapes; fieldwork skills'],
      2: ['Component 2 (A110U20-1): Changing Places — urban and rural change; place character and identity; fieldwork investigation'],
      3: ['Component 3 (A110U30-1): Global Systems and Governance — globalisation; international trade and aid; human rights; Antarctica'],
    }},
    'Sociology': { papers: {
      1: ['Component 1 (A200U10-1): Socialisation and Identity — families; youth subcultures; media; socialisation; identity; research methods'],
      2: ['Component 2 (A200U20-1): Understanding Social Processes — education; religion; power and politics; research in practice'],
      3: ['Component 3 (A200U30-1): Social Change — crime; global development; theory and methods synoptic'],
    }},
    'Psychology': { papers: {
      1: ['Component 1 (A290U10-1): Memories and Thinking; Social Behaviour and Diversity — cognitive psychology; social psychology; research methods'],
      2: ['Component 2 (A290U20-1): Behaviour, Alternatives and Research — behaviour change; alternative approaches; research in practice'],
      3: ['Component 3 (A290U30-1): Applied and Issues — option topic (Criminal / Sport / Educational / Health psychology); issues in psychology'],
    }},
    'Religious Studies': { papers: {
      1: ['Component 1 (A120U10-1): Introduction to the Study of Religion — philosophy of religion; religious experience; nature of God; evil and suffering; life after death'],
      2: ['Component 2 (A120U20-1): The Study of Religion (school choice — Christianity / Islam / Judaism / Hinduism / Buddhism)'],
      3: ['Component 3 (A120U30-1): Applied Study of Religion — ethics and moral decision-making; religion and society; contemporary issues'],
    }},
    'English Language': { papers: {
      1: ['Component 1 (A700U10-1): Language in Context — language change; language diversity; analysis of spoken and written language'],
      2: ['Component 2 (A700U20-1): Language Investigation and Creative Writing — independent language investigation; original writing with commentary'],
      3: ['Component 3 (A700U30-1): Language, Power and Identity — power in language; language and gender; language and identity; language and digital communication'],
    }},
    'English Literature': { papers: {
      1: ['Component 1 (A720U10-1): Poetry — set poetry collection (pre-1900); unseen poetry; contextual analysis'],
      2: ['Component 2 (A720U20-1): Drama — Shakespeare set play; post-1900 drama set text'],
      3: ['Component 3 (A720U30-1): Prose — 19th-century prose; post-1900 prose; prose extracts comparative question'],
    }},
    'Media Studies': { papers: {
      1: ['Component 1 (A680U10-1): Media Products, Industries and Audiences — media language; representation; industry; audiences; set products'],
      2: ['Component 2 (A680U20-1): Media Forms and Products in Depth — long-form TV drama; music; film'],
    }},
    'Law': { papers: {
      1: ['Component 1 (A150U10-1): The Nature of Law and the English Legal System — rule of law; sources of law; legal personnel; courts; ADR'],
      2: ['Component 2 (A150U20-1): The Law of Obligations — contract law (formation, terms, discharge, remedies); tort (negligence, nuisance, vicarious liability)'],
      3: ['Component 3 (A150U30-1): Human Rights Law — ECHR; HRA 1998; balancing rights; case studies'],
    }},
    'Film Studies': { papers: {
      1: ['Component 1 (A670U10-1): US Film — classical Hollywood; post-classical Hollywood; American independent film; documentary'],
      2: ['Component 2 (A670U20-1): Global Film — silent cinema; European cinema; world cinema (Asia, Latin America, Africa); comparative analysis'],
    }},
    'Physical Education': { papers: {
      1: ['Component 1 (A550U10-1): Anatomy, Physiology, Exercise Physiology and Biomechanics — applied anatomy; exercise physiology; biomechanical analysis'],
      2: ['Component 2 (A550U20-1): Psychology of Sport and Socio-cultural Issues — skill acquisition; sports psychology; sociocultural factors in sport and physical activity'],
    }},
    'Drama and Theatre': { papers: {
      1: ['Component 3 (A690U30-1): Written examination — study of a complete set play; live theatre review; evaluation of own practical work'],
    }},
  },

  CCEA: {
    'Mathematics': { papers: {
      1: ['AS Unit 1 (A2MA11): Pure Mathematics with Mechanics — algebra; coordinate geometry; trigonometry; calculus; kinematics; Newton\'s laws'],
      2: ['AS Unit 2 (A2MA12): Pure Mathematics with Statistics — sequences and series; exponentials and logarithms; integration; data presentation; probability; distributions'],
      3: ['A2 Unit 1 (A2MA21): Pure Mathematics — further algebra; complex numbers; further calculus; differential equations; vectors'],
      4: ['A2 Unit 2 (A2MA22): Pure Mathematics with Mechanics — further pure; further mechanics; projectiles; energy and momentum'],
      5: ['A2 Unit 3 (A2MA23): Pure Mathematics with Statistics — further pure; hypothesis testing; correlation; regression'],
    }},
    'Biology': { papers: {
      1: ['AS Unit 1 (A2BI11): Molecules and Cells — cells; biological molecules; enzymes; cell division; gas exchange; transport'],
      2: ['AS Unit 2 (A2BI12): Organisms and Biodiversity — photosynthesis; respiration; ecosystems; biodiversity; classification; evolution'],
      3: ['A2 Unit 1 (A2BI21): Physiology, Coordination and Control — excretion; nervous system; muscle physiology; hormonal coordination; homeostasis'],
      4: ['A2 Unit 2 (A2BI22): Biochemistry, Genetics and Evolutionary Trends — DNA; protein synthesis; genetics; mutations; genetic engineering; populations'],
    }},
    'Chemistry': { papers: {
      1: ['AS Unit 1 (A2CH11): Basic Concepts in Physical and Inorganic Chemistry — atomic structure; bonding; periodicity; amount of substance; acid-base chemistry; Group II; halogens'],
      2: ['AS Unit 2 (A2CH12): Further Physical and Organic Chemistry — energetics; kinetics; equilibrium; introduction to organic chemistry (alkanes, alkenes, halogenoalkanes, alcohols, analysis)'],
      3: ['A2 Unit 1 (A2CH21): Further Physical and Inorganic Chemistry — electrode potentials; transition metals; period 3; advanced acid-base equilibria; thermodynamics'],
      4: ['A2 Unit 2 (A2CH22): Analytical, Transition Metals, Electrochemistry and Organic Nitrogen — analytical methods (MS, NMR, IR); transition metal chemistry; organic nitrogen compounds; polymers'],
    }},
    'Physics': { papers: {
      1: ['AS Unit 1 (A2PH11): Forces, Energy and Electricity — kinematics; dynamics; Newton\'s laws; energy; electricity; circuits'],
      2: ['AS Unit 2 (A2PH12): Waves, Photons and Medical Physics — waves; EM spectrum; quantum physics; medical imaging'],
      3: ['A2 Unit 1 (A2PH21): Momentum, Thermal Physics, Circular Motion, Oscillations and Atomic Physics — momentum; thermal physics; circular motion; SHM; atomic and nuclear physics'],
      4: ['A2 Unit 2 (A2PH22): Fields, Capacitors and Particle Physics — gravitational fields; electric fields; magnetic fields; capacitors; particle physics'],
    }},
    'English Literature': { papers: {
      1: ['AS Unit 1 (A2ET11): The Study of Poetry and Drama — poetry anthology (AS); drama set text (AS)'],
      2: ['AS Unit 2 (A2ET12): The Study of Prose — prose set text (AS)'],
      3: ['A2 Unit 1 (A2ET21): The Study of Poetry and Drama (A2 level) — extended response to poetry; drama set text'],
      4: ['A2 Unit 2 (A2ET22): The Study of Prose (A2 level) — comparative prose study'],
    }},
    'Geography': { papers: {
      1: ['AS Unit 1 (A2GY11): Physical Geography — rivers and their long profiles; glaciation; periglaciation; coastal environments'],
      2: ['AS Unit 2 (A2GY12): Human Geography — population and migration; world cities; rural environments'],
      3: ['A2 Unit 1 (A2GY21): Physical Processes, Landforms and Management — tectonic and geomorphological processes; landscape management'],
      4: ['A2 Unit 2 (A2GY22): Changing Environments — economic and social change; development; tourism; fieldwork investigation'],
    }},
    'History': { papers: {
      1: ['AS Unit 1 (A2HY11): Partition of Ireland 1900–25 — causes of partition; the Home Rule crisis; the Easter Rising; War of Independence; Treaty and Civil War'],
      2: ['AS Unit 2 (A2HY12): Germany 1918–45 — Weimar Republic; rise of the Nazis; the Third Reich; impact of WW2'],
      3: ['A2 Unit 1 (A2HY21): Dictatorship and Democracy in Germany 1933–63 — Nazi Germany; post-war Germany; political and social reconstruction'],
      4: ['A2 Unit 2 (A2HY22): Ireland and Her Neighbours — developing Irish state; Northern Ireland 1920–98; Anglo-Irish relations'],
    }},
    'Psychology': { papers: {
      1: ['AS Unit 1 (A2PS11): Research Methods in Psychology — research design; sampling; statistical testing; ethics; key studies'],
      2: ['AS Unit 2 (A2PS12): Biological Psychology, Learning and Development — biological approaches; learning theories; cognitive development'],
      3: ['A2 Unit 1 (A2PS21): Social Cognition, Prejudice and Stress — social influence; attribution; prejudice; stress and health'],
      4: ['A2 Unit 2 (A2PS22): Schizophrenia, Autism and Criminology — diagnosis; theories; treatments; forensic psychology'],
    }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// LEVEL 2 VOCATIONAL
// ─────────────────────────────────────────────────────────────────────────────
const L2_VOCATIONAL = {
  OCR: {
    'Cambridge National Business': { papers: {
      1: ['R067 Enterprise and Business Ideas: identifying a need; researching the market; producing a business plan','R069 Exam: Factors affecting business activity; business finance; marketing; stakeholders and influences; ethical and legal issues'],
    }},
    'Cambridge National IT': { papers: {
      1: ['R070 Exam: Systems architecture; software; networks; cyber security; data representation; ethical and legal issues','R072 Creating digital art; R073 Data visualisation; R074 Software development'],
    }},
    'Cambridge National Sport Science': { papers: {
      1: ['R041 Exam: Reducing the risk of sports injuries; the musculo-skeletal system; the cardiovascular and respiratory systems; nutrition; sports psychology','R042 Applying principles of training; R043 The sports performer in action'],
    }},
    'Cambridge National Health & Social Care': { papers: {
      1: ['R032 Exam: Principles of care; human development stages; factors affecting health; care settings and roles','R033 Supporting individuals through life events; R035 Health promotion'],
    }},
    'Cambridge National Creative Media': { papers: {
      1: ['Pre-production skills; digital media production; animation and gaming; audience and purpose; reviewing and evaluating media products'],
    }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// BTEC TOPICS
// ─────────────────────────────────────────────────────────────────────────────
const BTEC = {
  Pearson: {
    'Business': { papers: { 1: ['Unit 1: Exploring Business','Unit 2: Developing a Marketing Campaign','Unit 3: Personal and Business Finance','Unit 4: Managing an Event','Unit 5: International Business'] }},
    'Health and Social Care': { papers: { 1: ['Unit 1: Human Lifespan Development','Unit 2: Working in Health and Social Care','Unit 3: Anatomy and Physiology','Unit 4: Enquiries into Current Research in Health and Social Care'] }},
    'Sport': { papers: { 1: ['Unit 1: Anatomy and Physiology','Unit 2: Fitness Training and Programming','Unit 3: Professional Development in the Sports Industry','Unit 4: Sports Leadership','Unit 5: Application of Fitness Testing'] }},
    'Information Technology': { papers: { 1: ['Unit 1: Information Technology Systems','Unit 2: Creating Systems to Manage Information','Unit 3: Using Social Media in Business','Unit 4: Programming','Unit 5: Data Modelling'] }},
    'Applied Science': { papers: { 1: ['Unit 1: Principles and Applications of Science I','Unit 2: Practical Scientific Procedures and Techniques','Unit 3: Science Investigation Skills','Unit 4: Principles and Applications of Science II'] }},
    'Engineering': { papers: { 1: ['Unit 1: Engineering Principles','Unit 2: Innovating and Designing','Unit 3: Engineering Product Design and Manufacture','Unit 4: Managing a Manufacturing Process'] }},
    'Construction and the Built Environment': { papers: { 1: ['Unit 1: Construction Technology','Unit 2: Design Practice in the Built Environment','Unit 3: Surveying in Construction','Unit 4: Mathematics for Construction'] }},
    'Performing Arts': { papers: { 1: ['Unit 1: Investigating Practitioners\' Work','Unit 2: Developing Skills and Techniques','Unit 3: Group Performance Workshop','Unit 4: Performing Arts Production Project'] }},
    'Creative Media Production': { papers: { 1: ['Unit 1: Media Representations','Unit 2: Digital Media Skills','Unit 3: Communication in Creative Media Production','Unit 4: Media Production Project'] }},
    'Art and Design': { papers: { 1: ['Unit 1: Visual Recording and Communication','Unit 2: Idea Development','Unit 3: Two-Dimensional Visual Communication','Unit 4: Three-Dimensional Design'] }},
    'Music': { papers: { 1: ['Unit 1: The Music Industry','Unit 2: Music Theory and Composition','Unit 3: Group Music Making','Unit 4: Music Performance'] }},
    'Public Services': { papers: { 1: ['Unit 1: Government, Policies and the Public Services','Unit 2: Leadership and Teamwork in the Public Services','Unit 3: Citizenship, Diversity and the Public Services','Unit 4: Law and its Impact on the Individual in Public Services'] }},
    'Travel and Tourism': { papers: { 1: ['Unit 1: The World of Travel and Tourism','Unit 2: Global Destinations','Unit 3: Impacts of Tourism','Unit 4: Customer Experience in Travel and Tourism'] }},
    'Hospitality': { papers: { 1: ['Unit 1: The Hospitality Industry','Unit 2: Working in the Hospitality Industry','Unit 3: Food Safety and Health and Safety in Hospitality','Unit 4: Customer Service in Hospitality'] }},
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// MASTER TOPICS OBJECT
// ─────────────────────────────────────────────────────────────────────────────
const TOPICS = {}

// Deep-merge GCSE and A_LEVEL under each board
for (const board of Object.keys(GCSE)) {
  TOPICS[board] = { ...GCSE[board] }
}
for (const board of Object.keys(A_LEVEL)) {
  if (!TOPICS[board]) TOPICS[board] = {}
  for (const subject of Object.keys(A_LEVEL[board])) {
    TOPICS[board][subject + ' (A-Level)'] = A_LEVEL[board][subject]
  }
}
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
  return TOPICS[board]?.[key] || null
}

export function getAllTopicsFlat(board, subject, level) {
  let subj = getTopicsForSubject(board, subject, level)
  // Fallback to AQA if board-specific topics not found
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
    if (level === 'GCSE') return !s.includes('(A-Level)') && !s.includes('BTEC') && !s.includes('Cambridge National')
    return true
  })
}

export default TOPICS
export { GCSE, A_LEVEL, L2_VOCATIONAL, BTEC }
