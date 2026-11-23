import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "سابقة أعمالنا بالخرج | فيديوهات وصور مشاريع العزل وكشف التسربات - أساس الأمن الخليجي",
  description:
    "شاهد سابقة أعمال شركة أساس الأمن الخليجي بالخرج بالصوت والصورة: تنفيذ عزل الأسطح والخزانات، كشف تسربات المياه بدون تكسير، الترميم، ومكافحة الحشرات من مواقع العمل مباشرة.",
  keywords: [
    "سابقة أعمال أساس الأمن الخليجي",
    "أعمال عزل أسطح بالخرج",
    "فيديوهات كشف تسربات المياه بالخرج",
    "مشاريع عزل فوم وخزانات بالخرج",
    "أعمال ترميم وصيانة بالخرج",
    "شركة عزل وكشف تسربات بالخرج",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "سابقة أعمالنا بالخرج | أساس الأمن الخليجي",
    description:
      "توثيق حقيقي بالصوت والصورة لأعمالنا في العزل المائي والحراري وكشف التسربات والترميم في مدينة الخرج.",
    url: "https://www.amnkhaligi.com/portfolio",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

const portfolioBreadcrumbJsonLd = {
  "@context": "https://schema.org",
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
      name: "سابقة أعمالنا",
      item: "https://www.amnkhaligi.com/portfolio",
    },
  ],
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={portfolioBreadcrumbJsonLd} />
      {children}
    </>
  );
}