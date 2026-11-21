/* ==========================================================
   projects.js : données des projets et liens personnels
   ----------------------------------------------------------
   1) SITE_CONFIG  → votre e-mail, LinkedIn et GitHub
   2) PROJECTS     → une entrée par carte de projet

   Pour AJOUTER un projet : copiez un bloc { ... } du tableau
   PROJECTS, collez-le à la suite et modifiez ses valeurs.
   La carte apparaît automatiquement sur le site.
   ========================================================== */

const SITE_CONFIG = {
  email: "fatimazahraelbouti71@gmail.com",     // ex. "prenom.nom@exemple.com"  (laisser vide tant que non renseigné)
  linkedin: "https://www.linkedin.com/in/fatima-zahra-el-bouti-51a969406?utm_source=share_via&utm_content=profile&utm_medium=member_android",  // ex. "https://www.linkedin.com/in/votre-profil"
  github: "https://github.com/fatimazahra-dev26"     // ex. "https://github.com/votre-pseudo"
};

const PROJECTS = [
  {
    id: "project-01",
    label: {
      fr: "Projet 01 – Site web HTML & CSS",
      en: "Project 01 – HTML & CSS Website"
    },
    title: {
      fr: "Intégration d'un template web",
      en: "HTML & CSS Website Template"
    },
    description: {
      fr: "Exercice pratique basé sur un template web, réalisé avec HTML et CSS. Il m'a permis de découvrir la structure des pages web et de mettre en pratique les bases de leur mise en forme.",
      en: "A practical exercise based on a website template, built with HTML and CSS. It allowed me to explore web page structure and practice the fundamentals of styling."
    },
    image: "assets/images/projects/projet1_html_css.png",
    tech: ["HTML5", "CSS3"],
    demo: "https://github.com/fatimazahra-dev26/startup-template.git",
    github: " https://fatimazahra-dev26.github.io/startup-template/"
  },
  {
    id: "project-02",
    label: {
      fr: "Projet 02 – Site web avec Bootstrap",
      en: "Project 02 – Website with Bootstrap"
    },
    title: {
      fr: "Template de site web automobile",
      en: "Automotive Website Template"
    },
    description: {
      fr: "Exercice pratique autour d'un template de site web automobile, réalisé avec HTML, CSS et Bootstrap. Ce projet m'a permis de découvrir les composants Bootstrap et de les utiliser pour créer une interface web structurée et responsive.",
      en: "A practical exercise based on an automotive website template, built with HTML, CSS, and Bootstrap. This project helped me explore Bootstrap components and use them to create a structured and responsive web interface."
    },
    image: "assets/images/projects/projet2.png",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    demo: "https://github.com/fatimazahra-dev26/automotive-website.git",
    github: "https://fatimazahra-dev26.github.io/automotive-website/"
  },
  {
    id: "project-03",
    label: {
      fr: "Projet 03 – Application web avec JavaScript",
      en: "Project 03 – Web Application with JavaScript"
    },
    title: {
      fr: "RecyPlus – Plateforme digitale de recyclage",
      en: "RecyPlus – Digital Recycling Platform"
    },
    description: {
      fr: "Conception d'une plateforme digitale dédiée au recyclage et à la valorisation des déchets. Réalisé avec HTML, CSS et JavaScript, ce projet intègre des interactions dynamiques avec les boutons afin de rendre l'interface plus interactive et fonctionnelle.",
      en: "A digital platform concept dedicated to recycling and waste recovery. Built with HTML, CSS, and JavaScript, this project includes dynamic button interactions to make the interface more interactive and functional."
    },
    image: "assets/images/projects/projet3_html_js.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://github.com/fatimazahra-dev26/recyplus-recycling-platform.git",
    github: "https://fatimazahra-dev26.github.io/recyplus-recycling-platform/"
  }
];

