"use client";

import React from "react"

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
}

export function MagneticButton({
  children,
  className,
  onClick,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative px-8 py-4 font-medium text-lg rounded-full transition-all duration-300 ease-out",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:shadow-[0_0_40px_rgba(154,234,99,0.4)]",
        variant === "outline" &&
          "bg-transparent border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary",
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full bg-primary opacity-0 hover:opacity-20 transition-opacity duration-300" />
      )}
    </button>
  );
}
