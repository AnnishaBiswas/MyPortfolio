'use client';

import { ReactNode, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  label?: string;
}

export default function Section({ id, className = '', label, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`section-container ${className}`}
    >
      {label && <p className="section-label uppercase text-gold/60 text-sm tracking-[0.2em] font-['Cormorant_Garamond'] mb-4">{label}</p>}
      {title && (
        <h2 className="font-display text-4xl md:text-[52px] font-semibold text-cream mb-16 leading-tight font-[Cormorant_Garamond]">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}