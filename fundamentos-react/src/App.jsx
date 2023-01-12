import "./App.css"
import React from "react"

import Input from "./components/formularios/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import Familia from "./components/basics/Familia"
import FamiliaMembro from "./components/basics/FamiliaMembro"
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
        <Card titulo="#11 - Componente Controlado (Input)" color="#88d8b0 ">
          <Input></Input>
        </Card>

        <Card titulo="#10 - Comunicacao Indireta" color="#ff6f69 ">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#9 - Comunicacao Direta" color="#ffcc5c ">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#8 - Renderizacao Condicional" color="#96ceb4 ">
          <ParOuImpar numero={3}></ParOuImpar>
          <UsuarioInfo usuario={{nome:"Fernando"}}></UsuarioInfo>
          <UsuarioInfo usuario={{}}></UsuarioInfo>
          {/* <UsuarioInfo usuario={{email:"fer@nando.com"}}></UsuarioInfo>
          <UsuarioInfo usuario={{}}></UsuarioInfo>
          <UsuarioInfo></UsuarioInfo> */}
        </Card>

        <Card titulo="#7 - Desafio Repeticao" color="#ff6f69 ">
          <table><TabelaProdutos></TabelaProdutos></table>
        </Card>

        <Card titulo="#6 - Repeticao" color="#88d8b0 ">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#5 - Componente com Filhos" color="#ffcc5c ">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Ana"/>
            <FamiliaMembro nome="Gustavo"/>
          </Familia>
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
