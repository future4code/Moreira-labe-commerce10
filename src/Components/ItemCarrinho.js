import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`

export default class ItemCarrinho extends Component {
  render() {
    return <Container>
        <span>{this.props.produto.quantidade}x</span>
        {this.props.produto.texto}
        <button onClick={this.props.funcao}>Remover</button>
    </Container>;
  }
}
