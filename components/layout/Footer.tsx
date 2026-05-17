import Link from 'next/link';
import { Phone, CheckCircle2, ArrowLeft } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0D1B35] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Aurora glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Right Section (Brand & Contact) - 5 cols */}
          <div className="md:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center shadow-lg shadow-gold/20">
                <span className="text-white font-bold text-xl leading-none pt-1">ق</span>
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">القمة</div>
            </div>
            <p className="text-white/70 mb-8 max-w-sm font-light leading-relaxed text-base">
              نُعيد تعريف معايير النظافة المهنية في المملكة العربية السعودية بفرق عمل معتمدة، أنظمة جودة موثقة، وضمانات حقيقية لحماية منزلك وأعمالك.
            </p>
            
            <div className="flex flex-col gap-4 w-full sm:max-w-md">
              <a href="tel:+966500000000" className="flex items-center gap-4 text-white hover:text-gold transition-colors p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 w-full group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                   <Phone className="w-5 h-5 text-gold rtl-flip" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider mb-0.5">اتصال مباشر مجاني</span>
                  <span className="font-mono text-lg font-bold" dir="ltr">+966 50 000 0000</span>
                </div>
                <ArrowLeft className="w-5 h-5 text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-auto rtl-flip" />
              </a>
            </div>
          </div>

          {/* Middle Section (Links & Services) - 3 cols */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-1 bg-gold rounded-full" />
              الخدمات الرئيسية
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: 'تنظيف المنازل', path: '/services' },
                { name: 'تنظيف المكاتب والشركات', path: '/services' },
                { name: 'تنظيف ما بعد البناء', path: '/services' },
                { name: 'غسيل الكنب والمفروشات', path: '/services' },
                { name: 'تنظيف الواجهات الزجاجية', path: '/services' },
                { name: 'التنظيف الصناعي', path: '/services' },
              ].map((item, idx) => (
                 <li key={idx}>
                    <Link href={item.path} className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm group">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors" />
                      {item.name}
                    </Link>
                 </li>
              ))}
            </ul>
          </div>

          {/* Left Section (Legal & Certifications) - 4 cols */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-1 bg-gold rounded-full" />
              الاعتمادات القانونية
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <span className="block text-xs text-white/50 mb-1.5">السجل التجاري</span>
                  <span className="font-mono text-gold font-bold text-lg">7034259072</span>
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <span className="block text-xs text-white/50 mb-1.5">الرقم الضريبي</span>
                  <span className="font-mono text-gold font-bold text-lg">3117005329</span>
                </div>
              </div>
              
              <div className="bg-[#15803d]/10 border border-[#15803d]/20 rounded-2xl p-4 flex items-start gap-3 mt-2">
                <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  مؤسسة سعودية معتمدة رسمياً، نقدم فواتير ضريبية لجميع خدماتنا وتأميناً كاملاً على ممتلكاتك أثناء العمل.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          <p className="text-xs text-white/40 font-light text-center md:text-right">
            &copy; {new Date().getFullYear()} شركة القمة للخدمات المتكاملة — جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="/" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <Link href="/" className="hover:text-white transition-colors">الشروط والأحكام</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <Link href="/" className="hover:text-white transition-colors">خريطة الموقع</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
