import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA } from "../assets/gallery";

const CATEGORIES = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Maternity",
  "Baby Shoot",
  "Engagement",
  "Family",
  "Rituals",
  "Other Events",
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleItemInteraction = (id: string, isClick: boolean) => {
    if (isClick) {
      setActiveId((prev) => (prev === id ? null : id));
    } else {
      setActiveId(id);
    }
  };

  const filteredItems = GALLERY_DATA.filter((item) =>
    filter === "All" ? true : item.category === filter
  );

  return (
    <div className="pt-40 pb-24 px-6 min-h-screen bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Luxury Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 mb-24"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setActiveId(null);
              }}
              className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 border ${
                filter === cat
                  ? "bg-yellow-600 border-yellow-600 text-white shadow-xl shadow-yellow-600/20 scale-105"
                  : "border-black/5 dark:border-white/5 text-gray-400 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid or Coming Soon State */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
              >
                {filteredItems.map((item) => {
                  const isLoaded = loadedImages[item.id];
                  const isActive = activeId === item.id;

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="break-inside-avoid"
                    >
                      <div
                        className="group relative overflow-hidden rounded-[2.5rem] glass-light border border-black/5 dark:border-white/5 shadow-sm cursor-pointer"
                        onClick={() => handleItemInteraction(item.id, true)}
                        onMouseEnter={() =>
                          handleItemInteraction(item.id, false)
                        }
                        onMouseLeave={() => setActiveId(null)}
                      >
                        <motion.img
                          src={item.imageUrl}
                          alt={item.title}
                          animate={{
                            scale: isActive ? 1.1 : 1,
                            filter: isActive
                              ? "brightness(0.3) blur(6px)"
                              : "brightness(1) blur(0px)",
                          }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className={`w-full object-cover transition-opacity duration-1000 ${
                            isLoaded ? "opacity-100" : "opacity-0"
                          }`}
                          onLoad={() =>
                            setLoadedImages((prev) => ({
                              ...prev,
                              [item.id]: true,
                            }))
                          }
                        />

                        <motion.div
                          initial={false}
                          animate={{ opacity: isActive ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 p-10 flex flex-col justify-end pointer-events-none"
                        >
                          <div className="relative z-10">
                            <motion.p
                              animate={{ y: isActive ? 0 : 20 }}
                              className="text-yellow-600 uppercase text-[9px] tracking-[0.6em] font-bold mb-4"
                            >
                              {item.category}
                            </motion.p>
                            <motion.h3
                              animate={{ y: isActive ? 0 : 20 }}
                              transition={{ delay: 0.05 }}
                              className="text-3xl md:text-4xl font-serif text-white mb-5 italic leading-tight"
                            >
                              {item.title}
                            </motion.h3>
                            <motion.p
                              animate={{ y: isActive ? 0 : 20 }}
                              transition={{ delay: 0.1 }}
                              className="text-white/80 text-[12px] md:text-sm leading-relaxed max-w-[280px] font-light italic"
                            >
                              {item.description}
                            </motion.p>
                          </div>
                        </motion.div>
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none" />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              /* --- Coming Soon Enhancement --- */
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center justify-center py-32 text-center"
              >
                <div className="w-24 h-[1px] bg-yellow-600/30 mb-8" />
                <h3 className="text-4xl md:text-5xl font-serif italic text-black dark:text-white mb-4">
                  Coming Soon
                </h3>
                <p className="text-gray-400 uppercase tracking-[0.4em] text-[10px] font-medium">
                  We are currently curating this collection
                </p>
                <div className="w-24 h-[1px] bg-yellow-600/30 mt-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
