'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, BookOpen } from 'lucide-react';

const articles = [
  {
    title: 'لماذا النظافة المهنية ليست رفاهية — بل ضرورة صحية؟',
    content: 'النظافة الاحترافية تتجاوز المظاهر — إنها استثمار حقيقي في الصحة والإنتاجية ومستوى الحياة. الدراسات العلمية الحديثة أثبتت أن البيئة النظيفة تُقلّل الغيابات المرضية بنسبة تصل إلى ٤٠٪ وتُحسّن الإنتاجية بمقدار ١٥٪. استخدام مواد تنظيف طبية ومعايير متقدمة يسهم في القضاء على البكتيريا والفيروسات التي لا تراها العين المجردة، مما يبني أساساً متيناً لحياة صحية في منزلك أو مقر عملك. الميكروبات المتراكمة على الأسطح غير المُعقَّمة بشكل صحيح تعيش لفترات تصل إلى ٧٢ ساعة، مما يُعرّض أفراد أسرتك لمخاطر صحية مستمرة.',
  },
  {
    title: 'كيف تختار شركة نظافة موثوقة في السعودية؟ ٧ معايير لا تتنازل عنها',
    content: 'المعايير الأساسية التي يجب التحقق منها: أولاً السجل التجاري المعتمد والرقم الضريبي الموثق من الزكاة والضريبة. ثانياً بوليصة التأمين على الفريق ضد الحوادث والأضرار. ثالثاً شهادات التدريب المعتمدة لكافة أعضاء الفريق. رابعاً إمكانية التحقق من هويات العمال. خامساً ضمانات مكتوبة واضحة. سادساً مراجع موثوقة من عملاء سابقين. سابعاً سياسة واضحة للمسؤولية عن الأضرار. الشركات غير المرخصة قد تُكلّفك الكثير نتيجة تلف الممتلكات أو غياب المسؤولية القانونية.',
  },
  {
    title: 'تنظيف ما بعد البناء في السعودية — الدليل الكامل لعام ٢٠٢٥',
    content: 'أكثر أنواع التنظيف تعقيداً تقنياً وأشدّها خطورة إن أُهمل. تشمل المرحلة: إزالة بقايا الإسمنت والجبس، تنظيف الزجاج من شوائب البناء والدهانات، معالجة الرخام والأرضيات الخشبية بحذر شديد. التخلص من الغبار الدقيق الذي يدخل في منافذ التكييف يتطلب أجهزة شفط صناعية متخصصة لا تتوفر للاستخدام المنزلي، وهي خطوة حاسمة قبل الانتقال. الغبار الجبسي الدقيق يُسبّب مشاكل في التنفس وقد يُتلف أجهزة التكييف إن لم يُعالَج بشكل صحيح.',
  },
  {
    title: 'العناية بالكنب والمفروشات — لماذا تُطيل عمرها ٣ أضعاف؟',
    content: 'البقع القديمة والعثّ والروائح مشاكل يتجاهلها كثيرون حتى يصبح التلف لا رجعة فيه. التنظيف الدوري كل ٦ أشهر يحافظ على الألياف، يزيل مسببات الحساسية من العمق ويُقلّل من استهلاك المفروشات بشكل ملحوظ. التقنية المعتمدة لدينا هي Hot Water Extraction — استخراج المياه الساخنة — التي تستهدف استخراج الأوساخ من الأعماق دون إلحاق الضرر بالأقمشة. عث الغبار المتراكم في المفروشات هو أكثر مُسببات الحساسية شيوعاً في المنازل السعودية.',
  },
  {
    title: 'تنظيف المكاتب التجارية وأثره المباشر على الإنتاجية والمبيعات',
    content: 'بيئة العمل النظيفة ترفع تركيز الموظفين وتُقلّل معدلات المرض والغياب. المنشآت التي تستثمر في نظافة مهنية منتظمة تُسجّل انخفاضاً في دوران الموظفين ومستوى رضا أعلى للعملاء والزوار. دراسة نشرتها Harvard Business Review أثبتت أن الموظفين في بيئات نظيفة يُنجزون ١٥٪ أكثر يومياً. نحن نوفر جدولة مرنة خارج أوقات العمل لضمان عدم إزعاج السير المنتظم لأعمالك.',
  },
  {
    title: 'تنظيف الواجهات الزجاجية — الاستثمار الأجمل لمبناك التجاري',
    content: 'الواجهة المتلألئة هي أول انعكاس لاحترافية وجودة من بداخل المبنى. الدراسات التسويقية تُثبت أن النظافة الخارجية للمبنى تؤثر مباشرة على تصورات العملاء وقرارات الشراء بنسبة تفوق ٦٠٪. نقدم خدمات تنظيف شاملة للارتفاعات باستخدام سقالات آمنة وفرق مدربة للوصول إلى أدق الزوايا، مع إزالة الترسبات الكلسية والأملاح الناتجة عن الغبار والرياح الموسمية.',
  },
];

export function SEOSection() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section
      aria-labelledby="seo-section-title"
      className="py-16 sm:py-24 bg-[#F4F7FF] relative overflow-hidden"
    >
      {/* Ghost bg text */}
      <div className="absolute top-0 left-0 overflow-hidden pointer-events-none select-none opacity-[0.03]" aria-hidden="true">
        <span className="text-[clamp(8rem,20vw,250px)] font-bold text-primary whitespace-nowrap">محتوى</span>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="section-eyebrow mx-auto mb-4">
            <BookOpen className="w-3 h-3" aria-hidden="true" />
            مقالات متعمقة
          </div>
          <h2 id="seo-section-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B35] mb-4">
            دليلك الشامل للنظافة الاحترافية
          </h2>
          <p className="text-[#4A5568] text-base sm:text-lg max-w-2xl mx-auto font-light">
            محتوى متخصص يُجيب على أهم تساؤلاتك حول خدمات التنظيف الاحترافي.
          </p>
        </motion.div>

        {/* Accordion Articles */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {articles.map((article, idx) => {
            const isExpanded = openIdx === idx;
            const headingId = `seo-h-${idx}`;
            const panelId = `seo-p-${idx}`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`card-light overflow-hidden transition-all ${isExpanded ? 'ring-2 ring-primary/20' : ''}`}
              >
                <h3 id={headingId} className="m-0">
                  <button
                    onClick={() => setOpenIdx(isExpanded ? -1 : idx)}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-right focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors group hover:bg-[#F4F7FF] rounded-[20px]"
                  >
                    <span className={`text-base sm:text-lg font-bold transition-colors ${isExpanded ? 'text-primary' : 'text-[#0D1B35] group-hover:text-primary'}`}>
                      {article.title}
                    </span>
                    <div
                      className={`w-9 h-9 shrink-0 mr-4 rounded-full flex items-center justify-center transition-all ${isExpanded ? 'bg-primary text-white' : 'bg-[#F4F7FF] text-[#4A5568] group-hover:bg-primary/10 group-hover:text-primary'}`}
                      aria-hidden="true"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 border-t border-[#E8EEF9] pt-4">
                        <p className="text-[#4A5568] leading-relaxed font-light text-base sm:text-lg">
                          {article.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
