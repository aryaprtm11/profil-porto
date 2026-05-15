import localFont from "next/font/local";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {
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

type SkillIcon =
  | "react"
  | "next"
  | "tailwind"
  | "typescript"
  | "vue"
  | "node"
  | "php"
  | "laravel"
  | "express"
  | "mysql"
  | "postgresql"
  | "mongodb"
  | "docker"
  | "git"
  | "figma"
  | "vercel"
  | "aws"
  | "gcp";

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

function ProjectPreview({ variant }: { variant: "portfolio" | "dashboard" | "landing" }) {
  if (variant === "dashboard") {
    return (
      <div className="relative h-56 overflow-hidden bg-[#eef0ff]">
        <div className="absolute -right-8 top-7 h-44 w-72 -rotate-[18deg] rounded-2xl border border-black/10 bg-white p-4 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
          <div className="mb-4 h-6 w-28 rounded-full bg-black" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 rounded-xl bg-[#6B3F69]/20" />
            <div className="h-16 rounded-xl bg-black/10" />
            <div className="h-16 rounded-xl bg-[#ff5a1f]/20" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-black/15" />
            <div className="h-2 w-4/5 rounded-full bg-black/10" />
            <div className="h-2 w-2/3 rounded-full bg-black/10" />
          </div>
        </div>
        <div className="absolute left-7 top-12 h-36 w-52 -rotate-[18deg] rounded-2xl border border-black/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.1)]">
          <div className="h-full rounded-2xl bg-[linear-gradient(135deg,#ffffff_0%,#ece8ff_100%)] p-4">
            <div className="h-5 w-20 rounded-full bg-[#6B3F69]" />
            <div className="mt-7 h-14 rounded-xl bg-black/10" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "landing") {
    return (
      <div className="relative h-56 overflow-hidden bg-[#edf2f7]">
        <div className="absolute left-6 top-4 grid w-[330px] -rotate-[22deg] grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-28 rounded-[22px] border border-black/10 bg-white p-3 shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-3 h-8 w-8 rounded-full bg-[#ff5a1f]/20" />
              <div className="h-2 rounded-full bg-black/20" />
              <div className="mt-2 h-2 w-2/3 rounded-full bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden bg-[#e8edf2]">
      <div className="absolute -left-5 top-7 h-40 w-64 -rotate-[10deg] rounded-2xl bg-[#ff7a30] shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
        <div className="absolute left-8 top-8 grid h-16 w-16 place-items-center rounded-full bg-white text-sm font-black text-[#ff5a1f]">
          AP
        </div>
      </div>
      <div className="absolute right-8 top-9 h-40 w-72 rotate-[8deg] rounded-2xl border border-black/10 bg-white p-5 shadow-[0_18px_42px_rgba(0,0,0,0.12)]">
        <div className="mb-5 h-5 w-36 rounded-full bg-black" />
        <div className="space-y-2">
          <div className="h-2 rounded-full bg-black/15" />
          <div className="h-2 w-5/6 rounded-full bg-black/10" />
          <div className="h-2 w-2/3 rounded-full bg-black/10" />
        </div>
        <div className="mt-7 h-9 rounded-full bg-[#ff5a1f]" />
      </div>
    </div>
  );
}

export default function Home() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificate", href: "#certificate" },
    { label: "Experience", href: "#experience" },
  ];

  const skills = [
    {
      title: "FRONT-END",
      items: [
        { label: "React", icon: "react" },
        { label: "Next JS", icon: "next" },
        { label: "Typescript", icon: "typescript" },
        { label: "Vue JS", icon: "vue" },
      ],
    },
    {
      title: "BACK-END",
      items: [
        { label: "PHP", icon: "php" },
        { label: "Laravel", icon: "laravel" },
        { label: "Express JS", icon: "express" },
        { label: "Node JS", icon: "node" },
      ],
    },
    {
      title: "DATABASE",
      items: [
        { label: "MySQL", icon: "mysql" },
        { label: "PostgreSQL", icon: "postgresql" },
        { label: "MongoDB", icon: "mongodb" },
      ],
    },
    {
      title: "TOOLS",
      items: [
        { label: "Git", icon: "git" },
        { label: "Docker", icon: "docker" },
        { label: "Figma", icon: "figma" },
        { label: "AWS", icon: "aws" },
        { label: "GCP", icon: "gcp" },
      ],
    },
  ] satisfies {
    title: string;
    items: { label: string; icon: SkillIcon }[];
  }[];

  const projects = [
    {
      title: "Personal Portfolio",
      subtitle: "Modern-minimalism portfolio website",
      description:
        "A clean profile website designed to present identity, skills, work, and contact flow in one focused page.",
      visual: "portfolio",
      tags: [
        { label: "Next JS", icon: "next" },
        { label: "Tailwind", icon: "tailwind" },
        { label: "Vercel", icon: "vercel" },
      ],
    },
    {
      title: "Dashboard Interface",
      subtitle: "Admin dashboard concept",
      description:
        "A structured admin dashboard concept with readable data cards, tables, and quick action patterns.",
      visual: "dashboard",
      tags: [
        { label: "React", icon: "react" },
        { label: "Typescript", icon: "typescript" },
        { label: "PostgreSQL", icon: "postgresql" },
      ],
    },
    {
      title: "Landing Page System",
      subtitle: "Responsive landing page system",
      description:
        "A conversion-focused landing page layout with clear hierarchy, CTA placement, and responsive sections.",
      visual: "landing",
      tags: [
        { label: "Next JS", icon: "next" },
        { label: "Figma", icon: "figma" },
        { label: "Tailwind", icon: "tailwind" },
      ],
    },
  ] satisfies {
    title: string;
    subtitle: string;
    description: string;
    visual: "portfolio" | "dashboard" | "landing";
    tags: { label: string; icon: SkillIcon }[];
  }[];

  const certificates = [
    {
      title: "Frontend Development Fundamentals",
      date: "Jan 2025",
      description:
        "Focused on practical foundations for building modern web interfaces.",
      href: "#",
    },
    {
      title: "Responsive Web Design",
      date: "Mar 2025",
      description:
        "Focused on responsive layouts, accessibility, and clean interface structure.",
      href: "#",
    },
    {
      title: "JavaScript Programming Basics",
      date: "Jun 2025",
      description:
        "Focused on JavaScript fundamentals for interactive web experiences.",
      href: "#",
    },
  ];

  const experiences = [
    {
      role: "Frontend Developer",
      period: "2025 - Present",
      detail:
        "Building responsive interfaces and portfolio-ready web experiences with modern frontend tools.",
    },
    {
      role: "Web Project Contributor",
      period: "2024 - 2025",
      detail:
        "Worked on page layouts, reusable UI components, and improving visual consistency across screens.",
    },
  ];

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
          className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-black/10 bg-[#fbfbfa]/85 px-2.5 py-2 font-mono shadow-[0_18px_48px_rgba(0,0,0,0.08)] backdrop-blur-xl md:px-3"
        >
          <a
            href="#"
            aria-label="Back to top"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] transition-transform hover:scale-[1.03]"
          >
            <span
              className="translate-y-px"
              style={{ fontFamily: '"MOONIC SERIF", "Times New Roman", serif' }}
            >
              A
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full bg-white/65 p-1 text-sm font-semibold text-[#111111] md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 transition-colors hover:bg-black hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-transform hover:scale-[1.02]"
            >
              Contact Me
            </a>
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
                    {item.label}
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
            <h1 className={`${varien.className} text-5xl font-normal leading-[1.05] tracking-normal sm:text-7xl`}>
              About Arya Pratama
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
              Saya adalah web developer yang berfokus pada pembuatan tampilan
              website yang rapi, responsif, dan mudah digunakan. Saya senang
              membangun pengalaman digital dengan struktur yang jelas, detail
              visual yang konsisten, dan performa yang nyaman di berbagai
              perangkat.
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
            <h2 className={`${varien.className} text-5xl font-normal leading-[1.05] tracking-normal sm:text-7xl`}>
              Skill
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Beberapa teknologi dan tools yang saya gunakan untuk membangun
              website yang responsif, terstruktur, dan nyaman digunakan.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, index) => (
              <article
                key={group.title}
                className="cursor-target rounded-[28px] border border-black/10 bg-white/85 p-7 backdrop-blur"
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
            <h2 className={`${varien.className} text-5xl font-normal leading-[1.05] tracking-normal sm:text-7xl`}>
              Project
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Beberapa project yang saya kerjakan untuk melatih kemampuan
              membangun tampilan website yang rapi, responsif, dan sesuai
              kebutuhan pengguna.
            </p>
          </div>
          <div className="project-grid grid overflow-visible rounded-[18px] border border-black/10 bg-white/75 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card cursor-target flex min-h-[520px] flex-col overflow-hidden border-b border-black/10 bg-white/0 transition-[filter,opacity,transform,box-shadow] duration-500 ease-out last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                data-scroll-reveal
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <ProjectPreview variant={project.visual} />
                <div>
                  <div className="flex flex-col gap-3 p-6 md:p-7">
                    <p className="font-mono text-base font-bold text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-bold leading-7 text-black">
                      {project.title}
                    </h3>
                    <p className="leading-7 text-black/60">
                      {project.subtitle}
                    </p>
                    <p className="leading-7 text-black/55">
                    {project.description}
                  </p>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 px-6 pb-7 md:px-7">
                  {project.tags.map((tag) => (
                    <TechPill key={tag.label} icon={tag.icon} label={tag.label} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certificate" className="scroll-mt-32 py-24">
          <div className="mb-10 max-w-3xl" data-scroll-reveal>
            <h2 className={`${varien.className} text-5xl font-normal leading-[1.05] tracking-normal sm:text-7xl`}>
              Certificate
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Kumpulan sertifikat dan catatan belajar yang mendukung proses
              saya dalam mengembangkan kemampuan web development secara
              konsisten.
            </p>
          </div>
          <div>
            <div
              className="cursor-target divide-y divide-black/10 rounded-[28px] border border-black/10 bg-white/85 backdrop-blur"
              data-scroll-reveal
              style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            >
              {certificates.map((certificate, index) => (
                <article
                  key={certificate.title}
                  className="grid gap-4 p-6 sm:grid-cols-[72px_1fr] lg:grid-cols-[72px_1fr_auto] lg:items-center"
                >
                  <p className="font-mono text-sm font-semibold text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3 className="text-xl font-bold">
                        {certificate.title}
                      </h3>
                      <p className="font-mono text-sm font-semibold uppercase text-[#6B3F69]">
                        {certificate.date}
                      </p>
                    </div>
                    <p className="mt-2 leading-7 text-black/60">
                      {certificate.description}
                    </p>
                  </div>
                  <a
                    href={certificate.href}
                    className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full bg-black px-5 text-sm font-bold text-white transition-transform hover:scale-[1.02] lg:justify-self-end"
                  >
                    View Certificate
                    <FiExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-32 py-24">
          <div className="mb-10 max-w-3xl" data-scroll-reveal>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
              Experience shaped through hands-on web work.
            </h2>
          </div>
          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <article
                key={experience.role}
                className="cursor-target grid gap-5 rounded-[28px] border border-black/10 bg-white/85 p-7 backdrop-blur md:grid-cols-[0.8fr_1.2fr]"
                data-scroll-reveal
                style={
                  { "--reveal-delay": `${index * 100}ms` } as React.CSSProperties
                }
              >
                <div>
                  <p className="font-mono text-sm font-semibold uppercase text-[#6B3F69]">
                    {experience.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    {experience.role}
                  </h3>
                </div>
                <p className="text-lg leading-8 text-black/60">
                  {experience.detail}
                </p>
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
                <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
                  Interested in building something clean and useful?
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                  Reach out for collaboration, portfolio feedback, or web
                  development projects.
                </p>
              </div>
              <a
                href="mailto:arya@example.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#6B3F69] px-6 text-base font-bold text-white transition-colors hover:bg-[#7b4b79]"
              >
                Email Arya
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
