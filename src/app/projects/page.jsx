'use client';

import { projects } from '../lib/projects';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ProjectsPage() {
  return (
    <motion.div
      className="min-h-screen pt-28 px-6 max-w-7xl mx-auto"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
        variants={item}
      >
        Selected Work
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={container}
      >
        {projects.map((project, i) => (
          <motion.div key={i} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}