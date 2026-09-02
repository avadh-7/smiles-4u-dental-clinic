import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { ClinicLogo } from "./Header";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-secondary/15 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Column 1: Info & Tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl border border-slate-200 w-fit">
              <ClinicLogo className="h-14" />
            </Link>
            <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-sm mt-2">
              Premium dentistry clinic in Kandivali West, Mumbai. Crafting beautiful, healthy smiles since 1997 with state-of-the-art technology and gentle, expert dental care.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-4">
              <a
                href="https://www.facebook.com/smiles4udentistdrmilinkandivali/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 rounded-full text-slate-300 hover:text-white hover:bg-secondary transition-smooth border border-white/5"
                aria-label="Facebook Page"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.instagram.com/smiles4udrmilin/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 rounded-full text-slate-300 hover:text-white hover:bg-secondary transition-smooth border border-white/5"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/smiles-4-u-sdic/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 rounded-full text-slate-300 hover:text-white hover:bg-secondary transition-smooth border border-white/5"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.youtube.com/@smiles4udrmillindesai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 rounded-full text-slate-300 hover:text-white hover:bg-secondary transition-smooth border border-white/5"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-base font-bold tracking-wider text-accent-gold uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2.5 mt-2">
              <Link href="/" className="font-sans text-sm text-slate-300 hover:text-accent-gold transition-smooth">
                Home
              </Link>
              <Link href="/about" className="font-sans text-sm text-slate-300 hover:text-accent-gold transition-smooth">
                About Us
              </Link>
              <Link href="/treatments" className="font-sans text-sm text-slate-300 hover:text-accent-gold transition-smooth">
                Treatments
              </Link>
              <Link href="/blog" className="font-sans text-sm text-slate-300 hover:text-accent-gold transition-smooth">
                Dental Blogs
              </Link>
              <Link href="/gallery" className="font-sans text-sm text-slate-300 hover:text-accent-gold transition-smooth">
                Filterable Gallery
              </Link>
              <Link href="/contact" className="font-sans text-sm text-slate-300 hover:text-accent-gold transition-smooth">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-base font-bold tracking-wider text-accent-gold uppercase">
              Contact Info
            </h3>
            <div className="flex flex-col gap-3.5 mt-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col font-sans text-sm text-slate-300">
                    <span className="font-semibold text-white text-xs uppercase tracking-wider">Branch 1</span>
                    <a
                      href="https://maps.app.goo.gl/EAJsD2GokwL8RrsR8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-gold transition-smooth mt-0.5 leading-relaxed"
                    >
                      Shop - 1, Rashmi Tara CHS., Opposite Dutt Mandir, Dahanukarwadi, Kandivali (West), Mumbai - 67.
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-1">
                  <MapPin className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col font-sans text-sm text-slate-300">
                    <span className="font-semibold text-white text-xs uppercase tracking-wider">Branch 2</span>
                    <a
                      href="https://maps.app.goo.gl/EAJsD2GokwL8RrsR8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-gold transition-smooth mt-0.5 leading-relaxed"
                    >
                      Shop No.1, Neelayalam Near Dutt Mandir, Dahanukarwadi, Kandivali (West), Mumbai - 67.
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919152766951" className="font-sans text-sm text-slate-300 hover:text-accent-gold transition-smooth">
                    +91 91527 66951
                  </a>
                  <a href="tel:+917303635131" className="font-sans text-sm text-slate-300 hover:text-accent-gold transition-smooth">
                    +91 73036 35131
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:smiles4uimplants@gmail.com" className="font-sans text-sm text-slate-300 hover:text-accent-gold transition-smooth break-all">
                  smiles4uimplants@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Hours & Insurance */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-base font-bold tracking-wider text-accent-gold uppercase">
              Opening Hours
            </h3>
            <div className="flex flex-col gap-3.5 mt-2">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <div className="flex flex-col font-sans text-sm text-slate-300">
                  <span className="font-semibold text-white">Mon - Sat:</span>
                  <span>10:00 AM - 1:30 PM</span>
                  <span className="mt-1">5:00 PM - 9:00 PM</span>
                  <span className="mt-1.5 font-semibold text-rose-300">Sunday: Closed</span>
                </div>
              </div>
              
              {/* Authorized Insurance Label */}
              <div className="mt-3 p-3 bg-white/5 border border-white/10 rounded-2xl">
                <span className="block text-xs font-display font-bold text-accent-gold uppercase tracking-wider">
                  Partner Support
                </span>
                <span className="block text-xs font-sans text-slate-300 mt-1">
                  Authorized clinic for MediBuddy, Toothlens, etc.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="pt-8 mt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-xs text-slate-400">
            © {currentYear} Smiles 4 U Speciality Dental Implant Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-white transition-smooth">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
