// global footer with internal navigation and the real VazgenDev contact/social links.

import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/icons/github-icon-1-logo-svgrepo-com.svg";
import linkedinIcon from "../assets/icons/linkedin-icon-2-logo-svgrepo-com.svg";
import gmailIcon from "../assets/icons/gmail-svgrepo-com.svg";

const menuItems = [
  { name: "About", link: { pathname: "/", hash: "#about" } },
  { name: "Services", link: { pathname: "/", hash: "#services" } },
  // { name: "Projects", link: { pathname: "/", hash: "#projects" } },
  // { name: "Articles", link: { pathname: "/", hash: "#articles" } },
  { name: "Contact", link: "/contact" },
];
const socialItems = [
  { name: "GitHub", icon: githubIcon, link: "https://github.com/gasparyanvazgen" },
  { name: "LinkedIn", icon: linkedinIcon, link: "https://linkedin.com/in/vazgen-gasparyan" },
  { name: "Email", icon: gmailIcon, link: "mailto:infogasparian@gmail.com" },
];

function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="container mx-auto px-5 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link to="/" className="text-2xl font-semibold tracking-tight">Vazgen<span className="text-accentBlueLight">Dev.</span></Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-secondary/70">Full-stack development for modern products, from the first idea to the final deployment.</p>
          </div>
          <Link to="/contact" className="inline-flex w-fit items-center rounded-xl bg-accentBlue px-5 py-3 text-sm font-semibold transition hover:bg-accentBlueDark">Start a project</Link>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-secondary/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-secondary/55">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="transition hover:text-secondary"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">{socialItems.map((item) => <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.name} className="flex size-10 items-center justify-center rounded-full border border-secondary/10 bg-secondary/5 p-2 transition hover:bg-accentBlue"><img src={item.icon} alt={item.name} width={24} height={24} className="w-full" /></a>)}</div>
        </div>
        <p className="mt-8 text-xs text-secondary/70">© {new Date().getFullYear()} Vazgen Dev. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
