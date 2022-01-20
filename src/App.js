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
   display: flex;
   justify-content: space-between;
   margin: 10px;
   width: 100vw;
 `
class App extends React.Component {
  state = {
    listaItens: [
      {
        id: Date.now(),
        Nome: "Astronauta",
        Valor: 29.90,
        img: Imgs,
      },
      {
        id: Date.now(),
        Nome: "Estampada",
        Valor: 29.90,
        img: Imgs1,
      },
      {
        id: Date.now(),
        Nome: "Nasa",
        Valor: 89.90,
        img: Imgs2,
      },
      {
        id: Date.now(),
        Nome: "Nave",
        Valor: 89.90,
        img: Imgs3,
      },
      {
        id: Date.now(),
        Nome: "Onibus Espacial",
        Valor: 39.90,
        img: Imgs4,
      },
      {
        id: Date.now(),
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

    // const listaFiltrada = this.props.listaImagem.filter((item) => {
    //   return item.Nome.includes(this.state.pesquisaNome)
    // })

    const itemTransformado = {
      id: novoItem.id,
      quantidade: 1,
      texto: novoItem.Nome,
      preco: novoItem.Valor
    }
    this.setState({ listaDoCarrinho: [...this.state.listaDoCarrinho, itemTransformado] })
    console.log("Adicionando")
  }

  render() {

    return (
      <Container className="App">
        <Header />

        <Filtros atualizar={this.atualizarPesquisa} listaImagem={this.state.listaItens} />
        <Produtos funcao={this.adicionarCarrinho} listaImagem={this.state.listaFiltrada} />
        <Carrinhos listaDeCompras={this.state.listaDoCarrinho} />

        <Footer />
      </Container>
    );
  }
}

export default App;
