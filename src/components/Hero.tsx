// src/components/Hero.tsx

import React from "react";

function Hero() {
  return (
    <section className="container">
      <div className="flex items-center justify-between flex-col">
        <h1 className="text-4xl font-medium">
          <span className="bg-gradient-to-r from-accentBlue to-accentBlueLight bg-clip-text text-transparent">
            Lorem ipsum dolor
          </span>
          sit amet consectetur adipisicing elit.
        </h1>

        <button className="bg-blue-400">click me</button>
      </div>
    </section>
  );
}

export default Hero;
