'use client';

import { motion } from 'framer-motion';
import Button from '../components/Button';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import MyProcess from '../components/MyProcess';
import Projects from '../components/Projects';
import HowIThink from '../components/HowIThink';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Card from '../components/Card';
import ToolsIReachFor from '../components/ToolsIReachFor';

export default function Home() {
  return (
    <>
      <Hero />
      <About />


      <section id="experience" className="py-20">
        <Experience />
      </section>

      <MyProcess />

      <section id="projects" className="py-20">
        <Projects />
      </section>

        <ToolsIReachFor />

        <section className="py-20">
          <HowIThink />
        </section>
         <Education />   

      <section id="contact" className="py-20">
        <Contact />
      </section>
    </>
  );
}

