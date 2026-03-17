"use client";

import { SITE_INFO } from "@/lib/site-data";
import { SITE_URL } from "@/lib/site-url";
import { useLanguage } from "@/components/language-context";

/**
 * LegalService / Attorney JSON-LD schema for local SEO.
 * https://schema.org/LegalService
 */
export function JsonLdLegalService() {
  const { t } = useLanguage();
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_INFO.name,
    url: SITE_URL,
    description: t("seo.legalServiceDescription"),
    telephone: SITE_INFO.phoneHref.replace("tel:", ""),
    email: SITE_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_INFO.address,
      addressLocality: "Seyhan",
      addressRegion: "Adana",
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "City",
      name: "Adana",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Adana",
        addressCountry: "TR",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.0000",
      longitude: "35.3213",
    },
    ...(SITE_INFO.instagram || SITE_INFO.linkedin
      ? {
          sameAs: [SITE_INFO.instagram, SITE_INFO.linkedin].filter(Boolean),
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
