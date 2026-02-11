"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <span ref={ref} className={cn("inline-block overflow-hidden", className)}>
      <span
        className={cn(
          "inline-block transition-transform duration-700 ease-out",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
      >
        {children}
      </span>
    </span>
  );
}
