import React, { Component, createContext } from 'react'
import FontAwesome  from "react-fontawesome";
// Input : liked : boolean
// Output : onClick event

const Like = (props) =>{
    const iconName = props.liked ? "heart" : "heart-o";
        return ( <i>
            <FontAwesome
            className="heart"
            name={iconName}
            style={{ cursor: 'pointer' }}
            size="2x"
            onClick={ props.onClick}
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
           </i>
           );
}
export default Like;
