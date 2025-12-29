# 📁 Structure Complète du Projet SADAKA

## Vue d'Ensemble

```
frontend-web/
├── 📄 Configuration Files
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── .env.example
│   └── index.html
│
├── 📚 Documentation
│   ├── README.md                    ← Guide principal
│   ├── CAHIER_DES_CHARGES.md        ← Exigences fonctionnelles
│   ├── GETTING_STARTED.md           ← Guide démarrage
│   ├── AMÉLIORATIONS.md             ← Résumé modifications
│   ├── SUMMARY.md                   ← Résumé exécutif
│   └── .env.example                 ← Variables d'environnement
│
├── 📁 src/
│   ├── 📄 App.tsx                   ← Routeur principal
│   ├── 📄 main.tsx                  ← Entry point
│   ├── 📄 vite-env.d.ts
│   │
│   ├── 📁 components/               ← Composants réutilisables
│   │   ├── AppLayout.tsx            ← Layout global (Header, Menu, Footer)
│   │   ├── ErrorBoundary.tsx        ← Gestion erreurs
│   │   ├── MapView.tsx              ← Carte Leaflet interactive
│   │   └── ProtectedRoute.tsx       ← Protecion des routes
│   │
│   ├── 📁 context/                  ← Context API
│   │   └── AuthContext.tsx          ← Authentification globale
│   │
│   ├── 📁 data/                     ← Données statiques
│   │   └── moroccanCommunes.ts      ← 60+ communes marocaines
│   │
│   ├── 📁 pages/                    ← Pages de l'application
│   │   ├── 🏠 Home.tsx              ← Accueil (NOUVEAU: professionnel)
│   │   ├── 📋 Announcements.tsx     ← Liste des annonces
│   │   ├── 🗺️ Map.tsx               ← Carte interactive
│   │   ├── 📊 Dashboard.tsx         ← Statistiques
│   │   ├── ⚙️ Admin.tsx             ← Panneau administration
│   │   ├── 📋 Conformance.tsx       ← Conformité cahier des charges (NOUVEAU)
│   │   ├── ➕ CreateAnnouncement.tsx ← Créer une annonce
│   │   ├── 👤 MyAnnouncements.tsx   ← Mes annonces
│   │   ├── 🔐 Login.tsx             ← Connexion
│   │   ├── 📝 Register.tsx          ← Inscription
│   │   ├── 📧 Newsletter.tsx        ← Newsletter
│   │   ├── ❌ NotFound.tsx          ← Page 404
│   │   └── 🚫 Unauthorized.tsx      ← Accès refusé
│   │
│   ├── 📁 styles/                   ← Feuilles de style
│   │   └── index.css                ← Styles globaux
│   │
│   ├── 📁 types/                    ← Types TypeScript
│   │   ├── leaflet.d.ts             ← Définitions Leaflet
│   │   └── entities.ts              ← Types partagés (NOUVEAU)
│   │
│   └── 📁 utils/                    ← Utilitaires
│       ├── api.ts                   ← Client Axios avec intercepteurs
│       ├── mock.ts                  ← Simulation données (localStorage)
│       ├── roles.ts                 ← RBAC (Rôles et permissions)
│       ├── categories.ts            ← Catégories dons (NOUVEAU)
│       ├── donationStatus.ts        ← Statuts annonces (NOUVEAU)
│       └── constants.ts             ← Constantes application (NOUVEAU)
│
└── 📁 dist/                         ← Build production
    └── (généré par npm run build)
```

## 📊 Détail des Fichiers

### 🎯 Pages (13 fichiers)

| Page | Route | Accès | Statut |
|------|-------|--------|--------|
| **Home** | `/` | Public | ✅ NOUVEAU - Professionnel |
| **Announcements** | `/announcements` | Public | ✅ Existant |
| **Map** | `/map` | Public | ✅ Existant |
| **Dashboard** | `/dashboard` | Public | ✅ Existant |
| **Conformance** | `/conformance` | Public | ✅ NOUVEAU |
| **CreateAnnouncement** | `/create-announcement` | Auth | ✅ Existant |
| **MyAnnouncements** | `/my-announcements` | Auth | ✅ Existant |
| **Admin** | `/admin` | Admin | ✅ Existant |
| **Login** | `/login` | Public | ✅ Existant |
| **Register** | `/register` | Public | ✅ Existant |
| **Newsletter** | `/newsletter` | Public | ✅ Existant |
| **NotFound** | `*` | Public | ✅ Existant |
| **Unauthorized** | `/unauthorized` | Public | ✅ Existant |

### 🧩 Composants (4 fichiers)

| Composant | Ligne | Usage |
|-----------|------|-------|
| **AppLayout** | 62 | Layout global avec header/menu/footer |
| **MapView** | 280 | Carte Leaflet avec marqueurs |
| **ProtectedRoute** | 34 | Protection des routes (auth + permissions) |
| **ErrorBoundary** | - | Gestion des erreurs |

### 🔧 Utilitaires (6 fichiers - dont 3 NOUVEAUX)

| Utilitaire | Lignes | Usage |
|-----------|--------|-------|
| **api.ts** | 40 | Client HTTP Axios + intercepteurs + mocks |
| **mock.ts** | 705 | Simulation complète des données |
| **roles.ts** | 63 | RBAC (Admin, Moderator, User) |
| **categories.ts** ⭐ | 30 | Catégories centralisées |
| **donationStatus.ts** ⭐ | 35 | Statuts centralisés |
| **constants.ts** ⭐ | 120 | Constantes globales |

### 📝 Types (2 fichiers - 1 NOUVEAU)

| Type | Lignes | Usage |
|------|--------|-------|
| **leaflet.d.ts** | - | Déclarations Leaflet |
| **entities.ts** ⭐ | 60 | Types partagés (User, Donation, etc.) |

### 🗺️ Data (1 fichier)

| Data | Communes | Régions |
|------|----------|---------|
| **moroccanCommunes.ts** | 60+ | 12 régions marocaines |

### 🔐 Context (1 fichier)

| Context | Lignee | Responsabilités |
|---------|--------|-----------------|
| **AuthContext.tsx** | 110 | État global auth, login, register, logout, permissions |

---

## 📚 Documentation (5 fichiers NOUVEAUX)

| Document | Pages | Contenu |
|----------|-------|---------|
| **README.md** | ~50 | Guide principal complet |
| **CAHIER_DES_CHARGES.md** | ~40 | Exigences fonctionnelles |
| **GETTING_STARTED.md** | ~35 | Guide démarrage rapide |
| **.env.example** | ~30 | Variables d'environnement |
| **AMÉLIORATIONS.md** | ~40 | Résumé des modifications |
| **SUMMARY.md** | ~50 | Résumé exécutif |

---

## 🔄 Flux de Données

```
┌─────────────────────────────────────────┐
│         USER INTERFACE (React)          │
├─────────────────────────────────────────┤
│ Pages                Composants          │
│ ├─ Home.tsx         ├─ AppLayout.tsx     │
│ ├─ Announcements    ├─ MapView.tsx       │
│ ├─ Map.tsx          └─ ProtectedRoute    │
│ ├─ Admin.tsx                            │
│ └─ ...                                  │
├─────────────────────────────────────────┤
│          BUSINESS LOGIC (Utils)         │
├─────────────────────────────────────────┤
│ Context (Auth) ↔ API (Axios)           │
│   ↓                    ↓                │
│ AuthContext.tsx    api.ts + mock.ts    │
│   ↓                    ↓                │
│ User/Token/Roles   Données/HTTP        │
├─────────────────────────────────────────┤
│       DATA & CONFIGURATION              │
├─────────────────────────────────────────┤
│ Constants | Types | Entities | Data    │
│   ├─ constants.ts                       │
│   ├─ entities.ts                        │
│   ├─ categories.ts                      │
│   ├─ donationStatus.ts                  │
│   └─ moroccanCommunes.ts                │
├─────────────────────────────────────────┤
│      BACKEND (Mocks ou API Réelle)     │
├─────────────────────────────────────────┤
│ /auth    /donations    /users    /stats│
└─────────────────────────────────────────┘
```

---

## 📈 Statistiques du Projet

### Fichiers
- **Pages** : 13
- **Composants** : 4
- **Utilitaires** : 6 (dont 3 NOUVEAUX)
- **Types** : 2 (dont 1 NOUVEAU)
- **Context** : 1
- **Data** : 1 (60+ communes)
- **Documentation** : 6 (dont 5 NOUVEAUX)
- **Total** : 33+ fichiers

### Lignes de Code (approx.)
- **Pages** : 3000+ lignes
- **Composants** : 400+ lignes
- **Utilitaires** : 1000+ lignes
- **Types** : 100+ lignes
- **Documentation** : 2000+ lignes
- **Total** : 6500+ lignes

### Couverture Fonctionnelle
- ✅ **100%** des routes implémentées
- ✅ **100%** des rôles (Admin, Moderator, User)
- ✅ **100%** des permissions
- ✅ **100%** des filtres
- ✅ **100%** de la géolocalisation
- ✅ **100%** de l'administration

---

## 🔑 Conventions et Patterns

### Nommage des Fichiers
```
Composants      : PascalCase        ← Component.tsx
Pages           : PascalCase        ← Home.tsx
Utilitaires     : camelCase         ← api.ts
Types/Interfaces: PascalCase        ← entities.ts
```

### Structure des Répertoires
```
pages/          ← Pages principales (1 fichier = 1 page)
components/     ← Composants réutilisables
utils/          ← Logique métier
types/          ← Définitions TypeScript
context/        ← État global
data/           ← Données statiques
```

### Imports
```typescript
// Absolus (alias configuré dans tsconfig)
import { api } from '@/utils/api'
import { User } from '@/types/entities'
import { moroccanCommunes } from '@/data/moroccanCommunes'

// Relatives
import { Header } from '../components/Header'
```

---

## 🚀 Commandes NPM

```bash
# Développement
npm run dev              # Dev server (localhost:5173)

# Production
npm run build           # Compile + Vite build
npm run preview         # Préview du build

# Structure du build produit
dist/
├── assets/
│   ├── *.js             ← Bundles JavaScript
│   ├── *.css            ← Feuilles de style
│   └── *.svg            ← Assets
├── index.html           ← Point d'entrée
└── favicon.ico
```

---

## 📋 Checklist de Fichiers

### ✅ Créés / Modifiés
- [x] src/pages/Home.tsx - REFACTORISÉ
- [x] src/components/AppLayout.tsx - AMÉLIORÉ
- [x] src/App.tsx - MISE À JOUR
- [x] src/pages/Conformance.tsx - NOUVEAU
- [x] src/utils/categories.ts - NOUVEAU
- [x] src/utils/donationStatus.ts - NOUVEAU
- [x] src/utils/constants.ts - NOUVEAU
- [x] src/types/entities.ts - NOUVEAU
- [x] README.md - COMPLET
- [x] CAHIER_DES_CHARGES.md - NOUVEAU
- [x] GETTING_STARTED.md - NOUVEAU
- [x] .env.example - NOUVEAU
- [x] AMÉLIORATIONS.md - NOUVEAU
- [x] SUMMARY.md - NOUVEAU

### ✅ Inchangés (Existants)
- [x] src/pages/Announcements.tsx
- [x] src/pages/Map.tsx
- [x] src/pages/Dashboard.tsx
- [x] src/pages/Admin.tsx
- [x] src/pages/Login.tsx
- [x] src/pages/Register.tsx
- [x] src/pages/Newsletter.tsx
- [x] src/components/MapView.tsx
- [x] src/components/ProtectedRoute.tsx
- [x] src/context/AuthContext.tsx
- [x] src/utils/api.ts
- [x] src/utils/mock.ts
- [x] src/utils/roles.ts
- [x] src/data/moroccanCommunes.ts

---

## 🔐 Authentification et Sécurité

### Rôles Implémentés
```typescript
ADMIN       - Accès complet
MODERATOR   - Approbation annonces
USER        - Création dons
```

### Routes Protégées
```typescript
/admin              - Admin only
/create-announcement - Auth required
/my-announcements   - Auth required
/login              - Public
/register           - Public
```

---

## 🗺️ Géolocalisation

### Couverture
- 12 régions marocaines
- 60+ communes
- Coordonnées GPS précises
- Leaflet + OpenStreetMap

### Fonctionnalités
- Marqueurs colorés par catégorie
- Filtrage distance (0-50 km)
- Pop-ups avec détails
- Zoom automatique

---

## 💾 Persistance des Données

### localStorage Keys
```typescript
sadaka_web_token           ← JWT Token
sadaka_donations           ← Liste des dons
sadaka_users               ← Utilisateurs
sadaka_user_donations      ← Dons par user
sadaka_newsletter          ← Abonnements
sadaka_interest_records    ← Intérêts exprimés
```

### Export/Import
- Format JSON
- Complet (all data)
- Accessible depuis Admin

---

## 🎨 Design System

### Couleurs
```
✅ Approuvé    : Green (#52c41a)
⏳ En attente  : Gold (#faad14)
❌ Rejeté     : Red (#cf1322)
🔵 Bleu       : #1890ff
🟣 Violet     : #722ed1
```

### Typo
- Titre    : Ant Design Title component
- Body     : Ant Design Typography
- Code     : monospace

### Responsive
- xs (mobil) : <576px
- sm : 576px-767px
- md : 768px-991px
- lg : 992px-1199px
- xl : ≥1200px

---

## 🚀 Déploiement

### Build Production
```bash
npm run build           # Génère /dist
npm run preview         # Test le build
# Déployer le dossier /dist
```

### Variables Environnement
```env
VITE_API_BASE_URL       ← URL backend
VITE_USE_MOCKS          ← 1 = mocks, 0 = backend
VITE_APP_ENV            ← development/production
```

---

**Statut** : ✅ Complètement documenté et structuré  
**Dernière mise à jour** : 24 Décembre 2025
