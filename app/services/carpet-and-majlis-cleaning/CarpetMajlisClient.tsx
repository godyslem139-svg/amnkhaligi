"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  PhoneCall,
  Phone,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Star,
  Clock,
  Droplets,
  Wind,
  Flame,
  Sofa,
  Layers,
  HeartHandshake,
  HelpCircle,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  MapPin,
  Award,
  ThumbsUp,
  Calculator,
  Send,
  AlertTriangle,
  Zap,
  Crown,
  Check,
  Building2,
  Users,
  Leaf,
  Thermometer,
  Sliders,
  FileCheck,
} from "lucide-react";

type FabricKey = "velvet" | "linen" | "leather" | "suede" | "persian" | "moquette";
type StainCategory = "all" | "drinks" | "oils" | "kids" | "odors";

export default function CarpetMajlisClient() {
  // حالة تبويبات أنواع الأقمشة
  const [activeFabric, setActiveFabric] = useState<FabricKey>("velvet");

  // حالة فلتر موسوعة البقع
  const [activeStainCat, setActiveStainCat] = useState<StainCategory>("all");

  // حالة الأسئلة الشائعة Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // حالة حاسبة الحجز الذكية
  const [calcData, setCalcData] = useState({
    majlisMeters: 12,
    carpetsCount: 2,
    sofaSeats: 0,
    curtainsCount: 0,
    neighborhood: "حي الخزامى",
    extraSteam: true,
    extraPerfume: true,
    extraStainShield: false,
    urgency: "في نفس اليوم",
    clientName: "",
    clientPhone: "",
  });

  // =========================================================
  // بيانات الخدمات الثمانية المتكاملة
  // =========================================================
  const coreServices = [
    {
      icon: Sofa,
      accent: "gold",
      badge: "الأكثر طلباً",
      title: "غسيل المجالس العربية والملكية",
      desc: "تنظيف عميق للمجالس الأرضية والمرتفعة بجميع مقاساتها، مع عناية فائقة بالمساند والتكايات والزخارف وإعادة النسيج لرونقه الأصلي.",
      points: [
        "شفط الأتربة العالقة بين الثنايا",
        "إزالة بقع القهوة والشاي والهيل",
        "تجفيف قياسي خلال ساعات قليلة",
      ],
    },
    {
      icon: Layers,
      accent: "blue",
      badge: "بدون نقل",
      title: "غسيل السجاد الفاخر والموكيت",
      desc: "غسيل السجاد الإيراني والتركي والبلجيكي والموكيت المثبت في الفلل والمساجد والقصور بأجهزة الدوران اللطيف والشفط الحراري.",
      points: [
        "الحفاظ التام على نعومة الوبرة",
        "تثبيت الألوان ومنع التداخل",
        "إزالة الروائح العالقة في القاع",
      ],
    },
    {
      icon: Crown,
      accent: "gold",
      badge: "عناية فائقة",
      title: "تنظيف الكنب والانتريهات المودرن",
      desc: "برامج تنظيف مخصصة للكنب الكلاسيك والمودرن والركنات (L-Shape) مع التعامل الاحترافي مع الأقمشة الفاتحة والحساسة.",
      points: [
        "مناسب للمخمل والكتان والشامواه",
        "تلميع وترطيب الكنب الجلد الطبيعي",
        "معالجة مساند الذراعين شديدة الاتساخ",
      ],
    },
    {
      icon: Flame,
      accent: "blue",
      badge: "تعقيم 99.9%",
      title: "التعقيم الحراري ضد البكتيريا وعث الغبار",
      desc: "استخدام بخار جاف عالي الحرارة يخترق مسام الإسفنج الداخلي لقتل الميكروبات والفيروسات وحشرات الفراش غير المرئية.",
      points: [
        "مثالي لمرضى الحساسية والربو",
        "آمن تماماً على الأطفال والرضع",
        "خالي من الكلور والمواد المهيجة",
      ],
    },
    {
      icon: Droplets,
      accent: "gold",
      badge: "مذيبات ألمانية",
      title: "إزالة البقع الصعبة والمستعصية",
      desc: "بروتوكول كيميائي آمن لتفكيك أصعب البقع القديمة والجديدة مثل الحبر، الزيوت، الشحوم، العصائر، وبقع المكياج.",
      points: [
        "اختبار ثبات اللون قبل المعالجة",
        "تفكيك البقعة دون فرك خشن",
        "نتائج ملحوظة من الجلسة الأولى",
      ],
    },
    {
      icon: Wind,
      accent: "blue",
      badge: "في موقعها",
      title: "تنظيف الستائر والمفروشات بالبخار",
      desc: "تنظيف وتعقيم الستائر بجميع طبقاتها (الشيفون، المخمل، البلاك أوت) وهي معلقة في مكانها بدون فك أو تركيب.",
      points: [
        "إزالة الغبار الموسمي والاصفرار",
        "فرد الكرمشة بالبخار الحراري",
        "توفير وقت وجهد الفك والتركيب",
      ],
    },
    {
      icon: ShieldCheck,
      accent: "gold",
      badge: "نوم صحي",
      title: "تنظيف وتعقيم مراتب السرير والوسائد",
      desc: "تنظيف عميق لمراتب غرف النوم لإزالة بقع التعرق والاصفرار والقضاء على عث الفراش لتوفير بيئة نوم صحية.",
      points: [
        "شفط عميق للجلد الميت والغبار",
        "تعقيم حراري شامل للوجهين",
        "تعطير هادئ ومنعش يدوم طويلاً",
      ],
    },
    {
      icon: Sparkles,
      accent: "blue",
      badge: "لمسة ملكية",
      title: "التعطير الفاخر بالعود والعطور الفرنسية",
      desc: "المرحلة الختامية التي تمنح مجلسك وسجادك رائحة فندقية فاخرة تدوم لأيام طويلة وتشرفك أمام ضيوفك.",
      points: [
        "اختيارك بين العود أو اللافندر أو المسك",
        "زيوت عطرية لا تترك بقعاً على القماش",
        "القضاء التام على روائح الدخان والرطوبة",
      ],
    },
  ];

  // =========================================================
  // بيانات دليل الأقمشة التفاعلي
  // =========================================================
  const fabricGuides: Record<
    FabricKey,
    {
      label: string;
      temp: string;
      method: string;
      dryTime: string;
      safety: string;
      summary: string;
      steps: string[];
      warning: string;
    }
  > = {
    velvet: {
      label: "المخمل والقطيفة",
      temp: "بخار متوسط مضبوط (85°C)",
      method: "استخلاص بالبخار الجاف + تمشيط باتجاه الوبرة",
      dryTime: "2 إلى 3 ساعات",
      safety: "حماية كاملة من تسطّح الوبرة واللمعان الزائد",
      summary:
        "أقمشة المخمل والقطيفة من أفخم خامات المجالس بالخرج، لكنها حساسة جداً للماء الزائد والفرك العشوائي. نعتمد لها تقنية البخار منخفض الرطوبة مع فرشاة ناعمة تحافظ على نعومة الوبرة واتجاهها.",
      steps: [
        "شفط الغبار الدقيق بفرشاة مخملية ناعمة لمنع خدش النسيج.",
        "رش رغوة جافة متعادلة الحموضة (pH Neutral) مخصصة للمخمل.",
        "الشفط الفوري بالبخار الجاف مع حركة طولية منتظمة باتجاه النسيج.",
        "تمشيط نهائي للوبرة لإعادة المظهر الفخم واللون المتجانس.",
      ],
      warning:
        "تجنب استخدام الماء الساخن المباشر أو الفرك الدائري القوي على المخمل لأنه يترك بقعاً دائمة ويفسد نعومة الوبرة.",
    },
    linen: {
      label: "الكتان والقطن",
      temp: "بخار معتدل (70°C - 80°C)",
      method: "غسيل استخلاصي منخفض الرطوبة لمنع الانكماش",
      dryTime: "2.5 إلى 3.5 ساعات",
      safety: "مضاد للانكماش وتكوّن البقع المائية (Water Rings)",
      summary:
        "يمتص الكتان والقطن السوائل بسرعة، مما يجعله عرضة للانكماش أو ظهور هالات صفراء إذا تم غسله بطريقة تقليدية. نستخدم معه تقنية الرش والشفط المتزامن لتجفيف فوري.",
      steps: [
        "فحص ثبات صبغة القماش في منطقة غير ظاهرة.",
        "معالجة البقع بمذيبات إنزيمية لطيفة لا تضعف ألياف القطن.",
        "تنظيف سريع بضغط بخار متوازن وشفط مضاعف لمنع تشبع الإسفنج.",
        "تهوية سريعة تمنع ظهور أي علامات مائية بعد الجفاف.",
      ],
      warning:
        "الإكثار من الصابون العادي على الكتان يترك بقايا لزجة تجذب الغبار مجدداً خلال أيام قليلة.",
    },
    leather: {
      label: "الجلد الطبيعي والصناعي",
      temp: "تنظيف بارد / دافئ لطيف بدون بخار مباشر",
      method: "تنظيف كريمي + ترطيب وحماية ضد التشقق",
      dryTime: "30 إلى 45 دقيقة فقط",
      safety: "يحافظ على مرونة الجلد ويمنع الجفاف والتقشير",
      summary:
        "الكنب الجلد لا يُغسل بالماء والصابون أو البخار الساخن المباشر لأنه يفقده زيوته الطبيعية ويؤدي لتشققه مع حرارة الصيف. نستخدم له منظفات جلدية إيطالية تليها طبقة بلسم مرطب.",
      steps: [
        "إزالة الأتربة من الثنايا والخياطات الدقيقة بفرشاة فائقة النعومة.",
        "تطبيق رغوة تنظيف مخصصة للجلد تسحب الدهون والأوساخ من المسام.",
        "المسح بفوط مايكروفايبر نظيفة ورطبة قليلاً.",
        "توزيع كريم ترطيب وحماية (Conditioner) يعيد للجلد لمعانه وليونته.",
      ],
      warning:
        "استخدام الكحول أو المناديل المبللة العادية على الجلد الطبيعي يؤدي لبهتان اللون وتشققه سريعاً.",
    },
    suede: {
      label: "الشامواه والمايكروفايبر",
      temp: "بخار جاف جداً (90°C منخفض الرطوبة)",
      method: "تنظيف جاف + استخلاص دقيق للزيوت",
      dryTime: "1.5 إلى 2.5 ساعة",
      safety: "يحافظ على الملمس المخملي دون تصلّب القماش",
      summary:
        "الشامواه والمايكروفايبر يعطي مظهراً عصرياً أنيقاً لكنه يُظهر بقع الزيوت والأيدي بسرعة. نتعامل معه بمذيبات سريعة التبخر وبخار جاف يعيد له ملمسه الناعم.",
      steps: [
        "تنظيف جاف مبدئي لتفكيك تكتلات الغبار والزيوت السطحية.",
        "رش معالج بقع خالٍ من الرغوة الزائدة لتفكيك البقع الدهنية.",
        "سحب الأوساخ بماكينة الاستخلاص الدقيقة مع أقل نسبة مياه.",
        "تنشيط النسيج بفرشاة شامواه خاصة ليعود ناعماً كالجديد.",
      ],
      warning:
        "ترك البقع السائلة على الشامواه لتجف دون امتصاصها يسبب تصلب القماش في مكان البقعة.",
    },
    persian: {
      label: "السجاد الإيراني والتركي",
      temp: "تنظيف فاتر مضبوط (60°C) لحماية الصوف والحرير",
      method: "غسيل متوازن الحموضة + تثبيت للأصباغ الطبيعية",
      dryTime: "3 إلى 4 ساعات",
      safety: "حماية 100% من سيلان الألوان وتلف الشراشيب",
      summary:
        "السجاد الفاخر والمصنوع من الصوف أو الحرير الصناعي استثمار ثمين يحتاج معاملة خاصة تمنع اختلاط الألوان وتحافظ على متانة العقد والخيوط.",
      steps: [
        "نفض وشفط الغبار العميق من الوجهين بقدرة شفط صناعية.",
        "تطبيق مادة تثبيت الألوان قبل البدء بعملية الغسيل.",
        "غسيل ناعم بشامبو مخصص للصوف والحرير لا يسبب خشونة الألياف.",
        "تنظيف وتبييض الشراشيب يدوياً وشفط الرطوبة بالكامل.",
      ],
      warning:
        "استخدام المبيضات أو الغسيل بالضغط العالي (مغاسل السيارات) يدمر ألياف السجاد التركي والإيراني ويقطع خيوطه.",
    },
    moquette: {
      label: "الموكيت المثبت والمساجد",
      temp: "بخار قوي (110°C) للتعقيم العميق",
      method: "ماكينة اللباد الدوارة + استخلاص بخاري مزدوج",
      dryTime: "2 إلى 3 ساعات",
      safety: "إزالة كاملة للاتساخ في الممرات ومناطق الحركة الكثيفة",
      summary:
        "الموكيت المثبت في المجالس والصالات والمكاتب والمساجد يتعرض لأعلى درجات الدعس وتراكم الغبار. نستخدم له ماكينات الدوران العميق التي تفكك الأوساخ المتحجرة ثم تشفطها بالبخار.",
      steps: [
        "كنس صناعي قوي يرفع الوبرة المضغوطة ويسحب الرمال الدقيقة.",
        "توزيع منظف عميق مع معقم مضاد للبكتيريا والروائح.",
        "فرك ميكانيكي متوازن بفرشاة دوارة لتنشيط الوبرة واستعادة حجمها.",
        "شفط مزدوج بالبخار الحار والتعطير الشامل للمساحة بالكامل.",
      ],
      warning:
        "ترك الرطوبة أسفل الموكيت المثبت يسبب تعفن اللباد السفلي وظهور روائح كريهة لا تزول بسهولة.",
    },
  };

  // =========================================================
  // بيانات موسوعة إزالة البقع
  // =========================================================
  const stainsList = [
    {
      cat: "drinks",
      name: "بقع القهوة العربية والهيل والزعفران",
      difficulty: "متوسطة إلى صعبة",
      ourMethod:
        "استخدام مذيب تانين (Tannin Remover) ألماني يفكك صبغة الزعفران والقهوة دون التأثير على لون القماش، متبوعاً باستخلاص بخاري.",
      avoid: "لا تستخدم الصابون القلوي أو الكلور لأنه يثبّت صبغة القهوة ويجعلها دائمة.",
    },
    {
      cat: "drinks",
      name: "بقع الشاي والعصائر الملونة",
      difficulty: "متوسطة",
      ourMethod:
        "معادلة السكريات والأحماض برغوة إنزيمية نشطة ثم سحب الصبغة بالكامل عبر فوهة البخار المركّز.",
      avoid: "تجنب الفرك العشوائي لأنه يوسّع قطر البقعة ويدفعها لداخل الإسفنج.",
    },
    {
      cat: "oils",
      name: "بقع الزيوت والدهون وبقايا الطعام",
      difficulty: "صعبة",
      ourMethod:
        "تطبيق مذيب دهون حيوي (Degreaser) آمن على الأنسجة يحول الزيت لمادة قابلة للذوبان، ثم الشفط الحراري بضغط عالٍ.",
      avoid: "الماء البارد وحده لا يذيب الدهون بل يترك هالة رمادية تجذب الغبار لاحقاً.",
    },
    {
      cat: "kids",
      name: "بقع الحبر الجاف وألوان الأطفال",
      difficulty: "صعبة جداً",
      ourMethod:
        "عزل محيط البقعة لمنع انتشار الحبر، ثم تفتيت جزيئات الصبغة بمذيب كحولي لطيف مخصص للأقمشة والشفط الفوري.",
      avoid: "وضع الماء مباشرة على الحبر الجاف ينشر اللون في مساحة أكبر بكثير.",
    },
    {
      cat: "kids",
      name: "بقع الشوكولاتة والعلكة والصلصات",
      difficulty: "متوسطة",
      ourMethod:
        "تجميد العلكة ونزعها دون شد الخيوط، وتفكيك دهون وبروتين الشوكولاتة بمنظف إنزيمي مزدوج.",
      avoid: "سحب العلكة بالقوة أو استخدام أدوات حادة يقطع وبر السجاد والمجلس.",
    },
    {
      cat: "oils",
      name: "بقع المكياج والعطور الزيتية",
      difficulty: "متوسطة إلى صعبة",
      ourMethod:
        "استخدام مزيل أصباغ تجميلية خالٍ من الزيوت يعيد نظافة مساند الكنب والمجالس دون ترك أي هالة.",
      avoid: "مزيلات المكياج المنزلية تحتوي على زيوت تزيد من اتساخ القماش.",
    },
    {
      cat: "odors",
      name: "بقع الرطوبة واصفرار الغبار الموسمي",
      difficulty: "متوسطة",
      ourMethod:
        "غسيل عميق بالبخار المعقم مع مادة تفتيح آمنة تعيد إشراقة الألوان الفاتحة والبيضاء وتزيل رائحة الكمكمة.",
      avoid: "تغطية الرائحة بالمعطرات فقط لا تحل المشكلة لأن البكتيريا تظل نشطة بالداخل.",
    },
    {
      cat: "odors",
      name: "روائح الدخان والبخور المتراكم والحيوانات الأليفة",
      difficulty: "صعبة",
      ourMethod:
        "معالجة بيولوجية تفكك جزيئات الرائحة في عمق الإسفنج متبوعة بتعقيم حراري وتعطير فندقي ثابت.",
      avoid: "ترك السجاد رطباً بعد التنظيف يضاعف الروائح غير المرغوبة.",
    },
  ];

  const filteredStains =
    activeStainCat === "all"
      ? stainsList
      : stainsList.filter((s) => s.cat === activeStainCat);

  // =========================================================
  // بيانات المراحل الهندسية الستة
  // =========================================================
  const workStages = [
    {
      num: "01",
      title: "المعاينة وفحص نوع النسيج",
      desc: "يبدأ الفني بفحص خامة المجلس أو السجاد (مخمل، كتان، جلد، صوف) وتحديد أماكن البقع ودرجة ثبات الألوان لاختيار البرنامج والمنظف الأنسب.",
    },
    {
      num: "02",
      title: "حماية المكان والشفط الجاف الصناعي",
      desc: "تغطية الأرضيات والقطع المجاورة، ثم استخدام مكانس صناعية عالية القدرة لسحب الغبار العميق والرمال الدقيقة من أسفل الوبرة والزوايا.",
    },
    {
      num: "03",
      title: "المعالجة الموضعية للبقع المستعصية",
      desc: "رش مذيبات ألمانية متخصصة على بقع القهوة والحبر والزيوت وتركها دقائق محددة لتفكيك الروابط الكيميائية للبقعة بلطف.",
    },
    {
      num: "04",
      title: "الغسيل العميق بالبخار الإيطالي",
      desc: "تمرير فوهة ماكينة البخار بضغط وحرارة مضبوطة لضخ المحلول المنظف الآمن وتنظيف أعمق طبقات النسيج مع سحب المياه المتسخة فوراً.",
    },
    {
      num: "05",
      title: "التعقيم الحراري والشفط المضاعف",
      desc: "جلسة تعقيم بخاري تقضي على 99.9% من البكتيريا وعث الغبار، تليها دورة شفط جاف لسحب أكثر من 90% من الرطوبة لتسريع الجفاف.",
    },
    {
      num: "06",
      title: "التعطير الملكي والفحص النهائي مع العميل",
      desc: "رش المعطر الفاخر حسب اختيارك (عود أو فرنسي)، تمشيط الوبرة، ومعاينة النتيجة معك للتأكد من رضاك التام قبل مغادرة الفريق.",
    },
  ];

  // =========================================================
  // جدول المقارنة: البخار الإيطالي vs الغسيل التقليدي
  // =========================================================
  const comparisonRows = [
    {
      feature: "وقت الجفاف",
      steam: "ساعتين إلى 4 ساعات فقط",
      traditional: "من يومين إلى 4 أيام",
    },
    {
      feature: "التعقيم وقتل البكتيريا",
      steam: "تعقيم حراري عميق بنسبة 99.9%",
      traditional: "تنظيف سطحي بدون تعقيم حراري",
    },
    {
      feature: "سلامة الألوان والأنسجة",
      steam: "ثبات تام للألوان ونعومة للوبرة",
      traditional: "عرضة للبهتان والانكماش والخشونة",
    },
    {
      feature: "نقل الأثاث والفوضى",
      steam: "غسيل في نفس الموقع بدون نقل أو بلل للأرضيات",
      traditional: "إغراق المكان بالمياه أو تعب النقل",
    },
    {
      feature: "الرائحة بعد التنظيف",
      steam: "عطر فاخر ومنعش بدون أي رائحة رطوبة",
      traditional: "احتمال ظهور رائحة كمكمة وعفن بالإسفنج",
    },
    {
      feature: "إزالة البقع العميقة",
      steam: "مذيبات متخصصة لكل نوع بقعة + شفط فوري",
      traditional: "فرك خشن قد يتلف القماش ويثبّت البقعة",
    },
  ];

  // =========================================================
  // باقات التنظيف المقترحة
  // =========================================================
  const packages = [
    {
      name: "الباقة الأساسية",
      subtitle: "مثالية لمجلس واحد أو صالة معيشة",
      featured: false,
      tag: "توفير ذكي",
      features: [
        "غسيل مجلس واحد بالبخار (حتى 10 متر)",
        "تنظيف سجادة واحدة متوسطة مجاناً أو بسعر رمزي",
        "إزالة البقع السطحية وبقع القهوة",
        "تعقيم حراري + تعطير فرنسي",
        "تجفيف سريع خلال 3 ساعات",
      ],
      waText: "مرحباً، أرغب في الاستفسار عن الباقة الأساسية لغسيل المجالس بالخرج",
    },
    {
      name: "باقة الأسرة المتكاملة",
      subtitle: "الأكثر طلباً لشقق وفلل الخرج",
      featured: true,
      tag: "الأكثر مبيعاً ⭐",
      features: [
        "غسيل مجلسين (رجال + نساء) بالبخار الإيطالي",
        "غسيل 3 سجادات فاخرة في الموقع",
        "معالجة شاملة للبقع المستعصية بمذيبات ألمانية",
        "تنظيف ستارتين بالبخار وهي معلقة",
        "تعقيم شامل ضد عث الغبار + تعطير بالعود الفاخر",
        "أولوية الحجز والوصول في نفس اليوم",
      ],
      waText: "مرحباً، أرغب في حجز باقة الأسرة المتكاملة لغسيل السجاد والمجالس بالخرج",
    },
    {
      name: "الباقة الملكية للفلل والقصور",
      subtitle: "نظافة شاملة وتجهيز كامل للمناسبات والأعياد",
      featured: false,
      tag: "شامل VIP",
      features: [
        "غسيل جميع مجالس وكنب الفيلا بالكامل",
        "غسيل كافة السجاد والموكيت والستائر",
        "تنظيف وتعقيم مراتب غرف النوم",
        "إزالة جميع البقع الصعبة والروائح العالقة",
        "فريق فني مضاعف لإنجاز العمل بوقت قياسي",
        "خصم خاص إضافي للعملاء الدائمين والمساحات الكبيرة",
      ],
      waText: "مرحباً، أرغب في الاستفسار عن الباقة الملكية لغسيل الفلل والمجالس بالخرج",
    },
  ];

  // =========================================================
  // أحياء مدينة الخرج المغطاة
  // =========================================================
  const kharjNeighborhoods = [
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
    "السيح (وسط الخرج)",
    "حي الهدا",
    "حي مشرف",
    "حي الناصفة",
    "الدلم",
    "الهياثم",
    "اليمامة",
    "السلمية",
  ];

  // =========================================================
  // آراء العملاء
  // =========================================================
  const testimonials = [
    {
      name: "أم خالد العتيبي",
      area: "حي الخزامى، الخرج",
      service: "غسيل مجلس كتان أبيض + سجاد",
      text: "والله شغلهم يبيض الوجه، كان عندي بقع قهوة عربية وعصير رمان في المجلس الفاتح وكنت فاقدة الأمل فيه، جابوا أجهزة البخار ورجع كأنه جديد تماماً والريحة فخمة جداً.",
    },
    {
      name: "فهد الدوسري",
      area: "حي النهضة، الخرج",
      service: "غسيل مجلس رجال + موكيت",
      text: "التزام بالمواعيد ودقة في الشغل. الفريق جاء بالزي الرسمي ومعداتهم حديثة ونظيفة، غسلوا مجلس الرجال والموكيت وجف خلال 3 ساعات فقط بدون ما يغرقون البيت ماء.",
    },
    {
      name: "عبدالرحمن القحطاني",
      area: "حي الورود، الخرج",
      service: "باقة الفيلا الكاملة",
      text: "حجزت معهم قبل العيد لتجهيز الفيلا بالكامل (مجالس وستائر وسجاد)، أنجزوا الشغل بإتقان عالي واهتمام بالتفاصيل. صراحة أفضل شركة غسيل مجالس جربتها في الخرج.",
    },
    {
      name: "أبو تركي الحربي",
      area: "حي الأندلس، الخرج",
      service: "تنظيف كنب مخمل + إزالة بقع",
      text: "أكثر شيء أعجبني إنهم فحصوا القماش قبل البدء واستخدموا مواد مخصصة للمخمل عشان ما يخرب. الوبرة رجعت ناعمة واللون رجع زاهي كأنه توه مفصّل.",
    },
    {
      name: "نورة السبيعي",
      area: "حي المصيف، الخرج",
      service: "تنظيف ستائر ومراتب بالبخار",
      text: "نظفوا الستائر وهي راكبة مكانها بدون تعب الفك والتركيب، وعقموا مراتب غرف الأطفال بالبخار. أمانة وذوق في التعامل وأسعارهم جداً معقولة مقارنة بالجودة.",
    },
    {
      name: "سعد العنزي",
      area: "الدلم، الخرج",
      service: "غسيل سجاد تركي ومجلس عربي",
      text: "ما توقعت يوصلون الدلم بنفس السرعة! وصلوا في الموعد المحدد بالضبط وغسلوا السجاد التركي مع الحفاظ على الشراشيب والألوان. شكراً أساس الأمن الخليجي.",
    },
  ];

  // =========================================================
  // الأسئلة الشائعة (10 أسئلة مطابقة للـ Schema)
  // =========================================================
  const faqs = [
    {
      q: "كم يستغرق وقت جفاف السجاد والمجالس بعد الغسيل بالبخار؟",
      a: "بفضل ماكينات الشفط الإيطالية عالية القدرة وتقنية البخار منخفض الرطوبة، يجف السجاد والمجالس خلال ساعتين إلى 4 ساعات فقط، ويمكنك استقبال ضيوفك في نفس اليوم بدون أي روائح رطوبة.",
    },
    {
      q: "هل تزيلون البقع الصعبة مثل القهوة العربية والهيل والحبر والزيوت؟",
      a: "نعم، نستخدم مذيبات ومزيلات بقع ألمانية متخصصة لكل نوع بقعة على حدة (القهوة، الشاي، العصائر، الحبر، الدهون، الشحوم) تفكك البقعة من جذورها دون التسبب في بهتان الألوان أو تلف الأنسجة.",
    },
    {
      q: "هل يتم الغسيل داخل المنزل أم يتم نقل السجاد والمجالس للمغسلة؟",
      a: "يتم الغسيل بالكامل في موقعك داخل المنزل أو الاستراحة في الخرج دون الحاجة لنقل المجالس أو تفكيكها، مع فرش أغطية حماية للأرضيات والحفاظ التام على نظافة المكان المحيط.",
    },
    {
      q: "هل المنظفات والمعقمات آمنة على الأطفال ومرضى الحساسية والربو؟",
      a: "نعم بنسبة 100%، نعتمد على منظفات عضوية ومعتمدة خالية من المبيضات والكلور والمواد الكيميائية المهيجة، كما أن التعقيم الحراري بالبخار يزيل عث الغبار ومسببات الحساسية بفعالية عالية.",
    },
    {
      q: "هل يسبب الغسيل بالبخار انكماش الأقمشة أو بهتان ألوان المجالس الفاخرة؟",
      a: "إطلاقاً؛ يقوم الفني أولاً باختبار نوع النسيج (مخمل، كتان، شامواه، جلد، حرير صناعي) وضبط درجة حرارة البخار وضغط الشفط بما يناسب خامة القماش تماماً للحفاظ على لمعانه ونعومته.",
    },
    {
      q: "كيف يتم احتساب سعر غسيل المجالس والسجاد بالخرج؟",
      a: "يتم التسعير بشفافية تامة بناءً على عدد الأمتار للمجالس والموكيت أو عدد قطع الكنب والسجاد، مع توفير باقات مخفضة وخصومات قوية عند تنظيف أكثر من مجلس أو فيلا كاملة.",
    },
    {
      q: "هل تقدمون خدمة غسيل الستائر وهي معلقة في مكانها؟",
      a: "نعم، نوفر تقنية التنظيف بالبخار الجاف للستائر الثقيلة والشيفون والبلاك أوت وهي معلقة في مكانها دون الحاجة لفكها أو كيّها أو إعادة تركيبها.",
    },
    {
      q: "هل تغطون جميع أحياء الخرج والمراكز التابعة لها مثل الدلم والهياثم؟",
      a: "نعم، لدينا سيارات مجهزة بالكامل تجوب جميع أحياء الخرج (الخزامى، النهضة، الورود، الأندلس، المصيف، السيح، السلام) بالإضافة إلى الدلم والهياثم واليمامة والسلمية بنفس اليوم.",
    },
    {
      q: "هل يشمل الغسيل إزالة الروائح الكريهة مثل الدخان والرطوبة؟",
      a: "نعم، نقوم بمعالجة مصدر الرائحة داخل الإسفنج والوبر عبر التعقيم البخاري ومزيلات الروائح البيولوجية، يليها تعطير فاخر بروائح العود أو العطور الفرنسية الثابتة.",
    },
    {
      q: "كم مرة يُنصح بغسيل المجالس والسجاد في أجواء الخرج؟",
      a: "نظراً لطبيعة الأجواء والغبار الموسمي في منطقة الخرج، ينصح الخبراء بإجراء غسيل وتعقيم عميق بالبخار كل 4 إلى 6 أشهر للمجالس كثيرة الاستخدام، وكل 6 أشهر للسجاد والستائر للحفاظ على جودة الهواء داخل المنزل.",
    },
  ];

  // =========================================================
  // إرسال طلب الحاسبة إلى الواتساب مباشرة
  // =========================================================
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const extras: string[] = [];
    if (calcData.extraSteam) extras.push("تعقيم حراري بالبخار");
    if (calcData.extraPerfume) extras.push("تعطير ملكي (عود/فرنسي)");
    if (calcData.extraStainShield) extras.push("معالجة مكثفة للبقع المستعصية");

    const msg = `السلام عليكم، أرغب في تسعير وحجز خدمة *غسيل السجاد والمجالس بالخرج* من شركة أساس الأمن الخليجي:
👤 *الاسم:* ${calcData.clientName || "عميل الموقع"}
📞 *الجوال:* ${calcData.clientPhone || "غير محدد"}
📍 *الحي بالخرج:* ${calcData.neighborhood}
🛋️ *طول المجالس:* ${calcData.majlisMeters} متر
🧶 *عدد السجاد:* ${calcData.carpetsCount} قطعة
🪑 *عدد مقاعد الكنب الإضافية:* ${calcData.sofaSeats} مقعد
🪟 *عدد الستائر:* ${calcData.curtainsCount} ستارة
✨ *إضافات مختارة:* ${extras.length > 0 ? extras.join(" + ") : "الباقة القياسية"}
⏰ *الموعد المفضل:* ${calcData.urgency}`;

    window.open(
      `https://wa.me/966501206816?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const currentFabric = fabricGuides[activeFabric];

  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden" dir="rtl">
      {/* =====================================================================
          1. قسم الـ HERO الرئيسي السينمائي
      ===================================================================== */}
      <section className="relative pt-14 pb-20 lg:pt-24 lg:pb-28 px-4 border-b border-[#00BFFF]/20">
        {/* إضاءات محيطية خلفية */}
        <div className="absolute top-0 right-10 w-[420px] h-[420px] bg-[#00BFFF]/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[420px] h-[420px] bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          {/* Breadcrumb */}
          <nav
            aria-label="مسار التنقل"
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 bg-[#061124]/85 mx-auto w-fit px-5 py-2 rounded-full border border-[#00BFFF]/30"
          >
            <Link href="/" className="hover:text-[#00BFFF] transition-colors">
              الرئيسية
            </Link>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-gray-300">خدماتنا</span>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37] font-bold">غسيل سجاد ومجالس بالخرج</span>
          </nav>

          {/* شارة التميز */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/50 px-5 py-2.5 rounded-full text-[#D4AF37] mb-7 font-extrabold text-xs sm:text-sm md:text-base shadow-[0_0_25px_rgba(212,175,55,0.25)]">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>تقنية البخار الإيطالي الجاف • تنظيف وتعقيم فوري في نفس الموقع بالخرج</span>
          </div>

          {/* العنوان الوحيد H1 في الصفحة */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.2] tracking-tight">
            شركة{" "}
            <span className="text-[#00BFFF] drop-shadow-[0_0_20px_rgba(0,191,255,0.45)]">
              غسيل سجاد ومجالس
            </span>{" "}
            بالبخار في{" "}
            <span className="text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.45)]">
              الخرج
            </span>
          </h1>

          {/* وصف تسويقي غني بالكلمات المفتاحية */}
          <p className="text-gray-300 text-base sm:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
            استعد فخامة مجالسكم ونظافة سجادكم بأحدث ماكينات البخار الإيطالية ومذيبات البقع الألمانية دون نقل أو فوضى.{" "}
            <span className="text-white font-bold underline decoration-[#D4AF37]">
              أساس الأمن الخليجي
            </span>{" "}
            تضمن لك إزالة أصعب بقع القهوة والزيوت، تعقيماً حرارياً بنسبة 99.9%، وتجفيفاً قياسياً خلال ساعات قليلة.
          </p>

          {/* أزرار الحجز والاتصال */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="https://wa.me/966501206816?text=مرحباً، أرغب في حجز خدمة غسيل سجاد ومجالس بالبخار في الخرج"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] via-[#ebd06b] to-[#D4AF37] text-[#030b1c] hover:scale-105 px-9 py-4.5 rounded-full font-black text-lg transition-all duration-300 shadow-[0_0_35px_rgba(212,175,55,0.55)]"
            >
              <MessageCircle className="w-6 h-6" />
              <span>احجز موعد الغسيل عبر واتساب</span>
            </Link>

            <a
              href="tel:+966501206816"
              className="flex items-center justify-center gap-3 w-full sm:w-auto border-2 border-[#00BFFF] bg-[#061124]/80 text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#030b1c] px-9 py-4.5 rounded-full font-black text-lg transition-all duration-300 shadow-[0_0_25px_rgba(0,191,255,0.25)]"
            >
              <PhoneCall className="w-6 h-6" />
              <span dir="ltr">+966 50 120 6816</span>
            </a>

            <a
              href="#booking-calculator"
              className="flex items-center justify-center gap-2 w-full sm:w-auto border border-white/20 bg-white/5 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white px-7 py-4.5 rounded-full font-bold text-base transition-all duration-300"
            >
              <Calculator className="w-5 h-5" />
              <span>اطلب تسعيرة مخصصة</span>
            </a>
          </div>

          {/* شارات الثقة المصغرة */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300">
            <span className="flex items-center gap-1.5 bg-[#061124]/80 border border-white/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              وصول خلال 45 دقيقة بالخرج
            </span>
            <span className="flex items-center gap-1.5 bg-[#061124]/80 border border-white/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-[#00BFFF]" />
              منظفات آمنة على الأطفال والمرضى
            </span>
            <span className="flex items-center gap-1.5 bg-[#061124]/80 border border-white/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              تعطير ملكي مجاني مع كل طلب
            </span>
            <span className="flex items-center gap-1.5 bg-[#061124]/80 border border-white/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-[#00BFFF]" />
              ضمان الرضا قبل مغادرة الفريق
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. شريط الإحصائيات والأرقام الموثقة
      ===================================================================== */}
      <section className="py-12 bg-[#050f24]/90 border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-[#030b1c]/60 border border-white/5">
            <div className="text-2xl md:text-3xl font-black text-[#D4AF37] mb-1">+3,500</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold">مجلس وسجادة تم غسيلها</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#030b1c]/60 border border-white/5">
            <div className="text-2xl md:text-3xl font-black text-[#00BFFF] mb-1">99.9%</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold">نسبة التعقيم بالبخار</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#030b1c]/60 border border-white/5">
            <div className="text-2xl md:text-3xl font-black text-[#D4AF37] mb-1">2-4 ساعات</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold">متوسط وقت الجفاف</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#030b1c]/60 border border-white/5">
            <div className="text-2xl md:text-3xl font-black text-[#00BFFF] mb-1">100%</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold">حماية ثبات الألوان</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#030b1c]/60 border border-white/5">
            <div className="text-2xl md:text-3xl font-black text-[#D4AF37] mb-1">20+ حي</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold">تغطية شاملة للخرج</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#030b1c]/60 border border-white/5">
            <div className="text-2xl md:text-3xl font-black text-[#00BFFF] mb-1">4.9 / 5</div>
            <div className="text-gray-300 text-xs sm:text-sm font-semibold">تقييم عملاء الخرج</div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. سيكشن الخدمات الثمانية المتكاملة
      ===================================================================== */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#00BFFF] text-xs font-extrabold bg-[#00BFFF]/10 border border-[#00BFFF]/30 px-4 py-1.5 rounded-full mb-4">
            حلول تنظيف متخصصة لكل قطعة في منزلك
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            خدماتنا الاحترافية في{" "}
            <span className="text-[#D4AF37]">غسيل السجاد والمجالس</span> بالخرج
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            لا نطبق طريقة واحدة عشوائية على جميع المفروشات؛ بل نخصص لكل قطعة أجهزتها وموادها المعتمدة لتحصل على نظافة فندقية فاخرة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((srv, idx) => {
            const Icon = srv.icon;
            const isGold = srv.accent === "gold";
            return (
              <div
                key={idx}
                className="bg-[#061124]/95 border border-white/10 hover:border-[#D4AF37] rounded-3xl p-7 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isGold
                          ? "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30"
                          : "bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/30"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${
                        isGold
                          ? "bg-[#D4AF37]/15 text-[#D4AF37]"
                          : "bg-[#00BFFF]/15 text-[#00BFFF]"
                      }`}
                    >
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {srv.desc}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {srv.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-200"
                      >
                        <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`https://wa.me/966501206816?text=${encodeURIComponent(
                    `مرحباً، أرغب في طلب خدمة: ${srv.title} بالخرج`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#030b1c] border border-[#00BFFF]/30 group-hover:bg-[#D4AF37] group-hover:text-[#030b1c] group-hover:border-[#D4AF37] text-[#00BFFF] font-bold text-sm flex items-center justify-between transition-all"
                >
                  <span>احجز هذه الخدمة</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          4. الدليل التفاعلي لأنواع الأقمشة والسجاد (Fabric Protocol Tabs)
      ===================================================================== */}
      <section className="py-20 px-4 bg-[#050f24]/75 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-extrabold bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-4">
              <Sliders className="w-4 h-4" />
              بروتوكول هندسي مخصص لكل خامة
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              كيف نتعامل مع <span className="text-[#00BFFF]">نوع قماش مجلسك أو سجادك</span>؟
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              اختر خامة المفروشات لديك لتتعرف على درجة الحرارة وطريقة التنظيف الآمنة التي نطبقها بدقة
            </p>
          </div>

          {/* أزرار اختيار نوع القماش */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {(Object.keys(fabricGuides) as FabricKey[]).map((key) => {
              const isActive = activeFabric === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveFabric(key)}
                  className={`px-5 py-3 rounded-2xl text-sm font-extrabold transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-[#D4AF37] text-[#030b1c] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.45)] scale-105"
                      : "bg-[#030b1c] text-gray-300 border-white/10 hover:border-[#00BFFF] hover:text-white"
                  }`}
                >
                  {fabricGuides[key].label}
                </button>
              );
            })}
          </div>

          {/* بطاقة تفاصيل القماش المختار */}
          <div className="bg-[#030b1c] border-2 border-[#00BFFF]/35 rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,191,255,0.12)]">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* العمود الأيمن: المواصفات الفنية */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  بروتوكول تنظيف{" "}
                  <span className="text-[#D4AF37]">{currentFabric.label}</span>
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {currentFabric.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#061124] border border-white/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-[#00BFFF] text-xs font-bold mb-1">
                      <Thermometer className="w-4 h-4" />
                      <span>درجة الحرارة</span>
                    </div>
                    <div className="text-white text-sm font-bold">{currentFabric.temp}</div>
                  </div>
                  <div className="bg-[#061124] border border-white/10 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold mb-1">
                      <Clock className="w-4 h-4" />
                      <span>مدة الجفاف</span>
                    </div>
                    <div className="text-white text-sm font-bold">{currentFabric.dryTime}</div>
                  </div>
                  <div className="bg-[#061124] border border-white/10 p-4 rounded-2xl sm:col-span-2">
                    <div className="flex items-center gap-2 text-[#00BFFF] text-xs font-bold mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>التقنية المعتمدة وضمان الأمان</span>
                    </div>
                    <div className="text-white text-sm font-bold mb-1">
                      {currentFabric.method}
                    </div>
                    <div className="text-gray-400 text-xs">{currentFabric.safety}</div>
                  </div>
                </div>
              </div>

              {/* العمود الأيسر: خطوات التنفيذ + تحذير هام */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                <div className="bg-[#061124]/80 border border-white/10 rounded-2xl p-6">
                  <div className="text-lg font-extrabold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                    <span>خطوات فريقنا عند تنظيف {currentFabric.label}:</span>
                  </div>
                  <div className="space-y-3.5">
                    {currentFabric.steps.map((st, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-gray-200 text-sm sm:text-base leading-relaxed">
                          {st}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* صندوق تحذير مهم */}
                <div className="bg-amber-950/30 border border-[#D4AF37]/50 rounded-2xl p-5 flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#D4AF37] font-extrabold text-sm mb-1">
                      نصيحة هندسية هامة لحماية مفروشاتك:
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {currentFabric.warning}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. موسوعة إزالة البقع المستعصية (مع فلتر تفاعلي)
      ===================================================================== */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#D4AF37] text-xs font-extrabold bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-4">
            وداعاً للبقع العنيدة والقديمة
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            موسوعة <span className="text-[#D4AF37]">إزالة البقع المستعصية</span> من المجالس والسجاد
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            تصفح أنواع البقع التي نعالجها يومياً في منازل الخرج وتعرف على الطريقة الاحترافية وما يجب تجنبه
          </p>
        </div>

        {/* أزرار الفلتر */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { id: "all", label: "جميع البقع (8)" },
            { id: "drinks", label: "القهوة والشاي والعصائر" },
            { id: "oils", label: "الزيوت والدهون والمكياج" },
            { id: "kids", label: "الحبر وبقع الأطفال" },
            { id: "odors", label: "الرطوبة والروائح" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveStainCat(tab.id as StainCategory)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeStainCat === tab.id
                  ? "bg-[#00BFFF] text-[#030b1c] border-[#00BFFF] shadow-[0_0_20px_rgba(0,191,255,0.4)]"
                  : "bg-[#061124] text-gray-300 border-white/10 hover:border-[#D4AF37]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStains.map((stain, idx) => (
            <div
              key={idx}
              className="bg-[#061124]/95 border border-white/10 hover:border-[#00BFFF]/60 rounded-3xl p-7 transition-all shadow-xl flex flex-col justify-between gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {stain.name}
                </h3>
                <span className="text-[11px] font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full flex-shrink-0">
                  درجة الصعوبة: {stain.difficulty}
                </span>
              </div>

              <div className="bg-[#030b1c] border border-emerald-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-extrabold mb-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>طريقة المعالجة لدى أساس الأمن الخليجي:</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {stain.ourMethod}
                </p>
              </div>

              <div className="bg-[#030b1c] border border-red-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-red-400 text-xs font-extrabold mb-1.5">
                  <XCircle className="w-4 h-4" />
                  <span>خطأ شائع يجب تجنبه:</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {stain.avoid}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. حاسبة الحجز والتسعير الفورية الذكية (Interactive WhatsApp Builder)
      ===================================================================== */}
      <section
        id="booking-calculator"
        className="py-20 px-4 bg-[#050f24]/80 border-y border-[#D4AF37]/30 relative"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* العمود الأيمن: النموذج التفاعلي */}
            <div className="lg:col-span-7 bg-[#061124] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-[0_0_45px_rgba(212,175,55,0.2)]">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 text-[#00BFFF] text-xs font-extrabold bg-[#00BFFF]/10 px-3 py-1.5 rounded-full border border-[#00BFFF]/30 mb-3">
                  <Calculator className="w-4 h-4" />
                  تسعيرة وحجز فوري في 30 ثانية
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white mb-2">
                  جهّز تفاصيل طلبك واحصل على{" "}
                  <span className="text-[#D4AF37]">أفضل سعر بالخرج</span>
                </h2>
                <p className="text-gray-400 text-sm">
                  حدد مقاسات المجالس وعدد السجاد وسيتم إرسال طلبك منسقاً مباشرة للمهندس عبر الواتساب مع تطبيق خصومات الباقات.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* سلايدر طول المجالس */}
                <div className="bg-[#030b1c] border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-white">
                      طول المجالس المطلوب غسيلها (بالمتر)
                    </label>
                    <span className="text-lg font-black text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-lg">
                      {calcData.majlisMeters} متر
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={2}
                    value={calcData.majlisMeters}
                    onChange={(e) =>
                      setCalcData({ ...calcData, majlisMeters: Number(e.target.value) })
                    }
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                    <span>بدون مجالس (0م)</span>
                    <span>مجلس متوسط (12م)</span>
                    <span>فيلا/قصر (50م)</span>
                  </div>
                </div>

                {/* عدادات السجاد والكنب والستائر */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#030b1c] border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-xs text-gray-400 font-bold mb-2">عدد السجاد</div>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setCalcData({
                            ...calcData,
                            carpetsCount: Math.max(0, calcData.carpetsCount - 1),
                          })
                        }
                        className="w-8 h-8 rounded-lg bg-[#061124] border border-white/15 hover:border-[#D4AF37] text-white font-black cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xl font-black text-[#00BFFF] w-8">
                        {calcData.carpetsCount}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setCalcData({
                            ...calcData,
                            carpetsCount: calcData.carpetsCount + 1,
                          })
                        }
                        className="w-8 h-8 rounded-lg bg-[#061124] border border-white/15 hover:border-[#D4AF37] text-white font-black cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#030b1c] border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-xs text-gray-400 font-bold mb-2">مقاعد كنب إضافية</div>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setCalcData({
                            ...calcData,
                            sofaSeats: Math.max(0, calcData.sofaSeats - 1),
                          })
                        }
                        className="w-8 h-8 rounded-lg bg-[#061124] border border-white/15 hover:border-[#D4AF37] text-white font-black cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xl font-black text-[#D4AF37] w-8">
                        {calcData.sofaSeats}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setCalcData({ ...calcData, sofaSeats: calcData.sofaSeats + 1 })
                        }
                        className="w-8 h-8 rounded-lg bg-[#061124] border border-white/15 hover:border-[#D4AF37] text-white font-black cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#030b1c] border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-xs text-gray-400 font-bold mb-2">عدد الستائر</div>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setCalcData({
                            ...calcData,
                            curtainsCount: Math.max(0, calcData.curtainsCount - 1),
                          })
                        }
                        className="w-8 h-8 rounded-lg bg-[#061124] border border-white/15 hover:border-[#D4AF37] text-white font-black cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xl font-black text-[#00BFFF] w-8">
                        {calcData.curtainsCount}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setCalcData({
                            ...calcData,
                            curtainsCount: calcData.curtainsCount + 1,
                          })
                        }
                        className="w-8 h-8 rounded-lg bg-[#061124] border border-white/15 hover:border-[#D4AF37] text-white font-black cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* خيارات إضافية */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-center gap-2.5 bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] p-3.5 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calcData.extraSteam}
                      onChange={(e) =>
                        setCalcData({ ...calcData, extraSteam: e.target.checked })
                      }
                      className="accent-[#D4AF37] w-4 h-4"
                    />
                    <span className="text-xs font-bold text-gray-200">تعقيم حراري 99.9%</span>
                  </label>

                  <label className="flex items-center gap-2.5 bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] p-3.5 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calcData.extraPerfume}
                      onChange={(e) =>
                        setCalcData({ ...calcData, extraPerfume: e.target.checked })
                      }
                      className="accent-[#D4AF37] w-4 h-4"
                    />
                    <span className="text-xs font-bold text-gray-200">تعطير عود / فرنسي</span>
                  </label>

                  <label className="flex items-center gap-2.5 bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] p-3.5 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calcData.extraStainShield}
                      onChange={(e) =>
                        setCalcData({ ...calcData, extraStainShield: e.target.checked })
                      }
                      className="accent-[#D4AF37] w-4 h-4"
                    />
                    <span className="text-xs font-bold text-gray-200">معالجة بقع مستعصية</span>
                  </label>
                </div>

                {/* بيانات العميل والحي */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      الحي داخل الخرج
                    </label>
                    <select
                      value={calcData.neighborhood}
                      onChange={(e) =>
                        setCalcData({ ...calcData, neighborhood: e.target.value })
                      }
                      className="w-full bg-[#030b1c] border border-white/15 focus:border-[#00BFFF] rounded-xl px-4 py-3 text-white text-sm outline-none"
                    >
                      {kharjNeighborhoods.map((nh, i) => (
                        <option key={i} value={nh}>
                          {nh}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      الموعد المفضل
                    </label>
                    <select
                      value={calcData.urgency}
                      onChange={(e) =>
                        setCalcData({ ...calcData, urgency: e.target.value })
                      }
                      className="w-full bg-[#030b1c] border border-white/15 focus:border-[#00BFFF] rounded-xl px-4 py-3 text-white text-sm outline-none"
                    >
                      <option value="عاجل (خلال ساعتين)">عاجل (خلال ساعتين)</option>
                      <option value="في نفس اليوم">في نفس اليوم</option>
                      <option value="غداً صباحاً">غداً صباحاً</option>
                      <option value="غداً مساءً">غداً مساءً</option>
                      <option value="تجهيز لمناسبة نهاية الأسبوع">
                        تجهيز لمناسبة نهاية الأسبوع
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      الاسم الكريم (اختياري)
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: أبو محمد"
                      value={calcData.clientName}
                      onChange={(e) =>
                        setCalcData({ ...calcData, clientName: e.target.value })
                      }
                      className="w-full bg-[#030b1c] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">
                      رقم الجوال (اختياري)
                    </label>
                    <input
                      type="tel"
                      dir="ltr"
                      placeholder="05XXXXXXXX"
                      value={calcData.clientPhone}
                      onChange={(e) =>
                        setCalcData({ ...calcData, clientPhone: e.target.value })
                      }
                      className="w-full bg-[#030b1c] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-sm outline-none text-right"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] via-[#ebd06b] to-[#D4AF37] text-[#030b1c] hover:scale-[1.01] font-black py-4 px-6 rounded-2xl text-base sm:text-lg flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.45)] transition-all cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>إرسال تفاصيل الطلب والحصول على السعر فوراً عبر واتساب</span>
                </button>
              </form>
            </div>

            {/* العمود الأيسر: مميزات الحجز المباشر وضماناتنا */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#030b1c] border border-[#00BFFF]/35 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">
                      ضمان الجودة الذهبي من أساس الأمن الخليجي
                    </div>
                    <div className="text-xs text-[#D4AF37] font-bold">
                      راحتك وثقتك أولويتنا الأولى
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">المعاينة قبل الدفع:</strong> لا تستلم العمل إلا بعد فحص نظافة المجالس والسجاد والتأكد من زوال البقع ورضاك التام.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">خصومات الباقات والكميات:</strong> كلما زادت المساحة أو عدد القطع، حصلت على سعر متر أوفر وخدمات تعطير مجانية.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">أمان تام للخصوصية:</strong> عمالة نظامية بزي رسمي موحد ملتزمة بالآداب العامة والسرعة والإتقان.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">بدون أي رسوم مخفية:</strong> السعر المتفق عليه في الواتساب أو الهاتف هو السعر النهائي شاملاً المواد والأجهزة.
                    </span>
                  </li>
                </ul>
              </div>

              {/* كارت عرض سريع للمناسبات */}
              <div className="bg-gradient-to-br from-[#0a1c42] to-[#030b1c] border border-[#D4AF37]/50 rounded-3xl p-7">
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-extrabold mb-2">
                  <Zap className="w-4 h-4" />
                  <span>هل لديك ضيوف أو مناسبة قريبة؟</span>
                </div>
                <div className="text-xl font-black text-white mb-2">
                  خدمة الطوارئ السريعة لتجهيز المجالس في نفس اليوم!
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                  نوفر فريقاً سريع الاستجابة بالخرج لتنظيف وتعطير مجلسك وتجفيفه بالكامل قبل وصول ضيوفك بساعات.
                </p>
                <a
                  href="tel:+966501206816"
                  className="inline-flex items-center gap-2 bg-[#00BFFF] hover:bg-[#D4AF37] text-[#030b1c] font-black text-sm px-6 py-3 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصل الآن للحجز المستعجل</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. خطوات العمل الهندسية (6 مراحل احترافية)
      ===================================================================== */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#00BFFF] text-xs font-extrabold bg-[#00BFFF]/10 border border-[#00BFFF]/30 px-4 py-1.5 rounded-full mb-4">
            منهجية تنفيذ قياسية
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            6 مراحل دقيقة لتحويل مجلسك إلى{" "}
            <span className="text-[#00BFFF]">تحفة نظيفة ومعقمة</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            نلتزم بخطة عمل واضحة ومنظمة في كل زيارة لضمان نتائج تفوق توقعاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workStages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-[#061124]/95 border border-white/10 hover:border-[#D4AF37] rounded-3xl p-8 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="text-6xl font-black text-[#D4AF37]/10 absolute top-4 left-6 select-none group-hover:text-[#D4AF37]/20 transition-colors">
                {stage.num}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-yellow-600 text-[#030b1c] font-black text-lg flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                {stage.num}
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3 relative z-10">
                {stage.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. مقارنة: الغسيل بالبخار الإيطالي vs الغسيل التقليدي
      ===================================================================== */}
      <section className="py-20 px-4 bg-[#050f24]/70 border-y border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              لماذا يتفوق{" "}
              <span className="text-[#D4AF37]">الغسيل بالبخار الإيطالي</span> على الغسيل التقليدي؟
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              مقارنة واضحة توضح الفرق الحقيقي في حماية أثاثك وعمر مفروشاتك الافتراضي
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/15 bg-[#030b1c] shadow-2xl">
            <table className="w-full text-right border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#081736] border-b border-white/15">
                  <th className="p-5 text-sm sm:text-base font-extrabold text-gray-200">
                    معيار المقارنة
                  </th>
                  <th className="p-5 text-sm sm:text-base font-black text-[#D4AF37]">
                    أساس الأمن الخليجي (البخار الإيطالي)
                  </th>
                  <th className="p-5 text-sm sm:text-base font-bold text-gray-400">
                    الطرق التقليدية (الماء والفرشاة)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-5 font-bold text-white text-sm">{row.feature}</td>
                    <td className="p-5 text-emerald-300 text-sm font-semibold">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{row.steam}</span>
                      </div>
                    </td>
                    <td className="p-5 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400/80 flex-shrink-0" />
                        <span>{row.traditional}</span>
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
          9. استعراض المعدات والمواد الآمنة
      ===================================================================== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            الأجهزة والمنظفات التي نعتمدها في{" "}
            <span className="text-[#00BFFF]">الخرج</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            نستثمر في أحدث تقنيات التنظيف العالمية لضمان أعلى جودة دون المساس بسلامة عائلتك أو أثاثك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#061124]/90 border border-[#00BFFF]/30 rounded-3xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center mb-5">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3">
              ماكينات البخار الإيطالية (Steam Extractors)
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              تعمل بضغط حراري متوازن يجمع بين الضخ الدقيق والشفط الفوري في مسار واحد، مما ينظف أعمق نقطة بالإسفنج ويترك السطح شبه جاف.
            </p>
          </div>

          <div className="bg-[#061124]/90 border border-[#D4AF37]/30 rounded-3xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mb-5">
              <Leaf className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3">
              منظفات أوروبية عضوية آمنة (Eco-Safe)
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              خالية تماماً من الكلور والمذيبات السامة، مصممة خصيصاً لتفكيك الأوساخ مع الحفاظ على صحة الأطفال وكبار السن ومرضى الحساسية.
            </p>
          </div>

          <div className="bg-[#061124]/90 border border-[#00BFFF]/30 rounded-3xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-[#00BFFF]/15 text-[#00BFFF] flex items-center justify-center mb-5">
              <FileCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3">
              أجهزة اللباد والفرش الدوارة الناعمة
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              مخصصة للسجاد والموكيت لإزالة الوبر المضغوط والخيوط المتشابكة وتنشيط الأنسجة لتبدو ممتلئة وناعمة كأنها جديدة.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. باقات غسيل السجاد والمجالس (3 مستويات فاخرة)
      ===================================================================== */}
      <section className="py-20 px-4 bg-[#050f24]/60 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#D4AF37] text-xs font-extrabold bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-4">
              باقات مرنة تناسب كل منزل وفيلا
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              اختر <span className="text-[#D4AF37]">باقة التنظيف</span> المناسبة لك بالخرج
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              أسعار تنافسية مع خصومات إضافية عند الجمع بين أكثر من خدمة في نفس الزيارة
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.featured
                    ? "bg-gradient-to-b from-[#0b1f48] to-[#030b1c] border-2 border-[#D4AF37] shadow-[0_0_45px_rgba(212,175,55,0.28)] lg:-translate-y-3"
                    : "bg-[#061124]/95 border border-white/15 hover:border-[#00BFFF]/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-black px-3.5 py-1.5 rounded-full ${
                        pkg.featured
                          ? "bg-[#D4AF37] text-[#030b1c]"
                          : "bg-[#00BFFF]/15 text-[#00BFFF]"
                      }`}
                    >
                      {pkg.tag}
                    </span>
                    <Crown
                      className={`w-6 h-6 ${
                        pkg.featured ? "text-[#D4AF37]" : "text-gray-500"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-white/10">
                    {pkg.subtitle}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-3 text-sm text-gray-200"
                      >
                        <CheckCircle2
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            pkg.featured ? "text-[#D4AF37]" : "text-[#00BFFF]"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`https://wa.me/966501206816?text=${encodeURIComponent(
                    pkg.waText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-2xl font-black text-center flex items-center justify-center gap-2 transition-all ${
                    pkg.featured
                      ? "bg-[#D4AF37] text-[#030b1c] hover:bg-white shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                      : "bg-[#030b1c] border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#030b1c]"
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>اطلب سعر هذه الباقة الآن</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. المحتوى الهندسي والسيو المعمق (للتصدر في محركات البحث بالخرج)
      ===================================================================== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="bg-[#061124]/90 border border-white/10 rounded-3xl p-8 sm:p-12 space-y-10">
          <div className="border-b border-white/10 pb-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">
              دليل العناية بالمجالس والسجاد في منازل{" "}
              <span className="text-[#D4AF37]">محافظة الخرج</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              تُعد المجالس العربية واجهة البيت السعودي ومكان استقبال الضيوف والأحبة، ومع طبيعة الأجواء في مدينة الخرج التي تتأثر بموجات الغبار الموسمي وارتفاع درجات الحرارة، تتعرض الأقمشة والسجاد لتراكم ذرات الرمل الدقيقة داخل الألياف. ومع مرور الوقت، تتسبب هذه الذرات في احتكاك الخيوط وبهتان الألوان وتكوّن بيئة خصبة لعث الغبار ومسببات الحساسية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[#00BFFF] flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>أهمية التنظيف الاحترافي بالبخار في الخرج</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                الاعتماد على المكنسة الكهربائية المنزلية يزيل فقط الأتربة السطحية بنسبة لا تتجاوز 30%، بينما تبقى الزيوت المتراكمة وبقايا الأطعمة والرطوبة والجراثيم عالقة في أعماق الإسفنج وأسفل وبرة السجاد. هنا يأتي دور{" "}
                <strong className="text-white">شركة أساس الأمن الخليجي بالخرج</strong> التي توفر خدمة الغسيل الاستخلاصي بالبخار لتفتيت الأوساخ العميقة وسحبها بالكامل دون إغراق الأثاث بالمياه.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                سواء كنت تمتلك مجلساً كلاسيكياً فاخراً، كنب مودرن بألوان فاتحة، سجاداً تركياً أو إيرانياً، أو موكيتاً لمسجد أو استراحة، فإننا نمتلك الخبرة والمعدات المناسبة لكل مساحة.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[#D4AF37] flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" />
                <span>5 نصائح ذهبية للحفاظ على نظافة مجلسك بعد الغسيل</span>
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-white">التعامل الفوري مع الانسكابات:</strong> عند انسكاب القهوة أو العصير، اضغط بمنديل قطني أبيض لامتصاص السائل دون فركه.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-white">التهوية المنتظمة:</strong> افتح النوافذ أو شغّل المكيف بوضع الجفاف بعد الغسيل لتسريع التهوية والحفاظ على الانتعاش.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-white">الشفط الأسبوعي اللطيف:</strong> استخدام فوهة المكنسة الناعمة مرة أسبوعياً يمنع استقرار الغبار داخل نسيج القماش.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-white">تجنب أشعة الشمس المباشرة:</strong> أسدل الستائر وقت الذروة لحماية ألوان المجالس والسجاد من البهتان الحراري.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-white">جدولة غسيل دوري:</strong> احرص على حجز جلسة تعقيم وغسيل بالبخار كل 4 إلى 6 أشهر لإطالة عمر المفروشات لسنوات.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          12. خريطة تغطية أحياء الخرج
      ===================================================================== */}
      <section className="py-16 px-4 bg-[#050f24]/70 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-[#00BFFF] text-xs font-extrabold mb-3">
              <MapPin className="w-4 h-4" />
              <span>أسطول سيارات متنقل يغطي الخرج بالكامل</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black mb-3">
              نصل إليك أينما كنت في{" "}
              <span className="text-[#D4AF37]">أحياء الخرج والمراكز التابعة</span>
            </h2>
            <p className="text-gray-400 text-sm">
              اضغط على اسم حيّك لطلب أقرب سيارة غسيل بالبخار متاحة الآن
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {kharjNeighborhoods.map((nh, idx) => (
              <Link
                key={idx}
                href={`https://wa.me/966501206816?text=${encodeURIComponent(
                  `مرحباً، أرغب في حجز خدمة غسيل سجاد ومجالس بالبخار في ${nh} بالخرج`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 bg-[#030b1c] border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-gray-200 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00BFFF] group-hover:text-[#D4AF37] flex-shrink-0" />
                  <span>{nh}</span>
                </span>
                <ArrowLeft className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          13. آراء وتجارب عملاء الخرج (6 تقييمات حقيقية)
      ===================================================================== */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-extrabold bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-4">
            <Users className="w-4 h-4" />
            <span>ثقة مئات الأسر في الخرج</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            ماذا يقول <span className="text-[#D4AF37]">عملاؤنا</span> عن جودة غسيل المجالس والسجاد؟
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            تقييمات حقيقية تعكس التزامنا بالدقة والنظافة والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#061124]/95 border border-white/10 hover:border-[#D4AF37]/60 rounded-3xl p-7 shadow-xl flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#00BFFF] bg-[#00BFFF]/10 px-3 py-1 rounded-full">
                    {rev.service}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &quot;{rev.text}&quot;
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-white text-sm">{rev.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{rev.area}</div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          14. الأسئلة الشائعة التفاعلية (10 أسئلة Accordion)
      ===================================================================== */}
      <section className="py-20 px-4 bg-[#050f24]/65 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <HelpCircle className="w-12 h-12 text-[#00BFFF] mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              الأسئلة الشائعة حول{" "}
              <span className="text-[#D4AF37]">غسيل السجاد والمجالس بالخرج</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              إجابات شافية على كل ما يدور في ذهنك قبل حجز موعد التنظيف
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#061124] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.18)]"
                      : "bg-[#030b1c]/90 border-white/10 hover:border-[#00BFFF]/50"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <h3
                      className={`text-sm sm:text-lg font-extrabold ${
                        isOpen ? "text-[#D4AF37]" : "text-white"
                      }`}
                    >
                      {item.q}
                    </h3>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#D4AF37] text-[#030b1c]"
                          : "bg-[#00BFFF]/10 text-[#00BFFF]"
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/10 text-gray-300 text-sm sm:text-base leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          15. خدمات أخرى قد تهمك (ربط داخلي للسيو Internal Linking)
      ===================================================================== */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">
            خدمات منزلية أخرى من{" "}
            <span className="text-[#00BFFF]">أساس الأمن الخليجي</span>
          </h2>
          <p className="text-gray-400 text-sm">
            احصل على خصم إضافي عند دمج أكثر من خدمة في نفس الزيارة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "غسيل وصيانة مكيفات", href: "/services/ac-washing" },
            { name: "غسيل وعزل خزانات", href: "/services/tank-cleaning" },
            { name: "رش مبيدات ومكافحة حشرات", href: "/services/pest-control" },
            { name: "كشف تسربات المياه", href: "/services/water-leak-detection" },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="bg-[#061124] border border-white/10 hover:border-[#D4AF37] p-5 rounded-2xl flex items-center justify-between text-sm font-bold text-white hover:text-[#D4AF37] transition-all group"
            >
              <span>{link.name}</span>
              <ArrowLeft className="w-4 h-4 text-[#00BFFF] group-hover:text-[#D4AF37] group-hover:-translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================================
          16. قسم الدعوة لاتخاذ إجراء النهائي (Final Luxury CTA)
      ===================================================================== */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#0b1f48] to-[#030b1c] border-2 border-[#D4AF37]/60 rounded-3xl p-8 sm:p-14 shadow-[0_0_60px_rgba(212,175,55,0.22)] relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#D4AF37]/20 blur-[90px] pointer-events-none"></div>

          <HeartHandshake className="w-16 h-16 text-[#D4AF37] mx-auto mb-5 relative z-10" />
          <h2 className="text-3xl sm:text-5xl font-black mb-5 relative z-10 leading-tight">
            اجعل مجلسك وسجادك يلمعان بالنظافة والفخامة اليوم!
          </h2>
          <p className="text-gray-300 text-base sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed relative z-10">
            تواصل معنا الآن لحجز أقرب موعد في مدينة الخرج، واستمتع بغسيل عميق بالبخار الإيطالي، تعقيم شامل، وتعطير ملكي ثابت بأفضل سعر.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="https://wa.me/966501206816?text=مرحباً، أرغب في حجز خدمة غسيل السجاد والمجالس بالخرج الآن"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#D4AF37] text-[#030b1c] hover:bg-white px-10 py-5 rounded-full font-black text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_35px_rgba(212,175,55,0.6)]"
            >
              <MessageCircle className="w-6 h-6" />
              <span>احجز عبر واتساب فوراً</span>
            </Link>

            <a
              href="tel:+966501206816"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#030b1c] px-10 py-5 rounded-full font-black text-lg sm:text-xl transition-all duration-300"
            >
              <PhoneCall className="w-6 h-6" />
              <span dir="ltr">+966 50 120 6816</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}