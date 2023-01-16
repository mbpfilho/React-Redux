/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from "react"

export default props=>{
  
  let [resultado,setResultado]=useState([])
    
  function gerarNumeros(qtdd){
    let numeros=[]
    let c=0;
    let numero

    while(c<qtdd){
      numero=Math.floor(Math.random()*60+1)
      if(!numeros.includes(numero)){
        numeros.push(numero)
        c++
      }
    }
    numeros.sort((n1,n2)=>n1-n2);
    return numeros
  }

  return(
    <div>
      <div>
        <label htmlFor="numero">Quantos números quer? </label>
        <input type="number" name="" id="numero" min="6" max="15" onChange={e=>setResultado(gerarNumeros(+e.target.value))}/>
      </div>
      <p>Resultado: {resultado.toString()} </p>
    </div>
  )
}