"use client";

import Link from "next/link";
import { navItems } from "../data";
import { homeCopy } from "../data/translations";
import { useLanguage } from "./LanguageContext";

type LocalizedNavLinksProps = {
  hrefPrefix?: string;
  className?: string;
  itemClassName?: string;
};

export default function LocalizedNavLinks({
  hrefPrefix = "",
  className = "hidden items-center gap-5 text-sm font-medium text-[#172033] lg:gap-7 lg:text-base md:flex",
  itemClassName = "transition-colors hover:text-[#810B38]",
}: LocalizedNavLinksProps) {
  const { language } = useLanguage();
  const copy = homeCopy[language];

  return (
    <div className={className}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={`${hrefPrefix}${item.href}`}
          className={itemClassName}
        >
          {copy.nav[item.key]}
        </Link>
      ))}
    </div>
  );
}
