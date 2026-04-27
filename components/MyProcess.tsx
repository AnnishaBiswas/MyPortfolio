'use client';

import { motion } from 'framer-motion';

export default function MyProcess() {
  return (
    <motion.section
      id="process"
      className="section-container py-16 md:py-24 bg-gradient-to-b from-slate-900/50 to-white/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12 md:mb-16">
        <motion.p
          className="text-[10px] tracking-[0.18em] uppercase text-gold font-['Cormorant_Garamond'] font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          HOW I WORK
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-cream font-['Cormorant_Garamond']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          From requirement to release.
        </motion.h2>
      </div>

      <div className="space-y-12 md:space-y-16 mb-16 md:mb-24">
        <div className="space-y-8 md:space-y-12">
          {[
            {
              number: "01",
              name: "Read the brief twice",
              body: "Before writing a line of code, I map out the full user journey and flag any ambiguities in the requirements. At BofA, this habit caught 2–3 critical logic gaps before they ever reached QA.",
              icon: "👁️"
            },
            {
              number: "02",
              name: "Design in components",
              body: "I decompose every feature into reusable, independently testable units — the same approach I used to build payment and recipient UIs that work across 50+ countries without hardcoded country logic.",
              icon: "🧱"
            },
            {
              number: "03",
              name: "Build API-first",
              body: "I integrate backend service responses early, building UIs that render dynamically from data — not from assumptions. This keeps the interface flexible as business rules evolve.",
              icon: "🔄"
            },
            {
              number: "04",
              name: "Test at the edges",
              body: "Currency switches, empty states, network failures, ADA compliance — I test the paths users aren't supposed to take. That's where production bugs live.",
              icon: "⚠️"
            },
            {
              number: "05",
              name: "Ship, then sharpen",
              body: "Post-launch, I monitor for edge cases and refactor proactively — improving state mapping, conditional rendering, and routing logic without waiting to be asked.",
              icon: "✅"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-start gap-6 md:gap-12 p-6 md:p-8 rounded-sm bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="flex flex-col items-center md:items-start gap-3 md:mr-8 flex-shrink-0 w-20">
                <div className="text-3xl md:text-4xl">{step.icon}</div>
                <div className="text-2xl md:text-3xl font-semibold text-white/30 font-['Cormorant_Garamond']">{step.number}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 font-['Cormorant_Garamond']">{step.name}</h3>
                <p className="text-white/55 leading-relaxed text-sm md:text-base">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-sm p-6 md:p-12 max-w-4xl mx-auto"
      >
        <h3 className="text-[10px] tracking-[0.18em] uppercase text-gold font-['Cormorant_Garamond'] font-medium mb-2">
          CASE STUDY
        </h3>
        <h4 className="text-2xl font-semibold text-cream font-['Cormorant_Garamond'] mb-8">
          Bank of America — FX Currency-Change Flow
        </h4>

        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3">
            <h5 className="text-gold/70 font-semibold text-[11px] uppercase tracking-widest">
              THE PROBLEM
            </h5>
            <p className="text-white/55 text-sm md:text-base leading-relaxed">
              In a multi-step international payment flow, switching the destination currency mid-journey was silently wiping all previously entered financial data — account numbers, routing codes, additional fields. Users would reach the final confirmation screen and find an empty form. In a live banking environment, that's a critical data-loss bug.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-gold/70 font-semibold text-[11px] uppercase tracking-widest">
              MY APPROACH
            </h5>
            <p className="text-white/55 text-sm md:text-base leading-relaxed">
              I designed a retain logic layer that intercepted currency change events and selectively preserved field values that remained valid for the new currency configuration — using the backend service response to determine which fields carried over and which needed to reset. The logic had to be stateless at the UI level and driven entirely from API responses.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-gold/70 font-semibold text-[11px] uppercase tracking-widest">
              THE OUTCOME
            </h5>
            <p className="text-white/55 text-sm md:text-base leading-relaxed">
              Zero data-loss incidents post-release. The solution was adopted as the standard pattern for currency-switching flows across the module. It also became the foundation for the dynamic field handling system that now supports varying account, routing, and additional field requirements across all 50+ countries — with no hardcoded logic.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 md:p-6 bg-slate-950 border border-slate-700 rounded-sm font-mono text-xs md:text-sm overflow-x-auto">
          <pre className="whitespace-pre-wrap text-white/60 leading-relaxed">
{`onCurrencyChange(newCurrency) {
  const validFields = api.getFieldConfig(newCurrency)
  const preserved = {}
  for (const [field, value] of currentFormState) {
    if (validFields.includes(field) && value !== "") {
      preserved[field] = value
    }
    // else reset silently — API drives it
  }
  return { ...preserved, currency: newCurrency }
}`}
          </pre>
        </div>
      </motion.div>
    </motion.section>
  );
}