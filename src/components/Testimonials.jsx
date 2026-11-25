import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';

export default function Testimonials() {
  const reviews = [
    {
      initials: "JC",
      author: "Chef Julian Cruz",
      role: "Executive Chef, L'Ombre (2 Michelin Stars)",
      quote: "\u201CThe density and moisture balance in Udhayan's King Oysters is unparalleled. They don't leak water into the pan\u2014they sear to a golden caramel crisp immediately.\u201D",
      rating: 5
    },
    {
      initials: "MN",
      author: "Mira Nakamura",
      role: "Clinical Mycotherapist & Author",
      quote: "\u201CFinding authentic, unadulterated Lion's Mane with bioactive potency intact is rare. Udhayan delivers medicinal mushroom flushes of true pristine quality.\u201D",
      rating: 5
    },
    {
      initials: "AL",
      author: "Arthur Sterling",
      role: "Home Cultivator, Portland",
      quote: "\u201CTheir countertop grow kits are works of bio-art. We harvested three full flushes of pink oyster mushrooms right beside our kitchen herb garden.\u201D",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="w-full py-24 bg-[#FAF4ED] relative border-t border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div>
            <span className="font-label-md text-label-md text-[#475C3E] uppercase tracking-widest block mb-2 font-semibold">
              Verified Voices
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1D1E18] tracking-tight font-serif font-bold">
              Loved by Nature Enthusiasts &amp; Chefs
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center text-[#475C3E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#475C3E] text-[#475C3E]" />
              ))}
            </span>
            <span className="font-label-md text-label-md text-[#1D1E18] font-bold">
              4.98 / 5.0 from 350+ orders
            </span>
          </div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              variants={staggerItem}
              className="p-8 rounded-3xl bg-white border border-outline-variant shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow hover:-translate-y-1 duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center text-[#475C3E]">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="w-[18px] h-[18px] fill-[#475C3E] text-[#475C3E]" />
                  ))}
                </div>
                <p className="font-body-lg text-body-lg text-[#1D1E18] italic font-serif leading-relaxed">
                  {r.quote}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant">
                <div className="w-12 h-12 rounded-full bg-[#E2EBDA] flex items-center justify-center text-[#2D4229] font-bold font-headline-sm font-serif">
                  {r.initials}
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-[#1D1E18] font-bold">
                    {r.author}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {r.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
