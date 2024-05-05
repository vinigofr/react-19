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