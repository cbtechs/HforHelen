import React from 'react';
import { Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { socialLinks, contactInfo } from '@/data/content';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    Mail: Mail,
    Facebook: Facebook,
    Instagram: Instagram,
    MessageCircle: MessageCircle,
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">
              The Structure Police
            </h3>
            <p className="text-gray-300 text-sm">
              17+ years Business Optimization Consultant. 
              Structure + Culture = 💰
            </p>
            <p className="text-gray-300 text-sm">
              CEO @samogaconsult
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                About
              </a>
              <a href="#services" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Services
              </a>
              <a href="#portfolio" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Portfolio
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="space-y-2">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={16} />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
              {contactInfo.whatsapp && (
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <MessageCircle size={16} />
                  <span className="text-sm">WhatsApp</span>
                </a>
              )}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold">Legal</h4>
          <nav className="space-y-2">
            <a href="/privacy-policy" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
              Terms & Conditions
            </a>
            <a href="/refund-policy" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
              Refund Policy
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} The Structure Police - Helen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
