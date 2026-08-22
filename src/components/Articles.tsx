// article cards reuse the same visual language as project cards and link to dedicated article pages.

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { articleItems } from "../data";

function Articles() {
  return (
    <section id="articles" className="w-full bg-primary text-secondary">
      <div className="container mx-auto px-5 py-16 md:py-24 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlueLight">Writing</p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Ideas, notes, and lessons from building.</h2>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="max-w-md text-sm leading-6 text-secondary/55 md:text-right">Short technical notes on development, product thinking, and the tools I use.</p>
            <Link to="/articles" className="group inline-flex items-center font-semibold text-accentBlueLight">View all articles <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" /></Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {articleItems.map((article) => (
            <article key={article.title} className="group rounded-2xl border border-secondary/10 bg-secondary/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:bg-secondary/10">
              <div className={`relative h-48 overflow-hidden rounded-xl ${article.gradient}`}>
                <article.Icon className="absolute -bottom-5 -right-5 size-36 text-white/10" />
                <article.Icon className="absolute left-5 top-5 size-9 text-white" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary/70">{article.date}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-secondary/55">{article.intro}</p>
              <div className="mt-5 flex flex-wrap gap-2">{article.tags.map((tag) => <span key={tag} className="rounded-full border border-secondary/10 bg-secondary/5 px-3 py-1 text-xs text-secondary/65">{tag}</span>)}</div>
                <Link
                  to={`/articles/${article.slug}`}
                  className="group/btn mt-6 inline-flex items-center font-semibold text-accentBlueLight"
                >
                  Read More <span className="sr-only">about {article.title}</span>
                  <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover/btn:translate-x-1" />
                </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Articles);
