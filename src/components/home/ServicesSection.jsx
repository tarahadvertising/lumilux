import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, PencilRuler, Cpu, Sliders, Layers, Headphones, ArrowRight, Check, X, Zap } from 'lucide-react';
import { SERVICES } from '../../data/services';

const iconMap = {
  Lightbulb,
  PencilRuler,
  Cpu,
  Sliders,
  Layers,
  Headphones
};

export default function ServicesSection({ onOpenQuote }) {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#f8fafb] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#154a56]" />
            Engineered Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154a56] tracking-tight">
            Our Services
          </h2>
          <p className="text-[#525d66] text-sm sm:text-base mt-3 leading-relaxed">
            Comprehensive lighting solutions tailored to your needs — Light Installation, Design Service, Smart Automation, and Light Control.
          </p>
        </div>

        {/* Services Grid in Clean White Cards (4 columns for the 4 core services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Lightbulb;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#154a56] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f5f7] border border-[#154a56]/15 flex items-center justify-center text-[#154a56] group-hover:bg-[#154a56] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#f8fafb] text-[#154a56] border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#154a56] group-hover:text-[#0d2f37] transition">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#525d66] mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Quick Feature Pills */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    {service.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[#231f20]">
                        <Check className="w-3.5 h-3.5 text-[#154a56] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services?service=${service.id}`}
                    className="text-xs font-bold text-[#154a56] hover:text-[#0d2f37] flex items-center gap-1.5 transition"
                  >
                    <span>Technical Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/contact"
                    className="text-[11px] text-[#525d66] hover:text-[#154a56] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#f0f5f7] transition"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal in Clean White */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase font-bold px-3 py-1 rounded-full bg-[#f0f5f7] text-[#154a56] border border-[#154a56]/20">
                {activeModalService.badge}
              </span>
              <span className="text-xs text-slate-400">Lumilux UAE Engineering</span>
            </div>

            <h3 className="text-2xl font-bold text-[#154a56] mb-1">{activeModalService.title}</h3>
            <p className="text-xs text-[#b8982f] font-semibold mb-4">{activeModalService.tagline}</p>

            <p className="text-xs sm:text-sm text-[#525d66] leading-relaxed mb-6">
              {activeModalService.longDesc}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-bold text-[#154a56] tracking-wider mb-3">
                Key Technical Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalService.highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#f8fafb] border border-slate-200 flex items-start gap-2.5 text-xs text-[#231f20] font-medium">
                    <Check className="w-4 h-4 text-[#154a56] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-bold text-[#154a56] tracking-wider mb-2">
                Applicable Sectors
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.features.map((feat, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-[#231f20] text-xs font-medium border border-slate-200">
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#525d66] text-xs font-semibold"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#154a56] hover:bg-[#0d2f37] text-white text-xs font-bold shadow-sm text-center"
              >
                Request Proposal for this Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
