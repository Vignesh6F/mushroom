import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const milestones = [
  {
    year: '17 January 2007',
    title: 'Udhayan begins',
    description: 'Udhayan Mushroom Cultivation Farm began in Kadachanenthal, Madurai, Tamil Nadu.',
    icon: CalendarDays,
  },
  {
    year: 'Early production',
    title: 'Commercial oyster mushrooms',
    description: 'The farm initially focused on commercial oyster mushroom cultivation.',
    icon: MushroomIcon,
  },
  {
    year: 'As markets changed',
    title: 'Milky mushroom production',
    description: 'Production later focused on milky mushrooms in response to market requirements.',
    icon: MapPin,
  },
  {
    year: '2013',
    title: 'Experience shared through training',
    description: 'After gaining production and cultivation experience, the farm began training people interested in mushroom cultivation.',
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about-us" className="w-full py-24 bg-[#F5EDE2] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="font-label-md text-label-md text-[#475C3E] uppercase tracking-widest font-semibold">
            About Udhayan
          </span>
          <h2 className="mt-3 font-headline-lg text-3xl sm:text-4xl text-[#1D1E18] tracking-tight font-serif font-bold">
            Cultivating mushrooms and sharing experience since 2007.
          </h2>
          <p className="mt-5 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Based in Kadachanenthal, Madurai, Tamil Nadu, Udhayan began with commercial oyster mushroom cultivation and later focused on milky mushroom production to meet market requirements. In 2013, after gaining production and cultivation experience, we began sharing our knowledge through training.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {milestones.map(({ year, title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="flex flex-col gap-4 p-6 rounded-3xl bg-white border border-outline-variant shadow-sm"
            >
              <div className="flex items-center justify-between text-[#475C3E]">
                <Icon className="w-6 h-6" aria-hidden="true" />
                <span className="font-label-sm text-label-sm uppercase tracking-wide font-semibold text-right">
                  {year}
                </span>
              </div>
              <h3 className="font-headline-sm text-xl text-[#1D1E18] font-serif font-semibold">
                {title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
