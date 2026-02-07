"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "../data/siteContent";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-light rounded-full px-4 md:px-8 py-4 shadow-2xl">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white">
          {siteContent.brand.name}<span className="text-yellow-600">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {siteContent.navbar.links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm uppercase tracking-widest transition-colors ${
                pathname === link.path
                  ? "text-yellow-600 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={siteContent.navbar.cta.path}
            className="px-6 py-2 rounded-full bg-white text-black text-sm uppercase tracking-widest glow-button transition-all font-bold"
          >
            {siteContent.navbar.cta.text}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-8 glass rounded-3xl md:hidden flex flex-col items-center space-y-6 shadow-2xl border border-white/10"
          >
            {siteContent.navbar.links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg uppercase tracking-widest transition-colors ${
                  pathname === link.path 
                    ? "text-yellow-600 font-bold" 
                    : "text-zinc-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={siteContent.navbar.cta.path}
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-6 py-4 rounded-full bg-white text-black uppercase tracking-widest font-bold"
            >
              {siteContent.navbar.cta.text}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

