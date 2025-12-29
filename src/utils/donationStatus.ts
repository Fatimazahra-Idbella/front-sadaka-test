// Statuts des annonces de dons selon le cahier des charges
export enum DonationStatus {
  PENDING = 'PENDING',           // En attente de validation
  APPROVED = 'APPROVED',         // Approuvée et visible
  REJECTED = 'REJECTED',         // Rejetée avec motif
  PARTIALLY_DONATED = 'PARTIALLY_DONATED', // Partiellement donnée
  DONATED = 'DONATED'            // Complètement donnée
}

export const statusLabels: Record<DonationStatus | string, string> = {
  [DonationStatus.PENDING]: 'En attente de validation',
  [DonationStatus.APPROVED]: 'Approuvée',
  [DonationStatus.REJECTED]: 'Rejetée',
  [DonationStatus.PARTIALLY_DONATED]: 'Partiellement donnée',
  [DonationStatus.DONATED]: 'Donnée'
};

export const statusColors: Record<DonationStatus | string, string> = {
  [DonationStatus.PENDING]: 'gold',
  [DonationStatus.APPROVED]: 'green',
  [DonationStatus.REJECTED]: 'red',
  [DonationStatus.PARTIALLY_DONATED]: 'blue',
  [DonationStatus.DONATED]: 'purple'
};

export const statusIcons: Record<DonationStatus | string, string> = {
  [DonationStatus.PENDING]: '⏳',
  [DonationStatus.APPROVED]: '✅',
  [DonationStatus.REJECTED]: '❌',
  [DonationStatus.PARTIALLY_DONATED]: '🔄',
  [DonationStatus.DONATED]: '🎁'
};

// Motifs de rejet courants
export const rejectionReasons = [
  'Information incomplète',
  'Photos manquantes ou peu claires',
  'Localisation invalide',
  'Contenu non conforme',
  'Don déjà retiré',
  'Double annonce',
  'Contenu interdit',
  'Autre (à préciser)'
];
