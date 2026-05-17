"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

type ExperienceTimelineEntry = {
  title: string;
  role: string;
  detail: string;
  image?: string;
};

export default function ExperienceTimeline({
  entries,
}: {
  entries: ExperienceTimelineEntry[];
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }

    setHeight(contentRef.current.getBoundingClientRect().height);
  }, [entries]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 55%"],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      <div ref={contentRef} className="relative">
        {entries.map((entry, index) => (
          <article
            key={`${entry.title}-${entry.role}`}
            className="grid gap-6 pb-16 last:pb-0 md:grid-cols-[260px_1fr] md:gap-10 md:pb-24"
          >
            <div className="sticky top-36 z-10 self-start md:min-h-24">
              <div className="absolute left-3 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#fbfbfa] md:left-3">
                <div className="h-4 w-4 rounded-full border border-black/15 bg-white" />
              </div>
              <h3 className="pl-16 font-mono text-3xl font-bold uppercase leading-none text-black/25 sm:text-4xl md:text-5xl">
                {entry.title}
              </h3>
            </div>

            <div className="pl-16 md:pl-0">
              <div className="cursor-target rounded-[28px] border border-black/10 bg-white/80 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)] backdrop-blur">
                {entry.image ? (
                  <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-[20px] bg-[#e8edf2]">
                    <Image
                      src={entry.image}
                      alt={`${entry.role} documentation`}
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <p className="font-mono text-sm font-bold uppercase text-[#810B38]">
                  / {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-4 text-2xl font-bold leading-tight text-black">
                  {entry.role}
                </h4>
                <p className="mt-4 max-w-2xl text-base leading-7 text-black/60">
                  {entry.detail}
                </p>
              </div>
            </div>
          </article>
        ))}

        <div
          aria-hidden="true"
          className="absolute left-8 top-0 w-px overflow-hidden bg-gradient-to-b from-transparent via-black/10 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-t from-[#810B38] via-[#6B3F69] to-transparent"
            style={{
              height: beamHeight,
              opacity: beamOpacity,
            }}
          />
        </div>
      </div>
    </div>
  );
}
