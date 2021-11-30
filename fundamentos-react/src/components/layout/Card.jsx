import "./Card.css";
export default function Card(props) {
    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#f00",
    };
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content"> {props.children}</div>
        </div>
    );
}
