"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

// Premium Logo using the official logo image (contains circle tooth star and text branding)
export const ClinicLogo: React.FC<{ className?: string }> = ({ className = "h-11" }) => (
  <img
    src="/logo.jpg"
    alt="Smiles 4 Dental Clinic"
    className={cn("object-contain w-auto max-w-[200px] sm:max-w-[260px] md:max-w-[340px]", className)}
  />
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-smooth ${
          scrolled || pathname !== "/" ? "glass-nav shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <ClinicLogo className="h-14 sm:h-18 md:h-22" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-sans text-sm font-medium tracking-wide transition-smooth px-3.5 py-1.5 rounded-full ${
                      isActive
                        ? "bg-secondary/10 text-secondary font-bold shadow-sm"
                        : "text-primary/80 hover:text-secondary hover:bg-secondary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Side CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919152766951"
                className="flex items-center gap-2 text-primary font-sans text-sm font-semibold hover:text-secondary transition-smooth border-r border-slate-200 pr-4 mr-1"
              >
                <Phone className="h-4 w-4 text-accent-gold" />
                <span>+91 91527 66951</span>
              </a>
              <Link href="/contact">
                <Button variant="primary" size="sm" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="tel:+919152766951"
                className="p-2 bg-secondary/5 rounded-full text-secondary hover:bg-secondary/10"
                aria-label="Call Clinic"
              >
                <Phone className="h-4.5 w-4.5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-primary hover:text-secondary focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Mobile Navigation Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <ClinicLogo className="h-10" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-primary"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile links list */}
              <div className="flex flex-col gap-3.5 flex-grow">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-sans font-medium px-4 py-2.5 rounded-2xl tracking-wide transition-smooth ${
                        isActive
                          ? "bg-secondary/10 text-secondary font-bold"
                          : "text-primary/80 hover:text-secondary hover:bg-secondary/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Quick Contacts Footer */}
              <div className="flex flex-col gap-4 mt-auto">
                <a
                  href="tel:+919152766951"
                  className="flex items-center justify-center gap-3 bg-secondary/5 text-secondary p-3 rounded-full text-base font-semibold transition-smooth hover:bg-secondary/10"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call: +91 91527 66951</span>
                </a>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" size="md" className="w-full flex items-center justify-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Appointment</span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Header;
