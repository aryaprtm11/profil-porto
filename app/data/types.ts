export type Language = "id" | "en";

export type NavKey =
  | "about"
  | "skills"
  | "projects"
  | "certificate"
  | "experience";

export type StackIcon =
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
  | "arduino"
  | "git"
  | "figma"
  | "vercel"
  | "aws"
  | "gcp";

export type DetailTagIcon =
  | "next"
  | "tailwind"
  | "vercel"
  | "react"
  | "typescript"
  | "postgresql"
  | "figma";

export type ProjectDetail = {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  challenge: string;
  category: string;
  scope: string;
  accent: string;
  tags: { label: string; icon: DetailTagIcon }[];
};
