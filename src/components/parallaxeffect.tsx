"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import projectTools from "@/assets/parallax/projecttools.svg";
import crm from "@/assets/parallax/crm.svg";
import chat from "@/assets/parallax/teamchat.svg";
import drive from "@/assets/parallax/drive.svg";
import dropbox from "@/assets/parallax/dropbox.svg";
import office from "@/assets/parallax/office.svg";
import excel from "@/assets/parallax/excel.svg";
import shopify from "@/assets/parallax/shopify.svg";
import youtube from "@/assets/parallax/youtube.svg";
import local from "@/assets/parallax/local.svg";

// ✅ Put icon positions & sizes in one place for consistency
const ICONS = [
  {
    src: projectTools,
    alt: "Project Tools",
    pos: "top-[2%] -left-[2%] lg:top-[2%] lg:left-[10%] 2xl:top-[3%] 2xl:left-[18%]",
    size: "w-42 h-42 lg:w-76 lg:h-76 2xl:w-78 2xl:h-78",
  },
  {
    src: dropbox,
    alt: "Dropbox",
    pos: "bottom-[28%] left-[12%] lg:bottom-[4%] lg:left-[34%] 2xl:bottom-[2%] 2xl:left-[44%]",
    size: "w-10 h-10 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16",
  },
  {
    src: drive,
    alt: "Drive",
    pos: "-top-[2%] left-[34%] lg:top-[25%] lg:left-[34%] 2xl:top-[20%] 2xl:left-[38%]",
    size: "w-10 h-10 lg:w-14 lg:h-14 2xl:w-18 2xl:h-18",
  },
  {
    src: local,
    alt: "local files",
    pos: "top-[73%] left-[4%] lg:top-[50%] lg:left-[16%] 2xl:top-[50%] 2xl:left-[26%]",
    size: "w-48 h-48 lg:w-84 lg:h-84 2xl:w-92 2xl:h-92",
  },
  {
    src: excel,
    alt: "Excel",
    pos: "top-[55%] right-[3%] lg:top-[20%] lg:right-[44%] 2xl:top-[12%] 2xl:right-[44%]",
    size: "w-9 h-9 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20",
  },
  {
    src: office,
    alt: "Office",
    pos: "bottom-[78%] left-[37%] lg:bottom-[6%] lg:left-[16%] 2xl:-bottom-[0%] 2xl:left-[26%]",
    size: "w-8 h-8 lg:w-16 lg:h-16 2xl:w-18 2xl:h-18",
  },
  {
    src: crm,
    alt: "CRM",
    pos: "-top-[4%] right-[2%] lg:-top-[7%] lg:right-[14%] 2xl:-top-[8%] 2xl:right-[20%]",
    size: "w-48 h-48 lg:w-82 lg:h-82 2xl:w-92 2xl:h-92",
  },
  {
    src: chat,
    alt: "Chat Tools",
    pos: "bottom-[4%] left-[50%] lg:-bottom-[1%] lg:left-[59%] 2xl:-bottom-[1%] 2xl:left-[59%]",
    size: "w-48 h-48 lg:w-82 lg:h-82 2xl:w-84 2xl:h-84",
  },
  {
    src: youtube,
    alt: "YouTube",
    pos: "bottom-[20%] right-[60%] lg:bottom-[20%] lg:right-[48%] 2xl:bottom-[0%] 2xl:right-[39%]",
    size: "w-9 h-9 lg:h-16 lg:w-16 2xl:w-18 2xl:h-18",
  },
  {
    src: shopify,
    alt: "Shopify",
    pos: "top-[45%] left-[5%] lg:top-[10%] lg:left-[42%] 2xl:top-[2%] 2xl:left-[44%]",
    size: "w-8 h-8 lg:h-16 lg:w-16 2xl:w-18 2xl:h-18",
  },
];

export default function ParallaxEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallax = useTransform(scrollYProgress, [1, 0], [-150, 150]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[600px] flex items-center justify-center py-20 md:py-72"
    >
      {/* TEXT */}
      <div className="text-center max-w-3xl mx-auto px-6 z-20">
        <h1 className="text-5xl md:text-6xl font-bold">
          Seamlessly connect your data and start searching it in minutes.
        </h1>
      </div>

      {/* ICONS */}
      {ICONS.map((icon, i) => (
        <motion.div
          key={i}
          style={{ translateY: parallax }}
          className={`absolute ${icon.pos} z-21`}
        >
          <Image src={icon.src} alt={icon.alt} className={icon.size} />
        </motion.div>
      ))}
    </div>
  );
}
