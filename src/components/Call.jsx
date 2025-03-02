import React, { useState, useEffect } from 'react';
import call from '../assets/logo/call.png';

const Call = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && window.innerWidth < 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <a
        className="fixed bottom-4 right-4  z-50 transition-opacity duration-300"
        href="tel:+998975597666"
      >
        <img src={call} alt="Call"  />
      </a>
    )
  );
};

export default Call;
