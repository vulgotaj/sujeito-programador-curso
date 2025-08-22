import { useState } from 'react';

import Nome from './components/Nome';

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador');

  function handleChangeName(nome) {
    setAluno(nome);
  }

  return(
    <div>
      <h1 className="">Componente App</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleChangeName('Felipe Tajima') }>
        Mudar Nome
      </button>

  
    </div>
  );
}

export default App;
