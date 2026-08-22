// service grid presenting the main freelance capabilities in a consistent card system.

import React from "react";
import { CubeTransparentIcon, DevicePhoneMobileIcon, DocumentTextIcon, ServerIcon } from "@heroicons/react/24/outline";

const serviceItems = [
  { Icon: DevicePhoneMobileIcon, number: "01", title: "Frontend Development", intro: "Responsive React interfaces with thoughtful UX, clean components, and a sharp visual finish." },
  { Icon: ServerIcon, number: "02", title: "Backend Development", intro: "APIs and services designed for reliability, clear architecture, and predictable performance." },
  { Icon: CubeTransparentIcon, number: "03", title: "Full-Stack Development", intro: "One developer across the stack — from database design and APIs to the final interface." },
  { Icon: DocumentTextIcon, number: "04", title: "Product & Documentation", intro: "Practical technical documentation and product improvements that make software easier to use and maintain." },
];

function Services() {
  return (
    <section id="services" className="w-full bg-secondary text-primary">
      <div className="container mx-auto px-5 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlue">Capabilities</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">From first idea to a product people can use.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-secondaryDark md:text-right">A focused freelance setup for building, improving, and shipping modern web software.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service) => (
            <article key={service.number} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accentBlue/30 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-accentBlue text-secondary"><service.Icon className="size-6" /></div>
                <span className="text-xs font-semibold tracking-[0.18em] ttext-gray-500">{service.number}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-secondaryDark">{service.intro}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Services);
