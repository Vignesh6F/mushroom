import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChefHat, FlaskConical, Recycle } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const trainings = [
  {
    title: 'Oyster and milky mushroom cultivation',
    icon: MushroomIcon,
  },
  {
    title: 'Mushroom spawn training',
    icon: FlaskConical,
  },
  {
    title: 'Mushroom culture training',
    icon: BookOpen,
  },
  {
    title: 'Compost preparation from mushroom waste',
    icon: Recycle,
  },
  {
    title: 'Mushroom value-added products training',
    icon: ChefHat,
  },
];

export default function CTASection() {
  return (
    <section id="available-trainings" className="w-full py-24 bg-[#1C2A1A] relative overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[50rem] h-[25rem] rounded-full bg-[#243821]/60 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="font-label-md text-label-md text-[#D1E6BF] uppercase tracking-widest font-semibold">
            Available Trainings
          </span>
          <h2 className="mt-3 font-display-lg text-3xl sm:text-4xl text-[#FAF4ED] tracking-tight font-serif font-bold">
            Practical mushroom training at Udhayan
          </h2>
          <p className="mt-4 font-body-lg text-body-lg text-[#FAF4ED]/80">
            Training has been part of Udhayan’s work since 2013, with nearly 2,000 individual and group trainings conducted over the past 13 years. Udhayan also offers entrepreneurship training and supports projects and research work for college students.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {trainings.map(({ title, icon: Icon }, index) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="flex items-start gap-4 p-6 rounded-3xl bg-[#243821] border border-white/10"
            >
              <span className="flex shrink-0 items-center justify-center w-11 h-11 rounded-2xl bg-white/10 text-[#D1E6BF]">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <span className="font-label-sm text-label-sm text-[#D1E6BF]/70">TRAINING 0{index + 1}</span>
                <h3 className="mt-1 font-headline-sm text-lg text-[#FAF4ED] font-serif font-semibold">
                  {title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <a
            href="https://wa.me/91?text=I%27m%20interested%20in%20mushroom%20training"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:bg-[#1DA851] transition-colors"
          >
            Enquire about training
          </a>
        </motion.div>
      </div>
    </section>
  );
}
