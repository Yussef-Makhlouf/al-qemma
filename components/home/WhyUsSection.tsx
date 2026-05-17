'use client';

import { motion } from 'motion/react';
import { BadgeCheck, ShieldCheck, Users, ClipboardCheck, Handshake, Leaf } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  {
    id: 1,
    icon: BadgeCheck,
    number: '01',
    title: 'معايير HACCP الغذائية',
    desc: 'فرقنا مدرّبة على أعلى معايير النظافة المعتمدة في بيئات الأغذية والمرافق الطبية، مما يضمن نظافة حقيقية لا مجرد نظافة مظهرية.',
    stat: 'ISO معتمد',
    color: 'bg-primary',
    image: '/professional-cleaning.png',
  },
  {
    id: 2,
    icon: ShieldCheck,
    number: '02',
    title: 'مواد تنظيف آمنة ومعتمدة',
    desc: 'نستخدم حصراً منتجات آمنة للأطفال والحيوانات الأليفة، خالية من الكيماويات القاسية.',
    stat: '١٠٠٪ آمن',
    color: 'bg-[#22c55e]',
    image: '/home-disinfection.png',
  },
  {
    id: 3,
    icon: Users,
    number: '03',
    title: 'فرق موثقة ومؤمّن عليها',
    desc: 'كل عضو في فرقنا خضع لفحص أمني شامل ومعتمد، ومؤمن عليه بالكامل ضد الحوادث.',
    stat: '+٥٠٠ عميل',
    color: 'bg-gold',
    image: '/jeddah-cleaning-services.png',
  },
  {
    id: 4,
    icon: ClipboardCheck,
    number: '04',
    title: 'نظام جودة موثق',
    desc: 'إجراءات عمل موثقة وتقارير جودة تفصيلية تُقدَّم لك بعد كل مهمة من مشرف الجودة.',
    stat: 'تقرير جودة',
    color: 'bg-accent',
    image: '/spring-cleaning.png',
  },
  {
    id: 5,
    icon: Handshake,
    number: '05',
    title: 'ضمان الرضا ٤٨ ساعة',
    desc: 'إن لم تكن راضياً بنسبة ١٠٠٪ عن مستوى الخدمة، نعود ونُنجز المهمة مجدداً مجاناً تاماً.',
    stat: 'ضمان مكتوب',
    color: 'bg-[#f59e0b]',
    image: '/cover.avif',
  },
  {
    id: 6,
    icon: Leaf,
    number: '06',
    title: 'مواد صديقة للبيئة',
    desc: 'نلتزم باستخدام منتجات صديقة للبيئة قابلة للتحلل لتقليل الأثر البيئي دون المساس بالجودة.',
    stat: 'Green Certified',
    color: 'bg-[#10b981]',
    image: '/eco-friendly-cleaning-solutions.png',
  },
];

export function WhyUsSection() {
  return (
    <section
      aria-labelledby="why-us-title"
      className="py-16 sm:py-24 bg-[#F4F7FF] relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16 text-center mx-auto"
        >
          <div className="section-eyebrow mb-4 justify-center">
            <BadgeCheck className="w-3 h-3" aria-hidden="true" />
            مزايانا التنافسية
          </div>
          <h2 id="why-us-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B35] mb-4">
            لماذا يختار <span className="text-primary">٥٠٠+</span> عميل القمة؟
          </h2>
          <p className="text-[#4A5568] text-base sm:text-lg font-light leading-relaxed">
            الريادة في تقديم حلول النظافة المتكاملة بمعايير عالمية وتقنيات حديثة.
          </p>
        </motion.div>

        {/* Mobile Swiper & Desktop Bento Grid (Zero Lag) */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 gap-4 sm:gap-6 w-full md:grid-cols-2 lg:grid-cols-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reasons.map((item, idx) => {
            // Zigzag Bento Pattern (Desktop only):
            // Row 1: 2 cols, 1 col
            // Row 2: 1 col, 2 cols
            // Row 3: 2 cols, 1 col
            const spanClass = 
              idx === 0 ? "md:col-span-2 lg:col-span-2" :
              idx === 3 ? "md:col-span-2 lg:col-span-2" :
              idx === 4 ? "md:col-span-2 lg:col-span-2" :
              "md:col-span-1";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl overflow-hidden group border border-white/50 shadow-sm shrink-0 w-[85vw] sm:w-[400px] md:w-auto snap-center h-[380px] md:h-[300px] sm:h-[350px] ${spanClass}`}
              >
                {/* Background Image (Hardware Accelerated Scale) */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                />

                {/* Permanent Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B35]/95 via-[#0D1B35]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  
                  {/* Top Right Number */}
                  <div className="absolute top-6 right-6">
                     <span className="text-white/30 font-mono font-bold text-4xl">
                      {item.number}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="transform transition-transform duration-500 ease-out md:translate-y-8 md:group-hover:translate-y-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color} shadow-lg shadow-black/20`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
                        <span className="text-xs font-bold text-white">{item.stat}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    
                    {/* Description (Always visible on mobile, fades in on hover on desktop) */}
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 line-clamp-3 md:line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Certification Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-24 bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 dot-pattern-white opacity-40 pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">سجلنا التجاري وبياناتنا الرسمية</h3>
              <p className="text-white/70 text-sm font-light">نعمل بشفافية كاملة — يمكنك التحقق من بياناتنا الرسمية في أي وقت.</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center">
                <div className="text-xs text-white/60 mb-1">السجل التجاري</div>
                <div className="font-mono font-bold text-gold text-sm">7034259072</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center">
                <div className="text-xs text-white/60 mb-1">الرقم الضريبي</div>
                <div className="font-mono font-bold text-gold text-sm">311700532900003</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

