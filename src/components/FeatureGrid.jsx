import React from 'react';
import { Rocket, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: '80% E2E in 30 minutes',
    desc: 'Spin up coverage fast. Agents self-discover flows and verify the critical paths end to end.',
    color: 'from-emerald-400/30 to-cyan-400/30',
  },
  {
    icon: Users,
    title: 'Feels human',
    desc: "Agents click, scroll, and decide like your users — not like brittle scripts.",
    color: 'from-pink-400/30 to-orange-400/30',
  },
  {
    icon: Shield,
    title: 'Catches real risks',
    desc: 'Grounded in UX signals, not just DOM selectors. Fewer flaky tests, more signal.',
    color: 'from-violet-400/30 to-indigo-400/30',
  },
  {
    icon: Clock,
    title: 'Continuous coverage',
    desc: 'Run on every PR or on a schedule. Agents adapt as your product evolves.',
    color: 'from-amber-400/30 to-lime-400/30',
  },
];

const FeatureCard = ({ icon: Icon, title, desc, color }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-xl backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.04]">
    <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${color} blur-2xl`} />
    <div className="relative">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/75">{desc}</p>
    </div>
  </div>
);

const FeatureGrid = () => {
  return (
    <section id="how-it-works" className="relative z-10 mx-auto -mt-12 max-w-6xl px-6 pb-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Why teams pick Pie</h2>
        <p className="mt-2 text-white/70">Playful to try. Serious about coverage.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
