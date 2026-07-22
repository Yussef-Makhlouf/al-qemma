import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { SplashScreen } from '@/components/ui/SplashScreen';

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#1A3A6B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://alqemma.sa'),
  title: {
    default: 'القمة للنظافة الاحترافية | شركة تنظيف منازل ومكاتب في الخبر',
    template: '%s | القمة للنظافة الاحترافية',
  },
  description:
    'شركة القمة الفريدة — خدمات تنظيف احترافية في الخبر. تنظيف منازل وفلل وشقق، كنب وسجاد ومجالس، مطابخ وحمامات وخزانات، تعقيم وتنظيف عميق. نخدم الخبر بأسرع استجابة وفرق مدربة. اتصل: 0545359694.',
  keywords: [
    // عام
    'شركة تنظيف', 'تنظيف منازل', 'تنظيف فلل', 'غسيل كنب', 'غسيل سجاد', 'تنظيف مجالس',
    'تنظيف مطابخ', 'تنظيف حمامات', 'تنظيف خزانات', 'تعقيم منازل', 'تنظيف بعد التشطيب', 'القمة الفريدة',
    // الخبر
    'شركة تنظيف الخبر', 'تنظيف منازل الخبر', 'غسيل كنب الخبر', 'تنظيف فلل الخبر', 'تنظيف شقق الخبر', 'تنظيف خزانات الخبر',
  ],
  manifest: '/manifest.json',
  authors: [{ name: 'شركة القمة لخدمات النظافه في السعوديه' }],
  creator: 'شركة القمة لخدمات النظافه في السعوديه',
  publisher: 'شركة القمة لخدمات النظافه في السعوديه',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://alqemma.sa',
    siteName: 'القمة للخدمات المتكاملة في الخبر',
    title: 'القمة للخدمات المتكاملة في الخبر | شركة تنظيف الخبر',
    description:
      'شركة القمة — نُقدم خدمات تنظيف احترافية لعملاء الخبر بفرق مدرّبة ومواد معتمدة وجودة عالية.',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'شركة القمة للخدمات المتكاملة في الخبر',
      },
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'شركة القمة لخدمات النظافه في الخبر',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'القمة لخدمات النظافه في الخبر | الخبر',
    description: 'خدمات نظافة احترافية للمنازل والمنشآت في الخبر.',
    images: ['/icon.png'],
  },
  alternates: {
    canonical: 'https://alqemma.sa',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'القمة',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <body className="antialiased font-sans bg-white text-[#0D1B35] overflow-x-hidden">
        <SplashScreen />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen relative w-full overflow-hidden">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
