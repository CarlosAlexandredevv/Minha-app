import Link from 'next/link';

export interface MenuItemProps {
  url: string;
  texto: string;
  icone: any;
  selecionado?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className={`flex items-center ${
        props.selecionado ? 'text-white' : 'text-zinc-300'
      }`}
    >
      <span>{props.icone}</span>
      <span className="ml-3 text-lg">{props.texto}</span>
    </Link>
  );
}
