import React from 'react';

const CTASection = () => {
  return (
    <section id="get-started" className="relative z-10 mx-auto my-16 max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-500/10 via-emerald-400/10 to-cyan-400/10 p-8 text-center text-white shadow-xl">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
        <h3 className="text-2xl font-semibold md:text-3xl">Ready to meet your sweetest tests?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-white/80">
          Invite Pie to your product. We’ll bring the curiosity, empathy, and coverage — you bring the wow moments to your users.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-emerald-900 shadow-lg transition hover:translate-y-[-2px] hover:shadow-emerald-400/30"
          >
            Book a demo
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Or start free
          </a>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-white/60">No credit card required. Cancel anytime.</p>
    </section>
  );
};

export default CTASection;
