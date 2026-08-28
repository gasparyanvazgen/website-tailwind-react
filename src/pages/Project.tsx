// Dynamic project case-study page.
// Resolves the requested project from the shared project data
// and displays its overview, highlights, screenshots, and links.

import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

import { projectItems } from "../data";
import Seo from "../components/Seo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Project() {
  const { slug } = useParams();

  const project = projectItems.find((item) => item.slug === slug);

  /*
   * Project not found
   */
  if (!project) {
    return (
      <div className="min-h-screen bg-secondary text-primary">
        <NavBar />

        <main className="grid min-h-[calc(100vh-80px)] place-items-center px-5">
          <Seo
            title="Project Not Found | VazgenDev"
            description="The requested project could not be found."
            path={`/projects/${slug || "unknown"}`}
            noIndex
          />

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentBlue">
              404
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Project not found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-secondaryDark">
              The project you are looking for does not exist or may have been
              moved.
            </p>

            <Link
              to="/projects"
              className="mt-7 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-secondary transition hover:bg-gray-800"
            >
              View all projects
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary text-primary">
      <NavBar />

      <main id="main-content">
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

        {/* Hero */}
        <section className="border-b border-gray-200/80">
          <div className="container mx-auto px-5 py-10 md:py-16 lg:py-20">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-secondaryDark transition hover:text-primary"
            >
              <ArrowLongLeftIcon className="h-5 w-5 transition group-hover:-translate-x-1" />
              Back to projects
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Hero image */}
              <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl">
                {project.images?.[0] ? (
                  <img
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    className="block aspect-[16/10] w-full object-cover"
                  />
                ) : (
                  <div
                    className={`relative aspect-[16/10] w-full ${project.gradient}`}
                  >
                    <project.Icon className="absolute -bottom-12 -right-8 size-72 text-white/10" />

                    <project.Icon className="absolute left-7 top-7 size-10 text-white" />

                    <span className="absolute bottom-7 left-7 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                      Case study
                    </span>
                  </div>
                )}
              </div>

              {/* Project information */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlue">
                  Selected work
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {project.title}
                </h1>

                <p className="mt-5 text-lg leading-8 text-secondaryDark">
                  {project.intro}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accentBlueLight px-3 py-1.5 text-sm font-medium text-accentBlueDark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-primary px-6 py-3.5 font-semibold text-secondary transition hover:bg-gray-800"
                    >
                      View on GitHub
                      <ArrowLongRightIcon className="ml-2 h-5 w-5" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3.5 font-semibold transition hover:bg-gray-50"
                    >
                      Live Demo
                      <ArrowLongRightIcon className="ml-2 h-5 w-5" />
                    </a>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3.5 font-semibold transition hover:bg-gray-50"
                  >
                    Discuss a similar project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview + Highlights */}
        <section className="container mx-auto px-5 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Overview */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentBlue">
                Overview
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                What is {project.title}?
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                {project.overview}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentBlue">
                Highlights
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                What I built
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <span className="text-sm font-semibold text-accentBlue">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 font-medium leading-6">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        {project.images && project.images.length > 0 && (
          <section className="border-t border-gray-200/80">
            <div className="container mx-auto px-5 py-16 md:py-24">
              <div className="mx-auto max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentBlue">
                  Screenshots
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  See {project.title} in action.
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-secondaryDark">
                  A closer look at the interface and core workflows of the
                  application.
                </p>

                <div className="mt-10 space-y-12">
                  {project.images.map((image) => (
                    <figure key={image.src}>
                      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="block w-full"
                        />
                      </div>

                      <figcaption className="mt-4 text-sm font-semibold text-secondaryDark">
                        {image.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="border-t border-gray-200/80">
          <div className="container mx-auto px-5 py-16 md:py-20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentBlue">
                  More work
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Explore more projects.
                </h2>
              </div>

              <Link
                to="/projects"
                className="group inline-flex items-center font-semibold text-accentBlue"
              >
                View all projects
                <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Project;