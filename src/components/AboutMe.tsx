// about section: combines the personal introduction with experience and education timelines.

import React from "react";
import avatar from "../assets/images/avatar.webp";

const experience = [
  { title: "Full-Stack Developer", place: "Freelance", period: "2023 — Present" },
  { title: "Frontend Developer Intern", place: "Local Tech Startup", period: "2022 — 2023" },
];
const education = [
  { title: "B.S. in Computer Science", place: "State University", period: "2019 — 2023" },
  { title: "Full-Stack Web Development", place: "Online Bootcamp", period: "2021" },
];

function AboutMe() {
  return (
    <section id="about" className="w-full bg-primary text-secondary">
      <div className="container mx-auto px-5 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-4 rounded-[2rem] bg-accentBlue/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-secondary/10 bg-secondary/5 p-5">
              <div className="overflow-hidden rounded-[1.5rem] bg-accentBlueLight px-8 pt-8"><img src={avatar} alt="Portrait of Vazgen" width={1256} height={1516} loading="lazy" className="w-full" /></div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlueLight">About me</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">A developer who cares about both the product and the code.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-secondary/60 md:text-lg">I&apos;m a full-stack developer who enjoys turning ideas into fast, reliable products. I care about clean architecture, thoughtful UX, and shipping software that actually helps people.</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary/50">My approach is simple: understand the problem, keep the solution focused, communicate clearly, and build something that is easy to improve later.</p>
          </div>
        </div>

        <div className="mt-20 border-t border-secondary/10 pt-12 md:mt-28 md:pt-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentBlueLight">Experience</p>
              <div className="mt-6 space-y-3">{experience.map((item) => <div key={item.title} className="rounded-2xl border border-secondary/10 bg-secondary/5 p-5"><p className="font-semibold">{item.title}</p><p className="mt-1 text-sm text-secondary/50">{item.place} · {item.period}</p></div>)}</div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentBlueLight">Education</p>
              <div className="mt-6 space-y-3">{education.map((item) => <div key={item.title} className="rounded-2xl border border-secondary/10 bg-secondary/5 p-5"><p className="font-semibold">{item.title}</p><p className="mt-1 text-sm text-secondary/50">{item.place} · {item.period}</p></div>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(AboutMe);
