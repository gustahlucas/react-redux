export default function Aleatorio(props) {
    const valueRondom = Math.floor(
        Math.random() * (Math.floor(props.max) - Math.ceil(props.min)) +
            Math.ceil(props.min)
    );
    return (
        <>
            <h2>
                Numero aleatorio:
                <p>{valueRondom} </p>
            </h2>
        </>
    );
}
