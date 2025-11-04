import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm text-white/90">Human-feel AI test squads</span>
        </div>
        <h1 className="font-display text-4xl font-semibold leading-tight text-white drop-shadow-sm md:text-6xl">
          Meet Pie — delightful AI agents that test like your real users
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/85 md:text-lg">
          Deploy a squad of AI agents that think and explore like humans. Reach 80% end‑to‑end coverage in about 30 minutes — without the brittle scripts.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 font-medium text-emerald-950 shadow-lg shadow-emerald-400/30 transition hover:translate-y-[-2px] hover:bg-emerald-300"
          >
            Start a free pilot
            <svg
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            See how it works
          </a>
        </div>
        <div className="mt-6 flex items-center gap-4 text-xs text-white/70">
          <span>≈ 30 min setup</span>
          <span>•</span>
          <span>No code changes needed</span>
          <span>•</span>
          <span>Works across web & mobile</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
