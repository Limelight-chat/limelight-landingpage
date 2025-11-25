"use client";
import React, {
  useEffect,
  useState,
  createContext,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image, { ImageProps } from "next/image";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: () => void;
}>({
  onCardClose: () => {},
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [showArrow, setShowArrow] = React.useState<'left' | 'right' | null>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // Use viewport coordinates for positioning
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    if (x > width / 2 && canScrollRight) {
      setShowArrow('right');
    } else if (x <= width / 2 && canScrollLeft) {
      setShowArrow('left');
    } else {
      setShowArrow(null);
    }
  };

  const handleMouseLeave = () => {
    setShowArrow(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    if (x > width / 2 && canScrollRight) {
      scrollRight();
    } else if (x <= width / 2 && canScrollLeft) {
      scrollLeft();
    }
  };

  const handleCardClose = () => {
    // do nothing — no automatic scroll
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose }}>
      <div className="relative w-full">
        <div
          className="relative flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          style={{ cursor: showArrow ? 'none' : 'default' }}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* Custom cursor that follows mouse */}
          {showArrow && (
            <div
              className="pointer-events-none fixed z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-black transition-opacity"
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {showArrow === 'left' ? (
                <ArrowLeft className="h-8 w-8 text-white" />
              ) : (
                <ArrowRight className="h-8 w-8 text-white" />
              )}
            </div>
          )}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

const poppyColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#FFE66D',
  '#A8E6CF',
  '#FF8B94',
  '#C7CEEA',
  '#FFDAC1',
  '#B4F8C8',
];

export const Card = ({
  card,
  index,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const bgColor = poppyColors[index % poppyColors.length];
  
  return (
    <div className="relative z-10 flex w-56 flex-col overflow-hidden rounded-2xl bg-[#171616] select-none md:w-80">
      {/* Image container with 1.15:1 aspect ratio and colored background */}
      <div 
        className="relative w-full rounded-2xl" 
        style={{ aspectRatio: '1.15 / 1', backgroundColor: bgColor }}
      >
        <div className="absolute inset-2 rounded-2xl flex items-center justify-center">
          <div className="relative w-[70%] h-[70%]">
            <BlurImage
              src={card.src}
              alt={card.title}
              fill
              className="object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
      
      {/* Text content below */}
      <div className="relative z-40 bg-[#171616] px-3 py-2 md:px-3.5 md:py-2.5 rounded-b-2xl">
        <p className="text-left font-sans text-sm font-semibold text-white md:text-base">
          {card.category}
        </p>
        <p className="mt-0.5 text-left font-sans text-xs font-normal leading-snug text-white/80 line-clamp-2">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ?? "Background image"}
      {...rest}
    />
  );
};
