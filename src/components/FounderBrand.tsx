"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Globe, Medal, Trophy, X } from "lucide-react";

interface MedalData {
  id: string;
  category: "india" | "state" | "city" | "intl" | "special";
  type: "gold" | "silver" | "bronze" | "special";
  year: string;
  title: string;
  placement: string;
  size: "sm" | "md" | "lg";
  heightOffset: string; // e.g. "h-32", "h-36"
  swayDuration: string; // e.g. "4.5s"
  swayDelay: string;    // e.g. "-1.2s"
}

const medalsList: MedalData[] = [
  // 🌍 International
  {
    id: "intl-1",
    category: "intl",
    type: "gold",
    year: "2018",
    title: "IFBB Diamond Cup",
    placement: "Gold Medal",
    size: "md",
    heightOffset: "h-32",
    swayDuration: "4.8s",
    swayDelay: "-0.4s",
  },
  {
    id: "intl-2",
    category: "intl",
    type: "bronze",
    year: "2019",
    title: "IFBB Diamond Cup",
    placement: "Bronze Medal",
    size: "md",
    heightOffset: "h-40",
    swayDuration: "5.5s",
    swayDelay: "-1.8s",
  },
  {
    id: "intl-3",
    category: "intl",
    type: "bronze",
    year: "2022",
    title: "Mr. Universe",
    placement: "Bronze Medal",
    size: "md",
    heightOffset: "h-36",
    swayDuration: "6.1s",
    swayDelay: "-2.3s",
  },

  // 🏆 Mr. India
  {
    id: "india-1",
    category: "india",
    type: "gold",
    year: "2017",
    title: "Mr. India",
    placement: "Gold Medal",
    size: "md",
    heightOffset: "h-36",
    swayDuration: "5.2s",
    swayDelay: "-0.9s",
  },
  {
    id: "india-2",
    category: "india",
    type: "bronze",
    year: "2018",
    title: "Mr. India",
    placement: "Bronze Medal",
    size: "md",
    heightOffset: "h-32",
    swayDuration: "4.6s",
    swayDelay: "-3.1s",
  },
  {
    id: "india-3",
    category: "india",
    type: "bronze",
    year: "2024",
    title: "Mr. India",
    placement: "Bronze Medal",
    size: "md",
    heightOffset: "h-40",
    swayDuration: "5.8s",
    swayDelay: "-1.5s",
  },

  // 🏆 Mr. Maharashtra
  {
    id: "state-1",
    category: "state",
    type: "gold",
    year: "2017",
    title: "Mr. Maharashtra",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-32",
    swayDuration: "4.2s",
    swayDelay: "-0.5s",
  },
  {
    id: "state-2",
    category: "state",
    type: "gold",
    year: "2019",
    title: "Mr. Maharashtra",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-38",
    swayDuration: "5.0s",
    swayDelay: "-2.2s",
  },
  {
    id: "state-3",
    category: "state",
    type: "gold",
    year: "2024",
    title: "Mr. Maharashtra",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-34",
    swayDuration: "5.7s",
    swayDelay: "-1.3s",
  },
  {
    id: "state-4",
    category: "state",
    type: "silver",
    year: "2015",
    title: "Mr. Maharashtra",
    placement: "Silver Medal",
    size: "sm",
    heightOffset: "h-40",
    swayDuration: "6.3s",
    swayDelay: "-3.5s",
  },
  {
    id: "state-5",
    category: "state",
    type: "silver",
    year: "2025",
    title: "Mr. Maharashtra",
    placement: "Masters Silver",
    size: "sm",
    heightOffset: "h-36",
    swayDuration: "4.9s",
    swayDelay: "-0.8s",
  },
  {
    id: "state-6",
    category: "state",
    type: "bronze",
    year: "2016",
    title: "Mr. Maharashtra",
    placement: "Bronze Medal",
    size: "sm",
    heightOffset: "h-32",
    swayDuration: "5.3s",
    swayDelay: "-2.7s",
  },

  // 🏆 Mr. Mumbai
  {
    id: "city-1",
    category: "city",
    type: "gold",
    year: "2009",
    title: "Navodit Mumbai",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-34",
    swayDuration: "4.4s",
    swayDelay: "-1.2s",
  },
  {
    id: "city-2",
    category: "city",
    type: "gold",
    year: "2015",
    title: "Mr. Mumbai",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-38",
    swayDuration: "5.1s",
    swayDelay: "-2.5s",
  },
  {
    id: "city-3",
    category: "city",
    type: "gold",
    year: "2016",
    title: "Mr. Mumbai",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-32",
    swayDuration: "6.0s",
    swayDelay: "-3.2s",
  },
  {
    id: "city-4",
    category: "city",
    type: "gold",
    year: "2017",
    title: "Mr. Mumbai",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-40",
    swayDuration: "4.7s",
    swayDelay: "-0.7s",
  },
  {
    id: "city-5",
    category: "city",
    type: "gold",
    year: "2018",
    title: "Mr. Mumbai",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-36",
    swayDuration: "5.4s",
    swayDelay: "-1.6s",
  },
  {
    id: "city-6",
    category: "city",
    type: "gold",
    year: "2019",
    title: "Mr. Mumbai",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-32",
    swayDuration: "5.9s",
    swayDelay: "-2.4s",
  },
  {
    id: "city-7",
    category: "city",
    type: "gold",
    year: "2021",
    title: "Mr. Mumbai",
    placement: "Gold Medal",
    size: "sm",
    heightOffset: "h-38",
    swayDuration: "4.3s",
    swayDelay: "-1.9s",
  },
  {
    id: "city-8",
    category: "city",
    type: "gold",
    year: "2025",
    title: "Mr. Mumbai",
    placement: "Masters Gold",
    size: "sm",
    heightOffset: "h-34",
    swayDuration: "5.1s",
    swayDelay: "-0.2s",
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

  const getMedalCategoryName = (cat: string) => {
    switch (cat) {
      case "intl": return "International";
      case "india": return "Mr. India";
      case "state": return "Mr. Maharashtra";
      case "city": return "Mr. Mumbai";
      default: return "";
    }
  };

  const getMedalIcon = (type: string) => {
    switch (type) {
      case "gold":
        return <Trophy className="text-[#D4A537] w-6 h-6 shrink-0" />;
      case "silver":
        return <Award className="text-[#C8CDD2] w-6 h-6 shrink-0" />;
      case "bronze":
        return <Medal className="text-[#B87333] w-6 h-6 shrink-0" />;
      default:
        return <StarIcon className="text-gym-gold w-8 h-8 shrink-0" />;
    }
  };

  // Helper icons
  const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <section 
      id="founder" 
      className="scroll-mt-24 md:scroll-mt-28 relative overflow-hidden select-none"
      onClick={() => setActiveMedalId(null)}
    >
      {/* 1. STAGE HERO BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center filter brightness-[35%] contrast-110"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(26, 18, 16, 0.95) 0%, rgba(26, 18, 16, 0.8) 50%, rgba(26, 18, 16, 0.98) 100%), url('/jagesh_stage.jpg')",
          backgroundPosition: "center 30%",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[#1A1210]/60 pointer-events-none" />

      {/* STARK GRID DETAIL */}
      <div className="absolute inset-0 z-0 grid-bg-overlay opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center md:text-left mb-16 border-b border-[#5C1F27]/30 pb-10">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#EF9F27] font-semibold">
            Founder & Head Coach
          </span>
          <h2 className="font-bebas text-5xl md:text-8xl text-[#F2EFE9] uppercase tracking-wider mt-2">
            Jagesh Pitaji Dait
          </h2>
          <p className="font-sans text-xs text-[#EF9F27] uppercase tracking-[0.25em] mt-2 font-bold">
            3-Time Mr. India Medalist • 8-Time Mr. Mumbai Champion • 6-Time Mr. Maharashtra Medalist
          </p>
        </div>

        {/* PROFILE CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Visual Portfolio */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="relative aspect-[3/4] border-2 border-gym-gold bg-[#3D141B] overflow-hidden group shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jagesh_flag.jpg"
                alt="Jagesh Dait representing India"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-3 left-3 z-20 bg-[#1A1210] border border-gym-gold px-3 py-1 font-sans text-[9px] uppercase text-[#EF9F27] tracking-widest font-semibold">
                International Tier
              </div>
            </div>

            <div className="relative aspect-[3/4] border-2 border-gym-gold bg-[#3D141B] overflow-hidden group shadow-lg mt-8 lg:mt-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jagesh_stage.jpg"
                alt="Jagesh Dait on stage"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-3 left-3 z-20 bg-[#1A1210] border border-gym-gold px-3 py-1 font-sans text-[9px] uppercase text-[#EF9F27] tracking-widest font-semibold">
                Championship Stage
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <h3 className="font-bebas text-3xl md:text-4xl text-[#F2EFE9] uppercase tracking-wider mb-6">
              The Face of Kourage
            </h3>
            
            <p className="font-inter text-base text-[#F2EFE9]/80 leading-relaxed mb-8">
              With over 15 years of competitive bodybuilding at the highest national and international tiers, Jagesh Pitaji Dait is the driving force behind Kourage Fitness. His vision was to establish an elite training facility in Mulund West that provides structured coaching protocols, customized athletic nutrition, and standard layouts for dedicated lifters.
            </p>

            <div className="border-l-4 border-gym-gold pl-6 py-2 my-2 bg-[#3D141B]/40 mb-8 pr-4">
              <p className="font-inter text-sm italic text-[#F2EFE9]/90 leading-relaxed">
                &ldquo;Bodybuilding is not just physical transformation; it is the ultimate test of mental structure. Every medal on the wall represents a victory over self-doubt, fatigue, and compromise. That is the standard we teach at Kourage.&rdquo;
              </p>
              <span className="block font-sans text-[10px] text-[#EF9F27] uppercase tracking-wider mt-2 font-bold">— Jagesh Pitaji Dait</span>
            </div>
          </motion.div>

        </div>

        {/* ──────── 2. TROPHY WALL INTERACTIVE MEDAL BLOCK ──────── */}
        <div className="relative border border-[#5C1F27]/30 bg-[#1A1210] p-8 md:p-12 shadow-2xl overflow-hidden rounded">
          
          {/* MEDAL WALL TEXTURED BLURRED BACKDROP FOR REAL DEPTH */}
          <div 
            className="absolute inset-0 z-0 opacity-15 filter blur-2xl saturate-50 contrast-125 pointer-events-none scale-110"
            style={{
              backgroundImage: "radial-gradient(circle at center, rgba(107, 27, 35, 0.25) 0%, rgba(26, 18, 16, 0.98) 100%), url('/jagesh_flag.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 z-0 bg-[#1a1210]/40 pointer-events-none" />

          {/* ACTIVE MEDAL INTERACT OVERLAY LAYER */}
          {activeMedalId && (
            <div className="absolute inset-0 z-30 bg-black/55 backdrop-blur-md transition-all duration-300 pointer-events-auto" />
          )}

          <div className="relative z-10 text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#EF9F27] font-semibold">
              Interactive Trophy Wall
            </span>
            <h3 className="font-bebas text-3xl md:text-5xl text-[#F2EFE9] uppercase tracking-wider mt-2">
              Career Placements
            </h3>
            <p className="font-sans text-[10px] text-gym-white/40 uppercase tracking-widest mt-1">
              Tap any hanging medal to inspect placement details
            </p>
          </div>

          {/* MEDALS RACK DISPLAY LAYOUT */}
          {/* DESKTOP ROW VIEWPORT */}
          <div className="hidden lg:grid grid-cols-4 gap-8 relative z-20 min-h-[480px] px-4 items-start">
            
            {/* International Cluster */}
            <div className="flex flex-col items-center">
              <h4 className="font-sans text-[10px] uppercase text-gym-white/40 tracking-[0.2em] font-bold border-b border-[#5C1F27]/30 pb-2 mb-6 w-full text-center">
                International
              </h4>
              <div className="flex gap-8 justify-center w-full min-h-[350px]">
                {medalsList.filter(m => m.category === "intl").map((medal) => (
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

            {/* Mr. India Cluster */}
            <div className="flex flex-col items-center">
              <h4 className="font-sans text-[10px] uppercase text-gym-white/40 tracking-[0.2em] font-bold border-b border-[#5C1F27]/30 pb-2 mb-6 w-full text-center">
                Mr. India
              </h4>
              <div className="flex gap-8 justify-center w-full min-h-[350px]">
                {medalsList.filter(m => m.category === "india").map((medal) => (
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

            {/* Mr. Maharashtra Cluster */}
            <div className="flex flex-col items-center">
              <h4 className="font-sans text-[10px] uppercase text-gym-white/40 tracking-[0.2em] font-bold border-b border-[#5C1F27]/30 pb-2 mb-6 w-full text-center">
                Mr. Maharashtra
              </h4>
              <div className="flex gap-6 justify-center w-full min-h-[350px] flex-wrap">
                {medalsList.filter(m => m.category === "state").map((medal) => (
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

            {/* Mr. Mumbai Cluster */}
            <div className="flex flex-col items-center">
              <h4 className="font-sans text-[10px] uppercase text-gym-white/40 tracking-[0.2em] font-bold border-b border-[#5C1F27]/30 pb-2 mb-6 w-full text-center">
                Mr. Mumbai
              </h4>
              <div className="flex gap-4 justify-center w-full min-h-[350px] flex-wrap">
                {medalsList.filter(m => m.category === "city").map((medal) => (
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

          </div>

          {/* MOBILE SCROLLABLE RACK (2 MAX PER ROW) */}
          <div className="lg:hidden grid grid-cols-2 gap-y-16 gap-x-6 relative z-20 px-2 justify-items-center">
            {medalsList.map((medal) => (
              <MedalItem 
                key={medal.id} 
                medal={medal} 
                activeMedalId={activeMedalId} 
                onMedalClick={handleMedalClick}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>

          {/* 🏅 MAHARASHTRA KHEL RATNA HERO SPOTLIGHT MEDAL (Centered / Larger / Separate) */}
          <div className="mt-20 border-t border-[#5C1F27]/30 pt-16 flex flex-col items-center relative z-20">
            <span className="font-sans text-[10px] uppercase text-[#EF9F27] tracking-[0.25em] font-bold mb-4">
              State Honor Recognition
            </span>
            
            <div className="relative">
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -4 }}
                onClick={(e) => handleMedalClick("khel-ratna", e)}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeMedalId === "khel-ratna" ? "z-40" : "hover:shadow-[0_0_20px_rgba(212,165,55,0.15)]"
                }`}
                style={{ perspective: 1000 }}
              >
                {/* 3D Inner Wrapper */}
                <div
                  className="relative transition-transform duration-600 ease-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: activeMedalId === "khel-ratna" ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT FACE (Hanging Khel Ratna Shield) */}
                  <div 
                    className="flex flex-col items-center select-none"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Ribbon */}
                    <div className="w-10 h-24 bg-gradient-to-r from-[#6B1B23] via-[#EF9F27] to-[#6B1B23] relative flex items-center justify-center shadow-lg">
                      <div className="w-1.5 h-full bg-[#EF9F27]" />
                    </div>
                    {/* Medal disc */}
                    <div 
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F2D67C] via-[#D4A537] to-[#8A6A1E] flex items-center justify-center border-4 border-[#EF9F27] shadow-[0_10px_20px_rgba(0,0,0,0.5)] -mt-1 relative"
                      style={{
                        boxShadow: "inset 0 0 15px rgba(255,255,255,0.4), 0 10px 25px rgba(0,0,0,0.6)"
                      }}
                    >
                      <div className="w-18 h-18 rounded-full border border-dashed border-[#8A6A1E]/40 flex items-center justify-center">
                        <StarIcon className="text-[#8A6A1E]/80 w-10 h-10 animate-pulse" />
                      </div>
                    </div>
                    <span className="font-sans text-[9px] uppercase text-[#F3EDE4] tracking-widest mt-3 font-semibold">
                      Khel Ratna Award
                    </span>
                  </div>

                  {/* BACK FACE (Details display) */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-64 p-6 bg-[#1A1210] border-2 border-gym-gold rounded shadow-2xl flex flex-col justify-center items-center text-center select-none"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg) translate(50%, 0)",
                      minHeight: "190px"
                    }}
                  >
                    <StarIcon className="text-[#D4A537] w-8 h-8 mb-3" />
                    <span className="font-sans text-[9px] uppercase text-gym-white/40 tracking-widest">
                      State Sports Honor
                    </span>
                    <h4 
                      className="text-2xl text-[#EF9F27] uppercase tracking-wide mt-1.5 mb-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800 }}
                    >
                      Khel Ratna Award
                    </h4>
                    <p className="font-sans text-[11px] uppercase tracking-widest text-[#F3EDE4] font-medium">
                      2021 Recognition
                    </p>
                    <p className="font-inter text-[10px] text-gym-white/60 leading-normal mt-3 max-w-[200px]">
                      Highest official athletic recognition award presented by Maharashtra State Govt.
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>

        </div>

        {/* ──────── 3. MENTOR / COACH LEGACY SUBSECTION ──────── */}
        <div className="mt-24 border-t-2 border-[#5C1F27]/30 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-left"
            >
              <span className="font-sans text-xs uppercase tracking-widest text-[#EF9F27] font-semibold">
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

      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// SUB-COMPONENT: INDIVIDUAL HANGING MEDAL
// ──────────────────────────────────────────────────────────────────────────
interface MedalItemProps {
  medal: MedalData;
  activeMedalId: string | null;
  onMedalClick: (id: string, e: React.MouseEvent) => void;
  prefersReducedMotion: boolean;
}

function MedalItem({ medal, activeMedalId, onMedalClick, prefersReducedMotion }: MedalItemProps) {
  const isFlipped = activeMedalId === medal.id;
  const isDimmed = activeMedalId !== null && activeMedalId !== medal.id;

  const getMedalClass = (type: string, size: string) => {
    let sizeClass = "w-14 h-14 border-4";
    if (size === "md") sizeClass = "w-16 h-16 border-4";
    if (size === "lg") sizeClass = "w-20 h-20 border-[5px]";

    let gradientClass = "from-[#F2D67C] via-[#D4A537] to-[#8A6A1E] border-[#EF9F27]";
    if (type === "silver") {
      gradientClass = "from-[#F5F7F8] via-[#C8CDD2] to-[#7D8489] border-[#C8CDD2]";
    } else if (type === "bronze") {
      gradientClass = "from-[#E0A472] via-[#B87333] to-[#6B4321] border-[#B87333]";
    }

    return `${sizeClass} bg-gradient-to-br ${gradientClass}`;
  };

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case "intl": return "Int'l Placement";
      case "india": return "Mr. India";
      case "state": return "Mr. Maharashtra";
      case "city": return "Mr. Mumbai";
      default: return "";
    }
  };

  return (
    <div 
      className={`relative flex flex-col items-center justify-start transition-all duration-500 ${
        isFlipped ? "z-40" : isDimmed ? "opacity-35 pointer-events-none scale-95" : "hover:scale-105"
      }`}
      style={{ 
        perspective: 1000, 
        minHeight: "220px",
        width: medal.size === "sm" ? "70px" : "90px"
      }}
    >
      {/* 3D Card Inner container */}
      <motion.div
        onClick={(e) => onMedalClick(medal.id, e)}
        className="w-full relative cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
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
          <div className={`w-4 ${medal.heightOffset} bg-[#6B1B23] relative flex justify-center shadow-md`}>
            {/* Gold central stripe */}
            <div className="w-0.5 h-full bg-[#EF9F27]" />
          </div>

          {/* Medal Disc */}
          <div 
            className={`rounded-full flex items-center justify-center shadow-lg -mt-1 relative`}
            style={{
              boxShadow: "inset 0 0 10px rgba(255,255,255,0.3), 0 4px 10px rgba(0,0,0,0.5)"
            }}
          >
            <div className={`${getMedalClass(medal.type, medal.size)} rounded-full flex items-center justify-center`}>
              <div className="w-full h-full rounded-full border border-dashed border-black/20 flex items-center justify-center">
                <span className="font-bebas text-xs text-black/40 font-bold">{medal.year}</span>
              </div>
            </div>
          </div>
          
          <span className="font-sans text-[8px] uppercase tracking-wider text-[#F3EDE4]/50 mt-2 font-medium text-center truncate w-full">
            {medal.year} {medal.type === "gold" ? "Gold" : medal.type === "silver" ? "Silver" : "Bronze"}
          </span>
        </div>

        {/* BACK FACE (Informational Stamped Plaque) */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-48 p-4 bg-[#1A1210] border-2 border-gym-gold rounded shadow-2xl flex flex-col justify-center items-center text-center select-none"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg) translate(50%, 0)",
            minHeight: "150px"
          }}
        >
          {/* Close affords for mobile */}
          <button 
            className="absolute top-2 right-2 text-gym-white/40 hover:text-gym-gold md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              onMedalClick(medal.id, e as any);
            }}
          >
            <X size={12} />
          </button>
          
          <span className="font-sans text-[8px] uppercase text-gym-white/45 tracking-widest mb-1.5 font-bold">
            {getCategoryTitle(medal.category)}
          </span>
          <h4 
            className="text-xl text-[#EF9F27] uppercase tracking-wide leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800 }}
          >
            {medal.title}
          </h4>
          <p className="font-sans text-[10px] uppercase tracking-wider text-[#F3EDE4] mt-2 font-semibold border border-gym-gold/25 px-2 py-0.5 bg-[#3D141B]/35">
            {medal.placement}
          </p>
          <span className="font-sans text-[9px] text-[#F3EDE4]/50 mt-2 tracking-widest uppercase font-semibold">
            {medal.year} Champion
          </span>
        </div>

      </motion.div>

    </div>
  );
}

export default FounderBrand;
