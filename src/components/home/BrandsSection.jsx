import React from 'react';
import { Award } from 'lucide-react';
import { BRANDS } from '../../data/brands';

export default function BrandsSection() {
  return (
    <section className="relative py-16 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-2">
          <Award className="w-3.5 h-3.5 text-[#154a56]" />
          Global Supply Network
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#154a56]">
          Trusted Brands & Component Partners
        </h3>
        <p className="text-xs text-[#525d66] mt-1 max-w-lg mx-auto">
          We integrate world-class tier-1 LED chips, drivers, and optical assemblies from internationally certified lighting leaders.
        </p>
      </div>

      {/* Endless Marquee Track in Clean White */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Left & Right gradient fade masks in pure white */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6">
          {BRANDS.concat(BRANDS).map((brand, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafb] border border-slate-200 hover:border-[#154a56] rounded-2xl px-7 py-4 flex flex-col items-center justify-center min-w-[190px] transition-all hover:scale-105 group shadow-sm hover:shadow-md"
            >
              <span className="text-base font-extrabold text-[#154a56] group-hover:text-[#0d2f37] transition tracking-wide">
                {brand.name}
              </span>
              <span className="text-[10px] text-[#525d66] font-mono mt-0.5">
                {brand.category}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                {brand.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
