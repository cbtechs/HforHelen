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
        <div className="text-center text-white">
          {/* Professional Avatar Section */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center shadow-2xl">
                <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center text-5xl">
                  👮‍♀️
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                17+ Years
              </div>
            </div>
          </div>

          {/* Main Content with Better Typography */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                {profileInfo.name}
              </h1>

              <div className="flex items-center justify-center space-x-4">
                <div className="h-px bg-white/30 flex-1 max-w-20"></div>
                <p className="text-xl md:text-2xl text-white/90 font-medium px-4">
                  {profileInfo.title}
                </p>
                <div className="h-px bg-white/30 flex-1 max-w-20"></div>
              </div>
            </div>

            {/* Tagline with Emphasis */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {profileInfo.tagline}
              </p>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Button
              href="https://calendly.com/appointmentrequest/1hour?month=2023-03"
              external
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 flex items-center space-x-3 px-8 py-4 shadow-xl"
            >
              <Calendar size={22} />
              <span className="font-semibold">Book Appointment</span>
            </Button>

            <Button
              href={`https://wa.me/${contactInfo.whatsapp}`}
              external
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transform transition-all duration-200 flex items-center space-x-3 px-8 py-4 backdrop-blur-sm"
            >
              <MessageCircle size={22} />
              <span className="font-semibold">Chat with Team</span>
            </Button>
          </div>

          {/* Enhanced Stats Section */}
          <div className="pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-200">
                <div className="text-4xl font-bold text-white mb-2">17+</div>
                <div className="text-white/80 font-medium">Years Experience</div>
                <div className="text-white/60 text-sm mt-1">Business Optimization</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-200">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 font-medium">Businesses Helped</div>
                <div className="text-white/60 text-sm mt-1">Across Industries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-200">
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-white/80 font-medium">Services Offered</div>
                <div className="text-white/60 text-sm mt-1">Complete Solutions</div>
              </div>
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
