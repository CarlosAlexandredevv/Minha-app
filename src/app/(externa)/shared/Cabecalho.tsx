import Logo from '@/app/shared/Logo';

export default function Cabecalho() {
  return (
    <header className="flex justify-center items-center h-[64px] fixed top-0 left-0 right-0 border-b border-zinc-800 bg-black opacity-80 backdrop-blur-sm">
      <div className="flex items-center w-[1400px] h-full gap-12">
        <Logo />
      </div>
    </header>
  );
}
