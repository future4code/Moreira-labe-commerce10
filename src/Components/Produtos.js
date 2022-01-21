import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";

const CardContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  flex-grow: .9;
`
const Cabecalho = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
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

    const quantidadeDeProdutos = this.props.listaImagem.length

    return (
      <Container>
        <Cabecalho>
          <span>Quantidade de produtos: {quantidadeDeProdutos}</span>
          <h3>Produtos</h3>
          <span>
            <label htmlFor="">Ordenação:</label>
            <select value={this.props.ordem} onChange={this.props.onChangeOrdem}>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
          </span>
        </Cabecalho>
        <CardContainer>{apareceImagem}</CardContainer>
      </Container>
    );
  }
}

export default Produtos;
