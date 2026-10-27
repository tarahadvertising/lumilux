import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO } from '../../data/company';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    {
      label: 'Services',
      path: '/services',
      hasDropdown: true,
      items: [
        { title: 'Light Installation', path: '/services?service=light-installation' },
        { title: 'Design Service', path: '/services?service=design-service' },
        { title: 'Smart Automation', path: '/services?service=smart-automation' },
        { title: 'Light Control', path: '/services?service=lighting-control' }
      ]
    },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">

      {/* Main Clean White Navigation Bar */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3' : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo in Teal on White */}
          <Link to="/" className="flex items-center gap-3">
            <BrandLogo variant="dark" className="h-8 sm:h-9" showTagline={!scrolled} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wide">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                    className="relative"
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-1 py-2 transition ${
                          isActive
                            ? 'text-[#154a56] font-bold border-b-2 border-[#154a56]'
                            : 'text-[#154a56] hover:text-[#b8982f]'
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-[#154a56]" />
                    </NavLink>

                    {/* Dropdown Menu in Clean White */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-64 pt-2 z-50">
                        <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-xl">
                          {link.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.path}
                              className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-[#231f20] hover:text-[#154a56] hover:bg-[#f2f7f8] transition flex items-center justify-between group/item font-medium"
                            >
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 text-slate-400 group-hover/item:text-[#154a56] group-hover/item:translate-x-0.5 transition" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `py-2 transition relative ${
                        isActive
                          ? 'text-[#154a56] font-bold border-b-2 border-[#154a56]'
                          : 'text-[#154a56] hover:text-[#b8982f]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#154a56] text-white hover:bg-[#0f343d] shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-3 h-3 text-[#d7d225]" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-[#154a56] hover:bg-slate-200 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu in Clean White */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left text-sm font-semibold py-2.5 border-b border-slate-100 transition ${
                    isActive ? 'text-[#154a56] font-bold' : 'text-[#525d66] hover:text-[#154a56]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-xs font-bold bg-[#154a56] text-white flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#d7d225]" />
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-200 text-xs text-[#525d66] space-y-1.5">
            <div>Dubai Desk: <a href="tel:+97145540958" className="text-[#154a56] font-bold">04 554 0958</a></div>
            <div>Abu Dhabi Desk: <a href="tel:+97125849831" className="text-[#154a56] font-bold">02 584 9831</a></div>
            <div>Email: <a href={`mailto:${COMPANY_INFO.headquarters.email}`} className="text-[#154a56] font-medium">{COMPANY_INFO.headquarters.email}</a></div>
          </div>
        </div>
      )}
    </header>
  );
}
