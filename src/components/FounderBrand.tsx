"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Globe, Medal, Trophy, Star, X } from "lucide-react";

interface AchievementDetail {
  year: string;
  result: string;
}

interface CategoryMedal {
  id: string;
  category: "intl" | "india" | "state" | "city" | "khel-ratna";
  type: "gold" | "silver" | "bronze" | "special";
  title: string;
  size: "sm" | "md" | "lg";
  ribbonHeight: string;
  swayDuration: string;
  swayDelay: string;
  achievements: AchievementDetail[];
}

const categoryMedals: CategoryMedal[] = [
  // 🌍 International Medal
  {
    id: "intl-medal",
    category: "intl",
    type: "gold",
    title: "International Placements",
    size: "md",
    ribbonHeight: "h-28",
    swayDuration: "5.4s",
    swayDelay: "-0.6s",
    achievements: [
      { year: "2018", result: "IFBB Diamond Cup — Gold Medal" },
      { year: "2019", result: "IFBB Diamond Cup — Bronze Medal" },
      { year: "2022", result: "Mr. Universe — Bronze Medal" },
    ],
  },
  // 🏆 Mr. India Medal
  {
    id: "india-medal",
    category: "india",
    type: "gold",
    title: "Mr. India Placements",
    size: "md",
    ribbonHeight: "h-32",
    swayDuration: "4.8s",
    swayDelay: "-1.7s",
    achievements: [
      { year: "2017", result: "Gold Medal" },
      { year: "2018", result: "Bronze Medal" },
      { year: "2024", result: "Bronze Medal" },
    ],
  },
  // 🏆 Mr. Maharashtra Medal
  {
    id: "state-medal",
    category: "state",
    type: "gold",
    title: "Mr. Maharashtra Placements",
    size: "md",
    ribbonHeight: "h-26",
    swayDuration: "5.8s",
    swayDelay: "-2.3s",
    achievements: [
      { year: "2015", result: "Silver Medal" },
      { year: "2016", result: "Bronze Medal" },
      { year: "2017", result: "Gold Medal" },
      { year: "2019", result: "Gold Medal" },
      { year: "2024", result: "Gold Medal" },
      { year: "2025", result: "Masters Silver" },
    ],
  },
  // 🏆 Mr. Mumbai Medal
  {
    id: "city-medal",
    category: "city",
    type: "gold",
    title: "Mr. Mumbai Placements",
    size: "md",
    ribbonHeight: "h-30",
    swayDuration: "4.5s",
    swayDelay: "-0.9s",
    achievements: [
      { year: "2009", result: "Navodit Gold Medal" },
      { year: "2015", result: "Gold Medal" },
      { year: "2016", result: "Gold Medal" },
      { year: "2017", result: "Gold Medal" },
      { year: "2018", result: "Gold Medal" },
      { year: "2019", result: "Gold Medal" },
      { year: "2021", result: "Gold Medal" },
      { year: "2025", result: "Masters Gold" },
    ],
  },
  // 🎖️ Maharashtra Khel Ratna Medal
  {
    id: "khel-ratna",
    category: "khel-ratna",
    type: "special",
    title: "Khel Ratna Honor",
    size: "lg",
    ribbonHeight: "h-28",
    swayDuration: "6.2s",
    swayDelay: "-1.2s",
    achievements: [
      { year: "2021", result: "Maharashtra Khel Ratna Award — State Athletic Honor" },
    ],
  },
];

export function FounderBrand() {
  const [activeMedalId, setActiveMedalId] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const handleMedalClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeMedalId === id) {
      setActiveMedalId(null);
    } else {
      setActiveMedalId(id);
    }
  };

  return (
    <div onClick={() => setActiveMedalId(null)}>
      {/* ──────── 1. FOUNDER INTRO MOMENT (SCROLL-TRIGGERED 2-BEAT) ──────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#1A1210] select-none">
        
        {/* BEAT 1 BACKGROUND: Group Podium Stage Photo */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(26, 18, 16, 0.85) 0%, rgba(26, 18, 16, 0.7) 50%, rgba(26, 18, 16, 0.95) 100%), url('/jagesh_stage.jpg')",
            backgroundPosition: "center 30%",
          }}
        />
        
        {/* Intro Tagline & Name Fades */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans text-xs uppercase tracking-[0.25em] text-[#EF9F27] font-bold"
          >
            Founder & Head Coach
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="font-bebas text-6xl md:text-9xl text-[#F2EFE9] tracking-wider mt-3 uppercase"
          >
            Jagesh Pitaji Dait
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="font-sans text-sm md:text-base text-[#F2EFE9]/85 tracking-[0.18em] mt-6 font-semibold uppercase max-w-2xl mx-auto border-t border-[#5C1F27]/40 pt-4"
          >
            This is the face of Kourage. Champion Athlete, Elite Trainer, Builder of Legacies.
          </motion.p>
        </div>
      </section>

      {/* ──────── 2. CONTINUED SCROLL: STORY & BIOGRAPHY (SOLO PHOTO TRANSITION) ──────── */}
      <section className="relative py-24 bg-[#1A1210] border-t border-[#5C1F27]/30 select-none">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Solo Photo Fades in on scroll */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative aspect-[3/4] w-full max-w-[380px] border-2 border-gym-gold bg-[#3D141B] overflow-hidden group shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/jagesh_flag.jpg"
                  alt="Jagesh Dait competitive journey"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-[#1A1210] border border-gym-gold px-4 py-1.5 font-sans text-[10px] uppercase text-[#EF9F27] tracking-widest font-bold">
                  International Athlete
                </div>
              </div>
            </motion.div>

            {/* Biography Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              <span className="font-sans text-xs uppercase tracking-widest text-[#EF9F27] font-bold">
                The Competitive Arc
              </span>
              <h3 className="font-bebas text-4xl md:text-5xl text-[#F2EFE9] uppercase tracking-wider mt-2 mb-6">
                Championship Journey
              </h3>
              
              <p className="font-inter text-base text-[#F2EFE9]/80 leading-relaxed mb-6">
                With over 15 years of competitive bodybuilding, Jagesh Pitaji Dait has established a reputation for structured elite training. As the head coach of Kourage Fitness, Jagesh translates international championship protocols into result-driven routines for dedicated lifters.
              </p>

              <p className="font-inter text-sm md:text-base text-gym-white/70 leading-relaxed mb-8">
                His training philosophy is based on meticulous discipline, custom nutrition modeling, and advanced lifting biomechanics. By eliminating standard gym templates, he focuses strictly on structural transformations.
              </p>

              <div className="border-l-4 border-gym-gold pl-6 py-2 bg-[#3D141B]/40 pr-4">
                <p className="font-inter text-sm italic text-[#F2EFE9]/95 leading-relaxed">
                  &ldquo;Every placement on the stage is a byproduct of execution. At Kourage, we do not ask for motivation — we build structural discipline.&rdquo;
                </p>
                <span className="block font-sans text-[10px] text-[#EF9F27] uppercase tracking-wider mt-2 font-bold">— Jagesh Pitaji Dait</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──────── 3. INTERACTIVE TROPHY WALL SECTION ──────── */}
      <section 
        id="founder" 
        className="scroll-mt-24 md:scroll-mt-28 py-24 md:py-32 bg-[#1A1210] border-t border-[#5C1F27]/30 relative overflow-hidden select-none"
      >
        {/* ATMOSPHERIC BACKGROUND LAYER: Heavily darkened & blurred SOLO photo */}
        <div 
          className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center filter blur-3xl brightness-[15%] opacity-35"
          style={{
            backgroundImage: "url('/jagesh_flag.jpg')",
          }}
        />

        {/* BACKGROUND BLUR LAYER: ONLY triggers behind the medals when one is selected */}
        <div 
          className={`absolute inset-0 z-10 transition-all duration-500 bg-black/45 ${
            activeMedalId ? "backdrop-blur-md" : "backdrop-blur-none pointer-events-none"
          }`} 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#EF9F27] font-bold">
              Interactive Trophy Wall
            </span>
            <h3 className="font-bebas text-4xl md:text-6xl text-[#F2EFE9] uppercase tracking-wider mt-2">
              Career Placements
            </h3>
            <p className="font-sans text-[10px] text-gym-white/40 uppercase tracking-widest mt-2">
              Tap any hanging medal to inspect details in the display placard
            </p>
          </div>

          {/* HANGING MEDALS RACK DISPLAY LAYOUT */}
          {/* DESKTOP FLEX VIEWPORT: 3 on primary row, 4th and Khel Ratna centered on second row */}
          <div className="hidden lg:flex flex-wrap justify-center gap-16 max-w-5xl mx-auto min-h-[460px] px-4 py-8 relative">
            
            {/* Row 1 Medals */}
            <div className="w-full flex justify-center gap-16 mb-8">
              {categoryMedals.slice(0, 3).map((medal) => (
                <MedalItem 
                  key={medal.id}
                  medal={medal}
                  activeMedalId={activeMedalId}
                  onMedalClick={handleMedalClick}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </div>

            {/* Row 2 Medals (Centered Mr. Mumbai and Khel Ratna Hero) */}
            <div className="w-full flex justify-center gap-16">
              {categoryMedals.slice(3, 5).map((medal) => (
                <MedalItem 
                  key={medal.id}
                  medal={medal}
                  activeMedalId={activeMedalId}
                  onMedalClick={handleMedalClick}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </div>

          </div>

          {/* MOBILE SCROLLABLE RACK: Vertical layout, max 2 per row */}
          <div className="lg:hidden grid grid-cols-2 gap-y-16 gap-x-6 justify-items-center relative">
            {categoryMedals.map((medal) => (
              <MedalItem 
                key={medal.id}
                medal={medal}
                activeMedalId={activeMedalId}
                onMedalClick={handleMedalClick}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ──────── 4. MENTOR / COACH LEGACY SUBSECTION ──────── */}
      <section className="relative py-24 bg-[#1A1210] border-t border-[#5C1F27]/30 select-none">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-left"
            >
              <span className="font-sans text-xs uppercase tracking-widest text-[#EF9F27] font-bold">
                The Mentor&apos;s Legacy
              </span>
              <h3 className="font-bebas text-4xl md:text-5xl text-[#F2EFE9] uppercase tracking-wider mt-2 mb-6">
                Elite Coaching Authority
              </h3>
              
              <p className="font-inter text-base text-[#F2EFE9]/80 leading-relaxed mb-6">
                Credentialed coaching starts with elite guidance. Jagesh Pitaji Dait&apos;s competitive bodybuilding framework and the coaching infrastructure at Kourage Fitness are established under the direct mentorship of a legendary national bodybuilding coach.
              </p>
              <p className="font-inter text-sm md:text-base text-gym-white/70 leading-relaxed mb-6">
                With a reputation for molding championship physiques, our chief mentor has guided:
              </p>
              
              <ul className="space-y-3 font-sans text-xs text-[#F2EFE9]/90 mb-8 pl-1">
                <li className="flex items-center gap-3">
                  <span className="text-gym-gold font-bold">✔</span>
                  <span>Jagesh Pitaji Dait (3-Time Mr. India Medalist)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gym-gold font-bold">✔</span>
                  <span>Salman Khan (Bollywood Action Superstar)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gym-gold font-bold">✔</span>
                  <span>Multiple Professional Bodybuilding Athletes across India</span>
                </li>
              </ul>
            </motion.div>

            {/* Right side: Portrait Frame */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-[340px] border-2 border-border-subtle bg-bg-surface p-6 relative overflow-hidden flex flex-col justify-center items-center text-center group shadow-xl">
                <div className="absolute inset-0 grid-bg-overlay opacity-20 pointer-events-none" />
                <div className="relative w-full aspect-square border border-[#5C1F27] overflow-hidden mb-6 bg-bg-primary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ig_post_3.png"
                    alt="Legacy mentorship showcase"
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <span className="font-sans text-[10px] text-[#EF9F27] uppercase tracking-widest mb-2 font-semibold">
                  Elite Guidance
                </span>
                <p className="font-bebas text-xl text-[#F2EFE9] uppercase tracking-wider leading-tight">
                  &ldquo;Champions are forged, not born.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// SUB-COMPONENT: INDIVIDUAL HANGING MEDAL WITH 3D SHADING & EMBOSSING
// ──────────────────────────────────────────────────────────────────────────
interface MedalItemProps {
  medal: CategoryMedal;
  activeMedalId: string | null;
  onMedalClick: (id: string, e: React.MouseEvent) => void;
  prefersReducedMotion: boolean;
}

function MedalItem({ medal, activeMedalId, onMedalClick, prefersReducedMotion }: MedalItemProps) {
  const isFlipped = activeMedalId === medal.id;
  const isDimmed = activeMedalId !== null && activeMedalId !== medal.id;

  const getMedalClass = (type: string, size: string) => {
    let sizeClass = "w-14 h-14 border-2";
    if (size === "md") sizeClass = "w-16 h-16 border-2";
    if (size === "lg") sizeClass = "w-20 h-20 border-4";

    let gradientClass = "from-[#F2D67C] via-[#D4A537] to-[#8A6A1E] border-[#EF9F27]";
    if (type === "silver") {
      gradientClass = "from-[#F5F7F8] via-[#C8CDD2] to-[#7D8489] border-[#C8CDD2]";
    } else if (type === "bronze") {
      gradientClass = "from-[#E0A472] via-[#B87333] to-[#6B4321] border-[#B87333]";
    } else if (type === "special") {
      gradientClass = "from-[#F2D67C] via-[#D4A537] to-[#8A6A1E] border-[#EF9F27]";
    }

    return `${sizeClass} bg-gradient-to-br ${gradientClass}`;
  };

  const PhysiqueEmblem = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-7 h-7 text-[#1A1210]/60 filter drop-shadow-[1px_1px_1px_rgba(255,255,255,0.2)]"
    >
      <path d="M12 2a4 4 0 0 0-4 4v.27c-1.16.84-2 2.2-2 3.73v1.5a1.5 1.5 0 0 0 1.5 1.5h.5v5c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-5h.5a1.5 1.5 0 0 0 1.5-1.5v-1.5c0-1.53-.84-2.89-2-3.73V6a4 4 0 0 0-4-4z" />
      <path d="M7 21h10v1H7z" />
    </svg>
  );

  return (
    <div 
      className={`relative flex flex-col items-center justify-start transition-all duration-500 ${
        isFlipped ? "z-40" : isDimmed ? "opacity-35 pointer-events-none scale-95" : "hover:scale-105"
      }`}
      style={{ 
        perspective: 1200, 
        minHeight: "240px",
        width: medal.size === "lg" ? "110px" : "90px"
      }}
    >
      {/* 3D Card Inner container */}
      <motion.div
        onClick={(e) => onMedalClick(medal.id, e)}
        className="w-full relative cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
        transition={prefersReducedMotion ? { duration: 0.3 } : {
          type: "spring",
          stiffness: 140,
          damping: 18,
          mass: 1.1,
          restDelta: 0.001
        }}
      >
        {/* FRONT FACE (Medal hanging from the cord) */}
        <div 
          className="flex flex-col items-center w-full"
          style={{ 
            backfaceVisibility: "hidden",
            animation: prefersReducedMotion ? "none" : "sway var(--sway-duration) ease-in-out infinite",
            animationDelay: medal.swayDelay,
            transformOrigin: "top center",
            ["--sway-duration" as any]: medal.swayDuration,
          }}
        >
          {/* Hanging Ribbon Cord (Maroon with central Gold pinstripe) */}
          <div className={`w-4.5 ${medal.ribbonHeight} bg-[#6B1B23] relative flex justify-center shadow-lg`}>
            {/* Gold central pinstripe */}
            <div className="w-0.5 h-full bg-[#EF9F27]" />
          </div>

          {/* Medal Disc with Embossed Depth & Rim Shading */}
          <div 
            className="rounded-full flex items-center justify-center -mt-1 relative"
            style={{
              boxShadow: "inset 1px 1px 3px rgba(255,255,255,0.45), inset -2px -2px 5px rgba(0,0,0,0.65), 0 12px 24px rgba(0,0,0,0.65)"
            }}
          >
            <div className={`${getMedalClass(medal.type, medal.size)} rounded-full flex items-center justify-center relative overflow-hidden`}>
              {/* Highlight Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-full rotate-45 animate-shimmer" style={{ animationDuration: "5s" }} />
              
              {/* Inner Embossed Circle Rim */}
              <div className="w-[90%] h-[90%] rounded-full border border-black/15 border-dashed flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
                {medal.type === "special" ? (
                  <Star className="w-9 h-9 text-[#1A1210]/60 filter drop-shadow-[1px_1px_1px_rgba(255,255,255,0.25)]" />
                ) : (
                  <PhysiqueEmblem />
                )}
              </div>
            </div>
          </div>
          
          <span className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#F3EDE4]/55 mt-3 font-semibold text-center truncate w-full">
            {medal.category === "khel-ratna" ? "Khel Ratna" : medal.category === "intl" ? "International" : medal.title.replace(" Placements", "")}
          </span>
        </div>

        {/* BACK FACE (Informational Stamped Plaque) */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 p-6 bg-[#0D0A0A] border-2 border-gym-gold shadow-2xl flex flex-col justify-center items-center text-center select-none"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg) translate(50%, 0)",
            minHeight: "190px",
            boxShadow: "inset 0 0 15px rgba(212,165,55,0.1), 0 15px 30px rgba(0,0,0,0.85)"
          }}
        >
          {/* Close affordance for mobile */}
          <button 
            className="absolute top-3 right-3 text-gym-white/40 hover:text-gym-gold md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              onMedalClick(medal.id, e as any);
            }}
          >
            <X size={14} />
          </button>
          
          <span className="font-sans text-[9px] uppercase text-gym-white/45 tracking-widest mb-3 font-bold">
            {medal.category === "khel-ratna" ? "State Honor" : "Medal achievements"}
          </span>
          
          <h4 
            className="text-2xl text-[#EF9F27] uppercase tracking-wide leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800 }}
          >
            {medal.title}
          </h4>

          {/* Centered Achievement List with Generous Spacing */}
          <div className="w-full flex flex-col gap-2.5 items-center justify-center border-t border-[#5C1F27]/30 pt-4">
            {medal.achievements.map((ach, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-wider text-[#F3EDE4]"
              >
                <span className="text-[#EF9F27] font-serif font-extrabold">{ach.year}</span>
                <span className="text-gym-white/50">—</span>
                <span className="font-medium text-gym-white/80">{ach.result}</span>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
      
      {/* Shimmer animation support inside global CSS styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          100% { transform: translate(100%, 100%) rotate(45deg); }
        }
        .animate-shimmer {
          animation: shimmer 6s infinite linear;
        }
      `}</style>

    </div>
  );
}

export default FounderBrand;
