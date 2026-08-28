// sticky site navigation with router-aware section links that work from every page.

import React, { useCallback, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "About", link: { pathname: "/", hash: "#about" } },
  { name: "Services", link: { pathname: "/", hash: "#services" } },
  { name: "Projects", link: { pathname: "/", hash: "#projects" } },
  // { name: "Articles", link: { pathname: "/", hash: "#articles" } },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-secondary px-4 py-2 text-primary focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-secondary/10 bg-primary/95 text-secondary backdrop-blur">
      <div className="container mx-auto px-5 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight md:text-xl lg:text-2xl">
            Vazgen<span className="text-accentBlueLight">Dev.</span>
          </Link>

          <button type="button" onClick={toggleMenu} className="size-7 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>

          <div className={`${isOpen ? "block" : "hidden"} absolute left-0 top-[65px] w-full border-b border-secondary/10 bg-primary shadow-xl md:relative md:top-0 md:block md:w-auto md:border-0 md:bg-transparent md:shadow-none`}>
            <div className="container mx-auto flex flex-col px-5 py-3 font-medium md:flex-row md:items-center md:justify-end md:gap-2 md:p-0">
              {menuItems.map((item) => (
                <Link key={item.name} to={item.link} onClick={closeMenu}
                  className="rounded-full px-4 py-2 text-secondary/75 transition hover:bg-secondary/10 hover:text-secondary">
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={closeMenu}
                className="rounded-full px-4 py-2 text-secondary/75 transition hover:bg-secondary/10 hover:text-secondary">
                Contact
              </Link>
              <Link to="/contact" onClick={closeMenu}
                className="mt-2 inline-flex w-fit rounded-full bg-accentBlue px-5 py-2.5 text-sm font-semibold text-secondary shadow-lg shadow-accentBlue/20 transition hover:bg-accentBlueDark md:ml-2 md:mt-0">
                Hire Me
              </Link>
            </div>
          </div>
        </nav>
      </div>
      </header>
    </>
  );
}

export default React.memo(NavBar);
