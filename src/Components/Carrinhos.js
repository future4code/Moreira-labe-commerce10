import React from 'react';
import styled from 'styled-components';
import ItemCarrinho from './ItemCarrinho';
import iconeCar from '../imgCamiseta/carrinho.png'

const Container = styled.div`
  border-left: 1px solid white;
  width: 15vw;
  padding: 10px;
  text-align: left;
  color: white;
  font-weight: bold;
`
const IconeTexto = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  img{
    height: 100%;
    margin-right: 10px;
  }
  span{
    margin-left: 5px;
  }
`
const ContainerBotao = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const Botao = styled.button`
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  color: red;
  :hover{
    transition: transform .5s ease;
    transform: scale(1.5);
  }
`

export default class Carrinhos extends React.Component {

  render() {
    const renderizarLista = this.props.listaDeCompras.map((item)=>{
      return <ItemCarrinho produto={item} funcao={()=>{this.props.funcao(item.id)}}/>
    })

    const total = this.props.listaDeCompras.reduce(
      ((total,item)=>{return total+(item.quantidade*item.preco)}),0)
    
    const totalDeitens = this.props.listaDeCompras.reduce(
      ((total,item)=>{return total+item.quantidade}),0)


    return (
    <Container>
        <IconeTexto>
          <img src={iconeCar} />
          <h3>Carrrinho</h3>
          <span>{totalDeitens}</span>
        </IconeTexto>
        {renderizarLista}
        {total!==0&&<p>
          Valor total: R${total.toFixed(2).toString().replace(".", ",")}
          <ContainerBotao><Botao>Finalizar Compra</Botao></ContainerBotao>
          </p>}
    </Container>
    )
  }
}
