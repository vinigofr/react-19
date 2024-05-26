'use client';
import WaitForIt from "@/app/components/WaitForIt"
import { Suspense, useState } from "react"

export const waitForItFunc = async () => {
  const result = await fetch('https://api.github.com/users/vinigofr');
  return JSON.stringify(await result.json(), null, 2)
}

export default function UseWithPromise() {
  const [promise, setPromise] = useState<Promise<string>>()
  const [wasClicked, setWasClicked] = useState(false);

  const getMsgHandler = () => {
    setPromise(waitForItFunc())
    setWasClicked(true);
  }

  return (
    <Suspense fallback={'waiting for it... ⌚⌚⌚'}>
      {!wasClicked && <button onClick={getMsgHandler}>Get message</button>}
      {/* @ts-ignore */}
      {wasClicked && <WaitForIt promise={promise} />}
    </Suspense>
  )
}