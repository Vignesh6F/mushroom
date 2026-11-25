import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const cultivationPhotos = [
  {
    name: 'Oyster Mushroom Cultivation',
    detail: 'Oyster mushrooms growing on cultivation bags at Udhayan Farm.',
    src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.06%20PM.jpeg',
    alt: 'Oyster mushrooms growing on cultivation bags.',
    objectPosition: 'center center',
  },
  {
    name: 'Milky Mushroom Cultivation',
    detail: 'Milky mushroom cultivation and crop photos from Udhayan Farm.',
    src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.05%20PM.jpeg',
    alt: 'Photo collage showing mushroom cultivation and milky mushrooms.',
    objectPosition: 'center 80%',
  },
];

export default function GrowingProcess() {
  return (
    <section id="process">
      <div className="section-wrap">
        {/* Centred section header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">Cultivation Methodology</span>
          <h2 className="section-heading">Oyster &amp; Milky Mushroom Cultivation</h2>
          <p className="section-body">
            Udhayan began with commercial oyster mushroom cultivation and later focused on milky
            mushrooms. These photos illustrate the two varieties at the heart of that experience.
          </p>
        </motion.div>

        {/* Photo cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {cultivationPhotos.map(({ name, detail, src, alt, objectPosition }) => (
            <motion.figure
              key={name}
              variants={staggerItem}
              className="card-dark overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition }}
                  loading="lazy"
                />
              </div>
              <figcaption className="p-6 sm:p-8">
                <h3 className="font-serif text-xl font-semibold" style={{ color: 'var(--cream)' }}>{name}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
