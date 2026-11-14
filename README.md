# Portfolio — Fy Tia Olivier

Portfolio professionnel statique en français, construit sans framework ni dépendances de build. Il peut être hébergé sur GitHub Pages ou sur tout hébergeur de sites statiques.

## Structure

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── scroll-reveal.js
└── assets/
    └── images/
        └── profile.png
```

## Prévisualisation locale

Ouvrir `index.html` dans un navigateur. Pour utiliser un serveur local :

```sh
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

Le formulaire de contact ne peut pas être envoyé en ouvrant directement `index.html` en `file://`. Il faut passer par un serveur local ou le site publié en HTTPS ; aucune soumission de test n’est faite depuis cet environnement.

## Publication sur GitHub Pages

1. Créer un dépôt GitHub public (par exemple `fytiaolivier03.github.io`) et y envoyer tous les fichiers du projet, y compris les dossiers `css/` et `assets/`.
2. Dans **Settings → Pages**, choisir **Deploy from a branch**, sélectionner `main` et le dossier `/ (root)`, puis enregistrer.
3. GitHub Pages publiera le site à `https://fytiaolivier03.github.io/` une fois le déploiement terminé.

## Contact

Le formulaire envoie les messages à `fytiaolivier@gmail.com` via FormSubmit. À la première soumission, FormSubmit envoie un e-mail de confirmation à cette adresse : il faut cliquer sur le lien de confirmation pour activer la réception des futurs messages. Les soumissions suivantes arrivent ensuite dans la boîte de réception. Le service traite les données du formulaire.

Le lien WhatsApp ouvre une conversation avec le numéro fourni au portfolio (`+261 34 90 798 94`). Le numéro et l’adresse e-mail sont donc visibles publiquement. Les liens directs e-mail (`mailto:`), LinkedIn et GitHub restent également disponibles.
