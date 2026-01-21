import { useState } from 'react'

export default function App() {
  const [nome, setNome] = useState("")
  const [anoNasc, setAnoNasc] = useState("");
  const [idade, setIdade] = useState<number>();

  function getIdade() {
    const anoAtual = new Date().getFullYear();
    setIdade(anoAtual - Number(anoNasc))
  }

  return (
    <div>
      <h1>Descubra sua idade</h1>
      <div>
        <label>Digite seu nome:</label>
        <input type="text" value={nome} onChange={ (e) => { setNome(e.target.value) } }/>
        <label>Digite seu ano de nascimento:</label>
        <input type="number" value={anoNasc} onChange={ (e) => { setAnoNasc(e.target.value) } } />

        <button onClick={getIdade}>Descobrir idade</button>
      </div>

      {idade && <h1>{nome} tem {idade} anos</h1>}

    </div>
  )
}