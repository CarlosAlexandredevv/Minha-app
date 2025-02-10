import Logo from '../shared/Logo';
import Cabecalho from './shared/Cabecalho';
import Menu from './shared/Menu';

export default function Layout(props: any) {
  return (
    <div className="flex bg-zinc-900 min-h-screen">
      <aside className="bg-black w-72 p-7 flex flex-col gap-10">
        <Logo />
        <Menu />
      </aside>
      <div className="flex flex-col flex-1">
        <Cabecalho />
        <main className="flex-1 p-7">{props.children}</main>
      </div>
    </div>
  );
}
