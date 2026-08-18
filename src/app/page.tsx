import React from "react";
import Link from "next/link";
import { Phone, Calendar, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AMCPlanSection from "@/components/sections/AMCPlanSection";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import { DoctorsGrid } from "@/components/sections/DoctorsGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getTreatments } from "@/app/actions/treatments";

export const dynamic = "force-dynamic";

export default async function Home() {
  const treatments = await getTreatments();
  return (
    <div className="flex flex-col gap-0">
      {/* 1. Hero Block */}
      <Hero />

      {/* 2. Stats Bar */}
      <StatsBar />

      {/* 3. Welcome / Core Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <ScrollReveal delay={0.1} xOffset={-30}>
              <div className="flex flex-col gap-6">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-secondary">
                  Welcome to Smiles 4 U
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight">
                  True Healthcare For Your Family's Smile
                </h2>
                <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
                  Founded in 1997, Smiles 4 U Speciality Dental Implant Centre is dedicated to offering state-of-the-art treatments with a gentle touch. Under chief dentist <strong className="font-bold">Dr. Millin D. Desai</strong>, we specialize in high-success dental implants, painless single-sitting root canals, aesthetic smile makeovers, and family preventative dentistry.
                </p>
                <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
                  Our clinic combines clinical expertise with advanced equipment, including digital intraoral scanners and soft-tissue lasers, ensuring quick recovery, high precision, and maximum patient comfort.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Link href="/about">
                    <Button variant="secondary" className="flex items-center gap-2">
                      <span>Meet Our Dentists</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual block showing key assurances */}
            <ScrollReveal delay={0.2} xOffset={30}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col gap-3">
                  <div className="p-3 bg-secondary/5 text-secondary border border-secondary/10 rounded-2xl w-fit">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-primary text-base">Sterilization Assured</h3>
                  <p className="font-sans text-xs text-slate-400 leading-normal">
                    Class-B autoclaves and sterile instruments for complete safety.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col gap-3">
                  <div className="p-3 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl w-fit">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-primary text-base">Convenient Booking</h3>
                  <p className="font-sans text-xs text-slate-400 leading-normal">
                    Schedule online and receive text verification details.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col gap-3">
                  <div className="p-3 bg-rose-50 text-rose-600 border border-rose-100 rounded-2xl w-fit">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-primary text-base">Geriatric Care</h3>
                  <p className="font-sans text-xs text-slate-400 leading-normal">
                    Compassionate denturing and dental restorations for seniors.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3.5 Why Choose Us Section */}
      <WhyChooseUs />

      {/* 4. Core Dental Treatments Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Core Dental Treatments"
            subtitle="Explore our core dental treatments, utilizing metal-free restorations and advanced rotaries."
            badge="Clinical Treatments"
          />
           {/* Show top 6 services on homepage */}
          <ServicesGrid initialServices={treatments} limit={6} />
          <div className="flex justify-center mt-4">
            <Link href="/treatments">
              <Button variant="outline" className="flex items-center gap-2">
                <span>View All Treatments</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4.5 Meet the Team Section */}
      <DoctorsGrid />

      {/* 5. Smile Suraksha AMC Plan */}
      <AMCPlanSection />

      {/* 6. Patient Google Reviews Testimonials */}
      <section className="pt-12 pb-6 md:pt-20 md:pb-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Patients Say"
            subtitle="Smiles 4 U is rated 5 stars on Google. Read reviews from our actual patients."
            badge="Reviews & Testimonials"
          />
          <ReviewsCarousel />
        </div>
      </section>

      {/* 7. Bottom Appointment CTA */}
      <section className="pt-6 pb-12 md:pt-10 md:pb-20 bg-gradient-to-tr from-lavender-bg via-white to-lavender-bg border-t border-slate-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <ScrollReveal yOffset={20}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Ready to Get Your Smile Back?
            </h2>
          </ScrollReveal>
          <ScrollReveal yOffset={20} delay={0.1}>
            <p className="font-sans text-slate-500 text-sm md:text-base max-w-xl leading-relaxed">
              Schedule your consultation with <strong className="font-bold">Dr. Millin D. Desai</strong> today. We offer flexible slots, contactless diagnostics, and a painless treatment experience.
            </p>
          </ScrollReveal>
          <ScrollReveal yOffset={20} delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link href="/contact">
                <Button variant="gold" size="lg" className="flex items-center gap-2 font-semibold">
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment Now</span>
                </Button>
              </Link>
              <a
                href="tel:+919152766951"
                className="flex items-center gap-2 text-primary hover:text-secondary font-sans text-base font-bold transition-smooth"
              >
                <Phone className="h-5 w-5 text-accent-gold" />
                <span>Call Clinic: +91 91527 66951</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
