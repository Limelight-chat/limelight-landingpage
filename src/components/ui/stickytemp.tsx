"use client";

import * as React from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

type Slide = {
  title: string;
  description?: string;
  image: string;
  alt?: string;
};

export default function StickyCrossfadeWithProgress({
  slides,
  className,
}: {
  slides: Slide[];
  className?: string;
}) {
  const ref = React.useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ height: `${slides.length * 100}vh` }}
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {slides.map((s, i) => (
          <SlideItem
            key={i}
            slide={s}
            index={i}
            total={slides.length}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Progress Bar */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <ProgressBarItem
              key={i}
              index={i}
              total={slides.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const SlideItem = ({
  slide,
  index,
  total,
  scrollYProgress,
}: {
  slide: Slide;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  // Fade
  const opacity = useTransform(
    scrollYProgress,
    [start, mid, end],
    index === 0 ? [0.7, 1, 0] : [0, 1, 0] // first slide starts semi-visible
  );

  // Scale motion
  const scale = useTransform(
    scrollYProgress,
    [start, mid, end],
    index === 0 ? [0.7, 1, 0.9] : [0.9, 1, 0.9] // first slide starts smaller
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-6 text-center will-change-transform"
    >
      <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
        {slide.title}
      </h2>

      {slide.description && (
        <p className="mt-3 max-w-lg text-white/80 text-base sm:text-lg">
          {slide.description}
        </p>
      )}

      <img
        src={slide.image}
        alt={slide.alt ?? slide.title}
        className="mt-8 h-auto w-full max-w-xl object-contain"
        draggable={false}
      />
    </motion.div>
  );
};

const ProgressBarItem = ({
  index,
  total,
  scrollYProgress,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  const fill = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <div className="h-1 w-10 overflow-hidden rounded-full bg-white/25">
      <motion.div
        style={{ scaleX: fill, transformOrigin: "left" }}
        className="h-full w-full bg-white"
      />
    </div>
  );
};
