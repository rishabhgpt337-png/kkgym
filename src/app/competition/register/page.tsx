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

export default function RegisterPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const upiId = "kouragefitness@upi";
  const entryFee = "₹999/-";
  const whatsappLink = "https://wa.me/918169455350?text=Hello%20Kourage%20Fitness%2C%20I%20have%20completed%20the%20UPI%20payment%20for%20the%20Kourage%20Master%20Physique%20competition.%20Attached%20is%20my%20transaction%20screenshot%20for%20verification.";

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              href="/competition/rules" 
              className="font-bebas text-lg uppercase tracking-widest text-gym-white/70 hover:text-gym-gold transition-colors duration-300"
            >
              &larr; View Official Rules
            </Link>
            <Link 
              href="/" 
              className="font-bebas text-lg uppercase tracking-widest text-gym-white/70 hover:text-gym-gold transition-colors duration-300"
            >
              Home
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
              href="/competition/rules"
              onClick={() => setMobileMenuOpen(false)}
              className="font-bebas text-3xl uppercase tracking-wider text-left text-gym-white hover:text-gym-gold transition-colors"
            >
              &larr; View Official Rules
            </Link>
            <hr className="border-border-subtle my-2" />
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-bebas text-3xl uppercase tracking-wider text-left text-gym-white hover:text-gym-gold transition-colors"
            >
              Home
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
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gym-gold mb-6 font-semibold">
            Kourage Master Physique
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gym-white tracking-wide uppercase leading-none max-w-4xl select-none">
            Scan <span className="text-gym-gold">&amp; Participate</span>
          </h1>
        </div>
      </section>

      {/* 3. PAYMENT PORTAL */}
      <section className="py-24 bg-bg-surface relative overflow-hidden flex-grow flex items-center justify-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
        
        <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            
            {/* Left side: QR Code & UPI details */}
            <div className="border-2 border-border-subtle bg-bg-primary/75 p-8 relative rounded-sm shadow-2xl hover:border-gym-gold/30 transition-colors duration-500 flex flex-col items-center justify-between text-center">
              {/* Corner Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gym-gold/25" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gym-gold/25" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gym-gold/25" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gym-gold/25" />

              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gym-gold font-bold mb-2 block">
                  REGISTRATION FEE
                </span>
                <div className="font-bebas text-5xl sm:text-6xl text-gym-white tracking-wider mb-6">
                  {entryFee}
                </div>
              </div>

              {/* Vector SVG Mock QR Code */}
              <div className="relative p-6 border-2 border-gym-gold/25 bg-gym-black/80 rounded-none w-64 h-64 flex items-center justify-center group-hover:border-gym-gold transition-colors duration-300">
                {/* QR Finder patterns in corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-2 border-gym-gold" />
                <div className="absolute top-3 right-3 w-4 h-4 border-2 border-gym-gold" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-2 border-gym-gold" />
                
                {/* Stylized QR dots representation */}
                <svg className="w-48 h-48 text-gym-gold/85" viewBox="0 0 100 100" fill="currentColor">
                  {/* Grid of stylized square dots representing QR contents */}
                  <rect x="10" y="10" width="15" height="15" fill="currentColor" />
                  <rect x="13" y="13" width="9" height="9" fill="black" />
                  <rect x="15" y="15" width="5" height="5" fill="currentColor" />

                  <rect x="75" y="10" width="15" height="15" fill="currentColor" />
                  <rect x="78" y="13" width="9" height="9" fill="black" />
                  <rect x="80" y="15" width="5" height="5" fill="currentColor" />

                  <rect x="10" y="75" width="15" height="15" fill="currentColor" />
                  <rect x="13" y="78" width="9" height="9" fill="black" />
                  <rect x="15" y="80" width="5" height="5" fill="currentColor" />

                  {/* Random simulated code blocks */}
                  <rect x="35" y="10" width="5" height="10" />
                  <rect x="45" y="15" width="10" height="5" />
                  <rect x="60" y="10" width="5" height="5" />
                  <rect x="35" y="25" width="15" height="5" />
                  <rect x="55" y="20" width="5" height="15" />
                  <rect x="65" y="25" width="10" height="5" />

                  <rect x="10" y="35" width="5" height="15" />
                  <rect x="20" y="45" width="10" height="5" />
                  <rect x="15" y="55" width="5" height="10" />
                  <rect x="30" y="45" width="15" height="15" />
                  <rect x="50" y="45" width="5" height="5" />
                  <rect x="60" y="40" width="15" height="5" />

                  <rect x="75" y="35" width="5" height="10" />
                  <rect x="85" y="45" width="10" height="5" />
                  <rect x="80" y="55" width="5" height="15" />

                  <rect x="35" y="65" width="10" height="5" />
                  <rect x="30" y="75" width="5" height="10" />
                  <rect x="45" y="80" width="15" height="5" />
                  <rect x="40" y="88" width="10" height="5" />
                  <rect x="60" y="70" width="5" height="15" />
                  <rect x="70" y="75" width="15" height="5" />
                  <rect x="65" y="85" width="5" height="10" />
                  <rect x="75" y="85" width="15" height="5" />
                  
                  {/* Central Shield Icon */}
                  <rect x="40" y="40" width="20" height="20" fill="black" />
                  <path d="M50,42 L57,45 L57,51 C57,55.5 54,58 50,59 C46,58 43,55.5 43,51 L43,45 L50,42 Z" fill="#EF9F27" />
                </svg>
                
                {/* Glowing Scanning line animation */}
                <div className="absolute left-6 right-6 h-[2px] bg-gym-gold/60 shadow-[0_0_10px_#EF9F27] animate-[pulse_2s_infinite] pointer-events-none" style={{ top: "50%" }} />
              </div>

              {/* UPI ID block */}
              <div className="mt-6 w-full">
                <p className="font-sans text-[10px] text-gym-white/40 uppercase tracking-widest mb-2">
                  OR USE OFFICIAL UPI ID
                </p>
                <div className="flex items-center justify-center gap-3 bg-bg-surface border border-border-subtle px-4 py-3 rounded-none">
                  <span className="font-sans text-sm font-semibold select-all text-gym-white">
                    {upiId}
                  </span>
                  <button
                    onClick={handleCopyUpi}
                    className="text-gym-gold hover:text-gym-white transition-colors text-xs font-sans uppercase font-bold tracking-widest"
                  >
                    {copied ? "COPIED!" : "COPY"}
                  </button>
                </div>
              </div>

            </div>

            {/* Right side: Instructions & WhatsApp CTA */}
            <div className="flex flex-col justify-between p-2">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-gym-gold font-semibold mb-2 block">
                    PAYMENT &amp; VERIFICATION
                  </span>
                  <h3 className="font-bebas text-4xl uppercase tracking-wider text-gym-white">
                    Finalize Your Registration
                  </h3>
                </div>

                <p className="font-inter text-sm text-gym-white/70 leading-relaxed">
                  Scan the UPI QR Code using GPay, PhonePe, Paytm, BHIM, or any banking app. Once paid, send us the transaction screenshot to complete verification.
                </p>

                {/* Vertical Step Guide */}
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-4">
                    <span className="w-6 h-6 rounded-full border border-gym-gold/45 text-gym-gold font-bebas text-xs flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="font-bebas text-sm uppercase tracking-wider text-gym-white leading-none mb-1">
                        Registration Payment
                      </h4>
                      <p className="font-inter text-xs text-gym-white/50 leading-normal">
                        Scan the QR Code to complete the registration fee payment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="w-6 h-6 rounded-full border border-gym-gold/45 text-gym-gold font-bebas text-xs flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div>
                      <h4 className="font-bebas text-sm uppercase tracking-wider text-gym-white leading-none mb-1">
                        Payment Verification
                      </h4>
                      <p className="font-inter text-xs text-gym-white/50 leading-normal">
                        Send payment screenshot on WhatsApp. This is only used to verify payment, NOT for entry submission.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="w-6 h-6 rounded-full border border-gym-gold/45 text-gym-gold font-bebas text-xs flex items-center justify-center shrink-0">
                      5
                    </span>
                    <div>
                      <h4 className="font-bebas text-sm uppercase tracking-wider text-gym-white leading-none mb-1">
                        Reel Submission
                      </h4>
                      <p className="font-inter text-xs text-gym-white/50 leading-normal">
                        After verification, Kourage team will contact you on WhatsApp to request your Instagram Reel upload and link.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="w-6 h-6 rounded-full border border-gym-gold/45 text-gym-gold font-bebas text-xs flex items-center justify-center shrink-0">
                      6
                    </span>
                    <div>
                      <h4 className="font-bebas text-sm uppercase tracking-wider text-gym-white leading-none mb-1">
                        Selection
                      </h4>
                      <p className="font-inter text-xs text-gym-white/50 leading-normal">
                        The judging panel reviews all verified entries. Reel submission does not guarantee selection.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="w-6 h-6 rounded-full border border-gym-gold/45 text-gym-gold font-bebas text-xs flex items-center justify-center shrink-0">
                      7
                    </span>
                    <div>
                      <h4 className="font-bebas text-sm uppercase tracking-wider text-gym-white leading-none mb-1">
                        Refund Policy
                      </h4>
                      <p className="font-inter text-xs text-gym-white/50 leading-normal">
                        If a participant is not selected, the registration amount is fully refunded on WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <div className="mt-10">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest py-4 px-8 hover:bg-transparent hover:text-gym-gold transition-all duration-300 w-full text-center flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_15px_rgba(239,159,39,0.25)] hover:shadow-none"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Screenshot on WhatsApp &rarr;
                </a>
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
