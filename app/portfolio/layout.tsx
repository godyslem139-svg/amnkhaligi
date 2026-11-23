import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://www.amnkhaligi.com";
const DEFAULT_THUMBNAIL = `${SITE_URL}/logo.png`;
export const metadata: Metadata = {
  title:
    "سابقة أعمالنا بالخرج | فيديوهات مشاريع العزل وكشف التسربات - أساس الأمن الخليجي",
  description:
    "شاهد سابقة أعمال شركة أساس الأمن الخليجي بالخرج بالصوت والصورة: تنفيذ عزل الأسطح والخزانات، كشف تسربات المياه بدون تكسير، الترميم، ومكافحة الحشرات من مواقع العمل مباشرة.",
  keywords: [
    "سابقة أعمال أساس الأمن الخليجي",
    "فيديوهات عزل أسطح بالخرج",
    "فيديوهات كشف تسربات المياه بالخرج",
    "مشاريع عزل فوم وخزانات بالخرج",
    "أعمال ترميم وصيانة بالخرج",
    "شركة عزل وكشف تسربات بالخرج",
  ],
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "سابقة أعمالنا بالخرج | أساس الأمن الخليجي",
    description:
      "توثيق حقيقي بالصوت والصورة لأعمالنا في العزل المائي والحراري وكشف التسربات والترميم في مدينة الخرج.",
    url: `${SITE_URL}/portfolio`,
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

const videoDescriptions = [
  {
    title: "تنفيذ عزل أسطح مائي وحراري بالخرج - شركة أساس الأمن الخليجي",
    description: "توثيق عملي لخطوات عزل الأسطح ضد تسربات مياه الأمطار وحرارة الصيف في الخرج بضمان معتمد.",
  },
  {
    title: "كشف تسربات المياه إلكترونياً بدون تكسير بالخرج",
    description: "فحص وتحديد مكان تسرب المياه بدقة عالية بأحدث الأجهزة الإلكترونية في مدينة الخرج.",
  },
  {
    title: "عزل فوم بولي يوريثان للأسطح بالخرج - أساس الأمن الخليجي",
    description: "رش عزل الفوم المائي والحراري مع طبقة الحماية الأكريليك لحماية المباني في الخرج.",
  },
  {
    title: "تنظيف وتعقيم وعزل خزانات المياه بالخرج",
    description: "أعمال غسيل وتعقيم وعزل الخزانات الأرضية والعلوية بمواد آمنة ومصرحة في الخرج.",
  },
  {
    title: "تسليك مجاري بالضغط وفتح الانسدادات بالخرج",
    description: "حل فوري لانسداد الصرف الصحي والبالوعات بأجهزة الضغط الحديثة دون تكسير في الخرج.",
  },
  {
    title: "ترميم مباني ومعالجة تشققات الجدران بالخرج",
    description: "تنفيذ أعمال الترميم والصيانة الشاملة للفلل والمنازل بأعلى معايير الجودة في الخرج.",
  },
];

const videoChars = "abcdefghijklmnopqrstuvwxyz".split("");

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "سابقة أعمالنا",
          item: `${SITE_URL}/portfolio`,
        },
      ],
    },
    ...videoChars.map((char, index) => {
      const info = videoDescriptions[index % videoDescriptions.length];
      return {
        "@type": "VideoObject",
        "@id": `${SITE_URL}/portfolio#video-${char}`,
        name: `${info.title} (${index + 1})`,
        description: info.description,
        thumbnailUrl: [DEFAULT_THUMBNAIL],
        uploadDate: "2026-10-15T10:00:00+03:00",
        contentUrl: `${SITE_URL}/${char}.mp4`,
        inLanguage: "ar",
        publisher: {
          "@type": "Organization",
          name: "شركة أساس الأمن الخليجي",
          logo: {
            "@type": "ImageObject",
            url: DEFAULT_THUMBNAIL,
          },
        },
      };
    }),
  ],
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={portfolioJsonLd} />
      {children}
    </>
  );
}