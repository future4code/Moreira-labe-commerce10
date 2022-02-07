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

  render() {
    const filtrarProduto = () => {
      let produtoFinal = [...this.props.listaImagem]
      if (this.props.buscaNome) {
        produtoFinal = produtoFinal.filter((item) => {
          if (item.Nome.toLowerCase().includes(this.props.buscaNome.toLowerCase())) {
            return item
          }
        })
      }
      if (this.props.buscaValorMinimo) {
        produtoFinal = produtoFinal.filter((item) => {
          if (item.Valor >= this.props.buscaValorMinimo) {
            return item
          }
        })
      }

      if (this.props.buscaValorMaximo) {
        produtoFinal = produtoFinal.filter((item) => {
          if (item.Valor <= this.props.buscaValorMaximo) {
            return item
          }
        })
      }


      return produtoFinal.map((nome) => {
        return (
          <CardProduto adicionarCarrinho={this.props.funcao} item={nome} />
        );
      });
    }

    const listaFinal = filtrarProduto()
    const quantidadeDeProdutos = listaFinal.length

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
        <CardContainer>{listaFinal}</CardContainer>
      </Container>
    );
  }
}

export default Produtos;
