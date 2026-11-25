import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PackageCheck, Truck } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const markets = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Madhya Pradesh'];
const buyingAndSellingItems = [
  'Milky Mushroom',
  'Oyster Mushroom',
  'Mushroom Fish Feed',
  'Mushroom Vermi Compost',
];

const packingPhotos = [
  {
    title: 'Packing and cultivation',
    src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.05%20PM.jpeg',
    alt: 'Photo collage including packed mushrooms and cultivation photos.',
    objectPosition: 'center top',
  },
  {
    title: 'Mushroom harvest',
    src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.05%20PM%20%281%29.jpeg',
    alt: 'Fresh mushroom cluster held in a hand.',
    objectPosition: 'center center',
  },
  {
    title: 'Oyster mushroom harvest',
    src: '/pics/WhatsApp%20Image%202026-11-24%20at%208.01.05%20PM%20%282%29.jpeg',
    alt: 'Oyster mushroom cluster held in a hand.',
    objectPosition: 'center center',
  },
];

const packingSteps = [
  { title: 'Oyster and milky mushrooms', icon: MushroomIcon },
  { title: 'Packing', icon: PackageCheck },
  { title: 'Marketing', icon: Truck },
];

export default function MushroomCollection() {
  return (
    <section id="collection" className="w-full py-20 bg-[#0c120d] relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="font-label-md text-label-md text-[#D1E6BF] uppercase tracking-widest font-semibold">
            Marketing
          </span>
          <h2 className="mt-3 font-headline-lg text-3xl sm:text-4xl text-[#FAF4ED] font-serif font-bold">
            Packing and marketing
          </h2>
          <p className="mt-4 font-body-lg text-body-lg text-[#FAF4ED]/80">
            Oyster and milky mushrooms are packed for marketing in these regions:
          </p>
        </motion.div>

        <motion.ul
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {markets.map((market) => (
            <motion.li
              key={market}
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#151e16] px-4 py-3 text-[#FAF4ED]"
            >
              <MapPin className="w-4 h-4 text-[#D1E6BF]" aria-hidden="true" />
              {market}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#FAF4ED] font-serif font-bold">
            Buying and Selling
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {buyingAndSellingItems.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-[#151e16] border border-white/10 px-5 py-4 font-medium text-[#FAF4ED]"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {packingPhotos.map(({ title, src, alt, objectPosition }) => (
            <motion.figure
              key={title}
              variants={staggerItem}
              className="overflow-hidden rounded-3xl bg-[#151e16] border border-white/10"
            >
              <img
                src={src}
                alt={alt}
                className="w-full aspect-[4/3] object-cover"
                style={{ objectPosition }}
                loading="lazy"
              />
              <figcaption className="px-5 py-4 font-headline-sm text-lg text-[#FAF4ED] font-serif font-semibold">
                {title}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.ol
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {packingSteps.map(({ title, icon: Icon }, index) => (
            <motion.li
              key={title}
              variants={staggerItem}
              className="flex items-center gap-4 rounded-3xl bg-[#151e16] border border-white/10 p-6"
            >
              <span className="flex shrink-0 items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-[#D1E6BF]">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <div>
                <span className="font-label-sm text-label-sm text-[#D1E6BF]/70">STEP 0{index + 1}</span>
                <h3 className="mt-1 font-headline-sm text-lg text-[#FAF4ED] font-serif font-semibold">
                  {title}
                </h3>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
