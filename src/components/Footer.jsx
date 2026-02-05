import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Campuses', href: '/campuses' },
    { name: 'Facilities', href: '/facilities' },
  ];

  const importantLinks = [
    { name: 'Achievements', href: '/achievements' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/shree_krishna_publicudairamsar/', 
      color: 'hover:bg-pink-600', 
      label: 'Shri Krishna Public School Instagram' 
    },
    { 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/little_krishna_public_school_/', 
      color: 'hover:bg-purple-600', 
      label: 'Little Krishna Public School Instagram',
      isSecondary: true
    },
    { icon: FaFacebook, url: '#', color: 'hover:bg-blue-600', label: 'Facebook' },
    { icon: FaYoutube, url: '#', color: 'hover:bg-red-600', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Shree Krishna Public School Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Shri Krishna</h3>
                <p className="text-sm text-gray-400">Public School</p>
                <p className="text-xs text-gray-500">Since 2004</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Quality education at Udairamsar. Nurturing young minds with values, excellence, and holistic development.
            </p>
            <div className="space-y-3">
              <p className="text-xs text-gray-400 font-semibold">Follow Us:</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className={`group relative w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} hover:text-white transition-all transform hover:scale-110 ${social.isSecondary ? 'ring-2 ring-purple-400' : ''}`}
                  >
                    <social.icon />
                    {social.isSecondary && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-gray-900"></span>
                    )}
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-500 italic">
                2 Instagram accounts - Main campus & Little Krishna
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold mb-4 text-accent-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-4 text-accent-300">Important Links</h4>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold mb-4 text-accent-300">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p className="font-semibold text-white mb-1">Main Campus:</p>
                  <p>Udairamsar, Bikaner, Rajasthan 334402</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p className="font-semibold text-white mb-1">Little Krishna:</p>
                  <p>GangaSher, Near Udairamsar, Bikaner 334402</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-accent-400 flex-shrink-0" />
                <a href="tel:+919664627412" className="text-gray-400 hover:text-white transition text-sm">
                  +91 96646 27412
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-accent-400 flex-shrink-0" />
                <a href="mailto:info@shrikrishnaschool.edu.in" className="text-gray-400 hover:text-white transition text-sm">
                  info@shrikrishnaschool.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Shri Krishna Public School. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-2 animate-pulse" /> for Education
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all z-40 pulse-glow animate-fade-in"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}

      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
