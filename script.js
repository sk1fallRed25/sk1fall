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
        nav: 'Primary navigation',
        langGroup: 'Language selector',
        menuOpen: 'Open navigation menu',
        menuClose: 'Close navigation menu',
        heroPoster: 'Editorial statement poster'
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
        locationBadge: 'Galați, Romania · Fourth-Year Student',
        headline: 'Computer Engineering Student | Backend Development & Cybersecurity',
        roles: 'Backend Developer · Cybersecurity Analyst',
        intro:
          'Computer Engineering student at “Dunărea de Jos” University of Galați focused on backend architecture, relational databases, Linux environments, networking equipment, and applied cybersecurity. Experienced through practical IT infrastructure work, collaborative web development, and competitive AI and security challenges.',
        ctaProjects: 'View Projects',
        ctaContact: 'Contact Me',
        ctaGithub: 'GitHub Profile'
      },
      poster: {
        eyebrow: 'CURRENTLY / 2026',
        primary: 'Building things.<br>Breaking things<br>securely.',
        secondary: 'Construiesc.<br>Testez.<br>Securizez.',
        caption: 'Interested in reliable backend systems and practical cybersecurity.'
      },
      about: {
        title: 'About Me',
        subtitle: 'Engineering mindset grounded in practical systems and continuous learning.',
        p1: 'I am a fourth-year Computer Engineering student at “Dunărea de Jos” University of Galați (Faculty of Automation, Computers, Electrical Engineering and Electronics), building a career toward backend software engineering and cybersecurity.',
        p2: 'My hands-on background spans configuring networking and POS hardware in real operational settings, collaborating on full-stack web applications with separated frontend and backend layers, and applying security principles such as input validation, password hashing, rate limiting, and network traffic analysis. Alongside coursework and software projects, I actively compete in team hackathons and Capture The Flag events involving AI-driven detection, automation, and defensive security.'
      },
      experience: {
        title: 'Experience',
        subtitle: 'Practical technical operations and collaborative web application development.',
        period: 'March 2026 – August 2026 · Part-time',
        role: 'Networking Technician',
        infraTitle: 'IT Infrastructure & Field Operations',
        infra1: 'Configured workstation computers and office/commercial printers.',
        infra2: 'Configured and prepared Point-of-Sale (POS) hardware systems.',
        infra3: 'Configured fiscal cash registers for retail deployment.',
        infra4: 'Assisted with on-site technical equipment setup and troubleshooting.',
        webTitle: 'Web Application Collaboration',
        webBadge: '2-Person Collaboration',
        webDesc:
          'Collaborated alongside one colleague on the company’s public website and web application (globalecr.ro). Focused primarily on backend development, establishing a clean separation between frontend and backend layers and automating selected internal workflows.',
        tagBackend: 'Backend Architecture',
        tagAutomation: 'Process Automation'
      },
      projects: {
        title: 'Projects',
        subtitle: 'Selected private software systems and exploratory engineering work.',
        privateBadge: 'Private Repository',
        p1Type: 'Team Project · Near Completion',
        p1Title: 'Store Management Application',
        p1Desc:
          'Collaborative full-stack retail management platform structured around an MVC pattern with separated frontend and backend services. Designed to support daily commercial workflows with role-based access control and auditability.',
        p1F1: 'Product catalog, stock levels, and supplier management',
        p1F2: 'Sales processing, invoicing, and operational reports',
        p1F3: 'User & employee accounts, authentication, and granular permissions',
        p1F4: 'Complete operation history logging for traceability',
        p1Privacy: 'Source code and internal schema remain private.',
        p2Type: 'Personal Project · In Progress',
        p2Desc:
          'A private software project focused on filtering and blocking unwanted advertisements. Developed as a practical exercise in traffic control and network-level filtering concepts.',
        p2Tag1: 'Ad Blocking',
        p2Tag2: 'Networking',
        p3Type: 'Exploratory Concept',
        p3Desc:
          'An exploratory AI/ML project investigating neural-network approaches for inventory demand prediction. Created as an early-stage research prototype to study forecasting workflows.',
        p3Tag1: 'AI / ML',
        p3Tag2: 'Inventory Forecasting',
        publicNote:
          'Additional public coursework and introductory repositories (such as Spanzuratoarea and ProiectPOO) are available on GitHub.',
        publicLink: 'github.com/sk1fallRed25'
      },
      skills: {
        title: 'Technical Skills',
        subtitle: 'Core technologies and security practices applied across academic and team projects.',
        levelIntermediate: 'Intermediate',
        projectExp: 'Project Experience',
        cat1Title: 'Programming',
        cat1Desc: 'Building modular client and server applications with clean separation of concerns.',
        cat2Title: 'Backend & Databases',
        cat2Desc: 'Designing relational schemas, REST-oriented APIs, and structured MVC services.',
        tagBackendArch: 'Backend Architecture',
        tagRest: 'REST-Oriented APIs',
        tagMvc: 'MVC Architecture',
        cat3Title: 'Tools & Development',
        cat3Desc: 'Version control, containerized workflows, and Linux-based development environments.',
        cat4Title: 'Cybersecurity & Networking',
        cat4Desc:
          'Applied defensive coding practices in personal/academic apps alongside CTF and packet analysis tools.',
        tagTraffic: 'Network Traffic Analysis',
        tagValidation: 'Input Validation',
        tagHashing: 'Password Hashing',
        tagRateLimit: 'Rate Limiting',
        tagSqli: 'SQL Injection Mitigation'
      },
      achievements: {
        title: 'Competitions & Achievements',
        subtitle:
          'Team results in cybersecurity, applied artificial intelligence, robotics, and engineering challenges.',
        rank1Aria: '1st Place',
        placeLabel: 'PLACE',
        mentionLabel: 'MENTION',
        rankLabel: 'RANK',
        teamComp: 'Team Competition',
        a1Desc:
          'Contributed to machine learning model training and result analysis for network traffic security tasks, covering binary attack detection, 10-class attack classification, and open-set identification of previously unseen threats.',
        a1Site: 'Competition Website',
        a1Guide: 'Technical Guide',
        a2Title: 'CRI Competition',
        roboticsTag: 'AI & Robotics',
        a2Desc:
          'Developed an AI-driven control system for a robotic arm tasked with identifying and sorting colored cubes based on their positions across a 3×3 grid.',
        a2Site: 'Competition Reference',
        a3Badge: 'First Mention',
        a3Desc:
          'Awarded First Mention (Mențiunea I) for a team project proposing a hydrogen-based energy system solution.',
        a4Title: 'Severin Bumbaru Creativity Contest',
        a4Badge: 'Second Mention',
        a4Desc:
          'Awarded Second Mention (Mențiunea II) for developing an AI-based system for plant recognition.',
        a5Badge: '54th Place · Certified',
        a5Desc:
          'Competed in a team cybersecurity Capture The Flag competition across multiple security categories, earning an official CRONOS SECURITY 2026 competition certificate.'
      },
      education: {
        title: 'Education & Credentials',
        subtitle: 'Academic background, competition certification, and working languages.',
        uniPeriod: '2023 – 2027 (Expected) · Fourth-Year Student',
        uniName: '“Dunărea de Jos” University of Galați',
        uniProgram: 'Computer Engineering Studies — Department of Computers',
        uniFaculty: 'Faculty of Automation, Computers, Electrical Engineering and Electronics',
        hsBadge: 'High School Graduate',
        hsName: '“Emil Racoviță” Theoretical High School'
      },
      credentials: {
        certHeading: 'Certifications',
        certDesc: 'Competition participation certificate across cybersecurity challenge categories.',
        langHeading: 'Languages',
        langRo: 'Romanian',
        langRoLevel: 'Native',
        langEn: 'English',
        langEnLevel: 'B2 (Self-assessed)'
      },
      contact: {
        title: 'Get in Touch',
        desc: 'Open to backend development internships, junior software engineering opportunities, cybersecurity collaborations, and technical discussions. Feel free to reach out directly.',
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
        nav: 'Navigație principală',
        langGroup: 'Selector de limbă',
        menuOpen: 'Deschide meniul de navigație',
        menuClose: 'Închide meniul de navigație',
        heroPoster: 'Poster editorial'
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
        locationBadge: 'Galați, România · Student în anul IV',
        headline: 'Student la Calculatoare | Backend Development & Cybersecurity',
        roles: 'Backend Developer · Cybersecurity Analyst',
        intro:
          'Student la Calculatoare în cadrul Universității „Dunărea de Jos” din Galați, orientat spre arhitectură backend, baze de date relaționale, medii Linux, echipamente de rețea și securitate cibernetică aplicată. Experiență dobândită prin activități practice de infrastructură IT, dezvoltare web colaborativă și competiții tehnice de AI și securitate.',
        ctaProjects: 'Vezi proiectele',
        ctaContact: 'Contactează-mă',
        ctaGithub: 'Profil GitHub'
      },
      poster: {
        eyebrow: 'ÎN PREZENT / 2026',
        primary: 'Construiesc.<br>Testez.<br>Securizez.',
        secondary: 'Building things.<br>Breaking things<br>securely.',
        caption: 'Interesat de sisteme backend fiabile și securitate cibernetică aplicată.'
      },
      about: {
        title: 'Despre mine',
        subtitle: 'Abordare inginerească bazată pe sisteme practice și învățare continuă.',
        p1: 'Sunt student în anul IV la specializarea Calculatoare din cadrul Universității „Dunărea de Jos” din Galați (Facultatea de Automatică, Calculatoare, Inginerie Electrică și Electronică), construindu-mi parcursul profesional către dezvoltarea software backend și securitatea cibernetică.',
        p2: 'Experiența mea practică îmbină configurarea echipamentelor de rețelistică și POS în medii operaționale reale, colaborarea la aplicații web cu separare clară între frontend și backend, precum și aplicarea măsurilor de securitate precum validarea datelor de intrare, hashing-ul parolelor, rate limiting și analiza traficului de rețea. Pe lângă activitatea academică, particip activ în echipe la hackathon-uri și competiții Capture The Flag axate pe detecție bazată pe AI, automatizare și securitate defensivă.'
      },
      experience: {
        title: 'Experiență',
        subtitle: 'Operațiuni tehnice practice și dezvoltare colaborativă de aplicații web.',
        period: 'Martie 2026 – August 2026 · Part-time',
        role: 'Tehnician Networking',
        infraTitle: 'Infrastructură IT & Operațiuni Tehnice',
        infra1: 'Configurarea calculatoarelor și a imprimantelor de birou/comerciale.',
        infra2: 'Configurarea și pregătirea echipamentelor hardware POS.',
        infra3: 'Configurarea caselor de marcat fiscale pentru utilizare operațională.',
        infra4: 'Asistență la instalarea și depanarea echipamentelor tehnice.',
        webTitle: 'Colaborare Aplicație Web',
        webBadge: 'Colaborare în echipă de 2 persoane',
        webDesc:
          'Am colaborat împreună cu un coleg la dezvoltarea website-ului public și a aplicației web a companiei (globalecr.ro). M-am concentrat în principal pe partea de backend, separând structura frontendului de backend și automatizând anumite procese interne.',
        tagBackend: 'Arhitectură Backend',
        tagAutomation: 'Automatizare Procese'
      },
      projects: {
        title: 'Proiecte',
        subtitle: 'Sisteme software private și inițiative exploratorii de inginerie.',
        privateBadge: 'Repository Privat',
        p1Type: 'Proiect de Echipă · Aproape Finalizat',
        p1Title: 'Aplicație de Gestiune a Magazinului',
        p1Desc:
          'Platformă full-stack de gestiune comercială realizată în echipă, structurată pe arhitectură MVC cu servicii separate de frontend și backend. Concepută pentru fluxuri operaționale zilnice cu control al accesului pe roluri și trasabilitate.',
        p1F1: 'Gestiunea produselor, stocurilor și furnizorilor',
        p1F2: 'Procesarea vânzărilor, facturare și rapoarte operaționale',
        p1F3: 'Conturi utilizatori și angajați, autentificare și permisiuni pe roluri',
        p1F4: 'Istoric complet al operațiunilor pentru audit și trasabilitate',
        p1Privacy: 'Codul sursă și structura internă rămân private.',
        p2Type: 'Proiect Personal · În Lucru',
        p2Desc:
          'Proiect software privat axat pe filtrarea și blocarea reclamelor nedorite. Dezvoltat ca exercițiu practic în controlul traficului și concepte de filtrare la nivel de rețea.',
        p2Tag1: 'Blocare Reclame',
        p2Tag2: 'Rețelistică',
        p3Type: 'Proiect Exploratoriu',
        p3Desc:
          'Proiect exploratoriu de tip AI/ML care investighează utilizarea rețelelor neuronale pentru predicția cererii și a stocurilor. Realizat ca prototip incipient de cercetare pentru studierea fluxurilor de prognoză.',
        p3Tag1: 'AI / ML',
        p3Tag2: 'Predicția Stocurilor',
        publicNote:
          'Alte repository-uri publice de studiu și laborator (precum Spanzuratoarea și ProiectPOO) sunt disponibile pe GitHub.',
        publicLink: 'github.com/sk1fallRed25'
      },
      skills: {
        title: 'Competențe Tehnice',
        subtitle: 'Tehnologii și practici de securitate aplicate în proiecte academice și de echipă.',
        levelIntermediate: 'Nivel Intermediar',
        projectExp: 'Experiență în Proiecte',
        cat1Title: 'Programare',
        cat1Desc: 'Dezvoltarea aplicațiilor client și server modulare, cu separare clară a responsabilităților.',
        cat2Title: 'Backend & Baze de Date',
        cat2Desc: 'Proiectarea schemelor relaționale, API-uri orientate REST și servicii structurate MVC.',
        tagBackendArch: 'Arhitectură Backend',
        tagRest: 'API-uri Orientate REST',
        tagMvc: 'Arhitectură MVC',
        cat3Title: 'Instrumente & Dezvoltare',
        cat3Desc: 'Controlul versiunilor, fluxuri containerizate și medii de dezvoltare bazate pe Linux.',
        cat4Title: 'Securitate Cibernetică & Rețelistică',
        cat4Desc:
          'Practici de programare defensivă aplicate în proiecte personale/academice, alături de instrumente CTF și analiză de pachete.',
        tagTraffic: 'Analiza Traficului de Rețea',
        tagValidation: 'Validarea Datelor de Intrare',
        tagHashing: 'Hashing Parole',
        tagRateLimit: 'Rate Limiting',
        tagSqli: 'Prevenire SQL Injection'
      },
      achievements: {
        title: 'Competiții & Realizări',
        subtitle:
          'Rezultate obținute în echipă la competiții de securitate cibernetică, inteligență artificială aplicată, robotică și inginerie.',
        rank1Aria: 'Locul I',
        placeLabel: 'LOCUL',
        mentionLabel: 'MENȚIUNE',
        rankLabel: 'LOC',
        teamComp: 'Competiție pe Echipe',
        a1Desc:
          'Am contribuit la antrenarea modelelor de machine learning și la analiza rezultatelor pentru sarcini de securitate a traficului de rețea: detecție binară a atacurilor, clasificare multi-clasă (10 clase) și detecție open-set a atacurilor necunoscute.',
        a1Site: 'Site-ul Competiției',
        a1Guide: 'Ghid Tehnic',
        a2Title: 'Concursul CRI',
        roboticsTag: 'AI & Robotică',
        a2Desc:
          'Dezvoltarea unui sistem bazat pe inteligență artificială pentru controlul unui braț robotic care identifică și sortează cuburi colorate în funcție de poziția acestora pe o grilă 3×3.',
        a2Site: 'Pagina Competiției',
        a3Badge: 'Mențiunea I',
        a3Desc:
          'Distins cu Mențiunea I pentru un proiect de echipă ce propune un sistem energetic bazat pe hidrogen.',
        a4Title: 'Concursul de Creativitate Severin Bumbaru',
        a4Badge: 'Mențiunea II',
        a4Desc:
          'Distins cu Mențiunea II pentru dezvoltarea unui sistem bazat pe inteligență artificială destinat recunoașterii plantelor.',
        a5Badge: 'Locul 54 · Certificat',
        a5Desc:
          'Participare în echipă la competiția de securitate cibernetică Capture The Flag în multiple categorii de provocări, obținând certificatul oficial CRONOS SECURITY 2026.'
      },
      education: {
        title: 'Educație & Certificări',
        subtitle: 'Parcurs academic, certificare de competiție și limbi străine.',
        uniPeriod: '2023 – 2027 (Estimare) · Student în anul IV',
        uniName: 'Universitatea „Dunărea de Jos” din Galați',
        uniProgram: 'Studii în domeniul Calculatoare — Departamentul Calculatoare',
        uniFaculty: 'Facultatea de Automatică, Calculatoare, Inginerie Electrică și Electronică',
        hsBadge: 'Absolvent de Liceu',
        hsName: 'Liceul Teoretic „Emil Racoviță”, Galați'
      },
      credentials: {
        certHeading: 'Certificări',
        certDesc: 'Certificat de participare obținut în cadrul categoriilor de securitate cibernetică.',
        langHeading: 'Limbi Străine',
        langRo: 'Română',
        langRoLevel: 'Nativ',
        langEn: 'Engleză',
        langEnLevel: 'B2 (Autoevaluat)'
      },
      contact: {
        title: 'Contact',
        desc: 'Deschis către stagii de practică (internship) în dezvoltare backend, oportunități junior de inginerie software, colaborări în securitate cibernetică și discuții tehnice. Mă poți contacta direct.',
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
    if (metaDesc) {
      metaDesc.setAttribute('content', dict.meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', dict.meta.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', dict.meta.description);
    }

    // Translate plain text nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(dict, key);
      if (value !== null) {
        el.textContent = value;
      }
    });

    // Translate multiline poster statements
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const value = getNestedValue(dict, key);
      if (value !== null) {
        el.innerHTML = value;
      }
    });

    // Translate ARIA labels
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const value = getNestedValue(dict, key);
      if (value !== null) {
        el.setAttribute('aria-label', value);
      }
    });

    // Update toggle buttons state
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isSelected = btn.getAttribute('data-lang') === currentLang;
      btn.classList.toggle('is-active', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
    });

    // Sync mobile menu button aria-label
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
    initMobileMenu();
    initActiveNavHighlight();
    initCopyEmail();
  });
})();
