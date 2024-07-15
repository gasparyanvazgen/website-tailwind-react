// src/pages/Home.tsx

import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";

function Home() {
    return (
        <div className="text-primary bg-secondary">
            <NavBar />
            <Hero />
            <Services />
        </div>
    );
}

export default Home;