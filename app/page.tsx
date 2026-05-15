import Image from "next/image";
import localFont from "next/font/local";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
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
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const varien = localFont({
  src: "../public/fonts/varien/Varien.otf",
  display: "swap",
});

type SkillIcon =
  | "react"
  | "next"
  | "typescript"
  | "vue"
  | "node"
  | "php"
  | "laravel"
  | "express"
  | "mysql"
  | "postgresql"
  | "mongodb"
  | "git"
  | "figma"
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
  typescript: { Icon: SiTypescript, className: "text-[#3178C6]" },
  vue: { Icon: SiVuedotjs, className: "text-[#4FC08D]" },
  node: { Icon: SiNodedotjs, className: "text-[#5FA04E]" },
  php: { Icon: SiPhp, className: "text-[#777BB4]" },
  laravel: { Icon: SiLaravel, className: "text-[#FF2D20]" },
  express: { Icon: SiExpress, className: "text-black" },
  mysql: { Icon: SiMysql, className: "text-[#4479A1]" },
  postgresql: { Icon: SiPostgresql, className: "text-[#4169E1]" },
  mongodb: { Icon: SiMongodb, className: "text-[#47A248]" },
  git: { Icon: SiGit, className: "text-[#F05032]" },
  figma: { Icon: SiFigma, className: "text-[#F24E1E]" },
  aws: { Icon: FaAws, className: "text-[#FF9900]" },
  gcp: { Icon: SiGooglecloud, className: "text-[#4285F4]" },
};

function SkillIconMark({ icon }: { icon: SkillIcon }) {
  const { Icon, className } = skillIcons[icon];

  return <Icon aria-hidden="true" className={`h-4 w-4 shrink-0 ${className}`} />;
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
      description:
        "A clean profile website designed to present identity, skills, work, and contact flow in one focused page.",
      tags: ["Next.js", "Tailwind", "UI Design"],
    },
    {
      title: "Dashboard Interface",
      description:
        "A structured admin dashboard concept with readable data cards, tables, and quick action patterns.",
      tags: ["React", "TypeScript", "Dashboard"],
    },
    {
      title: "Landing Page System",
      description:
        "A conversion-focused landing page layout with clear hierarchy, CTA placement, and responsive sections.",
      tags: ["Web Design", "Responsive", "Frontend"],
    },
  ];

  const certificates = [
    "Frontend Development Fundamentals",
    "Responsive Web Design",
    "JavaScript Programming Basics",
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
          <div className="max-w-3xl" data-scroll-reveal>
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
            className="cursor-target relative mx-auto w-full max-w-sm lg:mr-0"
            data-scroll-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="/profile/114677961.jpg"
                alt="Foto Arya Pratama"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 360px"
                className="object-cover"
              />
            </div>
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
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
              Selected work with clean structure and purpose.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="cursor-target flex min-h-80 flex-col justify-between rounded-[28px] border border-black/10 bg-white/85 p-7 backdrop-blur"
                data-scroll-reveal
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <div>
                  <div className="mb-8 h-28 rounded-2xl border border-black/10 bg-[linear-gradient(135deg,#ffffff_0%,#f8f5f8_48%,#ebe2eb_100%)]" />
                  <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                  <p className="leading-7 text-black/60">
                    {project.description}
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certificate" className="scroll-mt-32 py-24">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <h2
              className="text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl"
              data-scroll-reveal
            >
              Learning records that support the work.
            </h2>
            <div
              className="cursor-target divide-y divide-black/10 rounded-[28px] border border-black/10 bg-white/85 backdrop-blur"
              data-scroll-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {certificates.map((certificate, index) => (
                <article
                  key={certificate}
                  className="grid gap-3 p-6 sm:grid-cols-[72px_1fr]"
                >
                  <p className="font-mono text-sm font-semibold text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-xl font-bold">{certificate}</h3>
                    <p className="mt-2 leading-7 text-black/60">
                      Focused on practical foundations for building modern web
                      interfaces.
                    </p>
                  </div>
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
