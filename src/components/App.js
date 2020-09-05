import React from 'react';
import Post from './Post';
import styled from './../App.css';

export default class App extends React.Component {
    render(){
        return(
            <div class="background gradient-overlay">
                <div class="container">
                    <h1>Oi, tudo bem?</h1>
                    <p>Seja bem vindo a minha primeira aplicação em ReactJS! Este projeto foi ensinado no canal Rocketseat com o Diego Fernandes, e dei uma incrementada no CSS para ficar com a minha cara :)</p>
                    <p>Então, aproveite!</p>
                    <Post title="Quais são as novidades?" />
                    <Post title="O que você gosta de fazer?" />
                    <Post title="Obrigada, e até a próxima!" />
                </div>
            </div>
        );
    }
}