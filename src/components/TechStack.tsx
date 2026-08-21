// technology section: a compact overview of the tools used across the portfolio.

import React from "react";

const categories = ["Frontend", "Backend", "Database", "DevOps"];
const skills = ["React", "TypeScript", "JavaScript", "Tailwind", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "Git"];

function TechStack() {
  return (
    <section id="tech-stack" className="w-full bg-primary text-secondary">
      <div className="container mx-auto px-5 py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlueLight">Toolkit</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">The stack behind the work.</h2>
          <p className="mt-5 leading-7 text-secondary/60">Modern tools chosen for speed, maintainability, and getting a product from development to production without unnecessary complexity.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => <span key={category} className="rounded-full border border-secondary/10 bg-secondary/5 px-4 py-2 text-sm font-medium text-secondary/75">{category}</span>)}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <div key={skill} className="group rounded-2xl border border-secondary/10 bg-secondary/5 p-5 transition hover:border-accentBlue/40 hover:bg-secondary/10">
              <div className="flex size-11 items-center justify-center rounded-xl bg-accentBlue text-sm font-bold text-secondary">{skill.slice(0, 2).toUpperCase()}</div>
              <p className="mt-5 font-medium">{skill}</p>
              <p className="mt-1 text-xs text-secondary/40">Technology</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(TechStack);
