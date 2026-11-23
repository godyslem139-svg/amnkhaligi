import type { Metadata } from "next";
import CarpetMajlisClient from "./CarpetMajlisClient";

export const metadata: Metadata = {
  title:
    "شركة غسيل سجاد ومجالس بالخرج | تنظيف بالبخار الإيطالي وتعقيم فوري",
  description:
    "أفضل شركة غسيل سجاد ومجالس وكنب وموكيت بالبخار في الخرج. إزالة تامة لبقع القهوة والحبر والزيوت، تعقيم حراري بنسبة 99.9%، تعطير فاخر وتجفيف فوري خلال ساعتين في نفس الموقع بدون نقل. احجز الآن!",
  keywords: [
    "شركة غسيل سجاد بالخرج",
    "شركة تنظيف مجالس بالخرج",
    "غسيل مجالس بالبخار بالخرج",
    "غسيل كنب بالخرج",
    "تنظيف موكيت بالخرج",
    "شركة غسيل مفروشات بالخرج",
    "تنظيف ستائر بالبخار بالخرج",
    "إزالة بقع القهوة من السجاد والكنب",
    "أفضل شركة غسيل سجاد ومجالس بالخرج",
    "أسعار غسيل المجالس بالخرج",
    "أساس الأمن الخليجي غسيل مجالس",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/services/carpet-and-majlis-cleaning",
  },
  openGraph: {
    title: "شركة غسيل سجاد ومجالس بالبخار بالخرج | أساس الأمن الخليجي",
    description:
      "نظافة ملكية لمجالسكم وسجادكم في نفس الموقع بالخرج بأجهزة البخار الإيطالي، مع إزالة البقع الصعبة والتعقيم والتعطير الفاخر.",
    url: "https://www.amnkhaligi.com/services/carpet-and-majlis-cleaning",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CarpetAndMajlisCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.amnkhaligi.com/#organization",
        name: "شركة أساس الأمن الخليجي",
        url: "https://www.amnkhaligi.com",
        telephone: "+966501206816",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "الخرج",
          addressRegion: "الرياض",
          addressCountry: "SA",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "Service",
        name: "غسيل سجاد ومجالس وكنب بالبخار في الخرج",
        serviceType: "تنظيف سجاد ومجالس بالبخار",
        provider: {
          "@id": "https://www.amnkhaligi.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "الخرج",
        },
        description:
          "خدمة غسيل وتنظيف السجاد والمجالس العربية والكنب والموكيت والستائر بالبخار الإيطالي الجاف مع إزالة البقع المستعصية والتعقيم والتعطير الفوري في جميع أحياء الخرج.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "SAR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: "https://www.amnkhaligi.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "خدماتنا",
            item: "https://www.amnkhaligi.com/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "غسيل سجاد ومجالس بالخرج",
            item: "https://www.amnkhaligi.com/services/carpet-and-majlis-cleaning",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "كم يستغرق وقت جفاف السجاد والمجالس بعد الغسيل بالبخار؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "بفضل ماكينات الشفط الإيطالية عالية القدرة وتقنية البخار منخفض الرطوبة، يجف السجاد والمجالس خلال ساعتين إلى 4 ساعات فقط، ويمكنك استقبال ضيوفك في نفس اليوم بدون أي روائح رطوبة.",
            },
          },
          {
            "@type": "Question",
            name: "هل تزيلون البقع الصعبة مثل القهوة العربية والهيل والحبر والزيوت؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم، نستخدم مذيبات ومزيلات بقع ألمانية متخصصة لكل نوع بقعة على حدة (القهوة، الشاي، العصائر، الحبر، الدهون، الشحوم) تفكك البقعة من جذورها دون التسبب في بهتان الألوان أو تلف الأنسجة.",
            },
          },
          {
            "@type": "Question",
            name: "هل يتم الغسيل داخل المنزل أم يتم نقل السجاد والمجالس للمغسلة؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "يتم الغسيل بالكامل في موقعك داخل المنزل أو الاستراحة في الخرج دون الحاجة لنقل المجالس أو تفكيكها، مع فرش أغطية حماية للأرضيات والحفاظ التام على نظافة المكان المحيط.",
            },
          },
          {
            "@type": "Question",
            name: "هل المنظفات والمعقمات آمنة على الأطفال ومرضى الحساسية والربو؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم بنسبة 100%، نعتمد على منظفات عضوية ومعتمدة خالية من المبيضات والكلور والمواد الكيميائية المهيجة، كما أن التعقيم الحراري بالبخار يزيل عث الغبار ومسببات الحساسية بفعالية عالية.",
            },
          },
          {
            "@type": "Question",
            name: "هل يسبب الغسيل بالبخار انكماش الأقمشة أو بهتان ألوان المجالس الفاخرة؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "إطلاقاً؛ يقوم الفني أولاً باختبار نوع النسيج (مخمل، كتان، شامواه، جلد، حرير صناعي) وضبط درجة حرارة البخار وضغط الشفط بما يناسب خامة القماش تماماً للحفاظ على لمعانه ونعومته.",
            },
          },
          {
            "@type": "Question",
            name: "كيف يتم احتساب سعر غسيل المجالس والسجاد بالخرج؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "يتم التسعير بشفافية تامة بناءً على عدد الأمتار للمجالس والموكيت أو عدد قطع الكنب والسجاد، مع توفير باقات مخفضة وخصومات قوية عند تنظيف أكثر من مجلس أو فيلا كاملة.",
            },
          },
          {
            "@type": "Question",
            name: "هل تقدمون خدمة غسيل الستائر وهي معلقة في مكانها؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم، نوفر تقنية التنظيف بالبخار الجاف للستائر الثقيلة والشيفون والبلاك أوت وهي معلقة في مكانها دون الحاجة لفكها أو كيّها أو إعادة تركيبها.",
            },
          },
          {
            "@type": "Question",
            name: "هل تغطون جميع أحياء الخرج والمراكز التابعة لها مثل الدلم والهياثم؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم، لدينا سيارات مجهزة بالكامل تجوب جميع أحياء الخرج (الخزامى، النهضة، الورود، الأندلس، المصيف، السيح، السلام) بالإضافة إلى الدلم والهياثم واليمامة والسلمية بنفس اليوم.",
            },
          },
          {
            "@type": "Question",
            name: "هل يشمل الغسيل إزالة الروائح الكريهة مثل الدخان والرطوبة؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم، نقوم بمعالجة مصدر الرائحة داخل الإسفنج والوبر عبر التعقيم البخاري ومزيلات الروائح البيولوجية، يليها تعطير فاخر بروائح العود أو العطور الفرنسية الثابتة.",
            },
          },
          {
            "@type": "Question",
            name: "كم مرة يُنصح بغسيل المجالس والسجاد في أجواء الخرج؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نظراً لطبيعة الأجواء والغبار الموسمي في منطقة الخرج، ينصح الخبراء بإجراء غسيل وتعقيم عميق بالبخار كل 4 إلى 6 أشهر للمجالس كثيرة الاستخدام، وكل 6 أشهر للسجاد والستائر للحفاظ على جودة الهواء داخل المنزل.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CarpetMajlisClient />
    </>
  );
}