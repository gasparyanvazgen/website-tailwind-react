// src/components/Heading1.tsx

import React from "react";
import ComponentProps from "../interfaces/ComponentProps";

function Heading1({ content, classNames }: ComponentProps) {
  return (
    <h1 className={`my-4 text-5xl font-bold leading-10 ${classNames}`}>
      {content}
    </h1>
  );
}

export default Heading1;
