import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center z-10 relative">
      <h2 className="text-4xl font-bold mb-4">404 - الصفحة غير موجودة</h2>
      <p className="text-lg text-white/70 mb-8">نعتذر، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
      <Link href="/" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-gold transition-colors">
        العودة للرئيسية
      </Link>
    </div>
  );
}
