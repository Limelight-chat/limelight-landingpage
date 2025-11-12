"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimationFrame,
} from "motion/react";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

type Slide = {
  title: string;
  description?: string;
  images: {
    src: string | StaticImageData;
    alt?: string;
    position?: "left" | "right" | "center";
  }[];
  emojis?: {
    src: string | StaticImageData;
    alt?: string;
    x?: number;
    y?: number;
    size?: number;
    rotate?: boolean;
    angle?: number;
    anger?: boolean;
  }[];
};

export default function StickyCrossfadeWithEmojis({
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

  const gapRatio = 0.05;

  // ➕ NEW: Add one extra section height for the "Introducing" part
  const totalSlides = slides.length;
  const totalSections = totalSlides + 1; // last one is reveal section

  return (
    <section
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ height: `${totalSections * 220}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* SLIDES */}
        {slides.map((s, i) => {
          const n = totalSections;
          const start = i / n;
          const end = (i + 1) / n;
          const duration = end - start;

          const fadeInStart = start;
          const fadeInEnd = start + duration * 0.3;
          const fadeOutStart = end - duration * (0.2 - gapRatio);
          const fadeOutEnd = end;

          const opacity = useTransform(
            scrollYProgress,
            [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
            i === 0 ? [0.7, 1, 1, 0] : [0, 1, 1, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
            [0.9, 1, 1, 0.9]
          );

          return (
            <motion.div
              key={i}
              style={{ opacity, scale }}
              className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-6 text-center will-change-transform"
            >
              <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl max-w-xl font-[family-name:var(--font-syne)]">
                {s.title}
              </h2>
              {s.description && (
                <p className="mt-2 max-w-md text-white/80 text-sm sm:text-base">
                  {s.description}
                </p>
              )}

              {/* main images */}
              <div className="relative mt-6 flex flex-col gap-3 items-center w-full max-w-3xl mx-auto">
                {s.images.map((img, j) => {
                  const total = s.images.length;
                  const imageStart =
                    start + (j / total) * ((end - start) * 0.7);
                  const imageEnd = imageStart + (end - start) * 0.25;

                  const direction =
                    img.position === "left"
                      ? -60
                      : img.position === "right"
                      ? 60
                      : 0;

                  const x = useTransform(
                    scrollYProgress,
                    [imageStart, imageEnd],
                    [direction, 0]
                  );
                  const opacityImg = useTransform(
                    scrollYProgress,
                    [imageStart, imageEnd],
                    [0, 1]
                  );
                  const y = useTransform(
                    scrollYProgress,
                    [imageStart, imageEnd],
                    [15, 0]
                  );

                  const imgSrc =
                    typeof img.src === "string" ? img.src : img.src.src;

                  const positionClass =
                    img.position === "left"
                      ? "self-start ml-3 sm:ml-6 md:ml-12 lg:ml-16"
                      : img.position === "right"
                      ? "self-end mr-3 sm:mr-6 md:mr-12 lg:mr-16"
                      : "self-center";

                  return (
                    <motion.img
                      key={j}
                      src={imgSrc}
                      alt={img.alt ?? s.title}
                      style={{ x, opacity: opacityImg, y }}
                      className={cn(
                        "h-auto w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] object-contain",
                        positionClass
                      )}
                      draggable={false}
                    />
                  );
                })}
              </div>

              {/* EMOJIS */}
              {s.emojis?.map((emoji, idx) => {
                const emojiStart = start + 0.05;
                const emojiEnd = start + 0.35;

                const opacityEmoji = useTransform(
                  scrollYProgress,
                  [emojiStart, emojiEnd],
                  [0, 1]
                );
                const scaleEmoji = useTransform(
                  scrollYProgress,
                  [emojiStart, emojiEnd],
                  [0, 1]
                );
                const yEmoji = useTransform(
                  scrollYProgress,
                  [emojiStart, emojiEnd],
                  [100, emoji.y ?? 0]
                );

                const [jitter, setJitter] = React.useState({ x: 0, y: 0 });
                const [rotation, setRotation] = React.useState(
                  emoji.angle ?? 0
                );

                useAnimationFrame(() => {
                  if (emoji.anger) {
                    setJitter({
                      x: Math.random() * 6 - 3,
                      y: Math.random() * 6 - 3,
                    });
                  } else {
                    const t = performance.now() / 200;
                    setJitter({
                      x: Math.sin(t + idx) * 2,
                      y: Math.cos(t + idx * 1.2) * 2,
                    });
                  }

                  if (emoji.rotate) {
                    setRotation((r) => (r + (emoji.anger ? 10 : 2)) % 360);
                  }
                });

                const src =
                  typeof emoji.src === "string" ? emoji.src : emoji.src.src;

                return (
                  <motion.img
                    key={idx}
                    src={src}
                    alt={emoji.alt ?? "emoji"}
                    style={{
                      opacity: opacityEmoji,
                      scale: scaleEmoji,
                      y: yEmoji,
                      x: (emoji.x ?? 0) + jitter.x,
                      translateY: jitter.y,
                      rotate: rotation,
                      position: "absolute",
                      width: emoji.size ?? 60,
                      height: emoji.size ?? 60,
                    }}
                    draggable={false}
                  />
                );
              })}
            </motion.div>
          );
        })}

        {/* INTRODUCING LIMELIGHT SECTION */}
        {(() => {
          const n = totalSections;
          const start = (totalSections - 1) / n;
          const end = 1.0;

          const introOpacity = useTransform(
            scrollYProgress,
            [start, start + 0.05, end - 0.1, end],
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              style={{ opacity: introOpacity }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              >
                Introducing
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-5xl sm:text-6xl md:text-9xl font-extrabold bg-[linear-gradient(to_right,#fb923c_0%,#ED3558_60%,#ED3558_100%)] text-transparent bg-clip-text tracking-wide"
              >
                LIMELIGHT
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg sm:text-xl text-white"
              >
                AI search engine for your data
              </motion.p>
            </motion.div>
          );
        })()}

        {/* PROGRESS BAR */}
        {(() => {
          const fadeOutStart = (totalSlides - 1) / totalSections;
          const fadeOutEnd = (totalSlides + 0.2) / totalSections;
          const opacityProgress = useTransform(
            scrollYProgress,
            [fadeOutStart, fadeOutEnd],
            [1, 0]
          );

          return (
            <motion.div
              style={{ opacity: opacityProgress }}
              className="absolute bottom-4 sm:bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5 sm:gap-2 px-4"
            >
              {slides.map((_, i) => {
                const n = totalSections;
                const start = i / n;
                const end = (i + 1) / n;
                const fill = useTransform(scrollYProgress, [start, end], [0, 1]);

                return (
                  <div
                    key={i}
                    className="h-0.5 sm:h-1 w-12 sm:w-20 md:w-24 overflow-hidden rounded-full bg-white/25"
                  >
                    <motion.div
                      style={{ scaleX: fill, transformOrigin: "left" }}
                      className="h-full w-full bg-white"
                    />
                  </div>
                );
              })}
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
}
