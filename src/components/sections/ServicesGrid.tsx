"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, Service } from "@/data/services";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";

interface ServicesGridProps {
  limit?: number;
  initialServices?: Service[];
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ limit, initialServices }) => {

  const data = initialServices || services;
  const displayedServices = limit ? data.slice(0, limit) : data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedServices.map((svc, idx) => (
        <ScrollReveal key={svc.id} delay={idx * 0.08} yOffset={25}>
          <Card className="h-full flex flex-col items-stretch p-0 overflow-hidden">
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <img
                src={svc.imageUrl}
                alt={svc.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text & Button Wrapper */}
            <div className="p-4 md:p-5 flex-grow flex flex-col items-start justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-primary leading-snug">
                {svc.title}
              </h3>

              <Link href={`/treatments/${svc.id}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="px-0 hover:bg-transparent text-secondary font-bold inline-flex items-center gap-1.5 group text-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ServicesGrid;
