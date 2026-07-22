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
  height = 40,
  className = "",
  isScrolled = false,
  theme = "adaptive",
}: LogoProps) {
  // Determine if we should use dark theme colors (white/light text on dark backgrounds)
  // or light theme colors (dark text on light/white backgrounds)
  const isDarkTheme =
    theme === "dark" || (theme === "adaptive" && !isScrolled);

  // Dynamic colors for the wordmark text based on the theme
  const primaryColor = isDarkTheme ? "#ffffff" : "#0f766e"; // Deep teal on light, white on dark
  const secondaryColor = isDarkTheme ? "#fb7185" : "#f43f5e"; // Coral color
  const dividerColor = isDarkTheme ? "rgba(255, 255, 255, 0.25)" : "rgba(15, 118, 110, 0.25)";

  const parsedHeight = typeof height === "number" ? height : parseInt(height) || 40;
  
  // Calculate size of the logo icon based on height
  const iconSize = Math.round(parsedHeight * 0.95);

  return (
    <div className={`flex items-center select-none transition-all duration-300 ${className}`} style={{ height: parsedHeight }}>
      {/* 3D Masterpiece Logo Icon */}
      <div 
        className="relative flex-shrink-0 transition-all duration-300 rounded-xl overflow-hidden" 
        style={{ width: iconSize, height: iconSize }}
      >
        <Image
          src={isDarkTheme ? "/images/logo_dark.png" : "/images/logo_light.png"}
          alt="Priyanka Enterprises Icon"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
      </div>

      {/* Vertical Divider Line with gradient look (transition color) */}
      <div 
        className="h-3/5 w-[1.2px] mx-3.5 transition-colors duration-300" 
        style={{ backgroundColor: dividerColor }}
      />

      {/* Wordmark Text - Original typography and SVG text code preserved exactly */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={Math.round(parsedHeight * (125 / 56))}
        height={parsedHeight}
        viewBox="0 0 125 56"
        fill="none"
        className="flex-shrink-0"
      >
        <g className="transition-colors duration-300">
          <text
            x="2"
            y="24"
            fontFamily="var(--font-display), 'Outfit', 'Inter', system-ui, -apple-system, sans-serif"
            fontSize="18"
            fontWeight="900"
            fill={primaryColor}
            letterSpacing="1.5"
            className="transition-colors duration-300"
          >
            PRIYANKA
          </text>

          <text
            x="2"
            y="42"
            fontFamily="var(--font-display), 'Outfit', 'Inter', system-ui, -apple-system, sans-serif"
            fontSize="10"
            fontWeight="700"
            fill={secondaryColor}
            letterSpacing="1.5"
            className="transition-colors duration-300"
          >
            ENTERPRISES
          </text>
        </g>
      </svg>
    </div>
  );
}
