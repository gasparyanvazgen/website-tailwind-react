// landing-page hero: introduces the brand, primary CTA, and core freelance positioning.

import React from "react";
import { ArrowLongRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avatar.webp";

function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-primary text-secondary">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accentBlue/20 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="container relative mx-auto grid items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-secondary/10 bg-secondary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-secondary/70">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for freelance work
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlueLight">Full-stack developer</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            I build digital products that are made to <span className="text-accentBlueLight">ship.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-secondary/65 md:text-lg">
            From polished interfaces to reliable backend systems, I design and develop fast, maintainable products for people who want to turn an idea into something real.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center rounded-xl bg-accentBlue px-6 py-3.5 font-semibold text-secondary shadow-lg shadow-accentBlue/20 transition hover:bg-accentBlueDark"
            >
              Start a project
              <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            {/* <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-secondary/15 bg-secondary/5 px-6 py-3.5 font-semibold text-secondary transition hover:bg-secondary/10"
            >
              View selected work
            </a> */}
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-secondary/60">
            <span className="inline-flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-accentBlueLight" /> Clean, maintainable code</span>
            <span className="inline-flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-accentBlueLight" /> Remote & async friendly</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-5 rounded-[2rem] bg-accentBlue/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-secondary/10 bg-secondary/5 p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between text-xs text-secondary/50">
              <span>VazgenDev.</span>
              <span>01 / Developer</span>
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img src={avatar} alt="Portrait of Vazgen Gasparyan" width={1127} height={1127} loading="eager" fetchPriority="high" decoding="async" className="w-full transition duration-700 hover:scale-[1.03]" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-secondary/10 bg-secondary/5 p-4">
                <p className="text-2xl font-semibold">Full-stack</p>
                <p className="mt-1 text-xs text-secondary/50">Frontend → backend</p>
              </div>
              <div className="rounded-xl border border-secondary/10 bg-secondary/5 p-4">
                <p className="text-2xl font-semibold">End-to-end</p>
                <p className="mt-1 text-xs text-secondary/50">Idea → launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
