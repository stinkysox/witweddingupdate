import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface BubbleConfig {
  url: string;
  size: number;
  x: string;
  y: string;
  range: [number, number];
  drift: { x: number; y: number };
}

const Bubble: React.FC<{ config: BubbleConfig; progress: MotionValue<number>; index: number }> = ({
  config,
  progress,
  index,
}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const responsiveSize = isMobile ? config.size * 0.5 : config.size;

  const start = config.range[0];
  const end = config.range[1];
  const mid = (start + end) / 2;

  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, mid, end], [0.4, 1.8, 0.4]);
  const moveX = useTransform(progress, [start, end], ["0%", (isMobile ? config.drift.x * 0.2 : config.drift.x) + "%"]);
  const moveY = useTransform(progress, [start, end], ["0%", (isMobile ? config.drift.y * 0.4 : config.drift.y) + "%"]);

  const springScale = useSpring(scale, { stiffness: 60, damping: 20 });

  const responsiveLeft = isMobile
    ? `calc(${config.x} * 0.5 + 15%)`
    : config.x;

  return (
    <motion.div
      style={{
        position: "absolute",
        left: responsiveLeft,
        top: config.y,
        width: responsiveSize,
        height: responsiveSize,
        opacity,
        scale: springScale,
        translateX: moveX,
        translateY: moveY,
        zIndex: 10 + index,
      }}
      className="rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] pointer-events-none will-change-transform"
    >
      <img
        src={config.url}
        alt="Wedding moment"
        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
    </motion.div>
  );
};

export const BubbleScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bubbles: BubbleConfig[] = [
    {
      url: "https://i.pinimg.com/736x/b5/23/b3/b523b3e8a7410b20dedbac7491a528af.jpg",
      size: 520,
      x: "10%",
      y: "15%",
      range: [0, 0.2],
      drift: { x: 30, y: -40 },
    },
    {
      url: "https://i.pinimg.com/736x/ba/63/52/ba63529729f2cc61dbac103f6f7bb238.jpg",
      size: 320,
      x: "60%",
      y: "10%",
      range: [0.1, 0.3],
      drift: { x: -20, y: -50 },
    },
    {
      url: "https://i.pinimg.com/736x/00/bd/a0/00bda06b701af0b5ee56538e55312a06.jpg",
      size: 440,
      x: "15%",
      y: "40%",
      range: [0.25, 0.45],
      drift: { x: 40, y: -30 },
    },
    {
      url: "https://i.pinimg.com/1200x/70/7c/74/707c741bd1aa9d0c154f81f2bc089bd8.jpg",
      size: 280,
      x: "70%",
      y: "35%",
      range: [0.35, 0.55],
      drift: { x: -50, y: -60 },
    },
    {
      url: "https://i.pinimg.com/1200x/b8/9c/5f/b89c5f5d181450d685871a21d76d60ae.jpg",
      size: 480,
      x: "5%",
      y: "50%",
      range: [0.5, 0.7],
      drift: { x: 20, y: -40 },
    },
    {
      url: "https://i.pinimg.com/736x/2d/04/16/2d04167fb5b1b086548758f5f08bf8c4.jpg",
      size: 360,
      x: "60%",
      y: "60%",
      range: [0.65, 0.85],
      drift: { x: -30, y: -20 },
    },
    {
      url: "https://i.pinimg.com/736x/3a/0e/0c/3a0e0c89e90e0caf232ca5f2bd30ea9d.jpg",
      size: 400,
      x: "15%",
      y: "65%",
      range: [0.75, 0.95],
      drift: { x: 50, y: -50 },
    },
    {
      url: "https://i.pinimg.com/736x/43/ea/c0/43eac0aed202d47c88a0715a1c56af64.jpg",
      size: 520,
      x: "50%",
      y: "25%",
      range: [0.85, 1],
      drift: { x: -20, y: -100 },
    },
  ];

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-transparent overflow-visible">
      <div className="sticky top-0 h-screen w-full overflow-visible pointer-events-none">
        {/* Background text to confirm section presence */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <h2 className="text-[20vw] font-serif uppercase tracking-tighter leading-none dark:text-white text-black text-center select-none">
            Archive
          </h2>
        </div>

        {bubbles.map((bubble, i) => (
          <Bubble key={i} config={bubble} progress={scrollYProgress} index={i} />
        ))}
      </div>
    </div>
  );
};
