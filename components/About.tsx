'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" label="ABOUT" title="The engineer behind the interface.">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-white/60 max-w-lg">
            I specialize in API-driven UI architecture for complex fintech systems — building payment and recipient flows where every field, validation, and layout is driven by backend configuration, not hardcoded frontend logic. That's how the same codebase serves 50+ countries across 4 production releases per year.
          </p>
          <p className="text-lg leading-relaxed text-white/60 max-w-lg">
            I joined Bank of America as a trainee and grew into the sole frontend owner of the team's largest annual release in under three years. I caught a critical cross-currency data integrity gap a full month before testing opened — the kind of thing that saves full-stack rework, not just frontend cleanup.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="bg-surface/50 border border-faint p-6 rounded-sm text-center">
              <h4 className="text-goldLight font-display text-xl font-semibold mb-2">API-Driven</h4>
              <p className="text-white/50 text-sm">Zero hardcoded regional logic.</p>
            </div>
            <div className="bg-surface/50 border border-faint p-6 rounded-sm text-center">
              <h4 className="text-goldLight font-display text-xl font-semibold mb-2">Accessible</h4>
              <p className="text-white/50 text-sm">ADA / WCAG compliant by default.</p>
            </div>
            <div className="bg-surface/50 border border-faint p-6 rounded-sm text-center">
              <h4 className="text-goldLight font-display text-xl font-semibold mb-2">i18n-Ready</h4>
              <p className="text-white/50 text-sm">Spanish + multi-currency out of the box.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[3/4] max-w-md mx-auto rotate-2"
        >
          <div className="absolute inset-0 border border-gold/20 rounded-none -rotate-2" />
          <div className="absolute inset-3 border border-gold/40 rounded-none">
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/80 pointer-events-none" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/80 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/80 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/80 pointer-events-none" />
            <div className="absolute inset-0">
              <Image
                src="/images/about-photo.jpg"
                alt="Annisha Biswas closeup"
                fill
                className="object-cover grayscale-[0.1]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}