'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkText = isScrolled || isMobileMenuOpen;

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'من نحن', path: '/about' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDarkText
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(26,58,107,0.08)] py-3 border-b border-[#E8EEF9]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-50" aria-label="الصفحة الرئيسية - القمة">
          <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-xl overflow-hidden shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
            <Image src="/icon.png" alt="شعار القمة" fill sizes="48px" className="object-contain p-1" priority />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold leading-none transition-colors ${isDarkText ? 'text-primary' : 'text-white'}`}>القمة</span>
            <span className={`text-[10px] tracking-wider uppercase leading-none mt-0.5 font-semibold transition-colors ${isDarkText ? 'text-primary-mid/70' : 'text-white/80'}`}>
              خدمات نظافة احترافية
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 mr-auto pr-12" aria-label="التنقل الرئيسي">
          {navLinks.map((link, i) => (
            <div key={link.name} className="flex items-center">
              <Link
                href={link.path}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 relative ${
                  isDarkText
                    ? pathname === link.path
                      ? 'text-primary bg-primary/8'
                      : 'text-[#4A5568] hover:text-primary hover:bg-primary/5'
                    : pathname === link.path
                      ? 'text-white bg-white/20'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full -z-10 ${isDarkText ? 'bg-primary/8' : 'bg-white/20'}`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
              {i < navLinks.length - 1 && (
                <span className={`w-1 h-1 rounded-full mx-2 hidden xl:block transition-colors ${isDarkText ? 'bg-[#E8EEF9]' : 'bg-white/30'}`} />
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block relative z-50">
          <a
            href="tel:0545359694"
            aria-label="اتصل بنا الآن"
            className={`flex items-center gap-2 font-bold px-6 py-2.5 rounded-full transition-all shimmer-btn shadow-md hover:-translate-y-0.5 ${
              isDarkText
                ? 'bg-primary hover:bg-primary-mid text-white shadow-primary/20 hover:shadow-lg hover:shadow-primary/30'
                : 'bg-white hover:bg-gray-50 text-primary shadow-black/10 hover:shadow-lg hover:shadow-black/20'
            }`}
          >
            <Phone className="w-4 h-4 rtl-flip" aria-hidden="true" />
            <span className="text-sm">اتصل الآن</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden z-50 p-2 rounded-lg transition-colors ${
            isDarkText ? 'text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-[#E8EEF9] shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1" aria-label="قائمة الجوال">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-bold py-3 px-4 rounded-xl transition-all ${
                    pathname === link.path
                      ? 'text-primary bg-primary/8'
                      : 'text-[#4A5568] hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#E8EEF9] flex flex-col gap-3">
                <a
                  href="tel:0545359694"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-full text-base"
                >
                  <Phone className="w-5 h-5 rtl-flip" aria-hidden="true" />
                  اتصل الآن
                </a>
                <a
                  href="https://wa.me/966545359694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-full text-base"
                >
                  تواصل واتساب
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
