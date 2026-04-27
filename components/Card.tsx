'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  desc: string;
  link?: string;
  children?: ReactNode;
}

export default function Card({ title, desc, link, children }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-white/70 backdrop-blur-md border border-primary/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
    >
      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>
      {children}
      {link && (
        <a href={link} className="inline-flex items-center text-primary hover:text-secondary font-semibold">
          View Case Study →
        </a>
      )}
    </motion.div>
  );
}
