import { Link } from 'react-router-dom';

function Contato() {
  return (
    <div>
      <h1>Bem vindo a página de CONTATO!</h1>
      <Link to="/">Home</Link> 
      <Link to="/sobre">Sobre</Link> 
    </div>
  );
}

export default Contato;
