import localFont from "next/font/local";

const varien = localFont({
  src: "../public/fonts/varien/Varien.otf",
  display: "swap",
});

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
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "REST API", "MySQL", "Authentication"],
    },
    {
      title: "Tools",
      items: ["Git", "Figma", "Vercel", "Responsive Design"],
    },
  ];

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

      <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-black/10 bg-white/90 px-4 py-3 font-mono shadow-[0_10px_30px_rgba(0,0,0,0.07)] backdrop-blur md:px-6"
        >
          <a href="#" className="flex min-w-0 items-center">
            <span
              className="truncate text-2xl font-semibold tracking-normal text-[#6B3F69]"
              style={{ fontFamily: '"MOONIC SERIF", "Times New Roman", serif' }}
            >
              Arya
            </span>
          </a>

          <div className="hidden items-center gap-8 text-base font-medium text-[#111111] md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#6B3F69]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#6B3F69] px-5 text-base font-bold text-white transition-colors hover:bg-[#5a3358]"
            >
              Contact me
            </a>
            <details className="group relative md:hidden">
              <summary
                aria-label="Open navigation menu"
                className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-black/10 bg-white text-[#111111] marker:hidden [&::-webkit-details-marker]:hidden"
              >
                <span className="grid gap-1">
                  <span className="block h-0.5 w-4 rounded-full bg-current transition-transform group-open:translate-y-1.5 group-open:rotate-45" />
                  <span className="block h-0.5 w-4 rounded-full bg-current transition-transform group-open:-translate-y-1.5 group-open:-rotate-45" />
                </span>
              </summary>
              <div className="absolute right-0 top-12 w-48 rounded-2xl border border-black/10 bg-white p-2 shadow-[0_16px_36px_rgba(0,0,0,0.1)]">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-black/[0.04] hover:text-[#6B3F69]"
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
          className="flex min-h-[calc(100vh-88px)] scroll-mt-32 items-center py-24"
        >
          <div className="max-w-3xl">
            <h1 className={`${varien.className} text-5xl font-normal leading-[1.05] tracking-normal sm:text-7xl`}>
              Hi, I&apos;m Arya. I build clean and responsive web interfaces.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
              I focus on creating practical digital experiences with clear
              structure, consistent visual details, and interfaces that are easy
              to use across devices.
            </p>
          </div>
        </section>

        <section id="skills" className="scroll-mt-32 py-24">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
              Tools I use to build reliable web experiences.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((group, index) => (
              <article
                key={group.title}
                className="rounded-[28px] border border-black/10 bg-white/85 p-7 backdrop-blur"
              >
                <p className="mb-8 font-mono text-sm font-semibold text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-5 text-2xl font-bold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-[#6B3F69]/[0.06] px-3 py-1.5 text-sm font-medium text-[#2c1b2b]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-32 py-24">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
              Selected work with clean structure and purpose.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex min-h-80 flex-col justify-between rounded-[28px] border border-black/10 bg-white/85 p-7 backdrop-blur"
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
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
              Learning records that support the work.
            </h2>
            <div className="divide-y divide-black/10 rounded-[28px] border border-black/10 bg-white/85 backdrop-blur">
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
          <div className="mb-10 max-w-3xl">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-5xl">
              Experience shaped through hands-on web work.
            </h2>
          </div>
          <div className="space-y-5">
            {experiences.map((experience) => (
              <article
                key={experience.role}
                className="grid gap-5 rounded-[28px] border border-black/10 bg-white/85 p-7 backdrop-blur md:grid-cols-[0.8fr_1.2fr]"
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
          <div className="rounded-[32px] border border-black/10 bg-[#111111] p-8 text-white md:p-10">
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
