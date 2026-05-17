'use client';

import { motion } from 'motion/react';
import { Phone, MapPin, Clock, MessageCircle, Zap } from 'lucide-react';

export function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-title"
      className="py-16 sm:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-primary rounded-3xl sm:rounded-[2.5rem] overflow-hidden p-8 sm:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 dot-pattern-white opacity-20 pointer-events-none" />
          <div className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          {/* Ghost text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
            <span className="text-[clamp(5rem,15vw,18rem)] font-bold text-white/[0.03] whitespace-nowrap select-none">تواصل</span>
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                  <Zap className="w-3 h-3 fill-gold text-gold" aria-hidden="true" />
                  نستجيب خلال ٣٠ دقيقة
                </div>
                <h2 id="contact-cta-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                  نحن على بُعد
                  <br />
                  <span className="text-gold">مكالمة واحدة</span>
                </h2>
                <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl">
                  لا نماذج معقدة، لا انتظار طويل. اتصل مباشرة وسيرد عليك أحد مسؤولينا فوراً. فريقنا جاهز من الساعة السابعة صباحاً حتى العاشرة مساءً طوال أيام الأسبوع.
                </p>
           
              </div>

              {/* Right: CTA Cards */}
              <div className="flex flex-col gap-4">
                {/* Phone CTA */}
                <motion.a
                  href="tel:+966500000000"
                  aria-label="اتصل بنا الآن على الهاتف"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 bg-gold text-white rounded-2xl p-5 sm:p-6 shimmer-btn shadow-xl shadow-gold/30 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                    <Phone className="w-7 h-7 rtl-flip" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white/80 text-xs font-semibold mb-1 uppercase tracking-wider">اتصل مباشرة</div>
                    <div className="text-xl sm:text-2xl font-bold">اتصل بنا الآن</div>
                    <div className="text-white/70 font-mono text-sm mt-0.5" dir="ltr">+966 50 000 0000</div>
                  </div>
                </motion.a>

                {/* WhatsApp CTA */}
                <motion.a
                  href="https://wa.me/966500000000?text=مرحباً، أريد الاستفسار عن خدمات القمة"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="راسلنا على واتساب"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 sm:p-6 shadow-xl shadow-[#25D366]/20 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-2xl animate-pulse-ring opacity-40 pointer-events-none" style={{ border: '2px solid #25D366' }} />
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors relative z-10">
                    <MessageCircle className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-white/80 text-xs font-semibold mb-1 uppercase tracking-wider">واتساب</div>
                    <div className="text-xl sm:text-2xl font-bold">راسلنا فوراً</div>
                    <div className="text-white/80 text-sm mt-0.5">متاحون للرد المباشر</div>
                  </div>
                </motion.a>

                {/* Guarantee note */}
                <div className="text-center text-white/50 text-xs font-light">
                  ✓ معاينة مجانية &nbsp;·&nbsp; ✓ عرض سعر فوري &nbsp;·&nbsp; 
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
