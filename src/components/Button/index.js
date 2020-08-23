import React from 'react';
import './style.css';

const Button = (props) => {
    return(
        <button type="button" className={`clipboard__button clipboard__button-${(props.prefixClass !== undefined) ? props.prefixClass : 'default'}`}>{props.text}</button>
    )
}

export default Button;