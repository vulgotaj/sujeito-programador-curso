import { Link } from 'react-router-dom';

function Erro() {
  return (
    <div>
      <h2>ESSSA PAGINA NAO EXISTE</h2>
      <Link to="/">Home</Link><br/>
      <Link to="/sobre">Sobre</Link><br/>
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Erro;
