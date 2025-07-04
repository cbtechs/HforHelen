'use client';

import React from 'react';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';
import Card from '@/components/ui/Card';
import { profileInfo } from '@/data/content';

const Hero: React.FC = () => {
  const achievements = [
    {
      icon: Clock,
      title: '17+ Years',
      description: 'Business Optimization Experience',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: '500+',
      description: 'Businesses Transformed',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      title: '95%',
      description: 'Client Success Rate',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: 'CEO',
      description: 'Samoga Consult',
      color: 'text-blue-500'
    }
  ];
  return (
    <section id="home" className="min-h-screen flex items-center justify-center container-bg relative overflow-hidden pt-28">
      {/* Enhanced Mesh Gradient Elements */}
      <div className="absolute -top-10 -left-10 w-2/5 h-2/5 bg-primary-color rounded-full filter blur-[150px] opacity-30 animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-2/5 h-2/5 bg-secondary-color rounded-full filter blur-[150px] opacity-25 animate-float animation-delay-400"></div>
      <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-gold-accent rounded-full filter blur-[120px] opacity-10 animate-float animation-delay-200"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1/3 h-1/3 bg-accent-color rounded-full filter blur-[130px] opacity-15 animate-float animation-delay-600"></div>



      <div className="container-max section-padding relative z-10">
        <div className="text-center text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-md">
                  About {profileInfo.name}
                </h2>
                <p className="text-lg leading-relaxed font-medium text-white">
                  {profileInfo.bio}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  My Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-[#4a90e2] font-medium">Business Structure Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-[#4a90e2] font-medium">HR Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-[#4a90e2] font-medium">Culture Transformation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-[#4a90e2] font-medium">Process Automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-[#4a90e2] font-medium">Strategic Planning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-[#4a90e2] font-medium">Executive Coaching</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-lg animate-float animation-delay-400 hover:shadow-xl transition-all duration-300 hover:border-gold-accent/40 bg-black/60">
                <h4 className="font-semibold text-white mb-3 text-xl">My Philosophy</h4>
                <p className="italic text-white leading-relaxed">
                  "Structure + Culture = 💰. When businesses align their organizational structure
                  with a strong culture, profitability naturally follows."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  return (
                    <Card key={index} className={`text-center glass-card bg-black/50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-black/60 hover:shadow-2xl group animate-float ${index % 2 === 0 ? 'animation-delay-200' : 'animation-delay-400'}`}>
                      <div className="text-blue-500 mb-4 flex justify-center group-hover:scale-110 group-hover:text-gold-accent transition-all duration-300">
                        {React.createElement(achievement.icon, { size: 36 })}
                      </div>
                      <div className="text-2xl font-bold text-blue-500 mb-2 text-shadow-md group-hover:text-gold-accent transition-colors duration-300">
                        {achievement.title}
                      </div>
                      <div className="text-sm text-blue-400 font-medium">
                        {achievement.description}
                      </div>
                    </Card>
                  );
                })}
              </div>

              <Card className="p-6 glass-card rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-out border border-gold-accent/20 hover:border-gold-accent/40 bg-black/60">
                <div className="text-center py-8 text-white">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src="/images/profile-image.jpg" 
                      alt="Helen - The Structure Police"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold mb-2">
                    Helen - The Structure Police
                  </h4>
                  <p className="text-sm">
                    Transforming businesses through strategic optimization
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
