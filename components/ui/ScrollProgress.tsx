'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 rtl:right-0 rtl:left-auto h-[3px] bg-gold z-[9999] transition-all duration-75 ease-out"
      style={{ width: `${progress}%` }}
    />
  );
}
