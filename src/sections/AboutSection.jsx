import React from 'react';
import { siteConfig } from '../data/siteConfig.js';
import Button from '../components/Button.jsx';

export default function AboutSection() {
  const { about } = siteConfig;
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={about.image}
                alt={about.name}
                className="w-full max-w-md mx-auto rounded-2xl object-cover shadow-2xl"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full max-w-md h-full border-2 border-amber-500/30 rounded-2xl -z-10 max-w-md mx-auto" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-8 bg-amber-500 text-black rounded-2xl p-4 shadow-xl z-20">
              <p className="font-bold text-lg leading-none">8+</p>
              <p className="text-xs font-medium mt-0.5">Years of<br />Experience</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">— About Me —</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2 leading-tight">{about.name}</h2>
            <p className="text-amber-600 font-medium mb-6">{about.title}</p>
            <p className="text-zinc-600 leading-relaxed mb-4">{about.bio}</p>
            <p className="text-zinc-600 leading-relaxed mb-8">{about.bio2}</p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {about.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 bg-zinc-50 border border-zinc-100 rounded-xl p-3">
                  <span className="text-xl">{h.icon}</span>
                  <span className="text-zinc-700 text-sm font-medium">{h.label}</span>
                </div>
              ))}
            </div>
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's Work Together →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
