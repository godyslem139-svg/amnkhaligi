import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLdBySlug } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "شركة تسليك مجاري بالخرج | فتح البالوعات بالضغط وسحب البيارات 24 ساعة - أساس الأمن الخليج",
  description:
    "أفضل شركة تسليك مجاري بالخرج بأجهزة الضغط (النيتروجين والكمبروسر) دون تكسير. فتح انسداد بالوعات المطبخ والحمامات، سحب وتنظيف البيارات، وإزالة الروائح الكريهة بخدمة طوارئ 24 ساعة. اتصل الآن!",
  keywords: [
    "شركة تسليك مجاري بالخرج",
    "تسليك مجاري بالضغط بالخرج",
    "فتح بالوعات المطبخ والحمامات بالخرج",
    "شفط وسحب بيارات بالخرج",
    "تسليك صرف صحي بدون تكسير بالخرج",
    "وايت صرف صحي بالخرج",
    "معالجة انسداد المجاري بالخرج",
    "أساس الأمن الخليجي تسليك مجاري",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/services/sewage-clearing",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "شركة تسليك مجاري بالخرج | تسليك بالضغط وسحب بيارات",
    description:
      "حل فوري لانسداد المجاري والبالوعات بالضغط بدون تكسير في الخرج، مع سحب البيارات وإزالة الروائح على مدار 24 ساعة.",
    url: "https://www.amnkhaligi.com/services/sewage-clearing",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function SewageClearingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={serviceJsonLdBySlug["sewage-clearing"]} />
      {children}
    </>
  );
}