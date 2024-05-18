
'use client';

import { useState, useTransition } from 'react';
import { incrementNumber } from '../../../../serverActions';

export default function CountButton() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const onClick = () => {
    startTransition(async () => {
      const currentCount = await incrementNumber();
      setCount(currentCount);
    });
  };

  return (
    <>
      <p>Total Count: {count}</p>
      <button onClick={onClick} disabled={isPending}>Count</button>
    </>
  );
}