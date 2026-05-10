# 🦖 Chrome Dino Game - Version Modulaire

Une version moderne, fluide et entièrement modulaire du célèbre jeu du dinosaure de Google Chrome, développée en **Vanilla JavaScript** (sans frameworks).

## 🎮 Fonctionnalités

- **Moteur de jeu performant** : Utilise `requestAnimationFrame` pour un défilement fluide à 60 FPS.
- **Architecture Modulaire** : Code organisé par responsabilités (Entités, Managers, UI, Core).
- **Animations avancées** :
    - Dinosaure avec cycle de course et animation de saut.
    - Oiseaux avec battement d'ailes.
    - Sol défilant et nuages à parallaxe.
- **Système Audio complet** :
    - Musique de fond 8-bit rétro.
    - Bruitages pour le saut, la collision et les paliers de score.
- **Difficulté progressive** : La vitesse du jeu augmente tous les 100 points.
- **Persistance** : Sauvegarde automatique du meilleur score (High Score) via le `localStorage`.
- **Compatibilité** : Support du clavier (Espace/Flèche Haut) et des écrans tactiles.

## 📁 Structure du Projet

Le projet suit une structure organisée pour faciliter la maintenance et l'évolution :

```text
chrome-dino/
├── index.html          # Point d'entrée principal
├── css/                # Styles CSS divisés par composants
│   ├── dino.css        # Animations et styles du joueur
│   ├── obstacles.css   # Styles des cactus et oiseaux
│   └── ...
├── js/                 # Logique JavaScript (ES Modules)
│   ├── core/           # Moteur, boucle de jeu et collisions
│   ├── entities/       # Objets du jeu (Dino, Cactus, Bird, Cloud)
│   ├── managers/       # Gestionnaires (Score, Obstacles, Sons, Inputs)
│   └── ui/             # Gestion de l'interface (HUD, Écrans)
└── assets/             # Ressources multimédias
    ├── images/         # Sprites PNG
    └── sounds/         # Effets sonores et musique
```

## 🚀 Installation et Lancement

1. **Clonage / Téléchargement** : Récupérez l'ensemble des dossiers et fichiers.
2. **Lancement** : Comme le projet utilise des **ES Modules**, il est recommandé de l'ouvrir via un serveur local (ex: extension *Live Server* sur VS Code) ou de simplement ouvrir `index.html` dans un navigateur moderne (Chrome, Firefox, Edge).

## ⌨️ Commandes

- **ESPACE** ou **FLÈCHE HAUT** : Lancer le jeu / Sauter.
- **CLIC / TOUCHER** : Sauter (compatible mobile).

## 🛠️ Technologies utilisées

- **HTML5** & **CSS3** (Animations Keyframes).
- **Vanilla JavaScript** (ES6+).
- **Programmation Orientée Objet (POO)**.

---
Développé  pour le TP ICT_202.
