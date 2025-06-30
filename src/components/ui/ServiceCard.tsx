import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import { ServiceLink } from '@/types';

interface ServiceCardProps {
  service: ServiceLink;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <Card 
      hover 
      className={`relative ${featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
    >
      {featured && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-blue-500 text-white p-1 rounded-full">
            <Star size={16} fill="currentColor" />
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {service.title}
          </h3>
          {service.description && (
            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          )}
          {service.price && (
            <p className="text-blue-600 font-medium text-sm mt-1">
              {service.price}
            </p>
          )}
        </div>
        
        <Button
          href={service.url}
          external
          variant={featured ? 'primary' : 'outline'}
          size="sm"
          className="w-full flex items-center justify-center space-x-2"
        >
          <span>Learn More</span>
          <ExternalLink size={14} />
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
