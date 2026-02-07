"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down";
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  // Split text into words for more granular control if needed, 
  // but for now we'll animate line by line or the whole block.
  // Actually, for a "reveal" effect, it's often best to treat the whole string 
  // or manually separated lines. Let's support automatic word splitting or just container masking.
  
  // For the "God Mode" feel, usually line-by-line is best. 
  // Let's keep it simple: We assume `text` is a single block or line. 
  // If the user passes a long string, it might wrap. 
  // True "line" animation on web is hard without splitting. 
  // Let's treat the incoming text as a single "reveal unit" for now, 
  // or allow passing ReactNode if we want complex structure.
  
  // Actually, let's just wrap the text in a span and animate relative to a parent.
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: direction === "up" ? "100%" : "-100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Apple-like ease
          delay: delay,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
};
