"use client";

import { useEffect, useState } from "react";
import DynamicText from "./DynamicText";

const welcomeWords = [
  "Selamat Datang",
  "Welcome",
  "Bienvenido",
  "Bienvenue",
  "Willkommen",
  "ようこそ",
];

const textInterval = 300;
const loadingDuration = welcomeWords.length * textInterval + 600;

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, loadingDuration);

    const unmountTimer = window.setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = "";
    }, loadingDuration + 920);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[10000] grid place-items-center bg-white text-[#090909] transition-transform duration-900 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isVisible
          ? "translate-y-0"
          : "pointer-events-none -translate-y-full"
      }`}
    >
      <div
        className={`relative z-10 flex flex-col items-center gap-5 px-6 text-center transition-[opacity,transform,filter] duration-500 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100 blur-0"
            : "-translate-y-5 opacity-0 blur-sm"
        }`}
      >
        <DynamicText
          words={welcomeWords}
          interval={textInterval}
          className="text-2xl leading-tight tracking-normal"
        />
      </div>
    </div>
  );
}
