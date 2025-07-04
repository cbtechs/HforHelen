// Common types for the application
export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  experience: string;
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ServiceLink {
  id: string;
  title: string;
  url: string;
  category: string;
  description?: string;
  featured?: boolean;
  price?: string;
  image?: string;
}

export interface ButtonProps {
  href?: string;
  external?: boolean;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export interface CardProps {
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}
