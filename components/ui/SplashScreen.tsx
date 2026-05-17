'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet } from 'lucide-react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Wait 1.5s then fade out
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-ink flex flex-col items-center justify-center pointer-events-none"
        >
           <div className="relative flex flex-col items-center">
              {/* Drop animation */}
              <motion.div
                 initial={{ y: -50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.4, ease: "easeOut" }}
                 className="text-accent-bright absolute -top-8"
              >
                <Droplet className="w-8 h-8 fill-accent-bright" />
              </motion.div>
              
              <div className="relative mt-8">
                 {/* Draw Mountain/Peak Icon Placeholder with SVG */}
                 <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-gold fill-transparent" strokeWidth="3">
                    <motion.path 
                       d="M10,90 L50,20 L90,90 Z"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    />
                    <motion.path 
                       d="M30,55 L50,30 L70,55"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                       className="stroke-accent"
                    />
                 </svg>
              </div>

              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="text-3xl font-bold text-white mt-4"
              >
                القمة
              </motion.h1>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
