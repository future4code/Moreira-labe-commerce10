import React from "react";
import styled from "styled-components";
import Imgs from "../imgCamiseta/Astronauta.jpg";
import Imgs1 from "../imgCamiseta/Estampada.jpg";
import Imgs2 from "../imgCamiseta/Nasa.jpg";
import Imgs3 from "../imgCamiseta/Nave.jpg";
import Imgs4 from "../imgCamiseta/OnibusEspacial.jpg";
import Imgs5 from "../imgCamiseta/SistemaSolar.jpg";
import CardProduto from "./CardProduto";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`
const Container = styled.div`
  flex-grow: 1;
  
`

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
  };
  width: 150px;
img{
  width: 100%;
  
}

`;
class Produtos extends React.Component {  

  adicionarCarrinho = () => {
    this.setState({
      Nome: this.state.Nome,
      Valor: this.state.Valor,
      img: this.state.img,
    });
  };

  render() {
    const apareceImagem = this.props.listaImagem.map((nome) => {
      return (
        <CardProduto adicionarCarrinho={this.props.funcao} item={nome} />
      );
    });

    return (
      <Container>
        <h3>Produtos</h3>
        <CardContainer>{apareceImagem}</CardContainer>
      </Container>
    );
  }
}

export default Produtos;
