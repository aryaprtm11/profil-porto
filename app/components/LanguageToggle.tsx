"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === "id" ? "EN" : "ID";
  const flagSrc = `/flag/${language}.png`;

  return (
    <button
      type="button"
      aria-label={`Switch language to ${nextLanguage}`}
      onClick={toggleLanguage}
      className="cursor-target inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 text-sm font-bold text-[#172033] shadow-[0_8px_18px_rgba(0,0,0,0.06)] transition-transform hover:scale-[1.02]"
    >
      <Image
        src={flagSrc}
        alt=""
        width={22}
        height={22}
        aria-hidden="true"
        className="h-5 w-5 rounded-full object-cover"
      />
      {language.toUpperCase()}
    </button>
  );
}
