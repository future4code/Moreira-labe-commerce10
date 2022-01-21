import React, { Component } from "react";
import styled from "styled-components";

const Home = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  height: 190px;
  background-color: white;
  h4 {
    margin: 2px;
  }
  width: 150px;
  img {
    width: 100%;
    height: 60%;
    box-shadow: 2px 2px 5px gray;
    :hover{
      transition: transform .5s ease;
      transform: scale(1.5);
    }
  }
  button {
    cursor: pointer;
    border-radius: 10px;
    background-color: red;
    color: white;
    :hover{
      opacity: .5;
    }
  }
`;

export default class CardProduto extends Component {
  render() {
    return (
      <Home>
        <img src={this.props.item.img} />
        <h4>{this.props.item.Nome}</h4>
        <h4>R$ {this.props.item.Valor.toFixed(2).toString().replace(".", ",")}</h4>
        <button onClick={()=>this.props.adicionarCarrinho(this.props.item.id)}>Adicionar</button>
      </Home>
    );
  }
}
