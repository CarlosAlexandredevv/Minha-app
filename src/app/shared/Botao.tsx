import Link from 'next/link';

export interface BotaoProps {
  url?: string;
  onClick?: () => void;
  destacado?: boolean;
  children: React.ReactNode;
}

export default function Botao(props: BotaoProps) {
  function renderizarBotao() {
    return (
      <button
        className={`${
          props.destacado
            ? 'bg-zinc-100 text-black hover:bg-zinc-200'
            : 'bg-black text-zinc-400 hover:border-zinc-400'
        } border border-zinc-600  rounded-lg px-4 py-2`}
      >
        {props.children}
      </button>
    );
  }

  return props.url ? (
    <Link href={props.url}>{renderizarBotao()}</Link>
  ) : (
    renderizarBotao()
  );
}
