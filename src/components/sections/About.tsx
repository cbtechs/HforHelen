import React from 'react';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';
import Card from '@/components/ui/Card';
import { profileInfo } from '@/data/content';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Clock,
      title: '17+ Years',
      description: 'Business Optimization Experience',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '500+',
      description: 'Businesses Transformed',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      title: '95%',
      description: 'Client Success Rate',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      title: 'CEO',
      description: 'Samoga Consult',
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About {profileInfo.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {profileInfo.bio}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                My Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Business Structure Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">HR Optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Culture Transformation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Process Automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Strategic Planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Executive Coaching</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">My Philosophy</h4>
              <p className="text-blue-800 italic">
                "Structure + Culture = 💰. When businesses align their organizational structure 
                with a strong culture, profitability naturally follows."
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="text-center">
                    <div className={`${achievement.color} mb-3 flex justify-center`}>
                      <IconComponent size={32} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.description}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Professional Image Placeholder */}
            <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden relative">
              {/* Pattern background for more visual interest */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '30px 30px'
                }}
              />

              <div className="text-center py-8 relative z-10">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mb-4 shadow-lg border-2 border-white">
                  👮‍♀️
                </div>
                <div className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full inline-block mb-2 shadow-md">
                  The CEO
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-xl">
                  Helen - The Structure Police
                </h4>
                <p className="text-gray-600 text-sm max-w-xs mx-auto">
                  Transforming businesses through strategic optimization and structural excellence
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
