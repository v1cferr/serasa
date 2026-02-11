"use client";

import { useEffect, useRef } from "react";

interface OrganicBlobProps {
  className?: string;
  color?: string;
  size?: number;
}

export function OrganicBlob({
  className = "",
  color = "var(--primary)",
  size = 400,
}: OrganicBlobProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.008;
      const path = pathRef.current;
      if (!path) return;

      const points = 8;
      const radius = 40;
      const variance = 8;

      let d = "M";
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const r =
          radius +
          Math.sin(time + i * 0.8) * variance +
          Math.cos(time * 1.3 + i * 0.5) * (variance * 0.5);
        const x = 50 + r * Math.cos(angle);
        const y = 50 + r * Math.sin(angle);

        if (i === 0) {
          d += `${x},${y}`;
        } else {
          const prevAngle = ((i - 1) / points) * Math.PI * 2;
          const prevR =
            radius +
            Math.sin(time + (i - 1) * 0.8) * variance +
            Math.cos(time * 1.3 + (i - 1) * 0.5) * (variance * 0.5);
          const prevX = 50 + prevR * Math.cos(prevAngle);
          const prevY = 50 + prevR * Math.sin(prevAngle);

          const cp1x = prevX + (x - prevX) * 0.5 - (y - prevY) * 0.2;
          const cp1y = prevY + (y - prevY) * 0.5 + (x - prevX) * 0.2;
          d += ` Q${cp1x},${cp1y} ${x},${y}`;
        }
      }
      d += "Z";
      path.setAttribute("d", d);

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ filter: "blur(0px)" }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        ref={pathRef}
        fill={color}
        opacity="0.15"
        filter="url(#glow)"
      />
    </svg>
  );
}
