// src/interfaces/ComponentProps.ts

interface ComponentProps {
  content: string | JSX.Element;
  classNames?: string; // optional
  onClick?: () => void; // optional
}

export default ComponentProps;
