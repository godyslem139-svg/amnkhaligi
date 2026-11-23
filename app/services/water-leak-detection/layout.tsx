import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLdBySlug } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "شركة كشف تسربات المياه بالخرج | فحص إلكتروني بدون تكسير وتقارير معتمدة",
  description:
    "أفضل شركة كشف تسربات المياه بالخرج بأحدث الأجهزة الإلكترونية والكاميرات الحرارية بدون تكسير. معالجة ارتفاع فاتورة المياه، إصدار تقارير معتمدة لشركة المياه الوطنية، وإصلاح تسربات الخزانات والحمامات والأسطح بضمان معتمد. اتصل الآن!",
  keywords: [
    "شركة كشف تسربات المياه بالخرج",
    "كشف تسربات المياه بالخرج بدون تكسير",
    "فحص تسربات المياه بالخرج",
    "تقارير كشف تسربات المياه المعتمدة بالخرج",
    "حل ارتفاع فاتورة المياه بالخرج",
    "جهاز كشف تسربات المياه بالخرج",
    "إصلاح تسربات الحمامات والخزانات بالخرج",
    "أساس الأمن الخليجي كشف تسربات المياه",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/services/water-leak-detection",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "شركة كشف تسربات المياه بالخرج | فحص بدون تكسير وتقارير معتمدة - أساس الأمن الخليجي",
    description:
      "فحص إلكتروني دقيق لكشف تسربات المياه بالخرج بدون تكسير، وحل مشكلة ارتفاع فاتورة المياه بتقارير هندسية معتمدة وضمان على الإصلاح.",
    url: "https://www.amnkhaligi.com/services/water-leak-detection",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function WaterLeakDetectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={serviceJsonLdBySlug["water-leak-detection"]} />
      {children}
    </>
  );
}