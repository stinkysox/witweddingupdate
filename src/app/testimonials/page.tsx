"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../components/SectionWrapper";

interface Testimonial {
  id: string;
  name: string;
  event: string;
  quote: string;
  imageUrl: string;
}

const REVIEWS: Testimonial[] = [
  {
    id: "1",
    name: "Ananya & Rohan",
    event: "The Palace Rites",
    quote:
      "They didn’t just document the day; they captured the soul of our silence. The way they filmed our Varmala sequence felt like a frame from a classic epic.",
    imageUrl:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    name: "Diya & Arjun",
    event: "The Heritage Reception",
    quote:
      "A masterclass in editorial cinematography. They managed to find quiet, intimate moments even amidst the beautiful chaos of our grand reception.",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    name: "Meera & Sameer",
    event: "The Royal Courtyard",
    quote:
      "The attention to detail—from the texture of the heirloom silk to the silent exchange of glances during the Pheras—was absolutely breathtaking.",
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-436ceea16598?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    name: "Sara & Ishaan",
    event: "The Estate Celebration",
    quote:
      "Seamless, professional, and artistically superior. Weddingwit has a way of seeing light that feels almost supernatural. Our legacy is in safe hands.",
    imageUrl:
      "https://images.unsplash.com/photo-1512101176959-c557f3516787?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Testimonials() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleInteraction = (id: string, isClick: boolean) => {
    if (isClick) {
      setActiveId((prev) => (prev === id ? null : id));
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className="py-40 px-6 overflow-hidden">
      <SectionWrapper className="max-w-4xl mx-auto text-center mb-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-yellow-600 uppercase tracking-[0.5em] text-[10px] font-bold mb-4"
        >
          Reflections
        </motion.p>
        <h2 className="text-6xl md:text-9xl font-serif text-white italic leading-none">
          Kind Words.
        </h2>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {REVIEWS.map((review, idx) => {
          const isActive = activeId === review.id;

          return (
            <SectionWrapper
              key={review.id}
              direction={idx % 2 === 0 ? "left" : "right"}
              delay={idx * 0.1}
            >
              <motion.div
                onClick={() => handleInteraction(review.id, true)}
                onMouseEnter={() => handleInteraction(review.id, false)}
                onMouseLeave={() => setActiveId(null)}
                animate={{
                  borderColor: isActive
                    ? "rgba(202, 138, 4, 0.3)"
                    : "rgba(255, 255, 255, 0.05)",
                  y: isActive ? -10 : 0,
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass rounded-[3rem] p-10 md:p-16 border relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center gap-6 mb-10 relative z-10">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-white/10 shadow-2xl">
                    <motion.img
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ duration: 0.6 }}
                      src={review.imageUrl}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-white">
                      {review.name}
                    </h3>
                    <motion.p
                      animate={{ color: isActive ? "#ca8a04" : "#ca8a04" }}
                      className="text-[10px] uppercase tracking-[0.3em] font-bold"
                    >
                      {review.event}
                    </motion.p>
                  </div>
                </div>

                <motion.p
                  animate={{ color: isActive ? "#f3f4f6" : "#a1a1aa" }}
                  className="text-xl md:text-2xl italic font-serif leading-relaxed relative z-10"
                >
                  "{review.quote}"
                </motion.p>

                {/* Decorative Quote SVG */}
                <motion.div
                  animate={{
                    opacity: isActive ? 0.1 : 0.03,
                    scale: isActive ? 1 : 0.8,
                    rotate: isActive ? 0 : -5,
                  }}
                  className="absolute -bottom-8 -right-8 text-white pointer-events-none"
                >
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z" />
                  </svg>
                </motion.div>
              </motion.div>
            </SectionWrapper>
          );
        })}
      </div>
    </div>
  );
}
