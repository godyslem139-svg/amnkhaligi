import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLdBySlug } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "شركة غسيل خزانات بالخرج | تنظيف وتعقيم وعزل خزانات بضمان معتمد",
  description:
    "أفضل شركة غسيل وتنظيف وتعقيم خزانات المياه الأرضية والعلوية بالخرج. إزالة الرواسب والطحالب بمواد آمنة ومصرحة، عزل خزانات إيبوكسي وإسمنتي ضد التسربات، وإصلاح التشققات بضمان معتمد. اتصل الآن!",
  keywords: [
    "شركة غسيل خزانات بالخرج",
    "شركة تنظيف خزانات بالخرج",
    "تعقيم خزانات المياه بالخرج",
    "عزل خزانات بالخرج",
    "عزل خزانات إيبوكسي بالخرج",
    "غسيل خزانات أرضية وعلوية بالخرج",
    "إصلاح تسربات الخزانات بالخرج",
    "أساس الأمن الخليجي غسيل خزانات",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/services/tank-cleaning",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "شركة غسيل وعزل خزانات بالخرج | تنظيف وتعقيم شامل",
    description:
      "تنظيف وتعقيم وعزل خزانات المياه الأرضية والعلوية بالخرج بأحدث الأجهزة والمواد الآمنة المعتمدة لضمان مياه نقية وصحية.",
    url: "https://www.amnkhaligi.com/services/tank-cleaning",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function TankCleaningLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={serviceJsonLdBySlug["tank-cleaning"]} />
      {children}
    </>
  );
}