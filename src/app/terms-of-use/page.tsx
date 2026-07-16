"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedRays from "@/components/ui/animated-rays";

export default function TermsOfUsePage() {
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
            Terms <span className="text-gym-gold">Of Use</span>
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
                  1. Website Usage Rules
                </h3>
                <p>
                  By accessing and using this website, you agree to comply with and be bound by these Terms of Use. You agree to use the site only for lawful purposes related to strength training registration, competition participation, and inquiries. You represent that you are at least 18 years of age or possess legal parental consent.
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-gym-gold uppercase tracking-wider mb-3">
                  2. Intellectual Property
                </h3>
                <p>
                  All content, branding, design system tokens, copy, layout graphics, custom SVGs, and brand assets displayed on this site are the exclusive property of Kourage Fitness. You may not reproduce, distribute, modify, or publish any website content without prior written authorization from Kourage Fitness management.
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-gym-gold uppercase tracking-wider mb-3">
                  3. Prohibited Activities
                </h3>
                <p>
                  When interacting with this website or our official WhatsApp channels, you are strictly prohibited from:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Submitting fraudulent payment transaction receipts or screenshots.</li>
                  <li>Using automated scripts, bots, or scrapers to index or modify website contents.</li>
                  <li>Engaging in harassment or abusive behavior towards other participants or our support staff.</li>
                  <li>Uploading posing videos containing inappropriate or copyrighted content.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-gym-gold uppercase tracking-wider mb-3">
                  4. Limitation of Liability
                </h3>
                <p>
                  Kourage Fitness shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your participation in the Kourage Master Physique competition, payment submission processing, or third-party communications (e.g. WhatsApp, Instagram). We do not guarantee uninterrupted website availability or absolute platform uptime.
                </p>
              </div>

              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-gym-gold uppercase tracking-wider mb-3">
                  5. Policy Updates
                </h3>
                <p>
                  Kourage Fitness reserves the right to update these Terms of Use at any time without prior notice. The updated version will be published here with the date of revisions. Your continued use of the website following changes constitutes acceptance of those updates.
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
            <Link href="/privacy-policy" className="hover:text-gym-gold transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-use" className="hover:text-gym-gold text-gym-gold transition-colors">
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
