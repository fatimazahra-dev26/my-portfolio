# Portfolio – Fatima Zahra El Bouti

Portfolio personnel one-page, bilingue (français / English), de **Fatima Zahra El Bouti**, étudiante en Développement Digital – Option Web Full Stack à l'OFPPT.

*Personal one-page bilingual (FR / EN) portfolio of Fatima Zahra El Bouti, Digital Development student (Web Full Stack) at OFPPT.*

## Technologies

- HTML5 sémantique
- CSS3 (Flexbox, Grid, approche mobile-first, variables CSS)
- JavaScript natif (Vanilla JS) — aucun framework

## Structure

```
fatima-portfolio/
├── index.html
├── css/
│   ├── style.css          # styles de base (mobile-first)
│   └── responsive.css     # adaptations tablette / ordinateur
├── js/
│   ├── script.js          # comportement (langue, menu, animations…)
│   ├── translations.js    # tous les textes FR / EN
│   └── projects.js        # projets + e-mail / LinkedIn / GitHub
├── assets/
│   ├── images/
│   │   ├── profile.jpg    # ← votre photo
│   │   └── projects/      # ← captures d'écran des projets
│   └── icons/
└── README.md
```

## Lancer le site en local

Aucune installation n'est nécessaire : ouvrez `index.html` dans un navigateur.
Pour un serveur local (facultatif) :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Personnaliser le portfolio

| Je veux… | Je modifie… |
|---|---|
| Remplacer ma photo | Déposer `profile.jpg` dans `assets/images/` (le nom doit rester identique) |
| Renseigner mon e-mail, LinkedIn, GitHub | `SITE_CONFIG` en haut de `js/projects.js` |
| Compléter un projet (nom, description, image, liens) | Le bloc correspondant dans `PROJECTS`, `js/projects.js` |
| Ajouter un projet | Copier un bloc de `PROJECTS` et le coller à la suite |
| Modifier un texte | `js/translations.js` (version FR et EN) |
| Ajouter une compétence | La liste `<ul class="chips">` dans la section Skills d'`index.html` |
| Ajouter une étape de formation | Copier un `<li class="timeline-item">` dans `index.html` |
| Changer les couleurs | Variables `:root` en haut de `css/style.css` |

Pour ajouter une capture d'écran : placez l'image dans `assets/images/projects/` puis indiquez son chemin dans le champ `image` du projet (ex. `"assets/images/projects/projet-01.jpg"`).

Tant que l'e-mail, les liens ou les images ne sont pas renseignés, le site affiche des emplacements clairement identifiés et les boutons correspondants restent désactivés.

## Publier sur GitHub Pages

1. Créer un dépôt public nommé `fatima-zahra-portfolio` sur GitHub.
2. Envoyer les fichiers :
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio"
   git branch -M main
   git remote add origin https://github.com/<votre-pseudo>/fatima-zahra-portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment** → Source : *Deploy from a branch* → branche `main`, dossier `/ (root)` → **Save**.
4. Après une ou deux minutes, le site est disponible à l'adresse `https://<votre-pseudo>.github.io/fatima-zahra-portfolio/`.
5. Vérifier en ligne : images, CSS, JavaScript, bouton FR / EN, menu mobile et liens.
6. Ajouter l'adresse du site sur LinkedIn (section *Coordonnées* ou *À la une / Featured*).

## Accessibilité

Balises sémantiques, lien d'accès rapide au contenu, navigation au clavier, attributs `aria`, textes alternatifs, contrastes vérifiés et respect de la préférence système « réduire les animations ».

## Auteure

Fatima Zahra El Bouti — *Learning • Creating • Growing*
