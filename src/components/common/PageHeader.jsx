import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumb, badge, bgImage }) {
  return (
    <section className={`relative pt-32 pb-16 border-b border-slate-200 overflow-hidden ${bgImage ? 'bg-slate-950 text-white' : 'bg-[#f8fafb]'}`}>
      {/* Optional Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle elegant gradient overlay for text legibility without heavy shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/40" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className={`flex items-center gap-2 text-xs mb-4 font-medium ${bgImage ? 'text-slate-300' : 'text-[#525d66]'}`} aria-label="Breadcrumb">
            <Link to="/" className={`transition ${bgImage ? 'hover:text-[#d7d225]' : 'hover:text-[#154a56]'}`}>Home</Link>
            <ChevronRight className={`w-3.5 h-3.5 ${bgImage ? 'text-slate-400' : 'text-slate-400'}`} />
            <span className={bgImage ? 'text-white font-semibold' : 'text-[#154a56] font-semibold'}>{breadcrumb}</span>
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs ${
              bgImage 
                ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white' 
                : 'bg-white border border-[#154a56]/20 text-[#154a56]'
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#d7d225]" />
              {badge}
            </div>
          )}
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${bgImage ? 'text-white' : 'text-[#154a56]'}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-3 text-sm sm:text-base leading-relaxed ${bgImage ? 'text-slate-200' : 'text-[#525d66]'}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
