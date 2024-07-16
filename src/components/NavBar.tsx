// src/components/NavBar.tsx

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // false: always closed

  const toggleMenu = () => {
    setIsOpen(!isOpen); // open the menu if closed and vise versa
  };

  const menuItems = [
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Articles", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <header className="bg-secondary">
      <div className="container mx-auto px-5 py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-lg font-medium italic md:text-xl lg:text-2xl"
          >
            Vazgen
            {/* Gradient text effect */}
            <span className="bg-gradient-to-r from-accentBlue to-accentBlueLight bg-clip-text text-transparent">
              Dev.
            </span>
          </a>

          {/* Menu button */}
          <button onClick={toggleMenu} className="size-6 sm:size-7 md:hidden">
            {isOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>

          {/* Menu */}
          <div
            className={`absolute left-0 top-16 w-full overflow-hidden bg-secondary shadow-lg ${isOpen ? "block" : "hidden"} md:relative md:top-0 md:flex md:shadow-none`}
          >
            <div className="container mx-auto flex flex-col px-5 font-medium md:flex-row md:justify-end">
              {/* Map over menu items */}
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="my-5 transition duration-75 hover:text-secondaryDark md:mx-5"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
