import React from 'react';
import { motion } from 'framer-motion';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, viewport } from '../utils/animations';

export default function AboutFarm() {
  return (
    <section id="future-goal" className="w-full py-20 relative overflow-hidden">
      {/* Centered glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(60,80,42,.25), transparent 65%)',
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUp}
      >
        {/* Icon badge */}
        <span
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mx-auto mb-6"
          style={{ background: 'rgba(167,180,139,.12)', color: 'var(--green-soft)' }}
        >
          <MushroomIcon className="w-7 h-7" />
        </span>

        <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Future Goal</span>

        <h2
          className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-6"
          style={{ color: 'var(--cream)', letterSpacing: '-.025em' }}
        >
          Growing Forward
        </h2>

        <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Continue sharing Udhayan's oyster and milky mushroom cultivation experience through
          structured training programs, reaching more aspiring farmers and entrepreneurs across India.
        </p>
        <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
          Developing <span style={{ color: 'var(--gold)' }}>ornamental fish feed from mushroom waste</span> is
          also actively in progress — a step toward zero-waste sustainable farming.
        </p>
      </motion.div>
    </section>
  );
}
