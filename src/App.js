import React from "react";
import styled from "styled-components";
import "./App.css";
import Carrinhos from "./Components/Carrinhos";
import Filtros from "./Components/Filtros";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import { Itens } from "./Data/Itens";
import imagemDeFundo from './imgCamiseta/universo.jpg'

const Container = styled.div`
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   width: 100vw;
 `
const ContainerMain = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-image: url(${imagemDeFundo});
`

class App extends React.Component {
  state = {
    listaDoCarrinho: [],

    pesquisaNome: "",

    listaFiltrada: [],

  };

  atualizarPesquisa = (e) => {
    this.setState({ pesquisaNome: e.target.value })
    console.log(this.state.pesquisaNome)
  }
  componentDidMount = () => {
    this.setState({listaFiltrada: Itens});
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.pesquisaNome !== this.state.pesquisaNome) {
      const novaLista = Itens.filter((item) => {
        return item.Nome.toLowerCase().includes(this.state.pesquisaNome.toLowerCase())
      })
      this.setState({ listaFiltrada: novaLista })
    }
  };

  adicionarCarrinho = (id) => {
    const novoItem = Itens.filter((item) => {
      return id === item.id
    })
    const itemTransformado = {
      id: novoItem[0].id,
      quantidade: 1,
      texto: novoItem[0].Nome,
      preco: novoItem[0].Valor
    }
    const novaLista = this.state.listaDoCarrinho.map((item)=>{
      if(item.id===itemTransformado.id){
        return {...item, quantidade: item.quantidade+1}
      } else {
        return item
      }
    })
    const aux = this.state.listaDoCarrinho.filter((item) => {
      return id === item.id
    })
    if (aux.length !== 0){
      this.setState({listaDoCarrinho: novaLista})
    } else{
      this.setState({ listaDoCarrinho: [...this.state.listaDoCarrinho, itemTransformado] })
    }
    console.log("Adicionando")
  }

  apagarItemCarrinho = (id) => {
    const novaLista = this.state.listaDoCarrinho.map((item)=>{
      if(item.id===id){
        return {...item, quantidade: item.quantidade-1}
      }else{
        return item
      }
    })
    const listaAtualizada = novaLista.filter((item) => {
      return item.quantidade>0
    })
    this.setState({listaDoCarrinho: listaAtualizada})
  }

  render() {
    return (
      <Container className="App">
        <Header/>
        <ContainerMain>
          <Filtros atualizar={this.atualizarPesquisa} listaImagem={Itens} />
          <Produtos funcao={this.adicionarCarrinho} listaImagem={this.state.listaFiltrada} />
          <Carrinhos funcao={this.apagarItemCarrinho} listaDeCompras={this.state.listaDoCarrinho} />
        </ContainerMain>
        <Footer />
      </Container>
    );
  }
}

export default App;
