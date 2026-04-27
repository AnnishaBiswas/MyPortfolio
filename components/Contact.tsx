'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import AvailabilityClock from './AvailabilityClock';

const links = [
  {
    label: 'Email',
    value: 'annisha.biswas@proton.me',
    href: 'mailto:annisha.biswas@proton.me',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/annisha-biswas-53b814193',
    href: 'https://linkedin.com/in/annisha-biswas-53b814193',
  },
  {
    label: 'GitHub',
    value: 'github.com/AnnishaBiswas',
    href: 'https://github.com/AnnishaBiswas',
  },
  {
    label: 'Phone',
    value: '+91-8582813806',
    href: 'tel:+918582813806',
  },
];

export default function Contact() {
  return (
    <Section id="contact" label="CONTACT" title="Let's work together.">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left — blurb + clock */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-white/50 text-base leading-relaxed max-w-sm">
            Open to senior frontend roles in fintech, payment infrastructure, or product engineering. Full time — hybrid preferred.
          </p>
          <AvailabilityClock />
        </motion.div>

        {/* Right — contact links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between group border border-white/[0.06] hover:border-gold/30 px-4 py-4 transition-colors duration-200"
            >
              <span className="text-sm tracking-[0.14em] uppercase text-gold/70 font-['Cormorant_Garamond'] w-24 flex-shrink-0">
                {item.label}
              </span>
              <span className="text-white/60 text-sm group-hover:text-white/90 transition-colors font-mono truncate text-right">
                {item.value}
              </span>
            </a>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}