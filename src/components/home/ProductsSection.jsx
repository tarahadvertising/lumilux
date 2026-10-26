import React, { useState } from 'react';
import { Layers, ArrowRight, Eye, Check, X } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../../data/products';

export default function ProductsSection({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProduct, setActiveProduct] = useState(null);

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.categoryId === selectedCategory);

  return (
    <section id="products" className="relative py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#154a56]" />
              Architectural Product Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#154a56] tracking-tight">
              Luminaires & Electrical Systems
            </h2>
            <p className="text-[#525d66] text-sm mt-2 max-w-xl leading-relaxed">
              Engineered with premier LEDs, gold-plated copper PCBs, aerospace-grade aluminium extrusions, and certified DALI-2 driver electronics.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-[#525d66]">
            Showing <strong className="text-[#154a56]">{filteredProducts.length}</strong> architectural systems
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#154a56] text-white shadow-sm'
                  : 'bg-[#f8fafb] text-[#525d66] hover:text-[#154a56] border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid in Clean White */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-[#154a56] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-slate-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#154a56] border border-slate-200 shadow-sm">
                    {product.categoryName}
                  </div>

                  {product.featured && (
                    <div className="absolute top-3 right-3 bg-[#154a56] text-white font-bold px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">
                      Flagship
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <div className="text-[10px] font-mono text-[#154a56] mb-1 font-bold">{product.model}</div>
                  <h3 className="text-sm font-bold text-[#231f20] group-hover:text-[#154a56] transition line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Quick specs strip */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[10px] font-medium">Luminous Flux</span>
                      <strong className="text-[#154a56] truncate block">{product.lumens}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-medium">CCT Range</span>
                      <strong className="text-[#154a56] truncate block">{product.cct}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-medium">CRI Rating</span>
                      <strong className="text-[#231f20] truncate block">{product.cri}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-medium">Protection</span>
                      <strong className="text-[#525d66] truncate block">{product.ipRating}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveProduct(product)}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#f8fafb] hover:bg-[#f0f5f7] text-[#154a56] border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Specs</span>
                </button>

                <button
                  onClick={() => onOpenQuote({ space: `Fixture: ${product.name} (${product.model})` })}
                  className="py-2 px-3 rounded-xl bg-[#154a56] hover:bg-[#0d2f37] text-white text-xs font-bold transition flex items-center gap-1 shadow-sm"
                >
                  <span>Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Spec Detail Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>

              <div className="sm:col-span-7 space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-[#f0f5f7] text-[#154a56] font-bold border border-[#154a56]/20">
                  {activeProduct.model}
                </span>
                <h3 className="text-xl font-bold text-[#154a56]">{activeProduct.name}</h3>
                <p className="text-xs text-[#525d66] leading-relaxed">{activeProduct.description}</p>
              </div>
            </div>

            {/* Comprehensive Technical Matrix */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="text-xs uppercase font-bold text-[#154a56] tracking-wider mb-3">
                Technical Data Matrix
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-slate-400 block text-[10px] font-medium">Power Input</span>
                  <strong className="text-[#154a56]">{activeProduct.power}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-slate-400 block text-[10px] font-medium">Luminous Output</span>
                  <strong className="text-[#154a56]">{activeProduct.lumens}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-slate-400 block text-[10px] font-medium">Color Rendering</span>
                  <strong className="text-[#231f20]">{activeProduct.cri}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-slate-400 block text-[10px] font-medium">Beam Distribution</span>
                  <strong className="text-[#154a56]">{activeProduct.beamAngle}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-slate-400 block text-[10px] font-medium">Dimming Protocol</span>
                  <strong className="text-[#154a56]">{activeProduct.dimming}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-slate-400 block text-[10px] font-medium">Enclosure Rating</span>
                  <strong className="text-[#525d66]">{activeProduct.ipRating}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#525d66]">Finish: <strong className="text-[#154a56]">{activeProduct.finish}</strong></span>
              <button
                onClick={() => {
                  const p = `Product Quote: ${activeProduct.name} (${activeProduct.model})`;
                  setActiveProduct(null);
                  onOpenQuote({ space: p });
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#154a56] hover:bg-[#0d2f37] text-white text-xs font-bold shadow-sm"
              >
                Inquire on Bulk Supply & Pricing
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
