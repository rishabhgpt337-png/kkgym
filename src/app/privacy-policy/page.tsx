"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedRays from "@/components/ui/animated-rays";

export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gym-black font-sans text-gym-white flex flex-col relative select-none">
      {/* 1. NAV */}
      <header className="fixed top-0 left-0 w-full z-40 border-b border-gym-gold/15 bg-gym-black/95 backdrop-blur-md py-2 h-20 sm:h-26 lg:h-32 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center justify-start group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.png" 
              alt="Kourage Fitness Logo" 
              className="h-16 sm:h-22 lg:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="font-bebas text-lg uppercase tracking-widest text-gym-white/70 hover:text-gym-gold transition-colors duration-300"
            >
              &larr; Back to Home
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gym-white hover:text-gym-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-bg-primary border-b border-gym-gold/15 px-6 py-10 flex flex-col gap-6 md:hidden z-30 shadow-[0_10px_20px_rgba(239,159,39,0.03)]">
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-bebas text-3xl uppercase tracking-wider text-left text-gym-white hover:text-gym-gold transition-colors"
            >
              &larr; Back to Home
            </Link>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section className="relative w-full min-h-[30vh] md:min-h-[35vh] flex items-center overflow-hidden border-b-2 border-gym-white/10 bg-gym-black pt-32 sm:pt-40">
        <div className="absolute inset-0 z-0">
          <AnimatedRays className="w-full h-full" />
        </div>
        
        {/* Overlay grid details */}
        <div className="absolute inset-0 z-0 grid-bg-overlay opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-12 md:py-16 flex flex-col items-center text-center">
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gym-gold mb-4 font-semibold">
            LEGAL INFORMATION
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gym-white tracking-wide uppercase leading-none max-w-4xl select-none">
            Privacy <span className="text-gym-gold">Policy</span>
          </h1>
        </div>
      </section>

      {/* 3. CONTENT */}
      <section className="py-24 bg-bg-surface relative overflow-hidden flex-grow">
        <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10 font-inter text-sm sm:text-base text-gym-white/70 leading-relaxed">
          <div className="border border-border-subtle bg-bg-primary/65 p-8 sm:p-12 relative rounded-sm shadow-xl hover:border-gym-gold/30 transition-all duration-300">
            {/* Corner Brackets */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gym-gold/25" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gym-gold/25" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gym-gold/25" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gym-gold/25" />

            <div className="flex flex-col gap-8">
              
              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-gym-gold uppercase tracking-wider mb-3">
                  1. Information We Collect
                </h3>
                <p>
                  Kourage Fitness collects personal details necessary to facilitate competition registration and inquiries. This includes your full name, email address, phone number, and geographic location. When registering for the Kourage Master Physique competition, we also collect the payment transaction receipt screenshot sent by you via WhatsApp.
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-gym-gold uppercase tracking-wider mb-3">
                  2. How We Use Your Information
                </h3>
                <p>
                  We use your personal data strictly to organize and coordinate the digital physique competition. Specifically, payment screenshots are used **only for payment verification purposes** to validate your registration status. Once verified, the screenshot is not stored or shared for any other business activity. The Instagram Reel posing video link you submit is processed solely for evaluation by our professional judging panel.
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-gym-gold uppercase tracking-wider mb-3">
                  3. We Never Sell User Data
                </h3>
                <p>
                  Your privacy is paramount. Kourage Fitness maintains a strict policy: **we never sell, rent, trade, or distribute your personal information or transaction screenshot data to third-party advertisers or marketers.** All collected information stays confidential within Kourage Fitness and is used solely for the competition flow.
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-gym-gold uppercase tracking-wider mb-3">
                  4. Data Security &amp; Protection Measures
                </h3>
                <p>
                  We implement reasonable administrative, technical, and physical security measures designed to protect your personal information against unauthorized access, loss, misuse, or alteration. Access to your transaction data is restricted only to authorized administrative staff members responsible for registration verification.
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-gym-gold uppercase tracking-wider mb-3">
                  5. Contacting Us
                </h3>
                <p>
                  If you have any questions or concerns regarding our privacy practices or the handling of your competition data, please contact Kourage Fitness headquarters directly through our official WhatsApp support channel.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-bg-primary border-t border-border-subtle py-12 text-gym-white/50 text-xs font-sans relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Kourage Fitness. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6 text-gym-white/40">
            <Link href="/privacy-policy" className="hover:text-gym-gold text-gym-gold transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-use" className="hover:text-gym-gold transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-gym-gold transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
