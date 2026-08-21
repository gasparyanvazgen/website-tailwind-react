// shared content model for projects and articles. Keeping content here makes UI components easier to reuse and update.

import type { ComponentType, SVGProps } from "react";
import { CodeBracketIcon, SwatchIcon, CommandLineIcon, ShoppingCartIcon, ClipboardDocumentListIcon, PaintBrushIcon } from "@heroicons/react/24/outline";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface ArticleItem {
  slug: string;
  title: string;
  intro: string;
  date: string;
  published: string;
  tags: string[];
  Icon: IconComponent;
  gradient: string;
  content: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  intro: string;
  tags: string[];
  Icon: IconComponent;
  gradient: string;
  overview: string;
  highlights: string[];
}

export const articleItems: ArticleItem[] = [
  { slug: "building-apis-that-scale", title: "Building APIs That Scale", intro: "Practical decisions that help a Node.js API stay clean as a product grows.", date: "Jun 2024", published: "2024-06", tags: ["Node.js", "APIs", "Backend"], Icon: CodeBracketIcon, gradient: "bg-gradient-to-br from-accentBlue to-accentBlueDark", content: ["A scalable API starts with boundaries that are easy to understand. Keep controllers thin, move business rules into focused services, and make data access predictable.", "As the product grows, consistency matters more than cleverness. Clear validation, typed contracts, structured errors, and sensible logging make an API easier to operate and safer to change.", "The goal is not to over-engineer on day one. Build a small foundation that can absorb new features without forcing every change through the same giant module."] },
  { slug: "mastering-tailwind-css", title: "Mastering Tailwind CSS", intro: "How utility-first styling changed the way I design and ship interfaces.", date: "Apr 2024", published: "2024-04", tags: ["Tailwind", "CSS", "UI"], Icon: SwatchIcon, gradient: "bg-gradient-to-br from-accentBlueDark to-primary", content: ["Tailwind works best when it becomes part of a consistent design system rather than a collection of random utility classes.", "I start with spacing, typography, colors, radii, and interaction patterns. Once those primitives are consistent, building new sections becomes faster and the interface feels intentional.", "The biggest win is iteration speed: a component can be refined in context without switching between markup and a large stylesheet for every small adjustment."] },
  { slug: "typescript-best-practices", title: "TypeScript Best Practices", intro: "Patterns and habits that keep large TypeScript codebases predictable.", date: "Feb 2024", published: "2024-02", tags: ["TypeScript", "React", "Code Quality"], Icon: CommandLineIcon, gradient: "bg-gradient-to-tr from-primary to-accentBlue", content: ["TypeScript becomes most valuable when types describe the boundaries of your application, not when every line is annotated for its own sake.", "Prefer small interfaces, discriminated unions, and explicit domain types where they make invalid states harder to represent.", "In React projects, shared types for data contracts and component props also make refactoring safer and help the codebase communicate its intent."] },
];

export const projectItems: ProjectItem[] = [
  { slug: "e-commerce-platform", title: "E-Commerce Platform", intro: "A full-stack storefront with cart, checkout, and an admin dashboard for managing inventory.", tags: ["React", "Node.js", "MongoDB"], Icon: ShoppingCartIcon, gradient: "bg-gradient-to-br from-accentBlue to-accentBlueDark", overview: "A product-focused commerce concept designed around a fast shopping flow and a practical administration experience.", highlights: ["Responsive storefront and product browsing", "Cart and checkout flow", "Inventory-oriented admin dashboard", "Reusable React components and API structure"] },
  { slug: "task-management-app", title: "Task Management App", intro: "A collaborative kanban-style tool with drag-and-drop boards and real-time updates.", tags: ["TypeScript", "Express", "PostgreSQL"], Icon: ClipboardDocumentListIcon, gradient: "bg-gradient-to-br from-accentBlueDark to-primary", overview: "A collaboration-focused workspace concept for organizing projects, tasks, and team progress in one place.", highlights: ["Kanban-style task management", "Structured project and task data", "Type-safe application layer", "Backend-ready architecture for live updates"] },
  { slug: "portfolio-site-builder", title: "Portfolio Site Builder", intro: "A no-code builder that lets creatives assemble and publish a personal site in minutes.", tags: ["React", "Tailwind", "Docker"], Icon: PaintBrushIcon, gradient: "bg-gradient-to-tr from-primary to-accentBlue", overview: "A creator-oriented site builder concept focused on making polished personal websites easy to assemble and publish.", highlights: ["Composable page sections", "Responsive Tailwind-based layouts", "Simple publishing workflow", "Container-friendly deployment approach"] },
];
