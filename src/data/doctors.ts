export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experience: string;
  education: string;
  imageUrl: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-milin-desai",
    name: "Dr. Millin D. Desai",
    role: "Dentist",
    specialty: "Dental Implants, Aesthetic Rehabilitation & Cosmetic Makeovers",
    bio: "Dr. Millin D. Desai has been practicing dentistry since 1997, dedicated to offering exceptional dental care. Over the past 25+ years, he has successfully treated thousands of patients, building a reputation as one of the premier dental implant and cosmetic specialists in Kandivali West, Mumbai. He integrates state-of-the-art dental technology with a gentle, patient-centric clinical approach.",
    experience: "25+ Years of Clinical Excellence",
    education: "BDS, Specialization in Dental Implants & Aesthetic Dentistry",
    imageUrl: "/doctor.webp"
  },
  {
    id: "dr-komal",
    name: "Dr. Komal",
    role: "Associate Dentist",
    specialty: "General Dentistry, Preventive & Restorative Treatments",
    bio: "Dr. Komal is a highly compassionate general dentist specializing in comprehensive restorative care, cosmetic bonding, and preventive treatments. She works closely with patients of all age groups to establish healthy dental habits.",
    experience: "8+ Years of Experience",
    education: "BDS, General Dental Practitioner",
    imageUrl: "/dummy_dentist.webp"
  },
  {
    id: "dr-bhagyashree",
    name: "Dr. Bhagyashree",
    role: "Associate Dentist",
    specialty: "Conservative Dentistry & Preventive Care",
    bio: "Dr. Bhagyashree focuses on conservative treatments, prioritizing natural tooth preservation. She is highly skilled in dental prophylaxis, cleanings, tooth sealants, and restoring teeth utilizing aesthetic composite fillings.",
    experience: "7+ Years of Experience",
    education: "BDS, General Dental Practitioner",
    imageUrl: "/dummy_dentist.webp"
  },
  {
    id: "dr-rohit-a",
    name: "Dr. Rohit A.",
    role: "Endodontist",
    specialty: "Microscopic Endodontics & Single-Sitting Root Canals",
    bio: "Dr. Rohit A. is our expert endodontist who specializes in advanced root canal procedures. He utilizes microscopic endodontics and rotary systems to deliver fast, highly successful, and painless root canal treatments.",
    experience: "10+ Years of Experience",
    education: "BDS, MDS (Endodontics & Conservative Dentistry)",
    imageUrl: "/dummy_dentist.webp"
  },
  {
    id: "dr-pranav-k",
    name: "Dr. Pranav K.",
    role: "Orthodontist",
    specialty: "Orthodontic Alignments & Invisalign Clear Aligners",
    bio: "Dr. Pranav K. is an orthodontist dedicated to straightening teeth and correcting jaw alignment issues. He offers standard metal/ceramic braces as well as advanced modern clear aligner solutions like Invisalign, ensuring a comfortable smile journey.",
    experience: "12+ Years of Experience",
    education: "BDS, MDS (Orthodontics)",
    imageUrl: "/dummy_dentist.webp"
  }
];
