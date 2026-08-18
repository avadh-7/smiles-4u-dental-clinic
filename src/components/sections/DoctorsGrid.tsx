"use client";

import React from "react";
import { doctors } from "@/data/doctors";
import Card from "../ui/Card";
import { ScrollReveal } from "../ui/ScrollReveal";

export const DoctorsGrid: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-200/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading centered */}
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <ScrollReveal delay={0.1}>
            <span className="text-xs font-display font-bold uppercase tracking-wider text-secondary">
              Clinic Doctors
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight">
              Meet Our Specialist Team
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-sans text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-1">
              Our certified orthodontists, endodontists, and general dentists are dedicated to your comfort.
            </p>
          </ScrollReveal>
        </div>

        {/* 5-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {doctors.map((doc, idx) => (
            <ScrollReveal key={doc.id} delay={idx * 0.08} yOffset={25}>
              <Card className="h-full flex flex-col p-0 overflow-hidden bg-white border border-slate-100 hover:shadow-lg transition-smooth duration-300 group">
                {/* Photo container with aspect-ratio */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-50">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Text Details at bottom */}
                <div className="p-5 flex flex-col gap-1.5 flex-grow justify-end">
                  <h3 className="font-display font-bold text-primary text-base leading-tight uppercase tracking-tight">
                    {doc.name}
                  </h3>
                  <span className="text-[10px] font-sans font-bold tracking-wider text-slate-500 uppercase leading-none">
                    {doc.role}
                  </span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
export default DoctorsGrid;
