"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
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
  Sun,
  CloudRain,
  Building2,
  FileCheck,
  TrendingDown,
  Percent,
  Ruler,
  Flame,
  Lock,
  Activity,
} from "lucide-react";

// ============================================================================
// 1. Interfaces & Engineering Data Types (هياكل البيانات الهندسية لعزل الأسطح)
// ============================================================================

interface InsulationSystem {
  id: string;
  name: string;
  scientificName: string;
  categoryBadge: string;
  insulationFunction: "عزل مزدوج (مائي + حراري)" | "عزل مائي فائق" | "عزل حراري عاكس";
  thermalConductivity: string;
  densityOrThickness: string;
  waterResistance: string;
  lifespanYears: string;
  secApproved: boolean;
  overview: string;
  suitableRoofs: string[];
  applicationProtocol: string[];
  pros: string[];
  warrantyYears: number;
}

interface RoofSurfaceType {
  id: string;
  title: string;
  structureType: string;
  vulnerabilityLevel: "حرجة جداً للحرارة والأمطار" | "عالية لتسربات الفواصل" | "عالية للصدأ والحرارة";
  vulnerabilityColor: string;
  commonDefects: string[];
  recommendedSystem: string;
  recommendedThickness: string;
  preparationSteps: string[];
  expectedEnergySaving: string;
  warranty: string;
}

interface RoofLayerCrossSection {
  layerOrder: number;
  title: string;
  technicalSpec: string;
  materialUsed: string;
  engineeringFunction: string;
  qualityCheckNote: string;
  badgeColor: string;
}

interface ComparisonSystemRow {
  criterion: string;
  polyurethaneFoam: string;
  bitumenRolls: string;
  cementitiousAcrylic: string;
  traditionalTiles: string;
}

interface SECRequirementItem {
  code: string;
  title: string;
  standardValue: string;
  ourImplementation: string;
  clientBenefit: string;
}

interface KharjClimateSector {
  sectorName: string;
  summerPeakTemp: string;
  buildingTypes: string;
  frequentRoofProblems: string[];
  neighborhoods: string[];
  insulatedRoofsCount: number;
}

interface RoofFAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 2. Comprehensive Encyclopedic Constants (البيانات الكاملة لصفحة عزل الأسطح)
// ============================================================================

const INSULATION_SYSTEMS_DB: InsulationSystem[] = [
  {
    id: "polyurethane-foam",
    name: "عزل الفوم البولي يوريثان الأمريكي والألماني (Spray Foam)",
    scientificName: "Closed-Cell Rigid Polyurethane Foam + UV Acrylic TopCoat",
    categoryBadge: "النظام رقم #1 في المملكة والخرج",
    insulationFunction: "عزل مزدوج (مائي + حراري)",
    thermalConductivity: "0.022 W/m·K (الأقل توصيلاً للحرارة عالمياً)",
    densityOrThickness: "كثافة 40 - 45 كجم/م³ | سماكة 3 سم إلى 5 سم",
    waterResistance: "100% خلايا مغلقة غير منفذة للماء نهائياً",
    lifespanYears: "+25 سنة مع الصيانة الوقائية",
    secApproved: true,
    overview:
      "يُعد عزل الفوم البولي يوريثان المرشوش ثورة هندسية في حماية الأسطح في مناخ الخرج الصحراوي؛ فهو المادة الوحيدة التي تعمل كعازل مائي وعازل حراري وعازل صوتي في طبقة واحدة متجانسة (Monolithic Layer) بدون أي فواصل أو لحامات يمكن أن تتسرب منها مياه الأمطار.",
    suitableRoofs: [
      "الأسطح الخرسانية الجديدة والقديمة (قبل أو بعد البلاط).",
      "أسطح الشنكو والهناجر والمستودعات المعدنية والجمالونات.",
      "الأسطح المتعرجة ذات التمديدات والمواسير الكثيفة والمكيفات المركزية.",
    ],
    applicationProtocol: [
      "تنظيف السطح ميكانيكياً وبالهواء المضغوط وغسيله من الأتربة والزيوت تماماً.",
      "معالجة الشروخ الخرسانية وزوايا التقاء السطح مع جدار السترة (الرقبة).",
      "رش الفوم عبر ماكينة Graco Reactor الهيدروليكية بدرجة حرارة وضغط قياسيين بالسماكة المطلوبة (3 إلى 5 سم).",
      "تطبيق طبقة الحماية الأكريليكية المطاطية (UV Top Coat) لحماية الفوم من الأشعة فوق البنفسجية للشمس.",
    ],
    pros: [
      "يوفر حتى 40% من فاتورة الكهرباء الشهرية عبر منع انتقال حرارة الشمس للسقف.",
      "خفيف الوزن جداً على السقف ولا يمثل أي حمل إنشائي إضافي على الأعمدة.",
      "يغلف كافة المواسير والزوايا ويقضي على الجسور الحرارية ومناطق تجمع المياه.",
    ],
    warrantyYears: 10,
  },
  {
    id: "bitumen-membranes",
    name: "العزل المائي بالرولات البيتومينية والـ PVC المسلح",
    scientificName: "APP / SBS Modified Bituminous & PVC Waterproofing Membranes",
    categoryBadge: "العزل المائي الكلاسيكي المعتمد",
    insulationFunction: "عزل مائي فائق",
    thermalConductivity: "يُدمج مع ألواح الجفالي (Polystyrene) للعزل الحراري",
    densityOrThickness: "سماكة 4 ملم مسلح بالبوليستر (180 - 250 جم/م²)",
    waterResistance: "مقاومة هيدروستاتيكية مطلقة ضد غمر المياه",
    lifespanYears: "15 - 20 سنة تحت البلاط",
    secApproved: true,
    overview:
      "نظام العزل المائي الأساسي للمباني قيد الإنشاء في الخرج قبل تركيب البلاط أو في نظام السطح المقلوب. نستخدم لفائف البيتومين المعدل بالبوليمرات (APP/SBS) الوطنية والأوروبية المسلحة بألياف البوليستر المقاومة للثقب والتمزق وحرارة الجو.",
    suitableRoofs: [
      "أسطح الفلل والمباني الجديدة تحت الإنشاء (فوق صبة الميول الرغوية).",
      "أسطح الملاحق ودورات المياه والمطابخ الكبرى قبل التبليط.",
      "الأساسات والقواعد والقبو والجدران الاستنادية.",
    ],
    applicationProtocol: [
      "صب خرسانة الميول الرغوية (Foam Concrete) وتنعيمها وعمل زاوية مشطوفة (فيلتو) عند الجدران.",
      "دهان كامل السطح بطبقة البرايمر البيتوميني السائل لسد المسامات وتقوية الالتصاق.",
      "فرد ولحام لفائف البيتومين باللهب الحراري مع عمل تداخل (Overlap) لا يقل عن 10 سم بين الرولات.",
      "تركيب شريحة الألمنيوم (Flashing) أعلى الوزرة واختبار السطح بالغمر المائي لمدة 48 ساعة.",
    ],
    pros: [
      "قوة شد ومقاومة ميكانيكية عالية جداً ضد حركة العمالة وأوزان البلاط والدفان.",
      "ثبات عالٍ في درجات الحرارة المرتفعة بفضل تعديل البيتومين بمادة APP.",
      "يمكن دمجه مع ألواح البوليسترين الأزرق الممدد (Juffali) لتكوين نظام عزل متكامل.",
    ],
    warrantyYears: 10,
  },
  {
    id: "acrylic-elastomeric",
    name: "العزل المطاطي الأكريليكي والإيبوكسي للأسطح المبلطة",
    scientificName: "Elastomeric UV Reflective Acrylic & Polyurethane Liquid Membrane",
    categoryBadge: "عزل الأسطح المبلطة بدون تكسير",
    insulationFunction: "عزل مائي فائق",
    thermalConductivity: "عاكس لأشعة الشمس بنسبة 85% (Solar Reflectance)",
    densityOrThickness: "سماكة غشاء 1.5 إلى 2.5 ملم (مسلح بشبك فايبر)",
    waterResistance: "غشاء مطاطي مرن يغلق فواصل البلاط والشروخ",
    lifespanYears: "10 - 15 سنة",
    secApproved: true,
    overview:
      "الحل المثالي لأصحاب الفلل المسكونة في الخرج التي تعاني من تسرب مياه الأمطار عبر فواصل بلاط السطح القديم دون الرغبة في تكسير البلاط أو تغيير مظهر السطح. يشكل غشاءً مطاطياً ناصع البياض أو رمادياً مقاوماً للمشي وللشمس.",
    suitableRoofs: [
      "الأسطح المبلطة بالبلاط البلدي أو السيراميك التي تسرب مياه الأمطار.",
      "أسطح الملاحق والشقق العلوية التي تعاني من تشقق الفواصل والترويبة.",
      "الأسطح الخرسانية الناعمة التي تحتاج لعزل مائي وعكس لأشعة الشمس.",
    ],
    applicationProtocol: [
      "فتح وتفريغ فواصل البلاط التالفة وتنظيف السطح بالكامل بالماء المضغوط.",
      "معالجة الفواصل والشروخ بمعجون البولي يوريثان المرن (Sikaflex) وتطبيق برايمر إيبوكسي شفاف أو مائي.",
      "دهان الطبقة الأولى من العازل الأكريليكي المطاطي وفرد شبك الفايبر جلاس (Geotextile Mesh) لتسليح الفواصل.",
      "تطبيق طبقتين إضافيتين متعامدتين (Cross-Coating) للوصول للسماكة القياسية.",
    ],
    pros: [
      "يعزل السطح المبلط جذرياً بدون إزالة أو تكسير بلاطة واحدة.",
      "مرونة استطالة تصل إلى 400% فلا يتشقق مع تمدد وانكماش البلاط صيفاً وشتاءً.",
      "سطح أملس جميل المظهر قابل للغسيل والمشي عليه بسهولة.",
    ],
    warrantyYears: 8,
  },
  {
    id: "cementitious-crystalline",
    name: "العزل الأسمنتي البلوري والكيميائي ثنائي المكونات",
    scientificName: "Two-Component Polymer Modified Cementitious Waterproofing",
    categoryBadge: "مقاومة قصوى للرطوبة والمياه",
    insulationFunction: "عزل مائي فائق",
    thermalConductivity: "يُطبق كطبقة تأسيسية تحت البلاط أو الفوم",
    densityOrThickness: "طبقتين متعامدتين بسماكة 2 - 3 ملم",
    waterResistance: "يتغلغل داخل مسام الخرسانة ويمنع النفاذية",
    lifespanYears: "+15 سنة",
    secApproved: false,
    overview:
      "مركب كيميائي يتكون من بودرة أسمنتية خاصة وسائل بوليمري أكريليكي (مثل SikaTop Seal-107 و CIC). يتفاعل مع الخرسانة ليكون بلورات غير قابلة للذوبان تغلق المسامات الشعرية وتمنع تسرب المياه حتى تحت الضغط العالي.",
    suitableRoofs: [
      "الأسطح الخرسانية وأرضيات الحمامات والمطابخ قبل تركيب السيراميك.",
      "مزاريب تصريف الأمطار وأحواض الزراعة الخرسانية فوق الأسطح.",
      "معالجة مناطق الرطوبة حول قواعد الخزانات العلوية والمكيفات.",
    ],
    applicationProtocol: [
      "تخشين وصنفرة السطح الخرساني وإزالة أي شوائب أو بقايا لياسة ضعيفة.",
      "ترطيب السطح بالماء حتى التشبع السطحي الجاف (SSD Condition).",
      "خلط المركبين ميكانيكياً وتطبيق الوجه الأول بالفرشاة القاسية في اتجاه واحد.",
      "تطبيق الوجه الثاني في اتجاه عمودي بعد جفاف الوجه الأول (4 ساعات) وإجراء اختبار الماء.",
    ],
    pros: [
      "يتحد كيميائياً مع جسم الخرسانة فيصبح جزءاً لا يتجزأ منها ولا يتقشر.",
      "يسمح للخرسانة بالتنفس وخروج بخار الماء المحبوس مع منع دخول الماء السائل.",
      "مقاوم ممتاز للأملاح والكلوريدات والتآكل الكيميائي.",
    ],
    warrantyYears: 10,
  },
];

const ROOF_SURFACE_DIAGNOSTICS: RoofSurfaceType[] = [
  {
    id: "concrete-new",
    title: "الأسطح الخرسانية غير المبلطة (الجديدة أو المكشوفة)",
    structureType: "بلاطة خرسانية مسلحة (هوردي أو عادي) مع صبة ميول",
    vulnerabilityLevel: "حرجة جداً للحرارة والأمطار",
    vulnerabilityColor: "text-red-400 border-red-500/40 bg-red-500/10",
    commonDefects: [
      "امتصاص الخرسانة لحرارة الشمس طوال النهار وإشعاعها داخل غرف الدور العلوي ليلاً.",
      "تشرب مياه الأمطار عبر الشروخ الشعرية ومسام الخرسانة ووصولها لحديد التسليح.",
      "تجمع برك مياه حول المزاريب بسبب عدم انتظام الميول.",
    ],
    recommendedSystem: "عزل الفوم البولي يوريثان (كثافة 45 كجم) + طبقة حماية الأكريليك UV",
    recommendedThickness: "سماكة 3 سم إلى 5 سم حسب اشتراط كود البناء",
    preparationSteps: [
      "كنس وغسيل السطح بالماء المضغوط وإزالة زوائد الخرسانة.",
      "عمل رقبة زجاجية (فيلتو) عند التقاء السطح مع جدار السترة.",
      "رش الفوم المتجانس وتغطية كافة المواسير ثم طلاء طبقة الحماية الأكريليكية.",
    ],
    expectedEnergySaving: "توفير 35% إلى 42% من استهلاك مكيفات الدور العلوي",
    warranty: "10 سنوات ضمان رسمي شامل",
  },
  {
    id: "tiled-old",
    title: "الأسطح المبلطة القديمة (التي تعاني من تسرب الأمطار)",
    structureType: "بلاط بلدي أو سيراميك فوق دفان رملي",
    vulnerabilityLevel: "عالية لتسربات الفواصل",
    vulnerabilityColor: "text-[#D4AF37] border-[#D4AF37]/40 bg-[#D4AF37]/10",
    commonDefects: [
      "تآكل وتفكك الترويبة الأسمنتية بين البلاط بفعل الشمس الحارقة في الخرج.",
      "تسرب مياه الأمطار والغسيل إلى طبقة الرمل تحت البلاط واحتباسها لعدة أشهر.",
      "ظهور رطوبة وتقشر دهانات وتصدعات في سقف الدور الأسفل.",
    ],
    recommendedSystem: "العزل الأكريليكي المطاطي المسلح بالفايبر جلاس (أو رش الفوم فوق البلاط)",
    recommendedThickness: "4 طبقات متعامدة مع شبك تسليح فايبر جلاس كامل",
    preparationSteps: [
      "تفريغ كافة فواصل البلاط بالصاروخ وتنظيفها بالشفط والهواء المضغوط.",
      "حقن الفواصل والشروخ بمعجون البولي يوريثان المرن وتثبيت البلاط المتخلخل.",
      "طلاء البرايمر الإيبوكسي ثم تطبيق طبقات العزل المطاطي وشبك التسليح.",
    ],
    expectedEnergySaving: "إيقاف التسرب 100% بدون تكسير البلاط + خفض حرارة السطح بـ 12 درجة",
    warranty: "8 إلى 10 سنوات ضمان رسمي",
  },
  {
    id: "shinko-metal",
    title: "أسطح الشنكو، الهناجر، المستودعات، والملاحق المعدنية",
    structureType: "ألواح صاج مجلفن أو ألمنيوم مضلع (Corrugated Metal Sheets)",
    vulnerabilityLevel: "عالية للصدأ والحرارة",
    vulnerabilityColor: "text-[#00BFFF] border-[#00BFFF]/40 bg-[#00BFFF]/10",
    commonDefects: [
      "تحول المكان تحت الشنكو إلى فرن لاهب صيفاً بسبب التوصيل الحراري العالي للمعدن.",
      "تسرب مياه الأمطار من مناطق مسامير التثبيت وفواصل تراكب ألواح الصاج.",
      "صدأ وتآكل ألواح الشنكو وإصدار أصوات مزعجة جداً مع الرياح والأمطار.",
    ],
    recommendedSystem: "رش الفوم البولي يوريثان عالي الكثافة مباشرة فوق ألواح الشنكو",
    recommendedThickness: "سماكة 3 سم إلى 4 سم مع تغليف كامل للمسامير والفواصل",
    preparationSteps: [
      "غسيل ألواح الشنكو وإزالة الأتربة والصدأ السطحي وتثبيت الألواح المرتخية.",
      "معالجة الفتحات الكبيرة والفواصل بين الألواح.",
      "رش طبقة الفوم البولي يوريثان التي تلتصق بالمعدن بقوة فائقة وتلغي الفواصل تماماً، ثم دهان الأكريليك.",
    ],
    expectedEnergySaving: "عزل حراري ومائي وصوتي مذهل يخفض الحرارة بأكثر من 18 درجة مئوية",
    warranty: "10 سنوات ضمان ضد التسرب والتقشر",
  },
];

const ROOF_LAYERS_CROSS_SECTION: RoofLayerCrossSection[] = [
  {
    layerOrder: 1,
    title: "الطبقة التأسيسية: تنظيف ومعالجة البلاطة الخرسانية ورقبة الزجاجة",
    technicalSpec: "معالجة الشروخ + زاوية ميول 45° عند السترة",
    materialUsed: "مونة بوليمرية مسلحة + برايمر تأسيسي مانع للغبار",
    engineeringFunction: "تهيئة سطح نظيف وجاف تماماً لضمان التصاق كيميائي وميكانيكي بنسبة 100%.",
    qualityCheckNote: "يتم قياس رطوبة الخرسانة بجهاز Protimeter للتأكد من عدم حبس أي رطوبة.",
    badgeColor: "border-gray-500 text-gray-300",
  },
  {
    layerOrder: 2,
    title: "طبقة العزل المائي والحراري الرئيسية: الفوم البولي يوريثان (أو البيتومين)",
    technicalSpec: "كثافة 45 كجم/م³ | سماكة 3 إلى 5 سم بدون فواصل",
    materialUsed: "Closed-Cell Polyurethane Spray Foam (أمريكي/ألماني)",
    engineeringFunction: "منع نفاذ قطرة ماء واحدة للداخل + قطع الجسر الحراري لأشعة الشمس الصيفية.",
    qualityCheckNote: "يتم فحص سماكة الفوم وكثافته في كافة نقاط السطح للتأكد من التجانس وعدم وجود ثقوب.",
    badgeColor: "border-[#D4AF37] text-[#D4AF37]",
  },
  {
    layerOrder: 3,
    title: "طبقة الدرع الواقي: طلاء الأكريليك المطاطي المقاوم للأشعة (UV TopCoat)",
    technicalSpec: "سماكة 400 - 600 ميكرون (وجهين متعامدين)",
    materialUsed: "Elastomeric UV Acrylic Coating",
    engineeringFunction: "حماية طبقة الفوم من التآكل بفعل أشعة الشمس فوق البنفسجية وعكس الإشعاع الحراري.",
    qualityCheckNote: "تُطبق بعد جفاف الفوم تماماً مع الصعود على جدار السترة بارتفاع 20-30 سم.",
    badgeColor: "border-[#00BFFF] text-[#00BFFF]",
  },
  {
    layerOrder: 4,
    title: "طبقة الفلترة والحماية الميكانيكية (في الأسطح المعدة للتبليط أو الغمر)",
    technicalSpec: "وزن 150 جم/م² + اختبار غمر مائي 48 ساعة",
    materialUsed: "لفائف الجيوتكستايل (Geotextile Felt) غير المنسوجة",
    engineeringFunction: "حماية العزل أثناء اختبار الغمر بالماء أو عند وضع الدفان والبلاط فوقه.",
    qualityCheckNote: "لا يتم تسليم السطح للعميل إلا بعد نجاح اختبار الغمر المائي لصفايات المطر.",
    badgeColor: "border-emerald-400 text-emerald-400",
  },
];

const SYSTEMS_COMPARISON_TABLE: ComparisonSystemRow[] = [
  {
    criterion: "نوع العزل المقدم",
    polyurethaneFoam: "مزدوج (عزل مائي 100% + عزل حراري فائق في طبقة واحدة)",
    bitumenRolls: "عزل مائي فقط (يحتاج ألواح جفالي إضافية للعزل الحراري)",
    cementitiousAcrylic: "عزل مائي ممتاز + عاكس جزئي لأشعة الشمس",
    traditionalTiles: "ضعيف جداً (يتسرب الماء من فواصل البلاط وتخترقه الحرارة)",
  },
  {
    criterion: "وجود فواصل أو لحامات",
    polyurethaneFoam: "قطعة واحدة متصلة تماماً بدون أي فواصل أو لحامات (Seamless)",
    bitumenRolls: "يحتوي على لحامات تراكب كل 1 متر تتطلب دقة عالية باللهب",
    cementitiousAcrylic: "غشاء متصل يغطي الفواصل مع شبك الفايبر جلاس",
    traditionalTiles: "مئات الفواصل الأسمنتية التي تتشقق مع الشمس",
  },
  {
    criterion: "التوفير في فاتورة الكهرباء",
    polyurethaneFoam: "يوفر حتى 40% من استهلاك المكيفات (معتمد من شركة الكهرباء)",
    bitumenRolls: "لا يوفر في الكهرباء إلا إذا أُضيفت له ألواح عزل حراري",
    cementitiousAcrylic: "يوفر حوالي 15% - 20% بفضل اللون الأبيض العاكس",
    traditionalTiles: "صفر% (يمتص الحرارة ويحبسها في السقف)",
  },
  {
    criterion: "الوزن على سقف المبنى",
    polyurethaneFoam: "خفيف كالريشة (حوالي 1.5 كجم للمتر المربع فقط)",
    bitumenRolls: "متوسط الوزن (يتطلب صبة رغوية وبلاط فوقه)",
    cementitiousAcrylic: "خفيف جداً ولا يضيف أي أحمال على السقف",
    traditionalTiles: "ثقيل جداً (دفان رملي + مونة + بلاط يجهد السقف)",
  },
  {
    criterion: "سرعة الإنجاز والضمان",
    polyurethaneFoam: "إنجاز السطح في يوم واحد | ضمان رسمي 10 سنوات",
    bitumenRolls: "2 إلى 3 أيام عمل | ضمان رسمي 10 سنوات",
    cementitiousAcrylic: "يومان عمل | ضمان رسمي 8 إلى 10 سنوات",
    traditionalTiles: "أسبوع عمل | بدون ضمان ضد تسرب الفواصل",
  },
];

const SEC_STANDARDS_LIST: SECRequirementItem[] = [
  {
    code: "معامل التوصيل الحراري (U-Value)",
    title: "تحقيق المقاومة الحرارية القياسية للأسقف في المنطقة المناخية الأولى",
    standardValue: "أقل من 0.30 إلى 0.40 W/m²·K حسب كود البناء السعودي SBC 601",
    ourImplementation:
      "نرش الفوم البولي يوريثان بكثافة حقيقية لا تقل عن 40-45 كجم/م³ وبسماكة 3 إلى 5 سم لتحقيق عزل حراري يفوق المتطلبات القياسية.",
    clientBenefit: "اجتياز فحص العزل الحراري لشركة الكهرباء وتقليل عمل كومبريسور المكيفات للنصف.",
  },
  {
    code: "اختبار الغمر المائي (Flood Test)",
    title: "التحقق العملي من عدم نفاذية المياه قبل التسليم",
    standardValue: "غمر السطح بالماء بارتفاع 5 - 10 سم لمدة 48 ساعة متواصلة",
    ourImplementation:
      "نقوم بسد مزاريب الأمطار بسدادات اختبار خاصة، وملء السطح بالماء ومراقبة السقف السفلي ومستوى المياه للتأكد من العزل بنسبة 100%.",
    clientBenefit: "استلام شهادة الضمان بعد رؤية نجاح العزل بعينك على أرض الواقع.",
  },
  {
    code: "عزل الجسور الحرارية والوزرات",
    title: "تأمين نقاط التقاء السطح بجدران السترة ومواسير السطح",
    standardValue: "رفع العزل على جدار السترة (Parapet) بارتفاع لا يقل عن 25 سم",
    ourImplementation:
      "لا نترك زوايا السطح مكشوفة؛ بل نصعد بالعزل على السترة ونغلف قواعد الخزانات والمكيفات ومخارج السباكة بإحكام تام.",
    clientBenefit: "منع تسرب مياه الأمطار الجانبية من خلف طبقة العزل نهائياً.",
  },
];

const KHARJ_ROOF_SECTORS: KharjClimateSector[] = [
  {
    sectorName: "قطاع شمال الخرج (الفلل الجديدة والمباني تحت الإنشاء)",
    summerPeakTemp: "48°C - 51°C في الظل (أكثر من 68°C على خرسانة السطح المكشوفة)",
    buildingTypes: "فلل مودرن، دوبلكسات، وملاحق علوية حديثة",
    frequentRoofProblems: [
      "الحاجة لعزل مائي وحراري معتمد قبل التبليط أو كطبقة نهائية.",
      "ارتفاع حرارة غرف النوم في الدور الأول والملحق العلوي.",
      "عزل أسطح الملاحق ومزاريب تصريف السيول والأمطار.",
    ],
    neighborhoods: ["حي الخزامى", "حي الورود", "حي النهضة", "حي الأندلس", "حي المصيف", "حي العالية"],
    insulatedRoofsCount: 1950,
  },
  {
    sectorName: "قطاع وسط وغرب الخرج (السيح والأحياء السكنية والتجارية)",
    summerPeakTemp: "49°C مع تجمعات مطرية غزيرة في موسم الشتاء",
    buildingTypes: "فلل سكنية مبلطة، عمائر، مدارس، ومجمعات تجارية",
    frequentRoofProblems: [
      "تسرب مياه الأمطار من فواصل بلاط الأسطح القديمة إلى الأسقف الجبسية.",
      "تلف وتقشر طبقات العزل القديمة وحاجتها للتجديد بدون تكسير.",
      "عزل المناطق المحيطة بالخزانات العلوية ووحدات التكييف.",
    ],
    neighborhoods: ["حي المنتزه", "حي السلام", "حي الخالدية", "حي الفيصلية", "حي المحطة"],
    insulatedRoofsCount: 1720,
  },
  {
    sectorName: "قطاع شرق وجنوب الخرج والمنطقة الصناعية والمزارع",
    summerPeakTemp: "50°C مع رياح موسمية وعواصف ترابية",
    buildingTypes: "هناجر ومستودعات شنكو، مصانع، استراحات، وفلل",
    frequentRoofProblems: [
      "عزل أسطح الشنكو والهناجر بالفوم لمنع الحرارة الخانقة وتسرب المطر.",
      "حماية أسطح المستودعات والمصانع من الصدأ والتآكل.",
      "عزل مجالس الاستراحات والملاحق الخارجية.",
    ],
    neighborhoods: ["حي الريان", "حي السعادة", "حي اليرموك", "حي مشرف", "الدلم", "الهياثم", "اليمامة"],
    insulatedRoofsCount: 1480,
  },
];

const ROOF_FAQS: RoofFAQ[] = [
  {
    id: 1,
    category: "عزل الفوم البولي يوريثان",
    question: "لماذا يُعتبر عزل الفوم (البولي يوريثان) أفضل نوع لعزل الأسطح في جو الخرج؟",
    answer:
      "لأن جو الخرج يجمع بين حرارة الصيف الحارقة التي تتجاوز 48 مئوية وبين أمطار الشتاء الغزيرة. الفوم البولي يوريثان هو النظام الوحيد الذي يوفر 'عزلاً مزدوجاً' (مائي 100% + حراري فائق) في خطوة واحدة، كما أنه يُرش كطبقة واحدة متصلة بدون أي فواصل أو لحامات، ويغلف المواسير والزوايا، ويوفر حتى 40% من فاتورة الكهرباء.",
  },
  {
    id: 2,
    category: "عزل الأسطح المبلطة",
    question: "سطح منزلي مبلط ويتسرب منه ماء المطر للدور العلوي، هل يمكن عزله بدون تكسير البلاط؟",
    answer:
      "نعم بكل تأكيد؛ لا داعي إطلاقاً لتحمل تكاليف وفوضى تكسير البلاط. نقوم في شركة أساس الأمن الخليجي إما بتطبيق منظومة 'العزل الأكريليكي المطاطي المسلح بشبك الفايبر جلاس' فوق البلاط بعد تفريغ الفواصل وحقنها بالبولي يوريثان، أو برش طبقة الفوم فوق البلاط مباشرة مع طبقة الأكريليك الواقية، وكلا الحلين يوقف التسرب 100% بضمان 10 سنوات.",
  },
  {
    id: 3,
    category: "الكثافة والسماكة",
    question: "ما هي سماكة وكثافة عزل الفوم المعتمدة التي تنفذونها؟ وكيف أتأكد منها؟",
    answer:
      "المواصفة الهندسية القياسية المعتمدة لدى شركة الكهرباء وكود البناء السعودي هي كثافة تتراوح بين (40 إلى 45 كجم/م³) وبسماكة تبدأ من 3 سم وتصل إلى 5 سم حسب طلب العميل. مهندسنا المشرف يقوم بقياس السماكة أمامك في عدة نقاط من السطح بعد الرش، وتُسجل الكثافة والسماكة رسمياً داخل عقد الضمان.",
  },
  {
    id: 4,
    category: "حماية الفوم من الشمس",
    question: "هل يتأثر عزل الفوم بأشعة الشمس المباشرة أو المشي فوق السطح؟",
    answer:
      "مادة الفوم وحدها تتأثر بالأشعة فوق البنفسجية (UV) إذا تُركت مكشوفة؛ ولذلك نحن في شركة أساس الأمن الخليجي لا نسلم أي سطح فوم إلا بعد طلائه بطبقة حماية كثيفة من مادة 'الأكريليك المطاطي الواقي (Top Coat)' المقاوم للشمس والعوامل الجوية، مما يجعل السطح متيناً وقابلاً للمشي عليه لأغراض الصيانة.",
  },
  {
    id: 5,
    category: "عزل الشنكو والهناجر",
    question: "لدي ملحق أو مستودع سقفه 'شنكو' (صاج حديد) حار جداً ويسرب المطر، ما هو الحل؟",
    answer:
      "أفضل وأنجح حل لأسقف الشنكو هو رش الفوم البولي يوريثان بسماكة 3 إلى 4 سم مباشرة فوق الصاج. الفوم يلتصق بالمعدن بقوة هائلة، ويغلق كافة فتحات المسامير والفواصل بين الألواح فيمنع تسرب المطر نهائياً، ويحمي الحديد من الصدأ، ويخفض درجة الحرارة داخل المكان بأكثر من 15 إلى 18 درجة مئوية، كما يمنع صوت طقطقة المطر والرياح.",
  },
  {
    id: 6,
    category: "الأسعار والضمان",
    question: "كم سعر متر عزل الأسطح بالخرج؟ وما هي مدة الضمان؟",
    answer:
      "يختلف سعر المتر المربع باختلاف نوع العزل المختار (فوم بولي يوريثان، رولات بيتومين، عزل أكريليكي مطاطي، أو أسمنتي)، وسماكة الطبقة، ومساحة السطح الإجمالية (حيث نقدم خصومات خاصة للمساحات الكبيرة). جميع أعمالنا تشمل المواد الأصلية والمصنعية واختبار الغمر المائي، مع شهادة ضمان رسمية مختومة لمدة 10 سنوات.",
  },
];

// ============================================================================
// 3. Main Page Component (المكون الرئيسي لصفحة عزل أسطح)
// ============================================================================

export default function RoofInsulationPage() {
  // Interactive States
  const [selectedSystemId, setSelectedSystemId] = useState<string>("polyurethane-foam");
  const [selectedRoofTypeId, setSelectedRoofTypeId] = useState<string>("concrete-new");
  const [activeLayerOrder, setActiveLayerOrder] = useState<number>(2);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  // Interactive Roof Insulation & Energy Savings Calculator States
  const [calcRoofArea, setCalcRoofArea] = useState<number>(180);
  const [calcCurrentSurface, setCalcCurrentSurface] = useState<string>("سطح خرساني غير مبلط");
  const [calcInsulationType, setCalcInsulationType] = useState<string>(
    "عزل فوم بولي يوريثان (مائي + حراري)"
  );
  const [calcThicknessCm, setCalcThicknessCm] = useState<number>(3);
  const [calcMonthlySummerBill, setCalcMonthlySummerBill] = useState<number>(1200);
  const [calcNeighborhood, setCalcNeighborhood] = useState<string>("حي الخزامى");

  // Current Selected Data Objects
  const currentSystem =
    INSULATION_SYSTEMS_DB.find((s) => s.id === selectedSystemId) || INSULATION_SYSTEMS_DB[0];

  const currentRoofSurface =
    ROOF_SURFACE_DIAGNOSTICS.find((r) => r.id === selectedRoofTypeId) ||
    ROOF_SURFACE_DIAGNOSTICS[0];

  // Dynamic Calculations for Calculator
  const savingPercentage = calcInsulationType.includes("فوم")
    ? calcThicknessCm >= 4
      ? 0.4
      : 0.35
    : 0.2;

  const estimatedMonthlySavingSAR = Math.round(calcMonthlySummerBill * savingPercentage);
  const estimatedAnnualSavingSAR = estimatedMonthlySavingSAR * 7; // 7 hot months in Al-Kharj
  const estimatedTenYearSavingSAR = estimatedAnnualSavingSAR * 10;
  const executionDays = calcRoofArea <= 250 ? "يوم عمل واحد" : "يومان عمل";

  // Send Calculator Quote Request via WhatsApp
  const handleSendRoofQuoteWhatsApp = () => {
    const message = `السلام عليكم شركة أساس الأمن الخليجي،
أرغب في الحصول على عرض سعر لعزل سطح في الخرج:
🏠 *حالة السطح الحالية:* ${calcCurrentSurface}
🛡️ *نظام العزل المطلوب:* ${calcInsulationType}
📐 *مساحة السطح التقريبية:* ${calcRoofArea} متر مربع
📏 *السماكة المطلوبة:* ${calcThicknessCm} سم (مع طبقة حماية الأكريليك)
📍 *الحي بالخرج:* ${calcNeighborhood}
⚡ *التوفير المتوقع بالكهرباء:* ~${estimatedMonthlySavingSAR} ريال شهرياً صيفاً

أرجو التواصل معي لتحديد موعد معاينة السطح ورفع المقاسات.`;

    window.open(
      `https://wa.me/966501206816?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden" dir="rtl">
      
      {/* =====================================================================
          SECTION 1: THERMAL & WATERPROOFING HERO SECTION (بدون صور)
      ===================================================================== */}
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
            <span className="text-gray-300">أنظمة العزل المعتمدة</span>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37] font-bold">شركة عزل أسطح بالخرج (فوم ومائي وحراري)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Column: Hero Copy & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <ThermometerSnowflake className="w-4 h-4" />
                <span>عزل معتمد لدى شركة الكهرباء وكود البناء السعودي • ضمان 10 سنوات</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                شركة <span className="text-[#00BFFF]">عزل أسطح</span> بالخرج.. حماية مزدوجة من الأمطار وحرارة الصيف الحارقة
              </h1>

              <p className="text-gray-300 text-base sm:text-xl leading-relaxed">
                احمِ سقف منزلك من تسربات مياه الأمطار وتآكل الحديد، واخفض فاتورة الكهرباء بنسبة تصل إلى{" "}
                <strong className="text-[#D4AF37]">40%</strong>. في{" "}
                <strong className="text-white">شركة أساس الأمن الخليجي</strong> ننفذ أحدث أنظمة{" "}
                <strong className="text-[#00BFFF]">
                  عزل الفوم البولي يوريثان، الرولات البيتومينية، والعزل المطاطي الأكريليكي للأسطح المبلطة والخرسانية والشنكو
                </strong>{" "}
                بمواد ألمانية وأمريكية أصلية مع اختبار الغمر المائي وشهادة ضمان رسمية لمدة{" "}
                <strong className="text-[#D4AF37]">10 سنوات</strong>.
              </p>

              {/* 4 Core Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">عزل حراري يوفر 40% بالكهرباء</h2>
                    <p className="text-xs text-gray-400">منع انتقال حرارة الشمس للدور العلوي</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <CloudRain className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">عزل مائي 100% بدون فواصل</h2>
                    <p className="text-xs text-gray-400">حماية مطلقة من سيول وأمطار الشتاء</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">عزل فوق البلاط والشنكو والخرسانة</h2>
                    <p className="text-xs text-gray-400">حلول مخصصة لكل سطح بدون تكسير</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">ضمان رسمي مختوم 10 سنوات</h2>
                    <p className="text-xs text-gray-400">شامل المواد والمصنعية والصيانة</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons with Explicit Title Attributes */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تواصل عبر واتساب لطلب معاينة وتسعير عزل الأسطح بالخرج"
                  className="flex items-center gap-3 bg-[#D4AF37] hover:bg-[#e5c247] text-[#030b1c] font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:scale-105 text-base sm:text-lg"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>اطلب معاينة وتسعير السطح عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  title="اتصل هاتفياً بشركة عزل أسطح بالخرج على الرقم 0501206816"
                  className="flex items-center gap-3 bg-[#061124] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold px-7 py-4 rounded-2xl transition-all duration-300 text-base sm:text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>
            </div>

            {/* Left Column: Thermal Barrier Simulation Dashboard (Zero Images) */}
            <div className="lg:col-span-5">
              <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-[0_0_45px_rgba(212,175,55,0.25)] relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                      <ThermometerSnowflake className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-[#00BFFF] font-bold block">
                        محاكاة العزل الحراري والمائي بالخرج
                      </span>
                      <h3 className="text-lg font-extrabold text-white">
                        كفاءة درع الفوم البولي يوريثان
                      </h3>
                    </div>
                  </div>
                  <span className="bg-[#D4AF37] text-[#030b1c] text-xs font-black px-3 py-1 rounded-lg">
                    SBC 601
                  </span>
                </div>

                {/* Before vs After Temperature Comparison */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-950/30 p-4 rounded-2xl border border-red-500/40 text-center">
                    <span className="text-xs text-gray-300 block mb-1">حرارة خرسانة السطح بدون عزل</span>
                    <span className="text-3xl font-black text-red-400" dir="ltr">
                      68°C
                    </span>
                    <span className="text-[11px] text-red-300 block mt-1">
                      نفاذ حراري مستمر للغرف
                    </span>
                  </div>

                  <div className="bg-emerald-950/30 p-4 rounded-2xl border border-emerald-500/40 text-center">
                    <span className="text-xs text-gray-300 block mb-1">حرارة السقف بعد عزل الفوم</span>
                    <span className="text-3xl font-black text-[#00BFFF]" dir="ltr">
                      26°C
                    </span>
                    <span className="text-[11px] text-emerald-400 block mt-1">
                      برودة مستقرة وتوفير 40%
                    </span>
                  </div>
                </div>

                {/* Technical Specs Bars */}
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800 space-y-3.5 mb-6 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">كثافة الفوم القياسية:</span>
                    <span className="text-[#D4AF37] font-extrabold">40 - 45 كجم / م³ (معتمد)</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-800 pt-2.5">
                    <span className="text-gray-400">معامل التوصيل الحراري:</span>
                    <span className="text-[#00BFFF] font-extrabold" dir="ltr">
                      0.022 W/m·K
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-800 pt-2.5">
                    <span className="text-gray-400">نسبة الخلايا المغلقة (منع الماء):</span>
                    <span className="text-emerald-400 font-extrabold">&gt; 96% Closed-Cell</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-800 pt-2.5">
                    <span className="text-gray-400">طبقة الحماية العلوية:</span>
                    <span className="text-white font-bold">أكريليك مطاطي مقاوم للـ UV</span>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-xs text-gray-400">
                    يتم التنفيذ بأحدث ماكينات الرش الهيدروليكية الأمريكية Graco Reactor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: 4 APPROVED INSULATION SYSTEMS (موسوعة أنظمة العزل الأربعة)
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
              <Layers className="w-4 h-4" />
              تقنيات عزل عالمية معتمدة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              أنظمة <span className="text-[#D4AF37]">عزل الأسطح</span> الأربعة في شركة أساس الأمن الخليجي
            </h2>
            <p className="text-gray-300 text-lg">
              نوفر كافة أنظمة العزل المائي والحراري المعتمدة في المملكة؛ اختر النظام لاستعراض مواصفاته الفنية وخطوات تطبيقه:
            </p>
          </div>

          {/* System Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {INSULATION_SYSTEMS_DB.map((sys) => {
              const isSelected = selectedSystemId === sys.id;
              return (
                <button
                  key={sys.id}
                  onClick={() => setSelectedSystemId(sys.id)}
                  title={`استعراض تفاصيل ${sys.name}`}
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
                      ضمان {sys.warrantyYears} سنوات
                    </span>
                    <ShieldCheck
                      className={`w-5 h-5 ${isSelected ? "text-[#030b1c]" : "text-[#D4AF37]"}`}
                    />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">{sys.name}</h3>
                </button>
              );
            })}
          </div>

          {/* Active System Detailed Card */}
          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-800">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-extrabold px-3 py-1 rounded-full">
                    {currentSystem.categoryBadge}
                  </span>
                  <span className="bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/30 text-xs font-bold px-3 py-1 rounded-full">
                    الوظيفة: {currentSystem.insulationFunction}
                  </span>
                  {currentSystem.secApproved && (
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-extrabold px-3 py-1 rounded-full">
                      ✓ معتمد لدى شركة الكهرباء
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {currentSystem.name}
                </h3>
                <span className="text-xs text-gray-400 font-mono" dir="ltr">
                  {currentSystem.scientificName}
                </span>
              </div>

              <Link
                href="https://wa.me/966501206816"
                target="_blank"
                rel="noopener noreferrer"
                title={`طلب تسعير ${currentSystem.name} عبر واتساب`}
                className="bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>اطلب تسعير هذا العزل الآن</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Specs & Suitable Roofs */}
              <div className="lg:col-span-5 space-y-6">
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  {currentSystem.overview}
                </p>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#00BFFF]/30 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-gray-800 pb-2.5">
                    <span className="text-gray-400">الكثافة والسماكة:</span>
                    <span className="font-bold text-[#D4AF37]">{currentSystem.densityOrThickness}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2.5">
                    <span className="text-gray-400">العزل الحراري:</span>
                    <span className="font-bold text-[#00BFFF]">{currentSystem.thermalConductivity}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2.5">
                    <span className="text-gray-400">مقاومة نفاذ المياه:</span>
                    <span className="font-bold text-emerald-400">{currentSystem.waterResistance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">العمر الافتراضي:</span>
                    <span className="font-bold text-white">{currentSystem.lifespanYears}</span>
                  </div>
                </div>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <h4 className="font-extrabold text-[#00BFFF] text-sm mb-3">
                    الأسطح المثالية لتطبيق هذا النظام:
                  </h4>
                  <ul className="space-y-2">
                    {currentSystem.suitableRoofs.map((rf, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span>{rf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Protocol & Pros */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="bg-[#030b1c] p-6 sm:p-8 rounded-2xl border-2 border-[#D4AF37]/40">
                  <h4 className="text-xl font-extrabold text-[#D4AF37] mb-5 flex items-center gap-2">
                    <Wrench className="w-6 h-6 text-[#00BFFF]" />
                    <span>مراحل التنفيذ القياسية في الموقع:</span>
                  </h4>
                  <div className="space-y-3.5">
                    {currentSystem.applicationProtocol.map((step, idx) => (
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

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-emerald-500/30">
                  <h4 className="font-extrabold text-emerald-400 text-base mb-3">
                    أبرز المميزات والفوائد لمالك العقار:
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {currentSystem.pros.map((pro, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-200">
                        <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: ROOF SURFACE SELECTOR (تشخيص السطح: خرساني، مبلط، شنكو)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              حلول مخصصة لكل نوع سقف
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              اختر طبيعة <span className="text-[#00BFFF]">سطح مبناك الحالي</span> واعرف الطريقة الصحيحة لعزله
            </h2>
            <p className="text-gray-300 text-lg">
              سواء كان سطحك خرسانياً جديداً، أو مبلطاً قديماً يسرب المطر، أو سقف هنجر وملحق شنكو؛ لدينا الحل الهندسي المخصص له:
            </p>
          </div>

          {/* 3 Surface Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {ROOF_SURFACE_DIAGNOSTICS.map((surf) => {
              const isSelected = selectedRoofTypeId === surf.id;
              return (
                <button
                  key={surf.id}
                  onClick={() => setSelectedRoofTypeId(surf.id)}
                  title={`عرض طريقة عزل ${surf.title}`}
                  className={`p-6 rounded-2xl text-right border-2 transition-all ${
                    isSelected
                      ? "bg-[#00BFFF] text-[#030b1c] border-[#00BFFF] shadow-[0_0_25px_rgba(0,191,255,0.5)]"
                      : "bg-[#061124] text-white border-[#D4AF37]/40 hover:border-[#D4AF37]"
                  }`}
                >
                  <span
                    className={`text-xs font-extrabold px-2.5 py-1 rounded-md block w-fit mb-2 ${
                      isSelected ? "bg-[#030b1c] text-[#D4AF37]" : "bg-[#D4AF37]/15 text-[#D4AF37]"
                    }`}
                  >
                    {surf.warranty}
                  </span>
                  <h3 className="font-extrabold text-base sm:text-lg">{surf.title}</h3>
                </button>
              );
            })}
          </div>

          {/* Selected Surface Details */}
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/50 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-800">
              <div>
                <span
                  className={`text-xs font-extrabold px-3.5 py-1 rounded-full border ${currentRoofSurface.vulnerabilityColor}`}
                >
                  درجة الحساسية: {currentRoofSurface.vulnerabilityLevel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                  {currentRoofSurface.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  التكوين الإنشائي: {currentRoofSurface.structureType}
                </p>
              </div>

              <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#D4AF37]/40 text-right">
                <span className="text-xs text-[#00BFFF] font-bold block">العائد المباشر للعميل:</span>
                <span className="text-sm sm:text-base font-extrabold text-[#D4AF37]">
                  {currentRoofSurface.expectedEnergySaving}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Common Defects */}
              <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800">
                <h4 className="font-extrabold text-red-400 text-base mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span>المشاكل الشائعة في هذا السطح:</span>
                </h4>
                <ul className="space-y-3">
                  {currentRoofSurface.commonDefects.map((def, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>{def}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparation & Execution */}
              <div className="bg-[#030b1c] p-6 rounded-2xl border border-[#00BFFF]/30">
                <h4 className="font-extrabold text-[#00BFFF] text-base mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#D4AF37]" />
                  <span>خطوات التجهيز والتطبيق:</span>
                </h4>
                <ul className="space-y-3">
                  {currentRoofSurface.preparationSteps.map((prep, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00BFFF] mt-1 flex-shrink-0" />
                      <span>{prep}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Spec Box */}
              <div className="bg-[#030b1c] p-6 rounded-2xl border border-[#D4AF37]/50 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-gray-400 block mb-1">النظام الهندسي الموصى به:</span>
                    <p className="text-base font-extrabold text-[#D4AF37]">
                      {currentRoofSurface.recommendedSystem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block mb-1">السماكة والمواصفة القياسية:</span>
                    <p className="text-sm font-bold text-white">
                      {currentRoofSurface.recommendedThickness}
                    </p>
                  </div>
                </div>

                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`طلب عزل ${currentRoofSurface.title} عبر واتساب`}
                  className="mt-6 w-full bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black py-3.5 px-4 rounded-xl text-center text-sm transition-all"
                >
                  احجز معاينة لهذا السطح بالخرج
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: CSS INTERACTIVE 4-LAYER CROSS SECTION (المخطط الطبقي للعزل)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#00BFFF] font-bold text-sm bg-[#00BFFF]/10 px-4 py-1.5 rounded-full border border-[#00BFFF]/30">
              التشريح الهندسي لطبقات عزل السطح
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              المخطط الطبقي الرباعي <span className="text-[#D4AF37]">لعزل الأسطح القياسي</span>
            </h2>
            <p className="text-gray-300 text-lg">
              اضغط على أي طبقة من الطبقات الأربع لتتعرف على المواد المكونة لها وكيف نختبر جودتها قبل التسليم:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-3.5">
              {ROOF_LAYERS_CROSS_SECTION.map((lyr) => {
                const isSelected = activeLayerOrder === lyr.layerOrder;
                return (
                  <div
                    key={lyr.layerOrder}
                    onClick={() => setActiveLayerOrder(lyr.layerOrder)}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-[#061124] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)] translate-x-[-8px]"
                        : "bg-[#061124]/60 border-gray-800 hover:border-[#00BFFF]/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl font-black text-lg flex items-center justify-center border ${
                          isSelected
                            ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37]"
                            : "bg-[#030b1c] text-[#00BFFF] border-[#00BFFF]/30"
                        }`}
                      >
                        0{lyr.layerOrder}
                      </div>
                      <div>
                        <span className="text-xs text-[#00BFFF] font-bold block">
                          {lyr.technicalSpec}
                        </span>
                        <h3 className="font-extrabold text-white text-sm sm:text-base">
                          {lyr.title}
                        </h3>
                      </div>
                    </div>
                    <ArrowLeft
                      className={`w-5 h-5 ${isSelected ? "text-[#D4AF37]" : "text-gray-600"}`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-6">
              {ROOF_LAYERS_CROSS_SECTION.filter((l) => l.layerOrder === activeLayerOrder).map(
                (activeLyr) => (
                  <div
                    key={activeLyr.layerOrder}
                    className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.2)] space-y-6"
                  >
                    <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                      <span className="bg-[#D4AF37] text-[#030b1c] font-black text-xs px-3.5 py-1.5 rounded-lg">
                        الطبقة رقم {activeLyr.layerOrder} من 4
                      </span>
                      <span className={`text-xs font-bold px-3 py-1 rounded border ${activeLyr.badgeColor}`}>
                        {activeLyr.technicalSpec}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeLyr.title}
                    </h3>

                    <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#00BFFF]/30">
                      <span className="text-xs text-gray-400 block mb-1">المادة المعتمدة:</span>
                      <span className="text-base sm:text-lg font-extrabold text-[#D4AF37]">
                        {activeLyr.materialUsed}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[#00BFFF] mb-2">الوظيفة الهندسية:</h4>
                      <p className="text-gray-200 text-base leading-relaxed">
                        {activeLyr.engineeringFunction}
                      </p>
                    </div>

                    <div className="bg-emerald-950/30 border border-emerald-500/40 p-4 rounded-xl text-xs sm:text-sm text-emerald-300">
                      <strong>معيار ضبط الجودة:</strong> {activeLyr.qualityCheckNote}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: INTERACTIVE ENERGY SAVING & ROOF QUOTE CALCULATOR (الحاسبة)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_45px_rgba(0,191,255,0.2)]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
                <Calculator className="w-4 h-4" />
                حاسبة عزل الأسطح وتوفير فاتورة الكهرباء
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                احسب <span className="text-[#D4AF37]">توفيرك المالي في الكهرباء</span> واطلب تسعير سطحك الآن
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                عزل الفوم يسترد تكلفته بالكامل من خلال خفض استهلاك المكيفات في صيف الخرج؛ جرب الحاسبة التفاعلية:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Inputs */}
              <div className="lg:col-span-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      1. طبيعة السطح الحالي:
                    </label>
                    <select
                      value={calcCurrentSurface}
                      onChange={(e) => setCalcCurrentSurface(e.target.value)}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none"
                    >
                      <option value="سطح خرساني غير مبلط">سطح خرساني غير مبلط (جديد/مكشوف)</option>
                      <option value="سطح مبلط قديم يسرب المطر">سطح مبلط قديم يسرب المطر</option>
                      <option value="سطح شنكو / هنجر / ملحق معدني">سطح شنكو / هنجر / ملحق معدني</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      2. نظام العزل المطلوب:
                    </label>
                    <select
                      value={calcInsulationType}
                      onChange={(e) => setCalcInsulationType(e.target.value)}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#00BFFF] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none"
                    >
                      <option value="عزل فوم بولي يوريثان (مائي + حراري)">
                        عزل فوم بولي يوريثان (مائي + حراري) + أكريليك
                      </option>
                      <option value="عزل مائي رولات بيتومين مسلح">
                        عزل مائي رولات بيتومين مسلح (4 ملم)
                      </option>
                      <option value="عزل مطاطي أكريليكي فوق البلاط">
                        عزل مطاطي أكريليكي مسلح بالفايبر فوق البلاط
                      </option>
                      <option value="عزل أسمنتي بلوري ثنائي المكونات">
                        عزل أسمنتي بلوري ثنائي المكونات
                      </option>
                    </select>
                  </div>
                </div>

                {/* Area Slider */}
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-bold text-gray-200">
                      3. مساحة السطح التقريبية بالمتر المربع:
                    </label>
                    <span className="bg-[#D4AF37] text-[#030b1c] font-black px-3.5 py-1 rounded-lg text-sm">
                      {calcRoofArea} م²
                    </span>
                  </div>
                  <input
                    type="range"
                    min={30}
                    max={1000}
                    step={10}
                    value={calcRoofArea}
                    onChange={(e) => setCalcRoofArea(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-gray-800 rounded-lg"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>30 م² (ملحق)</span>
                    <span>300 م² (فيلا متوسطة)</span>
                    <span>1000 م² (قصر / مستودع)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      4. سماكة الفوم / العزل المطلوبة:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[3, 4, 5].map((cm) => (
                        <button
                          key={cm}
                          type="button"
                          onClick={() => setCalcThicknessCm(cm)}
                          title={`اختيار سماكة ${cm} سم`}
                          className={`py-3 rounded-xl text-xs font-extrabold border transition-all ${
                            calcThicknessCm === cm
                              ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37]"
                              : "bg-[#030b1c] text-gray-300 border-gray-800"
                          }`}
                        >
                          {cm} سم قياسي
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      5. متوسط فاتورة الكهرباء صيفاً (بالريال):
                    </label>
                    <input
                      type="number"
                      min={200}
                      max={10000}
                      step={100}
                      value={calcMonthlySummerBill}
                      onChange={(e) => setCalcMonthlySummerBill(Number(e.target.value))}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#00BFFF] rounded-xl px-4 py-3 text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Outputs Dashboard */}
              <div className="lg:col-span-5 bg-[#030b1c] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 space-y-5 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <div className="border-b border-gray-800 pb-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#00BFFF] font-bold block">
                      دراسة الجدوى الهندسية لسطحك
                    </span>
                    <h3 className="text-xl font-extrabold text-white">مساحة {calcRoofArea} متر مربع</h3>
                  </div>
                  <TrendingDown className="w-7 h-7 text-emerald-400" />
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">الوفر الشهري المتوقع بالكهرباء:</span>
                    <span className="font-black text-emerald-400 text-base">
                      ~ {estimatedMonthlySavingSAR} ريال / شهرياً
                    </span>
                  </div>

                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">إجمالي التوفير خلال 10 سنوات:</span>
                    <span className="font-black text-[#D4AF37] text-base">
                      + {estimatedTenYearSavingSAR.toLocaleString()} ريال
                    </span>
                  </div>

                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">مدة التنفيذ في الموقع:</span>
                    <span className="font-bold text-[#00BFFF]">{executionDays}</span>
                  </div>

                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">الضمان الرسمي المرفق:</span>
                    <span className="font-bold text-white">10 سنوات شهادة مختومة</span>
                  </div>
                </div>

                <button
                  onClick={handleSendRoofQuoteWhatsApp}
                  title="إرسال بيانات السطح للحصول على السعر النهائي عبر واتساب"
                  className="w-full bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>احصل على عرض السعر النهائي عبر واتساب</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: COMPREHENSIVE COMPARISON TABLE & SEC STANDARDS
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              مقارنة شاملة بين <span className="text-[#00BFFF]">أنظمة عزل الأسطح</span> المختلفة
            </h2>
            <p className="text-gray-300 text-lg">
              جدول هندسي يوضح الفروقات الدقيقة بين الفوم البولي يوريثان، الرولات البيتومينية، العزل الأكريليكي، والبلاط التقليدي:
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-[#D4AF37] bg-[#061124]/95 shadow-[0_0_35px_rgba(212,175,55,0.15)] mb-20">
            <table className="w-full text-right border-collapse min-w-[850px]">
              <thead>
                <tr className="bg-[#030b1c] border-b-2 border-[#D4AF37]">
                  <th className="p-5 text-white font-extrabold text-sm sm:text-base">وجه المقارنة</th>
                  <th className="p-5 text-[#D4AF37] font-extrabold text-sm sm:text-base bg-[#D4AF37]/10 border-x border-[#D4AF37]/30">
                    عزل الفوم البولي يوريثان (الأفضل)
                  </th>
                  <th className="p-5 text-[#00BFFF] font-extrabold text-sm sm:text-base">
                    رولات البيتومين المسلح
                  </th>
                  <th className="p-5 text-emerald-400 font-extrabold text-sm sm:text-base border-x border-gray-800">
                    العزل المطاطي الأكريليكي
                  </th>
                  <th className="p-5 text-gray-400 font-bold text-sm sm:text-base">
                    البلاط التقليدي بدون عزل
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-xs sm:text-sm">
                {SYSTEMS_COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#030b1c]/60 transition-colors">
                    <td className="p-5 font-bold text-white">{row.criterion}</td>
                    <td className="p-5 bg-[#D4AF37]/5 border-x border-[#D4AF37]/20 text-white font-semibold">
                      {row.polyurethaneFoam}
                    </td>
                    <td className="p-5 text-gray-200">{row.bitumenRolls}</td>
                    <td className="p-5 border-x border-gray-800 text-gray-200">
                      {row.cementitiousAcrylic}
                    </td>
                    <td className="p-5 text-gray-400">{row.traditionalTiles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SEC Standards Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SEC_STANDARDS_LIST.map((sec, i) => (
              <div
                key={i}
                className="bg-[#061124]/90 border-2 border-[#00BFFF]/40 rounded-3xl p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-[#00BFFF]/15 text-[#00BFFF] text-xs font-extrabold px-3 py-1 rounded-lg mb-3">
                    {sec.code}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mb-2">{sec.title}</h3>
                  <p className="text-xs text-[#D4AF37] font-bold mb-4">
                    المعيار القياسي: {sec.standardValue}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {sec.ourImplementation}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-800 text-xs text-emerald-400 font-bold">
                  ✓ {sec.clientBenefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: AL-KHARJ SECTORS COVERAGE (تغطية قطاعات وأحياء الخرج)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              تغطية ميدانية شاملة لعزل الأسطح في <span className="text-[#D4AF37]">كافة أحياء الخرج</span>
            </h2>
            <p className="text-gray-300 text-lg">
              أسطول سيارات رش الفوم والعزل المائي يغطي جميع الأحياء السكنية والمناطق الصناعية والمزارع بالخرج:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {KHARJ_ROOF_SECTORS.map((sec, idx) => (
              <div
                key={idx}
                className="bg-[#061124]/95 border-2 border-[#D4AF37]/40 hover:border-[#00BFFF] rounded-3xl p-7 flex flex-col justify-between shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-[#D4AF37] text-[#030b1c] text-xs font-black px-3 py-1 rounded-lg">
                      +{sec.insulatedRoofsCount} سطح معزول
                    </span>
                    <span className="text-xs text-red-400 font-bold">
                      ذروة الحرارة: {sec.summerPeakTemp.split(" ")[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3">{sec.sectorName}</h3>
                  <p className="text-xs text-[#00BFFF] font-semibold mb-4">{sec.buildingTypes}</p>

                  <div className="space-y-2 mb-6">
                    {sec.frequentRoofProblems.map((prb, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span>{prb}</span>
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

      {/* =====================================================================
          SECTION 8: COMPREHENSIVE FAQS (الأسئلة الشائعة حول عزل الأسطح)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-[#00BFFF] font-bold text-sm bg-[#00BFFF]/10 px-4 py-1.5 rounded-full border border-[#00BFFF]/30">
              موسوعة الأسئلة الشائعة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              كل ما تود معرفته عن <span className="text-[#D4AF37]">عزل الأسطح والفوم بالخرج</span>
            </h2>
          </div>

          <div className="space-y-4">
            {ROOF_FAQS.map((faq) => {
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

      {/* =====================================================================
          SECTION 9: FINAL CALL TO ACTION & SEO-COMPLETE INTERNAL LINKS
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#061124] via-[#0a1d3b] to-[#061124] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <ShieldCheck className="w-4 h-4" />
                معاينة ورفع مقاسات مجاني • ضمان رسمي مكتوب 10 سنوات
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                اعزل سطح منزلك اليوم ووفر حتى 40% من فاتورة الكهرباء!
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
                تواصل الآن مع قسم العزل المائي والحراري في{" "}
                <span className="text-[#D4AF37] font-bold">شركة أساس الأمن الخليجي</span> بالخرج للحصول على أفضل سعر للمتر المربع بأجود المواد المعتمدة.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="راسل شركة أساس الأمن الخليجي عبر واتساب لطلب عزل الأسطح"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#e6c247] text-[#030b1c] font-black text-lg px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>اطلب تسعير السطح عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  title="اتصال مباشر بقسم عزل الأسطح في الخرج 0501206816"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#030b1c] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold text-lg px-10 py-5 rounded-2xl transition-all"
                >
                  <Phone className="w-6 h-6" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>

              {/* Internal Links with Explicit Title Attributes to Prevent SEO Warning */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                <span className="text-gray-400 font-bold">تصفح خدماتنا المتكاملة بالخرج:</span>
                <Link
                  href="/services/water-leak-detection"
                  title="خدمة كشف تسربات المياه بالخرج بدون تكسير"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  كشف تسربات المياه
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/tank-cleaning"
                  title="خدمة غسيل وتعقيم وعزل الخزانات بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  عزل وغسيل الخزانات
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/restoration-and-construction"
                  title="خدمة ترميم وبناء وصيانة المباني بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  ترميم وبناء المباني
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/portfolio"
                  title="مشاهدة فيديوهات أعمال شركة أساس الأمن الخليجي"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  معرض أعمالنا بالفيديو
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/about"
                  title="من نحن - تعرف على شركة أساس الأمن الخليجي"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  من نحن
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/contact"
                  title="تواصل مع شركة أساس الأمن الخليجي بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}