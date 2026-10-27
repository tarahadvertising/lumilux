import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import { SERVICES } from '../data/services';
import {
  Lightbulb,
  PencilRuler,
  Cpu,
  Sliders,
  CheckCircle2,
  ArrowRight,
  X,
  FileCheck2,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Lightbulb,
  PencilRuler,
  Cpu,
  Sliders
};

export default function ServicesPage({ onOpenQuote }) {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const [selectedService, setSelectedService] = useState(null);

  // Auto-select or scroll to service if query param is passed
  useEffect(() => {
    if (serviceParam) {
      const normalized = serviceParam === 'light-control' ? 'lighting-control' : serviceParam;
      const match = SERVICES.find((s) => s.id === normalized);
      if (match) {
        setSelectedService(match);
      }
    }
  }, [serviceParam]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        title="Our Services"
        subtitle="Complete architectural lighting lifecycle solutions — Light Installation, Design Service, Smart Automation, and Light Control."
      />

      {/* 2. Services Grid (Clean 4-Card Layout) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Lightbulb;
              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className="bg-white border border-slate-200 rounded-3xl p-7 shadow-xs hover:border-[#154a56]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Icon and Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#f0f5f7] border border-[#154a56]/15 flex items-center justify-center text-[#154a56]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">0{index + 1}</span>
                    </div>

                    <span className="text-[11px] font-bold text-[#154a56] uppercase tracking-wider block mb-1">
                      {service.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[#154a56]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#525d66] mt-2.5 leading-relaxed min-h-[48px]">
                      {service.shortDesc}
                    </p>

                    {/* Features checklist */}
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-[#525d66]">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#154a56] mt-0.5 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-[#154a56] hover:text-[#b8982f] flex items-center gap-1 transition"
                    >
                      Technical Scope <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      to="/contact"
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#154a56] text-white hover:bg-[#0f343d] transition shadow-xs"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 6-Step Engineering Methodology */}
      <section className="py-20 bg-[#f8fafb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-[#154a56] block mb-1">
              Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-[#154a56]">
              6-Step Delivery Framework
            </h2>
            <p className="text-xs sm:text-sm text-[#525d66] mt-2">
              Our systematic approach guarantees flawless execution from preliminary drawings to post-handover support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Consultation & Brief', desc: 'Understanding architectural intent, lighting mood, lux targets, and site constraints.' },
              { step: '02', title: 'Site Survey & Audit', desc: 'Laser measurements of ceiling drops, wiring terminations, and daylight evaluation.' },
              { step: '03', title: 'DIALux Photometric Design', desc: 'Precision 3D modeling, lux calculations, glare control (UGR < 19), and product scheduling.' },
              { step: '04', title: 'Approval & Coordination', desc: 'Client and consultant coordination, technical material submittals (TMS), and DEWA/ADDC compliance.' },
              { step: '05', title: 'Supply & Installation', desc: 'Professional installation by certified electrical engineers with laser-levelled precision.' },
              { step: '06', title: 'Testing & Commissioning', desc: 'Lux meter verification, scene automation programming, and comprehensive as-built documentation.' },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#154a56]/40 hover:shadow-md transition">
                <span className="text-2xl font-mono font-extrabold text-[#154a56]">{item.step}</span>
                <h4 className="text-base font-bold text-[#231f20] mt-2">{item.title}</h4>
                <p className="text-xs text-[#525d66] mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#154a56] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#d7d225] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                UAE Project Inquiries
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Require a Lighting Proposal or Technical Specification?
              </h3>
              <p className="text-xs sm:text-sm text-white/85 mt-2">
                Send us your drawings or bill of quantities for an immediate DIALux review and estimate.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#d7d225] hover:bg-[#c4bf1d] text-[#154a56] shadow-sm transition whitespace-nowrap text-center"
            >
              REQUEST TECHNICAL SPECIFICATION
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Technical Scope Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-[#231f20]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#231f20] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-2">
              <FileCheck2 className="w-3.5 h-3.5" />
              Service Dossier
            </div>

            <h3 className="text-2xl font-extrabold text-[#154a56]">{selectedService.title}</h3>
            <p className="text-xs text-[#b8982f] font-semibold mt-0.5">{selectedService.tagline}</p>
            <p className="text-xs text-[#525d66] mt-3 leading-relaxed">{selectedService.longDesc}</p>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-[#f8fafb] border border-slate-200">
                <span className="text-xs font-bold text-[#154a56] uppercase tracking-wider block mb-2">
                  Technical Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-[#525d66]">
                  {selectedService.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#154a56] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafb] border border-slate-200">
                <span className="text-xs font-bold text-[#154a56] uppercase tracking-wider block mb-2">
                  Key Scope Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-[#154a56]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Technical Dossier</span>
              <Link
                to="/contact"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#154a56] text-white hover:bg-[#0f343d] transition shadow-xs"
              >
                Inquire About This Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
