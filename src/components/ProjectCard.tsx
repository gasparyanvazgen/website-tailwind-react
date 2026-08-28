import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import type { ProjectItem } from "../data";

interface ProjectCardProps {
  project: ProjectItem;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Project preview */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        {project.images?.[0] ? (
          <img
            src={project.images[0].src}
            alt={project.images[0].alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className={`relative h-full w-full ${project.gradient}`}>
            <project.Icon className="absolute -bottom-5 -right-5 size-36 text-white/10" />

            <project.Icon className="absolute left-5 top-5 size-9 text-white" />
          </div>
        )}

        <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          Case study
        </span>
      </div>

      {/* Project information */}
      <h2 className="mt-6 text-xl font-semibold tracking-tight">
        {project.title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-secondaryDark">
        {project.intro}
      </p>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accentBlueLight px-3 py-1 text-xs font-medium text-accentBlueDark"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project link */}
      <Link
        to={`/projects/${project.slug}`}
        className="group/btn mt-6 inline-flex items-center font-semibold text-accentBlue"
      >
        View Project
        <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover/btn:translate-x-1" />
      </Link>
    </article>
  );
}

export default React.memo(ProjectCard);