/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from "react"
import "./Input.css"

export default props=>{

  const [valor,setValor]=useState("Inicial")

  function quandoMudar(e){
    setValor(e.target.value)
  }

  return[
    <div className="Input">
      <h2>{valor}</h2>
      <div className="Inputs">
        <input value={valor} type="text" onChange={quandoMudar} />
        <input value={valor} type="text" readOnly />
        <input value={undefined} type="text" /> {/*componente näo controlado*/}
      </div>
    </div>
  ]
}