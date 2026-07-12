"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<React.ComponentRef<typeof ReactLenis>>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger if not registered
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Sync ScrollTrigger updates with Lenis scrolling
    const lenisInstance = lenisRef.current?.lenis;
    if (lenisInstance) {
      lenisInstance.on("scroll", ScrollTrigger.update);
    }

    // Custom GSAP ticker function to drive Lenis
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    // Add Lenis to GSAP ticker
    gsap.ticker.add(update);

    // Ensure ScrollTrigger updates on window resize
    const handleRefresh = () => {
      lenisRef.current?.lenis?.resize();
    };
    ScrollTrigger.addEventListener("refresh", handleRefresh);

    return () => {
      gsap.ticker.remove(update);
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      if (lenisInstance) {
        lenisInstance.off("scroll", ScrollTrigger.update);
      }
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
        lerp: 0.1,
        infinite: false,
        syncTouch: false, // Optimised for mobile: allows native browser inertial momentum scroll
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
