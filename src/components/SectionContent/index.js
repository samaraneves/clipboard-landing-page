import React from 'react';
import './style.css';


const SectionContet = (props) => {
    return (
        <section class="clipboard__section-content">
            <h2 className="clipboard__section-title">{props.title}</h2>
            <p>{props.content}</p>
            {props.children}
        </section>
    )
}

export default SectionContet;