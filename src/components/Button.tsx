// src/components/Button.tsx

import React from "react";
import ComponentProps from "../interfaces/ComponentProps";

function Button({ content, classNames, onClick }: ComponentProps) {
  return (
    <button
      className={`rounded-full bg-blue-500 px-8 py-3 text-base font-semibold text-white drop-shadow-lg duration-300 ease-in-out hover:bg-blue-400 ${classNames}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;
