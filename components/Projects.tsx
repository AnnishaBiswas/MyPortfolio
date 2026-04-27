'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: "Trip-a-Dora",
    subtitle: "Multi-Service Travel Discovery Platform",
    description: "Originated the full product concept — a mood-based booking hub for under-explored destinations, connecting travellers to local guides, drivers, and hospitality businesses. Sole frontend owner in a team of 4, shipped in a 2-week sprint.",
    tech: "React.js · JavaScript · CSS3 · PHP · State Management",
    impact: [
      "Mood → destination engine (unique in prototype)",
      "Live API-connected place discovery UI",
      "Full booking flows: hotels, flights, cars, guides",
      "Mobile-first, filterable interface"
    ],
    gradient: "from-emerald-800 to-teal-900",
    tag: "Team Project · 2-week sprint"
  },
  {
    title: "Job Tracker",
    subtitle: "Workflow State Machine with Alerts",
    description: "Eliminated manual job-search tracking by building a drag-and-drop Kanban state machine in Vue.js — Applied → Interview → Offer → Rejected — with event-driven state transitions and automated deadline alert notifications. The same enterprise component architecture used in production fintech, applied to a personal-scale problem.",
    tech: "Vue.js · JavaScript · CSS3 · Drag-and-Drop · Event-Driven UI",
    impact: [
      "Drag-and-drop Kanban state machine",
      "Automated deadline alert notifications",
      "Reusable card components",
      "Event-driven state transitions"
    ],
    gradient: "from-indigo-900 to-purple-900",
    tag: "Personal Project"
  },
  {
    title: "Behavioral Pattern Recognition",
    subtitle: "Computer Vision Research Prototype",
    description: "Investigated whether a vision model could interpret non-verbal human behaviour and body-language signals. Built a real-time facial detection and tracking pipeline from scratch — processing live video at frame level — independently acquiring Python and OpenCV outside formal training.",
    tech: "Python · OpenCV · Computer Vision · Image Processing",
    impact: [
      "Real-time face detection + tracking pipeline",
      "Frame capture, feature extraction, overlay rendering",
      "Designed for extension: posture, micro-expression, gaze",
      "Independent research, new stack self-taught"
    ],
    gradient: "from-slate-800 to-zinc-900",
    tag: "Independent Research"
  }
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [paused]);

  const project = projects[current];

  return (
    <section id="projects" className="section-container py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <p className="text-[10px] tracking-[0.18em] uppercase text-gold font-['Cormorant_Garamond'] font-medium mb-4">
          PROJECTS
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-cream font-['Cormorant_Garamond']">
          What I've built outside work.
        </h2>
      </motion.div>

      {/* Carousel */}
      <div
        className="relative max-w-2xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`relative rounded-sm overflow-hidden bg-gradient-to-br ${project.gradient} p-10 flex flex-col justify-between min-h-[420px] border border-white/10`}>
              <div className="space-y-4">
                <span className="text-[10px] tracking-widest uppercase text-white/40 font-['Cormorant_Garamond']">
                  {project.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold text-white font-['Cormorant_Garamond']">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wide">
                  {project.subtitle}
                </p>
                <p className="text-white/75 leading-relaxed text-sm max-w-lg">
                  {project.description}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-white/40 font-['Cormorant_Garamond']">
                  {project.tech}
                </p>
              </div>

              <div className="mt-8 space-y-2">
                {project.impact.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-gold/60 text-xs mt-0.5">—</span>
                    <span className="text-white/55 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); }}
              className={`transition-all duration-300 rounded-none ${
                i === current
                  ? 'w-6 h-[2px] bg-gold'
                  : 'w-2 h-[2px] bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        {!paused && (
          <div className="mt-4 h-px bg-white/10 overflow-hidden">
            <motion.div
              key={current}
              className="h-full bg-gold/40"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </div>
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-white/25 text-[11px] tracking-widest mt-10 font-['Cormorant_Garamond']"
      >
        Enterprise work at Bank of America is covered in the Process section above.
      </motion.p>
    </section>
  );
}