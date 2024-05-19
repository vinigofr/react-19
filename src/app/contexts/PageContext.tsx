'use client';

import {
  createContext,
  useState,
  ReactNode,
  Context,
} from "react";

type contextType = Context<
  {
    theme: string,
    setTheme: Function
  }
>

const PageContext: contextType = createContext({
  theme: '',
  setTheme: new Function,
});

function PageContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('dark');

  return <PageContext.Provider value={{ theme, setTheme }}>
    {children}
  </PageContext.Provider>
}

export {
  PageContextProvider,
  PageContext
}