// src/components/Hero.tsx

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import avatar from "../assets/images/avatar.png";

function Hero() {
  return (
    <section className="container mx-auto mb-5 px-5">
      <div className="flex flex-col items-center sm:flex-row sm:gap-5">
        {/* Left column */}
        <div className="flex flex-col gap-5 py-5">
          {/* Main headline */}
          <h1 className="text-4xl font-medium lg:text-6xl xl:text-7xl">
            {/* Gradient text effect */}
            <span className="bg-gradient-to-r from-accentBlue to-accentBlueLight bg-clip-text text-transparent">
              I develop fullstack
            </span>{" "}
            sit amet consectetur adipisicing elit.
          </h1>

          {/* Subheadline */}
          <p className="text-secondaryDark lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            cupiditate aliquam assumenda voluptatem corrupti sapiente et beatae
            ad accusantium repellendus?
          </p>

          {/* Buttons section */}
          <div className="flex flex-col items-start gap-5 text-lg font-medium lg:flex-row lg:gap-5 xl:text-xl">
            <button className="rounded-full bg-accentBlue px-7 py-2 text-secondary transition duration-300 hover:bg-accentBlueDark hover:ring-2 hover:ease-in-out">
              Get In Touch
            </button>
            <button className="group flex items-center rounded-full px-3 py-2 text-primary">
              Download CV{" "}
              <ArrowLongRightIcon className="ml-1 inline h-6 w-6 text-primary transition duration-300 group-hover:translate-x-3" />
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="flex w-full justify-center overflow-hidden rounded-avatar bg-accentBlueLight px-10 pt-10">
          <img
            src={avatar}
            alt="#"
            className="w-full transition duration-1000 sm:hover:scale-110 lg:hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
