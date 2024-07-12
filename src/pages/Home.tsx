// src/pages/Home.tsx

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

function Home() {
    const [isOpen, setIsOpen] = useState(false); // false: always closed

    const toggleMenu = () => {
        setIsOpen(!isOpen); // open the menu if closed and vise versa
    }

    return (
        <header>
            <div className="container px-5 py-5 mx-auto">
                <nav>
                    <div className="flex items-center justify-between">
                        {/* logo */}
                        <a href="/" className="text-lg font-medium italic">
                            Vazgen
                            <span className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">Dev.</span>
                        </a>
                        {/* menu button */}
                        <button onClick={toggleMenu} className="size-6">
                            {isOpen ? <XMarkIcon /> : <Bars3Icon />}
                        </button>
                    </div>

                    {/* menu */}
                    <div className={`absolute left-0 top-16 w-full overflow-hidden shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="container flex flex-col px-5 font-medium mx-auto">
                            <a href="#" className="my-5 transition duration-75 hover:opacity-50">About</a>
                            <a href="#" className="my-5 transition duration-75 hover:opacity-50">Services</a>
                            <a href="#" className="my-5 transition duration-75 hover:opacity-50">Projects</a>
                            <a href="#" className="my-5 transition duration-75 hover:opacity-50">Articles</a>
                            <a href="#" className="my-5 transition duration-75 hover:opacity-50">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Home;