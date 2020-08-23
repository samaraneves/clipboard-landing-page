import React from 'react';

const Links = props => {
    return (
        <a href={props.href}>
            {props.item}
            {props.children}
        </a>
    )
}

export default Links;