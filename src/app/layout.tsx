import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Smiles 4U Dental | Smile Makeover & Implants Centre | Kandivali West, Mumbai",
  description:
    "Dr. Millin D. Desai's implant & smile makeover clinic in Kandivali West, Mumbai. 29+ years, painless root canals, laser dentistry. Book your consult today.",
  keywords: [
    "Dentist in Kandivali",
    "Implant dentist Mumbai",
    "Dental clinic Kandivali West",
    "Root canal doctor Kandivali",
    "Smile makeover Mumbai",
    "Dr Millin D. Desai dentist",
    "Smiles 4U Dental",
    "Smiles 4U dental clinic",
  ],
  openGraph: {
    title:
      "Smiles 4U Dental | Smile Makeover & Implants Centre | Dentist in Kandivali",
    description:
      "Dr. Millin D. Desai's implant & smile makeover clinic in Kandivali West, Mumbai. 29+ years, painless root canals, laser dentistry. Book your consult today.",
    url: "https://smiles4udentalclinic.in",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Smiles 4 U Speciality Dental Implant Centre",
  "image": "https://www.smiles4u-dental.com/logo.jpg",
  "url": "https://www.smiles4u-dental.com",
  "telephone": "+91-91527-66951",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop 1, Rashmi Tara CHS, Opposite Dutt Mandir, Dahanukarwadi",
    "addressLocality": "Kandivali West, Mumbai",
    "postalCode": "400067",
    "addressCountry": "IN",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "10:00",
      "closes": "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "17:00",
      "closes": "21:00",
    },
  ],
  "founder": "Dr. Millin D. Desai",
  "sameAs": [
    "https://www.facebook.com/smiles4udentistdrmilinkandivali/",
    "https://www.instagram.com/smiles4udrmilin/",
    "https://www.linkedin.com/company/smiles-4-u-sdic/home/",
    "https://www.youtube.com/@smiles4udrmillindesai",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiasedScroll`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-lavender-bg text-primary">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
