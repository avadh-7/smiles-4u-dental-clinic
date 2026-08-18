"use client";

import React from "react";
import { Check, Sparkles, Clock, Calendar } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PART 1: Top Half */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12 md:mb-24">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <ScrollReveal delay={0.1}>
              <span className="text-xs font-display font-bold uppercase tracking-wider text-secondary">
                Why Choose Us
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                Experienced Team Of Doctors & Specialists
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-secondary/10 text-secondary rounded-full mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="font-sans text-base md:text-lg font-semibold text-slate-800">
                    Beautifying Smiles since 1997
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-secondary/10 text-secondary rounded-full mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="font-sans text-base md:text-lg font-semibold text-slate-800">
                    Authorised Clinic for MediBuddy, Toothlens, etc.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-secondary/10 text-secondary rounded-full mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="font-sans text-base md:text-lg font-semibold text-slate-800">
                    Technologically Advanced
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Doctor Award Image */}
          <div className="lg:col-span-6 flex justify-center">
            <ScrollReveal delay={0.2} yOffset={30} className="w-full max-w-lg">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 relative aspect-[4/3] w-full">
                <img
                  src="/doctor.webp"
                  alt="Dr. Millin D. Desai holding Outreach Dental Award 2022"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* PART 2: Bottom Half */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: 3 Custom Purple Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Card 1: Dental Hygiene */}
            <ScrollReveal delay={0.1} yOffset={25}>
              <div className="bg-[#8B5CF6] text-white p-8 rounded-3xl shadow-md flex flex-col items-center justify-between text-center min-h-[220px]">
                <div className="p-3.5 bg-white/10 rounded-2xl border border-white/15 mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow flex flex-col justify-end">
                  <h3 className="font-sans text-base font-medium text-white/95">
                    Dental Hygiene
                  </h3>
                  <p className="font-display font-extrabold text-lg mt-1 text-white uppercase tracking-tight">
                    Never Forget
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Visit Dentist (Darker Purple, pill-ish bottom) */}
            <ScrollReveal delay={0.2} yOffset={25}>
              <div className="bg-[#5A2C82] text-white p-8 rounded-t-3xl rounded-b-[4rem] shadow-lg flex flex-col items-center justify-between text-center min-h-[240px] transform sm:-translate-y-2 border border-secondary/20">
                <div className="p-3.5 bg-white/10 rounded-2xl border border-white/15 mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow flex flex-col justify-end">
                  <h3 className="font-sans text-base font-medium text-white/95">
                    Visit Your Dentist
                  </h3>
                  <p className="font-display font-extrabold text-lg mt-1 text-white uppercase tracking-tight">
                    In 6 Months
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Don't Rush When Brushing */}
            <ScrollReveal delay={0.3} yOffset={25}>
              <div className="bg-[#8B5CF6] text-white p-8 rounded-3xl shadow-md flex flex-col items-center justify-between text-center min-h-[220px]">
                <div className="p-3.5 bg-white/10 rounded-2xl border border-white/15 mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow flex flex-col justify-end">
                  <h3 className="font-sans text-base font-medium text-white/95">
                    Don&apos;t Rush When
                  </h3>
                  <p className="font-display font-extrabold text-lg mt-1 text-white uppercase tracking-tight">
                    You Brush!
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Relax Text */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-center lg:text-left justify-center">
            <ScrollReveal delay={0.1}>
              <span className="text-xl font-serif italic text-slate-500 font-semibold">
                Relax...
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight">
                Your Dentist Knows Best
              </h2>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
};
export default WhyChooseUs;
