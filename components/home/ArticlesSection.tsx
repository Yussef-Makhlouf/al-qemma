'use client';

import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ShieldCheck, Home, Factory, PaintRoller, ChevronLeft } from 'lucide-react';

export function ArticlesSection() {
  return (
    <section
      aria-labelledby="main-article-title"
      className="py-20 sm:py-32 bg-[#FAFCFF] relative overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" aria-hidden="true" />
      {/* Soft Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Main Article Content - Left side (RTL -> Right side) */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-8 bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-14 shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-white"
          >
            {/* Editorial Header */}
            <header className="mb-12 sm:mb-16 border-b border-gray-100 pb-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2.5 border border-primary/10 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                  رؤية الخبراء في النظافة
                </span>
                <span className="text-[#718096] text-sm font-medium px-2 border-r-2 border-gray-200">دليل شامل</span>
              </motion.div>
              
              <h2 id="main-article-title" className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#0D1B35] leading-[1.4] mb-8 tracking-tight">
                لماذا تعتبر الاستعانة بـ <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-blue-600 to-accent">شركة تنظيف محترفة</span> ضرورة حتمية وليست مجرد رفاهية؟
              </h2>
              
              <p className="text-lg sm:text-xl text-[#4A5568] font-light leading-[1.8] max-w-3xl">
                اكتشف كيف ترتقي خدمات النظافة الشاملة بجودة حياتك وتحمي استثماراتك، بدءاً من غسيل السجاد وتنظيف المنازل بدقة، وصولاً إلى تعقيم المستودعات وتهيئة المباني بعد التشطيب بأعلى المعايير.
              </p>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg sm:prose-xl max-w-none text-[#4A5568] leading-[2] space-y-16">
              
              {/* Intro Quote Style */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl sm:text-2xl leading-[1.8] text-[#1a202c] font-medium border-r-4 border-primary pr-8 py-6 bg-gradient-to-l from-primary/[0.03] to-transparent rounded-l-3xl"
              >
                "في عالم تتسارع فيه وتيرة الحياة، لم يعد تنظيف المنزل أو مساحة العمل مجرد مهمة روتينية، بل أصبح استثماراً حقيقياً في الصحة العامة والإنتاجية. الحقيقة أن هناك فرقاً شاسعاً وملموساً بين التنظيف السطحي والتعقيم الاحترافي العميق."
              </motion.div>

              {/* Section 1 */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <Home className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B35] m-0 leading-snug">نظافة المنازل وغسيل السجاد: حماية لصحتك وأناقة تدوم</h3>
                </div>
                <p className="text-lg text-[#4A5568] leading-[1.9]">
                  تعتبر المفروشات والسجاد واجهة منزلك الأساسية، ولكنها في الوقت نفسه تمثل البيئة الأكثر خصبة لتراكم الأتربة الدقيقة، والميكروبات، ومسببات الحساسية التي لا تُرى بالعين المجردة. إن الاستعانة بخبراء <strong>شركة غسيل سجاد وتنظيف كنب</strong> يضمن تطبيق تقنيات متطورة مثل الشفط العميق والتنظيف بالبخار الحار؛ وهي تقنيات تفتت البقع المستعصية وتقضي على البكتيريا من جذورها. 
                  <br/><br/>
                  التنظيف العميق والدوري للمنازل لا يمنحك فقط بيئة صحية وآمنة لعائلتك، بل يلعب دوراً محورياً في إطالة العمر الافتراضي لمفروشاتك وأثاثك الثمين، مما يوفر عليك الكثير من التكاليف على المدى الطويل ويحافظ على رونق منزلك.
                </p>
              </motion.section>

              {/* Section 2 */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                    <PaintRoller className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B35] m-0 leading-snug">التنظيف بعد البناء والتشطيب: اللمسة السحرية لبيت الأحلام</h3>
                </div>
                <p className="text-lg text-[#4A5568] leading-[1.9]">
                  دائماً ما تترك مرحلة ما بعد البناء أو الترميم وراءها فوضى عارمة وتحديات صعبة: بقايا إسمنت صلبة، قطرات طلاء متناثرة، وغبار دقيق يتسلل إلى أدق الزوايا ومنافذ التهوية. هذا الغبار الإنشائي بالذات، إذا لم يتم التعامل معه باحترافية، قد يسبب مشاكل تنفسية خطيرة ويفسد فلاتر وأنظمة التكييف المركزية.
                  <br/><br/>
                  هنا تبرز الأهمية البالغة لطلب خدمات <strong>تنظيف الفلل بعد التشطيب</strong>. تمتلك الفرق المتخصصة معدات صناعية جبارة ومذيبات آمنة تماماً تزيل أصعب الرواسب دون الإضرار بالأسطح الجديدة والمكلفة، سواء كانت رخاماً طبيعياً حساساً أو أرضيات باركيه فاخرة، لتدخل منزلك الجديد وهو في أبهى حلة وأعلى درجات النقاء التام.
                </p>
              </motion.section>

              {/* Section 3 */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#0D1B35]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0D1B35] group-hover:text-white transition-all duration-500 shadow-sm">
                    <Factory className="w-7 h-7 text-[#0D1B35] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B35] m-0 leading-snug">نظافة المستودعات والمرافق التجارية: بيئة آمنة وإنتاجية مضاعفة</h3>
                </div>
                <p className="text-lg text-[#4A5568] leading-[1.9]">
                  لا تقتصر أهمية التعقيم والنظافة على القطاع السكني والمنازل، بل تمتد لتكون ركيزة أساسية في القطاع التجاري والصناعي. تتطلب عمليات <strong>تنظيف المستودعات</strong>، المصانع، والمكاتب التجارية معايير صارمة تتوافق كلياً مع اشتراطات الجودة والسلامة المهنية العالمية.
                  <br/><br/>
                  إن الإزالة الدورية للشحوم، الزيوت، وتراكمات الغبار الصناعي تقلل بشكل كبير من مخاطر الحوادث المحتملة، وتوفر بيئة عمل صحية ونظيفة ترفع من كفاءة العاملين وحالتهم النفسية، مما ينعكس مباشرة على الإنتاجية. التعاقد المجدول مع شركة نظافة تقدم حلولاً متكاملة يعني الحفاظ الفعال على سلامة البضائع، المعدات، والأرواح في آن واحد، وتأمين بيئة عمل خالية من الملوثات.
                </p>
              </motion.section>

            </div>
          </motion.article>

          {/* Sticky Sidebar / Highlights - Right side (RTL -> Left side) */}
          <motion.aside 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-4 lg:sticky lg:top-32 space-y-8"
          >
            {/* Highlight Card 1 */}
            <div className="card-light p-8 rounded-[2rem] bg-white border border-[#E8EEF9] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-shadow duration-500">
              <h4 className="text-xl sm:text-2xl font-bold text-[#0D1B35] mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                لماذا نحن خيارك الأول؟
              </h4>
              <ul className="space-y-5">
                {[
                  'مواد تنظيف آمنة ومعتمدة عالمياً ومحلياً',
                  'طاقم عمل فني مدرب على أعلى مستوى',
                  'معدات وأجهزة حديثة للتعقيم العميق',
                  'مرونة فائقة في المواعيد لتناسب جدولك',
                  'أسعار تنافسية وباقات خدمات شاملة',
                  'ضمان الجودة ورضا العملاء بنسبة 100%'
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#10b981] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[#4A5568] text-base font-semibold group-hover:text-[#0D1B35] transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick Contact / CTA Card */}
            <div className="rounded-[2rem] bg-gradient-to-br from-[#0D1B35] via-[#1a365d] to-[#0D1B35] p-8 text-white relative overflow-hidden group shadow-xl">
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/40 rounded-full blur-[50px] group-hover:bg-primary/50 group-hover:scale-110 transition-all duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent/30 rounded-full blur-[40px] group-hover:bg-accent/40 group-hover:scale-110 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium border border-white/20 mb-6">
                    استشارة مجانية
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">هل تبحث عن مستوى نظافة لا يُضاهى؟</h4>
                  <p className="text-[#E2E8F0] text-base leading-[1.8]">
                    نحن هنا لنحول بيئتك إلى مساحة تشع بالنقاء والإشراق. تواصل مع خبرائنا اليوم لتحصل على تقييم دقيق لاحتياجاتك وباقات تناسب ميزانيتك.
                  </p>
                </div>
                <a 
                  href="#contact" 
                  className="mt-auto inline-flex items-center justify-center gap-3 w-full bg-white text-[#0D1B35] font-bold text-lg py-4 px-6 rounded-xl hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_20px_rgb(255,255,255,0.15)]"
                >
                  اطلب خدمتك الآن
                  <ChevronLeft className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.aside>

        </div>

        {/* Schema: Article for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'لماذا تعتبر الاستعانة بشركة تنظيف محترفة ضرورة وليست رفاهية؟',
              description: 'اكتشف كيف ترتقي خدمات النظافة الشاملة بجودة حياتك وتحمي استثماراتك، بدءاً من غسيل السجاد وتنظيف المنازل إلى تعقيم المستودعات وتهيئة المباني بعد التشطيب.',
              author: {
                '@type': 'Organization',
                name: 'شركة القمة للخدمات المتكاملة',
              },
              publisher: {
                '@type': 'Organization',
                name: 'شركة القمة للخدمات المتكاملة',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://al-qemma.com/logo.png'
                }
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://al-qemma.com/#articles'
              },
              keywords: 'شركة تنظيف, تنظيف منازل, غسيل سجاد, تنظيف كنب, تنظيف فلل بعد التشطيب, تنظيف مستودعات, خدمات نظافة'
            }),
          }}
        />
      </div>
    </section>
  );
}
