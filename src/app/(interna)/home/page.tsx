import Titulo from '../shared/Titulo';

export default function Page() {
  return (
    <div>
      <Titulo
        texto="Área do Aluno"
        legenda="Lista de todos os exercícios implementados"
      />
      <div className="py-10">Pagina interna</div>
    </div>
  );
}
