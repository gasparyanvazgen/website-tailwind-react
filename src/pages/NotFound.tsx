// catch-all page for unknown routes. It gives visitors a clear recovery path instead of a blank screen.
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
import Seo from "../components/Seo";

function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-primary px-5 text-secondary">
      <Seo
        title="Page Not Found | VazgenDev"
        description="The page you are looking for could not be found. Return to the VazgenDev portfolio."
        path="/404"
        noIndex
      />
      <section className="w-full max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accentBlueLight">404</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">Page not found.</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-secondary/60 md:text-lg">
          This page doesn&apos;t exist or may have moved. You can head back to the portfolio and continue exploring.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-accentBlue px-6 py-3.5 font-semibold text-secondary transition hover:bg-accentBlueDark"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Back to home
          </Link>
          <Link
            to="/projects"
            className="group inline-flex items-center rounded-full border border-secondary/15 bg-secondary/5 px-6 py-3.5 font-semibold text-secondary transition hover:bg-secondary/10"
          >
            View projects
            <ArrowLongLeftIcon className="ml-2 h-5 w-5 rotate-180 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
