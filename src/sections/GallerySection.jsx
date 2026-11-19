import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Button from '../components/Button.jsx';

export default function GallerySection() {
  const { gallery } = siteConfig;
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filtered

  const filtered = activeCategory === 'All' ? gallery.items : gallery.items.filter(i => i.category === activeCategory);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImg = useCallback(() => setLightbox(i => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const nextImg = useCallback(() => setLightbox(i => (i + 1) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, closeLightbox, prevImg, nextImg]);

  return (
    <section id="gallery" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Work"
          title="A Glimpse Into Our World"
          subtitle="Every frame tells a story. Browse through our portfolio of carefully crafted moments."
        />
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {gallery.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${activeCategory === cat ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30' : 'bg-white text-zinc-600 border border-zinc-200 hover:border-amber-400 hover:text-amber-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Masonry grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl bg-zinc-200"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs text-amber-400 font-semibold tracking-wide uppercase mb-1">{item.category}</span>
                <p className="text-white font-semibold text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">View Full Portfolio</Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-5 right-5 text-white hover:text-amber-400 transition-colors z-10 cursor-pointer"><X size={32} /></button>
          <button onClick={(e) => { e.stopPropagation(); prevImg(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/40 p-2 rounded-full cursor-pointer z-10"><ChevronLeft size={32} /></button>
          <div className="max-w-4xl max-h-[85vh] w-full" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox]?.image} alt={filtered[lightbox]?.title} className="w-full h-full object-contain rounded-xl" />
            <p className="text-center text-white/80 mt-3 text-sm">{filtered[lightbox]?.title} · <span className="text-amber-400">{filtered[lightbox]?.category}</span></p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextImg(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/40 p-2 rounded-full cursor-pointer z-10"><ChevronRight size={32} /></button>
        </div>
      )}
    </section>
  );
}
