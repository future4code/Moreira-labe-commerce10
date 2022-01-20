import React, { Component } from "react";
import styled from "styled-components";
import Imgs from "../imgCamiseta/Astronauta.jpg";
import Imgs1 from "../imgCamiseta/Estampada.jpg";
import Imgs2 from "../imgCamiseta/Nasa.jpg";
import Imgs3 from "../imgCamiseta/Nave.jpg";
import Imgs4 from "../imgCamiseta/OnibusEspacial.jpg";
import Imgs5 from "../imgCamiseta/SistemaSolar.jpg";

const Home = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  h4 {
    margin: 2px;
  }
  width: 150px;
  img {
    width: 100%;
  }
`;

export default class CardProduto extends Component {
  render() {
    return (
      <Home>
        <img src={this.props.item.img} />
        <h4>{this.props.item.Nome}</h4>
        <h4>R$ {this.props.item.Valor.toFixed(2).toString().replace(".", ",")}</h4>
        <button onClick={this.props.adicionarCarrinho}>Adicionar</button>
      </Home>
    );
  }
}
