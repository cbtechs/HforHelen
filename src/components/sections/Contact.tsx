'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Calendar, Send } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { contactInfo } from '@/data/content';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hello! I'm interested in your services.
    
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service: ${formData.service}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email',
      value: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with our team',
      value: 'Direct messaging',
      action: `https://wa.me/${contactInfo.whatsapp}`,
      color: 'bg-green-500'
    },
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule a consultation',
      value: 'Online booking',
      action: 'https://calendly.com/appointmentrequest/1hour?month=2023-03',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you build 
            the structure and culture that drives profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="business-clinic">Business Clinic</option>
                  <option value="consultation">1-on-1 Consultation</option>
                  <option value="executive-coaching">Executive Coaching</option>
                  <option value="hr-services">HR Services</option>
                  <option value="training">Training & Development</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Tell us about your business needs..."
                />
              </div>

              <Button type="submit" className="w-full flex items-center justify-center space-x-2">
                <Send size={18} />
                <span>Send Message via WhatsApp</span>
              </Button>
            </form>
          </Card>

          {/* Contact Methods & Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} hover className="cursor-pointer">
                    <a
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <div className={`${method.color} p-3 rounded-lg text-white`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{method.title}</h4>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                        <p className="text-blue-600 text-sm font-medium">{method.value}</p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Embedded Calendly */}
            <Card>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Booking</h4>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
                <h5 className="font-medium text-gray-900 mb-2">Schedule Your Consultation</h5>
                <p className="text-gray-600 text-sm mb-4">
                  Book a 1-hour consultation to discuss your business needs
                </p>
                <Button
                  href="https://calendly.com/appointmentrequest/1hour?month=2023-03"
                  external
                  className="w-full"
                >
                  Open Booking Calendar
                </Button>
              </div>
            </Card>

            {/* Business Hours */}
            <Card>
              <h4 className="font-semibold text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900">Closed</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">After Hours</span>
                    <span className="text-blue-600">5:00 PM - 8:00 AM</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Special after-hours services available
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
