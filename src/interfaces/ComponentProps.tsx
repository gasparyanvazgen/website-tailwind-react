// props shared by the small reusable Button component.

import type { ReactNode } from "react";

interface ComponentProps {
  content: ReactNode;
  classNames?: string;
  onClick?: () => void;
}

export default ComponentProps;
