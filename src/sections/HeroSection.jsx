import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';
import Button from '../components/Button.jsx';

export default function HeroSection() {
  const { hero } = siteConfig;
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg(i => (i + 1) % hero.heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background images */}
      {hero.heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${img})`, opacity: i === currentImg ? 1 : 0 }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      {/* Dots indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {hero.heroImages.map((_, i) => (
          <button key={i} onClick={() => setCurrentImg(i)} className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === currentImg ? 'bg-amber-500 w-6' : 'bg-white/40'}`} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mt-15 opacity-90">
          ✦ Professional Photography ✦
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          {hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" onClick={() => scrollTo('gallery')}>
            {hero.ctaPrimary.label} →
          </Button>
          <Button size="lg" variant="secondary" onClick={() => scrollTo('contact')}>
            {hero.ctaSecondary.label}
          </Button>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/20 pt-10">
          {hero.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-amber-400 text-sm font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
