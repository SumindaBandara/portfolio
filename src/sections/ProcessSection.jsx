import React from 'react';
import { siteConfig } from '../data/siteConfig.js';
import SectionHeader from '../components/SectionHeader.jsx';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="How It Works"
          title="Your Journey With Us"
          subtitle="A simple, stress-free process designed to make your experience as enjoyable as the results."
        />
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.process.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-16 h-16 bg-white border-2 border-amber-200 rounded-full flex items-center justify-center shadow-md text-2xl z-10 relative">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-black text-[10px] font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-zinc-900 font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
