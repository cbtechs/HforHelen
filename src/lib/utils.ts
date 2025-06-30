import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: string): string {
  return price.replace(/₦/g, '₦');
}

export function getServicesByCategory(services: any[], category: string) {
  return services.filter(service => service.category === category);
}

export function getFeaturedServices(services: any[]) {
  return services.filter(service => service.featured);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
