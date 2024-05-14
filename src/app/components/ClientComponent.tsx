import { useEffect } from "react";

export default function ClientComponent() {
  useEffect(() => {
    window.alert('I\'m a client component')
  }, []);

  return <p>Hello again</p>
}