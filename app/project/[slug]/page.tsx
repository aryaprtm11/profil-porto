import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FiArrowLeft } from "react-icons/fi";
import LanguageToggle from "../../components/LanguageToggle";
import LocalizedNavLinks from "../../components/LocalizedNavLinks";
import {
  getProjectDetail,
  projectDetails,
  type DetailTagIcon,
  type ProjectDetail,
} from "../../data";
import {
  SiFigma,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const tagIcons: Record<
  DetailTagIcon,
  {
    Icon: IconType;
    className: string;
  }
> = {
  next: { Icon: SiNextdotjs, className: "text-black" },
  tailwind: { Icon: SiTailwindcss, className: "text-[#06B6D4]" },
  vercel: { Icon: SiVercel, className: "text-black" },
  react: { Icon: SiReact, className: "text-[#61DAFB]" },
  typescript: { Icon: SiTypescript, className: "text-[#3178C6]" },
  postgresql: { Icon: SiPostgresql, className: "text-[#4169E1]" },
  figma: { Icon: SiFigma, className: "text-[#F24E1E]" },
};

function DetailTag({ icon, label }: { icon: DetailTagIcon; label: string }) {
  const { Icon, className } = tagIcons[icon];
  const needsLightBadge = className.includes("text-black");

  return (
    <span className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-4 text-xs font-bold uppercase text-black/70">
      <span
        className={
          needsLightBadge
            ? "grid h-4 w-4 place-items-center rounded-full bg-black/5"
            : "grid h-4 w-4 place-items-center"
        }
      >
        <Icon aria-hidden="true" className={`h-3.5 w-3.5 ${className}`} />
      </span>
      {label}
    </span>
  );
}

function ShowcasePhone({
  accent,
  variant,
}: {
  accent: string;
  variant: number;
}) {
  return (
    <div
      className="h-[360px] w-full rounded-[26px] border border-black/10 bg-white p-3 shadow-[0_20px_54px_rgba(0,0,0,0.08)] sm:h-[420px]"
      style={{ "--project-accent": accent } as CSSProperties}
    >
      <div className="relative h-full overflow-hidden rounded-[20px] bg-[color:var(--project-accent)]/10">
        <div className="absolute inset-x-0 top-0 h-20 bg-[color:var(--project-accent)]" />
        <div className="relative z-10 flex items-center justify-between px-5 py-4 text-xs font-bold text-white">
          <span>12:30</span>
          <span>{variant === 3 ? "AP" : "arya.dev"}</span>
        </div>
        <div className="relative z-10 mx-5 mt-5 rounded-2xl bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
          <div className="mb-4 h-3 w-24 rounded-full bg-black/20" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 rounded-xl bg-black/5" />
            <div className="h-16 rounded-xl bg-[color:var(--project-accent)]/20" />
          </div>
        </div>
        <div className="mx-5 mt-5 space-y-3">
          {Array.from({ length: variant === 2 ? 5 : 4 }).map((_, index) => (
            <div
              key={index}
              className="h-12 rounded-2xl bg-white/85 shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
            />
          ))}
        </div>
        <div className="absolute inset-x-5 bottom-5 h-12 rounded-2xl bg-white" />
      </div>
    </div>
  );
}

function ProjectShowcase({ project }: { project: ProjectDetail }) {
  return (
    <div className="space-y-8">
      <section
        className="overflow-hidden rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)] md:p-14"
        data-scroll-reveal
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ShowcasePhone accent={project.accent} variant={1} />
          <ShowcasePhone accent={project.accent} variant={2} />
          <ShowcasePhone accent={project.accent} variant={3} />
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section
          className="rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)] md:p-10"
          data-scroll-reveal
        >
          <p className="font-mono text-sm font-bold uppercase text-black/35">
            Interface Structure
          </p>
          <div className="mt-8 grid gap-4">
            <div
              className="h-32 rounded-[24px]"
              style={{ backgroundColor: project.accent }}
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-28 rounded-[22px] bg-black/5" />
              <div className="h-28 rounded-[22px] bg-black/5" />
            </div>
            <div className="h-24 rounded-[22px] bg-black/5" />
          </div>
        </section>

        <section
          className="rounded-[32px] border border-black/5 bg-[#f1f2f4] p-8 md:p-10"
          data-scroll-reveal
          style={{ "--reveal-delay": "100ms" } as CSSProperties}
        >
          <p className="font-mono text-sm font-bold uppercase text-black/35">
            Project Notes
          </p>
          <h2 className="mt-5 text-2xl font-bold leading-tight text-black">
            Clean layout, clear hierarchy, and responsive interaction.
          </h2>
          <p className="mt-5 text-base leading-7 text-black/60">
            Fokus halaman detail ini adalah menampilkan konteks project dengan
            ringkas, lalu memberi ruang besar untuk visual supaya hasil kerja
            lebih mudah dinilai.
          </p>
        </section>
      </div>
    </div>
  );
}

function BackgroundGrid() {
  return (
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
  );
}

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Arya Pratama`,
    description: project.subtitle,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fbfbfa] text-[#111111]">
      <BackgroundGrid />

      <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5">
        <nav
          aria-label="Project navigation"
          className="mx-auto flex w-fit items-center gap-4 rounded-full border border-black/10 bg-[#fbfbfa]/90 py-2 pl-4 pr-2 font-sans shadow-[0_14px_36px_rgba(0,0,0,0.08)] backdrop-blur-xl md:gap-5"
        >
          <Link
            href="/"
            aria-label="Back to home"
            className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden"
          >
            <Image
              src="/logo/AP.png"
              alt="Arya Pratama logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </Link>
          <span aria-hidden="true" className="hidden h-6 w-px bg-black/10 md:block" />
          <LocalizedNavLinks hrefPrefix="/" />
          <span aria-hidden="true" className="hidden h-6 w-px bg-black/10 md:block" />
          <div className="flex items-center gap-2">
            <LanguageToggle />
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-36 sm:pt-40">
        <Link
          href="/#projects"
          className="cursor-target inline-flex items-center gap-2 font-mono text-sm font-bold text-black/50 transition-colors hover:text-black"
          data-scroll-reveal
        >
          <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to project
        </Link>

        <section
          className="mt-10 rounded-[28px] bg-[#f0f1f3] p-7 md:rounded-[32px] md:p-9"
          data-scroll-reveal
          style={{ "--reveal-delay": "80ms" } as CSSProperties}
        >
          <h1 className="sr-only">{project.title}</h1>
          <p className="max-w-5xl text-base leading-7 text-black/75">
            <span className="font-bold text-black">{project.title}</span>{" "}
            {project.overview}
          </p>
          <p className="mt-6 max-w-5xl text-base leading-7 text-black/75">
            <span className="font-bold text-black">The challenge</span>{" "}
            {project.challenge}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex h-9 items-center rounded-full bg-white px-4 text-xs font-bold uppercase text-black/70">
              {project.scope}
            </span>
            <span className="inline-flex h-9 items-center rounded-full bg-white px-4 text-xs font-bold uppercase text-black/70">
              {project.category}
            </span>
            {project.tags.map((tag) => (
              <DetailTag key={tag.label} icon={tag.icon} label={tag.label} />
            ))}
          </div>
        </section>

        <div className="mt-20">
          <ProjectShowcase project={project} />
        </div>

        <section
          className="cursor-target mt-20 rounded-[32px] border border-black/10 bg-[#111111] p-8 text-white md:p-10"
          data-scroll-reveal
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-mono text-sm font-bold uppercase text-white/35">
                Looking for a Developer?
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Saya bisa bantu bikin tampilan website yang clean dan responsif.
              </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
