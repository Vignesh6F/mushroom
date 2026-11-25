import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  const scrollToContent = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="farm" className="hero-section">
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onLoadedMetadata={(e) => {
          e.currentTarget.defaultPlaybackRate = 0.55;
          e.currentTarget.playbackRate = 0.55;
        }}
      >
        <source src="/videos/Mushrooms_growing_in_black_soil_760ecc30.mp4" type="video/mp4" />
      </video>

      {/* Ambient glow */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Side copy — desktop only */}
      <div className="hero-copy hero-copy-left" aria-hidden="true">
        <p>Cultivating premium mushrooms in Madurai since 2007.</p>
      </div>
      <div className="hero-copy hero-copy-right" aria-hidden="true">
        <p>Oyster &amp; Milky mushroom varieties grown with sustainable practices.</p>
      </div>

      {/* Main centered content */}
      <div className="hero-inner">
        <motion.span
          className="hero-brand"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <MushroomIcon size={16} />
          Udhayan Mushroom Cultivation Farm
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          OYSTER &amp; MILKY<br />
          <span>MUSHROOM CULTIVATION</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          Kadachanenthal, Madurai, Tamil Nadu · Established 17 January 2007
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.48 }}
        >
          <a
            href={getWhatsAppUrl("I'm interested in mushroom training")}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-primary"
          >
            <MessageCircle size={16} strokeWidth={2} />
            Enquire via WhatsApp
          </a>
          <button
            onClick={scrollToContent}
            className="hero-btn hero-btn-secondary"
          >
            Explore the Farm
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#process"
        onClick={(e) => { e.preventDefault(); scrollToContent(); }}
        className="hero-scroll-indicator"
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <span className="scroll-arrow">
          <ChevronDown size={14} strokeWidth={2} />
        </span>
      </a>
    </section>
  );
}
