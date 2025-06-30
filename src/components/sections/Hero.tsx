'use client';

import React from 'react';
import { ArrowDown, Calendar, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { profileInfo, contactInfo } from '@/data/content';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center text-white space-y-8">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/30 flex items-center justify-center text-4xl">
                👮‍♀️
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {profileInfo.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {profileInfo.title}
            </p>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {profileInfo.tagline}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              href="https://calendly.com/appointmentrequest/1hour?month=2023-03"
              external
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 flex items-center space-x-2"
            >
              <Calendar size={20} />
              <span>Book Appointment</span>
            </Button>
            
            <Button
              href={`https://wa.me/${contactInfo.whatsapp}`}
              external
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Chat with Team</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">17+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80">Businesses Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-white/80">Services Offered</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
