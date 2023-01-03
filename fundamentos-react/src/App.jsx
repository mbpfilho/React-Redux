import "./App.css"
import React from "react"

import Card from "./components/layout/Card"
import Aleatorio from "./components/basics/Aleatorio"
import Fragmento from "./components/basics/Fragmento"
import ComParametro from "./components/basics/ComParametro"
import Primeiro from "./components/basics/Primeiro"

export default _ =>(
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#4 - Desafio Aleatório">
        <Aleatorio min={1} max={60}/>
      </Card>

      <Card titulo="#3 - Fragmento">
        <Fragmento />
      </Card>
      
      <Card titulo="#2 - Com Parâmetro">
        <ComParametro titulo="Situacao do aluno" aluno="Pedro" nota={9.3} />
      </Card>
      
      <Card titulo="#1 - Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
