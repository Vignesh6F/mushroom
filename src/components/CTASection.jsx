import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChefHat, FlaskConical, MessageCircle, Recycle } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const trainings = [
  { title: 'Oyster & Milky Mushroom Cultivation', icon: MushroomIcon, num: '01' },
  { title: 'Mushroom Spawn Training',              icon: FlaskConical,  num: '02' },
  { title: 'Mushroom Culture Training',            icon: BookOpen,      num: '03' },
  { title: 'Compost Preparation from Waste',       icon: Recycle,       num: '04' },
  { title: 'Value-Added Products Training',        icon: ChefHat,       num: '05' },
];

export default function CTASection() {
  return (
    <section id="available-trainings">
      <div className="section-wrap">

        {/* Centred header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">Available Trainings</span>
          <h2 className="section-heading">Practical Mushroom Training at Udhayan</h2>
          <p className="section-body">
            Training has been part of Udhayan's work since 2013, with nearly{' '}
            <strong style={{ color: 'var(--gold)' }}>2,000 individual and group trainings</strong>{' '}
            conducted over 13 years. Entrepreneurship training and college student project support
            are also offered.
          </p>
        </motion.div>

        {/* Training cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {trainings.map(({ title, icon: Icon, num }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="card-dark flex items-start gap-4 p-6"
            >
              <span
                className="flex shrink-0 items-center justify-center w-12 h-12 rounded-2xl"
                style={{ background: 'rgba(167,180,139,.12)', color: 'var(--green-soft)' }}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: 'rgba(209,230,191,.48)' }}>
                  Training {num}
                </span>
                <h3 className="font-serif text-lg font-semibold leading-snug" style={{ color: 'var(--cream)' }}>
                  {title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA — centred */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <a
            href="https://wa.me/91?text=I%27m%20interested%20in%20mushroom%20training"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-1"
            style={{ background: '#25D366', boxShadow: '0 8px 28px rgba(37,211,102,.28)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1DA851'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#25D366'}
          >
            <MessageCircle size={18} strokeWidth={2} />
            Enquire about Training
          </a>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Reach us on WhatsApp — we respond promptly.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
