import "./App.css"
import React from "react"

import Familia from "./components/basics/Familia"
import Card from "./components/layout/Card"
import Aleatorio from "./components/basics/Aleatorio"
import Fragmento from "./components/basics/Fragmento"
import ComParametro from "./components/basics/ComParametro"
import Primeiro from "./components/basics/Primeiro"

export default function App(){
  return(
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#5 - Componente com Filhos" color="#ffcc5c ">
          <Familia sobrenome="Ferreira"/>
        </Card>

        <Card titulo="#4 - Desafio Aleatório" color="#96ceb4 ">
          <Aleatorio min={1} max={60}/>
        </Card>

        <Card titulo="#3 - Fragmento" color="#ffeead ">
          <Fragmento />
        </Card>
        
        <Card titulo="#2 - Com Parâmetro" color="#ff6f69 ">
          <ComParametro titulo="Situacao do aluno" aluno="Pedro" nota={9.3} />
        </Card>
        
        <Card titulo="#1 - Primeiro Componente" color="#88d8b0">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  )
};
