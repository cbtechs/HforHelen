export interface ServiceLink {
  id: string;
  title: string;
  description?: string;
  url: string;
  category: ServiceCategory;
  price?: string;
  featured?: boolean;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  experience: string;
}

export type ServiceCategory = 
  | 'consultation'
  | 'business-services'
  | 'training'
  | 'documents'
  | 'specialized'
  | 'communication';

export interface ServiceCategory {
  id: ServiceCategory;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  url?: string;
  tags: string[];
}
