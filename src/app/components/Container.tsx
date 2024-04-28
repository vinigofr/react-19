'use client';

import { ReactNode, useContext } from "react";
import { GenericContext } from "../contexts/GenericContext";

const Container = ({ children }: { children: ReactNode }) => {
  const { showContent, toggle} = useContext(GenericContext);

  return (
    <div>
      {showContent && children}
      <br />
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Container;