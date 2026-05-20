'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Home, Building2, HardHat, Sofa, Sparkles, Droplets, Wind, FlameKindling, ShieldCheck, Layers, ArrowLeft, CheckCircle2, Warehouse, Building, Fan } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'تنظيف المنازل والفلل',
    desc: 'من الأسقف للأرضيات، ما في زاوية تُتجاهل. فريقنا يبدأ بخطة واضحة ومواد آمنة على أسرتك وأطفالك. الفرق واضح قبل ما يغادر فريقنا.',
    icon: Home,
    benefits: ['تعقيم شامل للحمامات', 'جلي الأرضيات والرخام', 'تنظيف المطابخ بالكامل'],
    color: 'from-primary to-primary-mid',
    lightColor: 'bg-primary/7',
    iconColor: 'text-primary',
    badgeColor: 'bg-primary/10 text-primary',
    tag: 'الأكثر طلباً',
    className: 'md:col-span-2 lg:col-span-2',
    large: true,
  },
  {
    id: 2,
    title: 'تنظيف الكنب والمجالس',
    desc: 'المجلس وجه البيت. نتعامل مع القماش من الداخل بمواد خاصة لكل نوع، سواء مخمل أو جلد أو ميكروفايبر.',
    icon: Sofa,
    benefits: ['بخار حار للألياف', 'إزالة البقع العنيدة'],
    color: 'from-[#4DA6E8] to-[#7ECEF4]',
    lightColor: 'bg-accent/7',
    iconColor: 'text-accent',
    badgeColor: 'bg-accent/10 text-[#2B7AB0]',
    tag: 'مفروشات',
    className: 'md:col-span-1 lg:col-span-1',
    large: false,
  },
  {
    id: 3,
    title: 'تنظيف السجاد والموكيت',
    desc: 'السجاد يمتص كل شيء، بخار حراري يصل الألياف الداخلية ويزيل ما تراكم لتعود الألوان لأصلها.',
    icon: Layers,
    benefits: ['بخار ١٢٠ درجة', 'إزالة البكتيريا'],
    color: 'from-[#C8A96E] to-[#E8C98E]',
    lightColor: 'bg-gold/7',
    iconColor: 'text-gold',
    badgeColor: 'bg-gold/10 text-[#8a7040]',
    tag: 'تخصصي',
    className: 'md:col-span-1 lg:col-span-1',
    large: false,
  },
  {
    id: 4,
    title: 'المطابخ والحمامات',
    desc: 'الشحوم المتراكمة والترسبات الكلسية تحتاج مواد مخصصة. مطبخك وحمامك بعد زيارتنا سيبدو مختلفاً.',
    icon: FlameKindling,
    benefits: ['إزالة الشحوم', 'تعقيم ضد البكتيريا'],
    color: 'from-[#e05d5d] to-[#f0948c]',
    lightColor: 'bg-red-50',
    iconColor: 'text-red-500',
    badgeColor: 'bg-red-50 text-red-600',
    tag: 'ضروري',
    className: 'md:col-span-1 lg:col-span-1',
    large: false,
  },
  {
    id: 5,
    title: 'خزانات المياه',
    desc: 'تفريغ وتنظيف جداري وتعقيم كامل. لأن المياه التي تستخدمها أنت وأسرتك تبدأ من هنا.',
    icon: Droplets,
    benefits: ['تفريغ وتعقيم', 'إزالة الترسبات'],
    color: 'from-[#0ea5e9] to-[#38bdf8]',
    lightColor: 'bg-sky-50',
    iconColor: 'text-sky-500',
    badgeColor: 'bg-sky-50 text-sky-600',
    tag: 'صحة أسرتك',
    className: 'md:col-span-1 lg:col-span-1',
    large: false,
  },
  {
    id: 6,
    title: 'تعقيم وإزالة الروائح',
    desc: 'التعقيم مختلف عن التنظيف. نحدد المصدر ونعالجه بتقنية الأوزون لإزالة الرائحة بشكل نهائي، مو مجرد عطر يغطي المشكلة.',
    icon: ShieldCheck,
    benefits: ['مواد معتمدة', 'تقنية الأوزون', 'نتيجة دائمة'],
    color: 'from-[#22c55e] to-[#4ade80]',
    lightColor: 'bg-green-50',
    iconColor: 'text-green-600',
    badgeColor: 'bg-green-50 text-green-700',
    tag: 'وقاية',
    className: 'md:col-span-2 lg:col-span-2',
    large: true,
  },
  {
    id: 7,
    title: 'تنظيف بعد التشطيب',
    desc: 'غبار الجبس وبقايا الدهانات هذا النوع مختلف تماماً. نبدأ بالغبار الثقيل ثم التفاصيل لنسلمك منزلك جاهزاً للسكن.',
    icon: HardHat,
    benefits: ['إزالة غبار البناء', 'إذابة الدهانات', 'تلميع نهائي'],
    color: 'from-[#2B5FA5] to-[#4A80C4]',
    lightColor: 'bg-[#2B5FA5]/7',
    iconColor: 'text-[#2B5FA5]',
    badgeColor: 'bg-[#2B5FA5]/10 text-[#2B5FA5]',
    tag: 'مشاريع',
    className: 'md:col-span-2 lg:col-span-2',
    large: false,
  },

  {
    id: 9,
    title: 'تنظيف الزجاج والمكاتب',
    desc: 'الزجاج المتسخ يُثقل مظهر المكان. فريقنا يتعامل معه بمحلول متخصص ومعدات احترافية لشفافية تامة ولمعان لا مثيل له.',
    icon: Wind,
    benefits: ['بدون خدوش', 'محلول متخصص', 'تلميع فائق'],
    color: 'from-[#8B5CF6] to-[#A78BFA]',
    lightColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    badgeColor: 'bg-purple-50 text-purple-700',
    tag: 'مكاتب',
    className: 'md:col-span-1 lg:col-span-2',
    large: false,
  },
  {
    id: 10,
    title: 'تنظيف واجهات المباني',
    desc: 'واجهة المبنى تعكس صورة المكان. فريق متخصص يستخدم معدات السلامة لتنظيف الواجهات الزجاجية والحجرية بدقة.',  
    icon: Building,
    benefits: ['معدات سلامة', 'واجهات زجاجية', 'إزالة بقع'],
    color: 'from-[#F59E0B] to-[#FBBF24]',
    lightColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    badgeColor: 'bg-amber-50 text-amber-700',
    tag: 'واجهات',
    className: 'md:col-span-1 lg:col-span-2',
    large: true,
  },
];

export function ServicesGallery() {
  return (
    <section
      aria-labelledby="services-gallery-title"
      className="py-16 sm:py-24 bg-[#F4F7FF] relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div>
            <div className="section-eyebrow mb-3">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              خدماتنا في الدمام
            </div>
            <h2 id="services-gallery-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B35] mb-3">
              ١٦ خدمة تنظيف في الدمام
            </h2>
            <p className="text-[#4A5568] text-base sm:text-lg max-w-xl font-light leading-relaxed">
              من تنظيف المنازل والفلل، لغسيل الكنب والسجاد، للتعقيم الكامل — فريقنا جاهز لكل طلب داخل الدمام.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden sm:flex items-center gap-2 text-primary font-bold group hover:gap-3 transition-all shrink-0"
            aria-label="عرض جميع الخدمات"
          >
            عرض كل الخدمات
            <ArrowLeft className="w-4 h-4 rtl-flip group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative card-light overflow-hidden flex flex-col ${service.className || ''} ${service.large ? 'min-h-[240px]' : 'min-h-[280px]'}`}
            >
              {/* Gradient hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`} />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${service.lightColor} flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 shrink-0`}>
                    <service.icon
                      className={`w-7 h-7 ${service.iconColor} group-hover:text-white transition-colors duration-300`}
                      aria-hidden="true"
                    />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${service.badgeColor} group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}>
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0D1B35] group-hover:text-white mb-2 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#4A5568] group-hover:text-white/80 text-sm sm:text-base font-light leading-relaxed mb-5 transition-colors duration-300 flex-1">
                  {service.desc}
                </p>

                {/* Benefits */}
                <ul className="flex flex-wrap gap-2 mb-5">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${service.iconColor} group-hover:text-white/70 transition-colors duration-300`} aria-hidden="true" />
                      <span className="text-xs text-[#4A5568] group-hover:text-white/80 transition-colors duration-300">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/services"
                  aria-label={`اعرف أكثر عن ${service.title}`}
                  className="inline-flex items-center gap-2 font-semibold text-sm group-hover:text-white transition-colors duration-300"
                >
                  <span className={`${service.iconColor} group-hover:text-white`}>اعرف أكثر</span>
                  <ArrowLeft
                    className={`w-4 h-4 rtl-flip ${service.iconColor} group-hover:text-white group-hover:-translate-x-1 transition-all duration-300`}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link href="/services" className="btn-primary">
            عرض كل الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
}
