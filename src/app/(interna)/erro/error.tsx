'use client';

import { IconMoodSadSquint } from '@tabler/icons-react';

export default function ErroPersonalisado() {
  return (
    <div className="flex flex-col items-center justify-center">
      <IconMoodSadSquint size={150} stroke={1} className="text-red-500" />
      <h1 className="text-4xl font-black">Ops... ocorreu um erro!</h1>
      <h2 className="text-lg text-zinc-500">Agora é sentar e chorar !</h2>
    </div>
  );
}
