import type { Metadata } from 'next';
import { Phone, MapPin, Clock, ArrowRight, Mail, Building2 } from 'lucide-react';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata: Metadata = {
   title: 'تواصل معنا | شركة القمة للنظافة الاحترافية — الخبر',
   description: 'اتصل بشركة القمة للنظافة مباشرة أو تواصل عبر الواتساب لطلب الخدمة أو الاستفسار. فريقنا متاح يومياً لتلبية احتياجاتك في الخبر.',
   alternates: {
      canonical: 'https://alqemma.sa/contact',
   },
};

export default function ContactPage() {
   return (
      <>
         {/* Hero */}
         <section className="relative min-h-[40vh] sm:h-[50vh] flex flex-col justify-center overflow-hidden bg-[#0D1B35] pt-24 pb-16">
            <div className="absolute inset-0 dot-pattern-white opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03]">
               <div className="text-[clamp(6rem,20vw,20rem)] font-bold tracking-tighter whitespace-nowrap text-white select-none">تواصل</div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
               <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold px-4 py-1.5 rounded-full border border-white/20 mb-6 mx-auto">
                  <span>الرئيسية</span>
                  <ArrowRight className="w-3 h-3 rtl-flip" />
                  <span className="text-gold">تواصل معنا</span>
               </div>
               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  نحن هنا <span className="text-gold">لخدمتك</span>
               </h1>
               <p className="text-white/70 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed">
                  تواصل معنا اليوم لحجز خدمة التنظيف الخاصة بك أو للاستفسار عن عروضنا المخصصة للشركات والمنازل في الخبر.
               </p>
            </div>
         </section>

         {/* Intro & Cards Section */}
         <section className="py-16 sm:py-24 bg-[#F4F7FF] relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
               <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B35] mb-6">قنوات الاتصال المباشرة</h2>
                  <p className="text-[#4A5568] max-w-3xl mx-auto text-base sm:text-lg font-light leading-relaxed">
                     في شركة القمة، نُدرك أن وقتك ثمين. لذلك استغنينا عن النماذج المعقدة واستبدلناها بقنوات تواصل مباشرة تضمن لك رداً فورياً واستجابة لا تتجاوز ٣٠ دقيقة. إذا كنت في الخبر، فإن فريق خدمة العملاء لدينا مستعد لتقديم استشارات مجانية، تقييم مبدئي لمتطلبات النظافة الخاصة بك، وجدولة المواعيد بمرونة تامة.
                  </p>
               </div>

               {/* Information Cards */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="card-light p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
                     <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <Phone className="w-8 h-8 text-primary group-hover:text-white rtl-flip transition-colors" aria-hidden="true" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0D1B35] mb-2">رقم الهاتف</h3>
                     <a href="tel:0545359694" className="text-primary font-mono font-bold text-lg hover:underline mb-2" dir="ltr">+966545359694</a>
                     <p className="text-[#4A5568] text-sm">متوفر طوال أيام الأسبوع</p>
                  </div>

                  <div className="card-light p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
                     <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                        <Building2 className="w-8 h-8 text-gold group-hover:text-white transition-colors" aria-hidden="true" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0D1B35] mb-2">المقر الرئيسي</h3>
                     <p className="text-[#0D1B35] font-bold text-lg mb-2">الخبر</p>
                     <p className="text-[#4A5568] text-sm leading-relaxed">الخبر، المنطقة الشرقية<br />المملكة العربية السعودية</p>
                  </div>

                  <div className="card-light p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
                     <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                        <MapPin className="w-8 h-8 text-accent group-hover:text-white transition-colors" aria-hidden="true" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0D1B35] mb-2">مناطق الخدمة</h3>
                     <p className="text-[#0D1B35] font-bold text-lg mb-2">الخبر</p>
                     <p className="text-[#4A5568] text-sm leading-relaxed">جميع أحياء الخبر وخدمات التنظيف المتخصصة داخل المدينة</p>
                  </div>

                  <div className="card-light p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
                     <div className="w-16 h-16 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#22c55e] transition-colors">
                        <Clock className="w-8 h-8 text-[#22c55e] group-hover:text-white transition-colors" aria-hidden="true" />
                     </div>
                     <h3 className="text-xl font-bold text-[#0D1B35] mb-2">ساعات العمل</h3>
                     <p className="text-[#0D1B35] font-bold text-lg mb-2">٧ ص - ١٠ م</p>
                     <p className="text-[#4A5568] text-sm leading-relaxed">من الأحد إلى الخميس<br />والجمعة والسبت للفرق الميدانية</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Main Massive CTA Component */}
         <ContactCTA />

         {/* Map Section */}
         <section aria-labelledby="map-title" className="py-16 sm:py-24 bg-white flex justify-center px-4 sm:px-6">
            <h2 id="map-title" className="sr-only">موقعنا على الخريطة</h2>
            <div className="w-full max-w-7xl h-[400px] sm:h-[500px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl relative border border-[#E8EEF9]">
               <iframe
                  title="موقع شركة القمة للخدمات المتكاملة على خرائط جوجل"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.838610529846!2d49.66458047596237!3d26.28947254578012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e58c27d60c0d%3A0xf93ee82749211f5a!2sKhobar%2023752%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sae!4v1753312399105!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.5]"
                  aria-hidden="false"
                  tabIndex={-1}
               />
            </div>
         </section>
      </>
   );
}
