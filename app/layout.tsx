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
    default: 'القمة للنظافة الاحترافية | شركة تنظيف منازل ومكاتب في السعودية',
    template: '%s | القمة للنظافة الاحترافية',
  },
  description:
    'شركة القمة الفريدة — خدمات تنظيف احترافية في جميع مدن المملكة العربية السعودية. تنظيف منازل وفلل وشقق، كنب وسجاد ومجالس، مطابخ وحمامات وخزانات، تعقيم وتنظيف عميق. نخدم الرياض وجدة والسعوديه والدمام وجميع مدن المملكة. اتصل: 0579796006.',
  keywords: [
    // عام
    'شركة تنظيف', 'تنظيف منازل', 'تنظيف فلل', 'غسيل كنب', 'غسيل سجاد', 'تنظيف مجالس',
    'تنظيف مطابخ', 'تنظيف حمامات', 'تنظيف خزانات', 'تعقيم منازل', 'تنظيف بعد التشطيب', 'القمة الفريدة',
    // الرياض
    'شركة تنظيف الرياض', 'تنظيف منازل الرياض', 'غسيل كنب الرياض', 'تنظيف فلل الرياض', 'تنظيف شقق الرياض',
    // جدة
    'شركة تنظيف جدة', 'تنظيف منازل جدة', 'غسيل كنب جدة', 'تنظيف فلل جدة',
    // السعوديه
    'شركة تنظيف السعوديه', 'تنظيف منازل بريدة', 'تنظيف فلل عنيزة', 'غسيل كنب بريدة', 'تنظيف مجالس بريدة',
    // الدمام
    'شركة تنظيف الدمام', 'تنظيف منازل الدمام', 'غسيل كنب الدمام',
  ],
  manifest: '/manifest.json',
  authors: [{ name: 'شركة القمة للخدمات المتكاملة' }],
  creator: 'شركة القمة للخدمات المتكاملة',
  publisher: 'شركة القمة للخدمات المتكاملة',
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
    siteName: 'القمة للنظافة الاحترافية',
    title: 'القمة للنظافة الاحترافية | شركة تنظيف رائدة في السعودية',
    description:
      'شركة القمة — نُعيد تعريف معايير النظافة المهنية في المملكة العربية السعودية. خدمات تنظيف شاملة للمنازل والمنشآت بكوادر مدرّبة ومواد معتمدة.',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'شركة القمة للنظافة الاحترافية في السعودية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'القمة للنظافة الاحترافية | السعودية',
    description: 'خدمات نظافة احترافية للمنازل والمنشآت في المملكة العربية السعودية.',
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
