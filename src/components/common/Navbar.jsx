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

      {/* Main Navigation Bar in Lumilux Petrol Teal (#154a56) */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-[#154a56]/95 backdrop-blur-md shadow-md py-3' : 'bg-[#154a56] py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo in Reversed White on Teal */}
          <Link to="/" className="flex items-center gap-3">
            <BrandLogo variant="white" className="h-8 sm:h-9" />
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
                            ? 'text-[#d7d225] font-bold'
                            : 'text-white/90 '
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform text-white/80 " />
                    </NavLink>

                    {/* Dropdown Menu */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-64 pt-2 z-50">
                        <div className="bg-[#123e48] border border-[#1c5d6c] rounded-2xl p-2 shadow-2xl">
                          {link.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.path}
                              className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-white/90 transition flex items-center justify-between group/item font-medium"
                            >
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 text-white/40 transition" />
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
                          ? 'text-[#d7d225] font-bold'
                          : 'text-white/90 '
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Action CTA in Signature Lumilux Yellow */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-xl text-xs font-extrabold bg-[#d7d225] text-[#154a56] shadow-md transition-all flex items-center gap-1.5 tracking-wider"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#154a56]" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 text-white transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#154a56] border-b border-[#1c5d6c] px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left text-sm font-semibold py-2.5 border-b border-white/10 transition ${
                    isActive ? 'text-[#d7d225] font-bold' : 'text-white/80 '
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
              className="w-full py-3 rounded-xl text-xs font-extrabold bg-[#d7d225] text-[#154a56] flex items-center justify-center gap-2 shadow-md tracking-wider"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#154a56]" />
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-white/70 space-y-1.5">
            <div>Dubai Desk: <a href="tel:+97145540958" className="text-white font-bold">04 554 0958</a></div>
            <div>Abu Dhabi Desk: <a href="tel:+97125849831" className="text-white font-bold">02 584 9831</a></div>
            <div>Email: <a href={`mailto:${COMPANY_INFO.headquarters.email}`} className="text-[#d7d225] font-medium">{COMPANY_INFO.headquarters.email}</a></div>
          </div>
        </div>
      )}
    </header>
  );
}
