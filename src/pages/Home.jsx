import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Campuses from '../components/Campuses';
import CampusLogos from '../components/CampusLogos';
import Testimonials from '../components/Testimonials';
import Achievements from '../components/Achievements';
import PrincipalMessage from '../components/PrincipalMessage';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaTrophy, FaBuilding } from 'react-icons/fa';

const Home = () => {
  const quickLinks = [
    {
      icon: FaGraduationCap,
      title: 'Admissions',
      description: 'Apply for admission to our campuses',
      link: '/admissions',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: FaBuilding,
      title: 'Our Campuses',
      description: 'Explore our two modern campuses',
      link: '/campuses',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: FaUsers,
      title: 'Faculty',
      description: 'Meet our experienced teachers',
      link: '/faculty',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: FaTrophy,
      title: 'Events',
      description: 'Upcoming school activities',
      link: '/events',
      color: 'from-orange-500 to-orange-700',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <item.icon className="text-3xl text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-2 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100 transition-colors">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <About />
      <CampusLogos />
      <PrincipalMessage />
      <Achievements />
      <Campuses />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-primary-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose Us?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We provide a nurturing environment where every child can excel
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-yellow-400">Top 1000</div>
              <div className="text-lg font-semibold text-white">Schools in India</div>
              <div className="text-sm text-gray-200 mt-1">out of 15 Lakh</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-yellow-400">38</div>
              <div className="text-lg font-semibold text-white">Gold Medals</div>
              <div className="text-sm text-gray-200 mt-1">SOF Olympiad</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-yellow-400">5</div>
              <div className="text-lg font-semibold text-white">Black Belts</div>
              <div className="text-sm text-gray-200 mt-1">Karate Champions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-yellow-400">90%+</div>
              <div className="text-lg font-semibold text-white">Board Results</div>
              <div className="text-sm text-gray-200 mt-1">29 Students</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-block bg-white text-primary-800 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;
