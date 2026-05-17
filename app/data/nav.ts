import type { NavKey } from "./types";

export const navItems = [
  { key: "about", label: "About", href: "#about" },
  { key: "skills", label: "Skill", href: "#skills" },
  { key: "projects", label: "Project", href: "#projects" },
  { key: "experience", label: "Experience", href: "#experience" },
  { key: "certificate", label: "Certificate", href: "#certificate" },
] satisfies { key: NavKey; label: string; href: string }[];
