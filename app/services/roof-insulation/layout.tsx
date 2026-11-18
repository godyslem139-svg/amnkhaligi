import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLdBySlug } from "@/lib/structured-data";

export default function RoofInsulationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={serviceJsonLdBySlug["roof-insulation"]} />
      {children}
    </>
  );
}
