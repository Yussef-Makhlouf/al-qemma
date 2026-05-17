'use client';

import { motion } from 'motion/react';
import { MapPin, Building2, Map, Compass, Navigation, Star, Phone } from 'lucide-react';

const regions = [
  {
    id: 'riyadh',
    city: 'منطقة الرياض',
    title: 'تغطية شاملة للعاصمة الرياض',
    description: 'نفخر في شركة القمة بتقديم خدمات تنظيف منازل وفلل متكاملة تغطي كافة أحياء العاصمة، مع فرق مجهزة وسيارات متنقلة لضمان أسرع استجابة لتلبية احتياجاتك.',
    districts: [
      { area: 'أحياء شمال الرياض', names: 'الملقا، الياسمين، النرجس، حطين، الصحافة، العقيق، الندى' },
      { area: 'أحياء شرق الرياض', names: 'القرطبي، اليرموك، المونسية، غرناطة، إشبيلية' },
      { area: 'أحياء وسط وجنوب الرياض', names: 'العليا، السليمانية، المربع، الشفا، الحزم، العزيزية' },
    ],
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    icon: Building2,
    gradient: 'from-blue-500/10 via-transparent to-transparent',
    color: 'text-blue-600',
    bgIconColor: 'text-blue-500/5',
  },
  {
    id: 'makkah',
    city: 'منطقة مكة المكرمة',
    title: 'جدة، مكة، والطائف',
    description: 'تغطية متميزة في عروس البحر الأحمر والعاصمة المقدسة لتقديم خدمات تعقيم وتنظيف بأعلى المعايير.',
    districts: [
      { area: 'أحياء جدة الفاخرة', names: 'الشاطئ، أبحر، المحمدية، المرجان، البساتين، الخالدية، الروضة' },
      { area: 'مكة المكرمة والطائف', names: 'العوالي، الشوقية، بطحاء قريش، شهار، الحوية' },
    ],
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    icon: Navigation,
    gradient: 'from-amber-500/10 via-transparent to-transparent',
    color: 'text-amber-600',
    bgIconColor: 'text-amber-500/5',
  },
  {
    id: 'eastern',
    city: 'المنطقة الشرقية',
    title: 'الدمام، الخبر، والظهران',
    description: 'مستوى عالٍ من الاحترافية لعملائنا في مدن المنطقة الشرقية. خدمات شاملة وموثوقة للمنازل والشركات.',
    districts: [
      { area: 'الدمام والخبر', names: 'الفيصلية، الشاطئ، الحزام الذهبي، العقربية، العليا' },
      { area: 'الظهران والجبيل', names: 'الدوحة، الدانة، القصور، الفناتير' },
    ],
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    icon: Map,
    gradient: 'from-emerald-500/10 via-transparent to-transparent',
    color: 'text-emerald-600',
    bgIconColor: 'text-emerald-500/5',
  },
  {
    id: 'madinah',
    city: 'توسع مستمر',
    title: 'المدينة المنورة والسعوديه',
    description: 'نلتزم بالوصول إلى عملائنا في مختلف المناطق للحفاظ على بيئة صحية ونظيفة، مسخرين أحدث التقنيات وأفضل الكوادر لضمان راحتكم.',
    districts: [
      { area: 'المدينة المنورة', names: 'العزيزية، الملك فهد، شوران، باقدو' },
      { area: 'منطقة السعوديه', names: 'بريدة، عنيزة، الرس، البكيرية' },
    ],
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    icon: Compass,
    gradient: 'from-primary/10 via-transparent to-transparent',
    color: 'text-primary',
    bgIconColor: 'text-primary/5',
  }
];

const seoKeywords = [
  'شركة تنظيف منازل بالرياض',
  'أفضل شركة تنظيف بجدة',
  'شركة نظافة عامة بالدمام',
  'تعقيم شقق بمكة المكرمة',
  'غسيل مجالس بالمدينة المنورة',
  'تنظيف كنب بالخبر',
  'شركة تنظيف بالسعوديه',
  'نظافة فلل بالطائف',
  'تنظيف واجهات زجاجية بالرياض',
  'شركة تنظيف مسابح بجدة',
  'جلي رخام بالدمام',
  'مكافحة حشرات بالرياض',
  'تنظيف سجاد بالرياض',
  'تنظيف كنب بالدمام',
  'تنظيف منازل بالرياض',
  'تنظيف فلل بالرياض',
  'تنظيف شقق بالرياض',
  'تنظيف خزانات بالرياض',
  'تنظيف مسابح بالرياض',
  'تنظيف مكيفات بالرياض',
  'تنظيف واجهات بالرياض',
  'تنظيف سجاد بالرياض',
  'تنظيف كنب بالرياض',
  'تنظيف منازل بالرياض',
  'تنظيف فلل بالرياض',
  'تنظيف شقق بالرياض',
  'تنظيف خزانات بالرياض',
  'تنظيف مسابح بالرياض',
  'تنظيف مكيفات بالرياض',
  'تنظيف واجهات بالرياض',
];

export function CitySection() {
  return (
    <section
      aria-labelledby="city-title"
      className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold mb-6 border border-primary/10 shadow-sm"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            تغطية شاملة للمملكة
          </motion.div>
          <motion.h2
            id="city-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-[1.3]"
          >
            نصلك أينما كنت في <span className="text-primary">أهم مدن وأحياء</span> المملكة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            نفخر في شركة القمة بتقديم خدمات النظافة المتكاملة عبر شبكة واسعة تغطي أهم المدن، مع التركيز على تلبية احتياجاتك في أسرع وقت وبأعلى مستويات الجودة والاحترافية.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {regions.map((region, idx) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col ${region.colSpan}`}
            >
              {/* Gradient background */}
              <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${region.gradient} opacity-60 pointer-events-none`} />

              {/* Large Background Icon */}
              <region.icon className={`absolute -bottom-6 -left-6 w-48 h-48 ${region.bgIconColor} -rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110 pointer-events-none`} aria-hidden="true" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                    <region.icon className={`w-6 h-6 ${region.color}`} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{region.city}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">{region.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{region.description}</p>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

                <ul className="space-y-3 mt-auto">
                  {region.districts.map(dist => (
                    <li key={dist.area} className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4 transition-colors hover:bg-slate-50">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className={`w-4 h-4 ${region.color}`} aria-hidden="true" />
                        <h4 className="font-bold text-slate-800 text-sm">{dist.area}</h4>
                      </div>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pr-6">{dist.names}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SEO Keywords Marquee */}
      <div className="mt-20 w-full overflow-hidden border-y border-slate-200 bg-white py-6 shadow-sm" dir='ltr'>
        <div className="max-w-7xl mx-auto px-4 mb-2 text-center sr-only">
          <h3>أبرز خدمات النظافة في مناطق المملكة</h3>
        </div>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex whitespace-nowrap gap-8 items-center w-max"
          style={{ direction: 'ltr' }}
        >
          {[1, 2].map((set, setIndex) => (
            <div key={setIndex} className="flex items-center gap-8" aria-hidden={setIndex !== 0}>
              {seoKeywords.map((keyword, idx) => (
                <div key={`${setIndex}-${idx}`} className="flex items-center gap-8">
                  <span className="text-slate-500 font-bold text-sm md:text-base flex items-center gap-2" dir="rtl">
                    <Star className="w-4 h-4 text-gold/80" aria-hidden="true" />
                    {keyword}
                  </span>
                  {/* Dot separator */}
                  <span className="w-2 h-2 rounded-full bg-slate-200" aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-6 font-medium text-lg">
            لم تجد حيك أو مدينتك في القائمة؟ نحن نتوسع باستمرار!
          </p>
          <a
            href="tel:+966579796006"
            aria-label="اتصل لمعرفة التوافر في منطقتك"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 group"
          >
            <Phone className="w-5 h-5 rtl-flip group-hover:scale-110 transition-transform" aria-hidden="true" />
            استفسر عن توفر الخدمة في منطقتك
          </a>
        </motion.div>
      </div>
    </section>
  );
}
