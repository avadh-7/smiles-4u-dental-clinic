import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-10 md:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <span className="px-4 py-1.5 text-xs font-display font-semibold tracking-wider text-secondary uppercase bg-secondary/5 rounded-full border border-secondary/10">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
        {title}
        <span className={cn(
          "block h-1.5 w-16 bg-accent-gold rounded-full mt-3 align-middle",
          align === "center" ? "mx-auto" : "mr-auto"
        )} />
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed font-sans mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionHeading;
