import React from "react";

/* Questoes de envolver um codigo por uma tag: 
Maneiras:
1 - envolver por meio de tags ja conhecidas <div> 
2 - envolver por meio do React.Fragments 
3 - envolver somente por <> </> que é uma forma resumida da segunda maneira - nao permite propriedade 
*/
export default function Fragmento(props) {
    return (
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    );
}
