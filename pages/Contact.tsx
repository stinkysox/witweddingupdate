import React from "react";
import { SectionWrapper } from "../src/components/SectionWrapper";

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper className="mb-24">
          <span className="text-yellow-600 uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">
            Inquiries
          </span>
          <h1 className="text-6xl md:text-9xl font-serif mb-6 italic leading-none tracking-tighter">
            Connect.
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl">
            Available for commissions globally. We only accept a select number
            of stories each year to ensure our signature quality.
          </p>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-24">
          <SectionWrapper direction="left">
            <div className="space-y-16">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-yellow-600 font-bold mb-6">
                  The Studio
                </h3>
                <p className="text-3xl font-serif leading-snug">
                  Block 42, The Deccan Quarter
                  <br />
                  Jubilee Hills, Hyderabad
                  <br />
                  Telangana, 500033
                </p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-yellow-600 font-bold mb-6">
                  Communication
                </h3>
                <p className="text-3xl font-serif leading-snug italic">
                  archives@weddingwit.com
                  <br />
                  +91 (0) 40 4567 8910
                </p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-yellow-600 font-bold mb-6">
                  Social Narrative
                </h3>
                <div className="flex gap-12 text-2xl font-serif italic">
                  <a
                    href="#"
                    className="hover:text-yellow-600 transition-all duration-500 border-b border-transparent hover:border-yellow-600/30"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="hover:text-yellow-600 transition-all duration-500 border-b border-transparent hover:border-yellow-600/30"
                  >
                    Vimeo
                  </a>
                  <a
                    href="#"
                    className="hover:text-yellow-600 transition-all duration-500 border-b border-transparent hover:border-yellow-600/30"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper direction="right">
            <div className="glass p-12 md:p-16 rounded-[4rem] border border-black/5 dark:border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600/5 rounded-full blur-3xl group-hover:bg-yellow-600/10 transition-colors duration-1000"></div>

              <form className="space-y-10 relative z-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-400">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Arjun"
                      className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 outline-none focus:border-yellow-600 transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-400">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Reddy"
                      className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 outline-none focus:border-yellow-600 transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 outline-none focus:border-yellow-600 transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-400">
                    Event Narrative
                  </label>
                  <textarea
                    placeholder="Tell us about the celebration..."
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 h-32 outline-none focus:border-yellow-600 transition-colors resize-none placeholder:text-gray-300 dark:placeholder:text-gray-700"
                  />
                </div>

                <div className="flex items-start gap-4 text-[10px] text-gray-500 dark:text-gray-400">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 rounded border-black/10 dark:border-white/10 accent-yellow-600"
                  />
                  <p className="leading-relaxed">
                    I agree to the collection and processing of my personal data as outlined in the{" "}
                    <a href="/privacy-policy" className="text-yellow-600 underline">Privacy Policy</a> and{" "}
                    <a href="/terms-of-service" className="text-yellow-600 underline">Terms of Service</a>.
                  </p>
                </div>

                <button className="w-full py-6 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-black uppercase tracking-[0.4em] font-bold text-[10px] hover:scale-[1.02] transition-transform shadow-2xl glow-button">
                  Send Inquiry
                </button>
              </form>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};
