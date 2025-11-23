"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// Make sure you have these images in your public folder or import them correctly
import BusinessImage from "@/assets/spotlight/business.png";
import FounderImage from "@/assets/spotlight/founder.png";

// 1. Define your content data
// Note: Using your placeholder images in a cycle for demonstration.
const features = [
  {
    id: "travel",
    triggerText: "travel plans",
    image: BusinessImage, // Placeholder 1
    caption: "Finds flight PDFs + Hotel emails instantly.",
  },
  {
    id: "notes",
    triggerText: "class notes",
    image: BusinessImage, // Placeholder 1 again
    caption: "Connects PDFs to handwritten notes.",
  },
  {
    id: "screenshots",
    triggerText: "messy screenshots",
    image: FounderImage, // Placeholder 2
    caption: "Reads text inside your images using AI.",
  },
  {
    id: "life",
    triggerText: "life",
    image: FounderImage, // Placeholder 2 again
    caption: "Recalls book titles from months ago.",
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
              activeTab.id === "travel" ? "text-[#FF792C]" : "text-white/60 group-hover:text-[#FF792C]"
            }`}>
              <path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V384q0-53 37.5-90.5T128 256h128v-96q0-68 51-114T416 0h192q58 0 109 46t51 114v96h128q53 0 90.5 37.5T1024 384v512q0 53-37.5 90.5T896 1024zM288 448q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28zm352-256q0-27-18.5-45.5T576 128H448q-26 0-45 18.5T384 192v64h256v-64zm192 448l-256 64l64 192l256-64z"/>
            </svg>
            <span className={`transition-colors duration-300 font-bold ${
              activeTab.id === "travel"
                ? "text-[#FF792C]"
                : "text-white/60 group-hover:text-[#FF792C]"
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
              activeTab.id === "notes" ? "text-[#FF6A3F]" : "text-white/60 group-hover:text-[#FF6A3F]"
            }`}>
              <path fill="currentColor" d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368Z"/>
              <path fill="currentColor" d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a14.76 14.76 0 0 0-.08-1.5Z"/>
            </svg>
            <span className={`transition-colors duration-300 font-bold ${
              activeTab.id === "notes"
                ? "text-[#FF6A3F]"
                : "text-white/60 group-hover:text-[#FF6A3F]"
            }`}>
              class notes
            </span>
          </span>
          ,{" "}
          
          {/* Messy Screenshots with SVG */}
          <span 
            className="inline-flex items-center gap-2 cursor-pointer group py-1"
            onMouseEnter={() => setActiveTab(features[2])}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" className={`inline-block transition-colors duration-300 ${
              activeTab.id === "screenshots" ? "text-[#F9554C]" : "text-white/60 group-hover:text-[#F9554C]"
            }`}>
              <path fill="currentColor" d="M1 0C.449 0 0 .449 0 1v16c0 .551.449 1 1 1h16c.551 0 1-.449 1-1V1c0-.551-.449-1-1-1H1zm1 2h14v12H2V2zm17 .906v2.031l1.813.313L19 15.75V17c0 1.104-.897 2-2 2H6.406l12.688 2.188a1 1 0 0 0 1.156-.813l2.688-15.781a.999.999 0 0 0-.813-1.157L19 2.907zM9 3.937c-1.151 0-2.125.792-2.125 2.282c0 .974.434 1.952 1.031 2.562c.234.61-.164.842-.25.875c-1.206.436-2.625 1.245-2.625 2.031v1.282h7.938v-1.281c0-.81-1.422-1.614-2.688-2.032c-.058-.019-.417-.18-.187-.875c.595-.61 1.062-1.593 1.062-2.562c0-1.49-1.005-2.282-2.156-2.282zm14.406 3.97l-.343 1.968l.718.156l-2.75 11.688l-.406-.094a1.954 1.954 0 0 1-1.719.531L5.063 19.781L4.78 20.97a1.023 1.023 0 0 0 .75 1.218l15.563 3.657a1.023 1.023 0 0 0 1.218-.75L25.938 9.53c.127-.536-.18-1.091-.718-1.219l-1.813-.406z"/>
            </svg>
            <span className={`transition-colors duration-300 font-bold ${
              activeTab.id === "screenshots"
                ? "text-[#F9554C]"
                : "text-white/60 group-hover:text-[#F9554C]"
            }`}>
              screenshots
            </span>
          </span>
          and everything else
        </h2>
      </div>

      {/* 3. The "Mac Window" Display Area */}
      <div className="w-full max-w-4xl aspect-[16/11] relative">
        {/* The Glass Window Container */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
          
          {/* Mac Window Controls */}
          <div className="h-6 bg-white/60 border-b border-white/20 flex items-center px-3 space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm"></div>
          </div>

          {/* The Changing Content Area */}
          <div className="relative w-full h-full p-4 md:p-6 flex flex-col items-center justify-center bg-linear-to-br from-white via-[#F8F8F8] to-[#F0F0F0]">
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
                 <div className="relative w-full max-w-2xl h-auto shadow-xl rounded-lg overflow-hidden border border-white/40">
                  <Image 
                      src={activeTab.image} 
                      alt={activeTab.triggerText}
                      placeholder="blur" // Optional: if you have blur data
                      className="object-cover w-full h-full"
                  />
                 </div>

                {/* The Caption */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }}
                  className="mt-4 text-xs font-semibold text-[#666666] uppercase tracking-widest"
                >
                  {activeTab.caption}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}