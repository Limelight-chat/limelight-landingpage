"use client";

import { useEffect } from "react";

export function DisableScrollDesktop() {
  useEffect(() => {
    // Disable scrolling on desktop (non-mobile) screens
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Desktop: disable scroll
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
      } else {
        // Mobile: enable scroll
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    };

    // Set initial state
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return null;
}

