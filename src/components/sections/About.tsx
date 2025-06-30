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
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="text-center py-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                  👮‍♀️
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Helen - The Structure Police
                </h4>
                <p className="text-gray-600 text-sm">
                  Transforming businesses through strategic optimization
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
