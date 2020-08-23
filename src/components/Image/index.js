import React from 'react';
import './style.css';

const Image = props => {
    return (
        <img src={props.src} alt={props.alt} className={`clipboard__image ${(props.classe !== undefined) ? props.classe :  ''}`}/>
    )
}

export default Image;