"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger in browser context
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardData {
  num: string;
  tag: string;
  title: string;
  description: string;
  videoUrl: string;
}

// 6 high-reliability, persistent Mixkit gym loops that never expire
const cards: CardData[] = [
  {
    num: "01",
    tag: "STATE-OF-THE-ART",
    title: "Latest Equipment",
    description: "State-of-the-art fitness equipment for optimal performance and structural safety in every movement.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dumbbells-lying-on-the-gym-floor-41619-large.mp4"
  },
  {
    num: "02",
    tag: "EXPERT COACHES",
    title: "Certified Trainers",
    description: "Expert guidance from certified fitness professionals with years of coaching and biomechanics mastery.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-training-with-battle-ropes-in-gym-41623-large.mp4"
  },
  {
    num: "03",
    tag: "CUSTOM FIT",
    title: "Personalized Plans",
    description: "Custom workout programs tailored to your goals, biometrics, and physical capabilities.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-weightlifter-preparing-for-training-41621-large.mp4"
  },
  {
    num: "04",
    tag: "HYGIENIC",
    title: "Clean & Safe",
    description: "Hygienic environment with regular sanitization, ventilation, and strict cleanliness codes.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-gym-member-wiping-sweat-from-face-41624-large.mp4"
  },
  {
    num: "05",
    tag: "FAT LOSS",
    title: "Weight Loss Programs",
    description: "Scientifically designed fat loss transformations focused on maintaining active muscle volume.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-running-on-treadmill-in-the-gym-41620-large.mp4"
  },
  {
    num: "06",
    tag: "PERFORMANCE",
    title: "Strength & Conditioning",
    description: "Build structural muscle, develop explosive athletic performance, and improve physical capacity.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-box-jumps-at-the-gym-41622-large.mp4"
  }
];

// Helper component to handle programmatic HTML5 play/pause, source loading, and browser autoplay policies
function VideoPlayer({ src, isActive }: { src: string; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force strict browser autoplay capabilities (must be muted)
    video.muted = true;
    video.defaultMuted = true;

    if (isActive) {
      // Force source reloading in browsers for dynamic source tags
      video.load();
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Gym background video autoplay blocked: ", err);
        });
      }
    } else {
      video.pause();
    }
  }, [isActive, src]);

  return (
    <video
      ref={videoRef}
      loop
      playsInline
      preload="auto"
      className={`absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-opacity duration-500 ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function WhyChooseUsScroll() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1. Check prefers-reduced-motion media settings
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionListener);

    // 2. Check layout dimensions for mobile responsiveness
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", motionListener);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const trigger = triggerRef.current;
    const pin = pinRef.current;
    if (!trigger || !pin) return;

    // Normalizes scroll events to prevent touch momentum jank on iOS devices
    ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: pin,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate active index cleanly bounded [0, 5]
          const index = Math.min(Math.floor(progress * cards.length), cards.length - 1);
          setActiveIndex(index);
        }
      });
    }, triggerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.normalizeScroll(false);
    };
  }, [prefersReducedMotion]);

  // FALLBACK: Static Grid Layout if user prefers reduced motion (No Numerals)
  if (prefersReducedMotion) {
    return (
      <section id="why-us" className="py-24 md:py-32 bg-gym-black border-b border-gym-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
              WHY CHOOSE US
            </span>
            <h2 className="font-bebas text-5xl md:text-6xl text-gym-white uppercase tracking-wider mt-2">
              Excellence in Every Detail
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.num}
                className="border-2 border-gym-white/10 hover:border-gym-gold bg-gym-black p-8 flex flex-col justify-between h-72 select-none group"
              >
                <div className="flex justify-end items-start mb-6">
                  <span className="border border-gym-gold px-2.5 py-0.5 font-mono text-[9px] uppercase text-gym-gold tracking-widest">
                    {card.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-bebas text-2xl md:text-3xl text-gym-white uppercase tracking-wider mb-2 group-hover:text-gym-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-inter text-sm text-gym-white/70 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <a
                    href="https://wa.me/918169455350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gym-gold font-mono text-[10px] uppercase tracking-widest font-semibold"
                  >
                    ENQUIRE DISCIPLINE &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ACTIVE INTERACTION: Scroll-Locked Pinned Viewport Container
  // Scroll height is 600vh on desktop, 480vh (80vh * 6) on mobile for smooth thumb scrolling
  const scrollHeightClass = isMobile ? "h-[480vh]" : "h-[600vh]";

  return (
    <div ref={triggerRef} className={`w-full relative bg-gym-black border-b border-gym-white/10 ${scrollHeightClass}`}>
      <div ref={pinRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        
        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-6 w-full h-full relative z-20 flex flex-col justify-between py-12 md:py-24">
          
          {/* Header (Top-Left Fixed Panel) */}
          <div className="w-full">
            <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
              WHY CHOOSE US
            </span>
            <h2 className="font-bebas text-5xl md:text-7xl text-gym-white uppercase tracking-wider mt-2 leading-none">
              Excellence in Every Detail
            </h2>
          </div>

          {/* Centered Active Card Container */}
          <div className="flex-grow flex items-center justify-center w-full my-8">
            {/* The active card holds the video player as its background element */}
            <div className="w-full max-w-[92%] sm:max-w-3xl mx-auto">
              <div 
                className="border-2 border-gym-gold bg-gym-black/90 p-6 sm:p-12 md:p-16 min-h-[55vh] md:min-h-[60vh] relative overflow-hidden flex flex-col justify-center items-center text-center group"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
              >
                {/* Background videos rendering absolutely inside the active card boundary */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  {cards.map((card, i) => {
                    // Lazy load strategy: only render video if within activeRange index +/- 1
                    const isLoaded = Math.abs(i - activeIndex) <= 1;
                    if (!isLoaded) return null;

                    return (
                      <VideoPlayer
                        key={card.num}
                        src={card.videoUrl}
                        isActive={i === activeIndex}
                      />
                    );
                  })}
                  {/* Scrim Overlay sitting on top of video, below the text (rgba(26,26,24,0.55) i.e. 55% opacity) */}
                  <div className="absolute inset-0 bg-[#1A1A18]/55 z-15" />
                </div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 grid-bg-overlay opacity-30 z-10 pointer-events-none" />

                {/* Card Text Content (z-20 centered over the video scrim) */}
                <div className="relative z-20 w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center text-center"
                    >
                      {/* Badge */}
                      <span className="border border-gym-gold px-3 py-1 font-mono text-[9px] sm:text-[10px] uppercase text-gym-gold tracking-widest mb-6 select-none">
                        {cards[activeIndex].tag}
                      </span>

                      {/* Title */}
                      <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-gym-white uppercase tracking-wider mb-4 leading-none">
                        {cards[activeIndex].title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-inter text-xs sm:text-sm md:text-base leading-relaxed text-gym-white/90 max-w-md mx-auto">
                        {cards[activeIndex].description}
                      </p>

                      {/* CTA */}
                      <a
                        href="https://wa.me/918169455350"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 text-gym-gold font-mono text-xs uppercase tracking-widest font-semibold hover:translate-x-2 transition-transform duration-300"
                      >
                        ENQUIRE DISCIPLINE &rarr;
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracker (Side/Bottom Indicator Bar) */}
          <div className="w-full flex justify-between items-center md:items-end">
            <span className="hidden md:inline font-mono text-xs text-gym-white/40 uppercase tracking-widest">
              Scroll to explore indicators
            </span>

            {/* Dash indicators (Dashes only, no numeric labels) */}
            <div className="flex gap-4 md:gap-6 items-center">
              {cards.map((card, i) => (
                <div key={card.num} className="flex items-center gap-2 cursor-pointer" onClick={() => {
                  const trigger = triggerRef.current;
                  if (!trigger) return;
                  const rect = trigger.getBoundingClientRect();
                  const segmentHeight = rect.height / cards.length;
                  const targetScroll = window.scrollY + rect.top + (i * segmentHeight) + 10;
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }}>
                  {/* Ticks/Dashes only */}
                  <div className="h-[3px] w-6 md:w-10 bg-gym-white/10 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gym-gold transition-all duration-300"
                      style={{
                        width: i <= activeIndex ? "100%" : "0%"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default WhyChooseUsScroll;
