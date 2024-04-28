'use client';

import { createContext, ReactNode, useState } from "react";

interface GenericContextInterface {
  showContent: boolean;
  toggle: () => void;
}

export const GenericContext = createContext({} as GenericContextInterface);

export const GenericProvider = ({ children }: {children: ReactNode} ) => {
  const [showContent, setShowContent] = useState(true);

  const toggle = () => {
    setShowContent((oldState) => !oldState);
  }

  return (
    <GenericContext.Provider value={{toggle, showContent}}>
      {children}
    </GenericContext.Provider>
  );
};