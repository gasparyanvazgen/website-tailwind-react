// src/components/Services.tsx

import React from "react";
import {
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

function Services() {
  return (
    <section className="container mx-auto mb-5 px-5">
      <div className="flex flex-col items-center justify-start gap-5">
        <h6 className="bg-gradient-to-r from-accentBlueDark to-accentBlue bg-clip-text text-xl font-medium uppercase text-transparent md:text-2xl lg:text-3xl">
          services
        </h6>

        <h6 className="text-lg font-medium md:text-xl lg:text-2xl">
          What I can do for you
        </h6>

        <div className="flex flex-row flex-wrap justify-center gap-5 md:justify-around">
          <div className="group flex flex-col items-center gap-5 rounded-xl p-5 hover:bg-accentBlue md:w-2/6 xl:w-1/5">
            <div className="rounded-full bg-accentBlue p-5 text-secondary group-hover:bg-secondary group-hover:text-accentBlue">
              <DevicePhoneMobileIcon className="size-9" />
            </div>

            <h3 className="font-medium group-hover:text-secondary">
              Frontend Development
            </h3>
            <p className="text-center text-secondaryDark group-hover:text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              minima?
            </p>
          </div>

          <div className="group flex flex-col items-center gap-5 rounded-xl p-5 hover:bg-accentBlue md:w-2/6 xl:w-1/5">
            <div className="rounded-full bg-accentBlue p-5 text-secondary group-hover:bg-secondary group-hover:text-accentBlue">
              <ServerIcon className="size-9" />
            </div>

            <h3 className="font-medium group-hover:text-secondary">
              Backend Development
            </h3>
            <p className="text-center text-secondaryDark group-hover:text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              minima?
            </p>
          </div>

          <div className="group flex flex-col items-center gap-5 rounded-xl p-5 hover:bg-accentBlue md:w-2/6 xl:w-1/5">
            <div className="rounded-full bg-accentBlue p-5 text-secondary group-hover:bg-secondary group-hover:text-accentBlue">
              <CubeTransparentIcon className="size-9" />
            </div>

            <h3 className="font-medium group-hover:text-secondary">
              Full-Stack Development
            </h3>
            <p className="text-center text-secondaryDark group-hover:text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              minima?
            </p>
          </div>

          <div className="group flex flex-col items-center gap-5 rounded-xl p-5 hover:bg-accentBlue md:w-2/6 xl:w-1/5">
            <div className="rounded-full bg-accentBlue p-5 text-secondary group-hover:bg-secondary group-hover:text-accentBlue">
              <DocumentTextIcon className="size-9" />
            </div>

            <h3 className="font-medium group-hover:text-secondary">
              Software Documentation
            </h3>
            <p className="text-center text-secondaryDark group-hover:text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              minima?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
