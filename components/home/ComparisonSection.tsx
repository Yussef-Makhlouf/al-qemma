'use client';

import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Award, TrendingUp, Shield } from 'lucide-react';

const comparisons = [
  {
    id: 'professional-vs-regular',
    icon: Award,
    title: 'النظافة الاحترافية مقابل العادية',
    subtitle: 'لماذا تختار شركة متخصصة؟',
    headers: ['المعيار', 'شركة القمة الاحترافية', 'التنظيف العادي'],
    rows: [
      { feature: 'مواد التنظيف', pro: 'معتمدة طبياً وآمنة للأطفال', basic: 'منظفات منزلية اعتيادية' },
      { feature: 'المعدات المستخدمة', pro: 'أجهزة بخار وشفط صناعية', basic: 'أدوات يدوية تقليدية' },
      { feature: 'التدريب والخبرة', pro: 'فرق مدربة ومعتمدة', basic: 'بدون تأهيل رسمي' },
      { feature: 'التأمين والمسؤولية', pro: '✓ مؤمن على الفريق كاملاً', basic: '✗ لا تأمين' },
      { feature: 'معايير الصحة', pro: 'HACCP + معايير وزارية', basic: 'معايير غير محددة' },
    ],
    proColor: 'text-primary',
    proHeaderBg: 'bg-primary text-white',
    checkColor: 'text-green-500',
    xColor: 'text-red-400',
  },
  {
    id: 'services-comparison',
    icon: TrendingUp,
    title: 'مقارنة خدمات التنظيف المتخصصة',
    subtitle: 'اختر الخدمة المناسبة لاحتياجك',
    headers: ['نوع المكان', 'التكرار المثالي', 'الخدمة الموصى بها', 'المدة التقديرية'],
    rows: [
      { feature: 'شقة / منزل صغير', pro: 'أسبوعياً', basic: 'تنظيف شامل', extra: '٣-٤ ساعات' },
      { feature: 'فيلا / منزل كبير', pro: 'أسبوعياً', basic: 'تنظيف عميق', extra: '٦-٨ ساعات' },
      { feature: 'مكتب ٢٠ موظف', pro: 'يومياً', basic: 'تنظيف يومي', extra: '١-٢ ساعة' },
      { feature: 'مستودع ١٠٠٠م²', pro: 'شهرياً', basic: 'تنظيف صناعي', extra: 'يوم كامل' },
      { feature: 'واجهة زجاجية', pro: 'شهرياً', basic: 'تنظيف خارجي', extra: '٢-٤ ساعات' },
      { feature: 'ما بعد البناء', pro: 'مرة واحدة', basic: 'تنظيف تشطيب', extra: '٨-١٢ ساعة' },
    ],
    isSchedule: true,
    proHeaderBg: 'bg-[#0D1B35] text-white',
  },
  {
    id: 'why-certified',
    icon: Shield,
    title: 'شركة مرخصة مقابل غير مرخصة',
    subtitle: 'احمِ منزلك وحافظ على حقوقك',
    headers: ['المعيار', 'شركة مرخصة كالقمة', 'شركة غير مرخصة'],
    rows: [
      { feature: 'السجل التجاري', pro: '✓ موثق رسمياً', basic: '✗ غير مسجلة' },
      { feature: 'الرقم الضريبي', pro: '✓ 311700532900003', basic: '✗ لا يوجد' },
      { feature: 'تأهيل العمال', pro: '✓ فحص أمني وتدريب', basic: '✗ غير موثق' },
      { feature: 'فاتورة رسمية', pro: '✓ فاتورة ضريبية كاملة', basic: '✗ لا فواتير' },
      { feature: 'المسؤولية القانونية', pro: '✓ مسؤولية كاملة عن الأضرار', basic: '✗ لا تعويض' },
      { feature: 'خدمة العملاء', pro: '✓ دعم مباشر على مدار اليوم', basic: '✗ لا دعم رسمي' },
    ],
    proColor: 'text-primary',
    proHeaderBg: 'bg-gold text-white',
    checkColor: 'text-green-500',
    xColor: 'text-red-400',
  },
];

export function ComparisonSection() {
  return (
    <section
      aria-labelledby="comparison-title"
      className="py-16 sm:py-24 bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="section-eyebrow mx-auto mb-4">
            <Award className="w-3 h-3" aria-hidden="true" />
            مقارنات شاملة
          </div>
          <h2 id="comparison-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B35] mb-4">
            قارن بنفسك واختر الأفضل
          </h2>
          <p className="text-[#4A5568] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            أرقام وحقائق تساعدك على اتخاذ قرار مستنير عند اختيار شركة النظافة المناسبة لك.
          </p>
        </motion.div>

        {/* Comparison Tables */}
        <div className="flex flex-col gap-10 sm:gap-14">
          {comparisons.map((table, tIdx) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: tIdx * 0.1 }}
              className="card-light overflow-hidden"
            >
              {/* Table Header */}
              <div className="flex items-center gap-4 p-6 sm:p-8 bg-[#F4F7FF] border-b border-[#E8EEF9]">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <table.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B35]">{table.title}</h3>
                  <p className="text-[#718096] text-sm mt-0.5">{table.subtitle}</p>
                </div>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px]" role="table">
                  <caption className="sr-only">{table.title}</caption>
                  <thead>
                    <tr className="border-b border-[#E8EEF9]">
                      {table.headers.map((header, hIdx) => (
                        <th
                          key={hIdx}
                          scope="col"
                          className={`px-4 sm:px-6 py-4 text-sm font-bold text-right ${
                            hIdx === 1
                              ? `${table.proHeaderBg} rounded-none`
                              : 'text-[#4A5568] bg-[#F4F7FF]'
                          }`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={`border-b border-[#E8EEF9] transition-colors hover:bg-[#F4F7FF] ${
                          rIdx === table.rows.length - 1 ? 'border-b-0' : ''
                        }`}
                      >
                        {/* Feature name */}
                        <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-[#0D1B35] bg-[#F4F7FF]/50">
                          {row.feature}
                        </td>

                        {/* Pro column */}
                        <td className="px-4 sm:px-6 py-4 bg-primary/3">
                          <span className="flex items-start gap-2">
                            {!table.isSchedule && (
                              <CheckCircle2
                                className="w-4 h-4 mt-0.5 text-green-500 shrink-0"
                                aria-hidden="true"
                              />
                            )}
                            <span className="text-sm font-semibold text-primary leading-snug">
                              {row.pro}
                            </span>
                          </span>
                        </td>

                        {/* Basic column or extra */}
                        <td className="px-4 sm:px-6 py-4">
                          {'extra' in row ? (
                            <span className="text-sm font-medium text-[#4A5568]">{row.extra}</span>
                          ) : (
                            <span className="flex items-start gap-2">
                              <XCircle
                                className="w-4 h-4 mt-0.5 text-red-400 shrink-0"
                                aria-hidden="true"
                              />
                              <span className="text-sm text-[#718096] leading-snug">{row.basic}</span>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer CTA */}
              <div className="p-5 sm:p-6 bg-[#F4F7FF] border-t border-[#E8EEF9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-[#718096] font-light">
                  * تستند المقارنة إلى معايير صناعية ومعايير شركة القمة الموثقة.
                </p>
                <a
                  href="tel:0545359694"
                  className="btn-primary text-sm px-6 py-2.5 whitespace-nowrap"
                >
                  احجز الآن مجاناً
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
