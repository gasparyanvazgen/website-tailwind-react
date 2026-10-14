// public landing page - temporary under development mode with notify signup

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Seo from "../components/Seo";
import githubIcon from "../assets/icons/github-icon-1-logo-svgrepo-com.svg";
import linkedinIcon from "../assets/icons/linkedin-icon-2-logo-svgrepo-com.svg";
import gmailIcon from "../assets/icons/gmail-svgrepo-com.svg";

const socialItems = [
  { name: "GitHub", icon: githubIcon, link: "https://github.com/gasparyanvazgen" },
  { name: "LinkedIn", icon: linkedinIcon, link: "https://linkedin.com/in/vazgen-gasparyan" },
  { name: "Email", icon: gmailIcon, link: "mailto:infogasparian@gmail.com" },
];

function Home() {
  const [state, handleSubmit] = useForm("xppzznlk");

  return (
    <div className="min-h-screen bg-primary text-white flex flex-col justify-between px-6 py-10">
      <Seo
        title="Vazgen Gasparyan — Under Development"
        description="The portfolio website of Vazgen Gasparyan is currently under development. Check back soon for updates."
        path="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Vazgen Gasparyan",
            url: "https://gasparyanvazgen.github.io/",
            jobTitle: "Software Developer & Freelance Engineer",
            sameAs: [
              "https://github.com/gasparyanvazgen",
              "https://linkedin.com/in/vazgen-gasparyan",
            ],
          },
        ]}
      />

      {/* Top Spacer */}
      <div />

      {/* Main Content */}
      <main className="max-w-xl mx-auto w-full text-center my-auto py-12">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Under Development
        </div>

        {/* Main Headline with Accent Gradient */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
          Something new is{" "}
          <span className="text-accentBlueLight">
            coming soon.
          </span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-neutral-300/90 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto font-normal">
          I am currently rebuilding my website to share new projects and experiences. Leave your email below to get notified when it goes live.
        </p>

        {/* Formspree Email Form */}
        <div className="mb-10 max-w-md mx-auto">
          {state.succeeded ? (
            <div className="rounded-xl border border-green-500/30 bg-green-500/15 p-4 text-green-400 text-sm font-medium shadow-sm flex items-center justify-center gap-2">
              <span className="text-base">✓</span> Thank you! I will notify you as soon as the site is ready.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="hidden"
                name="subject"
                value="New Website Launch Notification Request"
              />
              <input
                type="hidden"
                name="message"
                value="This user subscribed to be notified when your new website launches."
              />

              <div className="relative flex-1">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-400 outline-none transition focus:border-accentBlue focus:ring-2 focus:ring-accentBlue/30"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-left text-xs text-red-400"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-xl bg-accentBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-accentBlueDark disabled:opacity-50 shrink-0 shadow-lg shadow-accentBlue/20"
              >
                {state.submitting ? "Submitting..." : "Notify Me"}
              </button>
            </form>
          )}
        </div>

        {/* Social & Contact Icons */}
        <div className="flex justify-center items-center gap-3">
          {socialItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-accentBlue hover:border-accentBlue"
            >
              <img
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="w-full"
              />
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto w-full text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Vazgen Dev. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;