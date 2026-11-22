import type { Metadata } from "next";
import OvenCleaningClient from "./OvenCleaningClient";

export const metadata: Metadata = {
  title:
    "شركة تنظيف أفران بالخرج | إزالة الدهون المتفحمة وتسليك عيون الغاز - أساس الأمن الخليجي",
  description:
    "أفضل شركة تنظيف وصيانة أفران الغاز والكهرباء والبلت إن بالخرج. إزالة تامة للدهون المحترقة بمواد آمنة غذائياً، تسليك العيون وتقوية الشعلة، تنظيف الشفاطات، وفحص أمان الغاز. احجز الآن!",
  keywords: [
    "شركة تنظيف أفران بالخرج",
    "تنظيف أفران الغاز بالخرج",
    "صيانة أفران بالخرج",
    "إزالة دهون الأفران المحترقة",
    "تسليك عيون الفرن بالخرج",
    "تنظيف فرن بلت إن بالخرج",
    "تنظيف أفران جليم غاز بالخرج",
    "تنظيف شفاط المطبخ بالخرج",
    "فني تنظيف وصيانة أفران بالخرج",
    "أساس الأمن الخليجي تنظيف أفران",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/services/oven-cleaning",
  },
  openGraph: {
    title: "شركة تنظيف وصيانة أفران بالخرج | أساس الأمن الخليجي",
    description:
      "تنظيف عميق وتلميع لأفران الغاز والكهرباء والبلت إن بالخرج مع تسليك العيون وإزالة الدهون المتفحمة بمواد آمنة 100%.",
    url: "https://www.amnkhaligi.com/services/oven-cleaning",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OvenCleaningPage() {
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
        name: "تنظيف وصيانة أفران الغاز والكهرباء والبلت إن بالخرج",
        serviceType: "تنظيف وصيانة الأفران",
        provider: {
          "@id": "https://www.amnkhaligi.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "الخرج",
        },
        description:
          "خدمة تنظيف عميق وصيانة شاملة لأفران الغاز والأفران الكهربائية والبلت إن والشفاطات بالخرج، تشمل إزالة الدهون المتفحمة وتسليك الفونيا والعيون وفحص أمان الغاز في الموقع.",
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
            name: "تنظيف أفران بالخرج",
            item: "https://www.amnkhaligi.com/services/oven-cleaning",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "هل المواد المستخدمة في تنظيف الأفران آمنة على الصحة والطعام؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم 100%، نستخدم مذيبات دهون أوروبية معتمدة (Food-Safe) خالية من الصودا الكاوية والأبخرة السامة، ولا تترك أي بقايا كيميائية أو روائح تؤثر على طعم الطعام عند تشغيل الفرن.",
            },
          },
          {
            "@type": "Question",
            name: "كم يستغرق تنظيف الفرن بالكامل وهل يمكن استخدامه مباشرة بعد الانتهاء؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "تستغرق عملية التنظيف العميق والفك والتلميع والتسليك من 60 إلى 90 دقيقة في نفس المطبخ دون أي فوضى، ويمكنك استخدام الفرن للطبخ فور مغادرة الفني مباشرة.",
            },
          },
          {
            "@type": "Question",
            name: "هل تقومون بتنظيف الزجاج الداخلي لباب الفرن الذي تتراكم فيه الدهون بين الطبقتين؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم، يقوم الفني بفك باب الفرن وفصل طبقات الزجاج المزدوج بأمان تام لإزالة الشحوم والسواد المتراكم بين الزجاجين ثم إعادته شفافاً كالجديد تماماً.",
            },
          },
          {
            "@type": "Question",
            name: "هل تشمل الخدمة تسليك عيون الغاز الضعيفة أو التي تسوّد القدور؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم، نقوم بتنظيف وتسليك الفونيا ومواسير الغاز ومخارج الشعلة بإبر معايرة دقيقة، مما يعيد الشعلة زرقاء قوية ومتوازنة ويمنع تماماً اسوداد الأواني والقدور.",
            },
          },
          {
            "@type": "Question",
            name: "هل تنظفون الأفران المدمجة (Built-in) والأفران الكهربائية السيراميك؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "بكل تأكيد، لدينا فنيون متخصصون في التعامل مع الأفران المدمجة والسيراميك والحث الحراري بمواد وتقنيات لا تخدش الزجاج الحراري وتحمي لوحة التحكم الإلكترونية والحساسات.",
            },
          },
          {
            "@type": "Question",
            name: "هل يتسبب التنظيف في خدش الستانلس ستيل أو إزالة أرقام المفاتيح؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "إطلاقاً؛ نمنع تماماً استخدام السلك الخشن أو الأحماض الكاوية، ونعتمد على فوط مايكروفايبر وملمعات ستانلس أصلية تحافظ على اللمعة ووضوح أرقام وعلامات مفاتيح التشغيل.",
            },
          },
          {
            "@type": "Question",
            name: "هل توفرون قطع غيار وصيانة بجانب التنظيف مثل المفصلات وربل الباب والإشعال الذاتي؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم، نوفر صيانة متكاملة تشمل تغيير مفصلات باب الفرن المرتخية، تبديل ربل (جلدة) حفظ الحرارة، إصلاح الإشعال الذاتي، وتغيير مفاتيح الغاز والثيرموستات بقطع غيار أصلية.",
            },
          },
          {
            "@type": "Question",
            name: "هل تقدمون خدمة تنظيف شفاطات المطبخ وفلاتر الزيوت مع الفرن؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم، نقدم باقة مشتركة ومخفضة تشمل تنظيف الفرن بالكامل مع فك وتنظيف فلاتر الشفاط والمدخنة من الشحوم المتراكمة لتحسين قوة السحب ومنع روائح القلي.",
            },
          },
          {
            "@type": "Question",
            name: "ما سبب خروج دخان كثيف ورائحة احتراق عند تشغيل الفرن الداخلي؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "يحدث ذلك بسبب تفحّم طبقات الزيوت والدهون المترسبة على جدران الفرن والصاج السفلي والعيون الداخلية. التنظيف العميق يزيل هذه الطبقات بالكامل ويوقف الدخان نهائياً.",
            },
          },
          {
            "@type": "Question",
            name: "هل تغطون جميع أحياء الخرج وهل يتوفر الحجز في نفس اليوم؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم، سياراتنا المجهزة تغطي كافة أحياء الخرج (الخزامى، النهضة، الورود، الأندلس، المصيف، السيح، السلام) بالإضافة إلى الدلم والهياثم واليمامة بخدمة سريعة في نفس اليوم.",
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
      <OvenCleaningClient />
    </>
  );
}