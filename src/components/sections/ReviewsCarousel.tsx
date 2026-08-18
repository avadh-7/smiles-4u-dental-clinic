"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Card from "../ui/Card";
import { ScrollReveal } from "../ui/ScrollReveal";

export const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star
        key={idx}
        className={`h-4.5 w-4.5 ${
          idx < rating ? "fill-accent-gold text-accent-gold" : "text-slate-200"
        }`}
      />
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
      
      <ScrollReveal yOffset={25}>
        <div className="relative">
          {/* Quote Icon watermark */}
          <div className="absolute -top-6 -left-4 text-secondary/5 pointer-events-none select-none">
            <Quote className="h-28 w-28 rotate-180" />
          </div>

          {/* Testimonial slider body */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-2">
                  <Card className="flex flex-col gap-6 text-center items-center shadow-sm">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="font-sans text-sm md:text-base lg:text-lg italic text-slate-600 leading-relaxed max-w-2xl">
                      &ldquo;{item.text}&rdquo;
                    </p>

                    {/* Profile details */}
                    <div className="flex flex-col items-center">
                      <h4 className="font-display font-extrabold text-primary text-base md:text-lg">
                        {item.name}
                      </h4>
                      <span className="text-[10px] font-sans font-bold tracking-wider text-slate-400 uppercase mt-0.5">
                        {item.role ? `${item.role} • ` : ""}{item.source}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Controls indicators */}
          <div className="flex items-center justify-between mt-5">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex ? "w-6 bg-secondary" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-2.5 bg-white border border-slate-200 text-primary hover:text-white hover:bg-secondary hover:border-secondary rounded-full shadow-sm transition-smooth cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 bg-white border border-slate-200 text-primary hover:text-white hover:bg-secondary hover:border-secondary rounded-full shadow-sm transition-smooth cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
};
export default ReviewsCarousel;
