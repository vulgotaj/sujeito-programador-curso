import { useParams } from 'react-router-dom';

function Produto() {

    const { id } = useParams();

    return (
        <div>
            <h1>Meu produto é { id }</h1>
            <p>PAGINA DO PRODUTO</p>
        </div>
    )
}

export default Produto;