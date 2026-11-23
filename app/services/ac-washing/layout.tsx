import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLdBySlug } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "شركة غسيل وصيانة مكيفات بالخرج | تنظيف سبليت وشباك وتعبئة فريون",
  description:
    "أفضل شركة غسيل وتنظيف وصيانة مكيفات بالخرج (سبليت، شباك، مركزي، كاسيت). غسيل في نفس الموقع بأكياس الحماية بدون فوضى، حل مشكلة تنقيط المياه وضعف التبريد، وتعبئة فريون أمريكي أصلي بضمان معتمد. اتصل الآن!",
  keywords: [
    "شركة غسيل مكيفات بالخرج",
    "شركة تنظيف مكيفات بالخرج",
    "غسيل مكيفات سبليت بالخرج",
    "صيانة مكيفات بالخرج",
    "تعبئة فريون مكيفات بالخرج",
    "تنظيف مكيفات بالخرج بدون فك",
    "إصلاح تنقيط ماء المكيف بالخرج",
    "أساس الأمن الخليجي غسيل مكيفات",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/services/ac-washing",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "شركة غسيل وصيانة مكيفات بالخرج | تنظيف سبليت وتعبئة فريون - أساس الأمن الخليجي",
    description:
      "غسيل وتعقيم وصيانة جميع أنواع المكيفات بالخرج في نفس الموقع دون اتساخ الجدران، مع فحص الفريون وتسليك صرف المياه بضمان معتمد.",
    url: "https://www.amnkhaligi.com/services/ac-washing",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function ACWashingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={serviceJsonLdBySlug["ac-washing"]} />
      {children}
    </>
  );
}