import { IconMenu2 } from '@tabler/icons-react';
import MenuUsuario from './MenuUsuario';

export default function Cabecalho() {
  return (
    <header className="flex items-center justify-between px-7 h-20 bg-zinc-950">
      <IconMenu2 className="text-zinc-400 hover:text-zinc-200 cursor-pointer duration-300" />
      <MenuUsuario
        nome="Usuário Mock"
        email="usuario@zmail.com"
        imagem="https://picsum.photos/70/70?grayscale"
      />
    </header>
  );
}
