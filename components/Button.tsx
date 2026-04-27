'use client';

import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl';
  const variants = {
    primary: 'bg-primary text-white hover:bg-opacity-90 shadow-primary/25',
    secondary: 'bg-secondary/20 text-secondary border-2 border-secondary/30 hover:bg-secondary/30',
  };

  return (
    <motion.button
      className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
