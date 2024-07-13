// src/components/NavBar.tsx

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false); // false: always closed

    const toggleMenu = () => {
        setIsOpen(!isOpen); // open the menu if closed and vise versa
    }

    return (
        <header className="bg-secondary">
            <div className="container px-5 py-5 mx-auto">
                <nav>
                    <div className="flex items-center justify-between">
                        {/* logo */}
                        <a href="/" className="text-lg font-medium italic">
                            Vazgen
                            <span className="bg-gradient-to-r from-accentBlue to-accentBlueLight bg-clip-text text-transparent">Dev.</span>
                        </a>
                        {/* menu button */}
                        <button onClick={toggleMenu} className="size-6 md:hidden">
                            {isOpen ? <XMarkIcon /> : <Bars3Icon />}
                        </button>
                    

                        {/* menu */}
                        <div className={`bg-secondary absolute left-0 top-16 w-full overflow-hidden shadow-lg ${isOpen ? 'block' : 'hidden'} md:flex md:relative md:top-0 md:shadow-none`}>
                            <div className="container flex flex-col px-5 font-medium mx-auto md:flex-row md:justify-end">
                                <a href="#" className="my-5 transition duration-75 hover:opacity-50 md:mx-5">About</a>
                                <a href="#" className="my-5 transition duration-75 hover:opacity-50 md:mx-5">Services</a>
                                <a href="#" className="my-5 transition duration-75 hover:opacity-50 md:mx-5">Projects</a>
                                <a href="#" className="my-5 transition duration-75 hover:opacity-50 md:mx-5">Articles</a>
                                <a href="#" className="my-5 transition duration-75 hover:opacity-50 md:mx-5">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;