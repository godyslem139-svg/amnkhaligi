import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLdBySlug } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "شركة عزل أسطح بالخرج | عزل مائي وحراري وفوم بضمان 10 سنوات",
  description:
    "أفضل شركة عزل أسطح بالخرج للعزل المائي والحراري وعزل الفوم (بولي يوريثان). حماية شاملة للأسطح المبلطة وغير المبلطة من تسربات مياه الأمطار وحرارة الصيف وتوفير فاتورة الكهرباء بضمان 10 سنوات. اتصل الآن!",
  keywords: [
    "شركة عزل أسطح بالخرج",
    "عزل أسطح بالخرج",
    "عزل فوم بالخرج",
    "عزل مائي وحراري بالخرج",
    "عزل بولي يوريثان بالخرج",
    "عزل أسطح مبلطة بالخرج",
    "شركة عزل أسطح ضد الأمطار بالخرج",
    "أساس الأمن الخليجي عزل أسطح",
  ],
  alternates: {
    canonical: "https://www.amnkhaligi.com/services/roof-insulation",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "شركة عزل أسطح بالخرج | عزل فوم ومائي وحراري",
    description:
      "عزل أسطح مائي وحراري وفوم بأعلى المعايير الهندسية في الخرج لحماية عقارك من الأمطار والحرارة مع ضمان رسمي يصل إلى 10 سنوات.",
    url: "https://www.amnkhaligi.com/services/roof-insulation",
    siteName: "أساس الأمن الخليجي",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RoofInsulationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={serviceJsonLdBySlug["roof-insulation"]} />
      {children}
    </>
  );
}