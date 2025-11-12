// app/components/RagieScrollLines.tsx
"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type RagieScrollLinesProps = {
  className?: string;
  /** Overall SVG height (px). Width is responsive/full */
  height?: number;
  /** Stroke width (Ragie ≈ 2) */
  strokeWidth?: number;
  /** Horizontal padding inside the SVG so lines don't touch edges */
  sidePadding?: number;
  /** Space between the 3 lines on each side after the split */
  laneGap?: number;
  /** Where to place the split (fraction of height, 0–1) */
  turnAt?: number;
  /** Curve radius for the rounded L turn (px) */
  curveRadius?: number;
  /** X origin in % of width (leave 50 for centered below CPU) */
  originXPct?: number;
  /** Y origin in px from top of SVG (0 = top) */
  originY?: number;
  /** Colors for the 6 lines (outer → inner → inner → outer mirror) */
  colors?: [string, string, string, string, string, string];
};

export default function RagieScrollLines({
  className,
  height = 320,
  strokeWidth = 2,
  sidePadding = 24,
  laneGap = 22,
  turnAt = 0.33,
  curveRadius = 64,
  originXPct = 50,
  originY = 0,
  colors = ["#FF8E2B", "#FA374E", "#D92F5B", "#D92F5B", "#FA374E", "#FF8E2B"],
}: RagieScrollLinesProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  // Drive animation as this block scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 20%"], // start drawing as soon as it enters, finish before it exits
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0.05, 1]); // small lead-in, then full draw
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.08], [0, 0.2, 1]);

  // We build the six paths responsively based on the container width
  const [paths, setPaths] = React.useState<string[]>([]);

  const buildPaths = React.useCallback(
    (w: number) => {
      const ox = (originXPct / 100) * w; // origin X in px
      const turnY = originY + Math.max(0, Math.min(1, turnAt)) * height; // where vertical meets the curve
      const k = 0.5522847498; // cubic bezier circle approximation constant

      // final Y for the horizontal segment (after quarter-circle)
      const yH = turnY + curveRadius;

      // target x positions for 3 right lanes and 3 left lanes
      const rightStart = w - sidePadding;
      const leftStart = sidePadding;

      const rTargets = [
        rightStart, // outermost
        rightStart - laneGap,
        rightStart - laneGap * 2,
      ];
      const lTargets = [
        leftStart, // outermost
        leftStart + laneGap,
        leftStart + laneGap * 2,
      ];

      // Helper: quarter-circle from (ox, turnY) going down → right to (ox + r, turnY + r)
      const quarterRight = (
        r: number
      ) =>
        `C ${ox},${turnY + k * r} ${ox + (1 - k) * r},${turnY + r} ${ox + r},${
          turnY + r
        }`;

      // Mirror for left: (ox, turnY) down → left to (ox - r, turnY + r)
      const quarterLeft = (
        r: number
      ) =>
        `C ${ox},${turnY + k * r} ${ox - (1 - k) * r},${turnY + r} ${ox - r},${
          turnY + r
        }`;

      // Three right paths (outer to inner visually)
      const right = rTargets.map(
        (tx) => `M ${ox},${originY}
L ${ox},${turnY}
${quarterRight(curveRadius)}
L ${tx},${yH}`
      );

      // Three left paths (outer to inner visually)
      const left = lTargets.map(
        (tx) => `M ${ox},${originY}
L ${ox},${turnY}
${quarterLeft(curveRadius)}
L ${tx},${yH}`
      );

      // Order colors as given:
      // [outer → #FF8E2B, second → #FA374E, inner two → #D92F5B, second → #FA374E, outer → #FF8E2B]
      // Map that to [right outer, right mid, right inner, left inner, left mid, left outer]
      const final = [right[0], right[1], right[2], left[2], left[1], left[0]];
      setPaths(final);
    },
    [curveRadius, height, laneGap, originXPct, originY, sidePadding, turnAt]
  );

  // Rebuild paths on mount & resize
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handle = () => {
      const w = el.clientWidth;
      buildPaths(w);
    };

    handle();
    const ro = new ResizeObserver(handle);
    ro.observe(el);
    return () => ro.disconnect();
  }, [buildPaths]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full",
        className
      )}
      style={{ height }}
    >
      {/* Invisible anchor under the CPU — the lines appear from here */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none" style={{ top: originY }} />

      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 100 ${height}`} // width is normalized to 100; we recalc real x via ResizeObserver when building paths
        preserveAspectRatio="none"
        style={{ opacity }}
        aria-hidden
      >
        {/* We render in absolute px space, so we just use a group transformed to the real px size */}
        <g>
          {paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke={colors[i]}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          ))}
        </g>
      </motion.svg>
    </div>
  );
}
