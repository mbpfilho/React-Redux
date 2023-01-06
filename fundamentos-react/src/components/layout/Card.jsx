import "./Card.css"
import React from "react"

export default function Card(props) {
  return (
    <div className="Card" style={{backgroundColor: props.color ||"#f33",
    borderColor: props.color ||"#f33"}}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  )
}