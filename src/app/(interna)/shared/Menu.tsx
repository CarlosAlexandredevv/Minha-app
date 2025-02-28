'use client';

import {
  IconArrowsJoin,
  IconBug,
  IconLayoutDashboard,
  IconLoader,
  IconRoute,
  IconRoute2,
} from '@tabler/icons-react';
import MenuItem from './MenuItem';
import MenuGrupo from './MenuGrupo';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const url = usePathname();
  return (
    <nav className="flex flex-col gap-3">
      <MenuItem
        url="/home"
        texto="Início"
        icone={<IconLayoutDashboard />}
        selecionado={url === '/home'}
      />
      <MenuGrupo titulo="Exercícios">
        <MenuItem
          url="/loading"
          texto="Loading"
          icone={<IconLoader />}
          selecionado={url === '/loading'}
        />
        <MenuItem
          url="/erro"
          texto="Erro"
          icone={<IconBug />}
          selecionado={url === '/erro'}
        />
        <MenuItem
          url="/dinamica/blog/abc"
          texto="Rota Dinamica #1"
          icone={<IconRoute />}
          selecionado={url === '/dinamica/blog/abc'}
        />
        <MenuItem
          url="/dinamica/curso/react/config-ambiente/123"
          texto="Rota Dinamica #2"
          icone={<IconRoute2 />}
          selecionado={url === '/dinamica/curso/abc'}
        />{' '}
        <MenuItem
          url="/paralelas"
          texto="Rotas Paralelas"
          icone={<IconArrowsJoin />}
          selecionado={url === '/dinamica/curso/abc'}
        />
      </MenuGrupo>
    </nav>
  );
}
