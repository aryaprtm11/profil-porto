import type { ProjectDetail } from "./types";

export const projectDetails: ProjectDetail[] = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Modern-minimalism portfolio website",
    overview:
      "adalah website profil yang dirancang untuk menampilkan identitas, skill, project, certificate, experience, dan contact dalam satu alur yang fokus.",
    challenge:
      "Tantangan utamanya adalah menjaga tampilan tetap bersih tanpa kehilangan karakter visual. Struktur dibuat modular agar setiap section mudah dipindai, responsif, dan tetap nyaman dilihat di desktop maupun mobile.",
    category: "Portfolio",
    scope: "Frontend Development",
    accent: "#810B38",
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
    overview:
      "adalah konsep dashboard admin yang berfokus pada keterbacaan data, grouping informasi, dan akses cepat ke aksi penting.",
    challenge:
      "Tantangan desainnya adalah membuat komponen data terasa padat tetapi tidak berantakan. Layout menggunakan kartu ringkas, tabel sederhana, dan hierarchy yang jelas agar pengguna bisa memahami informasi lebih cepat.",
    category: "Dashboard",
    scope: "Interface Design",
    accent: "#6B3F69",
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
    overview:
      "adalah layout landing page responsif yang dibuat untuk menyusun pesan utama, CTA, dan konten pendukung secara jelas.",
    challenge:
      "Tantangannya adalah menjaga tiap section punya fungsi yang spesifik tanpa terasa seperti template generik. Struktur dibuat dengan ritme visual yang kuat, CTA yang mudah ditemukan, dan section yang tetap rapi di layar kecil.",
    category: "Landing Page",
    scope: "Product Website",
    accent: "#2496ED",
    tags: [
      { label: "Next JS", icon: "next" },
      { label: "Figma", icon: "figma" },
      { label: "Tailwind", icon: "tailwind" },
    ],
  },
];

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
