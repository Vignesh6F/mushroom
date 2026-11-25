import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, FlaskConical, Recycle, Users } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const facilities = [
  {
    title: 'Model cultivation setup',
    description: 'A model for practical mushroom cultivation training.',
    icon: MushroomIcon,
  },
  {
    title: 'Equipped laboratory',
    description: 'A laboratory equipped for mushroom spawn training.',
    icon: FlaskConical,
  },
  {
    title: 'Compost unit',
    description: 'A compost unit for training in compost preparation from mushroom waste.',
    icon: Recycle,
  },
  {
    title: 'Training kitchen',
    description: 'A well-established kitchen for value-added mushroom product training.',
    icon: ChefHat,
  },
  {
    title: 'Spacious mini hall',
    description: 'A space for mass training and entrepreneurship programs for college students and self-help groups.',
    icon: Users,
  },
];

export default function FarmExperience() {
  return (
    <section id="experience" className="w-full py-24 bg-[#1C2A1A] text-[#FAF4ED] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="font-label-md text-label-md text-[#D1E6BF] uppercase tracking-widest block mb-2 font-semibold">
            Infrastructure
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#FAF4ED] tracking-tight font-serif font-bold">
            Facilities for hands-on training
          </h2>
          <p className="mt-4 font-body-lg text-body-lg text-[#FAF4ED]/75 max-w-2xl">
            Udhayan’s training infrastructure supports cultivation, spawn, compost, and value-added product programs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {facilities.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="flex items-start gap-4 p-6 rounded-3xl bg-[#151e16] border border-white/10"
            >
              <span className="flex shrink-0 items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-[#D1E6BF]">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-headline-sm text-xl text-[#FAF4ED] font-serif font-semibold">
                  {title}
                </h3>
                <p className="mt-2 font-body-sm text-body-sm text-[#FAF4ED]/75">
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
