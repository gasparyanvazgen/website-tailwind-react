// full article index: gives visitors a dedicated page for browsing every published article.
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { articleItems } from "../data";
import Seo from "../components/Seo";

function ArticlesPage() {
  return (
    <div className="min-h-screen bg-primary text-secondary">
      <NavBar />
      <main id="main-content">
        <Seo title="Articles | VazgenDev" description="Technical notes, practical lessons, and ideas from VazgenDev about software development, backend engineering, React, TypeScript, and UI." path="/articles" />
        <section className="border-b border-secondary/10">
          <div className="container mx-auto px-5 py-20 md:py-28">
            <Link to="/#articles" className="group inline-flex items-center gap-2 text-sm text-secondary/55 hover:text-secondary">
              <ArrowLongLeftIcon className="h-5 w-5 transition group-hover:-translate-x-1" /> Back to home
            </Link>
            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.22em] text-accentBlueLight">Writing</p>
            <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">All articles</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary/55">
              Technical notes, practical lessons, and ideas from building software.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-5 py-16 md:py-24">
          <div className="grid gap-5 lg:grid-cols-3">
            {articleItems.map((article) => (
              <article key={article.slug} className="group rounded-2xl border border-secondary/10 bg-secondary/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:bg-secondary/10">
                <div className={`relative h-48 overflow-hidden rounded-xl ${article.gradient}`}>
                  <article.Icon className="absolute -bottom-5 -right-5 size-36 text-white/10" />
                  <article.Icon className="absolute left-5 top-5 size-9 text-white" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary/40">{article.date}</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">{article.title}</h2>
                <p className="mt-3 text-sm leading-6 text-secondary/55">{article.intro}</p>
                <div className="mt-5 flex flex-wrap gap-2">{article.tags.map((tag) => <span key={tag} className="rounded-full border border-secondary/10 bg-secondary/5 px-3 py-1 text-xs text-secondary/65">{tag}</span>)}</div>
                <Link
                  to={`/articles/${article.slug}`}
                  aria-label={`Read ${article.title}`}
                  className="group/btn mt-6 inline-flex items-center font-semibold text-accentBlueLight"
                >
                  Read More
                  <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover/btn:translate-x-1" />
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
export default ArticlesPage;
