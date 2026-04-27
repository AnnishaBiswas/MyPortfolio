'use client';

import { motion } from 'framer-motion';

const thinkingAreas = [
  {
    title: "Debugging Approach",
    bullets: [
      "Isolate systematically — console.log surgically, not shotgun",
      "Reproduce minimally, then binary-search the fix",
      "Network tab first — 80% of integration bugs live there",
      "Document the why, not just the how",
      "Write the bug report before writing the fix — it clarifies the actual problem"
    ]
  },
  {
    title: "Complex UI Logic",
    bullets: [
      "API-response-driven rendering — UI has no opinion on what fields exist",
      "Custom hooks = reusable, testable brainpower",
      "Dynamic field config over conditional rendering blocks",
      "Error boundaries on every async boundary",
      "Loading + error states = feature complete, not optional"
    ]
  },
  {
    title: "API & State Handling",
    bullets: [
      "TypeScript interfaces mirror the API contract, not assumptions",
      "Zod for runtime validation where the schema matters",
      "Zustand for UI state — predictable, no boilerplate overhead",
      "Optimistic updates + explicit rollback on failure",
      "Test every endpoint in Postman before building the component that consumes it"
    ]
  },
  {
    title: "Scalable Code",
    bullets: [
      "Composition > inheritance — always",
      "Utility-first CSS with Tailwind, no custom class sprawl",
      "Component boundaries follow data ownership, not visual grouping",
      "i18n via JCR from day one — strings never hardcoded",
      "Accessibility (ADA / WCAG) built in, not bolted on after"
    ]
  }
];

export default function HowIThink() {
  return (
    <section className="section-container py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <p className="text-[10px] tracking-[0.18em] uppercase text-gold font-['Cormorant_Garamond'] font-medium mb-4">
          THINKING
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-cream font-['Cormorant_Garamond']">
          How I think as a developer.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {thinkingAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-surface/40 border border-faint border-l-2 border-gold/30 p-8 rounded-sm hover:border-gold/50 transition-all duration-300"
          >
            <h3 className="text-goldLight font-['Cormorant_Garamond'] text-xl font-semibold mb-6 pb-4 border-b border-white/10">
              {area.title}
            </h3>
            <ul className="space-y-3">
              {area.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex items-start gap-3">
                  <span className="text-gold/50 text-xs mt-1 flex-shrink-0">—</span>
                  <span className="text-white/55 leading-relaxed text-sm">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}