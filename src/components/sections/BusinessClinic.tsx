'use client';

import React, { useState } from 'react';
import { X, Stethoscope, CheckCircle, Clock, Users, Target } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface BusinessClinicProps {
  isOpen: boolean;
  onClose: () => void;
}

const BusinessClinic: React.FC<BusinessClinicProps> = ({ isOpen, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState('basic');

  const packages = [
    {
      id: 'basic',
      name: 'Basic Diagnosis',
      price: '₦50,000',
      duration: '2 hours',
      description: 'Quick business health check and immediate recommendations',
      features: [
        'Business structure analysis',
        'Process efficiency review',
        'Immediate action plan',
        'Follow-up recommendations',
        'Digital report'
      ]
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Clinic',
      price: '₦150,000',
      duration: '1 day',
      description: 'Deep-dive analysis with detailed implementation roadmap',
      features: [
        'Complete business audit',
        'Culture assessment',
        'Financial process review',
        'HR systems analysis',
        'Detailed implementation plan',
        '30-day follow-up support',
        'Digital + printed reports'
      ]
    },
    {
      id: 'intensive',
      name: 'Intensive Care',
      price: '₦300,000',
      duration: '3 days',
      description: 'Comprehensive transformation with hands-on implementation',
      features: [
        'Everything in Comprehensive',
        'Hands-on implementation',
        'Team training sessions',
        'Process automation setup',
        'Culture transformation plan',
        '90-day support program',
        'Monthly check-ins'
      ]
    }
  ];

  const handleBooking = () => {
    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
    const message = `Hi! I'd like to book the Business Clinic - ${selectedPkg?.name} package (${selectedPkg?.price}). Please let me know the next available dates.`;
    const whatsappUrl = `https://wa.me/2348036814141?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Stethoscope size={24} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Business Clinic 🩺</h2>
              <p className="text-gray-600">Professional business health diagnosis</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What is a Business Clinic?
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Just like a medical clinic diagnoses health issues, our Business Clinic identifies 
              structural and operational problems in your organization. We provide immediate 
              solutions and long-term treatment plans to restore your business to optimal health.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <Target size={32} className="text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Precise Diagnosis</h4>
              <p className="text-gray-600 text-sm">
                Identify exact pain points affecting your business performance
              </p>
            </Card>
            <Card className="text-center">
              <Clock size={32} className="text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Quick Results</h4>
              <p className="text-gray-600 text-sm">
                Get immediate actionable insights and see improvements fast
              </p>
            </Card>
            <Card className="text-center">
              <Users size={32} className="text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Expert Care</h4>
              <p className="text-gray-600 text-sm">
                17+ years of experience in business optimization and transformation
              </p>
            </Card>
          </div>

          {/* Package Selection */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Choose Your Clinic Package
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedPackage === pkg.id
                      ? 'ring-2 ring-blue-500 bg-blue-50'
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900">{pkg.name}</h4>
                      <div className="text-2xl font-bold text-blue-600 mt-2">{pkg.price}</div>
                      <div className="text-sm text-gray-600">{pkg.duration}</div>
                    </div>
                    
                    <p className="text-gray-600 text-sm text-center">
                      {pkg.description}
                    </p>
                    
                    <div className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  1
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Book Session</h4>
                <p className="text-sm text-gray-600">Schedule your clinic appointment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  2
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Diagnosis</h4>
                <p className="text-sm text-gray-600">Comprehensive business health check</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  3
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Treatment Plan</h4>
                <p className="text-sm text-gray-600">Receive detailed action plan</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                  4
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Implementation</h4>
                <p className="text-sm text-gray-600">Execute with ongoing support</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={handleBooking}
              size="lg"
              className="px-8"
            >
              Book {packages.find(pkg => pkg.id === selectedPackage)?.name} - {packages.find(pkg => pkg.id === selectedPackage)?.price}
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              Click to send WhatsApp message with your booking request
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessClinic;
