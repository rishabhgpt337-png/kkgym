"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronRight, Award, Flame } from "lucide-react";

// Custom SVG Icons to bypass lucide barrel-optimization SWC bugs
const InstagramLogo = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function PhysiqueChallenge() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    instagram: "",
    reelLink: "",
    category: "men",
    age: "",
    weight: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.instagram) {
      alert("Please fill in your Name, Phone Number, and Instagram handle.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API registration submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="challenge" className="scroll-mt-24 md:scroll-mt-28 py-24 md:py-32 bg-bg-primary border-b border-border-subtle relative select-none">
      <div className="absolute inset-0 grid-bg-overlay opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-gym-gold">
            Aesthetics Competition
          </span>
          <h2 className="font-bebas text-5xl md:text-7xl text-gym-white uppercase tracking-wider mt-2">
            Kourage Physique Challenge
          </h2>
          <p className="font-inter text-base md:text-lg text-gym-white/70 max-w-2xl mx-auto mt-4 leading-relaxed">
            Mulund&apos;s ultimate aesthetics competition. Showcase your hard work, stand on the grand posing stage, and claim your victory.
          </p>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Flow & Prizes */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bebas text-3xl text-gym-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <Flame className="text-gym-gold" /> The Competition Flow
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Record Your Posing/Workout Reel",
                    desc: "Shoot a high-quality posing, physique display, or workout reel inside Kourage Fitness Mulund West facility.",
                  },
                  {
                    step: "02",
                    title: "Collab & Tag",
                    desc: "Publish your reel on Instagram, tag @kouragefitness_official and invite us as a collaborator.",
                  },
                  {
                    step: "03",
                    title: "Submit Registration",
                    desc: "Fill out the aesthetic slot registration form on this section to secure your audit position.",
                  },
                  {
                    step: "04",
                    title: "Top 20 Shortlisting",
                    desc: "Head Coach Jagesh Pitaji Dait and guest panel judges will review submissions to select the Top 20 finalists.",
                  },
                  {
                    step: "05",
                    title: "Live Final Posing Show",
                    desc: "Finalists will step onto the grandposing stage at the Kourage West facility for live posing and audience votes.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-mono text-xs text-gym-gold font-bold bg-bg-surface border border-border-subtle h-8 w-8 shrink-0 flex items-center justify-center">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bebas text-lg text-gym-white uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="font-inter text-xs text-gym-white/60 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PRIZES PANEL */}
            <div className="border border-gym-gold bg-bg-surface p-6 mt-10 relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 grid-bg-overlay opacity-25 pointer-events-none" />
              <h4 className="font-bebas text-xl text-gym-gold uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award size={18} /> Elite Category Rewards
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-border-subtle bg-bg-primary/50">
                  <span className="font-mono text-[9px] uppercase text-gym-white/40 tracking-wider">Men&apos;s Physique</span>
                  <div className="font-bebas text-lg text-gym-white uppercase tracking-wide mt-2">
                    Top 3 Champions
                  </div>
                  <p className="font-inter text-[10px] text-gym-white/60 leading-normal mt-1">
                    Cash Prizes • Premium Trophies • Gold Sponsor Hampers
                  </p>
                </div>
                <div className="p-4 border border-border-subtle bg-bg-primary/50">
                  <span className="font-mono text-[9px] uppercase text-gym-white/40 tracking-wider">Women&apos;s Physique</span>
                  <div className="font-bebas text-lg text-gym-white uppercase tracking-wide mt-2">
                    Top 3 Champions
                  </div>
                  <p className="font-inter text-[10px] text-gym-white/60 leading-normal mt-1">
                    Cash Prizes • Premium Trophies • Gold Sponsor Hampers
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Submission Form Card */}
          <div className="lg:col-span-6">
            <div className="border-2 border-border-subtle bg-bg-surface p-8 md:p-10 relative overflow-hidden h-full flex flex-col justify-center shadow-2xl">
              <div className="absolute inset-0 grid-bg-overlay opacity-20 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 w-full"
                  >
                    <h3 className="font-bebas text-3xl text-gym-white uppercase tracking-wider mb-6">
                      Aesthetic Registration
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-gym-white/45 tracking-widest mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-sm text-gym-white placeholder-gym-white/30 focus:border-gym-gold focus:outline-none transition-colors"
                          placeholder="e.g. Rahul Sharma"
                        />
                      </div>

                      {/* Phone & Instagram */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gym-white/45 tracking-widest mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-sm text-gym-white placeholder-gym-white/30 focus:border-gym-gold focus:outline-none transition-colors"
                            placeholder="e.g. +91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gym-white/45 tracking-widest mb-1.5">
                            Instagram Handle *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="instagram"
                              required
                              value={formData.instagram}
                              onChange={handleInputChange}
                              className="w-full bg-bg-primary border border-border-subtle pl-10 pr-4 py-3 text-sm text-gym-white placeholder-gym-white/30 focus:border-gym-gold focus:outline-none transition-colors"
                              placeholder="e.g. @rahul_fit"
                            />
                            <InstagramLogo size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gym-white/30" />
                          </div>
                        </div>
                      </div>

                      {/* Category & Reel Link */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gym-white/45 tracking-widest mb-1.5">
                            Posing Category
                          </label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-sm text-gym-white focus:border-gym-gold focus:outline-none transition-colors"
                          >
                            <option value="men">Men&apos;s Physique</option>
                            <option value="women">Women&apos;s Physique</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gym-white/45 tracking-widest mb-1.5">
                            Reel Link (Optional)
                          </label>
                          <input
                            type="url"
                            name="reelLink"
                            value={formData.reelLink}
                            onChange={handleInputChange}
                            className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-sm text-gym-white placeholder-gym-white/30 focus:border-gym-gold focus:outline-none transition-colors"
                            placeholder="Instagram reel URL link"
                          />
                        </div>
                      </div>

                      {/* Age & Weight */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gym-white/45 tracking-widest mb-1.5">
                            Age
                          </label>
                          <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-sm text-gym-white placeholder-gym-white/30 focus:border-gym-gold focus:outline-none transition-colors"
                            placeholder="Age"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gym-white/45 tracking-widest mb-1.5">
                            Current Weight (kg)
                          </label>
                          <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleInputChange}
                            className="w-full bg-bg-primary border border-border-subtle px-4 py-3 text-sm text-gym-white placeholder-gym-white/30 focus:border-gym-gold focus:outline-none transition-colors"
                            placeholder="Weight in kg"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest py-3.5 mt-6 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <div className="h-5 w-5 border-2 border-gym-black border-t-transparent animate-spin rounded-full" />
                        ) : (
                          <>
                            Register Now <Send size={14} />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-center flex flex-col items-center py-10"
                  >
                    <CheckCircle2 className="text-gym-gold h-16 w-16 mb-6 animate-bounce" />
                    <h3 className="font-bebas text-3xl md:text-4xl text-gym-white uppercase tracking-wider mb-3">
                      Registration Submitted!
                    </h3>
                    <p className="font-inter text-sm text-gym-white/70 max-w-sm mb-8 leading-relaxed">
                      Thank you for registering, <span className="text-gym-white font-semibold">{formData.name}</span>. Jagesh Pitaji Dait and the coaching team will review your physique profile and Instagram collab slot.
                    </p>
                    
                    <div className="border border-border-subtle bg-bg-primary p-4 rounded mb-8 w-full max-w-sm text-left font-mono text-[11px] text-gym-white/60 space-y-1.5">
                      <div><strong className="text-gym-white">Category:</strong> {formData.category === "men" ? "Men's Physique" : "Women's Physique"}</div>
                      <div><strong className="text-gym-white">Instagram:</strong> {formData.instagram}</div>
                      {formData.phone && <div><strong className="text-gym-white">Phone:</strong> {formData.phone}</div>}
                    </div>

                    <a
                      href={`https://wa.me/918169455350?text=Hi%20Kourage%20Fitness!%20I%20registered%20for%20the%20Physique%20Challenge.%20My%20Name%20is%20${encodeURIComponent(formData.name)}%20and%20IG%20handle%20is%20${encodeURIComponent(formData.instagram)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gym-gold border-2 border-gym-gold text-gym-black font-bebas text-lg uppercase tracking-widest px-8 py-3.5 hover:bg-transparent hover:text-gym-gold transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      Confirm Slot WhatsApp <ChevronRight size={16} />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PhysiqueChallenge;
