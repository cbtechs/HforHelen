import React, { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import { ServiceLink } from '@/types';

const shimmerAnimation = `
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  @keyframes pulse {
    0%, 100% {
      opacity: 0.05;
    }
    50% {
      opacity: 0.1;
    }
  }
`;

interface ServiceCardProps {
  service: ServiceLink;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const [imageError, setImageError] = useState(false);
  
  const shouldShowProfile = service.showProfile || 
    service.category === 'consultation' || 
    service.category === 'training' || 
    service.title.toLowerCase().includes('1-on-1') || 
    service.title.toLowerCase().includes('one-on-one');

  // Render image with fallback for loading errors
  const renderImage = () => {
    if (!service.image || imageError) {
      return (
        <div className="w-full h-full bg-gradient-to-r from-blue-600/90 to-purple-600/90 flex items-center justify-center">
          <div className="text-white text-opacity-80 text-lg font-medium">
            {service.category}
          </div>
        </div>
      );
    }

    return (
      <img 
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={() => setImageError(true)}
      />
    );
  };

  return (
    <Card 
      hover 
      className={`relative overflow-hidden ${
        featured ? 'ring-2 ring-blue-500/50 ring-offset-2 ring-offset-black/5' : ''
      } ${
        shouldShowProfile ? 'bg-gradient-to-br from-gray-900/95 via-gray-800/98 to-gray-900/95 backdrop-blur-md' : 'bg-white/10'
      } ${
        service.category === 'consultation' ? 'shadow-xl hover:shadow-2xl shadow-black/20 transition-all duration-300' : ''
      }`}
    >
      <style>{shimmerAnimation}</style>

      {/* Enhanced shimmer effect overlay */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          backgroundSize: '1000px 100%',
          animation: 'shimmer 5s infinite linear',
          opacity: shouldShowProfile ? 0.07 : 0.03
        }}
      />

      {/* Enhanced pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
          animation: 'pulse 4s ease-in-out infinite',
          opacity: shouldShowProfile ? 0.1 : 0.05
        }}
      />

      {featured && (
        <div className="absolute -top-2 -right-2 z-20">
          <div className="bg-blue-500 text-white p-1 rounded-full shadow-lg">
            <Star size={16} fill="currentColor" />
          </div>
        </div>
      )}
      
      <div className="w-full h-40 relative mb-4 -mx-4 -mt-4 group">
        {renderImage()}
          
        {shouldShowProfile && (
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 flex items-center backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-white/80 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <img 
                src="/images/profile-image.jpg"
                alt="Helen - The Structure Police"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-white text-shadow-sm">Helen</h4>
              <p className="text-xs text-white/90 text-shadow-sm">The Structure Police</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-4">
        {shouldShowProfile && !service.image && (
          <div className="flex items-center mb-4 p-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white/80 shadow-lg">
              <img 
                src="/images/profile-image.jpg"
                alt="Helen - The Structure Police"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-white">Helen</h4>
              <p className="text-sm text-white/90">The Structure Police</p>
            </div>
          </div>
        )}
        
        <div className={shouldShowProfile ? 'text-white' : 'text-gray-900'}>
          <h3 className="text-lg font-semibold mb-2">
            {service.title}
          </h3>
          {service.description && (
            <p className={`text-sm ${shouldShowProfile ? 'text-white/80' : 'text-gray-600'}`}>
              {service.description}
            </p>
          )}
          {service.price && (
            <p className={`font-medium text-sm mt-1 ${shouldShowProfile ? 'text-blue-300' : 'text-blue-600'}`}>
              {service.price}
            </p>
          )}
        </div>
        
        <Button
          href={service.url}
          external
          variant={featured ? 'primary' : shouldShowProfile ? 'ghost' : 'outline'}
          size="sm"
          className={`w-full flex items-center justify-center space-x-2 ${
            shouldShowProfile ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''
          }`}
        >
          <span>Learn More</span>
          <ExternalLink size={14} />
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
