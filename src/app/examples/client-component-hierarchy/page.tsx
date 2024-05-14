'use client';

import ClientComponent from "@/app/components/ClientComponent";

export default function ClientComponentHierarchy() {
  return (
    <h1>
      Hello
      <ClientComponent />
    </h1>
  );
}