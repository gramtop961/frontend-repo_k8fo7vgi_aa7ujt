import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import TestimonialStrip from './components/TestimonialStrip';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Content sections */}
      <FeatureGrid />
      <TestimonialStrip />
      <CTASection />

      {/* Footer */}
      <footer className="mx-auto mt-10 max-w-6xl px-6 pb-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 font-bold text-emerald-950">🥧</div>
            <span>Pie</span>
          </div>
          <p>Deploy AI agents that test like your users. Built with empathy.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
