import Botao from '@/app/shared/Botao';

export default function Principal() {
  return (
    <div className="flex flex-col justify-center items-center h-[450px] gap-10 text-center">
      <h1 className="font-black text-6xl leading-[85px] bg-clip-text text-transparent bg-gradient-to-br from-zinc-200 to-zinc-400">
        Landing Page com Next.js
      </h1>
      <h2 className="text-zinc-500 w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus
        iusto fuga eveniet, corporis, quis saepe doloribus non eos eum nulla
        adipisci dolor ducimus ipsa magnam rerum nemo dolore recusandae.
      </h2>
      <div className="flex gap-3">
        <Botao url="/home" destacado maior>
          Iniciar aqui
        </Botao>
        <Botao url="/home" maior>
          Sobre nós
        </Botao>
      </div>
    </div>
  );
}
