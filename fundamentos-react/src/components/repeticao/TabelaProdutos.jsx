import produtos from "../data/produtos";
import "./TabelaProdutos.css";
export default function TabelaProdutos() {
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? "Par" : ""}>
                    <td>{produto.id}</td>
                    <td className="Nome">{produto.nome}</td>
                    <td className="Preco">
                        R${produto.preco.toFixed(2).replace(".", ",")}
                    </td>
                </tr>
            );
        });
    }
    return (
        <div className="TabelaProdutos">
            <table border="0.2">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>{getLinhas()}</tbody>
            </table>
        </div>
    );
}
