'use client';

import { motion } from 'motion/react';
import { MapPin, Building2, Map, Compass, Navigation, Star, Phone } from 'lucide-react';

const regions = [
  {
    id: 'khobar',
    city: 'الخبر',
    title: 'خدمات التنظيف الاحترافية في الخبر',
    description: 'نقدم خدمات نظافة متكاملة للمنازل والفلل والمكاتب داخل الخبر، مع فرق مدربة ومعدات متخصصة لاستجابة سريعة وجودة عالية.',
    districts: [
      { area: 'أحياء الخبر الرئيسية', names: 'الفيصلية، الشاطئ، الحزام الذهبي، العقربية، العليا، الخزامى' },
      { area: 'خدمات متخصصة في الخبر', names: 'غسيل كنب، تنظيف سجاد، تنظيف خزانات، تعقيم، تنظيف بعد التشطيب' },
    ],
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    icon: MapPin,
    gradient: 'from-emerald-500/10 via-transparent to-transparent',
    color: 'text-emerald-600',
    bgIconColor: 'text-emerald-500/5',
  },
];

const seoKeywords = [
  'شركة تنظيف الخبر',
  'تنظيف منازل الخبر',
  'تنظيف فلل الخبر',
  'غسيل كنب الخبر',
  'تنظيف سجاد الخبر',
  'تنظيف خزانات الخبر',
  'تعقيم الخبر',
  'تنظيف مكاتب الخبر',
  'شركة نظافة عامة بالخبر',
  'جلي رخام بالخبر',
  'تنظيف كنب بالخبر',
  'تنظيف منازل بالخبر',
  'تنظيف فلل بالخبر',
  'تنظيف شقق بالخبر',
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
            تغطية شاملة للدمام
          </motion.div>
          <motion.h2
            id="city-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-[1.3]"
          >
            خدمات النظافة الاحترافية في <span className="text-primary">الخبر</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            نقدم خدمات تنظيف متكاملة في الخبر للمنزل والشركة، مع استجابة سريعة وفرق مدربة للحفاظ على مكانك نظيفا وصحياً.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed mt-6"
          >
            نفخر في شركة القمة بتقديم خدمات النظافة المتكاملة داخل الخبر، مع التركيز على تلبية احتياجاتك بسرعة ومهنية عالية.
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
            خدماتنا متوفرة حالياً في الخبر بالكامل، ونضمن لك سرعة الاستجابة والجودة في كل زيارة.
          </p>
          <a
            href="tel:0545359694"
            aria-label="اتصل لطلب خدمة التنظيف في الخبر"
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
