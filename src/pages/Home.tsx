// public landing page composed from the portfolio sections.
// the hash effect makes navbar/footer section links work both from Home and from other routes.

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Articles from "../components/Articles";
import AboutMe from "../components/AboutMe";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // wait for the target section to render before calculating its position.
    const frame = window.requestAnimationFrame(() => {
      const element = document.querySelector(hash);
      if (!element) return;

      const headerOffset = 84;
      const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div id="main-content" className="bg-primary text-primary">
      <Seo
        title="VazgenDev — Software Developer & Freelance Engineer"
        description="VazgenDev is the portfolio of Vazgen Gasparian, a software developer focused on full-stack development, backend systems, APIs, databases, and modern web experiences."
        path="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Vazgen Gasparian",
            url: "https://gasparyanvazgen.github.io/",
            jobTitle: "Software Developer & Freelance Engineer",
            sameAs: [
              "https://github.com/gasparyanvazgen",
              "https://linkedin.com/in/vazgen-gasparyan",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "VazgenDev",
            url: "https://gasparyanvazgen.github.io/",
            description: "Software developer portfolio for Vazgen Gasparian.",
          },
        ]}
      />
      
      <NavBar />

      <main>
        <Hero />
        <Services />
        <TechStack />
        {/* <Projects />
        <Articles /> */}
        <AboutMe />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
