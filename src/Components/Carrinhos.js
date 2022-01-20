import React from 'react';
import styled from 'styled-components';
import ItemCarrinho from './ItemCarrinho';

const Container = styled.div`
  border: 1px solid black;
  width: 250px;
  padding: 10px;
  text-align: left;
`


export default class Carrinhos extends React.Component {
  state = {
    listaDoCarrinho: [
      {
        id: 1,
        quantidade: 2,
        texto: 'Produto1',
        preco: 22
      },
      {
        id: Date.now(),
        quantidade: 1,
        texto: 'Produto2',
        preco: 20
      }
    ]
  }

  apagarItem = (id) => {
    const novaLista = this.state.listaDoCarrinho.filter((item)=>{
      return id !== item.id
    })
    this.setState({listaDoCarrinho: novaLista})
  }

  render() {
    const renderizarLista = this.state.listaDoCarrinho.map((item)=>{
      return <ItemCarrinho produto={item} funcao={()=>{this.apagarItem(item.id)}}/>
    })

    const total = this.state.listaDoCarrinho.reduce(
      ((total,item)=>{return total+item.preco}),0)


    return (
    <Container>
        <h3>Carrrinho:</h3>
        {renderizarLista}
        <p>Valor total: R${total.toFixed(2).toString().replace(".", ",")}</p>
    </Container>
    )
  }
}
