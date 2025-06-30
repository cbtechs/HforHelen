'use client';

import React, { useState } from 'react';
import { ExternalLink, Calendar, MessageCircle, ShoppingBag } from 'lucide-react';
import Button from '@/components/ui/Button';
import BusinessClinic from './BusinessClinic';

const QuickLinks: React.FC = () => {
  const [isBusinessClinicOpen, setIsBusinessClinicOpen] = useState(false);

  const quickLinks = [
    {
      title: 'Book an Appointment',
      description: 'Schedule a consultation session',
      url: 'https://calendly.com/appointmentrequest/1hour?month=2023-03',
      icon: Calendar,
      color: 'bg-blue-500',
      featured: true
    },
    {
      title: 'Business Clinic 🩺',
      description: 'Problem-solving session',
      action: 'embedded',
      icon: ShoppingBag,
      color: 'bg-green-500',
      featured: true
    },
    {
      title: 'Chat with Team',
      description: 'Direct WhatsApp contact',
      url: 'https://wa.me/2348036814141',
      icon: MessageCircle,
      color: 'bg-emerald-500',
      featured: true
    },
    {
      title: 'View All Services',
      description: 'Browse complete catalog',
      action: 'scroll',
      target: '#services',
      icon: ExternalLink,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jump straight to what you need. These are the most popular ways to get started with our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;

            const handleClick = () => {
              if (link.action === 'embedded' && link.title.includes('Business Clinic')) {
                setIsBusinessClinicOpen(true);
              } else if (link.action === 'scroll' && link.target) {
                document.querySelector(link.target)?.scrollIntoView({ behavior: 'smooth' });
              } else if (link.url) {
                window.open(link.url, '_blank');
              }
            };

            return (
              <div
                key={index}
                className={`relative group ${link.featured ? 'md:col-span-1' : ''}`}
              >
                <button
                  onClick={handleClick}
                  className="w-full text-left p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${link.color} p-3 rounded-lg text-white flex-shrink-0`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {link.description}
                      </p>
                    </div>
                    {link.action === 'embedded' ? (
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                    ) : (
                      <ExternalLink
                        size={16}
                        className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                      />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button href="#services" size="lg">
            Explore All Services
          </Button>
        </div>
      </div>

      {/* Business Clinic Modal */}
      <BusinessClinic
        isOpen={isBusinessClinicOpen}
        onClose={() => setIsBusinessClinicOpen(false)}
      />
    </section>
  );
};

export default QuickLinks;
