import React, { Component } from 'react';
import styled from "styled-components";

const ContainerFiltro = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid white;
  width: 20vw;
  /* height: 80vh; */
  /* margin-left: 10px; */
  padding-left: 10px;
  color: white;
`

const Input = styled.input`
  margin-bottom: 20px;
`


export default class Filtros extends Component {
  // state = {
  //   // pesquisaNome: "",
  // }

  // atualizarPesquisa = (e) => {
  //   this.setState({ pesquisaNome: e.target.value })
  // }

  render() {

    // const listaFiltrada = this.props.listaImagem.filter((item) => {
    //   return item.Nome.includes(this.state.pesquisaNome)
    // })

    return (



      <ContainerFiltro>
        <h3>Filtros</h3>
        Valor mínimo: <Input type="number" onChange={this.props.buscaMinimo} value={this.props.buscaPorValorMinimo} />
        Valor máximo: <Input type="number" onChange={this.props.buscaMaximo} value={this.props.buscaPorValorMaximo} />

        Busca por nome: <Input type="text" placeholder="Pesquisa" value={this.props.pesquisaNome} onChange={this.props.atualizar} />

      </ContainerFiltro>


    )
  }
}
