import { Link } from 'react-router';

export function Erro() {
    return(
        <div>
            <h1>Essa página não existe: 404</h1>
            <Link to="/">HOME</Link>
        </div>
    )
}