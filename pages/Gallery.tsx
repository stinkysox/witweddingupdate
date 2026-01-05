import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { GalleryCategory } from "../types";
import { GALLERY_DATA } from "../assets/gallery";

const CATEGORIES: (GalleryCategory | "All")[] = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Haldi",
  "Sangeeth",
  "Baby Shoot",
  "Maternity",
  "Other",
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filteredItems = GALLERY_DATA.filter((item) =>
    filter === "All" ? true : item.category === filter
  );

  return (
    <div className="pt-40 pb-24 px-6 min-h-screen">
      <SectionWrapper className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-6xl md:text-9xl font-serif mb-8 tracking-tighter">
          The Gallery.
        </h1>
        <p className="text-gray-400 uppercase tracking-[0.4em] text-xs mb-12">
          A curated collection of visual storytelling
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full border text-[10px] uppercase tracking-[0.2em] transition-all duration-500 font-bold ${
                filter === cat
                  ? "bg-black text-white border-black dark:bg-white dark:text-black shadow-xl scale-105"
                  : "border-gray-200 dark:border-white/10 text-gray-400 hover:border-yellow-600 hover:text-yellow-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto">
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center text-gray-500 font-serif italic text-2xl">
            Coming soon to this category...
          </div>
        ) : (
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const isLoaded = loadedImages[item.id];

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="break-inside-avoid"
                  >
                    <div className="group relative overflow-hidden rounded-3xl glass-light border border-black/5 dark:border-white/5 shadow-sm">
                      {/* Shimmer Placeholder */}
                      {!isLoaded && (
                        <div
                          className="
                            absolute inset-0 rounded-3xl
                            bg-gradient-to-r
                            from-white/5 via-white/15 to-white/5
                            dark:from-white/3 dark:via-white/10 dark:to-white/3
                            bg-[length:200%_100%]
                            animate-[shimmer_1.6s_ease-in-out_infinite]
                          "
                          style={{
                            animationName: "shimmer",
                            animationTimingFunction: "ease-in-out",
                            animationIterationCount: "infinite",
                            animationDuration: "1.6s",
                            backgroundPosition: "0% 0%",
                          }}
                        />
                      )}

                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        onLoad={() =>
                          setLoadedImages((prev) => ({
                            ...prev,
                            [item.id]: true,
                          }))
                        }
                        className={`w-full object-cover transition-all duration-700 ${
                          isLoaded
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-700 p-10 flex flex-col justify-end backdrop-blur-[2px]">
                        <p className="text-yellow-600 uppercase text-[10px] tracking-[0.3em] font-bold mb-4">
                          {item.category}
                        </p>
                        <h3 className="text-3xl font-serif text-white mb-3 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-white/60 text-xs italic leading-relaxed max-w-[200px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};
