import type { StackIcon } from "./types";

export const projects = [
  {
    slug: "kemahasiswaan-itera",
    title: "Kemahasiswaan ITERA",
    subtitle: "Student Activities Website",
    image: "/project/posyandu/PosBan.jpg",
    tags: [
      { label: "Next JS", icon: "next" },
      { label: "Tailwind", icon: "tailwind" },
      { label: "Vercel", icon: "vercel" },
    ],
  },
  {
    slug: "ppid-itera",
    title: "PPID ITERA",
    subtitle: "Website for Public Information Disclosure services",
    image: "/project/ppid-itera/PPID.jpg",
    tags: [
      { label: "Laravel", icon: "laravel" },
      { label: "PHP", icon: "php" },
      { label: "MySQL", icon: "mysql" },
    ],
  },
  {
    slug: "posyandu",
    title: "Posyandu Banjar Agung",
    subtitle: "Website for Posyandu services and data recording for toddlers and the elderly",
    image: "/project/posyandu/PosBan.jpg",
    tags: [
      { label: "Laravel", icon: "laravel" },
      { label: "PHP", icon: "php" },
      { label: "MySQL", icon: "mysql" },
    ],
  },
  {
    slug: "hidroponic-system",
    title: "Hidroponic Monitoring System",
    subtitle: "A system for monitoring and controlling hydroponic plant growth using IoT sensors",
    image: "/project/hidroponic/hidroponic.jpg",
    tags: [
      { label: "Next JS", icon: "next" },
      { label: "Arduino", icon: "arduino" },
      { label: "Tailwind", icon: "tailwind" },
    ],
  },
  {
    slug: "agenda-surat",
    title: "Agenda Surat",
    subtitle: "A system for managing and tracking official correspondence",
    image: "/project/agenda-surat/Agenda.jpg",
    tags: [
      { label: "PHP", icon: "php" },
      { label: "Laravel", icon: "laravel" }
    ],
  },
] satisfies {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  tags: { label: string; icon: StackIcon }[];
}[];
