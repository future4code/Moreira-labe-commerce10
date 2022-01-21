import React, { Component } from "react";
import styled from "styled-components";
import logoMarca from "../imgCamiseta/LogoMarca1.jpeg";

const Cabeca = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  img {
        height: 100%;
      };
  background-color: black;
`;

export default class Header extends Component {
  render() {
    return (
      <Cabeca>
        <img src={logoMarca} />
      </Cabeca>
    );
  }
}
