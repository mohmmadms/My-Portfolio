'use client';

import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Connect</h1>
        <p className="text-gray-400 text-lg">
          Got a project idea, collaboration request, or just want to say hi? Drop me a message.
        </p>
      </motion.div>

      <ContactForm />

      <div className="mt-12 text-center space-y-2 text-gray-400">
        <p>
          📧 Email: <a href="mailto:mohmmadmms20@gmail.com" className="text-white underline hover:text-pink-500">mohmmadmms20@gmail.com</a>
        </p>
        <p>
          💼 LinkedIn: <a href="https://www.linkedin.com/in/mohmmad-al-smadi-bb0109249/" target="_blank" rel="noopener" className="text-white underline hover:text-pink-500">linkedin.com/in/mohmmad-al-smadi</a>
        </p>
        <p>
          🧑‍💻 GitHub: <a href="https://github.com/mohmmadms" target="_blank" rel="noopener" className="text-white underline hover:text-pink-500">https://github.com/mohmmadms</a>
        </p>
      </div>
    </div>
  );
}
