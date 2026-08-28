// Shared content model for projects and articles.
// Keeping content here makes UI components easier to reuse and update.

import type { ComponentType, SVGProps } from "react";

import {
  CodeBracketIcon,
  SwatchIcon,
  CommandLineIcon,
  ShoppingCartIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

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

export interface ProjectImage {
  src: string;
  alt: string;
  label: string;
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
  images?: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
}

export const articleItems: ArticleItem[] = [
  {
    slug: "building-apis-that-scale",
    title: "Building APIs That Scale",
    intro:
      "Practical decisions that help a Node.js API stay clean as a product grows.",
    date: "Jun 2024",
    published: "2024-06",
    tags: ["Node.js", "APIs", "Backend"],
    Icon: CodeBracketIcon,
    gradient:
      "bg-gradient-to-br from-accentBlue to-accentBlueDark",
    content: [
      "A scalable API starts with boundaries that are easy to understand. Keep controllers thin, move business rules into focused services, and make data access predictable.",
      "As the product grows, consistency matters more than cleverness. Clear validation, typed contracts, structured errors, and sensible logging make an API easier to operate and safer to change.",
      "The goal is not to over-engineer on day one. Build a small foundation that can absorb new features without forcing every change through the same giant module.",
    ],
  },

  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    intro:
      "How utility-first styling changed the way I design and ship interfaces.",
    date: "Apr 2024",
    published: "2024-04",
    tags: ["Tailwind", "CSS", "UI"],
    Icon: SwatchIcon,
    gradient:
      "bg-gradient-to-br from-accentBlueDark to-primary",
    content: [
      "Tailwind works best when it becomes part of a consistent design system rather than a collection of random utility classes.",
      "I start with spacing, typography, colors, radii, and interaction patterns. Once those primitives are consistent, building new sections becomes faster and the interface feels intentional.",
      "The biggest win is iteration speed: a component can be refined in context without switching between markup and a large stylesheet for every small adjustment.",
    ],
  },

  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    intro:
      "Patterns and habits that keep large TypeScript codebases predictable.",
    date: "Feb 2024",
    published: "2024-02",
    tags: ["TypeScript", "React", "Code Quality"],
    Icon: CommandLineIcon,
    gradient:
      "bg-gradient-to-tr from-primary to-accentBlue",
    content: [
      "TypeScript becomes most valuable when types describe the boundaries of your application, not when every line is annotated for its own sake.",
      "Prefer small interfaces, discriminated unions, and explicit domain types where they make invalid states harder to represent.",
      "In React projects, shared types for data contracts and component props also make refactoring safer and help the codebase communicate its intent.",
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    slug: "tally",
    title: "Tally",
    intro:
      "A full-stack time tracking and invoicing app that helps freelancers manage work, clients, projects, and payments in one place.",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    Icon: ClockIcon,
    gradient:
      "bg-gradient-to-br from-accentBlue to-accentBlueDark",

    overview:
      "Tally is a full-stack time tracking and invoicing application built for freelancers. It combines time tracking, client and project management, and invoicing into a single workspace.",

    highlights: [
      "Time tracking and project-based time entries",
      "Client and project management",
      "Invoice creation and management",
      "Supabase authentication",
      "PostgreSQL database with Row Level Security",
      "Responsive dashboard and application UI",
    ],

    images: [
      {
        src: "/images/projects/tally/index.png",
        alt: "Tally home page showing the main workspace and application navigation",
        label: "Home",
      },
      {
        src: "/images/projects/tally/dashboard.png",
        alt:
          "Tally dashboard showing earnings, projects, time tracking, and recent activity",
        label: "Dashboard",
      },
      {
        src: "/images/projects/tally/projects.png",
        alt: "Tally projects page showing projects and project management",
        label: "Projects",
      },
      {
        src: "/images/projects/tally/time-tracking.png",
        alt:
          "Tally time tracking interface showing tracked work and time entries",
        label: "Time Tracking",
      },
      {
        src: "/images/projects/tally/invoices.png",
        alt:
          "Tally invoices interface showing invoices and their statuses",
        label: "Invoices",
      },
    ],

    githubUrl:
      "https://github.com/gasparyanvazgen/tally",

    liveUrl: "",
  },{
    slug: "tally",
    title: "Tally",
    intro:
      "A full-stack time tracking and invoicing app that helps freelancers manage work, clients, projects, and payments in one place.",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    Icon: ClockIcon,
    gradient:
      "bg-gradient-to-br from-accentBlue to-accentBlueDark",

    overview:
      "Tally is a full-stack time tracking and invoicing application built for freelancers. It combines time tracking, client and project management, and invoicing into a single workspace.",

    highlights: [
      "Time tracking and project-based time entries",
      "Client and project management",
      "Invoice creation and management",
      "Supabase authentication",
      "PostgreSQL database with Row Level Security",
      "Responsive dashboard and application UI",
    ],

    images: [
      {
        src: "/images/projects/tally/index.png",
        alt: "Tally home page showing the main workspace and application navigation",
        label: "Home",
      },
      {
        src: "/images/projects/tally/dashboard.png",
        alt:
          "Tally dashboard showing earnings, projects, time tracking, and recent activity",
        label: "Dashboard",
      },
      {
        src: "/images/projects/tally/projects.png",
        alt: "Tally projects page showing projects and project management",
        label: "Projects",
      },
      {
        src: "/images/projects/tally/time-tracking.png",
        alt:
          "Tally time tracking interface showing tracked work and time entries",
        label: "Time Tracking",
      },
      {
        src: "/images/projects/tally/invoices.png",
        alt:
          "Tally invoices interface showing invoices and their statuses",
        label: "Invoices",
      },
    ],

    githubUrl:
      "https://github.com/gasparyanvazgen/tally",

    liveUrl: "",
  },
];