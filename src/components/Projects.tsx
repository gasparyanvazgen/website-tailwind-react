// project cards: the primary portfolio entry point, with each card linking to a case-study page.

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { projectItems } from "../data";

function Projects() {
  return (
    <section id="projects" className="w-full bg-secondary">
      <div className="container mx-auto px-5 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlue">Selected work</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Projects built to solve real problems.</h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="max-w-md text-sm leading-6 text-secondaryDark md:text-right">A small selection of product concepts showing how I approach interfaces, backend systems, and end-to-end delivery.</p>
            <Link to="/projects" className="group inline-flex items-center font-semibold text-accentBlue">View all projects <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" /></Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projectItems.map((project) => (
            <article key={project.title} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className={`relative h-48 overflow-hidden rounded-xl ${project.gradient}`}>
                <project.Icon className="absolute -bottom-5 -right-5 size-36 text-white/10" />
                <project.Icon className="absolute left-5 top-5 size-9 text-white" />
                <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">Case study</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-secondaryDark">{project.intro}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-accentBlueLight px-3 py-1 text-xs font-medium text-accentBlueDark">{tag}</span>)}</div>
              <Link to={`/projects/${project.slug}`} className="group/btn mt-6 inline-flex items-center font-semibold text-accentBlue">View Project <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover/btn:translate-x-1" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Projects);
