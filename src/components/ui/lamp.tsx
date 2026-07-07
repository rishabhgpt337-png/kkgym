"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div
      className={cn(
        "relative flex min-h-[90dvh] md:min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-gym-black w-full z-0 pt-24 md:pt-32",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.3, width: isMobile ? "8rem" : "15rem" }}
          animate={{ opacity: 1, width: isMobile ? "16rem" : "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-gym-gold via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          {/* Muted overlays matching our brand background #2A0D12 */}
          <div className="absolute w-[100%] left-0 bg-gym-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-gym-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0.3, width: isMobile ? "8rem" : "15rem" }}
          animate={{ opacity: 1, width: isMobile ? "16rem" : "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-gym-gold text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-gym-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-gym-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-gym-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        
        {/* Glow ball layers */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-gym-gold opacity-30 blur-3xl"></div>
        
        <motion.div
          initial={{ width: isMobile ? "6rem" : "8rem" }}
          animate={{ width: isMobile ? "12rem" : "16rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-gym-gold opacity-50 blur-2xl"
        ></motion.div>
        
        <motion.div
          initial={{ width: isMobile ? "12rem" : "15rem" }}
          animate={{ width: isMobile ? "16rem" : "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-gym-gold"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-gym-black"></div>
      </div>

      {/* Hero content container nested directly below the lamp */}
      <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5 w-full">
        {children}
      </div>
    </div>
  );
};

export default LampContainer;
