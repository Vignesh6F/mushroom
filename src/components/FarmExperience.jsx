import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, FlaskConical, Recycle, Users } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

const facilities = [
  { title: 'Model Cultivation Setup',   description: 'A fully operational model for practical mushroom cultivation training.',                                           icon: MushroomIcon },
  { title: 'Equipped Laboratory',       description: 'A laboratory equipped for mushroom spawn production training.',                                                    icon: FlaskConical },
  { title: 'Compost Unit',              description: 'A dedicated unit for training in compost preparation from mushroom waste.',                                        icon: Recycle      },
  { title: 'Training Kitchen',          description: 'A well-established kitchen for value-added mushroom product training.',                                            icon: ChefHat      },
  { title: 'Spacious Mini Hall',        description: 'A space for mass training and entrepreneurship programs for college students and self-help groups.',                icon: Users        },
];

export default function FarmExperience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        {/* Centred header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">Infrastructure</span>
          <h2 className="section-heading">Facilities for Hands-On Training</h2>
          <p className="section-body">
            Udhayan's training infrastructure supports cultivation, spawn, compost, and
            value-added product programs under one roof.
          </p>
        </motion.div>

        {/* Facility cards */}
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
              className="card-dark flex items-start gap-4 p-6"
            >
              <span
                className="flex shrink-0 items-center justify-center w-12 h-12 rounded-2xl"
                style={{ background: 'rgba(167,180,139,.12)', color: 'var(--green-soft)' }}
              >
                <Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold" style={{ color: 'var(--cream)' }}>{title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
