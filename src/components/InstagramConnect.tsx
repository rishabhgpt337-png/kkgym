"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const InstagramLogo = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const instaImages = [
  "/gallery/IMG_9986.JPG.jpeg",
  "/gallery/IMG_9987.JPG.jpeg",
  "/gallery/IMG_9990.JPG.jpeg",
  "/gallery/IMG_9991.JPG.jpeg",
  "/gallery/IMG_9992.JPG.jpeg",
  "/gallery/IMG_9994.JPG.jpeg",
  "/gallery/IMG_9995.JPG.jpeg",
  "/gallery/IMG_9996.JPG.jpeg",
  "/gallery/IMG_9997.JPG.jpeg",
];

export default function InstagramConnect() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="relative py-24 md:py-32 bg-bg-primary overflow-hidden border-b border-border-subtle select-none flex items-center justify-center min-h-[70vh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Marquees */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isHovered ? 'opacity-30' : 'opacity-10'}`}>
        {/* Row 1: Left to Right */}
        <div className="absolute top-4 left-0 flex whitespace-nowrap overflow-hidden w-full">
          <div className="flex gap-4 w-max animate-marquee">
             {[...instaImages, ...instaImages].map((img, i) => (
                <div key={`row1-${i}`} className="relative w-48 sm:w-64 aspect-square shrink-0 overflow-hidden border border-gym-gold/20 shadow-lg">
                  <Image 
                    src={img} 
                    alt="Gym Activity" 
                    fill
                    sizes="(max-width: 768px) 192px, 256px"
                    className="object-cover filter grayscale contrast-125 opacity-80" 
                  />
                </div>
             ))}
          </div>
        </div>
        
        {/* Row 2: Right to Left */}
        <div className="absolute bottom-4 left-0 flex whitespace-nowrap overflow-hidden w-full">
          <div className="flex gap-4 w-max animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
             {[...instaImages, ...instaImages].reverse().map((img, i) => (
                <div key={`row2-${i}`} className="relative w-48 sm:w-64 aspect-square shrink-0 overflow-hidden border border-gym-gold/20 shadow-lg">
                  <Image 
                    src={img} 
                    alt="Gym Activity" 
                    fill
                    sizes="(max-width: 768px) 192px, 256px"
                    className="object-cover filter grayscale contrast-125 opacity-80" 
                  />
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Dark Radial Gradient to blur/fade the background items and focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(42,13,18,0.4)_0%,rgba(42,13,18,0.95)_75%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary z-10 pointer-events-none opacity-80" />

      {/* Central Glassmorphism Card */}
      <div className="relative z-20 max-w-2xl mx-auto px-6 w-full">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-[#3D141B]/40 backdrop-blur-xl border border-gym-gold/30 p-10 md:p-16 text-center flex flex-col items-center group relative overflow-hidden shadow-[0_0_40px_rgba(239,159,39,0.1)] rounded-sm"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gym-gold/0 via-gym-gold/10 to-gym-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="w-20 h-20 mb-8 rounded-full border border-gym-gold flex items-center justify-center bg-bg-primary/80 text-gym-gold group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(239,159,39,0.4)] transition-all duration-500">
            <InstagramLogo size={36} />
          </div>

          <span className="font-sans text-xs sm:text-sm uppercase tracking-widest text-gym-gold mb-3 font-bold">
            Join The Community
          </span>
          <h3 className="font-bebas text-5xl md:text-7xl text-gym-white uppercase tracking-wider mb-6 drop-shadow-md">
            Stay Connected
          </h3>
          <p className="font-inter text-sm sm:text-base text-gym-white/80 leading-relaxed mb-10 max-w-md mx-auto">
            Get daily workout tips, extreme transformation stories, and behind-the-scenes action at Kourage Fitness directly on your feed.
          </p>

          <a
            href="https://www.instagram.com/kouragefitness_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-base sm:text-lg uppercase tracking-widest px-8 sm:px-12 py-4 hover:text-gym-gold transition-colors duration-300 w-full sm:w-auto group/btn shadow-[0_4px_20px_rgba(239,159,39,0.3)] hover:shadow-[0_4px_30px_rgba(239,159,39,0.5)]"
          >
            {/* Slide-in black background on hover */}
            <span className="absolute inset-0 bg-bg-primary transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
            <span className="relative z-10 flex items-center justify-center gap-3">
              Follow @kouragefitness_official <span className="group-hover/btn:translate-x-1.5 transition-transform duration-300">&rarr;</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
