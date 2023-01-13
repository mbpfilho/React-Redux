/* eslint-disable import/no-anonymous-default-export */
import React from "react"

export default props=>{
  return(
    <><button onClick={props.onInc}>Incrementar</button>
    <button onClick={props.onDec}>Decrementar</button></>
  )
}