'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet } from 'lucide-react';
import Image from 'next/image';

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
                 <motion.div
                    initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                 >
                    <Image 
                      src="/logo.png" 
                      alt="القمة الفريدة" 
                      width={220} 
                      height={90} 
                      className="object-contain "
                      priority
                    />
                 </motion.div>
              </div>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
