"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Calendar,
  Sparkles,
  Users,
  CheckCircle2,
  Phone,
  MessageCircle,
  X,
  ZoomIn,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { ScrollReveal } from "../ui/ScrollReveal";

interface CertificateItem {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  issuer: string;
  year?: string;
}

const certificates: CertificateItem[] = [
  {
    id: 1,
    imageUrl: "/certi_1.webp",
    title: "Global Outreach Dental Award 2022",
    subtitle: "Winner: Implantologist of the Year",
    issuer: "Global Outreach Medical & Health Association",
    year: "2022",
  },
  {
    id: 2,
    imageUrl: "/certi_2.webp",
    title: "2nd Global Outreach Dental Conference & Awards",
    subtitle: "Certificate of Award & Trophy - Implantologist of the Year",
    issuer: "FDI, APDF & ICD Joint Recognition",
    year: "2022",
  },
  {
    id: 11,
    imageUrl: "/certi_11.webp",
    title: "Doctor-To-Doctor World's Top 100",
    subtitle: "Achievement Award for Leadership & Excellence in Healthcare",
    issuer: "Global Summit Institute",
    year: "2021",
  },
  {
    id: 8,
    imageUrl: "/certi_8.webp",
    title: "India's Top 100 Doctors in Dentistry",
    subtitle: "Official Certificate of Nomination",
    issuer: "Global Outreach Medical & Health Association (GOMHA)",
    year: "2021",
  },
  {
    id: 3,
    imageUrl: "/certi_3.webp",
    title: "Comprehensive Oral Implantology & Prosthetics",
    subtitle: "Didactic, Practical & Clinical Surgery Programme",
    issuer: "IFUIBE (France) - International Federation of University Implant Educators",
    year: "2011",
  },
  {
    id: 4,
    imageUrl: "/certi_4.webp",
    title: "Advanced Sinus Training Course",
    subtitle: "Professional Clinical Certification",
    issuer: "OSSTEM AIC (Advanced Dental Implant Training)",
    year: "2017",
  },
  {
    id: 10,
    imageUrl: "/certi_10.webp",
    title: "27th ISOI Annual National Conference",
    subtitle: "Unlock Implantology - Certificate of Attendance",
    issuer: "Indian Society of Oral Implantologists (ISOI)",
    year: "2021",
  },
  {
    id: 6,
    imageUrl: "/certi_6.webp",
    title: "IDA & IAACD Aesthetic Conference",
    subtitle: "Aesthetic Trek - Class IV Angle Build-up & Infection Control",
    issuer: "Indian Dental Association & Indian Academy of Aesthetic Dentistry",
    year: "2012",
  },
  {
    id: 7,
    imageUrl: "/certi_7.webp",
    title: "OSSTEM AIC Sinus Master Presentation",
    subtitle: "Honorary Course Presentation with Course Director",
    issuer: "OSSTEM AIC Mumbai",
    year: "2017",
  },
  {
    id: 5,
    imageUrl: "/certi_5.webp",
    title: "Clinical Achievement Award Presentation",
    subtitle: "Honorary Presentation with Esteemed Faculty",
    issuer: "Advanced Dental Clinical Faculty",
    year: "2018",
  },
  {
    id: 9,
    imageUrl: "/certi_9.webp",
    title: "Specialized Clinical Dentistry Certification",
    subtitle: "Academic & Clinical Recognition Award",
    issuer: "Advanced Dental Clinical Forum",
    year: "2019",
  },
];

const memberships = [
  {
    id: 1,
    name: "Indian Society of Oral Implantologist - ISOI",
    category: "Implantology Specialist",
    description: "Active Fellow/Member engaging in ongoing clinical advancement in guided implant surgery.",
  },
  {
    id: 2,
    name: "Indian Dental Association - IDA",
    category: "National Association",
    description: "Committed to highest ethical codes and regular clinical masterclasses across branches.",
  },
  {
    id: 3,
    name: "Kandivali Medical Association - KMA",
    category: "Local Medical Guild",
    description: "Collaborating with local physicians, specialists, and dental practitioners in Kandivali West.",
  },
  {
    id: 4,
    name: "BNI",
    category: "Professional Network",
    description: "Promoting professional healthcare integrity and community trust across Mumbai.",
  },
  {
    id: 5,
    name: "Jain Doctors Federation - JDF",
    category: "Healthcare Philanthropy",
    description: "Contributing to community dental checkup drives, preventative awareness, and charitable care.",
  },
  {
    id: 6,
    name: "Digambar Jain Doctors Federation",
    category: "Healthcare Philanthropy",
    description: "Active community welfare participation and ethical healthcare service.",
  },
];

export const DrMilinClient: React.FC = () => {
  const [selectedCerti, setSelectedCerti] = useState<CertificateItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string>("/dr_milin.webp");

  const doctorPhotos = [
    { src: "/dr_milin.webp", label: "Formal Portrait" },
    { src: "/dr_milin_1.webp", label: "Clinical Coat (Logo)" },
    { src: "/dr_milin_2.webp", label: "Consultation Portrait" },
    { src: "/doctor.webp", label: "Outreach Award 2022" },
  ];

  return (
    <div className="bg-lavender-bg min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/about_us_bg.webp"
            alt="Clinic Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-lavender-bg" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal yOffset={15}>
            {/* Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-sans text-slate-200 mb-4">
              <Link href="/" className="hover:text-accent-gold transition-smooth">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <Link href="/about" className="hover:text-accent-gold transition-smooth">
                About Us
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-accent-gold font-semibold">Dr. Milin D. Desai</span>
            </div>

            <span className="inline-block px-4 py-1.5 bg-accent-gold/20 border border-accent-gold/40 text-accent-gold rounded-full text-xs font-display font-semibold tracking-wider uppercase mb-4">
              Chief Implant Dentist & Founder
            </span>
          </ScrollReveal>

          <ScrollReveal yOffset={15} delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
              Dr. Milin D. Desai
            </h1>
          </ScrollReveal>

          <ScrollReveal yOffset={15} delay={0.2}>
            <p className="font-sans text-slate-200 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
              BDS | Comprehensive Oral Implantology & Prosthetics (IFUIBE France) <br className="hidden sm:inline" />
              Over <strong className="text-accent-gold font-bold">28+ Years</strong> of Clinical Excellence in Kandivali West, Mumbai.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Doctor Bio & Highlights Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Photo Showcase */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ScrollReveal delay={0.1}>
                {/* Main Selected Image */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <img
                    src={selectedPhoto}
                    alt="Dr. Milin D. Desai"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-display font-bold text-primary text-base block">
                        Dr. Milin D. Desai
                      </span>
                      <span className="text-xs text-secondary font-semibold font-sans">
                        Founder & Chief Implantologist
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-secondary text-white rounded-xl text-xs font-display font-bold">
                      28+ Yrs Exp
                    </div>
                  </div>
                </div>

                {/* Thumbnails to switch view */}
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {doctorPhotos.map((photo, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedPhoto(photo.src)}
                      className={`relative aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedPhoto === photo.src
                          ? "border-secondary ring-2 ring-secondary/30 scale-105 shadow-md"
                          : "border-slate-200 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: In-depth Biography & Credentials */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ScrollReveal delay={0.2}>
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-secondary/10 rounded-xl text-secondary">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-secondary">
                    Distinguished Clinical Career
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mt-2">
                  Pioneering Painless Implantology & Aesthetic Transformations
                </h2>

                <div className="font-sans text-slate-600 text-sm md:text-base leading-relaxed space-y-4 mt-4">
                  <p>
                    Practicing dentistry with meticulous precision and passion since <strong>1997</strong>,{" "}
                    <strong className="text-primary font-semibold">Dr. Milin D. Desai</strong> is widely recognized as one of Mumbai&apos;s foremost dental implant and smile makeover specialists. As the founder of{" "}
                    <strong>Smiles 4 U Speciality Dental Implant Centre</strong> in Kandivali West, he has helped thousands of patients regain full chewing power, aesthetic confidence, and lifelong oral health.
                  </p>
                  <p>
                    Dr. Desai specializes in <strong>advanced computer-guided dental implants</strong>, sinus lifts, full-mouth oral rehabilitation, and painless cosmetic smile redesigns. He is committed to gentle, pain-free dentistry, employing state-of-the-art diagnostic technology including 3D intraoral optical scanners and soft-tissue dental lasers.
                  </p>
                  <p>
                    Throughout his 28+ year journey, Dr. Desai has continuously updated his clinical skill set by participating in world-class fellowship programs across France, South Korea, and India, earning prestigious national and international accolades.
                  </p>
                </div>

                {/* Quick Trust Highlights Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 rounded-2xl bg-lavender-bg border border-slate-200/70 text-center">
                    <Calendar className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <span className="block font-display font-extrabold text-2xl text-primary">1997</span>
                    <span className="text-xs text-slate-500 font-sans">Established Practice</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-lavender-bg border border-slate-200/70 text-center">
                    <Award className="h-6 w-6 text-accent-gold mx-auto mb-2" />
                    <span className="block font-display font-extrabold text-2xl text-primary">28+</span>
                    <span className="text-xs text-slate-500 font-sans">Years Experience</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-lavender-bg border border-slate-200/70 text-center col-span-2 sm:col-span-1">
                    <Users className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                    <span className="block font-display font-extrabold text-2xl text-primary">1,100+</span>
                    <span className="text-xs text-slate-500 font-sans">Smiles Transformed</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <a
                    href="https://wa.me/917303635131?text=Hi%20Dr.%20Milin%2C%20I%20would%20like%20to%20consult%20regarding%20dental%20implants%20or%20treatments."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="md" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 shadow-lg shadow-emerald-600/20">
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat with Dr. Milin</span>
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="gold" size="md" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Book Consultation</span>
                    </Button>
                  </Link>
                  <a href="tel:+919152766951">
                    <Button variant="outline" size="md" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-secondary" />
                      <span>Call Clinic</span>
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Education, Awards & Achievements */}
      <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Education & Qualifications */}
            <ScrollReveal delay={0.1}>
              <Card className="h-full p-6 md:p-8 bg-white border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-2xl">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-display font-bold uppercase text-slate-400">Credentials</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-primary">
                      Education & Training
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-display font-bold text-primary text-sm block">
                        Bachelor of Dental Surgery (BDS) — Nair Hospital Dental College (1997)
                      </span>
                      <span className="text-xs font-sans text-slate-500">
                        Graduated from Mumbai&apos;s premier dental institution, establishing a gold-standard foundation in clinical oral surgery, restorative dentistry, and diagnostics.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-display font-bold text-primary text-sm block">
                        Comprehensive Oral Implantology & Prosthetics (IFUIBE France)
                      </span>
                      <span className="text-xs font-sans text-slate-500">
                        International Federation of University Implant & Biomaterials Educators, France. Advanced didactic & clinical surgical training.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-display font-bold text-primary text-sm block">
                        OSSTEM AIC Advanced Sinus Training Course
                      </span>
                      <span className="text-xs font-sans text-slate-500">
                        Specialized clinical surgical training for maxillary sinus floor elevation & bone grafting.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-display font-bold text-primary text-sm block">
                        Aesthetic & Cosmetic Dentistry (IAACD)
                      </span>
                      <span className="text-xs font-sans text-slate-500">
                        Indian Academy of Aesthetic & Cosmetic Dentistry certification in porcelain veneers, smile makeovers, and diastema closure.
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Awards & Major Recognitions */}
            <ScrollReveal delay={0.2}>
              <Card className="h-full p-6 md:p-8 bg-white border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent-gold/15 text-accent-gold rounded-2xl">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-display font-bold uppercase text-slate-400">Recognitions</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-primary">
                      Awards & Achievements
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-accent-gold/5 border border-accent-gold/20 flex items-start gap-3.5">
                    <div className="p-2 bg-accent-gold/20 text-accent-gold rounded-xl flex-shrink-0">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display font-bold text-primary text-base">
                          Implantologist of the Year 2022
                        </h4>
                        <span className="text-xs font-bold text-accent-gold uppercase">Winner</span>
                      </div>
                      <p className="text-xs text-slate-600 font-sans mt-1">
                        Conferred at the <strong>2nd Global Outreach Dental Conference & Awards 2022</strong> (GODCA) in recognition of pioneering excellence in oral implantology.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-secondary/5 border border-secondary/15 flex items-start gap-3.5">
                    <div className="p-2 bg-secondary/20 text-secondary rounded-xl flex-shrink-0">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display font-bold text-primary text-base">
                          Doctor-To-Doctor World&apos;s Top 100
                        </h4>
                        <span className="text-xs font-bold text-secondary uppercase">2021</span>
                      </div>
                      <p className="text-xs text-slate-600 font-sans mt-1">
                        Awarded by the <strong>Global Summit Institute</strong> for leadership, excellence, and entrepreneurship in healthcare.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                    <div className="p-2 bg-slate-200 text-slate-700 rounded-xl flex-shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-primary text-base">
                        Nomination: India&apos;s Top 100 Doctors in Dentistry
                      </h4>
                      <p className="text-xs text-slate-600 font-sans mt-1">
                        Conferred by the <strong>Global Outreach Medical & Health Association (GOMHA)</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 4. Professional Memberships Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal delay={0.1}>
              <span className="text-xs font-display font-bold uppercase tracking-wider text-secondary">
                Accreditations & Affiliations
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2">
                Professional Memberships
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="font-sans text-slate-600 text-sm md:text-base mt-3">
                Dr. Milin D. Desai is an active member of leading dental societies, surgical councils, and professional guilds.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberships.map((mem, idx) => (
              <ScrollReveal key={mem.id} delay={idx * 0.07} yOffset={20}>
                <Card className="h-full p-6 bg-white border border-slate-200/80 hover:border-secondary/40 hover:shadow-md transition-smooth flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-display font-bold text-secondary uppercase tracking-wider">
                        0{mem.id}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600">
                        {mem.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-primary text-base md:text-lg">
                      {mem.name}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed">
                      {mem.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-secondary font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Verified Member</span>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Certificates & Accreditations Showcase */}
      <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-200/60" id="certificates">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal delay={0.1}>
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-display font-semibold tracking-wider uppercase mb-3">
                Verified Credentials
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Certificates, Diplomas & Award Citations
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="font-sans text-slate-600 text-sm md:text-base mt-3">
                Browse through Dr. Milin D. Desai&apos;s verified surgical accreditations, international implantology diplomas, and national award citations. Click on any certificate to view in high resolution.
              </p>
            </ScrollReveal>
          </div>

          {/* Certificate Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
              <ScrollReveal key={cert.id} delay={idx * 0.05} yOffset={25}>
                <Card
                  className="p-0 overflow-hidden bg-white border border-slate-200/80 hover:shadow-xl hover:border-secondary/40 transition-smooth group cursor-pointer flex flex-col h-full"
                  onClick={() => setSelectedCerti(cert)}
                >
                  {/* Image container */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-sans text-xs font-semibold">
                      <ZoomIn className="h-5 w-5" />
                      <span>Click to Enlarge</span>
                    </div>
                    {cert.year && (
                      <span className="absolute top-2.5 right-2.5 bg-primary/80 backdrop-blur-md text-white px-2 py-0.5 rounded-md text-[10px] font-bold">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  {/* Text details */}
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h4 className="font-display font-bold text-primary text-sm leading-snug line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="font-sans text-xs text-secondary font-medium mt-1 line-clamp-2">
                        {cert.subtitle}
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-sans mt-3 block pt-2 border-t border-slate-100">
                      {cert.issuer}
                    </span>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Certificate Lightbox Modal */}
      {selectedCerti && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-smooth"
          onClick={() => setSelectedCerti(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div>
                <h3 className="font-display font-bold text-primary text-base md:text-lg">
                  {selectedCerti.title}
                </h3>
                <span className="text-xs text-slate-500 font-sans">
                  {selectedCerti.issuer} {selectedCerti.year ? `(${selectedCerti.year})` : ""}
                </span>
              </div>
              <button
                onClick={() => setSelectedCerti(null)}
                className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-primary transition-smooth cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image container */}
            <div className="relative flex-grow overflow-auto p-4 flex items-center justify-center bg-slate-900">
              <img
                src={selectedCerti.imageUrl}
                alt={selectedCerti.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>{selectedCerti.subtitle}</span>
              <button
                onClick={() => setSelectedCerti(null)}
                className="text-secondary font-semibold hover:underline cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. Bottom CTA Consultation Section */}
      <section className="py-16 md:py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-accent-gold blur-3xl" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal yOffset={15}>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-accent-gold rounded-full text-xs font-display font-bold tracking-wider uppercase mb-4">
              Personalized Dental Consultation
            </span>
          </ScrollReveal>

          <ScrollReveal yOffset={15} delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white max-w-2xl mx-auto leading-tight">
              Ready to Restore Your Smile with Dr. Milin D. Desai?
            </h2>
          </ScrollReveal>

          <ScrollReveal yOffset={15} delay={0.2}>
            <p className="font-sans text-slate-300 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Book your comprehensive diagnostic exam, digital 3D scan, and personalized treatment roadmap today at Smiles 4 U Speciality Dental Centre in Kandivali West, Mumbai.
            </p>
          </ScrollReveal>

          <ScrollReveal yOffset={15} delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button variant="gold" size="lg" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </Button>
              </Link>
              <a
                href="https://wa.me/917303635131?text=Hi%20Dr.%20Milin%2C%20I%20would%20like%20to%20consult%20regarding%20dental%20implants%20or%20treatments."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 shadow-lg shadow-emerald-600/30">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp: +91 73036 35131</span>
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default DrMilinClient;
