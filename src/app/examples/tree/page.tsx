import Copyright from '@/app/components/Copyright';
import FancyText from '@/app/components/FancyText';
import PhraseGenerator from '@/app/components/PhraseGerenator';

export default function Tree() {
  return (
    <>
      <FancyText text="Mostrador de frases JS" />
      <br />
      <PhraseGenerator> {/*client component*/}
        <Copyright year={2024} /> {/*server component*/}
      </PhraseGenerator>
    </>
  );
}

