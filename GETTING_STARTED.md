# 🚀 Guide de Mise en Route - SADAKA

Ce guide vous aidera à démarrer avec SADAKA rapidement.

## ⚡ Démarrage en 5 Minutes

### 1️⃣ Cloner et Installer

```bash
# Aller dans le dossier
cd c:\Users\hp\Desktop\frontend-web

# Installer les dépendances
npm install

# Démarrer le serveur
npm run dev
```

### 2️⃣ Ouvrir dans le Navigateur

Vite ouvre automatiquement http://localhost:5173

Si ce n'est pas le cas, ouvrez manuellement.

### 3️⃣ Créer un Compte

- Cliquez sur "Créer un Compte" dans l'accueil
- Remplissez le formulaire
- Confirmez votre email

### 4️⃣ Tester les Fonctionnalités

**Public** :
- 👁️ Visiter "Annonces" pour voir les dons
- 🗺️ Aller sur "Carte" pour visualiser
- 📊 Consulter "Statistiques"

**Utilisateur Connecté** :
- ➕ "Créer une annonce" pour ajouter un don
- 👤 "Mes annonces" pour gérer ses dons

**Admin** (credentials test) :
- ⚙️ "Admin" pour valider les dons
- 👥 Gérer les utilisateurs
- 📧 Gérer la newsletter

---

## 🎮 Scénarios de Test

### Scénario 1: Créer et Valider une Annonce

```
1. Se connecter (Email: user@sadaka.ma, Pass: password)
2. Cliquer "Créer une annonce"
3. Remplir:
   - Titre: "Vêtements été"
   - Catégorie: "Vêtements"
   - Quantité: 10
   - Description: "Vêtements d'été en bon état"
   - Localisation: "Casablanca"
4. Soumettre
5. Se déconnecter
6. Se connecter en Admin (admin@sadaka.ma / password)
7. Aller dans "Admin"
8. Cliquer "Approuver" sur l'annonce créée
9. Aller sur "Annonces" - l'annonce est maintenant visible
```

### Scénario 2: Tester les Filtres

```
1. Aller sur "Annonces"
2. Appliquer filtres:
   - Catégorie: "Nourriture"
   - Distance: 20 km
   - Date: Dernier mois
3. Observer la liste filtrée
4. Aller sur "Carte"
5. Les marqueurs se mettent à jour automatiquement
6. Cliquer sur un marqueur pour voir détails
```

### Scénario 3: Exporter/Importer Données

```
1. Se connecter en Admin
2. Aller dans "Admin"
3. Cliquer "Exporter Données" (JSON téléchargé)
4. Cliquer "Importer Données"
5. Sélectionner le fichier JSON
6. Les données sont restaurées
```

---

## 🔐 Comptes de Test Prédéfinis

### Admin
- **Email** : admin@sadaka.ma
- **Mot de passe** : password
- **Rôle** : ADMIN
- **Accès** : Tout (Admin panel, validation, etc.)

### Modérateur
- **Email** : moderator@sadaka.ma
- **Mot de passe** : password
- **Rôle** : MODERATOR
- **Accès** : Approbation d'annonces, statistiques

### Utilisateur
- **Email** : user@sadaka.ma
- **Mot de passe** : password
- **Rôle** : USER
- **Accès** : Créer annonces, voir les autres

### Nouveau Compte
- Créez votre propre compte via l'inscription
- Email unique
- Motif de passe sécurisé

---

## 📁 Structure des Dossiers Importants

```
src/
├── pages/
│   ├── Home.tsx          ← Point d'entrée (Accueil)
│   ├── Announcements.tsx ← Liste des annonces
│   ├── Map.tsx           ← Carte interactive
│   ├── Admin.tsx         ← Panel administration
│   ├── Dashboard.tsx     ← Statistiques
│   ├── Conformance.tsx   ← Conformité cahier des charges
│   └── ...
├── components/
│   ├── AppLayout.tsx     ← Navigation globale
│   ├── MapView.tsx       ← Composant carte
│   └── ...
├── utils/
│   ├── api.ts            ← Configuration Axios
│   ├── mock.ts           ← Données simulées
│   ├── roles.ts          ← Gestion rôles
│   ├── categories.ts     ← Catégories dons
│   └── constants.ts      ← Constantes
└── data/
    └── moroccanCommunes.ts ← 60+ villes marocaines
```

---

## 🛠️ Commandes Utiles

```bash
# Développement
npm run dev                 # Démarrer dev server

# Production
npm run build              # Compiler TypeScript + Vite
npm run preview            # Prévisualiser le build

# Nettoyage
rm -r node_modules
npm install                # Réinstaller dépendances

# Vérification
npm list                   # Lister les packages
```

---

## 📝 Fichiers de Configuration

### vite.config.ts
Configuration du serveur de développement et du build.

**À modifier pour :**
- Changer le port (défaut: 5173)
- Configurer le proxy API
- Ajouter des plugins

### tsconfig.json
Configuration TypeScript.

**À modifier pour :**
- Ajouter des chemins d'importation alias
- Modifier le target ES
- Activer/désactiver des règles

### package.json
Dépendances et scripts du projet.

**À modifier pour :**
- Ajouter de nouveaux packages
- Créer nouveaux scripts
- Mettre à jour la version

---

## 🐛 Dépannage Courant

### Erreur : "Port 5173 déjà utilisé"
```bash
# Solution 1 : Utiliser un autre port
npm run dev -- --port 3000

# Solution 2 : Tuer le processus existant
# Windows: taskkill /PID [pid] /F
# Mac/Linux: kill -9 [pid]
```

### Erreur : "Cannot find module"
```bash
# Solution 1 : Réinstaller les dépendances
rm -r node_modules
npm install

# Solution 2 : Nettoyer le cache Vite
rm -r .vite
npm run dev
```

### Erreur : "API endpoint not found"
```bash
# Les mocks s'activent automatiquement
# Vérifier que VITE_USE_MOCKS=1 dans .env.local
```

### Page blanche au démarrage
```bash
# Solution 1 : Forcer la rechargement
Ctrl+Shift+Del (Windows) ou Cmd+Shift+Del (Mac)

# Solution 2 : Nettoyer localStorage
# Ouvrir DevTools → Application → localStorage → Clear All
```

---

## 📚 Ressources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Ant Design](https://ant.design)
- [Leaflet Documentation](https://leafletjs.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

## 🎯 Prochaines Étapes

Après le démarrage initial :

1. ✅ Explorer la plateforme
2. ✅ Créer/valider quelques annonces
3. ✅ Tester les filtres et la carte
4. ✅ Tester l'export/import
5. ✅ Lire la documentation détaillée
6. ✅ Examiner le code source
7. ✅ Personnaliser pour votre cas d'usage

---

## 💡 Conseils

- **Sauvegardez vos données** : Exportez régulièrement depuis Admin
- **Testez en incognito** : Pour tester plusieurs comptes
- **Utilisez DevTools** : F12 pour déboguer
- **Lire les console messages** : Indication d'erreurs utiles
- **Consulter les fichiers docs** : README, CAHIER_DES_CHARGES, etc.

---

## 🆘 Besoin d'Aide ?

1. Consultez [README.md](./README.md)
2. Consultez [CAHIER_DES_CHARGES.md](./CAHIER_DES_CHARGES.md)
3. Vérifiez les [Issues GitHub](https://github.com/sadaka/issues)
4. Contactez l'équipe de support

---

**Prêt à commencer ? Lancez `npm run dev` et explorez SADAKA ! 🚀**
