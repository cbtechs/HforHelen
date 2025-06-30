'use client';

import React, { useState } from 'react';
import { Users, Briefcase, GraduationCap, FileText, Target, MessageCircle } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import { services, serviceCategories } from '@/data/content';
import { getServicesByCategory } from '@/lib/utils';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('consultation');

  const iconMap = {
    Users,
    Briefcase,
    GraduationCap,
    FileText,
    Target,
    MessageCircle,
  };

  const filteredServices = getServicesByCategory(services, activeCategory);

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive business optimization solutions designed to transform your organization's 
            structure, culture, and profitability. Choose from our range of specialized services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {IconComponent && <IconComponent size={18} />}
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <div className="text-center mb-8">
          {serviceCategories.map((category) => {
            if (category.id === activeCategory) {
              return (
                <div key={category.id} className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={service.featured}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FileText size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No services found
            </h3>
            <p className="text-gray-600">
              Services for this category are coming soon.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. If you don't see exactly what you need, 
              let's discuss a custom solution tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="https://wa.me/2348036814141"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <MessageCircle size={18} className="mr-2" />
                Chat with Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
