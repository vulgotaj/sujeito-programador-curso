import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png';

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Siga os bons e aprenda com eles",
        "O bom-senso vale mais que conhecimento",
        "Tudo na vida depende do quanto"
      ]
    },
    {
      id: 2.,
      nome: "Bom dia",
      frases: [
        "Bom dia seu Armando",
        "Acordar e dar bom dia, amém",
        "Dia lindo"
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setTextoFrase(`" ${allFrases[categoriaSelecionada].frases[numeroAleatorio]} "`)
  }

  return (
      <div className="container">
        <img
          alt="Logo frases"
          src={logoImg}
          className="logo"
        />

        <h2 className="title">Categorias</h2>
        <section className="category-area">
          {allFrases.map( (item, index) => (
            <button 
            key={item.id} 
            className="category-button" 
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}

            onClick={ () => handleSwitchCategory(index) }
            >
              {item.nome}
            </button>
          ))}
        </section>

        <button onClick={gerarFrase} className="button-frase">Gerar frase</button>

        {textoFrase !== '' && <p className="textoFrase">{textoFrase}</p> }
  
      </div>
  )
}

export default App
