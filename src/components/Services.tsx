// src/components/Services.tsx

import React from "react";
import {
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

function Services() {
  const serviceItems = [
    {
      Icon: DevicePhoneMobileIcon,
      title: "Frontend Development",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, minima?",
    },
    {
      Icon: ServerIcon,
      title: "Backend Development",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, minima?",
    },
    {
      Icon: CubeTransparentIcon,
      title: "Full-Stack Development",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, minima?",
    },
    {
      Icon: DocumentTextIcon,
      title: "Software Documentation",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, minima?",
    },
  ];

  return (
    <section className="container mx-auto mb-5 px-5">
      <div className="flex flex-col items-center gap-5">
        {/* Main heading with gradient text */}
        <h5 className="bg-gradient-to-r from-accentBlueDark to-accentBlue bg-clip-text text-xl font-medium uppercase text-transparent md:text-2xl lg:text-3xl">
          Services
        </h5>

        {/* Subheading */}
        <h6 className="text-lg font-medium md:text-xl lg:text-2xl">
          What I can do for you
        </h6>

        {/* Services cards */}
        <div className="flex flex-row flex-wrap justify-center gap-5 md:justify-around">
          {/* Map over service items */}
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-5 rounded-xl p-5 hover:bg-accentBlue md:w-2/6 xl:w-1/5"
            >
              <div className="rounded-full bg-accentBlue p-5 text-secondary group-hover:bg-secondary group-hover:text-accentBlue">
                <service.Icon className="size-9" />
              </div>

              <h3 className="font-medium group-hover:text-secondary">
                {service.title}
              </h3>
              <p className="text-center text-secondaryDark group-hover:text-secondary">
                {service.intro}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
