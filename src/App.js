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
   min-height: 100vh;
 `
const ContainerMain = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100vw;
  background-image: url(${imagemDeFundo});
  flex-grow: 1;
`
class App extends React.Component {
  state = {
    listaDoCarrinho: [],

    pesquisaNome: "",

    valorMinimo: "",

    valorMaximo: "",

    ordem: 'crescente',

    compraFinalizada: false
  };

  atualizarPesquisa = (e) => {
    this.setState({ pesquisaNome: e.target.value })

  }

  buscaMinimo = (e) => {
    this.setState({ valorMinimo: e.target.value })

    console.log(this.state.pesquisaNome)

  }
  componentDidMount = () => {
    this.setState({listaFiltrada: Itens});
    const lista = localStorage.getItem("listaDoCarrinho")
    this.setState({listaDoCarrinho: JSON.parse(lista) || []})
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.pesquisaNome !== this.state.pesquisaNome) {
      const novaLista = Itens.filter((item) => {
        return item.Nome.toLowerCase().includes(this.state.pesquisaNome.toLowerCase())
      })
      this.setState({ listaFiltrada: novaLista })
    }
    localStorage.setItem("listaDoCarrinho", JSON.stringify(this.state.listaDoCarrinho))
  };


  buscaMaximo = (e) => {
    this.setState({ valorMaximo: e.target.value })
  }

  // adicionarCarrinho = (id) => {
  //   const novoItem = this.state.listaItens.filter((item) => {
  //     return id === item.id
  //   })


  //   const itemTransformado = {
  //     id: novoItem.id,
  //     quantidade: 1,
  //     texto: novoItem.Nome,
  //     preco: novoItem.Valor
  //   }
  //   this.setState({ listaDoCarrinho: [...this.state.listaDoCarrinho, itemTransformado] })
  //   console.log("Adicionando")
  // }

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
    this.setState({compraFinalizada: false})
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

  zerarCarrinho = ()=>{
    this.setState({listaDoCarrinho: []})
    this.setState({compraFinalizada: true})
  }

  onChangeOrdenacao = (event) => {
    this.setState({ordem: event.target.value})
  }

  render() {
    let listaOrdenada
    if (this.state.ordem === 'crescente'){
      listaOrdenada = this.state.listaFiltrada.sort((a,b)=>{return a.Valor-b.Valor})
    }else if(this.state.ordem === 'decrescente'){
      listaOrdenada = this.state.listaFiltrada.sort((a,b)=>{return b.Valor-a.Valor})
    }
    return (
      <Container className="App">
        <Header/>
        <ContainerMain>
          <Filtros 
            atualizarPesquisa={this.atualizarPesquisa}
            buscaPorNome={this.state.pesquisaNome} 
            buscaPorValorMinimo={this.state.valorMinimo} 
            buscaMinimo={this.buscaMinimo} 
            buscaPorValorMaximo={this.state.valorMaximo} 
            buscaMaximo={this.buscaMaximo}/>
          <Produtos
            funcao={this.adicionarCarrinho}
            listaImagem={listaOrdenada}
            ordem={this.state.ordem}
            onChangeOrdem={this.onChangeOrdenacao}
            buscaNome={this.state.pesquisaNome}
            buscaValorMinimo={this.state.valorMinimo}
            buscaValorMaximo={this.state.valorMaximo}/>
          <Carrinhos
            funcao={this.apagarItemCarrinho}
            listaDeCompras={this.state.listaDoCarrinho}
            funcaoFinalizar={this.zerarCarrinho}
            compra={this.state.compraFinalizada} />
        </ContainerMain>
        <Footer />
      </Container>
    );
  }
}
export default App;
