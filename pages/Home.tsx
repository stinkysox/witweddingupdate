import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../src/components/SectionWrapper";

const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 dark:opacity-40">
    <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-yellow-400/20 dark:bg-yellow-900/30 rounded-full aurora-blob" />
    <div
      className="absolute bottom-[-15%] right-[-5%] w-[70%] h-[70%] bg-orange-400/20 dark:bg-orange-950/25 rounded-full aurora-blob"
      style={{ animationDelay: "-8s" }}
    />
    <div
      className="absolute top-[10%] right-[5%] w-[60%] h-[60%] bg-rose-400/15 dark:bg-rose-900/20 rounded-full aurora-blob"
      style={{ animationDelay: "-15s" }}
    />
    <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-[4px]" />
  </div>
);

const FEATURED_SHOTS = [
  {
    id: "1",
    url: "https://i.pinimg.com/736x/27/91/56/2791561897980a13a1d81eaee23db512.jpg",
    title: "Eternal Vows",
    date: "2023",
  },
  {
    id: "2",
    url: "https://i.pinimg.com/1200x/3a/d2/cf/3ad2cf6a4a6791043e3ad2905ccb4f26.jpg",
    title: "The Golden Hour",
    date: "2024",
  },
  {
    id: "3",
    url: "https://i.pinimg.com/736x/31/68/b8/3168b8366b5fdc168b262603d2018024.jpg",
    title: "Minimal Elegance",
    date: "2023",
  },
];

// BubbleScroll component handles these items now

import { BubbleScroll } from "../src/components/BubbleScroll";

export const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#050505]">
      {/* Aurora Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AuroraBackground />

        <motion.div
          style={{ y: heroContentY }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-9xl font-serif text-[#1A1A1A] dark:text-white mb-8 tracking-tighter leading-none"
          >
            Capturing the <br />
            <span className="italic text-yellow-600 dark:text-yellow-500">
              Soul
            </span>{" "}
            of Connection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="text-gray-500 dark:text-white/60 text-xs md:text-sm uppercase tracking-[0.5em] mb-12 font-light"
          >
            Luxury Wedding Cinematography & Photography
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <Link
              to="/gallery"
              className="inline-block px-12 py-5 glass dark:text-white text-[#1A1A1A] rounded-full uppercase tracking-[0.2em] hover:bg-black/5 dark:hover:bg-white/10 transition-all text-[10px] font-bold glow-button border border-black/10 dark:border-white/10 shadow-lg"
            >
              Explore Portfolio
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[10px] text-gray-400 dark:text-white/40 uppercase tracking-[0.3em] vertical-text">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-yellow-600 dark:from-white to-transparent"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto bg-white dark:bg-[#050505]">
        <div className="grid md:grid-cols-2 gap-32 items-center">
          <SectionWrapper direction="left">
            <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-none tracking-tight text-[#1A1A1A] dark:text-white">
              Rooted in <br />
              <span className="text-yellow-600 italic">Pure Emotion.</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-14 font-light max-w-lg">
              We weave visual narratives that stand the test of time. Weddingwit
              is the junction where editorial high-fashion meets the raw,
              unscripted beauty of human connection.
            </p>
            <Link
              to="/about"
              className="group flex items-center gap-8 text-[10px] uppercase tracking-[0.4em] font-bold dark:text-white"
            >
              Our Philosophy
              <span className="w-20 h-[1px] bg-black dark:bg-white group-hover:w-32 transition-all duration-700"></span>
            </Link>
          </SectionWrapper>

          <SectionWrapper direction="right" delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] relative shadow-2xl bg-gray-50 dark:bg-zinc-900">
              <img
                src="https://i.pinimg.com/1200x/50/36/08/50360859203a51e5de8e30e934ab856d.jpg"
                alt="Brand Intro"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-[3rem]"></div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Bubble Scroll Section (Replaces Bento Grid) */}
      <BubbleScroll />

      {/* Featured Gallery */}
      <section className="py-32 bg-gray-50 dark:bg-[#0A0A0A] rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6">
          <SectionWrapper direction="up" className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-[#1A1A1A] dark:text-white">
              Featured Works
            </h2>
            <p className="text-gray-400 uppercase tracking-[0.3em] text-[10px] font-bold">
              Selected Visual Legacies
            </p>
          </SectionWrapper>

          <div className="grid md:grid-cols-3 gap-12">
            {FEATURED_SHOTS.map((shot, idx) => (
              <SectionWrapper key={shot.id} direction="up" delay={idx * 0.2}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 mb-6 shadow-xl border border-black/5 dark:border-white/5">
                  <img
                    src={shot.url}
                    alt={shot.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white/90 dark:bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center p-8 text-center backdrop-blur-[4px]">
                    <div>
                      <h4 className="text-3xl font-serif text-[#1A1A1A] dark:text-white mb-6 italic">
                        {shot.title}
                      </h4>
                      <Link
                        to="/gallery"
                        className="px-8 py-3 glass dark:text-white text-[#1A1A1A] rounded-full uppercase text-[10px] tracking-[0.2em] hover:bg-black/5 transition-all border border-black/10 dark:border-white/10"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4">
                  <h3 className="text-xl font-serif tracking-tight text-[#1A1A1A] dark:text-white">
                    {shot.title}
                  </h3>
                  <p className="text-[10px] text-yellow-600 uppercase tracking-[0.2em] font-bold">
                    {shot.date}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Cards */}
      <section className="py-40 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Cinematic Approach",
              desc: "Expert use of light, motion, and shadow to create a feature-film aesthetic for your memories.",
            },
            {
              title: "Editorial Style",
              desc: "Imagery tailored for the cover, blending high-fashion composition with raw intimacy.",
            },
            {
              title: "Emotional Purity",
              desc: "We capture the silent, unseen moments that carry the most weight in your story.",
            },
          ].map((item, idx) => (
            <SectionWrapper key={idx} direction="up" delay={idx * 0.2}>
              <div className="p-16 rounded-[3rem] glass border border-black/10 dark:border-white/5 h-full flex flex-col items-center text-center group hover:bg-yellow-600/5 transition-all duration-700 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 rounded-full border border-yellow-600/20 flex items-center justify-center mb-10 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-500">
                  <span className="font-serif italic text-2xl dark:text-white group-hover:text-white">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-3xl font-serif mb-6 italic tracking-tight text-[#1A1A1A] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-xs uppercase tracking-[0.2em]">
                  {item.desc}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-40 px-6 bg-white dark:bg-black">
        <SectionWrapper
          direction="up"
          className="max-w-6xl mx-auto glass rounded-[5rem] p-12 md:p-24 border border-yellow-600/20 relative overflow-hidden shadow-2xl flex flex-col items-center text-center"
        >
          <div className="absolute top-0 right-0 p-16 opacity-[0.05] pointer-events-none text-yellow-600">
            <svg
              width="300"
              height="300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <h2 className="text-5xl md:text-8xl font-serif mb-12 italic leading-none tracking-tighter text-[#1A1A1A] dark:text-white">
            Let’s craft your <br /> masterpiece.
          </h2>

          <p className="text-xl text-gray-500 dark:text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Limited availability for 2024 & 2025. Each story is selected for its
            unique visual potential. We would be honored to tell yours.
          </p>

          <div className="flex justify-center w-full">
            <Link
              to="/book"
              className="px-16 py-7 rounded-full bg-yellow-600 text-white uppercase tracking-[0.4em] font-bold text-[10px] glow-button transition-all hover:scale-105 active:scale-95"
            >
              Book a Consultation
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
};
