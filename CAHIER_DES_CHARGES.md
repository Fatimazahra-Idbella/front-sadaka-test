# 📋 CAHIER DES CHARGES - SADAKA

## Objet

Dans le cadre de l'**entrepreneuriat social**, SADAKA est une application collaborative axée sur la **gestion de dons** à l'aide de la géolocalisation des membres.

## Objectifs

1. Mettre à la disposition du grand public une application mobile permettant de **déclarer les dons** et d'en **bénéficier**.
2. Développer une plateforme pour la **gestion des utilisateurs** et l'**approbation des annonces** des dons et **exploitation des données**.

---

## Composantes

### 1️⃣ Volet "Gestion de Projet"
- Organisation de l'équipe (Chef de projet, tâches)
- Attribution des responsabilités :
  - Chef de projet
  - Chargés des parties mobiles
  - Chargés de la partie web
  - Chargés des données
- Le poste de chef de projet est assuré à raison de 1 séance par membre de l'équipe
- Présentation de l'état d'avancement et des réalisations

### 2️⃣ Volet "Données"
#### Fonds Cartographiques
- Web : OpenStreetMap, services publics (Google, ESRI)
- Locaux : Données stockées localement

#### Couches de Base & d'Analyse
- Découpage administratif (Régions, Provinces)
- 12 régions marocaines couvertes
- 60+ communes avec géolocalisation

### 3️⃣ Volet "Applications"

#### Partie "Mobile"
Application mobile permettant de **déclarer les dons** et d'en **bénéficier**.

##### 3.1.1 Création du Compte
**Tout le monde** a la possibilité de créer un compte sur l'application.

**Formulaire avec informations :**
- Nom **
- Prénom **
- Numéro de téléphone **
- Email (avec confirmation) **
- Photo personnelle

_** = Rubrique obligatoire_

##### 3.1.2 Annonce de Don
Structure de l'annonce :
- Catégorie du don (liste de choix) + Autres **
- Quantité (compteur)
- Description (Zone texte)
- Photo(s) **
- Localisation (adresse saisie OU récupération automatique) **
- Date/Heure envoi (Automatique - Serveur)

**Infos Instance Application :**
- Identification poste (Serial Number, IMEI)

##### 3.1.3 Espace Utilisateur
- Liste des demandeurs par produit
- Annonces
- Assigner l'objet comme donné
- Obtenir les coordonnées des demandeurs pour entrer en contact
- **Filtres dynamiques :**
  - Catégorie
  - Distance
  - Date de publication
  - Localisation
- **Géolocalisation** des dons les plus proches sur fond cartographique
- **Newsletter**

---

#### Partie "Web Exploitation"

##### 3.2.1 Web Service
Gestion de la communication entre application Mobile et Base de Données :
- Traitement de l'identification des instances installées de l'application mobile
- Création des inscriptions des donateurs et bénéficiaires
- Récupération de la liste des dons selon des critères paramétrables

##### 3.2.2 Application SIG Web
Pour le suivi et l'exploitation des données sur les dons.

##### 3.2.2.1 Interface Publique

**Accueil**
- Présentation générale sur la plateforme
- Statistiques clés

**Tableau**
- Liste des dons
- Filtres possibles selon :
  - Critères attributaires individuels (Catégorie, Localisation, etc.)
  - Critères combinés

**SIG**
- Géolocalisation des dons sur fond cartographique
- Les filtres appliqués sur les données impactent automatiquement la partie spatiale

**Tableau de Bord**
- Statistiques et catégories des dons

##### 3.2.2.2 Interface Administration

**Accueil**
- Présentation générale sur la plateforme

**Tableau**
- Liste des dons
- Filtres selon critères individuels ou combinés

**SIG**
- Géolocalisation des dons
- Synchronisation automatique filtres/carte

**Tableau de Bord**
- Statistiques détaillées

**Gestion des Données**
- Validation des annonces en attente
  - Approbation (publication)
  - Rejet (avec motif)
- Gestion des utilisateurs
- Gestion de la newsletter
- Export/Import des données

---

## 🎯 Implémentation Actuelle

### ✅ Complété

#### Frontend Web
- [x] Page d'**Accueil** professionnelle avec présentation générale
- [x] Page **Annonces** avec liste et filtres avancés
- [x] Page **Carte** avec géolocalisation Leaflet
- [x] Page **Dashboard** avec statistiques
- [x] Page **Admin** avec gestion complète
- [x] Authentification et système de rôles
- [x] Protection des routes
- [x] Système de mocks localStorage
- [x] Export/Import JSON
- [x] Responsive design
- [x] Page **Conformité** pour suivi cahier des charges

#### Données
- [x] 12 régions marocaines
- [x] 60+ communes avec coordonnées GPS
- [x] Catégories de dons (FOOD, CLOTHES, MEDICINE, OTHER)
- [x] Statuts annonces (PENDING, APPROVED, REJECTED, etc.)

#### Architecture
- [x] TypeScript complet
- [x] React 18 + Vite
- [x] Ant Design UI
- [x] Axios + intercepteurs
- [x] Context API (Auth)
- [x] React Router

### ⏳ En Cours / Planifié

#### Mobile
- [ ] Application React Native / Flutter
- [ ] Géolocalisation GPS native
- [ ] Caméra et galerie d'images
- [ ] Notifications push

#### Améliorations Backend
- [ ] API Node.js/Express complète
- [ ] Base de données (MongoDB/PostgreSQL)
- [ ] Authentification JWT sécurisée
- [ ] Rate limiting
- [ ] Logs et monitoring

#### Avancées Frontend
- [ ] Tests unitaires (Jest/Vitest)
- [ ] Tests E2E (Cypress/Playwright)
- [ ] PWA capabilities
- [ ] Offline mode
- [ ] Real-time notifications (WebSocket)

---

## 📝 Exigences Fonctionnelles

### Annonce de Don

| Field | Type | Obligatoire | Notes |
|-------|------|------------|-------|
| Titre | Text | ✅ | Nom/description court |
| Catégorie | Select | ✅ | FOOD, CLOTHES, MEDICINE, OTHER |
| Quantité | Number | ✅ | Compteur |
| Description | Textarea | ✅ | Détails du don |
| Photos | Upload | ✅ | 1+ photos |
| Localisation | GPS/Text | ✅ | Auto ou manuelle |
| Date/Heure | Timestamp | ✅ | Automatique (serveur) |

### Filtres Disponibles

| Filtre | Type | Scope |
|--------|------|-------|
| Recherche texte | Text | Titre, description |
| Catégorie | Select | FOOD, CLOTHES, MEDICINE, OTHER |
| Communes | Multi-select | 60+ communes |
| Distance | Slider | 0-50 km |
| Date | Date range | De/Jusqu'à |

### Rôles et Permissions

| Rôle | Permissions |
|------|-----------|
| **ADMIN** | manage_users, manage_announcements, approve_announcements, reject_announcements, manage_newsletter, view_statistics, access_admin_panel |
| **MODERATOR** | approve_announcements, reject_announcements, view_statistics |
| **USER** | create_announcement, express_interest, view_announcements, filter_announcements |

### Statuts Annonce

| Statut | Couleur | Description |
|--------|--------|-----------|
| PENDING | 🟡 Or | En attente de validation |
| APPROVED | 🟢 Vert | Approuvée et visible |
| REJECTED | 🔴 Rouge | Rejetée avec motif |
| PARTIALLY_DONATED | 🔵 Bleu | Partiellement donnée |
| DONATED | 🟣 Violet | Complètement donnée |

---

## 🗺️ Couverture Géographique

### 12 Régions du Maroc

1. **Casablanca-Settat** - 5 communes
2. **Rabat-Salé-Kénitra** - 5 communes
3. **Fès-Meknès** - 5 communes
4. **Marrakech-Safi** - 5 communes
5. **Tanger-Tétouan-Al Hoceïma** - 5 communes
6. **Oriental** - 5 communes
7. **Souss-Massa** - 5 communes
8. **Béni Mellal-Khénifra** - 5 communes
9. **Drâa-Tafilalet** - 5 communes
10. **Guelmim-Oued Noun** - 4 communes
11. **Laâyoune-Sakia El Hamra** - 4 communes
12. **Dakhla-Oued Ed-Dahab** - 2 communes

**Total : 60+ communes avec coordonnées GPS précises**

---

## 🔌 Architecture WebService

### Responsabilités

```
┌─────────────────────┐
│  Mobile App         │
│  (À développer)     │
└──────────┬──────────┘
           │ HTTP/REST
           ↓
┌──────────────────────────┐
│  API Web Service         │
│  ├─ Auth                 │
│  ├─ CRUD Donations       │
│  ├─ CRUD Users          │
│  ├─ Statistics          │
│  └─ Newsletter          │
└──────────┬───────────────┘
           │
           ↓
┌──────────────────────────┐
│  Base de Données         │
│  ├─ Users               │
│  ├─ Donations           │
│  ├─ Interests           │
│  └─ Newsletter          │
└──────────────────────────┘
```

### Endpoints

```
Authentication
  POST   /auth/login
  POST   /auth/register
  GET    /auth/me
  POST   /auth/logout

Donations
  GET    /donations                  # List avec filtres
  POST   /donations                  # Create
  GET    /donations/:id              # Get detail
  PUT    /donations/:id              # Update
  DELETE /donations/:id              # Delete
  POST   /donations/:id/approve      # Admin: Approve
  POST   /donations/:id/reject       # Admin: Reject
  POST   /donations/:id/interest     # User: Express interest

Users
  GET    /users                      # Admin: List all
  GET    /users/:id                  # Get detail
  PUT    /users/:id                  # Admin: Update
  DELETE /users/:id                  # Admin: Delete

Statistics
  GET    /statistics                 # Global stats
  GET    /statistics/by-category     # By category
  GET    /statistics/by-region       # By region
  GET    /statistics/by-status       # By status

Newsletter
  POST   /newsletter/subscribe       # Subscribe
  POST   /newsletter/unsubscribe     # Unsubscribe
  GET    /newsletter/subscribers     # Admin: List
  DELETE /newsletter/subscribers/:id # Admin: Delete
```

---

## 💾 Persistance des Données

### En Développement (localStorage)
- `sadaka_donations` - Liste des dons
- `sadaka_users` - Utilisateurs
- `sadaka_user_donations` - Dons par utilisateur
- `sadaka_web_token` - Token JWT
- `sadaka_newsletter` - Abonnés newsletter

### En Production (Base de Données)
- PostgreSQL/MongoDB recommandé
- Backup réguliers
- Indices sur : email, status, commune, date

---

## 🔒 Sécurité

- [ ] Authentication JWT
- [ ] HTTPS obligatoire en production
- [ ] Validation input serveur/client
- [ ] Hachage mots de passe (bcrypt)
- [ ] Rate limiting
- [ ] CORS configuré
- [ ] Logs d'audit
- [ ] Données PII protégées

---

## 📊 Exemple de Données

```json
{
  "donation": {
    "id": "don-001",
    "title": "Vêtements neufs",
    "category": "CLOTHES",
    "quantity": 15,
    "description": "Vêtements d'hiver en bon état",
    "photos": ["url-1.jpg", "url-2.jpg"],
    "commune": "CASABLANCA",
    "latitude": 33.5731,
    "longitude": -7.5898,
    "status": "APPROVED",
    "createdAt": "2024-12-24T10:30:00Z",
    "donatedQuantity": 10,
    "ownerName": "Ahmed Alaoui",
    "ownerPhone": "+212612345678",
    "ownerEmail": "ahmed@email.com"
  }
}
```

---

## 📱 Scénario Utilisateur Complet

### Donateur
1. ✅ Crée un compte (Nom, Email, Téléphone)
2. ✅ Crée une annonce (Catégorie, Quantité, Description, Photos, Localisation)
3. ✅ Annonce en attente de validation
4. ⏳ Admin valide → annonce publiée
5. ✅ Les bénéficiaires peuvent voir et exprimer intérêt
6. ✅ Donateur reçoit liste des demandeurs et les coordonnées
7. ✅ Marque l'annonce comme "DONATED"

### Bénéficiaire
1. ✅ Consulte les annonces publiées (Public)
2. ✅ Filtre par catégorie, localisation, distance
3. ✅ Visualise sur la carte
4. ✅ Crée un compte et exprime intérêt
5. ⏳ Attend réponse donateur
6. ✅ Obtient coordonnées du donateur
7. ✅ Organise la récupération

### Administrateur
1. ✅ Consulte la queue d'annonces en attente
2. ✅ Valide ou rejette avec motif
3. ✅ Gère les utilisateurs
4. ✅ Gère les abonnés newsletter
5. ✅ Consulte statistiques détaillées
6. ✅ Export/Import données

---

## ✨ Conclusion

SADAKA est une plateforme d'**entrepreneuriat social** complète permettant de :
- **Connecter** donateurs et bénéficiaires
- **Géolocaliser** les dons précisément
- **Valider** les annonces
- **Exploiter** les données
- **Créer de l'impact social** dans les communautés marocaines

---

**Statut** : ✅ Phase 1 (Web Frontend) Complétée  
**Prochaines phases** : Mobile App, Backend robuste, Production deployment
