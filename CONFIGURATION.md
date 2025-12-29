# 🏗️ Configuration et Fichiers Racine

## 📁 Fichiers de Configuration Principaux

### 📦 `package.json`
Définit les dépendances et scripts du projet.

**Scripts disponibles :**
```bash
npm run dev              # Développement (Vite dev server)
npm run build           # Build production
npm run preview         # Prévisualiser le build
```

**Dépendances principales :**
- React 18.3.1
- Ant Design 5.20.2
- Leaflet 1.9.4
- React Router 6.26.2
- Axios 1.7.7
- TypeScript 5.6.3

### 🔧 `vite.config.ts`
Configuration du serveur de développement et du build Vite.

**Configurations clés :**
```typescript
- Port: 5173
- Auto-open: true
- Proxy API: /api → VITE_PROXY_TARGET
- Plugin React pour JSX
```

### 📝 `tsconfig.json`
Configuration TypeScript.

**Paramètres importants :**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

### 🌐 `.env.example`
Template des variables d'environnement.

**À dupliquer en `.env.local` pour développement :**
```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_PROXY_TARGET=http://localhost:8080
VITE_USE_MOCKS=1
VITE_APP_NAME=SADAKA
VITE_APP_VERSION=0.1.0
VITE_APP_ENV=development
```

### 🌐 `index.html`
Point d'entrée HTML.

**Contient :**
- Div root pour React
- Import vite
- Leaflet CSS
- Métadonnées

---

## 📚 Fichiers de Documentation (Nouveaux)

### 📖 `README.md` ⭐ COMPLÈTEMENT REFONDU
- Vue d'ensemble professionnelle
- Objectifs principaux (3 points)
- Architecture complète (3 volets)
- Guide démarrage rapide
- Pile technologique
- Structure du projet
- Système d'authentification
- Fonctionnalités détaillées
- Dépannage
- 450+ lignes

### 📋 `CAHIER_DES_CHARGES.md` ⭐ NOUVEAU
- Objet et objectifs
- 3 volets (Projet, Données, Applications)
- Exigences mobiles détaillées
- Exigences web public/admin
- Couverture géographique (12 régions)
- Spécifications techniques
- Scénarios utilisateurs complets
- 300+ lignes

### 🚀 `GETTING_STARTED.md` ⭐ NOUVEAU
- Démarrage en 5 minutes
- Scénarios de test prédéfinis
- Comptes test (Admin, Moderator, User)
- Commandes NPM utiles
- Dépannage courant
- Prochaines étapes
- 250+ lignes

### ⚙️ `.env.example` ⭐ NOUVEAU
- Variables d'environnement documentées
- Exemples dev et prod
- Description de chaque variable
- Bonnes pratiques de sécurité
- Guide dépannage
- 200+ lignes

### ✨ `AMÉLIORATIONS.md` ⭐ NOUVEAU
- Détail de chaque amélioration
- Avant/après pour chaque modification
- Nouveaux fichiers créés
- Nouveaux utilitaires
- Métriques de completion
- Prochaines étapes recommandées
- 350+ lignes

### 📊 `SUMMARY.md` ⭐ NOUVEAU
- Résumé exécutif complet
- Modifications principales
- Fichiers créés vs modifiés
- Améliorations d'interface
- Couverture fonctionnelle
- Statistiques du projet
- 200+ lignes

### 📁 `PROJECT_STRUCTURE.md` ⭐ NOUVEAU
- Vue d'ensemble complète
- Détail de chaque dossier
- Détail de chaque fichier
- Statistiques du code
- Conventions et patterns
- Checklist de fichiers
- 300+ lignes

### 📑 `INDEX.md` ⭐ NOUVEAU
- Index complet de la documentation
- Navigation par use case
- Documentation par rôle
- FAQ rapide
- Liens rapides
- 200+ lignes

---

## 🚫 Fichiers à Ignorer

### `.gitignore`
Liste des fichiers non versionnés.

**Contient :**
- node_modules/
- dist/
- .env.local
- .DS_Store
- *.swp
- .idea/

### `.idea/`
Configuration IDE IntelliJ/WebStorm.

### `node_modules/`
Dépendances npm (généré automatiquement).

### `tsconfig.tsbuildinfo`
Cache de compilation TypeScript.

---

## 📦 Fichiers Auto-Générés

### `package-lock.json`
Lock file npm (versioning exact des dépendances).

**À committer dans git :**
```bash
git add package-lock.json
```

### `dist/` (après npm run build)
Build de production.

**À ignorer dans git (déjà dans .gitignore) :**
```
dist/
├── assets/
│   ├── *.js
│   ├── *.css
│   └── *.svg
├── index.html
└── favicon.ico
```

---

## 📚 Autres Fichiers de Documentation (Existants)

### Documents Contextuels
Autres fichiers MD (ancienne documentation) :
- `CARTE_MAROC.md`
- `FRONTEND_OVERVIEW.md`
- `TROUBLESHOOTING.md`
- `CONFORMITE_CAHIER_CHARGES.md`
- `GUIDE_PRESENTATION.md`
- etc.

**Note** : Ces fichiers peuvent être archivés ou supprimés. Les nouveaux fichiers doc sont :
- README.md ✅ Nouveau/Mis à jour
- CAHIER_DES_CHARGES.md ✅ Nouveau
- GETTING_STARTED.md ✅ Nouveau
- PROJECT_STRUCTURE.md ✅ Nouveau
- INDEX.md ✅ Nouveau
- AMÉLIORATIONS.md ✅ Nouveau
- SUMMARY.md ✅ Nouveau
- .env.example ✅ Nouveau/Mis à jour

---

## 📋 Checklist de Configuration

### Développement Local
- [x] `npm install` - Dépendances installées
- [x] `.env.local` créé (copie de `.env.example`)
- [x] `VITE_USE_MOCKS=1` pour mocks
- [x] `npm run dev` fonctionne
- [x] http://localhost:5173 accessible

### Build Production
- [ ] `.env.production` créé
- [ ] `VITE_USE_MOCKS=0`
- [ ] `VITE_API_BASE_URL` pointant backend prod
- [ ] `npm run build` sans erreurs
- [ ] `npm run preview` vérifie le build

### Déploiement
- [ ] Secrets configurés (GitHub Actions, etc.)
- [ ] CI/CD setup
- [ ] Monitoring
- [ ] Logs

---

## 🔄 Flux de Développement

### 1. Configuration Locale
```bash
# Cloner et entrer
cd frontend-web

# Installer
npm install

# Copier template env
cp .env.example .env.local

# Modifier si nécessaire
# VITE_USE_MOCKS=1  (mocks activés par défaut)
# VITE_API_BASE_URL=http://localhost:8080/api
```

### 2. Développement
```bash
# Lancer dev server
npm run dev

# Modifier les fichiers
# Le navigateur se rafraîchit automatiquement (HMR)
```

### 3. Build & Test
```bash
# Compiler et builder
npm run build

# Prévisualiser le build
npm run preview
```

### 4. Déploiement
```bash
# Sur le serveur :
# 1. Copier dist/ → web root
# 2. Configurer .env en production
# 3. Setup proxy API si besoin
```

---

## 🔐 Sécurité

### Variables Sensibles
**À NE PAS committer** :
- `.env.local`
- `.env.production`
- Clés API
- Secrets

**À utiliser à la place** :
- GitHub Secrets pour CI/CD
- Environment variables du serveur
- Vault/Secret manager

### .gitignore
Déjà configuré pour ignorer les fichiers sensibles.

**Vérifier :**
```bash
git check-ignore .env.local    # Devrait être ignoré
```

---

## 📈 Performance et Optimisation

### Vite
- Fast HMR (Hot Module Replacement)
- Tree-shaking automatique
- Code splitting intelligent
- Préchargement des modules

### TypeScript
- Typage strict (tsconfig.json)
- Détection d'erreurs à la compilation
- IntelliSense dans l'IDE

### Ant Design
- Composants optimisés
- CSS-in-JS
- Thème configurable

### Leaflet
- Lazy loading de la carte
- Marqueurs rendus efficacement
- Zoom smoothed

---

## 🛠️ Maintenance

### Mise à Jour Dépendances
```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour mineures
npm update

# Mettre à jour majeures (avec attention)
npm install react@latest
```

### Nettoyage
```bash
# Supprimer node_modules et réinstaller
rm -r node_modules package-lock.json
npm install

# Nettoyer cache Vite
rm -r .vite
```

### Dépannage
Voir [GETTING_STARTED.md](./GETTING_STARTED.md) - Dépannage

---

## 📞 Support

### Ressources
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Ant Design Docs](https://ant.design)

### Documentation Locale
- [INDEX.md](./INDEX.md) - Navigation complète
- [README.md](./README.md) - Guide principal
- [GETTING_STARTED.md](./GETTING_STARTED.md) - Démarrage

---

## 🎊 Résumé

Tout est configuré et documenté pour démarrer rapidement :

1. ✅ `package.json` - Dépendances
2. ✅ `vite.config.ts` - Serveur dev
3. ✅ `tsconfig.json` - TypeScript
4. ✅ `.env.example` - Configuration
5. ✅ Documentation complète

**Prêt à démarrer ?**
```bash
npm install
npm run dev
```

---

**Dernière mise à jour** : 24 Décembre 2025  
**Version** : 0.1.0
