"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type DynamicTextProps = {
  words: string[];
  interval?: number;
  className?: string;
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};

export default function DynamicText({
  words,
  interval = 300,
  className = "",
}: DynamicTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating || words.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((previousIndex) => {
        const nextIndex = previousIndex + 1;

        if (nextIndex >= words.length) {
          window.clearInterval(timer);
          setIsAnimating(false);
          return previousIndex;
        }

        return nextIndex;
      });
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, isAnimating, words.length]);

  return (
    <div
      aria-label="Rapid welcome text in different languages"
      className="relative flex h-16 min-w-[17rem] items-center justify-center overflow-visible"
    >
      {isAnimating ? (
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={textVariants.hidden}
            animate={textVariants.visible}
            exit={textVariants.exit}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-live="off"
            className={`absolute flex items-center gap-3 font-medium text-gray-800 ${className}`}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-black"
            />
            {words[currentIndex]}
          </motion.div>
        </AnimatePresence>
      ) : (
        <div
          className={`flex items-center gap-3 font-medium text-gray-800 ${className}`}
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 rounded-full bg-black"
          />
          {words[currentIndex]}
        </div>
      )}
    </div>
  );
}
