// Full project index: a dedicated portfolio page for browsing every case study.

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { projectItems } from "../data";
import Seo from "../components/Seo";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-secondary text-primary">
      <NavBar />

      <main id="main-content">
        <Seo
          title="Projects | VazgenDev"
          description="Explore selected VazgenDev software projects, case studies, full-stack applications, backend systems, and product concepts."
          path="/projects"
        />

        {/* Page header */}
        <section className="border-b border-gray-200/80">
          <div className="container mx-auto px-5 py-20 md:py-28">
            <Link
              to="/#projects"
              className="group inline-flex items-center gap-2 text-sm text-secondaryDark hover:text-primary"
            >
              <ArrowLongLeftIcon className="h-5 w-5 transition group-hover:-translate-x-1" />
              Back to home
            </Link>

            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.22em] text-accentBlue">
              Selected work
            </p>

            <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              All projects
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondaryDark">
              A collection of products and technical concepts showing how I
              approach design, engineering, and delivery.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="container mx-auto px-5 py-16 md:py-24">
          <div className="grid gap-5 lg:grid-cols-3">
            {projectItems.map((project) => (
              <ProjectCard project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectsPage;