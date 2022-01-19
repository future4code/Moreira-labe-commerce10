import React from "react";
import styled from "styled-components";

class Produtos extends React.Component {

state = {
    listaImagen: [
        {
            id: Date.now(),
            Nome: 'Astronauta',
            Valor: 'R$ 29,90',
            img: '../imgCamiseta/Astronauta.jpg'
        },
        {
            id: Date.now(),
            Nome: 'Estampada',
            Valor: 'R$ 29,90',
            img: '../imgCamiseta/Estampada.jpg.jpg'
        },
        {
            id: Date.now(),
            Nome: 'Nasa',
            Valor: 'R$ 89,90',
            img: '../imgCamiseta/Nasa.jpg'
        },
        {
            id: Date.now(),
            Nome: 'Nave',
            Valor: 'R$ 89,90',
            img: '../imgCamiseta/Nave.jpg'
        },
        {
            id: Date.now(),
            Nome: 'Onibus Espacial',
            Valor: 'R$ 39,90',
            img: '../imgCamiseta/OnibusEspacial.jpg.jpg'
        },
        {
            id: Date.now(),
            Nome: 'Sistema Solar',
            Valor: 'R$ 39,90',
            img: '../imgCamiseta/SistemaSolar.jpg'
        }

    ]
}
render(){

    return(
        <div>
            <h3>Produtos</h3>
            <button>Adicionar</button>
        </div>
    )

}

}

export default Produtos;