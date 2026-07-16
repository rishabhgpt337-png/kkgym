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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    category: "Mens Physique",
    videoLink: "",
    agreeToRules: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location.trim()) newErrors.location = "City and State are required";
    
    if (!formData.videoLink.trim()) {
      newErrors.videoLink = "Posing video link is required";
    } else if (!/^(https?:\/\/)?(www\.)?(drive\.google\.com|youtube\.com|youtu\.be)\/.+$/i.test(formData.videoLink)) {
      newErrors.videoLink = "Link must be a Google Drive or YouTube URL";
    }

    if (!formData.agreeToRules) {
      newErrors.agreeToRules = "You must agree to the official rules";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
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
      <section className="relative w-full min-h-[35vh] md:min-h-[40vh] flex items-center overflow-hidden border-b-2 border-gym-white/10 bg-gym-black pt-32 sm:pt-40">
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
            Official <span className="text-gym-gold">Registration</span>
          </h1>
        </div>
      </section>

      {/* 3. REGISTRATION FORM */}
      <section className="py-24 bg-bg-surface relative overflow-hidden flex-grow flex items-center justify-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
        
        <div className="max-w-xl w-full mx-auto px-6 relative z-10">
          
          <div className="border-2 border-border-subtle bg-bg-primary/75 p-8 sm:p-12 relative rounded-sm shadow-2xl hover:border-gym-gold/50 transition-colors duration-500">
            {/* Corner Brackets */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gym-gold/25" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gym-gold/25" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gym-gold/25" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gym-gold/25" />

            {submitted ? (
              /* Success State */
              <div className="text-center py-8 flex flex-col items-center justify-center animate-fade-in">
                <div className="w-20 h-20 bg-gym-gold/10 border-2 border-gym-gold flex items-center justify-center rounded-full mb-6 text-gym-gold animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-bebas text-4xl uppercase tracking-wider text-gym-gold mb-4">
                  Entry Received!
                </h3>
                <p className="font-inter text-sm text-gym-white/70 leading-relaxed mb-8">
                  Thank you for registering for the **Kourage Master Physique Competition**. Your video submission has been queued. Our professional judging panel will review your physique and notify you of the scores and rankings via email.
                </p>
                <Link
                  href="/"
                  className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest px-10 py-3 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 w-full text-center block"
                >
                  Back to Homepage
                </Link>
              </div>
            ) : (
              /* Registration Form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="font-bebas text-3xl uppercase tracking-wider text-gym-white mb-2">
                    Submit Your Entry
                  </h3>
                  <p className="font-inter text-xs text-gym-white/50">
                    All fields are required. Ensure your video link is accessible before submitting.
                  </p>
                </div>

                <hr className="border-border-subtle" />

                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="font-sans text-xs uppercase tracking-widest text-gym-white/70 font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`bg-bg-surface border ${
                      errors.fullName ? "border-red-500" : "border-border-subtle"
                    } text-gym-white rounded-none px-4 py-3 text-sm focus:outline-none focus:border-gym-gold transition-colors duration-200 w-full`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <span className="font-sans text-[10px] text-red-400 uppercase tracking-widest mt-1">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-gym-white/70 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-bg-surface border ${
                      errors.email ? "border-red-500" : "border-border-subtle"
                    } text-gym-white rounded-none px-4 py-3 text-sm focus:outline-none focus:border-gym-gold transition-colors duration-200 w-full`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <span className="font-sans text-[10px] text-red-400 uppercase tracking-widest mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-sans text-xs uppercase tracking-widest text-gym-white/70 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`bg-bg-surface border ${
                      errors.phone ? "border-red-500" : "border-border-subtle"
                    } text-gym-white rounded-none px-4 py-3 text-sm focus:outline-none focus:border-gym-gold transition-colors duration-200 w-full`}
                    placeholder="e.g. +91 9876543210"
                  />
                  {errors.phone && (
                    <span className="font-sans text-[10px] text-red-400 uppercase tracking-widest mt-1">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Location */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="font-sans text-xs uppercase tracking-widest text-gym-white/70 font-semibold">
                    City &amp; State
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`bg-bg-surface border ${
                      errors.location ? "border-red-500" : "border-border-subtle"
                    } text-gym-white rounded-none px-4 py-3 text-sm focus:outline-none focus:border-gym-gold transition-colors duration-200 w-full`}
                    placeholder="e.g. Mumbai, Maharashtra"
                  />
                  {errors.location && (
                    <span className="font-sans text-[10px] text-red-400 uppercase tracking-widest mt-1">
                      {errors.location}
                    </span>
                  )}
                </div>

                {/* Category Selection */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="font-sans text-xs uppercase tracking-widest text-gym-white/70 font-semibold">
                    Competition Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="bg-bg-surface border border-border-subtle text-gym-white rounded-none px-4 py-3 text-sm focus:outline-none focus:border-gym-gold transition-colors duration-200 w-full appearance-none cursor-pointer"
                    >
                      <option value="Mens Physique">Men&apos;s Physique</option>
                      <option value="Classic Physique">Classic Physique</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gym-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                </div>

                {/* Video Link */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="videoLink" className="font-sans text-xs uppercase tracking-widest text-gym-white/70 font-semibold">
                    Posing Video Link (Google Drive / YouTube)
                  </label>
                  <input
                    type="url"
                    id="videoLink"
                    name="videoLink"
                    value={formData.videoLink}
                    onChange={handleChange}
                    className={`bg-bg-surface border ${
                      errors.videoLink ? "border-red-500" : "border-border-subtle"
                    } text-gym-white rounded-none px-4 py-3 text-sm focus:outline-none focus:border-gym-gold transition-colors duration-200 w-full`}
                    placeholder="https://drive.google.com/... or https://youtube.com/..."
                  />
                  <span className="font-sans text-[9px] text-gym-white/40 uppercase tracking-wider">
                    Make sure share settings are set to public/unlisted.
                  </span>
                  {errors.videoLink && (
                    <span className="font-sans text-[10px] text-red-400 uppercase tracking-widest mt-1">
                      {errors.videoLink}
                    </span>
                  )}
                </div>

                {/* Agree to Rules */}
                <div className="flex flex-col gap-1">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="agreeToRules"
                      checked={formData.agreeToRules}
                      onChange={handleChange}
                      className="mt-1 accent-gym-gold cursor-pointer"
                    />
                    <span className="font-sans text-xs text-gym-white/70 leading-relaxed">
                      I agree to the official competition rules and understand that any unedited video length edits, visual modifications, or filter additions will result in automatic disqualification.
                    </span>
                  </label>
                  {errors.agreeToRules && (
                    <span className="font-sans text-[10px] text-red-400 uppercase tracking-widest mt-1">
                      {errors.agreeToRules}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest py-4 hover:bg-transparent hover:text-gym-gold transition-all duration-300 w-full text-center flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? "Processing Submission..." : "Submit Registration Entry &rarr;"}
                </button>
              </form>
            )}
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
