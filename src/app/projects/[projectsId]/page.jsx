'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '../../lib/projects';

export default function ProjectDetail({ params }) {
  const resolvedParams = use(params); 
  const project = projects.find(p => p.id === resolvedParams.projectsId);

  if (!project) return notFound();

  return (
    <div className="pt-28 px-6 max-w-5xl mx-auto text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
        <p className="mb-6 text-gray-400">{project.description}</p>

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl mb-8 shadow-xl"
        />

        {/* Tools Used */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2 text-white">Tools Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tools?.map((tool, i) => (
              <span
                key={i}
                className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {project.sections?.map((section, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold text-white mb-2">{section.heading}</h3>
              <p className="text-gray-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
