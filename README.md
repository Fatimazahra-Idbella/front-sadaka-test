# 🤝 SADAKA — Plateforme de Gestion Collaborative des Dons

Une application web moderne pour connecter les donateurs généreux avec les personnes dans le besoin au Maroc, avec géolocalisation avancée et gestion administrative complète.

## 📋 Vue d'Ensemble

**SADAKA** s'inscrit dans le cadre de l'**entrepreneuriat social** et propose une solution collaborative pour :
- **Déclarer** des dons avec localisation précise
- **Visualiser** les dons sur une carte interactive
- **Filtrer** selon catégorie, distance, date
- **Gérer** les utilisateurs et valider les annonces
- **Exploiter** les données avec statistiques détaillées

## 🎯 Objectifs Principaux

1. ✅ Mettre à disposition du grand public une application pour déclarer et bénéficier des dons
2. ✅ Développer une plateforme de gestion utilisateurs et d'approbation des annonces
3. ✅ Exploiter les données géographiques avec un SIG web complet
4. ✅ Créer une interface administrative pour la validation et la modération

## 🏗️ Architecture du Projet

SADAKA comprend **3 volets principaux** :

### 📱 Volet 1: Gestion de Projet
- Organisation de l'équipe avec chef de projet
- Attribution des tâches (Mobile, Web, Données)
- Suivi des jalons et livrables

### 🗺️ Volet 2: Données Géographiques
- **Couches de base** : Découpage administratif (12 régions marocaines)
- **Services publics** : OpenStreetMap, données cartographiques
- **Fonds cartographiques** : Web & Locaux avec Leaflet
- **Couches d'analyse** : Visualisation des dons par région

### 📲 Volet 3: Applications

#### **Partie Mobile** (À venir)
- Création de compte (Nom, Prénom, Téléphone, Email, Photo)
- Déclaration de dons (Catégorie, Quantité, Description, Photos, Localisation)
- Espace utilisateur avec liste des demandeurs
- Géolocalisation sur carte
- Newsletter

#### **Partie Web - Public**
- ✅ **Accueil** : Présentation générale de la plateforme
- ✅ **Tableau** : Liste des dons avec filtres avancés
- ✅ **SIG** : Géolocalisation des dons avec marqueurs
- ✅ **Statistiques** : Tableau de bord avec données agrégées
- ✅ **Filtres dynamiques** : Catégorie, Localisation, Distance, Date

#### **Partie Web - Administration**
- ✅ **Accueil** : Présentation générale
- ✅ **Tableau** : Gestion annonces en attente
- ✅ **Validation/Rejet** : Approbation avec motif de rejet
- ✅ **Gestion Utilisateurs** : CRUD complet
- ✅ **Newsletter** : Gestion des abonnés
- ✅ **Export/Import** : Sauvegarde et restauration données JSON
- ✅ **Statistiques avancées** : Rapports détaillés

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- npm 9+

### Installation

```bash
# Cloner le projet
cd frontend-web

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le serveur démarre sur **http://localhost:5173**

### Scripts NPM

```bash
npm run dev        # Développement (Vite)
npm run build      # Build production
npm run preview    # Aperçu du build
```

## 📦 Pile Technologique

| Technologie | Version | Usage |
|------------|---------|-------|
| **React** | 18.3.1 | Framework UI |
| **TypeScript** | 5.6.3 | Typage statique |
| **Vite** | 5.4.10 | Build tool |
| **Ant Design** | 5.20.2 | Composants UI |
| **React Router** | 6.26.2 | Routage |
| **Axios** | 1.7.7 | HTTP Client |
| **Leaflet** | 1.9.4 | Cartographie |
| **React-Leaflet** | 4.2.1 | Binding React-Leaflet |

## 📁 Structure du Projet

```
src/
├── components/           # Composants réutilisables
│   ├── AppLayout.tsx    # Header, Menu, Footer
│   ├── MapView.tsx      # Carte Leaflet interactive
│   ├── ProtectedRoute.tsx # Protection des routes
│   └── ErrorBoundary.tsx
├── context/
│   └── AuthContext.tsx  # Authentification globale
├── pages/               # Pages principales
│   ├── Home.tsx         # 🏠 Accueil
│   ├── Announcements.tsx     # 📋 Liste des annonces
│   ├── Map.tsx          # 🗺️ Carte interactive
│   ├── Dashboard.tsx    # 📊 Statistiques
│   ├── Admin.tsx        # ⚙️ Panneau admin
│   ├── Conformance.tsx  # 📋 Conformité cahier des charges
│   ├── CreateAnnouncement.tsx # ➕ Créer annonce
│   ├── MyAnnouncements.tsx # 👤 Mes annonces
│   ├── Login.tsx        # 🔐 Connexion
│   ├── Register.tsx     # 📝 Inscription
│   └── Newsletter.tsx   # 📧 Newsletter
├── data/
│   └── moroccanCommunes.ts # 60+ villes marocaines
├── utils/
│   ├── api.ts           # Axios + intercepteurs
│   ├── mock.ts          # Simulation données
│   ├── roles.ts         # RBAC (Rôles & Permissions)
│   ├── categories.ts    # 🏷️ Catégories de dons
│   ├── donationStatus.ts # 📊 Statuts annonces
│   ├── constants.ts     # ⚙️ Constantes
│   └── ...
├── types/
│   ├── leaflet.d.ts    # Types Leaflet
│   └── entities.ts     # Types entités métier
├── styles/
│   └── index.css
├── App.tsx             # Router principal
└── main.tsx            # Entry point
```

## 🔐 Système d'Authentification

### Rôles Disponibles
- **ADMIN** : Accès complet + modération
- **MODERATOR** : Approbation annonces + statistiques
- **USER** : Création dons + intérêts

### Permissions

**ADMIN** : manage_users, manage_announcements, approve_announcements, reject_announcements, manage_newsletter, view_statistics, view_dashboard, access_admin_panel

**MODERATOR** : approve_announcements, reject_announcements, view_statistics, view_dashboard

**USER** : create_announcement, delete_own_announcement, express_interest, view_announcements, filter_announcements

## 🗺️ Couverture Géographique

SADAKA couvre **12 régions du Maroc** avec 60+ communes :

- Casablanca-Settat
- Rabat-Salé-Kénitra
- Fès-Meknès
- Marrakech-Safi
- Tanger-Tétouan-Al Hoceïma
- Oriental
- Souss-Massa
- Béni Mellal-Khénifra
- Drâa-Tafilalet
- Guelmim-Oued Noun
- Laâyoune-Sakia El Hamra
- Dakhla-Oued Ed-Dahab

## 🎁 Catégories de Dons

- 🍎 **Nourriture** (FOOD)
- 👕 **Vêtements** (CLOTHES)
- 💊 **Médicaments** (MEDICINE)
- 📦 **Autres** (OTHER)

## 📊 Statuts des Annonces

- ⏳ **PENDING** : En attente de validation
- ✅ **APPROVED** : Approuvée et visible
- ❌ **REJECTED** : Rejetée avec motif
- 🔄 **PARTIALLY_DONATED** : Partiellement donnée
- 🎁 **DONATED** : Complètement donnée

## 🔌 WebService & API

### Responsabilités
- Communication Mobile ↔ Backend
- Identification instances mobiles (IMEI, Serial)
- Gestion utilisateurs (inscription, authentification)
- Validation/rejet annonces
- Récupération données filtrées
- Persistance localStorage

### Endpoints Principaux
```
POST   /auth/login              # Connexion
POST   /auth/register           # Inscription
GET    /auth/me                 # Infos utilisateur
GET    /donations               # Liste annonces
POST   /donations               # Créer annonce
POST   /donations/:id/approve   # Valider annonce
POST   /donations/:id/reject    # Rejeter annonce
GET    /statistics              # Statistiques
GET    /users                   # Liste utilisateurs
GET    /newsletter/subscribers  # Abonnés newsletter
```

## 🧪 Système de Mocks

Le projet fonctionne **sans backend** grâce au système de mocks intégré :

- **localStorage** : Persistence des données
- **VITE_USE_MOCKS=1** : Activé par défaut
- **Fallback automatique** : Si backend indisponible

### Variables d'Environnement

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_PROXY_TARGET=http://localhost:8080
VITE_USE_MOCKS=1                      # Activer mocks
VITE_APP_NAME=SADAKA
VITE_APP_VERSION=0.1.0
```

## 🎨 Fonctionnalités Principales

### 📍 Géolocalisation
- Marqueurs colorés par catégorie
- Zoom automatique sur filtres appliqués
- Pop-ups avec détails annonces
- Support OpenStreetMap

### 🔍 Filtrage Avancé
- Recherche texte (titre, description)
- Filtre catégorie
- Filtre communes (multi-sélection)
- Plage dates personnalisée
- Rayon distance (0-50 km)
- Synchronisation filtres ↔ carte

### 📊 Tableau de Bord
- Statistiques en temps réel
- Répartition par catégorie
- Taux d'approbation
- Évolution temporelle
- Export rapports

### ✅ Gestion Administration
- Queue validation annonces
- Motifs de rejet prédéfinis
- Gestion utilisateurs (CRUD)
- Newsletter (subscribe/unsubscribe)
- Import/Export JSON

## 🔒 Sécurité

- ✅ JWT pour authentification
- ✅ localStorage pour tokens
- ✅ Intercepteurs Axios
- ✅ Routes protégées
- ✅ RBAC (Role-Based Access Control)
- ✅ Validation formulaires

## 📱 Responsive Design

- Mobile-first avec Ant Design
- Breakpoints : xs, sm, md, lg, xl
- Grille flexible
- Navigation adaptée

## 🚀 Performance

- Build optimisé Vite
- Code splitting automatique
- Lazy loading routes
- Caching localStorage
- Compression gzip

## 📝 Utilisation

### Créer une Annonce de Don
1. Se connecter ou créer un compte
2. Accéder à "Créer une annonce"
3. Remplir formulaire (obligatoire : **)
4. Soumettre pour validation
5. Admin valide/rejette avec motif

### Visualiser les Dons
1. Accéder à "Annonces" ou "Carte"
2. Appliquer filtres (catégorie, distance, etc.)
3. Cliquer sur annonce pour détails
4. Visualiser sur carte
5. Exprimer intérêt si connecté

### Admin - Valider Annonces
1. Accéder à "Admin"
2. Voir queue annonces en attente
3. Approuver ou rejeter avec motif
4. Gérer utilisateurs
5. Consulter statistiques

## 🛠️ Maintenance

### Nettoyer localStorage
```javascript
// Dans console navigateur
localStorage.clear();
location.reload();
```

### Exporter Données
- Accéder à Admin
- Cliquer "Exporter Données"
- Fichier JSON téléchargé

### Importer Données
- Accéder à Admin
- Cliquer "Importer Données"
- Sélectionner fichier JSON

## 🤝 Contribution

Les contributions sont bienvenues ! Veuillez :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commiter les changements (`git commit -m 'Add AmazingFeature'`)
4. Pousser vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

Ce projet est sous license MIT - voir le fichier [LICENSE](./LICENSE) pour détails.

## 👥 Équipe

SADAKA est développé dans le cadre d'un projet d'entrepreneuriat social.

- 👨‍💼 **Chef de Projet** : Gestion générale
- 👨‍💻 **Développeur Mobile** : Application mobile
- 👩‍💻 **Développeur Web** : Plateforme web & admin
- 👨‍🔬 **Data Manager** : Données géographiques

## 📞 Support

Pour toute question ou problème :
- 📧 Email : support@sadaka.ma
- 💬 Issues GitHub : [GitHub Issues](https://github.com/sadaka/issues)
- 📱 WhatsApp : Contacter l'équipe

---

**Faisons ensemble une différence dans notre communauté ! 🌱✨**
