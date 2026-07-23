"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  height?: number | string;
  className?: string;
  isScrolled?: boolean;
  theme?: "light" | "dark" | "adaptive";
}

export default function Logo({
  height = 50,
  className = "",
}: LogoProps) {
  const parsedHeight = typeof height === "number" ? height : parseInt(height) || 50;

  return (
    <div className={`flex items-center select-none transition-all duration-300 ${className}`} style={{ height: parsedHeight }}>
      <Image
        src="/images/priyankalogo.jpg"
        alt="Priyanka Enterprises Logo"
        width={240}
        height={parsedHeight * 2}
        className="h-full w-auto object-contain rounded-lg shadow-sm"
        priority
      />
    </div>
  );
}

