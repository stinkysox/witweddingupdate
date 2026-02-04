import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface BubbleConfig {
  url: string;
  size: number;
  x: string;
  y: string;
  range: [number, number]; // [start, end] of global scroll
  drift: { x: number; y: number };
}

const Bubble: React.FC<{ config: BubbleConfig; progress: MotionValue<number>; index: number }> = ({
  config,
  progress,
  index,
}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const responsiveSize = isMobile ? config.size * 0.45 : config.size;

  const start = config.range[0];
  const end = config.range[1];
  const mid = (start + end) / 2;

  // Extremely generous opacity range to ensure we don't have blank screens
  const opacity = useTransform(progress, [start, start + 0.15, end - 0.15, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, mid, end], [0.6, 1.8, 0.6]);
  
  // Drift values
  const driftX = useTransform(progress, [start, end], ["0%", (isMobile ? config.drift.x * 0.2 : config.drift.x) + "%"]);
  const driftY = useTransform(progress, [start, end], ["0%", (isMobile ? config.drift.y * 0.4 : config.drift.y) + "%"]);

  const springScale = useSpring(scale, { stiffness: 60, damping: 25 });
  const springX = useSpring(driftX, { stiffness: 45, damping: 20 });
  const springY = useSpring(driftY, { stiffness: 45, damping: 20 });

  const responsiveLeft = isMobile
    ? `calc(${config.x} * 0.6 + 20%)`
    : config.x;

  return (
    <div
      style={{
        position: "absolute",
        left: responsiveLeft,
        top: config.y,
        width: responsiveSize,
        height: responsiveSize,
        transform: "translate(-50%, -50%)", // Static centering
        zIndex: 10 + index,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          opacity,
          scale: springScale,
          x: springX,
          y: springY,
        }}
        className="rounded-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] pointer-events-none will-change-transform"
      >
        <img
          src={config.url}
          alt="Wedding moment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
      </motion.div>
    </div>
  );
};

export const BubbleScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Balanced, overlapping ranges to ensure no blank zones
  const bubbles: BubbleConfig[] = [
    {
      url: "https://i.pinimg.com/736x/b5/23/b3/b523b3e8a7410b20dedbac7491a528af.jpg",
      size: 500,
      x: "15%",
      y: "30%",
      range: [0, 0.4],
      drift: { x: 50, y: -80 },
    },
    {
      url: "https://i.pinimg.com/736x/ba/63/52/ba63529729f2cc61dbac103f6f7bb238.jpg",
      size: 350,
      x: "70%",
      y: "25%",
      range: [0.1, 0.5],
      drift: { x: -40, y: -60 },
    },
    {
      url: "https://i.pinimg.com/736x/00/bd/a0/00bda06b701af0b5ee56538e55312a06.jpg",
      size: 420,
      x: "30%",
      y: "60%",
      range: [0.25, 0.65],
      drift: { x: 60, y: -100 },
    },
    {
      url: "https://i.pinimg.com/1200x/70/7c/74/707c741bd1aa9d0c154f81f2bc089bd8.jpg",
      size: 280,
      x: "80%",
      y: "45%",
      range: [0.35, 0.75],
      drift: { x: -80, y: -70 },
    },
    {
      url: "https://i.pinimg.com/1200x/b8/9c/5f/b89c5f5d181450d685871a21d76d60ae.jpg",
      size: 480,
      x: "10%",
      y: "50%",
      range: [0.5, 0.85],
      drift: { x: 100, y: -90 },
    },
    {
      url: "https://i.pinimg.com/736x/2d/04/16/2d04167fb5b1b086548758f5f08bf8c4.jpg",
      size: 380,
      x: "65%",
      y: "70%",
      range: [0.6, 0.95],
      drift: { x: -30, y: -120 },
    },
    {
      url: "https://i.pinimg.com/736x/3a/0e/0c/3a0e0c89e90e0caf232ca5f2bd30ea9d.jpg",
      size: 400,
      x: "25%",
      y: "75%",
      range: [0.75, 1.0],
      drift: { x: 40, y: -90 },
    },
    {
      url: "https://i.pinimg.com/736x/43/ea/c0/43eac0aed202d47c88a0715a1c56af64.jpg",
      size: 520,
      x: "60%",
      y: "20%",
      range: [0.8, 1.0],
      drift: { x: -60, y: -150 },
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[800vh] bg-transparent">
      {/* Sticky Tracker */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        {/* Visual Watermark for Debugging & Aesthetic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <h2 className="text-[20vw] font-serif uppercase tracking-tighter leading-none dark:text-white text-black text-center select-none italic">
            Archive
          </h2>
        </div>

        {/* Bubbles Render */}
        <div className="relative h-full w-full">
          {bubbles.map((bubble, i) => (
            <Bubble key={i} config={bubble} progress={scrollYProgress} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
