import React from 'react';
import { Check, Star } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Button from '../components/Button.jsx';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Investment"
          title="Simple, Transparent Pricing"
          subtitle="No hidden fees, no surprises. Just honest pricing for exceptional photography."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {siteConfig.pricing.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${plan.popular
                  ? 'bg-zinc-800 border-2 border-amber-500 shadow-2xl shadow-amber-500/20 scale-105'
                  : 'bg-zinc-800/60 border border-zinc-700/50 hover:border-zinc-600'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Star size={11} fill="black" /> Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-amber-400' : 'text-white'}`}>{plan.price}</span>
                  <span className="text-zinc-500 text-sm">/ {plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-amber-500' : 'bg-zinc-700'}`}>
                      <Check size={10} className={plan.popular ? 'text-black' : 'text-zinc-400'} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'primary' : 'dark'}
                className="w-full justify-center"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-500 text-sm mt-8">All packages include a complimentary consultation. Custom packages available on request.</p>
      </div>
    </section>
  );
}
