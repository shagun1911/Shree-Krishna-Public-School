import React, { useState } from 'react';
import { FaBell, FaTimes } from 'react-icons/fa';

const NoticeBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const notices = [
    '🎓 Admissions Open for 2026-27! Apply Now',
    '📅 Parent-Teacher Meeting on March 20, 2026',
    '🏆 Our Students Won Inter-School Competition',
    '📢 Summer Camp Registration Starting Soon',
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 py-2 overflow-hidden relative">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 flex-1 overflow-hidden">
          <FaBell className="animate-bounce flex-shrink-0" />
          <div className="animate-marquee whitespace-nowrap flex space-x-8">
            {notices.map((notice, index) => (
              <span key={index} className="inline-block font-medium">
                {notice}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {notices.map((notice, index) => (
              <span key={`dup-${index}`} className="inline-block font-medium">
                {notice}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:bg-white/20 p-1 rounded transition flex-shrink-0"
          aria-label="Close notice"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default NoticeBar;
