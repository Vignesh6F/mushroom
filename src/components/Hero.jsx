import React from 'react';
import { motion } from 'framer-motion';
import MushroomIcon from './MushroomIcon';

export default function Hero() {
  return (
    <section id="farm" className="hero-section isolate w-full">
      <video
        className="hero-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onLoadedMetadata={(event) => {
          event.currentTarget.defaultPlaybackRate = 0.5;
          event.currentTarget.playbackRate = 0.5;
        }}
      >
        <source src="/videos/Mushrooms_growing_in_black_soil_760ecc30.mp4" type="video/mp4" />
      </video>
      <div className="hero-glow" />

      {/* Side copy columns — only visible on large screens via CSS */}
      <div className="hero-copy hero-copy-left">
        <p>Cultivating premium mushrooms since 2007 in Madurai, Tamil Nadu.</p>
      </div>
      <div className="hero-copy hero-copy-right">
        <p>Oyster &amp; Milky mushroom varieties grown with sustainable practices.</p>
      </div>

      <div className="hero-intro">
        <span className="hero-brand"><MushroomIcon size={17} /> Udhayan Mushroom Cultivation Farm</span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          OYSTER &amp; MILKY<br /><span>MUSHROOM CULTIVATION</span>
        </motion.h1>
        <motion.p
          className="mt-5 text-sm sm:text-base text-[#F3EEDC]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Kadachanenthal, Madurai, Tamil Nadu · Established 17 January 2007
        </motion.p>
      </div>
    </section>
  );
}
