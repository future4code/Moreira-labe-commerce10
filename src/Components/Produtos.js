import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Container = styled.div`
  width: 60vw;
`


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
