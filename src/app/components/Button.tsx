'use client';

export default function Button({ onClick }: any) {
  return <button type="button" onClick={(e) => onClick()}>Click me</button>
}