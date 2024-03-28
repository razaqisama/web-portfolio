"use client";

import { AnimatePresence, wrap, motion, PanInfo } from "framer-motion";
import { Children, ReactNode, useCallback, useEffect, useState } from "react";

interface CarouselProps {
  className?: string;
  children?: ReactNode;
  autoSlide?: number;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

function Carousel({ className, children, autoSlide }: CarouselProps) {
  const carouselItem = Children.toArray(children);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, carouselItem.length, page);

  const swipeConfidenceThreshold = 10000;
  const swipePower = useCallback((offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  }, []);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  const handleDragEnd = useCallback(
    (
      _: MouseEvent | TouchEvent | PointerEvent,
      { offset, velocity }: PanInfo,
    ) => {
      const swipe = swipePower(offset.x, velocity.x);

      if (swipe < -swipeConfidenceThreshold) {
        paginate(1);
      } else if (swipe > swipeConfidenceThreshold) {
        paginate(-1);
      }
    },
    [paginate, swipePower],
  );

  useEffect(() => {
    if (!autoSlide) return undefined;

    const timeout = setTimeout(() => {
      paginate(1);
    }, autoSlide);

    return () => {
      clearTimeout(timeout);
    };
  }, [autoSlide, paginate]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="w-full h-full absolute top-0 left-0"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
        >
          {carouselItem[imageIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
