'use client';

import { useActionState } from "react";
import { getGreetingsFormData } from "../../../../serverActions";
import getInputStyle from "@/styles/input.style";

export default function ServerActionsActionState() {
  const [state, submitAction, isPending] = useActionState(
    getGreetingsFormData, // action
    { message: '', error: null }, // initial state
  );

  return (
    <form action={submitAction}>
      <input
        type="text"
        name="name"
        disabled={isPending}
        style={getInputStyle({ isDisabledStyle: isPending })}
        placeholder="write your name and press enter"
      />
      <br />
      {state?.error && <span>Failed: {state.error}</span>}
      <br />
      {state?.message && <span>{state.message}</span>}
      <br />
      {isPending && <p>...loading</p>}
    </form>
  );
}