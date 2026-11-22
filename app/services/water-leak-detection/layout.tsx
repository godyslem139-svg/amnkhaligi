import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLdBySlug } from "@/lib/structured-data";

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
