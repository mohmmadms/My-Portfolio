'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-[100vh] flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
          Hi, I'm Mohammad — I design <span className="underline decoration-pink-500">bold</span> digital experiences.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Cloud Engineer & Full Stack developer who loves turning ideas into immersive digital experiences.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/projects" className="hover:text-white transition">
          <button className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
            View Work
          </button>
          </Link>
           <a
    href="/Mohammad_CV.pdf"
    download
    className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
  >
    Download CV
  </a>
        </div>
      </motion.div>
    </div>
  );
}
