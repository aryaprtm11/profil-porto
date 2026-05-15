import type { ProjectPreviewVariant, StackIcon } from "./types";

export const projects = [
  {
    slug: "personal-portfolio",
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
    slug: "dashboard-interface",
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
    slug: "landing-page-system",
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
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  visual: ProjectPreviewVariant;
  tags: { label: string; icon: StackIcon }[];
}[];
