import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Building } from 'lucide-react';

const SPACE_PROFILES = [
  { id: 'living', name: 'Luxury Villa Living Room', targetLux: 300, cct: '2700K Warm', luminaire: 'LumiCurve Pro 18W + Cove Strip', ugr: '< 16' },
  { id: 'office', name: 'Corporate Office / Conference', targetLux: 500, cct: '4000K Neutral', luminaire: 'AeroLine Trimless 30W/m + Sensors', ugr: '< 19' },
  { id: 'bedroom', name: 'Master Bedroom Suite', targetLux: 150, cct: '2400K–2700K Warm', luminaire: 'Anti-Glare Accent Downlights 10W', ugr: '< 14' },
  { id: 'dining', name: 'Fine Dining & Hospitality', targetLux: 120, cct: '2200K–2700K Amber', luminaire: 'Custom 3D Chandeliers + Track Spots', ugr: '< 14' },
  { id: 'retail', name: 'High-End Retail Boutique', targetLux: 800, cct: '3000K–4000K High CRI', luminaire: 'MagnaTrack 48V Accent Spots', ugr: '< 19' },
  { id: 'kitchen', name: 'Culinary Island & Prep', targetLux: 400, cct: '3500K–4000K Crisp', luminaire: 'High-Density Under-Cabinet + Flush Spots', ugr: '< 19' }
];

export default function LuxCalculator({ onOpenQuote }) {
  const [selectedSpaceId, setSelectedSpaceId] = useState('living');
  const [length, setLength] = useState(8);
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(3.2);

  const activeSpace = SPACE_PROFILES.find(s => s.id === selectedSpaceId) || SPACE_PROFILES[0];

  // Engineering calculation
  const area = Number((length * width).toFixed(1));
  const volume = Number((area * height).toFixed(1));
  
  // Total Lumens formula: Lux * Area * 1.35 (maintenance factor 0.8 and utilization factor 0.65)
  const totalLumens = Math.round(activeSpace.targetLux * area * (1 / (0.8 * 0.65)));
  
  // Luminaire unit estimation
  const luminaireLumens = 1400;
  const fixtureCount = Math.max(2, Math.ceil(totalLumens / luminaireLumens));
  
  // Total electrical power
  const totalWatts = Math.round(totalLumens / 95);
  const wattsPerSqm = (totalWatts / (area || 1)).toFixed(1);

  return (
    <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 overflow-hidden shadow-xl">
      {/* Title */}
      <div className="relative z-10 max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-3">
          <Calculator className="w-3.5 h-3.5 text-[#154a56]" />
          Architectural Engineering Suite
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#154a56]">
          Interactive Lux & Photometric Estimator
        </h3>
        <p className="text-[#525d66] text-sm mt-2">
          Calculate recommended illuminance (Lux), total required lumens, and optimal luminaire layout according to CIBSE and Estidama standards.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Parameters (Cols 1-7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Space Type Selection */}
          <div>
            <label className="block text-xs font-bold text-[#154a56] uppercase tracking-wider mb-2">
              1. Select Architectural Space Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SPACE_PROFILES.map(space => (
                <button
                  key={space.id}
                  onClick={() => setSelectedSpaceId(space.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedSpaceId === space.id
                      ? 'bg-[#154a56] border-[#154a56] text-white shadow-sm ring-2 ring-[#154a56]/20'
                      : 'bg-[#f8fafb] border-slate-200 text-[#525d66] hover:text-[#154a56] hover:border-slate-300'
                  }`}
                >
                  <div className={`font-bold text-xs truncate ${selectedSpaceId === space.id ? 'text-white' : 'text-[#231f20]'}`}>
                    {space.name}
                  </div>
                  <div className={`text-[11px] mt-1 font-mono font-bold ${selectedSpaceId === space.id ? 'text-[#d7d225]' : 'text-[#154a56]'}`}>
                    {space.targetLux} Lux Target
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Room Dimensions Sliders */}
          <div className="bg-[#f8fafb] p-6 rounded-2xl border border-slate-200 space-y-5">
            <div className="text-xs font-bold text-[#154a56] uppercase tracking-wider flex items-center gap-2">
              <Building className="w-4 h-4 text-[#154a56]" />
              2. Enter Physical Room Dimensions (Meters)
            </div>

            {/* Length */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#525d66] font-medium">Room Length</span>
                <span className="text-[#154a56] font-bold font-mono">{length} m</span>
              </div>
              <input
                type="range"
                min="3"
                max="25"
                step="0.5"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#154a56]"
              />
            </div>

            {/* Width */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#525d66] font-medium">Room Width</span>
                <span className="text-[#154a56] font-bold font-mono">{width} m</span>
              </div>
              <input
                type="range"
                min="2.5"
                max="20"
                step="0.5"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#154a56]"
              />
            </div>

            {/* Ceiling Height */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#525d66] font-medium">Ceiling Height</span>
                <span className="text-[#154a56] font-bold font-mono">{height} m</span>
              </div>
              <input
                type="range"
                min="2.4"
                max="8.0"
                step="0.1"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#154a56]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>Standard (2.8m)</span>
                <span>Double-Height (5.5m)</span>
                <span>Grand Atrium (8.0m)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Output Card (Cols 8-12) in Authoritative Lumilux Petrol Teal */}
        <div className="lg:col-span-5 bg-[#154a56] rounded-2xl p-6 sm:p-7 text-white shadow-xl relative">
          <div className="flex items-center justify-between pb-4 border-b border-white/15">
            <div>
              <span className="text-[11px] text-white/70 uppercase tracking-widest font-semibold">Photometric Calculation</span>
              <h4 className="text-lg font-bold text-white mt-0.5">{activeSpace.name}</h4>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#d7d225] font-mono block font-bold">CIBSE / EN 12464</span>
              <span className="text-[11px] text-white flex items-center justify-end gap-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d7d225]" /> Dialux Certified
              </span>
            </div>
          </div>

          {/* Key Output Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 my-5">
            <div className="bg-[#0e353e] p-3.5 rounded-xl border border-white/10">
              <span className="text-[11px] text-white/70 block font-medium">Total Floor Area</span>
              <span className="text-xl font-extrabold text-white font-mono">{area} m²</span>
              <span className="text-[10px] text-white/50 block">Vol: {volume} m³</span>
            </div>

            <div className="bg-[#0e353e] p-3.5 rounded-xl border border-white/10">
              <span className="text-[11px] text-[#d7d225] block font-bold">Target Illuminance</span>
              <span className="text-xl font-extrabold text-[#d7d225] font-mono">{activeSpace.targetLux} Lux</span>
              <span className="text-[10px] text-white/70 block">Glare: {activeSpace.ugr}</span>
            </div>

            <div className="bg-[#0e353e] p-3.5 rounded-xl border border-white/10">
              <span className="text-[11px] text-white/70 block font-medium">Total Luminous Flux</span>
              <span className="text-xl font-extrabold text-white font-mono">
                {totalLumens.toLocaleString()} <span className="text-xs font-normal">lm</span>
              </span>
              <span className="text-[10px] text-white/50 block">@ 0.80 Cleanliness MF</span>
            </div>

            <div className="bg-[#0e353e] p-3.5 rounded-xl border border-white/10">
              <span className="text-[11px] text-white/70 block font-medium">Recommended Fixtures</span>
              <span className="text-xl font-extrabold text-[#d7d225] font-mono">
                {fixtureCount} <span className="text-xs font-normal">Units</span>
              </span>
              <span className="text-[10px] text-white/50 block">Avg 1400 lm/fixture</span>
            </div>
          </div>

          {/* Recommended Luminaire Specification Box */}
          <div className="p-3.5 rounded-xl bg-[#0e353e] border border-white/15 mb-5">
            <span className="text-[10px] uppercase font-bold text-[#d7d225] tracking-wider block mb-1">
              Engineered Lumilux Recommendation:
            </span>
            <div className="text-sm font-bold text-white">{activeSpace.luminaire}</div>
            <div className="text-xs text-white/80 mt-1 flex flex-wrap gap-x-3 gap-y-1">
              <span>Color Temp: <strong className="text-[#d7d225]">{activeSpace.cct}</strong></span>
              <span>Power: <strong className="text-white">{totalWatts}W ({wattsPerSqm} W/m²)</strong></span>
            </div>
          </div>

          {/* Action CTA to load into Quote */}
          <button
            onClick={() => onOpenQuote({
              space: activeSpace.name,
              area: `${area} m² (${length}m x ${width}m x ${height}m)`,
              targetLux: `${activeSpace.targetLux} Lux`,
              lumens: `${totalLumens.toLocaleString()} lm`,
              fixtures: `${fixtureCount} units of ${activeSpace.luminaire}`
            })}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-white hover:bg-slate-100 text-[#154a56] flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span>Request Official Dialux Proposal for this Space</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
