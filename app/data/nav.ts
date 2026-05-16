import type { NavKey } from "./types";

export const navItems = [
  { key: "about", label: "About", href: "#about" },
  { key: "skills", label: "Skill", href: "#skills" },
  { key: "projects", label: "Project", href: "#projects" },
  { key: "certificate", label: "Certificate", href: "#certificate" },
  { key: "experience", label: "Experience", href: "#experience" },
] satisfies { key: NavKey; label: string; href: string }[];
