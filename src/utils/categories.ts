// Catégories de dons disponibles selon le cahier des charges
export enum DonationCategory {
  FOOD = 'FOOD',
  CLOTHES = 'CLOTHES',
  MEDICINE = 'MEDICINE',
  OTHER = 'OTHER'
}

export const categoryLabels: Record<DonationCategory | string, string> = {
  [DonationCategory.FOOD]: 'Nourriture',
  [DonationCategory.CLOTHES]: 'Vêtements',
  [DonationCategory.MEDICINE]: 'Médicaments',
  [DonationCategory.OTHER]: 'Autres'
};

export const categoryEmojis: Record<DonationCategory | string, string> = {
  [DonationCategory.FOOD]: '🍎',
  [DonationCategory.CLOTHES]: '👕',
  [DonationCategory.MEDICINE]: '💊',
  [DonationCategory.OTHER]: '📦'
};

export const categoryColors: Record<DonationCategory | string, string> = {
  [DonationCategory.FOOD]: '#52c41a',
  [DonationCategory.CLOTHES]: '#1890ff',
  [DonationCategory.MEDICINE]: '#eb2f96',
  [DonationCategory.OTHER]: '#faad14'
};

export const allCategories = Object.values(DonationCategory).map(value => ({
  label: categoryLabels[value],
  value,
  emoji: categoryEmojis[value],
  color: categoryColors[value]
}));
