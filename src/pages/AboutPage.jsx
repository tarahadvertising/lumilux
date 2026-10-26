import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, Award, Target, Compass, CheckCircle2, Building, ArrowRight, Eye, Cpu, Zap } from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header Banner */}
      <PageHeader
        title="About Lumilux Lighting"
        subtitle="Lumilux Lighting Electrical Fitting Trading L.L.C is a premier UAE-based architectural lighting engineering firm dedicated to high-precision illumination, smart control, and bespoke fabrication."
        bgImage="/about-hero-bg.jpg"
      />
      {/* 2. Brand Heritage Narrative (Brand Guideline Book Page 2) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#154a56] block">
                Brand Heritage & Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154a56] leading-tight">
                "Lighting is more than illumination — it is an architectural medium."
              </h2>
              <p className="text-sm text-[#525d66] leading-relaxed">
                Founded on the principle that light defines spatial reality, <strong>Lumilux Lighting Electrical Fitting Trading L.L.C</strong> brings engineering precision and aesthetic sensitivity to luxury villas, corporate towers, and world-class hospitality venues throughout the United Arab Emirates.
              </p>
              <p className="text-sm text-[#525d66] leading-relaxed">
                By bridging the gap between imaginative architectural concepts and rigorous electrical execution, we deliver end-to-end solutions: from preliminary Dialux photometric calculations and glare modeling to turnkey fixture supply, smart automation integration, and final on-site commissioning.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote()}
                  className="px-6 py-3 rounded-xl text-xs font-bold bg-[#154a56] text-white hover:bg-[#0f343d] transition flex items-center gap-2 shadow-xs"
                >
                  <span>REQUEST CORPORATE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-[#d7d225]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Lumilux Architectural Corporate Lighting"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Values */}
      <section className="py-20 bg-[#f8fafb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#154a56] block mb-1">
              Foundational Principles
            </span>
            <h2 className="text-3xl font-extrabold text-[#154a56]">
              Vision, Mission & Ethical Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#f0f5f7] border border-[#154a56]/15 flex items-center justify-center text-[#154a56] mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#154a56]">Our Vision</h3>
              <p className="text-xs text-[#525d66] mt-3 leading-relaxed">
                To be the GCC region's most reputable luminary authority, setting benchmarks in optical wellness, sustainable energy management, and bespoke lighting artistry that transforms modern skylines.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#f0f5f7] border border-[#154a56]/15 flex items-center justify-center text-[#154a56] mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#154a56]">Our Mission</h3>
              <p className="text-xs text-[#525d66] mt-3 leading-relaxed">
                To empower architects, developers, and interior designers with precision-engineered luminaires, mathematically validated Dialux studies, and seamless smart lighting automation that exceeds expectations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#f0f5f7] border border-[#154a56]/15 flex items-center justify-center text-[#154a56] mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#154a56]">Core Values</h3>
              <p className="text-xs text-[#525d66] mt-3 leading-relaxed">
                Zero compromise on photometric integrity, complete transparency in technical specifications, unwavering reliability in project delivery timelines, and genuine partnership with clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engineering Standards & Technical Rigor */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#154a56] block mb-2">
              Quality Assurance
            </span>
            <h2 className="text-3xl font-extrabold text-[#154a56]">
              Engineered to International & GCC Specifications
            </h2>
            <p className="text-sm text-[#525d66] mt-2">
              Every luminaire supplied by Lumilux undergoes strict quality validation to withstand demanding environmental conditions while delivering unmatched visual comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#f8fafb] border border-slate-200">
              <Award className="w-8 h-8 text-[#154a56] mb-3" />
              <h4 className="text-sm font-bold text-[#154a56]">ISO 9001:2015 Certified</h4>
              <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                Comprehensive quality management system ensuring systematic documentation, order tracking, and defect prevention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafb] border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-[#154a56] mb-3" />
              <h4 className="text-sm font-bold text-[#154a56]">Estidama Pearl Aligned</h4>
              <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                Fixtures and controls optimized to earn maximum energy and light pollution credits for Abu Dhabi & UAE green building mandates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafb] border border-slate-200">
              <Zap className="w-8 h-8 text-[#154a56] mb-3" />
              <h4 className="text-sm font-bold text-[#154a56]">CIBSE / EN 12464 Lux</h4>
              <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                Calculations ensure required minimum lux thresholds, uniformity ratios (Uo &gt; 0.6), and unified glare ratings (UGR &lt; 16).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafb] border border-slate-200">
              <Cpu className="w-8 h-8 text-[#154a56] mb-3" />
              <h4 className="text-sm font-bold text-[#154a56]">DALI-2 / KNX Native</h4>
              <p className="text-xs text-[#525d66] mt-2 leading-relaxed">
                Full compatibility with commercial building management systems (BMS) for smooth logarithmic dimming down to 0.1%.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* 6. Contact CTA Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#154a56]">
            Looking for a Proven Lighting Partner for Your Project?
          </h3>
          <p className="text-xs sm:text-sm text-[#525d66] mt-2 max-w-xl mx-auto">
            Discuss your design brief with our certified lighting specialists today.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-[#154a56] text-white hover:bg-[#0f343d] transition shadow-xs"
            >
              SCHEDULE TECHNICAL CONSULTATION
            </button>
            <Link
              to="/services"
              className="px-6 py-3 rounded-xl text-xs font-bold bg-[#f8fafb] border border-slate-300 text-[#154a56] hover:bg-slate-50 transition"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
