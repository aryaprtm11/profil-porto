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
  | "git"
  | "figma"
  | "vercel"
  | "aws"
  | "gcp";

export type ProjectPreviewVariant = "portfolio" | "dashboard" | "landing";

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
