import React from 'react';
import { Star, Quote, Building, Users, TrendingUp } from 'lucide-react';
import Card from '@/components/ui/Card';

const Portfolio: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Adebayo Johnson',
      role: 'CEO',
      company: 'TechFlow Solutions',
      content: 'Helen transformed our chaotic startup into a well-structured organization. Our productivity increased by 300% within 6 months.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: '2',
      name: 'Fatima Al-Hassan',
      role: 'HR Director',
      company: 'Green Energy Ltd',
      content: 'The HR systems and policies Helen implemented saved us countless hours and improved our employee satisfaction dramatically.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: '3',
      name: 'Michael Okafor',
      role: 'Founder',
      company: 'Retail Plus',
      content: 'Working with The Structure Police was the best investment we made. Our business processes are now automated and efficient.',
      rating: 5,
      avatar: '👨‍🚀'
    }
  ];

  const caseStudies = [
    {
      title: 'Manufacturing Company Restructure',
      description: 'Transformed a 200-employee manufacturing company, reducing operational costs by 40% while improving quality.',
      metrics: ['40% Cost Reduction', '60% Faster Processes', '95% Employee Satisfaction'],
      category: 'Manufacturing',
      icon: Building
    },
    {
      title: 'Tech Startup Scale-Up',
      description: 'Helped a tech startup scale from 10 to 100 employees with proper structures and culture.',
      metrics: ['10x Team Growth', '200% Revenue Increase', '90% Retention Rate'],
      category: 'Technology',
      icon: TrendingUp
    },
    {
      title: 'NGO Operational Excellence',
      description: 'Streamlined operations for a major NGO, improving service delivery and impact measurement.',
      metrics: ['50% Faster Delivery', '80% Better Tracking', '100% Compliance'],
      category: 'Non-Profit',
      icon: Users
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across various industries achieve remarkable 
            transformations through strategic structure and culture optimization.
          </p>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <Card key={index} hover className="h-full">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent size={24} className="text-blue-600" />
                      </div>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {study.category}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900">
                      {study.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm">
                      {study.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-gray-900">Key Results:</h5>
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote size={24} className="text-blue-600" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Businesses Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">17+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
