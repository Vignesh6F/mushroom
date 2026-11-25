import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PackageCheck, Truck } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const markets = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Madhya Pradesh'];

const products = [
  { label: 'Milky Mushroom',         emoji: '🍄' },
  { label: 'Oyster Mushroom',        emoji: '🌿' },
  { label: 'Mushroom Fish Feed',     emoji: '🐟' },
  { label: 'Mushroom Vermi Compost', emoji: '♻️' },
];

const packingPhotos = [
  { title: 'Packing & Cultivation',   src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.05%20PM.jpeg',        alt: 'Packed mushrooms and cultivation.',       objectPosition: 'center top'    },
  { title: 'Mushroom Harvest',        src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.05%20PM%20%281%29.jpeg', alt: 'Fresh mushroom cluster.',              objectPosition: 'center center' },
  { title: 'Oyster Mushroom Harvest', src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.05%20PM%20%282%29.jpeg', alt: 'Oyster mushroom cluster.',             objectPosition: 'center center' },
];

const steps = [
  { title: 'Oyster & Milky Mushrooms', icon: MushroomIcon },
  { title: 'Packing',                  icon: PackageCheck },
  { title: 'Marketing',                icon: Truck },
];

export default function MushroomCollection() {
  return (
    <section id="collection">
      <div className="section-wrap">

        {/* Centred header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">Marketing</span>
          <h2 className="section-heading">Packing &amp; Marketing</h2>
          <p className="section-body">
            Oyster and milky mushrooms are packed and distributed across South &amp; Central India.
          </p>
        </motion.div>

        {/* Market badges — centred */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="mb-14"
        >
          <ul className="flex flex-wrap justify-center gap-3" aria-label="Markets served">
            {markets.map((m) => (
              <li
                key={m}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium"
                style={{ background: 'var(--forest-card)', border: '1px solid rgba(167,180,139,.18)', color: 'var(--cream)' }}
              >
                <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--green-soft)' }} aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Buying & Selling — centred heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="mb-14"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center mb-6" style={{ color: 'var(--cream)' }}>
            Buying &amp; Selling
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(({ label, emoji }) => (
              <li
                key={label}
                className="card-dark flex items-center gap-3 px-5 py-4 font-medium text-sm"
                style={{ color: 'var(--cream)' }}
              >
                <span className="text-xl" aria-hidden="true">{emoji}</span>
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Photo gallery */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {packingPhotos.map(({ title, src, alt, objectPosition }) => (
            <motion.figure key={title} variants={staggerItem} className="card-dark overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={src} alt={alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition }}
                  loading="lazy"
                />
              </div>
              <figcaption className="px-5 py-4 font-serif text-base font-semibold" style={{ color: 'var(--cream)' }}>
                {title}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Process steps */}
        <motion.ol
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {steps.map(({ title, icon: Icon }, i) => (
            <motion.li key={title} variants={staggerItem} className="card-dark flex items-center gap-4 p-6">
              <span
                className="flex shrink-0 items-center justify-center w-12 h-12 rounded-2xl"
                style={{ background: 'rgba(167,180,139,.12)', color: 'var(--green-soft)' }}
              >
                <Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-xs font-bold tracking-widest uppercase mb-1" style={{ color: 'rgba(209,230,191,.5)' }}>
                  Step 0{i + 1}
                </span>
                <h3 className="font-serif text-base font-semibold" style={{ color: 'var(--cream)' }}>{title}</h3>
              </div>
            </motion.li>
          ))}
        </motion.ol>

      </div>
    </section>
  );
}
