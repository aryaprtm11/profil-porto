"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./components/LanguageContext";
import {
  certificates,
  experiences,
  navItems,
  projects,
  skills,
  type StackIcon as SkillIcon,
} from "./data";
import {
  certificateDescriptionCopy,
  experienceCopy,
  homeCopy,
  projectSubtitleCopy,
} from "./data/translations";
import {
  SiArduino,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGooglecloud,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import Lanyard from "./components/Lanyard";

const varien = localFont({
  src: "../public/fonts/varien/Varien.otf",
  display: "swap",
});

const skillIcons: Record<
  SkillIcon,
  {
    Icon: IconType;
    className: string;
  }
> = {
  react: { Icon: SiReact, className: "text-[#61DAFB]" },
  next: { Icon: SiNextdotjs, className: "text-black" },
  tailwind: { Icon: SiTailwindcss, className: "text-[#06B6D4]" },
  typescript: { Icon: SiTypescript, className: "text-[#3178C6]" },
  vue: { Icon: SiVuedotjs, className: "text-[#4FC08D]" },
  node: { Icon: SiNodedotjs, className: "text-[#5FA04E]" },
  php: { Icon: SiPhp, className: "text-[#777BB4]" },
  laravel: { Icon: SiLaravel, className: "text-[#FF2D20]" },
  express: { Icon: SiExpress, className: "text-black" },
  mysql: { Icon: SiMysql, className: "text-[#4479A1]" },
  postgresql: { Icon: SiPostgresql, className: "text-[#4169E1]" },
  mongodb: { Icon: SiMongodb, className: "text-[#47A248]" },
  docker: { Icon: SiDocker, className: "text-[#2496ED]" },
  arduino: { Icon: SiArduino, className: "text-[#00878F]" },
  git: { Icon: SiGit, className: "text-[#F05032]" },
  figma: { Icon: SiFigma, className: "text-[#F24E1E]" },
  vercel: { Icon: SiVercel, className: "text-black" },
  aws: { Icon: FaAws, className: "text-[#FF9900]" },
  gcp: { Icon: SiGooglecloud, className: "text-[#4285F4]" },
};

function SkillIconMark({ icon }: { icon: SkillIcon }) {
  const { Icon, className } = skillIcons[icon];

  return <Icon aria-hidden="true" className={`h-4 w-4 shrink-0 ${className}`} />;
}

function TechPill({ icon, label }: { icon: SkillIcon; label: string }) {
  const { Icon, className } = skillIcons[icon];
  const needsLightBadge = className.includes("text-black");

  return (
    <span className="inline-flex h-8 items-center gap-2 rounded-full bg-black px-4 text-xs font-bold text-white">
      <span
        className={
          needsLightBadge
            ? "grid h-4 w-4 place-items-center rounded-full bg-white"
            : "grid h-4 w-4 place-items-center"
        }
      >
        <Icon aria-hidden="true" className={`h-3.5 w-3.5 ${className}`} />
      </span>
      {label}
    </span>
  );
}

function ProjectPreview({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative h-56 overflow-hidden bg-[#e8edf2]">
      <Image
        src={image}
        alt={`${title} preview`}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const copy = homeCopy[language];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#fbfbfa] text-[#090909]">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundPosition: "0 0, 0 0",
          backgroundSize: "20px 20px",
          maskComposite: "intersect",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          WebkitMaskComposite: "source-in",
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
        }}
      />

      <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex w-fit items-center gap-3 rounded-full border border-black/10 bg-[#fbfbfa]/90 p-2 font-sans shadow-[0_14px_36px_rgba(0,0,0,0.08)] backdrop-blur-xl md:gap-5"
        >
          <a
            href="#"
            aria-label="Back to top"
            className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white transition-transform hover:scale-[1.03]"
          >
            <Image
              src="/logo/AP.png"
              alt="Arya Pratama logo"
              fill
              sizes="44px"
              className="object-contain p-2"
              priority
            />
          </a>

          <span aria-hidden="true" className="hidden h-6 w-px bg-black/10 md:block" />

          <div className="hidden items-center gap-5 text-sm font-medium text-[#172033] lg:gap-7 lg:text-base md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#ff5a1f]"
              >
                {copy.nav[item.key]}
              </a>
            ))}
          </div>

          <span aria-hidden="true" className="hidden h-6 w-px bg-black/10 md:block" />

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#020713] px-6 text-base font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.22)] transition-transform hover:scale-[1.02]"
            >
              {copy.contactButton}
            </a>
            <LanguageToggle />
            <details className="group relative md:hidden">
              <summary
                aria-label="Open navigation menu"
                className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-black/10 bg-white text-[#111111] marker:hidden [&::-webkit-details-marker]:hidden"
              >
                <span className="grid gap-1">
                  <span className="block h-0.5 w-4 rounded-full bg-current transition-transform group-open:translate-y-1.5 group-open:rotate-45" />
                  <span className="block h-0.5 w-4 rounded-full bg-current transition-transform group-open:-translate-y-1.5 group-open:-rotate-45" />
                </span>
              </summary>
              <div className="absolute right-0 top-14 w-52 rounded-[24px] border border-black/10 bg-[#fbfbfa] p-2 shadow-[0_18px_48px_rgba(0,0,0,0.12)]">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-full px-4 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
                  >
                    {copy.nav[item.key]}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-24 sm:pt-28">
        <section
          id="about"
          className="grid min-h-[calc(100vh-88px)] scroll-mt-32 items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="order-2 max-w-3xl lg:order-1" data-scroll-reveal>
            <h1 className={`${varien.className} text-[42px] font-normal leading-[1.05] tracking-normal sm:text-[56px]`}>
              {copy.aboutTitle}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-black/60">
              {copy.aboutDescription}
            </p>
          </div>
          <div
            className="relative order-1 mx-auto -mb-24 -mt-28 h-[520px] w-full max-w-sm overflow-visible sm:h-[600px] lg:order-2 lg:mr-0 lg:-mb-0 lg:-mt-36 lg:h-[760px] lg:max-w-lg"
            data-scroll-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            <Lanyard
              anchorPosition={[0, 8, 0]}
              cardScale={2.45}
              className="h-full"
              position={[0, 0, 17]}
              fov={15}
              ropeLength={2.25}
            />
          </div>
        </section>

        <section id="skills" className="scroll-mt-32 py-24">
          <div className="mb-10 max-w-3xl" data-scroll-reveal>
            <h2 className={`${varien.className} text-[42px] font-normal leading-[1.05] tracking-normal sm:text-[56px]`}>
              {copy.skillsTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60">
              {copy.skillsDescription}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, index) => (
              <article
                key={group.title}
                className="cursor-target rounded-[28px] border border-black/10 bg-white/85 p-7 font-mono backdrop-blur"
                data-scroll-reveal
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <p className="mb-5 text-sm font-bold uppercase text-[#ff5a1f]">
                  / {group.title}
                </p>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <SkillIconMark icon={item.icon} />
                      <span className="text-sm font-medium text-black/60">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-32 py-24">
          <div className="mb-10 max-w-3xl" data-scroll-reveal>
            <h2 className={`${varien.className} text-[42px] font-normal leading-[1.05] tracking-normal sm:text-[56px]`}>
              {copy.projectsTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60">
              {copy.projectsDescription}
            </p>
          </div>
          <div className="project-grid grid overflow-visible md:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={project.title}
                href={`/project/${project.slug}`}
                className="project-card group cursor-target flex min-h-[520px] flex-col overflow-hidden border border-black/10 bg-white/75 transition-[filter,opacity,transform,box-shadow] duration-500 ease-out"
                data-scroll-reveal
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <ProjectPreview image={project.image} title={project.title} />
                <div>
                  <div className="flex flex-col gap-3 p-6 md:p-7">
                    <p className="font-mono text-base font-bold text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-[15px] font-bold leading-6 text-black">
                      {project.title}
                    </h3>
                    <p className="leading-7 text-black/60">
                      {projectSubtitleCopy[project.slug]?.[language] ??
                        project.subtitle}
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 px-6 pb-7 md:px-7">
                  {project.tags.map((tag) => (
                    <TechPill key={tag.label} icon={tag.icon} label={tag.label} />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="certificate" className="scroll-mt-32 py-24">
          <div className="mb-10 max-w-3xl" data-scroll-reveal>
            <h2 className={`${varien.className} text-[42px] font-normal leading-[1.05] tracking-normal sm:text-[56px]`}>
              {copy.certificateTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60">
              {copy.certificateDescription}
            </p>
          </div>
          <div>
            <div
              className="certificate-grid grid overflow-visible md:grid-cols-3"
              data-scroll-reveal
              style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            >
              {certificates.map((certificate, index) => (
                <article
                  key={certificate.title}
                  className="certificate-card cursor-target flex min-h-[360px] flex-col overflow-hidden border border-black/10 bg-white/75 transition-[filter,opacity,transform,box-shadow] duration-500 ease-out"
                >
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-mono text-base font-bold text-black/35">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="max-w-[13rem] text-right font-mono text-sm font-semibold uppercase text-[#6B3F69]">
                        {certificate.date}
                      </p>
                    </div>
                    <h3 className="mt-4 text-base font-bold leading-6 text-black">
                      {certificate.title}
                    </h3>
                    <p className="mt-3 leading-7 text-black/60">
                      {certificateDescriptionCopy[certificate.title]?.[
                        language
                      ] ?? certificate.description}
                    </p>
                    <a
                      href={certificate.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex h-11 w-fit translate-y-2 items-center justify-center gap-2 rounded-full bg-black px-5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                    >
                      {copy.viewCertificate}
                      <FiExternalLink aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-32 py-24">
          <div className="mb-10 max-w-3xl" data-scroll-reveal>
            <h2 className={`${varien.className} text-[42px] font-normal leading-[1.05] tracking-normal sm:text-[56px]`}>
              {copy.experienceTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60">
              {copy.experienceDescription}
            </p>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[15px] top-0 h-full w-px bg-black/10 md:left-[172px]"
            />
            {experiences.map((experience, index) => (
              <article
                key={experience.role}
                className="cursor-target relative grid grid-cols-[32px_1fr] gap-x-5 pb-8 last:pb-0 md:grid-cols-[120px_64px_1fr]"
                data-scroll-reveal
                style={
                  { "--reveal-delay": `${index * 100}ms` } as React.CSSProperties
                }
              >
                <p className="hidden pt-6 text-right font-mono text-sm font-semibold uppercase text-black/35 md:block">
                  {experience.period}
                </p>
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-[#fbfbfa] font-mono text-xs font-bold text-black shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:mx-auto md:mt-5">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="rounded-[28px] border border-black/10 bg-white/85 p-7 backdrop-blur">
                  <p className="font-mono text-sm font-semibold uppercase text-[#6B3F69]">
                    {experience.period}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">
                    {experienceCopy[experience.role]?.[language]?.role ??
                      experience.role}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-black/60">
                    {experienceCopy[experience.role]?.[language]?.detail ??
                      experience.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-32 py-24">
          <div
            className="cursor-target rounded-[32px] border border-black/10 bg-[#111111] p-8 text-white md:p-10"
            data-scroll-reveal
          >
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-normal sm:text-4xl">
                  {copy.contactTitle}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
                  {copy.contactDescription}
                </p>
              </div>
              <a
                href="mailto:arya@example.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#6B3F69] px-6 text-base font-bold text-white transition-colors hover:bg-[#7b4b79]"
              >
                {copy.emailButton}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
