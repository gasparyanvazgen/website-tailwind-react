// full project index: a dedicated portfolio page for browsing every case study.
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { projectItems } from "../data";
import Seo from "../components/Seo";

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-secondary text-primary">
      <NavBar />
      <main id="main-content">
        <Seo title="Projects | VazgenDev" description="Explore selected VazgenDev software projects, case studies, full-stack applications, backend systems, and product concepts." path="/projects" />
        <section className="border-b border-gray-200/80">
          <div className="container mx-auto px-5 py-20 md:py-28">
            <Link to="/#projects" className="group inline-flex items-center gap-2 text-sm text-secondaryDark hover:text-primary">
              <ArrowLongLeftIcon className="h-5 w-5 transition group-hover:-translate-x-1" /> Back to home
            </Link>
            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.22em] text-accentBlue">Selected work</p>
            <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">All projects</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondaryDark">
              A collection of products and technical concepts showing how I approach design, engineering, and delivery.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 py-16 md:py-24">
          <div className="grid gap-5 lg:grid-cols-3">
            {projectItems.map((project) => (
              <article key={project.slug} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`relative h-48 overflow-hidden rounded-xl ${project.gradient}`}>
                  <project.Icon className="absolute -bottom-5 -right-5 size-36 text-white/10" />
                  <project.Icon className="absolute left-5 top-5 size-9 text-white" />
                  <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">Case study</span>
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-tight">{project.title}</h2>
                <p className="mt-3 text-sm leading-6 text-secondaryDark">{project.intro}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-accentBlueLight px-3 py-1 text-xs font-medium text-accentBlueDark">{tag}</span>)}</div>
                <Link to={`/projects/${project.slug}`} className="group/btn mt-6 inline-flex items-center font-semibold text-accentBlue">
                  View Project <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover/btn:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default ProjectsPage;
