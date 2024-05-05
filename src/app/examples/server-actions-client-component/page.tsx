'use client';

import { readFile } from '../../../../serverActions';

export default function ServerActionClientComponent() {
  return <button onClick={() => { readFile() }}>some button</button>
}