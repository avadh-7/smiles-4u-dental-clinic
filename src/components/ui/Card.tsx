import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverable = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass-card rounded-3xl p-6 md:p-8 transition-smooth",
        hoverable && "glass-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default Card;
