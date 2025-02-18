import Link from 'next/link';
import React from 'react';

export interface ExercicioProps {
  url: string;
  titulo: string;
  icone: any;
}

export default function Exercicio(props: ExercicioProps) {
  return (
    <Link
      className="flex flex-col items-center border border-zinc-700  rounded-lg overflow-hidden"
      href={props.url}
    >
      {React.cloneElement(props.icone, { size: 64, stroke: 1 })}
      <h3 className="bg-black w-full p-5 text-center">{props.titulo}</h3>
    </Link>
  );
}
