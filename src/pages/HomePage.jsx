import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Sliders, Layers, Award
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { PRODUCTS } from '../data/products';

export default function HomePage({ onOpenQuote }) {
  const featuredServices = SERVICES.slice(0, 4);
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="bg-white">
      {/* 1. Hero Section with Pure Video Background */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden text-white">

        {/* Pure Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0d2d34]">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/homebanner-light-bg.jpg"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-100"
          >
            {/* Primary: High-definition architectural lighting video saved locally */}
            <source src="/hero-lighting.mp4" type="video/mp4" />
            {/* Fallback CDN video source */}
            <source src="https://videos.pexels.com/video-files/5900940/5900940-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>

          {/* Reduced Soft Shadow Overlay for Maximum Video Vibrancy */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#091e23]/55 via-[#154a56]/35 to-black/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
              The Luminary Standard in{' '}
              <span className="text-[#d7d225]">Architectural</span>{' '}
              Illumination.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-2xl font-medium drop-shadow-md">
              Turnkey architectural lighting engineering, Dialux photometric simulations, intelligent DALI-2/KNX control, and bespoke luminaire fabrication for luxury residences, commercial towers, and hospitality landmarks across Dubai, Abu Dhabi, and the GCC.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 rounded-xl text-xs font-bold bg-[#d7d225] text-[#154a56] transition-all flex items-center gap-2.5 shadow-xl "
              >
                <span>REQUEST PROJECT CONSULTATION</span>
                <ArrowRight className="w-4 h-4 text-[#154a56]" />
              </button>

              <Link
                to="/products"
                className="px-6 py-3.5 rounded-xl text-xs font-bold bg-white/15 text-white border border-white/30 backdrop-blur-md transition-all flex items-center gap-2 shadow-xl"
              >
                <span>Explore Product Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d7d225]" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Brand Overview & Editorial Excerpt with Generated Architectural Cards */}
      <section className="py-20 bg-[#f8fafb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d7d225]/20 text-[#154a56] font-bold text-xs uppercase tracking-wider mb-3 border border-[#d7d225]/40">
                Brand Heritage & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154a56] leading-tight">
                Lighting as an Architectural Artform
              </h2>
              <p className="mt-4 text-sm text-[#525d66] leading-relaxed">
                As detailed in the Lumilux Brand Book, lighting is not merely an electrical fitting; it is the vital architectural medium that breathes life, rhythm, and emotion into physical volumes.
              </p>
              <div className="mt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#154a56] transition uppercase tracking-wider"
                >
                  <span>Read Our Full Corporate Profile</span>
                  <ArrowRight className="w-4 h-4 text-[#d7d225]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1: Engineering Precision */}
              <div className="group rounded-2xl bg-white border border-slate-200 border-t-2 border-t-[#d7d225] shadow-xs transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/card-engineering-precision.jpg"
                    alt="Engineering Precision"
                    className="w-full h-full object-cover transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-[#d7d225] flex items-center justify-center text-[#154a56] shadow-md font-bold">
                    <ShieldCheck className="w-5 h-5 text-[#154a56]" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#154a56] transition-colors">
                      Engineering Precision
                    </h3>
                    <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                      Every fixture is certified for optical efficacy (&gt;110 lm/W), rigorous thermal management, and UGR &lt; 16 compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Smart DALI & KNX Control */}
              <div className="group rounded-2xl bg-white border border-slate-200 border-t-2 border-t-[#d7d225] shadow-xs transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/card-smart-control.jpg"
                    alt="Smart DALI & KNX Control"
                    className="w-full h-full object-cover transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-[#d7d225] flex items-center justify-center text-[#154a56] shadow-md font-bold">
                    <Sliders className="w-5 h-5 text-[#154a56]" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#154a56] transition-colors">
                      Smart DALI & KNX Control
                    </h3>
                    <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                      Seamless interoperability with smart building protocols for automated circadian rhythm and energy conservation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Bespoke 3D Atelier */}
              <div className="group rounded-2xl bg-white border border-slate-200 border-t-2 border-t-[#d7d225] shadow-xs transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/card-bespoke-atelier.jpg"
                    alt="Bespoke 3D Atelier"
                    className="w-full h-full object-cover transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-[#d7d225] flex items-center justify-center text-[#154a56] shadow-md font-bold">
                    <Layers className="w-5 h-5 text-[#154a56]" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#154a56] transition-colors">
                      Bespoke 3D Atelier
                    </h3>
                    <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                      In-house industrial design and rapid prototyping in the UAE for custom chandeliers and monumental light sculptures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Estidama & ISO Quality */}
              <div className="group rounded-2xl bg-white border border-slate-200 border-t-2 border-t-[#d7d225] shadow-xs transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src="/card-estidama-quality.jpg"
                    alt="Estidama & ISO Quality"
                    className="w-full h-full object-cover transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-[#d7d225] flex items-center justify-center text-[#154a56] shadow-md font-bold">
                    <Award className="w-5 h-5 text-[#154a56]" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#154a56] transition-colors">
                      Estidama & ISO Quality
                    </h3>
                    <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                      Full adherence to UAE Estidama Pearl Rating systems and ISO 9001:2015 certified electrical supply standards.
                    </p>
                  </div>
                </div>
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d7d225]/20 text-[#154a56] font-bold text-xs uppercase tracking-wider mb-3 border border-[#d7d225]/40">
                What We Do
              </span>
              <h2 className="text-3xl font-extrabold text-[#154a56]">
                Turnkey Lighting Services
              </h2>
              <p className="text-sm text-[#525d66] mt-1 max-w-xl">
                Comprehensive architectural lighting engineering solutions, executed by certified engineers in Dubai and Abu Dhabi.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#154a56] transition uppercase tracking-wider"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 text-[#d7d225]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                to={`/services?service=${service.id}`}
                className="group bg-white border border-slate-200 border-t-4 border-t-[#d7d225] rounded-2xl overflow-hidden shadow-xs transition-all duration-300 flex flex-col"
              >
                {/* Service Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold text-[#154a56] bg-[#d7d225] backdrop-blur-sm px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                    {service.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-bold text-[#154a56] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Architectural Products */}
      <section className="py-20 bg-[#f8fafb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d7d225]/20 text-[#154a56] font-bold text-xs uppercase tracking-wider mb-3 border border-[#d7d225]/40">
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
              className="inline-flex items-center gap-2 text-xs font-bold text-[#154a56] transition uppercase tracking-wider"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4 text-[#d7d225]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to="/products"
                className="group bg-white border border-slate-200 border-t-4 border-t-[#d7d225] rounded-2xl overflow-hidden shadow-xs transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 text-[10px] font-extrabold text-[#154a56] bg-[#d7d225] backdrop-blur-sm px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                    {product.categoryName}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono font-bold text-[#d7d225] bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded">
                    {product.model}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#154a56] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#525d66] mt-2 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold text-[#154a56] bg-[#d7d225]/25 px-2 py-0.5 rounded border border-[#d7d225]/40">{product.power}</span>
                    <span className="font-bold text-[#154a56] flex items-center gap-1 transition-colors">
                      Specification Sheet <ArrowRight className="w-3.5 h-3.5 text-[#d7d225] transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
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
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#d7d225] text-[#154a56] shadow-sm transition"
              >
                REQUEST PROPOSAL
              </button>
              <Link
                to="/contact"
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 text-white border border-white/20 transition"
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
