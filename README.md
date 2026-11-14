# Portfolio — Fy Tia Olivier

Portfolio professionnel statique en français, construit sans framework ni dépendances de build. Il peut être hébergé sur GitHub Pages ou sur tout hébergeur de sites statiques.

## Structure

```text
.
├── CV/
│   └── cv.pdf
├── api/
│   └── contact.js
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── contact.js
│   └── scroll.js
└── assets/
    └── images/
        ├── logo.svg
        ├── profile.png
        └── profile.webp
```

## Prévisualisation locale

Ouvrir `index.html` dans un navigateur. Pour utiliser un serveur local :

```sh
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

Le formulaire appelle une fonction serverless Vercel dans `api/contact.js`. Le serveur transmet les messages à Resend ; la clé API n’est jamais stockée dans le dépôt. Le serveur local Python ne traite pas cette fonction ; utilisez `vercel dev` avec les variables configurées, ou testez le site déployé.

## Publication sur GitHub Pages

1. Créer un dépôt GitHub public (par exemple `fytiaolivier03.github.io`) et y envoyer tous les fichiers du projet, y compris les dossiers `css/` et `assets/`.
2. Dans **Settings → Pages**, choisir **Deploy from a branch**, sélectionner `main` et le dossier `/ (root)`, puis enregistrer.
3. GitHub Pages publiera le site à `https://fytiaolivier03.github.io/` une fois le déploiement terminé.

## Contact

Le formulaire transmet les messages à `fytiaolivier@gmail.com` via Resend. Dans **Vercel → Project Settings → Environment Variables**, configurez `RESEND_API_KEY` et `RESEND_FROM_EMAIL`, puis redéployez le projet. L’adresse d’expédition doit être vérifiée dans Resend. Ne mettez jamais la clé API dans le code ou dans le dépôt. Cette fonction ne s’exécute pas sur GitHub Pages.