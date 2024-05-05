'use client';

import { useState, useTransition } from "react";
import { getGreetings } from "../../../../serverActions";
import getInputStyle from "@/styles/input.style";

export default function ServerActionsFormActionProp() {
  const [isPending, startTransition] = useTransition();
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState('');

  const submitAction = (formData: FormData) => {
    const name = formData.get('name')?.toString() || '';

    startTransition(async () => {
      const response = await getGreetings(name);
      if (response.error) {
        setError(response.error);
        setGreeting('');
      } else {
        setGreeting(response.message);
      }
    });
  };

  return (
    <form action={submitAction}>
      <input
        style={getInputStyle({ isDisabledStyle: isPending })}
        type="text"
        name="name"
        disabled={isPending}
        placeholder="write your name and press enter"
      />
      <br />
      {error && <span>Failed: {error}</span>}
      <br />
      {greeting && <span>{greeting}</span>}
      <br />
      {isPending && <p>...loading</p>}
    </form>
  )
}