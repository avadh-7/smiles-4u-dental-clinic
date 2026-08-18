import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";

export const AMCPlanSection: React.FC = () => {
  const benefits = [
    "Comprehensive Dental Examinations (Twice a year)",
    "Routine Scalings & Teeth Cleanings included",
    "Digital Intraoral X-rays for deep cavity diagnostics",
    "Priority Scheduling for emergency toothaches",
    "Flat discounts on crowns, fillings & tooth replacements",
    "Entire family coverage options available"
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal yOffset={30}>
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative border border-secondary/20 overflow-hidden flex flex-col lg:flex-row items-center gap-10">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent pointer-events-none" />

            {/* Left Column: Heading and Taglines */}
            <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/25 rounded-full text-xs font-display font-semibold tracking-wider text-accent-gold uppercase mx-auto lg:mx-0 w-fit">
                <ShieldCheck className="h-4 w-4" />
                <span>Karlo Apni Smile Surakshit</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
                Smile Suraksha Plan <br />
                <span className="text-accent-gold font-sans font-medium text-lg md:text-xl block mt-2 text-slate-200">
                  Preventative Annual Maintenance Plan
                </span>
              </h2>

              <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed">
                Most major root canals and tooth extractions can be completely avoided with routine preventative cleanings. Our **Smile Suraksha Plan** is an affordable dental AMC package designed to keep your family&apos;s oral hygiene at its peak all year round.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-2">
                <Link href="/contact?inquiry=smile-suraksha" className="w-full sm:w-auto">
                  <Button variant="gold" size="md" className="w-full sm:w-auto font-semibold">
                    Book Suraksha Plan
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="md" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary font-semibold">
                    Inquire Details
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Benefits Checklist Cards */}
            <div className="lg:w-1/2 w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <h3 className="font-display text-lg font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent-gold" />
                <span>What&apos;s Included in the Plan?</span>
              </h3>
              
              <ul className="flex flex-col gap-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200">
                    <div className="p-1 bg-accent-gold/15 text-accent-gold rounded-full flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>
                    <span className="font-sans text-sm md:text-base leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
export default AMCPlanSection;
