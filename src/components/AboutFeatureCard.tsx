"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface AboutFeatureCardProps {
  num: string;
  title: string;
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

export function AboutFeatureCard({ num, title, text, className = "w-full", icon }: AboutFeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to the element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-12 to 12 degrees)
    const rY = ((mouseX - width / 2) / (width / 2)) * 12;
    const rX = -((mouseY - height / 2) / (height / 2)) * 12;

    setRotateX(rX);
    setRotateY(rY);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className={className}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.015 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        className="relative h-full min-h-[220px] flex flex-col justify-between border-2 border-border-subtle bg-bg-surface p-8 select-none cursor-pointer group hover:border-[#EF9F27] hover:shadow-[0_15px_35px_rgba(239,159,39,0.12)] transition-all duration-300"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background container that safely clips overlays without breaking 3D context */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-sm">
          {/* Subtle grid background on card */}
          <div className="absolute inset-0 grid-bg-overlay opacity-25" />

          {/* Gold dot pattern background texture on hover */}
          <div className="absolute inset-0 bg-[radial-gradient(#EF9F27_1.2px,transparent_1.2px)] [background-size:14px_14px] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          
          {/* Glossy light shine sweep overlay */}
          <div className="hover-shine-sweep z-20" />
        </div>
        
        {/* Premium Gold Corner Brackets */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] group-hover:scale-105 transition-all duration-300" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] group-hover:scale-105 transition-all duration-300" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] group-hover:scale-105 transition-all duration-300" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#EF9F27]/30 pointer-events-none group-hover:border-[#EF9F27] group-hover:scale-105 transition-all duration-300" />

        {/* Number Badge & Icon Row */}
        <div style={{ transform: "translateZ(30px)" }} className="flex justify-between items-center w-full">
          <span className="font-bebas text-4xl text-gym-gold/40 group-hover:text-gym-gold transition-colors duration-300">
            {num}.
          </span>
          {icon && (
            <div className="text-gym-white/20 group-hover:text-[#EF9F27] group-hover:scale-110 transition-all duration-300">
              {icon}
            </div>
          )}
        </div>

        {/* Content Details */}
        <div style={{ transform: "translateZ(20px)" }} className="mt-8">
          <h3 className="font-bebas text-2xl md:text-3xl text-gym-white uppercase tracking-wider mb-2 group-hover:text-gym-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="font-inter text-sm text-gym-white/70 leading-relaxed">
            {text}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutFeatureCard;
