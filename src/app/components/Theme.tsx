'use client';

import { use } from "react"
import { PageContext } from "../contexts/PageContext"

export default function Theme() {
  const pageContext = use(PageContext);

  const backgroundMapping = pageContext.theme === 'dark' ? 'black' : 'white';
  const buttonColorMapping = pageContext.theme === 'dark' ? 'white' : 'black';

  return (
    <div style={{ background: backgroundMapping, display: 'flex', flexDirection: 'column' }}>
      <button
        onClick={() => pageContext.setTheme('dark')}
        style={{ color: buttonColorMapping }}
      >
        Dark mode
      </button>
      <br />

      <button
        onClick={() => pageContext.setTheme('white')}
        style={{ color: buttonColorMapping }}

      >
        White mode
      </button>
    </div >
  )
}