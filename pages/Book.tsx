import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";

export const Book: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionWrapper direction="up" className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Reservation</h1>
          <p className="text-gray-500 uppercase tracking-widest text-sm italic">
            Let's craft your masterpiece together
          </p>
        </SectionWrapper>

        <SectionWrapper direction="up" delay={0.2}>
          <div className="glass rounded-[2rem] p-8 md:p-16 border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest opacity-60">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:border-yellow-600 outline-none transition-colors text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest opacity-60">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:border-yellow-600 outline-none transition-colors text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest opacity-60">
                        Event Date
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full bg-transparent border-b border-white/20 py-4 focus:border-yellow-600 outline-none transition-colors text-gray-900 dark:text-gray-100 [color-scheme:light] dark:[color-scheme:dark]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest opacity-60">
                        Event Type
                      </label>
                      <div className="relative">
                        <select className="w-full bg-white/5 dark:bg-black/20 border-b border-white/20 py-4 px-4 focus:border-yellow-600 outline-none transition-colors appearance-none cursor-pointer text-gray-900 dark:text-gray-100 rounded-t-lg backdrop-blur-sm">
                          <option
                            value="wedding"
                            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                          >
                            Wedding Ceremony
                          </option>
                          <option
                            value="pre-wedding"
                            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                          >
                            Pre-Wedding
                          </option>
                          <option
                            value="maternity"
                            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                          >
                            Maternity
                          </option>
                          <option
                            value="engagement"
                            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                          >
                            Engagement
                          </option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest opacity-60">
                      Tell us about your vision
                    </label>
                    <textarea
                      placeholder="Describe the mood, location, and your story..."
                      className="w-full bg-transparent border-b border-white/20 py-4 h-32 focus:border-yellow-600 outline-none transition-colors resize-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-full bg-yellow-600 text-white uppercase tracking-[0.2em] font-bold text-sm glow-button transition-all hover:bg-yellow-500"
                  >
                    Request Consultation
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-serif mb-4">Request Received</h2>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Thank you for considering us. Our boutique team will review
                    your story and get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm uppercase tracking-widest underline underline-offset-8 hover:text-yellow-600 transition-colors"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};
