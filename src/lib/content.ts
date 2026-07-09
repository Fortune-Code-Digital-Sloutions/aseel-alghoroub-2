/** المحتوى الرسمي — المصدر: 01_brand_reference/06-content-copy.md */

export const NAV_LINKS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "عن المشروع", href: "#life" },
  { label: "المرحلة الثانية", href: "#trust" },
  { label: "المرافق", href: "#amenities" },
  { label: "المخطط العام", href: "#masterplan" },
  { label: "الوحدات", href: "#units" },
  { label: "تواصل معنا", href: "#contact" },
];

export const JOURNEY = [
  { id: "hero", num: "01", label: "البداية" },
  { id: "entrance", num: "02", label: "الدخول" },
  { id: "life", num: "03", label: "الحياة هنا" },
  { id: "imagine", num: "04", label: "تخيّل يومك" },
  { id: "daily", num: "05", label: "حياتك اليومية" },
  { id: "amenities", num: "06", label: "المرافق" },
  { id: "trust", num: "07", label: "نجاح المرحلة الأولى" },
  { id: "masterplan", num: "08", label: "المخطط العام" },
  { id: "units", num: "09", label: "الوحدات" },
  { id: "contact", num: "10", label: "تواصل معنا" },
];

export const HERO = {
  badge: "على بُعد 15 دقيقة فقط من الحرم النبوي الشريف",
  headline: "افتح باب حياتك القادمــــــــة",
  sub: "اكتشف أسلوب حياة متكامل يجمع بين الراحة، والأمان، وقرب الموقع، في أصيل الغروب",
  ctaPrimary: "احجز زيارتك الآن",
  ctaSecondary: "استكشف المرحلة الثانية",
  scrollHint: "اسحب للأسفل للدخول",
  image: "/frames/01-gate/f_000.webp", // أول فريم من سلسلة البوابة
};

export const ENTRANCE = {
  eyebrow: { num: "01", label: "الدخول إلى المجتمع" },
  headline: "خطوتك الأولى نحو حياة أكثر هدوءاً",
  sub: "مع كل تمريرة ترتفع الكاميرا فوق أصيل الغروب، ويتكشف أمامك المخطط الكامل لمجتمعك القادم.",
  image: "/frames/02-rise/f_000.webp",
  tech: [
    { ar: "تجربة سلسة", en: "Lenis Smooth Scroll" },
    { ar: "تأثيرات مرتبطة بالتمرير", en: "GSAP ScrollTrigger" },
    { ar: "انتقال سينمائي", en: "Video Transition" },
  ],
};

export const LIFE = {
  eyebrow: { num: "02", label: "الحياة داخل أصيل الغروب" },
  headline: "هنا تبدأ الحياة التي كنت تتخيلها لعائلتك",
  sub: "مجتمع سكني متكامل يجمع بين الهدوء، الأمان، والتفاصيل المصممة لراحتك اليومية. مساحات تمنح عائلتك إحساساً دائماً بالانتماء.",
  cta: "اكتشف نمط الحياة",
  image: "/frames/03-family/f_060.webp", // آخر فريم — العائلة في الحديقة

  pills: ["أمان", "راحة", "انتماء"],
  strip: [
    { title: "مساحات خضراء", sub: "حدائق واسعة ومنسقة" },
    { title: "مسارات مشي", sub: "تجربة يومية صحية" },
    { title: "مناطق عائلية", sub: "مصممة للجميع" },
    { title: "تصميم معماري راقٍ", sub: "أصالة وحداثة" },
  ],
};

export const IMAGINE = {
  eyebrow: { num: "03", label: "تخيّل يومك هنا" },
  headline: "تفاصيل صغيرة تصنع حياة كبيرة",
  sub: "صباح هادئ، أطفالك بالقرب منك، ومساحات تمنحك إحساساً دائماً بالأمان والانتماء في كل لحظة من يومك.",
  cta: "شاهد الحياة داخل المشروع",
  collage: [
    { image: "/media/interior-living.jpg", label: "صباح هادئ على الشرفة" },
    { image: "/media/interior-lanterns.jpg", label: "أمسيات عائلية دافئة" },
    { image: "/media/street-sunset.jpg", label: "مشي المساء" },
    { image: "/media/park-day.jpg", label: "مساحات آمنة للأطفال" },
  ],
  mini: ["صباح هادئ", "مسارات", "أمسيات"],
};

export const DAILY = {
  eyebrow: { num: "04", label: "حياتك اليومية" },
  headline: "تفاصيل يومية تصنع إحساساً دائماً بالراحة",
  sub: "في أصيل الغروب، كل لحظة مصممة لتمنحك ولعائلتك أياماً أكثر هدوءاً وجمالاً.",
  cta: "اكتشف المزيد",
  video: { poster: "/media/interior-lanterns.jpg", src: "/videos/family-walk.mp4" },
  thumbs: [
    { image: "/media/park-day.jpg", label: "مساحات آمنة" },
    { image: "/media/interior-lanterns.jpg", label: "أمسيات عائلية" },
    { image: "/media/street-sunset.jpg", label: "مسارات المشي" },
    { image: "/media/boulevard-sunset.jpg", label: "جلسات خارجية" },
  ],
  features: [
    { title: "أمان وخصوصية", sub: "راحة تامة لعائلتك" },
    { title: "مساحات خضراء", sub: "هواء نقي كل يوم" },
    { title: "وقت للعائلة", sub: "لحظات تجمعكم" },
    { title: "حياة متوازنة", sub: "راحة وعمل واستجمام" },
  ],
};

export const AMENITIES = {
  eyebrow: { num: "05", label: "المرافق والخدمات" },
  headline: "كل ما تحتاجه لحياة متكاملة",
  sub: "ضمن وجهة الغروب، ستجد كل ما يلزمك من بنية تحتية خدمية تدعم جودة الحياة وتكمّل يومك.",
  cta: "تعرّف على المرافق",
  image: "/media/boulevard-sunset.jpg",
  list: [
    { title: "المساحات الخضراء", sub: "حدائق واسعة ومنسقة" },
    { title: "مناطق الأطفال", sub: "بيئة آمنة وممتعة" },
    { title: "مسارات المشي", sub: "تجربة يومية صحية" },
    { title: "الجلسات الخارجية", sub: "أماكن للاسترخاء" },
    { title: "الأمن والحراسة", sub: "أمان على مدار الساعة" },
    { title: "مواقف السيارات", sub: "واسعة ومريحة" },
  ],
  stats: [
    { value: 25, suffix: "", label: "مركزاً تجارياً" },
    { value: 19, suffix: "", label: "حديقة" },
    { value: 17, suffix: "", label: "مسجداً وجامعاً" },
    { value: 16, suffix: "", label: "مرفقاً تعليمياً" },
    { value: 1, suffix: "", label: "مرفق صحي" },
    { value: 1, suffix: "M+", label: "م² حديقة الغروب" },
  ],
};

export const TRUST = {
  eyebrow: { num: "06", label: "نجاح المرحلة الأولى" },
  headline: "نجاح المرحلة الأولى… وثقة تمتد للمرحلة الثانية",
  sub: "بعد اكتمال المرحلة الأولى واستقرار مجتمع أصيل الغروب، تأتي المرحلة الثانية لتقدم فرصة جديدة للانضمام إلى مجتمع أثبت قيمته.",
  cta: "اكتشف المرحلة الثانية",
  image: "/media/neighborhood-center.jpg",
  badge: "تم تسليم المرحلة الأولى بنجاح",
  gallery: [
    "/media/aerial-night.jpg",
    "/media/street-sunset.jpg",
    "/media/mosque.jpg",
    "/media/park-day.jpg",
  ],
  cards: [
    { title: "مرحلة مكتملة", sub: "جودة تنفيذ عالية" },
    { title: "مجتمع قائم", sub: "نشط ومستقر" },
    { title: "ثقة مستمرة", sub: "من عملائنا" },
  ],
  warranty: [
    { years: "10", title: "ضمان 10 سنوات", sub: "الهيكل الإنشائي والعزل المائي" },
    { years: "1", title: "ضمان سنة كاملة", sub: "على التشطيبات — 16 بنداً" },
  ],
  badges: ["الغروب by NHC", "سكني", "وافي · البيع على الخارطة"],
};

export const MASTERPLAN = {
  eyebrow: { num: "07", label: "المخطط العام" },
  headline: "تصميم متقن لحياة متكاملة",
  sub: "مخطط يجمع بين الخصوصية والاتصال — مساحات خضراء واسعة، ومرافق متكاملة، ومجتمع ينبض بالحياة.",
  image: "/media/masterplan-top.jpg",
  zones: ["المداخل", "المناطق السكنية", "المساحات الخضراء", "المرافق", "مسارات الحركة"],
  stats: [
    { value: "124,244", label: "م² مساحة المشروع" },
    { value: "+490", label: "وحدة سكنية" },
    { value: "414", label: "فيلا سكنية" },
    { value: "76", label: "تاون هاوس" },
  ],
  ctaPrimary: "استعرض المخطط",
  ctaSecondary: "تحميل المخطط",
};

export const UNITS = {
  eyebrow: { num: "08", label: "الوحدات السكنية" },
  headline: "اختر المساحة التي تناسب حياتك",
  sub: "أكثر من 490 وحدة سكنية بتصاميم عصرية وواجهات مستلهمة من التراث المديني — 414 فيلا و76 تاون هاوس.",
  filters: ["كل الوحدات", "فيلا", "تاون هاوس"],
  catalog: "تحميل كتالوج الوحدات",
  disclaimer: "(صور تخيلية)",
  ctaPrimary: "استكشف الوحدات المتاحة",
  ctaSecondary: "تواصل مع فريق المبيعات",
  cards: [
    {
      name: "ڤيلا 01",
      area: "293.55",
      beds: "4+1 غرف",
      floors: "دوران + ملحق",
      desc: "مناسبة للعائلات الباحثة عن الراحة والخصوصية الواسعة.",
      image: "/media/villa1-facade.jpg",
    },
    {
      name: "ڤيلا 02",
      area: "232.40",
      beds: "3 غرف نوم",
      floors: "دوران + ملحق",
      desc: "تصميم عملي بتراسات أمامية وخلفية ضمن مجتمع متكامل.",
      image: "/media/villa2-facade.jpg",
    },
    {
      name: "ڤيلا 03",
      area: "240.86",
      beds: "3 غرف نوم",
      floors: "دوران + ملحق",
      desc: "تراسات متعددة وإطلالات مفتوحة لحياة أكثر اتساعاً.",
      image: "/media/villa3-facade.jpg",
    },
    {
      name: "تاون هاوس",
      area: "244.86",
      beds: "3 غرف + ركن",
      floors: "دوران + ملحق",
      desc: "بفناء داخلي خاص يمنح عائلتك خصوصية وهدوءاً أكبر.",
      image: "/media/townhouse-facade.jpg",
    },
  ],
};

export const WHY = {
  eyebrow: { num: "09", label: "لماذا أصيل الغروب؟" },
  headline: "مشروع يجمع بين الراحة اليومية والأمان والتخطيط المتكامل",
  image: "/media/aerial-sunset-pink.jpg",
  values: [
    { title: "15 دقيقة من الحرم النبوي", sub: "قيمة روحية لا تُضاهى" },
    { title: "مجتمع عائلي آمن", sub: "بيئة هادئة ومسوّرة" },
    { title: "مرحلة أولى ناجحة", sub: "دليل ملموس على الجودة" },
    { title: "ضمانات حتى 10 سنوات", sub: "على الهيكل والعزل المائي" },
    { title: "مخطط متكامل", sub: "سكن ومرافق ومساحات خضراء" },
    { title: "قيمة سكنية واستثمارية", sub: "نماء يمتد مع الأعوام" },
  ],
};

export const CONTACT = {
  kicker: "الخطوة الأخيرة",
  headline: "باب حياتك القادمة مفتوح الآن",
  sub: "احجز زيارتك واكتشف المرحلة الثانية من أصيل الغروب — نحن هنا للإجابة على كل استفساراتك.",
  image: "/media/dusk-avenue.jpg",
  form: {
    title: "أرسل لنا رسالة",
    sub: "سيتواصل معك أحد مستشارينا في أقرب وقت.",
    fields: ["الاسم الكامل", "رقم الجوال", "البريد الإلكتروني (اختياري)", "اهتمامك بـ (نوع الوحدة)"],
    message: "رسالتك أو استفسارك",
    submit: "إرسال الرسالة",
    privacy: "نحترم خصوصيتك، بياناتك آمنة معنا.",
  },
  info: [
    { title: "اتصل بنا", value: "+966 5X XXX XXXX" },
    { title: "واتساب", value: "استجابة سريعة" },
    { title: "البريد الإلكتروني", value: "dev@ambatt.com.sa" },
    { title: "الموقع", value: "وجهة الغروب — غرب المدينة" },
  ],
  actions: [
    { title: "احجز زيارة", sub: "للمعرض والمشروع" },
    { title: "حمّل البروشور", sub: "تفاصيل الوحدات" },
    { title: "تواصل مع مستشار", sub: "مباشرةً الآن" },
  ],
  map: "/media/map-madinah.png",
};

export const FOOTER = {
  brand: "أصيل الغروب ٢",
  brandSub: "المرحلة الثانية · وجهة الغروب",
  social: "تابعنا · @ambattdeveloper",
  partners: "الغروب by NHC · وافي · سكني",
  copyright:
    "© 2026 أصيل الغروب ٢ · تطوير أمباط للتطوير العقاري — جميع الحقوق محفوظة",
};
