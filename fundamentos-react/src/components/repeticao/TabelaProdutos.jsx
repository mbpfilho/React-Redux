/* eslint-disable import/no-anonymous-default-export */
import "./TabelaProdutos.css"
import React from "react"
import produtos from "../../data/produtos";

export default props=>{
  const produtosLista=produtos.map((produto,i)=>{
    return (
      <tr key={produto.id} className={i%2==0?"Par":""}>
        <td>{produto.id}</td><td>{produto.nome}</td><td>R$ {produto.preco.toFixed(2).replace(".",",")}</td>
      </tr>
    )
  })
  return(
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Nome</th><th>Preco</th>
          </tr>
        </thead>

        <tbody>
          {produtosLista}
        </tbody>
        </table>
    </div>
  )
}