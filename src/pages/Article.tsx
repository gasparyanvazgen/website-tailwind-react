// dynamic article page: resolves the requested slug from the shared article data.

import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { articleItems } from "../data";
import Seo from "../components/Seo";

function Article() {
  const { slug } = useParams();
  const article = articleItems.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="grid min-h-screen place-items-center bg-secondary px-5 text-primary">
        <Seo title="Article Not Found | VazgenDev" description="The requested article could not be found." path={`/articles/${slug || "unknown"}`} noIndex />
        <div className="text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentBlue">404</p><h1 className="mt-3 text-4xl font-semibold">Article not found</h1><Link to="/articles" className="mt-7 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-secondary">View all articles</Link></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-secondary text-primary">
      <Seo
        title={`${article.title} | VazgenDev`}
        description={article.intro}
        path={`/articles/${article.slug}`}
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.intro,
          datePublished: article.published,
          author: {
            "@type": "Person",
            name: "Vazgen Gasparian",
            url: "https://gasparyanvazgen.github.io/website-tailwind-react/",
          },
          publisher: {
            "@type": "Person",
            name: "Vazgen Gasparian",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://gasparyanvazgen.github.io/website-tailwind-react/articles/${article.slug}`,
          },
        }}
      />
      <header className="border-b border-gray-200/80 bg-secondary/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-5 py-5">
          <Link to="/" className="text-lg font-medium italic md:text-xl lg:text-2xl">Vazgen<span className="bg-gradient-to-r from-accentBlue to-accentBlueLight bg-clip-text text-transparent">Dev.</span></Link>
          <Link to="/" className="group inline-flex items-center gap-2 text-sm font-medium text-secondaryDark transition hover:text-primary"><ArrowLongLeftIcon className="h-5 w-5 transition group-hover:-translate-x-1" /> Back to home</Link>
        </div>
      </header>
      <div className="container mx-auto px-5 py-10 md:py-16 lg:py-20">
        <article className="mx-auto max-w-4xl">
          <div className={`relative h-64 overflow-hidden rounded-[2rem] ${article.gradient} shadow-2xl sm:h-80 md:h-96`}>
            <article.Icon className="absolute -bottom-12 -right-8 size-72 text-white/10" />
            <article.Icon className="absolute left-7 top-7 size-10 text-white" />
          </div>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentBlue">{article.date} · {article.tags.join(" · ")}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">{article.title}</h1>
            <p className="mt-6 text-lg leading-8 text-secondaryDark">{article.intro}</p>
          </div>
          <div className="mt-12 space-y-7 text-base leading-8 text-gray-700 md:text-lg">
            {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-12 flex flex-wrap gap-2">{article.tags.map((tag) => <span key={tag} className="rounded-full bg-accentBlueLight px-3 py-1.5 text-sm font-medium text-accentBlueDark">{tag}</span>)}</div>
          <div className="mt-14 border-t border-gray-200 pt-8"><Link to="/articles" className="group inline-flex items-center font-semibold text-accentBlue">More articles <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" /></Link></div>
        </article>
      </div>
    </main>
  );
}

export default Article;
