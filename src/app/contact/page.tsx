import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <div className="flex flex-col gap-0">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-tr from-lavender-bg via-white to-lavender-bg pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal yOffset={15}>
            <span className="inline-block px-4 py-1.5 bg-secondary/5 border border-secondary/15 rounded-full text-xs font-display font-semibold tracking-wider text-secondary uppercase mb-4">
              Get In Touch
            </span>
          </ScrollReveal>
          <ScrollReveal yOffset={15} delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary tracking-tight">
              Contact Us & Book Appointment
            </h1>
          </ScrollReveal>
          <ScrollReveal yOffset={15} delay={0.2}>
            <p className="font-sans text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-4">
              Have a dental concern? Fill out our quick appointment request form below, or reach out to us directly via phone or email.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Form & Contacts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form (7/12 width) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-primary mb-6">
                    Book Appointment Request
                  </h2>
                  <AppointmentForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Cards (5/12 width) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ScrollReveal delay={0.2} yOffset={25}>
                
                {/* Contact Card */}
                <Card className="flex flex-col gap-5" hoverable={false}>
                  <h3 className="font-display text-lg font-bold text-primary border-b border-slate-100 pb-3">
                    Clinic Coordinates
                  </h3>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col font-sans text-sm text-slate-600 gap-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-primary">Branch 1 Address</span>
                          <a
                            href="https://maps.app.goo.gl/EAJsD2GokwL8RrsR8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition-smooth mt-1 leading-relaxed"
                          >
                            Shop - 1, Rashmi Tara CHS., Opposite Dutt Mandir, Dahanukarwadi, Kandivali (West), Mumbai - 67.
                          </a>
                        </div>
                        <div className="flex flex-col border-t border-slate-100 pt-3">
                          <span className="font-bold text-primary">Branch 2 Address</span>
                          <a
                            href="https://maps.app.goo.gl/EAJsD2GokwL8RrsR8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-secondary transition-smooth mt-1 leading-relaxed"
                          >
                            Shop No.1, Neelayalam Near Dutt Mandir, Dahanukarwadi, Kandivali (West), Mumbai - 67.
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col font-sans text-sm text-slate-600">
                        <span className="font-bold text-primary">Phone Numbers</span>
                        <a href="tel:+919152766951" className="hover:text-secondary transition-smooth">
                          +91 91527 66951
                        </a>
                        <a href="tel:+917303635131" className="hover:text-secondary transition-smooth mt-0.5">
                          +91 73036 35131
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col font-sans text-sm text-slate-600 break-all">
                        <span className="font-bold text-primary">Email Address</span>
                        <a href="mailto:smiles4uimplants@gmail.com" className="hover:text-secondary transition-smooth">
                          smiles4uimplants@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3} yOffset={25}>
                {/* Hours Card */}
                <Card className="flex flex-col gap-4" hoverable={false}>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col font-sans text-sm text-slate-600">
                      <span className="font-bold text-primary mb-2">Clinic Timings</span>
                      <div className="grid grid-cols-2 gap-y-1 gap-x-4">
                        <span className="font-semibold text-slate-700">Mon - Sat:</span>
                        <span>10:00 AM - 1:30 PM</span>
                        <span className="font-semibold text-slate-700">Evening:</span>
                        <span>5:00 PM - 9:00 PM</span>
                        <span className="font-bold text-rose-600">Sunday:</span>
                        <span className="font-bold text-rose-600">Closed</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              {/* Insurance */}
              <ScrollReveal delay={0.4} yOffset={25}>
                <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-3xl flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-emerald-600 flex-shrink-0" />
                  <div className="flex flex-col font-sans text-xs md:text-sm text-emerald-800">
                    <strong className="text-emerald-950 font-bold uppercase tracking-wider">MediBuddy & Toothlens Partner</strong>
                    <span className="mt-0.5">Authorized clinic for MediBuddy and Toothlens claims.</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Google Maps Embed (Rearranged to match container width) */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.1}>
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm border border-slate-200/60">
              <iframe
                src="https://maps.google.com/maps?q=Smiles%204%20U%20Dental%20Clinic%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067&t=m&z=18&output=embed&iwloc=near"
                title="Smiles 4 U Dental Clinic Map Location"
                aria-label="Smiles 4 Dental Kandivali West branches location map"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
