'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-lg z-50 px-6 py-4 flex justify-between items-center border-b border-white/10">
      <Link href="/" className="text-white text-lg font-bold">Mohammad</Link>
      <div className="flex gap-4 text-gray-300">
        <Link href="/projects" className="hover:text-white transition">Work</Link>
        <Link href="/about" className="hover:text-white transition">About</Link>
        <Link href="/contact" className="hover:text-white transition">Contact</Link>
      </div>
    </nav>
  );
}
