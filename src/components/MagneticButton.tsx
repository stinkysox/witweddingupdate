"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  distance = 0.5,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    x.set(deltaX * distance);
    y.set(deltaY * distance);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
