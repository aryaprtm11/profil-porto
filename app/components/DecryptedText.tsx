"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type DecryptedTextProps = {
  text: string;
  className?: string;
  characters?: string;
  speed?: number;
  maxIterations?: number;
  trigger?: number;
};

const defaultCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export default function DecryptedText({
  text,
  className = "",
  characters = defaultCharacters,
  speed = 34,
  maxIterations = 12,
  trigger = 0,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  const stopAnimation = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const decrypt = useCallback(() => {
    stopAnimation();

    let iteration = 0;

    intervalRef.current = window.setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((character, index) => {
            if (character === " " || index < iteration) {
              return character;
            }

            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        stopAnimation();
        setDisplayText(text);
      }

      iteration += Math.max(1, text.length / maxIterations);
    }, speed);
  }, [characters, maxIterations, speed, text]);

  useEffect(() => {
    return stopAnimation;
  }, []);

  useEffect(() => {
    if (trigger > 0) {
      decrypt();
    }
  }, [decrypt, trigger]);

  return (
    <span
      className={`inline-block tabular-nums ${className}`}
    >
      {displayText}
    </span>
  );
}
