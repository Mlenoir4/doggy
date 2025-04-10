# Projet: (Nom à définir)

Cette plateforme a pour objectif de mettre en relation des particuliers avec des éducateurs canins qualifiés. L'application vise à garantir la qualité des services proposés en mettant en avant les meilleurs éducateurs grâce à un système d'évaluation fiable.

## Objectifs

- Faciliter la recherche d'un éducateur canin qualifié.
- Assurer la transparence grâce aux avis et évaluations des utilisateurs.
- Offrir une plateforme simple et intuitive.
- Permettre aux éducateurs de se démarquer par la qualité de leurs prestations.

## Fonctionnalités principales

### 1. Gestion des utilisateurs

- Inscription et connexion (Email/MDP, OAuth via Google/Facebook).
- Profils utilisateurs (particuliers et éducateurs).
- Système de notation et avis.

### 2. Gestion des éducateurs

- Création et gestion de profil détaillé (bio, certifications, services, prix, zone géographique).

### 3. Recherche et mise en relation

- Filtrage par localisation, spécialité, notation, prix.
- Système de mise en avant des meilleurs éducateurs.
- Messagerie interne pour communication.

### 4. Sécurité et modération

- Vérification des profils éducateurs (certifications, diplômes).
- Signalement des faux avis et abus.

## Architecture Technique

### 1. Front-End

  - **Technologie :** React (Vite) + TailwindCSS
  - **Pages principales :**
    - Accueil
    - Inscription/Connexion
    - Recherche d’éducateurs
    - Profil utilisateur
    - Messagerie interne

### 2. Back-End

  - **Technologie :** Fastify (Node.js)
  - **Base de données :** MongoDB
  - **API REST :**
    - Authentification JWT
    - Gestion des utilisateurs et éducateurs
    - Gestion des avis et notations