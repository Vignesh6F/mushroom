import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const cultivationPhotos = [
  {
    name: 'Oyster Mushroom Cultivation',
    detail: 'Oyster mushrooms growing on cultivation bags at Udhayan.',
    src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.06%20PM.jpeg',
    alt: 'Oyster mushrooms growing on cultivation bags.',
    objectPosition: 'center center',
  },
  {
    name: 'Milky Mushroom Cultivation',
    detail: 'Milky mushroom cultivation and crop photos from Udhayan.',
    src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.05%20PM.jpeg',
    alt: 'Photo collage showing mushroom cultivation and milky mushrooms.',
    objectPosition: 'center 80%',
  },
];

export default function GrowingProcess() {
  return (
    <section id="process" className="w-full py-24 bg-[#1C2A1A] text-[#FAF4ED] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[#243821]/50 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="font-label-md text-label-md text-[#D1E6BF] uppercase tracking-widest block mb-2 font-semibold">
            Cultivation Methodology
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#FAF4ED] tracking-tight font-serif font-bold">
            Oyster and Milky Mushroom Cultivation
          </h2>
          <p className="mt-4 font-body-lg text-body-lg text-[#FAF4ED]/80 max-w-2xl">
            Udhayan began with commercial oyster mushroom cultivation and later focused on milky mushrooms. These photos illustrate the two varieties at the heart of that experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {cultivationPhotos.map(({ name, detail, src, alt, objectPosition }) => (
            <motion.figure
              key={name}
              variants={staggerItem}
              className="overflow-hidden rounded-3xl bg-[#243821] border border-white/10 shadow-lg"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-72 sm:h-96 object-cover"
                style={{ objectPosition }}
                loading="lazy"
              />
              <figcaption className="p-6 sm:p-8">
                <h3 className="font-headline-sm text-2xl text-[#FAF4ED] font-serif font-semibold">
                  {name}
                </h3>
                <p className="mt-2 font-body-md text-body-md text-[#FAF4ED]/75">
                  {detail}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
