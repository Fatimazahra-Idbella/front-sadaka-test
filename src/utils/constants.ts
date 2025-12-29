// Constantes de l'application SADAKA

// Informations de l'application
export const APP_NAME = 'SADAKA';
export const APP_VERSION = '0.1.0';
export const APP_DESCRIPTION = 'Plateforme collaborative de gestion des dons avec géolocalisation';

// Messages et textes
export const APP_SLOGAN = 'Connectons les généreux donateurs avec ceux qui en ont besoin';
export const APP_MISSION = `Dans le cadre de l'entrepreneuriat social, SADAKA est une application collaborative 
axée sur la gestion de dons à l'aide de la géolocalisation des membres.`;

// Configuration de l'API
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
export const API_TIMEOUT = 15000; // 15 secondes
export const API_RETRY_ATTEMPTS = 3;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZES = [10, 20, 50, 100];

// Distances
export const DEFAULT_DISTANCE_RADIUS = 50; // km
export const MAX_DISTANCE_RADIUS = 500; // km

// Limites de fichiers
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
export const ALLOWED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

// Validations formulaires
export const PHONE_REGEX = /^(\+212|0)[1-9]\d{8}$/; // Format téléphone Maroc
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_MIN_LENGTH = 8;

// Régions du Maroc couvertes par SADAKA
export const COVERED_REGIONS = [
  'Casablanca-Settat',
  'Rabat-Salé-Kénitra',
  'Fès-Meknès',
  'Marrakech-Safi',
  'Tanger-Tétouan-Al Hoceïma',
  'Oriental',
  'Souss-Massa',
  'Béni Mellal-Khénifra',
  'Drâa-Tafilalet',
  'Guelmim-Oued Noun',
  'Laâyoune-Sakia El Hamra',
  'Dakhla-Oued Ed-Dahab'
];

// Localisation (localStorage keys)
export const STORAGE_KEYS = {
  TOKEN: 'sadaka_web_token',
  USER: 'sadaka_user',
  DONATIONS: 'sadaka_donations',
  USERS: 'sadaka_users',
  USER_DONATIONS: 'sadaka_user_donations',
  NEWSLETTER: 'sadaka_newsletter',
  INTEREST_RECORDS: 'sadaka_interest_records',
  THEME: 'sadaka_theme'
};

// Temps de cache (en millisecondes)
export const CACHE_DURATION = {
  SHORT: 5 * 60 * 1000,    // 5 minutes
  MEDIUM: 30 * 60 * 1000,  // 30 minutes
  LONG: 24 * 60 * 60 * 1000 // 24 heures
};

// Routes de l'application
export const ROUTES = {
  HOME: '/',
  ANNOUNCEMENTS: '/announcements',
  MAP: '/map',
  DASHBOARD: '/dashboard',
  CREATE_ANNOUNCEMENT: '/create-announcement',
  MY_ANNOUNCEMENTS: '/my-announcements',
  ADMIN: '/admin',
  LOGIN: '/login',
  REGISTER: '/register',
  NEWSLETTER: '/newsletter',
  UNAUTHORIZED: '/unauthorized',
  NOT_FOUND: '*'
};

// Configuration Leaflet
export const MAP_CONFIG = {
  DEFAULT_CENTER: [31.7917, -7.0926], // Centre du Maroc
  DEFAULT_ZOOM: 6,
  MIN_ZOOM: 2,
  MAX_ZOOM: 18,
  TILES_PROVIDER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  TILES_ATTRIBUTION: '&copy; OpenStreetMap contributors'
};

// Notifications
export const NOTIFICATION_DURATION = 3; // secondes
