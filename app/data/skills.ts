import type { StackIcon } from "./types";

export const skills = [
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
  items: { label: string; icon: StackIcon }[];
}[];
