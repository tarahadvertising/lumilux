import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sliders, Layers, Award } from 'lucide-react';
import { SERVICES } from '../data/services';
import { PRODUCTS } from '../data/products';

export default function HomePage({ onOpenQuote }) {
  const featuredServices = SERVICES.slice(0, 4);
  const featuredProducts = PRODUCTS.slice(0, 3);
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white border-b border-slate-200 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/homebanner-light-bg.jpg"
            alt="Architectural Light Emission and Optical Illumination"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gentle gradient for minimal shadow and high image clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/15 to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#113a43] tracking-tight leading-snug">
              The Luminary Standard in <span className="underline decoration-[#d7d225] decoration-4 underline-offset-8">Architectural</span> Illumination.
            </h1>
            <p className="text-xs sm:text-sm text-[#374151] leading-relaxed max-w-xl font-medium">
              Turnkey architectural lighting engineering, Dialux photometric design, intelligent DALI-2/KNX control, and bespoke luminaire fabrication for luxury residences, commercial towers, and hospitality landmarks across Dubai, Abu Dhabi, and the GCC.
            </p>
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onOpenQuote()}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#154a56] hover:bg-[#0f343d] text-white transition-all flex items-center gap-2"
              >
                <span>REQUEST PROJECT CONSULTATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d7d225]" />
              </button>
              <Link
                to="/products"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-[#154a56] border border-slate-300 transition flex items-center gap-2"
              >
                <span>Explore Product Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#154a56]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 2. Brand Overview & Editorial Excerpt */}
      <section className="py-20 bg-[#f8fafb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#154a56] block mb-2">
                Brand Heritage & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154a56] leading-tight">
                Lighting as an Architectural

              </h2>
              <p className="mt-4 text-sm text-[#525d66] leading-relaxed">
                As detailed in the Lumilux Brand Book, lighting is not merely an electrical fitting; it is the vital architectural medium that breathes life, rhythm, and emotion into physical volumes.
              </p>
              <div className="mt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#154a56] hover:text-[#b8982f] transition uppercase tracking-wider"
                >
                  <span>Read Our Full Corporate Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#f0f5f7] flex items-center justify-center text-[#154a56] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#154a56]">Engineering Precision</h3>
                <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                  Every fixture is certified for optical efficacy (&gt;110 lm/W), rigorous thermal management, and UGR &lt; 16 compliance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#f0f5f7] flex items-center justify-center text-[#154a56] mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#154a56]">Smart DALI & KNX Control</h3>
                <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                  Seamless interoperability with smart building protocols for automated circadian rhythm and energy conservation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#f0f5f7] flex items-center justify-center text-[#154a56] mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#154a56]">Bespoke 3D Atelier</h3>
                <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                  In-house industrial design and rapid prototyping in the UAE for custom chandeliers and monumental light sculptures.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#f0f5f7] flex items-center justify-center text-[#154a56] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#154a56]">Estidama & ISO Quality</h3>
                <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                  Full adherence to UAE Estidama Pearl Rating systems and ISO 9001:2015 certified electrical supply standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Highlights */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#154a56] block mb-2">
                What We Do
              </span>
              <h2 className="text-3xl font-extrabold text-[#154a56]">
                Turnkey Lighting Services
              </h2>
              <p className="text-sm text-[#525d66] mt-1 max-w-xl">
                Comprehensive technical services reference from Spark World Lighting, executed by certified engineers in Dubai and Abu Dhabi.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#154a56] hover:text-[#b8982f] transition uppercase tracking-wider"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-[#154a56]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#f0f5f7] border border-[#154a56]/15 flex items-center justify-center text-[#154a56] mb-5">
                    <span className="font-mono font-bold text-sm">0{index + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#154a56]">{service.title}</h3>
                  <p className="text-xs text-[#525d66] mt-2 leading-relaxed">{service.shortDesc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-[#154a56] font-semibold">{service.badge}</span>
                  <Link
                    to="/services"
                    className="text-xs font-bold text-[#154a56] hover:text-[#b8982f] flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Architectural Products */}
      <section className="py-20 bg-[#f8fafb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#154a56] block mb-2">
                Curated Engineering Catalog
              </span>
              <h2 className="text-3xl font-extrabold text-[#154a56]">
                Architectural Luminaire Systems
              </h2>
              <p className="text-sm text-[#525d66] mt-1 max-w-xl">
                High-performance downlights, 48V magnetic tracks, dotless linear COB profiles, and certified DALI drivers.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#154a56] hover:text-[#b8982f] transition uppercase tracking-wider"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-[#154a56]/40 hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#154a56]">{product.name}</h3>
                    <p className="text-xs text-[#525d66] mt-2 line-clamp-2">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 7. Bottom CTA Consultation Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#154a56] rounded-3xl p-8 sm:p-14 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest font-bold text-[#d7d225] block mb-2">
                Dialux Studies & Turnkey Supply
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Plan Your Next UAE Lighting Project with Lumilux Engineers
              </h2>
              <p className="text-xs sm:text-sm text-white/85 mt-2 max-w-xl">
                Submit architectural CAD drawings or schedule a direct site consultation with our Dubai and Abu Dhabi desks.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#d7d225] hover:bg-[#c4bf1d] text-[#154a56] shadow-sm transition"
              >
                REQUEST PROPOSAL
              </button>
              <Link
                to="/contact"
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition"
              >
                Contact Desks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
