'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 px-6 max-w-5xl mx-auto">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <img
          src="/Profile.jpeg"
          alt="Mohammad"
          className="w-32 h-32 rounded-full mx-auto border-4 border-white/10 object-cover mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Hi! I'm Mohammad Al Smadi</h1>
        <p className="text-gray-400 text-lg">
          Cloud Engineer & Full Stack developer who loves turning ideas into immersive digital experiences.
        </p>
      </motion.div>

      {/* Philosophy */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-4 text-white">🎯 Summary</h2>
        <p className="text-gray-400 leading-relaxed">
           Full Stack Developer and Alibaba Cloud Certified Engineer with a background in computer
 engineering and hands-on MERN stack experience with strong knowledge in data analysis. Skilled
 in building responsive, data-driven web apps using React, Node.js, and Tailwind CSS, Passionate
 about clean code, cloud solutions, and continuous learning.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-white">🛠️ Tools & Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-sm text-gray-300">
          <div className="bg-white/5 p-4 rounded-xl">Cloud Computing</div>
          <div className="bg-white/5 p-4 rounded-xl">ECS (Compute)</div>
          <div className="bg-white/5 p-4 rounded-xl">Object Storage</div>
          <div className="bg-white/5 p-4 rounded-xl">VPC (Networking)</div>
          <div className="bg-white/5 p-4 rounded-xl">Load Balancing</div>
          <div className="bg-white/5 p-4 rounded-xl">Auto Scaling</div>
          <div className="bg-white/5 p-4 rounded-xl">Node.js/Express</div>
          <div className="bg-white/5 p-4 rounded-xl">Git & GitHub</div>
          <div className="bg-white/5 p-4 rounded-xl">Ubuntu</div>
          <div className="bg-white/5 p-4 rounded-xl">React / Next.js</div>
          <div className="bg-white/5 p-4 rounded-xl">Tailwind CSS</div>
          <div className="bg-white/5 p-4 rounded-xl">HTML & CSS</div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-32">
        <h2 className="text-2xl font-bold mb-6 text-white">📈 My Journey</h2>
        <div className="border-l border-white/10 pl-6 space-y-10">
          <div>
            <h3 className="text-white font-semibold">2024 — 2025</h3>
            <a href="/AliBABA_CloudEngineer.pdf" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-pink-500">Alibaba Cloud Engineer</a>
          </div>
          <div>
            <h3 className="text-white font-semibold">2024 – 2025</h3>
            <a href="/Data-cer.pdf" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-pink-500">Data Analysis.</a>
            </div>
            <div>
            <h3 className="text-white font-semibold">2023 – 2024</h3>
            <a href="/web_cer.pdf" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-pink-500">Full Stack Web Development.</a>
          </div>
 
          <div>
            <h3 className="text-white font-semibold">2018 – 2023</h3>
            <p className="text-white">Bachelor Degree In Computer Engineering At Al Balqa Applied University.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
