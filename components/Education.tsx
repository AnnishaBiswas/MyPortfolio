'use client';

import { motion } from 'framer-motion';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" label="BACKGROUND" title="Where I come from.">
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl">

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-[10px] tracking-[0.18em] uppercase text-gold/60 font-['Cormorant_Garamond']">Education</p>
          <div className="bg-surface border border-faint border-l-2 border-gold/40 px-5 py-5">
            <h3 className="text-goldLight text-lg font-semibold font-['Cormorant_Garamond'] mb-1">
              B.Tech, Information Technology
            </h3>
            <p className="text-white/50 text-sm mb-3">Banasthali Vidyapith, Rajasthan · 2019–2023</p>
            <span className="text-[10px] uppercase tracking-widest bg-gold/10 text-gold/70 px-2 py-0.5 inline-block">
              NAAC A++ — Government of India Accreditation
            </span>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-[10px] tracking-[0.18em] uppercase text-gold/60 font-['Cormorant_Garamond']">Languages</p>
          <div className="space-y-3">
            {[
              { lang: "English", level: "Professional", note: "Primary working language" },
              { lang: "Hindi & Bengali", level: "Native", note: "" },
              { lang: "German", level: "A1", note: "Actively learning" },
            ].map((item) => (
              <div key={item.lang} className="bg-surface border border-faint px-5 py-4 flex items-center justify-between">
                <div>
                  <h4 className="text-white/70 text-sm font-medium">{item.lang}</h4>
                  {item.note && <p className="text-white/30 text-xs mt-0.5">{item.note}</p>}
                </div>
                <span className="text-[10px] uppercase tracking-widest bg-gold/10 text-gold/70 px-2 py-0.5">
                  {item.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
