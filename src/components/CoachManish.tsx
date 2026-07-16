"use client";

import React from "react";
import { motion } from "framer-motion";

const InstagramLogo = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function CoachManish() {
  return (
    <section className="bg-bg-primary border-t border-gym-gold/10 py-16 md:py-24 relative overflow-hidden select-none">
      <div className="absolute inset-0 grid-bg-overlay opacity-10 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gym-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column: Photo/Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-5/12 flex flex-col justify-center"
        >
          <div className="relative aspect-[4/5] w-full max-w-[320px] mx-auto border-2 border-gym-gold/40 hover:border-gym-gold transition-colors duration-500 overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.5)] p-2 bg-[#1A1210]">
             {/* Coach Manish Photo */}
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
                src="/gallery/manish.jpg" 
                alt="Coach Manish Advilkar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             
             {/* Glossy sweep using the existing global class */}
             <div className="hover-shine-sweep pointer-events-none z-20" />
             
             <div className="absolute bottom-4 left-4 z-20 bg-bg-primary border border-gym-gold px-4 py-1.5 font-sans text-[10px] uppercase text-gym-gold tracking-widest font-bold shadow-lg">
                Celebrity Coach
             </div>
          </div>
        </motion.div>

        {/* Right Column: Text & Insta Link */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-7/12 flex flex-col text-center md:text-left"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-gym-gold font-bold mb-2">
            Elite Training Partner
          </span>
          <h3 className="font-bebas text-5xl md:text-7xl text-gym-white uppercase tracking-wider mb-6 leading-none">
            Manish Advilkar
          </h3>
          
          <p className="font-inter text-base md:text-lg text-gym-white/80 leading-relaxed mb-6">
            A celebrated name in the fitness industry, Manish Advilkar is renowned for his expertise as a celebrity fitness coach. With a prestigious background in professional bodybuilding, including Mr. Maharashtra and Mr. Mumbai titles, his deep understanding of muscle hypertrophy and body recomposition is unmatched.
          </p>

          <p className="font-inter text-sm md:text-base text-gym-white/60 leading-relaxed mb-8 border-l-2 border-gym-gold/50 pl-4 ml-0 md:ml-2">
            Credited with training some of Bollywood&apos;s biggest icons, Manish brings a Hollywood-caliber approach to structural discipline and aesthetic perfection to Kourage Fitness.
          </p>
          
          <div className="flex justify-center md:justify-start mt-2">
            <a 
              href="https://www.instagram.com/manishadvilkar?igsh=MWQwZnl2czJtMWpraw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1A1210] border-2 border-gym-gold/40 hover:border-gym-gold px-8 py-3.5 font-bebas text-xl tracking-widest text-gym-white hover:text-gym-gold transition-all duration-300 group shadow-[0_0_15px_rgba(239,159,39,0.05)] hover:shadow-[0_0_20px_rgba(239,159,39,0.15)]"
            >
              <InstagramLogo size={22} className="text-gym-gold group-hover:scale-110 transition-transform duration-300" />
              Follow Coach Manish
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
