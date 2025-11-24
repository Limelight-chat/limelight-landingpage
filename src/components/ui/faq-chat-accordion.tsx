"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface FaqAccordionProps {
  data: FAQItem[];
  className?: string;
  timestamp?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className,
  timestamp = "Every day, 9:01 AM",
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(data && data.length > 0 ? data[0].id.toString() : null);

  return (
    <div className={cn("p-4 w-full mx-auto", className)}>
      {timestamp && (
        <div className="mb-6 text-sm text-muted-foreground/60 font-medium">{timestamp}</div>
      )}

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
        className="flex flex-col gap-4"
      >
        {data.map((item) => (
          <Accordion.Item
            value={item.id.toString()}
            key={item.id}
            className="w-full"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="flex w-full items-center justify-start gap-4 group">
                <div
                  className={cn(
                    "relative flex items-center rounded-2xl px-5 py-3 transition-all text-left max-w-[85%] sm:max-w-[70%]",
                    "bg-[#1a1a1a] text-white/90 border border-white/5",
                    questionClassName
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        "absolute -top-2 text-xl",
                        item.iconPosition === "right" ? "-right-2" : "-left-2"
                      )}
                      style={{
                        transform: item.iconPosition === "right"
                          ? "rotate(12deg)"
                          : "rotate(-12deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="text-[15px] leading-relaxed font-normal">{item.question}</span>
                </div>

                <span
                  className={cn(
                    "text-zinc-500 transition-transform duration-300",
                    openItem === item.id.toString() && "rotate-180" // Optional rotation or change
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: 12 },
                  collapsed: { opacity: 0, height: 0, marginTop: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden w-full flex justify-end"
              >
                <div
                  className={cn(
                    "relative max-w-[85%] sm:max-w-[70%] rounded-2xl bg-white px-5 py-3 text-black text-[15px] leading-relaxed shadow-sm",
                    answerClassName
                  )}
                >
                  {item.answer}
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}