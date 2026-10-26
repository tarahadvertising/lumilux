import React from 'react';
import { CalendarCheck, FolderGit2, Award, Smile, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export default function StatsSection() {
  const icons = [CalendarCheck, FolderGit2, Award, Smile, Zap];

  return (
    <section className="relative py-12 bg-[#f8fafb] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-6">
          {COMPANY_INFO.stats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={stat.label}
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#154a56] transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f0f5f7] flex items-center justify-center text-[#154a56] group-hover:bg-[#154a56] group-hover:text-white transition-all mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-2xl sm:text-3xl font-black text-[#154a56] font-mono tracking-tight">
                  {stat.value}
                </div>

                <div className="text-xs font-bold text-[#231f20] mt-1.5">
                  {stat.label}
                </div>

                <p className="text-[11px] text-[#525d66] mt-1 leading-normal">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
