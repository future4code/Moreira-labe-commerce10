import React from "react";
import styled from "styled-components";
import "./App.css";
import Carrinhos from "./Components/Carrinhos";
import Filtros from "./Components/Filtros";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import Imgs from "./imgCamiseta/Astronauta.jpg";
import Imgs1 from "./imgCamiseta/Estampada.jpg";
import Imgs2 from "./imgCamiseta/Nasa.jpg";
import Imgs3 from "./imgCamiseta/Nave.jpg";
import Imgs4 from "./imgCamiseta/OnibusEspacial.jpg";
import Imgs5 from "./imgCamiseta/SistemaSolar.jpg";

const Container = styled.div`
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   width: 100vw;
 `
const ContainerMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`

class App extends React.Component {
  state = {
    listaItens: [
      {
        id: 1,
        Nome: "Astronauta",
        Valor: 29.90,
        img: Imgs,
      },
      {
        id: 2,
        Nome: "Estampada",
        Valor: 29.90,
        img: Imgs1,
      },
      {
        id: 3,
        Nome: "Nasa",
        Valor: 89.90,
        img: Imgs2,
      },
      {
        id: 4,
        Nome: "Nave",
        Valor: 89.90,
        img: Imgs3,
      },
      {
        id: 5,
        Nome: "Onibus Espacial",
        Valor: 39.90,
        img: Imgs4,
      },
      {
        id: 6,
        Nome: "Sistema Solar",
        Valor: 39.90,
        img: Imgs5,
      },
    ],
    listaDoCarrinho: [],

    pesquisaNome: "",

    listaFiltrada: [],

  };

  atualizarPesquisa = (e) => {
    this.setState({ pesquisaNome: e.target.value })
    console.log(this.state.pesquisaNome);
    const novaLista = this.props.listaImagem.filter((item) => {

      return item.Nome.includes(this.state.pesquisaNome)
    })
    this.setState({ listaFiltrada: novaLista })
  }

  adicionarCarrinho = (id) => {
    const novoItem = this.state.listaItens.filter((item) => {
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
          <Filtros atualizar={this.atualizarPesquisa} listaImagem={this.state.listaItens} />
          <Produtos funcao={this.adicionarCarrinho} listaImagem={this.state.listaItens} />
          <Carrinhos funcao={this.apagarItemCarrinho} listaDeCompras={this.state.listaDoCarrinho} />
        </ContainerMain>
        <Footer />
      </Container>
    );
  }
}

export default App;
