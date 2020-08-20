import React from 'react';

const Button = (props) => {
    return(
        <div className="clipboard__button-container">
            <button type="button" className={props.class}>{props.content}</button>
        </div>
    )
}

export default Button;