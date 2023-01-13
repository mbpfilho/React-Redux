/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from "react"



export default props=>{
  
  let [resultado,setResultado]=useState([])

    
  function gerarNumeros(qtdd){
    let numeros=[]
    let c=0;
    let numero

    while(c<qtdd){
      numero=Math.floor(Math.random()*59+1)
      if(!numeros.includes(numero)){
        numeros.push(numero)
        c++
      }
    }
    numeros.sort((a,b)=>{
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    });
    return numeros
  }

  function quandoMudar(e){
    setResultado(gerarNumeros(+e.target.value))
    console.log(resultado)
  }


  return(
    <div>
      <div>
        <label htmlFor="numero">Quantos números quer? </label>
        <input type="number" name="" id="numero" onChange={quandoMudar}/>
      </div>
      <p>Resultado: {resultado.toString()} </p>
    </div>
  )
}