'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-12 section-container grid-texture relative overflow-hidden py-16 md:py-28">
      <div className="md:col-span-7 flex flex-col justify-center">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-[10px] tracking-[0.18em] uppercase text-gold font-['Cormorant_Garamond'] font-medium"
          >
            FRONTEND ENGINEER · BANK OF AMERICA · REACT · VUE · TYPESCRIPT
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-6xl md:text-[72px] lg:text-[80px] font-display font-semibold text-cream leading-tight font-['Cormorant_Garamond']"
          >
            Annisha
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-5xl md:text-[68px] lg:text-[76px] font-display font-semibold bg-gradient-to-r from-cream to-goldLight bg-clip-text text-transparent font-['Cormorant_Garamond']"
          >
            <span className="text-gold ml-2">Biswas</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-[15px] md:text-lg leading-relaxed text-white/45 max-w-lg max-w-4xl mx-auto"
          >
            Building API-driven financial interfaces that serve 50+ countries — zero hardcoded logic, every field and validation driven by backend configuration.
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
            className="inline-flex items-center gap-6"
          >
            <Link href="#projects" className="border border-gold/50 text-gold text-[11px] tracking-widest px-6 py-3 hover:bg-gold/10 rounded-sm transition-colors font-['Cormorant_Garamond']">
              View Work →
            </Link>
            <Link href="#about" className="text-[11px] tracking-widest text-white/40 hover:text-white transition-colors font-['Cormorant_Garamond']">
              Read About Me
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="w-full h-px bg-faint" />
            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-12 font-['Cormorant_Garamond']">
              <div className="flex flex-col gap-1.5">
                <span className="text-gold text-3xl md:text-4xl font-semibold leading-none">50+</span>
                <span className="text-white/45 text-sm tracking-widest">Countries Served</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-gold text-3xl md:text-4xl font-semibold leading-none">4</span>
                <span className="text-white/45 text-sm tracking-widest">Prod. Releases / Year</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-gold text-3xl md:text-4xl font-semibold leading-none">3yr</span>
                <span className="text-white/45 text-sm tracking-widest">Trainee → Senior</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-gold text-3xl md:text-4xl font-semibold leading-none">40–50%</span>
                <span className="text-white/45 text-sm tracking-widest">Delivery Acceleration</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="md:col-span-5 flex justify-end items-center">
        <div className="relative w-full max-w-xl aspect-[3/4] rotate-1">
          <div className="absolute inset-0 border-2 border-gold/20 rounded-none -rotate-1" />
          <div className="absolute inset-0.5 border-4 border-gold/40 rounded-none">
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold pointer-events-none" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold pointer-events-none" />
            <Image
              src="/images/hero-photo.jpg"
              alt="Annisha Biswas"
              fill
              className="object-contain grayscale-[0.05] p-4"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}