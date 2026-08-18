import React from "react";
import { Award, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

interface StatItem {
  number: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export const StatsBar: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const activeYears = currentYear - 1997; // 1997 to 2026 is 29 years

  const stats: StatItem[] = [
    {
      number: `${activeYears}+`,
      label: "Years of Service",
      description: "Crafting bright smiles in Kandivali West since 1997.",
      icon: <Award className="h-6 w-6 text-accent-gold" />
    },
    {
      number: "1100+",
      label: "Patients Cured",
      description: "Trusted family dentistry and full mouth rehabilitation.",
      icon: <Heart className="h-6 w-6 text-rose-500" />
    },
    {
      number: "100%",
      label: "Digital Clinic",
      description: "Advanced 3D intraoral scanners & dental soft lasers.",
      icon: <Sparkles className="h-6 w-6 text-accent-peach" />
    },
    {
      number: "Authorized",
      label: "MediBuddy & Toothlens",
      description: "Authorized clinic for MediBuddy and Toothlens claims.",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />
    }
  ];

  return (
    <section className="py-12 bg-primary border-y border-secondary/20 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} yOffset={15}>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                
                {/* Icon wrapper */}
                <div className="p-3 bg-white/10 rounded-2xl border border-white/10">
                  {stat.icon}
                </div>

                <div className="flex flex-col">
                  <span className="font-display text-2xl lg:text-3xl font-extrabold text-white">
                    {stat.number}
                  </span>
                  <span className="font-display text-sm font-bold text-accent-gold uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                  <span className="font-sans text-xs text-slate-300 leading-normal mt-1">
                    {stat.description}
                  </span>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsBar;
