'use server';
import path from "path";
import fs from 'fs';

const
  FILE_NAME = 'file.txt',
  TEXT_ERROR = 'error to read file';


export async function readFile() {
  fs.readFile(
    path.join(__dirname, '../../../../../', FILE_NAME),
    { encoding: 'utf-8' },
    (err, data) => {
      if (err) {
        console.log(err);

        return TEXT_ERROR;
      }

      console.log(`This is the ${FILE_NAME} content: ${data}`);
    });
}

export async function getGreetings(name: string): Promise<{
  error: string | null,
  message: string,
}> {
  if (!name.trim()) {
    return { error: 'name is required', message: '' }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ error: null, message: `Hello ${name}` })
    }, 5000);
  });
}

export async function getGreetingsFormData(
  _currentState: any,
  formData: FormData,
): Promise<{
  error: string | null,
  message: string,
}> {
  const name = formData.get('name')?.toString() || '';

  if (!name.trim()) {
    return { error: 'name is required', message: '' }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ error: null, message: `Hello ${name}` })
    }, 1000);
  });
}

let value = 0;
export async function incrementNumber() {
  console.log({ value })
  value++;
  return value;
}