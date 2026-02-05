import React from 'react';
import Achievements from '../components/Achievements';

const AchievementsPage = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4 animate-bounce">
            <span className="text-8xl">🏆</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Our Achievements
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Recognized Among India's Top 1000 Schools by Indian Talent Olympiad
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="font-bold">🥇 38 Gold Medals</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="font-bold">🥋 5 Black Belts</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="font-bold">🎖️ 25 Sports Medals</span>
            </div>
          </div>
        </div>
      </section>

      <Achievements />
    </div>
  );
};

export default AchievementsPage;
