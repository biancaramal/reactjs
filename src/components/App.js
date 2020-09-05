import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <h1>Olá Mundo!</h1>
                <Post title="Quais são as novidades?" />
                <Post title="O que você gosta de fazer?" />
                <Post title="Obrigada, e até a próxima!" />
            </div>
        );
    }
}