'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover group-hover:opacity-80 transition"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
