import { useState } from "react";

export default function ServerComponentError() {
  const [state, setState] = useState();

  return (
    <div>
      <h1>This component won't work with hooks</h1>
    </div>
  );
}