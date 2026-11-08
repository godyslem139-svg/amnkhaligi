"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Droplets,
  ShieldCheck,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Search,
  FileText,
  Wrench,
  Clock,
  MapPin,
  ArrowLeft,
  Activity,
  Thermometer,
  Radio,
  Gauge,
  Building2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Eye,
  Layers,
  Award,
  Zap,
  HelpCircle,
  TrendingDown,
  Lock,
  Hammer,
  Container,
  Maximize2,
  Calculator,
  Send,
} from "lucide-react";

// ============================================================================
// 1. Interfaces & Types (هياكل البيانات الهندسية لصفحة كشف التسربات)
// ============================================================================

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  technicalDetails: string;
  deviceUsed: string;
}

interface DetectionDevice {
  id: string;
  name: string;
  model: string;
  origin: string;
  accuracy: string;
  maxDepth: string;
  technologyType: string;
  image: string;
  description: string;
  howItWorks: string[];
  bestFor: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

interface LeakZone {
  id: string;
  title: string;
  dangerLevel: "خطورة قصوى" | "خطورة عالية" | "خطورة متوسطة";
  commonCauses: string[];
  visibleSigns: string[];
  hiddenDamages: string[];
  ourSolution: string;
  inspectionMethod: string;
  warrantyPeriod: string;
  image: string;
}

interface SymptomItem {
  id: string;
  title: string;
  category: string;
  points: number;
  estimatedLossLitersPerDay: number;
  recommendation: string;
}

interface BillStep {
  step: string;
  title: string;
  description: string;
  actionRequired: string;
}

interface ProcessStep {
  number: string;
  title: string;
  time: string;
  details: string;
  points: string[];
}

interface LeakFAQ {
  question: string;
  answer: string;
  category: string;
}

// ============================================================================
// 2. Comprehensive Data Constants (البيانات الموسوعية والصور الأربعة)
// ============================================================================

const SERVICE_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/water-leak-detection.webp",
    title: "الفحص الإلكتروني الدقيق بدون تكسير",
    subtitle: "تحديد نقطة التسرب خلف الجدران وتحت البلاط بدقة 99.6%",
    tag: "تكنولوجيا ألمانية",
    technicalDetails:
      "استخدام الحساسات الصوتية الرقمية والكاميرات الحرارية لرصد أدق الذبذبات الناتجة عن خروج المياه من المواسير المضغوطة دون المساس بالسيراميك أو الديكورات.",
    deviceUsed: "Aquaphon A200 + FLIR Thermal",
  },
  {
    id: 2,
    src: "/water-leak-.webp",
    title: "رصد تسربات الشبكات المخفية والرطوبة",
    subtitle: "تحليل مسارات المياه الحارة والباردة داخل الخرسانة",
    tag: "تشخيص هندسي",
    technicalDetails:
      "معاينة فروق درجات الحرارة ونسب التشبع المائي في الأسقف والجدران لمعرفة مصدر الرطوبة بدقة قبل تقشر الدهانات وتآكل حديد التسليح.",
    deviceUsed: "Protimeter Moisture Sensor",
  },
  {
    id: 3,
    src: "/water-leak.webp",
    title: "معالجة وإصلاح التسربات الجذرية",
    subtitle: "إصلاح موضعي في نطاق بلاطة واحدة مع العزل المائي",
    tag: "إصلاح مضمون",
    technicalDetails:
      "بعد تحديد مكان الخلل بالسنتيمتر، يقوم فريقنا باستبدال الوصلة التالفة بقطع غيار حرارية أصلية مع تطبيق عزل مائي محيطي وإعادة البلاط كما كان.",
    deviceUsed: "معدات لحام حراري ألمانية",
  },
  {
    id: 4,
    src: "/water.webp",
    title: "حماية الخزانات والشبكات من الهدر المائي",
    subtitle: "إيقاف نزيف المياه الخفي وخفض الفواتير المرتفعة بالخرج",
    tag: "توفير وأمان",
    technicalDetails:
      "فحص شامل للخزانات الأرضية والعلوية، العوامات، المضخات، وخطوط التغذية الرئيسية لمنع تسرب المياه إلى أساسات العقار.",
    deviceUsed: "جهاز ضغط النيتروجين + الفحص البلوري",
  },
];

const DETECTION_DEVICES: DetectionDevice[] = [
  {
    id: "aquaphon",
    name: "جهاز الأكوافون الصوتي الرقمي",
    model: "Sewerin Aquaphon A200",
    origin: "ألمانيا (Germany)",
    accuracy: "99.6%",
    maxDepth: "حتى 3.5 متر تحت الأرض",
    technologyType: "الموجات الصوتية والاهتزازات الترددية",
    image: "/water-leak-detection.webp",
    description:
      "يُعد جهاز الأكوافون A200 المعيار الذهبي عالمياً في كشف تسربات المياه المضغوطة. يعمل الجهاز عبر التقاط الصوت الناتج عن احتكاك وتدفق المياه الخارجة من ثقب الماسورة وتحويله إلى إشارات رقمية ورسوم بيانية على شاشة المهندس.",
    howItWorks: [
      "تثبيت الميكروفون الأرضي الحساس (Ground Microphone) فوق البلاط أو الرخام في مسار الأنابيب.",
      "يقوم المعالج الرقمي بعزل الضوضاء المحيطة (أصوات الشارع، المكيفات، المشي) والتركيز حصرياً على تردد صوت التسرب.",
      "تحديد النقطة ذات التردد الأعلى على الشاشة، وهي التي تمثل مركز التسرب الفعلي بدقة لا تتجاوز بضعة سنتيمترات.",
    ],
    bestFor: [
      "خطوط التغذية الرئيسية المدفونة في الأحواش وتحت البلاط.",
      "شبكات المياه الداخلية في الحمامات والمطابخ.",
      "الأنابيب البلاستيكية (PPR) والمعدنية والنحاسية.",
    ],
    specs: [
      { label: "نطاق التردد", value: "10 - 4000 هرتز" },
      { label: "عزل الضوضاء", value: "ذكاء اصطناعي رقمي" },
      { label: "نسبة التكسير", value: "صفر% أثناء الفحص" },
    ],
  },
  {
    id: "thermal",
    name: "كاميرا التصوير الحراري بالأشعة تحت الحمراء",
    model: "FLIR E96 Advanced Thermal",
    origin: "الولايات المتحدة (USA)",
    accuracy: "99.3%",
    maxDepth: "مسح سطحي وعمق الجدران والأسقف",
    technologyType: "الطيف الحراري والأشعة تحت الحمراء",
    image: "/water-leak-.webp",
    description:
      "تقنية بصرية فائقة التطور تتيح لمهندسينا 'رؤية' المياه خلف الجدران وفوق الأسقف الجبسية والخرسانية دون لمسها، وذلك عبر رصد الاختلافات الدقيقة جداً في درجات حرارة السطح الناتجة عن وجود رطوبة أو مياه متسربة.",
    howItWorks: [
      "توجيه عدسة الكاميرا الحرارية نحو الجدار أو السقف المشتبه بوجود تسرب خلفه.",
      "تظهر مسارات أنابيب المياه الحارة باللون الأحمر/الأصفر، بينما تظهر بؤر الرطوبة والتسرب البارد باللون الأزرق/البنفسجي.",
      "التقاط صور حرارية عالية الدقة وإدراجها في التقرير الفني المعتمد للعميل.",
    ],
    bestFor: [
      "تسربات أسقف الحمامات والأدوار العلوية.",
      "تحديد مسارات مواسير السخانات والمياه الحارة بدقة.",
      "الكشف عن مناطق تلف أو فراغات العزل المائي والحراري في الأسطح.",
    ],
    specs: [
      { label: "دقة المستشعر", value: "640 × 480 بكسل" },
      { label: "الحساسية الحرارية", value: "0.03 درجة مئوية" },
      { label: "التوثيق", value: "صور حرارية + حقيقية مدمجة" },
    ],
  },
  {
    id: "nitrogen",
    name: "جهاز حقن وتتبع غاز النيتروجين الآمن",
    model: "Variotec 460 Tracer Gas",
    origin: "ألمانيا (Germany)",
    accuracy: "99.8%",
    maxDepth: "حتى 4 أمتار (يخترق الخرسانة والتربة)",
    technologyType: "الاستشعار الكيميائي لغاز التتبع",
    image: "/water-leak.webp",
    description:
      "الحل الهندسي الحاسم للتسربات الشعرية الدقيقة جداً (Micro-Leaks) التي لا تصدر صوتاً مسموعاً أو في الأنابيب الطويلة والمسابح. يتم تفريغ الأنبوب من الماء وضخ خليط غاز آمن (95% نيتروجين + 5% هيدروجين) ثم تتبع مكان خروجه.",
    howItWorks: [
      "إغلاق محابس الخط المراد فحصه وضخ غاز النيتروجين بضغط محسوب ومراقب عبر ساعة ضغط رقمية.",
      "نظراً لأن جزيئات الهيدروجين هي الأصغر في الطبيعة، فإنها تخرج فوراً من أضيق ثقب شعري وتصعد للأعلى مخترقة الخرسانة والبلاط.",
      "يمرر الفني حساس الاستشعار (Sniffer Probe) فوق السطح ليطلق إنذاراً فورياً عند التقاط ذرات الغاز.",
    ],
    bestFor: [
      "تسربات المسابح وخطوط الفلاتر والجاكوزي.",
      "التسربات الدقيقة التي تسبب انخفاض ضغط الشبكة دون ظهور مياه واضحة.",
      "الشبكات الخارجية الطويلة في الفلل والقصور والمزارع بالخرج.",
    ],
    specs: [
      { label: "أمان الغاز", value: "آمن 100% وغير سام" },
      { label: "حساسية الرصد", value: "0.1 جزء في المليون" },
      { label: "مراقبة الضغط", value: "مقياس مانومتر رقمي" },
    ],
  },
  {
    id: "endoscope",
    name: "كاميرا المنظار الداخلي ومقياس الرطوبة",
    model: "Ridgid SeeSnake + Protimeter",
    origin: "المملكة المتحدة / أمريكا",
    accuracy: "100% رؤية مباشرة",
    maxDepth: "بطول 30 متراً داخل المواسير",
    technologyType: "تصوير بصري داخلي + موجات كهرومغناطيسية",
    image: "/water.webp",
    description:
      "بينما تفحص الأجهزة الصوتية مواسير التغذية المضغوطة، تتولى كاميرا المنظار فحص مواسير الصرف الصحي والمجاري من الداخل بالصوت والصورة لتحديد الكسور، الانفصالات، أو تجمعات المياه تحت المبنى.",
    howItWorks: [
      "إدخال كابل الألياف الضوئية المزود بكاميرا عالية الإضاءة (LED) داخل فتحات الصرف والصفايات.",
      "مشاهدة الجدار الداخلي للماسورة مباشرة على شاشة العرض وتحديد موقع الشرخ أو الهبوط بالضبط عبر حساس تحديد الموقع (Sonde).",
      "استخدام جهاز Protimeter لقياس نسبة تشبع الخرسانة بالمياه والأملاح قبل البدء بأي إصلاح.",
    ],
    bestFor: [
      "تسربات مواسير الصرف الصحي والبيارات والصفايات (التي لا تخضع لضغط مستمر).",
      "فحص الفجوات خلف الجبس بورد وتحت البانيو والجاكوزي.",
      "التأكد من جفاف الجدران والأسقف بعد الإصلاح وقبل الدهان.",
    ],
    specs: [
      { label: "دقة الكاميرا", value: "1080p Full HD مع إضاءة" },
      { label: "تحديد الموقع", value: "حساس لاسلكي مدمج" },
      { label: "قياس الرطوبة", value: "بدون ثقب (Non-Invasive)" },
    ],
  },
];

const LEAK_ZONES_DATA: LeakZone[] = [
  {
    id: "tanks",
    title: "تسربات الخزانات الأرضية والعلوية",
    dangerLevel: "خطورة قصوى",
    commonCauses: [
      "تشققات وتصدعات في جدران أو أرضية الخزان الخرساني بسبب ضغط التربة أو الجذور.",
      "تلف أو غياب طبقة العزل المائي الداخلي (الإيبوكسي أو الأسمنتي) وتآكل الخرسانة.",
      "خلل في عوامة الخزان (الميكانيكية أو الكهربائية) مما يؤدي لفيضان المياه المستمر.",
      "كسر في رقبة الخزان أو الوصلات الرابطة بين الخزان والدينمو (المضخة).",
    ],
    visibleSigns: [
      "ارتفاع جنوني ومفاجئ في فاتورة المياه الشهرية (السبب الأول لارتفاع الفواتير بالخرج).",
      "نقص سريع في منسوب مياه الخزان الأرضي حتى مع قلة الاستهلاك اليومي.",
      "عمل مضخة المياه (الدينمو) بشكل متواصل دون توقف أو دخول هواء للخطوط.",
      "هبوط في بلاط الحوش المحيط بفتحة الخزان الأرضي أو ظهور رطوبة دائمة حوله.",
    ],
    hiddenDamages: [
      "تسرب المياه بكميات ضخمة تحت قواعد وأساسات المبنى مما يسبب هبوطاً إنشائياً خطيراً.",
      "اختلاط مياه الشرب داخل الخزان بالمياه الجوفية أو مياه الصرف الصحي الملوثة.",
      "تآكل حديد تسليح سقف وجدران الخزان مما قد يؤدي لانهيار سقف الخزان في الحوش.",
    ],
    ourSolution:
      "فحص الخزان إلكترونياً وبصرياً، قياس معدل الفقد المائي، معالجة الشروخ والتعشيش بمواد سيكا ومونومر، ثم تطبيق عزل مائي بلوري وإيبوكسي غذائي أزرق (3 طبقات) مع صيانة العوامات والمضخة.",
    inspectionMethod: "فحص منسوب الليزر + جهاز الرطوبة الكهرومغناطيسي + فحص الوصلات بالأكوافون",
    warrantyPeriod: "10 سنوات ضمان رسمي مكتوب",
    image: "/water.webp",
  },
  {
    id: "bathrooms",
    title: "تسربات الحمامات والمطابخ (التغذية والصرف)",
    dangerLevel: "خطورة عالية",
    commonCauses: [
      "تآكل فواصل البلاط (الترويبة) وتسرب مياه الاستحمام والغسيل إلى الرمل تحت السيراميك.",
      "انفصال أو شرخ في مواسير الصرف تحت كرسي الحمام (الإفرنجي/العربي) أو الصفاية الرئيسية.",
      "تلف جلب وتوصيلات مواسير المياه الحارة (خط السخان) نتيجة الحرارة والضغط العالي.",
      "تسرب مخفي خلف خلاطات الدش المدفونة أو محابس الزاوية.",
    ],
    visibleSigns: [
      "تساقط قطرات مياه أو ظهور بقع صفراء وتقشر دهانات في سقف الدور الأسفل.",
      "انتفاخ وتشقق الدهانات في الجدران المجاورة للحمام أو المطبخ (رطوبة وتمليح).",
      "انبعاث روائح كريهة أو رائحة عفونة ورطوبة مستمرة داخل الحمام.",
      "تخلخل أو خروج صوت طقطقة عند المشي على بلاط أرضية الحمام.",
    ],
    hiddenDamages: [
      "صدأ وتآكل حديد تسليح سقف الحمام وتساقط الكتل الخرسانية (خطر على السكان).",
      "تلف الديكورات الجبسية وحدوث التماس كهربائي في إضاءة السقف السفلي.",
      "تكاثر الحشرات والفطريات والبكتيريا الضارة بالصحة في بيئة الرطوبة.",
    ],
    ourSolution:
      "فحص مواسير التغذية بالضغط والأكوافون، وفحص الصرف بالمنظار، وتحديد ما إذا كان التسرب من المواسير (يتم إصلاحه بخلع بلاطة واحدة فقط) أو من الترويبة والصفايات (يتم عزله بمواد إيبوكسية شفافة وترويبة عازلة دون تكسير).",
    inspectionMethod: "الكاميرا الحرارية FLIR + ضغط النيتروجين + منظار الصرف الداخلي",
    warrantyPeriod: "5 إلى 10 سنوات حسب نوع المعالجة",
    image: "/water-leak-detection.webp",
  },
  {
    id: "roofs",
    title: "تسربات الأسطح ومياه الأمطار",
    dangerLevel: "خطورة عالية",
    commonCauses: [
      "عدم وجود عزل مائي للسطح أو تلف العزل القديم بسبب أشعة الشمس الحارقة في الخرج.",
      "انسداد مزاريب وصرف مياه الأمطار مما يؤدي لتجمع برك مائية فوق السطح لأيام.",
      "تسربات من الخزان العلوي أو شبكة المواسير الممتدة فوق السطح المكشوف.",
      "تشققات في فواصل التمدد الخرسانية أو التقاء أرضية السطح مع جدار السترة (الوارش).",
    ],
    visibleSigns: [
      "ظهور بقع مائية ورطوبة في أسقف غرف الدور الأخير خاصة بعد هطول الأمطار.",
      "ارتفاع شديد في حرارة الدور العلوي صيفاً وزيادة استهلاك المكيفات للكهرباء.",
      "تآكل وتفكك بلاط السطح أو ظهور نباتات وطحالب في الفواصل.",
    ],
    hiddenDamages: [
      "تشبع خرسانة السطح بالماء مما يزيد الحمل الإنشائي ويضعف المقاومة.",
      "تلف تمديدات الكهرباء المارة داخل سقف الدور العلوي.",
    ],
    ourSolution:
      "فحص شبكة مواسير السطح وإصلاحها، تسليك مزاريب الأمطار، ثم تطبيق منظومة العزل المائي والحراري المزدوج (رش الفوم بولي يوريثان بكثافة 45 كجم/م³ مع طبقة الأكريليك الواقية أو العزل الأسمنتي/الإيبوكسي فوق البلاط).",
    inspectionMethod: "المسح الحراري الشامل للسطح + قياس الرطوبة العميقة",
    warrantyPeriod: "10 سنوات ضمان شامل",
    image: "/water-leak-.webp",
  },
  {
    id: "networks",
    title: "تسربات الشبكة الخارجية والأحواش والمسابح",
    dangerLevel: "خطورة عالية",
    commonCauses: [
      "كسر في الخط الرئيسي الواصل من عداد شركة المياه إلى الخزان الأرضي بسبب ضغط السيارات في الحوش.",
      "تآكل مواسير التغذية المدفونة في الحدائق نتيجة جذور الأشجار أو ملوحة التربة.",
      "تسرب في خطوط دفع وسحب فلاتر المسبح أو كشافات الإضاءة المغمورة أو فواصل سيراميك المسبح.",
    ],
    visibleSigns: [
      "دوران عداد المياه الخارجي باستمرار حتى مع إغلاق كافة المحابس داخل المنزل.",
      "ظهور مياه راكدة أو رطوبة دائمة في جزء معين من بلاط الحوش أو انترلوك المدخل.",
      "هبوط مفاجئ في بلاط الحوش أو ميلان في سور الفيلا الخارجي.",
      "نقص يومي ملحوظ في مستوى مياه المسبح يتجاوز معدل التبخر الطبيعي.",
    ],
    hiddenDamages: [
      "تجريف التربة الرملية تحت بلاط الحوش وتكوين فجوات أرضية (كهوف صغيرة) تؤدي لانهيار الأرضية.",
      "تضرر القواعد الشريطية لأسوار المبنى والواجهة الأمامية.",
    ],
    ourSolution:
      "ضخ غاز التتبع (النيتروجين) واستخدام الميكروفون الأرضي للأكوافون لتحديد نقطة الكسر تحت بلاط الحوش بالضبط، ثم فتح البلاطة المحددة فقط وإصلاح الماسورة وإعادة الدفان والبلاط لوضعه الأصلي.",
    inspectionMethod: "جهاز غاز النيتروجين Variotec 460 + الميكروفون الأرضي العميق",
    warrantyPeriod: "7 سنوات ضمان معتمد",
    image: "/water-leak.webp",
  },
];

const SYMPTOMS_CHECKLIST: SymptomItem[] = [
  {
    id: "s1",
    title: "ارتفاع مفاجئ وغير مبرر في فاتورة المياه الشهرية",
    category: "الخزانات والشبكة الرئيسية",
    points: 35,
    estimatedLossLitersPerDay: 1200,
    recommendation: "يلزم فحص فوري للخزان الأرضي والعوامة والخط الواصل من العداد الرئيسي.",
  },
  {
    id: "s2",
    title: "ظهور بقع رطوبة أو اصفرار أو تقشر دهان في الأسقف أو الجدران",
    category: "الحمامات والأسطح",
    points: 25,
    estimatedLossLitersPerDay: 350,
    recommendation: "يلزم فحص بالكاميرا الحرارية وجهاز الرطوبة لتحديد مصدر التسرب خلف الجدار أو السقف.",
  },
  {
    id: "s3",
    title: "عمل دينمو المياه (المضخة) بشكل مستمر أو متكرر بدون فتح الحنفيات",
    category: "خطوط التغذية المضغوطة",
    points: 30,
    estimatedLossLitersPerDay: 850,
    recommendation: "مؤشر قوي على وجود كسر أو ثقب في خط التغذية المضغوط بعد المضخة؛ يتطلب فحصاً بالأكوافون.",
  },
  {
    id: "s4",
    title: "هبوط في بلاط الحوش أو تخلخل سيراميك الحمام وخروج مياه من الفواصل",
    category: "الشبكات الأرضية والصرف",
    points: 30,
    estimatedLossLitersPerDay: 900,
    recommendation: "تسرب أرضي نشط يشكل خطراً على التربة والأساسات؛ يلزم فحص بغاز النيتروجين ومنظار الصرف.",
  },
  {
    id: "s5",
    title: "سماع صوت صفير أو جريان مياه خفي داخل الجدران في أوقات الهدوء ليلاً",
    category: "الأنابيب الداخلية",
    points: 25,
    estimatedLossLitersPerDay: 600,
    recommendation: "تسرب مباشر في مواسير التغذية الحارة أو الباردة داخل الجدار؛ يحدد بدقة بالسماعة الصوتية.",
  },
  {
    id: "s6",
    title: "نقص سريع في مياه الخزان الأرضي أو وجود رائحة كريهة وتغير في لون الماء",
    category: "عزل الخزانات",
    points: 35,
    estimatedLossLitersPerDay: 1500,
    recommendation: "تصدع في جسم الخزان الأرضي؛ يلزم تفريغ الخزان وفحصه ومعالجته بالعزل الإيبوكسي والبلوري.",
  },
];

const WATER_BILL_SOLUTIONS: BillStep[] = [
  {
    step: "الخطوة الأولى",
    title: "الفحص الشامل للعقار بأجهزة أساس الأمن الخليجي",
    description:
      "يقوم مهندسنا بفحص القراءات الفعلية لعداد المياه، الخزان الأرضي، العوامات، الشبكة الخارجية، وكافة الحمامات والمطابخ لتحديد مكان وحجم الهدر المائي بالضبط.",
    actionRequired: "حجز موعد فحص فني شامل في الخرج",
  },
  {
    step: "الخطوة الثانية",
    title: "الإصلاح الجذري وإيقاف نزيف المياه فوراً",
    description:
      "سواء كان السبب شرخاً في الخزان الأرضي (يتم عزله وترميمه) أو كسراً في ماسورة تحت البلاط (يتم إصلاحه بدون تكسير عشوائي)، نقوم بإيقاف التسرب نهائياً واختبار الشبكة.",
    actionRequired: "تنفيذ المعالجة الهندسية بضمان رسمي",
  },
  {
    step: "الخطوة الثالثة",
    title: "إصدار التقرير الفني الهندسي المعتمد والمختوم",
    description:
      "نزودك بتقرير فني رسمي مفصل يحتوي على بيانات العقار، رقم العداد، قراءات أجهزة الفحص قبل وبعد الإصلاح، صور التوثيق، وفاتورة الإصلاح الضريبية المعتمدة.",
    actionRequired: "استلام التقرير المعتمد من إدارتنا",
  },
  {
    step: "الخطوة الرابعة",
    title: "تقديم الاعتراض وطلب التسوية وعودة الفاتورة لطبيعتها",
    description:
      "يتم إرفاق التقرير الفني وفواتير الإصلاح عبر تطبيق أو فرع شركة المياه الوطنية لإثبات وجود تسرب خفي تم إصلاحه، مما يساعد في تسوية المبالغ المرتفعة وعودة الاستهلاك للحد الأدنى.",
    actionRequired: "توفير مالي مستدام وحماية للعقار",
  },
];

const LEAK_FAQS: LeakFAQ[] = [
  {
    category: "دقة الفحص والتكسير",
    question: "هل فعلاً يتم كشف تسربات المياه بدون أي تكسير نهائياً؟",
    answer:
      "نعم بكل تأكيد؛ عملية 'الكشف والفحص' تتم بنسبة 100% بدون تكسير على الإطلاق عبر تمرير الحساسات الصوتية والكاميرات الحرارية فوق البلاط والجدران. وعند تحديد نقطة العطل بالضبط، إذا تطلب الأمر استبدال كوع أو جلبة مكسورة تحت الأرض، يتم فتح 'بلاطة واحدة فقط' فوق مكان الكسر مباشرة دون المساس بباقي أرضية الحمام أو الحوش.",
  },
  {
    category: "فواتير المياه والتقارير",
    question: "فاتورة المياه ارتفعت فجأة إلى أكثر من 1000 ريال في الخرج، ما هو السبب غالباً؟",
    answer:
      "من واقع خبرتنا الميدانية في أكثر من 8,000 عقار بالخرج، فإن 85% من حالات الارتفاع الصادم في الفواتير يكون سببها 'الخزان الأرضي' (إما تشققات في جدران وأرضية الخزان تهرب المياه للتربة، أو تلف العوامة والمضخة)، ويلي ذلك كسور الخط الرئيسي المدفون في الحوش أو تسربات كراسي الحمامات الإفرنجية.",
  },
  {
    category: "الأسعار والتكلفة",
    question: "كم سعر كشف تسربات المياه بالخرج؟ وهل يخصم عند الإصلاح؟",
    answer:
      "نقدم في شركة أساس الأمن الخليجي أقل وأفضل سعر فحص إلكتروني شامل في الخرج، وفي حال اتفاق العميل معنا على تنفيذ أعمال الإصلاح أو العزل اللازمة، نقوم بتقديم خصم خاص جداً أو دمج رسوم الفحص ضمن تكلفة الإصلاح الإجمالية للتيسير على عملائنا.",
  },
  {
    category: "الضمان المعتمد",
    question: "ما هي مدة الضمان التي أحصل عليها بعد إصلاح التسرب أو عزل الخزان؟",
    answer:
      "نمنحك شهادة ضمان رسمية مكتوبة ومختومة؛ تبدأ من 5 سنوات على إصلاحات الشبكات والحمامات، وتصل إلى 10 سنوات كاملة على عزل الخزانات الأرضية وعزل الأسطح بالفوم والإيبوكسي، ويشمل الضمان المواد والمصنعية.",
  },
  {
    category: "مدة العمل",
    question: "كم يستغرق وقت الفحص والإصلاح؟ وهل نحتاج لمغادرة المنزل؟",
    answer:
      "عملية الفحص الشامل تستغرق ما بين 30 إلى 60 دقيقة فقط. ومعظم عمليات الإصلاح الموضعي في الشبكات أو الحمامات تنتهي في نفس اليوم خلال ساعتين إلى 3 ساعات، ولا تحتاج الأسرة لمغادرة المنزل نهائياً حيث نعمل بهدوء ونظافة تامة.",
  },
  {
    category: "تسربات الحمامات بدون تكسير",
    question: "هل يمكن معالجة تسرب الحمام للدور الأسفل بدون خلع السيراميك؟",
    answer:
      "إذا أظهر الفحص الإلكتروني أن مواسير التغذية المضغوطة سليمة تماماً، وأن التسرب ناتج عن فواصل البلاط (الترويبة) وتجمع المياه تحت السيراميك وحول الصفاية، فإننا نقوم بمعالجته جذرياً بدون خلع البلاط عبر تفريغ الفواصل وحقنها بمواد إيبوكسية عازلة للماء بنسبة 100% وعزل الصفاية وكرسي الحمام.",
  },
];

// ============================================================================
// 3. Main Component (المكون الرئيسي لصفحة كشف تسربات المياه)
// ============================================================================

export default function WaterLeakDetectionPage() {
  // States for Interactive Components
  const [activeHeroImage, setActiveHeroImage] = useState<number>(0);
  const [selectedDevice, setSelectedDevice] = useState<string>("aquaphon");
  const [selectedZone, setSelectedZone] = useState<string>("tanks");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(["s1", "s2"]);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Toggle symptom in diagnostic tool
  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate diagnostic results
  const totalRiskScore = Math.min(
    100,
    selectedSymptoms.reduce((acc, id) => {
      const sym = SYMPTOMS_CHECKLIST.find((s) => s.id === id);
      return acc + (sym ? sym.points : 0);
    }, 0)
  );

  const estimatedDailyLiters = selectedSymptoms.reduce((acc, id) => {
    const sym = SYMPTOMS_CHECKLIST.find((s) => s.id === id);
    return acc + (sym ? sym.estimatedLossLitersPerDay : 0);
  }, 0);

  const estimatedMonthlyCubicMeters = Math.round((estimatedDailyLiters * 30) / 1000);

  // Send Diagnostic Report via WhatsApp
  const sendDiagnosticToWhatsApp = () => {
    const chosenTitles = selectedSymptoms
      .map((id) => SYMPTOMS_CHECKLIST.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join("\n- ");

    const message = `السلام عليكم شركة أساس الأمن الخليجي،
قمت بإجراء التشخيص المبدئي لتسربات المياه عبر موقعكم:
📊 *مؤشر الخطورة:* ${totalRiskScore}%
💧 *الهدر المقدر:* ~${estimatedMonthlyCubicMeters} متر مكعب شهرياً
🔍 *العلامات الموجودة لدي:*
- ${chosenTitles || "أرغب في فحص شامل للعقار"}

أرجو التواصل معي لتحديد موعد فحص إلكتروني بدون تكسير في الخرج.`;

    window.open(
      `https://wa.me/966501206816?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const currentDeviceObj =
    DETECTION_DEVICES.find((d) => d.id === selectedDevice) || DETECTION_DEVICES[0];

  const currentZoneObj =
    LEAK_ZONES_DATA.find((z) => z.id === selectedZone) || LEAK_ZONES_DATA[0];

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden" dir="rtl">
      
      {/* =====================================================================
          SECTION 1: HERO SECTION WITH INTERACTIVE IMAGE SHOWCASE
      ===================================================================== */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#00BFFF]/20">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00BFFF]/10 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400 mb-8 bg-[#061124]/90 w-fit px-4 py-2 rounded-full border border-[#00BFFF]/30">
            <Link href="/" className="hover:text-[#00BFFF] transition-colors">
              الرئيسية
            </Link>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-gray-300">خدماتنا الاحترافية</span>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37] font-bold">كشف تسربات المياه بالخرج</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Column: Hero Copy & Conversion Triggers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <Sparkles className="w-4 h-4" />
                <span>الشركة المعتمدة الأولى في الخرج • فحص إلكتروني بدون تكسير</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                كشف تسربات المياه بالخرج{" "}
                <span className="text-[#00BFFF]">بدون تكسير</span> وبأحدث الأجهزة{" "}
                <span className="text-[#D4AF37]">الألمانية</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-xl leading-relaxed">
                هل تعاني من ارتفاع مفاجئ في فاتورة المياه؟ أو ظهور رطوبة وتصدعات في الأسقف والجدران؟ في{" "}
                <strong className="text-white">شركة أساس الأمن الخليجي</strong> نضع حداً نهائياً لنزيف المياه الخفي باستخدام أجهزة الأكوافون والكاميرات الحرارية وغاز النيتروجين بدقة{" "}
                <strong className="text-[#D4AF37]">99.6%</strong>، مع إصدار تقارير فنية معتمدة وضمان رسمي يصل إلى{" "}
                <strong className="text-[#00BFFF]">10 سنوات</strong>.
              </p>

              {/* Key Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3 bg-[#061124]/90 p-3.5 rounded-2xl border border-[#00BFFF]/30 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">كشف رقمي بدون تكسير</h2>
                    <p className="text-xs text-gray-400">تحديد الخلل في نطاق بلاطة واحدة</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-3.5 rounded-2xl border border-[#00BFFF]/30 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">تقارير معتمدة للمياه</h2>
                    <p className="text-xs text-gray-400">للاعتراض على الفواتير المرتفعة</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-3.5 rounded-2xl border border-[#00BFFF]/30 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">ضمان ذهبي 10 سنوات</h2>
                    <p className="text-xs text-gray-400">عقد رسمي مختوم شامل المواد والعمل</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-3.5 rounded-2xl border border-[#00BFFF]/30 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">وصول خلال 30 دقيقة</h2>
                    <p className="text-xs text-gray-400">طوارئ 24 ساعة في جميع أحياء الخرج</p>
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
                  <span>اطلب فحص التسربات عبر واتساب</span>
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

            {/* Left Column: Interactive 4-Image Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-4 sm:p-5 shadow-[0_0_40px_rgba(212,175,55,0.25)]">
                {/* Main Active Image */}
                <div
                  onClick={() => setLightboxImage(SERVICE_IMAGES[activeHeroImage])}
                  className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-[#00BFFF]/40 cursor-pointer group"
                >
                  <Image
                    src={SERVICE_IMAGES[activeHeroImage].src}
                    alt={SERVICE_IMAGES[activeHeroImage].title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030b1c] via-[#030b1c]/30 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#030b1c] font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-lg">
                    {SERVICE_IMAGES[activeHeroImage].tag}
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#030b1c]/80 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-5 h-5" />
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <span className="text-[#00BFFF] text-xs font-bold block mb-1">
                      الجهاز المستخدم: {SERVICE_IMAGES[activeHeroImage].deviceUsed}
                    </span>
                    <h3 className="text-white font-extrabold text-lg sm:text-xl">
                      {SERVICE_IMAGES[activeHeroImage].title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">
                      {SERVICE_IMAGES[activeHeroImage].subtitle}
                    </p>
                  </div>
                </div>

                {/* 4 Thumbnails Selector */}
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {SERVICE_IMAGES.map((img, index) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveHeroImage(index)}
                      className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeHeroImage === index
                          ? "border-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: INTERACTIVE LEAK DIAGNOSTIC & WATER LOSS CALCULATOR
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_40px_rgba(0,191,255,0.2)]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
                <Calculator className="w-4 h-4" />
                أداة التشخيص الذكي التفاعلية من أساس الأمن الخليجي
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                افحص علامات التسرب في منزلك واحسب <span className="text-[#D4AF37]">حجم الهدر المائي</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                قم بتحديد المشاكل أو العلامات التي تلاحظها في عقارك حالياً، وسيقوم النظام بتقدير درجة الخطورة وكمية المياه المفقودة شهرياً مع التوصية الهندسية المناسبة:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Symptoms Checkboxes */}
              <div className="lg:col-span-7 space-y-3.5">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  <span>اختر العلامات الظاهرة لديك (يمكنك اختيار أكثر من علامة):</span>
                </h3>

                {SYMPTOMS_CHECKLIST.map((sym) => {
                  const isChecked = selectedSymptoms.includes(sym.id);
                  return (
                    <div
                      key={sym.id}
                      onClick={() => toggleSymptom(sym.id)}
                      className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                        isChecked
                          ? "bg-[#030b1c] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                          : "bg-[#030b1c]/60 border-gray-800 hover:border-[#00BFFF]/50"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                          isChecked
                            ? "bg-[#D4AF37] border-[#D4AF37] text-[#030b1c]"
                            : "border-gray-600 bg-transparent"
                        }`}
                      >
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-[#00BFFF] bg-[#00BFFF]/10 px-2.5 py-0.5 rounded">
                            {sym.category}
                          </span>
                          <span className="text-xs text-gray-400">
                            هدر محتمل: ~{sym.estimatedLossLitersPerDay} لتر/يومياً
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-sm sm:text-base mb-1.5">
                          {sym.title}
                        </h4>
                        {isChecked && (
                          <p className="text-xs text-[#D4AF37] bg-[#D4AF37]/10 p-2.5 rounded-xl border border-[#D4AF37]/30 mt-2">
                            <strong>التوصية الهندسية:</strong> {sym.recommendation}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Diagnostic Output Dashboard */}
              <div className="lg:col-span-5 bg-[#030b1c] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 sticky top-28 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <div className="text-center pb-6 border-b border-gray-800">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    نتيجة التقييم الهندسي المبدئي
                  </span>
                  <div className="mt-4 flex items-center justify-center">
                    <div className="relative w-36 h-36 rounded-full border-8 border-[#061124] flex flex-col items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.4)] bg-gradient-to-br from-[#061124] to-[#0a1d3a]">
                      <span
                        className={`text-4xl font-black ${
                          totalRiskScore >= 60
                            ? "text-red-500"
                            : totalRiskScore >= 30
                            ? "text-[#D4AF37]"
                            : "text-[#00BFFF]"
                        }`}
                      >
                        {totalRiskScore}%
                      </span>
                      <span className="text-xs text-gray-300 font-bold mt-1">مؤشر الخطورة</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    {totalRiskScore >= 60 ? (
                      <span className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-400 border border-red-500/40 px-3.5 py-1 rounded-full text-xs font-extrabold">
                        <AlertTriangle className="w-4 h-4" />
                        حالة طارئة: تسرب نشط يتطلب فحصاً فورياً
                      </span>
                    ) : totalRiskScore >= 25 ? (
                      <span className="inline-flex items-center gap-1.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 px-3.5 py-1 rounded-full text-xs font-extrabold">
                        <Activity className="w-4 h-4" />
                        خطورة متوسطة: يوصى بالفحص لمنع تفاقم الضرر
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/40 px-3.5 py-1 rounded-full text-xs font-extrabold">
                        <CheckCircle2 className="w-4 h-4" />
                        اختر العلامات أعلاه لحساب نسبة الخطورة
                      </span>
                    )}
                  </div>
                </div>

                {/* Estimated Metrics */}
                <div className="py-6 space-y-4 border-b border-gray-800">
                  <div className="flex items-center justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-xs sm:text-sm text-gray-300">كمية المياه المهدرة يومياً:</span>
                    <span className="font-extrabold text-[#00BFFF] text-base">
                      {estimatedDailyLiters.toLocaleString()} لتر / يوم
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-xs sm:text-sm text-gray-300">الفقد الشهري المقدر بالمتر المكعب:</span>
                    <span className="font-extrabold text-[#D4AF37] text-base">
                      ~ {estimatedMonthlyCubicMeters} م³ / شهرياً
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-xs sm:text-sm text-gray-300">طريقة الكشف المقترحة:</span>
                    <span className="font-bold text-white text-xs sm:text-sm">
                      فحص إلكتروني بدون تكسير
                    </span>
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-6 space-y-3">
                  <button
                    onClick={sendDiagnosticToWhatsApp}
                    className="w-full bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send className="w-5 h-5" />
                    <span>إرسال نتيجة التشخيص للمهندس عبر واتساب</span>
                  </button>
                  <p className="text-[11px] text-gray-400 text-center">
                    سيقوم المهندس المختص بمراجعة حالتك وتحديد موعد الفحص فوراً
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: VISUAL DOCUMENTATION GALLERY (معرض الصور الأربعة التفاعلي)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              توثيق ميداني من مواقع العمل
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              تقنياتنا في <span className="text-[#00BFFF]">كشف ومعالجة التسربات</span> عن قرب
            </h2>
            <p className="text-gray-300 text-lg">
              اضغط على أي صورة لتكبيرها واستعراض التفاصيل الهندسية للأجهزة وطرق المعالجة التي نطبقها في الخرج
            </p>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICE_IMAGES.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="bg-[#061124]/95 border-2 border-[#D4AF37]/50 hover:border-[#00BFFF] rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(0,191,255,0.35)] transition-all duration-500 cursor-pointer group flex flex-col"
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061124] via-transparent to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-[#030b1c]/90 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold px-3.5 py-1.5 rounded-xl">
                    {item.tag}
                  </div>

                  <div className="absolute bottom-4 left-4 bg-[#00BFFF] text-[#030b1c] text-xs font-extrabold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>تكبير الصورة</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#00BFFF] mb-2">
                      التقنية المعتمدة: {item.deviceUsed}
                    </div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#D4AF37] text-sm font-semibold mb-3">{item.subtitle}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.technicalDetails}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-xs text-gray-400">شركة أساس الأمن الخليجي - الخرج</span>
                    <span className="text-xs font-bold text-[#D4AF37] group-hover:translate-x-[-4px] transition-transform">
                      عرض التفاصيل الكاملة ←
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: DEEP DIVE INTO ELECTRONIC DEVICES (موسوعة الأجهزة)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#00BFFF] font-bold text-sm bg-[#00BFFF]/10 px-4 py-1.5 rounded-full border border-[#00BFFF]/30">
              وداعاً للتخمين والتكسير العشوائي
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              الأجهزة الإلكترونية الأربعة التي <span className="text-[#D4AF37]">نفحص بها عقارك</span>
            </h2>
            <p className="text-gray-300 text-lg">
              نمتلك في شركة أساس الأمن الخليجي أحدث ترسانة من أجهزة كشف التسربات غير المدمرة (Non-Destructive)؛ اختر الجهاز لتتعرف على آلية عمله:
            </p>
          </div>

          {/* Device Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {DETECTION_DEVICES.map((dev) => {
              const isSelected = selectedDevice === dev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => setSelectedDevice(dev.id)}
                  className={`p-5 rounded-2xl text-right transition-all duration-300 border-2 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.6)] scale-[1.02]"
                      : "bg-[#061124]/90 text-white border-[#00BFFF]/30 hover:border-[#D4AF37]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`text-xs font-extrabold px-2.5 py-1 rounded-md ${
                        isSelected ? "bg-[#030b1c] text-[#D4AF37]" : "bg-[#00BFFF]/15 text-[#00BFFF]"
                      }`}
                    >
                      دقة {dev.accuracy}
                    </span>
                    <Cpu className={`w-5 h-5 ${isSelected ? "text-[#030b1c]" : "text-[#D4AF37]"}`} />
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg leading-snug">{dev.name}</h3>
                  <span
                    className={`text-xs mt-1 block font-semibold ${
                      isSelected ? "text-[#030b1c]/80" : "text-gray-400"
                    }`}
                  >
                    {dev.model}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Device Detailed View */}
          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Device Image & Quick Specs */}
              <div className="lg:col-span-5 space-y-5">
                <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-[#00BFFF]/40">
                  <Image
                    src={currentDeviceObj.image}
                    alt={currentDeviceObj.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030b1c] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 right-4 left-4 bg-[#030b1c]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#D4AF37]/40 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#00BFFF] block">بلد الصنع والتقنية</span>
                      <span className="text-sm font-extrabold text-white">{currentDeviceObj.origin}</span>
                    </div>
                    <div className="text-left">
                      <span className="text-xs text-gray-400 block">عمق الاختراق</span>
                      <span className="text-sm font-bold text-[#D4AF37]">{currentDeviceObj.maxDepth}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {currentDeviceObj.specs.map((sp, i) => (
                    <div
                      key={i}
                      className="bg-[#030b1c] p-3.5 rounded-xl border border-[#00BFFF]/20 text-center"
                    >
                      <span className="text-[11px] text-gray-400 block mb-1">{sp.label}</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#00BFFF]">{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Technical Explanation */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-lg border border-[#D4AF37]/30">
                    {currentDeviceObj.technologyType}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
                    {currentDeviceObj.name} ({currentDeviceObj.model})
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {currentDeviceObj.description}
                  </p>
                </div>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800 space-y-3">
                  <h4 className="font-bold text-[#00BFFF] text-sm sm:text-base flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#D4AF37]" />
                    <span>كيف يعمل الجهاز في موقع العميل؟</span>
                  </h4>
                  {currentDeviceObj.howItWorks.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-bold text-white text-sm mb-3">مثالي للفحص في الحالات التالية:</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {currentDeviceObj.bestFor.map((useCase, idx) => (
                      <span
                        key={idx}
                        className="bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-gray-200 text-xs sm:text-sm px-3.5 py-2 rounded-xl flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: COMPREHENSIVE LEAK ZONES ANATOMY (مناطق التسرب في المبنى)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              تشريح هندسي شامل للعقار
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              أخطر مناطق <span className="text-[#00BFFF]">تسربات المياه</span> وكيف نعالجها جذرياً
            </h2>
            <p className="text-gray-300 text-lg">
              اضغط على المنطقة التي تشك بوجود تسرب فيها لتتعرف على الأسباب الخفية، المخاطر الإنشائية، وطريقة المعالجة المعتمدة لدينا:
            </p>
          </div>

          {/* Zone Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {LEAK_ZONES_DATA.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`px-6 py-3.5 rounded-2xl font-extrabold text-sm sm:text-base transition-all border-2 ${
                  selectedZone === zone.id
                    ? "bg-[#00BFFF] text-[#030b1c] border-[#00BFFF] shadow-[0_0_25px_rgba(0,191,255,0.5)]"
                    : "bg-[#061124] text-gray-300 border-[#D4AF37]/40 hover:border-[#D4AF37]"
                }`}
              >
                {zone.title}
              </button>
            ))}
          </div>

          {/* Active Zone Content Card */}
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_35px_rgba(0,191,255,0.15)]">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-800">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-red-500/20 text-red-400 border border-red-500/40 text-xs font-extrabold px-3 py-1 rounded-full">
                    درجة الخطورة: {currentZoneObj.dangerLevel}
                  </span>
                  <span className="bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-extrabold px-3 py-1 rounded-full">
                    {currentZoneObj.warrantyPeriod}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {currentZoneObj.title}
                </h3>
              </div>

              <Link
                href="https://wa.me/966501206816"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-extrabold px-6 py-3 rounded-xl text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>اطلب فحص هذه المنطقة الآن</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Causes */}
              <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800">
                <h4 className="text-lg font-extrabold text-[#00BFFF] mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
                  <span>الأسباب الفنية الشائعة</span>
                </h4>
                <ul className="space-y-3">
                  {currentZoneObj.commonCauses.map((cause, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] mt-2 flex-shrink-0"></span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visible Signs */}
              <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800">
                <h4 className="text-lg font-extrabold text-[#D4AF37] mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#00BFFF]" />
                  <span>العلامات الظاهرة للعميل</span>
                </h4>
                <ul className="space-y-3">
                  {currentZoneObj.visibleSigns.map((sign, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hidden Damages */}
              <div className="bg-[#030b1c] p-6 rounded-2xl border border-red-900/40">
                <h4 className="text-lg font-extrabold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span>مخاطر إهمال الإصلاح</span>
                </h4>
                <ul className="space-y-3">
                  {currentZoneObj.hiddenDamages.map((dmg, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                      <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>{dmg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Engineering Solution Box */}
            <div className="bg-gradient-to-r from-[#030b1c] via-[#081832] to-[#030b1c] border-2 border-[#D4AF37] rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-extrabold text-[#D4AF37] uppercase">
                  بروتوكول المعالجة الجذرية في شركة أساس الأمن الخليجي:
                </span>
                <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
                  {currentZoneObj.ourSolution}
                </p>
                <p className="text-xs sm:text-sm text-[#00BFFF] pt-1">
                  <strong>طريقة الفحص المعتمدة:</strong> {currentZoneObj.inspectionMethod}
                </p>
              </div>

              <div className="relative w-full lg:w-56 h-36 rounded-xl overflow-hidden border border-[#D4AF37] flex-shrink-0">
                <Image
                  src={currentZoneObj.image}
                  alt={currentZoneObj.title}
                  fill
                  className="object-cover"
                  sizes="250px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: SOLVING HIGH WATER BILLS (حل مشكلة ارتفاع فاتورة المياه)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold">
                <TrendingDown className="w-4 h-4" />
                حلول معتمدة لخفض استهلاك وفواتير المياه
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                كيف نساعدك في حل مشكلة{" "}
                <span className="text-[#D4AF37]">ارتفاع فاتورة المياه</span> بالخرج؟
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                عندما تصلك رسالة بارتفاع فاتورة المياه إلى مبالغ باهظة، فإن السبب الحقيقي هو وجود تسرب خفي يعمل على مدار 24 ساعة (غالباً في الخزان الأرضي أو العوامة أو الشبكة المدفونة). نحن لا نكتفي بإصلاح العطل، بل نزودك بـ{" "}
                <strong className="text-white">تقرير فني هندسي معتمد</strong> يوثق حالة التسرب وإصلاحه لتقديمه للجهات المختصة.
              </p>

              <div className="bg-[#061124] border-r-4 border-[#00BFFF] p-5 rounded-2xl space-y-2">
                <h3 className="font-bold text-[#00BFFF] text-base">ماذا يتضمن تقريرنا الفني؟</h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                  <li>• قراءات أجهزة الفحص الرقمية ومعدل الفقد قبل وبعد الإصلاح.</li>
                  <li>• توصيف دقيق لمكان الكسر أو الشرخ في الخزان أو الأنابيب.</li>
                  <li>• بيان بالمواد المستخدمة في العزل والإصلاح مع ختم الشركة الرسمي.</li>
                </ul>
              </div>

              <Link
                href="https://wa.me/966501206816"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#00BFFF] hover:bg-[#D4AF37] text-[#030b1c] font-black px-8 py-4 rounded-2xl transition-all shadow-lg"
              >
                <FileText className="w-5 h-5" />
                <span>اطلب فحص وتقرير فاتورة المياه الآن</span>
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WATER_BILL_SOLUTIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#061124]/95 border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-3xl p-6 shadow-[0_0_20px_rgba(212,175,55,0.12)] flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#D4AF37] text-[#030b1c] text-xs font-black px-3 py-1 rounded-lg">
                        {item.step}
                      </span>
                      <span className="text-2xl font-black text-gray-700">0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-800 text-xs font-bold text-[#00BFFF] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>{item.actionRequired}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: REPAIR WITHOUT BREAKING TILES (تقنية العزل الكيميائي والترميم)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-[#061124] via-[#040d1f] to-[#061124] border-2 border-[#D4AF37] rounded-3xl p-8 lg:p-12 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[#00BFFF] font-bold text-sm bg-[#00BFFF]/10 px-4 py-1.5 rounded-full border border-[#00BFFF]/30">
                  تقنيات الإصلاح الذكي
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  كيف نصلح التسربات بأقل تدخل جراحي ودون تشويه سيراميك منزلك؟
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  يخشى الكثير من العملاء أن يؤدي إصلاح التسرب إلى تدمير أرضيات وجدران الحمام أو الحوش بالكامل. في{" "}
                  <strong className="text-[#D4AF37]">شركة أساس الأمن الخليجي</strong> نتبع منهجية دقيقة تنقسم إلى مسارين حسب نتيجة الفحص الإلكتروني:
                </p>

                <div className="space-y-4">
                  <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#00BFFF]/30">
                    <h3 className="text-lg font-extrabold text-[#00BFFF] mb-2">
                      المسار الأول: إذا كان التسرب من فواصل البلاط والصفايات (إصلاح بدون أي تكسير 100%)
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      نقوم بتفريغ الترويبة التالفة بالكامل بالصاروخ الدقيق، وتنظيف الفواصل، ثم حقنها بمادة الإيبوكسي العازل المائي (Epoxy Grout) المقاوم للأحماض والمنظفات، مع عزل رقبة الصفاية وكرسي الحمام بمواد بوليمرية مرنة تمنع نفاذ قطرة ماء واحدة تحت البلاط.
                    </p>
                  </div>

                  <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#D4AF37]/40">
                    <h3 className="text-lg font-extrabold text-[#D4AF37] mb-2">
                      المسار الثاني: إذا كان التسرب كسراً في ماسورة التغذية (إصلاح في نطاق بلاطة واحدة)
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      يحدد جهاز الأكوافون نقطة الكسر بدقة السنتيمتر. يقوم الفني بخلع البلاطة التي تقع فوق الكسر مباشرة فقط، ثم قص الوصلة المتضررة ولحام وصلة حرارية ألمانية أصلية، واختبارها بالضغط العالي، ثم تطبيق عزل مائي وإعادة تركيب البلاطة بتشطيب نظيف.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {SERVICE_IMAGES.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => setLightboxImage(img)}
                    className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 hover:border-[#00BFFF] cursor-pointer group"
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030b1c] via-transparent to-transparent"></div>
                    <span className="absolute bottom-2.5 right-2.5 left-2.5 text-xs font-bold text-white line-clamp-1">
                      {img.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: LOCAL COVERAGE IN AL-KHARJ (تغطية أحياء الخرج السريعة)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              سيارات فحص التسربات جاهزة في <span className="text-[#D4AF37]">كافة أحياء الخرج</span>
            </h2>
            <p className="text-gray-300 text-lg">
              أينما كان موقعك في السيح أو المراكز التابعة للخرج، تصلك ورشة الفحص المتنقلة خلال دقائق
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "حي الخزامى",
              "حي الورود",
              "حي النهضة",
              "حي الأندلس",
              "حي المصيف",
              "حي الريان",
              "حي المنتزه",
              "حي السلام",
              "حي السعادة",
              "حي الفيصلية",
              "حي الخالدية",
              "حي اليرموك",
              "حي مشرف",
              "حي العالية",
              "الدلم والهياثم",
            ].map((hood, idx) => (
              <div
                key={idx}
                className="bg-[#061124]/90 border border-[#D4AF37]/40 hover:border-[#00BFFF] rounded-2xl p-4 flex items-center gap-3 transition-all shadow-md"
              >
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <span className="font-bold text-white text-sm block">{hood}</span>
                  <span className="text-[11px] text-[#00BFFF]">فحص فوري 24/7</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS (الأسئلة الشائعة)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-[#00BFFF] font-bold text-sm bg-[#00BFFF]/10 px-4 py-1.5 rounded-full border border-[#00BFFF]/30">
              موسوعة الأسئلة والأجوبة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              الأسئلة الشائعة حول <span className="text-[#D4AF37]">كشف تسربات المياه</span>
            </h2>
            <p className="text-gray-300 text-lg">
              إجابات هندسية ووافية على أكثر الاستفسارات التي يطرحها عملاؤنا في محافظة الخرج
            </p>
          </div>

          <div className="space-y-4">
            {LEAK_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
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
                    onClick={() => setOpenFaq(isOpen ? null : index)}
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
          SECTION 10: RELATED SERVICES & FINAL CALL TO ACTION
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#061124] via-[#0a1d3b] to-[#061124] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <ShieldCheck className="w-4 h-4" />
                ضمان معتمد 10 سنوات • تقارير رسمية لشركة المياه
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                أوقف نزيف المياه واحمِ عقارك من التصدعات اليوم!
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
                كل يوم يتأخر فيه كشف التسرب يعني المزيد من الهدر المائي وارتفاع الفاتورة وتضرر الخرسانة. تواصل الآن مع مهندسي{" "}
                <span className="text-[#D4AF37] font-bold">شركة أساس الأمن الخليجي</span> ليصلك فريق الفحص الإلكتروني فوراً.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#e6c247] text-[#030b1c] font-black text-lg px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>اطلب الفحص عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#030b1c] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold text-lg px-10 py-5 rounded-2xl transition-all"
                >
                  <Phone className="w-6 h-6" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>

              {/* Quick Links to Complementary Services */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                <span className="text-gray-400 font-bold">خدمات مكملة قد تهمك:</span>
                <Link
                  href="/services/roof-insulation"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  عزل الأسطح بالفوم
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/tank-cleaning"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  غسيل وعزل الخزانات
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/restoration-and-construction"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  ترميم المباني والحمامات
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/sewage-clearing"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  تسليك المجاري بالضغط
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          LIGHTBOX MODAL FOR IMAGES (نافذة تكبير الصور الأربعة بالتفاصيل)
      ===================================================================== */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[150] bg-[#020612]/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            title="إغلاق"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#030b1c] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#030b1c] border-2 border-[#D4AF37] flex items-center justify-center transition-all z-[160]"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="relative w-full max-w-4xl bg-[#061124] rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[50vh] sm:h-[60vh] w-full bg-black">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#030b1c] border-t border-[#D4AF37]/40">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="bg-[#D4AF37] text-[#030b1c] text-xs font-extrabold px-3 py-1 rounded-md">
                  {lightboxImage.tag}
                </span>
                <span className="text-xs font-bold text-[#00BFFF]">
                  الأجهزة: {lightboxImage.deviceUsed}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {lightboxImage.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {lightboxImage.technicalDetails}
              </p>
              <Link
                href="https://wa.me/966501206816"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#030b1c] font-extrabold text-sm px-6 py-3 rounded-xl"
              >
                <Phone className="w-4 h-4" />
                <span>اطلب هذه الخدمة الآن عبر واتساب</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}