import React from 'react';
import { CheckCircle2, Award, Compass, ArrowRight, FileText } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';

export default function AboutSection({ onOpenQuote }) {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80"
                  alt="Lumilux Lighting Engineering"
                  className="w-full h-96 object-cover object-center"
                />
                
                {/* Overlay Badge in Clean White */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 flex items-center gap-3.5 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#f0f5f7] border border-[#154a56]/20 flex items-center justify-center p-2 text-white shrink-0">
                    <BrandLogo variant="mark" className="h-8" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#154a56]">UAE Engineering & Supply Hub</h5>
                    <p className="text-[11px] text-[#525d66]">Trading & bespoke fabrication across Dubai, Abu Dhabi & GCC</p>
                  </div>
                </div>
              </div>

              {/* Floating Certification Card */}
              <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-lg">
                <Award className="w-6 h-6 text-[#154a56]" />
                <div className="text-[11px]">
                  <strong className="text-[#154a56] block font-mono font-bold">ISO 9001:2015</strong>
                  <span className="text-[#525d66]">Quality Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#154a56]" />
              Brand Heritage & Vision
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154a56] tracking-tight leading-tight">
              About <span className="text-[#231f20]">Lumilux Lighting</span>
            </h2>

            <div className="space-y-4 text-[#525d66] text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-[#154a56]">Lumilux Lighting Electrical Fitting Trading L.L.C</strong> is a professional UAE-based enterprise specializing in high-performance lighting solutions, electrical fittings, and related engineering trading services.
              </p>
              <p>
                Committed to uncompromising quality, durability, and customer satisfaction, Lumilux delivers dependable luminaires and custom-tailored solutions designed to meet the rigorous demands of residential luxury villas, commercial towers, and industrial environments across the United Arab Emirates.
              </p>
              <p className="text-sm">
                With deep expertise in photometric simulation (Dialux Evo), smart building protocols (DALI-2, KNX), and localized UAE manufacturing through our bespoke 3D luminaire atelier, we combine functionality, durability, and contemporary architectural elegance.
              </p>
            </div>

            {/* Checkpoints in Clean Light Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Established in UAE with Global Vision",
                "Dialux 3D Photometric Engineering",
                "Residential, Commercial & Industrial",
                "Smart DALI-2 & KNX Automation",
                "Bespoke 3D Luminaire Crafting",
                "3 to 7 Years Performance Warranty"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-[#231f20] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#154a56] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 rounded-xl bg-[#154a56] hover:bg-[#0d2f37] text-white font-bold text-xs flex items-center gap-2 shadow-sm transition"
              >
                <span>CONSULT WITH OUR LIGHTING ENGINEERS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#calculator"
                className="px-5 py-3.5 rounded-xl bg-[#f8fafb] hover:bg-[#edf2f4] text-[#154a56] border border-slate-300 font-semibold text-xs flex items-center gap-2 transition"
              >
                <FileText className="w-4 h-4 text-[#154a56]" />
                <span>Estimate Space Lux</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
