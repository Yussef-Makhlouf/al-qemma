import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, Star, BadgeCheck, ShieldCheck, Users, ArrowRight, Building2, Sparkles, Building, Briefcase, CheckCircle2 } from 'lucide-react';
import { ContactCTA } from '@/components/home/ContactCTA';
import { PromotionalBanner, promoBanners } from '@/components/ui/PromotionalBanner';

export const metadata: Metadata = {
  title: 'من نحن | القمة — رواد النظافة الاحترافية في السعودية',
  description: 'تعرف على قصة شركة القمة لخدمات النظافة، رؤيتنا، رسالتنا، وكيف تطورنا لنصبح الخيار الأول لتنظيف المنازل والمؤسسات في المملكة العربية السعودية.',
  alternates: {
    canonical: 'https://alqemma.sa/about',
  },
};

export default function AboutPage() {

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] sm:h-[50vh] flex flex-col justify-center overflow-hidden bg-[#0D1B35] pt-24 pb-16">          
          <div className="absolute inset-0 dot-pattern-white opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[120px] pointer-events-none mix-blend-screen" />

          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03]">
             <div className="text-[clamp(6rem,20vw,20rem)] font-bold tracking-tighter whitespace-nowrap text-white select-none">من نحن</div>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold px-4 py-1.5 rounded-full border border-white/20 mb-6 mx-auto">
                <span>الرئيسية</span>
                <ArrowRight className="w-3 h-3 rtl-flip" />
                <span className="text-gold">من نحن</span>
             </div>
             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                رواد النظافة <span className="text-gold">المهنية</span>
             </h1>
             <p className="text-white/70 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed">
               نصنع بيئات صحية وآمنة عبر تقديم خدمات تنظيف تعتمد على العلم والتكنولوجيا والالتزام التام بالجودة.
             </p>
          </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white py-16 sm:py-24 text-[#0D1B35] flex flex-col lg:flex-row relative overflow-hidden">
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 flex flex-col justify-center z-10">
             <div className="section-eyebrow mb-4">
               <Building2 className="w-3 h-3" />
               قصتنا
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
               من رؤية طموحة<br />إلى <span className="text-primary">صدارة السوق</span>
             </h2>
             <div className="space-y-6 text-[#4A5568] leading-relaxed font-light text-base sm:text-lg text-justify">
                <p>
                  تأسست شركة القمة للخدمات المتكاملة انطلاقاً من رؤية واضحة ومحددة: الارتقاء بصناعة النظافة في المملكة العربية السعودية من مجرد خدمة عمالة بسيطة، إلى صناعة احترافية تعتمد على المعايير الصحية العالمية، التكنولوجيا المتطورة، والتدريب التخصصي المستمر. نؤمن بأن النظافة ليست مجرد إزالة مرئية للأوساخ، بل هي التزام حقيقي بجودة الحياة، الصحة العامة، ورفاهية الإنسان في المكان الذي يشغله.
                </p>
                <p>
                  بدأنا رحلتنا بفريق صغير من الخبراء المتحمسين للتميز في الدمام، ومع مرور الوقت والالتزام الصارم بمعايير الجودة، تطورنا بفضل الله ثم بثقة عملائنا لنُصبح الخيار الأول لخدمات النظافة في المدينة. نخدم أكثر من ٥٠٠ منشأة تجارية وآلاف المنازل السكنية بأسطول كبير وفرق مؤهلة خضعت لأدق الفحوصات الأمنية والطبية.
                </p>
                <p>
                  اليوم، كل مهمة تنجزها "القمة" تحمل توقيعنا الذي نعتز به — ليس فقط في اللمعان والتعقيم الفائق للمكان، بل في الموثوقية التامة والراحة النفسية التي يشعر بها عميلنا عند كل زيارة.
                </p>
             </div>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[40vh] sm:min-h-[60vh] mt-12 lg:mt-0 flex items-center justify-center p-4 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7FF] to-white lg:rounded-l-[4rem] border border-[#E8EEF9] overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            </div>
            
            <div className="grid grid-cols-2 gap-6 sm:gap-8 relative z-10">
               <div className="card-light p-6 flex items-center justify-center translate-y-8">
                 <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-gold" strokeWidth={1} />
               </div>
               <div className="card-light p-6 flex items-center justify-center">
                 <Building className="w-16 h-16 sm:w-20 sm:h-20 text-primary" strokeWidth={1} />
               </div>
               <div className="card-light p-6 flex items-center justify-center translate-y-8">
                 <Users className="w-16 h-16 sm:w-20 sm:h-20 text-primary" strokeWidth={1} />
               </div>
               <div className="card-light p-6 flex items-center justify-center">
                 <Briefcase className="w-16 h-16 sm:w-20 sm:h-20 text-gold" strokeWidth={1} />
               </div>
            </div>
          </div>
      </section>

      <PromotionalBanner {...promoBanners[0]} />

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-24 bg-[#F4F7FF] relative border-y border-[#E8EEF9]">
         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-light p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                 <Target className="w-8 h-8 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
               </div>
               <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B35] mb-4">رسالتنا</h3>
               <p className="text-[#4A5568] font-light text-base leading-relaxed">
                 تقديم خدمات نظافة احترافية وعالمية المستوى بروح سعودية أصيلة. نلتزم بأدق تفاصيل التعقيم والتطهير للحفاظ على صحة وسلامة مجتمعنا وتوفير بيئات عمل وسكن خالية من الملوثات.
               </p>
            </div>
            
            <div className="card-light p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
               <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                 <Eye className="w-8 h-8 text-gold group-hover:text-white transition-colors" strokeWidth={1.5} />
               </div>
               <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B35] mb-4">رؤيتنا</h3>
               <p className="text-[#4A5568] font-light text-base leading-relaxed">
                 أن نرسخ مكانتنا كالخيار الأول والاسم الأكثر ثقة واعتمادية لكل منزل ومنشأة في كافة أنحاء المملكة، وأن نصبح المعيار الذي تُقاس عليه جودة خدمات النظافة محلياً وإقليمياً.
               </p>
            </div>

            <div className="card-light p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform md:col-span-1 sm:col-span-2 sm:max-w-md mx-auto w-full">
               <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                 <Star className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={1.5} />
               </div>
               <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B35] mb-4">قيمنا</h3>
               <p className="text-[#4A5568] font-light text-base leading-relaxed">
                 الشفافية والأمانة الجوهرية، الجودة الشاملة في كل خطوة، الابتكار واستخدام أحدث التقنيات، الالتزام بالسلامة البيئية، ورضا العميل المطلق كهدف لا تنازل عنه.
               </p>
            </div>
         </div>
      </section>

      <PromotionalBanner {...promoBanners[1]} />

      {/* The Al-Qemma Standard - SEO Rich Section */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F7FF] -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 sm:mb-24">
            <div className="section-eyebrow mx-auto mb-4">
              منهجية العمل
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B35] mb-6 leading-tight">
              معيار القمة للنظافة <span className="text-primary">الشاملة</span>
            </h2>
            <p className="text-[#4A5568] font-light text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              نحن لا نقدم مجرد خدمات تنظيف تقليدية، بل نتبنى منهجية علمية متكاملة لضمان القضاء التام على الجراثيم والميكروبات، وتوفير بيئة صحية وآمنة لك ولعائلتك.
            </p>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {/* Block 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-[2rem]" />
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                  <Image src="/home-disinfection.png" alt="التعقيم الطبي والتطهير العميق" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B35] mb-6">التعقيم العميق والتطهير الشامل</h3>
                <p className="text-[#4A5568] text-lg leading-relaxed mb-8 font-light text-justify">
                  نستخدم أحدث التقنيات والمعدات الطبية لضمان تعقيم كافة الأسطح والزوايا. فريقنا المتخصص يقوم بتطبيق بروتوكولات صارمة في التطهير تقضي على 99.9% من الفيروسات والبكتيريا، مما يوفر حماية مضاعفة للمنازل والمنشآت.
                </p>
                <ul className="space-y-4">
                  {['استخدام تقنية البخار الجاف للتعقيم.', 'القضاء التام على مسببات الحساسية والربو.', 'تطهير متكامل لجميع الأسطح كثيفة الاستخدام.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#0D1B35] font-medium">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gold/10 -translate-x-4 translate-y-4 rounded-[2rem]" />
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                  <Image src="/eco-friendly-cleaning-solutions.png" alt="مواد تنظيف صديقة للبيئة وآمنة" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B35] mb-6">حلول تنظيف صديقة للبيئة</h3>
                <p className="text-[#4A5568] text-lg leading-relaxed mb-8 font-light text-justify">
                  صحة عائلتك وبيئة عملك هي أولويتنا. لذا نعتمد حصرياً على منتجات ومواد تنظيف معتمدة دولياً، خالية من المواد الكيميائية القاسية، وآمنة تماماً للأطفال والحيوانات الأليفة مع الحفاظ على أعلى درجات الفعالية.
                </p>
                <ul className="space-y-4">
                  {['مواد عضوية وآمنة 100%.', 'عدم ترك أي روائح كيميائية مزعجة.', 'الحفاظ على جودة الأثاث والأقمشة الفاخرة.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#0D1B35] font-medium">
                      <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-accent/10 translate-x-4 translate-y-4 rounded-[2rem]" />
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                  <Image src="/professional-cleaning.png" alt="فريق عمل محترف ومدرب" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B35] mb-6">كوادر مهنية مدربة وموثوقة</h3>
                <p className="text-[#4A5568] text-lg leading-relaxed mb-8 font-light text-justify">
                  نجاح خدماتنا يعتمد على فريقنا الاستثنائي. كل عضو في عائلة القمة يخضع لبرامج تدريبية مكثفة وفحوصات أمنية دقيقة. نحن نقدم لك خبراء يمتلكون المهارة العالية والاحترافية التي تليق بتوقعاتك.
                </p>
                <ul className="space-y-4">
                  {['فحوصات أمنية وطبية دورية.', 'تدريب متخصص على أحدث طرق النظافة.', 'التزام تام بالمواعيد ودقة في التنفيذ.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#0D1B35] font-medium">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromotionalBanner {...promoBanners[2]} />

      {/* Geographic Reach & Impact */}
      <section className="relative py-24 sm:py-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0">
          <Image src="/jeddah-cleaning-services.png" alt="خدمات القمة للنظافة في السعودية" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0D1B35]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B35] to-[#0D1B35]/40 opacity-90" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              تغطية شاملة، <span className="text-gold">وتأثير ملموس</span>
            </h2>
            <p className="text-white/80 font-light text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              منذ انطلاقتنا، سعينا لأن نكون حاضرين حيثما تحتاجنا. نحن نفخر بخدمة آلاف العملاء في أبرز مناطق المملكة بكفاءة واحترافية.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { value: '+٥٠٠', label: 'عميل مؤسسي دائم', icon: Building2 },
              { value: '+١٠,٠٠٠', label: 'منزل تم تنظيفه', icon: Sparkles },
              { value: '٦', label: 'مناطق رئيسية', icon: Target },
              { value: '١٠٠٪', label: 'رضا العملاء المضمون', icon: ShieldCheck },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center flex flex-col items-center group hover:bg-white/20 transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mb-6 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tighter" dir="ltr">{stat.value}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Badges Marquee */}
      <section className="py-10 bg-primary text-white overflow-hidden" aria-label="الشهادات والاعتمادات" dir='ltr'>
         <div className="animate-marquee gap-8 sm:gap-16 flex items-center shrink-0 w-max" aria-hidden="true">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 sm:gap-16 ml-8 sm:ml-16">
                <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/20">
                   <BadgeCheck className="w-5 h-5 text-gold shrink-0" />
                   <span className="font-light text-sm sm:text-base">سجل تجاري: <span className="font-bold">7034259072</span></span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/20">
                   <BadgeCheck className="w-5 h-5 text-gold shrink-0" />
                   <span className="font-light text-sm sm:text-base">رقم ضريبي: <span className="font-bold">311700532900003</span></span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/20">
                   <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                   <span className="font-light text-sm sm:text-base">معتمد من هيئة الزكاة</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/20">
                   <Users className="w-5 h-5 text-gold shrink-0" />
                   <span className="font-light text-sm sm:text-base">عضو في غرفة التجارة</span>
                </div>
              </div>
            ))}
         </div>
      </section>

      <PromotionalBanner {...promoBanners[3]} />

      {/* Shared Contact CTA Component */}
      <ContactCTA />
    </>
  );
}
