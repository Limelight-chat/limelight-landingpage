"use client";

import * as React from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

type Step = {
  heading?: string;
  subheading?: string;
  image: string;
  alt?: string;
};

export default function StickyScrollPast({
  steps,
  className,
}: {
  steps: Step[];
  className?: string;
}) {
  const containerRef = React.useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className={cn("relative w-full", className)}
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">

          {/* LEFT — Static Content */}
          <div className="flex flex-col items-start justify-center px-10">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              From scattered knowledge to instant clarity.
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/80 leading-tight tracking-tight">
              Limelight unifies your tools, conversations, and documents into one intelligent workspace  so your team can search, understand, and act in seconds.
            </p>
          </div>

          {/* RIGHT — Changing Images */}
          <div className="relative flex items-center justify-center overflow-hidden">
            {steps.map((step, i) => (
              <StickyScrollPastItem
                key={i}
                step={step}
                index={i}
                totalSteps={steps.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const StickyScrollPastItem = ({
  step,
  index,
  totalSteps,
  scrollYProgress,
}: {
  step: Step;
  index: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;
  const mid = (start + end) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [start, mid, end],
    index === 0 ? [1, 1, 0] : [0, 1, 0]
  );

  // slight zoom effect
  const scale = useTransform(
    scrollYProgress,
    [start, mid, end],
    [0.9, 1, 0.95]
  );

  return (
    <motion.img
      src={step.image}
      alt={step.alt ?? step.heading ?? `Step ${index + 1}`}
      style={{ opacity, scale }}
      className="absolute h-[70%] w-auto object-contain"
      draggable={false}
    />
  );
};
