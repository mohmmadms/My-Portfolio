'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://formspree.io/f/mjkrnbpy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-2xl space-y-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-[#111] text-white p-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-[#111] text-white p-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Message</label>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="bg-[#111] text-white p-3 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition"
      >
        {loading
          ? 'Sending...'
          : sent
          ? 'Message Sent ✅'
          : 'Send Message'}
      </button>
    </form>
  );
}
