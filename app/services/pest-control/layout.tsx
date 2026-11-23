import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLdBySlug } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "شركة رش مبيدات ومكافحة حشرات بالخرج | مبيدات آمنة وضمان معتمد",
  description:
    "أفضل شركة رش مبيدات ومكافحة حشرات بالخرج (النمل الأبيض، الصراصير، بق الفراش، القوارض). مبيدات ألمانية آمنة على الأطفال بدون رائحة أو مغادرة المنزل مع ضمان مكتوب. اتصل الآن!",
  keywords: [
    "شركة رش مبيدات بالخرج",
    "شركة مكافحة حشرات بالخرج",
    "مكافحة النمل الأبيض بالخرج",
    "رش صراصير وبق الفراش بالخرج",
    "أفضل شركة مكافحة حشرات بالخرج",
    "مبيدات بدون رائحة بالخرج",
    "أساس الأمن الخليجي رش مبيدات",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/services/pest-control",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "شركة رش مبيدات ومكافحة حشرات بالخرج | أساس الأمن الخليجي",
    description:
      "قضاء نهائي على جميع الحشرات الزاحفة والطائرة والنمل الأبيض بالخرج بمبيدات معتمدة آمنة بدون مغادرة المنزل.",
    url: "https://www.amnkhaligi.com/services/pest-control",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function PestControlLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={serviceJsonLdBySlug["pest-control"]} />
      {children}
    </>
  );
}