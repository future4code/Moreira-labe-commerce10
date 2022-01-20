import React from "react";
import styled from "styled-components";
import Imgs from "../imgCamiseta/Astronauta.jpg";
import Imgs1 from "../imgCamiseta/Estampada.jpg";
import Imgs2 from "../imgCamiseta/Nasa.jpg";
import Imgs3 from "../imgCamiseta/Nave.jpg";
import Imgs4 from "../imgCamiseta/OnibusEspacial.jpg";
import Imgs5 from "../imgCamiseta/SistemaSolar.jpg";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`
const Container = styled.div`
  flex-grow: 1;
  
`

const Home = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  h4 {
    margin: 2px;
  };
  width: 150px;
img{
  width: 100%;
  
}

`;
class Produtos extends React.Component {
  state = {
    listaImagen: [
      {
        id: Date.now(),
        Nome: "Astronauta",
        Valor: "R$ 29,90",
        img: Imgs,
      },
      {
        id: Date.now(),
        Nome: "Estampada",
        Valor: "R$ 29,90",
        img: Imgs1,
      },
      {
        id: Date.now(),
        Nome: "Nasa",
        Valor: "R$ 89,90",
        img: Imgs2,
      },
      {
        id: Date.now(),
        Nome: "Nave",
        Valor: "R$ 89,90",
        img: Imgs3,
      },
      {
        id: Date.now(),
        Nome: "Onibus Espacial",
        Valor: "R$ 39,90",
        img: Imgs4,
      },
      {
        id: Date.now(),
        Nome: "Sistema Solar",
        Valor: "R$ 39,90",
        img: Imgs5,
      },
    ],
  };

  adicionarCarrinho = () => {
    this.setState({
      Nome: this.state.Nome,
      Valor: this.state.Valor,
      img: this.state.img,
    });
  };

  render() {
    const apareceImagem = this.state.listaImagen.map((nome) => {
      return (
        <Home>
          <img src={nome.img} />
          <h4>{nome.Nome}</h4>
          <h4>{nome.Valor}</h4>
          <button onClick={this.adicionarCarrinho}>Adicionar</button>
        </Home>
      );
    });

    return (
      <Container>
        <h3>Produtos</h3>
        <CardContainer>{apareceImagem}</CardContainer>
      </Container>
    );
  }
}

export default Produtos;
