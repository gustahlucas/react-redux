import "./ListaAlunos.css";
import alunos from "../data/alunos";

export default (props) => {
    const lis = alunos.map((aluno) => {
        return (
            <li key={aluno.id} className="ListName">
                {aluno.id}) Nome: {aluno.nome} Nota: {aluno.nota}
            </li>
        );
    });
    return (
        <div>
            <ul className="List">{lis}</ul>
        </div>
    );
};
