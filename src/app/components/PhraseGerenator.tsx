'use client';

import { useState } from 'react';
import FancyText from './FancyText';
import phraseList from '../../../phrases';


export default function PhraseGenerator({ children }: any) {
  const [index, setIndex] = useState(0);
  const quote = phraseList[index];
  const next = () => setIndex((index + 1) % phraseList.length);

  return (
    <>
      <p>Sua frase motivacional é:</p>
      <FancyText text={quote} />
      <button onClick={next}>Mostre-me outra</button>
      {children}
    </>
  );
}
