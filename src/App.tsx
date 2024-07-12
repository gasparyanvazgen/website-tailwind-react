// src/App.tsx

import React from "react";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Button Clicked!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Button content="Get In Touch"/>
    </div>
  );
}

export default App;
