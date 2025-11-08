"use client";

import { useState } from "react";

type VideoEmbedProps = {
  videoId: string;
  title?: string;
};

export default function VideoEmbed({ videoId, title = "Product Demo" }: VideoEmbedProps) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full max-w-5xl mx-auto group">
      {!play ? (
        <div
          className="relative cursor-pointer overflow-hidden rounded-4xl shadow-xl"
          onClick={() => setPlay(true)}
        >
          {/* Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-black rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg text-xl md:text-2xl font-bold group-hover:scale-110 transition-transform">
              ▶
            </button>
          </div>
        </div>
      ) : (
        <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-2xl shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
