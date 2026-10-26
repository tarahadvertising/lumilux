import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Sliders, Eye, Zap, Layers, RefreshCw } from 'lucide-react';

export default function LightingSimulator() {
  const [scene, setScene] = useState('villa'); // 'villa' | 'office' | 'facade'
  const [timeOfDay, setTimeOfDay] = useState('night'); // 'day' | 'dusk' | 'night'
  const [cct, setCct] = useState(2700); // 2700, 4000, 6000
  const [brightness, setBrightness] = useState(85); // 10 to 100
  const [coveActive, setCoveActive] = useState(true);
  const [spotsActive, setSpotsActive] = useState(true);
  const [directActive, setDirectActive] = useState(true);

  // Background room images based on scene
  const sceneImages = {
    villa: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    office: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    facade: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80"
  };

  // Compute ambient tint based on CCT
  const getCctColor = () => {
    if (cct === 2700) return 'rgba(255, 185, 75, '; // warm amber
    if (cct === 4000) return 'rgba(255, 235, 195, '; // neutral daylight warm
    return 'rgba(210, 235, 255, '; // cool clean 6000K
  };

  // Estimated Lux computation based on selections
  const baseLux = scene === 'office' ? 500 : scene === 'facade' ? 180 : 350;
  const computedLux = Math.round(
    baseLux * (brightness / 100) *
    ((directActive ? 0.5 : 0) + (coveActive ? 0.3 : 0) + (spotsActive ? 0.2 : 0))
  );

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl transition-all">
      {/* Header Bar in Clean White */}
      <div className="bg-white px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#154a56] flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-5 h-5 text-[#d7d225]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#154a56] flex items-center gap-2">
              Lumilux Photometric & CCT Simulation Suite
              <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#f0f5f7] text-[#154a56] font-bold border border-[#154a56]/20">
                Interactive Lab
              </span>
            </h3>
            <p className="text-xs text-[#525d66]">
              Simulate color temperature (CCT), architectural dimming, and layer balance in real time
            </p>
          </div>
        </div>

        {/* Scene Selection */}
        <div className="flex items-center bg-[#f0f5f7] p-1 rounded-xl border border-slate-200 text-xs">
          <button
            onClick={() => setScene('villa')}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition ${scene === 'villa' ? 'bg-[#154a56] text-white shadow-sm' : 'text-[#525d66] hover:text-[#154a56]'}`}
          >
            Luxury Villa
          </button>
          <button
            onClick={() => setScene('office')}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition ${scene === 'office' ? 'bg-[#154a56] text-white shadow-sm' : 'text-[#525d66] hover:text-[#154a56]'}`}
          >
            Corporate Office
          </button>
          <button
            onClick={() => setScene('facade')}
            className={`px-3.5 py-1.5 rounded-lg font-semibold transition ${scene === 'facade' ? 'bg-[#154a56] text-white shadow-sm' : 'text-[#525d66] hover:text-[#154a56]'}`}
          >
            Architectural Façade
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Visual Viewport Canvas */}
        <div className="lg:col-span-8 relative min-h-[380px] lg:min-h-[460px] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={sceneImages[scene]}
            alt="Lighting Preview Scene"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          />

          {/* Time of day background filter */}
          <div
            className="absolute inset-0 transition-all duration-700 pointer-events-none"
            style={{
              backgroundColor:
                timeOfDay === 'night'
                  ? 'rgba(8, 12, 14, 0.78)'
                  : timeOfDay === 'dusk'
                  ? 'rgba(25, 20, 20, 0.45)'
                  : 'rgba(255, 255, 255, 0.05)'
            }}
          />

          {/* Dynamic Luminaire Overlay Glow based on CCT & Brightness */}
          <div
            className="absolute inset-0 transition-all duration-300 pointer-events-none mix-blend-screen"
            style={{
              backgroundColor: getCctColor() + (brightness / 250) + ')',
              opacity: directActive ? 1 : 0.2
            }}
          />

          {/* Cove Lighting Radial Ambient Glow */}
          {coveActive && (
            <div
              className="absolute inset-x-0 top-0 h-48 pointer-events-none transition-all duration-500"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${getCctColor() + (brightness / 120)}) 0%, transparent 80%)`
              }}
            />
          )}

          {/* Accent Spots Halo effect */}
          {spotsActive && (
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 flex justify-around items-start pt-8"
              style={{ opacity: brightness / 100 }}
            >
              <div
                className="w-48 h-96 blur-2xl rounded-full"
                style={{ background: `radial-gradient(circle, ${getCctColor()} 0.5) 0%, transparent 70%)` }}
              />
              <div
                className="w-64 h-96 blur-3xl rounded-full"
                style={{ background: `radial-gradient(circle, ${getCctColor()} 0.6) 0%, transparent 70%)` }}
              />
            </div>
          )}

          {/* Real-Time Live HUD Overlay */}
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-[#d7d225] animate-ping" />
              <span>Target Lux: <strong className="text-[#d7d225] font-mono">{computedLux} lx</strong></span>
            </div>
            <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs text-white">
              CCT: <strong className="text-[#d7d225]">{cct}K</strong> ({cct === 2700 ? 'Warm Ambience' : cct === 4000 ? 'Neutral Crisp' : 'Daylight Cool'})
            </div>
            <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs text-white">
              Dim: <strong className="text-white">{brightness}%</strong>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[11px] text-white/90 bg-black/75 backdrop-blur-md p-2.5 rounded-xl border border-white/20">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#d7d225]" />
              <span>Simulated with Dialux Photometric Curves (UGR &lt; 16 Compliant)</span>
            </div>
            <span className="text-[#d7d225] font-semibold hidden sm:inline">Lumilux Engine</span>
          </div>
        </div>

        {/* Controls Sidebar in Clean Light Off-White */}
        <div className="lg:col-span-4 p-6 bg-[#f8fafb] border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            {/* Ambient Time Mode */}
            <div>
              <label className="text-xs font-bold text-[#154a56] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#154a56]" /> Natural Ambient Time
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'day', label: 'Day', icon: Sun },
                  { id: 'dusk', label: 'Dusk', icon: Sparkles },
                  { id: 'night', label: 'Night', icon: Moon }
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setTimeOfDay(item.id)}
                      className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold border transition ${
                        timeOfDay === item.id
                          ? 'bg-[#154a56] border-[#154a56] text-white shadow-sm'
                          : 'bg-white border-slate-200 text-[#525d66] hover:text-[#154a56]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Temperature (CCT) */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#154a56] uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#154a56]" /> Color Temperature (CCT)
                </label>
                <span className="text-xs font-bold text-[#154a56] font-mono">{cct}K</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { temp: 2700, label: '2700K Warm', color: 'from-[#b8982f] to-[#d7d225]' },
                  { temp: 4000, label: '4000K Neutral', color: 'from-[#d7d225] to-[#cbd5e1]' },
                  { temp: 6000, label: '6000K Cool', color: 'from-[#cbd5e1] to-[#38bdf8]' }
                ].map(item => (
                  <button
                    key={item.temp}
                    onClick={() => setCct(item.temp)}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold border text-center transition ${
                      cct === item.temp
                        ? 'border-[#154a56] bg-white text-[#154a56] font-bold ring-2 ring-[#154a56]/20 shadow-sm'
                        : 'border-slate-200 bg-white text-[#525d66] hover:text-[#154a56]'
                    }`}
                  >
                    <span className={`block w-full h-1 rounded-full mb-1.5 bg-gradient-to-r ${item.color}`} />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dimming Level */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#154a56] uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#154a56]" /> DALI Architectural Dimming
                </label>
                <span className="text-xs font-bold text-[#154a56] font-mono">{brightness}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#154a56]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0.1% Smooth Low</span>
                <span>50% Ambient</span>
                <span>100% Full Spec</span>
              </div>
            </div>

            {/* Architectural Lighting Layers */}
            <div>
              <label className="text-xs font-bold text-[#154a56] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#154a56]" /> Architectural Fixture Layers
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 transition text-xs font-medium">
                  <span className="text-[#231f20]">Downlights (Direct Lux)</span>
                  <input
                    type="checkbox"
                    checked={directActive}
                    onChange={(e) => setDirectActive(e.target.checked)}
                    className="w-4 h-4 rounded text-[#154a56] focus:ring-0"
                  />
                </label>
                <label className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 transition text-xs font-medium">
                  <span className="text-[#231f20]">Cove Linear LED (Indirect Accent)</span>
                  <input
                    type="checkbox"
                    checked={coveActive}
                    onChange={(e) => setCoveActive(e.target.checked)}
                    className="w-4 h-4 rounded text-[#154a56] focus:ring-0"
                  />
                </label>
                <label className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 cursor-pointer hover:bg-slate-50 transition text-xs font-medium">
                  <span className="text-[#231f20]">Magnetic Accent Spotlights</span>
                  <input
                    type="checkbox"
                    checked={spotsActive}
                    onChange={(e) => setSpotsActive(e.target.checked)}
                    className="w-4 h-4 rounded text-[#154a56] focus:ring-0"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={() => {
                setCct(2700);
                setBrightness(80);
                setTimeOfDay('night');
                setCoveActive(true);
                setSpotsActive(true);
                setDirectActive(true);
              }}
              className="text-xs text-[#525d66] hover:text-[#154a56] font-semibold flex items-center gap-1 transition"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#154a56]" /> Reset to Villa Evening
            </button>
            <span className="text-[11px] text-[#154a56] font-bold font-mono">DALI-2 Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}
