import React from "react"

export default (props)=>{
  let min = Math.ceil(props.min);
  let max = Math.floor(props.max);
  return Math.floor(Math.random() * (max - min) + min);
}