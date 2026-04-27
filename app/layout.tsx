import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { MotionConfig } from 'framer-motion';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Annisha Biswas — Frontend Developer · Fintech',
  description: 'Frontend Developer with ~3 years at Bank of America, building payment and recipient management UIs for 50+ countries. React, TypeScript, Next.js.',
  openGraph: {
    title: 'Annisha Biswas — Frontend Developer',
    description: 'Enterprise fintech frontend developer. React · TypeScript · Next.js · 50+ countries.',
    url: 'https://annishabiswas.dev',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annisha Biswas — Frontend Developer',
    description: 'Enterprise fintech frontend developer. React · TypeScript · Next.js.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-primary text-cream font-[var(--font-body)] antialiased">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          <MotionConfig reducedMotion="user">
            {children}
          </MotionConfig>
        </main>
        <Footer />
      </body>
    </html>
  );
}