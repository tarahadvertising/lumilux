import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: 'Dubai',
    projectType: 'Residential Villa',
    serviceNeeded: 'Supply & Installation',
    budgetRange: 'AED 50k - 150k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        projectType: initialData.space || prev.projectType,
        message: `Generated from Lux Calculator:\n• Area: ${initialData.area}\n• Target Lux: ${initialData.targetLux}\n• Lumens: ${initialData.lumens}\n• Recommended Fixtures: ${initialData.fixtures}`
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto text-[#231f20]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#231f20] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-[#154a56]" />
            </div>
            <h3 className="text-2xl font-bold text-[#154a56]">Consultation Request Received</h3>
            <p className="text-[#525d66] text-sm max-w-md mx-auto">
              Thank you, <strong className="text-[#231f20]">{formData.name}</strong>. Our senior lighting engineering team at Lumilux UAE will analyze your requirements and contact you within 24 business hours.
            </p>
            <div className="p-4 rounded-xl bg-[#f8fafb] border border-slate-200 max-w-sm mx-auto text-xs text-[#525d66]">
              <span>Reference Number:</span>
              <div className="text-lg font-mono font-bold text-[#154a56] mt-0.5">{refNumber}</div>
              <div className="text-[11px] text-slate-500 mt-1">A confirmation has been logged for our Dubai & Abu Dhabi desks.</div>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#154a56] hover:bg-[#0e353e] text-white font-bold text-sm transition"
              >
                Done & Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Title */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#154a56]" />
                Official Lumilux Engineering Consultation
              </div>
              <h3 className="text-2xl font-extrabold text-[#154a56]">
                Request Project Quotation & Lighting Study
              </h3>
              <p className="text-xs text-[#525d66] mt-1">
                Receive customized Dialux calculations, photometric schedules, and supply & installation rates for your UAE project.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#231f20] font-semibold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al Mansoori"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56] focus:bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[#231f20] font-semibold mb-1">Company / Architectural Firm</label>
                  <input
                    type="text"
                    placeholder="e.g. Atelier Luxury Interiors"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56] focus:bg-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#231f20] font-semibold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.ae"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56] focus:bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[#231f20] font-semibold mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56] focus:bg-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[#231f20] font-semibold mb-1">Location in UAE</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] focus:outline-none focus:border-[#154a56] focus:bg-white text-xs"
                  >
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Other GCC / Export">Other GCC / Export</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#231f20] font-semibold mb-1">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] focus:outline-none focus:border-[#154a56] focus:bg-white text-xs"
                  >
                    <option value="Residential Villa">Residential Luxury Villa</option>
                    <option value="Commercial Office">Commercial Office / Tower</option>
                    <option value="Hospitality / Dining">Hospitality & Fine Dining</option>
                    <option value="Façade & Landscape">Façade & Landscape</option>
                    <option value="High-End Retail">High-End Retail Boutique</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#231f20] font-semibold mb-1">Service Scope</label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] focus:outline-none focus:border-[#154a56] focus:bg-white text-xs"
                  >
                    <option value="Supply & Installation">Full Supply & Installation</option>
                    <option value="Supply Only">Luminaire Supply Only</option>
                    <option value="Lighting Design & Dialux">Lighting Design & Dialux</option>
                    <option value="Smart Automation & Control">Smart Automation (DALI/KNX)</option>
                    <option value="Bespoke 3D Luminaire">Custom 3D / Bespoke Luminaire</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#231f20] font-semibold mb-1">Project Scope & Photometric Notes</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project dimensions, timeline, ceiling heights, or attach requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56] focus:bg-white text-xs"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-[#525d66]">
                  <ShieldCheck className="w-4 h-4 text-[#154a56]" />
                  <span>ISO 9001:2015 Quality & UAE Standard Guarantee</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#154a56] hover:bg-[#0e353e] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Send className="w-4 h-4 text-[#d7d225]" />
                  Submit Official Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
