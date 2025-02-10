import Logo from '../shared/Logo';
import Menu from './shared/Menu';

export default function Layout(props: any) {
  return (
    <div className="flex bg-zinc-900 min-h-screen">
      <aside>
        <Logo />
        <Menu />
      </aside>
      <div>
        <header></header>
        <main> {props.children}</main>
      </div>
    </div>
  );
}
