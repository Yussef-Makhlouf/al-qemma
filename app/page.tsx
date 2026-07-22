import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesGallery } from '@/components/home/ServicesGallery';
import { ComparisonSection } from '@/components/home/ComparisonSection';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { ArticlesSection } from '@/components/home/ArticlesSection';
import { CitySection } from '@/components/home/CitySection';
import { SEOSection } from '@/components/home/SEOSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ContactCTA } from '@/components/home/ContactCTA';
import { PromotionalBanner, promoBanners } from '@/components/ui/PromotionalBanner';

export const metadata: Metadata = {
  title: 'شركة القمة الفريدة | خدمات تنظيف احترافية في الخبر',
  description:
    'القمة الفريدة — الشركة الرائدة في خدمات التنظيف الاحترافية في الخبر. تنظيف منازل وفلل وشقق، كنب وسجاد، مطابخ وحمامات، تعقيم وتنظيف عميق. نخدم الخبر بأعلى مستوى وأسرع استجابة. اتصل: 0545359694.',
  alternates: {
    canonical: 'https://al-qemma.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://al-qemma.com/#business',
      name: 'القمة الفريدة',
      alternateName: 'Al-Qemma Unique Cleaning',
      description:
        'شركة متخصصة في خدمات النظافة الاحترافية للمنازل والفلل والمكاتب في الخبر',
      url: 'https://al-qemma.com',
      telephone: '0545359694',
      logo: 'https://al-qemma.com/logo.png',
      image: 'https://al-qemma.com/og-image.jpg',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'SA',
        addressRegion: 'المنطقة الشرقية',
        addressLocality: 'الخبر',
        streetAddress: 'الخبر، المملكة العربية السعودية'
      },
      areaServed: [
        { '@type': 'City', name: 'الخبر' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '22:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
      priceRange: '$$',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات النظافة في الخبر',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف المنازل في الخبر' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف الفلل في الخبر' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف الشقق في الخبر' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف السجاد بالبخار' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف الكنب في الخبر' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف المجالس في الخبر' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف الموكيت بالبخار' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف المطابخ' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف الحمامات وتعقيمها' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف خزانات المياه' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف الزجاج والنوافذ' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف بعد التشطيب' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف المكاتب والشركات' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تعقيم وتطهير المنازل' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف عميق شامل' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'إزالة الروائح الكريهة' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تنظيف واجهات زجاجية' } },

        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://rtscllean.com/#website',
      url: 'https://rtscllean.com',
      name: 'القمة الفريدة',
      inLanguage: 'ar',
      publisher: { '@id': 'https://alqemma.sa/#business' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'الرئيسية',
          item: 'https://alqemma.sa',
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Rich JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Mega Home Page */}
      <HeroSection />
      <ServicesGallery />
      <PromotionalBanner {...promoBanners[0]} />
      <WhyUsSection />
      <ProcessSection />
      <PromotionalBanner {...promoBanners[1]} />
      <CitySection />
      <ComparisonSection />
      <PromotionalBanner {...promoBanners[2]} />
      <ArticlesSection />
      <SEOSection />
      <PromotionalBanner {...promoBanners[3]} />
      <ContactCTA />
    </>
  );
}
