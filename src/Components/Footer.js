import React, { Component } from "react";
import styled from "styled-components";

const Rodape = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  color: red;  
`
const Grupo = styled.div`
  font-size: 10px;
`

export default class Footer extends Component {
  render() {
    return (
      <Rodape>
        <p>Labenu</p>
        <p>Turma Moreira 2021</p>
        <Grupo>
          <ul>
            <li>Claudia</li>
            <li>Jacqueline</li>
            <li>Osmar</li>
            <li>Sergio</li>
          </ul>
        </Grupo>
      </Rodape>
    );
  }
}
