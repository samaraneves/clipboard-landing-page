import React from 'react';
import './style.css';



const SectionContet = props => {
    return (
        <section className={`clipboard__section ${(props.classe !== undefined) ? props.classe : ''}`}>
            <h2 className="clipboard__section-title">{props.title}</h2>
            <p className="clipboard__section-paragraph">{props.content}</p>
            {props.children}
        </section>
    )
}

export default SectionContet;