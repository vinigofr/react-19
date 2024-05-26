import { use } from "react";

export default function WaitForIt({ promise }: { promise: Promise<string> }) {
  const content = use(promise);

  return (
    <div>
      <p>Here is the content:</p>
      <pre>{content}</pre>
    </div>
  )
}