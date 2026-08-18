"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium rounded-full transition-smooth focus:outline-none focus:ring-2 focus:ring-secondary/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-secondary hover:shadow-[0_4px_20px_rgba(90,44,130,0.25)]",
    secondary: "bg-secondary text-white hover:bg-primary hover:shadow-[0_4px_20px_rgba(29,42,87,0.2)]",
    gold: "bg-accent-gold text-primary hover:bg-accent-gold-hover hover:shadow-[0_4px_20px_rgba(197,168,82,0.3)]",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
export default Button;
