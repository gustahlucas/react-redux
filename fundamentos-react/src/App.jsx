import "./App.css";
import React from "react";

import Primeiro from "./components/basics/Primeiro";
import ComParamentro from "./components/basics/ComParamentro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";

export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card title="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                </Card>
                <Card title="#07 - Tabela Produtos" color="#ff432e">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card title="#06 - Repeticao" color="#ff4c65">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card title="#05 - Componentes com Filhos" color="#00c8f8">
                    <Familia lastName="Silva">
                        <FamiliaMembro name="Gustavo" />
                        <FamiliaMembro name="Pedro" />
                        <FamiliaMembro name="Ana" />
                    </Familia>
                </Card>
                <Card title="#04 - Desafios Aleatorios" color="#fa6900">
                    <Aleatorio min={10} max={100} />
                </Card>

                <Card title="#03 - Fragmentos" color="#e94c6f">
                    <Fragmento />
                </Card>

                <Card title="#02 - Com Paramentro" color="#e8b71a">
                    <ComParamentro
                        titulo="Situação do Aluno"
                        aluno="Gustavo Lucas "
                        nota={5.8}
                    />
                </Card>
                <Card title="#01 - Primeiro Componente" color="#588c73">
                    <Primeiro />
                </Card>
            </div>
        </div>
    );
}
