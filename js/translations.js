/* ==========================================================
   translations.js : tous les textes du site en FR et EN
   Pour modifier un texte, changez la valeur correspondante.
   Chaque clé est liée à un attribut data-i18n="..." dans index.html.
   ========================================================== */

const TRANSLATIONS = {
  fr: {
    "meta.title": "Fatima Zahra El Bouti – Portfolio",
    "meta.description": "Portfolio de Fatima Zahra El Bouti, étudiante en Développement Digital – Option Web Full Stack à l'OFPPT.",

    "nav.skip": "Aller au contenu",
    "nav.label": "Navigation principale",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.menu": "Ouvrir ou fermer le menu",
    "nav.langSwitch": "Passer le site en anglais",

    "hero.greeting": "Bonjour, je suis",
    "hero.role": "Étudiante en Développement Digital – Option Web Full Stack",
    "hero.intro1": "Étudiante en deuxième année de Développement Digital, option Web Full Stack à l'OFPPT.",
    "hero.intro2": "Je m'intéresse au développement web, à la technologie et à la création de projets numériques. J'aime apprendre, expérimenter et transformer des idées en réalisations concrètes.",
    "hero.welcome": "Bienvenue dans mon univers numérique.",
    "hero.btnProjects": "Découvrir mes projets",
    "hero.btnAbout": "À propos de moi",
    "hero.photoAlt": "Portrait de Fatima Zahra El Bouti",
    "hero.photoPlaceholder": "Photo à ajouter",

    "about.kicker": "Qui suis-je",
    "about.title": "À propos de moi",
    "about.p1": "Je suis une étudiante en deuxième année de Développement Digital, option Web Full Stack à l'OFPPT.",
    "about.p2": "Au cours de ma formation, je découvre différentes technologies et je développe progressivement mes compétences en programmation, en développement web et en conception de projets numériques.",
    "about.p3": "Je suis une personne responsable, persévérante et à l'écoute. J'apprécie le travail en équipe, l'échange d'idées et l'apprentissage continu.",
    "about.p4": "Je souhaite continuer à progresser, développer mes compétences et réaliser des projets qui me permettent de mettre en pratique mes connaissances.",

    "skills.kicker": "Ce que j'apprends",
    "skills.title": "Compétences",
    "skills.intro": "Les technologies que je pratique et que j'approfondis au fil de ma formation.",
    "skills.web": "Développement Web",
    "skills.data": "Programmation et bases de données",
    "skills.tools": "Outils et technologies complémentaires",

    "education.kicker": "Mon parcours",
    "education.title": "Formation",
    "education.current.period": "2025 – Présent",
    "education.current.degree": "Développement Digital",
    "education.current.detail": "Option Web Full Stack – Deuxième année",
    "education.bac.degree": "Baccalauréat en Sciences Physiques",

    "projects.kicker": "Mes réalisations",
    "projects.title": "Mes projets",
    "projects.intro": "Des projets réalisés dans le cadre de ma formation.",
    "projects.btnDemo": "Voir le projet",
    "projects.btnGithub": "Voir sur GitHub",
    "projects.demoSoon": "Démo à venir",
    "projects.githubSoon": "GitHub à venir",
    "projects.imagePlaceholder": "[Capture d'écran à ajouter]",

    "contact.kicker": "Restons en contact",
    "contact.title": "Me contacter",
    "contact.text": "Vous souhaitez découvrir mon travail, échanger ou discuter d'une opportunité ? N'hésitez pas à me contacter.",
    "contact.emailLabel": "E-mail",
    "contact.emailPlaceholder": "[À compléter]",
    "contact.linkPlaceholder": "[URL du profil à ajouter]",
    "contact.btnEmail": "M'envoyer un e-mail",

    "footer.rights": "Tous droits réservés.",
    "top.label": "Retour en haut de la page"
  },

  en: {
    "meta.title": "Fatima Zahra El Bouti – Portfolio",
    "meta.description": "Portfolio of Fatima Zahra El Bouti, a Digital Development student specializing in Web Full Stack at OFPPT.",

    "nav.skip": "Skip to content",
    "nav.label": "Main navigation",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.menu": "Open or close the menu",
    "nav.langSwitch": "Switch the site to French",

    "hero.greeting": "Hello, I'm",
    "hero.role": "Digital Development Student – Web Full Stack Track",
    "hero.intro1": "A second-year Digital Development student, specializing in Web Full Stack at OFPPT.",
    "hero.intro2": "I'm interested in web development, technology, and creating digital projects. I enjoy learning, experimenting, and turning ideas into meaningful projects.",
    "hero.welcome": "Welcome to my digital space.",
    "hero.btnProjects": "Explore my projects",
    "hero.btnAbout": "About me",
    "hero.photoAlt": "Portrait of Fatima Zahra El Bouti",
    "hero.photoPlaceholder": "Photo to be added",

    "about.kicker": "Who I am",
    "about.title": "About me",
    "about.p1": "I am a second-year Digital Development student, specializing in Web Full Stack at OFPPT.",
    "about.p2": "Throughout my studies, I am discovering different technologies and gradually developing my skills in programming, web development, and digital project creation.",
    "about.p3": "I consider myself responsible, persistent, and a good listener. I enjoy teamwork, exchanging ideas, and continuous learning.",
    "about.p4": "My goal is to keep improving, develop my skills, and create projects that allow me to put my knowledge into practice.",

    "skills.kicker": "What I'm learning",
    "skills.title": "Skills",
    "skills.intro": "The technologies I practice and keep deepening throughout my studies.",
    "skills.web": "Web Development",
    "skills.data": "Programming and Databases",
    "skills.tools": "Tools and Additional Technologies",

    "education.kicker": "My journey",
    "education.title": "Education",
    "education.current.period": "2025 – Present",
    "education.current.degree": "Digital Development",
    "education.current.detail": "Web Full Stack Track – Second year",
    "education.bac.degree": "Baccalaureate in Physical Sciences",

    "projects.kicker": "My work",
    "projects.title": "My Projects",
    "projects.intro": "Projects built as part of my studies.",
    "projects.btnDemo": "View project",
    "projects.btnGithub": "View on GitHub",
    "projects.demoSoon": "Demo coming soon",
    "projects.githubSoon": "GitHub coming soon",
    "projects.imagePlaceholder": "[Screenshot to be added]",

    "contact.kicker": "Let's connect",
    "contact.title": "Contact me",
    "contact.text": "Would you like to explore my work, connect, or discuss an opportunity? Feel free to contact me.",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "[To be completed]",
    "contact.linkPlaceholder": "[Profile URL to be added]",
    "contact.btnEmail": "Send me an email",

    "footer.rights": "All rights reserved.",
    "top.label": "Back to top of the page"
  }
};
