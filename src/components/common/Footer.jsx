import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO } from '../../data/company';

export default function Footer({ onOpenQuote }) {

  return (
    <footer className="relative bg-[#f8fafb] text-[#231f20] border-t border-slate-200 overflow-hidden">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/">
              <BrandLogo variant="dark" className="h-9" showTagline={true} />
            </Link>

            <p className="text-xs text-[#525d66] leading-relaxed max-w-sm pt-2">
              Lumilux Lighting Electrical Fitting Trading L.L.C is your trusted UAE partner for innovative, reliable, and sustainable architectural lighting solutions across residential, commercial, and hospitality projects.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-[#154a56] hover:text-white text-[#525d66] flex items-center justify-center transition shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-[#154a56] hover:text-white text-[#525d66] flex items-center justify-center transition shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-[#154a56] hover:text-white text-[#525d66] flex items-center justify-center transition shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-[#154a56] hover:text-[#d7d225] text-[#154a56] flex items-center justify-center transition shadow-xs"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-[#154a56]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#525d66]">
              <li><Link to="/" className="hover:text-[#154a56] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#154a56] transition">About Corporate</Link></li>
              <li><Link to="/services" className="hover:text-[#154a56] transition">Turnkey Services</Link></li>
              <li><Link to="/products" className="hover:text-[#154a56] transition">Product Systems</Link></li>
              <li><Link to="/contact" className="hover:text-[#154a56] transition">Contact Desks</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-[#154a56]">
              Product Systems
            </h4>
            <ul className="space-y-2.5 text-xs text-[#525d66]">
              <li><Link to="/products" className="hover:text-[#154a56] transition">Recessed Downlights</Link></li>
              <li><Link to="/products" className="hover:text-[#154a56] transition">Linear LED Profiles</Link></li>
              <li><Link to="/products" className="hover:text-[#154a56] transition">48V Magnetic Tracks</Link></li>
              <li><Link to="/products" className="hover:text-[#154a56] transition">Dotless COB Strips</Link></li>
              <li><Link to="/products" className="hover:text-[#154a56] transition">DALI-2 LED Drivers</Link></li>
              <li><Link to="/products" className="hover:text-[#154a56] transition">Smart PIR Sensors</Link></li>
            </ul>
          </div>

          {/* Col 4: Regional Desks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-[#154a56]">
              UAE Regional Desks
            </h4>
            <div className="space-y-3.5 text-xs text-[#525d66]">
              <div>
                <strong className="text-[#231f20] block text-[11px] font-bold">Dubai Head Office</strong>
                <a href={`tel:${COMPANY_INFO.headquarters.phone}`} className="text-[#154a56] font-semibold hover:underline">
                  {COMPANY_INFO.headquarters.phoneDisplay}
                </a>
                <span className="block text-[11px] text-[#525d66] mt-0.5">{COMPANY_INFO.headquarters.building}</span>
              </div>
              <div>
                <strong className="text-[#231f20] block text-[11px] font-bold">Abu Dhabi Branch</strong>
                <a href={`tel:${COMPANY_INFO.branchOffice.phone}`} className="text-[#154a56] font-semibold hover:underline">
                  {COMPANY_INFO.branchOffice.phoneDisplay}
                </a>
                <span className="block text-[11px] text-[#525d66] mt-0.5">{COMPANY_INFO.branchOffice.building}</span>
              </div>
              <div>
                <strong className="text-[#231f20] block text-[11px] font-bold">Email Desk</strong>
                <a href={`mailto:${COMPANY_INFO.headquarters.email}`} className="text-[#154a56] hover:underline font-semibold">
                  {COMPANY_INFO.headquarters.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-center text-[11px] text-slate-500 text-center">
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            <span>
              Copyright © lumilux | Designed by <a href="https://tarah.ae" target="_blank" rel="noopener noreferrer" className="hover:text-[#154a56] transition underline underline-offset-2">tarah.ae</a> Built with
            </span>
            <svg
              className="w-4 h-4 inline-block shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="2" fill="#61DAFB" />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                stroke="#61DAFB"
                strokeWidth="1.5"
                fill="none"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                stroke="#61DAFB"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                stroke="#61DAFB"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(120 12 12)"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
