// freelance inquiry page: presents the offer and opens a pre-filled email for a backend-free contact flow.

import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  CheckCircleIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const services = [
  "Web applications",
  "Full-stack development",
  "APIs & backend systems",
  "Product improvements",
];

function Contact() {
  // use the user's mail client as a zero-backend fallback so the public form does not pretend to send data to a server.
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`);

    window.location.href = `mailto:infogasparian@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-secondary text-primary">
      <Seo
        title="Contact VazgenDev — Start a Project"
        description="Get in touch with VazgenDev about web applications, full-stack development, APIs, backend systems, and product improvements."
        path="/contact"
      />
      <header className="border-b border-gray-200/80 bg-secondary/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-5 py-5">
          <Link
            to="/"
            className="text-lg font-medium md:text-xl lg:text-2xl"
          >
            Vazgen
            <span className="bg-gradient-to-r from-accentBlue to-accentBlueLight bg-clip-text text-transparent">
              Dev.
            </span>
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-secondaryDark transition hover:text-primary"
          >
            <ArrowLongLeftIcon className="h-5 w-5 transition group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-5 py-10 md:py-16 lg:py-20">
        <section className="overflow-hidden rounded-[2rem] bg-primary text-secondary shadow-2xl shadow-gray-300/30">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden px-7 py-12 sm:px-10 md:px-14 md:py-16 lg:px-16 lg:py-20">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accentBlue/20 blur-3xl" />
              <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-secondary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-secondary/75">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Available for freelance & remote work
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlueLight">
                  Start a project
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                  Let&apos;s build something worth
                  <span className="block text-accentBlueLight">shipping.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-secondary/70 md:text-lg">
                  Tell me what you&apos;re building, where you&apos;re stuck, or what
                  you want to improve. I&apos;ll turn the idea into a clear technical
                  plan and a polished product.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-secondary/10 bg-secondary/5 p-5">
                    <ClockIcon className="h-6 w-6 text-accentBlueLight" />
                    <p className="mt-4 text-sm font-semibold">Fast communication</p>
                    <p className="mt-1 text-sm leading-6 text-secondary/60">
                      Clear updates, practical decisions, no unnecessary meetings.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-secondary/10 bg-secondary/5 p-5">
                    <CheckCircleIcon className="h-6 w-6 text-accentBlueLight" />
                    <p className="mt-4 text-sm font-semibold">Built to ship</p>
                    <p className="mt-1 text-sm leading-6 text-secondary/60">
                      Clean, maintainable work focused on real business outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-secondary/10 bg-white p-6 text-primary sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="rounded-2xl border border-gray-200 bg-secondary/60 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accentBlue">
                  Your project
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Start the conversation
                </h2>
                <p className="mt-2 text-sm leading-6 text-secondaryDark">
                  A few details are enough. I&apos;ll take it from there.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
                    <CheckCircleIcon className="h-7 w-7 text-green-600" />
                    <p className="mt-3 font-semibold text-green-900">Message ready</p>
                    <p className="mt-1 text-sm leading-6 text-green-800/80">
                      Thanks for reaching out. Your email app should open with the project details pre-filled. If it doesn&apos;t, email me directly at infogasparian@gmail.com.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm font-semibold text-green-800 underline underline-offset-4"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="flex flex-col gap-2 text-sm font-semibold">
                        Name
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 font-normal outline-none transition placeholder:text-gray-400 focus:border-accentBlue focus:ring-4 focus:ring-accentBlueLight/60"
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-semibold">
                        Email
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 font-normal outline-none transition placeholder:text-gray-400 focus:border-accentBlue focus:ring-4 focus:ring-accentBlueLight/60"
                        />
                      </label>
                    </div>

                    <label className="flex flex-col gap-2 text-sm font-semibold">
                      What can I help with?
                      <textarea
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell me about your project, goals, timeline, or the problem you want to solve..."
                        className="resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 font-normal leading-6 outline-none transition placeholder:text-gray-400 focus:border-accentBlue focus:ring-4 focus:ring-accentBlueLight/60"
                      />
                    </label>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center rounded-xl bg-accentBlue px-6 py-3.5 font-semibold text-secondary transition hover:bg-accentBlueDark hover:shadow-lg hover:shadow-accentBlue/20"
                    >
                      Send project inquiry
                      <ArrowLongRightIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-xs leading-5 text-secondaryDark">
                      No commitment. Just a focused conversation about your project.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <EnvelopeIcon className="h-6 w-6 text-accentBlue" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-secondaryDark">
              Email
            </p>
            <p className="mt-1 font-medium">infogasparian@gmail.com</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <MapPinIcon className="h-6 w-6 text-accentBlue" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-secondaryDark">
              Working style
            </p>
            <p className="mt-1 font-medium">Remote · Worldwide</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <CheckCircleIcon className="h-6 w-6 text-accentBlue" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-secondaryDark">
              Best fit
            </p>
            <p className="mt-1 font-medium">Web &amp; software projects</p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm md:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accentBlue">
                What I can help with
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                From idea to reliable product.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-sm font-medium"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accentBlueLight text-accentBlue">
                    <CheckCircleIcon className="h-4 w-4" />
                  </span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
