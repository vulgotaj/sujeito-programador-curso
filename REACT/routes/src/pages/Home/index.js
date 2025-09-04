import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem vindo a página home!</h1>

      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>

      <hr/>

      <Link to="/produto/1234">Acessar Produto 123</Link>

    </div>
  );
}

export default Home;
