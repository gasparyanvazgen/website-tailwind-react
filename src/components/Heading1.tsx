// src/components/Heading.tsx

import React from "react";
import ComponentProps from "../interfaces/ComponentProps";

function Heading({ content, classNames, onClick }: ComponentProps) {
  return (
    <h1 className={` ${classNames}`} onClick={onClick}>
      {content}
    </h1>
  );
}

export default Heading;
