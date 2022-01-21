import React, { Component } from 'react';
import styled from "styled-components";

const ContainerFiltro = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
border: 1px solid black;
width: 20vw;
height: 80vh;
margin-left: 10px;
padding-left: 10px;
`

const Input = styled.input`
margin-bottom: 20px;
`


export default class Filtros extends Component {

  render() {

    return (

      <ContainerFiltro>
        <h3>Filtros</h3>
        Valor mínimo: <Input type="number" onChange={this.props.buscaMinimo} value={this.props.buscaPorValorMinimo} />


        Valor máximo: <Input type="number" onChange={this.props.buscaMaximo} value={this.props.buscaPorValorMaximo} />

        Busca por nome: <Input type="text" placeholder="Pesquisa" value={this.props.buscaPorNome} onChange={this.props.atualizarPesquisa} />

      </ContainerFiltro>
    )
  }
}

