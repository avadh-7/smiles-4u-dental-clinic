import React from "react";
import GalleryFilterable from "@/components/sections/GalleryFilterable";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getGalleryItems } from "@/app/actions/gallery";

export const dynamic = "force-dynamic";

export default async function Gallery() {
  const galleryItems = await getGalleryItems();

  return (
    <div className="flex flex-col gap-0">
      
      {/* 1. Header Banner */}
      <section 
        className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200/40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/gallery_bg.webp')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto p-8 md:p-10 bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl shadow-sm text-center relative z-10">
            <ScrollReveal yOffset={15}>
              <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-display font-semibold tracking-wider text-secondary uppercase mb-4">
                Visual Assurances
              </span>
            </ScrollReveal>
            <ScrollReveal yOffset={15} delay={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary tracking-tight">
                Clinical & Patient Photo Gallery
              </h1>
            </ScrollReveal>
            <ScrollReveal yOffset={15} delay={0.2}>
              <p className="font-sans text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-4">
                Browse through our clinical facilities, happy patients, before-and-after smile results, and clinical milestones. Filter photos by category.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Filterable Gallery grid */}
      <GalleryFilterable initialItems={galleryItems} />

    </div>
  );
}
