import React from 'react';
import { FaCheckCircle, FaHeart, FaBrain, FaTrophy, FaUsers } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaBrain,
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum designed to challenge and inspire',
    },
    {
      icon: FaTrophy,
      title: 'Sports & Athletics',
      description: 'State-of-the-art facilities for physical development',
    },
    {
      icon: FaHeart,
      title: 'Values & Ethics',
      description: 'Building character and moral foundation',
    },
    {
      icon: FaUsers,
      title: 'Holistic Development',
      description: 'Nurturing mind, body, and spirit',
    },
  ];

  const highlights = [
    'CBSE Affiliated Institution',
    'Experienced & Qualified Faculty',
    'Modern Infrastructure',
    'Technology-Enabled Classrooms',
    'Safe & Secure Environment',
    'Co-curricular Activities',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            About <span className="gradient-text">Shri Krishna Public School</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A premier educational institution committed to providing quality education and nurturing future leaders
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image with decorative elements */}
          <div className="relative animate-slide-in-left">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/leadership/director.png"
                alt="School Director"
                className="w-full h-96 object-cover"
                style={{ 
                  objectPosition: 'center top',
                  transform: 'scale(1.0)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl animate-float">
              <div className="text-4xl font-bold text-primary-600">22+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Shaping Tomorrow's Leaders Today
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Shri Krishna Public School has been a beacon of educational excellence in Bikaner for over 15 years. 
              We believe in holistic development, combining academic rigor with character building, sports, arts, 
              and life skills.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our two campuses - <strong>Shri Krishna Public School</strong> and <strong>Little Krishna Public School</strong> - 
              cater to different age groups, providing age-appropriate learning environments where every child can thrive.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaCheckCircle className="text-accent-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href="#admissions"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all shadow-lg"
            >
              Join Our Family
            </a>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg card-hover text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform">
                <value.icon className="text-3xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* School Photos Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gallery/photo_2026-02-05 18.29.05.jpeg"
              alt="School Event"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gallery/photo_2026-02-05 18.29.15.jpeg"
              alt="Campus View"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gallery/photo_2026-02-05 18.28.52.jpeg"
              alt="School Activity"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
