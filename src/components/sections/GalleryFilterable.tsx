"use client";

import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import Card from "../ui/Card";
import { ScrollReveal } from "../ui/ScrollReveal";

interface GalleryFilterableProps {
  initialItems?: GalleryItem[];
}

export const GalleryFilterable: React.FC<GalleryFilterableProps> = ({ initialItems }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = [
    { key: "all", label: "All Photos" },
    { key: "our-clinic", label: "Our Clinic" },
    { key: "happy-patients", label: "Happy Patients" },
    { key: "after-treatment", label: "After Treatment" },
    { key: "award", label: "Awards & Milestones" },
  ];

  const items = initialItems || galleryItems;

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters list */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium tracking-wide transition-smooth cursor-pointer ${
                activeFilter === cat.key
                  ? "bg-secondary text-white shadow-md shadow-secondary/15"
                  : "bg-slate-50 border border-slate-200/60 text-primary hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.05} yOffset={20}>
              <div
                onClick={() => setActiveLightbox(item)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-100 shadow-sm transition-smooth hover:shadow-lg"
              >
                {/* Image panel */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Overlays / Hover Effects */}
                <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/15 backdrop-blur-md rounded-full border border-white/20 text-white">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                </div>

                {/* Bottom title cards */}
                <div className="p-5 bg-white">
                  <h3 className="font-display font-bold text-primary text-base">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-secondary font-display font-bold uppercase tracking-wider block mt-1">
                    {item.category.replace("-", " ")}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Gallery Lightbox Modal Popup */}
        {activeLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-md px-4">
            {/* Close trigger background */}
            <div className="absolute inset-0" onClick={() => setActiveLightbox(null)} />

            {/* Lightbox box */}
            <div className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-smooth"
                aria-label="Close image view"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Large Image */}
              <div className="w-full max-h-[60vh] overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src={activeLightbox.imageUrl}
                  alt={activeLightbox.title}
                  className="max-w-full max-h-[60vh] object-contain"
                />
              </div>

              {/* Description Panel */}
              <div className="p-6 md:p-8 font-sans">
                <span className="text-xs font-display font-bold text-secondary uppercase tracking-wider">
                  {activeLightbox.category.replace("-", " ")}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary mt-1">
                  {activeLightbox.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-2">
                  {activeLightbox.description}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
export default GalleryFilterable;
