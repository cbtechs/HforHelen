import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/content';
import { getFeaturedServices } from '@/lib/utils';

const FeaturedServices: React.FC = () => {
  const featuredServices = getFeaturedServices(services);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with our most popular services designed to transform your business structure and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={true}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            View All Services
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
