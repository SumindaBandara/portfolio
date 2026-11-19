import React from 'react';
import { Check } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Button from '../components/Button.jsx';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="What We Offer"
          title="Photography Services"
          subtitle="From intimate portraits to grand celebrations — we bring our full artistry to every session."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="group bg-zinc-800/50 border border-zinc-700/50 hover:border-amber-500/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <Check size={14} className="text-amber-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="border-t border-zinc-700/50 pt-5 flex items-center justify-between">
                <span className="text-amber-400 font-semibold text-sm">{service.price}</span>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-zinc-400 hover:text-amber-400 text-sm font-medium transition-colors cursor-pointer"
                >
                  Inquire →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
