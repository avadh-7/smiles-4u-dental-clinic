"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  xOffset = 0,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, render children static without animation
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 1.02, 0.43, 1.01] // Custom smooth bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default ScrollReveal;
