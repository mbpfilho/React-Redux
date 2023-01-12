/* eslint-disable import/no-anonymous-default-export */
import React from "react"

export default props=>{
  return(
    <div>
      <div>Filho</div>
      <button onClick={_=>props.quandoClicar("Joao",53,true)}>
        Fornecer informacoes
      </button>
    </div>
  )
}