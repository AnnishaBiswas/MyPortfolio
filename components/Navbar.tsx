'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const sections = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 h-14 bg-[#0B0F1A]/80 backdrop-blur-md border-b border-white/[0.06] flex items-center px-4 sm:px-8"
    >
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/" className="text-[14px] font-bold tracking-[0.12em] uppercase text-gold font-['Cormorant_Garamond']">
            AB
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {sections.map((section, i) => (
            <motion.a
              key={section.name}
              href={section.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] tracking-widest uppercase text-white/40 hover:text-gold transition-colors duration-300 font-medium font-['Cormorant_Garamond']"
            >
              {section.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 rounded hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 18h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="md:hidden pb-8 border-t border-white/10"
        >
          <div className="px-4 sm:px-8 flex flex-col space-y-6">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={section.href}
                className="text-lg tracking-[0.18em] uppercase text-white/60 hover:text-gold py-2 transition-colors font-['Cormorant_Garamond']"
                onClick={() => setOpen(false)}
              >
                {section.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

