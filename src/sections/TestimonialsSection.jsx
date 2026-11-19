import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';
import SectionHeader from '../components/SectionHeader.jsx';

export default function TestimonialsSection() {
  const { testimonials } = siteConfig;
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Auto advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Client Love"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from the people behind the photos."
        />
        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg transition-all duration-300 group">
              <Quote size={28} className="text-amber-300 mb-4" />
              <p className="text-zinc-600 leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-200" />
                <div>
                  <p className="text-zinc-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-zinc-400 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
