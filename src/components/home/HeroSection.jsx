import React from 'react';
import { ArrowRight, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';

export default function HeroSection({ onOpenQuote, onOpenSimulator }) {
  return (
    <section id="hero" className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center pt-32 pb-16 bg-white overflow-hidden">
      {/* Subtle clean architectural geometric accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f4f7f8] to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#154a56]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Brand Intro Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f0f5f7] border border-[#154a56]/15 text-xs font-semibold text-[#154a56]">
              <span className="w-2 h-2 rounded-full bg-[#154a56]" />
              <span className="uppercase tracking-wider">
                Lumilux Lighting Electrical Fitting Trading L.L.C
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[#525d66] font-medium">Dubai & Abu Dhabi</span>
            </div>

            {/* Editorial Title */}
            <div className="space-y-1.5">
              <h2 className="text-sm font-bold tracking-[0.25em] uppercase text-[#154a56]">
                The Future of
              </h2>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#154a56] leading-[1.08] font-display">
                ADVANCED <br className="hidden sm:inline" />
                <span className="text-[#231f20]">
                  ARCHITECTURAL
                </span> <br />
                <span className="text-[#154a56]">
                  LIGHTING.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#525d66] max-w-xl font-normal leading-relaxed">
              UAE's premier lighting engineering and electrical fitting specialist. We deliver precision luminaires, Dialux photometric design, DALI-2 automation, and bespoke 3D-fabricated luminaires for luxury private villas, corporate towers, and commercial landmarks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#154a56] hover:bg-[#0d2f37] text-white flex items-center gap-2 shadow-sm transition-all group"
              >
                <span>REQUEST FREE CONSULTATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSimulator}
                className="px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#f8fafb] border border-slate-300 hover:border-[#154a56] text-[#154a56] flex items-center gap-2 transition hover:bg-white"
              >
                <Sparkles className="w-4 h-4 text-[#b8982f]" />
                <span>Launch Lighting Lab</span>
              </button>
            </div>

            {/* Quick Proof Badges in Clean Light Grid */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#154a56] font-mono">500+</div>
                <div className="text-xs text-[#525d66] mt-0.5 font-medium">UAE Projects Built</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#154a56] font-mono">100%</div>
                <div className="text-xs text-[#525d66] mt-0.5 font-medium">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#154a56] font-mono">ISO 9001</div>
                <div className="text-xs text-[#525d66] mt-0.5 font-medium">Quality Certified</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Card in Clean White */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
                {/* Hero Showcase Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                    alt="Luxury Villa Illumination Project"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-[#154a56] flex items-center gap-2 shadow-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#154a56]" />
                    <span>Palm Jumeirah Signature Estate</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#154a56] text-white font-bold px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider">
                    Featured
                  </div>
                </div>

                {/* Card Content & Spec Strip */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-[#154a56]">Full Architectural Turnkey Fitout</h4>
                      <p className="text-xs text-[#525d66]">Plaster-in linear profiles + DALI-2 scenes</p>
                    </div>
                    <BrandLogo variant="mark" className="h-8" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-[#f8fafb] p-3.5 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-slate-500 block text-[10px] font-medium">Color Rendering</span>
                      <strong className="text-[#154a56]">CRI &gt; 97 True-Hue</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] font-medium">Glare Rating</span>
                      <strong className="text-[#154a56]">UGR &lt; 14 Anti-Glare</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenQuote()}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#f0f5f7] hover:bg-[#e4eff2] text-[#154a56] border border-[#154a56]/20 flex items-center justify-between transition"
                  >
                    <span>Explore Dialux Project Schedule</span>
                    <ChevronRight className="w-4 h-4 text-[#154a56]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
