"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import borderGradient from "@/assets/border_gradient.png";

// Import icons
import photos from "@/assets/icons/photos.png";
import twitter from "@/assets/icons/twitter.png";
import reddit from "@/assets/icons/reddit.png";

import docs from "@/assets/icons/docs.png";
import dropbox from "@/assets/icons/dropbox.png";
import excel from "@/assets/icons/excel.png";
import github from "@/assets/icons/github-sign.png";
import gmail from "@/assets/icons/gmail.png";
import googleDrive from "@/assets/icons/google-drive.png";
import notes from "@/assets/icons/notes.png";
import notion from "@/assets/icons/notion.png";
import office from "@/assets/icons/office.png";
import folder from "@/assets/icons/open-folder.png";
import pdf from "@/assets/icons/pdf.png";
import sheets from "@/assets/icons/sheets.png";
import slack from "@/assets/icons/slack.png";
import whatsapp from "@/assets/icons/whatsapp.png";


const icons = [
  { src: docs, alt: "Docs" },
  { src: dropbox, alt: "Dropbox" },
  { src: excel, alt: "Excel" },
  { src: github, alt: "GitHub" },
  { src: gmail, alt: "Gmail" },
  { src: googleDrive, alt: "Google Drive" },
  { src: photos, alt: "photos" },
  { src: notes, alt: "Notes" },
  { src: notion, alt: "Notion" },
  { src: office, alt: "Office" },
  { src: folder, alt: "Folder" },
  { src: pdf, alt: "PDF" },
  { src: sheets, alt: "Sheets" },
  { src: slack, alt: "Slack" },
  { src: twitter, alt: "Twitter" },
  { src: whatsapp, alt: "WhatsApp" },
  { src: reddit, alt: "Reddit" },
];

export default function SupportedUser() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !isInView) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const iconWidth = 96;

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= iconWidth * icons.length) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [mounted, isInView]);

  const duplicatedIcons = [...icons, ...icons];

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-8 sm:py-12 md:py-16">
      <div className="relative w-full">
        <div
          className="relative w-full aspect-[16/5] sm:aspect-[16/3]"
        >
          <Image
            src={borderGradient}
            alt="Border Gradient"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden">

            <div className="absolute inset-0 flex items-center">
              <div
                ref={scrollRef}
                className="flex gap-4 sm:gap-6 md:gap-8 items-center"
                suppressHydrationWarning
              >
                {duplicatedIcons.map((icon, index) => (
                  <div
                    key={`icon-${index}`}
                    className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 relative"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
