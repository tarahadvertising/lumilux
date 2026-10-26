import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Lumilux delivered immaculate Dialux calculations and execution for our 22,000 sq ft beachfront villa on Palm Jumeirah. Their deep-recessed anti-glare luminaires render travertine and wood finishes with unbelievable warmth.",
      author: "Hassan Al-Zahrawi",
      role: "Managing Director, Luxury Developments UAE",
      project: "Palm Jumeirah Signature Villa"
    },
    {
      quote: "As MEP consultants in Abu Dhabi, we are extremely strict on thermal management and Estidama Pearl compliance. Lumilux’s technical submittals and DALI-2 drivers passed all inspections on the first submission.",
      author: "Elena Rostova",
      role: "Senior MEP Technical Director",
      project: "Saadiyat Cultural District Project"
    },
    {
      quote: "Their UAE bespoke 3D atelier custom fabricated a 14-meter curved continuous linear luminaire for our executive boardroom that other suppliers said was impossible. The handover was flawless.",
      author: "Kareem El-Masri",
      role: "Lead Project Architect, DIFC Hub",
      project: "Corporate Financial Headquarters"
    }
  ];

  return (
    <section className="relative py-20 bg-[#f8fafb] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 fill-[#b8982f] text-[#b8982f]" />
            Client & Consultant Endorsements
          </div>
          <h2 className="text-3xl font-extrabold text-[#154a56]">
            Trusted by UAE's Leading Architects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-[#154a56] transition-all hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-[#b8982f] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#b8982f]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#154a56]/20 mb-2" />

                <p className="text-xs sm:text-sm text-[#525d66] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <strong className="text-[#154a56] text-xs block font-bold">{t.author}</strong>
                <span className="text-[11px] text-[#525d66] block">{t.role}</span>
                <span className="text-[10px] text-[#154a56] font-semibold mt-1 block flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-[#154a56]" /> {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
