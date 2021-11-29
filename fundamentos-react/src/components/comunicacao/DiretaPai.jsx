import DiretaFilho from "./DiretaFilho";
const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho nome="Gustavo" idade={20} nerd={true} />
            <DiretaFilho nome="Lucas" idade={18} nerd={false} />
            <DiretaFilho nome="Gabriel" idade={20} nerd={true} />
        </div>
    );
};

export default DiretaPai;
