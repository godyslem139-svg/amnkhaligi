export const siteUrl = "https://www.amnkhaligi.com";
export const businessId = `${siteUrl}/#business`;

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": businessId,
  name: "أساس الأمن الخليجي",
  url: siteUrl,
  telephone: "+966501206816",
  image: `${siteUrl}/logo.webp`,
  logo: `${siteUrl}/logo.webp`,
  areaServed: {
    "@type": "City",
    name: "الخرج",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "منطقة الرياض",
    },
  },
  sameAs: ["https://www.tiktok.com/@amnkhaligi"],
};

function serviceJsonLd(
  slug: string,
  name: string,
  description: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: { "@id": businessId },
    areaServed: { "@type": "City", name: "الخرج" },
    url: `${siteUrl}/services/${slug}`,
  };
}

export const serviceJsonLdBySlug = {
  "ac-washing": serviceJsonLd(
    "ac-washing",
    "غسيل وتعقيم المكيفات",
    "غسيل وتعقيم وصيانة المكيفات في مدينة الخرج.",
  ),
  "pest-control": serviceJsonLd(
    "pest-control",
    "مكافحة الحشرات ورش المبيدات",
    "خدمات مكافحة الحشرات ورش المبيدات في مدينة الخرج.",
  ),
  "restoration-and-construction": serviceJsonLd(
    "restoration-and-construction",
    "الترميم والبناء",
    "أعمال ترميم المباني والبناء والصيانة في مدينة الخرج.",
  ),
  "roof-insulation": serviceJsonLd(
    "roof-insulation",
    "عزل الأسطح",
    "خدمات عزل الأسطح مائيًا وحراريًا في مدينة الخرج.",
  ),
  "sewage-clearing": serviceJsonLd(
    "sewage-clearing",
    "تسليك المجاري",
    "تسليك وتنظيف شبكات الصرف الصحي في مدينة الخرج.",
  ),
  "tank-cleaning": serviceJsonLd(
    "tank-cleaning",
    "غسيل وتعقيم خزانات المياه",
    "غسيل وتعقيم وعزل خزانات المياه في مدينة الخرج.",
  ),
  "water-leak-detection": serviceJsonLd(
    "water-leak-detection",
    "كشف تسربات المياه",
    "كشف تسربات المياه في مدينة الخرج وإصدار تقارير فنية.",
  ),
};
