import React from 'react';

const people = [
  {
    name: 'Mara — Head of QA',
    quote:
      'Pie feels like pairing with a curious teammate. It explores the UI the way our users do and finds issues our scripts missed.',
    emoji: '🧭',
  },
  {
    name: 'Jon — Eng Lead',
    quote:
      'We hit meaningful coverage in a single afternoon. Flakiness is way down and confidence is way up.',
    emoji: '🚀',
  },
  {
    name: 'Priya — PM',
    quote:
      'The empathy is real. Tests catch UX regressions that actually matter to customers.',
    emoji: '💛',
  },
];

const TestimonialStrip = () => {
  return (
    <section className="relative z-10 mx-auto mt-8 max-w-6xl px-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-inner">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {people.map((p) => (
            <figure key={p.name} className="">
              <div className="mb-2 text-2xl">{p.emoji}</div>
              <blockquote className="text-sm text-white/80">“{p.quote}”</blockquote>
              <figcaption className="mt-2 text-xs font-medium text-white/60">{p.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialStrip;
