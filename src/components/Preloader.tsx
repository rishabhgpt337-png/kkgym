"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep the preloader visible for 3.5 seconds, then trigger fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]"
        >
          {/* 
            Passing high-energy fiery orange/red gradients to the Spotlight 
            to fit the Gym environment instead of the default soft blue.
          */}
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(15, 100%, 55%, .15) 0, hsla(15, 100%, 45%, .05) 50%, hsla(15, 100%, 35%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(15, 100%, 60%, .1) 0, hsla(15, 100%, 45%, .04) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(15, 100%, 50%, .08) 0, hsla(15, 100%, 40%, .04) 80%, transparent 100%)"
          />
          
          <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-5xl font-extrabold uppercase tracking-widest text-transparent md:text-8xl"
            >
              Forge Your <br /> Legacy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mx-auto mt-6 max-w-lg text-center text-base font-medium text-neutral-400 uppercase tracking-widest"
            >
              Push past your limits
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
