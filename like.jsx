import React, { Component, createContext } from 'react'
import FontAwesome  from "react-fontawesome";
// Input : liked : boolean
// Output : onClick event


class Like extends Component
{
    state ={}
    render() {
        const iconName = this.props.liked ? "heart" : "heart-o";
        return ( <i>
            <FontAwesome
            className="heart"
            name={iconName}
            style={{ cursor: 'pointer' }}
            size="2x"
            onClick={ this.props.onClick}
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
           </i>
           );
    }
}
export default Like;
