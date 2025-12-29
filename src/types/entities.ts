// Types partagés à travers l'application SADAKA

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  photo?: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Donation {
  id: string;
  title?: string;
  category: string;
  quantity: number;
  donatedQuantity?: number;
  commune: string;
  description?: string;
  photos?: string[];
  latitude?: number;
  longitude?: number;
  address?: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
  ownerName?: string;
  ownerEmail?: string;
  ownerPhone?: string;
  ownerPhoto?: string;
  contactEmail?: string;
  contactPhone?: string;
  rejectionReason?: string;
}

export interface Interest {
  id: string;
  donationId: string;
  userId: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: string;
}

export interface Newsletter {
  id: string;
  email: string;
  subscribedAt: string;
}

export interface Statistics {
  totalDonations: number;
  activeDonations: number;
  donatedItems: number;
  users: number;
  categories: number;
  regions: number;
  byCategory: Record<string, number>;
  byStatus: Record<string, number>;
}
