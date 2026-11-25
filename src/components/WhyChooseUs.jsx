import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const milestones = [
  {
    year: '17 Jan 2007',
    title: 'Udhayan Begins',
    description: 'Udhayan Mushroom Cultivation Farm was established in Kadachanenthal, Madurai, Tamil Nadu.',
    icon: CalendarDays,
  },
  {
    year: 'Early Production',
    title: 'Commercial Oyster Mushrooms',
    description: 'The farm initially focused on commercial oyster mushroom cultivation for the market.',
    icon: MushroomIcon,
  },
  {
    year: 'Market Shift',
    title: 'Milky Mushroom Production',
    description: 'Production transitioned to milky mushrooms in response to growing market demand.',
    icon: MapPin,
  },
  {
    year: '2013',
    title: 'Training Begins',
    description: 'After gaining extensive cultivation experience, the farm started sharing knowledge through training.',
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about-us">
      <div className="section-wrap">

        {/* Centred header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">About Udhayan</span>
          <h2 className="section-heading">
            Cultivating Mushrooms &amp; Sharing Experience Since 2007
          </h2>
          <p className="section-body">
            Based in Kadachanenthal, Madurai, Tamil Nadu, Udhayan began with commercial oyster
            mushroom cultivation and later focused on milky mushroom production. In 2013, we
            began sharing our knowledge through structured training programs.
          </p>
        </motion.div>

        {/* Milestone cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {milestones.map(({ year, title, description, icon: Icon }, i) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="card-dark flex flex-col gap-4 p-6 relative overflow-hidden"
            >
              {/* Watermark number */}
              <span
                className="absolute top-2 right-3 font-serif font-bold select-none pointer-events-none"
                style={{ fontSize: 68, lineHeight: 1, color: 'var(--sage)', opacity: .07 }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div
                className="flex items-center justify-center w-11 h-11 rounded-2xl"
                style={{ background: 'rgba(167,180,139,.12)', color: 'var(--green-soft)' }}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>

              <div>
                <span className="block text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: 'var(--gold)' }}>
                  {year}
                </span>
                <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: 'var(--cream)' }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
