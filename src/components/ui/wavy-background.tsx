"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isVisibleRef = useRef<boolean>(true);
  const animationIdRef = useRef<number | undefined>(undefined);
  const lastFrameTimeRef = useRef<number>(0);
  const contextRef = useRef<{
    w: number;
    h: number;
    nt: number;
    ctx: CanvasRenderingContext2D | null;
  }>({
    w: 0,
    h: 0,
    nt: 0,
    ctx: null,
  });
  
  const fps = 30;
  const frameInterval = 1000 / fps;
  
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    contextRef.current.ctx = ctx;
    contextRef.current.w = ctx.canvas.width = window.innerWidth;
    contextRef.current.h = ctx.canvas.height = window.innerHeight;
    contextRef.current.nt = 0;
    ctx.filter = `blur(${blur}px)`;
    
    window.onresize = function () {
      if (contextRef.current.ctx) {
        contextRef.current.w = contextRef.current.ctx.canvas.width = window.innerWidth;
        contextRef.current.h = contextRef.current.ctx.canvas.height = window.innerHeight;
        contextRef.current.ctx.filter = `blur(${blur}px)`;
      }
    };
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    const { ctx, w, h } = contextRef.current;
    if (!ctx) return;
    
    contextRef.current.nt += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, contextRef.current.nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = (currentTime: number) => {
    const { ctx, w, h } = contextRef.current;
    if (!ctx) return;
    
    const elapsed = currentTime - lastFrameTimeRef.current;
    
    if (elapsed >= frameInterval) {
      lastFrameTimeRef.current = currentTime - (elapsed % frameInterval);
      
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
    }
    
    if (isVisibleRef.current) {
      animationIdRef.current = requestAnimationFrame(render);
    }
  };

  useEffect(() => {
    init();
    
    // Set up IntersectionObserver for visibility-based pause
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasVisible = isVisibleRef.current;
          isVisibleRef.current = entry.isIntersecting;
          
          // Only start render if becoming visible and not already animating
          if (entry.isIntersecting && (!wasVisible || !animationIdRef.current)) {
            lastFrameTimeRef.current = performance.now();
            animationIdRef.current = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0 }
    );
    
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
