import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { COMPANY_INFO } from '../data/company';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: 'Dubai',
    service: 'Dialux Lighting Design',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        title="Contact Our UAE Desks"
        subtitle="Speak directly with our senior lighting engineers and project directors in Dubai and Abu Dhabi for Dialux photometric studies, product specifications, and turnkey proposals."
      />



      {/* 3. Inquiries Form & Fast WhatsApp */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (Cols 1-7) */}
            <div className="lg:col-span-7 bg-[#f8fafb] border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs">
              <span className="text-xs uppercase tracking-widest font-bold text-[#154a56] block mb-1">
                Project Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#154a56] mb-6">
                Submit Your Project Details
              </h2>

              {submitted ? (
                <div className="py-10 text-center space-y-4 bg-white rounded-2xl border border-slate-200 p-6">
                  <div className="w-16 h-16 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#154a56]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#154a56]">Inquiry Successfully Registered</h3>
                  <p className="text-xs text-[#525d66] max-w-md mx-auto">
                    Thank you, <strong className="text-[#231f20]">{formData.name}</strong>. A lighting engineer has been assigned to your project reference:
                  </p>
                  <div className="p-4 rounded-xl bg-[#f8fafb] border border-slate-200 max-w-xs mx-auto font-mono text-base font-bold text-[#154a56]">
                    {refNumber}
                  </div>
                  <p className="text-[11px] text-slate-400">We will respond within 24 business hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl bg-[#154a56] text-white text-xs font-bold hover:bg-[#0f343d] transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#231f20] font-semibold mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Al Mansoori"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#231f20] font-semibold mb-1">Company / Firm</label>
                      <input
                        type="text"
                        placeholder="e.g. Atelier Luxury Interiors"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#231f20] font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.ae"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56]"
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#231f20] font-semibold mb-1">UAE Location</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#231f20] focus:outline-none focus:border-[#154a56]"
                      >
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Other GCC">Other GCC Country</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#231f20] font-semibold mb-1">Required Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#231f20] focus:outline-none focus:border-[#154a56]"
                      >
                        <option value="Dialux Lighting Design">Dialux Lighting Design</option>
                        <option value="Supply & Installation">Full Supply & Installation</option>
                        <option value="Smart Automation (DALI/KNX)">Smart Automation (DALI/KNX)</option>
                        <option value="Bespoke 3D Luminaire">Bespoke 3D Luminaire</option>
                        <option value="Technical Consultation">Technical Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#231f20] font-semibold mb-1">Project Scope & Notes</label>
                    <textarea
                      rows={4}
                      placeholder="Outline project dimensions, ceiling heights, estimated timeline, or special requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#154a56] hover:bg-[#0f343d] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition"
                    >
                      <Send className="w-4 h-4 text-[#d7d225]" />
                      Submit Official Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Connect Column (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Fast Track Card */}
              <div className="bg-[#154a56] rounded-3xl p-8 text-white shadow-xl">
                <span className="text-xs uppercase font-bold text-[#d7d225] tracking-wider block mb-1">
                  Fast Direct Line
                </span>
                <h3 className="text-xl font-bold text-white">Need an Instant Response?</h3>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Chat directly with our UAE lighting engineering desk on WhatsApp for fast product spec sheets and schedule availability.
                </p>
                <a
                  href={COMPANY_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d7d225] hover:bg-[#c4bf1d] text-[#154a56] font-bold text-xs shadow-sm transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* UAE Commercial Notice */}
              <div className="p-6 rounded-2xl bg-[#f8fafb] border border-slate-200 text-xs text-[#525d66] space-y-2">
                <div className="font-bold text-[#154a56] uppercase tracking-wider text-[11px]">
                  Corporate Entity
                </div>
                <p className="leading-relaxed">
                  <strong>Legal Entity:</strong> {COMPANY_INFO.legalName}
                </p>
                <p className="leading-relaxed">
                  <strong>Jurisdiction:</strong> Dubai & Abu Dhabi, United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
