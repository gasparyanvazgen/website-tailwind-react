// project cards: the primary portfolio entry point, with each card linking to a case-study page.

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { projectItems } from "../data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="w-full bg-secondary">
      <div className="container mx-auto px-5 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlue">
              Selected work
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Projects built to solve real problems.
            </h2>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <p className="max-w-md text-sm leading-6 text-secondaryDark md:text-right">
              A small selection of projects showing how I approach interfaces,
              backend systems, and end-to-end delivery.
            </p>

            <Link
              to="/projects"
              className="group inline-flex items-center font-semibold text-accentBlue"
            >
              View all projects
              <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projectItems.slice(-3).reverse().map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Projects);