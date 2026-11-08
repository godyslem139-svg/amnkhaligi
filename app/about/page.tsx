"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Award,
  CheckCircle2,
  Users,
  Clock,
  Wrench,
  MapPin,
  Phone,
  ArrowLeft,
  Target,
  Eye,
  HeartHandshake,
  Zap,
  Building2,
  FileCheck,
  AlertTriangle,
  Sparkles,
  Layers,
  ThermometerSnowflake,
  Droplets,
  Hammer,
  Bug,
  Wind,
  Container,
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  X,
  Play,
  Activity,
  Compass,
  Cpu,
  ThumbsUp,
  Headphones,
  Calendar,
  Lock,
  TrendingUp,
  Briefcase,
  Globe,
  HelpCircle,
} from "lucide-react";

// ============================================================================
// 1. Interfaces & Data Structures (هياكل البيانات الموسوعية للشركة)
// ============================================================================

interface StatItem {
  id: number;
  label: string;
  value: string;
  suffix: string;
  description: string;
  icon: React.ElementType;
}

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  badge: string;
}

interface CoreValue {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
  color: string;
}

interface TechEquipment {
  id: number;
  name: string;
  category: "leak" | "insulation" | "sewage" | "inspection";
  categoryLabel: string;
  origin: string;
  accuracy: string;
  description: string;
  features: string[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
}

interface WorkStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: React.ElementType;
}

interface Department {
  id: number;
  name: string;
  headTitle: string;
  staffCount: string;
  description: string;
  responsibilities: string[];
  certifications: string[];
}

interface Neighborhood {
  id: number;
  name: string;
  sector: "شمال الخرج" | "جنوب الخرج" | "شرق الخرج" | "غرب ووسط الخرج";
  responseTime: string;
  projectsCompleted: number;
  highlightService: string;
}

interface ComparisonRow {
  criterion: string;
  asasAlAmn: string;
  traditionalWorkers: string;
  importance: "عالية جداً" | "عالية" | "متوسطة";
}

interface AboutFAQ {
  question: string;
  answer: string;
  category: string;
}

// ============================================================================
// 2. Comprehensive Data Constants (البيانات الكاملة لصفحة من نحن)
// ============================================================================

const COMPANY_STATS: StatItem[] = [
  {
    id: 1,
    label: "سنوات من الخبرة الميدانية",
    value: "12",
    suffix: "+",
    description: "أكثر من عقد من العمل المتواصل في بيئة ومناخ محافظة الخرج والمنطقة الوسطى.",
    icon: Calendar,
  },
  {
    id: 2,
    label: "مشروع ناجح وموثق",
    value: "8,450",
    suffix: "+",
    description: "بين فلل سكنية، قصور، مجمعات تجارية، مصانع، ومستودعات حكومية وخاصة.",
    icon: Building2,
  },
  {
    id: 3,
    label: "نسبة دقة الفحص الإلكتروني",
    value: "99.4",
    suffix: "%",
    description: "تحديد نقاط التسرب والخلل الإنشائي بأحدث الأجهزة الألمانية والأمريكية دون تكسير.",
    icon: Target,
  },
  {
    id: 4,
    label: "ضمان فعلي ومعتمد",
    value: "10",
    suffix: " سنوات",
    description: "عقود ضمان رسمية مكتوبة تحمي العميل وتضمن الصيانة الدورية المجانية.",
    icon: Shield,
  },
  {
    id: 5,
    label: "كوادر هندسية وفنية",
    value: "65",
    suffix: "+",
    description: "فريق متكامل من المهندسين المدنيين وفنيي العزل والسباكة المعتمدين.",
    icon: Users,
  },
  {
    id: 6,
    label: "سرعة الاستجابة للطوارئ",
    value: "45",
    suffix: " دقيقة",
    description: "أسطول سيارات مجهز بالكامل يجوب كافة أحياء الخرج على مدار 24 ساعة.",
    icon: Clock,
  },
];

const TIMELINE_HISTORY: TimelineEvent[] = [
  {
    year: "2014",
    title: "الانطلاقة وتأسيس النواة الأولى في الخرج",
    subtitle: "البداية بفريق متخصص في صيانة الشبكات وكشف التسربات",
    description:
      "بدأت شركة أساس الأمن الخليجي كفريق هندسي وفني متخصص يهدف إلى تغيير المفهوم التقليدي للسباكة والصيانة في الخرج، مع التركيز على حلول جذرية تمنع تكرار المشاكل.",
    achievements: [
      "تأسيس المقر الرئيسي في قلب مدينة السيح بالخرج.",
      "استيراد أول دفعة من أجهزة الفحص الصوتي المبكر للتسربات.",
      "إنجاز أكثر من 300 مشروع سكني في السنة الأولى بنجاح تام.",
    ],
    badge: "مرحلة التأسيس",
  },
  {
    year: "2017",
    title: "التوسع في تكنولوجيا العزل المائي والحراري",
    subtitle: "إدخال أنظمة الفوم البولي يوريثان والايبوكسي المعتمد",
    description:
      "استجابةً للظروف المناخية القاسية وارتفاع درجات الحرارة في الصيف، قمنا بتأسيس قسم مستقل للعزل الحراري والمائي للأسطح والخزانات بمواد مطابقة لمواصفات شركة الكهرباء.",
    achievements: [
      "اعتماد مواد عزل أمريكية وألمانية خالية من المركبات الضارة.",
      "تدريب الطواقم الفنية على ماكينات الرش ذات الضغط العالي.",
      "توقيع عقود صيانة وعزل لمشاريع تجارية ومستودعات كبرى بالخرج.",
    ],
    badge: "توسع تقني",
  },
  {
    year: "2020",
    title: "التحول الرقمي وإطلاق أسطول الطوارئ المتكامل",
    subtitle: "تغطية شاملة لكافة أحياء الخرج وضواحيها 24/7",
    description:
      "قمنا بهيكلة العمليات الميدانية رقمياً، وتجهيز أسطول متنقل يحتوي على ورش عمل متكاملة لخدمات تسليك المجاري بالضغط، ترميم المباني، ومكافحة الآفات.",
    achievements: [
      "إدخال كاميرات التصوير الحراري (Flir Thermal Imaging) لفحص الشبكات.",
      "إصدار تقارير فنية معتمدة تساعد العملاء في خفض فواتير المياه المرتفعة.",
      "توسيع نطاق الخدمات ليشمل الدلم، الهياثم، واليمامة.",
    ],
    badge: "ريادة محلية",
  },
  {
    year: "2023",
    title: "الاعتماد الشامل وتطوير معايير الجودة والضمان",
    subtitle: "تطبيق معايير كود البناء السعودي الجديد (SBC)",
    description:
      "ارتقت الشركة بمعاييرها الهندسية لتتوافق كلياً مع اشتراطات كود البناء السعودي، مع إطلاق برنامج الضمان الذهبي الشامل لمدة 10 سنوات على أعمال العزل والترميم.",
    achievements: [
      "تجاوز حاجز 6,000 عميل راضٍ في القطاعين السكني والتجاري.",
      "إطلاق قسم خاص لغسيل وتعقيم الخزانات وتنظيف المكيفات بأحدث البروتوكولات الصحية.",
      "بناء شراكات استراتيجية مع كبرى موردي المواد الكيميائية والإنشائية في المملكة.",
    ],
    badge: "معايير عالمية",
  },
  {
    year: "2026",
    title: "الريادة المطلقة في الحلول الهندسية والبيئية بالخرج",
    subtitle: "أحدث جيل من تكنولوجيا الفحص الذكي والاستدامة",
    description:
      "اليوم، تقف شركة أساس الأمن الخليجي كالخيار الأول والموثوق لكل مالك عقار في الخرج يبحث عن الأمان الإنشائي، التوفير المالي، والجودة التي تدوم لعقود.",
    achievements: [
      "تحديث كامل الأجهزة إلى الجيل الخامس من الحساسات الصوتية والغازية.",
      "إطلاق المنصة الرقمية التفاعلية لتوثيق أعمالنا الحقيقية بالصوت والصورة.",
      "تحقيق نسبة رضا عملاء قياسية بلغت 99% بناءً على تقييمات المتابعة الميدانية.",
    ],
    badge: "المستقبل الآن",
  },
];

const CORE_VALUES: CoreValue[] = [
  {
    id: "integrity",
    title: "المصداقية والشفافية المطلقة",
    description:
      "نؤمن بأن الثقة تُبنى على الصدق في التشخيص. لا نوصي بأي إجراء إصلاحي أو عزل إلا بعد إطلاع العميل بنفسه على قراءات الأجهزة وتصوير مكان الخلل بدقة.",
    details: [
      "تسعير واضح ومفصل قبل البدء بالعمل دون أي رسوم مخفية.",
      "توثيق مراحل العمل بالفيديو والصور وإرسالها للعميل خطوة بخطوة.",
      "تقديم النصيحة الهندسية الأمينة حتى لو كانت بتكلفة أقل للعميل.",
    ],
    icon: HeartHandshake,
    color: "#D4AF37",
  },
  {
    id: "precision",
    title: "الدقة الهندسية وعدم التخمين",
    description:
      "وداعاً للتكسير العشوائي والتجارب الفاشلة. نعتمد حصرياً على القراءات الرقمية للأجهزة الصوتية والحرارية لتحديد موضع الخلل في نطاق لا يتجاوز السنتيمترات.",
    details: [
      "استخدام 4 أجهزة فحص مختلفة للتأكد المتقاطع من نقطة التسرب.",
      "قياس نسبة الرطوبة والأملاح داخل الخرسانة قبل تطبيق أي مادة عزل.",
      "إشراف هندسي مباشر على خلطات المواد وسماكة طبقات العزل.",
    ],
    icon: Target,
    color: "#00BFFF",
  },
  {
    id: "sustainability",
    title: "الاستدامة والضمان الحقيقي",
    description:
      "حلولنا ليست مسكنات مؤقتة، بل معالجات جذرية تطيل العمر الافتراضي للمبنى وتحميه من تآكل الحديد وتصدع الخرسانة لسنوات طويلة.",
    details: [
      "مواد عزل تقاوم الأشعة فوق البنفسجية (UV) ودرجات الحرارة حتى 85 مئوية.",
      "شهادات ضمان رسمية مختومة تصل إلى 10 سنوات.",
      "زيارات فحص دورية مجانية للتأكد من سلامة العزل والشبكات.",
    ],
    icon: Shield,
    color: "#D4AF37",
  },
  {
    id: "speed",
    title: "الانضباط الزمني وسرعة الإنجاز",
    description:
      "ندرك قيمة وقت العميل وخطورة تأخر معالجة تسربات المياه أو انسداد المجاري، لذلك نلتزم بمواعيد صارمة في الحضور والتسليم.",
    details: [
      "وصول فرق الطوارئ خلال أقل من ساعة داخل أحياء الخرج.",
      "إنجاز عزل الأسطح والخزانات في أوقات قياسية بفضل المعدات الحديثة.",
      "تسليم الموقع نظيفاً ومرتباً بالكامل فور انتهاء المهام الفنية.",
    ],
    icon: Zap,
    color: "#00BFFF",
  },
];

const TECH_EQUIPMENTS: TechEquipment[] = [
  {
    id: 1,
    name: "جهاز الأكوافون الألماني (Aquaphon A200)",
    category: "leak",
    categoryLabel: "كشف التسربات",
    origin: "ألمانيا (Germany)",
    accuracy: "99.6%",
    description:
      "الجهاز الأحدث عالمياً في التقاط الترددات الصوتية والاهتزازات الناتجة عن تسرب المياه داخل الأنابيب المدفونة تحت البلاط والخرسانة حتى عمق 3 أمتار.",
    features: [
      "فلاتر رقمية ذكية لعزل الضوضاء الخارجية والتركيز على صوت التسرب فقط.",
      "شاشة لمس تعرض الرسم البياني الطيفي لقوة التسرب ومكانه بالضبط.",
      "ميكروفونات أرضية حساسة للغاية تعمل على البلاط، الرخام، والأسفلت.",
    ],
    technicalSpecs: [
      { label: "نطاق التردد", value: "10 Hz - 4,000 Hz" },
      { label: "عمق الفحص", value: "حتى 3.5 متر تحت الأرض" },
      { label: "نسبة التكسير", value: "صفر% (فحص سطحي كامل)" },
    ],
  },
  {
    id: 2,
    name: "الكاميرا الحرارية عالية الدقة (FLIR E96 Thermal)",
    category: "leak",
    categoryLabel: "كشف التسربات",
    origin: "الولايات المتحدة (USA)",
    accuracy: "99.2%",
    description:
      "كاميرا تصوير بالأشعة تحت الحمراء تكشف فروق درجات الحرارة الدقيقة خلف الجدران والأسقف، مما يظهر مسارات المياه المتسربة ومناطق تجمع الرطوبة المخفية فوراً.",
    features: [
      "تحديد مسار مواسير المياه الحارة والباردة بدقة متناهية.",
      "كشف مناطق الفراغات في العزل الحراري للأسطح والجدران.",
      "توثيق مصور للتقرير الفني يوضح الصورة الحرارية مقابل الصورة الحقيقية.",
    ],
    technicalSpecs: [
      { label: "الحساسية الحرارية", value: "< 0.03°C (30 mK)" },
      { label: "دقة المستشعر", value: "640 × 480 Pixels" },
      { label: "مجال الاستخدام", value: "الأسقف، الحمامات، والتمديدات" },
    ],
  },
  {
    id: 3,
    name: "جهاز تتبع غاز النيتروجين والهيدروجين (Variotec 460)",
    category: "leak",
    categoryLabel: "كشف التسربات",
    origin: "ألمانيا (Germany)",
    accuracy: "99.8%",
    description:
      "يُستخدم في التسربات الدقيقة جداً في شبكات التغذية والمسابح والخزانات، حيث يتم ضخ غاز آمن داخل الأنابيب وتتبع مكان خروجه بالحساس الإلكتروني.",
    features: [
      "يكتشف الثقوب الشعرية (Micro-leaks) التي لا تصدر صوتاً واضحاً.",
      "غاز آمن تماماً بنسبة 100% وغير قابل للاشتعال ولا يؤثر على مياه الشرب.",
      "مثالي لفحص شبكات التدفئة، المسابح، وخطوط الشبكة الرئيسية الطويلة.",
    ],
    technicalSpecs: [
      { label: "نوع الغاز", value: "95% نيتروجين + 5% هيدروجين" },
      { label: "حساسية الاستشعار", value: "0.1 ppm (جزء في المليون)" },
      { label: "الفاعلية", value: "يخترق الخرسانة المسلحة والتربة" },
    ],
  },
  {
    id: 4,
    name: "ماكينة رش الفوم الهيدروليكية (Graco Reactor E-30)",
    category: "insulation",
    categoryLabel: "أنظمة العزل",
    origin: "الولايات المتحدة (USA)",
    accuracy: "100% تجانس",
    description:
      "وحدة رش مركزية متطورة لخلط ورش مادة البولي يوريثان فوم بدرجة حرارة وضغط ثابتين، مما يضمن طبقة عزل ملساء خالية من المسامات والفواصل.",
    features: [
      "تحكم رقمي في درجة حرارة الخلط لضمان التصاق الفوم بالسطح بقوة.",
      "قدرة إنتاجية عالية تتيح عزل مساحات شاسعة في يوم عمل واحد.",
      "تطبيق طبقة الأكريليك الواقية (Top Coat) لحماية الفوم من أشعة الشمس.",
    ],
    technicalSpecs: [
      { label: "كثافة الفوم المنتج", value: "40 - 45 كجم / م³ (معتمد)" },
      { label: "الضغط التشغيلي", value: "2000 PSI (138 Bar)" },
      { label: "العزل المزدوج", value: "عزل مائي 100% + عزل حراري" },
    ],
  },
  {
    id: 5,
    name: "منظومة الحقن الإيبوكسي والبلوري للخزانات",
    category: "insulation",
    categoryLabel: "أنظمة العزل",
    origin: "سويسرا / المملكة العربية السعودية",
    accuracy: "مقاومة 100%",
    description:
      "تقنية معالجة الشروخ والتعشيش في الخزانات الأرضية والعلوية باستخدام مضخات حقن البولي يوريثان التفاعلي متبوعة بطبقات الإيبوكسي الغذائي الأزرق (Food Grade).",
    features: [
      "مواد إيبوكسي معتمدة صحياً لا تغير طعم أو رائحة أو لون مياه الشرب.",
      "سد المسامات الشعرية في الخرسانة ومنع تسرب المياه الجوفية للخزان.",
      "سطح أملس زجاجي يمنع تكون الطحالب والبكتيريا والفطريات نهائياً.",
    ],
    technicalSpecs: [
      { label: "سماكة الطبقة", value: "350 - 500 ميكرون" },
      { label: "الاعتماد الصحي", value: "معتمد لمياه الشرب (SASO)" },
      { label: "العمر الافتراضي", value: "+15 سنة مع الصيانة" },
    ],
  },
  {
    id: 6,
    name: "وحدة التسليك الهيدروديناميكي بالضغط (Hydro-Jetter Pro)",
    category: "sewage",
    categoryLabel: "تسليك المجاري",
    origin: "إيطاليا (Italy)",
    accuracy: "تنظيف قطري 100%",
    description:
      "ماكينة ضخ مياه بضغط عالٍ جداً مع رؤوس دوارة نفاثة تقوم بتفتيت الدهون المتحجرة، الرواسب الأسمنتية، وجذور الأشجار داخل خطوط الصرف الصحي دون الإضرار بالمواسير.",
    features: [
      "إزالة الانسدادات المستعصية في دقائق دون الحاجة لتكسير الأرضيات.",
      "غسيل كامل للجدران الداخلية للأنابيب وإعادتها لكفاءتها الأصلية.",
      "مدعومة بكاميرا منظار داخلي (Sewer Camera) لتصوير الماسورة من الداخل.",
    ],
    technicalSpecs: [
      { label: "قوة الضخ", value: "حتى 250 بار" },
      { label: "طول الخرطوم", value: "80 متراً مرناً" },
      { label: "أقطار المواسير", value: "من 2 بوصة حتى 16 بوصة" },
    ],
  },
  {
    id: 7,
    name: "أجهزة قياس الرطوبة والأملاح الخرسانية (Protimeter MMS3)",
    category: "inspection",
    categoryLabel: "الفحص الهندسي",
    origin: "المملكة المتحدة (UK)",
    accuracy: "99.5%",
    description:
      "جهاز فحص هندسي متكامل يقيس نسبة التشبع المائي داخل الجدران والأسقف والخرسانة قبل وبعد عمليات الترميم والعزل لضمان جفاف السطح وجاهزيته.",
    features: [
      "قياس الرطوبة بدون إبر (Non-invasive) حتى عمق 10 سم داخل الجدار.",
      "حساب نقطة الندى والتكاثف الداخلي في المباني.",
      "تحديد مصدر الرطوبة هل هو تسرب مواسير أم مياه جوفية أم مياه أمطار.",
    ],
    technicalSpecs: [
      { label: "نمط القياس", value: "موجات راديوية + استشعار رقمي" },
      { label: "الاستخدام الأساسي", value: "فحص ما قبل العزل والترميم" },
      { label: "تصدير البيانات", value: "بلوتوث مباشرة لتقرير العميل" },
    ],
  },
  {
    id: 8,
    name: "أجهزة التضبيب الحراري والرش الميكروي (ULV Cold Fogger)",
    category: "inspection",
    categoryLabel: "مكافحة وتعقيم",
    origin: "ألمانيا / كوريا",
    accuracy: "تغطية 360 درجة",
    description:
      "معدات رش متطورة تحول المبيدات الآمنة ومواد التعقيم إلى جزيئات ميكروية دقيقة تخترق أدق الشقوق والزوايا للقضاء الفوري على الحشرات والآفات.",
    features: [
      "استخدام مبيدات معتمدة من وزارة الصحة والبيئة بدون رائحة.",
      "حقن الجل الأمريكي والألماني المخصص للمطابخ دون الحاجة لإخلاء المنزل.",
      "معالجة النمل الأبيض (الأرضة) قبل البناء وبعده بضمان طويل الأمد.",
    ],
    technicalSpecs: [
      { label: "حجم القطرات", value: "5 - 30 ميكرون" },
      { label: "درجة الأمان", value: "آمن للأطفال وكبار السن" },
      { label: "نطاق الفعالية", value: "قضاء فوري + وقاية ممتدة" },
    ],
  },
];

const WORK_METHODOLOGY: WorkStep[] = [
  {
    stepNumber: "01",
    title: "استقبال الطلب والتشخيص المبدئي الفوري",
    duration: "خلال 5 دقائق",
    description:
      "بمجرد تواصلك معنا عبر الهاتف أو الواتساب، يقوم مهندس الدعم الفني بتسجيل تفاصيل المشكلة، الموقع في الخرج، وتحديد نوع الفريق والمعدات المطلوبة للتحرك الفوري.",
    deliverables: [
      "تحديد موعد دقيق لوصول الفريق الفني حسب رغبة العميل.",
      "تقديم إرشادات أولية سريعة في حالات الطوارئ لتقليل الأضرار.",
      "إرسال بيانات الفني المسؤول وموعد الوصول عبر الواتساب.",
    ],
    icon: Headphones,
  },
  {
    stepNumber: "02",
    title: "الفحص الميداني بالأجهزة الإلكترونية",
    duration: "30 - 60 دقيقة",
    description:
      "يصل الفريق المختص لإجراء مسح شامل للشبكات، الأسطح، أو الخزانات باستخدام أجهزة الأكوافون والكاميرات الحرارية وأجهزة ضغط النيتروجين دون أي تكسير.",
    deliverables: [
      "تحديد نقطة الخلل أو التسرب بدقة متناهية وتطويقها.",
      "فحص شامل لكافة النقاط المجاورة للتأكد من عدم وجود تسربات ثانوية.",
      "إطلاع العميل مباشرة على قراءات وشاشات الأجهزة في الموقع.",
    ],
    icon: Cpu,
  },
  {
    stepNumber: "03",
    title: "التقرير الهندسي وعرض السعر الشفاف",
    duration: "15 دقيقة في الموقع",
    description:
      "يتم شرح أسباب المشكلة للعميل بوضوح، وتقديم خطة المعالجة الجذرية، ونوع المواد المقترحة، مع عرض سعر ثابت ونهائي شامل المواد والمصنعية والضمان.",
    deliverables: [
      "تقرير فني مفصل بالصور والقراءات (معتمد لشركة المياه عند الحاجة).",
      "بيان واضح بالمواد التي سيتم استخدامها وبلد المنشأ.",
      "الاتفاق على الجدول الزمني للتنفيذ والتسليم.",
    ],
    icon: FileCheck,
  },
  {
    stepNumber: "04",
    title: "التنفيذ القياسي والمعالجة الجذرية",
    duration: "حسب حجم المشروع",
    description:
      "يبدأ الفنيون بتنفيذ أعمال الإصلاح، العزل، أو الترميم وفق أعلى المعايير الهندسية، مع الحفاظ التام على نظافة المكان وسلامة الديكورات والأثاث المحيط.",
    deliverables: [
      "استخدام قطع غيار ومواد عزل أصلية مطابقة للمواصفات السعودية.",
      "تطبيق العزل بعدد الطبقات والسماكة المتفق عليها هندسياً.",
      "إشراف مباشر من رئيس الفريق على كل خطوة تنفيذية.",
    ],
    icon: Wrench,
  },
  {
    stepNumber: "05",
    title: "إعادة الاختبار وتسليم شهادة الضمان",
    duration: "بعد انتهاء التنفيذ",
    description:
      "لا نغادر الموقع إلا بعد إعادة فحص الشبكة أو اختبار العزل بالماء والضغط للتأكد بنسبة 100% من نجاح العملية، ثم نسلم العميل شهادة الضمان الرسمية.",
    deliverables: [
      "إجراء اختبار ضغط للمواسير أو اختبار غمر مائي للعزل.",
      "تنظيف الموقع بالكامل وإزالة أي مخلفات عمل.",
      "تسليم عقد الضمان الرسمي المكتوب (يصل إلى 10 سنوات) وجدولة المتابعة.",
    ],
    icon: Award,
  },
];

const DEPARTMENTS_LIST: Department[] = [
  {
    id: 1,
    name: "قسم الفحص الهندسي وكشف التسربات",
    headTitle: "بإشراف مهندسي فحص شبكات وميكانيكا",
    staffCount: "18 مهندساً وفنياً",
    description:
      "القسم المسؤول عن تشغيل الأجهزة الإلكترونية الدقيقة، تحليل فواتير المياه المرتفعة، وفحص الخزانات والمسابح والحمامات والشبكات الرئيسية.",
    responsibilities: [
      "الفحص بالأكوافون والكاميرات الحرارية وغاز التتبع.",
      "إعداد التقارير الفنية المعتمدة للاعتراض على فواتير المياه.",
      "إصلاح التسربات بأقل تدخل جراحي ممكن (في حدود بلاطة واحدة).",
    ],
    certifications: ["شهادة تشغيل أجهزة Hermann Sewerin الألمانية", "اعتماد فحص الشبكات المائية"],
  },
  {
    id: 2,
    name: "قسم العزل المائي والحراري وحماية الأسطح",
    headTitle: "بإشراف مهندسين مدنيين مختصين",
    staffCount: "22 فنياً محترفاً",
    description:
      "يتولى حماية المباني والمنشآت من مياه الأمطار وحرارة الصيف الحارقة عبر تطبيق أحدث أنظمة العزل الكيميائي والحراري.",
    responsibilities: [
      "رش الفوم البولي يوريثان للأسطح الخرسانية والشنكو (الهناجر).",
      "عزل الخزانات الأرضية والعلوية بمواد الإيبوكسي والأسمنت البلوري.",
      "عزل الحمامات والمطابخ والمسابح قبل وبعد البلاط.",
    ],
    certifications: ["مطابقة كود البناء السعودي SBC", "اعتماد تطبيق مواد CIC و Sika و BASF"],
  },
  {
    id: 3,
    name: "قسم الترميمات العامة والمقاولات والصيانة",
    headTitle: "بإشراف مهندس معماري وإنشائي",
    staffCount: "15 فنياً وحرفياً",
    description:
      "يعيد الحياة للمباني المتضررة من الرطوبة والتسربات، وينفذ أعمال التجديد والتشطيبات المتكاملة بدقة عالية.",
    responsibilities: [
      "معالجة تصدعات وشروخ الجدران والخرسانة وتآكل حديد التسليح.",
      "تجديد الحمامات والمطابخ بالكامل (سباكة، بلاط، جبس، دهانات).",
      "معالجة هبوط الأرضيات والأحواش وإعادة التبليط بمواد عازلة.",
    ],
    certifications: ["خبرة +10 سنوات في الترميم الإنشائي", "ضمان شامل على التشطيبات"],
  },
  {
    id: 4,
    name: "قسم الخدمات البيئية والطوارئ (مجاري، خزانات، مكيفات، مبيدات)",
    headTitle: "بإشراف أخصائي صحة وسلامة بيئية",
    staffCount: "14 فنياً مجهزاً",
    description:
      "فريق التدخل السريع لخدمات النظافة التخصصية، فتح الانسدادات المستعصية، وتأمين بيئة صحية خالية من الحشرات والملوثات.",
    responsibilities: [
      "تسليك المجاري وغسيل الشبكات بالضغط العالي والنيتروجين.",
      "غسيل وتعقيم الخزانات مع قياس نسبة الكلور والملوحة.",
      "تنظيف وصيانة المكيفات (سبليت، مركزي، شباك) ورش المبيدات الآمنة.",
    ],
    certifications: ["تصريح استخدام مبيدات الصحة العامة", "بروتوكول التعقيم الآمن للخزانات"],
  },
];

const KHARJ_NEIGHBORHOODS: Neighborhood[] = [
  { id: 1, name: "حي الخزامى", sector: "شمال الخرج", responseTime: "20 دقيقة", projectsCompleted: 640, highlightService: "عزل فوم وكشف تسربات الفلل" },
  { id: 2, name: "حي الورود", sector: "شمال الخرج", responseTime: "20 دقيقة", projectsCompleted: 520, highlightService: "عزل خزانات أرضية وترميم" },
  { id: 3, name: "حي النهضة", sector: "شمال الخرج", responseTime: "25 دقيقة", projectsCompleted: 710, highlightService: "فحص شبكات المياه والحمامات" },
  { id: 4, name: "حي الأندلس", sector: "شمال الخرج", responseTime: "25 دقيقة", projectsCompleted: 480, highlightService: "عزل أسطح مائي وحراري" },
  { id: 5, name: "حي المصيف", sector: "شمال الخرج", responseTime: "20 دقيقة", projectsCompleted: 390, highlightService: "غسيل مكيفات وعزل خزانات" },
  { id: 6, name: "حي الريان", sector: "شرق الخرج", responseTime: "25 دقيقة", projectsCompleted: 550, highlightService: "كشف تسربات بدون تكسير" },
  { id: 7, name: "حي المنتزه", sector: "وسط الخرج" as "غرب ووسط الخرج", responseTime: "15 دقيقة", projectsCompleted: 820, highlightService: "ترميم شامل وصيانة سباكة" },
  { id: 8, name: "حي السلام", sector: "غرب ووسط الخرج", responseTime: "15 دقيقة", projectsCompleted: 690, highlightService: "تسليك مجاري بالضغط وكشف تسربات" },
  { id: 9, name: "حي السعادة", sector: "شرق الخرج", responseTime: "25 دقيقة", projectsCompleted: 430, highlightService: "عزل فوم بولي يوريثان" },
  { id: 10, name: "حي الفيصلية", sector: "جنوب الخرج", responseTime: "20 دقيقة", projectsCompleted: 610, highlightService: "معالجة رطوبة الجدران والترميم" },
  { id: 11, name: "حي الخالدية", sector: "غرب ووسط الخرج", responseTime: "15 دقيقة", projectsCompleted: 740, highlightService: "عزل خزانات إيبوكسي وتعقيم" },
  { id: 12, name: "حي اليرموك", sector: "شرق الخرج", responseTime: "25 دقيقة", projectsCompleted: 380, highlightService: "رش مبيدات ومكافحة النمل الأبيض" },
  { id: 13, name: "حي مشرف", sector: "جنوب الخرج", responseTime: "20 دقيقة", projectsCompleted: 495, highlightService: "كشف تسربات المسابح والخزانات" },
  { id: 14, name: "حي العالية", sector: "شمال الخرج", responseTime: "25 دقيقة", projectsCompleted: 340, highlightService: "عزل أسطح الفلل الحديثة" },
  { id: 15, name: "الدلم والهياثم واليمامة", sector: "جنوب الخرج", responseTime: "35 دقيقة", projectsCompleted: 655, highlightService: "كافة خدمات العزل والفحص والترميم" },
];

const COMPARISON_DATA: ComparisonRow[] = [
  {
    criterion: "طريقة تحديد موقع التسرب",
    asasAlAmn: "أجهزة صوتية وحرارية رقمية بدقة 99.4% بدون تكسير",
    traditionalWorkers: "تخمين عشوائي وتكسير مساحات واسعة من البلاط والجدران",
    importance: "عالية جداً",
  },
  {
    criterion: "جودة ومصدر مواد العزل",
    asasAlAmn: "مواد أصلية معتمدة (أمريكية، ألمانية، سويسرية، وسعودية مطابقة لـ SASO)",
    traditionalWorkers: "مواد تجارية رديئة أو مغشوشة تتلف وتتقشر خلال أشهر قليلة",
    importance: "عالية جداً",
  },
  {
    criterion: "الضمان القانوني والفني",
    asasAlAmn: "شهادة ضمان رسمية مكتوبة تصل إلى 10 سنوات مع متابعة دورية",
    traditionalWorkers: "وعود شفهية فقط واختفاء العامل أو تغير رقمه عند ظهور مشكلة",
    importance: "عالية جداً",
  },
  {
    criterion: "التقارير الفنية المعتمدة",
    asasAlAmn: "تقرير هندسي مفصل بالصور والقراءات يساعد في خفض فاتورة المياه",
    traditionalWorkers: "لا يوجد أي تقارير أو مستندات رسمية",
    importance: "عالية",
  },
  {
    criterion: "التكلفة الإجمالية على المدى الطويل",
    asasAlAmn: "توفير كبير (إصلاح من المرة الأولى + خفض فواتير الكهرباء والمياه)",
    traditionalWorkers: "خسائر مضاعفة بسبب تكرار الأعطال وإعادة شراء البلاط والدهانات",
    importance: "عالية جداً",
  },
  {
    criterion: "الإشراف والالتزام بالمواعيد",
    asasAlAmn: "إشراف هندسي مباشر، زي موحد، التزام بالدقيقة، وتنظيف الموقع",
    traditionalWorkers: "تأخر في المواعيد، غياب الرقابة، وترك مخلفات تكسير في المنزل",
    importance: "عالية",
  },
];

const ABOUT_FAQS: AboutFAQ[] = [
  {
    category: "عن الشركة والاعتمادات",
    question: "ما الذي يجعل شركة أساس الأمن الخليجي الخيار الأول في الخرج؟",
    answer:
      "نحن نجمع بين الخبرة الميدانية العميقة في طبيعة مباني وتربة الخرج (أكثر من 12 عاماً) وبين الاستثمار المستمر في أحدث التكنولوجيا العالمية. نحن لا نعتمد على العمالة غير المدربة، بل لدينا طواقم فنية متخصصة لكل قسم، ونمنح العميل عقد ضمان رسمي حقيقي يصل إلى 10 سنوات، مع سرعة استجابة لا تتجاوز 45 دقيقة.",
  },
  {
    category: "عن الضمان والعقود",
    question: "هل الضمان الذي تقدمونه يشمل المواد وتكلفة اليد العاملة معاً؟",
    answer:
      "نعم بكل تأكيد. شهادة الضمان الصادرة من شركة أساس الأمن الخليجي هي ضمان شامل (مواد + مصنعية). في حال ظهور أي خلل في المنطقة المعزولة أو التي تم إصلاحها خلال فترة الضمان، يتوجه فريقنا فوراً لإعادة المعالجة والصيانة مجاناً بالكامل دون تحميل العميل ريالاً واحداً.",
  },
  {
    category: "عن التغطية الجغرافية",
    question: "هل تقتصر خدماتكم على وسط مدينة السيح أم تشمل كافة قرى وضواحي الخرج؟",
    answer:
      "أسطولنا يغطي محافظة الخرج بالكامل بنسبة 100%؛ بداية من كافة أحياء السيح (شمالاً وجنوباً وشرقاً وغرباً)، وصولاً إلى الدلم، الهياثم، اليمامة، نعجان، السلمية، والرفايع، بالإضافة إلى المزارع والاستراحات والمناطق الصناعية.",
  },
  {
    category: "عن الفحص والتكلفة",
    question: "كيف يتم تحديد تكلفة العزل أو كشف التسربات والترميم؟",
    answer:
      "نعتمد سياسة التسعير العادل والشفاف. في كشف التسربات هناك رسوم فحص رمزية ثابتة، وفي حال قيامنا بالإصلاح يتم خصم أو دمج التكلفة ضمن باقة الإصلاح. أما في العزل والترميم، فيتم حساب المتر المربع بدقة بعد المعاينة الميدانية وتحديد نوع المادة والسماكة المطلوبة حسب حالة السطح أو الخزان.",
  },
  {
    category: "عن جودة المواد",
    question: "هل المواد المستخدمة في عزل الخزانات ورش المبيدات آمنة على صحة الأسرة؟",
    answer:
      "سلامة وصحة عملائنا خط أحمر. في عزل الخزانات نستخدم حصرياً الإيبوكسي الغذائي المعتمد (Food Grade Epoxy) غير السام والذي لا يتفاعل مع المياه نهائياً. وفي مكافحة الحشرات نستخدم مبيدات صحة عامة مصرحة من الجهات المختصة، عديمة الرائحة أو ذات أثر آمن، مع توفير جل مخصص للمطابخ لا يتطلب إزالة الأواني أو مغادرة المنزل.",
  },
  {
    category: "عن قطاع الأعمال",
    question: "هل تتعاملون مع المشاريع الكبيرة، المدارس، المستودعات، والمجمعات التجارية؟",
    answer:
      "نعم، لدينا قسم مشاريع (B2B) مخصص للتعاقد مع الشركات، المجمعات السكنية، المدارس، المساجد، والمصانع في الخرج. نمتلك القدرة البشرية والمعدات الثقيلة لإنجاز آلاف الأمتار المربعة من عزل الفوم والإيبوكسي، وتوقيع عقود صيانة سنوية دورية بأسعار تنافسية.",
  },
];

// ============================================================================
// 3. Main Page Component (المكون الرئيسي لصفحة من نحن)
// ============================================================================

export default function AboutPage() {
  // States for interactive tabs & filters
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "philosophy" | "quality">("vision");
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>("all");
  const [selectedSector, setSelectedSector] = useState<string>("الكل");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  // Filtered Equipment List
  const filteredEquipments =
    selectedTechCategory === "all"
      ? TECH_EQUIPMENTS
      : TECH_EQUIPMENTS.filter((item) => item.category === selectedTechCategory);

  // Filtered Neighborhoods
  const filteredNeighborhoods =
    selectedSector === "الكل"
      ? KHARJ_NEIGHBORHOODS
      : KHARJ_NEIGHBORHOODS.filter((item) => item.sector === selectedSector);

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden" dir="rtl">
      
      {/* =====================================================================
          SECTION 1: HERO BANNER (القسم الافتتاحي السينمائي)
      ===================================================================== */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-[#00BFFF]/20">
        {/* تأثيرات إضاءة خلفية */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#00BFFF]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* شريط المسار (Breadcrumbs) */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 bg-[#061124]/80 w-fit px-4 py-2 rounded-full border border-[#00BFFF]/30">
            <Link href="/" className="hover:text-[#00BFFF] transition-colors">
              الرئيسية
            </Link>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37] font-bold">من نحن - قصة أساس الأمن الخليجي</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* النص التعريفي الرئيسي */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full w-fit text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Sparkles className="w-4 h-4" />
                <span>الريادة في الحلول الهندسية، العزل، وكشف التسربات بالخرج</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                نحن <span className="text-[#00BFFF]">أساس الأمن</span>{" "}
                <span className="text-[#D4AF37]">الخليجي</span>.. درعك الهندسي لحماية واستدامة عقارك
              </h1>

              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                منذ أكثر من 12 عاماً في محافظة الخرج، تأسست شركتنا على مبدأ واحد لا يتجزأ:{" "}
                <strong className="text-white">
                  &quot;تقديم حلول هندسية جذرية تقضي على مشاكل التسربات والرطوبة للأبد دون تكسير عشوائي&quot;
                </strong>
                . نحن نجمع بين أحدث تكنولوجيا الفحص الألمانية والأمريكية، وبين أجود مواد العزل المعتمدة عالمياً ومحلياً، لنمنحك راحة البال بضمان رسمي يصل إلى 10 سنوات.
              </p>

              {/* نقاط سريعة */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="flex items-center gap-3 bg-[#061124]/90 p-3.5 rounded-xl border border-[#00BFFF]/30">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold">فحص إلكتروني دقيق بدون تكسير</span>
                </div>
                <div className="flex items-center gap-3 bg-[#061124]/90 p-3.5 rounded-xl border border-[#00BFFF]/30">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold">مواد عزل مطابقة لكود البناء السعودي</span>
                </div>
                <div className="flex items-center gap-3 bg-[#061124]/90 p-3.5 rounded-xl border border-[#00BFFF]/30">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold">تقارير فنية معتمدة لخفض الفواتير</span>
                </div>
                <div className="flex items-center gap-3 bg-[#061124]/90 p-3.5 rounded-xl border border-[#00BFFF]/30">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold">تغطية فورية لكافة أحياء الخرج 24/7</span>
                </div>
              </div>

              {/* أزرار التفاعل */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-extrabold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>تواصل مع الإدارة الهندسية عبر واتساب</span>
                </Link>

                <Link
                  href="/portfolio"
                  className="flex items-center gap-3 bg-[#061124] hover:bg-[#00BFFF] text-[#00BFFF] hover:text-[#030b1c] border-2 border-[#00BFFF] font-bold px-7 py-4 rounded-xl transition-all duration-300"
                >
                  <span>شاهد سابقة أعمالنا بالـفيديو</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* عرض الفيديو التعريفي والبطاقة التفاعلية */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.3)] bg-[#061124] group">
                <video
                  src="/about.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[420px] sm:h-[480px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030b1c] via-[#030b1c]/30 to-transparent"></div>

                {/* زر تشغيل الفيديو بنافذة منبثقة */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  title="تشغيل الفيديو التعريفي بالصوت"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#D4AF37]/90 hover:bg-[#D4AF37] text-[#030b1c] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.9)] transition-transform duration-300 hover:scale-110"
                >
                  <Play className="w-9 h-9 ml-1" fill="currentColor" />
                </button>

                {/* شريط معلوماتي أسفل الفيديو */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-[#030b1c]/90 backdrop-blur-md border-t border-[#D4AF37]/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#D4AF37] font-bold text-sm">توثيق حي من أرض الواقع</p>
                      <h3 className="text-white font-extrabold text-lg">فريق أساس الأمن الخليجي أثناء العمل</h3>
                    </div>
                    <Image
                      src="/logo.png"
                      alt="شعار أساس الأمن الخليجي"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: KEY STATISTICS (الأرقام والإحصائيات القياسية)
      ===================================================================== */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_STATS.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="bg-[#061124]/85 backdrop-blur-md border-2 border-[#00BFFF]/30 hover:border-[#D4AF37] rounded-2xl p-6 transition-all duration-300 shadow-[0_0_15px_rgba(0,191,255,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-4xl lg:text-5xl font-extrabold text-[#D4AF37] mb-2 flex items-baseline gap-1">
                        <span>{stat.value}</span>
                        <span className="text-2xl text-[#00BFFF]">{stat.suffix}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00BFFF] transition-colors">
                        {stat.label}
                      </h3>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#00BFFF]/10 border border-[#00BFFF]/40 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20 flex items-center justify-center text-[#00BFFF] group-hover:text-[#D4AF37] transition-all">
                      <IconComponent className="w-7 h-7" />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-3">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: DEEP STORY & ARCHITECTURAL IDENTITY (قصتنا العميقة)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              من نحن عن قرب
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              القصة الكاملة لشركة <span className="text-[#00BFFF]">أساس الأمن الخليجي</span>
            </h2>
            <p className="text-gray-300 text-lg">
              كيف تحولنا من فريق فني متخصص إلى المؤسسة الهندسية الأكثر موثوقية في محافظة الخرج لحماية المباني والمنشآت؟
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* القصة التفصيلية */}
            <div className="lg:col-span-7 bg-[#061124]/90 border-2 border-[#00BFFF]/40 rounded-3xl p-8 lg:p-10 shadow-[0_0_30px_rgba(0,191,255,0.15)] flex flex-col justify-between">
              <div className="space-y-6 text-gray-200 leading-relaxed text-base lg:text-lg">
                <h3 className="text-2xl font-bold text-[#D4AF37] flex items-center gap-3">
                  <Building2 className="w-7 h-7 text-[#00BFFF]" />
                  <span>لماذا تأسست &quot;أساس الأمن الخليجي&quot;؟</span>
                </h3>
                <p>
                  لسنوات طويلة، عانى أصحاب العقارات والفلل في محافظة الخرج من مشكلة متكررة ومؤرقة: عند حدوث تسرب للمياه أو ارتفاع مفاجئ في الفاتورة أو ظهور رطوبة في الجدران والأسقف، كان اللجوء إلى العمالة التقليدية غير المؤهلة يؤدي إلى كوارث إنشائية ومالية. حيث يبدأ العامل بالتخمين وتكسير أرضيات الحمامات والمطابخ والأحواش بشكل عشوائي، مما يكلف المالك آلاف الريالات في إعادة التشطيب دون حل جذري للمشكلة الأصلية!
                </p>
                <p>
                  من رحم هذه الحاجة الماسة، انطلقت <strong className="text-[#00BFFF]">شركة أساس الأمن الخليجي</strong> برؤية هندسية صارمة: <strong className="text-[#D4AF37]">منع الاجتهاد العشوائي واستبداله بالعلم والتكنولوجيا</strong>. استثمرنا منذ اليوم الأول في جلب أحدث أجهزة الفحص بالذبذبات الصوتية، الكاميرات الحرارية، وأجهزة ضغط النيتروجين، وقمنا بتدريب كوادرنا على قراءة الخرائط الميكانيكية والإنشائية للمباني السعودية.
                </p>
                <p>
                  ومع مرور السنوات، أدركنا أن كشف التسربات وحده لا يكفي لحماية المبنى إذا لم يكن مدعوماً بمنظومة عزل قوية تمنع حدوث المشكلة من الأساس. لذلك توسعنا بقوة في مجال <strong className="text-white">العزل المائي والحراري (الفوم بولي يوريثان، الإيبوكسي، والبيتومين)</strong>، ثم أكملنا الحلقة بخدمات الترميم المتكامل، تسليك المجاري بالضغط الهيدروجيني، تعقيم الخزانات، غسيل المكيفات، ومكافحة الحشرات، لنصبح المحطة الواحدة الشاملة (One-Stop Shop) لصيانة وحماية العقار في الخرج.
                </p>
              </div>

              {/* صندوق اقتباس الإدارة */}
              <div className="mt-8 bg-[#030b1c] border-r-4 border-[#D4AF37] p-6 rounded-2xl shadow-inner">
                <p className="text-white italic font-semibold text-lg mb-3">
                  &quot;إن اسم &apos;أساس الأمن&apos; لم يأتِ من فراغ؛ بل لأن سلامة الأساسات الخرسانية وخلوها من المياه الجوفية والتسربات هو الأمان الحقيقي لكل أسرة تسكن تحت سقف المبنى.&quot;
                </p>
                <span className="text-[#00BFFF] text-sm font-bold">— الإدارة الهندسية لشركة أساس الأمن الخليجي</span>
              </div>
            </div>

            {/* البطاقات الجانبية التوضيحية */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#061124]/90 border border-[#D4AF37]/50 rounded-3xl p-7 shadow-[0_0_20px_rgba(212,175,55,0.15)] flex-1">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">خبرة عميقة بطبيعة مناخ وتربة الخرج</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  تتميز محافظة الخرج بطبيعة تربة خاصة ومستويات مياه سطحية في بعض الأحياء، بالإضافة إلى درجات حرارة تتجاوز 48 مئوية صيفاً وبرودة شديدة شتاءً. هذا التباين الحراري يسبب تمدد وانكماش الخرسانة والمواسير.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00BFFF]"></span>
                    <span>اختيار مواد عزل مرنة تقاوم التشققات الحرارية.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00BFFF]"></span>
                    <span>عزل الخزانات الأرضية بمواد تقاوم ضغط المياه الجوفية والأملاح.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00BFFF]"></span>
                    <span>معالجة الرطوبة الأرضية الصاعدة في الدور الأرضي والأسوار.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#061124]/90 border border-[#00BFFF]/50 rounded-3xl p-7 shadow-[0_0_20px_rgba(0,191,255,0.15)] flex-1">
                <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/20 text-[#00BFFF] flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">أثر خدماتنا على التوفير المالي للعميل</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  خدماتنا لا تحمي المبنى فحسب، بل تمثل استثماراً يعيد قيمته للعميل مباشرة من خلال التوفير في الفواتير الشهرية وتكاليف الصيانة:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                    <span>خفض فاتورة الكهرباء بنسبة تصل إلى 40% بعد عزل الأسطح بالفوم.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                    <span>خفض فاتورة المياه بنسبة تصل إلى 70% فور إصلاح تسربات الخزانات.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                    <span>توفير آلاف الريالات عبر تجنب تكسير السيراميك والرخام الفاخر.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: INTERACTIVE VISION, MISSION & PHILOSOPHY TABS
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
                البوصلة الاستراتيجية لشركة <span className="text-[#D4AF37]">أساس الأمن</span>
              </h2>
              <p className="text-gray-400">
                اضغط على التبويبات أدناه لاستكشاف رؤيتنا، رسالتنا، وفلسفتنا الهندسية الصارمة في ضبط الجودة
              </p>
            </div>

            {/* أزرار التبويبات */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
              <button
                onClick={() => setActiveTab("vision")}
                className={`flex items-center justify-center gap-2 py-4 px-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border ${
                  activeTab === "vision"
                    ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                    : "bg-[#030b1c] text-gray-300 border-[#00BFFF]/30 hover:border-[#D4AF37]"
                }`}
              >
                <Eye className="w-5 h-5" />
                <span>رؤيتنا المستقبلية</span>
              </button>

              <button
                onClick={() => setActiveTab("mission")}
                className={`flex items-center justify-center gap-2 py-4 px-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border ${
                  activeTab === "mission"
                    ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                    : "bg-[#030b1c] text-gray-300 border-[#00BFFF]/30 hover:border-[#D4AF37]"
                }`}
              >
                <Target className="w-5 h-5" />
                <span>رسالتنا المجتمعية</span>
              </button>

              <button
                onClick={() => setActiveTab("philosophy")}
                className={`flex items-center justify-center gap-2 py-4 px-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border ${
                  activeTab === "philosophy"
                    ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                    : "bg-[#030b1c] text-gray-300 border-[#00BFFF]/30 hover:border-[#D4AF37]"
                }`}
              >
                <Layers className="w-5 h-5" />
                <span>فلسفة العمل</span>
              </button>

              <button
                onClick={() => setActiveTab("quality")}
                className={`flex items-center justify-center gap-2 py-4 px-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border ${
                  activeTab === "quality"
                    ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                    : "bg-[#030b1c] text-gray-300 border-[#00BFFF]/30 hover:border-[#D4AF37]"
                }`}
              >
                <Shield className="w-5 h-5" />
                <span>ميثاق الجودة والأمان</span>
              </button>
            </div>

            {/* محتوى التبويب النشط */}
            <div className="bg-[#030b1c] border border-[#00BFFF]/30 rounded-2xl p-6 sm:p-10">
              {activeTab === "vision" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-block bg-[#00BFFF]/10 text-[#00BFFF] border border-[#00BFFF]/30 px-3 py-1 rounded-lg text-sm font-bold">
                      نحو صدارة قطاع الصيانة والعزل في المملكة
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      أن نكون المرجع الهندسي الأول لحماية الثروة العقارية في الخرج والمنطقة الوسطى
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                      تتمثل رؤيتنا المتوافقة مع مستهدفات جودة الحياة والاستدامة العمرانية في المملكة العربية السعودية 2030 في رفع كفاءة المباني السكنية والتجارية، والحد من الهدر المائي والطاقي الناتج عن التسربات وضعف العزل، عبر توطين أحدث التقنيات العالمية غير المدمرة (Non-Destructive Testing).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-[#061124] border border-[#D4AF37]/30">
                        <h4 className="font-bold text-[#D4AF37] mb-1">الريادة التكنولوجية</h4>
                        <p className="text-sm text-gray-400">تحديث معداتنا سنوياً لمواكبة أحدث ما توصلت إليه المختبرات الألمانية والأمريكية.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#061124] border border-[#D4AF37]/30">
                        <h4 className="font-bold text-[#D4AF37] mb-1">الأمن المائي والإنشائي</h4>
                        <p className="text-sm text-gray-400">المساهمة الفعالة في الحفاظ على المياه الجوفية ومياه الشبكة العامة من الهدر الخفي.</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00BFFF]/20 to-[#D4AF37]/20 border-2 border-[#D4AF37] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      <Eye className="w-16 h-16 text-[#D4AF37] mb-2" />
                      <span className="font-extrabold text-white text-lg">رؤية 2030</span>
                      <span className="text-xs text-[#00BFFF]">استدامة وكفاءة عمرانية</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "mission" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-lg text-sm font-bold">
                      التزامنا تجاه كل عميل
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      توفير خدمات هندسية موثوقة تجمع بين أعلى معايير الجودة والتكلفة المدروسة
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                      رسالتنا هي إنهاء قلق أصحاب المنازل والمنشآت في الخرج من مشاكل التسربات، الرطوبة، التشققات، وانسداد الشبكات، من خلال تقديم خدمة متكاملة تبدأ بالتشخيص العلمي الدقيق وتنتهي بالمعالجة الجذرية المضمونة، مع احترام تام لخصوصية المنازل ومواعيد العملاء.
                    </p>
                    <ul className="space-y-2 text-gray-300 text-sm sm:text-base pt-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#D4AF37]" />
                        <span>تحويل تجربة الصيانة المنزلية من عبء مرهق إلى عملية منظمة وسريعة ومضمونة.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#D4AF37]" />
                        <span>بناء علاقة طويلة الأمد مع العميل تستمر لسنوات عبر برامج المتابعة والضمان.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#D4AF37]" />
                        <span>تقديم استشارات فنية صادقة تحمي العميل من الاستغلال التجاري.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#00BFFF]/20 border-2 border-[#00BFFF] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_30px_rgba(0,191,255,0.3)]">
                      <Target className="w-16 h-16 text-[#00BFFF] mb-2" />
                      <span className="font-extrabold text-white text-lg">هدفنا الأول</span>
                      <span className="text-xs text-[#D4AF37]">رضا العميل 100%</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "philosophy" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-block bg-[#00BFFF]/10 text-[#00BFFF] border border-[#00BFFF]/30 px-3 py-1 rounded-lg text-sm font-bold">
                      العلم قبل العمل
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      التشخيص الصحيح يمثل 70% من نجاح الحل الهندسي
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                      في شركة أساس الأمن الخليجي، نرفض تماماً مبدأ &quot;التجربة والخطأ&quot; في ممتلكات عملائنا. فلسفتنا تقوم على تحليل السبب الجذري للمشكلة: لماذا حدث التسرب؟ هل هو بسبب ضغط المضخة (الدينمو)؟ أم هبوط في التربة؟ أم تآكل في الجلب؟ وعندها نعالج السبب والنتيجة معاً.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-[#061124] border border-[#00BFFF]/30 text-center">
                        <span className="text-[#D4AF37] font-extrabold text-xl block mb-1">1. افحص</span>
                        <span className="text-xs text-gray-300">بأحدث الأجهزة الرقمية</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#061124] border border-[#00BFFF]/30 text-center">
                        <span className="text-[#D4AF37] font-extrabold text-xl block mb-1">2. عالج</span>
                        <span className="text-xs text-gray-300">بأجود المواد المعتمدة</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#061124] border border-[#00BFFF]/30 text-center">
                        <span className="text-[#D4AF37] font-extrabold text-xl block mb-1">3. اختبر</span>
                        <span className="text-xs text-gray-300">ووثّق بشهادة ضمان</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00BFFF]/20 to-[#D4AF37]/20 border-2 border-[#D4AF37] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      <Layers className="w-16 h-16 text-[#D4AF37] mb-2" />
                      <span className="font-extrabold text-white text-lg">منهجية علمية</span>
                      <span className="text-xs text-[#00BFFF]">دقة بلا عشوائية</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "quality" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-lg text-sm font-bold">
                      لا تنازل عن المواصفات القياسية
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      ميثاق صارم يضمن مطابقة كافة أعمالنا للمواصفات السعودية (SASO & SBC)
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                      تخضع كل عملية تنفيذية في شركتنا لرقابة جودة داخلية من ثلاث مراحل: فحص صلاحية وجودة المواد الخام قبل دخولها الموقع، مراقبة طريقة التحضير والرش والتطبيق، ثم إجراء اختبارات القياس النهائية بحضور العميل قبل توقيع محضر الاستلام.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <span className="px-4 py-2 rounded-lg bg-[#061124] border border-[#D4AF37]/40 text-sm text-[#D4AF37] font-semibold">
                        كثافة فوم قياسية (40-45 كجم/م³)
                      </span>
                      <span className="px-4 py-2 rounded-lg bg-[#061124] border border-[#D4AF37]/40 text-sm text-[#D4AF37] font-semibold">
                        إيبوكسي آمن صحياً 100%
                      </span>
                      <span className="px-4 py-2 rounded-lg bg-[#061124] border border-[#D4AF37]/40 text-sm text-[#D4AF37] font-semibold">
                        قطع غيار سباكة أصلية (حراري ألماني/سعودي)
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#00BFFF]/20 border-2 border-[#00BFFF] flex flex-col items-center justify-center p-6 text-center shadow-[0_0_30px_rgba(0,191,255,0.3)]">
                      <Shield className="w-16 h-16 text-[#00BFFF] mb-2" />
                      <span className="font-extrabold text-white text-lg">ضمان ذهبي</span>
                      <span className="text-xs text-[#D4AF37]">عقود رسمية موثقة</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: CORE VALUES GRID (قيمنا الجوهرية بتصميم مضيء)
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              القيم والركائز التي تحكم <span className="text-[#D4AF37]">عملنا اليومي</span>
            </h2>
            <p className="text-gray-300 text-lg">
              أربعة مبادئ أساسية يلتزم بها كل مهندس وفني يرتدي زي شركة أساس الأمن الخليجي
            </p>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CORE_VALUES.map((val) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={val.id}
                  className="bg-[#061124]/90 border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-3xl p-8 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] transition-all duration-300 flex-shrink-0">
                      <ValIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-[#D4AF37] transition-colors">
                      {val.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-base">
                    {val.description}
                  </p>

                  <div className="bg-[#030b1c] rounded-2xl p-5 border border-[#00BFFF]/20 space-y-3">
                    {val.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00BFFF] mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: TIMELINE HISTORY (مسيرة التطور عبر السنين)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00BFFF] font-bold text-sm bg-[#00BFFF]/10 px-4 py-1.5 rounded-full border border-[#00BFFF]/30">
              تاريخ حافل بالإنجازات
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              مسيرة تطور <span className="text-[#D4AF37]">أساس الأمن الخليجي</span>
            </h2>
            <p className="text-gray-300 text-lg">
              محطات رئيسية صنعت ريادتنا وجعلتنا الشركة الأكثر تطوراً وتجهيزاً في الخرج
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* الخط العمودي المضيء */}
            <div className="hidden md:block absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-1 bg-gradient-to-b from-[#00BFFF] via-[#D4AF37] to-[#00BFFF] rounded-full"></div>

            <div className="space-y-12">
              {TIMELINE_HISTORY.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={event.year}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* دائرة السنة في المنتصف */}
                    <div className="md:absolute md:right-1/2 md:translate-x-1/2 z-20 w-20 h-20 rounded-full bg-[#030b1c] border-4 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.7)] flex items-center justify-center font-extrabold text-xl text-[#D4AF37] mb-4 md:mb-0">
                      {event.year}
                    </div>

                    {/* بطاقة الحدث */}
                    <div className="w-full md:w-[45%]">
                      <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/40 hover:border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-[0_0_25px_rgba(0,191,255,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-bold px-3 py-1 rounded-full">
                            {event.badge}
                          </span>
                          <span className="text-[#00BFFF] font-bold text-sm">محطة #{index + 1}</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
                          {event.title}
                        </h3>
                        <p className="text-[#D4AF37] text-sm font-semibold mb-4">{event.subtitle}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-5">
                          {event.description}
                        </p>

                        <div className="bg-[#030b1c] p-4 rounded-2xl border border-gray-800 space-y-2">
                          <p className="text-xs font-bold text-[#00BFFF] mb-2">أبرز الإنجازات في هذه المرحلة:</p>
                          {event.achievements.map((ach, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></span>
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: TECHNOLOGICAL ARSENAL (موسوعة الأجهزة والمعدات التفاعلية)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              الترسانة التكنولوجية لشركتنا
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              الأجهزة والمعدات التي <span className="text-[#00BFFF]">نمتلكها ونعمل بها</span>
            </h2>
            <p className="text-gray-300 text-lg">
              نستعرض لك بشفافية كاملة أحدث الأجهزة الألمانية والأمريكية التي يستخدمها مهندسونا يومياً في ميدان العمل بالخرج
            </p>
          </div>

          {/* أزرار الفلترة */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: "all", label: "جميع المعدات والتقنيات (8)" },
              { id: "leak", label: "أجهزة كشف التسربات" },
              { id: "insulation", label: "ماكينات وأنظمة العزل" },
              { id: "sewage", label: "معدات تسليك المجاري" },
              { id: "inspection", label: "أجهزة الفحص والمكافحة" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedTechCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                  selectedTechCategory === cat.id
                    ? "bg-[#00BFFF] text-[#030b1c] border-[#00BFFF] shadow-[0_0_20px_rgba(0,191,255,0.5)]"
                    : "bg-[#061124] text-gray-300 border-[#D4AF37]/40 hover:border-[#D4AF37]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* شبكة المعدات */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEquipments.map((tech) => (
              <div
                key={tech.id}
                className="bg-[#061124]/95 border-2 border-[#D4AF37]/50 hover:border-[#00BFFF] rounded-3xl p-7 sm:p-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-800">
                    <span className="bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-3 py-1 rounded-lg text-xs font-bold">
                      {tech.categoryLabel}
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-gray-400">
                        المنشأ: <strong className="text-white">{tech.origin}</strong>
                      </span>
                      <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-2.5 py-1 rounded-md font-bold">
                        الدقة: {tech.accuracy}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#D4AF37] mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {tech.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <h4 className="text-sm font-bold text-white">المميزات التشغيلية:</h4>
                    {tech.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* المواصفات الفنية المصغرة */}
                <div className="grid grid-cols-3 gap-2 bg-[#030b1c] p-4 rounded-2xl border border-[#00BFFF]/20">
                  {tech.technicalSpecs.map((spec, idx) => (
                    <div key={idx} className="text-center border-l last:border-l-0 border-gray-800 px-2">
                      <span className="block text-[11px] text-gray-400 mb-1">{spec.label}</span>
                      <span className="block text-xs sm:text-sm font-bold text-[#00BFFF]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: WORK METHODOLOGY (منهجية العمل من الاتصال حتى الضمان)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              كيف نعمل في <span className="text-[#00BFFF]">أساس الأمن الخليجي</span>؟
            </h2>
            <p className="text-gray-300 text-lg">
              5 خطوات قياسية منظمة تضمن لك تجربة خدمة مريحة، دقيقة، وخالية من أي فوضى
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WORK_METHODOLOGY.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className="relative bg-[#061124]/90 border-2 border-[#00BFFF]/30 hover:border-[#D4AF37] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_0_15px_rgba(0,191,255,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-black text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors">
                        {step.stepNumber}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] group-hover:border-[#D4AF37] transition-all">
                        <StepIcon className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="inline-block text-xs font-bold text-[#00BFFF] bg-[#00BFFF]/10 px-2.5 py-1 rounded-md mb-2">
                      المدة: {step.duration}
                    </span>

                    <h3 className="text-lg font-extrabold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {step.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-800 pt-4 space-y-2">
                    <span className="text-xs font-bold text-[#D4AF37] block">مخرجات المرحلة:</span>
                    {step.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-400">
                        <span className="text-[#00BFFF] font-bold">•</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: ORGANIZATIONAL STRUCTURE & DEPARTMENTS (أقسام الشركة)
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00BFFF] font-bold text-sm bg-[#00BFFF]/10 px-4 py-1.5 rounded-full border border-[#00BFFF]/30">
              هيكلية مؤسسية متكاملة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              الأقسام الهندسية والفرق <span className="text-[#D4AF37]">التخصصية</span>
            </h2>
            <p className="text-gray-300 text-lg">
              لا نرسل &quot;عامل صيانة عام&quot; لكل المهام؛ بل نمتلك 4 إدارات فنية مستقلة، كل إدارة تضم خبراء متخصصين في مجالهم الدقيق
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {DEPARTMENTS_LIST.map((dept) => (
              <div
                key={dept.id}
                className="bg-[#061124]/95 border-2 border-[#D4AF37]/40 rounded-3xl p-8 shadow-[0_0_20px_rgba(212,175,55,0.12)] hover:border-[#D4AF37] transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="bg-[#D4AF37] text-[#030b1c] font-extrabold text-xs px-3.5 py-1.5 rounded-lg">
                    {dept.staffCount}
                  </span>
                  <span className="text-[#00BFFF] text-xs sm:text-sm font-semibold">
                    {dept.headTitle}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-3">{dept.name}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {dept.description}
                </p>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#00BFFF]/20 mb-5">
                  <h4 className="text-sm font-bold text-[#00BFFF] mb-3">المهام والمسؤوليات الدقيقة:</h4>
                  <ul className="space-y-2">
                    {dept.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {dept.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#00BFFF]/10 text-[#00BFFF] border border-[#00BFFF]/30 px-3 py-1.5 rounded-lg font-medium"
                    >
                      ★ {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: COMPARISON TABLE (لماذا نحن مقابل العمالة التقليدية؟)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              الفرق الجوهري بين <span className="text-[#D4AF37]">شركتنا</span> والعمالة العشوائية
            </h2>
            <p className="text-gray-300 text-lg">
              مقارنة واقعية توضح لماذا يفضل أهالي الخرج التعاقد مع مؤسسة رسمية معتمدة بدلاً من المخاطرة بالعمالة السائبة
            </p>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.2)] bg-[#061124]/95">
            <table className="w-full text-right border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-[#030b1c] border-b-2 border-[#D4AF37]">
                  <th className="p-5 text-white font-extrabold text-base lg:text-lg w-1/4">
                    معيار المقارنة
                  </th>
                  <th className="p-5 text-[#D4AF37] font-extrabold text-base lg:text-lg w-1/3 bg-[#D4AF37]/10 border-x border-[#D4AF37]/30">
                    <div className="flex items-center gap-2">
                      <Shield className="w-6 h-6 text-[#D4AF37]" />
                      <span>شركة أساس الأمن الخليجي</span>
                    </div>
                  </th>
                  <th className="p-5 text-gray-400 font-bold text-base lg:text-lg w-1/3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <span>العمالة التقليدية / غير المعتمدة</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {COMPARISON_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-[#030b1c]/60 transition-colors">
                    <td className="p-5 font-bold text-white">
                      <div>{row.criterion}</div>
                      <span className="inline-block mt-1 text-[11px] bg-[#00BFFF]/15 text-[#00BFFF] px-2 py-0.5 rounded">
                        درجة الأهمية: {row.importance}
                      </span>
                    </td>
                    <td className="p-5 bg-[#D4AF37]/5 border-x border-[#D4AF37]/20">
                      <div className="flex items-start gap-2.5 text-white font-semibold text-sm sm:text-base">
                        <Check className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                        <span>{row.asasAlAmn}</span>
                      </div>
                    </td>
                    <td className="p-5 text-gray-400 text-sm sm:text-base">
                      <div className="flex items-start gap-2.5">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{row.traditionalWorkers}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 11: GEOGRAPHIC COVERAGE IN AL-KHARJ (تغطية أحياء الخرج)
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              انتشار ميداني واسع
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              التغطية الجغرافية الشاملة لأحياء <span className="text-[#00BFFF]">محافظة الخرج</span>
            </h2>
            <p className="text-gray-300 text-lg">
              نمتلك نقاط تمركز لسيارات الفحص والعزل في مختلف قطاعات الخرج لضمان الوصول إليك في أسرع وقت ممكن
            </p>
          </div>

          {/* فلتر القطاعات */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["الكل", "شمال الخرج", "شرق الخرج", "غرب ووسط الخرج", "جنوب الخرج"].map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all border ${
                  selectedSector === sec
                    ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                    : "bg-[#061124] text-gray-300 border-[#00BFFF]/30 hover:border-[#D4AF37]"
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* بطاقات الأحياء */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredNeighborhoods.map((hood) => (
              <div
                key={hood.id}
                className="bg-[#061124]/90 border border-[#D4AF37]/40 hover:border-[#00BFFF] rounded-2xl p-5 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-lg text-white">{hood.name}</h3>
                  </div>
                  <span className="text-xs bg-[#030b1c] text-[#D4AF37] border border-[#D4AF37]/30 px-2.5 py-1 rounded-md">
                    {hood.sector}
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-gray-300 border-t border-gray-800 pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">متوسط سرعة الوصول:</span>
                    <span className="text-[#00BFFF] font-bold">{hood.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">المشاريع المنفذة بالحي:</span>
                    <span className="text-[#D4AF37] font-bold">+{hood.projectsCompleted} مشروع</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">الخدمة الأكثر طلباً:</span>
                    <span className="text-white font-medium">{hood.highlightService}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 12: ALL SERVICES ECOSYSTEM LINKS (منظومة خدماتنا المتكاملة)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              استكشف منظومة <span className="text-[#00BFFF]">خدماتنا الاحترافية</span>
            </h2>
            <p className="text-gray-300 text-lg">
              كل خدمة من خدماتنا السبع يديرها قسم مختص ومجهزة بأحدث الآليات والمواد المعتمدة
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "كشف تسربات المياه",
                slug: "/services/water-leak-detection",
                desc: "فحص إلكتروني بالأكوافون والكاميرا الحرارية بدون تكسير مع تقارير معتمدة.",
                icon: Droplets,
              },
              {
                name: "عزل أسطح (مائي وحراري)",
                slug: "/services/roof-insulation",
                desc: "عزل فوم بولي يوريثان ورولات بيتومين لحماية الأسطح وخفض فاتورة الكهرباء.",
                icon: ThermometerSnowflake,
              },
              {
                name: "غسيل وعزل خزانات",
                slug: "/services/tank-cleaning",
                desc: "تنظيف وتعقيم الخزانات وعزلها بمادة الإيبوكسي الغذائي الآمن لمنع التسرب.",
                icon: Container,
              },
              {
                name: "ترميم وبناء وصيانة",
                slug: "/services/restoration-and-construction",
                desc: "معالجة الشروخ والرطوبة، تجديد الحمامات والمطابخ، وترميم المباني الشامل.",
                icon: Hammer,
              },
              {
                name: "تسليك مجاري بالضغط",
                slug: "/services/sewage-clearing",
                desc: "فتح الانسدادات المستعصية وتفتيت الدهون بضغط المياه والنيتروجين.",
                icon: Activity,
              },
              {
                name: "رش مبيدات ومكافحة حشرات",
                slug: "/services/pest-control",
                desc: "القضاء الفوري على الصراصير، النمل الأبيض، والبق بمبيدات آمنة بدون رائحة.",
                icon: Bug,
              },
              {
                name: "غسيل وصيانة مكيفات",
                slug: "/services/ac-washing",
                desc: "غسيل وتنظيف المكيفات السبلت والمركزي في مكانها مع تعبئة الفريون.",
                icon: Wind,
              },
              {
                name: "معرض الفيديوهات الحقيقية",
                slug: "/portfolio",
                desc: "شاهد عشرات الفيديوهات الموثقة من مواقع عملنا في أحياء الخرج.",
                icon: Play,
              },
            ].map((srv, idx) => {
              const SrvIcon = srv.icon;
              return (
                <Link
                  key={idx}
                  href={srv.slug}
                  className="bg-[#061124] border border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-2xl p-6 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] transition-colors">
                      <SrvIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                      {srv.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{srv.desc}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#00BFFF] group-hover:text-[#D4AF37] pt-3 border-t border-gray-800">
                    <span>استعراض تفاصيل الخدمة</span>
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 13: ABOUT FAQS (أسئلة شائعة خاصة بهوية وضمانات الشركة)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              أسئلة شائعة حول <span className="text-[#D4AF37]">شركتنا وضماناتنا</span>
            </h2>
            <p className="text-gray-300 text-lg">
              إجابات شفافة ومباشرة حول نظام التعاقد، الضمانات، والاعتمادات في أساس الأمن الخليجي
            </p>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {ABOUT_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#061124] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.2)]"
                      : "bg-[#061124]/60 border-[#00BFFF]/25 hover:border-[#00BFFF]/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-6 text-right flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#00BFFF] block mb-1">
                        {faq.category}
                      </span>
                      <h3
                        className={`text-lg sm:text-xl font-bold ${
                          isOpen ? "text-[#D4AF37]" : "text-white"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#D4AF37] text-[#030b1c]"
                          : "bg-[#00BFFF]/10 text-[#00BFFF]"
                      }`}
                    >
                      {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-800 text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 14: FINAL MEGA CTA (دعوة للتواصل المباشر)
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#061124] via-[#0a1d3b] to-[#061124] border-2 border-[#D4AF37] p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Clock className="w-4 h-4" />
                <span>خدمة عملاء وطوارئ على مدار 24 ساعة في الخرج</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                هل تبحث عن الأمان الهندسي والجودة المضمونة لعقارك؟
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
                لا تترك منزلك أو منشأتك عرضة لمخاطر التسربات والرطوبة. تواصل الآن مع مهندسي{" "}
                <span className="text-[#D4AF37] font-bold">شركة أساس الأمن الخليجي</span> واحصل على استشارة فنية ومعاينة دقيقة بأحدث الأجهزة مع ضمان رسمي يصل إلى 10 سنوات.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#e6c247] text-[#030b1c] font-extrabold text-lg px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:shadow-[0_0_40px_rgba(212,175,55,0.9)] hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>راسلنا عبر واتساب الآن</span>
                  <span dir="ltr" className="text-sm bg-[#030b1c] text-[#D4AF37] px-2.5 py-1 rounded-lg">
                    +966 50 120 6816
                  </span>
                </Link>

                <a
                  href="tel:+966501206816"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#030b1c] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold text-lg px-10 py-5 rounded-2xl transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>اتصال هاتفي مباشر</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          VIDEO MODAL (النافذة المنبثقة لتشغيل الفيديو التعريفي بالصوت)
      ===================================================================== */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[150] bg-[#020612]/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <button
            onClick={() => setIsVideoModalOpen(false)}
            title="إغلاق الفيديو"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#030b1c] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#030b1c] border-2 border-[#D4AF37] flex items-center justify-center transition-all z-[160]"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden border-2 border-[#D4AF37] bg-black shadow-[0_0_50px_rgba(212,175,55,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/about.mp4"
              controls
              autoPlay
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}