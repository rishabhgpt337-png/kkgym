"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedRays from "@/components/ui/animated-rays";

const InstagramLogo = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Phone = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function RulesPage() {
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
            <Link
              href="/competition/register"
              className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-sm uppercase tracking-widest px-6 py-2.5 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,159,39,0.25)]"
            >
              Register Now
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
            <hr className="border-border-subtle my-2" />
            <Link
              href="/competition/register"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest w-full py-4 text-center block"
            >
              Register / Submit Entry
            </Link>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section className="relative w-full min-h-[40vh] md:min-h-[50vh] flex items-center overflow-hidden border-b-2 border-gym-white/10 bg-gym-black pt-32 sm:pt-40">
        <div className="absolute inset-0 z-0">
          <AnimatedRays className="w-full h-full" />
        </div>
        
        {/* Overlay grid details */}
        <div className="absolute inset-0 z-0 grid-bg-overlay opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-16 md:py-24 flex flex-col items-center text-center">
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gym-gold mb-6 font-semibold">
            Kourage Master Physique
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gym-white tracking-wide uppercase leading-none max-w-4xl select-none">
            Official Rules <span className="text-gym-gold">&amp; Guidelines</span>
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-gym-white/70 max-w-2xl mt-6 leading-relaxed">
            Please read the official requirements carefully before submitting your entry. Adhering to these rules is mandatory for professional judging.
          </p>
        </div>
      </section>

      {/* 3. RULES DETAILS */}
      <section className="py-24 bg-bg-surface relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col gap-16">
            
            {/* Rules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Card 1 */}
              <div className="border border-border-subtle bg-bg-primary/50 p-8 relative rounded-sm group hover:border-gym-gold transition-colors duration-300">
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                
                <span className="font-bebas text-5xl text-gym-gold/35 block mb-4">01</span>
                <h3 className="font-bebas text-2xl uppercase tracking-wider text-gym-white mb-3">Eligibility</h3>
                <p className="font-inter text-sm text-gym-white/70 leading-relaxed">
                  Open to all amateur, semi-professional, and natural bodybuilding athletes residing in India. Competitors must be at least 18 years of age at the time of entry.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-border-subtle bg-bg-primary/50 p-8 relative rounded-sm group hover:border-gym-gold transition-colors duration-300">
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />

                <span className="font-bebas text-5xl text-gym-gold/35 block mb-4">02</span>
                <h3 className="font-bebas text-2xl uppercase tracking-wider text-gym-white mb-3">Video Format</h3>
                <p className="font-inter text-sm text-gym-white/70 leading-relaxed">
                  Entries must be a single, continuous 60-second video. No edits, cuts, filters, speed adjustments, or background effects are permitted. Submit a raw, unedited recording.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-border-subtle bg-bg-primary/50 p-8 relative rounded-sm group hover:border-gym-gold transition-colors duration-300">
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />

                <span className="font-bebas text-5xl text-gym-gold/35 block mb-4">03</span>
                <h3 className="font-bebas text-2xl uppercase tracking-wider text-gym-white mb-3">Mandatory Poses</h3>
                <p className="font-inter text-sm text-gym-white/70 leading-relaxed">
                  Your video sequence must showcase the following poses in order: Front Double Biceps, Side Chest (either side), Back Double Biceps, Abdominals &amp; Thighs, and your Favorite Classic Pose.
                </p>
              </div>

              {/* Card 4 */}
              <div className="border border-border-subtle bg-bg-primary/50 p-8 relative rounded-sm group hover:border-gym-gold transition-colors duration-300">
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />

                <span className="font-bebas text-5xl text-gym-gold/35 block mb-4">04</span>
                <h3 className="font-bebas text-2xl uppercase tracking-wider text-gym-white mb-3">Lighting &amp; Attire</h3>
                <p className="font-inter text-sm text-gym-white/70 leading-relaxed">
                  Video must be shot in bright, clear lighting against a neutral background. Athletes must wear proper athletic posing trunks/shorts. Loose clothing will result in disqualification.
                </p>
              </div>

              {/* Card 5 */}
              <div className="border border-border-subtle bg-bg-primary/50 p-8 relative rounded-sm group hover:border-gym-gold transition-colors duration-300">
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />

                <span className="font-bebas text-5xl text-gym-gold/35 block mb-4">05</span>
                <h3 className="font-bebas text-2xl uppercase tracking-wider text-gym-white mb-3">Judging Criteria</h3>
                <p className="font-inter text-sm text-gym-white/70 leading-relaxed">
                  Judges will score based on an objective 100-point breakdown: Symmetry (25%), Muscularity (25%), Conditioning (25%), and Presentation/Posing transitions (25%). Decisions are final.
                </p>
              </div>

              {/* Card 6 */}
              <div className="border border-border-subtle bg-bg-primary/50 p-8 relative rounded-sm group hover:border-gym-gold transition-colors duration-300">
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-gym-gold/30 group-hover:border-gym-gold transition-colors" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gym-gold/30 group-hover:border-gym-gold transition-colors" />

                <span className="font-bebas text-5xl text-gym-gold/35 block mb-4">06</span>
                <h3 className="font-bebas text-2xl uppercase tracking-wider text-gym-white mb-3">Submission Details</h3>
                <p className="font-inter text-sm text-gym-white/70 leading-relaxed">
                  Upload your video to Google Drive (with access set to &quot;Anyone with the link can view&quot;) or YouTube (Public/Unlisted) and paste the URL into the official registration form.
                </p>
              </div>

            </div>

            {/* CTA SECTION */}
            <div className="border-2 border-gym-gold bg-bg-primary relative p-12 text-center overflow-hidden group mt-8">
              <div className="absolute inset-0 grid-bg-overlay opacity-20 pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="font-bebas text-4xl sm:text-5xl uppercase tracking-wider text-gym-gold mb-4">
                  READY TO TEST YOUR LIMITS?
                </h3>
                <p className="font-inter text-sm md:text-base text-gym-white/80 mb-8 leading-relaxed">
                  Submit your entry and put your hard work to the test against the best physique athletes in the country. Show the judges what Kourage is all about.
                </p>
                <Link
                  href="/competition/register"
                  className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest px-10 py-4 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 inline-block w-full sm:w-auto"
                >
                  Proceed to Register &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-bg-primary border-t border-border-subtle py-16 text-gym-white/50 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.png" 
                alt="Kourage Fitness Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-bebas text-2xl md:text-3xl tracking-widest text-gym-white group-hover:text-gym-gold transition-colors duration-300">
                KOURAGE FITNESS<span className="text-gym-gold">.</span>
              </span>
            </Link>
            <p className="font-inter text-xs text-gym-white/40 leading-relaxed max-w-xs">
              Transform Your Body. Elevate Your Mind.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gym-gold text-lg">★★★★★</span>
              <span className="font-sans text-xs text-gym-white/40">4.9 (40 Reviews)</span>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gym-white/80 mb-4">Contact Channels</h4>
            <ul className="space-y-3 font-sans text-xs">
              <li>
                <a href="tel:+918169455350" className="hover:text-gym-gold transition-colors flex items-center gap-2">
                  <Phone size={14} className="text-gym-gold" />
                  +91 81694 55350
                </a>
              </li>
              <li>
                <a href="https://wa.me/918169455350" target="_blank" rel="noopener noreferrer" className="hover:text-gym-gold transition-colors flex items-center gap-2">
                  <span className="text-gym-gold font-bold">WA</span>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kouragefitness_official/" target="_blank" rel="noopener noreferrer" className="hover:text-gym-gold transition-colors flex items-center gap-2">
                  <InstagramLogo size={14} className="text-gym-gold" />
                  @kouragefitness_official
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gym-white/80 mb-4">Address &amp; Operating Hours</h4>
            <p className="font-inter text-xs text-gym-white/40 leading-relaxed">
              2nd Floor, B Wing, Bhagyashree Apartment,<br />
              Dr Ambedkar Road, Mulund West, Mumbai 400080<br />
              Opens 5:30 AM Daily
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-border-subtle mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
          <p>© 2026 Kourage Fitness. All rights reserved.</p>
          <p className="text-gym-white/20">Excellence in every detail.</p>
        </div>
      </footer>
    </div>
  );
}
