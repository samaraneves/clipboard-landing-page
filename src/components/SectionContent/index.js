import React from 'react';
import Image from '../Image'
import './style.css';



const SectionContet = props => {
    return (
        <section className={`clipboard__section-content ${(props.classe !== undefined) ? props.classe : ''}`}>
            <Image/>
            <h2 className="clipboard__section-title">{props.title}</h2>
            <p className="clipboard__section-paragraph">{props.content}</p>
            {props.children}
        </section>
    )
}

export default SectionContet;