import { useState } from "react";

export default async function About() {
  const [state, setState] = useState();

  return (
    <div>
      <h1>This component won't work with hooks</h1>
    </div>
  );
}