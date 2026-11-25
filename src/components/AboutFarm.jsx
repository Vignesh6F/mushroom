import React from 'react';
import { motion } from 'framer-motion';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, viewport } from '../utils/animations';

export default function AboutFarm() {
  return (
    <section id="future-goal" className="w-full py-16 bg-[#1C2A1A] text-[#FAF4ED]">
      <motion.div
        className="max-w-4xl mx-auto px-6 lg:px-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUp}
      >
        <MushroomIcon className="w-8 h-8 mx-auto mb-4 text-[#D1E6BF]" />
        <h2 className="font-headline-lg text-3xl sm:text-4xl font-serif font-bold">
          Future Goal
        </h2>
        <p className="mt-4 font-body-lg text-body-lg text-[#FAF4ED]/80">
          Continue sharing Udhayan’s oyster and milky mushroom cultivation experience through training.
        </p>
        <p className="mt-4 font-body-lg text-body-lg text-[#FAF4ED]/80">
          Developing ornamental fish feed from mushroom waste is also in progress.
        </p>
      </motion.div>
    </section>
  );
}
