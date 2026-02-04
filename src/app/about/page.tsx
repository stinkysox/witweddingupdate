"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../components/SectionWrapper";
import Link from "next/link";

export default function About() {
  const [isImageFocused, setIsImageFocused] = useState(false);

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <SectionWrapper className="max-w-5xl mx-auto px-6 text-center mb-32">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-label mb-6 block"
        >
          Our Ethos
        </motion.span>
        <h1 className="text-6xl md:text-9xl font-serif mb-10 leading-[0.85] tracking-tighter text-white">
          Cinematic Soul, <br />
          <span className="italic">Timeless Frame.</span>
        </h1>
        <p className="premium-para text-xl md:text-2xl max-w-3xl mx-auto italic font-medium !text-zinc-300">
          We are a creative house dedicated to documenting the quiet grandeur
          and emotional legacies of the world's most beautiful celebrations.
        </p>
      </SectionWrapper>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <SectionWrapper direction="left">
            <motion.div
              onClick={() => setIsImageFocused(!isImageFocused)}
              onMouseEnter={() => setIsImageFocused(true)}
              onMouseLeave={() => setIsImageFocused(false)}
              className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative cursor-pointer"
            >
              <motion.img
                animate={{
                  filter: isImageFocused ? "grayscale(0%)" : "grayscale(100%)",
                  scale: isImageFocused ? 1.05 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                src="https://i.pinimg.com/736x/f5/94/d1/f594d17e5bcd98234cd36a48f5b56a9a.jpg"
                alt="Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden">
                <motion.p
                   animate={{ opacity: isImageFocused ? 0 : 1 }}
                  className="text-[8px] uppercase tracking-widest text-white/50 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  Tap to reveal color
                </motion.p>
              </div>
            </motion.div>
          </SectionWrapper>

          <SectionWrapper direction="right">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-white">
              Beyond the <br />
              Standard Frame.
            </h2>
            <p className="premium-para text-lg mb-8">
              Weddingwit was founded on a simple belief: wedding cinematography
              should transcend the typical. We blend authentic documentary
              storytelling with a sophisticated editorial aesthetic to create
              films that feel like an archive of emotion.
            </p>
            <p className="premium-para text-lg">
              Each story is a unique collaboration. We don't just capture
              events; we capture the visual frequency that makes your connection
              one of a kind.
            </p>

            <div className="mt-12 flex gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-3xl font-serif italic mb-1">500+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  Stories Archive
                </p>
              </div>
              <div>
                <p className="text-3xl font-serif italic mb-1">全球</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  Global Reach
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-32 bg-white/5 rounded-[5rem] mx-4 mb-48">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-serif mb-6 text-white">
              The Pillars
            </h2>
            <p className="premium-label italic">
              The Weddingwit Standard
            </p>
          </SectionWrapper>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Visual Poise",
                desc: "A commitment to capturing the inherent grace and dignity of every subject, regardless of the setting.",
              },
              {
                title: "Atmospheric Light",
                desc: "Utilizing natural light and shadow to create imagery that feels like a classic cinematic masterpiece.",
              },
              {
                title: "Editorial Curation",
                desc: "A meticulous post-production process that treats your film as a piece of high-end editorial art.",
              },
            ].map((pillar, i) => (
              <SectionWrapper key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{
                    y: -10,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="p-12 glass rounded-[3rem] border border-white/10 h-full transition-colors duration-500 cursor-pointer"
                >
                  <h4 className="text-3xl font-serif italic mb-6 text-yellow-600">
                    {pillar.title}
                  </h4>
                  <p className="premium-para !text-zinc-400">
                    {pillar.desc}
                  </p>
                </motion.div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* The Archive Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionWrapper direction="left" className="order-2 md:order-1">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight italic text-white">
              The Archive
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Curation",
                  desc: "We curate the most poignant moments, ensuring the narrative flow is as intentional as a feature film.",
                },
                {
                  step: "02",
                  title: "Authenticity",
                  desc: "We focus on the raw, unscripted glances that carry the most emotional weight.",
                },
                {
                  step: "03",
                  title: "Legacy",
                  desc: "Our end goal is an archive that remains as evocative fifty years from now as it is today.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.8 }}
                  className="flex gap-8 group cursor-default"
                >
                  <span className="text-2xl font-serif italic text-yellow-600/40 group-hover:text-yellow-600 transition-colors">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-xl font-serif mb-2 tracking-tight text-white">
                      {item.title}
                    </h4>
                    <p className="premium-para text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper direction="right" className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 40, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="aspect-[4/5] rounded-[2rem] overflow-hidden translate-y-12 shadow-xl"
              >
                <img
                  src="https://i.pinimg.com/736x/79/21/c2/7921c220ea25456868c005d8b4ef808c.jpg"
                  alt="Detail 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -40, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl"
              >
                <img
                  src="https://i.pinimg.com/736x/5f/0e/07/5f0e070f0f88e6d9b78179f74267025a.jpg"
                  alt="Detail 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Final CTA */}
      <SectionWrapper className="text-center px-6">
        <h2 className="text-4xl md:text-7xl font-serif mb-12 italic text-white">
          Join the Legacy.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href="/gallery"
            className="px-12 py-5 rounded-full bg-yellow-600 text-white uppercase tracking-[0.2em] text-[10px] font-bold shadow-lg active:scale-95 transition-transform"
          >
            The Portfolio
          </Link>
          <Link
            href="/book"
            className="px-12 py-5 rounded-full border border-white/10 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-white/5 active:scale-95 transition-all text-white"
          >
            Book a Consultation
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
