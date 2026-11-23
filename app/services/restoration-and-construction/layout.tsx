import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLdBySlug } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "شركة ترميم وبناء بالخرج | ترميم منازل وفلل ومعالجة التشققات",
  description:
    "أفضل شركة ترميم وبناء وصيانة مباني بالخرج. ترميم فلل ومنازل قديمة، معالجة شروخ وتصدعات الجدران والخرسانة، تشطيبات داخلية وخارجية، وتجديد السباكة والكهرباء بإشراف هندسي وضمان معتمد. اتصل الآن!",
  keywords: [
    "شركة ترميم وبناء بالخرج",
    "شركة ترميم بالخرج",
    "ترميم منازل بالخرج",
    "ترميم فلل بالخرج",
    "معالجة تشققات الجدران بالخرج",
    "مقاول ترميم وبناء بالخرج",
    "صيانة وتشطيب مباني بالخرج",
    "أساس الأمن الخليجي ترميم وبناء",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/services/restoration-and-construction",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "شركة ترميم وبناء بالخرج | أساس الأمن الخليجي",
    description:
      "ترميم شامل للفلل والمنازل والمباني بالخرج، معالجة التصدعات والشروخ وتجديد التشطيبات بأعلى المعايير الهندسية وضمان معتمد.",
    url: "https://www.amnkhaligi.com/services/restoration-and-construction",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RestorationAndConstructionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={serviceJsonLdBySlug["restoration-and-construction"]} />
      {children}
    </>
  );
}