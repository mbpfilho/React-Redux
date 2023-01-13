import "./Contador.css"
import React,{Component} from "react"

import Display from "./Display"
import Buttons from "./Buttons"
import PassoForm from "./PassoForm"

export default class Contador extends Component{

  state={
    numero: this.props.numeroInicial||0,
    passo: this.props.passoInicial||1
  }

  inc=()=>{
    this.setState({
      numero: this.state.numero+this.state.passo
    })
  }
  dec=()=>{
    this.setState({
      numero: this.state.numero-this.state.passo
    })
  }

  setPasso=(novoPasso)=>{
    this.setState({
      passo: novoPasso
    })
  }

  render(){
    return(
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Buttons onInc={this.inc} onDec={this.dec} />
      </div>
    )
  }
}