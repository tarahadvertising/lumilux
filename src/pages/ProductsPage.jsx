import React, { useState, useMemo } from 'react';
import PageHeader from '../components/common/PageHeader';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { Search, X, FileText, CheckCircle2 } from 'lucide-react';

export default function ProductsPage({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products by category & search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.categoryId === activeCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        title="Architectural Lighting Catalog"
        subtitle="High-performance architectural luminaires engineered for low glare (UGR < 16), superior color fidelity (CRI > 95), and seamless DALI-2 dimming integration."
        bgImage="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1920&q=80"
        breadcrumb="Catalog"
      />



      {/* 3. Product Catalog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-slate-200 rounded-3xl p-8">
              <p className="text-sm text-[#525d66]">No lighting systems matched your search or category filter.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-[#154a56] text-white"
              >
                Reset Catalog Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-[#154a56]/40 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative h-60 bg-slate-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#154a56]">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#525d66] mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 flex items-center justify-end">
                    <button
                      onClick={() =>
                        onOpenQuote({
                          serviceNeeded: 'Supply Only',
                          message: `Product Inquiry: ${product.name} (${product.model})`
                        })
                      }
                      className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#154a56] text-white hover:bg-[#0f343d] transition shadow-xs"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Product Spec Sheet Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-[#231f20]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#231f20] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f5f7] border border-[#154a56]/20 text-[#154a56] text-xs font-bold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              Technical Luminaire Datasheet
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-4 items-start">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full sm:w-44 h-44 rounded-2xl object-cover border border-slate-200 shrink-0"
              />
              <div>
                <span className="text-xs font-mono font-semibold text-slate-400">{selectedProduct.model}</span>
                <h3 className="text-xl font-bold text-[#154a56] mt-0.5">{selectedProduct.name}</h3>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#f0f5f7] text-[#154a56] text-[10px] font-bold">
                  {selectedProduct.categoryName}
                </span>
                <p className="text-xs text-[#525d66] mt-2 leading-relaxed">{selectedProduct.description}</p>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="mt-6 border-t border-slate-100 pt-6">
              <h4 className="text-xs font-bold text-[#154a56] uppercase tracking-wider mb-3">
                Engineering Specifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-[10px] text-slate-400 block">System Power</span>
                  <strong className="text-[#154a56]">{selectedProduct.power}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-[10px] text-slate-400 block">Color Temperature</span>
                  <strong className="text-[#154a56]">{selectedProduct.cct}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-[10px] text-slate-400 block">Color Rendering</span>
                  <strong className="text-[#154a56]">{selectedProduct.cri}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-[10px] text-slate-400 block">Beam Distribution</span>
                  <strong className="text-[#154a56]">{selectedProduct.beamAngle}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-[10px] text-slate-400 block">Ingress Protection</span>
                  <strong className="text-[#154a56]">{selectedProduct.ipRating}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#f8fafb] border border-slate-200">
                  <span className="text-[10px] text-slate-400 block">Dimming Protocol</span>
                  <strong className="text-[#154a56]">{selectedProduct.dimming}</strong>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Dialux IES/LDT Available</span>
              <button
                onClick={() => {
                  const p = selectedProduct;
                  setSelectedProduct(null);
                  onOpenQuote({
                    serviceNeeded: 'Supply Only',
                    message: `Official Quote Request for: ${p.name} (Model: ${p.model})`
                  });
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#154a56] text-white hover:bg-[#0f343d] transition shadow-xs"
              >
                Request Quotation & IES Files
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
