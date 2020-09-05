import React from 'react';

export default class Comment extends React.Component{

    render(){
        return(
            <p class="comment">{ this.props.text }</p>
        );
    }
}