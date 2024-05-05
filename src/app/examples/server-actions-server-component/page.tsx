import Button from "../../components/Button";
import { readFile as readFileFunc } from '../../../../functions';

export default async function ServerActionsServerComponent() {
  async function readFile() {
    'use server';

    await readFileFunc();
  };

  return <Button onClick={readFile} />
}