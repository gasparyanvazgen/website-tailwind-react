// src/components/Hero.tsx

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import avatar from "../assets/avatar.png";

function Hero() {
  return (
    <section className="container mx-auto mb-5 px-5">
      <div className="flex flex-col items-center justify-between sm:flex-row sm:gap-5">
        <div className="flex flex-col gap-5 py-5">
          <h1 className="text-4xl font-medium lg:text-6xl xl:text-7xl">
            <span className="bg-gradient-to-r from-accentBlue to-accentBlueLight bg-clip-text text-transparent">
              I develop fullstack
            </span>{" "}
            sit amet consectetur adipisicing elit.
          </h1>

          <p className="text-secondaryDark lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            cupiditate aliquam assumenda voluptatem corrupti sapiente et beatae
            ad accusantium repellendus?
          </p>

          <div className="mb-5 flex w-full flex-col items-start text-lg font-medium lg:flex-row lg:gap-5 xl:text-xl">
            <button className="mb-2 rounded-full bg-accentBlue px-7 py-2 text-secondary transition duration-300 hover:bg-accentBlueDark hover:ring-2 hover:ease-in-out">
              Get In Touch
            </button>
            <button className="group mb-5 rounded-full px-3 py-2 text-primary">
              Download CV{" "}
              <ArrowLongRightIcon className="inline size-6 pb-1 text-primary transition duration-300 group-hover:translate-x-3" />
            </button>
          </div>
        </div>

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
