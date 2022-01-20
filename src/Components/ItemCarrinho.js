import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
`
const Botao = styled.button`
  cursor: pointer;
  border-radius: 10px;
  background-color: lightcoral;
  color: white;
  :hover{
    opacity: .5;
  }
`
export default class ItemCarrinho extends Component {
  render() {
    return <Container>
        <span>{this.props.produto.quantidade}x</span>
        {this.props.produto.texto}
        <Botao onClick={this.props.funcao}>Remover</Botao>
    </Container>;
  }
}
