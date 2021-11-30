import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
    const number = parseInt(num);
    if (number < 0) return -1;
    if (number === 0) return 1;
    return calcFatorial(number - 1) * number;
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(
        function () {
            setFatorial(calcFatorial(number));
        },
        [number]
    );
    useEffect(
        function () {
            if (fatorial > 1000000) {
                document.title = "Eita!! ";
            }
        },
        [fatorial]
    );

    // ex 2
    const [status, setStatus] = useState("Impar");
    useEffect(
        function () {
            setStatus(number % 2 === 0 ? "Par" : "Ímpar");
        },
        [number]
    );

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text"> Fatorial: </span>
                <span className="text red"> {fatorial} </span>
                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text"> Par ou Impar: </span>
                <span className="text red"> {status}</span>
            </div>
        </div>
    );
};

export default UseEffect;
