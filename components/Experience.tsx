'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';

const experiences = [
  {
    company: 'Bank of America',
    role: 'SENIOR FRONTEND ENGINEER',
    duration: '2022 - Present',
    bullets: [
      'Led frontend for global banking platform serving 50+ countries (200M+ users)',
      'Reduced page load time by 40% through code splitting and lazy loading',
      'Designed component library used by 12+ engineering teams (80% adoption)',
      'Built real-time dashboard with WebSocket API handling 10K+ concurrent users',
      'Collaborated with design/PM to ship 25+ features on time (100% satisfaction)',
    ],
  },
  {
    company: 'Bank of America',
    role: 'SOFTWARE ENGINEER- TRAINEE  (APPRENTICE)',
    duration: '2020 - 2022',
    bullets: [
      'Architected payment UI system processing $500M+ monthly',
      'Introduced design tokens system reducing CSS bundle by 65%',
      'Mentored 8 engineers on React patterns and performance',
      'Launched A/B testing framework improving conversion 12%',
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="experience" label="EXPERIENCE" title="Where I've Worked">
      <div className="bg-surface/50 rounded-sm border border-faint max-w-6xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-4 gap-0">
          {/* Job list */}
          <div className="md:border-r border-faint">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-8 border-b border-faint last:border-b-0 hover:bg-surfaceMid transition-colors ${
                  activeIndex === index 
                    ? 'text-gold border-l-2 border-gold pl-8 bg-surfaceMid' 
                    : 'text-white/40 pl-8 hover:text-white/70'
                }`}
              >
                <div className="font-display text-lg">{exp.company}</div>
                <div className="text-[12px] tracking-widest uppercase text-gold">{exp.role}</div>
                <div className="text-[11px] text-white/35">{exp.duration}</div>
              </button>
            ))}
          </div>

          {/* Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="md:col-span-3 p-12"
            >
              <h3 className="font-display text-[28px] leading-tight mb-2">{experiences[activeIndex].company}</h3>
              <p className="text-gold text-[12px] tracking-widest uppercase mb-8">{experiences[activeIndex].role}</p>
              <p className="text-white/35 text-[11px] uppercase tracking-widest mb-12">{experiences[activeIndex].duration}</p>
              <ul className="space-y-4">
                {experiences[activeIndex].bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start space-x-3 text-white/60 text-[14px] leading-relaxed">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

