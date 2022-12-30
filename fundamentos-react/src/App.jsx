import React from "react"

import Primeiro from "./components/basics/Primeiro"
import ComParametro from "./components/basics/ComParametro"
import Fragmento from "./components/basics/Fragmento"

export default _ =>(
  <div id="app">
    <h1>Fundamentos React</h1>
    <Fragmento />
    <ComParametro titulo="Situacao do aluno" aluno="Pedro" nota={9.3} />
    <ComParametro titulo="Situacao do aluno" aluno="Maria" nota={9.9} />
    <Primeiro></Primeiro>
  </div>
);
