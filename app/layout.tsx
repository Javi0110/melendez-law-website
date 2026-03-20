import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com/melendez-law";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Meléndez López & Robles LLC | Real Estate, Inheritance & Civil Law in Puerto Rico",
    template: "%s | Meléndez López & Robles LLC"
  },
  description:
    "Meléndez López & Robles LLC is a Bayamón, Puerto Rico law firm focused on real estate law, inheritance and estate matters, and civil practice.",
  keywords: [
    "Puerto Rico lawyer",
    "Puerto Rico attorney",
    "Bayamón lawyer",
    "real estate lawyer Puerto Rico",
    "inheritance lawyer Puerto Rico",
    "estate lawyer Puerto Rico",
    "civil lawyer Puerto Rico",
    "Meléndez López & Robles LLC",
    "Fernando L. Meléndez López"
  ],
  openGraph: {
    title: "Meléndez López & Robles LLC – Puerto Rico Real Estate, Inheritance & Civil Law",
    description:
      "Law firm based in Bayamón, Puerto Rico focused on real estate, inheritance and estate matters, and civil practice.",
    type: "website",
    url: siteUrl,
    locale: "en_US"
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Meléndez López & Robles LLC",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Urb Santa Rosa Ave Aguas Buenas 16-30",
      addressLocality: "Bayamón",
      addressRegion: "PR",
      postalCode: "00959",
      addressCountry: "PR"
    },
    telephone: "+1-787-946-1810",
    email: "bufetemlyr@outlook.com",
    areaServed: "Puerto Rico",
    founder: {
      "@type": "Person",
      name: "Lic. Fernando L. Meléndez López"
    },
    sameAs: [] as string[]
  };

  return (
    <html lang="en">
      <body className="page-shell">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}


