'use client';

import { ReactNode, useState } from "react";

const Expandable = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => {
    setExpanded((oldState) => !oldState);
  };

  return (
    <div>
      <button onClick={toggleExpand}>Toggle</button>
      <br />
      {expanded && children}
    </div>
  )
}

export default Expandable;