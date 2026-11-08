"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Droplets,
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
  RefreshCw,
  ShieldAlert,
  TrendingDown,
  Ruler,
  Percent,
} from "lucide-react";

// ============================================================================
// 1. Interfaces & Engineering Data Types (هياكل البيانات الهندسية لغسيل الخزانات)
// ============================================================================

interface TankProblemProfile {
  id: string;
  title: string;
  tankType: string;
  hazardLevel: "خطر صحي وإنشائي أقصى" | "تلوث بكتيري وطحلبي عالي" | "هدر مائي وارتفاع فاتورة" | "تأكسد حراري وتكلس";
  hazardBadgeColor: string;
  waterQualityImpact: string;
  recommendedTreatment: string;
  visibleSymptoms: string[];
  healthAndStructuralRisks: string[];
  engineeringProtocol: string[];
  executionTime: string;
  warrantyPeriod: string;
}

interface TankMaterialSystem {
  id: string;
  name: string;
  scientificSpec: string;
  categoryBadge: string;
  purpose: string;
  safetyCertification: string;
  thicknessOrDosage: string;
  lifespanOrProtection: string;
  overview: string;
  applicationSteps: string[];
  compatibleTanks: string[];
  keyBenefits: string[];
}

interface TankCleaningStage {
  stageOrder: number;
  title: string;
  timeRequired: string;
  contaminationLevel: number;
  purityAndSterilization: number;
  equipmentUsed: string;
  technicalDescription: string;
  statusBadge: string;
  themeColor: string;
}

interface TankCategoryDivision {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  commonChallenges: string[];
  specializedProcedure: {
    stepName: string;
    stepDetail: string;
  }[];
  maintenanceSchedule: string;
  deliverables: string[];
}

interface TankComparisonRow {
  criterion: string;
  asasProfessionalSystem: string;
  randomUnskilledWorkers: string;
  criticalNote: string;
}

interface KharjTankSector {
  sectorName: string;
  waterSupplyNature: string;
  frequentTankIssues: string[];
  neighborhoods: string[];
  servicedTanksCount: number;
  responseSpeed: string;
}

interface TankFAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 2. Comprehensive Encyclopedic Constants (البيانات الموسوعية الكاملة)
// ============================================================================

const TANK_PROBLEMS_DATABASE: TankProblemProfile[] = [
  {
    id: "ground-tank-cracks-contamination",
    title: "تشققات الخزان الخرساني الأرضي وتراكم الحمأة والطحالب الخضراء",
    tankType: "الخزانات الأرضية الخرسانية المسلحة (تحت الحوش)",
    hazardLevel: "خطر صحي وإنشائي أقصى",
    hazardBadgeColor: "text-red-500 border-red-500/50 bg-red-500/10",
    waterQualityImpact: "ارتفاع العكارة + تلوث بكتيري + دخول مياه سطحية مالحة",
    recommendedTreatment: "غسيل ميكانيكي + ترميم الشروخ والرقبة + عزل إيبوكسي غذائي 3 طبقات",
    visibleSymptoms: [
      "تغير واضح في لون أو رائحة أو طعم المياه الخارجة من الحنفيات والدش.",
      "ظهور طبقة لزجة خضراء أو سوداء (طحالب وبكتيريا) على جدران الخزان الداخلية.",
      "ترسب كميات من الرمل والطين والصدأ في قاع الخزان الأرضي وحول صمام السحب (الرداد).",
      "نقص سريع في منسوب مياه الخزان وارتفاع مفاجئ في فاتورة شركة المياه.",
    ],
    healthAndStructuralRisks: [
      "الإصابة بالنزلات المعوية، تساقط الشعر، والتهابات الجلد والعيون نتيجة البكتيريا والفطريات.",
      "تسرب المياه الجوفية أو مياه البيارات المجاورة إلى داخل خزان الشرب عبر الشروخ الشعرية.",
      "صدأ وتآكل حديد تسليح سقف وجدران الخزان مما يهدد بانهيار سقف الخزان تحت ثقل السيارات بالحوش.",
    ],
    engineeringProtocol: [
      "سحب وتفريغ المياه الملوثة بالكامل عبر مضخات غاطسة عالية القدرة وشفط الرواسب الطينية من القاع.",
      "غسيل الجدران والأرضية والسقف بماكينات ضخ المياه العالي (180 بار) والفرش الدورانية لإزالة الطحالب والكلس.",
      "فحص جسم الخزان هندسياً، فتح الشروخ والتعشيش ومعالجتها بمونة الجراوت والسيكا غير القابلة للانكماش.",
      "تطبيق طبقتين من العزل الأسمنتي البلوري متبوعة بطبقتين من الإيبوكسي الغذائي الأزرق (Food Grade)، ثم التعقيم الكلوري المعاير.",
    ],
    executionTime: "2 إلى 3 ساعات للغسيل والتعقيم | يومان في حال العزل الشامل",
    warrantyPeriod: "10 سنوات ضمان رسمي على العزل وعدم التسرب",
  },
  {
    id: "upper-fiberglass-bacterial",
    title: "تكلس وتطحلب الخزانات العلوية (الفايبر جلاس والبولي إيثيلين)",
    tankType: "الخزانات العلوية البلاستيكية والفايبر جلاس فوق السطح",
    hazardLevel: "تلوث بكتيري وطحلبي عالي",
    hazardBadgeColor: "text-[#D4AF37] border-[#D4AF37]/50 bg-[#D4AF37]/10",
    waterQualityImpact: "تفاعل حراري + نمو بكتيريا الليجونيلا والطحالب الضوئية",
    recommendedTreatment: "غسيل هيدروليكي ناعم + تعقيم بايروكسيد وهيبوكلوريت معاير + إحكام الغطاء",
    visibleSymptoms: [
      "سخونة شديدة للمياه صيفاً مع ظهور رائحة كريهة تشبه رائحة الركود أو العفونة.",
      "فقدان أو كسر غطاء الخزان العلوي مما يسمح بدخول الأتربة، العواصف الرملية، والحشرات والطيور.",
      "انسداد فلاتر الغسالات، السخانات، وشطافات الحمامات بالرواسب الكلسية والرمال.",
    ],
    healthAndStructuralRisks: [
      "نفاذ أشعة الشمس عبر جدران الخزانات الرديئة أو غير المعزولة يحفز تكاثر الطحالب السامة يومياً.",
      "تحلل البلاستيك الداخلي في الخزانات غير المعتمدة نتيجة حرارة شمس الخرج التي تتجاوز 50 درجة.",
    ],
    engineeringProtocol: [
      "إغلاق محبس نزول الشبكة وتفريغ الخزان العلوي وسحب الرواسب المتراكمة في القاع بالشفط المائي.",
      "تنظيف الجدران الداخلية بإسفنج وفرش ناعمة مخصصة لا تخدش طبقة الجلكوت الملساء للفايبر جلاس.",
      "رش وتطهير كامل الخزان بمحلول التعقيم الصحي المعتمد (50 جزء في المليون) وتركه للمدة القانونية للتفاعل.",
      "شطف الخزان بالماء النقي عدة مرات، قياس نسبة الكلور والملوحة (TDS)، وتأمين غطاء الخزان بإحكام.",
    ],
    executionTime: "45 إلى 75 دقيقة لكل خزان علوي",
    warrantyPeriod: "شهادة تعقيم صحية + جدولة متابعة كل 6 أشهر",
  },
  {
    id: "neck-float-leakage",
    title: "تسربات رقبة الخزان الأرضي وتلف العوامة والمضخة",
    tankType: "منطقة فتحة الخزان (الرقبة) والتوصيلات الميكانيكية",
    hazardLevel: "هدر مائي وارتفاع فاتورة",
    hazardBadgeColor: "text-[#00BFFF] border-[#00BFFF]/50 bg-[#00BFFF]/10",
    waterQualityImpact: "دخول مياه غسيل الحوش والأمطار والحشرات لداخل الخزان",
    recommendedTreatment: "ترميم وعزل رقبة الخزان + استبدال العوامة بأخرى إلكترونية/نحاسية أصلية",
    visibleSymptoms: [
      "فيضان المياه من فتحة الخزان الأرضي إلى الحوش نتيجة تعليق أو كسر العوامة.",
      "تسرب مياه غسيل الحوش ومياه الأمطار من تحت غطاء الخزان إلى مياه الشرب النظيفة.",
      "وجود شروخ وفراغات في البلوك أو الرقبة الأسمنتية أعلى سقف الخزان الأرضي.",
      "دخول الصراصير، النمل، والغبار من فجوات غطاء الخزان غير المحكم.",
    ],
    healthAndStructuralRisks: [
      "تلوث مباشر وفوري لمياه الخزان بالمنظفات الكيميائية ومخلفات الحوش.",
      "ارتفاع فاتورة المياه الشهرية بشكل مضاعف بسبب الهدر المستمر من الفائض والرقبة.",
    ],
    engineeringProtocol: [
      "تكسير اللياسة الهشة حول رقبة الخزان وتعبئة الفجوات بمونة أسمنتية بوليمرية مسلحة وعزلها إيبوكسياً.",
      "رفع مستوى شفة رقبة الخزان عن منسوب بلاط الحوش لمنع دخول مياه الغسيل والأمطار نهائياً.",
      "تركيب غطاء خزان حديد مجلفن أو فايبر جلاس مزدوج مزود بإطار مطاطي (Rubber Gasket) وقفل أمان.",
      "تركيب عوامة ميكانيكية إيطالية أصلية أو عوامة كهربائية أوتوماتيكية مع ضبط منسوب الإغلاق.",
    ],
    executionTime: "90 إلى 120 دقيقة شاملة العزل والتركيب",
    warrantyPeriod: "5 إلى 10 سنوات ضمان شامل",
  },
  {
    id: "new-tank-pre-commissioning",
    title: "تطهير وتعقيم الخزانات الجديدة قبل السكن (إزالة مخلفات البناء)",
    tankType: "الخزانات الخرسانية والعلوية في الفلل والمباني الجديدة بالخرج",
    hazardLevel: "تأكسد حراري وتكلس",
    hazardBadgeColor: "text-emerald-400 border-emerald-400/50 bg-emerald-400/10",
    waterQualityImpact: "وجود بقايا أسمنت، أخشاب شدة، زيوت، وأملاح بناء كاوية",
    recommendedTreatment: "تنظيف تأسيسي عميق + معادلة القلوية + عزل إيبوكسي وتعقيم أولي",
    visibleSymptoms: [
      "وجود بقايا أخشاب، مسامير، أتربة، وقطع خرسانية في قاع الخزان بعد انتهاء المقاول.",
      "ارتفاع قلوية المياه (pH > 9) وظهور رغوة أو ملمس صابوني بسبب تفاعل الماء مع الخرسانة الجديدة.",
      "رائحة مواد كيميائية أو دهانات داخل الخزان الجديد قبل الاستخدام.",
    ],
    healthAndStructuralRisks: [
      "سحب مضخة المياه (الدينمو) للشوائب والرمال والأسمنت يؤدي لاحتراق المضخة وانسداد شبكة السباكة الجديدة.",
      "استخدام المياه القلوية غير المعقمة يسبب تهيجاً شديداً للبشرة وتلفاً لسخانات المياه.",
    ],
    engineeringProtocol: [
      "النزول الميداني لإزالة كافة مخلفات البناء الصلبة، الأخشاب، وبقايا الأسمنت الملتصق بالأرضية.",
      "غسيل كامل الخزان بالمنظفات الحمضية المخففة الآمنة لمعادلة قلوية الخرسانة وإزالة الأملاح.",
      "فحص سلامة العزل المائي للخزان (أو تنفيذ عزل إيبوكسي أزرق معتمد إذا لم يكن معزولاً).",
      "التعقيم البكتيري الشامل قبل ضخ المياه لشبكة الفيلا الجديدة لأول مرة.",
    ],
    executionTime: "2 إلى 3 ساعات",
    warrantyPeriod: "شهادة جاهزية ونقاء مياه معتمدة",
  },
];

const TANK_MATERIALS_SYSTEMS: TankMaterialSystem[] = [
  {
    id: "food-grade-epoxy",
    name: "العزل الإيبوكسي الغذائي الأزرق المعتمد لمياه الشرب",
    scientificSpec: "Solvent-Free Food Grade Epoxy Coating (Sikagard-62 / Fosroc)",
    categoryBadge: "المعيار الذهبي لعزل الخزانات",
    purpose: "عزل مائي كلي + منع تكون الطحالب والبكتيريا على جدران الخزان",
    safetyCertification: "معتمد من SASO وهيئة الغذاء والدواء ومختبرات المياه العالمية (WRAS)",
    thicknessOrDosage: "سماكة 400 إلى 500 ميكرون (وجهين إلى 3 أوجه متعامدة)",
    lifespanOrProtection: "+15 سنة حماية متواصلة",
    overview:
      "مادة راتنجية إيبوكسية ثنائية المكونات خالية تماماً من المذيبات السامة. عند دهانها داخل الخزان الخرساني تشكل طبقة زجاجية زرقاء ملساء فائقة الصلابة، تغلق مسام الخرسانة بنسبة 100% وتمنع التصاق الطحالب أو الفطريات.",
    applicationSteps: [
      "صنفرة وتخشين جدران الخزان الخرسانية وتنظيفها وتجفيفها تماماً من الرطوبة.",
      "معالجة كافة الشروخ وزوايا التقاء الأرضية بالجدران بمونة إيبوكسية (Sikadur-31).",
      "خلط مركبي الإيبوكسي الغذائي آلياً وتطبيق الطبقة الأولى بالرولات أو الرش اللاهوائي (Airless Spray).",
      "تطبيق الطبقة الثانية النهائية وترك الخزان للجفاف والتصلب التام قبل الغسيل والتعبئة.",
    ],
    compatibleTanks: ["الخزانات الأرضية الخرسانية", "الخزانات العلوية الخرسانية", "خزانات المصانع والمدارس والمجمعات"],
    keyBenefits: [
      "آمن صحياً 100%؛ لا يغير طعم أو لون أو رائحة مياه الشرب نهائياً.",
      "يمنع تسرب مياه الخزان للتربة ويحمي حديد التسليح من الصدأ والتآكل.",
      "يجعل عملية غسيل الخزان مستقبلاً سهلة جداً بفضل سطحه الأملس غير المسامي.",
    ],
  },
  {
    id: "crystalline-cementitious",
    name: "العزل الأسمنتي البلوري التفاعلي (ضد ضغط المياه العكسي)",
    scientificSpec: "Crystalline Capillary Waterproofing (SikaTop Seal-107 / Xypex)",
    categoryBadge: "الطبقة التأسيسية الحاسمة",
    purpose: "التغلغل داخل مسام الخرسانة ومنع التسرب الإيجابي والسلبي",
    safetyCertification: "معتمد لمنشآت مياه الشرب وخالٍ من الكلوريدات",
    thicknessOrDosage: "طبقتين متعامدتين بسماكة 2.5 إلى 3 ملم",
    lifespanOrProtection: "يندمج مدى الحياة مع جسم الخرسانة",
    overview:
      "مركب أسمنتي بوليمري يتفاعل كيميائياً مع الرطوبة ومكونات الخرسانة ليولّد ملايين البلورات الإبرية الدقيقة داخل الشعيرات والمسام الخرسانية، مما يغلقها تماماً أمام حركة المياه من الداخل للخارج أو من التربة للداخل.",
    applicationSteps: [
      "فتح أماكن التعشيش وتقشير المحارة الضعيفة داخل الخزان الأرضي.",
      "ترطيب الخرسانة بالماء النظيف لفتح المسام الشعرية لاستقبال المادة البلورية.",
      "طلاء الطبقة الأولى بفرشاة خشنة في اتجاه أفقي لضمان التغلغل العميق.",
      "طلاء الطبقة الثانية في اتجاه رأسي بعد 4 ساعات، ويمكن تطبيق الإيبوكسي فوقه كطبقة نهائية.",
    ],
    compatibleTanks: ["الخزانات الأرضية القديمة والجديدة", "خزانات المياه الزراعية والمسابح", "غرف المضخات تحت الأرض"],
    keyBenefits: [
      "يتحمل ضغط المياه الجوفية العكسي (Negative Water Pressure) دون أن ينفصل عن الجدار.",
      "يعالج الشروخ الشعرية الدقيقة ذاتياً (Self-Healing) حتى عرض 0.4 ملم.",
      "يمثل قاعدة تأسيسية صلبة ومثالية تحت طبقة الإيبوكسي الأزرق.",
    ],
  },
  {
    id: "calibrated-chlorination",
    name: "منظومة التعقيم الكيميائي والبيولوجي المعاير (Sodium Hypochlorite & H2O2)",
    scientificSpec: "WHO & Ministry of Environment Standard Water Disinfection Protocol",
    categoryBadge: "تعقيم بكتيري وفيروسي 99.9%",
    purpose: "القضاء الفوري على البكتيريا القولونية، الطحالب، الفطريات، والفيروسات",
    safetyCertification: "مطابق لاشتراطات منظمة الصحة العالمية (WHO) ووزارة البيئة والمياه",
    thicknessOrDosage: "تركيز محسوب بدقة (50 ppm للصدمة التعقيمية / 0.2 - 0.5 ppm للشرب)",
    lifespanOrProtection: "تطهير فوري شامل لكامل حجم الخزان والأنابيب",
    overview:
      "التعقيم العشوائي بالكلور التجاري أو المنظفات المنزلية يترك متبقيات كيميائية ضارة؛ لذلك نعتمد في أساس الأمن الخليجي على محاليل هيبوكلوريت الصوديوم النقية وبيروكسيد الهيدروجين المعايرة بأجهزة قياس رقمية (Digital Photometer).",
    applicationSteps: [
      "رش جدران وأرضية وسقف الخزان بعد الغسيل الميكانيكي بمحلول التعقيم المعاير.",
      "فرك الزوايا ومناطق تجمع البكتيريا حول ماسورة السحب والعوامة.",
      "ترك المادة المعقمة لفترة التماس القياسية (Contact Time: 30 - 60 دقيقة) للقضاء على الجراثيم.",
      "الشطف الكامل بالماء العذب وسحب مياه الشطف، ثم فحص الماء الجديد بجهاز قياس الكلور والـ pH.",
    ],
    compatibleTanks: ["جميع أنواع الخزانات الأرضية والعلوية", "خزانات الاستانلس ستيل والفايبر جلاس", "شبكات المواسير الداخلية"],
    keyBenefits: [
      "قضاء تام بنسبة 99.99% على بكتيريا الإيكولاي (E. coli)، السالمونيلا، والليجونيلا.",
      "إزالة تامة لأي روائح كريهة أو طعم غير مستساغ في المياه.",
      "قياس رقمي يضمن خلو المياه من أي زيادة في نسبة الكلور قبل الاستخدام.",
    ],
  },
];

const SEVEN_CLEANING_STAGES: TankCleaningStage[] = [
  {
    stageOrder: 1,
    title: "الفحص الهندسي وتفريغ المياه الملوثة",
    timeRequired: "20 - 30 دقيقة",
    contaminationLevel: 85,
    purityAndSterilization: 15,
    equipmentUsed: "مضخات غاطسة سريعة (Submersible Pumps) + أجهزة فحص الرطوبة",
    technicalDescription:
      "إغلاق المحابس المؤدية للشبكة الداخلية، تشغيل المضخات الغاطسة لسحب المياه الراكدة إلى الصرف، مع فحص حالة جدران الخزان والرقبة والعوامة.",
    statusBadge: "مرحلة التفريغ والفحص",
    themeColor: "border-red-500 text-red-400 bg-red-950/30",
  },
  {
    stageOrder: 2,
    title: "شفط الرواسب الطينية والرمال القاعية (Sludge Removal)",
    timeRequired: "20 دقيقة",
    contaminationLevel: 60,
    purityAndSterilization: 40,
    equipmentUsed: "ماكينات شفط الرواسب الرطبة والجافة (Wet Vacuum Industrial)",
    technicalDescription:
      "إزالة طبقات الطين، الرمال، الصدأ، والشوائب المتراكمة في قاع الخزان الأرضي أو العلوي دون ترك أي بقايا صلبة.",
    statusBadge: "تنظيف القاع من الرواسب",
    themeColor: "border-orange-400 text-orange-400 bg-orange-950/30",
  },
  {
    stageOrder: 3,
    title: "الغسيل الهيدروديناميكي بالضغط العالي والفرك الميكانيكي",
    timeRequired: "30 دقيقة",
    contaminationLevel: 25,
    purityAndSterilization: 75,
    equipmentUsed: "ماكينة غسيل ضغط عالٍ (150 - 180 بار) + فرش نايلون طبية",
    technicalDescription:
      "غسيل السقف، الجدران الأربعة، والأرضية بتيارات المياه المضغوطة والفرش المخصصة لإزالة الطحالب الخضراء، الأملاح المتكلسة، والطبقة اللزجة (Biofilm).",
    statusBadge: "إزالة الطحالب والتكلسات",
    themeColor: "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10",
  },
  {
    stageOrder: 4,
    title: "معالجة الشروخ وتطبيق العزل المائي والإيبوكسي (عند الحاجة)",
    timeRequired: "حسب حالة الخزان",
    contaminationLevel: 10,
    purityAndSterilization: 90,
    equipmentUsed: "مونة سيكا + عزل بلوري + إيبوكسي غذائي أزرق (Food Grade)",
    technicalDescription:
      "في حال وجود تشققات أو تلف في عزل الخزان، يتم ترميم الشروخ وعزل الخزان بالكامل لمنع التسرب وتأمين سطح أملس صحي.",
    statusBadge: "حماية هيكلية وعزل مائي",
    themeColor: "border-[#00BFFF] text-[#00BFFF] bg-[#00BFFF]/10",
  },
  {
    stageOrder: 5,
    title: "التعقيم البكتيري الشامل والشطف النهائي وفحص جودة المياه",
    timeRequired: "30 دقيقة",
    contaminationLevel: 0,
    purityAndSterilization: 100,
    equipmentUsed: "مرشات التعقيم الضبابي + جهاز قياس TDS & Chlorine الرقمي",
    technicalDescription:
      "تطبيق محلول التعقيم الصحي المعاير، ثم شطف الخزان بالماء النقي وسحبه بالكامل، وتعبئة الخزان بماء جديد مع فحص نسبة الأملاح والكلور.",
    statusBadge: "نقاء وتعقيم 100% جاهز للشرب",
    themeColor: "border-emerald-400 text-emerald-400 bg-emerald-950/30",
  },
];

const TANK_COMPARISON_TABLE: TankComparisonRow[] = [
  {
    criterion: "المواد المنظفة والمعقمة المستخدمة",
    asasProfessionalSystem: "معقمات مياه شرب معتمدة صحياً (هيبوكلوريت معاير + بيروكسيد) بدون أي رائحة أو سمية.",
    randomUnskilledWorkers: "منظفات منزلية تجارية (كلوركس معطر، تايد، أو فلاش حارق) تترك سموماً كيميائية وتفجر مسام الخرسانة.",
    criticalNote: "المنظفات التجارية داخل الخزان تسبب تسمماً مزمناً وتلفاً للعزل!",
  },
  {
    criterion: "طريقة تنظيف الجدران وسحب الرواسب",
    asasProfessionalSystem: "ماكينات ضغط عالٍ + شفاطات فاكيوم صناعية تسحب الطين والماء الملوث حتى آخر قطرة.",
    randomUnskilledWorkers: "مسح يدوي بدائي بملابس غير معقمة وترك مياه الغسيل العكرة في القاع لتختلط بالماء الجديد.",
    criticalNote: "النظافة الميكانيكية تضمن إزالة الغشاء البكتيري (Biofilm)",
  },
  {
    criterion: "الكشف على التسربات والشروخ والعوامة",
    asasProfessionalSystem: "فحص هندسي شامل لجدران الخزان والرقبة والعوامة والمضخة أثناء التنظيف مجاناً.",
    randomUnskilledWorkers: "عامل نظافة غير فني لا يكتشف الشروخ أو أسباب ارتفاع فاتورة المياه.",
    criticalNote: "نجمع بين النظافة الصحية والفحص الهندسي للخزان",
  },
  {
    criterion: "قياس جودة المياه والضمان",
    asasProfessionalSystem: "فحص رقمي لنسبة الكلور والأملاح (TDS) بعد التعبئة + شهادة ضمان رسمية مختومة.",
    randomUnskilledWorkers: "لا توجد أي أجهزة قياس ولا فواتير أو ضمانات رسمية.",
    criticalNote: "مؤسسة رسمية معتمدة في محافظة الخرج",
  },
];

const KHARJ_TANK_SECTORS: KharjTankSector[] = [
  {
    sectorName: "قطاع شمال الخرج (الفلل الجديدة والمباني الحديثة)",
    waterSupplyNature: "شبكة مياه بلدية + خزانات أرضية خرسانية وعلوية فايبر جلاس",
    frequentTankIssues: [
      "تنظيف وتعقيم الخزانات الجديدة من مخلفات البناء والأسمنت قبل السكن.",
      "عزل الخزانات الأرضية بالإيبوكسي الغذائي الأزرق لمنع التسرب.",
      "ضبط وتركيب العوامات الأصلية وأغطية الخزانات المحكمة.",
    ],
    neighborhoods: ["حي الخزامى", "حي الورود", "حي النهضة", "حي الأندلس", "حي المصيف", "حي العالية"],
    servicedTanksCount: 2450,
    responseSpeed: "20 دقيقة",
  },
  {
    sectorName: "قطاع وسط وغرب الخرج (الأحياء السكنية والتجارية والمدارس)",
    waterSupplyNature: "استهلاك يومي مرتفع مع خزانات متوسطة وقديمة العمر",
    frequentTankIssues: [
      "تراكم الطحالب والرواسب الطينية في الخزانات الأرضية والعلوية.",
      "ترميم وعزل الخزانات التي تسبب ارتفاع فاتورة المياه الشهرية.",
      "عقود غسيل وتعقيم دورية للمدارس، المساجد، والمطاعم.",
    ],
    neighborhoods: ["حي المنتزه", "حي السلام", "حي الخالدية", "حي الفيصلية", "حي المحطة"],
    servicedTanksCount: 3120,
    responseSpeed: "15 دقيقة",
  },
  {
    sectorName: "قطاع شرق وجنوب الخرج والمزارع والاستراحات",
    waterSupplyNature: "خزانات كبيرة، وايتات تحلية، وآبار ارتوازية ذات ملوحة متفاوتة",
    frequentTankIssues: [
      "تكلس الأملاح والرمال الناعمة في قاع وجدران الخزانات.",
      "حاجة الخزانات للغسيل بالضغط العالي والتعقيم الكلوري المعاير.",
      "معالجة شروخ ورقاب الخزانات الأرضية في الاستراحات والفلل.",
    ],
    neighborhoods: ["حي الريان", "حي السعادة", "حي اليرموك", "حي مشرف", "الدلم", "الهياثم", "اليمامة"],
    servicedTanksCount: 1980,
    responseSpeed: "25 دقيقة",
  },
];

const TANK_FAQS: TankFAQ[] = [
  {
    id: 1,
    category: "الدورية والوقت المناسب",
    question: "كل كم شهر يجب غسيل وتعقيم خزان المياه الأرضي والعلوي في الخرج؟",
    answer:
      "توصي وزارة البيئة والمياه والزراعة ومنظمة الصحة العالمية بضرورة غسيل وتعقيم خزانات مياه الشرب مرة كل 6 أشهر بانتظام، أو فوراً في الحالات التالية: 1) عند الانتقال لمنزل جديد. 2) بعد هطول الأمطار الغزيرة والعواصف الترابية إذا لم يكن الغطاء محكماً. 3) عند ملاحظة أي تغير في لون أو طعم أو رائحة المياه.",
  },
  {
    id: 2,
    category: "مدة العمل وانقطاع المياه",
    question: "كم تستغرق عملية غسيل وتعقيم الخزان؟ وهل تنقطع المياه عن المنزل طوال اليوم؟",
    answer:
      "عملية غسيل وتعقيم الخزان الواحد (بما في ذلك سحب المياه، إزالة الرواسب، الغسيل بالضغط العالي، التعقيم، والشطف) تستغرق ما بين 90 دقيقة إلى ساعتين فقط. وقبل البدء، يقوم فريقنا بملء الخزان العلوي بالكامل لكي تستمر المياه في الحمامات والمطابخ دون انقطاع أثناء تنظيف الخزان الأرضي.",
  },
  {
    id: 3,
    category: "عزل الخزانات بالإيبوكسي",
    question: "ما هو العزل الإيبوكسي الأزرق للخزانات؟ ومتى أحتاج لتطبيقه في خزاني؟",
    answer:
      "الإيبوكسي الغذائي (Food Grade Epoxy) هو طلاء عازل مخصص لمياه الشرب يشكل طبقة زجاجية زرقاء ملساء داخل الخزان الخرساني. تحتاج لتطبيقه إذا كان خزانك الأرضي غير معزول، أو إذا تقشرت طبقة العزل القديمة، أو إذا كنت تعاني من نقص مياه الخزان وارتفاع الفاتورة، أو لمنع تكون الطحالب الخضراء نهائياً، ونمنحك عليه ضماناً رسمياً لمدة 10 سنوات.",
  },
  {
    id: 4,
    category: "الأمان الصحي للمواد",
    question: "هل مواد التعقيم التي تستخدمونها تترك رائحة كلور قوية في المياه بعد الغسيل؟",
    answer:
      "إطلاقاً؛ نحن لا نستخدم الكلور التجاري العشوائي، بل نستخدم معقمات مياه شرب نقية بتركيز محسوب علمياً (50 ppm أثناء التطهير)، ثم نقوم بشطف الخزان وسحب مياه التعقيم بالكامل قبل إعادة ملئه، ونفحص الماء الجديد بجهاز رقمي للتأكد من أن نسبة الكلور الحر في النطاق الصحي المثالي (0.2 إلى 0.5 ppm) بدون أي رائحة أو طعم.",
  },
  {
    id: 5,
    category: "الأسعار والباقات",
    question: "كم سعر غسيل الخزان الأرضي والعلوي معاً في الخرج؟",
    answer:
      "نقدم في شركة أساس الأمن الخليجي باقة توفير خاصة عند طلب (غسيل وتعقيم الخزان الأرضي + الخزان العلوي معاً)، وتشمل الباقة فحص العوامات والرقبة وجسم الخزان مجاناً. يحدد السعر بدقة حسب حجم الخزان بالمتر المكعب وحالته، مع تقديم أفضل سعر تنافسي في الخرج.",
  },
];

// ============================================================================
// 3. Main Page Component (المكون الرئيسي لصفحة غسيل وعزل خزانات بالخرج)
// ============================================================================

export default function TankCleaningPage() {
  // Interactive States
  const [selectedProblemId, setSelectedProblemId] = useState<string>(
    "ground-tank-cracks-contamination"
  );
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("food-grade-epoxy");
  const [activeCleaningStage, setActiveCleaningStage] = useState<number>(5);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  // Interactive Tank Volume & Service Calculator States
  const [calcServiceType, setCalcServiceType] = useState<string>(
    "غسيل وتعقيم شامل (خزان أرضي + خزان علوي)"
  );
  const [tankLength, setTankLength] = useState<number>(4);
  const [tankWidth, setTankWidth] = useState<number>(3);
  const [tankDepth, setTankDepth] = useState<number>(2.5);
  const [calcNeighborhood, setCalcNeighborhood] = useState<string>("حي الخزامى");

  // Current Selected Data Objects
  const currentProblem =
    TANK_PROBLEMS_DATABASE.find((p) => p.id === selectedProblemId) ||
    TANK_PROBLEMS_DATABASE[0];

  const currentMaterial =
    TANK_MATERIALS_SYSTEMS.find((m) => m.id === selectedMaterialId) ||
    TANK_MATERIALS_SYSTEMS[0];

  const currentStageObj =
    SEVEN_CLEANING_STAGES.find((s) => s.stageOrder === activeCleaningStage) ||
    SEVEN_CLEANING_STAGES[4];

  // Dynamic Engineering Calculations for Tank Volume & Surface Area
  const tankVolumeCubicMeters = Number((tankLength * tankWidth * tankDepth).toFixed(1));
  const tankVolumeLiters = Math.round(tankVolumeCubicMeters * 1000);
  // Internal surface area (Floor + Ceiling + 4 Walls) for insulation
  const internalSurfaceAreaSqM = Number(
    (
      2 * (tankLength * tankWidth) +
      2 * (tankLength * tankDepth) +
      2 * (tankWidth * tankDepth)
    ).toFixed(1)
  );

  // Send Calculator Booking Request via WhatsApp
  const handleSendTankQuoteWhatsApp = () => {
    const message = `السلام عليكم شركة أساس الأمن الخليجي،
أرغب في حجز خدمة خزانات المياه في الخرج:
💧 *الخدمة المطلوبة:* ${calcServiceType}
📏 *أبعاد الخزان التقريبية:* طول ${tankLength}م × عرض ${tankWidth}م × عمق ${tankDepth}م
🧊 *سعة الخزان المحسوبة:* ${tankVolumeCubicMeters} م³ (~${tankVolumeLiters.toLocaleString()} لتر)
📐 *المساحة الداخلية للعزل/الغسيل:* ${internalSurfaceAreaSqM} متر مربع
📍 *الحي بالخرج:* ${calcNeighborhood}

أرجو التواصل معي لتأكيد السعر والموعد.`;

    window.open(
      `https://wa.me/966501206816?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden" dir="rtl">
      
      {/* =====================================================================
          SECTION 1: WATER PURITY & TANK CARE HERO SECTION (بدون صور)
      ===================================================================== */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#00BFFF]/20">
        {/* Ambient Glows */}
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
            <span className="text-gray-300">خدمات المياه والعزل الصحي</span>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37] font-bold">شركة غسيل وتعقيم وعزل خزانات بالخرج</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Column: Hero Copy & Conversion Triggers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <Droplets className="w-4 h-4" />
                <span>غسيل ميكانيكي وتعقيم طبي • عزل إيبوكسي غذائي بضمان 10 سنوات</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                شركة <span className="text-[#00BFFF]">غسيل خزانات</span> بالخرج.. مياه نقية ومعقمة 100% وعزل يمنع التسرب للأبد
              </h1>

              <p className="text-gray-300 text-base sm:text-xl leading-relaxed">
                نقاء المياه في منزلك هو خط الدفاع الأول عن صحة أسرتك وأطفالك. في{" "}
                <strong className="text-white">شركة أساس الأمن الخليجي</strong> نقدم خدمة متكاملة تشمل{" "}
                <strong className="text-[#D4AF37]">
                  تنظيف وغسيل الخزانات الأرضية والعلوية بالضغط العالي، شفط الرواسب والطحالب، التعقيم البكتيري المعاير، والعزل المائي بالإيبوكسي الغذائي الأزرق
                </strong>{" "}
                لمنع تسرب المياه وخفض الفواتير المرتفعة بضمان رسمي مختوم.
              </p>

              {/* 4 Key Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">غسيل بالضغط وشفط الرواسب</h2>
                    <p className="text-xs text-gray-400">إزالة الطين والطحالب والكلس بنسبة 100%</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">تعقيم صحي مطابق لـ WHO</h2>
                    <p className="text-xs text-gray-400">قضاء تام على البكتيريا بدون رائحة كلور</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">عزل إيبوكسي غذائي (Food Grade)</h2>
                    <p className="text-xs text-gray-400">معالجة شروخ الخزان بضمان 10 سنوات</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">فحص مجاني للرقبة والعوامة</h2>
                    <p className="text-xs text-gray-400">حماية من ارتفاع فواتير شركة المياه</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons with Explicit Title Attributes */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تواصل عبر واتساب لحجز خدمة غسيل وتعقيم وعزل الخزانات بالخرج"
                  className="flex items-center gap-3 bg-[#D4AF37] hover:bg-[#e5c247] text-[#030b1c] font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:scale-105 text-base sm:text-lg"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>احجز غسيل وتعقيم خزانك عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  title="اتصل هاتفياً بشركة غسيل خزانات بالخرج على الرقم 0501206816"
                  className="flex items-center gap-3 bg-[#061124] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold px-7 py-4 rounded-2xl transition-all duration-300 text-base sm:text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>
            </div>

            {/* Left Column: Water Quality & Bio-Purification Console (Zero Images) */}
            <div className="lg:col-span-5">
              <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-[0_0_45px_rgba(212,175,55,0.25)] relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#00BFFF]/15 border border-[#00BFFF] flex items-center justify-center text-[#00BFFF]">
                      <Container className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-[#D4AF37] font-bold block">
                        مختبر جودة ونقاء مياه الشرب
                      </span>
                      <h3 className="text-lg font-extrabold text-white">
                        المؤشرات القياسية بعد التعقيم والعزل
                      </h3>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-extrabold px-3 py-1 rounded-full">
                    SASO / WHO
                  </span>
                </div>

                {/* Water Quality Digital Meters */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#00BFFF]/40 text-center">
                    <span className="text-xs text-gray-400 block mb-1">القضاء على البكتيريا والطحالب</span>
                    <span className="text-3xl font-black text-[#00BFFF]" dir="ltr">
                      99.9%
                    </span>
                    <span className="text-[11px] text-emerald-400 block mt-1">
                      تعقيم كلوري وأكسجيني معاير
                    </span>
                  </div>

                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#D4AF37]/40 text-center">
                    <span className="text-xs text-gray-400 block mb-1">نسبة الكلور الحر الآمن</span>
                    <span className="text-3xl font-black text-[#D4AF37]" dir="ltr">
                      0.3 PPM
                    </span>
                    <span className="text-[11px] text-[#00BFFF] block mt-1">
                      مطابق لمواصفات مياه الشرب
                    </span>
                  </div>
                </div>

                {/* Chemical & Physical Parameters */}
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800 space-y-3 mb-6 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">الرقم الهيدروجيني المستهدف (pH):</span>
                    <span className="text-white font-extrabold" dir="ltr">
                      7.0 - 7.8 (متعادل صحي)
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-800 pt-2.5">
                    <span className="text-gray-400">عزل الجدران الداخلية:</span>
                    <span className="text-[#D4AF37] font-extrabold">
                      إيبوكسي غذائي أزرق (Food Grade)
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-800 pt-2.5">
                    <span className="text-gray-400">درجة العكارة والرواسب (Turbidity):</span>
                    <span className="text-emerald-400 font-extrabold">0.0 NTU (شفافية مطلقة)</span>
                  </div>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-4 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                  <p className="text-xs text-gray-200 leading-relaxed">
                    <strong className="text-emerald-400">فحص رقمي مجاني:</strong> بعد انتهاء الغسيل والتعبئة، يقيس الفني أمامك نسبة الأملاح (TDS) ونسبة الكلور بجهاز رقمي للتأكد من نقاء الماء.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: INTERACTIVE TANK HAZARD & LEAK DIAGNOSTIC ENGINE
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
              <Sliders className="w-4 h-4" />
              موسوعة تشخيص مشاكل الخزانات الأرضية والعلوية
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              اختر <span className="text-[#D4AF37]">حالة أو مشكلة الخزان</span> في عقارك واعرف الحل الجذري
            </h2>
            <p className="text-gray-300 text-lg">
              سواء كنت تلاحظ تغيراً في رائحة المياه، أو نقصاً في منسوب الخزان وارتفاع الفاتورة، أو ترغب في تطهير خزان جديد؛ اختر الحالة أدناه:
            </p>
          </div>

          {/* 4 Problem Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {TANK_PROBLEMS_DATABASE.map((prb) => {
              const isSelected = selectedProblemId === prb.id;
              return (
                <button
                  key={prb.id}
                  onClick={() => setSelectedProblemId(prb.id)}
                  title={prb.title}
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
                      {prb.hazardLevel}
                    </span>
                    <Container
                      className={`w-5 h-5 ${isSelected ? "text-[#030b1c]" : "text-[#D4AF37]"}`}
                    />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">{prb.title}</h3>
                </button>
              );
            })}
          </div>

          {/* Selected Problem Detailed Engineering Report */}
          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-800">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span
                    className={`text-xs font-extrabold px-3.5 py-1 rounded-full border ${currentProblem.hazardBadgeColor}`}
                  >
                    تصنيف الحالة: {currentProblem.hazardLevel}
                  </span>
                  <span className="bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/30 text-xs font-bold px-3 py-1 rounded-full">
                    النطاق: {currentProblem.tankType}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {currentProblem.title}
                </h3>
              </div>

              <div className="bg-[#030b1c] px-5 py-3.5 rounded-2xl border border-[#D4AF37]/40 flex items-center gap-4">
                <div>
                  <span className="text-xs text-gray-400 block">الضمان والاعتماد</span>
                  <span className="text-sm sm:text-base font-black text-[#D4AF37]">
                    {currentProblem.warrantyPeriod}
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-gray-800"></div>
                <div>
                  <span className="text-xs text-gray-400 block">زمن التنفيذ</span>
                  <span className="text-xs sm:text-sm font-bold text-[#00BFFF]">
                    {currentProblem.executionTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Symptoms & Risks */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#00BFFF]/30">
                  <span className="text-xs text-gray-400 block mb-1">تأثير المشكلة على المياه:</span>
                  <span className="text-sm sm:text-base font-extrabold text-[#D4AF37] block">
                    {currentProblem.waterQualityImpact}
                  </span>
                  <span className="text-xs text-[#00BFFF] block mt-1.5">
                    الحل المعتمد: {currentProblem.recommendedTreatment}
                  </span>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800">
                  <h4 className="text-base font-extrabold text-[#00BFFF] mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#D4AF37]" />
                    <span>العلامات الظاهرة في الموقع:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentProblem.visibleSymptoms.map((sym, i) => (
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
                    <span>المخاطر الصحية والإنشائية عند الإهمال:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentProblem.healthAndStructuralRisks.map((rsk, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>{rsk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Step-by-Step Protocol */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="bg-[#030b1c] p-6 sm:p-8 rounded-2xl border-2 border-[#D4AF37]/40">
                  <h4 className="text-xl font-extrabold text-[#D4AF37] mb-5 flex items-center gap-2">
                    <Wrench className="w-6 h-6 text-[#00BFFF]" />
                    <span>بروتوكول التنظيف والمعالجة في شركة أساس الأمن الخليجي:</span>
                  </h4>

                  <div className="space-y-4">
                    {currentProblem.engineeringProtocol.map((step, idx) => (
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
                    <span className="text-xs text-gray-400 block">النتيجة المضمونة</span>
                    <span className="text-base font-extrabold text-white">
                      خزان معقم ونقي 100% وخالٍ من أي تسربات
                    </span>
                  </div>

                  <Link
                    href="https://wa.me/966501206816"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`طلب معالجة ${currentProblem.title} عبر واتساب`}
                    className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black px-7 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>اطلب معالجة هذا الخزان الآن</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: CSS INTERACTIVE 5-STAGE TANK PURIFICATION SIMULATOR
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              محاكاة حية لمراحل تطهير وعزل الخزان
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              كيف نحول الخزان الملوث إلى <span className="text-[#00BFFF]">بيئة صحية معقمة 100%</span>؟
            </h2>
            <p className="text-gray-300 text-lg">
              اضغط على المراحل الخمس أدناه لمتابعة كيف يتم تفريغ الخزان، شفط الطين، الغسيل بالضغط، العزل الإيبوكسي، والتعقيم النهائي:
            </p>
          </div>

          {/* 5 Stage Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10">
            {SEVEN_CLEANING_STAGES.map((stg) => {
              const isSelected = activeCleaningStage === stg.stageOrder;
              return (
                <button
                  key={stg.stageOrder}
                  onClick={() => setActiveCleaningStage(stg.stageOrder)}
                  title={stg.title}
                  className={`p-4 rounded-2xl text-right border-2 transition-all ${
                    isSelected
                      ? "bg-[#061124] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                      : "bg-[#061124]/60 border-gray-800 hover:border-[#00BFFF]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#00BFFF]">
                      خطوة 0{stg.stageOrder}
                    </span>
                    <span className="text-xs font-black text-[#D4AF37]">
                      نقاء {stg.purityAndSterilization}%
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-xs sm:text-sm leading-snug">
                    {stg.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Tank Cross-Section Visualizer */}
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/50 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* CSS Tank Graphic */}
              <div className="lg:col-span-5 bg-[#030b1c] p-8 rounded-3xl border border-gray-800 flex flex-col items-center">
                <span className="text-xs text-gray-400 font-bold mb-4">
                  مقطع هندسي لحالة الخزان الداخلية
                </span>

                {/* Tank Container Box */}
                <div className="relative w-60 h-52 border-8 border-gray-500 rounded-b-3xl bg-[#07152b] overflow-hidden flex flex-col justify-end shadow-inner">
                  {/* Epoxy Blue Lining Indicator (Appears in stage 4 & 5) */}
                  {currentStageObj.stageOrder >= 4 && (
                    <div className="absolute inset-0 border-4 border-[#00BFFF] rounded-b-2xl pointer-events-none z-20 animate-pulse"></div>
                  )}

                  {/* Clean Water Fill */}
                  <div
                    className="w-full bg-gradient-to-t from-[#00BFFF]/60 to-cyan-400/30 transition-all duration-700 flex flex-col items-center justify-center relative z-10"
                    style={{ height: `${currentStageObj.purityAndSterilization}%` }}
                  >
                    <span className="text-2xl font-black text-white drop-shadow">
                      {currentStageObj.purityAndSterilization}%
                    </span>
                    <span className="text-[10px] font-bold text-[#D4AF37]">مستوى النقاء والتعقيم</span>
                  </div>

                  {/* Sludge / Contamination Bottom Layer */}
                  <div
                    className="w-full bg-gradient-to-t from-amber-950 via-stone-800 to-emerald-950 transition-all duration-700"
                    style={{ height: `${currentStageObj.contaminationLevel}%` }}
                  ></div>
                </div>

                <div className="mt-6 flex items-center gap-6 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#00BFFF]"></span>
                    <span className="text-gray-300">
                      نقاء وتعقيم ({currentStageObj.purityAndSterilization}%)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-900 border border-[#D4AF37]"></span>
                    <span className="text-gray-300">
                      رواسب وتلوث ({currentStageObj.contaminationLevel}%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Stage Technical Description */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`text-xs font-extrabold px-4 py-1.5 rounded-full border ${currentStageObj.themeColor}`}
                  >
                    {currentStageObj.statusBadge}
                  </span>
                  <span className="text-sm font-bold text-[#D4AF37]">
                    الوقت المستغرق: {currentStageObj.timeRequired}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentStageObj.title}
                </h3>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#D4AF37]/40">
                  <span className="text-xs text-[#00BFFF] font-bold block mb-1">
                    المعدات والمواد المستخدمة في هذه المرحلة:
                  </span>
                  <p className="text-base sm:text-lg font-extrabold text-[#D4AF37]">
                    {currentStageObj.equipmentUsed}
                  </p>
                </div>

                <p className="text-gray-300 text-base leading-relaxed">
                  {currentStageObj.technicalDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: APPROVED EPOXY & STERILIZATION MATERIALS LAB
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              مواد <span className="text-[#D4AF37]">عزل وتعقيم الخزانات</span> المعتمدة صحياً
            </h2>
            <p className="text-gray-300 text-lg">
              نستخدم حصرياً المواد المصنفة غذائياً (Food Grade) والآمنة بنسبة 100% على مياه الشرب:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {TANK_MATERIALS_SYSTEMS.map((mat) => {
              const isSelected = selectedMaterialId === mat.id;
              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterialId(mat.id)}
                  title={mat.name}
                  className={`p-6 rounded-2xl text-right border-2 transition-all flex flex-col justify-between ${
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
                    {mat.categoryBadge}
                  </span>
                  <h3 className="font-extrabold text-base sm:text-lg leading-snug">{mat.name}</h3>
                </button>
              );
            })}
          </div>

          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#00BFFF] bg-[#00BFFF]/10 px-3 py-1 rounded-lg border border-[#00BFFF]/30" dir="ltr">
                    {currentMaterial.scientificSpec}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-3">
                    {currentMaterial.name}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {currentMaterial.overview}
                  </p>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800 space-y-3">
                  <h4 className="font-extrabold text-[#D4AF37] text-base">
                    خطوات التطبيق الفني داخل الخزان:
                  </h4>
                  {currentMaterial.applicationSteps.map((stp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-[#00BFFF]/20 text-[#00BFFF] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{stp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#00BFFF]/30 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-gray-800 pb-2.5">
                    <span className="text-gray-400">الاعتماد الصحي:</span>
                    <span className="font-bold text-emerald-400">
                      {currentMaterial.safetyCertification.split(" ")[0]} معتمد
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2.5">
                    <span className="text-gray-400">السماكة / الجرعة:</span>
                    <span className="font-bold text-[#D4AF37]">{currentMaterial.thicknessOrDosage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">الاستدامة والحماية:</span>
                    <span className="font-bold text-[#00BFFF]">{currentMaterial.lifespanOrProtection}</span>
                  </div>
                </div>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <h4 className="text-sm font-bold text-white mb-3">المزايا الصحية والإنشائية:</h4>
                  <ul className="space-y-2">
                    {currentMaterial.keyBenefits.map((bnf, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{bnf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: INTERACTIVE TANK VOLUME & CLEANING CALCULATOR (حاسبة الخزان)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_45px_rgba(0,191,255,0.2)]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
                <Calculator className="w-4 h-4" />
                حاسبة سعة ومساحة الخزان الهندسية
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                احسب <span className="text-[#D4AF37]">حجم خزانك باللتر والمتر المربع</span> واطلب التسعير الفوري
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                أدخل أبعاد خزانك الأرضي التقريبية ليقوم النظام بحساب السعة اللترية والمساحة الداخلية للعزل والغسيل:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      1. الخدمة المطلوبة للخزان:
                    </label>
                    <select
                      value={calcServiceType}
                      onChange={(e) => setCalcServiceType(e.target.value)}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none"
                    >
                      <option value="غسيل وتعقيم شامل (خزان أرضي + خزان علوي)">
                        غسيل وتعقيم شامل (خزان أرضي + خزان علوي)
                      </option>
                      <option value="غسيل وتعقيم خزان أرضي فقط">غسيل وتعقيم خزان أرضي فقط</option>
                      <option value="عزل خزان أرضي بالإيبوكسي الغذائي الأزرق + الغسيل">
                        عزل خزان أرضي بالإيبوكسي الغذائي الأزرق + الغسيل
                      </option>
                      <option value="ترميم شروخ الخزان الأرضي والرقبة + العزل">
                        ترميم شروخ الخزان الأرضي والرقبة + العزل
                      </option>
                      <option value="تطهير خزان فيلا جديدة قبل السكن">
                        تطهير خزان فيلا جديدة قبل السكن
                      </option>
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

                {/* Dimensions Sliders */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-gray-300">طول الخزان:</span>
                      <span className="text-[#D4AF37]">{tankLength} متر</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={10}
                      step={0.5}
                      value={tankLength}
                      onChange={(e) => setTankLength(Number(e.target.value))}
                      className="w-full accent-[#D4AF37] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-gray-300">عرض الخزان:</span>
                      <span className="text-[#00BFFF]">{tankWidth} متر</span>
                    </div>
                    <input
                      type="range"
                      min={1.5}
                      max={8}
                      step={0.5}
                      value={tankWidth}
                      onChange={(e) => setTankWidth(Number(e.target.value))}
                      className="w-full accent-[#00BFFF] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-gray-300">عمق الخزان:</span>
                      <span className="text-emerald-400">{tankDepth} متر</span>
                    </div>
                    <input
                      type="range"
                      min={1.5}
                      max={5}
                      step={0.5}
                      value={tankDepth}
                      onChange={(e) => setTankDepth(Number(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Calculator Output */}
              <div className="lg:col-span-5 bg-[#030b1c] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 space-y-5 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <div className="border-b border-gray-800 pb-4">
                  <span className="text-xs text-[#00BFFF] font-bold block">المواصفات الهندسية المحسوبة</span>
                  <h3 className="text-lg font-extrabold text-white mt-1">{calcServiceType}</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">سعة الخزان بالمتر المكعب:</span>
                    <span className="font-black text-[#D4AF37] text-base">
                      {tankVolumeCubicMeters} م³ ({tankVolumeLiters.toLocaleString()} لتر)
                    </span>
                  </div>
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">مساحة الجدران والأرضية والسقف:</span>
                    <span className="font-bold text-[#00BFFF]">{internalSurfaceAreaSqM} متر مربع</span>
                  </div>
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">فحص العوامة والرقبة والتسربات:</span>
                    <span className="font-bold text-emerald-400">مجاني ضمن الباقة</span>
                  </div>
                </div>

                <button
                  onClick={handleSendTankQuoteWhatsApp}
                  title="إرسال بيانات الخزان عبر واتساب لمعرفة التكلفة"
                  className="w-full bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>احصل على عرض السعر عبر واتساب</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: COMPARISON TABLE & AL-KHARJ SECTORS
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              الفرق بين <span className="text-[#00BFFF]">الغسيل والتعقيم الهندسي</span> والغسيل العشوائي الضار
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-[#D4AF37] bg-[#061124]/95 shadow-xl mb-20">
            <table className="w-full text-right border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-[#030b1c] border-b-2 border-[#D4AF37]">
                  <th className="p-5 text-white font-extrabold text-base w-1/4">معيار المقارنة</th>
                  <th className="p-5 text-[#D4AF37] font-extrabold text-base w-1/3 bg-[#D4AF37]/10 border-x border-[#D4AF37]/30">
                    شركة أساس الأمن الخليجي (تعقيم وعزل معتمد)
                  </th>
                  <th className="p-5 text-gray-400 font-bold text-base w-1/3">
                    العمالة العشوائية غير المؤهلة
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {TANK_COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#030b1c]/60 transition-colors">
                    <td className="p-5 font-bold text-white">
                      <div>{row.criterion}</div>
                      <span className="inline-block mt-1 text-[11px] bg-red-500/15 text-red-400 px-2 py-0.5 rounded">
                        {row.criticalNote}
                      </span>
                    </td>
                    <td className="p-5 bg-[#D4AF37]/5 border-x border-[#D4AF37]/20 text-sm text-white font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{row.asasProfessionalSystem}</span>
                      </div>
                    </td>
                    <td className="p-5 text-sm text-gray-400">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{row.randomUnskilledWorkers}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Al-Kharj Sectors */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {KHARJ_TANK_SECTORS.map((sec, idx) => (
              <div
                key={idx}
                className="bg-[#061124]/95 border-2 border-[#00BFFF]/40 hover:border-[#D4AF37] rounded-3xl p-7 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-[#D4AF37] text-[#030b1c] text-xs font-black px-3 py-1 rounded-lg">
                      وصول خلال {sec.responseSpeed}
                    </span>
                    <span className="text-xs text-[#00BFFF] font-bold">
                      +{sec.servicedTanksCount} خزان معقم
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2">{sec.sectorName}</h3>
                  <p className="text-xs text-gray-400 mb-4">{sec.waterSupplyNature}</p>
                  <div className="space-y-2 mb-6">
                    {sec.frequentTankIssues.map((iss, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span>{iss}</span>
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
          SECTION 7: COMPREHENSIVE FAQS (الأسئلة الشائعة حول غسيل الخزانات)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              الأسئلة الشائعة حول <span className="text-[#D4AF37]">غسيل وتعقيم وعزل الخزانات</span>
            </h2>
          </div>

          <div className="space-y-4">
            {TANK_FAQS.map((faq) => {
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
          SECTION 8: FINAL CTA & SEO-COMPLETE INTERNAL LINKS
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#061124] via-[#0a1d3b] to-[#061124] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <ShieldCheck className="w-4 h-4" />
                مياه نقية ومعقمة 100% • ضمان 10 سنوات على العزل الإيبوكسي
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                اطمئن على نقاء مياه منزلك واحمِ خزانك من التسربات اليوم!
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
                تواصل الآن مع قسم تعقيم وعزل الخزانات في{" "}
                <span className="text-[#D4AF37] font-bold">شركة أساس الأمن الخليجي</span> بالخرج للحصول على خدمة احترافية فورية.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="راسل شركة أساس الأمن الخليجي عبر واتساب لطلب غسيل وعزل الخزانات"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#e6c247] text-[#030b1c] font-black text-lg px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>احجز موعد غسيل الخزان عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  title="اتصال هاتفي مباشر بقسم غسيل الخزانات بالخرج 0501206816"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#030b1c] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold text-lg px-10 py-5 rounded-2xl transition-all"
                >
                  <Phone className="w-6 h-6" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>

              {/* Internal Links with Explicit Title Attributes */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                <span className="text-gray-400 font-bold">خدماتنا المتكاملة في الخرج:</span>
                <Link
                  href="/services/water-leak-detection"
                  title="خدمة كشف تسربات المياه بالخرج بدون تكسير"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  كشف تسربات المياه
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/roof-insulation"
                  title="خدمة عزل الأسطح المائي والحراري والفوم بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  عزل الأسطح بالفوم
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/ac-washing"
                  title="خدمة غسيل وصيانة المكيفات بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  غسيل وصيانة المكيفات
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/pest-control"
                  title="خدمة رش مبيدات ومكافحة حشرات بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  رش مبيدات ومكافحة حشرات
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/portfolio"
                  title="مشاهدة سابقة أعمال شركة أساس الأمن الخليجي بالفيديو"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  أعمالنا بالفيديو
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}