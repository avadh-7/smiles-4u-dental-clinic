export interface GalleryItem {
  id: string;
  category: "award" | "happy-patients" | "our-clinic" | "after-treatment";
  title: string;
  description: string;
  imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-clinic-1",
    category: "our-clinic",
    title: "Smiles 4 U Outer View",
    description: "Welcome to Smiles 4 U Speciality Dental Implant Centre located in Kandivali West.",
    imageUrl: "/gallery/g-clinic-1.jpg"
  },
  {
    id: "g-clinic-2",
    category: "our-clinic",
    title: "Advanced Intraoral Scanner Station",
    description: "Equipped with the latest 3D digital scanner for metal-free dental crowns.",
    imageUrl: "/gallery/g-clinic-2.jpg"
  },
  {
    id: "g-clinic-3",
    category: "our-clinic",
    title: "Sterile Operatory",
    description: "Our clinic maintains the highest Class-B sterilization protocols for patient safety.",
    imageUrl: "/3d-intraoral.webp"
  },
  {
    id: "g-patient-1",
    category: "happy-patients",
    title: "Smile Makeover Success",
    description: "A happy patient displaying their brand-new, aesthetically restored front teeth.",
    imageUrl: "/child-treatment.jpg"
  },
  {
    id: "g-patient-2",
    category: "happy-patients",
    title: "Family Dental Care",
    description: "Providing gentle and painless preventative treatments for patients of all ages.",
    imageUrl: "/gallery/g-patient-2.jpg"
  },
  {
    id: "g-patient-3",
    category: "happy-patients",
    title: "Implant Rehabilitation",
    description: "Restored full smile and chewing function with advanced titanium implants.",
    imageUrl: "/gallery/g-patient-3.jpg"
  },
  {
    id: "g-after-1",
    category: "after-treatment",
    title: "Cosmetic Veneers Before & After",
    description: "Corrected spacing and discoloration using premium E-max veneers.",
    imageUrl: "/smile-makeover.webp"
  },
  {
    id: "g-after-2",
    category: "after-treatment",
    title: "Implants & Crown Placement",
    description: "Seamless implant integration looking and feeling completely natural.",
    imageUrl: "/gallery/g-after-2.jpg"
  },
  {
    id: "g-award-1",
    category: "award",
    title: "Excellence in Implantology Award",
    description: "Dr. Millin D. Desai receiving recognition for contributions to dental implants.",
    imageUrl: "/doctor.webp"
  },
  {
    id: "g-award-2",
    category: "award",
    title: "25 Years Celebration Milestone",
    description: "Celebrating silver jubilee of Smiles 4 U clinic crafting bright smiles.",
    imageUrl: "/dental-tourism.jpg"
  }
];
