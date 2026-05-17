import type { Metadata } from 'next';
import Image from 'next/image';
import { Home as HomeIcon, Building2, HardHat, Sofa, Sparkles, Droplets, Wind, FlameKindling, ShieldCheck, Layers, Eye, ArrowRight, CheckCircle2, Warehouse } from 'lucide-react';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'خدمات شركة القمة للتنظيف الاحترافية في السعودية',
  description: 'شركة القمة الفريدة – ١٦ خدمة تنظيف احترافية في السعودية. تنظيف منازل وفلل وشقق، كنب وسجاد وموكيت، مطابخ وحمامات وخزانات، تعقيم وتنظيف عميق. نخدم جميع انحاء المملكة. اتصل: 0579796006.',
  alternates: {
    canonical: 'https://alqemma.sa/services',
  },
};

const services = [
  {
    id: "homes",
    icon: HomeIcon,
    image: "/home-disinfection.png",
    imageAlt: "تنظيف منازل احترافي في السعوديه",
    title: "تنظيف المنازل في السعوديه – نتيجة تراها قبل ما يغادر فريقنا",
    desc: "كثير من شركات التنظيف تجي وتروح، والمنزل يبقى زي ما هو. نحن نشتغل بطريقة مختلفة. فريقنا يبدأ من الأسقف للأرضيات، ما في زاوية تُتجاهل. نستخدم معدات احترافية ومنظفات آمنة على أسرتك وأطفالك. المنزل بعد زيارتنا ما يحتاج تشرح، الفرق واضح.",
    includes: [
      "تعقيم شامل للمطابخ والحمامات وإزالة الترسبات الكلسية",
      "تنظيف عميق للأرضيات وتلميع الرخام والسيراميك",
      "مسح الغبار عن الأثاث والأسطح والأجهزة بحذر",
      "تنظيف النوافذ الداخلية والمسارات المخفية",
      "تطهير نقاط التلامس العالية (مقابض، مفاتيح، أجهزة)"
    ],
    tag: "منازل وفلل",
    color: "from-primary/20 to-transparent",
    iconColor: "text-primary",
    bgClass: "bg-white",
  },
  {
    id: "villas",
    icon: Building2,
    image: "/professional-cleaning.png",
    imageAlt: "تنظيف فلل في السعوديه",
    title: "تنظيف الفلل في السعوديه – لأن الفيلا الكبيرة تحتاج فريق يفهم حجمها",
    desc: "الفيلا مساحتها كبيرة، وزوايا كثيرة تتراكم فيها الأتربة بدون ما تلاحظ. سواء كانت فيلا حديثة أو قديمة، نحن اشتغلنا على أنواعها كلها. فريقنا يضع خطة واضحة قبل ما يبدأ ويوزع الأدوار بشكل منظم. الهدف الواحد: كل غرفة، كل ممر، كل حمام، ينتهي بمستوى واحد من النظافة.",
    includes: [
      "خطة تنظيف مفصّلة حسب مساحة الفيلا",
      "فريق موزّع بشكل منظم لتغطية كل الأدوار",
      "تنظيف الغرف والممرات والحمامات بمستوى موحّد",
      "إزالة الأتربة من الزوايا والأسقف والأركان",
      "تعقيم شامل للمناطق الحساسة"
    ],
    tag: "فلل كبيرة",
    color: "from-gold/20 to-transparent",
    iconColor: "text-gold",
    bgClass: "bg-[#F4F7FF]",
  },
  {
    id: "apartments",
    icon: HomeIcon,
    image: "/spring-cleaning.png",
    imageAlt: "تنظيف شقق في السعوديه",
    title: "تنظيف الشقق في السعوديه – سريع، دقيق، وبسعر يناسبك",
    desc: "الشقة المرتبة بتفرق في مزاجك اليومي. سواء استأجرت شقة جديدة أو تريد تنظيف دوري لشقتك الحالية، نحن نتعامل مع كل حالة بشكل مختلف. ما نجي بروتين ثابت لكل شقة، نشوف الوضع أول ونحدد الأولويات. خدمة سريعة ما تعطل يومك.",
    includes: [
      "تقييم حالة الشقة قبل البدء",
      "تحديد الأولويات حسب احتياج كل مكان",
      "تنظيف سريع لا يعطل يومك",
      "مناسب لشقق جديدة أو التنظيف الدوري",
      "أسعار تنافسية تناسب الميزانيات المختلفة"
    ],
    tag: "شقق سكنية",
    color: "from-accent/20 to-transparent",
    iconColor: "text-accent",
    bgClass: "bg-white",
  },
  {
    id: "carpet",
    icon: Layers,
    image: "/carpet-cleaning.avif",
    imageAlt: "تنظيف سجاد بالبخار في السعوديه",
    title: "تنظيف السجاد في السعوديه – البقع تروح، الألوان ترجع",
    desc: "السجاد يمتص كل شيء، الأتربة، الروائح، بقع الشاي والعصير. والمشكلة إن أغلب التنظيف السطحي يخفي المشكلة بدل ما يحلها. نحن نستخدم تقنية غسيل عميق بالبخار تصل للألياف الداخلية وتزيل ما تراكم فيها. السجادة بعد التنظيف أخف وزناً وأنظف مما تتوقع.",
    includes: [
      "بخار حراري يصل للألياف الداخلية",
      "إزالة بقع الشاي والعصير والزيوت",
      "تعقيم وقتل البكتيريا والعث",
      "معالجة الروائح من المصدر",
      "تجفيف سريع في نفس اليوم"
    ],
    tag: "سجاد وموكيت",
    color: "from-[#22c55e]/20 to-transparent",
    iconColor: "text-[#22c55e]",
    bgClass: "bg-[#F4F7FF]",
  },
  {
    id: "sofa",
    icon: Sofa,
    image: "/professional-cleaning.png",
    imageAlt: "تنظيف كنب في السعوديه",
    title: "تنظيف الكنب في السعوديه – الكنب الجديد ما تحتاج يكون جديداً",
    desc: "الكنب يتحمل يومياً الجلوس والأكل واللعب، وبمرور الوقت تبدأ تشوف التغيير في لونه وشكله. تنظيف الكنب عندنا مو بس مسح سطحي. نشتغل على القماش من الداخل بمواد خاصة لكل نوع قماش، سواء كان قطني أو مخمل أو جلد أو ميكروفايبر. كنبتك ما بتحتاج تشتري غيرها.",
    includes: [
      "تحديد نوع القماش قبل اختيار المادة",
      "تنظيف عميق للقطني والمخمل والجلد والميكروفايبر",
      "إزالة بقع الطعام والمشروبات",
      "معالجة الروائح المتراكمة",
      "ضمان النتيجة أو إعادة العمل مجاناً"
    ],
    tag: "كنب وأرائك",
    color: "from-[#f59e0b]/20 to-transparent",
    iconColor: "text-[#f59e0b]",
    bgClass: "bg-white",
  },
  {
    id: "majlis",
    icon: Sparkles,
    image: "/home-disinfection.png",
    imageAlt: "تنظيف مجالس في السعوديه",
    title: "تنظيف المجالس في السعوديه – المجلس السعودي له مكانة تستحق عناية حقيقية",
    desc: "المجلس هو وجه البيت. أول ما يدخل الضيف يشوف المجلس، وآخر ما يذكره لما يخرج. نحن نتعامل مع تنظيف المجالس بجدية تختلف عن التنظيف العادي. الفرش، الوسائد، الأرضيات، الزوايا، كل شيء يطلع بمستوى يليق باستقبال ضيوفك.",
    includes: [
      "تنظيف الفرش والوسائد بمواد خاصة",
      "تعقيم الأرضيات والزوايا المخفية",
      "تنظيف الستائر وإزالة الأتربة",
      "معالجة الروائح بتقنية الأوزون",
      "مستوى احترافي يليق باستقبال الضيوف"
    ],
    tag: "مجالس وديوانيات",
    color: "from-primary/20 to-transparent",
    iconColor: "text-primary",
    bgClass: "bg-[#F4F7FF]",
  },
  {
    id: "moquette",
    icon: Layers,
    image: "/carpet-cleaning.avif",
    imageAlt: "تنظيف موكيت بالبخار في السعوديه",
    title: "تنظيف الموكيت بالسعودية – حل نهائي لما تجمع من أتربة وروائح",
    desc: "الموكيت يمسك الأتربة والبكتيريا أكثر من أي سطح ثاني في المنزل. ما يكفيه مكنسة كهربائية. نحن نستخدم ماكينات بخار حرارية عالية تخترق ألياف الموكيت وتقضي على ما فيه بالكامل. الموكيت بعد التنظيف أكثر صحية لأسرتك.",
    includes: [
      "ماكينات بخار حرارية عالية الضغط",
      "تخترق الألياف وتقضي على البكتيريا",
      "إزالة الأتربة والروائح من العمق",
      "آمن على الأطفال والحيوانات الأليفة",
      "تجفيف سريع بعد التنظيف"
    ],
    tag: "موكيت",
    color: "from-[#22c55e]/20 to-transparent",
    iconColor: "text-[#22c55e]",
    bgClass: "bg-white",
  },
  {
    id: "kitchen",
    icon: FlameKindling,
    image: "/professional-cleaning.png",
    imageAlt: "تنظيف مطابخ في السعوديه",
    title: "تنظيف المطابخ في السعوديه – الدهون والبخار ما يصمدون أمام فريقنا",
    desc: "المطبخ يحتاج تنظيفاً مختلفاً. الشحوم المتراكمة على الدواليب، بقايا البخار على الجدران، الشعلات والأفران، كل هذا يحتاج مواد ومعدات مخصصة. ما نجي بمنظف عادي ونمسح. نتعامل مع كل سطح بما يناسبه. مطبخك بعد زيارتنا يبدو مختلفاً.",
    includes: [
      "إزالة الشحوم من الدواليب والجدران",
      "تنظيف الشعلات والأفران بمواد مخصصة",
      "معالجة البخار المتراكم على الأسطح",
      "تلميع البلاط والفواصل",
      "تعقيم كامل لمناطق تحضير الطعام"
    ],
    tag: "مطابخ",
    color: "from-[#f97316]/20 to-transparent",
    iconColor: "text-[#f97316]",
    bgClass: "bg-[#F4F7FF]",
  },
  {
    id: "bathroom",
    icon: ShieldCheck,
    image: "/home-disinfection.png",
    imageAlt: "تنظيف وتعقيم حمامات في السعوديه",
    title: "تنظيف الحمامات في السعوديه – تعقيم كامل، مو بس مسح",
    desc: "الحمام نظيف لما يكون معقماً، مو بس لما يبدو نظيفاً. الترسبات الكلسية على الأحواض والحنفيات، التعفن حول الأطواق والسيفون، كلها تحتاج معالجة صحيحة. نحن نستخدم منتجات مضادة للبكتيريا ومعتمدة تضمن نظافة حقيقية لا مظهرية.",
    includes: [
      "إزالة الترسبات الكلسية من الأحواض والحنفيات",
      "تعقيم ضد التعفن حول الأطواق والسيفون",
      "منتجات مضادة للبكتيريا ومعتمدة",
      "تلميع الجدران والأرضيات",
      "معالجة الروائح من المصدر"
    ],
    tag: "حمامات",
    color: "from-[#0ea5e9]/20 to-transparent",
    iconColor: "text-[#0ea5e9]",
    bgClass: "bg-white",
  },
  {
    id: "tanks",
    icon: Droplets,
    image: "/eco-friendly-cleaning-solutions.png",
    imageAlt: "تنظيف خزانات مياه في السعوديه",
    title: "تنظيف خزانات المياه في السعوديه – المياه اللي تشربها تبدأ من هنا",
    desc: "الخزان المتسخ يؤثر على جودة المياه، وأحياناً على الصحة بشكل مباشر. كثير من الناس ما يتذكر الخزان إلا لما يلاحظ تغيراً في رائحة الماء أو لونه. نحن ننظف الخزانات بطريقة صحيحة: تفريغ، تنظيف جداري، تعقيم كامل، وتسليم جاهز.",
    includes: [
      "تفريغ كامل للخزان قبل التنظيف",
      "تنظيف جداري بمواد معتمدة",
      "تعقيم شامل ضد البكتيريا والطحالب",
      "فحص التمديدات والفتحات",
      "تسليم جاهز للاستخدام الفوري"
    ],
    tag: "خزانات مياه",
    color: "from-[#0ea5e9]/20 to-transparent",
    iconColor: "text-[#0ea5e9]",
    bgClass: "bg-[#F4F7FF]",
  },
  {
    id: "glass",
    icon: Wind,
    image: "/commercial-cleaning.png",
    imageAlt: "تنظيف زجاج ونوافذ في السعوديه",
    title: "تنظيف الزجاج في السعوديه – شفافية تامة، بدون بقع أو خدوش",
    desc: "الزجاج المتسخ يُثقل مظهر أي مكان، سواء كان واجهة منزل أو نوافذ داخلية أو أبواب مدخل. تنظيف الزجاج يحتاج أدوات مخصصة وطريقة صحيحة حتى لا تترك آثار. فريقنا يتعامل مع الزجاج بمحلول متخصص ومعدات احترافية. النتيجة: شفافية تامة من أول مرة.",
    includes: [
      "محلول متخصص لا يترك آثاراً",
      "معدات احترافية بدون خدش",
      "تنظيف النوافذ الداخلية والخارجية",
      "واجهات المنازل والمكاتب والمحلات",
      "شفافية تامة من أول تطبيق"
    ],
    tag: "زجاج ونوافذ",
    color: "from-[#0D1B35]/20 to-transparent",
    iconColor: "text-[#0D1B35]",
    bgClass: "bg-white",
  },
  {
    id: "post-construction",
    icon: HardHat,
    image: "/spring-cleaning.png",
    imageAlt: "تنظيف بعد التشطيب في السعوديه",
    title: "تنظيف بعد التشطيب في السعوديه – المنزل الجديد يستحق بداية نظيفة",
    desc: "بعد التشطيب يبقى غبار الجبص، بقايا الدهان، آثار الأدوات والعمال. هذا النوع من التنظيف مختلف تماماً عن التنظيف العادي. نحن متخصصون فيه. نبدأ بالغبار الثقيل، ثم الأسطح، ثم التفاصيل الدقيقة. تسلّم منزلك جاهزاً للسكن.",
    includes: [
      "إزالة غبار الجبص والإسمنت",
      "إذابة بقايا الدهان بمذيبات آمنة",
      "شفط الغبار الدقيق من المكيفات والزوايا",
      "تلميع الأرضيات وإزالة خدوش البناء",
      "تنظيف وتعقيم الخزانات والتمديدات"
    ],
    tag: "ما بعد البناء",
    color: "from-[#C8A96E]/20 to-transparent",
    iconColor: "text-gold",
    bgClass: "bg-[#F4F7FF]",
  },
  {
    id: "office",
    icon: Building2,
    image: "/commercial-cleaning.png",
    imageAlt: "تنظيف مكاتب في السعوديه",
    title: "تنظيف المكاتب في السعوديه – بيئة عمل نظيفة تفرق في الإنتاجية",
    desc: "المكتب المنظم ما يكون فقط شكله أحسن. الموظف اللي يدخل على بيئة نظيفة يبدأ يومه بشكل مختلف. نحن نوفر خدمة تنظيف مكاتب بعد ساعات الدوام حتى ما نعطل أعمالك. الخطة تتحدد حسب حجم المكتب واحتياجاتك.",
    includes: [
      "تنظيف بعد ساعات الدوام",
      "تعقيم دورات المياه ومناطق الاستراحة",
      "تلميع الزجاج والمداخل",
      "تنظيف محطات العمل وتفريغ المهملات",
      "عقود يومية أو أسبوعية أو شهرية"
    ],
    tag: "مكاتب وشركات",
    color: "from-[#2B5FA5]/20 to-transparent",
    iconColor: "text-[#2B5FA5]",
    bgClass: "bg-white",
  },
  {
    id: "disinfection",
    icon: ShieldCheck,
    image: "/home-disinfection.png",
    imageAlt: "تعقيم وتطهير منازل في السعوديه",
    title: "تعقيم وتطهير المنازل في السعوديه – نظافة مرئية وحماية غير مرئية",
    desc: "التعقيم مختلف عن التنظيف. المكان يمكن يبدو نظيفاً وفيه بكتيريا وفيروسات على الأسطح ما تشوفها العين. خدمة التعقيم عندنا تستخدم مواد معتمدة صحياً مفعّلة ضد طيف واسع من الميكروبات. مناسبة بعد المرض أو كإجراء وقائي دوري.",
    includes: [
      "مواد تعقيم معتمدة صحياً",
      "تغطية طيف واسع من البكتيريا والفيروسات",
      "مناسبة بعد المرض أو للوقاية",
      "آمنة للأطفال والحيوانات الأليفة",
      "شهادة تعقيم بعد الانتهاء"
    ],
    tag: "تعقيم ووقاية",
    color: "from-[#22c55e]/20 to-transparent",
    iconColor: "text-[#22c55e]",
    bgClass: "bg-[#F4F7FF]",
  },
  {
    id: "deep-clean",
    icon: Sparkles,
    image: "/eco-friendly-cleaning-solutions.png",
    imageAlt: "تنظيف عميق شامل في السعوديه",
    title: "تنظيف عميق في السعوديه – للأماكن اللي احتاجت وقتاً طويلاً بدون عناية",
    desc: "التنظيف العميق هو الحل لما تحس أن التنظيف العادي ما عاد يكفي. نتدخل في الأماكن اللي ما يوصلها التنظيف الاعتيادي: خلف الأجهزة، تحت الأثاث، داخل الخزائن، فواصل البلاط، الأركان المخفية. نحن نبدأ من حيث تتوقف الخدمات العادية.",
    includes: [
      "تنظيف خلف الأجهزة وتحت الأثاث",
      "معالجة داخل الخزائن والأدراج",
      "تنظيف فواصل البلاط والأركان المخفية",
      "إزالة الترسبات القديمة المتراكمة",
      "مناسب كل ٦ أشهر لتجديد المنزل بالكامل"
    ],
    tag: "تنظيف عميق",
    color: "from-primary/20 to-transparent",
    iconColor: "text-primary",
    bgClass: "bg-white",
  },
  {
    id: "odor",
    icon: Eye,
    image: "/jeddah-cleaning-services.png",
    imageAlt: "إزالة روائح من المنازل في السعوديه",
    title: "إزالة الروائح من المنازل في السعوديه – مو مجرد عطر يغطي، نزيل المصدر",
    desc: "رائحة المنزل أول ما تحسه لما تدخل. الروائح الكريهة لها مصادر: سجاد، كنب، خزانات، أماكن الرطوبة. نحن ما نرش عطراً فوق المشكلة. نحدد المصدر، نعالجه، ثم نستخدم تقنية تعقيم بالأوزون لإزالة الرائحة بشكل نهائي.",
    includes: [
      "تحديد مصدر الرائحة بدقة",
      "معالجة المصدر قبل أي شيء",
      "تقنية الأوزون لإزالة الرائحة نهائياً",
      "مناسب للسجاد والكنب والخزانات",
      "نتيجة دائمة لا مؤقتة"
    ],
    tag: "إزالة روائح",
    color: "from-[#f59e0b]/20 to-transparent",
    iconColor: "text-[#f59e0b]",
    bgClass: "bg-[#F4F7FF]",
  },
];



export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:h-[50vh] flex flex-col justify-center overflow-hidden bg-[#0D1B35] pt-24 pb-16">
        <div className="absolute inset-0 dot-pattern-white opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03]">
          <div className="text-[clamp(6rem,20vw,20rem)] font-bold tracking-tighter whitespace-nowrap text-white select-none">خدماتنا</div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold px-4 py-1.5 rounded-full border border-white/20 mb-6 mx-auto">
            <span>الرئيسية</span>
            <ArrowRight className="w-3 h-3 rtl-flip" />
            <span className="text-gold">خدماتنا</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            خدماتنا <span className="text-gold">في السعوديه</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed">
            نقدم مجموعة شاملة من خدمات التنظيف الاحترافية في المملكة العربية السعودية، مصممة بدقة لتلبية أعلى معايير الجودة والسلامة لمنزلك أو منشأتك.
          </p>
        </div>
      </section>

      {/* Services List - Alternating Layout */}
      <div className="bg-white">
        {services.map((svc, idx) => (
          <section key={svc.id} id={svc.id} className={`py-16 sm:py-24 ${svc.bgClass} relative overflow-hidden`}>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>

                {/* Abstract Icon Block */}
                <div className="w-full lg:w-5/12 relative h-[350px] sm:h-[450px] shrink-0">
                  <div className="absolute inset-0 bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden group border border-[#E8EEF9] flex items-center justify-center relative shadow-xl shadow-primary/5">
                    <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className="absolute inset-0 dot-pattern opacity-30" />
                    <Image
                      src={svc.image}
                      alt={svc.imageAlt}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain object-center"
                      priority
                    />
                    {/* Inner small icon for clarity */}
                    <div className={`absolute bottom-8 right-8 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-[#E8EEF9]`}>
                      <svc.icon className={`w-8 h-8 ${svc.iconColor}`} />
                    </div>
                  </div>
                </div>

                {/* Content Slice */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <span className={`bg-white border border-[#E8EEF9] shadow-sm text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full ${svc.iconColor}`}>
                      {svc.tag}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B35] mb-6 leading-tight">
                    {svc.title}
                  </h2>

                  <p className="text-[#4A5568] leading-relaxed text-base sm:text-lg mb-8 font-light text-justify">
                    {svc.desc}
                  </p>

                  <div className="mb-10 bg-white border border-[#E8EEF9] rounded-2xl p-6 sm:p-8 shadow-sm">
                    <h4 className="text-[#0D1B35] font-bold mb-4 sm:mb-5 text-base sm:text-lg flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-gold" />
                      هذه الخدمة تشمل الآتي:
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {svc.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${svc.iconColor}`} aria-hidden="true" />
                          <span className="text-[#4A5568] text-sm sm:text-base font-medium">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="tel:+966579796006"
                    aria-label={`احجز ${svc.title}`}
                    className="btn-primary w-full sm:w-fit text-center"
                  >
                    احجز هذه الخدمة الآن
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final Contact CTA Component */}
      <ContactCTA />
    </>
  );
}

const faqs = [
  { q: 'هل المواد والمنظفات المستخدمة آمنة للأطفال والحيوانات الأليفة؟', a: 'نعم بالتأكيد، صحتك وصحة أسرتك هي أولويتنا القصوى. نحن نستخدم منظفات طبية معتمدة عالمياً ومواد صديقة للبيئة (Eco-friendly) خالية من الكيماويات القاسية والأمونيا، مما يضمن تعقيماً فعالاً وأماناً تاماً لعائلتك وحيواناتك الأليفة من لحظة مغادرتنا للمكان.' },
  { q: 'كم يستغرق تنظيف شقة بمساحة ١٠٠ متر مربع تقريباً؟', a: 'عادة ما يستغرق التنظيف العميق لشقة بهذه المساحة ما بين ٣ إلى ٥ ساعات. يعتمد الوقت الفعلي على حالة المكان الدقيقة والخدمات الإضافية المطلوبة كغسيل الكنب، لكننا نوفر دائماً فريق عمل متكامل لضمان إنجاز المهمة بأسرع وقت وأعلى جودة ممكنة.' },
  { q: 'هل تقدمون خدمات النظافة في أوقات الإجازات والعطل الرسمية؟', a: 'بالتأكيد، نحن نتفهم أن الإجازات قد تكون الوقت الأنسب لك للقيام بأعمال التنظيف. فريقنا متوفر على مدار الأسبوع وطوال العام، بما في ذلك عطلات نهاية الأسبوع والأعياد والمناسبات الرسمية، لتقديم الخدمة في الوقت الذي يناسب جدولك الزمني.' },
  { q: 'هل تفرضون أي التزام أو عقود طويلة الأمد للحصول على الخدمة؟', a: 'لا، نقدم جميع خدماتنا للأفراد حسب الطلب لمرة واحدة دون أي شروط إلزامية. ومع ذلك، نوفر خيار العقود الدورية (الأسبوعية أو الشهرية) بأسعار مخفضة وامتيازات خاصة للشركات أو الأفراد الذين يفضلون راحة البال والجدولة التلقائية.' },
  { q: 'ما هي طريقة طلب الخدمة وحجز موعد؟', a: 'عملية الحجز لدينا سهلة ومباشرة. يمكنك ببساطة النقر على زر "اتصل بنا" أو زر "واتساب" الموجود في الموقع. سيتواصل معك أحد مسؤولي خدمة العملاء فوراً لتحديد احتياجاتك بدقة وتقديم عرض سعر نهائي وحجز الموعد الذي يناسبك.' },
  { q: 'هل فرق العمل التابعة لكم مؤمّن عليها وموثوقة؟', a: 'نعم، شركة القمة هي مؤسسة رسمية مرخصة. جميع العاملين لدينا تحت كفالة الشركة ومؤمن عليهم بالكامل ضد الحوادث. كما يخضع كل فرد لفحص أمني شامل وتدريب مكثف على معايير الجودة وخدمة العملاء لضمان راحتك وأمانك التام.' },
  { q: 'هل تقدمون ضماناً أو سياسة تعويض على خدمات النظافة؟', a: 'نفتخر بتقديم (ضمان الرضا ١٠٠٪) لمدة ٤٨ ساعة. إذا واجهت أي ملاحظات أو لم تكن سعيداً بجودة التنظيف في أي جزء، سنقوم بإرسال الفريق فوراً لإعادة تنظيف المكان مجاناً وبدون أي شروط أو تكاليف إضافية.' },
  { q: 'ما هي مناطق التغطية الجغرافية لخدمات شركة القمة؟', a: 'نغطي حالياً أهم المدن الرئيسية في المملكة العربية السعودية بفرق عمل متمركزة لضمان سرعة الاستجابة. تشمل تغطيتنا: الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، والسعوديه. ونعمل باستمرار على توسيع نطاق خدماتنا لتشمل المزيد من المدن.' }
];

function FAQSection() {
  return (
    <section aria-labelledby="faq-title" className="py-16 sm:py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7FF] to-white pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="section-eyebrow mx-auto mb-4">أسئلة شائعة</div>
          <h2 id="faq-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B35] mb-4">
            الإجابات الوافية لاستفساراتك
          </h2>
          <p className="text-[#4A5568] font-light max-w-2xl mx-auto">
            جمعنا لك أكثر الأسئلة التي يطرحها عملاؤنا، مع إجابات شفافة ومفصلة.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group card-light overflow-hidden transition-all open:ring-2 open:ring-primary/20">
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none focus:outline-none transition-colors hover:bg-[#F4F7FF]">
                <span className="pe-4 text-base sm:text-lg font-bold text-[#0D1B35] group-open:text-primary transition-colors">{faq.q}</span>
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#F4F7FF] text-[#4A5568] flex items-center justify-center group-open:bg-primary group-open:text-white transition-colors" aria-hidden="true">
                  <span className="relative w-4 h-4">
                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-current -translate-y-1/2 transition-transform duration-300" />
                    <span className="absolute top-0 left-1/2 w-[2px] h-full bg-current -translate-x-1/2 transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 border-t border-[#E8EEF9] mt-2">
                <p className="text-[#4A5568] leading-relaxed font-light text-base sm:text-lg pt-4">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* JSON-LD Schema for FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}
