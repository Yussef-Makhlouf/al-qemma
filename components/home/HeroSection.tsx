'use client';

import { motion } from 'motion/react';
import { Phone, BadgeCheck, Users, Clock, ShieldCheck, ArrowLeft, Star, MapPin } from 'lucide-react';
import Image from 'next/image';

const trustBadges = [
  { icon: BadgeCheck, text: 'معتمدون رسمياً' },
    { icon: Clock, text: 'خدمة ٧ أيام' },
];

export function HeroSection() {
  return (
    <section
      aria-label="القسم الرئيسي"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="./cover.png"
          alt="تنظيف احترافي - شركة القمة"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Gradient overlays for depth and readability */}
        <div className="absolute inset-0 bg-[#0D1B35]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1B35]/50 to-[#0D1B35]/90" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>

      {/* Aurora blobs - updated colors for dark background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40 mix-blend-screen">
        <div className="absolute top-[-20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-primary/40 animate-aurora blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/30 animate-aurora2 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-gold/20 animate-float-slow blur-[80px]" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none mix-blend-overlay z-0" />

      {/* Ghost text */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <div className="text-[clamp(10rem,25vw,25rem)] font-bold text-white/[0.02] whitespace-nowrap select-none">
          القمة
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-16 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium px-5 py-2 rounded-full border border-white/20 shadow-xl shadow-black/10">
            <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
            <span>الأول في خدمات النظافة بالسعودية</span>
            <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.15] text-white mb-6 tracking-tight drop-shadow-2xl"
        >
          نُعيد تعريف
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#fff8e7] to-gold animate-gradient-x px-3 pb-2 inline-block">
            النظافة الاحترافية
          </span>
          لبيئتك
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-200 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-2xl drop-shadow-lg"
        >
          شركة القمة — نقدم خدمات تنظيف شاملة للمنازل والفلل والمكاتب في السعودية بكوادر مؤهلة و مواد معتمدة.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 mb-14 w-full sm:w-auto"
        >
          <a
            href="tel:+966579796006"
            aria-label="اتصل بنا الآن"
            className="group flex items-center justify-center gap-3 bg-primary text-white font-bold px-10 py-4 sm:py-5 rounded-full transition-all duration-300 shimmer-btn shadow-[0_0_40px_rgba(34,111,180,0.4)] hover:bg-primary-mid hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(34,111,180,0.6)] focus:ring-4 focus:ring-primary/30 outline-none"
          >
            <Phone className="w-5 h-5 rtl-flip group-hover:animate-wiggle" aria-hidden="true" />
            <span className="text-lg">اتصل بنا الآن</span>
          </a>

          <a
            href="/services"
            className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 font-bold px-10 py-4 sm:py-5 rounded-full transition-all duration-300 hover:-translate-y-1 focus:ring-4 focus:ring-white/20 outline-none shadow-lg"
          >
            <span className="text-lg">تصفح خدماتنا</span>
            <ArrowLeft className="w-5 h-5 rtl-flip group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-4xl"
        >
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-[#0D1B35]/40 backdrop-blur-md rounded-2xl px-5 py-3.5 border border-white/10 hover:bg-[#0D1B35]/60 hover:border-white/20 transition-all duration-300 group cursor-default">
              <div className="bg-white/10 rounded-full p-1.5 group-hover:bg-gold/20 transition-colors">
                <badge.icon className="w-4 h-4 text-gold" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-white/90">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-12 flex items-center justify-center gap-2 text-white/60 text-sm bg-black/20 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/5"
        >
          <MapPin className="w-4 h-4 text-gold/70" />
          <span>نغطي كافة مناطق المملكة العربية السعودية</span>
        </motion.div>
      </div>
    </section>
  );
}

