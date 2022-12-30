import "./index.css"
import ReactDOM from "react-dom"
import React from "react"

import Primeiro from "./components/basics/Primeiro"
import ComParametro from "./components/basics/ComParametro"
import Fragmento from "./components/basics/Fragmento"

const el=document.getElementById("root")
const tag=<strong>Olá React!!!</strong>
ReactDOM.render(
  <div>
    {tag}
    <Primeiro></Primeiro>
    <ComParametro titulo="Situacao do aluno" aluno="Pedro" nota={9.3}/>
    <ComParametro titulo="Situacao do aluno" aluno="Maria" nota={9.9}/>
    <Fragmento/>
  </div>,
  el)