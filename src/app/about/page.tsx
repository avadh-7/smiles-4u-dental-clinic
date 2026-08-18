import React from "react";
import { Award, ShieldCheck, Heart, Sparkles, Building } from "lucide-react";
import DoctorsGrid from "@/components/sections/DoctorsGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";

export default function About() {
  return (
    <div className="flex flex-col gap-0">
      
      {/* 1. Header Banner */}
      <section 
        className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200/40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about_us_bg.webp')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto p-8 md:p-10 bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl shadow-sm text-center relative z-10">
            <ScrollReveal yOffset={15}>
              <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-display font-semibold tracking-wider text-secondary uppercase mb-4">
                Meet Dr. Millin D. Desai
              </span>
            </ScrollReveal>
            <ScrollReveal yOffset={15} delay={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary tracking-tight">
                About Our Clinic & Specialists
              </h1>
            </ScrollReveal>
            <ScrollReveal yOffset={15} delay={0.2}>
              <p className="font-sans text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-4">
                Learn about our legacy of clinical excellence since 1997, our Class-B sterilization safety standards, and our professional consultants.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Clinic Legacy & Philosophy */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <ScrollReveal delay={0.1} xOffset={-25}>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">
                  Crafting Bright Smiles in Kandivali Since 1997
                </h2>
                <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                  Smiles 4 U Speciality Dental Implant Centre was established in 1997 with a simple vision: to offer international-standard dental care that is gentle, reliable, and completely personalized. Under the leadership of chief dentist <strong className="font-bold">Dr. Millin D. Desai</strong>, we have grown into one of Mumbai's most trusted clinics.
                </p>
                <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                  We believe that dental visits should be stress-free. That is why we invest heavily in digital scanning workflows and painless rotary procedures. We focus not just on treating immediate problems, but on establishing long-term preventative care to safeguard your teeth for a lifetime.
                </p>
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="font-sans text-xs md:text-sm text-emerald-800 font-semibold">
                    Authorized clinic for MediBuddy, Toothlens, etc., enabling convenient claim processes.
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Graphic/Highlights */}
            <ScrollReveal delay={0.2} xOffset={25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="flex flex-col gap-4">
                  <div className="p-3 bg-secondary/5 text-secondary border border-secondary/10 rounded-2xl w-fit">
                    <Building className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-primary text-base">Modern Infrastructure</h3>
                  <p className="font-sans text-xs text-slate-400 leading-normal">
                    Advanced clinical setup equipped with 3D digital scanners and dental lasers.
                  </p>
                </Card>

                <Card className="flex flex-col gap-4">
                  <div className="p-3 bg-accent-gold/10 text-accent-gold border border-accent-gold/25 rounded-2xl w-fit">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-primary text-base">Expert Consultants</h3>
                  <p className="font-sans text-xs text-slate-400 leading-normal">
                    Certified in microscopic root canal surgery and advanced titanium implants.
                  </p>
                </Card>

                <Card className="flex flex-col gap-4">
                  <div className="p-3 bg-rose-50 text-rose-600 border border-rose-100 rounded-2xl w-fit">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-primary text-base">Compassionate Care</h3>
                  <p className="font-sans text-xs text-slate-400 leading-normal">
                    Tailored, gentle treatments for pediatric, adult, and geriatric patients.
                  </p>
                </Card>

                <Card className="flex flex-col gap-4">
                  <div className="p-3 bg-secondary/5 text-secondary border border-secondary/10 rounded-2xl w-fit">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-primary text-base">Esthetic Enhancements</h3>
                  <p className="font-sans text-xs text-slate-400 leading-normal">
                    Porcelain veneers and cosmetic crowns looking and feeling entirely natural.
                  </p>
                </Card>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. Dentist Specialists Grid */}
      <DoctorsGrid />

    </div>
  );
}
