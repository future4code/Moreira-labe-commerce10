import React, { Component } from 'react';
import styled from 'styled-components';

const Rodape = styled.div`
  display: flex;
  justify-content: center;
  
`

export default class Footer extends Component {
  render() {
    return(
     <Rodape>
       <h1>React 2021</h1>
     </Rodape>
    )
  }
}
