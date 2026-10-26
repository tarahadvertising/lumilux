import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Consultation & Brief",
      desc: "Comprehensive review of architectural blueprints, spatial intent, lighting mood, and electrical infrastructure requirements."
    },
    {
      step: "02",
      title: "Site Survey & Laser Evaluation",
      desc: "On-site laser measurement of ceiling drops, cove depths, wiring terminations, and daylight exposure across the UAE."
    },
    {
      step: "03",
      title: "Dialux 3D Photometric Design",
      desc: "Simulating quantitative illuminance (Lux), glare indices (UGR < 16), false-color renders, and luminaire schedules."
    },
    {
      step: "04",
      title: "Consultant Approval & Compliance",
      desc: "Preparation of technical material submittals (TMS), mock-up presentations, and local authority compliance approvals."
    },
    {
      step: "05",
      title: "Precision Supply & Installation",
      desc: "Delivery of certified luminaires and millimeter-accurate installation by certified Lumilux electrical technicians."
    },
    {
      step: "06",
      title: "Testing, Commissioning & Handover",
      desc: "Calibrated spectrometer lux verification, DALI-2 scene programming, thermal validation, and handover documentation."
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#f8fafb] border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#154a56]" />
            Methodology & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154a56] tracking-tight">
            Our 6-Step Engineering Process
          </h2>
          <p className="text-[#525d66] text-sm sm:text-base mt-3 leading-relaxed">
            A structured, rigorous delivery framework that guarantees photometric accuracy, zero-defect installation, and seamless handover.
          </p>
        </div>

        {/* Process Timeline Grid in Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#154a56] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              {/* Step indicator header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black font-mono text-[#154a56]">
                  {item.step}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#f0f5f7] border border-slate-200 flex items-center justify-center text-[#154a56] group-hover:bg-[#154a56] group-hover:text-white transition">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#231f20] group-hover:text-[#154a56] transition mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#525d66] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-[#154a56] font-semibold font-mono">
                Phase {index + 1} of 6 • Lumilux Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
