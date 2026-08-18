import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    "Smile Makeover and Implants Centre. Crafting bright, healthy smiles since 1997. Dr. Millin D. Desai and team provide implants, painless root canals, and cosmetic veneers in Kandivali West.",
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
      "Modern, painless dental treatments led by Dr. Millin D. Desai. Implants, smile makeovers, root canals, and clear aligners in Kandivali West since 1997.",
    url: "https://smiles4udentalclinic.in",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full flex flex-col bg-lavender-bg text-primary">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
