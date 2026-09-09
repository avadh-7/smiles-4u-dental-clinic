import type { Metadata } from "next";
import DrMilinClient from "@/components/sections/DrMilinClient";

export const metadata: Metadata = {
  title: "Dr. Milin D. Desai | Chief Implantologist & Cosmetic Dentist | Kandivali West, Mumbai",
  description:
    "Meet Dr. Milin D. Desai (BDS, Implantologist of the Year 2022). Over 28+ years of clinical excellence in dental implants, aesthetic rehabilitation & painless smile makeovers at Smiles 4 U Dental Clinic, Kandivali West, Mumbai.",
  keywords: [
    "Dr Milin Desai",
    "Dr Millin D Desai dentist",
    "Best implant dentist Kandivali",
    "Implantologist of the Year Mumbai",
    "Dental clinic Kandivali West",
    "Smiles 4 U doctor",
    "Full mouth rehabilitation Mumbai",
    "Cosmetic dentist Kandivali",
  ],
  openGraph: {
    title: "Dr. Milin D. Desai | Chief Implantologist & Dentist in Kandivali West",
    description:
      "Founder of Smiles 4 U Speciality Dental Implant Centre. 28+ years experience, international implantology training (France, OSSTEM), and award-winning dental care.",
    url: "https://www.smiles4u-dental.com/dr-milin",
    type: "profile",
    images: [
      {
        url: "https://www.smiles4u-dental.com/dr_milin.webp",
        width: 800,
        height: 1200,
        alt: "Dr. Milin D. Desai",
      },
    ],
  },
};

export default function DrMilinPage() {
  return <DrMilinClient />;
}
