"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck, Heart } from "lucide-react";
import Button from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";

export const Hero: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Load 3MB background video after the initial page mount
    // This prioritizes Largest Contentful Paint (LCP) and visual interactivity
    const timer = setTimeout(() => {
      setVideoSrc("/hero_bg_vid.mp4");
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-x-hidden min-h-screen flex flex-col justify-center pt-28 pb-20 md:pt-36 md:pb-28 bg-slate-50">
      {/* Background Video with smooth fade-in */}
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: isLoaded ? 1 : 0 }}
          onPlay={() => setIsLoaded(true)}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Background overlay for text readability: subtle gradient that keeps the background smile artwork fully visible and sharp */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/40 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/5 border border-secondary/15 rounded-full text-xs md:text-sm font-semibold text-secondary tracking-wide uppercase mx-auto lg:mx-0 w-fit">
                <Sparkles className="h-4 w-4 text-accent-gold" />
                <span>Premium Orthodontics & Implants Centre</span>
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary leading-tight">
                We are here to Take care of <br />
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Your Smile
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-sans text-base sm:text-lg text-slate-800 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience high-end dental treatment in Mumbai. Led by chief dentist <strong className="font-bold text-primary">Dr. Millin D. Desai</strong>, we combine clinical expertise since 1997 with advanced dental scanner and laser tech for painless, natural smile transformations.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto font-semibold">
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/treatments" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
                    Explore Treatments
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Trust points */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 pt-8 border-t border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-700" />
                  <span>MediBuddy & Toothlens Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent-gold" />
                  <span>25+ Years Clinical Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-600" />
                  <span>1100+ Happy Patients Cured</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Overlapping Images Panel */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <ScrollReveal delay={0.3} yOffset={40} className="w-full max-w-md lg:max-w-lg">
              <div className="relative w-full aspect-[4/3.8] max-w-[460px] mx-auto">
                
                {/* Left/Back Image */}
                <div className="absolute top-[2%] left-[2%] w-[68%] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border-4 border-white transform -rotate-4 hover:rotate-0 transition-smooth duration-500">
                  <img
                    src="/hero_i.webp"
                    alt="Smiles 4 U Speciality Dental Centre Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right/Front Image */}
                <div className="absolute bottom-[2%] right-[2%] w-[68%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-4 hover:rotate-0 transition-smooth duration-500 z-10">
                  <img
                    src="/hero_ii.webp"
                    alt="Premium Dental Implants Treatment"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Interactive Badge Cards (Kept as requested) */}
                <div 
                  className="absolute -top-3 -left-6 bg-white/90 backdrop-blur border border-slate-100 shadow-lg rounded-2xl p-3 flex items-center gap-2.5 max-w-[150px] animate-bounce z-20" 
                  style={{ animationDuration: "3s" }}
                >
                  <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-primary leading-none">100% Safe</span>
                    <span className="text-[9px] text-slate-400 font-sans mt-0.5">Sterilized Clinic</span>
                  </div>
                </div>

                <div 
                  className="absolute -bottom-3 -right-6 bg-white/90 backdrop-blur border border-slate-100 shadow-lg rounded-2xl p-3 flex items-center gap-2.5 max-w-[155px] animate-bounce z-20" 
                  style={{ animationDuration: "4s" }}
                >
                  <div className="p-1.5 bg-amber-50 rounded-lg text-amber-600">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-xs text-primary leading-none">Dr. Millin D. Desai</span>
                    <span className="text-[9px] text-slate-400 font-sans mt-0.5">Beautifying Since &apos;97</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
