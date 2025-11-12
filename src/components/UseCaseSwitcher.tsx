"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import demoImg from "@/assets/demo-img1.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const data = {
  legal: {
    image: demoImg,
    quote: "Our legal drafting is now 5–10x faster with Limelight's RAG integration.",
    author: "Sampei Omichi, Founder & CEO, Ellis",
  },
  ecommerce: {
    image: demoImg,
    quote: "Limelight reduced our support workload by 60% in the first month.",
    author: "Sarah Lee, COO, ShopFlow",
  },
  retail: {
    image: demoImg,
    quote: "Limelight reduced our support workload by 60% in the first month.",
    author: "Sarah Lee, COO, ShopFlow",
  },
};

export default function UseCaseSwitcher() {
  const [active, setActive] = useState<"legal" | "ecommerce" | "retail">("legal");

  return (
    <section className="w-full mx-auto px-6 pt-12">
      <div className="flex justify-center items-center max-w-5xl">
        {/* Tabs */}
        <div className="flex gap-2 bg-black/40 rounded-full p-1">
          {(["legal", "ecommerce", "retail"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-1 rounded-full text-sm transition cursor-pointer ${
                active === tab
                  ? "bg-primary text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Image with fade animation */}
      <div className="mt-8 h-[320px] w-full relative overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={data[active].image}
              alt="usecase"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Quote + Author */}
      <div className="mt-8 grid md:grid-cols-2 gap-10">
        <p className="text-left text-2xl font-medium text-white">“{data[active].quote}”</p>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={typeof demoImg === "string" ? demoImg : demoImg.src}
              alt={data[active].author}
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <p className="text-gray-300 text-sm md:text-base">{data[active].author}</p>
        </div>
      </div>
    </section>
  );
}
