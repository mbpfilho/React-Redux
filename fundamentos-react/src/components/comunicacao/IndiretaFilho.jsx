/* eslint-disable import/no-anonymous-default-export */
import React from "react"

export default props=>{
  const gerarIdade=()=>parseInt(Math.random()*20)+50
  const gerarNerd=()=>Math.random()>.5
  return(
    <div>
      <div>Filho</div>
      <button onClick={_=>props.quandoClicar("Joao",gerarIdade(),gerarNerd)}>
        Fornecer informacoes
      </button>
    </div>
  )
}