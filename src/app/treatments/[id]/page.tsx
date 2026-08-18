import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, Service } from "@/data/services";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { 
  Check, 
  ArrowLeft, 
  ChevronDown, 
  Sparkles, 
  Phone, 
  Mail, 
  Clock,
  HelpCircle,
  AlertCircle,
  Activity
} from "lucide-react";
import { getTreatments, getTreatmentById } from "@/app/actions/treatments";

// Generate static routes for all treatments at build time
export async function generateStaticParams() {
  try {
    const items = await getTreatments();
    if (items && items.length > 0) {
      return items.map((svc) => ({
        id: svc.id,
      }));
    }
  } catch (error) {
    console.warn("generateStaticParams: DB connection failed, using static fallback.");
  }
  return services.map((svc) => ({
    id: svc.id,
  }));
}

interface TreatmentPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export const dynamic = "force-dynamic";

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  let service: Service | null = (await getTreatmentById(id)) as Service | null;
  if (!service) {
    // Fallback to static data
    service = (services.find((s) => s.id === id) || null) as Service | null;
  }

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-lavender-bg min-h-screen">
      {/* 1. Header Banner */}
      <section 
        className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-cover bg-center overflow-hidden border-b border-slate-200/40"
        style={{ backgroundImage: "url('/services_bg.webp')" }}
      >
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto p-8 md:p-10 bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl shadow-sm text-center relative z-10">
            <ScrollReveal yOffset={15}>
              <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-display font-bold tracking-wider text-secondary uppercase mb-4">
                <Sparkles className="h-3.5 w-3.5 text-accent-gold" />
                <span>Treatment details</span>
              </span>
            </ScrollReveal>
            <ScrollReveal yOffset={15} delay={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary tracking-tight">
                {service.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal yOffset={15} delay={0.2}>
              <p className="font-sans text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-4">
                {service.shortDesc}
              </p>
            </ScrollReveal>
            <ScrollReveal yOffset={15} delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <a href="#book-now">
                  <Button variant="secondary" size="md">
                    Book Consultation
                  </Button>
                </a>
                <Link href="/treatments">
                  <Button variant="outline" size="md" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>All Treatments</span>
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Breadcrumbs & Main Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-sans text-slate-400 mb-8">
            <Link href="/" className="hover:text-secondary transition-smooth">Home</Link>
            <span>/</span>
            <Link href="/treatments" className="hover:text-secondary transition-smooth">Treatments</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content Area (col-span-8) */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              
              {/* Treatment Image */}
              <ScrollReveal yOffset={20}>
                <div className="w-full h-[260px] sm:h-[340px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm border border-slate-200/50 bg-white">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
                  />
                </div>
              </ScrollReveal>

              {/* Clinical Description */}
              <ScrollReveal yOffset={20}>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary flex items-center gap-2.5">
                    <Activity className="h-6 w-6 text-secondary" />
                    <span>Clinical Overview</span>
                  </h2>
                  <p className="font-sans text-slate-600 text-base leading-relaxed">
                    {service.fullDescription}
                  </p>
                  <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed mt-2">
                    {service.longDesc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Treatment Process Flowchart */}
              <ScrollReveal yOffset={25}>
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">
                    Step-by-Step Procedure
                  </h2>
                  <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                    Here is what you can expect during your treatment journey at Smiles 4 U:
                  </p>

                  <div className="relative border-l-2 border-secondary/20 ml-4 pl-6 md:pl-8 flex flex-col gap-8 mt-4">
                    {service.process.map((step, sidx) => (
                      <div key={sidx} className="relative">
                        {/* Step Bubble Indicator */}
                        <div className="absolute -left-[38px] md:-left-[46px] top-0 h-7 w-7 md:h-8 md:w-8 rounded-full bg-secondary border-4 border-white flex items-center justify-center shadow-sm z-10">
                          <span className="text-white text-xs md:text-sm font-display font-bold">
                            {sidx + 1}
                          </span>
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                          <h3 className="font-display font-bold text-base md:text-lg text-primary">
                            {step.title}
                          </h3>
                          <p className="font-sans text-slate-500 text-xs md:text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* FAQ Accordion using HTML5 details tags (pure CSS/interactive) */}
              <ScrollReveal yOffset={25}>
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary flex items-center gap-2">
                    <HelpCircle className="h-6 w-6 text-secondary" />
                    <span>Frequently Asked Questions</span>
                  </h2>
                  
                  <div className="flex flex-col gap-4 mt-2">
                    {service.faqs.map((faq, fidx) => (
                      <details 
                        key={fidx} 
                        className="group border border-slate-200/80 rounded-2xl p-4 bg-white/40 backdrop-blur-sm shadow-sm hover:border-secondary/20 transition-smooth"
                      >
                        <summary className="flex items-center justify-between font-display font-semibold text-primary cursor-pointer list-none focus:outline-none">
                          <span className="pr-4 text-sm md:text-base">{faq.question}</span>
                          <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
                        </summary>
                        <p className="font-sans text-xs md:text-sm text-slate-600 mt-3 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right Sidebar Columns (col-span-4) */}
            <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28">
              
              {/* Who is it for checklist */}
              <Card className="p-6 md:p-8 flex flex-col gap-4 border border-slate-200/50 shadow-sm bg-white/60">
                <h3 className="font-display font-bold text-lg text-primary flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-accent-gold" />
                  <span>Is This For You?</span>
                </h3>
                <ul className="flex flex-col gap-3 font-sans text-xs md:text-sm text-slate-600">
                  {service.whoIsItFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-accent-gold flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Benefits Checklist */}
              <Card className="p-6 md:p-8 flex flex-col gap-4 border border-slate-200/50 shadow-sm bg-white/60">
                <h3 className="font-display font-bold text-lg text-primary flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span>Treatment Benefits</span>
                </h3>
                <ul className="flex flex-col gap-3 font-sans text-xs md:text-sm text-slate-600">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="p-0.5 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Quick Contacts Info */}
              <Card className="p-6 md:p-8 bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl flex flex-col gap-5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
                
                <h3 className="font-display font-bold text-lg text-accent-gold uppercase tracking-wider">
                  Contact Clinic
                </h3>
                <div className="flex flex-col gap-4 font-sans text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent-gold flex-shrink-0" />
                    <a href="tel:+919152766951" className="hover:text-accent-gold transition-smooth">
                      +91 91527 66951
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent-gold flex-shrink-0" />
                    <a href="mailto:smiles4uimplants@gmail.com" className="hover:text-accent-gold transition-smooth break-all">
                      smiles4uimplants@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-bold text-white text-xs">Mon - Sat</span>
                      <span className="text-xs">10:00 AM - 01:30 PM</span>
                      <span className="text-xs">05:30 PM - 09:00 PM</span>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="w-full mt-2">
                  <Button variant="gold" size="sm" className="w-full font-bold">
                    View Branches Map
                  </Button>
                </Link>
              </Card>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Inline Booking Form */}
      <section id="book-now" className="py-12 md:py-20 bg-slate-50 border-t border-slate-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center gap-4 mb-10">
            <span className="text-xs font-display font-bold uppercase tracking-wider text-secondary">
              Easy Appointment Booking
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight">
              Request Your Consultation
            </h2>
            <p className="font-sans text-slate-500 text-sm md:text-base max-w-xl leading-relaxed">
              Book a slot for **{service.title}** today. Our clinic coordinators will contact you shortly to confirm your booking time.
            </p>
          </div>
          
          <ScrollReveal yOffset={25}>
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200/60 shadow-sm">
              <AppointmentForm defaultTreatment={service.id} />
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
