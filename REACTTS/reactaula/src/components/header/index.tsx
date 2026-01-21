import { Link } from 'react-router'

export function Header() {
    return(
        <header>
            <h2>Sujeito Prog</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
            </div>
        </header>
    )
}