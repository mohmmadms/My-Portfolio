'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

export default function CursorEffect() {
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isTouchDevice()) return;
    setEnabled(true);

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll('.hover-target');
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className={`fixed z-[9999] top-0 left-0 pointer-events-none ${
          hovering ? 'mix-blend-difference' : ''
        }`}
        style={{
          x,
          y,
        }}
      >
        <div
          className={`w-12 h-12 rounded-full border ${
            hovering ? 'border-white bg-white/10 scale-125' : 'border-white/30 bg-white/5'
          } transition-all duration-300`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed z-[9999] top-0 left-0 pointer-events-none"
        style={{ x, y }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-white ${
            hovering ? 'opacity-0 scale-150' : 'opacity-100'
          } transition-all duration-300`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </motion.div>
    </>
  );
}
