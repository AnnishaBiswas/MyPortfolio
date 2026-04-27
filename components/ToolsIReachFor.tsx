'use client';

import { motion } from 'framer-motion';
import Section from './Section';

const tools = [
  {
    name: 'React.js',
    category: 'UI Framework',
    opinion: 'My default for anything component-based. The mental model of unidirectional data flow has shaped how I think about every UI problem — even when I\'m writing Vue.'
  },
  {
    name: 'TypeScript',
    category: 'Language',
    opinion: 'I was sceptical until I caught my first runtime bug at compile time in a live payment flow. Now I won\'t start a project without it. The discipline it forces is worth the setup cost.'
  },
  {
    name: 'VS Code',
    category: 'Editor',
    opinion: 'Not because it\'s the best theoretically — because I\'ve spent 3 years customising it to my exact workflow. The time investment in your editor pays compounding returns.'
  },
  {
    name: 'Claude (AI)',
    category: 'Dev Partner',
    opinion: 'I use it as an architecture sounding board and a first-pass reviewer. The key is knowing when to trust it and when to push back. It\'s made me 40% faster without making me 40% lazier.'
  },
  {
    name: 'Figma',
    category: 'Design',
    opinion: 'I read designs in Figma before I write any JSX. Understanding what the designer actually meant — not just what the spec says — prevents the most expensive kind of rework.'
  },
  {
    name: 'Jira + Confluence',
    category: 'Workflow',
    opinion: 'My paper trail. Every decision, every edge case discussion, every stakeholder sign-off lives here. When I say I proactively caught bugs before QA, this is where the evidence is.'
  },
  {
    name: 'Git (feature branch workflow)',
    category: 'Version Control',
    opinion: 'Atomic commits, meaningful messages, PRs that can actually be reviewed. I treat commit history as documentation — future-me has thanked past-me more than once.'
  },
  {
    name: 'Postman / REST tooling',
    category: 'API',
    opinion: 'I test every endpoint before I build the component that consumes it. Understanding the actual API contract — not the docs — is what prevents 90% of integration surprises.'
  }
];

export default function ToolsIReachFor() {
  return (
    <Section id="tools" label="OPINIONATED TOOLKIT" title="Not what I know. What I trust.">
      <p className="text-white/45 text-base max-w-lg mb-20 leading-relaxed">
        Every tool here has earned its place. These are the ones I reach for by default — not because they\'re popular, but because they\'ve proven themselves in production.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-surface border border-faint border-l-2 border-gold/40 px-5 py-4"
          >
            <h3 className="text-goldLight text-base font-medium mb-1">{tool.name}</h3>
            <span className="text-[10px] uppercase tracking-widest bg-gold/10 text-gold/70 px-2 py-0.5 inline-block mb-2">{tool.category}</span>
            <p className="text-white/55 text-sm leading-relaxed">{tool.opinion}</p>
          </motion.div>
        ))}
      </div>
      
      <p className="text-white/25 text-[11px] italic pt-6 text-center">
        Currently exploring: Framer Motion advanced gestures · Next.js App Router edge cases · Accessibility audit tooling
      </p>
    </Section>
  );
}

