import React, { Component } from 'react';
import styled from "styled-components";
import Produtos from './Produtos'

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
        Valor mínimo: <Input type="number" />
        Valor máximo: <Input type="number" />

        Busca por nome: <Input type="text" placeholder="Pesquisa" value={this.props.pesquisaNome} onChange={this.props.atualizar} />

      </ContainerFiltro>


    )
  }
}

