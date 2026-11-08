"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bug,
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
  Crosshair,
  ShieldAlert,
  Filter,
  Thermometer,
  FileCheck,
  Building2,
  Lock,
  Activity,
  HeartHandshake,
  Cross,
  Target,
  FlaskConical,
  Syringe,
  SprayCan,
  Radar,
} from "lucide-react";

// ============================================================================
// 1. Interfaces & Engineering Data Types (هياكل البيانات لصفحة رش المبيدات)
// ============================================================================

interface PestSpeciesProfile {
  id: string;
  name: string;
  scientificClassification: string;
  threatCategory: "خطر هيكلي مدمر" | "خطر صحي وبائي" | "إزعاج ولدغات مؤلمة" | "تلف ممتلكات وأسلاك";
  threatBadgeColor: string;
  activeChemicalIngredient: string;
  applicationMethod: string;
  leaveHomeRequired: string;
  infestationSigns: string[];
  structuralOrHealthRisks: string[];
  eradicationProtocol: string[];
  sessionDuration: string;
  warrantyPeriod: string;
}

interface PesticideTechnology {
  id: string;
  title: string;
  codeName: string;
  techType: string;
  odorStatus: string;
  dropletOrDoseSize: string;
  residualEffectMonths: string;
  sfdaApproved: boolean;
  overview: string;
  howItWorksSteps: string[];
  targetZones: string[];
  safetyProfile: string;
}

interface EradicationLifecycleStage {
  stageOrder: number;
  title: string;
  timeFrame: string;
  colonySurvivalRate: number;
  protectionShieldRate: number;
  biologicalMechanism: string;
  technicalDetails: string;
  statusTag: string;
  themeColor: string;
}

interface TermiteProtectionPlan {
  id: string;
  title: string;
  stageBadge: string;
  subtitle: string;
  description: string;
  chemicalUsed: string;
  dosagePerMeter: string;
  executionSteps: {
    stepTitle: string;
    stepDetail: string;
  }[];
  deliverables: string[];
  warrantyYears: number;
}

interface SafetyComparisonRow {
  aspect: string;
  asasIPMSystem: string;
  randomStreetSprayers: string;
  healthNote: string;
}

interface KharjPestSector {
  sectorName: string;
  environmentalNature: string;
  mostCommonPests: string[];
  neighborhoods: string[];
  treatedPropertiesCount: number;
  responseTime: string;
}

interface PestFAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 2. Comprehensive Encyclopedic Constants (البيانات الموسوعية الكاملة)
// ============================================================================

const PEST_SPECIES_DATABASE: PestSpeciesProfile[] = [
  {
    id: "termites-white-ants",
    name: "النمل الأبيض (الأرضة) المدمر للأخشاب والأساسات",
    scientificClassification: "Subterranean Termites (Isoptera)",
    threatCategory: "خطر هيكلي مدمر",
    threatBadgeColor: "text-red-500 border-red-500/50 bg-red-500/10",
    activeChemicalIngredient: "Fipronil 5% SC / Imidacloprid (باير ألمانيا / باسف)",
    applicationMethod: "التخريم الميكانيكي الدقيق (Drilling) والحقن الهيدروليكي تحت البلاط والأساسات",
    leaveHomeRequired: "لا يتطلب إخلاء المنزل (بدون رائحة تماماً)",
    infestationSigns: [
      "ظهور أنابيب ومسارات طينية رفيعة على الجدران، خلف الأبواب الخشبية، أو في زوايا الغرف.",
      "تآكل وتفرغ حلوق الأبواب الخشبية، الدواليب، والباركيه من الداخل مع بقاء القشرة الخارجية فقط.",
      "سماع صوت طقطقة خفيفة ليلاً أو رؤية أجنحة حشرات شفافة متساقطة بجوار النوافذ.",
      "تلف الكراتين والكتب المخزنة في المستودعات والأدوار الأرضية.",
    ],
    structuralOrHealthRisks: [
      "القضاء التام على كافة الأبواب الخشبية والمطابخ والأثاث الفاخر بتكاليف خسائر تصل لعشرات الآلاف.",
      "خلخلة الدفان الرملي تحت بلاط الدور الأرضي وبناء مستعمرات مليونية تحت قواعد الفيلا.",
    ],
    eradicationProtocol: [
      "الفحص بالأجهزة الكهرومغناطيسية والحرارية لتحديد مسارات أنفاق الأرضة وموقع الملكة تحت الأرض.",
      "تخريم دقيق جداً (بقطر 6 إلى 8 ملم) في فواصل البلاط بمحاذاة الجدران وحول حلوق الأبواب المتضررة.",
      "حقن مبيد الفبرونيل أو الإيميداكلوبريد غير الطارد بضغط هيدروليكي ليشكل حزاماً كيميائياً متصلاً تحت البلاط.",
      "نقل الشغالات للمبيد إلى داخل المستعمرة (تأثير الدومينو) مما يقضي على الملكة والمستعمرة بالكامل، ثم إغلاق الثقوب بترويبة مطابقة للون البلاط.",
    ],
    sessionDuration: "من 2 إلى 4 ساعات عمل متقن",
    warrantyPeriod: "10 إلى 15 سنة ضمان رسمي مكتوب",
  },
  {
    id: "cockroaches-german-american",
    name: "الصراصير الألمانية الصغيرة (صراصير المطبخ) والأمريكية",
    scientificClassification: "Blattella germanica & Periplaneta americana",
    threatCategory: "خطر صحي وبائي",
    threatBadgeColor: "text-[#D4AF37] border-[#D4AF37]/50 bg-[#D4AF37]/10",
    activeChemicalIngredient: "Indoxacarb Gel (Advion) + Lambda-Cyhalothrin Micro-Cap",
    applicationMethod: "حقن الجل الأمريكي والألماني في المطبخ + الرش الميكروي الكبسولي للمناهل",
    leaveHomeRequired: "لا حاجة لإخلاء المنزل أو تفريغ أواني المطبخ نهائياً",
    infestationSigns: [
      "انتشار الصراصير الصغيرة الشقراء داخل مفاصل دواليب المطبخ، خلف الثلاجة، والفرن، والميكروويف.",
      "خروج الصراصير الكبيرة الطائرة أو الزاحفة من بالوعات الحمامات وغرف التفتيش ليلاً.",
      "وجود نقاط سوداء صغيرة (مخلفات الصراصير) وأكياس بيض في زوايا الأدراج الخشبية والألمنيوم.",
    ],
    structuralOrHealthRisks: [
      "نقل بكتيريا السالمونيلا والتسمم الغذائي ومسببات الحساسية والربو للأطفال عبر تلويث الأواني والطعام.",
      "تلف اللوحات الإلكترونية (البوردات) الخاصة بالثلاجات، غسالات الصحون، والأفران بسبب تعشيشها بالداخل.",
    ],
    eradicationProtocol: [
      "تطبيق نقاط مجهرية من جل (Advion / Maxforce) الأصلي في مفاصل المطبخ وحول الأجهزة بدون إزالة الأواني.",
      "يعمل الجل بآلية الجذب الغذائي الفائق؛ تأكله الصراصير وتعود لجحورها فتموت وتسمم باقي المستعمرة والفقس الجديد.",
      "رش بالوعات الصرف وغرف التفتيش الرئيسية بالحوش بمبيد كبسولي ممتد المفعول ومنظم نمو الحشرات (IGR) لمنع فقس البيض.",
      "تأمين الصفايات والردادات لمنع هجرة الصراصير من الشبكة العامة إلى داخل المنزل.",
    ],
    sessionDuration: "45 إلى 60 دقيقة بدون أي فوضى",
    warrantyPeriod: "ضمان شامل من 6 أشهر إلى سنة كاملة",
  },
  {
    id: "bed-bugs",
    name: "بق الفراش والحشرات اللادغة المختبئة في المراتب والأثاث",
    scientificClassification: "Cimex lectularius (Bed Bugs)",
    threatCategory: "إزعاج ولدغات مؤلمة",
    threatBadgeColor: "text-red-400 border-red-400/50 bg-red-400/10",
    activeChemicalIngredient: "Chlorfenapyr + Pyrethroids + IGR (منظمات النمو)",
    applicationMethod: "التبخير والرش الميكروي الدقيق (ULV) لاختراق ثنايا المراتب والأخشاب",
    leaveHomeRequired: "تهوية الغرف المعالجة لمدة 3 إلى 4 ساعات فقط",
    infestationSigns: [
      "الاستيقاظ صباحاً مع وجود لدغات حمراء متجاورة على الجلد تسبب حكة شديدة ومستمرة.",
      "رؤية بقع دموية صغيرة جداً أو نقاط سوداء على ملاءات السرير وخياطة المراتب.",
      "اختباء حشرات بنية مسطحة بحجم بذرة التفاح في شقوق الأسرة، الكنب، خلف اللوحات، وبراويز الكهرباء.",
    ],
    structuralOrHealthRisks: [
      "الأرق المزمن، التوتر النفسي الشديد، والحساسية الجلدية المفرطة لجميع أفراد الأسرة.",
      "سرعة الانتشار الهائلة من غرفة لأخرى عبر الملابس والحقائب إذا لم يتم القضاء على البيض.",
    ],
    eradicationProtocol: [
      "فحص دقيق لكافة ثنايا المراتب، هياكل الأسرة الخشبية، الستائر، والكنب لتحديد بؤر التمركز والبيض.",
      "استخدام جهاز الرش الميكروي البارد (ULV Fogger) الذي يحول المبيد إلى ذرات بحجم 15 ميكرون تخترق أعمق الشقوق.",
      "استخدام مركب مزدوج يقضي على الحشرة البالغة (حتى السلالات المقاومة للمبيدات العادية) ويحرق قشرة البيض.",
      "تقديم إرشادات التعقيم الحراري للمفروشات وضمان عدم بقاء أي بؤرة نشطة.",
    ],
    sessionDuration: "60 إلى 90 دقيقة",
    warrantyPeriod: "ضمان القضاء التام والنهائي على الإصابة",
  },
  {
    id: "rodents-scorpions-geckos",
    name: "الفئران والقوارض، العقارب، الثعابين، والوزغ (البرص)",
    scientificClassification: "Rodentia, Scorpiones & Hemidactylus (Geckos)",
    threatCategory: "تلف ممتلكات وأسلاك",
    threatBadgeColor: "text-[#00BFFF] border-[#00BFFF]/50 bg-[#00BFFF]/10",
    activeChemicalIngredient: "Brodifacoum Bait Stations + Cypermethrin Barrier",
    applicationMethod: "محطات طعوم آمنة ومغلقة + حزام رش محيطي طارد وقاتل",
    leaveHomeRequired: "لا يتطلب إخلاء المنزل (آمن تماماً للأطفال والحيوانات الأليفة)",
    infestationSigns: [
      "سماع أصوات حركة وخربشة فوق الأسقف المستعارة (الجبس بورد) أو في المستودعات والحوش ليلاً.",
      "قرض وتلف في أسلاك الكهرباء، خراطيم الغسالات، أو أكياس المواد الغذائية.",
      "ظهور الوزغ (البرص) على جدران الحوش والنوافذ، أو ظهور العقارب في الاستراحات والمزارع والأحياء القريبة من البر بالخرج.",
    ],
    structuralOrHealthRisks: [
      "قرض الفئران لأسلاك الكهرباء يسبب التماسات وحرائق خطيرة في الأسقف الجبسية.",
      "خطر لدغات العقارب السامة وتلوث الأسطح ببكتيريا السالمونيلا التي ينقلها الوزغ والقوارض.",
    ],
    eradicationProtocol: [
      "توزيع محطات طعوم القوارض المغلقة بالمفتاح (Tamper-Resistant Stations) المحتوية على مكعبات البيروديفاكوم التي تسبب جفاف الفأر وموته خارج المنزل دون رائحة.",
      "تطبيق عجينة ومركبات طاردة وقاتلة للوزغ (البرص) حول النوافذ والإضاءة الخارجية.",
      "عمل حزام كيميائي محيطي (Perimeter Barrier) حول أسوار الفيلا أو الاستراحة يقضي على العقارب والحشرات الزاحفة فور ملامسته.",
      "سد الفتحات والثغرات التي تتسلل منها القوارض والزواحف.",
    ],
    sessionDuration: "45 إلى 75 دقيقة",
    warrantyPeriod: "ضمان 6 إلى 12 شهراً مع متابعة المحطات",
  },
];

const PESTICIDE_TECHNOLOGIES_DB: PesticideTechnology[] = [
  {
    id: "german-gel-baiting",
    title: "تقنية حقن الجل الألماني والأمريكي الذكي (بدون رائحة)",
    codeName: "Advion® / Maxforce® Precision Gel System",
    techType: "طعم جاذب حيوي بنظام العدوى المتسلسلة (Cascade Effect)",
    odorStatus: "عديم الرائحة والأبخرة تماماً 100%",
    dropletOrDoseSize: "نقاط مجهرية بقطر 3 ملم في الزوايا المخفية",
    residualEffectMonths: "فعالية مستمرة من 6 إلى 9 أشهر",
    sfdaApproved: true,
    overview:
      "أحدث ما توصلت إليه التكنولوجيا الألمانية والأمريكية لمكافحة صراصير ونمل المطابخ والمستشفيات. لا يتطلب إخراج الأواني أو تغطية الطعام أو مغادرة المنزل؛ حيث توضع قطرات صغيرة جداً في مفاصل الدواليب وخلف الأجهزة الكهربائية.",
    howItWorksSteps: [
      "يحتوي الجل على جاذبات غذائية وفرمونات تجعل الحشرات تترك أي طعام آخر وتتجه لأكل الجل.",
      "المادة الفعالة (Indoxacarb) لا تقتل الحشرة في نفس الثانية، بل تمنحها ساعتين للعودة إلى داخل العش المخفي.",
      "بمجرد موت الحشرة داخل الجحر، تتغذى عليها باقي الصراصير والحوريات الصغيرة فتموت المستعمرة بالكامل بنسبة 100%.",
    ],
    targetZones: ["خزائن ودواليب المطابخ", "خلف الثلاجات والأفران وغسالات الصحون", "غرف النوم والمكاتب"],
    safetyProfile: "آمن كلياً على الأطفال، الرضع، كبار السن، ومرضى الربو والحساسية",
  },
  {
    id: "ulv-micro-fogging",
    title: "أجهزة الرش الميكروي البارد متناهي الصغر (ULV Cold Fogger)",
    codeName: "German Ultra-Low Volume Micro-Mist",
    techType: "تذرير إلكتروني للمبيدات المائية والكبسولية (Micro-Encapsulated)",
    odorStatus: "بدون رائحة أو برائحة عطرية خفيفة جداً ومصرحة",
    dropletOrDoseSize: "حجم قطرات دقيق من 5 إلى 25 ميكرون",
    residualEffectMonths: "حماية ممتدة من 6 إلى 12 شهراً",
    sfdaApproved: true,
    overview:
      "بدلاً من الرشاشات اليدوية التقليدية التي تغرق الأرضيات بالماء ولا تصل للشقوق، تقوم ماكينة ULV بتحويل المبيد الكبسولي إلى ضباب بارد مجهري يتغلغل في أضيق الشقوق وخلف الجبس بورد وثنايا الأثاث ويلتصق بالأسطح.",
    howItWorksSteps: [
      "توليد تيار هوائي دوامي يقسم قطرة المبيد إلى آلاف الجزيئات المجهرية المعلقة في الهواء.",
      "اختراق كامل لكافة الزوايا، الشقوق الشعرية في الجدران، وخلف الوزرات الخشبية.",
      "ترسب الكبسولات الدقيقة (CS) على الأسطح، والتي تنفجر بمجرد مرور الحشرة فوقها وتلتصق بأرجلها.",
    ],
    targetZones: ["الغرف والمجالس والصالات", "معالجة بق الفراش والبراغيث", "الأسقف المستعارة والمستودعات"],
    safetyProfile: "لا يترك أي بقع أو أثر دهني على الأثاث أو السجاد أو الدهانات الفاخرة",
  },
  {
    id: "termite-soil-injection",
    title: "منظومة الحقن الهيدروليكي للتربة والخرسانة (مكافحة الأرضة)",
    codeName: "Sub-Slab Hydraulic Termiticide Injection",
    techType: "حاجز كيميائي أرضي غير طارد (Non-Repellent Liquid Barrier)",
    odorStatus: "عديم الرائحة المزعجة ومخصص للمباني السكنية",
    dropletOrDoseSize: "ضخ 4 إلى 5 لتر لكل متر طولي تحت الضغط",
    residualEffectMonths: "حماية هيكلية تمتد من 10 إلى 15 سنة",
    sfdaApproved: true,
    overview:
      "تقنية هندسية متخصصة لحماية الفلل والمباني في الخرج من خطر النمل الأبيض (الأرضة) سواء قبل صب خرسانة النظافة (وقاية تأسيسية) أو بعد السكن عبر الحقن الدقيق تحت البلاط وحول الأبواب.",
    howItWorksSteps: [
      "في المباني القائمة: تخريم فواصل البلاط بريشة دقيقة وحقن المبيد بمضخة ضغط عالٍ ليتوزع في الرمل تحت السيراميك.",
      "في المباني تحت الإنشاء: رش خنادق القواعد والميدات والدفان الرملي بالكامل قبل فرش المشمع وصب الخرسانة.",
      "تكوين درع كيميائي متصل يمنع صعود النمل الأبيض من باطن الأرض ويقضي على أي مستعمرة تقترب من المبنى.",
    ],
    targetZones: ["الدفان تحت البلاط والسيراميك", "أساسات وقواعد المباني الجديدة", "محيط الأبواب الخشبية والحدائق"],
    safetyProfile: "مادة ترتبط كيميائياً بجزيئات التربة ولا تتبخر داخل هواء الغرف نهائياً",
  },
  {
    id: "thermal-outdoor-fogging",
    title: "التضبيب الحراري والرش المحيطي للأحواش والمزارع والاستراحات",
    codeName: "Thermal Fogger & High-Pressure Perimeter Spray",
    techType: "مكافحة شاملة للحشرات الطائرة والزاحفة والعقارب في المساحات المفتوحة",
    odorStatus: "مخصص للمناطق الخارجية، الحدائق، والمناهل",
    dropletOrDoseSize: "سحابة دخانية كثيفة تخترق الأشجار والمناهل",
    residualEffectMonths: "قضاء فوري + وقاية موسمية",
    sfdaApproved: true,
    overview:
      "الحل المثالي لأصحاب الفلل ذات الأحواش الواسعة، الاستراحات، والمزارع في الخرج والدلم والهياثم؛ حيث نقوم بتطهير الحدائق، غرف التفتيش، وأسوار العقار من البعوض (الناموس)، الذباب، العقارب، والصراصير الخارجية.",
    howItWorksSteps: [
      "ضخ الضباب الحراري داخل جميع غرف التفتيش (المناهل) لقتل آلاف الصراصير والبعوض المختبئ في الشبكة خلال ثوانٍ.",
      "رش الأشجار، المسطحات الخضراء، والزوايا الخارجية بمبيدات بايرثرويدية آمنة على النباتات.",
      "تطبيق حزام بودرة وسائل micro-cap حول سور المبنى الخارجي لمنع تسلل العقارب والحشرات الزاحفة.",
    ],
    targetZones: ["أحواش وحدائق الفلل", "الاستراحات والمزارع بالخرج", "غرف التفتيش والمستودعات الكبرى"],
    safetyProfile: "إبادة فورية شاملة للحشرات الطائرة والزاحفة في الفناء الخارجي",
  },
];

const ERADICATION_LIFECYCLE_STAGES: EradicationLifecycleStage[] = [
  {
    stageOrder: 1,
    title: "الساعة الأولى: الصدمة العصبية والإبادة الفورية للحشرات النشطة",
    timeFrame: "من الدقيقة 15 حتى 60 دقيقة",
    colonySurvivalRate: 30,
    protectionShieldRate: 100,
    biologicalMechanism: "تأثير الصعق الفوري (Knockdown Effect) عبر ملامسة الجهاز العصبي للحشرة.",
    technicalDetails:
      "بمجرد انتهاء الفني من الرش الميكروي وتطبيق الجل، تبدأ الحشرات البالغة والظاهرة بالخروج من مخابئها والموت الفوري خلال الدقائق الأولى دون أي قدرة على الهروب.",
    statusTag: "قضاء فوري على الحشرات الظاهرة",
    themeColor: "border-[#00BFFF] text-[#00BFFF] bg-[#00BFFF]/10",
  },
  {
    stageOrder: 2,
    title: "اليوم الأول إلى الثالث: انتقال العدوى القاتلة لقلب المستعمرة المخفية",
    timeFrame: "24 إلى 72 ساعة",
    colonySurvivalRate: 5,
    protectionShieldRate: 100,
    biologicalMechanism: "تأثير الدومينو (Domino / Trojan Horse Effect) داخل الشقوق والجحور.",
    technicalDetails:
      "الحشرات التي تناولت طعم الجل أو لامست الكبسولات الدقيقة تعود إلى أعماق الجحور خلف الدواليب وتحت البلاط، فتنقل المادة الفعالة للملكات والحوريات المختبئة وتقضي عليها.",
    statusTag: "تدمير الأعشاش والجحور",
    themeColor: "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10",
  },
  {
    stageOrder: 3,
    title: "الأسبوع الأول والثاني: كسر دورة التكاثر ومنع فقس البيض (IGR)",
    timeFrame: "7 إلى 14 يوماً",
    colonySurvivalRate: 0,
    protectionShieldRate: 100,
    biologicalMechanism: "تفعيل منظمات نمو الحشرات (Insect Growth Regulators).",
    technicalDetails:
      "المبيدات العادية لا تقتل بيض الصراصير والبق؛ لكن مركباتنا تحتوي على مادة (IGR) التي تعقم الإناث وتمنع أي بيض قديم من الفقس أو التحول لحشرة بالغة، مما يقطع نسل الحشرة تماماً.",
    statusTag: "إبادة شاملة 100% لليرقات والبيض",
    themeColor: "border-emerald-400 text-emerald-400 bg-emerald-950/30",
  },
  {
    stageOrder: 4,
    title: "الشهور التالية: الدرع الكبسولي الواقي طويل الأمد",
    timeFrame: "من شهر إلى 12 شهراً (و10 سنوات للأرضة)",
    colonySurvivalRate: 0,
    protectionShieldRate: 98,
    biologicalMechanism: "تقنية الكبسولات المجهرية بطيئة التحرر (Slow-Release Micro-Capsules).",
    technicalDetails:
      "يبقى أثر المبيد غير المرئي فعالاً في الزوايا، المناهل، وتحت البلاط لشهور طويلة؛ بحيث إذا حاولت أي حشرة جديدة التسلل من الخارج فإنها تموت فور ملامسة الحاجز الواقي.",
    statusTag: "وقاية وضمان رسمي ممتد",
    themeColor: "border-purple-400 text-purple-400 bg-purple-950/30",
  },
];

const TERMITE_PLANS: TermiteProtectionPlan[] = [
  {
    id: "pre-construction",
    title: "معالجة النمل الأبيض قبل البناء (رش الدفان والأساسات)",
    stageBadge: "وقاية تأسيسية للمباني الجديدة بالخرج",
    subtitle: "تحصين القواعد، الميدات، والدفان الرملي قبل صب خرسانة النظافة",
    description:
      "أفضل استثمار يحمي فيلتك الجديدة للأبد بتكلفة بسيطة؛ حيث نقوم برش التربة والدفان الرملي بعد الدك وقبل فرش المشمع وصب خرسانة الأرضيات، مما يمنع صعود الأرضة للمبنى طوال عمره.",
    chemicalUsed: "بايفلكس / جارد / تيرميدور (معتمد بتركيز قياسي)",
    dosagePerMeter: "4 لتر محلول لكل متر مربع من المسطح + 5 لتر لكل متر طولي حول الميدات",
    executionSteps: [
      {
        stepTitle: "1. رش خنادق القواعد والميدات",
        stepDetail: "غمر جوانب وقاع الحفر وحول الميدات الخرسانية بالمبيد لتكوين طوق حماية أولي.",
      },
      {
        stepTitle: "2. غمر مسطح الدفان بعد التسوية والدك",
        stepDetail: "رش كامل مساحة الدور الأرضي والأحواش ومواضع المواسير بمضخات الضغط.",
      },
      {
        stepTitle: "3. التغطية الفورية بالمشمع البلاستيكي",
        stepDetail: "فرش البولي إيثيلين (المشمع) مباشرة بعد الرش لحفظ المبيد من التبخر وأشعة الشمس.",
      },
    ],
    deliverables: [
      "شهادة ضمان رسمية معتمدة لمدة 15 سنة.",
      "تقرير موثق بالصور والفيديو لعملية الرش والمواد المستخدمة.",
    ],
    warrantyYears: 15,
  },
  {
    id: "post-construction",
    title: "معالجة النمل الأبيض بعد البناء (حقن الفلل المسكونة)",
    stageBadge: "علاج جذري للمنازل القائمة بدون تكسير",
    subtitle: "التخريم المجهري وحقن المبيد تحت البلاط وحول الأبواب المتضررة",
    description:
      "إذا ظهر النمل الأبيض في أبواب أو جدران منزلك الحالي، فلا داعي للقلق أو خلع البلاط؛ نقوم بعمل حزام حقن إلكتروني دقيق في فواصل البلاط يقضي على المستعمرة تحت الأرض ويحمي أخشاب منزلك.",
    chemicalUsed: "Fipronil 5% SC (ألماني أصلي عديم الرائحة)",
    dosagePerMeter: "حقن عميق كل 50 سم إلى 100 سم بمحاذاة الجدران والأبواب",
    executionSteps: [
      {
        stepTitle: "1. التخريم الدقيق في فواصل الترويبة",
        stepDetail: "ثقب دقيق جداً بقطر 6 ملم في الفاصل بين البلاط والوزرة دون كسر أو تشويه السيراميك.",
      },
      {
        stepTitle: "2. الحقن الهيدروليكي ومعالجة الأخشاب",
        stepDetail: "ضخ المبيد تحت البلاط ليصل للدفان الرملي، وحقن حلوق الأبواب المصابة بمبيد شفاف.",
      },
      {
        stepTitle: "3. التقفيل التجميلي بنفس لون الترويبة",
        stepDetail: "سد فتحات الحقن الصغيرة بترويبة إيبوكسية مطابقة تماماً للون بلاط منزلك.",
      },
    ],
    deliverables: [
      "شهادة ضمان رسمية لمدة 10 سنوات كاملة.",
      "إيقاف فوري لتآكل الأبواب والأثاث الخشبي.",
    ],
    warrantyYears: 10,
  },
];

const SAFETY_COMPARISON_DATA: SafetyComparisonRow[] = [
  {
    aspect: "نوع ومصدر المبيدات المستخدمة",
    asasIPMSystem: "مبيدات صحة عامة أصلية (ألمانية، أمريكية، سويسرية) مرخصة من هيئة الغذاء والدواء (SFDA).",
    randomStreetSprayers: "مبيدات زراعية رخيصة ومحرمة دولياً (مثل الملاثيون والديازينون الزراعي) شديدة السمية.",
    healthNote: "المبيدات الزراعية داخل المنازل تسبب تسمماً تنفسياً وعصبياً خطيراً!",
  },
  {
    aspect: "الرائحة والحاجة لمغادرة المنزل",
    asasIPMSystem: "مبيدات وجل بدون رائحة تماماً؛ لا تحتاج الأسرة لمغادرة المنزل أو تفريغ أواني المطبخ.",
    randomStreetSprayers: "روائح كيروسين وغازات خانقة تجبر الأسرة على هجر المنزل لأيام وتلتصق بالأثاث.",
    healthNote: "راحة وأمان أطفالكم وكبار السن أولويتنا",
  },
  {
    aspect: "القضاء على البيض ومنع عودة الحشرات",
    asasIPMSystem: "نستخدم منظمات النمو (IGR) مع المبيد الكبسولي لكسر دورة التكاثر والقضاء على البيض 100%.",
    randomStreetSprayers: "يقتل بعض الحشرات الظاهرة فقط، وبعد أسبوع يفقس البيض الجديد وتعود المشكلة أشد.",
    healthNote: "حلولنا علمية جذرية وليست مؤقتة",
  },
  {
    aspect: "الضمان الرسمي والمتابعة",
    asasIPMSystem: "عقد ضمان رسمي مختوم (من 6 أشهر إلى 15 سنة حسب الآفة) مع زيارة متابعة مجانية.",
    randomStreetSprayers: "لا يوجد مقر ولا سجل تجاري ولا ضمان؛ يغلق هاتفه فور استلام المبلغ.",
    healthNote: "تعامل مع مؤسسة رسمية معتمدة في الخرج",
  },
];

const KHARJ_PEST_SECTORS: KharjPestSector[] = [
  {
    sectorName: "قطاع شمال الخرج (الفلل الجديدة والمباني قيد الإنشاء)",
    environmentalNature: "توسع عمراني في أراضٍ رملية كانت موطناً طبيعياً لمستعمرات الأرضة والعقارب",
    mostCommonPests: [
      "النمل الأبيض (الأرضة) في الدفان وحول الأبواب الخشبية.",
      "رش الدفان الوقائي قبل صب خرسانة النظافة للفلل الجديدة.",
      "العقارب، النمل الأسود، والحشرات الزاحفة في الأحواش.",
    ],
    neighborhoods: ["حي الخزامى", "حي الورود", "حي النهضة", "حي الأندلس", "حي المصيف", "حي العالية"],
    treatedPropertiesCount: 2340,
    responseTime: "20 دقيقة",
  },
  {
    sectorName: "قطاع وسط وغرب الخرج (الأحياء السكنية، الشقق، والمطاعم)",
    environmentalNature: "كثافة سكانية وتجارية عالية مع شبكات صرف متصلة",
    mostCommonPests: [
      "الصراصير الألمانية الصغيرة في المطابخ والمطاعم.",
      "صراصير المجاري الأمريكية الخارجة من البالوعات والمناهل.",
      "بق الفراش في غرف النوم والشقق المفروشة.",
    ],
    neighborhoods: ["حي المنتزه", "حي السلام", "حي الخالدية", "حي الفيصلية", "حي المحطة"],
    treatedPropertiesCount: 2890,
    responseTime: "15 دقيقة",
  },
  {
    sectorName: "قطاع شرق وجنوب الخرج والمزارع والاستراحات",
    environmentalNature: "بيئة زراعية ومساحات خضراء واسعة ومستودعات",
    mostCommonPests: [
      "الفئران والقوارض، الوزغ (البرص)، والعقارب والثعابين.",
      "البعوض (الناموس) والذباب في الحدائق والاستراحات.",
      "سوس الأخشاب والنمل الأبيض في المزارع والمستودعات.",
    ],
    neighborhoods: ["حي الريان", "حي السعادة", "حي اليرموك", "حي مشرف", "الدلم", "الهياثم", "اليمامة"],
    treatedPropertiesCount: 1920,
    responseTime: "25 دقيقة",
  },
];

const PEST_FAQS: PestFAQ[] = [
  {
    id: 1,
    category: "الأمان الصحي والرائحة",
    question: "هل رش المبيدات لديكم بدون رائحة فعلاً؟ وهل يجب علينا مغادرة المنزل أو إخراج أواني المطبخ؟",
    answer:
      "نعم بكل تأكيد؛ نحن في شركة أساس الأمن الخليجي نستخدم الجيل الحديث من المبيدات الألمانية والأمريكية المائية والكبسولية (Micro-Encapsulated) وطعوم الجل (Advion) عديمة الرائحة تماماً والمصرحة من هيئة الغذاء والدواء. لا تحتاج الأسرة لمغادرة المنزل، ولا تحتاج ربة المنزل لتفريغ دواليب المطبخ أو غسل الأواني بعد الرش، وهي آمنة تماماً على الأطفال وكبار السن ومرضى الربو.",
  },
  {
    id: 2,
    category: "مكافحة النمل الأبيض (الأرضة)",
    question: "ظهر النمل الأبيض وأكل حلق الباب الخشبي في فيلتي بالخرج، هل يكفي رش الباب أم يجب حقن الأرضية؟",
    answer:
      "رش الباب وحده خطأ فادح؛ لأن النمل الأبيض الذي تراه في الباب هو مجرد 'شغالات'، بينما المستعمرة الأم والملكة تعيش في الرمل تحت بلاط الدور الأرضي. الحل الجذري الذي ننفذه هو عمل تخريم مجهري دقيق في فواصل البلاط وحقن مبيد (Fipronil) تحت الضغط لعمل حزام أرضي يقضي على الملكة والمستعمرة بالكامل، مع حقن جميع الأبواب الخشبية، ونمنحك شهادة ضمان لمدة 10 سنوات.",
  },
  {
    id: 3,
    category: "صراصير المطبخ الصغيرة",
    question: "عانيت كثيراً من صراصير المطبخ الصغيرة الشقراء وجربت كل المبيدات من السوبرماركت دون فائدة، ما الحل؟",
    answer:
      "الصرصور الألماني الصغير يمتلك مناعة عالية ضد بخاخات السوبرماركت العادية، بل إن رشها يجعله يهرب وينتشر في باقي غرف البيت! نحن نقضي عليه بنسبة 100% من جلسة واحدة عبر بروتوكول مزدوج: تطبيق الجل الأمريكي الجاذب داخل مفاصل الدواليب وموتورات الثلاجة والفرن، مع رش كبسولي يحتوي على 'مانع انسلاخ وفقس البيض (IGR)' ليقضي على الصراصير وأكياس بيضها نهائياً.",
  },
  {
    id: 4,
    category: "بق الفراش",
    question: "كيف تقضون على حشرة بق الفراش؟ وهل أحتاج لرمي المراتب والكنب؟",
    answer:
      "لا ترمِ أثاثك أو مراتبك أبداً؛ نحن نعالج بق الفراش دون إتلاف المفروشات عبر أجهزة التذرير الميكروي (ULV) التي تضخ جزيئات دقيقة تخترق مسام المراتب، الخياطة، وشقوق الأخشاب، بمبيد متخصص يقضي على حشرة البق البالغة ويحرق قشرة البيض الملتصق بالقماش، فتنتهي المشكلة تماماً وتعود للنوم الهادئ من الليلة الأولى.",
  },
  {
    id: 5,
    category: "الضمان والعقود",
    question: "ما هي مدة الضمان على رش المبيدات؟ وماذا يحدث لو ظهرت أي حشرة خلال فترة الضمان؟",
    answer:
      "نقدم شهادة ضمان رسمية مكتومة بختم شركة أساس الأمن الخليجي: ضمان من 6 أشهر إلى سنة كاملة على مكافحة الحشرات المنزلية (الصراصير، النمل، البق، القوارض)، وضمان من 10 إلى 15 سنة على مكافحة النمل الأبيض (الأرضة). وفي حال ظهور أي نشاط حشري خلال فترة الضمان، يتوجه فريقنا فوراً لإعادة الرش والمعالجة مجاناً 100%.",
  },
  {
    id: 6,
    category: "الأسعار والباقات",
    question: "كم تكلفة رش المبيدات للشقة أو الفيلا في الخرج؟",
    answer:
      "أسعارنا تنافسية جداً وتحدد حسب نوع العقار (شقة، دور، فيلا مع حوش، استراحة، أو مطعم) ونوع الإصابة الحشرية. كما نوفر باقات 'الرش الشامل للمنزل والمناهل والحوش' بخصومات مميزة، بالإضافة لعقود المكافحة السنوية للمطاعم والكافيهات المعتمدة لدى البلدية.",
  },
];

// ============================================================================
// 3. Main Page Component (المكون الرئيسي لصفحة رش مبيدات بالخرج)
// ============================================================================

export default function PestControlPage() {
  // Interactive States
  const [selectedPestId, setSelectedPestId] = useState<string>("termites-white-ants");
  const [selectedTechId, setSelectedTechId] = useState<string>("german-gel-baiting");
  const [activeLifecycleStage, setActiveLifecycleStage] = useState<number>(3);
  const [activeTermiteTab, setActiveTermiteTab] = useState<string>("post-construction");
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  // Interactive Pest Control Estimator States
  const [calcPropertyType, setCalcPropertyType] = useState<string>("فيلا سكنية كاملة مع الحوش");
  const [calcPestTarget, setCalcPestTarget] = useState<string>(
    "إبادة شاملة (صراصير + نمل + حشرات زاحفة)"
  );
  const [calcRoomsOrMeters, setCalcRoomsOrMeters] = useState<number>(200);
  const [calcOdorlessOption, setCalcOdorlessOption] = useState<boolean>(true);
  const [calcNeighborhood, setCalcNeighborhood] = useState<string>("حي الخزامى");

  // Current Selected Objects
  const currentPest =
    PEST_SPECIES_DATABASE.find((p) => p.id === selectedPestId) || PEST_SPECIES_DATABASE[0];

  const currentTech =
    PESTICIDE_TECHNOLOGIES_DB.find((t) => t.id === selectedTechId) ||
    PESTICIDE_TECHNOLOGIES_DB[0];

  const currentLifecycleObj =
    ERADICATION_LIFECYCLE_STAGES.find((s) => s.stageOrder === activeLifecycleStage) ||
    ERADICATION_LIFECYCLE_STAGES[2];

  const currentTermitePlan =
    TERMITE_PLANS.find((tp) => tp.id === activeTermiteTab) || TERMITE_PLANS[1];

  // Dynamic Calculations for Estimator
  const isTermiteSelected = calcPestTarget.includes("النمل الأبيض");
  const estimatedWarranty = isTermiteSelected ? "10 إلى 15 سنة رسمية" : "6 إلى 12 شهراً شامل المتابعة";
  const estimatedTreatmentTime =
    calcRoomsOrMeters <= 150 ? "45 إلى 60 دقيقة" : "90 إلى 120 دقيقة";

  // Send Estimator Request via WhatsApp
  const handleSendPestWhatsApp = () => {
    const message = `السلام عليكم شركة أساس الأمن الخليجي،
أرغب في حجز خدمة رش مبيدات ومكافحة حشرات بالخرج:
🏠 *نوع العقار:* ${calcPropertyType}
🐜 *نوع المكافحة المطلوبة:* ${calcPestTarget}
📐 *المساحة التقريبية:* ${calcRoomsOrMeters} م²
🌿 *نوع المبيد المفضل:* ${calcOdorlessOption ? "ألماني/أمريكي بدون رائحة (بدون مغادرة المنزل)" : "رش شامل داخلي وخارجي"}
📍 *الحي بالخرج:* ${calcNeighborhood}
🛡️ *الضمان المطلوب:* ${estimatedWarranty}

أرجو التواصل معي لتحديد الموعد والتكلفة.`;

    window.open(
      `https://wa.me/966501206816?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden" dir="rtl">
      
      {/* =====================================================================
          SECTION 1: BIO-SAFE IPM HERO SECTION (هيرو صحي وهندسي بدون صور)
      ===================================================================== */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#00BFFF]/20">
        {/* Background Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00BFFF]/10 rounded-full blur-[130px] pointer-events-none"></div>

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
            <span className="text-gray-300">خدمات الصحة العامة والبيئة</span>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37] font-bold">شركة رش مبيدات ومكافحة حشرات بالخرج</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Column: Hero Copy & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <ShieldCheck className="w-4 h-4" />
                <span>مبيدات صحة عامة معتمدة من SFDA • بدون رائحة وبدون مغادرة المنزل</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                شركة <span className="text-[#00BFFF]">رش مبيدات</span> بالخرج.. إبادة فورية وجذرية للحشرات والنمل الأبيض بضمان رسمي
              </h1>

              <p className="text-gray-300 text-base sm:text-xl leading-relaxed">
                احمِ أسرتك وممتلكاتك من مخاطر الحشرات، القوارض، والنمل الأبيض المدمر للأخشاب. في{" "}
                <strong className="text-white">شركة أساس الأمن الخليجي</strong> نطبق بروتوكول المكافحة المتكاملة (IPM) باستخدام{" "}
                <strong className="text-[#D4AF37]">
                  أحدث المبيدات الألمانية والأمريكية الكبسولية، حقن الجل الذكي للمطابخ، والحقن الهيدروليكي ضد الأرضة
                </strong>{" "}
                للقضاء على الحشرات وبيضها بنسبة <strong className="text-[#00BFFF]">100% من الجلسة الأولى</strong> مع ضمان مكتوب يصل إلى 15 سنة.
              </p>

              {/* 4 Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">مبيدات ألمانية بدون رائحة</h2>
                    <p className="text-xs text-gray-400">لا حاجة لمغادرة المنزل أو إزالة الأواني</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <Syringe className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">حقن النمل الأبيض (الأرضة)</h2>
                    <p className="text-xs text-gray-400">حماية الأبواب والأساسات بضمان 15 سنة</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">القضاء على الحشرات والبيض معاً</h2>
                    <p className="text-xs text-gray-400">منظمات نمو IGR تمنع عودة الإصابة</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#061124]/90 p-4 rounded-2xl border border-[#00BFFF]/30">
                  <div className="w-11 h-11 rounded-xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-sm">آمن للأطفال ومرضى الربو</h2>
                    <p className="text-xs text-gray-400">مرخص من الصحة وهيئة الغذاء والدواء</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons with Explicit Title Attributes */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تواصل عبر واتساب لحجز خدمة رش المبيدات ومكافحة الحشرات بالخرج"
                  className="flex items-center gap-3 bg-[#D4AF37] hover:bg-[#e5c247] text-[#030b1c] font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:scale-105 text-base sm:text-lg"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>احجز جلسة المكافحة الفورية عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  title="اتصل هاتفياً بشركة رش مبيدات بالخرج على الرقم 0501206816"
                  className="flex items-center gap-3 bg-[#061124] hover:bg-[#00BFFF] text-white hover:text-[#030b1c] border-2 border-[#00BFFF] font-extrabold px-7 py-4 rounded-2xl transition-all duration-300 text-base sm:text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+966 50 120 6816</span>
                </a>
              </div>
            </div>

            {/* Left Column: Bio-Security & IPM Telemetry Dashboard (Zero Images) */}
            <div className="lg:col-span-5">
              <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-[0_0_45px_rgba(212,175,55,0.25)] relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#00BFFF]/15 border border-[#00BFFF] flex items-center justify-center text-[#00BFFF]">
                      <FlaskConical className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-[#D4AF37] font-bold block">
                        مختبر الأمان الحيوي - الخرج
                      </span>
                      <h3 className="text-lg font-extrabold text-white">
                        معايير المكافحة المتكاملة (IPM)
                      </h3>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-extrabold px-3 py-1 rounded-full">
                    SFDA Approved
                  </span>
                </div>

                {/* Key Bio-Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#D4AF37]/40 text-center">
                    <span className="text-xs text-gray-400 block mb-1">نسبة إبادة المستعمرة والبيض</span>
                    <span className="text-3xl font-black text-[#D4AF37]" dir="ltr">
                      100%
                    </span>
                    <span className="text-[11px] text-[#00BFFF] block mt-1">
                      تأثير مزدوج + منظم نمو IGR
                    </span>
                  </div>

                  <div className="bg-[#030b1c] p-4 rounded-2xl border border-[#00BFFF]/40 text-center">
                    <span className="text-xs text-gray-400 block mb-1">الأبخرة والروائح السامة</span>
                    <span className="text-3xl font-black text-emerald-400" dir="ltr">
                      0% ODOR
                    </span>
                    <span className="text-[11px] text-[#D4AF37] block mt-1">
                      جل ومبيدات كبسولية نقية
                    </span>
                  </div>
                </div>

                {/* Approved Global Brands */}
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800 space-y-3 mb-6">
                  <span className="text-xs font-bold text-[#00BFFF] block">
                    المركبات العالمية الأصلية المعتمدة لدينا:
                  </span>
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#061124] border border-gray-800 flex items-center justify-between">
                      <span className="font-bold text-white">Bayer ألمانيا</span>
                      <span className="text-[#D4AF37] text-[10px]">Maxforce / K-Othrine</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#061124] border border-gray-800 flex items-center justify-between">
                      <span className="font-bold text-white">Syngenta سويسرا</span>
                      <span className="text-[#00BFFF] text-[10px]">Advion / Icon CS</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#061124] border border-gray-800 flex items-center justify-between">
                      <span className="font-bold text-white">BASF ألمانيا</span>
                      <span className="text-[#D4AF37] text-[10px]">Termidor / Fipronil</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#061124] border border-gray-800 flex items-center justify-between">
                      <span className="font-bold text-white">تذرير ميكروي</span>
                      <span className="text-emerald-400 text-[10px]">ULV 15 Micron</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-4 flex items-center gap-3">
                  <HeartHandshake className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                  <p className="text-xs text-gray-200 leading-relaxed">
                    <strong className="text-emerald-400">تعهد السلامة الصحية:</strong> لا نستخدم المبيدات الزراعية المحظورة نهائياً؛ كافة موادنا مخصصة للصحة العامة والمنازل والمطاعم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: INTERACTIVE PEST DIAGNOSTIC & ERADICATION ENGINE
      ===================================================================== */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
              <Radar className="w-4 h-4" />
              موسوعة التشخيص الحشري التفاعلية
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              اختر نوع <span className="text-[#D4AF37]">الحشرة أو الآفة</span> في منزلك واعرف بروتوكول إبادتها
            </h2>
            <p className="text-gray-300 text-lg">
              كل حشرة لها بيولوجيا مختلفة وتتطلب مادة فعالة وطريقة تطبيق مخصصة للقضاء عليها من جذورها:
            </p>
          </div>

          {/* 4 Pest Species Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {PEST_SPECIES_DATABASE.map((pest) => {
              const isSelected = selectedPestId === pest.id;
              return (
                <button
                  key={pest.id}
                  onClick={() => setSelectedPestId(pest.id)}
                  title={`عرض طريقة مكافحة ${pest.name}`}
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
                      {pest.threatCategory}
                    </span>
                    <Bug className={`w-5 h-5 ${isSelected ? "text-[#030b1c]" : "text-[#D4AF37]"}`} />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">{pest.name}</h3>
                </button>
              );
            })}
          </div>

          {/* Selected Pest Detailed Eradication Report */}
          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-800">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span
                    className={`text-xs font-extrabold px-3.5 py-1 rounded-full border ${currentPest.threatBadgeColor}`}
                  >
                    التصنيف: {currentPest.threatCategory}
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold px-3 py-1 rounded-full">
                    {currentPest.leaveHomeRequired}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {currentPest.name}
                </h3>
                <span className="text-xs text-gray-400 font-mono" dir="ltr">
                  {currentPest.scientificClassification}
                </span>
              </div>

              <div className="bg-[#030b1c] px-5 py-3.5 rounded-2xl border border-[#D4AF37]/40 flex items-center gap-4">
                <div>
                  <span className="text-xs text-gray-400 block">الضمان المعتمد</span>
                  <span className="text-sm sm:text-base font-black text-[#D4AF37]">
                    {currentPest.warrantyPeriod}
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-gray-800"></div>
                <div>
                  <span className="text-xs text-gray-400 block">زمن الجلسة</span>
                  <span className="text-xs sm:text-sm font-bold text-[#00BFFF]">
                    {currentPest.sessionDuration}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Signs & Risks */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#00BFFF]/30">
                  <span className="text-xs text-gray-400 block mb-1">
                    المادة الفعالة المعتمدة للإبادة:
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#D4AF37]" dir="ltr">
                    {currentPest.activeChemicalIngredient}
                  </span>
                  <span className="text-xs text-[#00BFFF] block mt-1.5">
                    طريقة التطبيق: {currentPest.applicationMethod}
                  </span>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800">
                  <h4 className="text-base font-extrabold text-[#00BFFF] mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#D4AF37]" />
                    <span>علامات وجود هذه الآفة في عقارك:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentPest.infestationSigns.map((sgn, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" />
                        <span>{sgn}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-red-900/40">
                  <h4 className="text-base font-extrabold text-red-400 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span>الأضرار والمخاطر عند إهمال المكافحة:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentPest.structuralOrHealthRisks.map((rsk, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>{rsk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Eradication Protocol */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="bg-[#030b1c] p-6 sm:p-8 rounded-2xl border-2 border-[#D4AF37]/40">
                  <h4 className="text-xl font-extrabold text-[#D4AF37] mb-5 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#00BFFF]" />
                    <span>خطة الإبادة الجذرية في شركة أساس الأمن الخليجي:</span>
                  </h4>

                  <div className="space-y-4">
                    {currentPest.eradicationProtocol.map((step, idx) => (
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
                    <span className="text-xs text-gray-400 block">نتيجة الجلسة</span>
                    <span className="text-base font-extrabold text-white">
                      قضاء نهائي على الحشرة والبيض مع شهادة ضمان
                    </span>
                  </div>

                  <Link
                    href="https://wa.me/966501206816"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`طلب مكافحة ${currentPest.name} عبر واتساب`}
                    className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black px-7 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>اطلب إبادة هذه الآفة الآن</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: CSS INTERACTIVE COLONY ERADICATION LIFECYCLE (كسر التكاثر)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
              آلية العمل البيولوجي للمبيدات الحديثة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              كيف نقضي على <span className="text-[#00BFFF]">المستعمرة والبيض الكامن</span> بنسبة 100%؟
            </h2>
            <p className="text-gray-300 text-lg">
              اضغط على المراحل الزمنية الأربع أدناه لترى كيف تعمل تقنية العدوى المتسلسلة ومنظمات النمو (IGR) بعد انتهاء الرش:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {ERADICATION_LIFECYCLE_STAGES.map((stg) => {
              const isSelected = activeLifecycleStage === stg.stageOrder;
              return (
                <button
                  key={stg.stageOrder}
                  onClick={() => setActiveLifecycleStage(stg.stageOrder)}
                  title={stg.title}
                  className={`p-5 rounded-2xl text-right border-2 transition-all ${
                    isSelected
                      ? "bg-[#061124] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                      : "bg-[#061124]/60 border-gray-800 hover:border-[#00BFFF]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#00BFFF]">
                      المرحلة 0{stg.stageOrder}
                    </span>
                    <span className="text-xs font-black text-[#D4AF37]">{stg.timeFrame}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug">{stg.title}</h3>
                </button>
              );
            })}
          </div>

          <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/50 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Visual Radar & Colony Destruction Meter */}
              <div className="lg:col-span-5 bg-[#030b1c] p-8 rounded-3xl border border-gray-800 flex flex-col items-center justify-center">
                <span className="text-xs text-gray-400 font-bold mb-4">
                  مؤشر القضاء على المستعمرة واليرقات
                </span>

                <div className="relative w-48 h-48 rounded-full border-8 border-[#061124] flex flex-col items-center justify-center bg-gradient-to-br from-[#061124] to-[#0a1d3b] shadow-[0_0_30px_rgba(0,191,255,0.3)]">
                  <span className="text-4xl font-black text-emerald-400">
                    {100 - currentLifecycleObj.colonySurvivalRate}%
                  </span>
                  <span className="text-xs text-gray-300 font-bold mt-1">نسبة الإبادة المحققة</span>
                  <span className="text-[11px] text-[#D4AF37] mt-1">
                    بقاء الحشرات: {currentLifecycleObj.colonySurvivalRate}%
                  </span>
                </div>

                <div className="w-full mt-6 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">درع الوقاية الكبسولي النشط:</span>
                    <span className="text-[#00BFFF] font-bold">
                      {currentLifecycleObj.protectionShieldRate}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00BFFF] to-emerald-400 transition-all duration-500"
                      style={{ width: `${currentLifecycleObj.protectionShieldRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Stage Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`text-xs font-extrabold px-4 py-1.5 rounded-full border ${currentLifecycleObj.themeColor}`}
                  >
                    {currentLifecycleObj.statusTag}
                  </span>
                  <span className="text-sm font-bold text-[#D4AF37]">
                    النطاق الزمني: {currentLifecycleObj.timeFrame}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentLifecycleObj.title}
                </h3>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#D4AF37]/40">
                  <span className="text-xs text-[#00BFFF] font-bold block mb-1">
                    الآلية البيولوجية والكيميائية:
                  </span>
                  <p className="text-base sm:text-lg font-extrabold text-[#D4AF37]">
                    {currentLifecycleObj.biologicalMechanism}
                  </p>
                </div>

                <p className="text-gray-300 text-base leading-relaxed">
                  {currentLifecycleObj.technicalDetails}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: 4 ADVANCED APPLICATION TECHNOLOGIES (تقنيات الرش والحقن)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              الأجهزة والتقنيات الأربع في <span className="text-[#D4AF37]">أساس الأمن الخليجي</span>
            </h2>
            <p className="text-gray-300 text-lg">
              نستخدم لكل موقع داخل المنزل أو خارجه التقنية الأنسب التي تضمن أقصى فعالية وأعلى درجات الأمان:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {PESTICIDE_TECHNOLOGIES_DB.map((tech) => {
              const isSelected = selectedTechId === tech.id;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTechId(tech.id)}
                  title={tech.title}
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
                    {tech.odorStatus.split(" ")[0]} {tech.odorStatus.split(" ")[1]}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">{tech.title}</h3>
                </button>
              );
            })}
          </div>

          <div className="bg-[#061124]/95 border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#00BFFF] bg-[#00BFFF]/10 px-3 py-1 rounded-lg border border-[#00BFFF]/30">
                    {currentTech.codeName}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-3">
                    {currentTech.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {currentTech.overview}
                  </p>
                </div>

                <div className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800 space-y-3">
                  <h4 className="font-extrabold text-[#D4AF37] text-base">
                    كيف تعمل هذه التقنية؟
                  </h4>
                  {currentTech.howItWorksSteps.map((stp, i) => (
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
                    <span className="text-gray-400">حالة الرائحة:</span>
                    <span className="font-bold text-emerald-400">{currentTech.odorStatus}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2.5">
                    <span className="text-gray-400">دقة التطبيق:</span>
                    <span className="font-bold text-[#00BFFF]">{currentTech.dropletOrDoseSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">بقاء الأثر الواقي:</span>
                    <span className="font-bold text-[#D4AF37]">{currentTech.residualEffectMonths}</span>
                  </div>
                </div>

                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <h4 className="text-sm font-bold text-white mb-3">أماكن التطبيق المخصصة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentTech.targetZones.map((zn, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#061124] text-[#00BFFF] border border-[#00BFFF]/30 px-3 py-1.5 rounded-lg font-semibold"
                      >
                        • {zn}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/40 p-4 rounded-xl text-xs text-emerald-300 font-bold text-center">
                  ✓ {currentTech.safetyProfile}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: ANTI-TERMITE SPECIAL DIVISION (قسم مكافحة النمل الأبيض قبل وبعد البناء)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-red-400 font-bold text-sm bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/30">
              درع الحماية ضد الأرضة في الخرج
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
              قسم مكافحة <span className="text-[#D4AF37]">النمل الأبيض (الأرضة)</span> قبل وبعد البناء
            </h2>
            <p className="text-gray-300 text-lg">
              نقدم حلولاً هندسية معتمدة لتحصين المباني قيد الإنشاء (رش الدفان) ومعالجة الفلل المسكونة (الحقن تحت البلاط) بضمان يصل إلى 15 سنة:
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-10">
            {TERMITE_PLANS.map((tp) => (
              <button
                key={tp.id}
                onClick={() => setActiveTermiteTab(tp.id)}
                title={tp.title}
                className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base border-2 transition-all ${
                  activeTermiteTab === tp.id
                    ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                    : "bg-[#061124] text-white border-[#00BFFF]/30 hover:border-[#D4AF37]"
                }`}
              >
                {tp.title}
              </button>
            ))}
          </div>

          <div className="bg-[#061124]/95 border-2 border-[#00BFFF]/50 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
              <div>
                <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-extrabold px-3 py-1 rounded-lg">
                  {currentTermitePlan.stageBadge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {currentTermitePlan.title}
                </h3>
                <p className="text-[#00BFFF] font-bold text-sm mt-1">
                  {currentTermitePlan.subtitle}
                </p>
              </div>
              <div className="bg-[#030b1c] px-5 py-3 rounded-2xl border border-[#D4AF37]">
                <span className="text-xs text-gray-400 block">شهادة الضمان المعتمدة</span>
                <span className="text-xl font-black text-[#D4AF37]">
                  {currentTermitePlan.warrantyYears} سنة رسمية
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-8">
              {currentTermitePlan.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {currentTermitePlan.executionSteps.map((st, i) => (
                <div key={i} className="bg-[#030b1c] p-6 rounded-2xl border border-gray-800">
                  <span className="text-xs font-black text-[#00BFFF] block mb-2">
                    المرحلة التنفيذية 0{i + 1}
                  </span>
                  <h4 className="font-extrabold text-white text-base mb-2">{st.stepTitle}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{st.stepDetail}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#030b1c] p-5 rounded-2xl border border-[#D4AF37]/40 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs sm:text-sm space-y-1">
                <div>
                  <strong className="text-[#D4AF37]">المبيد المعتمد:</strong>{" "}
                  <span className="text-white">{currentTermitePlan.chemicalUsed}</span>
                </div>
                <div>
                  <strong className="text-[#00BFFF]">معدل الضخ القياسي:</strong>{" "}
                  <span className="text-gray-300">{currentTermitePlan.dosagePerMeter}</span>
                </div>
              </div>

              <Link
                href="https://wa.me/966501206816"
                target="_blank"
                rel="noopener noreferrer"
                title={`حجز ${currentTermitePlan.title} عبر واتساب`}
                className="bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black px-6 py-3 rounded-xl text-sm transition-all"
              >
                اطلب معاينة النمل الأبيض الآن
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: INTERACTIVE PEST CONTROL CALCULATOR (حاسبة رش المبيدات)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#061124]/95 border-2 border-[#00BFFF] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_45px_rgba(0,191,255,0.2)]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3">
                <Calculator className="w-4 h-4" />
                نموذج تحديد باقة المكافحة والتسعير الفوري
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                صمم باقة <span className="text-[#D4AF37]">رش المبيدات</span> لمنزلك واحصل على العرض الفوري
              </h2>
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
                      <option value="فيلا سكنية كاملة مع الحوش">فيلا سكنية كاملة مع الحوش والمناهل</option>
                      <option value="شقة سكنية / دور مستقل">شقة سكنية / دور مستقل</option>
                      <option value="مبنى قيد الإنشاء (رش دفان قبل الصب)">
                        مبنى قيد الإنشاء (رش دفان قبل الصب)
                      </option>
                      <option value="استراحة / مزرعة / حديقة">استراحة / مزرعة / حديقة</option>
                      <option value="مطعم / كافيه / مستودع تجاري">مطعم / كافيه / مستودع تجاري</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      2. نوع الآفة المستهدفة:
                    </label>
                    <select
                      value={calcPestTarget}
                      onChange={(e) => setCalcPestTarget(e.target.value)}
                      className="w-full bg-[#030b1c] border border-gray-700 focus:border-[#00BFFF] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none"
                    >
                      <option value="إبادة شاملة (صراصير + نمل + حشرات زاحفة)">
                        إبادة شاملة (صراصير + نمل + حشرات زاحفة)
                      </option>
                      <option value="مكافحة النمل الأبيض (الأرضة) بالحقن أو الرش">
                        مكافحة النمل الأبيض (الأرضة) بالحقن أو الرش
                      </option>
                      <option value="إبادة صراصير المطبخ الصغيرة بالجل الألماني">
                        إبادة صراصير المطبخ الصغيرة بالجل الألماني
                      </option>
                      <option value="إبادة بق الفراش والحشرات اللادغة">
                        إبادة بق الفراش والحشرات اللادغة
                      </option>
                      <option value="مكافحة الفئران، العقارب، والوزغ (البرص)">
                        مكافحة الفئران، العقارب، والوزغ (البرص)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Area Slider */}
                <div className="bg-[#030b1c] p-5 rounded-2xl border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-bold text-gray-200">
                      3. المساحة التقريبية للعقار بالمتر المربع:
                    </label>
                    <span className="bg-[#D4AF37] text-[#030b1c] font-black px-3.5 py-1 rounded-lg text-sm">
                      {calcRoomsOrMeters} م²
                    </span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={800}
                    step={25}
                    value={calcRoomsOrMeters}
                    onChange={(e) => setCalcRoomsOrMeters(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-gray-800 rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      4. الحي داخل محافظة الخرج:
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

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      5. تفضيل الرائحة:
                    </label>
                    <button
                      type="button"
                      onClick={() => setCalcOdorlessOption(!calcOdorlessOption)}
                      title="تبديل خيار المبيد بدون رائحة"
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold border bg-[#030b1c] text-[#D4AF37] border-[#D4AF37] flex items-center justify-between"
                    >
                      <span>{calcOdorlessOption ? "✓ مبيدات ألمانية بدون رائحة تماماً" : "رش شامل داخلي وخارجي"}</span>
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Summary */}
              <div className="lg:col-span-5 bg-[#030b1c] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 space-y-5 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <div className="border-b border-gray-800 pb-4">
                  <span className="text-xs text-[#00BFFF] font-bold block">ملخص جلسة المكافحة</span>
                  <h3 className="text-lg font-extrabold text-white mt-1">{calcPestTarget}</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">زمن التنفيذ المتوقع:</span>
                    <span className="font-bold text-[#00BFFF]">{estimatedTreatmentTime}</span>
                  </div>
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">مغادرة المنزل أو غسل الأواني:</span>
                    <span className="font-bold text-emerald-400">غير مطلوب (آمن 100%)</span>
                  </div>
                  <div className="flex justify-between bg-[#061124] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-gray-400">مدة الضمان المرفق:</span>
                    <span className="font-black text-[#D4AF37]">{estimatedWarranty}</span>
                  </div>
                </div>

                <button
                  onClick={handleSendPestWhatsApp}
                  title="إرسال طلب حجز رش المبيدات عبر واتساب"
                  className="w-full bg-[#D4AF37] hover:bg-[#e5c148] text-[#030b1c] font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>تأكيد الطلب ومعرفة السعر عبر واتساب</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: SAFETY COMPARISON TABLE & AL-KHARJ SECTORS
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              الفرق بين <span className="text-[#00BFFF]">مبيدات الصحة العامة المعتمدة</span> والمبيدات الزراعية السامة
            </h2>
            <p className="text-gray-300 text-lg">
              احذر من العمالة المجهولة التي ترش مبيدات زراعية رخيصة داخل البيوت؛ شاهد الفرق الجوهري:
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-[#D4AF37] bg-[#061124]/95 shadow-xl mb-20">
            <table className="w-full text-right border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-[#030b1c] border-b-2 border-[#D4AF37]">
                  <th className="p-5 text-white font-extrabold text-base w-1/4">معيار الأمان والفعالية</th>
                  <th className="p-5 text-[#D4AF37] font-extrabold text-base w-1/3 bg-[#D4AF37]/10 border-x border-[#D4AF37]/30">
                    شركة أساس الأمن الخليجي (نظام IPM معتمد)
                  </th>
                  <th className="p-5 text-gray-400 font-bold text-base w-1/3">
                    العمالة العشوائية / المبيدات الزراعية والتجارية
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {SAFETY_COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#030b1c]/60 transition-colors">
                    <td className="p-5 font-bold text-white">
                      <div>{row.aspect}</div>
                      <span className="inline-block mt-1 text-[11px] bg-red-500/15 text-red-400 px-2 py-0.5 rounded">
                        {row.healthNote}
                      </span>
                    </td>
                    <td className="p-5 bg-[#D4AF37]/5 border-x border-[#D4AF37]/20 text-sm text-white font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{row.asasIPMSystem}</span>
                      </div>
                    </td>
                    <td className="p-5 text-sm text-gray-400">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{row.randomStreetSprayers}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Al-Kharj Sectors */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {KHARJ_PEST_SECTORS.map((sec, idx) => (
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
                      +{sec.treatedPropertiesCount} عقار محمي
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2">{sec.sectorName}</h3>
                  <p className="text-xs text-gray-400 mb-4">{sec.environmentalNature}</p>
                  <div className="space-y-2 mb-6">
                    {sec.mostCommonPests.map((pst, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span>{pst}</span>
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
          SECTION 8: COMPREHENSIVE FAQS (الأسئلة الشائعة حول رش المبيدات)
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              الأسئلة الشائعة حول <span className="text-[#D4AF37]">رش المبيدات ومكافحة الحشرات</span>
            </h2>
          </div>

          <div className="space-y-4">
            {PEST_FAQS.map((faq) => {
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
          SECTION 9: FINAL CTA & SEO-COMPLETE INTERNAL LINKS
      ===================================================================== */}
      <section className="py-20 relative z-10 border-t border-[#00BFFF]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#061124] via-[#0a1d3b] to-[#061124] border-2 border-[#D4AF37] rounded-3xl p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <ShieldCheck className="w-4 h-4" />
                إبادة فورية بدون رائحة • ضمان رسمي مكتوب حتى 15 سنة
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                استعد نظافة وأمان منزلك وتخلص من الحشرات للأبد!
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
                تواصل الآن مع قسم المكافحة المتكاملة في{" "}
                <span className="text-[#D4AF37] font-bold">شركة أساس الأمن الخليجي</span> بالخرج ليصلك فريقنا المختص في أسرع وقت.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="https://wa.me/966501206816"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="راسل شركة أساس الأمن الخليجي عبر واتساب لطلب رش المبيدات"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#e6c247] text-[#030b1c] font-black text-lg px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>احجز موعد الرش عبر واتساب</span>
                </Link>

                <a
                  href="tel:+966501206816"
                  title="اتصال هاتفي مباشر بقسم مكافحة الحشرات بالخرج 0501206816"
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
                  href="/services/sewage-clearing"
                  title="خدمة تسليك مجاري بالضغط في الخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  تسليك المجاري بالضغط
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/services/tank-cleaning"
                  title="خدمة غسيل وتعقيم وعزل الخزانات بالخرج"
                  className="text-[#00BFFF] hover:text-[#D4AF37] underline"
                >
                  غسيل وعزل الخزانات
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