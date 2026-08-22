// dynamic project case-study page: resolves the requested slug from the shared project data.

import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { projectItems } from "../data";
import Seo from "../components/Seo";

function Project() {
  const { slug } = useParams();
  const project = projectItems.find((item) => item.slug === slug);

  if (!project) return <main className="grid min-h-screen place-items-center bg-secondary px-5"><Seo title="Project Not Found | VazgenDev" description="The requested project could not be found." path={`/projects/${slug || "unknown"}`} noIndex /><div className="text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentBlue">404</p><h1 className="mt-3 text-4xl font-semibold">Project not found</h1><Link to="/projects" className="mt-7 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-secondary">View all projects</Link></div></main>;

  return (
    <main className="min-h-screen bg-secondary text-primary">
      <Seo
        title={`${project.title} | VazgenDev`}
        description={project.intro}
        path={`/projects/${project.slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.intro,
          author: {
            "@type": "Person",
            name: "Vazgen Gasparian",
            url: "https://gasparyanvazgen.github.io/",
          },
          url: `https://gasparyanvazgen.github.io/projects/${project.slug}`,
          keywords: project.tags.join(", "),
        }}
      />
      <header className="border-b border-gray-200/80 bg-secondary/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-5 py-5">
          <Link to="/" className="text-lg font-medium italic md:text-xl lg:text-2xl">Vazgen<span className="bg-gradient-to-r from-accentBlue to-accentBlueLight bg-clip-text text-transparent">Dev.</span></Link>
          <Link to="/projects" className="group inline-flex items-center gap-2 text-sm font-medium text-secondaryDark transition hover:text-primary"><ArrowLongLeftIcon className="h-5 w-5 transition group-hover:-translate-x-1" /> Back to projects</Link>
        </div>
      </header>
      <div className="container mx-auto px-5 py-10 md:py-16 lg:py-20">
        <article className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className={`relative h-72 overflow-hidden rounded-[2rem] ${project.gradient} shadow-2xl sm:h-96`}>
              <project.Icon className="absolute -bottom-12 -right-8 size-72 text-white/10" />
              <project.Icon className="absolute left-7 top-7 size-10 text-white" />
              <span className="absolute bottom-7 left-7 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">Case study</span>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlue">Selected work</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
              <p className="mt-5 text-lg leading-8 text-secondaryDark">{project.intro}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-accentBlueLight px-3 py-1.5 text-sm font-medium text-accentBlueDark">{tag}</span>)}</div>
              <Link to="/contact" className="group mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3.5 font-semibold text-secondary transition hover:bg-gray-800">Discuss a similar project <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" /></Link>
            </div>
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentBlue">Overview</p><p className="mt-4 text-lg leading-8 text-gray-700">{project.overview}</p></div>
            <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentBlue">Highlights</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{project.highlights.map((highlight, index) => <div key={highlight} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><span className="text-sm font-semibold text-accentBlue">0{index + 1}</span><p className="mt-3 font-medium leading-6">{highlight}</p></div>)}</div></div>
          </div>
          <div className="mt-14 border-t border-gray-200 pt-8"><Link to="/projects" className="group inline-flex items-center font-semibold text-accentBlue">View more projects <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" /></Link></div>
        </article>
      </div>
    </main>
  );
}

export default Project;
