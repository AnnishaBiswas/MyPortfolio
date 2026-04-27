'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="border-t border-white/10 py-12 mt-32"
    >
      <div className="section-container text-center">
        <motion.div className="space-y-6">
          <div className="text-xl font-semibold tracking-[0.12em] uppercase text-gold font-['Cormorant_Garamond']">
            Annisha Biswas
          </div>
          <p className="text-white/35 text-sm max-w-md mx-auto font-['Cormorant_Garamond'] tracking-wide">
            Frontend Engineer · React · Vue · TypeScript · Fintech · 50+ Countries
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-white/40 text-[11px] tracking-widest font-['Cormorant_Garamond']">
            <a
              href="mailto:annisha.biswas@proton.me"
              className="hover:text-gold transition-colors"
            >
              annisha.biswas@proton.me
            </a>
            <a
              href="tel:+918582813806"
              className="hover:text-gold transition-colors"
            >
              +91-8582813806
            </a>
            <a
              href="https://linkedin.com/in/annisha-biswas-53b814193"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AnnishaBiswas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-[11px] text-white/20 tracking-widest font-['Cormorant_Garamond']">
            © 2026 Annisha Biswas. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}