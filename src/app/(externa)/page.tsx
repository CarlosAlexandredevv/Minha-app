import Principal from './landing/Principal';
import Titulo from './shared/Titulo';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Principal />
      <Titulo
        texto="Nossos Recursos"
        legenda="Lorem ipsum dolor sit amet, consectetur "
      />
    </div>
  );
}
