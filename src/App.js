import React from "react";
import styled from "styled-components";
import "./App.css";
import Carrinhos from "./Components/Carrinhos";
import Filtros from "./Components/Filtros";
import Produtos from "./Components/Produtos";

 const Container = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 10px;
   width: 100vw;
 `
function App() {
  return (
    <Container className="App">

      <Filtros />
      <Produtos />
      <Carrinhos />
    </Container>
  );
}

export default App;
