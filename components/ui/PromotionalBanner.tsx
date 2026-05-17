import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export interface PromotionalBannerProps {
  title: string;
  description: string;
  image: string;
  action: 'whatsapp' | 'call';
  link: string;
  cta: string;
}

export const promoBanners: PromotionalBannerProps[] = [
  {
    title: 'خدمات تنظيف شاملة ومتكاملة',
    description: 'احصل على بيئة نظيفة وصحية لعائلتك. نقدم أفضل خدمات النظافة بأسعار تنافسية تلبي احتياجاتك.',
    image: '/company-clean.png',
    action: 'whatsapp',
    link: 'https://wa.me/966579796006',
    cta: 'تواصل واتساب'
  },
  {
    title: 'نظافة مطبخك تهمنا',
    description: 'تنظيف عميق للمطابخ وإزالة أصعب الدهون بأحدث الأجهزة والمواد الفعالة لضمان مطبخ مشرق ونظيف.',
    image: '/kitchen-clean.png',
    action: 'call',
    link: 'tel:+966579796006',
    cta: 'اتصل بنا الآن'
  },
  {
    title: 'عناية فائقة وموثوقية',
    description: 'فريق عمل مدرب ومجهز بأحدث المعدات لضمان أعلى مستويات النظافة والتعقيم لكل زاوية في منزلك.',
    image: '/service1.png',
    action: 'whatsapp',
    link: 'https://wa.me/966579796006',
    cta: 'احجز خدمتك'
  },
  {
    title: 'تنظيف الفلل والقصور',
    description: 'خبرة طويلة في تنظيف المساحات الكبيرة وتلميع الواجهات والرخام بدقة عالية لتظهر الفيلا بأفضل حلة.',
    image: '/clean-villa.png',
    action: 'call',
    link: 'tel:+966579796006',
    cta: 'اطلب استشارة'
  }
];

export function PromotionalBanner({ title, description, image, action, link, cta }: PromotionalBannerProps) {
  return (
    <section className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          sizes="100vw"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/70 rtl:bg-gradient-to-r rtl:from-black/80 rtl:via-black/50 rtl:to-transparent"></div>
        {/* An extra overlay just in case the image is very bright */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl flex flex-col justify-center h-full text-right">
        <div className="max-w-2xl bg-black/20 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-white/10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h3>
          <p className="text-gray-100 text-lg sm:text-xl mb-10 leading-relaxed font-light drop-shadow-md">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href={link}
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                action === 'whatsapp' 
                  ? 'bg-[#25D366] hover:bg-[#20bd5a]' 
                  : 'bg-primary hover:bg-primary-dark'
              }`}
            >
              {action === 'whatsapp' ? (
                <MessageCircle className="w-6 h-6" />
              ) : (
                <Phone className="w-6 h-6" />
              )}
              <span>{cta}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
