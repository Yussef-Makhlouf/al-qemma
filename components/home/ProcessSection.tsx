'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ScanSearch, CalendarCheck, Wrench, ClipboardCheck, Handshake } from 'lucide-react';

const processes = [
  {
    step: '١',
    icon: ScanSearch,
    title: 'المعاينة المجانية',
    desc: 'نزور موقعك لتقييم الوضع وتحديد المتطلبات بدقة وشفافية كاملة قبل بدء العمل — بدون أي التزام منك.',
    color: 'bg-primary',
  },
  {
    step: '٢',
    icon: CalendarCheck,
    title: 'جدولة الموعد',
    desc: 'نحدد معك وقتاً مناسباً لجدولك الزمني — متوفرون حتى في نفس اليوم للحالات العاجلة والطارئة.',
    color: 'bg-gold',
  },
  {
    step: '٣',
    icon: Wrench,
    title: 'التنفيذ الاحترافي',
    desc: 'فريق مهني معتمد يُنجز المهمة بأعلى مستوى باستخدام أحدث المعدات ومواد التنظيف الآمنة والمعتمدة.',
    color: 'bg-accent',
  },
  {
    step: '٤',
    icon: ClipboardCheck,
    title: 'فحص الجودة',
    desc: 'مشرف الجودة يتفقد كل تفصيل قبل المغادرة مستخدماً قائمة مراجعة تفصيلية، ولا يُغادر إلا بعد موافقتك.',
    color: 'bg-[#22c55e]',
  }

];

function ProcessCard({ proc, idx }: { proc: typeof processes[0]; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex gap-5 sm:gap-8 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse lg:text-right' : ''}`}
    >
      {/* Step bubble */}
      <div className="shrink-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${proc.color} flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg relative`}
        >
          {proc.step}
          <proc.icon className="absolute -bottom-2 -right-2 w-6 h-6 text-white/30" aria-hidden="true" />
        </motion.div>
        {idx < processes.length - 1 && (
          <div className="w-px flex-1 mt-3 min-h-[3rem] bg-gradient-to-b from-[#E8EEF9] to-transparent" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 sm:pb-14 flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B35] mb-3">{proc.title}</h3>
        <p className="text-[#4A5568] font-light leading-relaxed text-base">{proc.desc}</p>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-title"
      className="py-16 sm:py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[#F4F7FF] pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-0 bottom-0 w-1/3 dot-pattern opacity-40 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-eyebrow mb-4">
                <ClipboardCheck className="w-3 h-3" aria-hidden="true" />
                كيف نعمل
              </div>
              <h2 id="process-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B35] mb-6">
                ٥ خطوات لنتيجة <span className="text-primary">مضمونة</span>
              </h2>
              <p className="text-[#4A5568] text-base sm:text-lg font-light leading-relaxed mb-8">
                من أول تواصل حتى ضمان الرضا — عملية واضحة وشفافة تضمن لك أعلى جودة في كل مرة.
              </p>
              <a
                href="tel:+966500000000"
                className="btn-primary inline-flex"
                aria-label="ابدأ الآن واتصل بنا"
              >
                ابدأ الآن — الاتصال مجاني
              </a>
            </motion.div>
          </div>

          {/* Right: Steps */}
          <div className="flex flex-col">
            {processes.map((proc, idx) => (
              <ProcessCard key={idx} proc={proc} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
