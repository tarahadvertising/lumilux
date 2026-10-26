import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export default function ContactSection({ onOpenQuote }) {
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#154a56]" />
            UAE Regional Desks
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154a56] tracking-tight">
            Connect with Lumilux Lighting
          </h2>
          <p className="text-[#525d66] text-sm sm:text-base mt-2">
            Reach our engineering teams in Dubai and Abu Dhabi for immediate consultation, project estimation, and site surveys.
          </p>
        </div>

        {/* 2-Column Main Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Office Cards (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Dubai Head Office */}
            <div className="bg-[#f8fafb] p-7 rounded-2xl border border-slate-200 hover:border-[#154a56] transition-all shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-[#154a56] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#154a56]" /> Head Office
                </span>
                <span className="text-[10px] text-[#154a56] bg-white font-bold px-2.5 py-0.5 rounded border border-slate-200">Dubai</span>
              </div>
              <h4 className="text-lg font-bold text-[#154a56] mb-2">{COMPANY_INFO.headquarters.building}</h4>
              <p className="text-xs text-[#525d66] leading-relaxed flex items-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#154a56] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headquarters.address}</span>
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-200 text-xs">
                <a href={`tel:${COMPANY_INFO.headquarters.phone}`} className="flex items-center gap-2 text-[#231f20] hover:text-[#154a56] transition font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#154a56]" />
                  <span>Direct: <strong className="text-[#154a56] font-mono">{COMPANY_INFO.headquarters.phoneDisplay}</strong></span>
                </a>
                <a href={`mailto:${COMPANY_INFO.headquarters.email}`} className="flex items-center gap-2 text-[#525d66] hover:text-[#154a56] transition">
                  <Mail className="w-3.5 h-3.5 text-[#154a56]" />
                  <span>{COMPANY_INFO.headquarters.email}</span>
                </a>
                <div className="flex items-center gap-2 text-[#525d66] text-[11px] pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#154a56]" />
                  <span>{COMPANY_INFO.headquarters.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Abu Dhabi Branch Office */}
            <div className="bg-[#f8fafb] p-7 rounded-2xl border border-slate-200 hover:border-[#154a56] transition-all shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-[#154a56] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#154a56]" /> Branch Office
                </span>
                <span className="text-[10px] text-[#154a56] bg-white font-bold px-2.5 py-0.5 rounded border border-slate-200">Abu Dhabi</span>
              </div>
              <h4 className="text-lg font-bold text-[#154a56] mb-2">{COMPANY_INFO.branchOffice.building}</h4>
              <p className="text-xs text-[#525d66] leading-relaxed flex items-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#154a56] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.branchOffice.address}</span>
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-200 text-xs">
                <a href={`tel:${COMPANY_INFO.branchOffice.phone}`} className="flex items-center gap-2 text-[#231f20] hover:text-[#154a56] transition font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#154a56]" />
                  <span>Direct: <strong className="text-[#154a56] font-mono">{COMPANY_INFO.branchOffice.phoneDisplay}</strong></span>
                </a>
                <a href={`mailto:${COMPANY_INFO.branchOffice.email}`} className="flex items-center gap-2 text-[#525d66] hover:text-[#154a56] transition">
                  <Mail className="w-3.5 h-3.5 text-[#154a56]" />
                  <span>{COMPANY_INFO.branchOffice.email}</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Fast Track Banner */}
            <a
              href={COMPANY_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#f0f7f8] border border-[#154a56]/20 flex items-center justify-between group hover:border-[#154a56] transition shadow-sm"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#154a56] block">Instant Architectural Support</span>
                <div className="text-xs font-bold text-[#154a56] mt-0.5">Chat with an Engineer on WhatsApp</div>
              </div>
              <span className="text-xs font-bold text-[#154a56] group-hover:translate-x-1 transition-transform">
                +971 50 187 5414 →
              </span>
            </a>
          </div>

          {/* Right Column: Direct Messaging Form (Cols 6-12) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xl">
            {formSent ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#154a56] mx-auto" />
                <h4 className="text-2xl font-bold text-[#154a56]">Message Dispatched Successfully</h4>
                <p className="text-[#525d66] text-xs max-w-md mx-auto">
                  Thank you, <strong className="text-[#154a56]">{contactData.name}</strong>. A lighting engineer has been assigned to your inquiry and will contact you via {contactData.email} within 2 hours.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#154a56] text-white text-xs font-bold hover:bg-[#0d2f37] transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-[#154a56]">Send Direct Message</h4>
                  <p className="text-xs text-[#525d66] mt-1">
                    Fill out the form below or request a full photometric proposal via our consultation button.
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#154a56] font-bold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[#154a56] font-bold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@studio.ae"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#154a56] font-bold mb-1">Phone / Mobile</label>
                      <input
                        type="tel"
                        placeholder="+971 50 000 0000"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[#154a56] font-bold mb-1">Inquiry Subject</label>
                      <select
                        value={contactData.subject}
                        onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] focus:outline-none focus:border-[#154a56] focus:bg-white"
                      >
                        <option value="General Inquiry">General Architectural Inquiry</option>
                        <option value="Villa Lighting Fitout">Residential Villa Fitout</option>
                        <option value="Commercial Tower / Office">Commercial Tower / Office</option>
                        <option value="Bespoke 3D Luminaire">Bespoke 3D Luminaire Order</option>
                        <option value="Dialux Study Request">Dialux 3D Study Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#154a56] font-bold mb-1">Project Details & Requirements *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please describe your lighting scope, building type, timeline, or product codes..."
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafb] border border-slate-300 text-[#231f20] placeholder-slate-400 focus:outline-none focus:border-[#154a56] focus:bg-white"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenQuote()}
                      className="text-xs text-[#154a56] hover:underline font-bold"
                    >
                      Need formal tender quotation? Open Quote Wizard →
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#154a56] hover:bg-[#0d2f37] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Message</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Accordion in Clean White */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#154a56]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-[#525d66] mt-1">
              Common architectural queries regarding Lumilux products and execution
            </p>
          </div>

          <div className="space-y-3">
            {COMPANY_INFO.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#154a56]">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#154a56] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-[#525d66] leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
