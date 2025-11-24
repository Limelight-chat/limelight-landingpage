"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import travelImg from "@/assets/macbook/travel.svg";
import workImg from "@/assets/macbook/work.svg";
import studyImg from "@/assets/macbook/study.svg";

const features = [
  {
    id: "travel",
    triggerText: "travel plans",
    image: travelImg, // Placeholder 1
    caption: "Finds flight PDFs + Hotel emails instantly.",
  },
  {
    id: "notes",
    triggerText: "class notes",
    image: studyImg, // Placeholder 1 again
    caption: "Connects PDFs to handwritten notes.",
  },
  {
    id: "work",
    triggerText: "work",
    image: workImg, // Placeholder 2
    caption: "Reads text inside your images using AI.",
  },
];

export default function SpaceSwitch() {
  // Set the default active tab to the first feature
  const [activeTab, setActiveTab] = useState(features[0]);

  return (
    <div className="flex flex-col items-center justify-center">
      
      {/* 2. The Headline Area with Inline Triggers */}
      <div className="max-w-2xl mx-auto text-center mb-8 px-4">
        <h2 className="text-base sm:text-lg md:text-2xl font-bold text-white leading-0 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          Bring instant clarity to your{" "}
          
          {/* Travel Plans with SVG */}
          <span 
            className="inline-flex items-center px-1 gap-2 cursor-pointer group py-1"
            onMouseEnter={() => setActiveTab(features[0])}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className={`inline-block transition-colors duration-300 ${
              activeTab.id === "travel" ? "text-[#E84848]" : "text-white/40 group-hover:text-[#E84848]"
            }`}>
              <path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V384q0-53 37.5-90.5T128 256h128v-96q0-68 51-114T416 0h192q58 0 109 46t51 114v96h128q53 0 90.5 37.5T1024 384v512q0 53-37.5 90.5T896 1024zM288 448q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28zm352-256q0-27-18.5-45.5T576 128H448q-26 0-45 18.5T384 192v64h256v-64zm192 448l-256 64l64 192l256-64z"/>
            </svg>
            <span className={`transition-colors duration-300 font-bold ${
              activeTab.id === "travel"
                ? "text-[#E84848]"
                : "text-white/40 group-hover:text-[#E84848]"
            }`}>
              travel plans
            </span>
          </span>
          ,{" "}
          
          {/* Class Notes with SVG */}
          <span 
            className="inline-flex items-center gap-2 cursor-pointer group py-1"
            onMouseEnter={() => setActiveTab(features[1])}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className={`inline-block transition-colors duration-300 ${
              activeTab.id === "notes" ? "text-[#32C96A]" : "text-white/40 group-hover:text-[#32C96A]"
            }`}>
              <path fill="currentColor" d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368Z"/>
              <path fill="currentColor" d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a14.76 14.76 0 0 0-.08-1.5Z"/>
            </svg>
            <span className={`transition-colors duration-300 font-bold ${
              activeTab.id === "notes"
                ? "text-[#32C96A]"
                : "text-white/40 group-hover:text-[#32C96A]"
            }`}>
              class notes
            </span>
          </span>
          ,{" "}
          
          <span 
            className="inline-flex items-center gap-2 cursor-pointer group py-1"
            onMouseEnter={() => setActiveTab(features[2])}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" className={`inline-block transition-colors duration-300 ${
              activeTab.id === "work" ? "text-[#3E9BFF]" : "text-white/40 group-hover:text-[#3E9BFF]"
            }`}>
              <path fill="currentColor" d="M4.5 4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v10h-15zm1-3a3 3 0 0 0-3 3v11L.26 20.973A1.5 1.5 0 0 0 1.664 23h20.671a1.5 1.5 0 0 0 1.405-2.027L21.5 15V4a3 3 0 0 0-3-3zm4.25 18.5a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1-.75-.75M14.5 7a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-6.195 4.772A5.97 5.97 0 0 1 12 10.5c1.394 0 2.676.475 3.695 1.272c.339.265.127.76-.303.76H8.608c-.43 0-.642-.495-.303-.76" clipRule="evenodd"/>
            </svg>
            <span className={`transition-colors duration-300 font-bold ${
              activeTab.id === "work"
                ? "text-[#3E9BFF]"
                : "text-white/40 group-hover:text-[#3E9BFF]"
            }`}>
              work
            </span>
          </span>
          and everything else
        </h2>
      </div>

      {/* 3. The "Mac Window" Display Area */}
      <div className="w-full max-w-4xl aspect-video relative scale-[0.8]">
        {/* The Glass Window Container */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
          
          {/* Mac Window Controls */}
          <div className="h-6 bg-white/60 border-b border-white/20 flex items-center px-3 space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm"></div>
          </div>

          {/* The Changing Content Area */}
          <div className="relative w-full h-full px-4 flex flex-col items-center justify-center bg-red-400">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                // Animation: Fade up and blur in
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(12px)" }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }} // Smooth custom easing
                className="relative w-full h-full flex flex-col items-center justify-center"
              >
                 {/* The Image */}
                 <div className="relative w-full h-full">
                  <Image 
                      src={activeTab.image} 
                      alt={activeTab.triggerText}
                      fill
                      className="object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}