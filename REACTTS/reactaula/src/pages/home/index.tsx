import { Link } from 'react-router'


export function Home() {
    return(
        <div>
            <h1>Bem vindo a página home</h1>
            <span>Essa é mina primeira pagina</span>
            <br/>

            <Link to="/sobre">AAA</Link>
            <Link to="/contato">BBB</Link>
        </div>
    )
}