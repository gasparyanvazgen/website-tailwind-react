// src/pages/Home.tsx

import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function Home() {
    return (
        <div className="text-primary bg-secondary">
            <NavBar />
            <Hero />
        </div>
    );
}

export default Home;