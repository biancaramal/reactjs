import React from 'react';
import Post from './Post';
import styled from './../App.css';

export default class App extends React.Component {
    render(){
        return(
            <div class="background gradient-overlay">
                <div class="container">
                    <h1>Oi, tudo bem?</h1>
                    <p>Seja bem vindo a minha primeira aplicação em ReactJS! Este projeto foi ensinado no canal da <a href="https://www.youtube.com/watch?v=7A4UQGrFU9Q" target="_blank" title="Link para o Tutorial de ReactJS">Rocketseat</a>, mas resolvi dar uma incrementada para ficar com a minha cara :)</p>
                    <p>Então, aproveite!</p>
                    <Post title="Quais são as novidades?" />
                    <Post title="O que você gosta de fazer?" />
                    <Post title="Gostou do projeto?" />
                </div>
            </div>
        );
    }
}