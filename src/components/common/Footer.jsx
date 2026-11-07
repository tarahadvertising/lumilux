import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO } from '../../data/company';

export default function Footer({ onOpenQuote }) {

  return (
    <footer className="relative bg-[#154a56] text-white border-t-2 border-t-[#d7d225] overflow-hidden">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/">
              <BrandLogo variant="white" className="h-9" />
            </Link>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm pt-2">
              Lumilux is your trusted UAE partner for innovative, reliable, and sustainable architectural lighting solutions across residential, commercial, and hospitality projects.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <span
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 text-white/80 flex items-center justify-center shadow-xs transition cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </span>
              <span
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 text-white/80 flex items-center justify-center shadow-xs transition cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </span>
              <span
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 text-white/80 flex items-center justify-center shadow-xs transition cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </span>
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#d7d225] text-[#154a56] flex items-center justify-center shadow-xs transition"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-[#d7d225]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li><Link to="/services?service=light-installation" className="transition">Light Installation</Link></li>
              <li><Link to="/services?service=design-service" className="transition">Design Service</Link></li>
              <li><Link to="/services?service=smart-automation" className="transition">Smart Automation</Link></li>
              <li><Link to="/services?service=lighting-control" className="transition">Light Control</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-[#d7d225]">
              Product Systems
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li><Link to="/products" className="transition">Recessed Downlights</Link></li>
              <li><Link to="/products" className="transition">Linear LED Profiles</Link></li>
              <li><Link to="/products" className="transition">48V Magnetic Tracks</Link></li>
              <li><Link to="/products" className="transition">Dotless COB Strips</Link></li>
              <li><Link to="/products" className="transition">DALI-2 LED Drivers</Link></li>
              <li><Link to="/products" className="transition">Smart PIR Sensors</Link></li>
            </ul>
          </div>

          {/* Col 4: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-[#d7d225]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li><Link to="/" className="transition">Home</Link></li>
              <li><Link to="/about" className="transition">About Corporate</Link></li>
              <li><Link to="/services" className="transition">Services</Link></li>
              <li><Link to="/products" className="transition">Products</Link></li>
              <li><Link to="/contact" className="transition">Contact Desks</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-center text-[11px] text-white/60 text-center">
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            <span>
              Copyright © lumilux | Designed by <a href="https://tarah.ae" target="_blank" rel="noopener noreferrer" className="text-[#d7d225] font-semibold transition underline underline-offset-2">tarah.ae</a> Built with
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
