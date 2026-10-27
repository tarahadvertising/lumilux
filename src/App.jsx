import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import QuoteModal from './components/common/QuoteModal';
import ScrollToTop from './components/common/ScrollToTop';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

import { MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from './data/company';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState(null);

  const handleOpenQuote = (data = null) => {
    setQuoteData(data);
    setIsQuoteOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      {/* Scroll restoration on page route navigation */}
      <ScrollToTop />

      <div className="min-h-screen bg-white text-[#231f20] flex flex-col selection:bg-[#154a56] selection:text-white">
        {/* Persistent Top Navigation Bar */}
        <Navbar onOpenQuote={handleOpenQuote} />

        {/* Multi-Page Route Outlet */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<AboutPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/products" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<ContactPage onOpenQuote={handleOpenQuote} />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Corporate Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        {/* Floating Quick Action Buttons (WhatsApp & Scroll to Top) */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-[#154a56] border border-slate-200 flex items-center justify-center shadow-md transition"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          <a
            href={COMPANY_INFO.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact on WhatsApp"
            className="w-12 h-12 rounded-full bg-[#154a56] hover:bg-[#0e353e] text-white flex items-center justify-center shadow-lg transition hover:scale-105 border border-[#154a56]"
          >
            <MessageCircle className="w-6 h-6 text-[#d7d225]" />
          </a>
        </div>

      </div>
    </BrowserRouter>
  );
}
