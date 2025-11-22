import { cn } from "@/lib/utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="absolute inset-0 h-full w-full bg-transparent">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#211F1F_1px,transparent_1px),linear-gradient(to_bottom,#211F1F_1px,transparent_1px)]",
          "opacity-50",
          "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
        )}
      />
    </div>
  );
}
