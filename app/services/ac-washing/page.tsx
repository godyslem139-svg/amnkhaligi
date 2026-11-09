"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wind,
  ThermometerSnowflake,
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
  Flame,
  RefreshCw,
  Settings,
  Crosshair,
  ShieldAlert,
  Filter,
  Thermometer,
  FileCheck,
  Building2,
  Lock,
  Activity,
  HeartHandshake,
  Target,
  FlaskConical,
  Waves,
  TrendingDown,
  Ruler,
  Percent,
  Fan,
  Hammer,
  Bug,
  Container,
} from "lucide-react";


interface ACFaultProfile {
  id: string;
  title: string;
  affectedComponent: string;
  urgencyBadge: "عطل طارئ (تسرب مائي/توقف)" | "ضعف كفاءة واستهلاك كهرباء" | "تلوث هوائي وبكتيري" | "خلل ميكانيكي/فريون";
  urgencyColor: string;
  coolingLossPercent: string;
  rootCauses: string[];
  risksIfIgnored: string[];
  engineeringSolutionProtocol: string[];
  toolsRequired: string;
  executionTimeMinutes: string;
  warrantyText: string;
}

interface ACUnitTypeSpec {
  id: string;
  name: string;
  technicalClassification: string;
  badgeText: string;
  commonLocations: string;
  overview: string;
  specificCleaningChallenges: string[];
  stepByStepProtocol: {
    phaseTitle: string;
    phaseDetail: string;
  }[];
  performanceGain: string;
  recommendedFrequency: string;
}

interface SevenWashStage {
  stageNumber: number;
  title: string;
  durationMinutes: string;
  dirtAndBlockageRate: number;
  airflowAndCoolingEfficiency: number;
  technicalTool: string;
  detailedAction: string;
  safetyNote: string;
  badgeStyle: string;
}

interface SisterServiceCard {
  id: string;
  title: string;
  fullUrl: string;
  slug: string;
  categoryTag: string;
  synergyWithAC: string;
  description: string;
  keyHighlights: string[];
  warrantyBadge: string;
  icon: React.ElementType;
}

interface FreonGasSpec {
  code: string;
  name: string;
  chemicalFormula: string;
  operatingPressurePSI: string;
  origin: string;
  usedInUnits: string;
  chargingProtocol: string;
  purityGuarantee: string;
}

interface ACComparisonRow {
  criterion: string;
  asasProfessionalAC: string;
  randomStreetWorkers: string;
  technicalWarning: string;
}

interface KharjACSector {
  sectorTitle: string;
  environmentalFactor: string;
  mostRequestedServices: string[];
  neighborhoods: string[];
  servicedUnitsCount: number;
  responseTime: string;
}

interface ACFAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const AC_FAULT_DIAGNOSTICS: ACFaultProfile[] = [
  {
    id: "water-dripping-indoor",
    title: "تنقيط وتسرب المياه من الوحدة الداخلية على الجدار والأثاث",
    affectedComponent: "حوض التصريف الداخلي (Drain Pan) + لي الصرف + المبخر",
    urgencyBadge: "عطل طارئ (تسرب مائي/توقف)",
    urgencyColor: "text-red-500 border-red-500/50 bg-red-500/10",
    coolingLossPercent: "فقدان 35% من التبريد + خطر ماس كهربائي",
    rootCauses: [
      "انسداد مجرى وحوض التصريف الخلفي وتكون طبقة هلامية (Slime & Algae) نتيجة تراكم الأتربة مع الرطوبة.",
      "انسداد خرطوم (لي) الصرف الخارجي بالأتربة أو ثنيه أو دخول الحشرات والوزغ في فتحته الخارجية.",
      "تراكم الغبار الكثيف على زعانف المبخر (Evaporator Coil) مما يمنع انسياب قطرات التكاثف نحو الحوض.",
      "نقص شحنة غاز الفريون مما يؤدي لتكون الثلج على المواسير ثم ذوبانه بغزارة تفوق سعة حوض الصرف.",
    ],
    risksIfIgnored: [
      "تلف وتقشر دهانات الجدار وورق الحائط وتضرر الشاشات أو الكنب الموجود تحت المكيف مباشرة.",
      "وصول المياه المتسربة إلى اللوحة الإلكترونية (البوردة) أو أفياش الكهرباء وحدوث التماس خطر.",
      "انتشار رائحة عفونة ورطوبة مستمرة داخل غرفة النوم أو المجلس.",
    ],
    engineeringSolutionProtocol: [
      "تركيب جراب (جاكيت) الغسيل الحلزوني المحكم حول الوحدة الداخلية لحماية الجدار والفرش بنسبة 100%.",
      "ضخ مياه مضغوطة وهواء نيتروجين داخل خط ومجرى الصرف لتفتيت السدد الهلامي والكلسي وطرده للخارج.",
      "غسيل زعانف المبخر وحوض التصريف الأمامي والخلفي بمحلول فوم كيميائي آمن يذيب الأوساخ دون ثني الزعانف.",
      "صب مياه اختبار بكمية كبيرة في الحوض للتأكد من سرعة انسيابها عبر اللي الخارجي وضبط ميزان المكيف.",
    ],
    toolsRequired: "مضخة غسيل متغيرة الضغط + جاكيت عزل مائي + كباس تسليك الصرف",
    executionTimeMinutes: "30 إلى 40 دقيقة للمكيف الواحد في مكانه",
    warrantyText: "ضمان شامل ضد عودة تنقيط المياه",
  },
  {
    id: "weak-cooling-hot-air",
    title: "ضعف التبريد الشديد وخروج هواء فاتر أو حار في عز الصيف",
    affectedComponent: "الوحدة الخارجية (الكومبريسور والرديتر) + ملفات التبريد + الكابستور",
    urgencyBadge: "ضعف كفاءة واستهلاك كهرباء",
    urgencyColor: "text-[#D4AF37] border-[#D4AF37]/50 bg-[#D4AF37]/10",
    coolingLossPercent: "فقدان 60% إلى 80% من كفاءة التبريد",
    rootCauses: [
      "انسداد زعانف راديتر الوحدة الخارجية (Condenser) بالعواصف الرملية والأتربة المتكلسة في جو الخرج، مما يمنع طرد الحرارة.",
      "تراكم طبقة سميكة من الغبار على مروحة البلاور الأسطوانية (Blower Wheel) الداخلية فيضعف دفع الهواء.",
      "ضعف أو تلف المكثف الكهربائي (Capacitor) المسؤول عن إقلاع الكومبريسور نتيجة الحرارة العالية.",
      "نقص في ضغط غاز الفريون نتيجة وجود تنسيم دقيق في الصواميل (الفلير) أو المواسير النحاسية.",
    ],
    risksIfIgnored: [
      "عمل الكومبريسور (الضاغط) بشكل متواصل دون فصل مما يرفع فاتورة الكهرباء بنسبة 45%.",
      "ارتفاع حرارة الكومبريسور وفصله المتكرر (Overload) مما قد يؤدي لاحتراقه بالكامل.",
    ],
    engineeringSolutionProtocol: [
      "غسيل شامل للوحدة الداخلية (الفلاتر، الكويل، ومروحة البلاور) بالماء المضغوط لاستعادة قوة دفع الهواء.",
      "غسيل عميق لراديتر الوحدة الخارجية على السطح أو الجدار لإزالة الرمال المتكلسة وخفض حرارة الكومبريسور فوراً.",
      "فحص الكابستور والأمبير الكهربائي بجهاز الكلامب ميتر (Clamp Meter) واستبداله بقطعة أصلية عند الحاجة.",
      "قياس ضغط الفريون بالساعة الرقمية (Manifold Gauge) وتزويد الفريون الأمريكي الأصلي للوصول للضغط القياسي.",
    ],
    toolsRequired: "ماكينة غسيل ضغط مزدوج + ساعة فحص فريون رقمية + كلامب ميتر",
    executionTimeMinutes: "40 إلى 50 دقيقة شاملة الوحدتين الداخلية والخارجية",
    warrantyText: "ضمان استعادة البرودة الثلجية وقوة الدفع",
  },
  {
    id: "bad-odor-noisy-fan",
    title: "انبعاث روائح كريهة (عفونة/غبار) وصدور صوت عالٍ واهتزاز",
    affectedComponent: "مروحة التوربين (Blower) + حوض التكاثف + رمان البلي والقواعد",
    urgencyBadge: "تلوث هوائي وبكتيري",
    urgencyColor: "text-[#00BFFF] border-[#00BFFF]/50 bg-[#00BFFF]/10",
    coolingLossPercent: "تلوث هواء الغرفة بنسبة 90% + إزعاج صوتي",
    rootCauses: [
      "نمو الفطريات والبكتيريا والعفن الأسود على ريش مروحة البلاور الداخلية وفي المياه الراكدة بحوض الصرف.",
      "تراكم أوزان غير متساوية من الطين والغبار على ريش المروحة الأسطوانية مما يسبب اختلال توازنها وصدور صوت طقطقة.",
      "دخول حشرات ميتة أو أبراص (وزغ) داخل الوحدة الداخلية أو الخارجية.",
      "جفاف تشحيم جلبة المروحة أو تلف قواعد الربل المطاطية تحت الكومبريسور الخارجي.",
    ],
    risksIfIgnored: [
      "استنشاق الأسرة والأطفال لهواء ملوث بالجراثيم ومسببات الحساسية والربو والتهاب الجيوب الأنفية.",
      "كسر ريش مروحة البلاور الداخلية أو تلف موتور المروحة بسبب الحمل الزائد والاهتزاز.",
    ],
    engineeringSolutionProtocol: [
      "فك الغطاء الأمامي وتنظيف ريش مروحة التوربين (Blower) ريشةً ريشة بضغط الماء الموجه حتى تزول كافة التكتلات.",
      "رش مادة رغوية مطهرة ومضادة للبكتيريا والفطريات (Coil & Drain Sanitizer) تقضي على مصادر الرائحة الكريهة 100%.",
      "تعطير وتعقيم مجاري الهواء بمواد صحية معتمدة تمنح هواءً نقياً ومنعشاً.",
      "تشحيم محاور الدوران، شد المسامير، وتثبيت قواعد مطاطية مانعة للاهتزاز للوحدة الخارجية.",
    ],
    toolsRequired: "منظف كويل مضاد للبكتيريا + جهاز تعقيم ضبابي + فوم رغوي",
    executionTimeMinutes: "35 إلى 45 دقيقة",
    warrantyText: "هواء نقي صحي 100% وتشغيل هادئ تماماً",
  },
  {
    id: "ice-freezing-pipes",
    title: "تكون الثلج على المواسير النحاسية أو المبخر الداخلي وتوقف الهواء",
    affectedComponent: "دورة التبريد (Refrigeration Cycle) + المبخر + حساس الثرموستات",
    urgencyBadge: "خلل ميكانيكي/فريون",
    urgencyColor: "text-purple-400 border-purple-400/50 bg-purple-400/10",
    coolingLossPercent: "انغلاق مسار الهواء بالكامل بجدار ثلجي",
    rootCauses: [
      "انسداد كامل في فلاتر الهواء وزعانف الكويل الداخلي يمنع التبادل الحراري فيتجمد البخار على المواسير.",
      "نقص حاد في شحنة غاز الفريون يخفض ضغط السحب (Suction Pressure) إلى ما تحت درجة التجمد.",
      "وجود خفس (ثنية) في المواسير النحاسية يعيق سريان الفريون، أو تلف حساس الفصل (Sensor).",
    ],
    risksIfIgnored: [
      "رجوع الفريون السائل إلى الكومبريسور (Liquid Slugging) مما يدمر صمامات الضاغط الميكانيكية.",
      "ذوبان كتلة الثلج دفعة واحدة عند إطفاء المكيف وغرق الغرفة بالمياه.",
    ],
    engineeringSolutionProtocol: [
      "إذابة الثلج وغسيل المبخر الداخلي والفلاتر بعمق لفتح مسارات تدفق الهواء بالكامل.",
      "فحص ضغط الفريون والبحث عن أي نقطة تسريب في المحابس والربطات ومعالجتها.",
      "فحص حساس درجة الحرارة (Coil Sensor) والتأكد من فصله التلقائي السليم.",
      "إعادة شحن وضبط الفريون بالميزان الإلكتروني وفق ضغط الجو في الخرج.",
    ],
    toolsRequired: "كاشف تسرب فريون إلكتروني + ميزان شحن + مضخة غسيل",
    executionTimeMinutes: "45 إلى 60 دقيقة",
    warrantyText: "ضمان استقرار دورة التبريد وعدم التجمد",
  },
];

const AC_UNIT_TYPES_DB: ACUnitTypeSpec[] = [
  {
    id: "split-wall-units",
    name: "المكيفات السبلت الجدارية (Split Wall-Mounted AC)",
    technicalClassification: "أنظمة التكييف المنفصلة (12,000 إلى 36,000 BTU)",
    badgeText: "الأكثر انتشاراً في فلل وشقق الخرج",
    commonLocations: "غرف النوم، المجالس، الصالات، والمكاتب الإدارية",
    overview:
      "نقدم خدمة غسيل المكيفات السبلت في مكانها وهي معلقة على الجدار دون الحاجة لفكها أو نقلها، وذلك باستخدام حوض وجاكيت الغسيل الكوري والألماني المزود بخرطوم تصريف مباشر إلى الحمام أو الحوش، مما يضمن نظافة فائقة للمكيف مع بقاء الجدار والأثاث والسجاد جافاً ونظيفاً بنسبة 100%.",
    specificCleaningChallenges: [
      "ضيق المسافات بين زعانف الألومنيوم في المبخر الداخلي وتجمع الغبار الرطب فيها.",
      "تراكم العفن الأسود على مروحة البلاور الأسطوانية الداخلية.",
      "انسداد حوض الصرف الخلفي غير المرئي الذي يسبب تنقيط المياه من ظهر المكيف.",
    ],
    stepByStepProtocol: [
      {
        phaseTitle: "1. العزل الكهربائي والمائي",
        phaseDetail: "فصل التيار، تغطية اللوحة الإلكترونية (البوردة) بكيس عازل، وتركيب جاكيت الغسيل حول المكيف.",
      },
      {
        phaseTitle: "2. الغسيل الكيميائي والمائي للوحدة الداخلية",
        phaseDetail: "رش فوم تنظيف الكويل الآمن، ثم غسيل الزعانف ومروحة التوربين وحوض الصرف بضغط مائي موزون.",
      },
      {
        phaseTitle: "3. تسليك الصرف وغسيل الوحدة الخارجية",
        phaseDetail: "ضخ الماء في لي الصرف لفتحه بالكامل، وغسيل الكمبروسر والرديتر الخارجي من غبار الخرج.",
      },
      {
        phaseTitle: "4. التجفيف والتعقيم وفحص الفريون",
        phaseDetail: "تجفيف الوحدة، رش المعقم المعطر، وفحص ضغط الفريون والأمبير قبل التسليم.",
      },
    ],
    performanceGain: "رفع كفاءة التبريد بنسبة 40% وخفض صوت الوحدة واستهلاك الكهرباء",
    recommendedFrequency: "مرتين سنوياً (بداية فصل الصيف ونهايته)",
  },
  {
    id: "central-ducted-ac",
    name: "المكيفات المركزية والكونسيلد المخفي (Central & Concealed Duct)",
    technicalClassification: "وحدات الباكج (Package) والدكت المخفي فوق الجبس",
    badgeText: "قصور، فلل مودرن، مساجد، ومجمعات",
    commonLocations: "الأسقف المستعارة، الصالات الكبرى، المساجد، والمراكز التجارية بالخرج",
    overview:
      "تتطلب أنظمة التكييف المركزي والمخفي (Concealed) خبرة هندسية خاصة؛ لأن الوحدات الداخلية تكون معلقة فوق سقف الجبس بورد. يقوم مهندسونا وفنيونا بتنظيف الفلاتر المعدنية، غسيل كويلات التبريد، تسليك أحواض الصرف ومضخات الرفع (Drain Pumps)، وتنظيف مجاري الهواء (Ducts) والجريلات.",
    specificCleaningChallenges: [
      "خطورة امتلاء حوض الصرف فوق الجبس بورد مما قد يسبب سقوط وتلف السقف المستعار.",
      "تعرض وحدات الباكج المركزية فوق السطح لعواصف الغبار وأشعة الشمس المباشرة.",
      "تراكم الأتربة والفطريات داخل مجاري الصاج (Ducts) وعند فتحات التوزيع (Diffusers).",
    ],
    stepByStepProtocol: [
      {
        phaseTitle: "1. فحص وتنظيف الوحدات المخفية فوق الجبس",
        phaseDetail: "الدخول عبر فتحات الصيانة (Access Doors)، تنظيف الفلاتر والكويل، وتسليك حوض ومضخة الصرف.",
      },
      {
        phaseTitle: "2. غسيل وحدات الباكج المركزية على السطح",
        phaseDetail: "غسيل مكثفات ومبخرات الوحدة المركزية وفحص السيور، الفلاتر، والضواغط.",
      },
      {
        phaseTitle: "3. تنظيف وتعقيم الجريلات ومجاري الهواء",
        phaseDetail: "فك وغسيل فتحات الهواء (Grilles) وتعقيم مسارات الدكت بمواد قاتلة للبكتيريا والعفن.",
      },
      {
        phaseTitle: "4. معايرة الثرموستات وضغط الغاز",
        phaseDetail: "فحص شحنة الفريون لكل دائرة تبريد ومعايرة الثرموستات الرقمي الجداري.",
      },
    ],
    performanceGain: "حماية الأسقف الجبسية من الغرق + توزيع هواء بارد ونقي في كافة القاعات",
    recommendedFrequency: "صيانة دورية كل 4 إلى 6 أشهر",
  },
  {
    id: "cassette-floor-standing",
    name: "مكيفات الكاسيت السقفية والمكيفات الدولابية (Cassette & Tower AC)",
    technicalClassification: "وحدات القدرات العالية (36,000 إلى 60,000 BTU)",
    badgeText: "المجالس الكبيرة، المساجد، والمطاعم",
    commonLocations: "مجالس الرجال، الخيام الملكية، المساجد، صالات الأفراح، والمطاعم",
    overview:
      "تتميز مكيفات الكاسيت المدمجة بالسقف والمكيفات الدولابية بقوة دفع هواء جبارة، لكنها تسحب كميات هائلة من الغبار والأبخرة (خاصة في المطاعم والمجالس). نوفر أطقم غسيل مخصصة للمكيفات السقفية رباعية الدفع والمكيفات العمودية مع صيانة طلمبات رفع المياه المدمجة.",
    specificCleaningChallenges: [
      "تعطل مضخة رفع المياه (Condensate Pump) داخل مكيف الكاسيت بسبب الرواسب الطينية.",
      "تراكم الزيوت والشحوم على كويلات مكيفات المطاعم والكافيهات.",
      "ضخامة حجم الوحدة الخارجية وحاجتها لغسيل بضغط عالٍ وفحص كهربائي ثلاثي الأطوار (3-Phase).",
    ],
    stepByStepProtocol: [
      {
        phaseTitle: "1. فك الوجه الرباعي وحوض تجميع المياه",
        phaseDetail: "في مكيف الكاسيت يتم فك الفلتر والوجه وحوض الماء وتنظيف عوامة ومضخة الرفع بدقة.",
      },
      {
        phaseTitle: "2. غسيل الكويل الدائري ومروحة التوربين المركزية",
        phaseDetail: "استخدام قمع الغسيل السقفي لغسيل الكويل بزاوية 360 درجة دون سقوط قطرة ماء على السجاد.",
      },
      {
        phaseTitle: "3. إزالة الشحوم وغسيل الوحدة الخارجية",
        phaseDetail: "استخدام مذيبات أوساخ خاصة للزعانف وغسيل الوحدة الخارجية العملاقة.",
      },
      {
        phaseTitle: "4. الاختبار التشغيلي الشامل",
        phaseDetail: "إعادة التركيب وفحص توازن الفازات الكهربائية وضغط التبريد.",
      },
    ],
    performanceGain: "استعادة الدفع الهوائي البعيد والتبريد السريع للمساحات الواسعة",
    recommendedFrequency: "كل 3 إلى 6 أشهر حسب كثافة التشغيل",
  },
  {
    id: "window-ac-units",
    name: "مكيفات الشباك (Window AC Units)",
    technicalClassification: "وحدات التكييف المدمجة (18,000 إلى 24,000 BTU)",
    badgeText: "غسيل عميق وتشحيم متكامل",
    commonLocations: "المباني السكنية، الملاحق، غرف السائقين، والمدارس",
    overview:
      "مكيف الشباك يتعرض مباشرة للغبار والرمال الخارجية في الخرج؛ وعند اتساخه يضعف تبريده جداً ويرتفع صوته. يقوم فريقنا بسحب وغسيل مكيف الشباك بالكامل بماكينة الضغط العالي في الحوش أو موقع الغسيل المخصص، مع تنظيف المجاري، تشحيم دينمو المروحة، وسد فتحات الإطار لمنع دخول الغبار والحشرات.",
    specificCleaningChallenges: [
      "تراكم الطين والأتربة المتحجرة في قاع صينية المكيف وحول الرديتر الخلفي.",
      "تآكل العزل الصوتي والحراري الداخلي ودخول الغبار والحشرات من حول برواز المكيف.",
      "ارتفاع صوت دينمو المروحة واهتزاز المواسير.",
    ],
    stepByStepProtocol: [
      {
        phaseTitle: "1. السحب الآمن وحماية دينمو الكهرباء",
        phaseDetail: "إخراج المكيف من البرواز بحرص وعزل لوحة المفاتيح والدينمو عن الماء تماماً.",
      },
      {
        phaseTitle: "2. الغسيل النفاث الأمامي والخلفي",
        phaseDetail: "غسيل السربنتينة الأمامية والرديتر الخلفي والصينية بضغط الماء والفوم حتى تخرج المياه صافية.",
      },
      {
        phaseTitle: "3. التجفيف بالهواء والتشحيم",
        phaseDetail: "تجفيف المكيف بالبلور الهوائي، تشحيم جلب المروحة، وفحص الكابستور والفريون.",
      },
      {
        phaseTitle: "4. إعادة التركيب وعزل الفجوات",
        phaseDetail: "تركيب المكيف مع ضبط الميول الخلفية للصرف وإحكام الفوم حول الإطار.",
      },
    ],
    performanceGain: "انخفاض ملحوظ في صوت المكيف وعودة التبريد القوي كالجديد",
    recommendedFrequency: "مرة واحدة سنوياً قبل دخول الصيف",
  },
];

const SISTER_SERVICES_HUB: SisterServiceCard[] = [
  {
    id: "water-leak",
    title: "كشف تسربات المياه بدون تكسير",
    fullUrl: "https://www.amnkhaligi.com/services/water-leak-detection",
    slug: "/services/water-leak-detection",
    categoryTag: "فحص إلكتروني بالأكوافون",
    synergyWithAC: "حماية الجدران والأسقف من رطوبة وتسربات المياه وشبكات التغذية",
    description:
      "نكشف تسربات المياه الخفية تحت البلاط وخلف الجدران وفي الخزانات بأحدث الأجهزة الألمانية والكاميرات الحرارية بدقة 99.6% بدون تكسير، مع إصدار تقارير معتمدة لشركة المياه.",
    keyHighlights: [
      "فحص رقمي بدون تكسير نهائياً",
      "حل جذري لارتفاع فاتورة المياه",
      "تقارير فنية معتمدة ومختومة",
    ],
    warrantyBadge: "ضمان 10 سنوات",
    icon: Droplets,
  },
  {
    id: "roof-insulation",
    title: "عزل أسطح (فوم ومائي وحراري)",
    fullUrl: "https://www.amnkhaligi.com/services/roof-insulation",
    slug: "/services/roof-insulation",
    categoryTag: "شريك كفاءة التكييف الأول",
    synergyWithAC: "عزل السطح بالفوم يريح المكيفات ويخفض فاتورة الكهرباء بنسبة 40%!",
    description:
      "تنفيذ عزل الفوم البولي يوريثان، الرولات البيتومينية، والعزل المطاطي للأسطح الخرسانية والمبلطة والشنكو لمنع تسرب الأمطار وقطع حرارة الشمس الحارقة عن غرف المنزل.",
    keyHighlights: [
      "عزل مزدوج مائي وحراري 100%",
      "معتمد لدى شركة الكهرباء وكود البناء",
      "توفير هائل في استهلاك المكيفات",
    ],
    warrantyBadge: "ضمان 10 سنوات",
    icon: ThermometerSnowflake,
  },
  {
    id: "tank-cleaning",
    title: "غسيل وتعقيم وعزل خزانات",
    fullUrl: "https://www.amnkhaligi.com/services/tank-cleaning",
    slug: "/services/tank-cleaning",
    categoryTag: "نقاء مياه الشرب والعزل",
    synergyWithAC: "بيئة صحية متكاملة تجمع بين نقاء هواء المكيفات ونقاء مياه الخزانات",
    description:
      "تنظيف وغسيل الخزانات الأرضية والعلوية بالضغط العالي، شفط الرواسب والطحالب، التعقيم البكتيري المعاير، والعزل المائي بالإيبوكسي الغذائي الأزرق (Food Grade).",
    keyHighlights: [
      "تعقيم طبي مطابق لمنظمة الصحة",
      "عزل إيبوكسي أزرق يمنع التسرب",
      "فحص مجاني للعوامة ورقبة الخزان",
    ],
    warrantyBadge: "ضمان 10 سنوات",
    icon: Container,
  },
  {
    id: "restoration",
    title: "ترميم وبناء وصيانة المباني",
    fullUrl: "https://www.amnkhaligi.com/services/restoration-and-construction",
    slug: "/services/restoration-and-construction",
    categoryTag: "هندسة إنشائية وتشطيبات",
    synergyWithAC: "معالجة رطوبة الجدران، تجديد الديكورات والجبس، وتأسيس دكتات التكييف",
    description:
      "تدعيم الأعمدة والأسقف المتصدعة، معالجة الشروخ بالحقن الإيبوكسي، مكافحة رطوبة وتمليح الجدران، تجديد الحمامات والمطابخ، وبناء الملاحق والتوسعات وفق الكود السعودي.",
    keyHighlights: [
      "إشراف هندسي مدني ومعماري",
      "مواد تدعيم سيكا وجراوت وكربون",
      "بناء ملاحق وتشطيب تسليم مفتاح",
    ],
    warrantyBadge: "ضمان 10 سنوات",
    icon: Hammer,
  },
  {
    id: "sewage-clearing",
    title: "تسليك مجاري بالضغط والنيتروجين",
    fullUrl: "https://www.amnkhaligi.com/services/sewage-clearing",
    slug: "/services/sewage-clearing",
    categoryTag: "طوارئ الصرف 24/7",
    synergyWithAC: "تأمين خطوط الصرف والصفايات المرتبطة بتصريف مياه التكاثف للمكيفات",
    description:
      "فتح أصعب انسدادات المجاري وغرف التفتيش وتفتيت الدهون والأسمنت وجذور الأشجار بماكينات الضغط الهيدروديناميكي (250 بار) وكبس النيتروجين وتصوير الأنابيب بالمنظار.",
    keyHighlights: [
      "تسليك آمن 100% بدون أسيد حارق",
      "كاميرا منظار داخلي لكشف الهبوط",
      "شفط وتنظيف البيارات وإزالة الروائح",
    ],
    warrantyBadge: "طوارئ فورية",
    icon: Activity,
  },
  {
    id: "pest-control",
    title: "رش مبيدات ومكافحة حشرات",
    fullUrl: "https://www.amnkhaligi.com/services/pest-control",
    slug: "/services/pest-control",
    categoryTag: "مبيدات ألمانية بدون رائحة",
    synergyWithAC: "منع دخول الوزغ (البرص) والحشرات والقوارض إلى داخل وحدات التكييف",
    description:
      "إبادة فورية وجذرية للصراصير، النمل الأبيض (الأرضة)، بق الفراش، العقارب، والوزغ باستخدام الجل الألماني والرش الميكروي البارد بدون رائحة وبدون مغادرة المنزل.",
    keyHighlights: [
      "مرخص من هيئة الغذاء والدواء SFDA",
      "حقن النمل الأبيض قبل وبعد البناء",
      "قضاء تام على الحشرات وبيضها",
    ],
    warrantyBadge: "ضمان حتى 15 سنة",
    icon: Bug,
  },
];

const SEVEN_AC_WASH_STAGES: SevenWashStage[] = [
  {
    stageNumber: 1,
    title: "الفحص التشغيلي والعزل الكهربائي والمائي المحكم",
    durationMinutes: "5 دقائق",
    dirtAndBlockageRate: 85,
    airflowAndCoolingEfficiency: 25,
    technicalTool: "أغطية عزل البوردة الإلكترونية + جاكيت الغسيل الكوري المبطن",
    detailedAction:
      "تشغيل المكيف لقياس درجة حرارة الهواء وصوت المروحة أولاً، ثم فصل التيار الكهربائي تماماً، فك الغطاء الخارجي، تغليف اللوحة الإلكترونية وموتور المروحة بأغلفة مانعة للماء، وتركيب حوض/جاكيت الغسيل حول الوحدة.",
    safetyNote: "حماية مطلقة لورق الجدران، الدهانات، السجاد، والقطع الإلكترونية من أي قطرة ماء.",
    badgeStyle: "border-red-500 text-red-400 bg-red-950/30",
  },
  {
    stageNumber: 2,
    title: "فك وغسيل وتطهير الفلاتر الهوائية والوجه الأمامي",
    durationMinutes: "5 دقائق",
    dirtAndBlockageRate: 65,
    airflowAndCoolingEfficiency: 45,
    technicalTool: "مضخة شطف الفلاتر + محلول مطهر مضاد للبكتيريا والعفن",
    detailedAction:
      "إخراج فلاتر تنقية الهواء والشبكة الأمامية وريش توجيه الهواء (Louvers)، وغسلها من الأتربة المتراكمة وتطهيرها بمحلول قاتل للبكتيريا وتركها لتجف.",
    safetyNote: "إزالة الطبقة الأولى من الغبار المسبب للحساسية وضيق التنفس.",
    badgeStyle: "border-orange-400 text-orange-400 bg-orange-950/30",
  },
  {
    stageNumber: 3,
    title: "رش الفوم الكيميائي الآمن وغسيل زعانف المبخر (Evaporator Coil)",
    durationMinutes: "10 دقائق",
    dirtAndBlockageRate: 30,
    airflowAndCoolingEfficiency: 75,
    technicalTool: "فوم تنظيف الكويل المتعادل (Non-Acidic Coil Foam) + مسدس ضغط موزون",
    detailedAction:
      "رش رغوة تنظيف الكويل المتخصصة التي تتغلغل بين شرائح الألومنيوم الدقيقة وتفكك الطين والدهون، ثم غسلها بتيار مائي رأسي موزون ينزل بالكامل داخل جاكيت الصرف دون ثني الزعانف.",
    safetyNote: "لا نستخدم الفلاش أو المواد الكاوية التي تأكل نحاس وألومنيوم المكيف!",
    badgeStyle: "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10",
  },
  {
    stageNumber: 4,
    title: "تنظيف مروحة التوربين (Blower) وتسليك مجرى ولي الصرف",
    durationMinutes: "10 دقائق",
    dirtAndBlockageRate: 10,
    airflowAndCoolingEfficiency: 92,
    technicalTool: "فوهة غسيل التوربين الدوارة + ضاغط تسليك لي الصرف",
    detailedAction:
      "غسيل ريش المروحة الأسطوانية الداخلية لإزالة العفن الأسود والتكتلات التي تضعف دفع الهواء وتسبب الصوت العالي، مع ضخ الماء والهواء في حوض ولي الصرف لطرد كافة الرواسب الهلامية للخارج.",
    safetyNote: "إنهاء مشكلة تنقيط المياه من المكيف نهائياً ومضاعفة قوة دفع الهواء.",
    badgeStyle: "border-[#00BFFF] text-[#00BFFF] bg-[#00BFFF]/10",
  },
  {
    stageNumber: 5,
    title: "غسيل الوحدة الخارجية (الكومبريسور) والتعقيم وفحص الفريون",
    durationMinutes: "15 دقيقة",
    dirtAndBlockageRate: 0,
    airflowAndCoolingEfficiency: 100,
    technicalTool: "مضخة ضغط عالٍ للرديتر + ساعة قياس الفريون الرقمية + معقم عطري",
    detailedAction:
      "غسيل راديتر الوحدة الخارجية من رمال وغبار الخرج لخفض حرارة الكومبريسور، تجفيف وتشغيل الوحدة الداخلية، رش المعقم المعطر الصحي، وقياس ضغط غاز الفريون والأمبير الكهربائي.",
    safetyNote: "عودة المكيف لكفاءة المصنع 100% بتبريد ثلجي وصوت هادئ.",
    badgeStyle: "border-emerald-400 text-emerald-400 bg-emerald-950/30",
  },
];

const FREON_GASES_LAB: FreonGasSpec[] = [
  {
    code: "R-410A",
    name: "فريون R410A الأمريكي الأصلي (Honeywell / Genetron)",
    chemicalFormula: "مزيج HFC صديق لطبقة الأوزون عالي الكفاءة الحرارية",
    operatingPressurePSI: "ضغط السحب القياسي: 115 إلى 135 PSI",
    origin: "الولايات المتحدة الأمريكية (USA)",
    usedInUnits: "معظم مكيفات السبلت والإنفرتر والمركزي الحديثة (منذ 2012 حتى الآن)",
    chargingProtocol:
      "يُشحن في الحالة السائلة (Liquid Phase) عبر قلب أسطوانة الفريون ومراقبة الميزان الرقمي وساعة الضغط والأمبير بدقة.",
    purityGuarantee: "نقاء 99.9% خالٍ من الرطوبة والغازات الصينية المقلدة التي تحرق الضاغط.",
  },
  {
    code: "R-32",
    name: "فريون الجيل الجديد R32 فائق التبريد وتوفير الطاقة",
    chemicalFormula: "Difluoromethane أحادي المركب عالي الأداء",
    operatingPressurePSI: "ضغط السحب القياسي: 120 إلى 140 PSI",
    origin: "اليابان / الولايات المتحدة",
    usedInUnits: "أحدث موديلات مكيفات السبلت الموفرة للطاقة (SASO 7 Stars)",
    chargingProtocol:
      "يتطلب عدادات وخراطيم مخصصة ومهارة فنية عالية لضبط الشحنة بالميزان الإلكتروني بالجرام حسب لوحة بيانات المكيف.",
    purityGuarantee: "أداء تبريد أسرع بـ 15% في درجات حرارة صيف الخرج القصوى.",
  },
  {
    code: "R-22",
    name: "فريون R22 الأصلي للمكيفات الكلاسيكية والشباك",
    chemicalFormula: "HCFC-22 المخصص للضواغط الترددية والروتاري القياسية",
    operatingPressurePSI: "ضغط السحب القياسي: 60 إلى 70 PSI",
    origin: "أمريكي / هندي أصلي معتمد (Refron)",
    usedInUnits: "مكيفات الشباك وموديلات السبلت والمركزي الكلاسيكية",
    chargingProtocol:
      "يُشحن في الحالة الغازية تدريجياً مع قياس فرق درجات الحرارة (Superheat) وسحب أمبير الكومبريسور.",
    purityGuarantee: "يحافظ على لزوجة زيت الكومبريسور ويمنع ارتفاع حرارة الضاغط.",
  },
];

const AC_COMPARISON_TABLE: ACComparisonRow[] = [
  {
    criterion: "حماية الجدران والأثاث والسجاد أثناء الغسيل",
    asasProfessionalAC: "تركيب جاكيت/حوض غسيل كوري محكم مع خرطوم تصريف طويل يضمن عدم سقوط قطرة ماء واحدة في الغرفة.",
    randomStreetWorkers: "استخدام أكياس نايلون بدائية ولاصق ضعيف يسرب المياه القذرة على ورق الجدران والدهان والفرش.",
    technicalWarning: "نظافة منزلك وديكوراتك خط أحمر لدينا!",
  },
  {
    criterion: "أمان اللوحة الإلكترونية (البوردة) وموتور المروحة",
    asasProfessionalAC: "عزل احترافي للبوردة والحساسات وتوجيه زاوية ضخ الماء بدقة تحمي القطع الكهربائية وزعانف الألومنيوم.",
    randomStreetWorkers: "رش الماء بعشوائية وضغط مفرط يدخل للبوردة فيحرقها عند التشغيل، ويثني زعانف التبريد (الكويل).",
    technicalWarning: "ثني زعانف الكويل يدمر قدرة المكيف على التبريد للأبد",
  },
  {
    criterion: "المواد المنظفة والمعقمة للكويل الداخلي",
    asasProfessionalAC: "فوم تنظيف كويل مخصص متعادل (pH Neutral) يذيب الأوساخ ويعقم البكتيريا بدون تآكل للمعدن.",
    randomStreetWorkers: "استخدام ماء فقط لا يزيل العفن، أو استخدام 'أسيد/فلاش' يأكل مواسير النحاس ويسبب تسرب الفريون!",
    technicalWarning: "المواد الحمضية تسبب ثقوباً مجهرية في مواسير الفريون",
  },
  {
    criterion: "جودة غاز الفريون والضمان الفني",
    asasProfessionalAC: "فريون أمريكي أصلي (Honeywell) مع فحص مكان التنسيم وإصلاحه، وفاتورة رسمية وضمان معتمد.",
    randomStreetWorkers: "فريون تجاري مقلد يحتوي على رطوبة وهواء يتلف الكومبريسور، وشحن بدون إصلاح مكان التسريب.",
    technicalWarning: "تعامل مع شركة رسمية معتمدة في محافظة الخرج",
  },
];

const KHARJ_AC_SECTORS: KharjACSector[] = [
  {
    sectorTitle: "قطاع شمال الخرج (الفلل المودرن والأحياء السكنية الحديثة)",
    environmentalFactor: "حركة بناء وتوسع عمراني تزيد من نسبة الغبار العالق في فلاتر ووحدات التكييف",
    mostRequestedServices: [
      "غسيل شامل لمكيفات السبلت والإنفرتر في مكانها بدون فك.",
      "صيانة وتنظيف أنظمة التكييف المخفي (Concealed) والمركزي للفلل.",
      "تأسيس وتمديد مواسير النحاس الأمريكي وعزلها للمباني الجديدة.",
    ],
    neighborhoods: ["حي الخزامى", "حي الورود", "حي النهضة", "حي الأندلس", "حي المصيف", "حي العالية"],
    servicedUnitsCount: 6420,
    responseTime: "20 دقيقة",
  },
  {
    sectorTitle: "قطاع وسط وغرب الخرج (السيح، الشقق، المدارس، والمحلات)",
    environmentalFactor: "تشغيل متواصل للمكيفات لساعات طويلة مع ضغط عالٍ في الصيف",
    mostRequestedServices: [
      "معالجة تنقيط وتسرب المياه من المكيفات السبلت داخل الغرف.",
      "شحن الفريون الأمريكي الأصلي واستبدال الكابستورات التالفة.",
      "عقود غسيل وصيانة موسمية للمساجد، المدارس، والمكاتب.",
    ],
    neighborhoods: ["حي المنتزه", "حي السلام", "حي الخالدية", "حي الفيصلية", "حي المحطة"],
    servicedUnitsCount: 7850,
    responseTime: "15 دقيقة",
  },
  {
    sectorTitle: "قطاع شرق وجنوب الخرج والاستراحات والمزارع",
    environmentalFactor: "مناطق مفتوحة تتعرض للعواصف الرملية والحرارة الصحراوية القصوى",
    mostRequestedServices: [
      "غسيل الوحدات الخارجية ومكيفات الشباك والدولابي من الرمال المتكلسة.",
      "صيانة مكيفات الكاسيت والصحراوي والسبلت في الاستراحات والمجالس.",
      "إخراج الأبراص (الوزغ) والحشرات من البوردات وإحكام فتحات الليات.",
    ],
    neighborhoods: ["حي الريان", "حي السعادة", "حي اليرموك", "حي مشرف", "الدلم", "الهياثم", "اليمامة"],
    servicedUnitsCount: 5190,
    responseTime: "25 دقيقة",
  },
];

const AC_FAQS: ACFAQ[] = [
  {
    id: 1,
    category: "الغسيل بدون فك ونظافة المكان",
    question: "هل يتم غسيل المكيف السبلت وهو معلق في مكانه؟ وهل يتسخ الجدار أو الفرش؟",
    answer:
      "نعم، يتم غسيل المكيف السبلت بالكامل في مكانه دون أي فك على الإطلاق. نستخدم في شركة أساس الأمن الخليجي 'جاكيت وحوض غسيل حلزوني محكم' يحيط بالوحدة الداخلية من جميع الجهات ومزود بخرطوم تصريف طويل يوجه المياه المتسخة مباشرة إلى دورة المياه أو خارج المنزل، مما يضمن بقاء الجدار، ورق الحائط، الستائر، والسجاد جافاً ونظيفاً بنسبة 100%.",
  },
  {
    id: 2,
    category: "مشكلة تنقيط المياه",
    question: "المكيف السبلت ينقط ماء داخل الغرفة رغم أن تبريده جيد، ما السبب وكيف تعالجونه؟",
    answer:
      "تنقيط الماء داخل الغرفة في 90% من الحالات سببه انسداد حوض التصريف الداخلي أو لي الصرف الخارجي بتكتلات طينية وهلامية (تنتج عن اختلاط الغبار بماء التكاثف البارد). يقوم الفني لدينا بغسيل الحوض وتسليك لي الصرف بمضخة دفع مائي وهوائي تفتح المجرى بالكامل في دقائق، مع ضبط ميول المكيف، ونمنحك ضماناً بعدم عودة التنقيط.",
  },
  {
    id: 3,
    category: "تعبئة الفريون والتسريب",
    question: "هل يحتاج المكيف لتعبئة فريون كل سنة؟ وكيف أعرف أن المكيف ناقص فريون؟",
    answer:
      "المعلومة الهندسية الصحيحة هي أن الفريون يدور في دائرة نحاسية مغلقة ولا ينقص من تلقاء نفسه إلا إذا كان هناك 'تنسيم أو تسريب' في الصواميل أو المحابس! في كثير من الأحيان يكون ضعف التبريد بسبب اتساخ الوحدة الخارجية والداخلية وليس نقص الفريون. لذلك نفحص المكيف أولاً بعد الغسيل؛ فإذا وجدنا نقصاً في الضغط، نكشف عن مكان التنسيم ونعالجه ونشد الصواميل قبل شحن الفريون الأمريكي الأصلي.",
  },
  {
    id: 4,
    category: "عدد المكيفات والعروض",
    question: "لدي أكثر من 5 مكيفات في الفيلا بالخرج، هل يوجد خصم على غسيل المجموعة؟",
    answer:
      "نعم بكل تأكيد؛ نقدم في شركة أساس الأمن الخليجي باقات توفير مميزة جداً لأصحاب الفلل والشقق والمساجد في الخرج؛ فكلما زاد عدد المكيفات (من 4 مكيفات فأكثر) ينخفض سعر غسيل المكيف الواحد بشكل كبير، مع شمول الباقة لغسيل الوحدات الداخلية والخارجية وتسليك الصرف والتعقيم وفحص الفريون مجاناً.",
  },
  {
    id: 5,
    category: "المكيفات بعد الغسيل",
    question: "متى يمكنني تشغيل المكيف بعد انتهاء الفني من عملية الغسيل؟",
    answer:
      "يقوم الفني لدينا بعزل اللوحة الإلكترونية تماماً أثناء الغسيل، ثم يقوم بتجفيف الوحدة الداخلية بالبلور الهوائي وتشغيل المكيف بنفسه أمامك فور الانتهاء للاطمئنان على قوة دفع الهواء، برودة التبريد، وهدوء الصوت قبل مغادرة الموقع.",
  },
  {
    id: 6,
    category: "توفير فاتورة الكهرباء",
    question: "هل غسيل المكيفات يقلل فعلاً من استهلاك الكهرباء الشهري؟",
    answer:
      "نعم وبنسبة تصل إلى 25% - 30%؛ لأن تراكم الغبار على راديتر الوحدة الخارجية وكويل الوحدة الداخلية يمنع التبادل الحراري، فيضطر الكومبريسور للعمل المتواصل لساعات طويلة دون أن يفصل الثرموستات. غسيل المكيف يريح الكومبريسور ويجعله يبرد الغرفة في دقائق ثم يفصل لتوفير الطاقة.",
  },
];

export default function ACWashingPage() {
  // Interactive States
  const [selectedFaultId, setSelectedFaultId] = useState<string>("water-dripping-indoor");
  const [selectedUnitTypeId, setSelectedUnitTypeId] = useState<string>("split-wall-units");
  const [activeWashStage, setActiveWashStage] = useState<number>(5);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  // Interactive Multi-AC Package & Energy Saving Calculator States
  const [calcACType, setCalcACType] = useState<string>("مكيفات سبلت جدارية (Split)");
  const [calcUnitsCount, setCalcUnitsCount] = useState<number>(6);
  const [calcServiceOption, setCalcServiceOption] = useState<string>(
    "غسيل شامل (داخلي + خارجي + تسليك صرف + تعقيم)"
  );
  const [calcNeedFreonCheck, setCalcNeedFreonCheck] = useState<boolean>(true);
  const [calcNeighborhood, setCalcNeighborhood] = useState<string>("حي الخزامى");

  // Current Selected Data Objects
  const currentFault =
    AC_FAULT_DIAGNOSTICS.find((f) => f.id === selectedFaultId) || AC_FAULT_DIAGNOSTICS[0];

  const currentUnitSpec =
    AC_UNIT_TYPES_DB.find((u) => u.id === selectedUnitTypeId) || AC_UNIT_TYPES_DB[0];

  const currentWashStageObj =
    SEVEN_AC_WASH_STAGES.find((s) => s.stageNumber === activeWashStage) ||
    SEVEN_AC_WASH_STAGES[4];

  // Dynamic Calculations for AC Package Calculator
  const hasBulkDiscount = calcUnitsCount >= 4;
  const discountBadgeText =
    calcUnitsCount >= 8
      ? "خصم الباقة الذهبية (أكثر من 8 مكيفات)"
      : calcUnitsCount >= 4
      ? "خصم باقة الفلل والشقق (4 مكيفات فأكثر)"
      : "سعر مفرد تنافسي";

  const estimatedTotalMinutes = calcUnitsCount * 30;
  const estimatedHoursText =
    estimatedTotalMinutes >= 60
      ? `حوالي ${Math.round((estimatedTotalMinutes / 60) * 10) / 10} ساعة (فريق مزدوج)`
      : `${estimatedTotalMinutes} دقيقة`;

  // Send Calculator Package Request via WhatsApp
  const handleSendACPackageWhatsApp = () => {
    const message = `السلام عليكم شركة أساس الأمن الخليجي،
أرغب في حجز خدمة غسيل وصيانة مكيفات في الخرج:
❄️ *نوع المكيفات:* ${calcACType}
🔢 *عدد المكيفات:* ${calcUnitsCount} مكيفات (${discountBadgeText})
🛠️ *نوع الخدمة:* ${calcServiceOption}
🌡️ *فحص الفريون والكابستور:* ${calcNeedFreonCheck ? "نعم، مطلوب فحص شامل مجاني مع الغسيل" : "غسيل وتعقيم فقط"}
📍 *الحي بالخرج:* ${calcNeighborhood}

أرجو التواصل معي لتأكيد السعر النهائي وتحديد الموعد.`;

    window.open(
      `https://wa.me/966501206816?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden" dir="rtl">
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#00BFFF]/20">
        {/* Background Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00BFFF]/10 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Breadcrumbs with Explicit Title Attributes */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400 mb-8 bg-[#061124]/90 w-fit px-4 py-2 rounded-full border border-[#00BFFF]/30">
            <Link
              href="/"
              title="الانتقال إلى الصفحة الرئيسية لشركة أساس الأمن الخليجي"
              className="hover:text-[#00BFFF] transition-colors"
            >
              الرئيسية
            </Link>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-gray-300">خدمات التبريد والتكييف</span>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37] font-bold">شركة غسيل وصيانة مكيفات بالخرج</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Column: Hero Copy & Conversion Triggers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <Wind className="w-4 h-4" />
                <span>غسيل في الموقع بدون فك • حماية 100% للجدران والأثاث • فريون أمريكي</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                شركة <span className="text-[#00BFFF]">غسيل مكيفات</span> بالخرج.. استعد التبريد الثلجي والهواء النقي لمكيفك اليوم
              </h1>

              <p className="text-gray-300 text-base sm:text-xl leading-relaxed">
                هل ضعف تبريد مكيفك في حر الخرج؟ أو ينقط ماءً داخل الغرفة ويصدر روائح مكتومة؟ في{" "}
                <strong className="text-white">شركة أساس الأمن الخليجي</strong> نقدم خدمة{" "}
                <strong className="text-[#D4AF37]">
                  غسيل وتعقيم وصيانة المكيفات (سبلت، مركزي، كاسيت، وشباك) في مكانها بدون فك
                </strong>{" "}
                باستخدام أحواض العزل الكورية ومضخات الضغط الموزون، مع تسليك الصرف، غسيل الوحدات الخارجية، وشحن الفريون الأمريكي الأصلي بضمان معتمد.
              </p>

              {/* 4 Key Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">غسيل نظيف بدون قطرة ماء</h2>
                    <p className="text-xs text-gray-400">جاكيت عزل يحمي ورق الجدران والفرش</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">حل جذري لتنقيط المياه</h2>
                    <p className="text-xs text-gray-400">تسليك حوض ولي الصرف بالضغط العالي</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <ThermometerSnowflake className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">فحص وشحن فريون أمريكي</h2>
                    <p className="text-xs text-gray-400">فريون R410A و R22 أصلي مع كشف التنسيم</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <Percent className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">خصم خاص لـ 4 مكيفات فأكثر</h2>
                    <p className="text-xs text-gray-400">باقات توفير للفلل والشقق والمساجد</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تواصل عبر واتساب لحجز خدمة غسيل وصيانة المكيفات بالخرج"
                  className="flex items-center gap-3 bg-[#D4AF37] hover:bg-[#e5c247] text-[#030b1c] font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:scale-105 text-base sm:text-lg"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>احجز غسيل مكيفاتك عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  title="اتصل هاتفياً بشركة غسيل مكيفات بالخرج على الرقم 0501206816"
                  className="flex items-center gap-3 bg-[#061124] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold px-7 py-4 rounded-2xl transition-all duration-300 text-base sm:text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-[0_0_45px_rgba(212,175,55,0.25)] relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#00BFFF]/15 border border-[#00BFFF] flex items-center justify-center text-[#00BFFF]">
                      <Fan className="w-6 h-6 animate-spin" style={{ animationDuration: "8s" }} />
                    </div>
                    <div>
                      <span className="text-xs text-[#D4AF37] font-bold block">
                        مختبر كفاءة التبريد والتكييف
                      </span>
                      <h3 className="text-lg font-extrabold text-white">
                        مؤشرات الأداء بعد الغسيل الهيدروليكي
                      </h3>
                    </div>
                  </div>
                  <span className="bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/40 text-xs font-extrabold px-3 py-1 rounded-full">
                    100% Cooling
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#00BFFF]/40 text-center">
                    <span className="text-xs text-gray-400 block mb-1">درجة حرارة عصف المكيف</span>
                    <span className="text-3xl font-black text-[#00BFFF]" dir="ltr">
                      16°C ICE
                    </span>
                    <span className="text-[11px] text-emerald-400 block mt-1">
                      تبادل حراري أقصى للكويل
                    </span>
                  </div>

                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#D4AF37]/40 text-center">
                    <span className="text-xs text-gray-400 block mb-1">زيادة تدفق الهواء (CFM)</span>
                    <span className="text-3xl font-black text-[#D4AF37]" dir="ltr">
                      +45% AIR
                    </span>
                    <span className="text-[11px] text-[#00BFFF] block mt-1">
                      بعد تنظيف مروحة التوربين
                    </span>
                  </div>
                </div>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800 space-y-3 mb-6 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">الوفر في استهلاك الكهرباء:</span>
                    <span className="text-emerald-400 font-extrabold">انخفاض 25% - 30% شهرياً</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-800 pt-2.5">
                    <span className="text-gray-400">مادة تنظيف الكويل:</span>
                    <span className="text-[#D4AF37] font-extrabold">
                      فوم متعادل آمن (خالي من الأسيد)
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-800 pt-2.5">
                    <span className="text-gray-400">التعقيم والتعطير الداخلي:</span>
                    <span className="text-[#00BFFF] font-extrabold">
                      قضاء 99.9% على العفن والبكتيريا
                    </span>
                  </div>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-4 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                  <p className="text-xs text-gray-200 leading-relaxed">
                    <strong className="text-emerald-400">فحص مجاني مع الغسيل:</strong> نقوم بقياس ضغط الفريون وفحص الكابستور وسلامة التوصيلات الكهربائية لكل مكيف يتم غسله مجاناً.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
              <Sliders className="w-4 h-4" />
              موسوعة التشخيص الميكانيكي لأعطال التكييف
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              اختر <span className="text-[#D4AF37]">المشكلة التي تلاحظها في مكيفك</span> واعرف الحل الهندسي
            </h2>
            <p className="text-gray-300 text-lg">
              نحدد السبب الفني الدقيق لكل مشكلة ونعالجها بشكل فوري من جذورها في موقعك بالخرج دون الحاجة لفك أو نقل المكيف:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {AC_FAULT_DIAGNOSTICS.map((flt) => {
              const isSelected = selectedFaultId === flt.id;
              return (
                <button
                  key={flt.id}
                  onClick={() => setSelectedFaultId(flt.id)}
                  title={flt.title}
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
                      {flt.urgencyBadge}
                    </span>
                    <Wind className={`w-5 h-5 ${isSelected ? "text-[#030b1c]" : "text-[#D4AF37]"}`} />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">{flt.title}</h3>
                </button>
              );
            })}
          </div>

          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-800">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span
                    className={`text-xs font-extrabold px-3.5 py-1 rounded-full border ${currentFault.urgencyColor}`}
                  >
                    تصنيف العطل: {currentFault.urgencyBadge}
                  </span>
                  <span className="bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/30 text-xs font-bold px-3 py-1 rounded-full">
                    الجزء المتأثر: {currentFault.affectedComponent}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {currentFault.title}
                </h3>
              </div>

              <div className="bg-[#030b1c] px-5 py-3.5 rounded-2xl border border-[#D4AF37]/40 flex items-center gap-4">
                <div>
                  <span className="text-xs text-gray-400 block">الضمان المرفق</span>
                  <span className="text-sm sm:text-base font-black text-[#D4AF37]">
                    {currentFault.warrantyText}
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-gray-800"></div>
                <div>
                  <span className="text-xs text-gray-400 block">زمن الإصلاح</span>
                  <span className="text-xs sm:text-sm font-bold text-[#00BFFF]">
                    {currentFault.executionTimeMinutes}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#00BFFF]/30">
                  <span className="text-xs text-gray-400 block mb-1">الأثر المباشر على الأداء:</span>
                  <span className="text-sm sm:text-base font-extrabold text-[#D4AF37] block">
                    {currentFault.coolingLossPercent}
                  </span>
                  <span className="text-xs text-[#00BFFF] block mt-1.5">
                    المعدات المستخدمة: {currentFault.toolsRequired}
                  </span>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800">
                  <h4 className="text-base font-extrabold text-[#00BFFF] mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
                    <span>الأسباب الفنية لحدوث هذه المشكلة:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentFault.rootCauses.map((rc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                        <span>{rc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-red-900/40">
                  <h4 className="text-base font-extrabold text-red-400 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span>مخاطر تشغيل المكيف بدون معالجة:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentFault.risksIfIgnored.map((rsk, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>{rsk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="bg-[#030b1c] p-6 sm:p-8 rounded-2xl border-2 border-[#D4AF37]/40">
                  <h4 className="text-xl font-extrabold text-[#D4AF37] mb-5 flex items-center gap-2">
                    <Wrench className="w-6 h-6 text-[#00BFFF]" />
                    <span>خطوات الغسيل والمعالجة الميدانية في أساس الأمن الخليجي:</span>
                  </h4>

                  <div className="space-y-4">
                    {currentFault.engineeringSolutionProtocol.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 bg-[#061124] p-4 rounded-xl border border-gray-800"
                      >
                        <span className="w-7 h-7 rounded-lg bg-[#D4AF37] text-[#030b1c] font-black text-sm flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#00BFFF]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-gray-400 block">التنفيذ في موقعك بالخرج</span>
                    <span className="text-base font-extrabold text-white">
                      إصلاح وغسيل فوري في مكان المكيف بدون أي فوضى
                    </span>
                  </div>

                  <Link
                    href="https://wa.me/966501206816"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`طلب إصلاح ${currentFault.title} عبر واتساب`}
                    className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black px-7 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>اطلب فني التكييف الآن</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              تخصصنا في غسيل وصيانة <span className="text-[#00BFFF]">جميع أنواع المكيفات</span>
            </h2>
            <p className="text-gray-300 text-lg">
              نمتلك أطقم غسيل ومعدات مخصصة لكل نظام تكييف منزلي أو تجاري في الخرج؛ اختر نوع المكيف لاستعراض طريقة غسيله:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {AC_UNIT_TYPES_DB.map((unt) => {
              const isSelected = selectedUnitTypeId === unt.id;
              return (
                <button
                  key={unt.id}
                  onClick={() => setSelectedUnitTypeId(unt.id)}
                  title={unt.name}
                  className={`p-5 rounded-2xl text-right border-2 transition-all flex flex-col justify-between ${
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
                    {unt.badgeText}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">{unt.name}</h3>
                </button>
              );
            })}
          </div>

          <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/50 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-8">
              <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-lg border border-[#D4AF37]/30">
                {currentUnitSpec.technicalClassification}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
                {currentUnitSpec.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#00BFFF] font-semibold mb-4">
                أماكن التركيب الشائعة: {currentUnitSpec.commonLocations}
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                {currentUnitSpec.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {currentUnitSpec.stepByStepProtocol.map((ph, idx) => (
                <div
                  key={idx}
                  className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-black text-[#D4AF37] block mb-2">
                      المرحلة 0{idx + 1}
                    </span>
                    <h4 className="font-extrabold text-white text-sm sm:text-base mb-2">
                      {ph.phaseTitle}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{ph.phaseDetail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#D4AF37]/40 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs sm:text-sm space-y-1">
                <div>
                  <strong className="text-emerald-400">النتيجة الفنية:</strong>{" "}
                  <span className="text-white">{currentUnitSpec.performanceGain}</span>
                </div>
                <div>
                  <strong className="text-[#00BFFF]">معدل الصيانة الموصى به:</strong>{" "}
                  <span className="text-gray-300">{currentUnitSpec.recommendedFrequency}</span>
                </div>
              </div>

              <Link
                href="https://wa.me/966501206816"
                target="_blank"
                rel="noopener noreferrer"
                title={`حجز غسيل ${currentUnitSpec.name} عبر واتساب`}
                className="bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black px-6 py-3 rounded-xl text-sm transition-all"
              >
                احجز غسيل هذا النوع الآن
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 border-y-2 border-[#D4AF37] bg-gradient-to-b from-[#020814] via-[#06152d] to-[#020814]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] px-5 py-2 rounded-full text-xs sm:text-sm font-black shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-4">
              <Sparkles className="w-4 h-4" />
              منظومة حماية العقار المتكاملة في محافظة الخرج
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              استكشف <span className="text-[#00BFFF]">خدماتنا الهندسية الأخرى</span> لمنزلك في{" "}
              <span className="text-[#D4AF37]">أساس الأمن الخليجي</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              تتكامل خدمة غسيل وصيانة المكيفات مع باقي أقسامنا الهندسية؛ فعزل الأسطح يخفض الحمل الحراري عن مكيفاتك بـ 40%، وكشف التسربات والترميم يحمي جدرانك وأسقفك. تصفح خدماتنا المعتمدة بالخرج:
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#00BFFF] via-[#D4AF37] to-[#00BFFF] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* 6 Sister Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SISTER_SERVICES_HUB.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-[#061124]/95 border-2 border-[#00BFFF]/40 hover:border-[#D4AF37] rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_0_25px_rgba(0,191,255,0.12)] hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] group"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] flex items-center justify-center transition-all">
                        <ServiceIcon className="w-7 h-7" />
                      </div>
                      <div className="text-left">
                        <span className="bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/30 text-xs font-extrabold px-3 py-1 rounded-full block mb-1">
                          {service.categoryTag}
                        </span>
                        <span className="text-[11px] font-bold text-[#D4AF37]">
                          ★ {service.warrantyBadge}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                      <Link
                        href={service.fullUrl}
                        title={`الانتقال إلى خدمة ${service.title} - شركة أساس الأمن الخليجي`}
                      >
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Synergy Box with AC */}
                    <div className="bg-[#030b1c] p-3.5 rounded-xl border border-[#D4AF37]/30 mb-5 text-xs">
                      <strong className="text-[#00BFFF] block mb-1">
                        علاقتها بكفاءة التكييف والعقار:
                      </strong>
                      <span className="text-gray-200">{service.synergyWithAC}</span>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-6">
                      {service.keyHighlights.map((hl, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct Link Button with Full URL */}
                  <div className="pt-4 border-t border-gray-800 space-y-2">
                    <Link
                      href={service.fullUrl}
                      title={`تصفح صفحة ${service.title} بالخرج`}
                      className="w-full bg-[#030b1c] group-hover:bg-[#D4AF37] text-[#D4AF37] group-hover:text-[#030b1c] border border-[#D4AF37] font-extrabold py-3.5 px-5 rounded-xl flex items-center justify-between transition-all text-sm"
                    >
                      <span>استعراض تفاصيل الخدمة</span>
                      <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    </Link>
                    <span
                      className="block text-[10px] text-gray-500 text-center font-mono truncate"
                      dir="ltr"
                    >
                      {service.fullUrl}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              محاكاة حية لعملية الغسيل في الموقع
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              المراحل الخمس لغسيل المكيف <span className="text-[#00BFFF]">واستعادة كفاءة 100%</span>
            </h2>
            <p className="text-gray-300 text-lg">
              اضغط على كل مرحلة لترى كيف يرتفع مؤشر التبريد وتدفق الهواء مع تقدم خطوات التنظيف الميكانيكي:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10">
            {SEVEN_AC_WASH_STAGES.map((stg) => {
              const isSelected = activeWashStage === stg.stageNumber;
              return (
                <button
                  key={stg.stageNumber}
                  onClick={() => setActiveWashStage(stg.stageNumber)}
                  title={stg.title}
                  className={`p-4 rounded-2xl text-right border-2 transition-all ${
                    isSelected
                      ? "bg-[#061124] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                      : "bg-[#061124]/60 border-gray-800 hover:border-[#00BFFF]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#00BFFF]">
                      مرحلة 0{stg.stageNumber}
                    </span>
                    <span className="text-xs font-black text-[#D4AF37]">
                      تبريد {stg.airflowAndCoolingEfficiency}%
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-xs sm:text-sm leading-snug">
                    {stg.title}
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/50 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* CSS Split Unit Airflow Visualizer */}
              <div className="lg:col-span-5 bg-[#030b1c] p-8 rounded-3xl border border-gray-800 flex flex-col items-center">
                <span className="text-xs text-gray-400 font-bold mb-4">
                  محاكاة كفاءة كويل التبريد وتدفق الهواء البارد
                </span>

                <div className="w-full max-w-xs h-32 rounded-2xl border-4 border-gray-500 bg-gradient-to-b from-gray-800 to-gray-900 p-4 flex flex-col justify-between relative shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#00BFFF]">ASAS-HVAC PRO</span>
                    <span className="px-2 py-0.5 rounded bg-black text-emerald-400 font-mono text-xs font-bold">
                      16°C
                    </span>
                  </div>

                  <div className="w-full h-10 bg-[#061124] rounded border border-gray-700 overflow-hidden relative flex items-center justify-center">
                    <div
                      className="absolute inset-y-0 right-0 bg-amber-900/80 transition-all duration-700"
                      style={{ width: `${currentWashStageObj.dirtAndBlockageRate}%` }}
                    ></div>
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00BFFF]/60 to-cyan-400/40 transition-all duration-700"
                      style={{ width: `${currentWashStageObj.airflowAndCoolingEfficiency}%` }}
                    ></div>
                    <span className="relative z-10 text-xs font-black text-white">
                      كفاءة الكويل: {currentWashStageObj.airflowAndCoolingEfficiency}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-[#00BFFF]/50 rounded-full"></div>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-3xl font-black text-[#00BFFF]">
                    {currentWashStageObj.airflowAndCoolingEfficiency}%
                  </span>
                  <span className="block text-xs text-gray-400 mt-1">
                    نسبة الأتربة المتبقية: {currentWashStageObj.dirtAndBlockageRate}%
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`text-xs font-extrabold px-4 py-1.5 rounded-full border ${currentWashStageObj.badgeStyle}`}
                  >
                    المرحلة {currentWashStageObj.stageNumber} من 5
                  </span>
                  <span className="text-sm font-bold text-[#D4AF37]">
                    المدة: {currentWashStageObj.durationMinutes}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentWashStageObj.title}
                </h3>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#D4AF37]/40">
                  <span className="text-xs text-[#00BFFF] font-bold block mb-1">
                    الأداة والمعدات المستخدمة:
                  </span>
                  <p className="text-base sm:text-lg font-extrabold text-[#D4AF37]">
                    {currentWashStageObj.technicalTool}
                  </p>
                </div>

                <p className="text-gray-300 text-base leading-relaxed">
                  {currentWashStageObj.detailedAction}
                </p>

                <div className="bg-emerald-950/30 border border-emerald-500/40 p-4 rounded-xl text-xs sm:text-sm text-emerald-300">
                  <strong>معيار الأمان:</strong> {currentWashStageObj.safetyNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Freon Lab Cards */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                مختبر غازات <span className="text-[#00BFFF]">الفريون الأمريكي الأصلي</span> (Honeywell)
              </h2>
              <p className="text-gray-300">
                نلتزم بشحن غازات التبريد الأصلية فقط وفق ضغط الضاغط القياسي بعد فحص ومعالجة أي تنسيم في المواسير:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FREON_GASES_LAB.map((gas, idx) => (
                <div
                  key={idx}
                  className="bg-[#061124]/95 border-2 border-[#00BFFF]/30 hover:border-[#D4AF37] rounded-3xl p-6 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#D4AF37] text-[#030b1c] font-black text-base px-3.5 py-1 rounded-lg" dir="ltr">
                        {gas.code}
                      </span>
                      <span className="text-xs text-[#00BFFF] font-bold">{gas.origin}</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-white mb-2">{gas.name}</h3>
                    <p className="text-xs text-[#D4AF37] font-bold mb-3">
                      {gas.operatingPressurePSI}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {gas.chargingProtocol}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-800 text-xs text-emerald-400 font-semibold">
                    ✓ {gas.purityGuarantee}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#061124]/95 border-2 border-[#00BFFF] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_45px_rgba(0,191,255,0.2)]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
                <Calculator className="w-4 h-4" />
                حاسبة عروض وباقات غسيل المكيفات بالخرج
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                حدد <span className="text-[#D4AF37]">عدد المكيفات في منزلك</span> واحصل على خصم المجموعة الفوري
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      1. نوع المكيفات المطلوب غسيلها:
                    </label>
                    <select
                      value={calcACType}
                      onChange={(e) => setCalcACType(e.target.value)}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none"
                    >
                      <option value="مكيفات سبلت جدارية (Split)">مكيفات سبلت جدارية (Split)</option>
                      <option value="مكيفات شباك (Window)">مكيفات شباك (Window)</option>
                      <option value="مكيفات كاسيت أو دولابي">مكيفات كاسيت أو دولابي</option>
                      <option value="تكييف مركزي أو كونسيلد مخفي">تكييف مركزي أو كونسيلد مخفي</option>
                      <option value="مجموعة متنوعة (سبلت + شباك)">مجموعة متنوعة (سبلت + شباك)</option>
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
                      <option value="الدلم / الهياثم / اليمامة">الدلم / الهياثم / اليمامة</option>
                    </select>
                  </div>
                </div>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-bold text-gray-200">
                      3. عدد المكيفات المطلوب تنظيفها:
                    </label>
                    <span className="bg-[#D4AF37] text-[#030b1c] font-black px-3.5 py-1 rounded-lg text-sm">
                      {calcUnitsCount} مكيفات
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={25}
                    value={calcUnitsCount}
                    onChange={(e) => setCalcUnitsCount(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-gray-800 rounded-lg"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 مكيف</span>
                    <span>6 مكيفات (شقة/دور)</span>
                    <span>15+ مكيف (فيلا كاملة/مسجد)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-200 mb-2">
                    4. نطاق الخدمة المطلوب:
                  </label>
                  <select
                    value={calcServiceOption}
                    onChange={(e) => setCalcServiceOption(e.target.value)}
                    className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none"
                  >
                    <option value="غسيل شامل (داخلي + خارجي + تسليك صرف + تعقيم)">
                      غسيل شامل (داخلي + خارجي + تسليك صرف + تعقيم)
                    </option>
                    <option value="غسيل + إصلاح مشكلة تنقيط المياه">
                      غسيل + إصلاح مشكلة تنقيط المياه
                    </option>
                    <option value="غسيل + فحص وشحن غاز الفريون الأمريكي">
                      غسيل + فحص وشحن غاز الفريون الأمريكي
                    </option>
                  </select>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#030b1c] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 space-y-5 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <div className="border-b border-gray-800 pb-4">
                  <span className="text-xs text-[#00BFFF] font-bold block">ملخص الباقة المختارة</span>
                  <h3 className="text-xl font-extrabold text-white mt-1">
                    غسيل {calcUnitsCount} {calcACType}
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">حالة الخصم:</span>
                    <span className="font-black text-[#D4AF37] text-xs sm:text-sm">
                      {hasBulkDiscount ? `✓ ${discountBadgeText}` : "سعر مفرد خاص"}
                    </span>
                  </div>
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">الوقت التقديري للإنجاز:</span>
                    <span className="font-bold text-[#00BFFF]">{estimatedHoursText}</span>
                  </div>
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">فحص الفريون وتسليك الصرف:</span>
                    <span className="font-bold text-emerald-400">مجاني مع كل مكيف</span>
                  </div>
                </div>

                <button
                  onClick={handleSendACPackageWhatsApp}
                  title="إرسال طلب حجز باقة غسيل المكيفات عبر واتساب"
                  className="w-full bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>احصل على سعر الباقة عبر واتساب</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              الفرق بين <span className="text-[#00BFFF]">فنيي التكييف المحترفين</span> والعمالة غير المتخصصة
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-[#D4AF37] bg-[#061124]/95 shadow-xl mb-20">
            <table className="w-full text-right border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-[#030b1c] border-b-2 border-[#D4AF37]">
                  <th className="p-5 text-white font-extrabold text-base w-1/4">معيار المقارنة</th>
                  <th className="p-5 text-[#D4AF37] font-extrabold text-base w-1/3 bg-[#D4AF37]/10 border-x border-[#D4AF37]/30">
                    شركة أساس الأمن الخليجي (غسيل وصيانة معتمدة)
                  </th>
                  <th className="p-5 text-gray-400 font-bold text-base w-1/3">
                    العمالة العشوائية / الغسيل البدائي
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {AC_COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#030b1c]/60 transition-colors">
                    <td className="p-5 font-bold text-white">
                      <div>{row.criterion}</div>
                      <span className="inline-block mt-1 text-[11px] bg-red-500/15 text-red-400 px-2 py-0.5 rounded">
                        {row.technicalWarning}
                      </span>
                    </td>
                    <td className="p-5 bg-[#D4AF37]/5 border-x border-[#D4AF37]/20 text-sm text-white font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{row.asasProfessionalAC}</span>
                      </div>
                    </td>
                    <td className="p-5 text-sm text-gray-400">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{row.randomStreetWorkers}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Al-Kharj Sectors */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {KHARJ_AC_SECTORS.map((sec, idx) => (
              <div
                key={idx}
                className="bg-[#061124]/95 border-2 border-[#00BFFF]/40 hover:border-[#D4AF37] rounded-3xl p-7 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-[#D4AF37] text-[#030b1c] text-xs font-black px-3 py-1 rounded-lg">
                      وصول خلال {sec.responseTime}
                    </span>
                    <span className="text-xs text-[#00BFFF] font-bold">
                      +{sec.servicedUnitsCount} مكيف مخدوم
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2">{sec.sectorTitle}</h3>
                  <p className="text-xs text-gray-400 mb-4">{sec.environmentalFactor}</p>
                  <div className="space-y-2 mb-6">
                    {sec.mostRequestedServices.map((srv, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-1.5">
                  {sec.neighborhoods.map((nh, nIdx) => (
                    <span
                      key={nIdx}
                      className="text-xs bg-[#030b1c] text-white border border-[#00BFFF]/30 px-2.5 py-1 rounded-md"
                    >
                      {nh}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              الأسئلة الشائعة حول <span className="text-[#D4AF37]">غسيل وصيانة المكيفات بالخرج</span>
            </h2>
          </div>

          <div className="space-y-4">
            {AC_FAQS.map((faq) => {
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
                    title={faq.question}
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
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#061124] via-[#0a1d3b] to-[#061124] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Wind className="w-4 h-4" />
                خصم خاص للمجموعات والفلل • غسيل نظيف في الموقع بضمان معتمد
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                استمتع بهواء نقي وتبريد ثلجي لمكيفاتك طوال الصيف!
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
                تواصل الآن مع قسم التكييف والتبريد في{" "}
                <span className="text-[#D4AF37] font-bold">شركة أساس الأمن الخليجي</span> بالخرج لحجز موعدك الفوري.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="راسل شركة أساس الأمن الخليجي عبر واتساب لطلب غسيل المكيفات"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#e6c247] text-[#030b1c] font-black text-lg px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>احجز موعد غسيل المكيفات عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  title="اتصال هاتفي مباشر بقسم غسيل المكيفات بالخرج 0501206816"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#030b1c] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold text-lg px-10 py-5 rounded-2xl transition-all"
                >
                  <Phone className="w-6 h-6" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                <span className="text-gray-400 font-bold">روابط سريعة لخدماتنا:</span>
                <Link
                  href="https://www.amnkhaligi.com/services/water-leak-detection"
                  title="خدمة كشف تسربات المياه بالخرج بدون تكسير"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  كشف تسربات المياه
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="https://www.amnkhaligi.com/services/restoration-and-construction"
                  title="خدمة ترميم وبناء وصيانة المباني بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  ترميم وبناء
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="https://www.amnkhaligi.com/services/sewage-clearing"
                  title="خدمة تسليك مجاري بالضغط في الخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  تسليك مجاري
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="https://www.amnkhaligi.com/services/roof-insulation"
                  title="خدمة عزل الأسطح المائي والحراري والفوم بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  عزل أسطح
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="https://www.amnkhaligi.com/services/pest-control"
                  title="خدمة رش مبيدات ومكافحة حشرات بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  رش مبيدات
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="https://www.amnkhaligi.com/services/tank-cleaning"
                  title="خدمة غسيل وتعقيم وعزل الخزانات بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  غسيل خزانات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}