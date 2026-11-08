"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ShieldCheck,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Wrench,
  Layers,
  Compass,
  Clock,
  MapPin,
  ArrowLeft,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Calculator,
  Send,
  Cpu,
  Gauge,
  Zap,
  Award,
  HelpCircle,
  Sliders,
  Eye,
  Droplets,
  Wind,
  Flame,
  RefreshCw,
  Settings,
  Radio,
  Crosshair,
  ShieldAlert,
  Truck,
  Filter,
  Waves,
  Thermometer,
  FileCheck,
  Building2,
  Lock,
} from "lucide-react";

// ============================================================================
// 1. Interfaces & Engineering Data Types (هياكل البيانات الهندسية لتسليك المجاري)
// ============================================================================

interface BlockageCase {
  id: string;
  title: string;
  locationZone: string;
  obstructionMaterial: string;
  urgencyLevel: "طوارئ قصوى (طفح نشط)" | "خطورة عالية" | "متوسطة / وقائية";
  urgencyBadgeClass: string;
  requiredPressureBar: string;
  nozzleType: string;
  symptoms: string[];
  structuralRisks: string[];
  engineeringSolutionSteps: string[];
  executionDuration: string;
  warrantyPeriod: string;
}

interface SewageEquipment {
  id: string;
  name: string;
  codeModel: string;
  technologyCategory: string;
  pressureOrPower: string;
  pipeDiameterRange: string;
  maxReachMeters: string;
  overview: string;
  operatingMechanism: string[];
  idealScenarios: string[];
  safetyToPipes: string;
}

interface PipeCleaningStage {
  stageNumber: number;
  title: string;
  blockagePercentage: number;
  flowEfficiency: number;
  technicalAction: string;
  engineeringDescription: string;
  statusLabel: string;
  colorTheme: string;
}

interface SewageServiceDivision {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  targetProblems: string[];
  executionProtocol: {
    step: string;
    detail: string;
  }[];
  preventiveMeasures: string[];
  deliverables: string[];
}

interface ChemicalComparisonItem {
  factor: string;
  hydroNitrogenTech: string;
  acidAndTraditional: string;
  dangerNote: string;
}

interface KharjSewageSector {
  sectorTitle: string;
  networkCharacteristics: string;
  frequentIssues: string[];
  coveredNeighborhoods: string[];
  emergencyResponseMinutes: number;
  completedOperations: number;
}

interface SewageFAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 2. Comprehensive Encyclopedic Data Constants (البيانات الموسوعية الكاملة)
// ============================================================================

const BLOCKAGE_DIAGNOSTIC_CASES: BlockageCase[] = [
  {
    id: "grease-kitchen",
    title: "تكلس وتصلب الشحوم والزيوت في خطوط المطابخ والصفايات",
    locationZone: "شبكة صرف المطابخ والخطوط الفرعية (2 إلى 4 بوصة)",
    obstructionMaterial: "كتل دهنية متحجرة + بقايا أطعمة وصابون متكلس",
    urgencyLevel: "خطورة عالية",
    urgencyBadgeClass: "text-[#D4AF37] border-[#D4AF37]/50 bg-[#D4AF37]/10",
    requiredPressureBar: "150 - 180 Bar (ضغط مائي حراري ونفاث)",
    nozzleType: "رأس دوار نفاث ثلاثي الزوايا (RotaryDegreaser Nozzle)",
    symptoms: [
      "ارتجاع المياه من بالوعة أرضية المطبخ عند تشغيل حوض الغسيل أو غسالة الصحون.",
      "بطء شديد في تصريف المياه وسماع صوت قرقرة (فقاعات هواء) داخل المواسير.",
      "انبعاث روائح كريهة ومستمرة من الصفاية رغم استخدام المنظفات العادية.",
    ],
    structuralRisks: [
      "تراكم المياه العادمة تحت سيراميك المطبخ وتلف الترويبة وتسربها للسقف السفلي.",
      "تكون بيئة خصبة لتكاثر الصراصير الصغيرة والحشرات داخل تجاويف الأنابيب.",
    ],
    engineeringSolutionSteps: [
      "فتح غطاء الصفاية الرئيسية وإدخال سبرينغ التسليك الكهربائي المرن لفتح مسار أولي.",
      "ضخ المياه المضغوطة مع مذيبات شحوم إنزيمية آمنة تماماً على مواسير البلاستيك (PVC).",
      "كشط الجدران الداخلية للأنبوب بزاوية 360 درجة لإزالة الطبقة الدهنية الملتصقة بالكامل.",
      "اختبار سرعة التصريف بكميات مياه غزيرة وتأمين مصيدة الروائح (P-Trap).",
    ],
    executionDuration: "30 إلى 45 دقيقة بدون أي تكسير",
    warrantyPeriod: "ضمان عدم انسداد مع إرشادات وقائية",
  },
  {
    id: "cement-construction",
    title: "انسداد المواسير ببقايا الأسمنت والجبس والغراء بعد البناء أو الترميم",
    locationZone: "الحمامات الجديدة، الأحواش، والخطوط الرئيسية (4 إلى 6 بوصة)",
    obstructionMaterial: "كتل أسمنتية متصلبة + جبس + غراء سيراميك وترويبة",
    urgencyLevel: "طوارئ قصوى (طفح نشط)",
    urgencyBadgeClass: "text-red-500 border-red-500/50 bg-red-500/10",
    requiredPressureBar: "220 - 250 Bar + نبضات غاز النيتروجين التفتيتية",
    nozzleType: "رأس قاطع فولاذي هيدروليكي (Chisel & Chain Cutter Nozzle)",
    symptoms: [
      "انسداد شبه كلي أو كلي في حمامات الفلل الجديدة أو المرممة حديثاً بالخرج.",
      "فشل كافة الطرق التقليدية أو السوستة اليدوية في اختراق الكتلة الصلبة داخل الماسورة.",
      "تجمع المياه في الصفايات وعدم تصريفها نهائياً.",
    ],
    structuralRisks: [
      "محاولة العمالة غير المختصة الطرق بأسياخ الحديد تؤدي لكسر كوع الماسورة تحت البلاط مباشرة.",
      "الاضطرار لتكسير سيراميك وبورسلان الحمام الجديد بالكامل إذا لم تُعالج بمعدات التفتيت الدقيقة.",
    ],
    engineeringSolutionSteps: [
      "إدخال كاميرا المنظار الداخلي (Sewer Camera) لتحديد مكان وحجم الكتلة الأسمنتية بدقة السنتيمتر.",
      "استخدام مركب كيميائي مفكك للروابط الكلسية والأسمنتية لا يتفاعل مع أنابيب الـ uPVC.",
      "تشغيل الرأس الفولاذي النفاث بضغط هيدروديناميكي موجه لتفتيت الأسمنت إلى حبيبات رملية دقيقة.",
      "سحب وغسيل الرواسب المفتتة باتجاه غرفة التفتيش الرئيسية وإعادة التصوير بالكاميرا للتأكد من نظافة القطر 100%.",
    ],
    executionDuration: "60 إلى 90 دقيقة بدقة هندسية",
    warrantyPeriod: "ضمان شامل على استعادة القطر الكامل للماسورة",
  },
  {
    id: "main-manhole-roots",
    title: "طفح غرف التفتيش الرئيسية بالحوش وتغلغل جذور الأشجار",
    locationZone: "غرف التفتيش (المناهل) والخط الخارجي العام (6 إلى 10 بوصة)",
    obstructionMaterial: "جذور أشجار متشابكة + مناديل ورواسب صلبة متراكمة",
    urgencyLevel: "طوارئ قصوى (طفح نشط)",
    urgencyBadgeClass: "text-red-500 border-red-500/50 bg-red-500/10",
    requiredPressureBar: "250 Bar (وحدة النافوري المركزية + قاطع الجذور)",
    nozzleType: "رأس منشاري دوار بضغط الماء العالي (Root Ranger Nozzle)",
    symptoms: [
      "خروج وطفح مياه المجاري من أغطية غرف التفتيش في حوش الفيلا أو المدخل.",
      "توقف التصريف في جميع حمامات ومطابخ الدور الأرضي في وقت واحد.",
      "انتشار روائح الصرف الصحي القوية في فناء المنزل وحول الأسوار.",
    ],
    structuralRisks: [
      "تسرب مياه المجاري من غرف التفتيش غير المعزولة إلى الخزان الأرضي لمياه الشرب أو قواعد المبنى.",
      "هبوط بلاط الحوش وانترلوك المداخل نتيجة تآكل التربة الرملية بسبب طفح الصرف.",
    ],
    engineeringSolutionSteps: [
      "شفط وسحب المياه الطافحة والرواسب الثقيلة من غرف التفتيش فوراً لتأمين الموقع.",
      "دفع خرطوم الضغط الهيدروليكي عالي القوة عكس اتجاه التيار لقطع الجذور وتفتيت السدد الرئيسي.",
      "غسيل كامل للخط الواصل بين غرف التفتيش المتتالية حتى نقطة الربط بالشبكة العامة أو البيارة.",
      "معالجة وتطهير غرف التفتيش وتقديم توصية بعزلها إيبوكسياً لمنع التسرب المستقبلي.",
    ],
    executionDuration: "45 إلى 75 دقيقة",
    warrantyPeriod: "ضمان رسمي + عقد صيانة دورية للمناهل",
  },
  {
    id: "septic-tank-overflow",
    title: "امتلاء وطفح البيارات المتكرر وانسداد مسام التربة الأرضية",
    locationZone: "البيارات الأرضية والخزانات التحليلية (Septic Tanks)",
    obstructionMaterial: "حمأة صلبة مترسبة في القاع + طبقة شحوم عازلة لجدران التصريف",
    urgencyLevel: "خطورة عالية",
    urgencyBadgeClass: "text-[#00BFFF] border-[#00BFFF]/50 bg-[#00BFFF]/10",
    requiredPressureBar: "شفط فاكيوم عميق + ضخ نيتروجين ومواد تفتيت بيولوجية",
    nozzleType: "مضخات سحب وتقليب هيدروليكية ثقيلة",
    symptoms: [
      "امتلاء البيارة بسرعة غير طبيعية (كل أسبوع أو أسبوعين) بعد شفطها بالوايت العادي.",
      "ارتجاع المياه في الخط الرئيسي الواصل من المبنى إلى البيارة.",
      "ظهور نشع ورطوبة حول غطاء البيارة الخارجي.",
    ],
    structuralRisks: [
      "تهديد خطير لسلامة سقف البيارة الخرساني نتيجة تآكل الحديد بغازات الكبريتيد.",
      "تلوث المياه الجوفية وتضرر أساسات الأسوار والمبنى المجاور للبيارة.",
    ],
    engineeringSolutionSteps: [
      "الشفط الكامل للمياه والرواسب الطينية الثقيلة في قاع البيارة (وليس سحب الماء السطحي فقط).",
      "غسيل جدران وقاع البيارة بمضخات الضغط العالي لإزالة الطبقة الشحمية السوداء التي تسد مسام التربة.",
      "إضافة مواد تفتيت ومعالجة تفتح مسام الأرض الطبيعية لتستعيد البيارة قدرتها على التصريف الذاتي.",
      "تنظيف الخط الرابط بين آخر غرفة تفتيش والبيارة والتأكد من سلامة التهوية.",
    ],
    executionDuration: "ساعة إلى ساعتين عمل متكامل",
    warrantyPeriod: "إطالة عمر التصريف ومنع الطفح المتكرر",
  },
];

const SEWAGE_TECH_ARSENAL: SewageEquipment[] = [
  {
    id: "hydro-jetter",
    name: "ماكينة التسليك الهيدروديناميكي بالضغط العالي",
    codeModel: "Italian Hydro-Jetter Pro 250B",
    technologyCategory: "قوة الدفع المائي النفاث (Hydro-Jetting)",
    pressureOrPower: "ضغط يصل إلى 250 بار (3600 PSI)",
    pipeDiameterRange: "من 2 بوصة حتى 16 بوصة",
    maxReachMeters: "خرطوم مرن بطول 80 متراً",
    overview:
      "التقنية الأقوى والأكثر أماناً عالمياً لتسليك وغسيل شبكات الصرف الصحي. تعتمد على ضخ المياه عبر فوهات فولاذية دقيقة جداً تدفع الخرطوم للأمام بقوة الدفع العكسي، بينما تقوم النفاثات الجانبية بكشط وغسيل الجدار الداخلي للماسورة بنسبة 100%.",
    operatingMechanism: [
      "اختيار الرأس النفاث (Nozzle) المناسب لنوع السدد (دهون، رمال، أسمنت، أو جذور).",
      "إدخال الخرطوم من غرفة التفتيش أو الصفاية وتشغيل المضخة بتدرج مدروس في الضغط.",
      "تفتيت العوائق الصلبة وتحويلها إلى سائل يندفع بسلاسة نحو المخرج الرئيسي دون أي خدش للأنبوب.",
    ],
    idealScenarios: [
      "غسيل الشبكات الرئيسية للفلل، القصور، المطاعم، والمجمعات التجارية بالخرج.",
      "إزالة التكلسات الدهنية والرواسب الأسمنتية المستعصية.",
      "الصيانة الوقائية السنوية لإعادة أنابيب الصرف لحالتها الجديدة.",
    ],
    safetyToPipes: "آمن 100% على أنابيب PVC و uPVC والفخار والحديد الزهر",
  },
  {
    id: "nitrogen-blaster",
    name: "جهاز كبس وضغط غاز النيتروجين والهواء المتقطع",
    codeModel: "German Pneumatic Pulse K-90",
    technologyCategory: "الموجات التصادمية الغازية (Pneumatic Shockwave)",
    pressureOrPower: "نبضات ضغط متقطعة حتى 12 بار",
    pipeDiameterRange: "من 1.5 بوصة إلى 6 بوصة",
    maxReachMeters: "تأثير موجي يمتد لـ 35 متراً داخل الشبكة",
    overview:
      "جهاز تقني ذكي يستخدم في الخطوط الداخلية للحمامات والمطابخ والمغاسل. يقوم بإطلاق دفعات محسوبة من غاز النيتروجين أو الهواء المضغوط تشكل موجة دفع لحظية داخل الماء المحبوس، مما يدفع السدد بقوة هائلة في أجزاء من الثانية.",
    operatingMechanism: [
      "إحكام إغلاق فتحة الصفاية أو المخرج بسدادة مطاطية مخروطية مانعة للارتداد.",
      "ضبط ساعة المانومتر الرقمية على الضغط المناسب لقطر وعمر الماسورة.",
      "إطلاق دفعة النيتروجين التي تخلق تخلخلاً وضغطاً يزيح العوائق العالقة في الأكواع والزوايا الضيقة.",
    ],
    idealScenarios: [
      "تسليك الأحواض، الكراسي الإفرنجية والعربية، والصفايات الفرعية بسرعة فائقة.",
      "فتح الانسدادات في المواسير ذات الأكواع المتعددة التي يصعب مرور الأسلاك فيها.",
      "تفريغ جيوب الهواء المحبوسة في خطوط الصرف والتهوية.",
    ],
    safetyToPipes: "مراقب رقمياً لضمان عدم تجاوز ضغط تحمل الوصلات والغراء",
  },
  {
    id: "electric-auger",
    name: "ماكينة السوستة الفولاذية الكهربائية الحلزونية",
    codeModel: "Ridgid K-1500 Sectional Machine",
    technologyCategory: "العزم الميكانيكي الدوراني (Electromechanical Torque)",
    pressureOrPower: "سرعة دوران 700 دورة/دقيقة بمحرك فائق العزم",
    pipeDiameterRange: "من 2 بوصة إلى 10 بوصة",
    maxReachMeters: "وصلات فولاذية متداخلة حتى 60 متراً",
    overview:
      "ماكينة أمريكية الصنع تعتمد على كابلات فولاذية مرنة عالية الصلابة تدور بسرعة عالية داخل الماسورة، وتزود برؤوس متعددة (رأس رمح، رأس منشاري، رأس خطافي) لالتقاط وسحب الأجسام الصلبة والأقمشة والشعر المتشابك.",
    operatingMechanism: [
      "تثبيت الرأس الميكانيكي المناسب في مقدمة السبرينغ الفولاذي المرن.",
      "تشغيل الدوران التلقائي الذي يجعل الكابل يعبر الأكواع بزاوية 90 درجة بسلاسة تامة.",
      "اختراق السدد أو الاشتباك مع الأجسام الغريبة (أكياس، مناديل، ألعاب أطفال) وسحبها للخارج.",
    ],
    idealScenarios: [
      "استخراج الأجسام الصلبة والمناديل المتكتلة والشعر من خطوط الحمامات.",
      "التمهيد الميكانيكي الأولي قبل عملية الغسيل بالضغط المائي.",
      "العمل داخل الشقق والأدوار العلوية بنظافة تامة دون رذاذ مياه.",
    ],
    safetyToPipes: "كابلات مغلفة ومعالجة حرارياً تلتف داخل الأكواع دون كسرها",
  },
  {
    id: "cctv-camera",
    name: "منظار التصوير التلفزيوني الداخلي لمواسير الصرف",
    codeModel: "SeeSnake® HD Pipe Inspection + Sonde",
    technologyCategory: "الفحص البصري وتحديد الموقع بالرادار (CCTV & Locator)",
    pressureOrPower: "كاميرا ياقوتية 1080p مع 12 مصباح LED فائق الإضاءة",
    pipeDiameterRange: "من 1.5 بوصة حتى 12 بوصة",
    maxReachMeters: "كابل ألياف ضوئية بطول 40 متراً",
    overview:
      "العين الهندسية لشركة أساس الأمن الخليجي؛ عندما يتكرر انسداد المجاري في نفس المكان، فهذا يعني وجود خلل هيكلي داخل الماسورة. تدخل الكاميرا لتصوير الماسورة من الداخل الملون عالي الدقة وكشف الهبوط أو الكسر أو الأسمنت.",
    operatingMechanism: [
      "دفع الكاميرا المقاومة للماء داخل خط الصرف ومراقبة البث الحي على شاشة المهندس.",
      "تحديد سبب تكرار الانسداد: هل هو هبوط في الماسورة (Belly Pipe)؟ أم كسر؟ أم انفصال جلبة؟",
      "تشغيل جهاز التتبع اللاسلكي (Locator) فوق البلاط لتحديد مكان الكسر وعمقه بالضبط للإصلاح الموضعي.",
    ],
    idealScenarios: [
      "فحص شبكات الصرف الصحي للفلل قبل الشراء أو قبل استلامها من المقاول.",
      "تشخيص أسباب الانسدادات المتكررة والغريبة في المبنى.",
      "التأكد من نظافة وسلامة المواسير بعد عمليات التسليك والتفتيت.",
    ],
    safetyToPipes: "فحص بصري غير متلف نهائياً (100% Non-Destructive)",
  },
];

const PIPE_CLEANING_STAGES: PipeCleaningStage[] = [
  {
    stageNumber: 1,
    title: "حالة الانسداد الحرج وتراكم الرواسب",
    blockagePercentage: 92,
    flowEfficiency: 8,
    technicalAction: "رصد المشكلة وتشخيص موقع السدد",
    engineeringDescription:
      "تراكم طبقات الشحوم المتكلسة، الرمال، والمخلفات الصلبة يغلق أكثر من 90% من القطر الداخلي للأنبوب، مما يؤدي لارتجاع المياه الفوري من الصفايات وغرف التفتيش وانبعاث غازات الصرف.",
    statusLabel: "خطر طفح وتسرب نشط",
    colorTheme: "border-red-500 text-red-400 bg-red-950/30",
  },
  {
    stageNumber: 2,
    title: "الاختراق الأولي وتصريف المياه المحتجزة",
    blockagePercentage: 60,
    flowEfficiency: 40,
    technicalAction: "تشغيل السبرينغ الكهربائي أو نبضات النيتروجين",
    engineeringDescription:
      "يقوم الفني بفتح ثغرة مركزية في قلب الكتلة السادة للأنبوب لتصريف المياه الطافحة وتخفيف الضغط الهيدروستاتيكي عن الوصلات، مع تحديد طبيعة المادة المسببة للانسداد.",
    statusLabel: "فتح مسار أولي للتصريف",
    colorTheme: "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10",
  },
  {
    stageNumber: 3,
    title: "التفتيت الهيدروديناميكي وكشط الجدران",
    blockagePercentage: 20,
    flowEfficiency: 80,
    technicalAction: "ضخ المياه بضغط 200 بار عبر الرأس الدوار 360°",
    engineeringDescription:
      "تندفع الفوهة النفاثة داخل الماسورة مطلقة تيارات مائية حادة بزاوية خلفية وجانبية تقوم بتفتيت الدهون المتحجرة والكلس والأسمنت الملتصق بجدار الماسورة الداخلي.",
    statusLabel: "إزالة الرواسب الجدارية",
    colorTheme: "border-[#00BFFF] text-[#00BFFF] bg-[#00BFFF]/10",
  },
  {
    stageNumber: 4,
    title: "الغسيل الشامل وطرد الرواسب المفتتة",
    blockagePercentage: 0,
    flowEfficiency: 100,
    technicalAction: "غسيل تياري كامل وسحب المخلفات من غرفة التفتيش",
    engineeringDescription:
      "سحب الرواسب المفتتة بالكامل إلى غرفة التفتيش الرئيسية وشفطها، مع ضخ مطهرات ومواد مانعة لتكون البكتيريا والروائح، لتعود الماسورة بكامل قطرها التصميمي الأصلي.",
    statusLabel: "استعادة كفاءة القطر 100%",
    colorTheme: "border-emerald-400 text-emerald-400 bg-emerald-950/30",
  },
];

const SEWAGE_SERVICE_DIVISIONS: SewageServiceDivision[] = [
  {
    id: "indoor-networks",
    title: "تسليك شبكات المطابخ والحمامات والصفايات الداخلية",
    subtitle: "حلول فورية ونظيفة داخل الشقق والفلل دون فوضى أو تكسير للسيراميك",
    badge: "تدخل منزلي نظيف",
    description:
      "نتعامل مع انسدادات الأحواض، البالوعات الأرضية، الكراسي الإفرنجية والعربية، وخطوط غسالات الملابس والصحون باستخدام أجهزة ضغط النيتروجين والسوستة الكهربائية المغلفة التي تحافظ على نظافة الحمام والمطبخ تماماً.",
    targetProblems: [
      "انسداد حوض المطبخ بالدهون المتجمدة وبقايا الطعام.",
      "طفح صفاية الشاور أو أرضية الحمام بسبب تجمع الشعر والصابون.",
      "انسداد كرسي الحمام الإفرنجي أو العربي بالمناديل أو الأجسام الصلبة.",
    ],
    executionProtocol: [
      {
        step: "تأمين نظافة الموقع",
        detail: "فرش أغطية واقية حول منطقة الصفاية أو الكرسي لمنع أي اتساخ للأرضيات.",
      },
      {
        step: "التسليك الآلي الموجه",
        detail: "استخدام جهاز كبس النيتروجين أو السوستة الكهربائية حسب موقع ونوع الانسداد.",
      },
      {
        step: "إذابة الدهون والتعقيم",
        detail: "ضخ محاليل إنزيمية تذيب الدهون في كامل الفرع الداخلي وتعقم الماسورة من البكتيريا.",
      },
    ],
    preventiveMeasures: [
      "تركيب مصافي دقيقة في أحواض المطابخ والشاور.",
      "تجنب سكب الزيوت الساخنة مباشرة في الحوض.",
    ],
    deliverables: [
      "تصريف سريع وفوري للمياه بدون أي قرقرة أو ارتجاع.",
      "تعقيم وتطهير كامل لمنطقة العمل وإزالة الروائح الكريهة.",
    ],
  },
  {
    id: "main-lines-manholes",
    title: "غسيل وتسليك الخطوط الرئيسية وغرف التفتيش (المناهل)",
    subtitle: "قوة الضغط الهيدروليكي لفتح خطوط الـ 6 والـ 8 بوصة في الأحواش",
    badge: "معدات ضغط ثقيلة",
    description:
      "الخط الرئيسي في الحوش هو الشريان الذي يجمع صرف المبنى بالكامل؛ وعند انسداده تتوقف الحياة في المنزل. نقوم بتسليكه وغسله جذرياً باستخدام ماكينات Hydro-Jetting الإيطالية والألمانية التي تزيل الرمال والدهون وجذور الأشجار.",
    targetProblems: [
      "طفح مياه المجاري من غرف التفتيش في الحوش أو الارتداد.",
      "تراكم الرمال والطين ومخلفات البناء داخل المناهل الرئيسية.",
      "انغلاق الخط الواصل بين غرف التفتيش والبيارة أو الشبكة العامة.",
    ],
    executionProtocol: [
      {
        step: "فتح وتنظيف غرف التفتيش",
        detail: "إزالة الرواسب الصلبة والحجارة والدهون المتكتلة داخل كل غرفة تفتيش يدوياً وآلياً.",
      },
      {
        step: "الدفع النفاث عبر الخطوط",
        detail: "إدخال خرطوم الضغط العالي (250 بار) من منهل لآخر لغسيل القطر الداخلي للأنابيب.",
      },
      {
        step: "فحص الميول والرداد",
        detail: "التأكد من سلامة انسيابية المياه وفحص وصيانة صمام عدم الرجوع (الرداد) لمنع دخول الحشرات.",
      },
    ],
    preventiveMeasures: [
      "إحكام إغلاق أغطية غرف التفتيش لمنع سقوط الأتربة والأكياس.",
      "تنظيف الرداد الرئيسي دورياً كل 6 أشهر.",
    ],
    deliverables: [
      "شبكة خارجية سالكة ونظيفة بنسبة 100%.",
      "حماية أساسات المبنى وبلاط الحوش من مخاطر تسرب مياه الصرف.",
    ],
  },
  {
    id: "septic-odor-treatment",
    title: "شفط وتنظيف البيارات ومعالجة الروائح الكريهة والغازات",
    subtitle: "حلول علمية لمشكلة امتلاء البيارات السريع وانتشار روائح الصرف بالمنزل",
    badge: "حلول بيئية جذرية",
    description:
      "لا نكتفي بشفط البيارة تقليدياً؛ بل نعالج سبب امتلائها السريع عبر تفتيت الحمأة والدهون التي تغلق مسام التربة، كما نكشف بأجهزة الدخان والمنظار عن أسباب انتشار رائحة المجاري الكريهة داخل غرف ومجالس المنزل ونقضي عليها نهائياً.",
    targetProblems: [
      "امتلاء البيارة كل عدة أيام وتكرار دفع تكاليف وايتات الشفط.",
      "انتشار رائحة مجاري خفية ومزعجة داخل البيت خاصة عند تشغيل المكيفات أو الشفاطات.",
      "خروج حشرات الصرف والهموش من البالوعات وغرف التفتيش.",
    ],
    executionProtocol: [
      {
        step: "الشفط العميق وغسيل البيارة",
        detail: "سحب المياه والرواسب الطينية القاعية وغسيل الجدران لفتح مسام التصريف الأرضية.",
      },
      {
        step: "فحص مصادر الروائح الكريهة",
        detail: "الكشف على هوايات السطح، سيلكون كراسي الحمامات، وجفاف كيعان الريحة (P-Traps).",
      },
      {
        step: "العزل الإحكامي والتعقيم",
        detail: "إعادة تثبيت الكراسي بجلب عازلة للرائحة، وتركيب أغطية مناهل محكمة (بلت إن) مانعة للتسريب.",
      },
    ],
    preventiveMeasures: [
      "عدم إلقاء المناديل المبللة والدهون التي تقتل البكتيريا النافعة في البيارة.",
      "التأكد من عدم انسداد هوايات الصرف في أعلى السطح.",
    ],
    deliverables: [
      "عودة البيارة للعمل بكفاءة طبيعية لفترات طويلة جداً.",
      "منزل نقي خالٍ تماماً من روائح الصرف الصحي والغازات الضارة.",
    ],
  },
  {
    id: "commercial-contracts",
    title: "تسليك وصيانة شبكات المطاعم، المجمعات، والمنشآت بالخرج",
    subtitle: "عقود صيانة وقائية وطوارئ 24/7 للمطاعم، الفنادق، المدارس، والمصانع",
    badge: "قطاع الأعمال B2B",
    description:
      "تتعرض شبكات الصرف في المطاعم والمقاهي والمجمعات التجارية لضغط تشغيلي هائل وتراكم يومي للزيوت والشحوم. نوفر فرق طوارئ ليلية ومعدات غسيل لمصائد الشحوم (Grease Traps) والخطوط المركزية دون تعطيل حركة العمل.",
    targetProblems: [
      "امتلاء وانسداد مصائد الشحوم في المطاعم والمطابخ المركزية.",
      "طفح المجاري في مواقف وممرات المجمعات التجارية والمدارس.",
      "الحاجة لتقارير صيانة دورية معتمدة للبلدية والجهات الرقابية.",
    ],
    executionProtocol: [
      {
        step: "التدخل في أوقات خارج الذروة",
        detail: "تنفيذ أعمال الغسيل والتسليك في الأوقات المسائية أو الفجر لعدم إزعاج الزبائن.",
      },
      {
        step: "تنظيف مصائد الشحوم والخطوط",
        detail: "سحب الشحوم المتراكمة وغسيل المصيدة والأنابيب بالماء الحار المضغوط.",
      },
      {
        step: "الجدولة الدورية المسبقة",
        detail: "زيارات شهرية أو ربع سنوية ثابتة تمنع حدوث أي انسداد مفاجئ.",
      },
    ],
    preventiveMeasures: [
      "تنظيف مصيدة الشحوم بانتظام قبل انتقال الدهون للخط الرئيسي.",
      "فحص دوري بالمنظار لخطوط الصرف الرئيسية للمنشأة.",
    ],
    deliverables: [
      "فواتير ضريبية وعقود صيانة رسمية معتمدة.",
      "أولوية قصوى في حالات الطوارئ على مدار 24 ساعة.",
    ],
  },
];

const ACID_VS_HYDRO_COMPARISON: ChemicalComparisonItem[] = [
  {
    factor: "التأثير على سلامة مواسير البلاستيك (PVC) والغراء",
    hydroNitrogenTech: "آمن بنسبة 100%؛ يعتمد على ضغط الماء والنيتروجين الموزون دون أي تفاعل كيميائي أو حراري.",
    acidAndTraditional: "الأسيد الكيميائي التجاري يولد حرارة تغلي فوق 90°C تذيب غراء المواسير وتسبب انبعاج وتآكل الأنابيب.",
    dangerNote: "الأسيد هو السبب الرئيسي لثقوب مواسير الصرف تحت البلاط!",
  },
  {
    factor: "كفاءة إزالة السدد من جذوره",
    hydroNitrogenTech: "يغسل القطر الداخلي للأنبوب بالكامل (360 درجة) ويزيل الدهون والأسمنت لمسافة تصل لـ 80 متراً.",
    acidAndTraditional: "يفتح ثقباً صغيراً ومؤقتاً وسط الدهون سرعان ما ينغلق مرة أخرى بعد عدة أيام.",
    dangerNote: "حلولنا جذرية وليست مسكنات مؤقتة",
  },
  {
    factor: "الأمان الصحي على السكان والبيئة المنزلية",
    hydroNitrogenTech: "عملية نظيفة وصحية تماماً بدون أي أبخرة سامة أو روائح خانقة.",
    acidAndTraditional: "يطلق غازات سامة وحارقة للجهاز التنفسي والعينين ويتلف لمعان الاستانلس والسيراميك.",
    dangerNote: "سلامة أطفالكم وأسرتكم أولويتنا القصوى",
  },
  {
    factor: "القدرة على تفتيت الأسمنت وجذور الأشجار",
    hydroNitrogenTech: "الروؤس الهيدروديناميكية الدوارة تفتت الأسمنت المتصلب وتقطع جذور الأشجار بسهولة.",
    acidAndTraditional: "عاجز تماماً أمام مخلفات البناء أو الجذور أو الأجسام الصلبة، وقد يتصلب فوقها ويزيد المشكلة.",
    dangerNote: "قوة ميكانيكية وهيدروليكية مدروسة",
  },
];

const KHARJ_SEWAGE_SECTORS: KharjSewageSector[] = [
  {
    sectorTitle: "قطاع وسط وغرب الخرج (السيح والأحياء الحيوية)",
    networkCharacteristics: "شبكات صرف قديمة ومتوسطة العمر مع ضغط تشغيلي عالٍ",
    frequentIssues: [
      "انسداد الخطوط الرئيسية بالدهون المتراكمة عبر السنين.",
      "تغلغل جذور أشجار الحدائق والأرصفة داخل غرف التفتيش.",
      "انبعاث روائح الصرف وحاجة المناهل للتنظيف والعزل.",
    ],
    coveredNeighborhoods: ["حي المنتزه", "حي السلام", "حي الخالدية", "حي الفيصلية", "حي المحطة"],
    emergencyResponseMinutes: 15,
    completedOperations: 2150,
  },
  {
    sectorTitle: "قطاع شمال الخرج (الأحياء السكنية الحديثة والفلل الجديدة)",
    networkCharacteristics: "شبكات حديثة تتعرض غالباً لمخلفات التشطيب والبناء",
    frequentIssues: [
      "انسداد المواسير والصفايات ببقايا الأسمنت والجبس والترويبة.",
      "تراكم الرمال والأتربة في غرف التفتيش بالحوش قبل السكن.",
      "فحص شبكات الصرف بكاميرا المنظار قبل استلام الفيلا.",
    ],
    coveredNeighborhoods: ["حي الخزامى", "حي الورود", "حي النهضة", "حي الأندلس", "حي المصيف", "حي العالية"],
    emergencyResponseMinutes: 20,
    completedOperations: 1890,
  },
  {
    sectorTitle: "قطاع شرق وجنوب الخرج والمراكز التابعة",
    networkCharacteristics: "مزيج من الشبكات العامة والبيارات الأرضية والاستراحات",
    frequentIssues: [
      "طفح وامتلاء البيارات المتكرر وحاجتها للشفط وتفتيت الرواسب.",
      "تسليك خطوط الصرف الطويلة في المزارع والاستراحات والمستودعات.",
      "غسيل شبكات المطابخ والحمامات بالضغط والنيتروجين.",
    ],
    coveredNeighborhoods: ["حي الريان", "حي السعادة", "حي اليرموك", "حي مشرف", "الدلم", "الهياثم", "اليمامة"],
    emergencyResponseMinutes: 25,
    completedOperations: 1640,
  },
];

const SEWAGE_FAQS: SewageFAQ[] = [
  {
    id: 1,
    category: "التسليك بدون تكسير",
    question: "هل يمكن فتح انسداد المجاري المستعصي (حتى لو كان بسبب الأسمنت) بدون تكسير البلاط؟",
    answer:
      "نعم بكل تأكيد؛ في شركة أساس الأمن الخليجي نمتلك ماكينات الضغط الهيدروديناميكي (Hydro-Jetting) بقوة تصل إلى 250 بار مزودة برؤوس فولاذية دوارة مخصصة لتفتيت الأسمنت والجبس المتصلب داخل المواسير وتحويله إلى رمال ناعمة تخرج مع تيار الماء، بالإضافة لكاميرا المنظار لتحديد الموقع، وبذلك ننقذ أرضيات الحمامات والأحواش من أي تكسير.",
  },
  {
    id: 2,
    category: "مخاطر الأسيد الكيميائي",
    question: "لماذا تحذرون دائماً من استخدام 'الأسيد' الأسود القوي في فتح المجاري بالمنزل؟",
    answer:
      "لأن الأسيد الكيميائي المركز (حمض الكبريتيك التجاري) يتفاعل بعنف شديد مع الماء والمواد العضوية مولداً حرارة غليان فورية تؤدي إلى: 1) إذابة المادة اللاصقة (الغراء) في أكواع وجلب المواسير فيحدث تسرب خفي تحت البلاط. 2) تقوس وانبعاج مواسير البلاستيك الرقيقة. 3) إتلاف ترويبة السيراميك واستانلس الصفايات، فضلاً عن أبخرته السامة. أما تقنيات الضغط المائي والنيتروجين لدينا فهي آمنة 100%.",
  },
  {
    id: 3,
    category: "تكرار الانسداد",
    question: "قمت بتسليك المجاري أكثر من مرة مع عمال عاديين ولكنها تنسد مجدداً بعد أسبوع، ما السبب؟",
    answer:
      "السبب هو أن العامل التقليدي يستخدم سيخاً أو سلكاً صغيراً يثقب به وسط كتلة الدهون، فتمشي المياه مؤقتاً ثم سرعان ما يغلق الثقب. أو قد يكون هناك 'هبوط أو كسر' في الماسورة تحت الأرض يجمع الرواسب. نحن نقوم بغسيل كامل قطر الماسورة بالضغط العالي لإزالة الدهون من الجدران، وإذا لزم الأمر نصور الماسورة من الداخل بكاميرا المنظار لمعرفة السبب الجذري وحله نهائياً.",
  },
  {
    id: 4,
    category: "روائح المجاري بالمنزل",
    question: "أشم رائحة مجاري كريهة في الحمامات والصالة رغم عدم وجود طفح ظاهر، كيف تعالجونها؟",
    answer:
      "رائحة الصرف تنتج عن تسرب غاز الميثان وكبريتيد الهيدروجين من الشبكة إلى داخل المنزل بسبب: عدم إحكام جلدة كرسي الحمام الإفرنجي (الربل/الشمع)، أو جفاف/غياب كوع الريحة (P-Trap) في الصفايات والمغاسل، أو انسداد هواية الصرف في السطح، أو تسرب من غطاء غرفة التفتيش. يقوم فريقنا بفحص كافة هذه النقاط ومعالجتها وعزلها لمنع الرائحة فوراً.",
  },
  {
    id: 5,
    category: "سرعة الوصول والطوارئ",
    question: "لدي طفح مجاري طارئ الآن في الحوش والحمامات بالخرج، كم يستغرق وصولكم؟",
    answer:
      "نحن ندرك أن طفح المجاري حالة طوارئ قصوى لا تحتمل التأجيل؛ لذلك خصصنا سيارات طوارئ مجهزة بالكامل وموزعة في قطاعات الخرج على مدار 24 ساعة. بمجرد اتصالك أو إرسال موقعك عبر الواتساب على الرقم 0501206816، يتحرك أقرب فريق إليك ليصل خلال 15 إلى 30 دقيقة فقط.",
  },
  {
    id: 6,
    category: "الأسعار والضمان",
    question: "كيف يتم تحديد أسعار تسليك المجاري بالضغط أو تنظيف البيارات؟",
    answer:
      "أسعارنا في شركة أساس الأمن الخليجي مدروسة وتنافسية جداً، وتحدد بشفافية حسب طبيعة الانسداد (فرعي داخلي في حمام/مطبخ، أو خط رئيسي وغرف تفتيش في الحوش، أو شفط وتنظيف بيارة) ونوع المعدة المستخدمة. نتفق مع العميل على التكلفة بوضوح قبل البدء، مع ضمان فتح السدد بالكامل واختبار سريان الشبكة أمامك.",
  },
];

// ============================================================================
// 3. Main Page Component (المكون الرئيسي لصفحة تسليك مجاري بالضغط)
// ============================================================================

export default function SewageClearingPage() {
  // Interactive States
  const [selectedCaseId, setSelectedCaseId] = useState<string>("grease-kitchen");
  const [selectedEquipId, setSelectedEquipId] = useState<string>("hydro-jetter");
  const [activePipeStage, setActivePipeStage] = useState<number>(4);
  const [activeServiceDiv, setActiveServiceDiv] = useState<string>("indoor-networks");
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  // Interactive Emergency Calculator States
  const [calcPropertyType, setCalcPropertyType] = useState<string>("فيلا سكنية");
  const [calcProblemScope, setCalcProblemScope] = useState<string>(
    "انسداد خط رئيسي وغرف تفتيش بالحوش"
  );
  const [calcManholesCount, setCalcManholesCount] = useState<number>(3);
  const [calcNeedCamera, setCalcNeedCamera] = useState<boolean>(false);
  const [calcNeighborhood, setCalcNeighborhood] = useState<string>("حي الخزامى");

  // Current Selected Data Objects
  const currentCase =
    BLOCKAGE_DIAGNOSTIC_CASES.find((c) => c.id === selectedCaseId) ||
    BLOCKAGE_DIAGNOSTIC_CASES[0];

  const currentEquip =
    SEWAGE_TECH_ARSENAL.find((e) => e.id === selectedEquipId) || SEWAGE_TECH_ARSENAL[0];

  const currentStageObj =
    PIPE_CLEANING_STAGES.find((s) => s.stageNumber === activePipeStage) ||
    PIPE_CLEANING_STAGES[3];

  const currentDivision =
    SEWAGE_SERVICE_DIVISIONS.find((d) => d.id === activeServiceDiv) ||
    SEWAGE_SERVICE_DIVISIONS[0];

  // Dynamic Calculations for Emergency Estimator
  const estimatedMinutes =
    30 + calcManholesCount * 12 + (calcNeedCamera ? 25 : 0);

  const recommendedTech =
    calcProblemScope.includes("رئيسي") || calcProblemScope.includes("بيارة")
      ? "ماكينة الضغط العالي Hydro-Jetter 250 Bar"
      : "جهاز ضغط النيتروجين + السوستة الكهربائية";

  // Send Emergency Request to WhatsApp
  const handleSendEmergencyWhatsApp = () => {
    const message = `السلام عليكم شركة أساس الأمن الخليجي،
أرغب في طلب فريق تسليك المجاري والطوارئ في الخرج:
🏠 *نوع العقار:* ${calcPropertyType}
🚨 *طبيعة المشكلة:* ${calcProblemScope}
🕳️ *عدد غرف التفتيش / النقاط:* ${calcManholesCount}
📹 *فحص كاميرا منظار داخلي:* ${calcNeedCamera ? "نعم، مطلوب تصوير داخلي" : "تسليك وغسيل بالضغط فقط"}
📍 *الحي بالخرج:* ${calcNeighborhood}
⚙️ *التقنية المقترحة:* ${recommendedTech}

أرجو سرعة التوجه للموقع والتواصل معي.`;

    window.open(
      `https://wa.me/966501206816?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden" dir="rtl">
      
      {/* =====================================================================
          SECTION 1: HYDRO-DYNAMIC HERO SECTION (هيرو هندسي بدون صور)
      ===================================================================== */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#00BFFF]/20">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00BFFF]/10 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400 mb-8 bg-[#061124]/90 w-fit px-4 py-2 rounded-full border border-[#00BFFF]/30">
            <Link href="/" className="hover:text-[#00BFFF] transition-colors">
              الرئيسية
            </Link>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-gray-300">خدمات الطوارئ والصرف</span>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37] font-bold">شركة تسليك مجاري بالضغط في الخرج</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Column: Hero Copy & Emergency Triggers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <Zap className="w-4 h-4" />
                <span>طوارئ 24 ساعة بالخرج • تسليك بالضغط المائي والنيتروجين بدون تكسير</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                شركة <span className="text-[#00BFFF]">تسليك مجاري</span> بالخرج.. قوة الضغط الهيدروليكي لفتح أصعب الانسدادات فوراً
              </h1>

              <p className="text-gray-300 text-base sm:text-xl leading-relaxed">
                وداعاً لطفح البيارات، انسداد غرف التفتيش، وارتجاع مياه الحمامات والمطابخ. في{" "}
                <strong className="text-white">شركة أساس الأمن الخليجي</strong> نمتلك أحدث وحدات{" "}
                <strong className="text-[#D4AF37]">
                  الدفع المائي النفاث (Hydro-Jetting 250 Bar)، كبس النيتروجين، وكاميرات المنظار الداخلي
                </strong>{" "}
                لتفتيت الدهون المتحجرة والأسمنت وجذور الأشجار واستعادة كفاءة شبكتك بنسبة{" "}
                <strong className="text-[#00BFFF]">100% بدون أي تكسير</strong>.
              </p>

              {/* 4 Key Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">ضغط مائي ونيتروجين 250 بار</h2>
                    <p className="text-xs text-gray-400">تفتيت الشحوم والأسمنت بدون أسيد ضار</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">تصوير داخلي بكاميرا المنظار</h2>
                    <p className="text-xs text-gray-400">كشف هبوط وكسور المواسير تحت البلاط</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">تنظيف المناهل وشفط البيارات</h2>
                    <p className="text-xs text-gray-400">إزالة الرواسب وفتح مسام التصريف الأرضي</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">استجابة طوارئ خلال 20 دقيقة</h2>
                    <p className="text-xs text-gray-400">تغطية 24/7 لجميع أحياء وضواحي الخرج</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#D4AF37] hover:bg-[#e5c247] text-[#030b1c] font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:scale-105 text-base sm:text-lg"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>اطلب سيارة تسليك المجاري عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  className="flex items-center gap-3 bg-[#061124] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold px-7 py-4 rounded-2xl transition-all duration-300 text-base sm:text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>
            </div>

            {/* Left Column: Hydro-Jetting Digital Telemetry Console (Zero Images) */}
            <div className="lg:col-span-5">
              <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-[0_0_45px_rgba(212,175,55,0.25)] relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#00BFFF]/15 border border-[#00BFFF] flex items-center justify-center text-[#00BFFF]">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-[#D4AF37] font-bold block">
                        وحدة التحكم الهيدروديناميكية
                      </span>
                      <h3 className="text-lg font-extrabold text-white">
                        معايير التسليك الآمن بدون تكسير
                      </h3>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-extrabold px-3 py-1 rounded-full animate-pulse">
                    جاهزية 24/7
                  </span>
                </div>

                {/* Digital Pressure Gauges */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#D4AF37]/40 text-center">
                    <span className="text-xs text-gray-400 block mb-1">قوة الضخ المائي النفاث</span>
                    <span className="text-3xl font-black text-[#D4AF37]" dir="ltr">
                      250 BAR
                    </span>
                    <span className="text-[11px] text-[#00BFFF] block mt-1">
                      تفتيت فوري للدهون والأسمنت
                    </span>
                  </div>

                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#00BFFF]/40 text-center">
                    <span className="text-xs text-gray-400 block mb-1">تنظيف القطر الداخلي</span>
                    <span className="text-3xl font-black text-[#00BFFF]" dir="ltr">
                      360° DEG
                    </span>
                    <span className="text-[11px] text-[#D4AF37] block mt-1">
                      غسيل جداري شامل للأنبوب
                    </span>
                  </div>
                </div>

                {/* Pipe Diameter Coverage Bar */}
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800 space-y-4 mb-6">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-white">أقطار الأنابيب المخدومة:</span>
                    <span className="text-[#00BFFF]">من 1.5 بوصة إلى 16 بوصة</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-[#061124] border border-gray-800">
                      <span className="text-[#D4AF37] font-black block">2&quot; - 3&quot;</span>
                      <span className="text-[10px] text-gray-400">مغاسل ومطابخ</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#061124] border border-gray-800">
                      <span className="text-[#D4AF37] font-black block">4&quot;</span>
                      <span className="text-[10px] text-gray-400">كراسي وصفايات</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#061124] border border-gray-800">
                      <span className="text-[#00BFFF] font-black block">6&quot; - 8&quot;</span>
                      <span className="text-[10px] text-gray-400">مناهل الحوش</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#061124] border border-gray-800">
                      <span className="text-[#00BFFF] font-black block">10&quot;+</span>
                      <span className="text-[10px] text-gray-400">خطوط رئيسية</span>
                    </div>
                  </div>
                </div>

                {/* Zero Acid Guarantee Box */}
                <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-4 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                  <p className="text-xs text-gray-200 leading-relaxed">
                    <strong className="text-emerald-400">ضمان الأمان الكامل للمواسير:</strong> لا نستخدم الأسيد الكيميائي الحارق نهائياً؛ معداتنا تحافظ على سلامة أنابيب الـ PVC والربلات والغراء 100%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: INTERACTIVE BLOCKAGE DIAGNOSTIC ENGINE (مشخص الانسدادات)
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
              <Sliders className="w-4 h-4" />
              نظام التشخيص الهيدروليكي التفاعلي
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              حدد نوع <span className="text-[#D4AF37]">الانسداد أو الطفح</span> في عقارك واعرف الحل الجذري
            </h2>
            <p className="text-gray-300 text-lg">
              تختلف تقنية التسليك باختلاف المادة السادة للماسورة ومكانها. اختر المشكلة التي تواجهك حالياً لاستعراض خطة التدخل الفني:
            </p>
          </div>

          {/* 4 Blockage Selector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {BLOCKAGE_DIAGNOSTIC_CASES.map((blk) => {
              const isSelected = selectedCaseId === blk.id;
              return (
                <button
                  key={blk.id}
                  onClick={() => setSelectedCaseId(blk.id)}
                  className={`p-5 rounded-2xl text-right transition-all duration-300 border-2 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.6)] scale-[1.02]"
                      : "bg-[#061124]/90 text-white border-[#00BFFF]/30 hover:border-[#D4AF37]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`text-[11px] font-black px-2.5 py-1 rounded-md ${
                        isSelected ? "bg-[#030b1c] text-[#D4AF37]" : "bg-[#030b1c] text-[#00BFFF]"
                      }`}
                    >
                      {blk.urgencyLevel}
                    </span>
                    <Crosshair
                      className={`w-5 h-5 ${isSelected ? "text-[#030b1c]" : "text-[#D4AF37]"}`}
                    />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">{blk.title}</h3>
                </button>
              );
            })}
          </div>

          {/* Selected Blockage Detailed Solution */}
          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-800">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-extrabold px-3.5 py-1 rounded-full border ${currentCase.urgencyBadgeClass}`}
                  >
                    مستوى الحالة: {currentCase.urgencyLevel}
                  </span>
                  <span className="bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/30 text-xs font-bold px-3 py-1 rounded-full">
                    النطاق: {currentCase.locationZone}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {currentCase.title}
                </h3>
              </div>

              <div className="bg-[#030b1c] px-5 py-3.5 rounded-2xl border border-[#D4AF37]/40 flex items-center gap-4">
                <div>
                  <span className="text-xs text-gray-400 block">الضغط المعتمد للتفتيت</span>
                  <span className="text-sm sm:text-base font-black text-[#D4AF37]" dir="ltr">
                    {currentCase.requiredPressureBar}
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-gray-800"></div>
                <div>
                  <span className="text-xs text-gray-400 block">زمن الإنهاء</span>
                  <span className="text-xs sm:text-sm font-bold text-[#00BFFF]">
                    {currentCase.executionDuration}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Info: Symptoms & Risks */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <span className="text-xs font-bold text-[#D4AF37] block mb-1">
                    طبيعة المادة السادة للأنبوب:
                  </span>
                  <p className="text-white font-extrabold text-sm sm:text-base">
                    {currentCase.obstructionMaterial}
                  </p>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800">
                  <h4 className="text-base font-extrabold text-[#00BFFF] mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#D4AF37]" />
                    <span>العلامات الظاهرة في الموقع:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentCase.symptoms.map((sym, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-red-900/40">
                  <h4 className="text-base font-extrabold text-red-400 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span>أضرار التأخر أو المعالجة الخاطئة:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentCase.structuralRisks.map((rsk, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>{rsk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Info: Step-by-Step Solution */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="bg-[#030b1c] p-6 sm:p-8 rounded-2xl border-2 border-[#00BFFF]/40">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <h4 className="text-xl font-extrabold text-white flex items-center gap-2">
                      <Wrench className="w-6 h-6 text-[#D4AF37]" />
                      <span>خطة التدخل الفوري لفريق أساس الأمن الخليجي:</span>
                    </h4>
                    <span className="text-xs bg-[#061124] text-[#00BFFF] border border-[#00BFFF]/30 px-3 py-1 rounded-lg font-bold">
                      {currentCase.nozzleType}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {currentCase.engineeringSolutionSteps.map((stp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 bg-[#061124] p-4 rounded-xl border border-gray-800"
                      >
                        <span className="w-7 h-7 rounded-lg bg-[#D4AF37] text-[#030b1c] font-black text-sm flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                          {stp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-gray-400 block">الضمان والمتابعة</span>
                    <span className="text-base font-extrabold text-[#D4AF37]">
                      {currentCase.warrantyPeriod}
                    </span>
                  </div>

                  <Link
                    href="https://wa.me/966501206816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black px-7 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>اطلب فتح هذا الانسداد الآن</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: CSS INTERACTIVE PIPE RESTORATION STAGES (مراحل تنظيف الماسورة)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              محاكاة هندسية لكفاءة القطر الداخلي
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              كيف نعيد أنابيب الصرف المسدودة إلى <span className="text-[#00BFFF]">كفاءة 100% كالجديدة</span>؟
            </h2>
            <p className="text-gray-300 text-lg">
              اضغط على المراحل الأربع أدناه لمشاهدة كيف يتدرج عمل ماكينات الضغط العالي في إزالة التكلسات من داخل الأنبوب:
            </p>
          </div>

          {/* Stage Selector Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {PIPE_CLEANING_STAGES.map((stg) => {
              const isSelected = activePipeStage === stg.stageNumber;
              return (
                <button
                  key={stg.stageNumber}
                  onClick={() => setActivePipeStage(stg.stageNumber)}
                  className={`p-5 rounded-2xl text-right border-2 transition-all ${
                    isSelected
                      ? "bg-[#061124] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                      : "bg-[#061124]/60 border-gray-800 hover:border-[#00BFFF]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#00BFFF]">
                      المرحلة 0{stg.stageNumber}
                    </span>
                    <span className="text-xs font-black text-[#D4AF37]">
                      تصريف {stg.flowEfficiency}%
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{stg.title}</h3>
                </button>
              );
            })}
          </div>

          {/* Interactive Pipe Cross-Section Visualizer (Pure CSS) */}
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,191,255,0.15)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Visual Pipe Graphic */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#030b1c] p-8 rounded-3xl border border-gray-800">
                <span className="text-xs text-gray-400 mb-4 font-bold">
                  مقطع عرضي لمحاكاة قطر الماسورة الداخلي
                </span>

                {/* Outer Pipe Wall */}
                <div className="relative w-56 h-56 rounded-full border-[12px] border-gray-600 flex items-center justify-center bg-[#0a182e] shadow-inner overflow-hidden">
                  {/* Blockage Layer (Shrinks as stage increases) */}
                  <div
                    className="rounded-full bg-gradient-to-br from-amber-900/90 via-stone-800 to-amber-950 transition-all duration-700 flex items-center justify-center border-2 border-[#D4AF37]/40"
                    style={{
                      width: `${currentStageObj.blockagePercentage}%`,
                      height: `${currentStageObj.blockagePercentage}%`,
                      opacity: currentStageObj.blockagePercentage === 0 ? 0 : 1,
                    }}
                  ></div>

                  {/* Clean Water Flow Core */}
                  <div
                    className="absolute rounded-full bg-gradient-to-r from-[#00BFFF]/40 to-emerald-500/40 border-2 border-[#00BFFF] flex flex-col items-center justify-center transition-all duration-700"
                    style={{
                      width: `${Math.max(28, currentStageObj.flowEfficiency)}%`,
                      height: `${Math.max(28, currentStageObj.flowEfficiency)}%`,
                    }}
                  >
                    <span className="text-2xl font-black text-white drop-shadow">
                      {currentStageObj.flowEfficiency}%
                    </span>
                    <span className="text-[10px] font-bold text-[#D4AF37]">كفاءة الجريان</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-6 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00BFFF]"></span>
                    <span className="text-gray-300">مسار الماء النظيف ({currentStageObj.flowEfficiency}%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-800 border border-[#D4AF37]"></span>
                    <span className="text-gray-300">الرواسب ({currentStageObj.blockagePercentage}%)</span>
                  </div>
                </div>
              </div>

              {/* Stage Engineering Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`text-xs font-extrabold px-4 py-1.5 rounded-full border ${currentStageObj.colorTheme}`}
                  >
                    {currentStageObj.statusLabel}
                  </span>
                  <span className="text-sm font-bold text-gray-400">
                    المرحلة {currentStageObj.stageNumber} من 4
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentStageObj.title}
                </h3>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#D4AF37]/40">
                  <span className="text-xs text-[#00BFFF] font-bold block mb-1">
                    الإجراء التقني المنفذ في هذه المرحلة:
                  </span>
                  <p className="text-base sm:text-lg font-extrabold text-[#D4AF37]">
                    {currentStageObj.technicalAction}
                  </p>
                </div>

                <p className="text-gray-300 text-base leading-relaxed">
                  {currentStageObj.engineeringDescription}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-gray-400">نسبة استعادة القطر الأصلي للماسورة:</span>
                    <span className="text-[#00BFFF]">{currentStageObj.flowEfficiency}%</span>
                  </div>
                  <div className="w-full h-3 bg-[#030b1c] rounded-full overflow-hidden border border-gray-800">
                    <div
                      className="h-full bg-gradient-to-r from-[#00BFFF] to-[#D4AF37] transition-all duration-500"
                      style={{ width: `${currentStageObj.flowEfficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: MECHANICAL & ELECTRONIC EQUIPMENT ARSENAL (ترسانة المعدات)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#00BFFF] font-bold text-sm bg-[#00BFFF]/10 px-4 py-1.5 rounded-full border border-[#00BFFF]/30">
              أحدث تكنولوجيا الصرف الصحي في المملكة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              المعدات والآليات التي <span className="text-[#D4AF37]">تعمل بها فرقنا في الخرج</span>
            </h2>
            <p className="text-gray-300 text-lg">
              لا نعتمد على الأساليب اليدوية البدائية؛ بل نمتلك 4 منظومات ميكانيكية وإلكترونية متخصصة لكل نوع من أنواع الشبكات:
            </p>
          </div>

          {/* Equipment Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {SEWAGE_TECH_ARSENAL.map((eq) => {
              const isSelected = selectedEquipId === eq.id;
              return (
                <button
                  key={eq.id}
                  onClick={() => setSelectedEquipId(eq.id)}
                  className={`p-5 rounded-2xl text-right transition-all border-2 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#00BFFF] text-[#030b1c] border-[#00BFFF] shadow-[0_0_25px_rgba(0,191,255,0.5)]"
                      : "bg-[#061124] text-white border-[#D4AF37]/40 hover:border-[#D4AF37]"
                  }`}
                >
                  <span
                    className={`text-xs font-extrabold px-2.5 py-1 rounded-md w-fit mb-3 ${
                      isSelected ? "bg-[#030b1c] text-[#D4AF37]" : "bg-[#D4AF37]/15 text-[#D4AF37]"
                    }`}
                  >
                    {eq.codeModel}
                  </span>
                  <h3 className="font-extrabold text-base leading-snug">{eq.name}</h3>
                </button>
              );
            })}
          </div>

          {/* Active Equipment Details */}
          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#00BFFF] bg-[#00BFFF]/10 px-3 py-1 rounded-lg border border-[#00BFFF]/30">
                    {currentEquip.technologyCategory}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-3">
                    {currentEquip.name}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {currentEquip.overview}
                  </p>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800 space-y-3">
                  <h4 className="font-extrabold text-[#D4AF37] text-base">
                    آلية التشغيل الفني في الموقع:
                  </h4>
                  {currentEquip.operatingMechanism.map((mch, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-[#00BFFF]/20 text-[#00BFFF] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{mch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#00BFFF]/30 flex items-center justify-between">
                    <span className="text-xs text-gray-400">قوة الأداء:</span>
                    <span className="text-sm font-extrabold text-[#D4AF37]">
                      {currentEquip.pressureOrPower}
                    </span>
                  </div>
                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#00BFFF]/30 flex items-center justify-between">
                    <span className="text-xs text-gray-400">أقطار المواسير:</span>
                    <span className="text-sm font-extrabold text-[#00BFFF]">
                      {currentEquip.pipeDiameterRange}
                    </span>
                  </div>
                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#00BFFF]/30 flex items-center justify-between">
                    <span className="text-xs text-gray-400">المدى الطولي:</span>
                    <span className="text-sm font-extrabold text-white">
                      {currentEquip.maxReachMeters}
                    </span>
                  </div>
                </div>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <h4 className="text-sm font-bold text-white mb-3">الحالات المثالية لاستخدام الجهاز:</h4>
                  <ul className="space-y-2">
                    {currentEquip.idealScenarios.map((scn, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span>{scn}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/40 p-4 rounded-xl text-xs text-emerald-300 font-bold text-center">
                  ★ معيار الأمان: {currentEquip.safetyToPipes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: 4 COMPREHENSIVE SERVICE DIVISIONS (أقسام خدمات الصرف)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              منظومة خدمات <span className="text-[#00BFFF]">الصرف الصحي والبيارات</span> الشاملة
            </h2>
            <p className="text-gray-300 text-lg">
              نغطي كافة احتياجات المنازل والمنشآت التجارية في الخرج من أصغر صفاية داخلية حتى أكبر شبكة صرف رئيسية:
            </p>
          </div>

          {/* Division Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {SEWAGE_SERVICE_DIVISIONS.map((div) => (
              <button
                key={div.id}
                onClick={() => setActiveServiceDiv(div.id)}
                className={`px-6 py-3.5 rounded-2xl font-extrabold text-sm transition-all border-2 ${
                  activeServiceDiv === div.id
                    ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                    : "bg-[#061124] text-gray-300 border-[#00BFFF]/30 hover:border-[#D4AF37]"
                }`}
              >
                {div.title}
              </button>
            ))}
          </div>

          {/* Active Division Content */}
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/40 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-8">
              <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-extrabold px-3 py-1 rounded-lg">
                {currentDivision.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
                {currentDivision.title}
              </h3>
              <p className="text-[#00BFFF] font-bold text-sm sm:text-base mb-4">
                {currentDivision.subtitle}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {currentDivision.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Target Problems */}
              <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800">
                <h4 className="font-extrabold text-[#D4AF37] text-base mb-4">
                  المشاكل التي يعالجها هذا القسم:
                </h4>
                <ul className="space-y-3">
                  {currentDivision.targetProblems.map((prb, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <AlertTriangle className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                      <span>{prb}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Execution Steps */}
              <div className="bg-[#030b1c] p-6 rounded-2xl border border-[#00BFFF]/30">
                <h4 className="font-extrabold text-[#00BFFF] text-base mb-4">
                  خطوات التنفيذ الميداني:
                </h4>
                <div className="space-y-3">
                  {currentDivision.executionProtocol.map((ep, i) => (
                    <div key={i} className="text-xs sm:text-sm">
                      <strong className="text-white block">
                        {i + 1}. {ep.step}:
                      </strong>
                      <span className="text-gray-400">{ep.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Preventive */}
              <div className="bg-[#030b1c] p-6 rounded-2xl border border-[#D4AF37]/40 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-white text-base mb-4">
                    النتائج المضمونة للعميل:
                  </h4>
                  <ul className="space-y-2.5 mb-6">
                    {currentDivision.deliverables.map((dlv, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                        <span>{dlv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black py-3.5 px-4 rounded-xl text-center text-sm transition-all"
                >
                  اطلب خدمة هذا القسم الآن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: INTERACTIVE EMERGENCY & MAINTENANCE ESTIMATOR (حاسبة الصرف)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_45px_rgba(0,191,255,0.2)]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
                <Calculator className="w-4 h-4" />
                نموذج تقدير طوارئ الصرف الصحي السريع
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                حدد تفاصيل المشكلة في عقارك واطلب <span className="text-[#D4AF37]">فرقة التسليك الفورية</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                يساعدنا تحديد نوع المشكلة وعدد غرف التفتيش على توجيه السيارة المجهزة بالمعدة المناسبة لموقعك في الخرج فوراً:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      1. نوع العقار:
                    </label>
                    <select
                      value={calcPropertyType}
                      onChange={(e) => setCalcPropertyType(e.target.value)}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none"
                    >
                      <option value="فيلا سكنية">فيلا سكنية</option>
                      <option value="شقة سكنية / دور">شقة سكنية / دور</option>
                      <option value="مطعم / كافيه / منشأة غذائية">مطعم / كافيه / منشأة غذائية</option>
                      <option value="عمارة سكنية / مجمع تجاري">عمارة سكنية / مجمع تجاري</option>
                      <option value="استراحة / مزرعة / مستودع">استراحة / مزرعة / مستودع</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      2. الحي داخل محافظة الخرج:
                    </label>
                    <select
                      value={calcNeighborhood}
                      onChange={(e) => setCalcNeighborhood(e.target.value)}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#00BFFF] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none"
                    >
                      <option value="حي الخزامى">حي الخزامى</option>
                      <option value="حي الورود">حي الورود</option>
                      <option value="حي النهضة">حي النهضة</option>
                      <option value="حي الأندلس">حي الأندلس</option>
                      <option value="حي الريان">حي الريان</option>
                      <option value="حي المنتزه">حي المنتزه</option>
                      <option value="حي السلام">حي السلام</option>
                      <option value="حي الخالدية">حي الخالدية</option>
                      <option value="حي الفيصلية">حي الفيصلية</option>
                      <option value="الدلم / الهياثم / اليمامة">الدلم / الهياثم / اليمامة</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-200 mb-2">
                    3. طبيعة مشكلة الصرف الحالية:
                  </label>
                  <select
                    value={calcProblemScope}
                    onChange={(e) => setCalcProblemScope(e.target.value)}
                    className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none"
                  >
                    <option value="انسداد خط رئيسي وغرف تفتيش بالحوش">
                      انسداد خط رئيسي وغرف تفتيش بالحوش
                    </option>
                    <option value="انسداد مطبخ أو حمام داخلي">
                      انسداد مطبخ أو حمام داخلي (صفاية / كرسي / حوض)
                    </option>
                    <option value="انسداد بسبب أسمنت ومخلفات بناء">
                      انسداد بسبب أسمنت ومخلفات بناء بعد التشطيب
                    </option>
                    <option value="امتلاء وطفح البيارة الأرضية">
                      امتلاء وطفح البيارة الأرضية وحاجتها للتنظيف
                    </option>
                    <option value="انتشار روائح مجاري كريهة في المنزل">
                      انتشار روائح مجاري كريهة في المنزل بدون طفح
                    </option>
                  </select>
                </div>

                {/* Manholes Slider */}
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-bold text-gray-200">
                      4. عدد غرف التفتيش أو نقاط الصرف المتأثرة تقريباً:
                    </label>
                    <span className="bg-[#D4AF37] text-[#030b1c] font-black px-3 py-1 rounded-lg text-sm">
                      {calcManholesCount} نقاط / مناهل
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    value={calcManholesCount}
                    onChange={(e) => setCalcManholesCount(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-gray-800 rounded-lg"
                  />
                </div>

                {/* Camera Option */}
                <div
                  onClick={() => setCalcNeedCamera(!calcNeedCamera)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                    calcNeedCamera
                      ? "bg-[#030b1c] border-[#D4AF37]"
                      : "bg-[#030b1c]/60 border-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                        calcNeedCamera
                          ? "bg-[#D4AF37] border-[#D4AF37] text-[#030b1c]"
                          : "border-gray-600"
                      }`}
                    >
                      {calcNeedCamera && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <span className="text-sm font-bold text-white">
                      إضافة فحص وتصوير داخلي للأنابيب بكاميرا المنظار (CCTV)
                    </span>
                  </div>
                  <span className="text-xs text-[#00BFFF] font-bold">موصى به للسدد المتكرر</span>
                </div>
              </div>

              {/* Output Box */}
              <div className="lg:col-span-5 bg-[#030b1c] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 space-y-5 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <div className="border-b border-gray-800 pb-4">
                  <span className="text-xs text-[#00BFFF] font-bold block">تجهيز فرقة التدخل</span>
                  <h3 className="text-xl font-extrabold text-white mt-1">{calcProblemScope}</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-xs text-gray-400 block mb-1">المعدة المخصصة لطلبك:</span>
                    <span className="font-extrabold text-[#D4AF37]">{recommendedTech}</span>
                  </div>

                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">الوقت التقديري لإنجاز المهمة:</span>
                    <span className="font-bold text-[#00BFFF]">~ {estimatedMinutes} دقيقة</span>
                  </div>

                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">نسبة التكسير في الأرضيات:</span>
                    <span className="font-bold text-emerald-400">صفر% (تسليك آمن تماماً)</span>
                  </div>
                </div>

                <button
                  onClick={handleSendEmergencyWhatsApp}
                  className="w-full bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>إرسال طلب الطوارئ عبر واتساب الآن</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: CHEMICAL ACID WARNING & COMPARISON TABLE
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-red-400 font-bold text-sm bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30">
              تحذير هندسي هام لأصحاب العقارات بالخرج
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              الفرق بين <span className="text-[#00BFFF]">التسليك بالضغط والنيتروجين</span> واستخدام الأسيد الحارق
            </h2>
            <p className="text-gray-300 text-lg">
              شاهد لماذا يتسبب الأسيد التجاري والتسليك البدائي في تدمير شبكات السباكة تحت البلاط، وكيف تحميك تقنياتنا:
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-[#D4AF37] bg-[#061124]/95 shadow-[0_0_35px_rgba(212,175,55,0.15)]">
            <table className="w-full text-right border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-[#030b1c] border-b-2 border-[#D4AF37]">
                  <th className="p-5 text-white font-extrabold text-base w-1/4">معيار المقارنة</th>
                  <th className="p-5 text-[#D4AF37] font-extrabold text-base w-1/3 bg-[#D4AF37]/10 border-x border-[#D4AF37]/30">
                    شركة أساس الأمن الخليجي (ضغط مائي + نيتروجين)
                  </th>
                  <th className="p-5 text-gray-400 font-bold text-base w-1/3">
                    الأسيد الكيميائي التجاري / الأسلاك البدائية
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {ACID_VS_HYDRO_COMPARISON.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#030b1c]/60 transition-colors">
                    <td className="p-5 font-bold text-white">
                      <div>{item.factor}</div>
                      <span className="inline-block mt-1 text-[11px] bg-red-500/15 text-red-400 px-2 py-0.5 rounded">
                        {item.dangerNote}
                      </span>
                    </td>
                    <td className="p-5 bg-[#D4AF37]/5 border-x border-[#D4AF37]/20 text-sm text-white font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{item.hydroNitrogenTech}</span>
                      </div>
                    </td>
                    <td className="p-5 text-sm text-gray-400">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{item.acidAndTraditional}</span>
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
          SECTION 8: AL-KHARJ SECTORS EMERGENCY COVERAGE (تغطية أحياء الخرج)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              انتشار سيارات التسليك والضغط في <span className="text-[#D4AF37]">جميع أحياء الخرج</span>
            </h2>
            <p className="text-gray-300 text-lg">
              فرق الطوارئ متمركزة على مدار 24 ساعة للوصول السريع إلى كافة الأحياء السكنية والتجارية:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {KHARJ_SEWAGE_SECTORS.map((sec, idx) => (
              <div
                key={idx}
                className="bg-[#061124]/95 border-2 border-[#00BFFF]/40 hover:border-[#D4AF37] rounded-3xl p-7 flex flex-col justify-between shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-[#D4AF37] text-[#030b1c] text-xs font-black px-3 py-1 rounded-lg">
                      وصول خلال {sec.emergencyResponseMinutes} دقيقة
                    </span>
                    <span className="text-xs text-[#00BFFF] font-bold">
                      +{sec.completedOperations} عملية ناجحة
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3">{sec.sectorTitle}</h3>
                  <p className="text-xs text-gray-400 mb-4 bg-[#030b1c] p-3 rounded-xl border border-gray-800">
                    {sec.networkCharacteristics}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-[#D4AF37] block">
                      أكثر بلاغات الطوارئ التي نعالجها بالقطاع:
                    </span>
                    {sec.frequentIssues.map((iss, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00BFFF] mt-0.5 flex-shrink-0" />
                        <span>{iss}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <div className="flex flex-wrap gap-1.5">
                    {sec.coveredNeighborhoods.map((nh, nIdx) => (
                      <span
                        key={nIdx}
                        className="text-xs bg-[#030b1c] text-white border border-[#D4AF37]/30 px-2.5 py-1 rounded-md"
                      >
                        {nh}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: COMPREHENSIVE FAQS (الأسئلة الشائعة حول تسليك المجاري)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-[#00BFFF] font-bold text-sm bg-[#00BFFF]/10 px-4 py-1.5 rounded-full border border-[#00BFFF]/30">
              إجابات فنية واضحة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              الأسئلة الشائعة حول <span className="text-[#D4AF37]">تسليك المجاري بالخرج</span>
            </h2>
          </div>

          <div className="space-y-4">
            {SEWAGE_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#061124] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.2)]"
                      : "bg-[#061124]/60 border-[#00BFFF]/25 hover:border-[#00BFFF]/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-right flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#00BFFF] block mb-1">
                        {faq.category}
                      </span>
                      <h3
                        className={`text-base sm:text-xl font-bold ${
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
                      {isOpen ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
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
          SECTION 10: FINAL CALL TO ACTION & INTERLINKING
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#061124] via-[#0a1d3b] to-[#061124] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Zap className="w-4 h-4" />
                سيارات طوارئ جاهزة للتحرك فوراً في الخرج 24/7
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                تخلص من انسداد المجاري والروائح الكريهة في دقائق!
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
                اتصل الآن بمركز الطوارئ في{" "}
                <span className="text-[#D4AF37] font-bold">شركة أساس الأمن الخليجي</span> بالخرج، وسنتوجه إليك فوراً بأحدث ماكينات الضغط والنيتروجين لفتح السدد وغسيل الشبكة بالكامل بدون أي تكسير.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#e6c247] text-[#030b1c] font-black text-lg px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>أرسل موقعك عبر واتساب للطوارئ</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#030b1c] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold text-lg px-10 py-5 rounded-2xl transition-all"
                >
                  <Phone className="w-6 h-6" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>

              {/* Internal Services Links */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                <span className="text-gray-400 font-bold">خدمات أخرى من أساس الأمن الخليجي:</span>
                <Link
                  href="/services/water-leak-detection"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  كشف تسربات المياه
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/restoration-and-construction"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  ترميم وبناء وصيانة
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/roof-insulation"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  عزل الأسطح بالفوم
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/pest-control"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  رش مبيدات ومكافحة حشرات الصرف
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}