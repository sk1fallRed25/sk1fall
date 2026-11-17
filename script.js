(() => {
  'use strict';

  const translations = {
    en: {
      meta: {
        title: 'Stefan Ionita | Backend Development & Cybersecurity',
        description:
          'Computer Engineering student from Galați, Romania, focused on backend development, cybersecurity, networking, and practical software engineering projects.'
      },
      a11y: {
        skip: 'Skip to main content',
        homeLink: 'Home',
        nav: 'Primary navigation',
        langGroup: 'Language selector',
        menuOpen: 'Open navigation menu',
        menuClose: 'Close navigation menu',
        cvBox: 'Curriculum Vitae PDF Downloads',
        heroPoster: 'Editorial statement poster',
        profileSnapshot: 'Profile summary',
        archDiagram: 'Store Management Application System Architecture'
      },
      person: {
        name: 'Stefan Ionita',
        location: 'Galați, Romania'
      },
      nav: {
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        achievements: 'Achievements',
        education: 'Education',
        contact: 'Contact'
      },
      hero: {
        statusBadge: 'Fourth-Year Computer Engineering Student',
        headline: 'Backend Development & Cybersecurity',
        roles: 'Backend Developer · Cybersecurity Analyst · Computer Engineering (2023–2027)',
        intro:
          'Fourth-year student at “Dunărea de Jos” University of Galați building practical software systems with a focus on backend architecture, relational databases, Linux environments, networking infrastructure, and applied cybersecurity.',
        ctaProjects: 'Explore Projects',
        ctaContact: 'Get in Touch',
        ctaGithub: 'GitHub',
        cvSectionTitle: 'Curriculum Vitae (PDF)',
        cvPendingBadge: 'Awaiting PDF Upload',
        cvEnBtn: 'Download CV — English PDF',
        cvRoBtn: 'Descarcă CV — Romanian PDF',
        cvNote: 'PDF placeholders configured for Stefan_Ionita_CV_EN.pdf and Stefan_Ionita_CV_RO.pdf.',
        cvClickedPrefix: 'Placeholder active: upload',
        cvClickedSuffix: 'to the repository root to enable direct download.'
      },
      poster: {
        eyebrow: 'CURRENTLY / 2026',
        primary: 'Building things.<br>Breaking things<br>securely.',
        secondary: 'Construiesc.<br>Testez.<br>Securizez.',
        caption: 'Interested in reliable backend systems and practical cybersecurity.'
      },
      snapshot: {
        tag: 'PROFILE SNAPSHOT',
        focusLabel: 'Core Tracks',
        focusValue: 'Backend Engineering & Security',
        eduLabel: 'University',
        eduValue: 'UGAL · ACIEE (Computers)',
        stackLabel: 'Primary Stack',
        awardsLabel: 'Competitions',
        awardsValue: '2× 1st Place (AI Cyber Defence & CRI)'
      },
      about: {
        title: 'About Me',
        subtitle: 'Practical systems background combined with structured software engineering and security.',
        p1: 'I am a fourth-year Computer Engineering student at “Dunărea de Jos” University of Galați (Faculty of Automation, Computers, Electrical Engineering and Electronics), pursuing opportunities in backend development, software engineering, and cybersecurity.',
        p2: 'My experience combines hands-on IT and networking equipment configuration with collaborative web development using React, Node.js, and PostgreSQL. Across academic and personal projects, I focus on clean separation between frontend and backend services, relational data integrity, and defensive security fundamentals—including input validation, password hashing, rate limiting, and SQL injection mitigation. Beyond coursework, I regularly participate in team hackathons and Capture The Flag competitions involving network traffic analysis, applied AI, and automation.',
        pillar1Title: 'Backend & Architecture',
        pillar1Desc: 'Structuring REST-oriented APIs, MVC layers, authentication flows, and relational database schemas.',
        pillar2Title: 'Applied Cybersecurity',
        pillar2Desc: 'Hands-on CTF problem solving, packet inspection with Wireshark/Nmap, and defensive coding practices.',
        pillar3Title: 'Infrastructure & AI',
        pillar3Desc: 'Linux environments, hardware/POS field configuration, and team-based ML/AI engineering challenges.'
      },
      experience: {
        title: 'Experience',
        subtitle: 'Distinguishing official technical field operations from collaborative web development.',
        period: 'March 2026 – August 2026',
        empType: 'Part-time',
        role: 'Official Position: Networking Technician',
        track1Label: 'ACTIVITY 01 · OFFICIAL ROLE',
        infraTitle: 'Networking Technician & Hardware Operations',
        infraSummary:
          'Performed hands-on configuration, preparation, and troubleshooting of workstation, networking, and retail fiscal hardware.',
        infra1: 'Configured desktop computers and office/commercial printers.',
        infra2: 'Configured and prepared Point-of-Sale (POS) hardware equipment.',
        infra3: 'Configured fiscal cash registers for commercial deployment.',
        infra4: 'Assisted with technical equipment installation and on-site troubleshooting.',
        track2Label: 'ACTIVITY 02 · COLLABORATIVE PROJECT',
        webBadge: '2-Person Team',
        webTitle: 'Company Public Website & Web Application',
        webDesc:
          'Collaborated alongside one colleague on building and structuring the company’s public web presence and application (globalecr.ro). Focused primarily on backend implementation, establishing clear separation between frontend and backend layers, and automating selected operational processes.',
        tagBackend: 'Backend-Focused Contribution',
        tagSeparation: 'Frontend / Backend Separation',
        tagAutomation: 'Process Automation'
      },
      projects: {
        title: 'Projects',
        subtitle: 'Featured architecture case study alongside private and exploratory engineering repositories.',
        featuredBadge: 'Featured Case Study',
        privateBadge: 'Private Repository',
        p1Type: 'Team Project · Near Completion',
        p1Title: 'Store Management Application',
        p1ProblemTitle: 'Engineering & Business Problem Addressed',
        p1ProblemDesc:
          'Small and medium retail operations require synchronized tracking across inventory stock, supplier deliveries, point-of-sale invoicing, and staff accountability. This full-stack platform centralizes daily commercial workflows into a structured, role-restricted system with full operation traceability.',
        p1ScopeTitle: 'Team Scope & Contribution Boundary',
        p1ScopeDesc:
          'Developed collaboratively as a team project using a decoupled React frontend and Node.js MVC backend connected to PostgreSQL/Supabase. Source code, database schemas, and internal business metrics remain private.',
        p1ModulesTitle: 'Core System Modules',
        m1Title: 'Inventory & Products',
        m1Desc: 'Product catalog management, stock quantities, and supplier records.',
        m2Title: 'Sales & Invoicing',
        m2Desc: 'Transaction checkout processing, invoice generation, and sales statistics.',
        m3Title: 'Auth, Roles & Permissions',
        m3Desc: 'User/employee accounts with authentication and role-based authorization.',
        m4Title: 'Reports & Audit History',
        m4Desc: 'Operational reporting and chronological logging of user actions.',
        previewTitle: 'Sanitized UI Preview — Pending Screenshot',
        previewDesc:
          'Private project interface withheld to protect business data. Space reserved for a sanitized screenshot using mock/dummy records.',
        p2Type: 'Personal Project',
        p2Desc:
          'A private software project focused on blocking unwanted advertisements. Built to explore traffic filtering concepts and cleaner browsing behavior.',
        p2Tag1: 'Ad Blocking',
        p2Tag2: 'Networking Concepts',
        p3Type: 'Early-Stage AI/ML Exploration',
        p3Desc:
          'An exploratory AI/ML concept investigating neural-network methods for inventory demand prediction. Initiated as an experimental study into forecasting workflows rather than a production model.',
        p3Tag1: 'Exploratory AI / ML',
        p3Tag2: 'Inventory Forecasting Concept',
        publicNote:
          'Public GitHub profile also includes introductory coursework repositories such as Spanzuratoarea (JavaScript hangman game) and ProiectPOO.'
      },
      arch: {
        label: 'SYSTEM ARCHITECTURE · SEPARATED FRONTEND & BACKEND (MVC)',
        hint: 'High-Level Logical Flow',
        tier1Tag: '01 · CLIENT LAYER',
        t1Item1: 'Role-aware operator views',
        t1Item2: 'Inventory & POS workflows',
        t1Item3: 'Reports & audit dashboards',
        tier2Tag: '02 · BACKEND SERVICE (MVC)',
        t2Item1: 'Authentication & RBAC permissions',
        t2Item2: 'Controllers & business validation',
        t2Item3: 'Operation history logging middleware',
        tier3Tag: '03 · DATA & PERSISTENCE',
        t3Item1: 'Relational stock & invoice records',
        t3Item2: 'Supplier & user account tables',
        t3Item3: 'Immutable activity audit trail'
      },
      skills: {
        title: 'Technical Skills',
        subtitle: 'Technologies and defensive practices mapped directly to projects, coursework, and competitions.',
        levelIntermediate: 'Intermediate',
        projectExp: 'Academic & Project Practice',
        cat1Title: 'Programming',
        evJs: 'Core language for web applications, API logic, and browser exercises.',
        evNode: 'Collaborative backend development for globalecr.ro and Store Management Application.',
        evReact: 'Component-based frontend interfaces separated from backend services.',
        cat2Title: 'Backend & Databases',
        evPg: 'Relational data modeling and persistence in the Store Management Application.',
        evMvc: 'Structured routing, controllers, and clean frontend/backend separation.',
        evRest: 'Designing structured HTTP endpoints for client-server communication.',
        cat3Title: 'Tools & Development',
        evGit: 'Collaborative version control across team software and hackathon repositories.',
        evDocker: 'Containerized local environments for backend and database workflows.',
        evLinux: 'Daily command-line usage, server environments, and development tooling.',
        cat4Title: 'Cybersecurity & Networking',
        evNetTools: 'Packet inspection, network reconnaissance, and CTF competition challenges.',
        evTrafficLabel: 'Network Traffic Analysis',
        evTraffic: 'Feature exploration and attack classification in AI Cyber Defence Challenge 2026.',
        evAppSecLabel: 'Defensive Web Practices',
        evAppSec:
          'Input validation, password hashing, rate limiting, and SQL injection mitigation applied in personal/academic projects.'
      },
      achievements: {
        title: 'Competitions & Achievements',
        subtitle:
          'First-place results and national distinctions in cybersecurity, AI, robotics, and energy systems.',
        firstPlaceTag: '1st Place · Team Competition',
        firstPlaceTag2: '1st Place · Robotics & AI',
        a1Desc:
          'Contributed to machine learning model training and result analysis in a team competition focused on AI-driven network traffic security across three detection tasks:',
        a1Task1: 'Binary Classification',
        a1Task2: '10-Class Attack Classification',
        a1Task3: 'Open-Set Unknown Attack Detection',
        a1Site: 'Official Competition',
        a1Guide: 'Challenge Guide',
        a2Title: 'CRI Competition',
        a2Desc:
          'Team project developing an AI-based system to control a robotic arm engineered to identify and sort colored cubes according to their positions on a 3×3 grid.',
        a2Task1: 'AI Control System',
        a2Task2: 'Robotic Arm',
        a2Task3: '3×3 Grid Cube Sorting',
        a2Site: 'Competition Reference',
        a3Badge: 'Mențiunea I',
        a3Desc: 'Awarded First Mention (Mențiunea I) for a project proposing a hydrogen-based energy system.',
        a4Title: 'Concursul de Creativitate Severin Bumbaru',
        a4Badge: 'Mențiunea II',
        a4Desc: 'Awarded Second Mention (Mențiunea II) for an AI-based plant recognition system.',
        a5Badge: '54th Place · Certified',
        a5Desc:
          'Team cybersecurity competition across multiple challenge categories, earning an official competition certificate.'
      },
      education: {
        title: 'Education & Credentials',
        subtitle: 'Academic timeline, verified competition certificate, and language proficiency.',
        uniPeriod: '2023 – 2027 (Expected Graduation: 2027)',
        uniStatus: 'Fourth-Year Student',
        uniName: 'Universitatea „Dunărea de Jos” din Galați',
        uniProgram: 'Computer Engineering Studies — Department of Computers (Calculatoare)',
        uniFaculty: 'Facultatea de Automatică, Calculatoare, Inginerie Electrică și Electronică',
        hsBadge: 'High School — Graduated',
        hsName: 'Liceul Teoretic „Emil Racoviță”, Galați'
      },
      credentials: {
        certHeading: 'Certifications',
        certDesc: 'Official competition certificate awarded for participating across cybersecurity categories.',
        langHeading: 'Languages',
        langRo: 'Romanian',
        langRoLevel: 'Native',
        langEn: 'English',
        langEnLevel: 'B2 (Self-assessed)'
      },
      contact: {
        title: 'Get in Touch',
        desc: 'Available for backend development internships, junior software engineering roles, cybersecurity collaborations, and technical discussions.',
        emailLabel: 'Email',
        copyBtn: 'Copy',
        copiedBtn: 'Copied!',
        phoneLabel: 'Phone',
        locationLabel: 'Location'
      },
      footer: {
        backToTop: 'Back to top ↑'
      }
    },

    ro: {
      meta: {
        title: 'Ștefan Ioniță | Backend Development & Cybersecurity',
        description:
          'Student la Calculatoare în Galați, România, orientat spre dezvoltare backend, securitate cibernetică, rețelistică și proiecte practice de inginerie software.'
      },
      a11y: {
        skip: 'Sari la conținutul principal',
        homeLink: 'Acasă',
        nav: 'Navigație principală',
        langGroup: 'Selector de limbă',
        menuOpen: 'Deschide meniul de navigație',
        menuClose: 'Închide meniul de navigație',
        cvBox: 'Descărcare Curriculum Vitae PDF',
        heroPoster: 'Poster editorial',
        profileSnapshot: 'Rezumat profil',
        archDiagram: 'Arhitectura sistemului Aplicație de Gestiune a Magazinului'
      },
      person: {
        name: 'Ștefan Ioniță',
        location: 'Galați, România'
      },
      nav: {
        about: 'Despre',
        experience: 'Experiență',
        projects: 'Proiecte',
        skills: 'Competențe',
        achievements: 'Realizări',
        education: 'Educație',
        contact: 'Contact'
      },
      hero: {
        statusBadge: 'Student în anul IV la Calculatoare',
        headline: 'Backend Development & Cybersecurity',
        roles: 'Backend Developer · Cybersecurity Analyst · Calculatoare (2023–2027)',
        intro:
          'Student în anul IV la Universitatea „Dunărea de Jos” din Galați, axat pe construirea sistemelor software practice cu accent pe arhitectură backend, baze de date relaționale, medii Linux, infrastructură de rețea și securitate cibernetică aplicată.',
        ctaProjects: 'Vezi proiectele',
        ctaContact: 'Contactează-mă',
        ctaGithub: 'GitHub',
        cvSectionTitle: 'Curriculum Vitae (PDF)',
        cvPendingBadge: 'În așteptarea fișierelor PDF',
        cvEnBtn: 'Download CV — English PDF',
        cvRoBtn: 'Descarcă CV — Romanian PDF',
        cvNote: 'Spații rezervate configurate pentru Stefan_Ionita_CV_EN.pdf și Stefan_Ionita_CV_RO.pdf.',
        cvClickedPrefix: 'Placeholder activ: încarcă fișierul',
        cvClickedSuffix: 'în rădăcina repository-ului pentru descărcare directă.'
      },
      poster: {
        eyebrow: 'ÎN PREZENT / 2026',
        primary: 'Construiesc.<br>Testez.<br>Securizez.',
        secondary: 'Building things.<br>Breaking things<br>securely.',
        caption: 'Interesat de sisteme backend fiabile și securitate cibernetică aplicată.'
      },
      snapshot: {
        tag: 'REZUMAT PROFIL',
        focusLabel: 'Direcții Principale',
        focusValue: 'Inginerie Backend & Securitate',
        eduLabel: 'Universitate',
        eduValue: 'UGAL · ACIEE (Calculatoare)',
        stackLabel: 'Tehnologii Cheie',
        awardsLabel: 'Competiții',
        awardsValue: '2× Locul I (AI Cyber Defence & CRI)'
      },
      about: {
        title: 'Despre mine',
        subtitle: 'Experiență practică pe sisteme reale combinată cu inginerie software structurată și securitate.',
        p1: 'Sunt student în anul IV la specializarea Calculatoare din cadrul Universității „Dunărea de Jos” din Galați (Facultatea de Automatică, Calculatoare, Inginerie Electrică și Electronică), urmărind oportunități în dezvoltare backend, inginerie software și securitate cibernetică.',
        p2: 'Experiența mea îmbină configurarea practică a echipamentelor IT și de rețelistică cu dezvoltarea web colaborativă folosind React, Node.js și PostgreSQL. În proiectele academice și personale pun accent pe separarea clară între frontend și backend, integritatea datelor relaționale și practici fundamentale de securitate defensivă — precum validarea datelor de intrare, hashing-ul parolelor, rate limiting și prevenirea SQL injection. În paralel, particip constant în echipe la hackathon-uri și competiții Capture The Flag axate pe analiza traficului de rețea, AI aplicat și automatizare.',
        pillar1Title: 'Backend & Arhitectură',
        pillar1Desc: 'Structurarea API-urilor orientate REST, straturi MVC, fluxuri de autentificare și scheme relaționale.',
        pillar2Title: 'Securitate Cibernetică Aplicată',
        pillar2Desc: 'Rezolvare practică de provocări CTF, analiză de pachete cu Wireshark/Nmap și programare defensivă.',
        pillar3Title: 'Infrastructură & AI',
        pillar3Desc: 'Medii Linux, configurare echipamente hardware/POS și competiții de echipă în AI/ML.'
      },
      experience: {
        title: 'Experiență',
        subtitle: 'Delimitare clară între activitatea oficială de teren și dezvoltarea colaborativă a aplicației web.',
        period: 'Martie 2026 – August 2026',
        empType: 'Part-time',
        role: 'Poziție oficială: Tehnician Networking',
        track1Label: 'ACTIVITATEA 01 · POZIȚIE OFICIALĂ',
        infraTitle: 'Tehnician Networking & Operațiuni Hardware',
        infraSummary:
          'Configurare, pregătire și depanare practică pentru stații de lucru, echipamente de rețea și sisteme fiscale comerciale.',
        infra1: 'Configurarea calculatoarelor și a imprimantelor de birou/comerciale.',
        infra2: 'Configurarea și pregătirea echipamentelor hardware POS.',
        infra3: 'Configurarea caselor de marcat fiscale pentru utilizare comercială.',
        infra4: 'Asistență la instalarea și depanarea echipamentelor tehnice.',
        track2Label: 'ACTIVITATEA 02 · PROIECT COLABORATIV',
        webBadge: 'Echipă de 2 persoane',
        webTitle: 'Website Public & Aplicație Web a Companiei',
        webDesc:
          'Am colaborat împreună cu un coleg la dezvoltarea și structurarea website-ului public și a aplicației web a companiei (globalecr.ro). M-am concentrat în principal pe implementarea backend, separarea clară între frontend și backend și automatizarea anumitor procese operaționale.',
        tagBackend: 'Contribuție Axată pe Backend',
        tagSeparation: 'Separare Frontend / Backend',
        tagAutomation: 'Automatizare Procese'
      },
      projects: {
        title: 'Proiecte',
        subtitle: 'Studiu de caz arhitectural principal alături de proiecte private și inițiative exploratorii.',
        featuredBadge: 'Studiu de Caz Principal',
        privateBadge: 'Repository Privat',
        p1Type: 'Proiect de Echipă · Aproape Finalizat',
        p1Title: 'Aplicație de Gestiune a Magazinului',
        p1ProblemTitle: 'Problema Inginerească și Operațională Rezolvată',
        p1ProblemDesc:
          'Activitățile comerciale au nevoie de sincronizare între stocuri, recepții de la furnizori, facturare la punctul de vânzare și responsabilitatea operatorilor. Această platformă full-stack centralizează fluxurile zilnice într-un sistem structurat, cu control pe roluri și trasabilitate completă.',
        p1ScopeTitle: 'Contextul Echipei și Limitele Confidențialității',
        p1ScopeDesc:
          'Dezvoltată colaborativ în echipă printr-o arhitectură decuplată (frontend React și backend Node.js MVC conectat la PostgreSQL/Supabase). Codul sursă, structura bazei de date și datele interne rămân private.',
        p1ModulesTitle: 'Modulele Principale ale Sistemului',
        m1Title: 'Stocuri & Produse',
        m1Desc: 'Gestiunea catalogului de produse, cantităților din stoc și a furnizorilor.',
        m2Title: 'Vânzări & Facturare',
        m2Desc: 'Procesarea vânzărilor, emiterea facturilor și statistici operaționale.',
        m3Title: 'Autentificare, Roluri & Permisiuni',
        m3Desc: 'Conturi utilizatori/angajați cu autentificare și autorizare pe roluri.',
        m4Title: 'Rapoarte & Istoric Operațiuni',
        m4Desc: 'Raportare operațională și jurnalizarea cronologică a acțiunilor.',
        previewTitle: 'Previzualizare UI — În Așteptarea Capturilor de Ecran',
        previewDesc:
          'Interfața proiectului privat nu este expusă pentru a proteja datele comerciale. Spațiu rezervat pentru o captură anonimizată cu date demonstrative.',
        p2Type: 'Proiect Personal',
        p2Desc:
          'Proiect software privat axat pe blocarea reclamelor nedorite. Dezvoltat pentru a explora concepte de filtrare a traficului și navigare curată.',
        p2Tag1: 'Blocare Reclame',
        p2Tag2: 'Concepte de Rețelistică',
        p3Type: 'Explorare AI/ML în Stadiu Incipient',
        p3Desc:
          'Concept exploratoriu de tip AI/ML care investighează metode bazate pe rețele neuronale pentru predicția stocurilor. Inițiat ca studiu experimental asupra fluxurilor de prognoză, nu ca model finalizat de producție.',
        p3Tag1: 'AI / ML Exploratoriu',
        p3Tag2: 'Concept Predicție Stocuri',
        publicNote:
          'Profilul public de GitHub include și repository-uri introductive de laborator precum Spanzuratoarea (joc în JavaScript) și ProiectPOO.'
      },
      arch: {
        label: 'ARHITECTURA SISTEMULUI · FRONTEND & BACKEND SEPARATE (MVC)',
        hint: 'Flux Logic la Nivel Înalt',
        tier1Tag: '01 · NIVEL CLIENT',
        t1Item1: 'Interfețe adaptate rolului operatorului',
        t1Item2: 'Fluxuri de inventar și vânzare (POS)',
        t1Item3: 'Panouri de rapoarte și audit',
        tier2Tag: '02 · SERVICIU BACKEND (MVC)',
        t2Item1: 'Autentificare și permisiuni RBAC',
        t2Item2: 'Controllere și validare reguli de business',
        t2Item3: 'Middleware pentru istoricul operațiunilor',
        tier3Tag: '03 · DATE & PERSISTENȚĂ',
        t3Item1: 'Înregistrări relaționale stocuri și facturi',
        t3Item2: 'Tabele furnizori și conturi utilizatori',
        t3Item3: 'Jurnal cronologic de trasabilitate'
      },
      skills: {
        title: 'Competențe Tehnice',
        subtitle: 'Tehnologii și practici defensive corelate direct cu proiectele, studiile și competițiile.',
        levelIntermediate: 'Nivel Intermediar',
        projectExp: 'Practică Academică & Proiecte',
        cat1Title: 'Programare',
        evJs: 'Limbaj principal pentru aplicații web, logică API și exerciții în browser.',
        evNode: 'Dezvoltare backend colaborativă pentru globalecr.ro și Aplicația de Gestiune a Magazinului.',
        evReact: 'Interfețe frontend modulare separate de serviciile backend.',
        cat2Title: 'Backend & Baze de Date',
        evPg: 'Modelare relațională și persistență în Aplicația de Gestiune a Magazinului.',
        evMvc: 'Rutare structurată, controllere și separare clară frontend/backend.',
        evRest: 'Proiectarea endpoint-urilor HTTP structurate pentru comunicarea client-server.',
        cat3Title: 'Instrumente & Dezvoltare',
        evGit: 'Control colaborativ al versiunilor în proiecte de echipă și hackathon-uri.',
        evDocker: 'Medii locale containerizate pentru fluxuri backend și baze de date.',
        evLinux: 'Utilizare zilnică în linie de comandă, medii server și unelte de dezvoltare.',
        cat4Title: 'Securitate Cibernetică & Rețelistică',
        evNetTools: 'Inspecție de pachete, recunoaștere de rețea și provocări CTF.',
        evTrafficLabel: 'Analiza Traficului de Rețea',
        evTraffic: 'Explorare de trăsături și clasificare atacuri în AI Cyber Defence Challenge 2026.',
        evAppSecLabel: 'Practici Web Defensive',
        evAppSec:
          'Validarea datelor de intrare, hashing-ul parolelor, rate limiting și prevenirea SQL injection aplicate în proiecte personale/academice.'
      },
      achievements: {
        title: 'Competiții & Realizări',
        subtitle:
          'Premii I și distincții naționale în securitate cibernetică, inteligență artificială, robotică și sisteme energetice.',
        firstPlaceTag: 'Locul I · Competiție pe Echipe',
        firstPlaceTag2: 'Locul I · Robotică & AI',
        a1Desc:
          'Am contribuit la antrenarea modelelor de machine learning și analiza rezultatelor într-o competiție pe echipe axată pe securitatea traficului de rețea, acoperind trei sarcini de detecție:',
        a1Task1: 'Clasificare Binară',
        a1Task2: 'Clasificare Multi-Clasă (10 Clase)',
        a1Task3: 'Detecție Open-Set (Atacuri Necunoscute)',
        a1Site: 'Site Oficial Competiție',
        a1Guide: 'Ghid Tehnic',
        a2Title: 'Concursul CRI',
        a2Desc:
          'Proiect de echipă pentru dezvoltarea unui sistem bazat pe AI care controlează un braț robotic destinat identificării și sortării cuburilor colorate în funcție de poziția lor pe o grilă 3×3.',
        a2Task1: 'Sistem Control AI',
        a2Task2: 'Braț Robotic',
        a2Task3: 'Sortare Cuburi Grilă 3×3',
        a2Site: 'Pagina Competiției',
        a3Badge: 'Mențiunea I',
        a3Desc: 'Distins cu Mențiunea I pentru un proiect ce propune un sistem energetic bazat pe hidrogen.',
        a4Title: 'Concursul de Creativitate Severin Bumbaru',
        a4Badge: 'Mențiunea II',
        a4Desc: 'Distins cu Mențiunea II pentru un sistem bazat pe AI destinat recunoașterii plantelor.',
        a5Badge: 'Locul 54 · Certificat',
        a5Desc:
          'Competiție de securitate cibernetică pe echipe în multiple categorii de provocări, recompensată cu certificat oficial.'
      },
      education: {
        title: 'Educație & Certificări',
        subtitle: 'Cronologie academică, certificat oficial de competiție și limbi străine.',
        uniPeriod: '2023 – 2027 (Absolvire estimată: 2027)',
        uniStatus: 'Student în anul IV',
        uniName: 'Universitatea „Dunărea de Jos” din Galați',
        uniProgram: 'Studii în domeniul Calculatoare — Departamentul Calculatoare',
        uniFaculty: 'Facultatea de Automatică, Calculatoare, Inginerie Electrică și Electronică',
        hsBadge: 'Liceu — Absolvit',
        hsName: 'Liceul Teoretic „Emil Racoviță”, Galați'
      },
      credentials: {
        certHeading: 'Certificări',
        certDesc: 'Certificat oficial obținut pentru participarea în categoriile competiției de securitate cibernetică.',
        langHeading: 'Limbi Străine',
        langRo: 'Română',
        langRoLevel: 'Nativ',
        langEn: 'Engleză',
        langEnLevel: 'B2 (Autoevaluat)'
      },
      contact: {
        title: 'Contact',
        desc: 'Disponibil pentru stagii de practică (internship) în dezvoltare backend, roluri junior de inginerie software, colaborări în securitate cibernetică și discuții tehnice.',
        emailLabel: 'Email',
        copyBtn: 'Copiază',
        copiedBtn: 'Copiat!',
        phoneLabel: 'Telefon',
        locationLabel: 'Locație'
      },
      footer: {
        backToTop: 'Înapoi sus ↑'
      }
    }
  };

  let currentLang = 'en';

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
  }

  function applyLanguage(lang) {
    const dict = translations[lang] ? translations[lang] : translations.en;
    currentLang = translations[lang] ? lang : 'en';

    document.documentElement.lang = currentLang;
    document.title = dict.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict.meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', dict.meta.description);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(dict, key);
      if (value !== null) {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const value = getNestedValue(dict, key);
      if (value !== null) {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const value = getNestedValue(dict, key);
      if (value !== null) {
        el.setAttribute('aria-label', value);
      }
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isSelected = btn.getAttribute('data-lang') === currentLang;
      btn.classList.toggle('is-active', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
    });

    const menuToggle = document.getElementById('menu-toggle');
    const primaryNav = document.getElementById('primary-nav');
    if (menuToggle && primaryNav) {
      const isOpen = primaryNav.classList.contains('is-open');
      menuToggle.setAttribute('aria-label', isOpen ? dict.a11y.menuClose : dict.a11y.menuOpen);
    }

    try {
      localStorage.setItem('portfolio_lang', currentLang);
    } catch (_) {
      // Ignore storage restrictions
    }
  }

  function initLanguageSwitcher() {
    let savedLang = 'en';
    try {
      const stored = localStorage.getItem('portfolio_lang');
      if (stored === 'en' || stored === 'ro') {
        savedLang = stored;
      }
    } catch (_) {
      savedLang = 'en';
    }

    applyLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== currentLang) {
          applyLanguage(targetLang);
        }
      });
    });
  }

  function initCvPlaceholders() {
    const statusNote = document.getElementById('cv-status-note');
    document.querySelectorAll('.cv-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const fileName = btn.getAttribute('data-cv-file');
        if (!statusNote || !fileName) return;
        const dict = translations[currentLang].hero;
        statusNote.textContent = `${dict.cvClickedPrefix} "${fileName}" ${dict.cvClickedSuffix}`;
      });
    });
  }

  function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const primaryNav = document.getElementById('primary-nav');
    if (!menuToggle || !primaryNav) return;

    const closeMenu = () => {
      primaryNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', translations[currentLang].a11y.menuOpen);
    };

    menuToggle.addEventListener('click', () => {
      const willOpen = !primaryNav.classList.contains('is-open');
      primaryNav.classList.toggle('is-open', willOpen);
      menuToggle.setAttribute('aria-expanded', String(willOpen));
      menuToggle.setAttribute(
        'aria-label',
        willOpen ? translations[currentLang].a11y.menuClose : translations[currentLang].a11y.menuOpen
      );
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (
        primaryNav.classList.contains('is-open') &&
        !primaryNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  function initActiveNavHighlight() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function initCopyEmail() {
    const copyBtn = document.getElementById('copy-email-btn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email');
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = translations[currentLang].contact.copiedBtn;
        setTimeout(() => {
          copyBtn.textContent = translations[currentLang].contact.copyBtn;
        }, 2000);
      } catch (_) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  function initDynamicYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initDynamicYear();
    initLanguageSwitcher();
    initCvPlaceholders();
    initMobileMenu();
    initActiveNavHighlight();
    initCopyEmail();
  });
})();
